/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_ORLANDO (pass 13)
 * Built 2026-07-18, Chunk FL-B of the Florida mega region buildout —
 * Orlando (entertainment) and Space Coast (aerospace), two genuinely
 * different economies grouped in one pass file for now given their modest
 * individual ZIP counts, subgroup-differentiated so they display distinctly.
 *
 * ZIPs match geo_zip_to_megaregion.js (Florida megaregion — Orlando and
 * Space Coast subgroups).
 */

const GEO_INDUSTRY_DB_ORLANDO = {
  "32830": {
    zip: "32830",
    neighborhood: "Lake Buena Vista",
    county: "Orange",
    clusters: [
      {
        name: "Entertainment & Themed Experience Design",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Walt Disney World Resort"],
        student_connection: "Walt Disney World's primary ZIP — one of the largest single-site employers in the entire state of Florida. Careers here span far beyond performance: themed-experience design (Imagineering), hospitality operations, entertainment technology, and franchise/IP management at genuinely industrial scale."
      }
    ]
  },
  "32819": {
    zip: "32819",
    neighborhood: "Orlando (Universal Studios area)",
    county: "Orange",
    clusters: [
      {
        name: "Entertainment & Themed Experience Design",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Universal Orlando Resort"],
        student_connection: "Universal Orlando Resort employs 10,000-13,000+ people — real competition with Disney inside the same metro, meaning a student interested in themed entertainment has two genuinely different major employers, corporate cultures, and franchise portfolios to consider without leaving Orlando."
      }
    ]
  },
  "32920": {
    zip: "32920",
    neighborhood: "Cape Canaveral",
    county: "Brevard",
    clusters: [
      {
        name: "Aerospace & Space Launch",
        naics: 33,
        distance: "Local",
        anchor_employers: ["SpaceX (Cape Canaveral facility)"],
        student_connection: "SpaceX operates real launch facilities directly from Cape Canaveral (Space Launch Complex 40) — the company employs over 12,000 people company-wide, with genuine engineering, launch operations, and manufacturing roles based on Florida's Space Coast, not just California."
      }
    ]
  },
  "32899": {
    zip: "32899",
    neighborhood: "Kennedy Space Center",
    county: "Brevard",
    clusters: [
      {
        name: "Aerospace & Space Launch",
        naics: 33,
        distance: "Local",
        anchor_employers: ["NASA Kennedy Space Center", "SpaceX (Launch Complex 39A)"],
        student_connection: "Kennedy Space Center is where SpaceX's Falcon and Starship programs actually launch from (LC-39A) — a real, working partnership between NASA infrastructure and private aerospace companies, not two separate operations. Florida's Space Coast is a genuine second national aerospace hub alongside Huntsville, Alabama, already covered elsewhere in this database."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_ORLANDO = GEO_INDUSTRY_DB_ORLANDO;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_ORLANDO };
