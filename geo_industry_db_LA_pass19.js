/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_LA_STATE (pass 19)
 * Built 2026-07-18, third of the Southeast-completion batch.
 * NOTE: named LA_pass19 for the state of Louisiana -- distinct from the
 * existing geo_industry_db_LA_pass1.js, which covers Los Angeles,
 * California. Different states, same two-letter abbreviation coincidence;
 * flagged here to avoid future confusion, file/variable names kept
 * deliberately distinct (GEO_INDUSTRY_DB_LA_STATE vs GEO_INDUSTRY_DB_LA).
 *
 * ZIPs match geo_zip_to_megaregion.js.
 */

const GEO_INDUSTRY_DB_LA_STATE = {
  "70805": {
    zip: "70805",
    neighborhood: "Baton Rouge",
    county: "East Baton Rouge",
    clusters: [
      {
        name: "Petrochemical & Energy Refining",
        naics: 32,
        distance: "Local",
        anchor_employers: ["ExxonMobil Baton Rouge Refinery"],
        student_connection: "ExxonMobil's Baton Rouge Refinery is the sixth-largest oil refinery in the United States and the seventeenth-largest in the world — a genuinely massive 2,100-acre industrial complex. Real careers span chemical engineering, process safety, refinery operations, and environmental compliance at a scale most students never encounter directly."
      }
    ]
  },
  "70130": {
    zip: "70130",
    neighborhood: "New Orleans",
    county: "Orleans",
    clusters: [
      {
        name: "Port Logistics & Maritime Trade",
        naics: 48,
        distance: "Local",
        anchor_employers: ["Port of New Orleans (Port NOLA)"],
        student_connection: "Port NOLA describes itself as 'a diverse cargo and in-demand cruise port' — real careers in cargo logistics, terminal operations, and maritime trade, plus a smaller-scale cruise departure operation distinct from Miami's concentration of actual cruise-line headquarters elsewhere in this database."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_LA_STATE = GEO_INDUSTRY_DB_LA_STATE;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_LA_STATE };
