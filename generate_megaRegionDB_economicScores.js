/**
 * VECTOR — generate_megaRegionDB_economicScores.js
 * Converts mega_regions_seed_data.js (Supabase-shaped, keyed by region_slug)
 * into megaRegionDB_economicScores.js — a plain runtime object keyed by
 * region_name, matching the pattern already established by
 * megaRegionDB_futureResilience.js (which major_regional_resolver.js
 * consumes as `megaregionResilience[g.megaregion]`, g.megaregion being a
 * display name like "Great Lakes", not a slug like "great-lakes").
 *
 * This is a generated file, same discipline as mega_regions_seed.sql:
 * mega_regions_seed_data.js remains the single source of truth. Re-run this
 * script after any future research pass to regenerate.
 *
 * Run: node generate_megaRegionDB_economicScores.js > megaRegionDB_economicScores.js
 */

'use strict';

const { MEGA_REGIONS_SEED } = require('./mega_regions_seed_data.js');

// region_slug -> live megaregion display string, as actually emitted by
// geo_zip_to_megaregion.js (g.megaregion) and used as the key in
// megaRegionDB_futureResilience.js. Confirmed by direct query against
// geo_zip_to_megaregion.js on 2026-08-13:
//   ['Arizona Sun Corridor','Cascadia','Florida','Front Range','Great Lakes',
//    'Gulf Coast','Northeast','Northern California','Piedmont Atlantic',
//    'Southern California','Texas Triangle']
// This is an EXPLICIT table, not a region_name passthrough — region_name is
// display text (see mega_regions_seed_data.js), and for front-range it
// differs from the live string ("Front Range & Silicon Slopes" vs.
// "Front Range"). All 11 are listed explicitly, not just the one that
// differs, so a future region_name edit can never silently break this again.
const SLUG_TO_LIVE_MEGAREGION = {
  'northeast': 'Northeast',
  'piedmont-atlantic': 'Piedmont Atlantic',
  'front-range': 'Front Range',
  'great-lakes': 'Great Lakes',
  'gulf-coast': 'Gulf Coast',
  'texas-triangle': 'Texas Triangle',
  'arizona-sun-corridor': 'Arizona Sun Corridor',
  'southern-california': 'Southern California',
  'northern-california': 'Northern California',
  'florida': 'Florida',
  'cascadia': 'Cascadia'
};

const lines = [];
lines.push('/**');
lines.push(' * VECTOR Lifescape — Mega Region Database — economicScores');
lines.push(' * File: megaRegionDB_economicScores.js');
lines.push(' * GENERATED from mega_regions_seed_data.js -- do not hand-edit.');
lines.push(' * Regenerate with generate_megaRegionDB_economicScores.js after any');
lines.push(' * future Census research pass.');
lines.push(' *');
lines.push(' * PURPOSE: per-megaregion economic_scores (0-100 per category, ~27');
lines.push(' * category taxonomy, LQ-based methodology -- see mega_regions_seed_data.js');
lines.push(' * header for full sourcing/methodology detail and per-region caveats).');
lines.push(' * Keyed by the LIVE megaregion display string (e.g. "Great Lakes", "Front');
lines.push(' * Range") -- confirmed against geo_zip_to_megaregion.js and matching');
lines.push(' * MEGAREGION_FUTURE_RESILIENCE\'s keys and major_regional_resolver.js\'s');
lines.push(' * g.megaregion values. This is NOT the same as region_name in all cases --');
lines.push(' * front-range\'s region_name is "Front Range & Silicon Slopes" but its live');
lines.push(' * key here is "Front Range". See SLUG_TO_LIVE_MEGAREGION in the generator');
lines.push(' * for the explicit, audited mapping (not a region_name passthrough).');
lines.push(' *');
lines.push(' * COVERAGE (as of generation): regions below have real economic_scores');
lines.push(' * for SOME of the ~27 categories, not all -- absent categories are');
lines.push(' * intentionally omitted, not zeroed. Consumers must treat a missing key');
lines.push(' * as "not yet researched," never as a true 0.');
lines.push(' */');
lines.push('');
lines.push("'use strict';");
lines.push('');
lines.push('const MEGAREGION_ECONOMIC_SCORES = {');

for (const region of MEGA_REGIONS_SEED) {
  if (!region.economic_scores) continue; // structurally-empty rows (none currently, all 11 have partial data)
  const liveKey = SLUG_TO_LIVE_MEGAREGION[region.region_slug];
  if (!liveKey) {
    throw new Error(`No live megaregion mapping for region_slug "${region.region_slug}" -- add it to SLUG_TO_LIVE_MEGAREGION before regenerating.`);
  }
  const fieldCount = Object.keys(region.economic_scores).length;
  lines.push(`  // ${liveKey} (region_slug: ${region.region_slug}, region_name: ${JSON.stringify(region.region_name)}) -- ${fieldCount} of ~27 categories researched, as of ${region.researched_at || 'unknown date'}`);
  lines.push(`  ${JSON.stringify(liveKey)}: ${JSON.stringify(region.economic_scores, null, 2).split('\n').join('\n  ')},`);
}

lines.push('};');
lines.push('');
lines.push('if (typeof window !== \'undefined\') {');
lines.push('  window.MEGAREGION_ECONOMIC_SCORES = MEGAREGION_ECONOMIC_SCORES;');
lines.push('}');
lines.push('if (typeof module !== \'undefined\' && module.exports) {');
lines.push('  module.exports = { MEGAREGION_ECONOMIC_SCORES };');
lines.push('}');
lines.push('');

console.log(lines.join('\n'));
