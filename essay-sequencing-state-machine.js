/**
 * ESSAY ENGINE — SEQUENCING STATE MACHINE
 * Gate 4 Build Checklist, Item 6 (ESSAY-ARCH-004 Section 7)
 *
 * Enforces Addendum A's core rule as a hard code-level gate, not a UI
 * convention: the student session always runs first and completes
 * before any parent route is reachable.
 *
 * KEY DESIGN CHOICE: an essay session has exactly ONE state field, not
 * two independent booleans (e.g. studentComplete + parentInProgress).
 * This is what makes the invalid combination structurally unrepresentable
 * rather than merely disallowed by convention — there is no state value
 * that means "parent in progress while student still in progress,"
 * because parent-related states simply do not exist in the transition
 * map reachable from student_in_progress. See VALID_TRANSITIONS below.
 *
 * States (forward-only, no state is ever revisited):
 *   student_in_progress -> student_complete -> parent_in_progress -> parent_complete
 *
 * Report generation (Stage 1-5) may run as soon as student_complete is
 * reached, independent of whether a parent session ever starts. If a
 * parent session completes AFTER a report was already generated, the
 * session is flagged so the pipeline knows to re-run Stage 2.5 (parent
 * corroboration) against the already-produced themes.
 */

'use strict';

const STATES = Object.freeze({
  STUDENT_IN_PROGRESS: 'student_in_progress',
  STUDENT_COMPLETE: 'student_complete',
  PARENT_IN_PROGRESS: 'parent_in_progress',
  PARENT_COMPLETE: 'parent_complete',
});

const ACTIONS = Object.freeze({
  COMPLETE_STUDENT_SESSION: 'complete_student_session',
  START_PARENT_SESSION: 'start_parent_session',
  COMPLETE_PARENT_SESSION: 'complete_parent_session',
});

// The ONLY legal transitions. Absence of an entry means the action is
// illegal from that state — this is the enforcement mechanism, not a
// separate set of if-checks that could drift out of sync with it.
const VALID_TRANSITIONS = Object.freeze({
  [STATES.STUDENT_IN_PROGRESS]: Object.freeze({
    [ACTIONS.COMPLETE_STUDENT_SESSION]: STATES.STUDENT_COMPLETE,
  }),
  [STATES.STUDENT_COMPLETE]: Object.freeze({
    [ACTIONS.START_PARENT_SESSION]: STATES.PARENT_IN_PROGRESS,
  }),
  [STATES.PARENT_IN_PROGRESS]: Object.freeze({
    [ACTIONS.COMPLETE_PARENT_SESSION]: STATES.PARENT_COMPLETE,
  }),
  [STATES.PARENT_COMPLETE]: Object.freeze({}), // terminal — no further transitions
});

const defaultClock = () => new Date().toISOString();

// ---------------------------------------------------------------------------
// 1. SESSION INITIALIZATION (pure)
// ---------------------------------------------------------------------------

function initEssaySession({ studentId, essaySessionId, cycleLabel = null, familyMemberId = null }, clock = defaultClock) {
  if (!studentId || !essaySessionId) {
    throw new Error('initEssaySession requires studentId and essaySessionId');
  }
  const now = clock();
  return Object.freeze({
    student_id: studentId,
    essay_session_id: essaySessionId,
    cycle_label: cycleLabel,
    family_member_id: familyMemberId,
    state: STATES.STUDENT_IN_PROGRESS,
    report_generated_at: null,
    needs_parent_reprocess: false,
    reprocessed_at: null,
    created_at: now,
    updated_at: now,
  });
}

// ---------------------------------------------------------------------------
// 2. TRANSITION (pure — returns a NEW session object, never mutates input)
// ---------------------------------------------------------------------------

function applyTransition(session, action, clock = defaultClock) {
  if (!session || typeof session.state !== 'string') {
    throw new Error('applyTransition requires a valid session object with a state field');
  }

  const allowedFromState = VALID_TRANSITIONS[session.state];
  if (!allowedFromState) {
    throw new Error(`Unknown or unrecognized session state: "${session.state}"`);
  }

  const nextState = allowedFromState[action];
  if (!nextState) {
    const allowedActions = Object.keys(allowedFromState);
    throw new Error(
      `Illegal transition: cannot perform "${action}" from state "${session.state}". ` +
        `Allowed actions from this state: ${allowedActions.length > 0 ? allowedActions.join(', ') : 'none (terminal state)'}.`
    );
  }

  return Object.freeze({
    ...session,
    state: nextState,
    updated_at: clock(),
  });
}

// ---------------------------------------------------------------------------
// 3. QUERY HELPERS (pure)
// ---------------------------------------------------------------------------

/** The one gate the whole spec exists to enforce: parent route reachability. */
function canStartParentSession(session) {
  return session.state === STATES.STUDENT_COMPLETE;
}

/** Report generation (Stage 1-5) may run once the student session is complete,
 * regardless of parent status — it does not wait on the parent. */
function canRunReportGeneration(session) {
  return session.state !== STATES.STUDENT_IN_PROGRESS;
}

function markReportGenerated(session, clock = defaultClock) {
  if (!canRunReportGeneration(session)) {
    throw new Error(`Cannot mark report generated from state "${session.state}" — student session must be complete first.`);
  }
  return Object.freeze({ ...session, report_generated_at: clock(), updated_at: clock() });
}

/**
 * True only when a report was already generated BEFORE the parent session
 * finished — meaning Stage 2.5 needs to be re-run against the
 * already-produced themes now that parent data is available. If the
 * report hasn't been generated yet at all, the normal pipeline will pick
 * up the parent data on its first (only) pass, so no reprocess flag is needed.
 */
function needsParentReprocess(session) {
  return (
    session.state === STATES.PARENT_COMPLETE &&
    !!session.report_generated_at &&
    !session.reprocessed_at
  );
}

function markReprocessed(session, clock = defaultClock) {
  if (!needsParentReprocess(session)) {
    throw new Error('markReprocessed called but session does not currently need a reprocess.');
  }
  return Object.freeze({ ...session, reprocessed_at: clock(), needs_parent_reprocess: false, updated_at: clock() });
}

export {
  STATES,
  ACTIONS,
  VALID_TRANSITIONS,
  initEssaySession,
  applyTransition,
  canStartParentSession,
  canRunReportGeneration,
  markReportGenerated,
  needsParentReprocess,
  markReprocessed,
};
