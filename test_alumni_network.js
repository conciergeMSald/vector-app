/**
 * VECTOR — test_alumni_network.js
 * Regression test for the Alumni Network Database, per ALUMNI-NETWORK-ARCH-001
 * v1 Section 6. Same pattern as test_twins.js — a standing pure-function
 * check, not a new testing philosophy. Run before every deploy touching
 * alumni_network_seed_data.js, worker.js's alumni-network logic, or
 * UNIVERSITY_DB_V5_MASTER.js's industryPathways for any LA-cohort school.
 *
 * FIXED 2026-07-30: this file previously imported from
 * family_alumni_network_endpoint.js — a reference draft written before the
 * real worker.js integration, using a different Supabase client style
 * (@supabase/supabase-js) than what's actually deployed (raw fetch() via
 * supabaseFetchOne/Many). That draft was superseded once the real endpoint
 * was wired into worker.js, but this test file was never updated to match —
 * meaning it was passing/failing based on code that isn't deployed. Now
 * imports the real, exported pieces from worker.js directly.
 *
 * worker.js is a genuine ES module (export default {...}), not CommonJS —
 * confirmed directly, not assumed (an earlier attempt to export via a
 * guarded `module.exports` silently did nothing, because `module` correctly
 * doesn't exist in real ESM). Loaded here via dynamic `await import()`,
 * since every other file in this test still uses CommonJS `require()`.
 *
 * Scope note: handleFamilyAlumniNetwork itself (the actual Cloudflare
 * Worker HTTP handler — Request/env/live Supabase fetch calls) is not
 * directly unit-tested here; it isn't practically testable without mocking
 * the whole Workers runtime, which is out of scope for this fix. What IS
 * tested is the real, exported logic that determines what a family can see
 * and which schools they're authorized to query — the parts that actually
 * matter for correctness and safety.
 */

'use strict';

const { UNIVERSITY_DB_V5 } = require('./UNIVERSITY_DB_V5_MASTER.js');
const {
  ALUMNI_NETWORK_SEED_LA,
  ALUMNI_NETWORK_COMPARISONS_LA,
} = require('./alumni_network_seed_data.js');
const { V5_NAME_BY_SLUG } = require('./alumni_school_slug_map.js');

let failures = 0;
function check(label, condition) {
  if (condition) {
    console.log('  PASS —', label);
  } else {
    console.log('  FAIL —', label);
    failures++;
  }
}

async function main() {
  // worker.js's real, exported pieces — loaded once, used by Tests 2 and 4.
  const worker = await import('./worker.js');
  const { resolveAlumniSlugFromReportName, ALUMNI_FAMILY_ALLOWLIST_FIELDS } = worker;

  // --------------------------------------------------------------------------
  // Test 1 — V5-completeness gate (OQ-2). Unchanged — never depended on the
  // superseded reference draft.
  // --------------------------------------------------------------------------
  console.log('Test 1 — V5-completeness gate (OQ-2)');

  const keyFreq = {};
  for (const school of Object.values(UNIVERSITY_DB_V5)) {
    const ip = school.industryPathways;
    if (!ip) continue;
    for (const k of Object.keys(ip)) keyFreq[k] = (keyFreq[k] || 0) + 1;
  }
  const totalSchools = Object.keys(UNIVERSITY_DB_V5).length;
  const canonicalKeys = Object.entries(keyFreq)
    .filter(([, count]) => count > totalSchools * 0.5)
    .map(([key]) => key);

  for (const seedSchool of ALUMNI_NETWORK_SEED_LA) {
    const v5Key = V5_NAME_BY_SLUG[seedSchool.school_slug];
    check(`${seedSchool.school_name}: V5 key resolves (${v5Key})`, !!v5Key && !!UNIVERSITY_DB_V5[v5Key]);

    const v5School = UNIVERSITY_DB_V5[v5Key];
    if (!v5School) continue;
    const industryKeys = Object.keys(v5School.industryPathways || {});
    const missing = canonicalKeys.filter((k) => !industryKeys.includes(k));
    check(
      `${seedSchool.school_name}: industryPathways complete (${industryKeys.length} keys, missing: ${missing.join(', ') || 'none'})`,
      missing.length === 0
    );
  }

  // --------------------------------------------------------------------------
  // Test 2 — Response allowlist never leaks internal fields. Reconstructs
  // exactly what worker.js's handleFamilyAlumniNetwork does — loop over the
  // real, exported ALUMNI_FAMILY_ALLOWLIST_FIELDS and build the response
  // field by field — using the actual allowlist array, not a copy of it.
  // --------------------------------------------------------------------------
  console.log('\nTest 2 — Response allowlist / no internal-field leakage');

  const FORBIDDEN_FIELDS = [
    'population_confidence', 'chapter_strength', 'strength_rating',
    'population_source_note', 'engine_version', 'id', 'population_low', 'population_high',
  ];

  function buildAllowlistedResponse(networkRow, geoNodes) {
    const out = {};
    for (const field of ALUMNI_FAMILY_ALLOWLIST_FIELDS) {
      out[field] = networkRow[field] ?? null;
    }
    out.neighborhoods = (geoNodes || []).map((n) => n.neighborhood);
    return out;
  }

  const twoSchoolSample = [ALUMNI_NETWORK_SEED_LA[0], ALUMNI_NETWORK_SEED_LA[3]]; // Indiana + CU Boulder
  for (const school of twoSchoolSample) {
    const response = buildAllowlistedResponse(school, school.geo_nodes);
    const responseKeys = Object.keys(response);
    const leaked = FORBIDDEN_FIELDS.filter((f) => responseKeys.includes(f));
    check(`${school.school_name}: no forbidden fields in response (${responseKeys.join(', ')})`, leaked.length === 0);

    const returnedKeys = ALUMNI_FAMILY_ALLOWLIST_FIELDS.concat(['neighborhoods']);
    const unexpectedKeys = responseKeys.filter((k) => !returnedKeys.includes(k));
    check(`${school.school_name}: no fields outside the allowlist (${unexpectedKeys.join(', ') || 'none'})`, unexpectedKeys.length === 0);
  }

  // --------------------------------------------------------------------------
  // Test 3 — Comparison staleness early-warning. Unchanged.
  // --------------------------------------------------------------------------
  console.log('\nTest 3 — Comparison staleness (early warning, not auto-fix)');

  for (const comparison of ALUMNI_NETWORK_COMPARISONS_LA) {
    const liveSlugsForMetro = ALUMNI_NETWORK_SEED_LA
      .filter((s) => s.metro_area === comparison.metro_area)
      .map((s) => s.school_slug)
      .sort();
    const storedSlugs = [...comparison.schools_included].sort();
    const matches = JSON.stringify(liveSlugsForMetro) === JSON.stringify(storedSlugs);
    check(
      `"${comparison.comparison_title}": schools_included matches live ${comparison.metro_area} cohort`,
      matches
    );
    if (!matches) {
      console.log('    -> live:', liveSlugsForMetro);
      console.log('    -> stored:', storedSlugs);
      console.log('    -> ACTION: review and update comparison_content by hand before next deploy.');
    }
  }

  // --------------------------------------------------------------------------
  // Test 4 — Authorization scoping rejects an out-of-report school.
  // Reconstructs the exact bucket-checking logic from worker.js's
  // handleFamilyAlumniNetwork, using the real, exported
  // resolveAlumniSlugFromReportName — the function that actually resolves
  // report_data school names to slugs in production.
  // --------------------------------------------------------------------------
  console.log('\nTest 4 — Authorization scoping rejects schools not in the family\'s own report');

  function schoolSlugIsInFamilyReport(schoolSlug, reportData) {
    if (!reportData || !reportData.schools) return false;
    const buckets = ['primary', 'adjacent', 'profileAdjacent', 'underTheRadar', 'sizeAdjacent', 'scenario'];
    for (const bucket of buckets) {
      const list = reportData.schools[bucket];
      if (!Array.isArray(list)) continue;
      if (list.some((entry) => resolveAlumniSlugFromReportName(entry.name || entry) === schoolSlug)) return true;
    }
    return false;
  }

  const fakeReportData = {
    schools: {
      primary: [{ name: 'Indiana University' }],
      adjacent: [{ name: 'University of Colorado Boulder' }],
    },
  };

  check('Indiana University (in report) is allowed', schoolSlugIsInFamilyReport('indiana-university', fakeReportData));
  check('CU Boulder (in report) is allowed', schoolSlugIsInFamilyReport('cu-boulder', fakeReportData));
  check('Vanderbilt (NOT in report) is rejected', !schoolSlugIsInFamilyReport('vanderbilt', fakeReportData));
  check('Missing report_data is rejected, not crashed', !schoolSlugIsInFamilyReport('indiana-university', null));

  // --------------------------------------------------------------------------
  console.log('\n' + '='.repeat(60));
  if (failures === 0) {
    console.log('ALL CHECKS PASSED');
  } else {
    console.log(`${failures} CHECK(S) FAILED — do not deploy`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error('Test script crashed:', err);
  process.exitCode = 1;
});
