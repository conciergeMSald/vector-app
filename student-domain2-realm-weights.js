/**
 * student-domain2-realm-weights.js
 * VECTOR — STUDENT-AGENT-002, Gate 4, Item 1
 *
 * Formally assigns Domain 2 (per STUDENT-AGENT-002 Section 3) to the
 * existing world/tile selection mechanism — Screen 37 in lifescape.html,
 * "Which of these worlds feels most like yours?" This file does NOT modify
 * the world grid, IBIS_WORLD_REGISTRY, or any existing selection behavior.
 * It is a parallel tagging layer (per OQ-1) that gives each world a
 * Make/Move/Think/Create realm weighting, so world selection itself
 * becomes behavioral signal — not just topical interest.
 *
 * OQ-1 recommended starting with partial coverage (most-selected worlds
 * only) and expanding later. Once the full, real 20-world list was pulled
 * directly from the live file, full coverage turned out to be immediately
 * feasible — this exceeds OQ-1's minimum rather than deferring it.
 *
 * Weight scale: 0 (absent) to 3 (strongly present) per realm, per world.
 * Weights are not normalized to sum to a fixed total — some worlds are
 * genuinely more concentrated in one realm (money: think=3, everything
 * else=0) while others are genuinely blended (making: high across three).
 * Rationale is commented per world so these are reviewable, not opaque.
 */

'use strict';

// The complete, current 20-world list — pulled directly from lifescape.html
// Screen 37 (world-card buttons), not assumed or reconstructed from memory.
export const KNOWN_WORLD_IDS = Object.freeze([
  'medicine', 'healing', 'therapy', 'technology', 'money', 'ideas',
  'persuasion', 'justice', 'building', 'civic', 'beauty', 'power',
  'compete', 'military', 'making', 'food', 'hospitality', 'energy',
  'logistics', 'biomanufacturing',
]);

export const WORLD_REALM_WEIGHTS = Object.freeze({
  // MDs, surgeons, licensure path — diagnostic thinking dominant, real hands-on procedure work secondary.
  medicine:        Object.freeze({ make: 1, move: 1, think: 3, create: 0 }),
  // RN/PA/acupuncture — hands-on patient care is the daily reality, with real diagnostic thinking too.
  healing:         Object.freeze({ make: 2, move: 1, think: 2, create: 0 }),
  // Speech/OT/PT — rebuilding function is physical, hands-on work with the body.
  therapy:         Object.freeze({ make: 2, move: 2, think: 1, create: 0 }),
  // Software/engineering — building systems is investigative + constructive, some creative system design.
  technology:      Object.freeze({ make: 2, move: 0, think: 3, create: 1 }),
  // Finance/banking/accounting/investments — almost entirely analytical.
  money:           Object.freeze({ make: 0, move: 0, think: 3, create: 0 }),
  // Research/academia/discovery — investigative core, some creative theorizing.
  ideas:           Object.freeze({ make: 0, move: 0, think: 3, create: 1 }),
  // Marketing/media/storytelling/brand — expression and audience-building dominant.
  persuasion:      Object.freeze({ make: 0, move: 0, think: 1, create: 3 }),
  // Law/policy/advocacy — argument construction and evidence analysis, some persuasive expression.
  justice:         Object.freeze({ make: 0, move: 0, think: 3, create: 1 }),
  // Architecture/construction/real estate — the taxonomy's clearest "Make" career family, with real design thinking.
  building:        Object.freeze({ make: 3, move: 1, think: 2, create: 1 }),
  // Government/service/community leadership — organizing and reasoning about systems, some public-facing expression.
  civic:           Object.freeze({ make: 0, move: 1, think: 2, create: 1 }),
  // Arts/fashion/aesthetics — the taxonomy's clearest "Create" career family.
  beauty:          Object.freeze({ make: 1, move: 0, think: 0, create: 3 }),
  // Entrepreneurship/leadership/strategy/scale — strategic thinking plus building something to present.
  power:           Object.freeze({ make: 1, move: 0, think: 2, create: 1 }),
  // Sport/performance/winning — overwhelmingly physical, tactical thinking secondary.
  compete:         Object.freeze({ make: 0, move: 3, think: 1, create: 0 }),
  // Military/discipline/mission — physical demand and leadership-under-pressure dominant.
  military:        Object.freeze({ make: 1, move: 3, think: 1, create: 0 }),
  // Manufacturing/engineering/hands-on production — the taxonomy's other clear "Make" anchor, blended with real thinking.
  making:          Object.freeze({ make: 3, move: 1, think: 1, create: 1 }),
  // Agriculture/culinary/supply chain — physical production work, some craft/creative plating and technique.
  food:            Object.freeze({ make: 3, move: 1, think: 1, create: 1 }),
  // Travel/guest experience/events — service delivery is physical and interpersonal, lightly blended across realms.
  hospitality:     Object.freeze({ make: 1, move: 1, think: 1, create: 1 }),
  // Power/infrastructure/systems — technical production plus systems-level analytical thinking.
  energy:          Object.freeze({ make: 2, move: 0, think: 2, create: 0 }),
  // Movement/supply chain/getting things where they need to be — coordination-heavy, physically distributed, systems thinking.
  logistics:       Object.freeze({ make: 1, move: 1, think: 2, create: 0 }),
  // Making medicines/vaccines/therapies — production-floor "Make" work grounded in real scientific/technical thinking.
  biomanufacturing: Object.freeze({ make: 3, move: 0, think: 2, create: 0 }),
});

/**
 * Confirms every known world has exactly one weight entry, and every
 * weight entry corresponds to a known world — catches drift if the world
 * grid changes without this file being updated, or vice versa.
 */
export function validateWorldCoverage() {
  const weightedIds = Object.keys(WORLD_REALM_WEIGHTS);
  const missing = KNOWN_WORLD_IDS.filter((id) => !weightedIds.includes(id));
  const extra = weightedIds.filter((id) => !KNOWN_WORLD_IDS.includes(id));
  return { complete: missing.length === 0 && extra.length === 0, missing, extra };
}

const REALMS = ['make', 'move', 'think', 'create'];

/**
 * Aggregates the realm weights of 1 or 2 selected worlds (Screen 37 allows
 * at most 2 — SELECTED_WORLDS.size >= 2 in the live selectWorld() logic)
 * into a single composite realm_scores object. Averaged, not summed, so a
 * student who selects two worlds is not automatically scored "more
 * behaviorally active" than one who selects a single world that fits them
 * precisely — the composite stays on the same 0-3 scale regardless of how
 * many worlds were chosen.
 *
 * An empty selection returns all-zero scores rather than throwing — a
 * student who hasn't reached Domain 2 yet still has a valid, if thinner,
 * profile, consistent with the platform's existing "nothing required
 * blocks a profile" principle.
 *
 * @param {string[]} selectedWorldIds - 0, 1, or 2 world ids from LS_STATE.worlds_chosen
 * @returns {{ make: number, move: number, think: number, create: number }}
 */
export function computeRealmScoresFromWorlds(selectedWorldIds) {
  if (!Array.isArray(selectedWorldIds) || selectedWorldIds.length === 0) {
    return { make: 0, move: 0, think: 0, create: 0 };
  }

  const unknown = selectedWorldIds.filter((id) => !(id in WORLD_REALM_WEIGHTS));
  if (unknown.length > 0) {
    throw new Error(`computeRealmScoresFromWorlds received unknown world id(s): ${unknown.join(', ')} — the world grid and this weighting layer have drifted out of sync`);
  }

  const totals = { make: 0, move: 0, think: 0, create: 0 };
  selectedWorldIds.forEach((id) => {
    const weights = WORLD_REALM_WEIGHTS[id];
    REALMS.forEach((realm) => { totals[realm] += weights[realm]; });
  });

  const n = selectedWorldIds.length;
  const averaged = {};
  REALMS.forEach((realm) => { averaged[realm] = Math.round((totals[realm] / n) * 100) / 100; });
  return averaged;
}

export { REALMS };
