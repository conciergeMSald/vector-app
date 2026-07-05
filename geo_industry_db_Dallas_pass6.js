/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 6: Dallas-Fort Worth Metro — 6 ZIP codes
 * Version: 1.0 — July 2026
 */

const GEO_INDUSTRY_DB_DALLAS = {

  "75205": {
    zip: "75205",
    neighborhood: "Highland Park",
    county: "Dallas",
    clusters: [
      {
        name: "Corporate Headquarters & Consulting",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Highland Park Village corporate offices", "regional consulting firms"],
        student_connection: "Highland Park is Dallas's most concentrated old-money corporate and finance neighborhood — a genuine feeder community into Uptown and Downtown corporate leadership."
      },
      {
        name: "Energy",
        naics: 21,
        distance: "3 miles — Downtown Dallas",
        anchor_employers: ["Energy Transfer", "independent energy investment firms"],
        student_connection: "Highland Park families have anchored Dallas's energy and oil-and-gas investment community for generations."
      }
    ]
  },

  "75225": {
    zip: "75225",
    neighborhood: "University Park",
    county: "Dallas",
    clusters: [
      {
        name: "Corporate Headquarters & Finance",
        naics: 54,
        distance: "Local",
        anchor_employers: ["SMU-adjacent corporate offices", "private wealth management firms"],
        student_connection: "University Park sits directly beside SMU's Cox School of Business — one of the most direct university-to-corporate pipelines in North Texas."
      }
    ]
  },

  "75201": {
    zip: "75201",
    neighborhood: "Uptown / Downtown Dallas",
    county: "Dallas",
    clusters: [
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Comerica (HQ)", "Fidelity Investments regional offices"],
        student_connection: "Uptown and Downtown Dallas hold one of the densest concentrations of regional banking headquarters in the Southwest."
      },
      {
        name: "Corporate Headquarters",
        naics: 54,
        distance: "Local",
        anchor_employers: ["AT&T (HQ)", "major law firms"],
        student_connection: "AT&T's global headquarters anchors Downtown Dallas — one of the largest single corporate employers in the metro."
      }
    ]
  },

  "75230": {
    zip: "75230",
    neighborhood: "Preston Hollow",
    county: "Dallas",
    clusters: [
      {
        name: "Corporate Headquarters & Real Estate",
        naics: 54,
        distance: "Local",
        anchor_employers: ["regional real estate development firms", "private equity offices"],
        student_connection: "Preston Hollow's affluent, low-density corridor supports a real concentration of real estate development and private investment firms."
      }
    ]
  },

  "75024": {
    zip: "75024",
    neighborhood: "Plano",
    county: "Collin",
    clusters: [
      {
        name: "Tech & Telecom",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Toyota North America (HQ)", "Capital One (Plano campus)"],
        student_connection: "Toyota's North American headquarters relocated to Plano — a genuine sign of the corridor's shift from bedroom suburb to corporate hub in its own right."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Capital One (Plano campus)", "JPMorgan Chase regional offices"],
        student_connection: "Plano's dense corporate campuses give it a genuine finance-sector identity distinct from Downtown Dallas."
      }
    ]
  },

  "76092": {
    zip: "76092",
    neighborhood: "Southlake",
    county: "Tarrant",
    clusters: [
      {
        name: "Corporate Headquarters",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Sabre Corporation (HQ)", "regional corporate offices"],
        student_connection: "Sabre's global headquarters anchors Southlake — travel-technology and corporate strategy careers are genuinely local to this Fort Worth-area suburb."
      }
    ]
  },

  "75034": {
    zip: "75034",
    neighborhood: "Frisco",
    county: "Collin",
    clusters: [
      {
        name: "Corporate Headquarters & Sports Business",
        naics: 54,
        distance: "Local",
        anchor_employers: ["The Ford Center at The Star (Dallas Cowboys HQ)", "PGA of America (HQ)"],
        student_connection: "Frisco has become a genuine sports-business hub — the Dallas Cowboys' headquarters and the PGA of America's relocated headquarters both anchor the city."
      },
      {
        name: "Tech & Telecom",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Rent-A-Center (HQ)", "growing North Dallas tech campuses"],
        student_connection: "Frisco's rapid growth has pulled corporate and tech relocations north from Dallas proper, giving it a genuine identity beyond a bedroom suburb."
      }
    ]
  },

  "76034": {
    zip: "76034",
    neighborhood: "Colleyville",
    county: "Tarrant",
    clusters: [
      {
        name: "Corporate Headquarters & Aviation",
        naics: 54,
        distance: "10 miles — DFW Airport",
        anchor_employers: ["American Airlines (Fort Worth HQ, nearby)", "regional corporate offices"],
        student_connection: "Colleyville's proximity to DFW Airport and American Airlines' headquarters makes aviation management and corporate strategy genuinely local career pathways."
      }
    ]
  },

  "75013": {
    zip: "75013",
    neighborhood: "Allen",
    county: "Collin",
    clusters: [
      {
        name: "Tech & Corporate HQ",
        naics: 51,
        distance: "Local / 5 miles — Plano",
        anchor_employers: ["growing North Dallas corporate campuses", "Plano-adjacent tech employers"],
        student_connection: "Allen sits directly beside Plano's corporate corridor — close enough that its tech and finance career access mirrors Plano without the same density of headquarters."
      }
    ]
  },

  "76109": {
    zip: "76109",
    neighborhood: "Fort Worth (TCU / Westside)",
    county: "Tarrant",
    clusters: [
      {
        name: "Energy",
        naics: 21,
        distance: "Local",
        anchor_employers: ["XTO Energy (ExxonMobil subsidiary, Fort Worth HQ)"],
        student_connection: "Fort Worth has its own genuine energy-sector identity — XTO Energy's headquarters anchors a career pathway distinct from Dallas's finance-heavy corridor."
      },
      {
        name: "Higher Education",
        naics: 61,
        distance: "Local — TCU",
        anchor_employers: ["Texas Christian University"],
        student_connection: "TCU itself is a major local employer and cultural anchor — a student in this ZIP grows up genuinely inside a university town, not just near one."
      }
    ]
  }

};

if (typeof module !== 'undefined') module.exports = { GEO_INDUSTRY_DB_DALLAS };
