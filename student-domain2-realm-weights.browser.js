/**
 * student-domain2-realm-weights.browser.js
 * VECTOR — STUDENT-AGENT-002, Gate 4 Item 1
 *
 * Classic-script twin of student-domain2-realm-weights.js, same pattern
 * as student-signal-fusion-engine.browser.js — logic and data must stay
 * byte-identical between the two; if this map is ever revised, revise
 * both files (or extract to one source) rather than letting them drift.
 */

(function (global) {
  'use strict';

  var WORLD_REALM_WEIGHTS = {
    medicine:         { make: 2, move: 0, think: 3, create: 0 },
    healing:          { make: 3, move: 0, think: 1, create: 0 },
    therapy:          { make: 3, move: 0, think: 1, create: 0 },
    technology:       { make: 3, move: 0, think: 3, create: 0 },
    money:            { make: 0, move: 0, think: 4, create: 0 },
    ideas:            { make: 0, move: 0, think: 4, create: 0 },
    persuasion:       { make: 0, move: 0, think: 1, create: 4 },
    justice:          { make: 0, move: 0, think: 3, create: 1 },
    building:         { make: 3, move: 0, think: 0, create: 2 },
    civic:            { make: 0, move: 2, think: 2, create: 0 },
    beauty:           { make: 0, move: 0, think: 0, create: 4 },
    power:            { make: 0, move: 2, think: 2, create: 0 },
    compete:          { make: 0, move: 4, think: 0, create: 0 },
    military:         { make: 0, move: 3, think: 1, create: 0 },
    making:           { make: 4, move: 0, think: 0, create: 0 },
    food:             { make: 3, move: 0, think: 0, create: 1 },
    hospitality:      { make: 0, move: 2, think: 0, create: 2 },
    energy:           { make: 2, move: 0, think: 3, create: 0 },
    logistics:        { make: 0, move: 3, think: 1, create: 0 },
    biomanufacturing: { make: 3, move: 0, think: 2, create: 0 },
  };

  function buildWorldSelections(worldIds) {
    var ids = Array.isArray(worldIds) ? worldIds : [];
    var unknownEncountered = null;
    var selections = ids.map(function (rawId) {
      var id = String(rawId).toLowerCase().replace(/^\s+|\s+$/g, '');
      var weights = WORLD_REALM_WEIGHTS[id];
      if (!weights) {
        unknownEncountered = unknownEncountered || id;
        return { world_id: id, realm_weights: { make: 0, move: 0, think: 0, create: 0 } };
      }
      return { world_id: id, realm_weights: { make: weights.make, move: weights.move, think: weights.think, create: weights.create } };
    });
    return { selections: selections, unknownEncountered: unknownEncountered };
  }

  global.WORLD_REALM_WEIGHTS = WORLD_REALM_WEIGHTS;
  global.buildWorldSelections = buildWorldSelections;

})(typeof window !== 'undefined' ? window : this);
