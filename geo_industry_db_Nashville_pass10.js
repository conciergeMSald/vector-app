/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_NASHVILLE (pass 10)
 * Built 2026-07-18, Chunk B of the missing-piece buildout. Includes Franklin
 * and Brentwood, TN specifically (user-directed addition) — both turned out
 * to carry real, substantial healthcare-company headquarters, not just
 * affluent suburbs.
 *
 * ZIPs match geo_zip_to_megaregion.js (Piedmont Atlantic / Nashville
 * subgroup) — 37067 (Franklin) added in this same pass, previously missing.
 */

const GEO_INDUSTRY_DB_NASHVILLE = {
  "37201": {
    zip: "37201",
    neighborhood: "Downtown Nashville",
    county: "Davidson",
    clusters: [
      {
        name: "Music, Entertainment & Media",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Music Row record labels", "Grand Ole Opry", "Ryman Auditorium"],
        student_connection: "Nashville's 'Music City' identity is a genuine, sustained industry — publishing, licensing, production, and label operations, not just performance. A real, distinct career economy running parallel to the city's healthcare-management identity."
      }
    ]
  },
  "37203": {
    zip: "37203",
    neighborhood: "Midtown / near Vanderbilt",
    county: "Davidson",
    clusters: [
      {
        name: "Hospital & Health System Management (Corporate HQ)",
        naics: 62,
        distance: "Local",
        anchor_employers: ["HCA Healthcare (global headquarters, One Park Plaza)"],
        student_connection: "HCA Healthcare's actual global headquarters — 309,000 employees, $76.4 billion revenue, one of the largest healthcare companies in the world by employee count. This is not a regional office; it is the corporate center of the whole company. Nashville's entire healthcare-industry reputation (cited elsewhere in this database as the 'why here' reasoning for Thermo Fisher and August Bioservices choosing the metro) traces directly back to HCA's presence."
      }
    ]
  },
  "37215": {
    zip: "37215",
    neighborhood: "Green Hills",
    county: "Davidson",
    clusters: [
      {
        name: "Healthcare Management & Professional Services",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Regional healthcare administration and consulting firms"],
        student_connection: "An affluent Nashville neighborhood whose professional-services base is shaped by the same hospital-management-industry gravity as downtown — a real example of how one dominant industry (healthcare administration) shapes an entire metro's white-collar labor market, not just its headquarters ZIP."
      }
    ]
  },
  "37027": {
    zip: "37027",
    neighborhood: "Brentwood",
    county: "Williamson",
    clusters: [
      {
        name: "Hospital & Health System Management",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Community Health Systems (SEC-registered address, 60 affiliated hospitals, 8,000+ beds)", "HCA Healthcare Intensivist Services (2000 Health Park Drive)"],
        student_connection: "Brentwood carries real weight of its own, not just proximity to Nashville: Community Health Systems' own SEC filings list this as their registered address (7100 Commerce Way), describing themselves as 'the largest non-urban provider of general acute care hospitals' in the country. HCA Healthcare separately runs its Intensivist Services division from Brentwood as well — two major hospital-management operations, not one."
      }
    ]
  },
  "37067": {
    zip: "37067",
    neighborhood: "Franklin",
    county: "Williamson",
    clusters: [
      {
        name: "Hospital & Health System Management (Corporate HQ)",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Community Health Systems (current headquarters, 4000 Meridian Blvd)"],
        student_connection: "Community Health Systems' own website and current corporate filings list Franklin (4000 Meridian Blvd) as its headquarters — 60 affiliated hospitals, more than 8,000 beds nationally. Franklin and neighboring Brentwood together mean the Nashville metro hosts corporate headquarters for two of the largest hospital-management companies in the country (HCA and CHS), not just one — a real, underappreciated concentration of healthcare-administration career paths distinct from clinical work."
      }
    ]
  },
  "37122": {
    zip: "37122",
    neighborhood: "Mount Juliet",
    county: "Wilson",
    clusters: [
      {
        name: "Bioprocessing & Sterile Injectable Manufacturing",
        naics: 32,
        distance: "Local",
        anchor_employers: ["Thermo Fisher Scientific", "August Bioservices"],
        student_connection: "Thermo Fisher's Wilson County single-use bioprocessing plant ($100M+, 1,400 jobs, ribbon-cut ~2023) and August Bioservices' sterile injectable CDMO expansion ($64.7M, 180 jobs) are both explicitly tied to Nashville's existing healthcare-industry reputation — the same HCA/CHS-driven identity anchoring the rest of this metro, now extended into actual pharmaceutical manufacturing rather than just hospital administration."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_NASHVILLE = GEO_INDUSTRY_DB_NASHVILLE;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_NASHVILLE };
