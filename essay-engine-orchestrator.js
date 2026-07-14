/**
 * ESSAY ENGINE — ORCHESTRATOR
 * Wires the seven Gate 4 modules into the single pipeline described in
 * ESSAY-ARCH-004 Section 2 (System Boundary). This is what worker.js's
 * /essay-session route calls.
 *
 * Pipeline: sequencing gate -> Stage 1 -> Stage 2 -> Stage 2.5 ->
 *           Stage 3+4 -> Stage 5 -> assembleFinalOutput ->
 *           prior-session lookup -> Airtable write (non-blocking) ->
 *           family/counselor view split
 *
 * This module intentionally contains almost no new logic of its own —
 * its only two responsibilities are (1) enforcing the sequencing gate
 * before anything runs, and (2) building the family-facing view, which
 * is stricter here than Stage 3+4's stripCounselorOnlyFields because it
 * also has to remove parent-corroboration and archetype fields that
 * exist on the theme object by this point in the pipeline.
 */

'use strict';

import { runStage1Normalization } from './essay-stage1-normalize.js';
import { runStage2ThemeGeneration } from './essay-stage2-themes.js';
import { runStage2_5ParentCorroboration } from './essay-stage2_5-parent-corroboration.js';
import { runStage3And4 } from './essay-stage3_4-scoring.js';
import { runStage5WritingPackets, assembleFinalOutput } from './essay-stage5-writing-packets.js';
import { canRunReportGeneration, markReportGenerated } from './essay-sequencing-state-machine.js';
import { findPriorSessionReference, buildAirtableRecord, writeToAirtableNonBlocking } from './essay-airtable-persistence.js';

/**
 * Builds the family-facing view from the final assembled output. This is
 * the strictest view in the whole pipeline — it must strip not only
 * scoring/risk data (already handled once in Stage 3+4) but also
 * archetype classification and any trace of parent corroboration, since
 * a family view revealing "a topic was strengthened by a parent" would
 * itself be a form of attribution.
 */
function buildFamilyFacingView(finalOutput) {
  return (finalOutput.recommendedTopics || []).map((topic) => {
    const packet = topic.writing_packet || {};
    return {
      theme_id: topic.theme_id,
      topic_title: packet.topic_title,
      one_sentence_summary: packet.one_sentence_summary,
      matched_prompt: topic.matched_prompt,
      why_it_fits: packet.why_it_fits,
      possible_opening_scene: packet.possible_opening_scene,
      possible_narrative_arc: packet.possible_narrative_arc,
      reflection_questions: packet.reflection_questions,
      voice_preservation_notes: packet.voice_preservation_notes,
      // Deliberately omitted: theme (full object), scores, composite_score,
      // risk_flags, matched_archetype, parent_corroboration_flag/confidence,
      // added_texture, evidence_grounding_check_passed.
    };
  });
}

/**
 * @param {object} input - {
 *   session: essay session object from the state machine (must be at least student_complete),
 *   surveyResponses, existingProfile: Stage 1 inputs,
 *   applicationContext: Stage 3+4 input,
 *   familyMemberId: string|null - passed to Stage 2.5,
 * }
 * @param {object} deps - {
 *   callClaudeFn: async (model, system, user) => string,
 *   readParentProfileFn: async (familyMemberId) => row|null,
 *   findPriorSessionsFn: async (studentId) => Array<{session_id, cycle_label, created_at}>,
 *   airtableWriteFn: async (record) => {id},
 *   logFn: (level, message, meta) => void,
 *   clock: () => string,
 * }
 */
async function runEssayEngine(input, deps) {
  const { session, surveyResponses, existingProfile, applicationContext, familyMemberId } = input;
  const { callClaudeFn, readParentProfileFn, findPriorSessionsFn, airtableWriteFn, logFn = () => {}, clock = () => new Date().toISOString() } = deps;

  // --- Sequencing gate: enforced here too, not just at the route layer, so this
  // function can never be called out of order even if a caller forgets the check. ---
  if (!canRunReportGeneration(session)) {
    throw new Error(
      `Cannot run Essay Engine: session "${session.essay_session_id}" is still in state "${session.state}". ` +
        `The student session must reach student_complete before report generation may run.`
    );
  }

  const identifiers = {
    student_id: session.student_id,
    essay_session_id: session.essay_session_id,
    cycle_label: session.cycle_label,
  };

  const stage1 = await runStage1Normalization(surveyResponses, existingProfile, identifiers, callClaudeFn);
  const stage2 = await runStage2ThemeGeneration(stage1, callClaudeFn);
  const stage2_5 = await runStage2_5ParentCorroboration(stage2, familyMemberId, readParentProfileFn, callClaudeFn);
  const stage3_4 = await runStage3And4(stage2_5, applicationContext, callClaudeFn);
  const stage5 = await runStage5WritingPackets(stage3_4, callClaudeFn);
  const finalOutput = assembleFinalOutput({ stage1Evidence: stage1, stage2_5Output: stage2_5, stage5Output: stage5 });

  const priorSessions = await findPriorSessionsFn(session.student_id);
  const priorSessionReference = findPriorSessionReference(priorSessions, session.cycle_label);
  const airtableRecord = buildAirtableRecord(finalOutput, priorSessionReference, clock);
  const airtableWriteResult = await writeToAirtableNonBlocking(airtableRecord, airtableWriteFn, logFn);

  const updatedSession = markReportGenerated(session, clock);

  return {
    session: updatedSession,
    counselorView: finalOutput,
    familyView: buildFamilyFacingView(finalOutput),
    airtableWriteResult,
    parentCheckSummary: stage2_5.parent_check_summary,
  };
}

export { runEssayEngine, buildFamilyFacingView };
