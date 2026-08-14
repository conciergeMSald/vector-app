/**
 * VECTOR Lifescape — test_twins.js — BATCH 10 FINAL COMBINED REGRESSION
 * 2026-07-25. Runs against the fully merged state: Batches 1-9 + the
 * 9-pair MAJOR_MAP dedup fix, all together, for the first time.
 *
 * Supersedes the earlier per-batch test_twins.js run (which validated
 * Batch 1's resolver dependencies in isolation). This run adds Arizona,
 * Florida, and Dallas geo content, the deduped major map, and checks that
 * nothing merged since then introduced a NEW collision.
 *
 * SECTION G added 2026-08-13 — covers the new industry_fit_score /
 * industry_fit_category fields (real Census CBP Location Quotient data,
 * additive alongside resilience_score, does not replace or recompute it).
 * See major_regional_resolver.js header and mega_regions_seed_data.js for
 * full sourcing/methodology.
 */

'use strict';

const { resolveMajorRegionalFit } = require('./major_regional_resolver.js');
const { MAJOR_MAP } = require('./lifescape_major_map.js');
const { UNIVERSITY_DB_V5 } = require('./UNIVERSITY_DB_V5_MASTER.js');
const { GEO_ZIP_TO_MEGAREGION } = require('./geo_zip_to_megaregion.js');
const { NAICS_TO_INDUSTRY_PATHWAYS } = require('./naics_to_industry_pathways.js');
const { MAJOR_CLUSTER_KEYWORD_FILTERS } = require('./major_cluster_keyword_filters.js');
const { MEGAREGION_FUTURE_RESILIENCE } = require('./megaRegionDB_futureResilience.js');
const { MEGAREGION_ECONOMIC_SCORES } = require('./megaRegionDB_economicScores.js');
const { GEO_INDUSTRY_DB_LA } = require('./geo_industry_db_LA_pass1.js');
const { GEO_INDUSTRY_DB_EAST } = require('./geo_industry_db_NY_Boston_DC_pass4.js');
const { GEO_INDUSTRY_DB_PACIFICNW } = require('./geo_industry_db_PacificNW_pass8.js');
const { GEO_INDUSTRY_DB_ARIZONA } = require('./geo_industry_db_Arizona_pass21.js');
const { GEO_INDUSTRY_DB_MIAMI } = require('./geo_industry_db_Miami_pass12.js');
const { GEO_INDUSTRY_DB_TAMPABAY } = require('./geo_industry_db_TampaBay_pass14.js');
const { GEO_INDUSTRY_DB_JACKSONVILLE } = require('./geo_industry_db_Jacksonville_pass15.js');
const { GEO_INDUSTRY_DB_FL_AGENERGY } = require('./geo_industry_db_FL_AgEnergy_pass16.js');
const { GEO_INDUSTRY_DB_DALLAS } = require('./geo_industry_db_Dallas_pass6.js');
global.MAJOR_MAP = MAJOR_MAP; // world_naics_crosswalk.js reads this as a global
const { validateWorldNaicsCrosswalk } = require('./world_naics_crosswalk.js');
const { validateCurationMap } = require('./lifescape_curation_map_v1.js');
global.VECTOR_CROSSWALK = require('./crosswalk-db.js').VECTOR_CROSSWALK;

const GEO_PASSES = [
  { name: 'LA pass1', data: GEO_INDUSTRY_DB_LA },
  { name: 'NY/Boston/DC pass4', data: GEO_INDUSTRY_DB_EAST },
  { name: 'PacificNW pass8', data: GEO_INDUSTRY_DB_PACIFICNW },
  { name: 'Arizona pass21', data: GEO_INDUSTRY_DB_ARIZONA },
  { name: 'Miami pass12', data: GEO_INDUSTRY_DB_MIAMI },
  { name: 'TampaBay pass14', data: GEO_INDUSTRY_DB_TAMPABAY },
  { name: 'Jacksonville pass15', data: GEO_INDUSTRY_DB_JACKSONVILLE },
  { name: 'FL AgEnergy pass16', data: GEO_INDUSTRY_DB_FL_AGENERGY },
  { name: 'Dallas pass6', data: GEO_INDUSTRY_DB_DALLAS },
];

function baseOptions(overrides) {
  return Object.assign({
    majorMap: MAJOR_MAP,
    geoPasses: GEO_PASSES,
    zipToMegaregion: GEO_ZIP_TO_MEGAREGION,
    megaregionResilience: MEGAREGION_FUTURE_RESILIENCE,
    v5Schools: UNIVERSITY_DB_V5,
    naicsToIndustryPathways: NAICS_TO_INDUSTRY_PATHWAYS,
    clusterKeywordFilters: MAJOR_CLUSTER_KEYWORD_FILTERS,
    megaRegionEconomicScores: MEGAREGION_ECONOMIC_SCORES,
    schoolCap: 3,
  }, overrides || {});
}

let PASS = 0, FAIL = 0;
const failures = [];
function check(label, condition, detail) {
  if (condition) { PASS++; }
  else { FAIL++; failures.push({ label, detail: detail || '' }); console.log(`  ✗ FAIL: ${label}${detail ? ' — ' + detail : ''}`); }
}

console.log('=== BATCH 10 — FULL COMBINED REGRESSION ===\n');

// ── SECTION A: Carry-forward checks from the original test_twins.js ──
console.log('SECTION A — historical bug regressions (carried forward)');
{
  const filtered = resolveMajorRegionalFit('Political Science / Pre-Law', baseOptions());
  const filteredEmployers = filtered.results.flatMap(r => r.anchor_employers);
  check('A1: NAICS-54 bleed still fixed (no Amgen in Political Science)', !filteredEmployers.includes('Amgen'));

  const cs = resolveMajorRegionalFit('Computer Science', baseOptions());
  check('A2: Cascadia naming still correct', cs.results.some(r => r.megaregion === 'Cascadia'));

  const meche = resolveMajorRegionalFit('Mechanical Engineering', baseOptions());
  check('A3: Mechanical Engineering resolves to NAICS 33', meche.naicsSector === '33');
}
console.log('');

// ── SECTION B: New content from Batches 6-8, end-to-end ──
console.log('SECTION B — Arizona / Florida / Dallas content, live end-to-end');
{
  const meche = resolveMajorRegionalFit('Mechanical Engineering', baseOptions());
  const azResults = meche.results.filter(r => r.megaregion === 'Arizona Sun Corridor');
  check('B1: Arizona semiconductor employers surface for Mechanical Engineering',
    azResults.some(r => r.anchor_employers.some(e => /TSMC|Intel|Honeywell|onsemi|Microchip|Raytheon/.test(e))),
    JSON.stringify(azResults.map(r => r.anchor_employers)));

  const hosp = resolveMajorRegionalFit('Hospitality Management', baseOptions());
  const flResults = hosp.results.filter(r => r.megaregion === 'Florida');
  check('B2: Florida cruise employers surface for Hospitality Management',
    flResults.some(r => r.anchor_employers.some(e => /Royal Caribbean|Carnival|Norwegian/.test(e))),
    JSON.stringify(flResults.map(r => r.anchor_employers)));

  const fin = resolveMajorRegionalFit('Finance (Search Fund & Acquisition Track)', baseOptions());
  check('B3: Renamed Finance major (NAICS 94) still resolves correctly post-rename', fin.found === true && fin.naicsSector === '94');

  const mktg54 = resolveMajorRegionalFit('Marketing & Brand Strategy', baseOptions());
  check('B4: Marketing & Brand Strategy resolves post-split', mktg54.found === true && mktg54.naicsSector === '54');
  const retailMktg = resolveMajorRegionalFit('Retail & E-Commerce Marketing', baseOptions());
  check('B5: Retail & E-Commerce Marketing resolves post-split', retailMktg.found === true && retailMktg.naicsSector === '44');
  const marketResearch = resolveMajorRegionalFit('Market Research & Consumer Insights', baseOptions());
  check('B6: Market Research & Consumer Insights (net new) resolves', marketResearch.found === true && marketResearch.naicsSector === '54');
  const digitalMktg = resolveMajorRegionalFit('Digital Marketing & Analytics', baseOptions());
  check('B7: Digital Marketing & Analytics (net new) resolves', digitalMktg.found === true && digitalMktg.naicsSector === '54');
  const oldMarketing = resolveMajorRegionalFit('Marketing', baseOptions());
  check('B8: old unqualified "Marketing" label no longer resolves (fully retired)', oldMarketing.found === false);
}
console.log('');

// ── SECTION C: Dedup fix verification — renamed majors resolve, no new collisions ──
console.log('SECTION C — dedup fix verification');
{
  const renamedMajors = [
    ['Architecture (Sustainable & Biophilic Design Track)', '54'],
    ['Construction Management (Smart Building Systems Track)', '91'],
    ['Finance (Search Fund & Acquisition Track)', '94'],
    ['Accounting (Transaction Advisory Track)', '94'],
    ['Real Estate (PropTech Investment Track)', '94'],
    ['Human Resources Management (AI Workforce Transition Track)', '93'],
    ['Public Health (Longevity & Aging Track)', '95'],
    ['Supply Chain Management (Retail & Merchandising Track)', '44'],
  ];
  renamedMajors.forEach(([label, expectedNaics]) => {
    const r = resolveMajorRegionalFit(label, baseOptions());
    check(`C: "${label}" resolves to NAICS ${expectedNaics}`, r.found === true && r.naicsSector === expectedNaics,
      `got found=${r.found}, naics=${r.naicsSector}`);
  });

  // Full duplicate scan — expect exactly 3 remaining, all previously known
  const labelIndex = {};
  for (const [naics, majors] of Object.entries(MAJOR_MAP)) {
    majors.forEach(m => { labelIndex[m.major_label] = labelIndex[m.major_label] || []; labelIndex[m.major_label].push(naics); });
  }
  const stillDup = Object.entries(labelIndex).filter(([, sectors]) => sectors.length > 1);
  const knownDeferred = new Set(['Business Administration', 'Economics']);
  const unexpected = stillDup.filter(([label]) => !knownDeferred.has(label));
  check('C: no NEW duplicates introduced by rename/dedup pass', unexpected.length === 0,
    JSON.stringify(unexpected.map(([l, s]) => `${l}: ${s.join(',')}`)));
  check('C: exactly the 2 known-deferred duplicates remain (Marketing now resolved)', stillDup.length === 2,
    JSON.stringify(stillDup.map(([l, s]) => `${l}: ${s.join(',')}`)));
}
console.log('');

// ── SECTION D: World crosswalk, all 20 Worlds, full merged state ──
console.log('SECTION D — World-tile crosswalk against fully merged MAJOR_MAP');
{
  const report = validateWorldNaicsCrosswalk();
  check('D1: all 20 Worlds resolve to real content', report.worldsWithContent === 20,
    `worldsWithContent=${report.worldsWithContent}, missing=${JSON.stringify(report.worldsWithoutContent)}`);
}
console.log('');

// ── SECTION E: Tile curation map, full merged state ──
console.log('SECTION E — curation map validator against fully merged crosswalk-db.js');
{
  const report = validateCurationMap();
  check('E1: curation map allValid against merged tile set', report.allValid === true);
}
console.log('');

// ── SECTION F: Structural integrity across the whole merge ──
console.log('SECTION F — structural integrity, whole-file scan');
{
  // No duplicate schools/employers within any single resolver result
  const spotChecks = ['Mechanical Engineering', 'Hospitality Management', 'Computer Science', 'Political Science / Pre-Law'];
  spotChecks.forEach(major => {
    const r = resolveMajorRegionalFit(major, baseOptions());
    r.results.forEach(group => {
      const uniqueSchools = new Set(group.aligned_schools);
      check(`F: no duplicate schools in ${major}/${group.megaregion}`, group.aligned_schools.length === uniqueSchools.size);
      const uniqueEmployers = new Set(group.anchor_employers);
      check(`F: no duplicate employers in ${major}/${group.megaregion}`, group.anchor_employers.length === uniqueEmployers.size);
    });
  });

  // V5 school count unchanged
  check('F: V5 school count still 159', Object.keys(UNIVERSITY_DB_V5).length === 159);

  // Tile count unchanged at 138
  check('F: crosswalk-db.js tile count still 138', global.VECTOR_CROSSWALK.length === 138);
}
console.log('');

// ── SECTION G: industry_fit_score / industry_fit_category (new 2026-08-13) ──
console.log('SECTION G — industry_fit_score wiring (Census-based economic_scores, additive to resilience_score)');
{
  // G1/G2: real mapped category, region has been researched for it ->
  // industry_fit_score should be a real number matching
  // megaRegionDB_economicScores.js exactly, and resilience_score must be
  // completely unaffected (still populated, from the untouched
  // megaregionResilience input).
  const meche = resolveMajorRegionalFit('Mechanical Engineering', baseOptions());
  const azMeche = meche.results.find(r => r.megaregion === 'Arizona Sun Corridor');
  check('G1: Mechanical Engineering / Arizona Sun Corridor -> industry_fit_score = advancedManufacturing (19)',
    !!azMeche && azMeche.industry_fit_score === 19 && azMeche.industry_fit_category === 'advancedManufacturing',
    azMeche ? `got score=${azMeche.industry_fit_score}, category=${azMeche.industry_fit_category}` : 'no Arizona Sun Corridor group');
  check('G1b: resilience_score untouched (still numeric) for the same group', !!azMeche && typeof azMeche.resilience_score === 'number',
    azMeche ? `resilience_score=${azMeche.resilience_score}` : 'no Arizona Sun Corridor group');

  const hosp = resolveMajorRegionalFit('Hospitality Management', baseOptions());
  const flHosp = hosp.results.find(r => r.megaregion === 'Florida');
  check('G2: Hospitality Management / Florida -> industry_fit_score = hospitality (63)',
    !!flHosp && flHosp.industry_fit_score === 63 && flHosp.industry_fit_category === 'hospitality',
    flHosp ? `got score=${flHosp.industry_fit_score}, category=${flHosp.industry_fit_category}` : 'no Florida group');

  // G3: NAICS sector with no economic_scores analog at all (91 — "The
  // Intelligent Trades") must resolve industry_fit_score AND
  // industry_fit_category to null, in every result group, never a guess.
  const constrMgmt = resolveMajorRegionalFit('Construction Management (Smart Building Systems Track)', baseOptions());
  check('G3: NAICS 91 (no analog) resolves industry_fit_score null in every group',
    constrMgmt.found === true && constrMgmt.results.length > 0 &&
    constrMgmt.results.every(r => r.industry_fit_score === null && r.industry_fit_category === null),
    JSON.stringify(constrMgmt.results.map(r => ({ megaregion: r.megaregion, score: r.industry_fit_score, category: r.industry_fit_category }))));

  // G4: NAICS sector mapped to a category, but that category isn't
  // researched anywhere yet (94 -> privateEquity) -> industry_fit_category
  // should surface the mapping (so the gap is visible/debuggable), but
  // industry_fit_score must stay null everywhere, since no region has
  // privateEquity data yet.
  const fin = resolveMajorRegionalFit('Finance (Search Fund & Acquisition Track)', baseOptions());
  check('G4: NAICS 94 (unresearched category) -> industry_fit_category = privateEquity, score null everywhere',
    fin.found === true && fin.results.length > 0 &&
    fin.results.every(r => r.industry_fit_score === null) &&
    fin.results.every(r => r.industry_fit_category === 'privateEquity'),
    JSON.stringify(fin.results.map(r => ({ megaregion: r.megaregion, score: r.industry_fit_score, category: r.industry_fit_category }))));

  // G5: backward compatibility — omitting megaRegionEconomicScores entirely
  // must not throw and must leave industry_fit_score null everywhere,
  // while resilience_score keeps working exactly as before this change.
  const mecheNoEcon = resolveMajorRegionalFit('Mechanical Engineering', baseOptions({ megaRegionEconomicScores: undefined }));
  check('G5: omitting megaRegionEconomicScores does not throw and leaves industry_fit_score null',
    mecheNoEcon.found === true && mecheNoEcon.results.every(r => r.industry_fit_score === null));
  check('G5b: resilience_score still populated when megaRegionEconomicScores is omitted',
    mecheNoEcon.results.every(r => typeof r.resilience_score === 'number' || r.resilience_score === null) &&
    mecheNoEcon.results.some(r => typeof r.resilience_score === 'number'));
}
console.log('');

console.log('=== SUMMARY ===');
console.log(`PASS: ${PASS}`);
console.log(`FAIL: ${FAIL}`);
if (FAIL > 0) {
  console.log('\nFailures:');
  failures.forEach(f => console.log(`  - ${f.label}${f.detail ? ' :: ' + f.detail : ''}`));
  process.exit(1);
} else {
  console.log('\nAll checks passed. Full combined merge is regression-clean.');
  process.exit(0);
}
