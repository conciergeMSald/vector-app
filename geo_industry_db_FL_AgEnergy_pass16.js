/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_FL_AGENERGY (pass 16)
 * Built 2026-07-18, Chunk FL-E (final) of the Florida mega region buildout —
 * agriculture (Everglades Agricultural Area) and energy (Juno Beach),
 * statewide industries rather than tied to one specific metro like the
 * previous 4 Florida chunks.
 *
 * ZIPs match geo_zip_to_megaregion.js. One honest precision note: Florida
 * Crystals' ZIP (33430, Belle Glade) is inferred from general area coverage,
 * not independently confirmed to the exact street address the way the other
 * ZIPs in this file were.
 */

const GEO_INDUSTRY_DB_FL_AGENERGY = {
  "33408": {
    zip: "33408",
    neighborhood: "Juno Beach",
    county: "Palm Beach",
    clusters: [
      {
        name: "Energy & Utilities (Corporate HQ)",
        naics: 22,
        distance: "Local",
        anchor_employers: ["NextEra Energy (global headquarters)", "Florida Power & Light (FPL)"],
        student_connection: "NextEra Energy's market cap sits at roughly $185-186 billion — genuinely one of the largest energy companies in the world, larger than most major oil companies most people would think of first. Florida Power & Light, its core utility subsidiary sharing this exact address, accounts for two-thirds of NextEra's total revenue. NextEra Energy Resources, the company's renewable energy development arm, is also based here — meaning traditional utility operations and renewable energy development sit inside the same Florida headquarters, not separate companies in separate states."
      }
    ]
  },
  "33440": {
    zip: "33440",
    neighborhood: "Clewiston",
    county: "Hendry",
    clusters: [
      {
        name: "Agriculture & Food Production",
        naics: 11,
        distance: "Local",
        anchor_employers: ["U.S. Sugar Corporation (headquarters)"],
        student_connection: "U.S. Sugar farms over 230,000 acres in the Everglades Agricultural Area and has operated since 1931 — real, large-scale agricultural careers spanning both sugar manufacturing and citrus processing, genuinely distinct from Florida's tourism/hospitality reputation."
      }
    ]
  },
  "33430": {
    zip: "33430",
    neighborhood: "Belle Glade",
    county: "Palm Beach",
    clusters: [
      {
        name: "Agriculture & Food Production",
        naics: 11,
        distance: "Local",
        anchor_employers: ["Florida Crystals Corporation (headquarters)"],
        student_connection: "Florida Crystals is the only organic grower of sugarcane in the United States and Florida's largest organic farmer — $843.7M revenue, Regenerative Organic Certified. A genuinely distinctive, real career path in sustainable/organic large-scale agriculture, not a niche."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_FL_AGENERGY = GEO_INDUSTRY_DB_FL_AGENERGY;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_FL_AGENERGY };
