// ============================================================================
// VECTOR — Mega Region Database — Seed Data
// Per MEGA-REGION-ARCH-001 v1, Section 3
//
// Real economic_scores exist for exactly 3 of 11 regions, as of this build.
// The other 8 ship as structurally-complete rows (slug/name/states_metros
// populated so the Gravity Map can enumerate all 11) with economic_scores,
// cultural_scores, regional_narrative, and researched_at left null/absent.
// No fabricated placeholder scores anywhere in this file.
// ============================================================================

'use strict';

const ENGINE_VERSION = 'mega-region-v1-2026-07-30';

const MEGA_REGIONS_SEED = [
  {
    region_slug: 'northeast',
    region_name: 'Northeast',
    states_metros: ['Boston', 'New York City', 'Philadelphia', 'Washington DC'],
    economic_scores: {
      publicPolicy: 99, investmentBanking: 98, privateEquity: 96, insurance: 94,
      consulting: 92, medicine: 90, luxuryBrands: 90, realEstate: 88,
      pharmaceuticalManufacturing: 88, entertainmentMedia: 85, nonprofitLeadership: 85,
      aestheticsAndBeauty: 82, healthcareAdministration: 82, sportsBusiness: 80,
      ventureCapital: 78, hospitality: 78, technology: 75, entrepreneurship: 72,
      healthWellness: 70, consumerProducts: 65, supplyChain: 60, defense: 55,
      advancedManufacturing: 50, energy: 45, nutraceuticals: 40, outdoorIndustry: 35,
      agriculture: 20,
      // Macro-economic fields NOT yet researched — intentionally absent, not
      // guessed: costOfLivingIndex, medianIncome, jobGrowthRate,
      // startupVentureDensity, corporateHqDensity, unemploymentRate.
    },
    cultural_scores: null, // not yet started
    regional_narrative: null, // not yet written — real scores exist, prose narrative does not
    researched_at: '2026-07-30',
    engine_version: ENGINE_VERSION,
  },

  {
    region_slug: 'piedmont-atlantic',
    region_name: 'Piedmont Atlantic',
    states_metros: ['Charlotte', 'Atlanta', 'Raleigh-Durham (Research Triangle)'],
    economic_scores: {
      investmentBanking: 92, supplyChain: 92, consumerProducts: 90,
      pharmaceuticalManufacturing: 88, // revised up from 30 -> 78 -> 88 once Research Triangle confirmed in scope
      entertainmentMedia: 85, nonprofitLeadership: 80, medicine: 78, // revised up from 50
      sportsBusiness: 78, technology: 73, // revised up from 60
      hospitality: 75, realEstate: 75, healthcareAdministration: 76, // revised up from 70
      entrepreneurship: 63, // revised up from 55
      privateEquity: 65, energy: 60, consulting: 55,
      publicPolicy: 60, // revised up from 55
      ventureCapital: 53, // revised up from 45
      insurance: 50, advancedManufacturing: 45, healthWellness: 40,
      agriculture: 35, defense: 35, luxuryBrands: 35, aestheticsAndBeauty: 30,
      nutraceuticals: 25, outdoorIndustry: 25,
      // Macro-economic fields not yet researched.
    },
    cultural_scores: null,
    regional_narrative: null,
    researched_at: '2026-07-30',
    engine_version: ENGINE_VERSION,
  },

  {
    region_slug: 'front-range-silicon-slopes',
    region_name: 'Front Range & Silicon Slopes',
    states_metros: ['Denver', 'Boulder', 'Colorado Springs', 'Salt Lake City', 'Provo', 'Lehi'],
    economic_scores: {
      // PARTIAL — 12 of 28 fields. Colorado-side fields build on already-
      // verified Boulder-area research from earlier this session (high
      // confidence). Utah-side fields reflect the nutraceutical-cluster and
      // outdoor-industry research completed this session, but several
      // remaining economic fields (consulting, investmentBanking,
      // publicPolicy, medicine, healthcareAdministration, insurance,
      // realEstate, entertainmentMedia, sportsBusiness, privateEquity,
      // aestheticsAndBeauty, pharmaceuticalManufacturing, energy, supplyChain,
      // hospitality, healthWellness, agriculture) remain unresearched and are
      // intentionally absent below, not guessed.
      ventureCapital: 90, technology: 85, defense: 88, advancedManufacturing: 75,
      luxuryBrands: 82, outdoorIndustry: 82, nutraceuticals: 60, consumerProducts: 68,
      nonprofitLeadership: 70, entrepreneurship: 75,
      // consulting through agriculture: NOT YET RESEARCHED, intentionally absent
    },
    cultural_scores: null,
    regional_narrative: null,
    researched_at: '2026-07-30', // partial research date — this region is NOT complete despite having a date
    engine_version: ENGINE_VERSION,
    // NOTE: the Outdoor Retailer trade show's current host city is
    // DELIBERATELY NOT included anywhere in this entry. Two conflicting
    // claims exist (product owner: Minneapolis; assistant's own uncertain
    // recollection: a Denver/Salt Lake City history) and a research task was
    // launched but has not returned results. Do not add this fact to
    // economic_scores or regional_narrative until confirmed.
  },

  // ── The remaining 8 regions: structurally complete, content not started ──
  // Each row exists so the Gravity Map can enumerate all 11 canonical
  // regions. economic_scores, cultural_scores, regional_narrative, and
  // researched_at are all null/absent — this is NOT populated data, just a
  // valid row shape awaiting real research.
  {
    region_slug: 'great-lakes',
    region_name: 'Great Lakes',
    states_metros: ['Michigan', 'Ohio', 'Indiana', 'Wisconsin', 'Illinois', 'Pennsylvania', 'Minnesota'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
  {
    region_slug: 'great-plains',
    region_name: 'Great Plains',
    states_metros: ['North Dakota', 'South Dakota', 'Nebraska', 'Kansas', 'Iowa', 'Missouri', 'Oklahoma'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
  {
    region_slug: 'texas-triangle',
    region_name: 'Texas Triangle',
    states_metros: ['Dallas', 'Houston', 'San Antonio', 'Austin'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
  {
    region_slug: 'arizona-sun-corridor',
    region_name: 'Arizona Sun Corridor',
    states_metros: ['Phoenix', 'Tucson'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
  {
    region_slug: 'southern-california',
    region_name: 'Southern California',
    states_metros: ['Los Angeles', 'Orange County', 'San Diego'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
  {
    region_slug: 'northern-california',
    region_name: 'Northern California',
    states_metros: ['San Francisco', 'San Jose', 'Oakland'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
  {
    region_slug: 'florida',
    region_name: 'Florida',
    states_metros: ['Statewide'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
  {
    region_slug: 'cascadia',
    region_name: 'Cascadia',
    states_metros: ['Seattle', 'Portland'],
    economic_scores: null, cultural_scores: null, regional_narrative: null,
    researched_at: null, engine_version: null,
  },
];

if (typeof module !== 'undefined') {
  module.exports = { MEGA_REGIONS_SEED, ENGINE_VERSION };
}
