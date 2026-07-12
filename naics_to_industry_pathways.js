/**
 * VECTOR Lifescape — NAICS_TO_INDUSTRY_PATHWAYS crosswalk
 * Built 2026-07-12 to resolve the bridge explicitly deferred on 2026-07-10
 * (logged in lifescape_career_intelligence.js: "keep separate, revisit only
 * if a specific feature requires the bridge"). MAJOR-REGIONAL-INTEGRATION-001
 * / "Possible Vectors" is that feature.
 *
 * CONFIDENCE LEVELS, stated per row, not hidden:
 *   HIGH   — direct, unambiguous semantic match
 *   MEDIUM — my calibration call, defensible but genuinely arguable;
 *            flagged for review, not silently presented as certain
 *   GAP    — no V5 industryPathways key covers this NAICS sector at all.
 *            This is a real content gap in V5 itself, not a resolver bug.
 *            Per Progressive Report Architecture: majors in GAP sectors
 *            simply get no aligned_schools — invisible, not broken.
 *
 * NOTE ON GAPS: every GAP sector below is a trades/logistics/manufacturing/
 * agriculture/utilities sector — the same "infrastructure of society"
 * blind spot already found and partially corrected in the geo_industry_db
 * files this session. V5's 20 industryPathways keys were evidently built
 * around a white-collar/prestige lens. Closing these gaps means adding new
 * V5 industryPathways keys, not just extending this crosswalk — out of
 * scope for this pass, flagged for its own future round.
 */

const NAICS_TO_INDUSTRY_PATHWAYS = {
  // ── HIGH CONFIDENCE ──────────────────────────────────────────
  "51": { keys: ["technology", "entertainmentMedia"], confidence: "HIGH" },
  "52": { keys: ["investmentBanking", "privateEquity", "ventureCapital"], confidence: "HIGH" },
  "54": { keys: ["consulting"], confidence: "HIGH" },
  "62": { keys: ["medicine", "healthcareAdministration", "healthWellness"], confidence: "HIGH" },
  "81": { keys: ["aestheticsAndBeauty"], confidence: "HIGH" },
  "71": { keys: ["sportsBusiness", "entertainmentMedia"], confidence: "HIGH" },
  "94": { keys: ["privateEquity", "investmentBanking"], confidence: "HIGH", note: "Acquisition Economy — confirmed via actual major content (M&A/PE/IB tracks)" },
  "95": { keys: ["healthWellness", "medicine"], confidence: "HIGH", note: "Longevity Economy — confirmed via actual major content (biogerontology/aging)" },
  "100": { keys: ["defense"], confidence: "HIGH", note: "Military & Post-Service — direct match" },

  // ── MEDIUM CONFIDENCE — my calibration call, flagged for review ──
  "44": { keys: ["consumerProducts", "luxuryBrands"], confidence: "MEDIUM", note: "luxuryBrands likely only fits a subset of retail majors, not all — worth a narrower split later" },
  "45": { keys: ["consumerProducts", "luxuryBrands"], confidence: "MEDIUM", note: "same as 44" },
  "96": { keys: ["privateEquity", "realEstate"], confidence: "MEDIUM", note: "Legacy Economy (wealth mgmt/estate/family office) — neither V5 key is a clean fit; split across both rather than force one" },
  "91": { keys: ["realEstate"], confidence: "MEDIUM", note: "Intelligent Trades (construction mgmt) — weak fit, 'trades' has no real V5 counterpart, realEstate is closest available" },
  "98": { keys: ["technology"], confidence: "MEDIUM", note: "Systems & Automation Economy — plausible but stretches 'technology' to cover industrial automation" },
  "23": { keys: ["realEstate"], confidence: "MEDIUM", note: "Construction — same weak-fit logic as 91" },
  "42": { keys: ["consumerProducts"], confidence: "MEDIUM", note: "Wholesale Trade — weak fit" },

  // ── GAP — no V5 key exists, majors here get no aligned_schools ──
  "72": { keys: [], confidence: "GAP", note: "Hospitality & Food Service — no V5 key" },
  "93": { keys: [], confidence: "GAP", note: "The Orchestration Layer (org communication/ops) — no V5 key" },
  "97": { keys: [], confidence: "GAP", note: "Physical Logistics Economy (ports/rail/warehousing) — no V5 key" },
  "99": { keys: [], confidence: "GAP", note: "Reshoring & Domestic Supply Chain Economy (manufacturing) — no V5 key" },
  "101": { keys: [], confidence: "GAP", note: "The Planning Economy — no V5 key" },
  "11": { keys: [], confidence: "GAP", note: "Agriculture — no V5 key" },
  "21": { keys: [], confidence: "GAP", note: "Mining/Energy — no V5 key" },
  "22": { keys: [], confidence: "GAP", note: "Utilities — no V5 key" },
  "31": { keys: [], confidence: "GAP", note: "Manufacturing — no V5 key" },
  "32": { keys: [], confidence: "GAP", note: "Manufacturing — no V5 key" },
  "33": { keys: [], confidence: "GAP", note: "Manufacturing — no V5 key" },
  "48": { keys: [], confidence: "GAP", note: "Transportation/Warehousing — no V5 key" },
};

function getIndustryPathwayKeys(naicsSector) {
  const entry = NAICS_TO_INDUSTRY_PATHWAYS[String(naicsSector)];
  return entry ? entry.keys : [];
}

if (typeof window !== 'undefined') {
  window.NAICS_TO_INDUSTRY_PATHWAYS = NAICS_TO_INDUSTRY_PATHWAYS;
  window.getIndustryPathwayKeys = getIndustryPathwayKeys;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NAICS_TO_INDUSTRY_PATHWAYS, getIndustryPathwayKeys };
}
