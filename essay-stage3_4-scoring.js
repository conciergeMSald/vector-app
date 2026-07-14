/**
 * ESSAY ENGINE — STAGE 3 + STAGE 4: Prompt Matching & 9-Dimension Scoring
 * Gate 4 Build Checklist, Item 4 (ESSAY-ARCH-004 Section 8, Section 10)
 *
 * Per ESSAY-ARCH-004 Section 8, Stage 3 (prompt matching) and Stage 4
 * (9-dimension scoring) run as a single combined Claude call for
 * efficiency. This module keeps them logically distinct internally —
 * matching vs. scoring are different judgments — but shares one prompt
 * and one response per theme.
 *
 * The 9 scoring dimensions (ESSAY-ENGINE-003 v1.1, including the Patch 2
 * addition of Voice Preservation) are counselor-facing only. This module
 * enforces that boundary in code: stripCounselorOnlyFields() is the
 * function the report-render layer must call before any family-facing
 * response is returned — never send the raw output of this module
 * straight to a family view.
 *
 * Design rules carried forward:
 *   - Prompt construction, response parsing, scoring math, ranking, and
 *     field-stripping are all pure functions. Only the Claude call itself
 *     is impure, and it is injected.
 *   - Race/ethnicity guard carried forward unchanged.
 *   - A topic below the rejection threshold is never silently dropped —
 *     it comes back in rejectedTopicsWithReasons with the specific weak
 *     dimensions named, matching the transparency pattern from Stage 2's
 *     dropped_themes.
 */

'use strict';

const MODEL = 'claude-sonnet-4-6';
const FORBIDDEN_OUTPUT_KEYS = ['race', 'ethnicity', 'race_or_ethnicity', 'racial_background'];

// The 9 scoring dimensions per ESSAY-ENGINE-003 v1.1 (base 8 + Patch 2's Voice Preservation).
const SCORING_DIMENSIONS = [
  'authenticity',
  'specificity',
  'reflection',
  'evidence',
  'differentiation',
  'prompt_fit',
  'application_complement',
  'ethical_safety',
  'voice_preservation',
];

// Common App prompt categories — paraphrased summaries of the stable, broad prompt
// categories (identity/background, challenge, belief, gratitude, growth, curiosity,
// open topic), used for internal matching only. Not a reproduction of official prompt text.
const COMMON_APP_PROMPTS = [
  { id: 'background_identity', summary: 'A background, identity, interest, or talent so meaningful it should be part of their application.' },
  { id: 'challenge_setback', summary: 'A time they faced a challenge, setback, or failure, and what they learned from it.' },
  { id: 'belief_questioned', summary: 'A time they questioned or challenged a belief or idea, and what prompted their thinking.' },
  { id: 'gratitude', summary: 'Something someone did for them that made them grateful in an unexpected way.' },
  { id: 'growth_new_understanding', summary: 'A period of personal growth and a new understanding of themselves or others it developed.' },
  { id: 'curiosity_engagement', summary: 'A topic, idea, or concept they find so engaging it makes them lose track of time.' },
  { id: 'open_topic', summary: 'Any topic of their choice, in their own voice.' },
];

const DEFAULT_REJECTION_THRESHOLD = 6; // out of 10, mean across all 9 dimensions

// ---------------------------------------------------------------------------
// 1. PROMPT CONSTRUCTION (pure)
// ---------------------------------------------------------------------------

/**
 * @param {object} theme - a single theme from Stage 2.5 output (may include
 *        matched_archetype, parent_corroboration_flag/confidence, added_texture)
 * @param {object} applicationContext - {
 *        platform: 'common_app' | 'supplement',
 *        supplement_prompt: string | null,       // required if platform === 'supplement'
 *        school_context: string | null,           // known institutional traits, if a supplement
 *        activity_list_summary: string[] | null,  // for application-complement / résumé-repetition check
 *      }
 */
function buildStage3And4Prompt(theme, applicationContext) {
  const { platform = 'common_app', supplement_prompt = null, school_context = null, activity_list_summary = [] } = applicationContext || {};

  const system = [
    'You perform two jobs on a single essay theme for a college counseling platform: (1) match it to the best-fitting application prompt, and (2) score it on 9 counselor-facing dimensions.',
    'Never invent evidence not already present in the theme. Score based only on what is given.',
    'application_complement should be scored low if the theme just repeats what a résumé/activity list already makes obvious, per the activity list provided.',
    'ethical_safety should be scored low if the theme risks exaggerating hardship, fabricating experience, or exploiting sensitive family/financial/medical/identity content.',
    'voice_preservation should be scored low if the theme reads like something an adult consultant would write rather than the student.',
    'Every score is an integer from 0 to 10.',
    'You never infer, request, or output race, ethnicity, or any related identity classification.',
    'Return ONLY valid JSON matching the schema. No preamble, no markdown fences, no commentary.',
  ].join(' ');

  const promptOptions =
    platform === 'supplement'
      ? [{ id: 'supplement', summary: supplement_prompt || 'School-specific supplement prompt' }]
      : COMMON_APP_PROMPTS;

  const schema = {
    matched_prompt: `string — one of: ${promptOptions.map((p) => p.id).join(', ')}`,
    scores: Object.fromEntries(SCORING_DIMENSIONS.map((d) => [d, 'integer 0-10'])),
    risk_flags: ['string — e.g. "cliché", "overclaiming", "trauma dumping", "résumé repetition", "adult-sounding voice"'],
    score_rationale: 'string — one or two sentences, counselor-facing only',
  };

  const user = [
    'THEME TO EVALUATE:',
    JSON.stringify(
      {
        theme_id: theme.theme_id,
        theme_text: theme.theme_text,
        supporting_evidence_refs: theme.supporting_evidence_refs,
        matched_archetype: theme.matched_archetype || null,
        parent_corroboration_flag: theme.parent_corroboration_flag || false,
        added_texture: theme.added_texture || null,
      },
      null,
      2
    ),
    '',
    'PROMPT OPTIONS TO MATCH AGAINST:',
    JSON.stringify(promptOptions, null, 2),
    '',
    school_context ? `SCHOOL CONTEXT (for prompt_fit / application_complement judgment on supplements):\n${school_context}` : '',
    activity_list_summary && activity_list_summary.length > 0
      ? `STUDENT'S EXISTING ACTIVITY LIST (use to check résumé repetition):\n${JSON.stringify(activity_list_summary)}`
      : '',
    '',
    'OUTPUT SCHEMA:',
    JSON.stringify(schema, null, 2),
  ]
    .filter(Boolean)
    .join('\n');

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

function parseStage3And4Response(rawText, applicationContext) {
  let parsed;
  try {
    const cleaned = rawText.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Stage 3+4 response was not valid JSON: ${err.message}`);
  }

  const stripped = stripForbiddenKeys(parsed);

  const platform = (applicationContext || {}).platform || 'common_app';
  const validPromptIds = platform === 'supplement' ? ['supplement'] : COMMON_APP_PROMPTS.map((p) => p.id);
  if (!validPromptIds.includes(stripped.matched_prompt)) {
    throw new Error(`Invalid matched_prompt: ${stripped.matched_prompt}`);
  }

  if (!stripped.scores || typeof stripped.scores !== 'object') {
    throw new Error('Response missing scores object');
  }
  for (const dim of SCORING_DIMENSIONS) {
    const val = stripped.scores[dim];
    if (typeof val !== 'number' || !Number.isInteger(val) || val < 0 || val > 10) {
      throw new Error(`Score for dimension "${dim}" must be an integer 0-10, got: ${val}`);
    }
  }

  if (!Array.isArray(stripped.risk_flags)) {
    throw new Error('Response missing risk_flags array');
  }

  return {
    matched_prompt: stripped.matched_prompt,
    scores: stripped.scores,
    risk_flags: stripped.risk_flags,
    score_rationale: stripped.score_rationale || '',
  };
}

// ---------------------------------------------------------------------------
// 3. SCORING MATH, RANKING, THRESHOLD (pure)
// ---------------------------------------------------------------------------

function computeCompositeScore(scores) {
  const total = SCORING_DIMENSIONS.reduce((sum, dim) => sum + scores[dim], 0);
  return Math.round((total / SCORING_DIMENSIONS.length) * 100) / 100; // rounded to 2 decimals
}

function weakDimensions(scores, threshold) {
  return SCORING_DIMENSIONS.filter((dim) => scores[dim] < threshold);
}

/**
 * Splits a list of {theme, matched_prompt, scores, risk_flags, score_rationale}
 * entries into recommended (composite >= threshold) and rejected (below
 * threshold, with the specific weak dimensions named — never a silent drop).
 */
function applyRejectionThreshold(scoredTopics, threshold = DEFAULT_REJECTION_THRESHOLD) {
  const recommended = [];
  const rejected = [];

  for (const topic of scoredTopics) {
    const composite = computeCompositeScore(topic.scores);
    const enriched = { ...topic, composite_score: composite };

    if (composite >= threshold) {
      recommended.push(enriched);
    } else {
      rejected.push({
        ...enriched,
        rejection_reason: `Composite score ${composite} below threshold ${threshold}. Weak dimensions: ${weakDimensions(topic.scores, threshold).join(', ') || 'none individually, but average still low'}.`,
      });
    }
  }

  return { recommended, rejected };
}

function rankTopics(recommendedTopics) {
  return [...recommendedTopics].sort((a, b) => b.composite_score - a.composite_score);
}

/**
 * Strips every counselor-only field before a topic list can be handed to a
 * family-facing view. This is the enforcement point ESSAY-ARCH-004 Section 9
 * refers to: "family-facing payload strips all counselor-only fields."
 */
function stripCounselorOnlyFields(rankedTopics) {
  return rankedTopics.map((topic) => ({
    theme_id: topic.theme.theme_id,
    theme_text: topic.theme.theme_text,
    matched_prompt: topic.matched_prompt,
    // Deliberately omitted: scores, composite_score, risk_flags, score_rationale,
    // matched_archetype, parent_corroboration_flag/confidence, added_texture.
  }));
}

// ---------------------------------------------------------------------------
// 4. ORCHESTRATION
// ---------------------------------------------------------------------------

/**
 * @param {object} stage2_5Output - output of runStage2_5ParentCorroboration
 * @param {object} applicationContext - platform/supplement/school context, see above
 * @param {function} callClaudeFn - async (model, system, user) => rawTextResponse
 * @param {number} [threshold] - rejection threshold, defaults to 6
 */
async function runStage3And4(stage2_5Output, applicationContext, callClaudeFn, threshold = DEFAULT_REJECTION_THRESHOLD) {
  if (!stage2_5Output || !Array.isArray(stage2_5Output.dominant_narrative_themes)) {
    throw new Error('Stage 3+4 requires a Stage 2.5 output object with dominant_narrative_themes');
  }

  const scoredTopics = [];
  for (const theme of stage2_5Output.dominant_narrative_themes) {
    const { system, user } = buildStage3And4Prompt(theme, applicationContext);
    const rawResponse = await callClaudeFn(MODEL, system, user);
    const parsed = parseStage3And4Response(rawResponse, applicationContext);
    scoredTopics.push({ theme, ...parsed });
  }

  const { recommended, rejected } = applyRejectionThreshold(scoredTopics, threshold);
  const ranked = rankTopics(recommended);

  return {
    student_id: stage2_5Output.student_id,
    essay_session_id: stage2_5Output.essay_session_id,
    cycle_label: stage2_5Output.cycle_label || null,
    recommendedTopics: ranked, // counselor-facing — includes scores, risk flags, archetype, corroboration
    rejectedTopicsWithReasons: rejected,
    familyFacingTopics: stripCounselorOnlyFields(ranked), // safe to send directly to family view
  };
}

export {
  SCORING_DIMENSIONS,
  COMMON_APP_PROMPTS,
  DEFAULT_REJECTION_THRESHOLD,
  buildStage3And4Prompt,
  parseStage3And4Response,
  computeCompositeScore,
  applyRejectionThreshold,
  rankTopics,
  stripCounselorOnlyFields,
  runStage3And4,
};
