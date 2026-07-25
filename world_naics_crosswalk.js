/**
 * VECTOR Lifescape — World-Tile -> NAICS Crosswalk
 * Implements TILE-SYSTEMS-002 Part 1 / WORLDS-CAREER-DEPTH-001 v2 Section 5.
 *
 * Standalone file per Section 5.2's decision -- kept adjacent to, not
 * merged into, crosswalk-db.js (Domain 1 activity tiles) and
 * lifescape_major_map.js (NAICS-keyed major content). Keeping the two
 * taxonomies (Domain 1 activity tiles vs Domain 2 World tiles) in
 * separate files is what made the original gap findable; this file
 * follows that same separation.
 *
 * World-tile ID list confirmed against student-domain2-realm-weights.js
 * (live production code, verified against actual lifescape.html markup) --
 * 20 tiles, not the 19 originally assumed in WORLDS-CAREER-DEPTH-001 v1.
 *
 * Confidence labeling follows the same HIGH/MEDIUM/GAP convention already
 * established in naics_to_industry_pathways.js, for consistency across
 * both NAICS crosswalks in the codebase:
 *   HIGH   — direct, unambiguous semantic match, cross-checked against
 *            naics_to_industry_pathways.js and/or lifescape_onet_map.js
 *            where those files independently cover the same sector.
 *   MEDIUM — defensible but genuinely arguable, flagged for review.
 *   GAP    — real federal/proprietary NAICS home exists conceptually, but
 *            no V5 industryPathways content backs it yet (a MAJOR_MAP/V5
 *            content gap, not a crosswalk error). getMajorsForWorld()
 *            will correctly return [] for these until that content lands --
 *            expected, not a bug in this file.
 */

'use strict';

const WORLD_TO_NAICS = Object.freeze({
  // Clinical/hands-on-body worlds — all three route to NAICS 62 (Health
  // Care), matching medicine/healing/therapy's shared federal sector;
  // V5's industryPathways keys (medicine, healthcareAdministration,
  // healthWellness) differentiate within the sector, not across it.
  medicine:    Object.freeze({ sectors: [62], confidence: 'HIGH' }),
  healing:     Object.freeze({ sectors: [62], confidence: 'HIGH' }),
  therapy:     Object.freeze({ sectors: [62], confidence: 'HIGH' }),

  // Systems/analytical worlds.
  technology:  Object.freeze({ sectors: [51], confidence: 'HIGH' }),
  money:       Object.freeze({ sectors: [52], confidence: 'HIGH' }),
  ideas:       Object.freeze({ sectors: [54], confidence: 'HIGH', note: 'Ideas = researching/analyzing (per student-domain2-realm-weights.js) -- consulting (54) is the closest real sector.' }),

  // Expression/argument worlds.
  persuasion:  Object.freeze({ sectors: [51], confidence: 'HIGH', note: 'Media/brand/storytelling -- NAICS 51 (Technology & Media) carries entertainmentMedia as a key; 71 also plausible as secondary.' }),
  justice:     Object.freeze({ sectors: [92], confidence: 'GAP', note: 'Legal reasoning/policy maps conceptually to NAICS 92 (Government), but no V5 industryPathways key exists for it -- returns no majors until that content is built, not a crosswalk error.' }),

  // Design + physical production.
  building:    Object.freeze({ sectors: [23], confidence: 'MEDIUM', note: 'Matches naics_to_industry_pathways.js -- already flagged there as a weak fit (realEstate is the closest available V5 key).' }),

  // Coordination/community worlds.
  civic:       Object.freeze({ sectors: [93], confidence: 'GAP', note: 'Coordinating people/institutions maps to the proprietary "Orchestration Layer" sector -- no V5 key exists yet (same GAP status as in naics_to_industry_pathways.js).' }),

  beauty:      Object.freeze({ sectors: [81], confidence: 'HIGH' }),

  power:       Object.freeze({ sectors: [54], confidence: 'MEDIUM', note: 'General leadership/operations -- consulting (54) is the closest sector, stretched beyond its core meaning.' }),

  compete:     Object.freeze({ sectors: [71], confidence: 'HIGH' }),

  military:    Object.freeze({ sectors: [100], confidence: 'HIGH' }),

  making:      Object.freeze({ sectors: [33], confidence: 'HIGH', note: 'Schema-correct per naics_to_industry_pathways.js, but zero V5 schools scored on advancedManufacturing yet as of that file -- known interim state.' }),

  food:        Object.freeze({ sectors: [11, 72], confidence: 'HIGH', note: 'Spans agriculture (growing) and hospitality (culinary) -- matches this world dual make+create realm weighting.' }),

  hospitality: Object.freeze({ sectors: [72], confidence: 'HIGH' }),

  energy:      Object.freeze({ sectors: [21, 22], confidence: 'HIGH' }),

  logistics:   Object.freeze({ sectors: [97, 48, 42], confidence: 'HIGH' }),

  biomanufacturing: Object.freeze({ sectors: [32], confidence: 'HIGH', note: 'Schema-correct per naics_to_industry_pathways.js, but zero V5 schools scored on pharmaceuticalManufacturing yet as of that file -- known interim state.' }),
});

/**
 * Converts worlds_chosen (array of World-tile IDs) into the NAICS-sector
 * shape lifescape.html already expects at the call site (line ~7022-7025):
 * duck-typed as { sector: number, ... } or a raw number, compared via
 * Number(n.sector || n). Unknown World IDs fire a visible console.error
 * (not console.warn) per TILE-SYSTEMS-002 Section 5.3's runtime-assertion
 * requirement -- a silent typeof guard already let this exact class of
 * gap ship undetected once; this must not repeat that.
 */
function getNAICSSectorsForWorlds(worldIds) {
  const ids = Array.isArray(worldIds) ? worldIds : [];
  const out = [];
  const seen = new Set();
  ids.forEach(function(rawId) {
    const id = String(rawId).toLowerCase().trim();
    const entry = WORLD_TO_NAICS[id];
    if (!entry) {
      console.error('[world_naics_crosswalk] Unknown World-tile ID "' + id + '" -- no NAICS mapping exists. This world will contribute no sector signal to school matching. Add it to WORLD_TO_NAICS.');
      return;
    }
    entry.sectors.forEach(function(sector) {
      if (seen.has(sector)) return;
      seen.add(sector);
      out.push({ sector: sector, source: 'world', worldId: id, confidence: entry.confidence });
    });
  });
  return out;
}

/**
 * Resolves a single World-tile ID to its matching MAJOR_MAP entries.
 * Consumed with a single argument at both call sites in lifescape.html
 * (buildCallDPrompt line ~5591, renderPossibleVectors line ~8030), so
 * this reads MAJOR_MAP as a global rather than a parameter -- matching
 * how those call sites are already written, and how the rest of this
 * codebase's typeof-guarded globals work.
 *
 * Returns [] (never throws, never fabricates) when: the World ID is
 * unknown, or its mapped NAICS sector(s) have no MAJOR_MAP content yet
 * (a real, separate content gap -- see file header).
 */
function getMajorsForWorld(worldId) {
  const id = String(worldId).toLowerCase().trim();
  const entry = WORLD_TO_NAICS[id];
  if (!entry) {
    console.error('[world_naics_crosswalk] getMajorsForWorld: unknown World-tile ID "' + id + '".');
    return [];
  }
  if (typeof MAJOR_MAP === 'undefined') {
    console.error('[world_naics_crosswalk] getMajorsForWorld: MAJOR_MAP is not loaded -- check script order (lifescape_major_map.js must load before world_naics_crosswalk.js).');
    return [];
  }
  const majors = [];
  const seenLabels = new Set();
  entry.sectors.forEach(function(sector) {
    const bucket = MAJOR_MAP[String(sector)];
    if (!Array.isArray(bucket)) return; // real content gap, not an error -- see file header
    bucket.forEach(function(m) {
      if (m && m.major_label && !seenLabels.has(m.major_label)) {
        seenLabels.add(m.major_label);
        majors.push(m);
      }
    });
  });
  return majors;
}

/**
 * Standing regression check, mirrors validateCurationMap()'s pattern.
 * Confirms every WORLD_TO_NAICS entry resolves to at least one NAICS
 * sector (trivially true by construction) AND reports which worlds
 * currently resolve to a sector with real MAJOR_MAP content vs. an
 * empty bucket, so a content gap is visible rather than silent.
 */
function validateWorldNaicsCrosswalk() {
  const results = [];
  Object.keys(WORLD_TO_NAICS).forEach(function(worldId) {
    const majors = getMajorsForWorld(worldId);
    results.push({
      worldId: worldId,
      confidence: WORLD_TO_NAICS[worldId].confidence,
      sectors: WORLD_TO_NAICS[worldId].sectors,
      majorCount: majors.length,
      hasContent: majors.length > 0
    });
  });
  return {
    totalWorlds: results.length,
    worldsWithContent: results.filter(function(r) { return r.hasContent; }).length,
    worldsWithoutContent: results.filter(function(r) { return !r.hasContent; }).map(function(r) { return r.worldId; }),
    results: results
  };
}

if (typeof window !== 'undefined') {
  window.WORLD_TO_NAICS = WORLD_TO_NAICS;
  window.getNAICSSectorsForWorlds = getNAICSSectorsForWorlds;
  window.getMajorsForWorld = getMajorsForWorld;
  window.validateWorldNaicsCrosswalk = validateWorldNaicsCrosswalk;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORLD_TO_NAICS, getNAICSSectorsForWorlds, getMajorsForWorld, validateWorldNaicsCrosswalk };
}
