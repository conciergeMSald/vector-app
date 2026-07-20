/**
 * student-domain2-realm-weights.js
 * VECTOR — STUDENT-AGENT-002, Gate 4 Item 1
 *
 * Domain 2 (World & Interest Selection) formalized: assigns Make/Move/
 * Think/Create realm weights to each of the 20 live world tiles
 * (data-world attributes, confirmed against the actual lifescape.html
 * markup — this is not a speculative list). Per Section 3's domain
 * table, Domain 2's realm contribution "varies by tile" — this file is
 * that variance, made explicit and reviewable.
 *
 * SCOPE (per spec OQ-1): full coverage across all 20 tiles, not a
 * partial tagging layer. OQ-1's stated concern was avoiding "a large,
 * hard-to-review single change" — with only 20 tiles total, full
 * coverage IS the small, reviewable change; a partial layer would have
 * added a second follow-up build step for no real risk reduction.
 *
 * WEIGHTS: 0-4 scale, same ceiling as the text-evidence bumps in the
 * Signal Fusion Engine (MAX_TEXT_EVIDENCE_PER_REALM), so a single world
 * selection carries meaningfully more signal than a keyword hit in free
 * text (a deliberate choice — selecting a world is explicit, weighted
 * intent; a keyword in a sentence is incidental evidence) without
 * swamping it entirely. Most tiles carry weight in 1-2 realms, reflecting
 * that most tiles have a dominant behavioral character rather than an
 * even four-way split; a few genuinely blended tiles (e.g. building,
 * biomanufacturing) carry two meaningful realms on purpose.
 *
 * RATIONALE lives inline per tile — anyone revising this later should be
 * able to see WHY a weight was assigned, not just what it is.
 */

'use strict';

export const WORLD_REALM_WEIGHTS = Object.freeze({
  // Clinical/hands-on-body worlds — physical, procedural work under real
  // stakes. Medicine carries more Think than Healing/Therapy because of
  // its diagnostic-reasoning weight (the long residency/licensure path
  // the tile itself names); Healing/Therapy skew more purely hands-on.
  medicine:    Object.freeze({ make: 2, move: 0, think: 3, create: 0 }),
  healing:     Object.freeze({ make: 3, move: 0, think: 1, create: 0 }),
  therapy:     Object.freeze({ make: 3, move: 0, think: 1, create: 0 }),

  // Systems/analytical worlds — Technology blends genuine building
  // (make) with genuine problem-solving (think), matching "Building
  // systems, software, engineering" in its own description. Money and
  // Ideas are pure Think — calculating/analyzing and researching
  // respectively, no hands-on or expressive component in the tile as
  // described.
  technology:  Object.freeze({ make: 3, move: 0, think: 3, create: 0 }),
  money:       Object.freeze({ make: 0, move: 0, think: 4, create: 0 }),
  ideas:       Object.freeze({ make: 0, move: 0, think: 4, create: 0 }),

  // Expression/argument worlds — Persuasion is almost pure Create
  // (storytelling, brand, media). Justice leads Think (legal reasoning,
  // policy) with a real Create component (advocacy is composed
  // argument, not just analysis) — this is the one tile where a
  // literal Section 4 core-question word ("debate") spans both realms.
  persuasion:  Object.freeze({ make: 0, move: 0, think: 1, create: 4 }),
  justice:     Object.freeze({ make: 0, move: 0, think: 3, create: 1 }),

  // Design + physical production — Building is deliberately dual-realm:
  // architecture/design is Create, construction/making is Make, and the
  // tile's own description ("Architecture, design, construction, real
  // estate, making") names both halves explicitly.
  building:    Object.freeze({ make: 3, move: 0, think: 0, create: 2 }),

  // Coordination/community worlds — Civic blends Move (coordinate,
  // community-facing) with Think (policy, strategy); it is deliberately
  // NOT weighted toward Create or Make since the tile is about
  // organizing people and institutions, not producing objects or ideas
  // for their own sake.
  civic:       Object.freeze({ make: 0, move: 2, think: 2, create: 0 }),

  // Pure aesthetic/expressive world.
  beauty:      Object.freeze({ make: 0, move: 0, think: 0, create: 4 }),

  // Business/leadership — strategy (Think) and coordinating/leading
  // people and operations (Move's "coordinate" core question) rather
  // than hands-on production or pure expression.
  power:       Object.freeze({ make: 0, move: 2, think: 2, create: 0 }),

  // Physical performance world — pure Move, matching "Sport,
  // performance, winning, the score" directly.
  compete:     Object.freeze({ make: 0, move: 4, think: 0, create: 0 }),

  // Discipline/mission under pressure — mostly Move (physical,
  // performance-under-pressure), with a Think component for the
  // strategic/tactical dimension the tile names ("leadership under
  // pressure" implies real-time strategy, not just physical execution).
  military:    Object.freeze({ make: 0, move: 3, think: 1, create: 0 }),

  // Pure hands-on production, matching "Manufacturing, engineering,
  // hands-on production" directly — the cleanest Make tile of the set.
  making:      Object.freeze({ make: 4, move: 0, think: 0, create: 0 }),

  // Agriculture/culinary — mostly Make (growing, cooking, producing),
  // with a small Create component for culinary creativity specifically
  // (composing a dish is a creative act layered on a production one).
  food:        Object.freeze({ make: 3, move: 0, think: 0, create: 1 }),

  // Guest experience/events — Move for logistics/coordination of an
  // event or trip, Create for designing the experience itself; neither
  // Make nor Think fits what the tile actually describes.
  hospitality: Object.freeze({ make: 0, move: 2, think: 0, create: 2 }),

  // Infrastructure/systems — Make for the physical infrastructure
  // itself, Think for the systems-level engineering/planning the tile's
  // "systems that run everything" phrasing implies.
  energy:      Object.freeze({ make: 2, move: 0, think: 3, create: 0 }),

  // Movement/coordination of goods — Move dominant ("Movement, supply
  // chain, getting things where they need to be" is literally Move's
  // core question), Think for the coordination/planning layer.
  logistics:   Object.freeze({ make: 0, move: 3, think: 1, create: 0 }),

  // Biomanufacturing — Make for the physical production of medicines/
  // vaccines/therapies, Think for the process science underneath it;
  // deliberately distinct from Medicine (no diagnostic/clinical
  // component) and from Making (the process science component is real,
  // unlike pure manufacturing).
  biomanufacturing: Object.freeze({ make: 3, move: 0, think: 2, create: 0 }),
});

/**
 * Converts a flat array of selected world ids (LS_STATE.worlds_chosen,
 * e.g. ["medicine", "technology"]) into the Section 5 world_selections
 * shape: [{ world_id, realm_weights }]. Unknown world ids (a typo, a
 * future tile not yet in this map) get zero-weight placeholders rather
 * than being dropped silently or throwing — consistent with the
 * bypass rule the rest of this system follows. The anomaly is surfaced
 * in the return value so callers can log it without it ever blocking
 * genome computation.
 */
export function buildWorldSelections(worldIds) {
  const ids = Array.isArray(worldIds) ? worldIds : [];
  let unknownEncountered = null;
  const selections = ids.map((rawId) => {
    const id = String(rawId).toLowerCase().trim();
    const weights = WORLD_REALM_WEIGHTS[id];
    if (!weights) {
      unknownEncountered = unknownEncountered || id;
      return { world_id: id, realm_weights: { make: 0, move: 0, think: 0, create: 0 } };
    }
    return { world_id: id, realm_weights: { ...weights } };
  });
  return { selections, unknownEncountered };
}

if (typeof module !== 'undefined') {
  module.exports = { WORLD_REALM_WEIGHTS, buildWorldSelections };
}
