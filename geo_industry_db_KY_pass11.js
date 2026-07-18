/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_KY (pass 11)
 * Built 2026-07-18, Chunk C of the missing-piece buildout. Originally scoped
 * as Lexington-only; renamed and expanded same-day to cover the whole state
 * after adding Louisville — file name changed from
 * geo_industry_db_Lexington_pass11.js to geo_industry_db_KY_pass11.js to
 * reflect that scope honestly.
 *
 * ZIPs match geo_zip_to_megaregion.js (Great Lakes megaregion — per
 * RPA/America 2050, Lexington is explicitly an "area of influence" of Great
 * Lakes, not core Piedmont Atlantic. Louisville's classification is
 * EXTENDED from that same finding, not independently re-verified via RPA
 * source specifically for Louisville — flagged honestly, not asserted with
 * the same confidence as the Lexington finding.)
 */

const GEO_INDUSTRY_DB_KY = {
  "40502": {
    zip: "40502",
    neighborhood: "Chevy Chase / East Lexington",
    county: "Fayette",
    clusters: [
      {
        name: "Equine Industry",
        naics: 11,
        distance: "Local",
        anchor_employers: ["Thoroughbred breeding and training farms"],
        student_connection: "The Bluegrass region hosts roughly 450 horse farms — genuinely one of the densest concentrations of the Thoroughbred industry anywhere in the world, spanning breeding, training, veterinary care, and farm management as real, distinct career paths, not just a tourism backdrop."
      }
    ]
  },
  "40503": {
    zip: "40503",
    neighborhood: "South Lexington",
    county: "Fayette",
    clusters: [
      {
        name: "Equine Industry & Sales",
        naics: 11,
        distance: "Local",
        anchor_employers: ["Keeneland Association"],
        student_connection: "Keeneland is a world-class Thoroughbred racecourse and auction house — Lexington was selected to host the 2026 Breeders' Cup at Keeneland, a real, current marker of the venue's international standing, not just local significance. Careers here span racing operations, bloodstock sales, agronomy, and hospitality at real scale."
      }
    ]
  },
  "40504": {
    zip: "40504",
    neighborhood: "West Lexington / near Keeneland",
    county: "Fayette",
    clusters: [
      {
        name: "Bourbon & Spirits Production",
        naics: 31,
        distance: "Local",
        anchor_employers: ["Bourbon distilleries within the Lexington/Bluegrass corridor"],
        student_connection: "Seven bourbon distilleries operate within 25 miles of Lexington — a real, dense production cluster spanning distilling science, quality control, hospitality/tourism operations, and brand management, distinct from the equine and pharmaceutical manufacturing industries also anchored in this same metro."
      }
    ]
  },
  "40505": {
    zip: "40505",
    neighborhood: "North Lexington",
    county: "Fayette",
    clusters: [
      {
        name: "Bourbon & Spirits Production",
        naics: 31,
        distance: "Local",
        anchor_employers: ["Fresh Bourbon Distillery (downtown Lexington, 377 E Main St)"],
        student_connection: "Fresh Bourbon Distillery operates directly in downtown Lexington proper — bourbon production is not confined to rural Bluegrass farmland, it has a genuine urban presence inside the city itself."
      }
    ]
  },
  "40511": {
    zip: "40511",
    neighborhood: "Coldstream Research Campus area",
    county: "Fayette",
    clusters: [
      {
        name: "Pharmaceutical Manufacturing & CDMO",
        naics: 32,
        distance: "Local",
        anchor_employers: ["Piramal Pharma Solutions"],
        student_connection: "Piramal's injectable drug manufacturing facility operates literally inside the University of Kentucky's own Coldstream Research Campus — the tightest university-industry proximity found anywhere in this database. A $80-90M expansion (2025) is doubling capacity by 2027."
      }
    ]
  },
  "40202": {
    zip: "40202",
    neighborhood: "Downtown Louisville",
    county: "Jefferson",
    clusters: [
      {
        name: "Health Insurance (Corporate HQ)",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Humana (global headquarters)"],
        student_connection: "Humana's actual corporate headquarters — Fortune 39, roughly $118 billion market cap, 95,500 employees, one of the largest health insurers in the country. A genuinely different door into 'healthcare' than any other Kentucky entry in this database: insurance/actuarial/corporate strategy work, not clinical care or drug manufacturing."
      }
    ]
  },
  "40213": {
    zip: "40213",
    neighborhood: "Louisville airport area (approximate — UPS Worldport's exact ZIP not independently confirmed)",
    county: "Jefferson",
    clusters: [
      {
        name: "Global Logistics & Supply Chain",
        naics: 48,
        distance: "Local",
        anchor_employers: ["UPS Worldport"],
        student_connection: "UPS Worldport is a 5.2 million square foot facility — one of the largest air freight hubs in the world, and UPS's single largest air hub globally. A real, current expansion was announced in June 2026 ('more than double the size'), on top of a $155M+/315-job investment announced in 2022. Careers span logistics engineering, operations management, and supply-chain technology at genuinely massive scale."
      }
    ]
  },
  "41011": {
    zip: "41011",
    neighborhood: "Covington (Northern Kentucky, across the Ohio River from Cincinnati)",
    county: "Kenton",
    clusters: [
      {
        name: "Global Air Cargo & Logistics",
        naics: 48,
        distance: "Local",
        anchor_employers: ["Amazon Air (primary U.S. air hub, $1.5B investment)", "DHL (Global Super Hub for the Americas)", "FedEx", "Atlas Air", "Kalitta Air"],
        student_connection: "CVG Airport, physically located in Covington, is the sixth-largest cargo airport on the continent — home to Amazon Air's primary U.S. air hub (launched August 2021, $1.5 billion investment, confirmed via Amazon's own press materials) and DHL's Global Super Hub for the Americas, which handles roughly 90% of DHL's regional shipments (per Kentucky's own economic development materials). A genuinely different logistics story than UPS Worldport in Louisville — this is a multi-carrier cargo hub (Amazon, DHL, FedEx, Atlas Air, Kalitta Air all present), not a single company's dedicated facility. Northern Kentucky's economy here is functionally part of the Cincinnati metro, a real example of a state-line region that behaves as one labor market, not two."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_KY = GEO_INDUSTRY_DB_KY;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_KY };
