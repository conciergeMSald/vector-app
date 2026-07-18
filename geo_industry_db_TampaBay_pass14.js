/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_TAMPABAY (pass 14)
 * Built 2026-07-18, Chunk FL-C of the Florida mega region buildout.
 *
 * ZIPs match geo_zip_to_megaregion.js (Florida megaregion / Tampa Bay
 * subgroup). Note: Formulated Solutions is precisely in Largo (Pinellas
 * County), not Tampa itself (Hillsborough County) — a correction from
 * earlier session work that described it generally as "Tampa." Both
 * cities are part of the same Tampa Bay metro, kept under one subgroup,
 * but the city-level attribution is now accurate.
 */

const GEO_INDUSTRY_DB_TAMPABAY = {
  "33612": {
    zip: "33612",
    neighborhood: "Tampa (USF/Magnolia area)",
    county: "Hillsborough",
    clusters: [
      {
        name: "Academic Medicine & Cancer Research",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Moffitt Cancer Center (Magnolia Campus)"],
        student_connection: "Moffitt is one of Florida's top cancer hospitals, ranked among the nation's leading centers for specialties including mesothelioma treatment. A real academic-medicine and clinical-research career path distinct from the pharmaceutical manufacturing anchored nearby in Largo — the research and the production of what that research eventually leads to sit in two different Tampa Bay cities."
      }
    ]
  },
  "33773": {
    zip: "33773",
    neighborhood: "Largo",
    county: "Pinellas",
    clusters: [
      {
        name: "Pharmaceutical Manufacturing (CDMO)",
        naics: 32,
        distance: "Local",
        anchor_employers: ["Formulated Solutions (global headquarters)"],
        student_connection: "Formulated Solutions has operated as a contract development and manufacturing organization since 1999 — 1,000 employees, a 455,000 sq ft cGMP campus. It manufactures products for other companies' brands rather than developing its own drugs, a genuinely different business model than the discovery-driven biopharma majority of this database: real, well-paid manufacturing careers exist independent of who invents the product."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_TAMPABAY = GEO_INDUSTRY_DB_TAMPABAY;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_TAMPABAY };
