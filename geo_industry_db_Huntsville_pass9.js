/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_HUNTSVILLE (pass 9)
 * Built 2026-07-18, closing the "missing piece" gap identified this session:
 * REGIONAL_INTELLIGENCE.js and anchor_employers_db.js had full Alabama
 * coverage, but Possible Vectors (resolveMajorRegionalFit) and the report's
 * general local-area section (resolveZIP) both depend on this separate,
 * ZIP-level GEO_INDUSTRY_DB_* file format — which did not exist for
 * Huntsville at all until now.
 *
 * ZIPs match the coverage already established in geo_zip_to_megaregion.js
 * (Piedmont Atlantic / Huntsville subgroup, Madison County).
 *
 * PRECISION NOTE: Lilly's actual site sits at the NE corner of I-565 and
 * Greenbrier Parkway, described by the City of Huntsville as
 * "Huntsville-Limestone" — near but not cleanly inside any single one of
 * the 6 ZIPs already established for this metro. Assigned to 35806 (the
 * westmost of the established ZIPs) as the closest reasonable match, not a
 * confirmed exact-ZIP placement. Flagged honestly rather than asserted as
 * precise.
 */

const GEO_INDUSTRY_DB_HUNTSVILLE = {
  "35801": {
    zip: "35801",
    neighborhood: "Cummings Research Park (central)",
    county: "Madison",
    clusters: [
      {
        name: "Biotech & Genomics Research",
        naics: 62, // matches the UF Scripps precedent (also naics:62), not 54 -- avoids the known NAICS-54 breadth issue already flagged elsewhere in this codebase
        distance: "Local",
        anchor_employers: ["HudsonAlpha Institute for Biotechnology"],
        student_connection: "HudsonAlpha's own address (601 Genome Way) sits inside Cummings Research Park, the second-largest research park in the country. A genomics research institute, not a manufacturing site — the discovery-science counterpart to Lilly's manufacturing plant across town, the same 'brains and factory, different buildings' pattern found across this database."
      },
      {
        name: "Aerospace & Defense Systems Engineering",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Leidos", "400+ aerospace and defense companies (Cummings Research Park)"],
        student_connection: "Cummings Research Park hosts a real, dense cluster of aerospace/defense contractors and technical service firms. Huntsville was ranked No. 5 among 387 U.S. metro areas for aerospace and defense strength (Huntsville Business Journal, July 2026)."
      }
    ]
  },
  "35802": {
    zip: "35802",
    neighborhood: "South Huntsville",
    county: "Madison",
    clusters: [
      {
        name: "Aerospace & Defense (NASA Marshall / Redstone Arsenal corridor)",
        naics: 33,
        distance: "Local",
        anchor_employers: ["NASA Marshall Space Flight Center", "Northrop Grumman", "Redstone Arsenal"],
        student_connection: "NASA Marshall Space Flight Center, located at Redstone Arsenal, is one of NASA's largest field centers with 6,000+ employees — 'the U.S. government's civilian rocketry and spacecraft' center. Northrop Grumman's Huntsville presence works on U.S. Air Force programs, and Redstone Arsenal was selected for major program work in 2021."
      }
    ]
  },
  "35803": {
    zip: "35803",
    neighborhood: "Southeast Huntsville / Redstone Arsenal approach",
    county: "Madison",
    clusters: [
      {
        name: "Aerospace & Defense — Emerging Space Industry",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Blue Origin"],
        student_connection: "Blue Origin announced 100 new jobs at a Huntsville facility (May 2026), explicitly citing the city's 'high-tech aerospace manufacturing workforce and ecosystem' as the reason — real, current evidence that Huntsville's aerospace identity is still actively growing, not just legacy NASA/defense work."
      }
    ]
  },
  "35805": {
    zip: "35805",
    neighborhood: "West Huntsville",
    county: "Madison",
    clusters: [
      {
        name: "Aerospace & Defense Contracting",
        naics: 33,
        distance: "Local",
        anchor_employers: ["NASA Marshall Space Flight Center (prime contractor network)", "Northrop Grumman"],
        student_connection: "Huntsville's aerospace/defense sector spans 400+ companies and 30,000+ employees regionally — the NASA Marshall prime contractor list alone runs many pages, meaning this is a genuinely deep employer base, not a handful of household names."
      }
    ]
  },
  "35806": {
    zip: "35806",
    neighborhood: "Cummings Research Park West / near I-565-Greenbrier corridor",
    county: "Madison",
    clusters: [
      {
        name: "Pharmaceutical Manufacturing (API)",
        naics: 32,
        distance: "Local",
        anchor_employers: ["Lilly"],
        student_connection: "Lilly's $6 billion active pharmaceutical ingredient manufacturing plant — the largest single investment in Alabama's history — sits on a 260-acre site at the NE corner of I-565 and Greenbrier Parkway (~450 jobs: engineers, scientists, operations). Real workforce partnerships with University of Alabama in Huntsville (4-year) and Calhoun Community College (2-year, technician-entry, no 4-year degree required to start)."
      },
      {
        name: "Biotech & Genomics Research",
        naics: 62, // consistent with the UF Scripps / HudsonAlpha precedent above
        distance: "Local",
        anchor_employers: ["Cummings Research Park West tenants"],
        student_connection: "The western portion of Cummings Research Park, adjacent to the same technical-workforce ecosystem HudsonAlpha and Lilly both draw from."
      }
    ]
  },
  "35758": {
    zip: "35758",
    neighborhood: "Madison, AL",
    county: "Madison",
    clusters: [
      {
        name: "Aerospace, Defense & Advanced Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Redstone Arsenal-adjacent contractors"],
        student_connection: "The city of Madison sits directly adjacent to Redstone Arsenal and shares the same aerospace/defense labor market as central Huntsville — a real bedroom-community-to-employer relationship, not a separate economy."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_HUNTSVILLE = GEO_INDUSTRY_DB_HUNTSVILLE;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_HUNTSVILLE };
