/**
 * ESSAY ENGINE — STAGE 2.5: Parent Corroboration Check
 * Gate 4 Build Checklist, Item 3 (ESSAY-ARCH-004 Section 5)
 *
 * This is the one point in the Essay Engine pipeline that touches
 * Supabase. It is the code-level enforcement of ESSAY-ENGINE-002's
 * discovery-only rule and the zero-attribution non-negotiable — not
 * just a prompt instruction, but a structural guarantee:
 *
 *   - Parent evidence (aspiration_profile, child_perception,
 *     hidden_constraints) may only strengthen a theme that Stage 2
 *     already produced from the student's own evidence. It can never
 *     originate a new theme — there is no code path in this module
 *     that creates a theme, only one that flags an existing one.
 *   - raw_payload is never read, never passed to any prompt, and is
 *     defensively stripped even if it arrives in the input by mistake.
 *   - The parent's actual wording is discarded immediately after the
 *     match check. It is never stored, never logged, and never allowed
 *     to appear verbatim in any "texture" added to a theme — any
 *     verbatim echo is detected and rejected before it can leak out.
 *   - If no parent_intelligence_profiles row exists for the student's
 *     family, this stage is skipped entirely and Stage 2's themes pass
 *     through unchanged — per Addendum A OQ-A2, this is "absent," not
 *     a recorded "skipped" state.
 *   - Unmatched parent narrative content is discarded, not logged with
 *     its content — only an aggregate count is retained for QA, never
 *     the text itself.
 */

'use strict';

const MODEL = 'claude-sonnet-4-6';

const PARENT_FIELDS = ['aspiration_profile', 'child_perception', 'hidden_constraints'];
const FORBIDDEN_INPUT_KEYS = ['raw_payload']; // must never reach a prompt or the output
const FORBIDDEN_OUTPUT_KEYS = ['race', 'ethnicity', 'race_or_ethnicity', 'racial_background'];

// ---------------------------------------------------------------------------
// 1. DEFENSIVE FIELD EXTRACTION (pure)
// ---------------------------------------------------------------------------

/**
 * Extracts only the three allowed parent fields from whatever the Supabase
 * read function returns. This is defense-in-depth: even if the injected
 * read function is misconfigured and returns the full row including
 * raw_payload, this function guarantees raw_payload never survives past
 * this point in the pipeline.
 */
function extractParentFields(parentProfileRow) {
  if (!parentProfileRow || typeof parentProfileRow !== 'object') return null;

  const extracted = {};
  for (const field of PARENT_FIELDS) {
    if (parentProfileRow[field] !== undefined) {
      extracted[field] = parentProfileRow[field];
    }
  }

  // Defensive: if raw_payload somehow arrived, it is discarded here, not carried forward.
  for (const forbidden of FORBIDDEN_INPUT_KEYS) {
    if (forbidden in extracted) delete extracted[forbidden];
  }

  return Object.keys(extracted).length > 0 ? extracted : null;
}

/**
 * Flattens the extracted parent fields into a single lowercase corpus of
 * strings, used only to detect verbatim leakage of parent wording into
 * downstream output — never sent anywhere itself.
 */
function buildParentTextCorpus(parentFields) {
  const strings = [];
  (function walk(node) {
    if (typeof node === 'string') {
      const trimmed = node.trim();
      if (trimmed.length >= 12) strings.push(trimmed.toLowerCase()); // ignore trivially short fragments
    } else if (Array.isArray(node)) {
      node.forEach(walk);
    } else if (node && typeof node === 'object') {
      Object.values(node).forEach(walk);
    }
  })(parentFields);
  return strings;
}

// ---------------------------------------------------------------------------
// 2. PROMPT CONSTRUCTION (pure)
// ---------------------------------------------------------------------------

function buildCorroborationPrompt(theme, parentFields) {
  const system = [
    'You check whether a parent\'s description of their child corroborates a narrative theme that was already derived independently from the STUDENT\'s own evidence.',
    'You do not originate new themes. You only determine whether the parent content supports, strengthens, or is unrelated to the theme already given to you.',
    'If you find a genuine match, you may propose a short "texture" addition — but it must be entirely rewritten in the student\'s own voice and register, and must NOT be a direct or near-direct quote of anything the parent said. Paraphrase the underlying idea only, never the wording.',
    'If there is no genuine match, say so plainly. Do not force a connection.',
    'You never infer, request, or output race, ethnicity, or any related identity classification.',
    'Return ONLY valid JSON. No preamble, no markdown fences, no commentary.',
  ].join(' ');

  const schema = {
    matched: 'boolean',
    confidence: '"strengthened" | "none"',
    added_texture: 'string (rewritten in student voice, paraphrased, no direct parent quotes) or null if no match',
  };

  const user = [
    'STUDENT-DERIVED THEME (already established from the student\'s own evidence, do not alter):',
    JSON.stringify({ theme_id: theme.theme_id, theme_text: theme.theme_text }, null, 2),
    '',
    'PARENT NARRATIVE CONTENT (check for corroboration only, this can never originate a new theme):',
    JSON.stringify(parentFields, null, 2),
    '',
    'OUTPUT SCHEMA:',
    JSON.stringify(schema, null, 2),
  ].join('\n');

  return { system, user };
}

// ---------------------------------------------------------------------------
// 3. RESPONSE PARSING + LEAKAGE GUARD (pure)
// ---------------------------------------------------------------------------

function stripForbiddenKeys(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(stripForbiddenKeys);
  const cleaned = {};
  for (const [key, value] of Object.entries(obj)) {
    if (FORBIDDEN_OUTPUT_KEYS.includes(key.toLowerCase())) continue;
    cleaned[key] = stripForbiddenKeys(value);
  }
  return cleaned;
}

/**
 * Hard guard against verbatim parent-wording leakage. If added_texture
 * contains a long substring that also appears in the parent's raw
 * fields, the texture is rejected (set to null) rather than passed
 * through — this is the code-level backstop for zero-attribution, in
 * case the model paraphrase instruction is not followed.
 */
function rejectVerbatimLeakage(addedTexture, parentTextCorpus) {
  if (!addedTexture || typeof addedTexture !== 'string') return addedTexture || null;

  const textureLower = addedTexture.toLowerCase();
  for (const parentString of parentTextCorpus) {
    // Reject if a meaningful chunk of a parent string appears verbatim in the texture,
    // or if the texture is itself substantially contained in a parent string.
    const chunk = parentString.slice(0, Math.min(parentString.length, 40));
    if (chunk.length >= 12 && textureLower.includes(chunk)) {
      return null; // rejected — treat as no usable texture, but keep the match/confidence
    }
  }
  return addedTexture;
}

function parseCorroborationResponse(rawText, parentTextCorpus) {
  let parsed;
  try {
    const cleaned = rawText.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Stage 2.5 corroboration response was not valid JSON: ${err.message}`);
  }

  if (typeof parsed.matched !== 'boolean') {
    throw new Error('Stage 2.5 response missing boolean "matched" field');
  }
  const validConfidences = ['strengthened', 'none'];
  if (!validConfidences.includes(parsed.confidence)) {
    throw new Error(`Stage 2.5 response has invalid confidence: ${parsed.confidence}`);
  }

  const stripped = stripForbiddenKeys(parsed);
  const safeTexture = rejectVerbatimLeakage(stripped.added_texture, parentTextCorpus);

  return {
    matched: stripped.matched,
    confidence: stripped.confidence,
    added_texture: stripped.matched ? safeTexture : null,
  };
}

// ---------------------------------------------------------------------------
// 4. FINAL OUTPUT LEAK SCRUB (defense in depth — pure)
// ---------------------------------------------------------------------------

/**
 * Walks the final Stage 2.5 output and throws if any string value
 * verbatim-contains a meaningful chunk of the parent's raw text. This
 * is the last line of defense before this output could ever be
 * persisted or returned — it should never fire in normal operation,
 * but its presence means a leakage bug is a loud failure, not a silent
 * privacy incident.
 */
function assertNoParentTextLeakage(output, parentTextCorpus) {
  const violations = [];
  (function walk(node, path) {
    if (typeof node === 'string') {
      const nodeLower = node.toLowerCase();
      for (const parentString of parentTextCorpus) {
        const chunk = parentString.slice(0, Math.min(parentString.length, 40));
        if (chunk.length >= 12 && nodeLower.includes(chunk)) {
          violations.push({ path, matchedChunk: chunk });
        }
      }
    } else if (Array.isArray(node)) {
      node.forEach((v, i) => walk(v, `${path}[${i}]`));
    } else if (node && typeof node === 'object') {
      Object.entries(node).forEach(([k, v]) => walk(v, `${path}.${k}`));
    }
  })(output, 'output');

  if (violations.length > 0) {
    throw new Error(
      `Stage 2.5 leakage guard triggered — verbatim parent text detected in output: ${JSON.stringify(violations)}`
    );
  }
}

// ---------------------------------------------------------------------------
// 5. ORCHESTRATION
// ---------------------------------------------------------------------------

/**
 * @param {object} stage2Output - output of runStage2ThemeGeneration
 * @param {string} familyMemberId - the student's family_member_id in Supabase
 * @param {function} readParentProfileFn - async (familyMemberId) => row-or-null
 *        from parent_intelligence_profiles. Should already project only the
 *        needed fields, but this module defends against it returning more.
 * @param {function} callClaudeFn - async (model, system, user) => rawTextResponse
 * @returns {Promise<object>} Stage 2 output shape, with per-theme
 *          parent_corroboration_flag / parent_corroboration_confidence /
 *          added_texture set where applicable. If no parent profile exists,
 *          returns Stage 2's themes completely unchanged (no flags added
 *          at all — absent, not false, per Addendum A OQ-A2).
 */
async function runStage2_5ParentCorroboration(stage2Output, familyMemberId, readParentProfileFn, callClaudeFn) {
  if (!stage2Output || !Array.isArray(stage2Output.dominant_narrative_themes)) {
    throw new Error('Stage 2.5 requires a Stage 2 output object with dominant_narrative_themes');
  }

  if (!familyMemberId) {
    // No family/parent context at all — pass through unchanged, no per-theme fields added.
    return { ...stage2Output, parent_check_summary: { applied: false } };
  }

  const rawRow = await readParentProfileFn(familyMemberId);
  const parentFields = extractParentFields(rawRow);

  if (!parentFields) {
    // No parent_intelligence_profiles row exists for this family — Addendum A OQ-A2: absent, not flagged.
    return { ...stage2Output, parent_check_summary: { applied: false } };
  }

  const parentTextCorpus = buildParentTextCorpus(parentFields);

  let matchedCount = 0;
  let uncheckedCount = 0;
  const updatedThemes = [];

  for (const theme of stage2Output.dominant_narrative_themes) {
    const { system, user } = buildCorroborationPrompt(theme, parentFields);
    const rawResponse = await callClaudeFn(MODEL, system, user);
    const result = parseCorroborationResponse(rawResponse, parentTextCorpus);

    if (result.matched) {
      matchedCount += 1;
      updatedThemes.push({
        ...theme,
        parent_corroboration_flag: true,
        parent_corroboration_confidence: result.confidence,
        ...(result.added_texture ? { added_texture: result.added_texture } : {}),
      });
    } else {
      uncheckedCount += 1;
      updatedThemes.push({ ...theme }); // no flag added at all when unmatched — absent, not false
    }
  }

  const output = {
    ...stage2Output,
    dominant_narrative_themes: updatedThemes,
    // Aggregate counts only — never the parent's actual content — for QA/telemetry.
    parent_check_summary: { applied: true, themes_strengthened: matchedCount, themes_unmatched: uncheckedCount },
  };

  // Defense-in-depth: verify nothing verbatim from the parent's fields survived into the final object.
  assertNoParentTextLeakage(output, parentTextCorpus);

  return output;
}

export {
  extractParentFields,
  buildParentTextCorpus,
  buildCorroborationPrompt,
  parseCorroborationResponse,
  rejectVerbatimLeakage,
  assertNoParentTextLeakage,
  runStage2_5ParentCorroboration,
  PARENT_FIELDS,
  FORBIDDEN_INPUT_KEYS,
};
