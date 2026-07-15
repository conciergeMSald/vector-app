/**
 * student-signal-fusion-engine.js
 * VECTOR — STUDENT-AGENT-002, Gate 4, Item 4
 *
 * CONTRACT (mirrors PARENT-AGENT-001's signal engine and the Essay Engine
 * modules, per this project's established discipline):
 *   - Pure function. No DB calls. No side effects. Deterministic output.
 *   - Must never throw on missing/partial input — a student who completes
 *     zero domains still gets a valid, if thin, StudentGenome. This is the
 *     same bypass rule already governing Parent Agent.
 *   - engine_version stamped on every output from day one.
 *   - Output field names/shapes for dominant_signal and network_geography
 *     are LOAD-BEARING — verified directly against the live
 *     synthesizeFamilySignal() function in worker.js, not assumed.
 *
 * Input: raw responses from Domains 1, 3, 4, 5 (free text, including the
 * two Gate 4 Item 3 follow-ups) + Domain 2's selected world ids (realm
 * weights looked up from student-domain2-realm-weights.js, never
 * duplicated here).
 */

'use strict';

import { WORLD_REALM_WEIGHTS, computeRealmScoresFromWorlds } from './student-domain2-realm-weights.js';

export const ENGINE_VERSION = 'student-signal-fusion-v1.0.0';

// Each realm contributes weighted points toward RIASEC letters, reflecting
// the blend patterns documented in the source Teen Activity taxonomy
// (e.g. "Make" career families skew Realistic/Investigative; "Create"
// skews Artistic/Enterprising). This is a behavioral bridge, not a
// replacement for RIASEC — consistent with STUDENT-AGENT-002 Section 4.
const REALM_TO_RIASEC = Object.freeze({
  make:   Object.freeze({ R: 3, I: 1 }),
  move:   Object.freeze({ R: 2, E: 1, S: 1 }),
  think:  Object.freeze({ I: 3, C: 1 }),
  create: Object.freeze({ A: 3, E: 1 }),
});

const REALM_FALLBACK_DESCRIPTIONS = Object.freeze({
  make:   'shows the strongest signal through building and producing tangible things',
  move:   'shows the strongest signal through physical activity, competition, or performance',
  think:  'shows the strongest signal through investigation, strategy, and problem-solving',
  create: 'shows the strongest signal through expression, storytelling, and design',
});

function hasContent(text) {
  return typeof text === 'string' && text.trim().length > 0;
}

/**
 * Domain 5 currently arrives from the frontend as a single already-combined
 * string (selected worry chips + free text joined with ". "). This splits
 * it into a {primary, secondary} shape matching Parent Agent's
 * anxiety_taxonomy structure, so the two can be compared meaningfully
 * later without adding a frontend change as a prerequisite for this item.
 */
export function deriveAnxietySignal(rawWorry) {
  if (!hasContent(rawWorry)) return { primary: null, secondary: null };
  const parts = rawWorry.split('. ').map((s) => s.trim()).filter(Boolean);
  return { primary: parts[0] || null, secondary: parts[1] || null };
}

/**
 * Prefers the student's own narrative language (richest, most natural-
 * language signal, and the best material for the word-overlap comparison
 * synthesizeFamilySignal() already performs against parent.child_perception).
 * Falls back to a realm-based description only when no narrative exists —
 * this never returns null/empty, per the bypass rule.
 */
export function deriveDominantSignal(narrativeSnapshot, realmScores) {
  if (hasContent(narrativeSnapshot)) return narrativeSnapshot.trim();
  const topRealm = pickTopRealm(realmScores);
  return topRealm ? REALM_FALLBACK_DESCRIPTIONS[topRealm] : 'has not yet generated enough signal to describe a dominant pattern';
}

function pickTopRealm(realmScores) {
  const entries = Object.entries(realmScores || {});
  const nonZero = entries.filter(([, v]) => v > 0);
  if (nonZero.length === 0) return null;
  nonZero.sort((a, b) => b[1] - a[1]);
  return nonZero[0][0];
}

/**
 * Derives a RIASEC blend (top 3 letters, matching the "R-I-A" style codes
 * already used throughout the source taxonomy) from composite realm scores.
 * Never asked directly of the student — derived only, per the platform's
 * existing principle that RIASEC stays behind the scenes.
 */
export function deriveRiasecBlend(realmScores) {
  const totals = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  Object.entries(realmScores || {}).forEach(([realm, score]) => {
    const contributions = REALM_TO_RIASEC[realm];
    if (!contributions || !score) return;
    Object.entries(contributions).forEach(([letter, weight]) => {
      totals[letter] += score * weight;
    });
  });

  const ranked = Object.entries(totals)
    .filter(([, total]) => total > 0)
    .sort((a, b) => b[1] - a[1])
    .map(([letter]) => letter);

  return ranked.slice(0, 3);
}

/**
 * Builds the Domain 2 world_selections array. Wrapped so that an unknown
 * world id (a sign the world grid and the weighting layer have drifted)
 * degrades this ONE domain gracefully rather than crashing the entire
 * profile — Item 1's computeRealmScoresFromWorlds still throws for callers
 * who want that strictness directly; this orchestration layer catches it
 * and reports the anomaly instead of failing the whole student.
 */
function buildDomain2Signal(selectedWorldIds) {
  const ids = Array.isArray(selectedWorldIds) ? selectedWorldIds : [];
  try {
    const realmScores = computeRealmScoresFromWorlds(ids);
    const worldSelections = ids.map((id) => ({ world_id: id, realm_weights: WORLD_REALM_WEIGHTS[id] }));
    return { realmScores, worldSelections, anomaly: null };
  } catch (err) {
    return { realmScores: { make: 0, move: 0, think: 0, create: 0 }, worldSelections: [], anomaly: err.message };
  }
}

/**
 * Main entry point. Call this and only this from outside the module.
 *
 * @param {object} input
 * @param {string} input.studentId
 * @param {string} input.familyId - LOAD-BEARING, must match what /synthesize-family queries by
 * @param {object} [input.domain1] - { narrative, narrative_followup }
 * @param {object} [input.domain2] - { worlds_chosen: string[] }
 * @param {object} [input.domain3] - { building, building_followup }
 * @param {object} [input.domain4] - { geographic_identity }
 * @param {object} [input.domain5] - { worry }
 * @returns {object} StudentGenome, per STUDENT-AGENT-002 Section 5
 */
export function fuseStudentSignal(input) {
  const {
    studentId = null,
    familyId = null,
    domain1 = {},
    domain2 = {},
    domain3 = {},
    domain4 = {},
    domain5 = {},
  } = input || {};

  const narrativeSnapshot = [domain1.narrative, domain1.narrative_followup].filter(hasContent).join(' ') || null;
  const buildingEvidence = [domain3.building, domain3.building_followup].filter(hasContent).join(' ') || null;
  const geographicIdentity = hasContent(domain4.geographic_identity) ? domain4.geographic_identity.trim() : null;

  const { realmScores, worldSelections, anomaly } = buildDomain2Signal(domain2.worlds_chosen);
  const anxietySignal = deriveAnxietySignal(domain5.worry);
  const dominantSignal = deriveDominantSignal(narrativeSnapshot, realmScores);
  const riasecBlend = deriveRiasecBlend(realmScores);

  const domainsPresent = [
    hasContent(narrativeSnapshot) && 'domain1',
    worldSelections.length > 0 && 'domain2',
    hasContent(buildingEvidence) && 'domain3',
    hasContent(geographicIdentity) && 'domain4',
    hasContent(domain5.worry) && 'domain5',
  ].filter(Boolean);

  return {
    student_id: studentId,
    family_id: familyId, // LOAD-BEARING — must match /synthesize-family's query field

    narrative_snapshot: narrativeSnapshot,
    world_selections: worldSelections,
    building_evidence: buildingEvidence,
    geographic_identity: geographicIdentity,
    anxiety_signal: anxietySignal,

    realm_scores: realmScores,
    riasec_blend: riasecBlend,

    dominant_signal: dominantSignal,          // LOAD-BEARING — read directly by synthesizeFamilySignal()
    network_geography: geographicIdentity,    // LOAD-BEARING — read directly as a fallback by synthesizeFamilySignal()

    engine_version: ENGINE_VERSION,

    meta: {
      domains_present: domainsPresent,
      domain2_anomaly: anomaly, // non-null only if an unknown world id was encountered — QA visibility, never blocks output
    },
  };
}
