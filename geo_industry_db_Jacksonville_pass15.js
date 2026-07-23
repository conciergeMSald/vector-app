/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_JACKSONVILLE (pass 15)
 * Built 2026-07-18, Chunk FL-D of the Florida mega region buildout.
 *
 * ZIPs match geo_zip_to_megaregion.js (Florida megaregion / Jacksonville
 * subgroup).
 */

const GEO_INDUSTRY_DB_JACKSONVILLE = {
  "32202": {
    zip: "32202",
    neighborhood: "Downtown Jacksonville",
    county: "Duval",
    clusters: [
      {
        name: "Fintech & Financial Infrastructure Technology",
        naics: 52,
        distance: "Local",
        anchor_employers: ["FIS (global headquarters)"],
        student_connection: "FIS is a genuine Fortune 500-scale fintech infrastructure company — $10B+ revenue, self-described as a 'Fintech Company' building the technology banks and capital-markets firms actually run on, not managing money directly. Moved into this specific downtown Jacksonville headquarters building in July 2019 — a real, recent commitment to the city, not a legacy address."
      },
      {
        name: "Real Estate Investment (Shopping Center REIT)",
        naics: 53,
        distance: "Local",
        anchor_employers: ["Regency Centers (global headquarters)"],
        student_connection: "Regency Centers is a publicly traded (NASDAQ: REG) REIT and one of the largest owners and operators of grocery-anchored shopping centers in the country, genuinely headquartered in downtown Jacksonville rather than a more traditionally expected market like New York or Chicago. A real, institutional real estate investment career path exists here alongside FIS's fintech identity, not instead of it. (Added 2026-07-22 — Jacksonville was reconsidered for real estate content given its size and growth, alongside Tampa Bay and Nashville.)"
      }
    ]
  },
  "32206": {
    zip: "32206",
    neighborhood: "Jacksonville (Talleyrand)",
    county: "Duval",
    clusters: [
      {
        name: "Port Logistics & Maritime Trade",
        naics: 48,
        distance: "Local",
        anchor_employers: ["Jacksonville Port Authority (JAXPORT)"],
        student_connection: "JAXPORT's corporate headquarters, with separate real cargo terminal operations nearby — a major East Coast port authority handling both container cargo and vehicle/roll-on-roll-off shipping. Careers span port operations, logistics engineering, and maritime trade management, distinct from the cruise-focused maritime hospitality anchored in Miami elsewhere in this database."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_JACKSONVILLE = GEO_INDUSTRY_DB_JACKSONVILLE;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_JACKSONVILLE };
