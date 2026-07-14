/**
 * ESSAY ENGINE — AIRTABLE PERSISTENCE (Essay_Sessions)
 * Gate 4 Build Checklist, Item 7 (ESSAY-ARCH-004 Section 6, Addendum A Section 4)
 *
 * Builds and writes the Persistent Evidence Layer record. This is the
 * LAST stop in the pipeline and the most important place to re-apply
 * every non-negotiable one more time, because it is the one place data
 * leaves the request/response cycle and becomes durable storage:
 *
 *   - Only derived, non-attributable material is ever written. Never
 *     raw parent quotes, never transcripts, never full writing packets
 *     (title + one-line concept only — full packets stay in the report).
 *   - parent_corroboration_flags is boolean/confidence PER THEME ID only
 *     — it is a separate field, never embedded inside the theme text
 *     itself, so a theme's stored text carries no source tagging.
 *   - prior_session_reference resets per cycle_label (Addendum A OQ-A1):
 *     a session only chains to a prior session with the SAME cycle_label,
 *     even if a different-cycle session is more recent.
 *   - The write is non-blocking: if it fails, the essay session output
 *     still delivers to the family/counselor. One retry is attempted;
 *     a second failure is reported for manual review, never thrown up
 *     to the caller.
 *   - An allowlist construction is used for every persisted field —
 *     fields are explicitly picked, not defensively filtered — so an
 *     upstream object with extra fields (scores, risk_flags, added_texture
 *     wording, etc.) cannot leak into storage just because it exists
 *     upstream.
 */

'use strict';

const FORBIDDEN_KEYS_ANYWHERE = [
  'raw_payload', 'aspiration_profile', 'child_perception', 'hidden_constraints',
  'race', 'ethnicity', 'race_or_ethnicity', 'racial_background',
];

// ---------------------------------------------------------------------------
// 1. PRIOR SESSION LOOKUP (pure) — Addendum A OQ-A1: reset per cycle_label
// ---------------------------------------------------------------------------

/**
 * @param {Array} priorSessionsForStudent - prior Essay_Sessions rows for this
 *        student, each with at least { session_id, cycle_label, created_at }
 * @param {string} currentCycleLabel
 * @returns {string|null} the session_id of the most recent prior session
 *        sharing the SAME cycle_label, or null if none exists — a prior
 *        session under a different cycle_label is never chained to,
 *        per the OQ-A1 resolution (reset per cycle, not chained across cycles).
 */
function findPriorSessionReference(priorSessionsForStudent, currentCycleLabel) {
  if (!Array.isArray(priorSessionsForStudent) || priorSessionsForStudent.length === 0) return null;

  const sameCycle = priorSessionsForStudent.filter((s) => s.cycle_label === currentCycleLabel);
  if (sameCycle.length === 0) return null;

  const mostRecent = sameCycle.reduce((latest, current) =>
    new Date(current.created_at) > new Date(latest.created_at) ? current : latest
  );
  return mostRecent.session_id;
}

// ---------------------------------------------------------------------------
// 2. RECORD CONSTRUCTION (pure, allowlist-only)
// ---------------------------------------------------------------------------

function assertNoForbiddenContent(record) {
  const serialized = JSON.stringify(record);
  for (const forbidden of FORBIDDEN_KEYS_ANYWHERE) {
    // Checks the serialized record for the key name appearing at all (as a JSON key),
    // which catches both top-level and nested accidental inclusion.
    if (serialized.includes(`"${forbidden}"`)) {
      throw new Error(`Airtable record construction blocked: forbidden key "${forbidden}" present in record.`);
    }
  }
}

/**
 * Builds the exact Essay_Sessions record shape from ESSAY-ARCH-004 Section 6 /
 * Addendum A Section 4. Every field is explicitly picked (allowlist), never
 * passed through wholesale — this is what prevents an upstream object's
 * extra fields (full packets, scores, risk flags, rewritten texture wording)
 * from leaking into persistent storage just because they exist upstream.
 *
 * @param {object} finalOutput - the assembleFinalOutput() result from Stage 5
 * @param {string|null} priorSessionReference - from findPriorSessionReference()
 * @param {function} clock - injectable, defaults to ISO now
 */
function buildAirtableRecord(finalOutput, priorSessionReference, clock = () => new Date().toISOString()) {
  if (!finalOutput || !finalOutput.student_id || !finalOutput.essay_session_id) {
    throw new Error('buildAirtableRecord requires a final output object with student_id and essay_session_id');
  }

  const now = clock();

  // dominant_narrative_themes: clean student-voiced text only. No scores, no
  // source tagging (parent_corroboration lives in its own separate field below,
  // never embedded here — this is what "no source tagging" means in practice).
  const dominantNarrativeThemes = (finalOutput.dominantNarrativeThemes || []).map((theme) => ({
    theme_id: theme.theme_id,
    theme_text: theme.added_texture ? `${theme.theme_text} ${theme.added_texture}` : theme.theme_text,
    matched_archetype: theme.matched_archetype || null,
  }));

  const matchedArchetypes = [...new Set(dominantNarrativeThemes.map((t) => t.matched_archetype).filter(Boolean))];

  // parent_corroboration_flags: boolean/confidence PER THEME ID ONLY — never
  // the parent's wording, and never merged into the theme text field above.
  const parentCorroborationFlags = {};
  (finalOutput.dominantNarrativeThemes || []).forEach((theme) => {
    if (theme.parent_corroboration_flag) {
      parentCorroborationFlags[theme.theme_id] = {
        flag: true,
        confidence: theme.parent_corroboration_confidence || 'strengthened',
      };
    }
  });

  // recommended_topics_summary: titles + one-line concepts ONLY. Full writing
  // packets (opening scene, narrative arc, reflection questions, risk flags,
  // scores) are deliberately NOT picked here — they stay in the live report only.
  const recommendedTopicsSummary = (finalOutput.recommendedTopics || []).map((topic) => ({
    theme_id: topic.theme_id,
    title: topic.writing_packet ? topic.writing_packet.topic_title : null,
    one_line_concept: topic.writing_packet ? topic.writing_packet.one_sentence_summary : null,
  }));

  const record = {
    student_id: finalOutput.student_id,
    session_id: finalOutput.essay_session_id,
    cycle_label: finalOutput.cycle_label || null,
    dominant_narrative_themes: JSON.stringify(dominantNarrativeThemes),
    matched_archetypes: JSON.stringify(matchedArchetypes),
    underused_personal_evidence: JSON.stringify(finalOutput.underusedPersonalEvidence || []),
    parent_corroboration_flags: JSON.stringify(parentCorroborationFlags),
    recommended_topics_summary: JSON.stringify(recommendedTopicsSummary),
    prior_session_reference: priorSessionReference || null,
    created_at: now,
    updated_at: now,
  };

  assertNoForbiddenContent(record); // defense-in-depth, should never fire given allowlist construction above

  return record;
}

// ---------------------------------------------------------------------------
// 3. NON-BLOCKING WRITE (retry-once, never throws to caller)
// ---------------------------------------------------------------------------

/**
 * @param {object} record - from buildAirtableRecord()
 * @param {function} airtableWriteFn - async (record) => { id: string } ; should throw on failure
 * @param {function} logFn - called with (level, message, meta) for manual-review logging on final failure
 * @returns {Promise<object>} { written: true, recordId } | { written: false, error }
 *          NEVER throws — a failed write must not block essay session delivery.
 */
async function writeToAirtableNonBlocking(record, airtableWriteFn, logFn = () => {}) {
  try {
    const result = await airtableWriteFn(record);
    return { written: true, recordId: result.id };
  } catch (firstError) {
    try {
      const retryResult = await airtableWriteFn(record);
      return { written: true, recordId: retryResult.id, retried: true };
    } catch (secondError) {
      logFn('error', 'Airtable Essay_Sessions write failed after retry — manual review required', {
        session_id: record.session_id,
        student_id: record.student_id,
        firstError: firstError.message,
        secondError: secondError.message,
      });
      return { written: false, error: secondError.message };
    }
  }
}

export {
  FORBIDDEN_KEYS_ANYWHERE,
  findPriorSessionReference,
  buildAirtableRecord,
  assertNoForbiddenContent,
  writeToAirtableNonBlocking,
};
