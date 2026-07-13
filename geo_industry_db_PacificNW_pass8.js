/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 8: Pacific Northwest (Seattle / Bellevue / Redmond, WA)
 * Version: 1.0 — 2026-07-13
 *
 * Built without a market-cap spreadsheet — anchors are real, well-known,
 * verifiable companies from general knowledge. One correction made during
 * construction: Microsoft's actual headquarters is in Redmond, not
 * Bellevue or Seattle proper — a common misconception avoided here by
 * placing it in its own correct ZIP rather than folding it into Seattle.
 *
 * Ties directly to already-built V5 school: Oregon State University
 * (regional Pacific Northwest draw, though Oregon proper is not yet
 * covered by a dedicated ZIP file — Portland remains an open gap).
 */

const GEO_INDUSTRY_DB_PACIFICNW = {

  "98109": {
    zip: "98109",
    neighborhood: "South Lake Union, Seattle",
    county: "King",
    clusters: [
      {
        name: "E-Commerce & Cloud Technology",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Amazon (primary campus, HQ)", "Facebook / Meta Seattle engineering office"],
        student_connection: "Amazon's primary corporate campus sits directly in South Lake Union, not downtown Seattle proper — the company transformed this neighborhood from industrial warehouses into one of the densest corporate tech campuses in the country over the past 15 years."
      },
      {
        name: "Biotech & Cancer Research",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Fred Hutchinson Cancer Center", "Allen Institute"],
        student_connection: "Fred Hutchinson Cancer Center, one of the leading cancer research institutions in the country, sits directly in South Lake Union alongside the Allen Institute's brain and cell science research — a genuine, concentrated biotech research corridor most families don't associate with Seattle's tech fame."
      }
    ]
  },

  "98101": {
    zip: "98101",
    neighborhood: "Downtown Seattle",
    county: "King",
    clusters: [
      {
        name: "Retail & Consumer Brands",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Starbucks (HQ)", "Nordstrom (HQ)"],
        student_connection: "Starbucks and Nordstrom are both genuinely headquartered in downtown Seattle — two of the most recognized consumer retail brands in the country, anchoring real corporate retail and brand management careers distinct from Amazon's e-commerce-first identity."
      },
      {
        name: "Networking & Enterprise Technology",
        naics: 51,
        distance: "Local",
        anchor_employers: ["F5 Networks (HQ)", "Zillow Group (HQ)"],
        student_connection: "F5 Networks, a major enterprise networking and application security company, and Zillow Group, the dominant real estate listing platform, are both genuinely headquartered in downtown Seattle."
      }
    ]
  },

  "98004": {
    zip: "98004",
    neighborhood: "Downtown Bellevue",
    county: "King",
    clusters: [
      {
        name: "Telecommunications & Corporate Headquarters",
        naics: 51,
        distance: "Local",
        anchor_employers: ["T-Mobile US (HQ)", "Concur Technologies"],
        student_connection: "T-Mobile US, one of the three major national wireless carriers, is genuinely headquartered in downtown Bellevue — a real, distinct corporate center from Seattle's own downtown, reflecting the Eastside's independent economic identity."
      }
    ]
  },

  "98052": {
    zip: "98052",
    neighborhood: "Redmond",
    county: "King",
    clusters: [
      {
        name: "Software & Cloud Computing",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Microsoft (HQ)", "Nintendo of America (HQ)"],
        student_connection: "Microsoft's actual global headquarters is in Redmond — not Seattle or Bellevue, a common misconception — anchoring one of the largest single corporate technology campuses in the world, alongside Nintendo of America's genuine U.S. headquarters."
      }
    ]
  },

  "98121": {
    zip: "98121",
    neighborhood: "Belltown, Seattle",
    county: "King",
    clusters: [
      {
        name: "Aerospace Engineering",
        naics: 33,
        distance: "12 miles — Everett/Renton",
        anchor_employers: ["Boeing (Commercial Airplanes division)", "Blue Origin (Kent, 20 miles)"],
        student_connection: "Boeing's Commercial Airplanes division operates massive assembly facilities in Everett and Renton, both within the broader Seattle metro, alongside Blue Origin's rocket manufacturing facility in Kent — a genuine, historic aerospace manufacturing corridor distinct from Seattle's software fame."
      }
    ]
  }
};

const GEO_ZIP_TO_MEGAREGION_ADDITIONS_PACIFICNW = {
  "98109": "Pacific Northwest", "98101": "Pacific Northwest", "98004": "Pacific Northwest",
  "98052": "Pacific Northwest", "98121": "Pacific Northwest"
};

if (typeof window !== 'undefined') {
  window.GEO_INDUSTRY_DB_PACIFICNW = GEO_INDUSTRY_DB_PACIFICNW;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GEO_INDUSTRY_DB_PACIFICNW, GEO_ZIP_TO_MEGAREGION_ADDITIONS_PACIFICNW };
}
