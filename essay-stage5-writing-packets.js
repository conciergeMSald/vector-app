/**
 * ESSAY ENGINE — STAGE 5: Writing Packet Generation
 * Gate 4 Build Checklist, Item 5 (ESSAY-ARCH-004 Section 8, Section 10)
 *
 * Generates a full writing packet for every recommended topic — not just
 * the top few, per ESSAY-ENGINE-003 Section 6's explicit instruction. Per
 * ESSAY-ARCH-004 Section 8, this runs one Claude call per topic,
 * parallelized (Promise.allSettled, matching the pattern already used
 * elsewhere in the platform).
 *
 * This module also assembles the final ESSAY-ENGINE-003 Section 8 output
 * object — the natural point to do so, since it's the last stage and
 * every upstream piece (evidence, themes, corroboration, scores, packets)
 * is available here.
 *
 * Design rules carried forward:
 *   - The engine never writes the student's finished essay. This is
 *     enforced in code, not just prompted: any packet field that reads
 *     like a completed multi-paragraph essay rather than an outline/sketch
 *     is rejected by a length-based guard.
 *   - Evidence-first: "why this fits" must be traceable to the theme's own
 *     supporting_evidence_refs — no new, uncited claims about the student.
 *   - Risk flags and scores from Stage 3+4 are carried into the packet for
 *     counselor view; stripCounselorOnlyFields from the Stage 3+4 module
 *     is still the boundary for family-facing output, not duplicated here.
 *   - Partial failures do not take down the whole stage — Promise.allSettled
 *     means one bad packet generation doesn't block the rest.
 *   - Race/ethnicity guard carried forward unchanged.
 */

'use strict';

const MODEL = 'claude-sonnet-4-6';
const FORBIDDEN_OUTPUT_KEYS = ['race', 'ethnicity', 'race_or_ethnicity', 'racial_background'];

// A finished-essay guard: an "opening scene sketch" or "narrative arc outline" should be
// short — a paragraph of framing, not a drafted essay. This threshold is intentionally
// generous (a real sketch can run a bit long) but catches an actual multi-paragraph essay
// slipping through instead of an outline.
const MAX_SKETCH_WORDS = 120;

const ETHICAL_USE_NOTICE =
  'This packet is a set of prompts, questions, and structural suggestions to help the student write their own essay. ' +
  'It is not a draft and should not be submitted as-is. The student is the sole author of any essay produced from it.';

function wordCount(str) {
  if (!str || typeof str !== 'string') return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// ---------------------------------------------------------------------------
// 1. PROMPT CONSTRUCTION (pure)
// ---------------------------------------------------------------------------

function buildStage5Prompt(topic) {
  const { theme, matched_prompt, risk_flags = [] } = topic;

  const system = [
    'You generate a student writing packet for a single essay topic at a college counseling platform.',
    'You NEVER write the student\'s finished essay, a full draft, or even a complete paragraph that could be submitted as-is. You produce an outline, prompts, and a sketch only — short, structural, not prose the student could just copy.',
    'The "why this topic fits" section must be grounded ONLY in the evidence already provided for this theme. Do not introduce new claims, experiences, or biographical details not already present.',
    'Reflection questions should help the student discover their own answer, not supply it.',
    'You never infer, request, or output race, ethnicity, or any related identity classification.',
    'Return ONLY valid JSON matching the schema. No preamble, no markdown fences, no commentary.',
  ].join(' ');

  const schema = {
    topic_title: 'string — short, evocative, not a full sentence',
    one_sentence_summary: 'string',
    why_it_fits: 'string — 2-4 sentences, grounded only in supporting_evidence_refs already given',
    possible_opening_scene: `string — a short sketch of a possible opening (under ${MAX_SKETCH_WORDS} words), NOT a drafted paragraph`,
    possible_narrative_arc: `string — a short structural outline (under ${MAX_SKETCH_WORDS} words), NOT prose`,
    reflection_questions: ['string — 3-5 questions the student should answer before drafting'],
    voice_preservation_notes: 'string — reminders to keep the student\'s own register, referencing their voice samples if useful',
  };

  const user = [
    'RECOMMENDED TOPIC (theme + matched prompt):',
    JSON.stringify(
      {
        theme_id: theme.theme_id,
        theme_text: theme.theme_text,
        supporting_evidence_refs: theme.supporting_evidence_refs,
        matched_archetype: theme.matched_archetype || null,
      },
      null,
      2
    ),
    '',
    `MATCHED APPLICATION PROMPT: ${matched_prompt}`,
    risk_flags.length > 0 ? `KNOWN RISK FLAGS TO AVOID REINFORCING: ${risk_flags.join(', ')}` : '',
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

/**
 * Builds a lowercase corpus from ONLY this theme's own evidence — not the
 * full Stage 1 object — so "why it fits" can be checked against exactly
 * what was actually cited for this theme, nothing broader.
 */
function buildThemeEvidenceCorpus(theme) {
  const parts = [theme.theme_text || '', ...(theme.supporting_evidence_refs || [])];
  return parts.join(' \n ').toLowerCase();
}

/**
 * Finished-essay guard: throws if any sketch-style field reads like a
 * completed essay rather than an outline. This is a structural backstop,
 * not a stylistic nicety — "never write the finished essay" is a
 * non-negotiable across every version of this spec.
 */
function assertNotAFinishedEssay(packet) {
  const sketchFields = ['possible_opening_scene', 'possible_narrative_arc'];
  for (const field of sketchFields) {
    const count = wordCount(packet[field]);
    if (count > MAX_SKETCH_WORDS) {
      throw new Error(
        `Stage 5 packet field "${field}" is ${count} words — exceeds the ${MAX_SKETCH_WORDS}-word sketch limit and reads as a drafted essay, not an outline.`
      );
    }
  }
}

/**
 * Evidence-first check for the "why it fits" field. This is intentionally
 * soft (a warning, not a throw) because "why it fits" legitimately
 * synthesizes/paraphrases the cited evidence rather than repeating it
 * verbatim — unlike Stage 2's hallucination guard, which checks for
 * entirely new, uncited claims. Callers can inspect evidence_grounding_warning
 * and route to human review if it fires.
 */
function checkEvidenceGrounding(packet, theme) {
  const corpus = buildThemeEvidenceCorpus(theme);
  const whyItFits = (packet.why_it_fits || '').toLowerCase();
  const corpusWords = new Set(corpus.split(/\W+/).filter((w) => w.length > 4));
  const whyWords = whyItFits.split(/\W+/).filter((w) => w.length > 4);
  const overlap = whyWords.filter((w) => corpusWords.has(w));
  const overlapRatio = whyWords.length > 0 ? overlap.length / whyWords.length : 0;
  return overlapRatio >= 0.15; // loose threshold — flags packets with essentially no connection to the cited evidence
}

function parseStage5Response(rawText, theme) {
  let parsed;
  try {
    const cleaned = rawText.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Stage 5 response was not valid JSON: ${err.message}`);
  }

  const stripped = stripForbiddenKeys(parsed);

  const required = [
    'topic_title', 'one_sentence_summary', 'why_it_fits',
    'possible_opening_scene', 'possible_narrative_arc',
    'reflection_questions', 'voice_preservation_notes',
  ];
  const missing = required.filter((k) => !(k in stripped));
  if (missing.length > 0) {
    throw new Error(`Stage 5 packet missing required fields: ${missing.join(', ')}`);
  }
  if (!Array.isArray(stripped.reflection_questions) || stripped.reflection_questions.length < 3) {
    throw new Error('Stage 5 packet must include at least 3 reflection questions');
  }

  assertNotAFinishedEssay(stripped);
  const evidenceGrounded = checkEvidenceGrounding(stripped, theme);

  return { ...stripped, evidence_grounding_check_passed: evidenceGrounded };
}

// ---------------------------------------------------------------------------
// 3. ORCHESTRATION — parallelized, partial-failure-tolerant
// ---------------------------------------------------------------------------

/**
 * Generates a packet for EVERY recommended topic (never just the top N),
 * per ESSAY-ENGINE-003 Section 6. Uses Promise.allSettled so one failed
 * packet generation doesn't block the others — failures are reported,
 * not silently dropped.
 *
 * @param {object} stage3And4Output - output of runStage3And4 (recommendedTopics, rejectedTopicsWithReasons, familyFacingTopics)
 * @param {function} callClaudeFn - async (model, system, user) => rawTextResponse
 */
async function runStage5WritingPackets(stage3And4Output, callClaudeFn) {
  if (!stage3And4Output || !Array.isArray(stage3And4Output.recommendedTopics)) {
    throw new Error('Stage 5 requires a Stage 3+4 output object with recommendedTopics');
  }

  const topics = stage3And4Output.recommendedTopics;

  const settled = await Promise.allSettled(
    topics.map(async (topic) => {
      const { system, user } = buildStage5Prompt(topic);
      const rawResponse = await callClaudeFn(MODEL, system, user);
      const packet = parseStage5Response(rawResponse, topic.theme);
      return { topic, packet };
    })
  );

  const packetsGenerated = [];
  const packetGenerationFailures = [];

  settled.forEach((result, index) => {
    const sourceTopic = topics[index];
    if (result.status === 'fulfilled') {
      packetsGenerated.push({
        theme_id: sourceTopic.theme.theme_id,
        theme: sourceTopic.theme,
        matched_prompt: sourceTopic.matched_prompt,
        scores: sourceTopic.scores,
        risk_flags: sourceTopic.risk_flags,
        composite_score: sourceTopic.composite_score,
        writing_packet: result.value.packet,
      });
    } else {
      packetGenerationFailures.push({
        theme_id: sourceTopic.theme.theme_id,
        error: result.reason && result.reason.message ? result.reason.message : String(result.reason),
      });
    }
  });

  return {
    student_id: stage3And4Output.student_id,
    essay_session_id: stage3And4Output.essay_session_id,
    cycle_label: stage3And4Output.cycle_label || null,
    recommendedTopicsWithPackets: packetsGenerated,
    packetGenerationFailures, // never silently swallowed — surfaced for retry/QA
    rejectedTopicsWithReasons: stage3And4Output.rejectedTopicsWithReasons,
    ethicalUseNotice: ETHICAL_USE_NOTICE,
  };
}

/**
 * Assembles the final ESSAY-ENGINE-003 Section 8 output structure. Pure —
 * takes the already-computed pieces from every stage and shapes them into
 * the documented output object. studentEssayProfileSummary and
 * underusedPersonalEvidence are lightweight derivations, not new model
 * calls, keeping this function deterministic.
 */
function assembleFinalOutput({ stage1Evidence, stage2_5Output, stage5Output }) {
  const usedRefs = new Set();
  (stage2_5Output.dominant_narrative_themes || []).forEach((t) => {
    (t.supporting_evidence_refs || []).forEach((ref) => usedRefs.add(ref));
  });

  const allBehavioralDetails = (stage1Evidence.behavioral_evidence || []).flatMap((b) => b.specific_details || []);
  const underusedPersonalEvidence = allBehavioralDetails.filter((detail) => !usedRefs.has(detail));

  return {
    student_id: stage5Output.student_id,
    essay_session_id: stage5Output.essay_session_id,
    cycle_label: stage5Output.cycle_label,
    studentEssayProfileSummary: {
      student_values: stage1Evidence.student_values || [],
      dominant_archetypes: [
        ...new Set((stage2_5Output.dominant_narrative_themes || []).map((t) => t.matched_archetype).filter(Boolean)),
      ],
    },
    dominantNarrativeThemes: stage2_5Output.dominant_narrative_themes,
    underusedPersonalEvidence,
    recommendedTopics: stage5Output.recommendedTopicsWithPackets,
    rejectedTopicsWithReasons: stage5Output.rejectedTopicsWithReasons,
    packetGenerationFailures: stage5Output.packetGenerationFailures,
    missingInformationQuestions: [], // populated by future sessions per Addendum A's prior_session_reference logic
    ethicalUseNotice: stage5Output.ethicalUseNotice,
  };
}

export {
  MAX_SKETCH_WORDS,
  ETHICAL_USE_NOTICE,
  buildStage5Prompt,
  parseStage5Response,
  assertNotAFinishedEssay,
  checkEvidenceGrounding,
  runStage5WritingPackets,
  assembleFinalOutput,
};
