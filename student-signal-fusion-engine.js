/**
 * student-signal-fusion-engine.js
 * VECTOR — STUDENT-AGENT-002, Section 6 (Signal Fusion Engine)
 *
 * CONTRACT (Section 6, non-negotiable):
 *   - Pure function. No DB calls. No side effects. Deterministic given the
 *     same inputs.
 *   - Must never throw on missing/partial input — a student who completes
 *     only Domain 2 (tile selection) still produces a valid, if thinner,
 *     StudentGenome. Bypass rule, mirrors Parent Agent's signal engine.
 *   - engine_version stamped on every output from day one.
 *   - dominant_signal and network_geography are LOAD-BEARING — verified
 *     against the live synthesizeFamilySignal() function, not assumed.
 *     Any future rename requires updating Synthesis in the same change.
 *   - riasec_blend is derived, never asked directly (Section 6).
 *
 * INPUT SHAPE:
 *   Domain 2's world_selections arrive PRE-WEIGHTED — i.e. each element is
 *   already { world_id, realm_weights: {make,move,think,create} } per the
 *   Section 5 schema. This module does not perform the tile→realm lookup
 *   itself (that lookup is Gate 4 Item 1, the realm-weighting map); it
 *   consumes its output. This keeps the fusion engine free of any import
 *   dependency on the tile registry, consistent with "no side effects."
 *
 * REALM → RIASEC BRIDGE — pressure-tested July 2026 against the O*NET
 * Mini-IP validated scale intercorrelations (developmental N=1061,
 * validation N=575) and Holland's (1997) hexagon adjacency:
 *   - make:R,I,C  — R/I are hexagon-adjacent and empirically correlated
 *     (.29-.32); C's true empirical partner is R (.30/.48), not I
 *     (.15-.17) — moved here from an earlier think:I,C draft.
 *   - move:R,E    — S dropped: R and S are hexagon-OPPOSITE and
 *     empirically near-zero correlated (.08-.09) in both samples: mixing
 *     them muddied the realm and risked false-coding a socially-driven,
 *     non-hands-on student as Realistic.
 *   - think:I     — left clean after C's removal.
 *   - create:A,E  — held up as originally drafted; A/E correlate more
 *     strongly (.27-.42) than their hexagon distance would suggest.
 */

'use strict';

export const ENGINE_VERSION = 'student-signal-fusion-v1.1.0'; // v1.1.0: corrected REALM_TO_RIASEC (see header)

// ---------------------------------------------------------------------------
// Realm -> RIASEC bridge (Section 4's behavioral entry layer feeding RIASEC)
// ---------------------------------------------------------------------------
const REALM_TO_RIASEC = Object.freeze({
  make:   Object.freeze({ R: 3, I: 1, C: 1 }),
  move:   Object.freeze({ R: 3, E: 1 }),
  think:  Object.freeze({ I: 3 }),
  create: Object.freeze({ A: 3, E: 1 }),
});

const REALM_FALLBACK_DESCRIPTIONS = Object.freeze({
  make:   'shows the strongest signal through building and producing tangible things',
  move:   'shows the strongest signal through physical activity, competition, or performance',
  think:  'shows the strongest signal through investigation, strategy, and problem-solving',
  create: 'shows the strongest signal through expression, storytelling, and design',
});

// Lightweight, transparent keyword nudges — NOT a replacement for the tile
// realm-weighting map. This only lets free-text evidence volunteered in
// Domains 1 and 3 add a modest, bounded signal on top of Domain 2's
// weighted selections, per Section 6 ("realm_scores are computed from
// Domain 2's weighted tile selections plus any Activity Signal evidence
// volunteered in Domains 1 and 3"). Deliberately simple and auditable —
// no NLP model, no external call, keeps the function pure.
const REALM_KEYWORDS = Object.freeze({
  make:   ['build', 'built', 'fix', 'fixed', 'assemble', 'grow', 'grew', 'cook', 'produce', 'repair', 'made'],
  move:   ['compete', 'competition', 'perform', 'explore', 'coordinate', 'travel', 'sport', 'practice'],
  think:  ['investigate', 'strategy', 'strategize', 'calculate', 'debate', 'figure out', 'solve', 'research'],
  create: ['imagine', 'design', 'write', 'wrote', 'film', 'compose', 'draw', 'paint', 'invent'],
});

const TEXT_EVIDENCE_BASE = 1;      // base bump if any content present at all
const TEXT_EVIDENCE_KEYWORD = 1;   // additional bump per matched realm keyword hit
const TEXT_EVIDENCE_FOLLOWUP = 1;  // additional bump if the verb-based follow-up was answered (Initiative/Persistence proxy)
const MAX_TEXT_EVIDENCE_PER_REALM = 4; // cap so free text can't dominate weighted tile selections

function hasContent(text) {
  return typeof text === 'string' && text.trim().length > 0;
}

function textEvidenceForRealm(realm, ...texts) {
  const joined = texts.filter(hasContent).join(' ').toLowerCase();
  if (!joined) return 0;
  let score = TEXT_EVIDENCE_BASE;
  const keywords = REALM_KEYWORDS[realm] || [];
  for (const kw of keywords) {
    if (joined.includes(kw)) score += TEXT_EVIDENCE_KEYWORD;
  }
  return Math.min(score, MAX_TEXT_EVIDENCE_PER_REALM);
}

/**
 * Domain 5 arrives as a single combined string (selected worry chips + free
 * text joined). Splits into {primary, secondary}, matching Parent Agent's
 * anxiety_taxonomy shape so the two can be compared meaningfully in
 * Synthesis without a translation layer.
 */
export function deriveAnxietySignal(rawWorry) {
  if (!hasContent(rawWorry)) return { primary: null, secondary: null };
  const parts = rawWorry.split('. ').map((s) => s.trim()).filter(Boolean);
  return { primary: parts[0] || null, secondary: parts[1] || null };
}

function pickTopRealm(realmScores) {
  const entries = Object.entries(realmScores || {});
  const nonZero = entries.filter(([, v]) => v > 0);
  if (nonZero.length === 0) return null;
  nonZero.sort((a, b) => b[1] - a[1]);
  return nonZero[0][0];
}

/**
 * Prefers the student's own narrative language (richest signal, and the
 * best material for Synthesis's word-overlap comparison against
 * parent.child_perception). Falls back to a realm-based description only
 * when no narrative exists — never returns null/empty, per bypass rule.
 */
export function deriveDominantSignal(narrativeSnapshot, realmScores) {
  if (hasContent(narrativeSnapshot)) return narrativeSnapshot.trim();
  const topRealm = pickTopRealm(realmScores);
  return topRealm
    ? REALM_FALLBACK_DESCRIPTIONS[topRealm]
    : 'has not yet generated enough signal to describe a dominant pattern';
}

/**
 * Composite realm_scores: sums Domain 2's pre-weighted tile selections,
 * then adds bounded text-evidence bumps from Domains 1 (create/think per
 * Section 3's domain-realm table) and 3 (make).
 */
export function computeRealmScores(worldSelections, domain1Text, domain3Text) {
  const scores = { make: 0, move: 0, think: 0, create: 0 };

  for (const sel of Array.isArray(worldSelections) ? worldSelections : []) {
    const weights = sel && sel.realm_weights ? sel.realm_weights : {};
    for (const realm of Object.keys(scores)) {
      const w = Number(weights[realm]);
      if (Number.isFinite(w)) scores[realm] += w;
    }
  }

  // Domain 1 primary realms: Create + Think (Section 3)
  scores.create += textEvidenceForRealm('create', domain1Text);
  scores.think += textEvidenceForRealm('think', domain1Text);

  // Domain 3 primary realm: Make (Section 3)
  scores.make += textEvidenceForRealm('make', domain3Text);

  return scores;
}

/**
 * Derives a RIASEC blend (letters ordered by descending composite score,
 * ties broken by RIASEC hexagon order) from composite realm_scores, using
 * the pressure-tested REALM_TO_RIASEC bridge. Returns [] when there is no
 * signal at all — never a fabricated guess.
 */
export function deriveRiasecBlend(realmScores) {
  const points = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  let anySignal = false;

  for (const [realm, score] of Object.entries(realmScores || {})) {
    if (!score) continue;
    const bridge = REALM_TO_RIASEC[realm];
    if (!bridge) continue;
    anySignal = true;
    for (const [letter, weight] of Object.entries(bridge)) {
      points[letter] += score * weight;
    }
  }

  if (!anySignal) return [];

  const hexOrder = ['R', 'I', 'A', 'S', 'E', 'C'];
  return Object.entries(points)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1] || hexOrder.indexOf(a[0]) - hexOrder.indexOf(b[0]))
    .map(([letter]) => letter);
}

/**
 * fuseStudentSignal — the module's single public entry point.
 * Never throws. Missing/partial input produces a valid, thin StudentGenome.
 */
export function fuseStudentSignal(input = {}) {
  const {
    studentId = null,
    familyId = null,
    domain1 = {},
    domain2 = {},
    domain3 = {},
    domain4 = {},
    domain5 = {},
  } = input || {};

  const narrative = hasContent(domain1.narrative) ? domain1.narrative.trim() : null;
  const narrativeFollowup = hasContent(domain1.narrativeFollowup) ? domain1.narrativeFollowup.trim() : null;
  const narrativeSnapshot = [narrative, narrativeFollowup].filter(Boolean).join(' ') || null;

  const worldSelections = Array.isArray(domain2.worldSelections) ? domain2.worldSelections : [];

  const building = hasContent(domain3.evidence) ? domain3.evidence.trim() : null;
  const buildingFollowup = hasContent(domain3.evidenceFollowup) ? domain3.evidenceFollowup.trim() : null;
  const buildingEvidence = [building, buildingFollowup].filter(Boolean).join(' ') || null;

  const geographicIdentity = hasContent(domain4.geographicIdentity) ? domain4.geographicIdentity.trim() : null;

  const anxietySignal = deriveAnxietySignal(domain5.rawWorry);

  // Text evidence draws on the combined domain1/domain3 strings (narrative
  // + follow-up), so an answered follow-up naturally contributes its own
  // keyword surface without a separate bonus term duplicating that logic.
  const realmScores = computeRealmScores(worldSelections, narrativeSnapshot, buildingEvidence);

  const riasecBlend = deriveRiasecBlend(realmScores);
  const dominantSignal = deriveDominantSignal(narrativeSnapshot, realmScores);

  const domainsPresent = [];
  if (narrativeSnapshot) domainsPresent.push(1);
  if (worldSelections.length > 0) domainsPresent.push(2);
  if (buildingEvidence) domainsPresent.push(3);
  if (geographicIdentity) domainsPresent.push(4);
  if (anxietySignal.primary) domainsPresent.push(5);

  return {
    student_id: studentId,
    family_id: familyId, // load-bearing — Synthesis queries by this field
    narrative_snapshot: narrativeSnapshot,
    world_selections: worldSelections,
    building_evidence: buildingEvidence,
    geographic_identity: geographicIdentity,
    anxiety_signal: anxietySignal,
    realm_scores: realmScores,
    riasec_blend: riasecBlend,
    dominant_signal: dominantSignal, // load-bearing — read directly by synthesizeFamilySignal()
    network_geography: geographicIdentity, // load-bearing — read directly as a fallback by synthesizeFamilySignal()
    engine_version: ENGINE_VERSION,
    meta: {
      domains_present: domainsPresent,
    },
  };
}

if (typeof module !== 'undefined') {
  module.exports = {
    ENGINE_VERSION,
    deriveAnxietySignal,
    deriveDominantSignal,
    computeRealmScores,
    deriveRiasecBlend,
    fuseStudentSignal,
  };
}
