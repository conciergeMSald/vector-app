/**
 * VECTOR Lifescape — Domain 2 Realm-Weighting Module
 * STUDENT-AGENT-002 Gate 4, Item 2 (map) + Item 4 (this wiring module)
 * Built 2026-07-23.
 *
 * This file does NOT define a second realm-weighting map. Gate 4 Item 2's
 * actual, real map is TILE_REALM_WEIGHTS in lifescape_curation_map_v1.js —
 * this file re-exports it and provides the one function the Signal Fusion
 * Engine needs on top of it: buildWorldSelections().
 *
 * NAMING CORRECTION (2026-07-23): the Signal Fusion Engine call site in
 * lifescape.html originally called this function as
 * buildWorldSelections(profile.worlds_chosen) — but worlds_chosen holds
 * World-card selections (the 19 IBIS_WORLD_REGISTRY worlds), a different,
 * coarser selection layer than the activity tiles TILE_REALM_WEIGHTS is
 * keyed by. Domain 2's own spec language ("realm-weighting... varies by
 * tile") confirms tiles are the correct granularity. The function name is
 * kept as buildWorldSelections for minimal disruption to the existing call
 * site, but it now takes tile ids (selectedTileIds) and its output field is
 * tile_id, not world_id — do not feed this function worlds_chosen.
 *
 * 5 realms (make, move, think, people, systems) — confirmed 2026-07-22 to
 * match the live tile system (CLUSTER_CONFIG/TILE_POOLS in lifescape.html),
 * not the 4-realm "make/move/think/create" language in the original spec
 * text.
 *
 * COVERAGE (as of this build): TILE_REALM_WEIGHTS covers only the 10 tiles
 * seeded so far (the 8 ALWAYS_SHOW tiles + content_creation +
 * daily_word_puzzles) — a deliberate lightweight-first pass per OQ-1, not a
 * full retrofit of the 100+ tiles in TILE_POOLS. Most real student sessions
 * will therefore have selected tiles with NO weight data. This is handled
 * as the expected common case, not a rare edge case: unweighted tiles are
 * silently zero-weighted (Progressive Report Architecture's "missing data
 * stays invisible, not broken"), and only a single aggregate note fires if
 * NONE of a student's selected tiles have any weight data at all — that is
 * the one genuinely worth-flagging degenerate case, not routine partial
 * coverage.
 */

(function (root) {
  'use strict';

  var ZERO_WEIGHTS = Object.freeze({ make: 0, move: 0, think: 0, people: 0, systems: 0 });

  function getTileRealmWeightsSource() {
    // Prefer the real map if it's loaded (lifescape_curation_map_v1.js).
    if (typeof root !== 'undefined' && root.TILE_REALM_WEIGHTS) return root.TILE_REALM_WEIGHTS;
    if (typeof TILE_REALM_WEIGHTS !== 'undefined') return TILE_REALM_WEIGHTS;
    return null;
  }

  /**
   * buildWorldSelections(selectedTileIds)
   * @param {Iterable<string>} selectedTileIds - LS_STATE.selectedTileIds (a Set) or any array-like of tile id strings
   * @returns {{ selections: Array<{tile_id: string, realm_weights: object, weighted: boolean}>, unweightedCount: number, totalCount: number, allUnweighted: boolean }}
   */
  function buildWorldSelections(selectedTileIds) {
    var ids = selectedTileIds ? Array.from(selectedTileIds) : [];
    var weightsMap = getTileRealmWeightsSource();
    var unweightedCount = 0;

    var selections = ids.map(function (tileId) {
      var entry = weightsMap ? weightsMap[tileId] : null;
      if (!entry) {
        unweightedCount += 1;
        return { tile_id: tileId, realm_weights: ZERO_WEIGHTS, weighted: false };
      }
      return {
        tile_id: tileId,
        realm_weights: {
          make: entry.make || 0,
          move: entry.move || 0,
          think: entry.think || 0,
          people: entry.people || 0,
          systems: entry.systems || 0
        },
        weighted: true
      };
    });

    var totalCount = ids.length;
    var allUnweighted = totalCount > 0 && unweightedCount === totalCount;

    return {
      selections: selections,
      unweightedCount: unweightedCount,
      totalCount: totalCount,
      allUnweighted: allUnweighted
    };
  }

  var api = { buildWorldSelections: buildWorldSelections, TILE_REALM_WEIGHTS_ZERO: ZERO_WEIGHTS };

  if (typeof root !== 'undefined') root.buildWorldSelections = buildWorldSelections;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this);
