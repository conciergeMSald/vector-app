/**
 * VECTOR — test_alumni_network.js
 * Regression test for the Alumni Network Database, per ALUMNI-NETWORK-ARCH-001
 * v1 Section 6. Same pattern as test_twins.js — a standing pure-function
 * check, not a new testing philosophy. Run before every deploy touching
 * alumni_network_seed_data.js, family_alumni_network_endpoint.js, or
 * UNIVERSITY_DB_V5_MASTER.js's industryPathways for any LA-cohort school.
 */

'use strict';

const { UNIVERSITY_DB_V5 } = require('./UNIVERSITY_DB_V5_MASTER.js');
const {
  ALUMNI_NETWORK_SEED_LA,
  ALUMNI_NETWORK_COMPARISONS_LA,
} = require('./alumni_network_seed_data.js');
const {
  toAllowlistedResponse,
  schoolSlugIsInFamilyReport,
  FAMILY_ALLOWLIST_FIELDS,
} = require('./family_alumni_network_endpoint.js');

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

// ----------------------------------------------------------------------------
// Test 1 — V5-completeness gate (OQ-2). Every seeded school must actually
// pass the same canonical industryPathways bar used across the rest of V5 —
// this is the check that would have caught ingestion running ahead of V5,
// the exact failure mode OQ-2 exists to prevent.
// ----------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------
// Test 2 — Response allowlist never leaks internal fields. Constructs the
// actual family-facing response for a same-metro two-school comparison and
// asserts none of the internal-only fields appear anywhere in it.
// ----------------------------------------------------------------------------
console.log('\nTest 2 — Response allowlist / no internal-field leakage');

const FORBIDDEN_FIELDS = [
  'population_confidence', 'chapter_strength', 'strength_rating',
  'population_source_note', 'engine_version', 'id', 'population_low', 'population_high',
];

const twoSchoolSample = [ALUMNI_NETWORK_SEED_LA[0], ALUMNI_NETWORK_SEED_LA[3]]; // Indiana + CU Boulder
for (const school of twoSchoolSample) {
  const response = toAllowlistedResponse(school, school.geo_nodes);
  const responseKeys = Object.keys(response);
  const leaked = FORBIDDEN_FIELDS.filter((f) => responseKeys.includes(f));
  check(`${school.school_name}: no forbidden fields in response (${responseKeys.join(', ')})`, leaked.length === 0);

  const returnedKeys = FAMILY_ALLOWLIST_FIELDS.concat(['neighborhoods']);
  const unexpectedKeys = responseKeys.filter((k) => !returnedKeys.includes(k));
  check(`${school.school_name}: no fields outside the allowlist (${unexpectedKeys.join(', ') || 'none'})`, unexpectedKeys.length === 0);
}

// ----------------------------------------------------------------------------
// Test 3 — Comparison staleness early-warning. schools_included on every
// stored comparison must still match live seed rows for that metro. This is
// a WARNING check, not an auto-fix (per CIO review) — a failure here means
// "go update the comparison text," not "the system broke."
// ----------------------------------------------------------------------------
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

// ----------------------------------------------------------------------------
// Test 4 — Authorization scoping actually rejects an out-of-report school.
// ----------------------------------------------------------------------------
console.log('\nTest 4 — Authorization scoping rejects schools not in the family\'s own report');

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

// ----------------------------------------------------------------------------
console.log('\n' + '='.repeat(60));
if (failures === 0) {
  console.log('ALL CHECKS PASSED');
} else {
  console.log(`${failures} CHECK(S) FAILED — do not deploy`);
  process.exitCode = 1;
}
