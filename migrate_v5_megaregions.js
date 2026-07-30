/**
 * VECTOR — migrate_v5_megaregions.js
 * Per MEGA-REGION-ARCH-001 v1, Section 2.
 *
 * Converts every V5 school's megaRegionIntegration/megaRegionExposure into
 * the new shape: primaryMegaRegionSlug + secondaryMegaRegionExposure array.
 * Includes the confirmed BYU correction. Run once against
 * UNIVERSITY_DB_V5_MASTER.js; validated with the same structural-comparison
 * discipline used for every other V5 edit this session (node --check +
 * before/after school-count and section-count diffing).
 *
 * Usage: node migrate_v5_megaregions.js <path-to-V5-file>
 * Writes the migrated file to the same path (in place) — run against a
 * writable copy, not the read-only original.
 */

'use strict';

const fs = require('fs');

// Name-to-slug lookup — explicit table, not a fuzzy match. Learned directly
// from the school_slug naming-drift bug found this session (V5's own key is
// "Indiana University Bloomington", not "Indiana University" — a
// transformation function would have failed the same way here).
const PRIMARY_REGION_TO_SLUG = {
  'Northeast': 'northeast',
  'Great Lakes': 'great-lakes',
  'Piedmont Atlantic': 'piedmont-atlantic',
  'Florida': 'florida',
  'Texas Triangle': 'texas-triangle',
  'Front Range': 'front-range-silicon-slopes', // renamed region, per confirmed decision
  'Arizona Sun Corridor': 'arizona-sun-corridor',
  'Southern California': 'southern-california',
  'Northern California': 'northern-california',
  'Cascadia': 'cascadia',
};

// Old megaRegionExposure keys -> new canonical slugs. One approximation
// remains, flagged explicitly rather than silently assumed:
//   - MidContinentIndustrialEnergyCorridor was used as a stand-in for BOTH
//     Great Lakes and Great Plains before the split (this is the exact bug
//     described in MEGA-REGION-DB-001 Section 0). Mapped to "great-lakes"
//     here as the closest legacy meaning; any school whose real secondary
//     exposure is actually to Great Plains will read as understated until
//     re-researched under the new structure.
//
// TorBuffChester is DELIBERATELY NOT mapped here, per product decision
// (2026-07-30): it never had a clean 1:1 canonical-region match, and
// forcing it into "northeast" alongside BosWash created duplicate
// region_slug entries in secondaryMegaRegionExposure for 156 of 159
// schools -- collapsing two genuinely different legacy signals into one
// number without a real basis for how to combine them. Accepting the data
// loss now (this key is dropped, with a warning, for every school that had
// it) rather than fabricating a merge. Flagged as a real research gap to
// fill later, not silently resolved.
const EXPOSURE_KEY_TO_SLUG = {
  'MidContinentIndustrialEnergyCorridor': 'great-lakes', // APPROXIMATE — see comment above
  'BosWash': 'northeast',
  'TexasTriangle': 'texas-triangle',
  'CharLanta': 'piedmont-atlantic',
  'NorCalInnovationCorridor': 'northern-california',
  'SoCalCreativeEconomy': 'southern-california',
};

// Confirmed data-quality fix from the Requirements-phase discussion — BYU's
// primaryMegaRegion was "Southern California," inconsistent with its own
// regionalRole text referencing Silicon Slopes.
const MANUAL_CORRECTIONS = {
  'Brigham Young University': 'front-range-silicon-slopes',
};

function migrateSchool(name, school) {
  const warnings = [];
  const oldIntegration = school.megaRegionIntegration || {};
  const oldExposure = school.megaRegionExposure || {};

  let primarySlug = null;
  if (MANUAL_CORRECTIONS[name]) {
    primarySlug = MANUAL_CORRECTIONS[name];
    warnings.push(`${name}: manual correction applied (was "${oldIntegration.primaryMegaRegion}") -> ${primarySlug}`);
  } else if (oldIntegration.primaryMegaRegion) {
    primarySlug = PRIMARY_REGION_TO_SLUG[oldIntegration.primaryMegaRegion] || null;
    if (!primarySlug) {
      warnings.push(`${name}: UNRECOGNIZED primaryMegaRegion "${oldIntegration.primaryMegaRegion}" — left null, needs manual review`);
    }
  } else {
    warnings.push(`${name}: no megaRegionIntegration found — primaryMegaRegionSlug left null`);
  }

  const secondaryExposure = Object.entries(oldExposure)
    .map(([oldKey, score]) => {
      const slug = EXPOSURE_KEY_TO_SLUG[oldKey];
      if (!slug) {
        warnings.push(`${name}: unrecognized exposure key "${oldKey}" — dropped, not guessed`);
        return null;
      }
      return { region_slug: slug, exposure_score: score };
    })
    .filter(Boolean);

  const migrated = { ...school };
  migrated.primaryMegaRegionSlug = primarySlug;
  migrated.regionalRole = oldIntegration.regionalRole || null; // carried forward unchanged
  migrated.secondaryMegaRegionExposure = secondaryExposure;
  delete migrated.megaRegionIntegration;
  delete migrated.megaRegionExposure;

  return { migrated, warnings };
}

function migrateV5Database(filePath) {
  const { UNIVERSITY_DB_V5 } = require(filePath);
  const before = { schoolCount: Object.keys(UNIVERSITY_DB_V5).length };

  const migratedDb = {};
  const allWarnings = [];

  for (const [name, school] of Object.entries(UNIVERSITY_DB_V5)) {
    const { migrated, warnings } = migrateSchool(name, school);
    migratedDb[name] = migrated;
    allWarnings.push(...warnings);
  }

  return { migratedDb, before, warnings: allWarnings };
}

if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: node migrate_v5_megaregions.js <path-to-V5-file>');
    process.exit(1);
  }

  const { migratedDb, before, warnings } = migrateV5Database(filePath);

  console.log(`Schools before migration: ${before.schoolCount}`);
  console.log(`Schools after migration: ${Object.keys(migratedDb).length}`);
  console.log(`Warnings: ${warnings.length}`);
  warnings.forEach((w) => console.log('  -', w));

  const output = `const UNIVERSITY_DB_V5 = ${JSON.stringify(migratedDb, null, 2)};\n\nif (typeof module !== 'undefined') { module.exports = { UNIVERSITY_DB_V5 }; }\n`;
  fs.writeFileSync(filePath, output);
  console.log(`\nWritten to ${filePath}`);
}

if (typeof module !== 'undefined') {
  module.exports = { migrateSchool, migrateV5Database, PRIMARY_REGION_TO_SLUG, EXPOSURE_KEY_TO_SLUG, MANUAL_CORRECTIONS };
}
