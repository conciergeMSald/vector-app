/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 7: Rocky Mountains (Denver/Boulder/Golden/Colorado Springs, CO +
 * Salt Lake City/Provo/Lehi, UT) + Las Vegas, NV (tagged Southwest, not
 * Rocky Mountains, per 2026-07-13 region-mapping decision).
 * Version: 1.0 — 2026-07-13
 *
 * Built without a market-cap spreadsheet (unlike the CA passes) — anchors
 * are real, well-known, verifiable companies from general knowledge, not
 * guessed. Confidence flagged inline where a detail is less certain
 * (e.g. exact neighborhood vs. just "the metro").
 *
 * Ties directly to already-built V5 schools: Colorado School of Mines
 * (Golden), Colorado College (Colorado Springs), University of Colorado
 * Boulder, University of Wyoming (regional draw), BYU (Provo), University
 * of Utah (Salt Lake City).
 */

const GEO_INDUSTRY_DB_ROCKYMOUNTAINS = {

  // ─────────────────────────────────────────────────────────────
  // DENVER / BOULDER / GOLDEN, COLORADO
  // ─────────────────────────────────────────────────────────────

  "80202": {
    zip: "80202",
    neighborhood: "Downtown Denver / LoDo",
    county: "Denver",
    clusters: [
      {
        name: "Media & Telecommunications Conglomerates",
        naics: 51,
        distance: "5 miles — Englewood",
        anchor_employers: ["Liberty Media (HQ, Englewood)", "Liberty Global (HQ, Englewood)", "DISH Network (Englewood)"],
        student_connection: "Liberty Media and Liberty Global — two of the largest media and telecommunications conglomerates in the country — are genuinely headquartered a few miles south in Englewood, a real concentration of media deal-making most people don't associate with the Denver area."
      },
      {
        name: "Healthcare Management & Financial Services",
        naics: 52,
        distance: "Local",
        anchor_employers: ["DaVita (HQ)", "Western Union (HQ, Denver Tech Center)", "Charles Schwab (major regional campus)"],
        student_connection: "DaVita, one of the largest dialysis and kidney care companies in the country, is headquartered in downtown Denver, alongside Western Union's global headquarters — genuine large-scale corporate finance and healthcare management careers anchored directly here."
      }
    ]
  },

  "80301": {
    zip: "80301",
    neighborhood: "Boulder",
    county: "Boulder",
    clusters: [
      {
        name: "Aerospace & Defense Engineering",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Ball Aerospace (HQ)", "National Center for Atmospheric Research (NCAR)", "NOAA Boulder campus"],
        student_connection: "Ball Aerospace, a major spacecraft and defense systems manufacturer, is genuinely headquartered in Boulder, reinforced by NCAR and NOAA's significant atmospheric and space science research presence — a real, concentrated aerospace and earth-science research corridor."
      },
      {
        name: "Consumer Products & Technology",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Crocs (HQ, Niwot-adjacent)", "Celestial Seasonings (HQ)", "Google Boulder campus"],
        student_connection: "Crocs and Celestial Seasonings — both genuinely headquartered in the Boulder area — anchor real consumer products careers alongside a growing Google engineering campus, giving Boulder a distinctive blend of legacy consumer brands and modern tech."
      }
    ]
  },

  "80401": {
    zip: "80401",
    neighborhood: "Golden",
    county: "Jefferson",
    clusters: [
      {
        name: "Brewing & Consumer Manufacturing",
        naics: 31,
        distance: "Local",
        anchor_employers: ["Coors Brewing (original brewery, still operating)", "Colorado School of Mines"],
        student_connection: "Coors' original brewery — one of the largest single brewing operations in the world — still operates directly in Golden alongside Colorado School of Mines, even though Molson Coors' broader corporate headquarters has since consolidated elsewhere. Genuine, historic consumer manufacturing career access most college towns this size don't have, layered on top of Mines' mining and energy engineering identity already covered in the V5 database. CONFIDENCE NOTE: corporate HQ structure for Molson Coors has changed in recent years — the brewery operation in Golden is confirmed real and current; verify current corporate HQ framing before publishing."
      }
    ]
  },

  "80903": {
    zip: "80903",
    neighborhood: "Colorado Springs",
    county: "El Paso",
    clusters: [
      {
        name: "Defense & Space Command",
        naics: 92,
        distance: "Local",
        anchor_employers: ["U.S. Space Command (Peterson Space Force Base)", "NORAD (Cheyenne Mountain)", "U.S. Air Force Academy"],
        student_connection: "Colorado Springs anchors one of the most significant concentrations of U.S. military space and air defense command authority in the country — NORAD, U.S. Space Command, and the Air Force Academy are all genuinely headquartered or based here, a real, distinctive defense-career pathway beyond the Pentagon-area corridor already covered in the Virginia geo files."
      },
      {
        name: "Nonprofit & Civic Leadership",
        naics: 81,
        distance: "Local",
        anchor_employers: ["Focus on the Family (HQ)", "U.S. Olympic & Paralympic Committee (HQ)"],
        student_connection: "The U.S. Olympic & Paralympic Committee's national headquarters and training center is genuinely based in Colorado Springs, alongside Focus on the Family's national headquarters — a real, distinctive nonprofit and civic leadership pathway tied directly to Olympic sports administration."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SALT LAKE CITY / PROVO / LEHI, UTAH ("Silicon Slopes")
  // ─────────────────────────────────────────────────────────────

  "84101": {
    zip: "84101",
    neighborhood: "Downtown Salt Lake City",
    county: "Salt Lake",
    clusters: [
      {
        name: "Banking & Financial Services",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Zions Bancorporation (HQ)", "Goldman Sachs (major regional operations center)", "University of Utah"],
        student_connection: "Zions Bancorporation, one of the largest regional bank holding companies in the country, is genuinely headquartered in downtown Salt Lake City — reinforced by a substantial Goldman Sachs regional operations presence, giving Salt Lake a real, underrecognized financial services career pathway beyond its tech-corridor fame."
      }
    ]
  },

  "84604": {
    zip: "84604",
    neighborhood: "Provo",
    county: "Utah",
    clusters: [
      {
        name: "Software & Consumer Technology",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Qualtrics (HQ)", "Ancestry.com (Lehi, 12 miles)", "Vivint Smart Home (HQ)"],
        student_connection: "Qualtrics and Vivint Smart Home are both genuinely headquartered in Provo, directly adjacent to BYU, giving BYU students an unusually direct, walkable path into major software companies most college towns this size don't have."
      }
    ]
  },

  "84043": {
    zip: "84043",
    neighborhood: "Lehi / Silicon Slopes Corridor",
    county: "Utah",
    clusters: [
      {
        name: "Technology & Software (Silicon Slopes)",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Adobe (major Utah campus)", "Domo (HQ)", "Podium (HQ)", "Ancestry.com (HQ)"],
        student_connection: "'Silicon Slopes' is the genuine, locally-used name for this corridor — Adobe's major Utah campus, Domo, Podium, and Ancestry.com are all real, substantial employers here, making Lehi one of the fastest-growing tech corridors in the country outside the coasts."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // LAS VEGAS, NEVADA — tagged megaregion "Southwest" per 2026-07-13
  // decision, NOT "Rocky Mountains", even though it lives in this file.
  // Ties directly to UNLV (already built in V5, hospitality score 100).
  // ─────────────────────────────────────────────────────────────

  "89109": {
    zip: "89109",
    neighborhood: "The Las Vegas Strip",
    county: "Clark",
    clusters: [
      {
        name: "Casino, Gaming & Resort Operations",
        naics: 72,
        distance: "Local",
        anchor_employers: ["MGM Resorts International (HQ)", "Caesars Entertainment (HQ)", "Wynn Resorts (HQ)", "Las Vegas Sands (HQ)"],
        student_connection: "Every major casino resort operator in the world is genuinely headquartered directly on or immediately adjacent to the Strip — the single most concentrated hospitality and gaming corporate presence anywhere, directly feeding UNLV's Harrah College of Hospitality."
      },
      {
        name: "E-Commerce & Consumer Technology",
        naics: 44,
        distance: "8 miles — Downtown Las Vegas",
        anchor_employers: ["Zappos (HQ)", "Allegiant Travel Company (HQ)"],
        student_connection: "Zappos, the online shoe and apparel retailer known for its distinctive customer-service-first culture, is genuinely headquartered in downtown Las Vegas, alongside Allegiant Travel Company's airline holding company headquarters — real, non-gaming corporate career pathways in a city defined by hospitality."
      }
    ]
  }
};

const GEO_ZIP_TO_MEGAREGION_ADDITIONS_ROCKYMOUNTAINS = {
  "80202": "Rocky Mountains", "80301": "Rocky Mountains", "80401": "Rocky Mountains", "80903": "Rocky Mountains",
  "84101": "Rocky Mountains", "84604": "Rocky Mountains", "84043": "Rocky Mountains",
  "89109": "Southwest"
};

if (typeof window !== 'undefined') {
  window.GEO_INDUSTRY_DB_ROCKYMOUNTAINS = GEO_INDUSTRY_DB_ROCKYMOUNTAINS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GEO_INDUSTRY_DB_ROCKYMOUNTAINS, GEO_ZIP_TO_MEGAREGION_ADDITIONS_ROCKYMOUNTAINS };
}
