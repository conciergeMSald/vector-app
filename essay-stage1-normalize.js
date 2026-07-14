/**
 * ESSAY ENGINE — STAGE 1: Survey Normalization
 * Gate 4 Build Checklist, Item 1 (ESSAY-ARCH-004 Section 10)
 *
 * Converts raw Essay Evidence Layer survey responses (7 question groups,
 * per ESSAY-ENGINE-003 v1.1) plus the student's existing personality/fit
 * signals into the structured essay evidence object specified in
 * ESSAY-ARCH-004 Section 4.
 *
 * Design rules carried forward from PARENT-AGENT-001 / ESSAY-ARCH-004:
 *   - Prompt construction and response parsing are pure functions.
 *     No DB calls, no side effects, deterministic given the same inputs.
 *   - The Claude call itself is injected (callClaudeFn) rather than
 *     hardcoded, so this module has no network dependency of its own
 *     and can be unit-tested without hitting the API.
 *   - This module does not read or write Supabase or Airtable. It is
 *     Stage 1 only — Stage 2.5 (parent corroboration) is a separate
 *     module per ESSAY-ARCH-004 Section 5.
 *   - Race/ethnicity is never a valid field on the output object. If a
 *     model response includes anything resembling it, it is stripped,
 *     never passed through.
 */

'use strict';

const MODEL = 'claude-sonnet-4-6'; // per ESSAY-ARCH-004 Section 8

// ---------------------------------------------------------------------------
// 1. INPUT SHAPE (what the Essay Evidence Layer survey collects)
// ---------------------------------------------------------------------------
// surveyResponses = {
//   accomplishment_evidence: { built_fixed_led: str, why_it_mattered: str,
//                               harder_than_realized: str, self_learning: str },
//   pride_without_bragging:  { proud_not_on_transcript: str, when_no_one_watching: str,
//                              small_moment_bigger_truth: str },
//   intellectual_curiosity:  { loses_track_of_time: str, recurring_question: str,
//                              voluntary_activity: str },
//   family_and_context:      { responsibilities: str, family_values: str,
//                              expectations_navigated: str } // all optional/volunteered
//   environment_and_belonging: { feels_most_like_self: str, people_bring_out_best: str,
//                                 draining_environments: str, campus_setting_growth: str },
//   emotional_intelligence:  { misunderstanding_repair: str, conflict_response: str,
//                              pressure_emotion: str }, // NEW — ESSAY-ENGINE-003 v1.1 Patch 1
//   voice_capture:           { casual_retelling: str, phrase_theyd_use: str,
//                               sentence_only_they_would_write: str }
// }
//
// existingProfile = {
//   big_five: { openness, conscientiousness, extraversion, agreeableness, neuroticism },
//   riasec: string[],
//   eq: object,               // existing platform EQ signal, distinct from the new survey group
//   social_scene: string,
//   geography: string
// }

const REQUIRED_GROUPS = [
  'accomplishment_evidence',
  'pride_without_bragging',
  'intellectual_curiosity',
  'environment_and_belonging',
  'emotional_intelligence',
  'voice_capture',
  // family_and_context is intentionally excluded — volunteered only, never required
];

const FORBIDDEN_OUTPUT_KEYS = ['race', 'ethnicity', 'race_or_ethnicity', 'racial_background'];

/**
 * Validates that the minimum viable survey groups are present before
 * attempting normalization. family_and_context is never required — a
 * student who volunteers nothing there still gets a complete profile.
 */
function validateSurveyCompleteness(surveyResponses) {
  const missing = REQUIRED_GROUPS.filter(
    (group) => !surveyResponses || !surveyResponses[group] || Object.keys(surveyResponses[group]).length === 0
  );
  return { complete: missing.length === 0, missingGroups: missing };
}

// ---------------------------------------------------------------------------
// 2. PROMPT CONSTRUCTION (pure)
// ---------------------------------------------------------------------------

function buildStage1Prompt(surveyResponses, existingProfile) {
  const { complete, missingGroups } = validateSurveyCompleteness(surveyResponses);

  const system = [
    'You are the normalization stage of an essay-evidence pipeline for a college counseling platform.',
    'Your only job is to convert raw student survey answers into a structured JSON evidence object.',
    'You do not generate essay topics, you do not score anything, and you do not write any part of an essay.',
    'You never infer, request, or output race, ethnicity, or any related identity classification, even if implied by the text.',
    'If a survey field is empty or was not volunteered (this applies especially to family_and_context), omit it from the output rather than inventing content to fill it.',
    'Return ONLY valid JSON matching the schema below. No preamble, no markdown fences, no commentary.',
  ].join(' ');

  const schema = {
    student_values: ['string — inferred values, e.g. "curiosity", "independence"'],
    behavioral_evidence: [
      {
        experience: 'string',
        role: 'string',
        conflict: 'string — what was harder than it looked',
        growth: 'string — what changed or was learned',
        specific_details: ['string — concrete, sensory, or scene-level details'],
      },
    ],
    emotional_intelligence_evidence: {
      misunderstanding_repair: 'string or omit if not volunteered',
      conflict_response: 'string or omit if not volunteered',
      pressure_emotion: 'string or omit if not volunteered',
    },
    personality_signals: {
      big_five: 'object — pass through from existing profile, do not re-infer',
      riasec: 'array — pass through from existing profile',
      eq: 'object — pass through from existing profile',
    },
    fit_signals: {
      social_scene: 'string — pass through from existing profile',
      geography: 'string — pass through from existing profile',
    },
    voice_samples: ['string — verbatim or lightly cleaned casual voice samples, never rewritten into adult register'],
  };

  const user = [
    'RAW SURVEY RESPONSES:',
    JSON.stringify(surveyResponses, null, 2),
    '',
    'EXISTING PERSONALITY / FIT PROFILE (pass through unchanged, do not re-derive):',
    JSON.stringify(existingProfile || {}, null, 2),
    '',
    complete
      ? ''
      : `Note: the following optional groups were not provided and should simply be absent from output where applicable: ${missingGroups.join(', ')}`,
    '',
    'OUTPUT SCHEMA (types are descriptive, produce actual values):',
    JSON.stringify(schema, null, 2),
  ]
    .filter(Boolean)
    .join('\n');

  return { system, user };
}

// ---------------------------------------------------------------------------
// 3. RESPONSE PARSING + VALIDATION (pure)
// ---------------------------------------------------------------------------

function stripForbiddenKeys(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(stripForbiddenKeys);
  const cleaned = {};
  for (const [key, value] of Object.entries(obj)) {
    if (FORBIDDEN_OUTPUT_KEYS.includes(key.toLowerCase())) continue; // hard guarantee, not just a prompt instruction
    cleaned[key] = stripForbiddenKeys(value);
  }
  return cleaned;
}

/**
 * Parses and validates the model's raw text response into the Stage 1
 * essay evidence object. Throws on malformed JSON or missing required
 * top-level keys — callers should catch and retry per their own
 * non-blocking-write conventions (this function has no retry logic
 * itself, matching the "pure function" boundary).
 */
function parseStage1Response(rawText) {
  let parsed;
  try {
    const cleaned = rawText.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Stage 1 response was not valid JSON: ${err.message}`);
  }

  const requiredTopLevel = ['student_values', 'behavioral_evidence', 'personality_signals', 'fit_signals', 'voice_samples'];
  const missingTopLevel = requiredTopLevel.filter((k) => !(k in parsed));
  if (missingTopLevel.length > 0) {
    throw new Error(`Stage 1 response missing required keys: ${missingTopLevel.join(', ')}`);
  }

  // emotional_intelligence_evidence is optional at the object level (family_and_context-style
  // volunteer-only field) but if present must be an object, not a string or array.
  if ('emotional_intelligence_evidence' in parsed && typeof parsed.emotional_intelligence_evidence !== 'object') {
    throw new Error('Stage 1 response emotional_intelligence_evidence must be an object if present');
  }

  return stripForbiddenKeys(parsed);
}

// ---------------------------------------------------------------------------
// 4. ORCHESTRATION (the only impure piece — network call is injected)
// ---------------------------------------------------------------------------

/**
 * @param {object} surveyResponses - raw Essay Evidence Layer answers
 * @param {object} existingProfile - student's existing Big Five / RIASEC / EQ / fit signals
 * @param {object} identifiers - { student_id, essay_session_id, cycle_label }
 * @param {function} callClaudeFn - async (model, system, user) => rawTextResponse
 *        Injected so this module has no direct fetch/network dependency.
 *        In worker.js this should be wired to the same Claude call helper
 *        used by callA/callC, passing MODEL as the model argument.
 * @returns {Promise<object>} fully-formed essay evidence session object,
 *          matching ESSAY-ARCH-004 Section 4, ready to hand to Stage 2.
 */
async function runStage1Normalization(surveyResponses, existingProfile, identifiers, callClaudeFn) {
  if (!identifiers || !identifiers.student_id || !identifiers.essay_session_id) {
    throw new Error('Stage 1 requires student_id and essay_session_id identifiers');
  }

  const { system, user } = buildStage1Prompt(surveyResponses, existingProfile);
  const rawResponse = await callClaudeFn(MODEL, system, user);
  const evidence = parseStage1Response(rawResponse);

  return {
    student_id: identifiers.student_id,
    essay_session_id: identifiers.essay_session_id,
    cycle_label: identifiers.cycle_label || null,
    ...evidence,
  };
}

export {
  buildStage1Prompt,
  parseStage1Response,
  runStage1Normalization,
  validateSurveyCompleteness,
  REQUIRED_GROUPS,
  FORBIDDEN_OUTPUT_KEYS,
};
