/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_SC (pass 17)
 * Built 2026-07-18, first of the Southeast-completion batch (SC/AR/LA/MS)
 * closing the gap where the "Southeast" button promises these 4 states but
 * none had any content until now.
 *
 * ZIPs match geo_zip_to_megaregion.js (Piedmont Atlantic megaregion).
 * Greenville-Spartanburg-Anderson is explicitly RPA-confirmed core
 * membership; Charleston's classification is extended/reasonable, not
 * independently RPA-confirmed the same way.
 */

const GEO_INDUSTRY_DB_SC = {
  "29651": {
    zip: "29651",
    neighborhood: "Greer (BMW's Spartanburg-area plant)",
    county: "Greenville",
    clusters: [
      {
        name: "Automotive Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["BMW Manufacturing Co."],
        student_connection: "BMW's largest manufacturing plant in the entire world — not just in the US — 11,000+ employees across a 10 million square foot campus, producing the X3, X5, X6, and X7 for export to roughly 120 countries through the nearby Port of Charleston. A genuinely global automotive manufacturing career, headquartered in upstate South Carolina."
      }
    ]
  },
  "29418": {
    zip: "29418",
    neighborhood: "North Charleston",
    county: "Charleston",
    clusters: [
      {
        name: "Aerospace Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Boeing South Carolina"],
        student_connection: "Boeing's final assembly and delivery site for the 787 Dreamliner — roughly 4,000 employees, located on the joint-use grounds of Charleston Air Force Base and Charleston International Airport. A real, current signal of continued investment: Boeing recently announced moving 787 engineering work to South Carolina as well, not just final assembly."
      }
    ]
  },
  "29401": {
    zip: "29401",
    neighborhood: "Downtown Charleston (Peninsula)",
    county: "Charleston",
    clusters: [
      {
        name: "Real Estate Development & Investment",
        naics: 53,
        distance: "Local",
        anchor_employers: ["The Beach Company (headquarters)"],
        student_connection: "The Beach Company, founded in 1945, is one of the oldest and largest privately held real estate development and investment firms in the Charleston region, genuinely headquartered on the peninsula — a real, long-standing local institution rather than a national firm chasing Charleston's recent growth boom. Charleston has been one of the fastest-growing mid-size real estate markets in the country in recent years, and a student here can trace that growth to a real, named company rather than an abstract market trend. (Added 2026-07-22 — Charleston was reconsidered for real estate content given the same size/growth logic applied to Nashville, Jacksonville, Tampa Bay, and New Orleans.)"
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_SC = GEO_INDUSTRY_DB_SC;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_SC };
