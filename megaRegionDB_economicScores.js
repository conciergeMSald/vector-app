/**
 * VECTOR Lifescape — Mega Region Database — economicScores
 * File: megaRegionDB_economicScores.js
 * GENERATED from mega_regions_seed_data.js -- do not hand-edit.
 * Regenerate with generate_megaRegionDB_economicScores.js after any
 * future Census research pass.
 *
 * PURPOSE: per-megaregion economic_scores (0-100 per category, ~27
 * category taxonomy, LQ-based methodology -- see mega_regions_seed_data.js
 * header for full sourcing/methodology detail and per-region caveats).
 * Keyed by the LIVE megaregion display string (e.g. "Great Lakes", "Front
 * Range") -- confirmed against geo_zip_to_megaregion.js and matching
 * MEGAREGION_FUTURE_RESILIENCE's keys and major_regional_resolver.js's
 * g.megaregion values. This is NOT the same as region_name in all cases --
 * front-range's region_name is "Front Range & Silicon Slopes" but its live
 * key here is "Front Range". See SLUG_TO_LIVE_MEGAREGION in the generator
 * for the explicit, audited mapping (not a region_name passthrough).
 *
 * COVERAGE (as of generation): regions below have real economic_scores
 * for SOME of the ~27 categories, not all -- absent categories are
 * intentionally omitted, not zeroed. Consumers must treat a missing key
 * as "not yet researched," never as a true 0.
 */

'use strict';

const MEGAREGION_ECONOMIC_SCORES = {
  // Northeast (region_slug: northeast, region_name: "Northeast") -- 27 of ~27 categories researched, as of 2026-07-30
  "Northeast": {
    "publicPolicy": 99,
    "investmentBanking": 98,
    "privateEquity": 96,
    "insurance": 94,
    "consulting": 92,
    "medicine": 90,
    "luxuryBrands": 90,
    "realEstate": 88,
    "pharmaceuticalManufacturing": 88,
    "entertainmentMedia": 85,
    "nonprofitLeadership": 85,
    "aestheticsAndBeauty": 82,
    "healthcareAdministration": 82,
    "sportsBusiness": 80,
    "ventureCapital": 78,
    "hospitality": 78,
    "technology": 75,
    "entrepreneurship": 72,
    "healthWellness": 70,
    "consumerProducts": 65,
    "supplyChain": 60,
    "defense": 55,
    "advancedManufacturing": 50,
    "energy": 45,
    "nutraceuticals": 40,
    "outdoorIndustry": 35,
    "agriculture": 20
  },
  // Piedmont Atlantic (region_slug: piedmont-atlantic, region_name: "Piedmont Atlantic") -- 27 of ~27 categories researched, as of 2026-07-30
  "Piedmont Atlantic": {
    "investmentBanking": 92,
    "supplyChain": 92,
    "consumerProducts": 90,
    "pharmaceuticalManufacturing": 88,
    "entertainmentMedia": 85,
    "nonprofitLeadership": 80,
    "medicine": 78,
    "sportsBusiness": 78,
    "technology": 73,
    "hospitality": 75,
    "realEstate": 75,
    "healthcareAdministration": 76,
    "entrepreneurship": 63,
    "privateEquity": 65,
    "energy": 60,
    "consulting": 55,
    "publicPolicy": 60,
    "ventureCapital": 53,
    "insurance": 50,
    "advancedManufacturing": 45,
    "healthWellness": 40,
    "agriculture": 35,
    "defense": 35,
    "luxuryBrands": 35,
    "aestheticsAndBeauty": 30,
    "nutraceuticals": 25,
    "outdoorIndustry": 25
  },
  // Front Range (region_slug: front-range, region_name: "Front Range & Silicon Slopes") -- 10 of ~27 categories researched, as of 2026-07-30
  "Front Range": {
    "ventureCapital": 90,
    "technology": 85,
    "defense": 88,
    "advancedManufacturing": 75,
    "luxuryBrands": 82,
    "outdoorIndustry": 82,
    "nutraceuticals": 60,
    "consumerProducts": 68,
    "nonprofitLeadership": 70,
    "entrepreneurship": 75
  },
  // Great Lakes (region_slug: great-lakes, region_name: "Great Lakes") -- 20 of ~27 categories researched, as of 2026-08-13
  "Great Lakes": {
    "investmentBanking": 31,
    "consulting": 38,
    "realEstate": 38,
    "entertainmentMedia": 26,
    "consumerProducts": 60,
    "luxuryBrands": 48,
    "technology": 35,
    "entrepreneurship": 45,
    "sportsBusiness": 57,
    "aestheticsAndBeauty": 49,
    "hospitality": 33,
    "healthWellness": 50,
    "supplyChain": 58,
    "defense": 21,
    "advancedManufacturing": 88,
    "energy": 46,
    "nutraceuticals": 41,
    "outdoorIndustry": 46,
    "medicine": 52,
    "pharmaceuticalManufacturing": 54
  },
  // Gulf Coast (region_slug: gulf-coast, region_name: "Gulf Coast") -- 19 of ~27 categories researched, as of 2026-08-13
  "Gulf Coast": {
    "investmentBanking": 13,
    "consulting": 22,
    "realEstate": 37,
    "entertainmentMedia": 31,
    "consumerProducts": 25,
    "luxuryBrands": 60,
    "technology": 19,
    "entrepreneurship": 49,
    "sportsBusiness": 74,
    "aestheticsAndBeauty": 43,
    "hospitality": 100,
    "healthWellness": 36,
    "supplyChain": 38,
    "defense": 18,
    "advancedManufacturing": 14,
    "energy": 86,
    "outdoorIndustry": 34,
    "medicine": 50,
    "pharmaceuticalManufacturing": 6
  },
  // Texas Triangle (region_slug: texas-triangle, region_name: "Texas Triangle") -- 20 of ~27 categories researched, as of 2026-08-13
  "Texas Triangle": {
    "investmentBanking": 35,
    "consulting": 65,
    "realEstate": 61,
    "entertainmentMedia": 31,
    "consumerProducts": 31,
    "luxuryBrands": 49,
    "technology": 65,
    "entrepreneurship": 46,
    "sportsBusiness": 51,
    "aestheticsAndBeauty": 53,
    "hospitality": 37,
    "healthWellness": 51,
    "supplyChain": 63,
    "defense": 79,
    "advancedManufacturing": 45,
    "energy": 62,
    "nutraceuticals": 74,
    "outdoorIndustry": 41,
    "medicine": 52,
    "pharmaceuticalManufacturing": 16
  },
  // Arizona Sun Corridor (region_slug: arizona-sun-corridor, region_name: "Arizona Sun Corridor") -- 20 of ~27 categories researched, as of 2026-08-13
  "Arizona Sun Corridor": {
    "investmentBanking": 7,
    "consulting": 98,
    "realEstate": 72,
    "entertainmentMedia": 32,
    "consumerProducts": 26,
    "luxuryBrands": 53,
    "technology": 38,
    "entrepreneurship": 47,
    "sportsBusiness": 70,
    "aestheticsAndBeauty": 57,
    "hospitality": 56,
    "healthWellness": 62,
    "supplyChain": 52,
    "defense": 100,
    "advancedManufacturing": 19,
    "energy": 35,
    "nutraceuticals": 60,
    "outdoorIndustry": 51,
    "medicine": 52,
    "pharmaceuticalManufacturing": 23
  },
  // Southern California (region_slug: southern-california, region_name: "Southern California") -- 20 of ~27 categories researched, as of 2026-08-13
  "Southern California": {
    "investmentBanking": 27,
    "consulting": 54,
    "realEstate": 78,
    "entertainmentMedia": 100,
    "consumerProducts": 45,
    "luxuryBrands": 48,
    "technology": 51,
    "entrepreneurship": 61,
    "sportsBusiness": 64,
    "aestheticsAndBeauty": 63,
    "hospitality": 56,
    "healthWellness": 56,
    "supplyChain": 41,
    "defense": 100,
    "advancedManufacturing": 25,
    "energy": 25,
    "nutraceuticals": 100,
    "outdoorIndustry": 36,
    "medicine": 46,
    "pharmaceuticalManufacturing": 80
  },
  // Northern California (region_slug: northern-california, region_name: "Northern California") -- 20 of ~27 categories researched, as of 2026-08-13
  "Northern California": {
    "investmentBanking": 61,
    "consulting": 51,
    "realEstate": 58,
    "entertainmentMedia": 42,
    "consumerProducts": 24,
    "luxuryBrands": 33,
    "technology": 100,
    "entrepreneurship": 43,
    "sportsBusiness": 50,
    "aestheticsAndBeauty": 49,
    "hospitality": 33,
    "healthWellness": 50,
    "supplyChain": 20,
    "defense": 22,
    "advancedManufacturing": 25,
    "energy": 43,
    "nutraceuticals": 42,
    "outdoorIndustry": 28,
    "medicine": 39,
    "pharmaceuticalManufacturing": 100
  },
  // Florida (region_slug: florida, region_name: "Florida") -- 20 of ~27 categories researched, as of 2026-08-13
  "Florida": {
    "investmentBanking": 20,
    "consulting": 44,
    "realEstate": 63,
    "entertainmentMedia": 38,
    "consumerProducts": 18,
    "luxuryBrands": 50,
    "technology": 32,
    "entrepreneurship": 54,
    "sportsBusiness": 94,
    "aestheticsAndBeauty": 46,
    "hospitality": 63,
    "healthWellness": 40,
    "supplyChain": 36,
    "defense": 35,
    "advancedManufacturing": 18,
    "energy": 27,
    "nutraceuticals": 43,
    "outdoorIndustry": 28,
    "medicine": 55,
    "pharmaceuticalManufacturing": 22
  },
  // Cascadia (region_slug: cascadia, region_name: "Cascadia") -- 20 of ~27 categories researched, as of 2026-08-13
  "Cascadia": {
    "investmentBanking": 9,
    "consulting": 69,
    "realEstate": 70,
    "entertainmentMedia": 36,
    "consumerProducts": 39,
    "luxuryBrands": 43,
    "technology": 100,
    "entrepreneurship": 51,
    "sportsBusiness": 60,
    "aestheticsAndBeauty": 60,
    "hospitality": 36,
    "healthWellness": 55,
    "supplyChain": 42,
    "defense": 100,
    "advancedManufacturing": 37,
    "energy": 38,
    "nutraceuticals": 36,
    "outdoorIndustry": 50,
    "medicine": 50,
    "pharmaceuticalManufacturing": 27
  },
};

if (typeof window !== 'undefined') {
  window.MEGAREGION_ECONOMIC_SCORES = MEGAREGION_ECONOMIC_SCORES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MEGAREGION_ECONOMIC_SCORES };
}

