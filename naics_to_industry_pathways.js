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
 *
 * SCHEMA UPDATE 2026-07-17 (Chunk 1 of pharma-manufacturing V5 buildout):
 * Added a 24th key, pharmaceuticalManufacturing, and moved NAICS 32 out of
 * GAP to route to it. This closes a real miscalibration surfaced during the
 * Southeast biomanufacturing research pass: pharmaceutical manufacturing is
 * federally classified as NAICS 3254, under the NAICS 32 (Chemical
 * Manufacturing) supersector — NOT NAICS 62 (Health Care and Social
 * Assistance). Every biomanufacturing company built into anchor_employers_db
 * this session (Amgen, Lilly, UCB, Takeda, DifGen, Piramal, etc.) had been
 * tagged naics: 62 by established convention predating this fix, which
 * meant biomanufacturing majors were being matched to schools on generic
 * "medicine" strength rather than any manufacturing-specific signal.
 * NAICS 33 stays in GAP deliberately — it covers industrial/mechanical/
 * electronics manufacturing (machinery, computers, transportation
 * equipment), a genuinely different and still-unaddressed gap, not the
 * same thing as pharma manufacturing. Do not conflate the two.
 *
 * IMPORTANT — INTERIM STATE, NOT A BUG: this is schema declaration and
 * routing ONLY. Zero V5 schools have been scored on pharmaceuticalManufacturing
 * yet (that's Chunk 2/3 of this buildout, not done here). Until schools are
 * scored, resolveMajorRegionalFit() will set schoolsDataAvailable: true for
 * any major routed to this key (since the key now exists and pathwayKeys.length
 * > 0), but aligned_schools will still return [] (since every school's score
 * on this key is 0, filtered out by the existing `.filter(s => s.score > 0)`
 * step). That is a DIFFERENT signal than the pre-Chunk-1 GAP state
 * (schoolsDataAvailable: false) — "the capability exists but no schools are
 * scored yet" vs. "this pathway isn't supported at all." Anything reading
 * schoolsDataAvailable directly (report rendering, UI) should know this
 * distinction exists before Chunk 2 lands, or the interim state may look
 * like a silent regression rather than expected progress.
 *
 * SCHEMA UPDATE 2026-07-18 (Chunk 1 of advancedManufacturing V5 buildout):
 * Added a 25th key, advancedManufacturing, and moved NAICS 33 out of GAP to
 * route to it. Surfaced by a Southeast Possible Vectors test run: real
 * employers (NASA Marshall, Northrop Grumman, Blue Origin, SpaceX, BMW's
 * largest plant in the world, Boeing's 787 line, Nissan, Ingalls
 * Shipbuilding — the largest private employer in Mississippi) were all
 * correctly surfacing, but every one returned zero aligned_schools, since
 * NAICS 33 had been left as a disclosed GAP. Checked MAJOR_MAP['33'] before
 * naming the key: it holds four broad general-engineering majors (Mechanical
 * Engineering, Electrical Engineering, Industrial Engineering & Manufacturing
 * Systems, Chemical Engineering) — none narrowly scoped to one sub-industry
 * (no separate "Aerospace Engineering" or "Automotive Engineering" major
 * exists in this system). That argued against building three sub-industry-
 * specific keys (aerospaceDefense / automotiveManufacturing / shipbuilding)
 * the way pharmaceuticalManufacturing might have suggested by analogy — the
 * major granularity doesn't support that split, so one broader key matching
 * the actual major list is the right fit here, not over-engineering.
 *
 * NAICS 33 employer tagging did NOT need correcting the way NAICS 62 did for
 * pharma — every Southeast manufacturing entry (Northrop Grumman, and every
 * geo_industry_db cluster for NASA/SpaceX/BMW/Boeing/Nissan/Ingalls) was
 * already correctly tagged naics: 33 from the start. This buildout's Chunk 4
 * equivalent is therefore expected to be a no-op re-tagging step, not a real
 * correction pass.
 *
 * NAICS 31 (food manufacturing) is explicitly NOT touched by this change and
 * remains its own separate, unaddressed GAP — MAJOR_MAP['31'] holds entirely
 * different majors (Food Manufacturing & Processing Engineering, Food
 * Quality Systems & Safety Engineering, Culinary Science & Product
 * Innovation, Packaging Engineering & Design), a genuinely different problem
 * from general mechanical/electrical/industrial engineering. Do not conflate
 * the two or route NAICS 31 to advancedManufacturing as a shortcut.
 *
 * EXPECTATION FOR CHUNK 2/3: likely a BROADER school-scoring pass than
 * pharmaceuticalManufacturing's 50 schools, not narrower. Pharma manufacturing
 * is a specialized niche most schools don't touch; general mechanical/
 * electrical/industrial engineering strength is common across most state
 * flagships and technical universities. Plan Chunk 2/3 sizing accordingly.
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
  "32": { keys: ["pharmaceuticalManufacturing"], confidence: "HIGH", note: "Pharmaceutical manufacturing (NAICS 3254) lives under the NAICS 32 Chemical Manufacturing supersector — semantic match to the new pharmaceuticalManufacturing key is direct and unambiguous. SCHEMA-ONLY as of 2026-07-17: this key exists and routes correctly, but zero V5 schools have been scored on it yet (Chunk 2/3, not done here). Every company built into anchor_employers_db this session under the old naics: 62 convention (Amgen, Lilly, UCB, Takeda, DifGen, Piramal, etc.) should eventually be corrected to naics: 32 to actually benefit from this routing — that re-tagging is scoped as its own later chunk, not done here either." },

  // ── GAP — no V5 key exists, majors here get no aligned_schools ──
  "93": { keys: [], confidence: "GAP", note: "The Orchestration Layer (org communication/ops) — no V5 key" },
  "99": { keys: [], confidence: "GAP", note: "Reshoring & Domestic Supply Chain Economy (manufacturing) — no V5 key" },
  "101": { keys: [], confidence: "GAP", note: "The Planning Economy — no V5 key" },
  "31": { keys: [], confidence: "GAP", note: "Manufacturing — no V5 key" },
  "33": { keys: ["advancedManufacturing"], confidence: "HIGH", note: "General mechanical/electrical/industrial/chemical engineering manufacturing (MAJOR_MAP['33'] holds exactly these four broad majors) -- semantic match to the new advancedManufacturing key is direct. SCHEMA-ONLY as of 2026-07-18: this key exists and routes correctly, but zero V5 schools have been scored on it yet (Chunk 2/3, not done here). Employer-side naics:33 tagging in anchor_employers_db.js and every relevant geo_industry_db pass file was already correct before this fix -- no re-tagging chunk needed, unlike the earlier pharmaceuticalManufacturing buildout which required correcting naics:62 to naics:32 across 14 companies." },
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
