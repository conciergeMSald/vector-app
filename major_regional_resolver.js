/**
 * VECTOR Lifescape — Major Regional Resolver
 * Implements MAJOR-REGIONAL-INTEGRATION-001 v4, Section 4.
 * Step 5 (aligned_schools) now wired via NAICS_TO_INDUSTRY_PATHWAYS,
 * resolving the bridge deferred 2026-07-10. See that file's header for
 * confidence levels and disclosed gaps.
 *
 * ANCHOR_EMPLOYERS enrichment added 2026-07-25 — scoped integration for
 * anchor_employers_db.js, which previously loaded but had zero consumption
 * code anywhere in the app. When a geo cluster's anchor_employers name
 * matches a company_name in ANCHOR_EMPLOYERS, the full structured profile
 * (org_functions, capability_roles, growth_initiative_note, competitors,
 * etc.) is attached to that result group as enriched_employers. Purely
 * additive — anchor_employers (plain name strings) is unchanged, this is
 * a new field alongside it. Confirmed 18 of 83 ANCHOR_EMPLOYERS profiles
 * have a real name-match in the currently-loaded geo files at build time;
 * the other 65 simply produce no enrichment (invisible, not broken — same
 * discipline as every other GAP/no-match case in this resolver).
 *
 * industry_fit_score added 2026-08-13 — surfaces one MEGAREGION_ECONOMIC_SCORES
 * category per major (via NAICS_SECTOR_TO_ECONOMIC_CATEGORY below), computed
 * from real Census CBP Location Quotient data (see mega_regions_seed_data.js).
 * Purely additive alongside resilience_score, which is unchanged and remains
 * the product-owner-approved single resilience metric (approved 2026-07-10).
 * Only populates when the caller passes megaRegionEconomicScores; omitting it
 * leaves industry_fit_score/industry_fit_category absent from every result,
 * same as any other optional dependency in this resolver (v5Schools,
 * anchorEmployers, etc.). Some NAICS sectors resolve industry_fit_score to
 * null by design — see the mapping table's comments for which and why.
 *
 * Pure function, no data mutation — mirrors the Family Synthesis Engine
 * pattern. Does NOT modify MAJOR_MAP, GEO_INDUSTRY_DB_*, or any source file.
 */

'use strict';

// NAICS sector (MAJOR_MAP key) -> economic_scores category (MEGAREGION_ECONOMIC_SCORES
// field name), approved by product owner 2026-08-13. Additive only -- does NOT
// touch resilience_score or any existing field/behavior. Three outcomes per
// sector, all intentional:
//   1. Real category, mapped below, present in a given megaregion's
//      economic_scores -- industry_fit_score resolves to a number.
//   2. Real category, mapped below, but that specific megaregion hasn't been
//      researched for it yet (economic_scores taxonomy is ~27 categories,
//      individual regions currently have 10-27) -- resolves to null, a real
//      "not yet researched" gap, never a fabricated 0.
//   3. NAICS sector maps to a category that doesn't exist ANYWHERE in the
//      economic_scores taxonomy yet (92, 11, 94 -- publicPolicy, agriculture,
//      privateEquity all unresearched categories) or has no defensible match
//      at all (91, 93, 95, 96 -- custom platform "economy" themes with no
//      NAICS analog) -- resolves to null permanently until the taxonomy grows.
// See mega_regions_seed_data.js header for the full economic_scores category
// list and per-region sourcing.
const NAICS_SECTOR_TO_ECONOMIC_CATEGORY = {
  '54': 'consulting',
  '62': 'medicine',
  '72': 'hospitality',
  '33': 'advancedManufacturing',
  '48': 'supplyChain',
  '42': 'supplyChain',
  '22': 'energy',
  '21': 'energy',
  '31': 'consumerProducts',
  '51': 'technology',
  '52': 'investmentBanking',
  '44': 'consumerProducts',
  '45': 'consumerProducts',
  '81': 'aestheticsAndBeauty',
  '71': 'entertainmentMedia',
  '23': 'realEstate',
  '32': 'pharmaceuticalManufacturing',
  '92': 'publicPolicy',   // not yet researched in economic_scores -- resolves null today
  '11': 'agriculture',    // not yet researched in economic_scores -- resolves null today
  '94': 'privateEquity',  // not yet researched in economic_scores -- resolves null today
  '91': null,              // "The Intelligent Trades" -- no NAICS/economic_scores analog
  '93': null,              // "The Orchestration Layer" -- no NAICS/economic_scores analog
  '95': null,              // "The Longevity Economy" -- no NAICS/economic_scores analog
  '96': null               // "The Legacy Economy" -- no NAICS/economic_scores analog
};

// Strips parenthetical suffixes ("(headquarters)", "(HQ)", "(Fab 21)", etc.)
// and normalizes for matching. Geo-file employer strings carry real
// descriptive detail (addresses, "(global headquarters)") that
// ANCHOR_EMPLOYERS' plain company_name doesn't — this strips that noise
// without altering either source file.
function normalizeEmployerName(name) {
  return String(name || '')
    .split('(')[0]
    .replace(/[,.]/g, '')
    .trim()
    .toLowerCase();
}

// Matches only on a normalized core of at least 4 characters, in either
// direction, to avoid spurious short-string matches (e.g. a 3-letter
// abbreviation colliding with an unrelated company).
function employerNamesMatch(geoText, anchorCompanyName) {
  const a = normalizeEmployerName(geoText);
  const b = normalizeEmployerName(anchorCompanyName);
  if (a.length < 4 || b.length < 4) return false;
  return a.includes(b) || b.includes(a);
}

function findAnchorEmployerMatches(geoEmployerNames, anchorEmployers) {
  if (!anchorEmployers || !anchorEmployers.length) return [];
  const matches = [];
  const matchedIds = new Set();
  geoEmployerNames.forEach(geoName => {
    anchorEmployers.forEach(company => {
      if (matchedIds.has(company.company_name)) return;
      if (employerNamesMatch(geoName, company.company_name)) {
        matches.push(company);
        matchedIds.add(company.company_name);
      }
    });
  });
  return matches;
}

function resolveMajorRegionalFit(majorLabel, options) {
  const {
    majorMap,
    geoPasses,
    zipToMegaregion,
    megaregionResilience,
    v5Schools = null,       // UNIVERSITY_DB_V5 object — school scoring runs only if provided
    naicsToIndustryPathways = null,  // NAICS_TO_INDUSTRY_PATHWAYS — required for real aligned_schools
    clusterKeywordFilters = null,    // MAJOR_CLUSTER_KEYWORD_FILTERS — optional, narrows broad NAICS sectors
    anchorEmployers = null,          // ANCHOR_EMPLOYERS — optional, enriches matching employer names
    megaRegionEconomicScores = null, // MEGAREGION_ECONOMIC_SCORES — optional, adds industry_fit_score alongside resilience_score. Does not affect resilience_score.
    schoolCap = 3
  } = options;

  let naicsSector = null;
  for (const [naics, majors] of Object.entries(majorMap)) {
    const found = majors.find(m => m.major_label === majorLabel);
    if (found) { naicsSector = naics; break; }
  }
  if (!naicsSector) {
    return { major: majorLabel, found: false, results: [] };
  }

  const keywordFilter = clusterKeywordFilters ? clusterKeywordFilters[majorLabel] : null;

  const matchingClusters = [];
  for (const pass of geoPasses) {
    for (const [zip, entry] of Object.entries(pass.data)) {
      if (!entry.clusters) continue;
      const region = zipToMegaregion[zip];
      if (!region) continue;
      for (const cluster of entry.clusters) {
        if (String(cluster.naics) !== String(naicsSector)) continue;
        if (keywordFilter && keywordFilter.length) {
          const nameLower = (cluster.name || '').toLowerCase();
          const matches = keywordFilter.some(kw => nameLower.includes(kw.toLowerCase()));
          if (!matches) continue; // NAICS matched but cluster name doesn't fit this specific major
        }
        matchingClusters.push({
          zip, neighborhood: entry.neighborhood, megaregion: region.megaregion,
          subgroup: region.subgroup || null, cluster
        });
      }
    }
  }

  const groups = {};
  for (const m of matchingClusters) {
    const key = m.subgroup ? `${m.megaregion}::${m.subgroup}` : m.megaregion;
    if (!groups[key]) {
      groups[key] = { megaregion: m.megaregion, subgroup: m.subgroup, anchor_employers: new Set(), zips: new Set() };
    }
    (m.cluster.anchor_employers || []).forEach(e => groups[key].anchor_employers.add(e));
    groups[key].zips.add(m.zip);
  }

  // Step 5 — real school scoring via the NAICS bridge
  const pathwayKeys = naicsToIndustryPathways
    ? (naicsToIndustryPathways[String(naicsSector)]?.keys || [])
    : [];
  const pathwayConfidence = naicsToIndustryPathways
    ? (naicsToIndustryPathways[String(naicsSector)]?.confidence || null)
    : null;

  // industry_fit_score — additive, does not touch resilience_score. See
  // NAICS_SECTOR_TO_ECONOMIC_CATEGORY above for the three null cases
  // (unmapped sector, unresearched category, no analog).
  const economicCategory = NAICS_SECTOR_TO_ECONOMIC_CATEGORY[String(naicsSector)] || null;

  const results = Object.values(groups).map(g => {
    const resilience = megaregionResilience[g.megaregion] || null;
    let aligned_schools = [];
    let schoolsDataAvailable = false;

    let industry_fit_score = null;
    if (economicCategory && megaRegionEconomicScores) {
      const regionScores = megaRegionEconomicScores[g.megaregion];
      if (regionScores && typeof regionScores[economicCategory] === 'number') {
        industry_fit_score = regionScores[economicCategory];
      }
    }

    if (v5Schools && pathwayKeys.length > 0) {
      schoolsDataAvailable = true;
      aligned_schools = Object.entries(v5Schools)
        .map(([name, s]) => {
          const industryScore = pathwayKeys.reduce((sum, key) => {
            return sum + (s.industryPathways?.[key]?.strength || 0);
          }, 0) / pathwayKeys.length;
          // megaRegionExposure uses V5's own 7-key taxonomy, not the 11-region
          // names directly -- best-effort lookup via known aliases where they
          // exist; schools without a mapped key simply score 0 on this axis
          // rather than being excluded.
          const megaKeyMap = {
            'Northeast': 'BosWash', 'Texas Triangle': 'TexasTriangle',
            'Piedmont Atlantic': 'CharLanta', 'Northern California': 'NorCalInnovationCorridor',
            'Southern California': 'SoCalCreativeEconomy', 'Great Lakes': 'MidContinentIndustrialEnergyCorridor'
          };
          const megaKey = megaKeyMap[g.megaregion];
          const geoScore = megaKey ? (s.megaRegionExposure?.[megaKey] || 0) : 0;
          const moat = s.institutionalMoat?.overallMoatScore || 0;
          return { name, score: industryScore + geoScore, moat };
        })
        .filter(s => s.score > 0)
        .sort((a, b) => (b.score - a.score) || (b.moat - a.moat))
        .slice(0, schoolCap)
        .map(s => s.name);
    }

    return {
      megaregion: g.megaregion,
      subgroup: g.subgroup,
      zip_count: g.zips.size,
      anchor_employers: Array.from(g.anchor_employers),
      enriched_employers: findAnchorEmployerMatches(Array.from(g.anchor_employers), anchorEmployers),
      resilience_score: resilience ? resilience.score : null,
      industry_fit_score,
      industry_fit_category: economicCategory,
      aligned_schools,
      schoolsDataAvailable,
      pathwayBridgeConfidence: pathwayConfidence
    };
  });

  return { major: majorLabel, naicsSector, found: true, results };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { resolveMajorRegionalFit };
}
