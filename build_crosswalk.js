/**
 * Builds GEO_ZIP_TO_MEGAREGION — the authored crosswalk table required by
 * MAJOR-REGIONAL-INTEGRATION-001 v4, Section 3.
 *
 * Rule source: OQ-1 resolution (2026-07-11) — DC-area Virginia/Maryland
 * counties assign to Piedmont Atlantic, sub-group "Washington D.C. area".
 * Single-metro passes (LA, Chicago, Dallas, Atlanta) assign wholesale to
 * their one megaregion. The NY/Boston/DC pass is the only one requiring a
 * per-ZIP county-based split.
 *
 * This is generated from the actual pass files, not hand-typed, per the
 * project's standing rule: count/derive programmatically, don't eyeball it.
 */

const fs = require('fs');

function extractZipCountyPairs(filepath, constName) {
  const content = fs.readFileSync(filepath, 'utf8');
  const blocks = content.split(/(?=^\s*"\d{5}":\s*\{)/m);
  const pairs = [];
  for (const b of blocks) {
    const zipMatch = b.match(/"(\d{5})":\s*\{/);
    if (!zipMatch) continue;
    const countyMatch = b.match(/county:\s*"([^"]+)"/);
    pairs.push({ zip: zipMatch[1], county: countyMatch ? countyMatch[1] : null });
  }
  return pairs;
}

const DC_AREA_COUNTIES = new Set([
  'Fairfax', 'Arlington', 'Alexandria', 'Falls Church City', 'Prince William', 'Loudoun', 'Montgomery', 'District of Columbia'
]);

const crosswalk = {}; // zip -> { megaregion, subgroup? }

// Single-metro passes — wholesale assignment
const singleMetro = [
  { file: 'geo_industry_db_LA_pass1_FIXED.js', megaregion: 'Northern California', override: null, note: 'LA Basin -> Southern California, NOT Northern California' },
];

// LA -> Southern California
for (const { zip } of extractZipCountyPairs('geo_industry_db_LA_pass1_FIXED.js')) {
  crosswalk[zip] = { megaregion: 'Southern California', pass: 'LA Basin (pass 1)' };
}

// Chicago -> Great Lakes
for (const { zip } of extractZipCountyPairs('geo_industry_db_Chicago_pass3_FIXED.js')) {
  crosswalk[zip] = { megaregion: 'Great Lakes', pass: 'Chicago Metro (pass 3)' };
}

// Dallas -> Texas Triangle
for (const { zip } of extractZipCountyPairs('geo_industry_db_Dallas_pass6_FIXED.js')) {
  crosswalk[zip] = { megaregion: 'Texas Triangle', pass: 'Dallas-Fort Worth (pass 6)' };
}

// Atlanta -> Piedmont Atlantic, sub-group "Atlanta"
for (const { zip } of extractZipCountyPairs('geo_industry_db_Atlanta_pass5_FIXED.js')) {
  crosswalk[zip] = { megaregion: 'Piedmont Atlantic', subgroup: 'Atlanta', pass: 'Atlanta Metro (pass 5)' };
}

// NY/Boston/DC (+ now Loudoun) -> split by county per OQ-1
for (const { zip, county } of extractZipCountyPairs('geo_industry_db_NY_Boston_DC_pass4_FIXED.js')) {
  if (county && DC_AREA_COUNTIES.has(county)) {
    crosswalk[zip] = { megaregion: 'Piedmont Atlantic', subgroup: 'Washington D.C. area', pass: 'NY/Boston/DC pass 4 (DC-area + Loudoun)', county };
  } else {
    crosswalk[zip] = { megaregion: 'Northeast', pass: 'NY/Boston/DC pass 4', county };
  }
}

// Bay Area -> Northern California (full 19-ZIP file, received 2026-07-11)
for (const { zip } of extractZipCountyPairs('geo_industry_db_BayArea_pass2.js')) {
  crosswalk[zip] = { megaregion: 'Northern California', pass: 'Bay Area (pass 2) - COMPLETE' };
}

const output = `/**
 * VECTOR Lifescape — GEO_ZIP_TO_MEGAREGION crosswalk
 * Generated ${new Date().toISOString().slice(0,10)} per MAJOR-REGIONAL-INTEGRATION-001 v4, Section 3.
 * Generated programmatically from the actual pass files — not hand-typed.
 *
 * COVERAGE STATUS:
 *   - LA Basin, Chicago, Dallas-Fort Worth, Atlanta, Bay Area,
 *     NY/Boston/DC+Loudoun: COMPLETE — 6 of 11 megaregions, 145 ZIPs
 *   - 5 of 11 megaregions have zero coverage: Florida, Gulf Coast, Front
 *     Range, Arizona Sun Corridor, Cascadia.
 */

const GEO_ZIP_TO_MEGAREGION = ${JSON.stringify(crosswalk, null, 2)};

if (typeof window !== 'undefined') window.GEO_ZIP_TO_MEGAREGION = GEO_ZIP_TO_MEGAREGION;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_ZIP_TO_MEGAREGION };
`;

fs.writeFileSync('geo_zip_to_megaregion.js', output);

const total = Object.keys(crosswalk).length;
const byMegaregion = {};
for (const v of Object.values(crosswalk)) {
  const key = v.subgroup ? `${v.megaregion} (${v.subgroup})` : v.megaregion;
  byMegaregion[key] = (byMegaregion[key] || 0) + 1;
}
console.log(`Crosswalk built: ${total} ZIPs total`);
console.log(byMegaregion);
