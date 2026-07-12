/**
 * VECTOR Lifescape — Major Regional Resolver
 * Implements MAJOR-REGIONAL-INTEGRATION-001 v4, Section 4.
 * Step 5 (aligned_schools) now wired via NAICS_TO_INDUSTRY_PATHWAYS,
 * resolving the bridge deferred 2026-07-10. See that file's header for
 * confidence levels and disclosed gaps.
 *
 * Pure function, no data mutation — mirrors the Family Synthesis Engine
 * pattern. Does NOT modify MAJOR_MAP, GEO_INDUSTRY_DB_*, or any source file.
 */

'use strict';

function resolveMajorRegionalFit(majorLabel, options) {
  const {
    majorMap,
    geoPasses,
    zipToMegaregion,
    megaregionResilience,
    v5Schools = null,       // UNIVERSITY_DB_V5 object — school scoring runs only if provided
    naicsToIndustryPathways = null,  // NAICS_TO_INDUSTRY_PATHWAYS — required for real aligned_schools
    clusterKeywordFilters = null,    // MAJOR_CLUSTER_KEYWORD_FILTERS — optional, narrows broad NAICS sectors
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

  const results = Object.values(groups).map(g => {
    const resilience = megaregionResilience[g.megaregion] || null;
    let aligned_schools = [];
    let schoolsDataAvailable = false;

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
      resilience_score: resilience ? resilience.score : null,
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
