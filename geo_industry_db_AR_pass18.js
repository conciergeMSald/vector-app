/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_AR (pass 18)
 * Built 2026-07-18, second of the Southeast-completion batch.
 *
 * ZIPs match geo_zip_to_megaregion.js. All 3 companies genuinely cluster
 * within a few miles of each other in Northwest Arkansas (Bentonville,
 * Springdale, Lowell) -- kept under one subgroup, unlike Kentucky's three
 * genuinely distant cities, because the geography here is actually that
 * tight.
 */

const GEO_INDUSTRY_DB_AR = {
  "72712": {
    zip: "72712",
    neighborhood: "Bentonville",
    county: "Benton",
    clusters: [
      {
        name: "Retail Corporate Operations",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Walmart (global headquarters)"],
        student_connection: "Walmart's actual corporate headquarters — the largest company by revenue on Earth, and described by its home state's own economic materials as 'the world's largest private employer.' Careers here span merchandising, supply chain technology, corporate strategy, and e-commerce at a scale no other single company in this database matches."
      }
    ]
  },
  "72762": {
    zip: "72762",
    neighborhood: "Springdale",
    county: "Washington",
    clusters: [
      {
        name: "Food Production & Agribusiness",
        naics: 11,
        distance: "Local",
        anchor_employers: ["Tyson Foods (global headquarters)"],
        student_connection: "Tyson Foods employs roughly 139,000 people worldwide — one of the largest food production companies on Earth, headquartered a few miles from Walmart's own global headquarters. Real careers span food science, agribusiness supply chain, and large-scale processing operations, genuinely distinct from Florida's Everglades agriculture anchored elsewhere in this database."
      }
    ]
  },
  "72745": {
    zip: "72745",
    neighborhood: "Lowell",
    county: "Benton",
    clusters: [
      {
        name: "Transportation & Logistics",
        naics: 48,
        distance: "Local",
        anchor_employers: ["J.B. Hunt Transport Services (headquarters)"],
        student_connection: "J.B. Hunt is a major national transportation and logistics company headquartered in the same small Northwest Arkansas cluster as Walmart and Tyson Foods — the three companies have even co-hosted real joint initiatives (a 2023 trucking-safety summit with Truckers Against Trafficking). A genuine, tight corporate ecosystem where retail, food production, and logistics careers all sit within a few miles of each other."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_AR = GEO_INDUSTRY_DB_AR;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_AR };
