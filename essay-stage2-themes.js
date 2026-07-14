/**
 * ESSAY ENGINE — STAGE 2: Narrative Theme Generation + Archetype Classification
 * Gate 4 Build Checklist, Item 2 (ESSAY-ARCH-004 Section 10)
 *
 * Takes the Stage 1 essay evidence object and produces candidate narrative
 * themes (hypotheses, not yet essay topics), each advisorily classified
 * against the 9-archetype library from the ESSAY-ENGINE-003 v1.1 redline
 * (Patch 3).
 *
 * Design rules carried forward:
 *   - Evidence-first: every theme must cite at least one piece of the
 *     student's own Stage 1 evidence. A theme with zero supporting
 *     evidence is a hard validation failure — this is the code-level
 *     enforcement of the strategy brief's "evidence-first topic
 *     generation" principle, not just a prompt instruction.
 *   - Archetype classification is advisory, not forced. A theme may match
 *     one archetype cleanly, partially match two, or match none — an
 *     unmatched theme still proceeds to Stage 3 on its own merits.
 *   - This module does not touch Supabase or Airtable. Parent
 *     corroboration (Stage 2.5) is a separate module that operates on
 *     this module's output — it is never called from here.
 *   - Prompt construction and response parsing are pure. The Claude call
 *     is injected, matching the Stage 1 module's boundary.
 *   - Race/ethnicity guard carried forward unchanged from Stage 1.
 */

'use strict';

const MODEL = 'claude-sonnet-4-6'; // per ESSAY-ARCH-004 Section 8

const ARCHETYPES = [
  {
    id: 'builder',
    label: 'The builder story',
    description: 'A student created, fixed, coded, designed, organized, or launched something.',
  },
  {
    id: 'quiet_responsibility',
    label: 'The quiet responsibility story',
    description: 'A student took care of people, routines, work, family, or community needs.',
  },
  {
    id: 'intellectual_obsession',
    label: 'The intellectual obsession story',
    description: 'A student followed a question deeply outside formal requirements.',
  },
  {
    id: 'contradiction',
    label: 'The contradiction story',
    description: 'A student contains an unusual combination — analytical but artistic, introverted but community-oriented.',
  },
  {
    id: 'values_under_pressure',
    label: 'The values-under-pressure story',
    description: 'A student made a hard choice that reveals priorities.',
  },
  {
    id: 'belonging',
    label: 'The belonging story',
    description: 'A student learned what kind of community helps them thrive.',
  },
  {
    id: 'growth_through_friction',
    label: 'The growth-through-friction story',
    description: 'A student changed after conflict, failure, discomfort, or feedback.',
  },
  {
    id: 'craft',
    label: 'The craft story',
    description: 'A student became serious about a skill through repeated practice.',
  },
  {
    id: 'lens',
    label: 'The lens story',
    description: 'A student sees the world through a unique object, habit, place, phrase, or routine.',
  },
];

const ARCHETYPE_IDS = ARCHETYPES.map((a) => a.id);
const FORBIDDEN_OUTPUT_KEYS = ['race', 'ethnicity', 'race_or_ethnicity', 'racial_background'];

// ---------------------------------------------------------------------------
// 1. PROMPT CONSTRUCTION (pure)
// ---------------------------------------------------------------------------

function buildStage2Prompt(stage1Evidence) {
  const system = [
    'You are the narrative theme generation stage of an essay-evidence pipeline for a college counseling platform.',
    'Your job is to find candidate narrative themes — hypotheses about the student, not finished essay topics — grounded ONLY in the evidence object provided.',
    'Every theme you produce must cite at least one specific item from the evidence object as its supporting_evidence_refs. Never invent a theme that is not traceable to something the student actually said.',
    'Do not assume the most impressive or "biggest achievement" evidence is the best theme. Smaller, specific moments are often stronger.',
    'After generating each theme, check it against the 9 archetypes provided. Classification is advisory: a theme may match one archetype cleanly (match_confidence: "clean"), partially resemble one or two (match_confidence: "partial"), or match none (matched_archetype: null, match_confidence: "none"). Do not force a theme into an archetype it does not fit.',
    'You never infer, request, or output race, ethnicity, or any related identity classification.',
    'Return ONLY valid JSON matching the schema. No preamble, no markdown fences, no commentary.',
  ].join(' ');

  const archetypeList = ARCHETYPES.map((a) => `- ${a.id}: ${a.label} — ${a.description}`).join('\n');

  const schema = {
    dominant_narrative_themes: [
      {
        theme_id: 'string — short slug, e.g. "midnight_rewiring"',
        theme_text: 'string — the narrative hypothesis in one or two sentences, e.g. "I learn by building things that fail first."',
        supporting_evidence_refs: ['string — must reference actual content from the evidence object, e.g. "burned motor twice", "midnight rewiring"'],
        matched_archetype: 'string (one of the archetype ids) or null',
        secondary_archetype: 'string (one of the archetype ids) or null — only if match_confidence is "partial" and a second archetype is relevant',
        archetype_match_confidence: '"clean" | "partial" | "none"',
      },
    ],
  };

  const user = [
    'STAGE 1 ESSAY EVIDENCE OBJECT:',
    JSON.stringify(stage1Evidence, null, 2),
    '',
    'ARCHETYPE LIBRARY (advisory classification only, do not force a fit):',
    archetypeList,
    '',
    'OUTPUT SCHEMA (types are descriptive, produce actual values):',
    JSON.stringify(schema, null, 2),
  ].join('\n');

  return { system, user };
}

// ---------------------------------------------------------------------------
// 2. RESPONSE PARSING + VALIDATION (pure)
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
 * Flattens every string value in the Stage 1 evidence object into a single
 * lowercase corpus, used to fuzzy-check that a theme's supporting evidence
 * refs are actually traceable to something the student said — not a
 * guarantee of semantic correctness, but a structural guard against a
 * theme citing evidence that doesn't exist anywhere in the input.
 */
function buildEvidenceCorpus(stage1Evidence) {
  const strings = [];
  (function walk(node) {
    if (typeof node === 'string') {
      strings.push(node.toLowerCase());
    } else if (Array.isArray(node)) {
      node.forEach(walk);
    } else if (node && typeof node === 'object') {
      Object.values(node).forEach(walk);
    }
  })(stage1Evidence);
  return strings.join(' \n ');
}

/**
 * Evidence-first enforcement: every theme must have at least one
 * non-empty supporting_evidence_refs entry, and at least one of those
 * refs must appear (fuzzy substring match) somewhere in the student's
 * own Stage 1 evidence. Themes that fail are dropped, not silently kept
 * — this is a hard filter, and dropped themes are reported back to the
 * caller for logging/QA rather than disappearing invisibly.
 */
function enforceEvidenceFirst(themes, stage1Evidence) {
  const corpus = buildEvidenceCorpus(stage1Evidence);
  const kept = [];
  const dropped = [];

  for (const theme of themes) {
    const refs = Array.isArray(theme.supporting_evidence_refs) ? theme.supporting_evidence_refs : [];
    const nonEmptyRefs = refs.filter((r) => typeof r === 'string' && r.trim().length > 0);

    if (nonEmptyRefs.length === 0) {
      dropped.push({ theme_id: theme.theme_id, reason: 'no supporting_evidence_refs provided' });
      continue;
    }

    const hasTraceableRef = nonEmptyRefs.some((ref) => corpus.includes(ref.toLowerCase().trim()));
    if (!hasTraceableRef) {
      dropped.push({ theme_id: theme.theme_id, reason: 'no supporting_evidence_refs traceable to Stage 1 evidence' });
      continue;
    }

    kept.push(theme);
  }

  return { kept, dropped };
}

function validateArchetypeFields(theme) {
  if (theme.matched_archetype !== null && theme.matched_archetype !== undefined && !ARCHETYPE_IDS.includes(theme.matched_archetype)) {
    throw new Error(`Theme ${theme.theme_id} has unknown matched_archetype: ${theme.matched_archetype}`);
  }
  if (theme.secondary_archetype && !ARCHETYPE_IDS.includes(theme.secondary_archetype)) {
    throw new Error(`Theme ${theme.theme_id} has unknown secondary_archetype: ${theme.secondary_archetype}`);
  }
  const validConfidences = ['clean', 'partial', 'none'];
  if (!validConfidences.includes(theme.archetype_match_confidence)) {
    throw new Error(`Theme ${theme.theme_id} has invalid archetype_match_confidence: ${theme.archetype_match_confidence}`);
  }
}

/**
 * Parses, validates, and evidence-filters the model's raw text response.
 * Returns both the surviving themes and a report of anything dropped,
 * so callers can log rejections rather than have them vanish silently
 * (mirrors the rejectedTopicsWithReasons transparency pattern used
 * downstream in Stage 4).
 */
function parseStage2Response(rawText, stage1Evidence) {
  let parsed;
  try {
    const cleaned = rawText.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Stage 2 response was not valid JSON: ${err.message}`);
  }

  if (!Array.isArray(parsed.dominant_narrative_themes)) {
    throw new Error('Stage 2 response missing dominant_narrative_themes array');
  }

  const stripped = stripForbiddenKeys(parsed);

  for (const theme of stripped.dominant_narrative_themes) {
    if (!theme.theme_id || !theme.theme_text) {
      throw new Error('Every theme must include theme_id and theme_text');
    }
    validateArchetypeFields(theme);
  }

  const { kept, dropped } = enforceEvidenceFirst(stripped.dominant_narrative_themes, stage1Evidence);

  return {
    dominant_narrative_themes: kept,
    dropped_themes: dropped, // QA/logging visibility only — never surfaced to family or counselor UI
  };
}

// ---------------------------------------------------------------------------
// 3. ORCHESTRATION (the only impure piece — network call is injected)
// ---------------------------------------------------------------------------

/**
 * @param {object} stage1Evidence - full output object from runStage1Normalization
 * @param {function} callClaudeFn - async (model, system, user) => rawTextResponse
 * @returns {Promise<object>} Stage 2 output: student_id, essay_session_id,
 *          dominant_narrative_themes (evidence-checked, archetype-classified),
 *          dropped_themes (QA visibility only).
 */
async function runStage2ThemeGeneration(stage1Evidence, callClaudeFn) {
  if (!stage1Evidence || !stage1Evidence.student_id || !stage1Evidence.essay_session_id) {
    throw new Error('Stage 2 requires a Stage 1 evidence object with student_id and essay_session_id');
  }

  const { system, user } = buildStage2Prompt(stage1Evidence);
  const rawResponse = await callClaudeFn(MODEL, system, user);
  const { dominant_narrative_themes, dropped_themes } = parseStage2Response(rawResponse, stage1Evidence);

  return {
    student_id: stage1Evidence.student_id,
    essay_session_id: stage1Evidence.essay_session_id,
    cycle_label: stage1Evidence.cycle_label || null,
    dominant_narrative_themes,
    dropped_themes,
  };
}

export {
  ARCHETYPES,
  ARCHETYPE_IDS,
  buildStage2Prompt,
  parseStage2Response,
  runStage2ThemeGeneration,
  enforceEvidenceFirst,
  buildEvidenceCorpus,
};
