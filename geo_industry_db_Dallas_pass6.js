/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 6: Dallas-Fort Worth Metro — 16 ZIP codes
 * Version: 1.4 — added Neiman Marcus (Downtown Dallas flagship/historic HQ) 2026-07-10
 */

const GEO_INDUSTRY_DB_DALLAS = {

  "75205": {
    zip: "75205",
    neighborhood: "Highland Park",
    county: "Dallas",
    clusters: [
      {
        name: "Retail & Real Estate History",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Highland Park Village"],
        student_connection: "Highland Park Village, built in 1931, is recognized as the first planned shopping center in the United States — a genuine piece of American retail and urban-planning history sitting inside an otherwise residential neighborhood."
      },
      {
        name: "Energy",
        naics: 21,
        distance: "3 miles — Downtown Dallas",
        anchor_employers: ["Energy Transfer"],
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
        name: "Higher Education & Business",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Southern Methodist University", "SMU Cox School of Business"],
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
        name: "Corporate Headquarters & Law",
        naics: 54,
        distance: "Local",
        anchor_employers: ["AT&T (HQ)", "Haynes and Boone LLP (HQ)"],
        student_connection: "AT&T's global headquarters anchors Downtown Dallas, alongside Haynes and Boone — one of Texas's largest law firms, headquartered right there — making Downtown a genuine corporate law career pathway, not just a place law firms have a satellite office."
      },
      {
        name: "Luxury Retail & Merchandising",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Neiman Marcus (flagship store and historic HQ)"],
        student_connection: "Neiman Marcus was founded in Dallas in 1907, and its flagship store and historic corporate headquarters at 1618 Main Street are still downtown — luxury retail merchandising and buying careers have a genuine, century-old home here, not a New York or LA one."
      },
      {
        name: "Utility & Energy Infrastructure",
        naics: 22,
        distance: "Local",
        anchor_employers: ["Oncor Electric Delivery (HQ)"],
        student_connection: "Oncor — Texas's largest electric transmission and distribution utility, serving over 10 million people — is headquartered in Downtown Dallas. Grid engineering and utility operations are stable, essential careers that rarely get discussed alongside Downtown's finance and law firms, but are genuinely local here."
      },
      {
        name: "Civil & Infrastructure Engineering",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Jacobs Engineering Group (corporate HQ)"],
        student_connection: "Jacobs Engineering Group — one of the largest infrastructure and civil engineering firms in the world, responsible for major transit, water, and public-works projects nationally — relocated its global headquarters to Downtown Dallas. Civil engineering has a genuine, direct pathway here distinct from the finance and energy corridors that dominate the rest of Downtown."
      }
    ]
  },

  "75230": {
    zip: "75230",
    neighborhood: "Preston Hollow",
    county: "Dallas",
    clusters: [
      {
        name: "Real Estate Investment",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Crow Holdings"],
        student_connection: "Crow Holdings — the Trammell Crow family's real estate investment firm, one of the largest privately held real estate companies in the country — reflects Preston Hollow's genuine, long-standing concentration of real estate wealth and dealmaking."
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
        anchor_employers: ["Capital One (Plano campus)", "JPMorgan Chase (major Plano campus)"],
        student_connection: "Plano's dense corporate campuses give it a genuine finance-sector identity distinct from Downtown Dallas — JPMorgan Chase built one of its largest U.S. campuses here as part of a major 2010s relocation wave."
      },
      {
        name: "Retail & Consumer Corporate HQ",
        naics: 44,
        distance: "Local",
        anchor_employers: ["JCPenney (HQ)", "Rent-A-Center / Upbound Group (HQ)"],
        student_connection: "JCPenney's national headquarters and Rent-A-Center's (now Upbound Group) headquarters both sit in Plano — genuine retail corporate strategy careers, not just retail store jobs."
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
        anchor_employers: ["Sabre Corporation (HQ)"],
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
        name: "Sports Business Support & Events",
        naics: 71,
        distance: "Local",
        anchor_employers: ["The Ford Center at The Star events operations"],
        student_connection: "Frisco's rapid growth has pulled corporate and sports-business relocations north from Dallas proper, giving it a genuine identity beyond a bedroom suburb."
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
        anchor_employers: ["American Airlines (Fort Worth HQ, nearby)"],
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
        name: "Data & Credit Analytics",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Experian (North American HQ)"],
        student_connection: "Experian relocated its North American headquarters to Allen, a major economic development win — data analytics and credit-technology careers are a genuine local pathway, not a Plano or Dallas commute."
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
  },

  "75001": {
    zip: "75001",
    neighborhood: "Addison",
    county: "Dallas",
    clusters: [
      {
        name: "Consumer Products & Direct Sales",
        naics: 32,
        distance: "Local",
        anchor_employers: ["Mary Kay Inc. (HQ)"],
        student_connection: "Mary Kay's global headquarters sits in Addison — a genuine consumer-products and direct-sales corporate identity for a small suburb best known otherwise for its restaurant density, distinct from the finance and energy corridors that dominate the rest of North Dallas."
      }
    ]
  },

  "76155": {
    zip: "76155",
    neighborhood: "Fort Worth (DFW Airport South)",
    county: "Tarrant",
    clusters: [
      {
        name: "Aviation & Transportation",
        naics: 48,
        distance: "Local",
        anchor_employers: ["American Airlines (World HQ)"],
        student_connection: "American Airlines' global headquarters sits directly at DFW Airport — one of the largest airlines in the world, and one of the most direct airline-management career pathways in the country, not a satellite office of a company based elsewhere."
      },
      {
        name: "Community Financial Services",
        naics: 52,
        distance: "Local",
        anchor_employers: ["American Airlines Federal Credit Union (HQ)"],
        student_connection: "American Airlines Federal Credit Union, headquartered in the DFW Airport area and built to serve the tens of thousands of employees the airline supports locally, is a genuine, stable community-banking career pathway distinct from the corporate finance jobs inside AA itself."
      }
    ]
  },

  "76131": {
    zip: "76131",
    neighborhood: "Fort Worth (North / Alliance)",
    county: "Tarrant",
    clusters: [
      {
        name: "Freight Rail & Logistics",
        naics: 48,
        distance: "Local",
        anchor_employers: ["BNSF Railway (HQ)"],
        student_connection: "BNSF Railway — one of the largest freight rail networks in North America — is headquartered in north Fort Worth, giving the metro a genuine rail-logistics career pathway most students would associate with trucking or air cargo instead."
      }
    ]
  },

  "75235": {
    zip: "75235",
    neighborhood: "Dallas (Love Field)",
    county: "Dallas",
    clusters: [
      {
        name: "Aviation & Transportation",
        naics: 48,
        distance: "Local",
        anchor_employers: ["Southwest Airlines (HQ)"],
        student_connection: "Southwest Airlines' headquarters sits at Dallas Love Field — a second, genuinely distinct major-airline career pathway in the metro alongside American Airlines at DFW, each with its own corporate culture and hiring pipeline."
      }
    ]
  },

  "75243": {
    zip: "75243",
    neighborhood: "North Dallas (Telecom Corridor)",
    county: "Dallas",
    clusters: [
      {
        name: "Semiconductor Manufacturing & Engineering",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Texas Instruments (HQ)"],
        student_connection: "Texas Instruments' global headquarters and primary semiconductor manufacturing operations sit in North Dallas — a genuine hardware-engineering career pathway in a metro most students associate with finance and energy, not chip design."
      }
    ]
  },

  "75039": {
    zip: "75039",
    neighborhood: "Irving (Las Colinas)",
    county: "Dallas",
    clusters: [
      {
        name: "Technology & Cloud Services",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Microsoft (Las Colinas campus)"],
        student_connection: "Microsoft operates a major regional campus in Las Colinas — real, substantial tech-sector employment in Irving rather than a satellite office, giving North Texas students a genuine big-tech career pathway without leaving the metro."
      }
    ]
  }

};

function getDallasGeoIntelligence(zip) {
  if (!zip || zip.length < 5) return null;
  if (GEO_INDUSTRY_DB_DALLAS[zip]) return GEO_INDUSTRY_DB_DALLAS[zip];
  const prefix3 = zip.slice(0, 3);
  const match3 = Object.values(GEO_INDUSTRY_DB_DALLAS).find(e => e.zip.startsWith(prefix3));
  if (match3) return match3;
  const prefix2 = zip.slice(0, 2);
  const match2 = Object.values(GEO_INDUSTRY_DB_DALLAS).find(e => e.zip.startsWith(prefix2));
  if (match2) return match2;
  return null;
}

if (typeof module !== 'undefined') module.exports = { GEO_INDUSTRY_DB_DALLAS, getDallasGeoIntelligence };
