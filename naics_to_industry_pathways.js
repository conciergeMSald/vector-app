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
 * SCHEMA UPDATE 2026-07-12: expanded from 20 to 23 standard industryPathways
 * keys. Added hospitality, supplyChain, and insurance after finding real,
 * disclosed content with nowhere to go — Cornell's Hotel School buried
 * inside realEstate/luxuryBrands, Michigan State's #1-ranked supply chain
 * program folded into consumerProducts, Ohio State's genuine insurance
 * specialty (Nationwide, Progressive, Grange all Ohio-based) dropped
 * entirely for lack of a key. These are real, common enough fields to
 * warrant first-class treatment rather than continuing to force-fit them.
 */

const NAICS_TO_INDUSTRY_PATHWAYS = {
  // ── HIGH CONFIDENCE ──────────────────────────────────────────
  "51": { keys: ["technology", "entertainmentMedia"], confidence: "HIGH" },
  "52": { keys: ["investmentBanking", "privateEquity", "ventureCapital", "insurance"], confidence: "HIGH" },
  "11": { keys: ["agriculture"], confidence: "HIGH", note: "Agriculture & Food Systems — was a GAP, now has a proper key. Added 2026-07-12 after finding real, disclosed agricultural content scattered across 20+ schools' nutraceuticals/outdoorIndustry/publicPolicy notes with nowhere dedicated to live." },
  "21": { keys: ["energy"], confidence: "HIGH", note: "Mining/Energy — was a GAP, now has a proper key. Added after Colorado School of Mines' petroleum/renewable energy identity was found conflated entirely into a single 'technology' score, plus real content at LSU and Texas Tech." },
  "22": { keys: ["energy"], confidence: "HIGH", note: "Utilities — routed to the same new energy key as NAICS 21." },
  "54": { keys: ["consulting"], confidence: "HIGH" },
  "62": { keys: ["medicine", "healthcareAdministration", "healthWellness"], confidence: "HIGH" },
  "81": { keys: ["aestheticsAndBeauty"], confidence: "HIGH" },
  "71": { keys: ["sportsBusiness", "entertainmentMedia"], confidence: "HIGH" },
  "94": { keys: ["privateEquity", "investmentBanking"], confidence: "HIGH", note: "Acquisition Economy — confirmed via actual major content (M&A/PE/IB tracks)" },
  "95": { keys: ["healthWellness", "medicine"], confidence: "HIGH", note: "Longevity Economy — confirmed via actual major content (biogerontology/aging)" },
  "100": { keys: ["defense"], confidence: "HIGH", note: "Military & Post-Service — direct match" },
  "72": { keys: ["hospitality"], confidence: "HIGH", note: "Hospitality & Food Service — was a GAP, now has a proper key" },
  "97": { keys: ["supplyChain"], confidence: "HIGH", note: "Physical Logistics Economy (ports/rail/warehousing) — was a GAP, now has a proper key" },
  "48": { keys: ["supplyChain"], confidence: "HIGH", note: "Transportation/Warehousing — was a GAP, now has a proper key" },
  "42": { keys: ["supplyChain"], confidence: "HIGH", note: "Wholesale Trade — upgraded from a weak consumerProducts fit (was MEDIUM) to a proper supplyChain match" },

  // ── MEDIUM CONFIDENCE — my calibration call, flagged for review ──
  "44": { keys: ["consumerProducts", "luxuryBrands", "supplyChain"], confidence: "MEDIUM", note: "luxuryBrands likely only fits a subset of retail majors, not all — worth a narrower split later. supplyChain added 2026-07-12 since 'Supply Chain Management' as a major literally lives in this NAICS sector." },
  "45": { keys: ["consumerProducts", "luxuryBrands"], confidence: "MEDIUM", note: "same as 44" },
  "96": { keys: ["privateEquity", "realEstate"], confidence: "MEDIUM", note: "Legacy Economy (wealth mgmt/estate/family office) — neither V5 key is a clean fit; split across both rather than force one" },
  "91": { keys: ["realEstate"], confidence: "MEDIUM", note: "Intelligent Trades (construction mgmt) — weak fit, 'trades' has no real V5 counterpart, realEstate is closest available" },
  "98": { keys: ["technology"], confidence: "MEDIUM", note: "Systems & Automation Economy — plausible but stretches 'technology' to cover industrial automation" },
  "23": { keys: ["realEstate"], confidence: "MEDIUM", note: "Construction — same weak-fit logic as 91" },

  // ── GAP — no V5 key exists, majors here get no aligned_schools ──
  "93": { keys: [], confidence: "GAP", note: "The Orchestration Layer (org communication/ops) — no V5 key" },
  "99": { keys: [], confidence: "GAP", note: "Reshoring & Domestic Supply Chain Economy (manufacturing) — no V5 key" },
  "101": { keys: [], confidence: "GAP", note: "The Planning Economy — no V5 key" },
  "31": { keys: [], confidence: "GAP", note: "Manufacturing — no V5 key" },
  "32": { keys: [], confidence: "GAP", note: "Manufacturing — no V5 key" },
  "33": { keys: [], confidence: "GAP", note: "Manufacturing — no V5 key" },
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
