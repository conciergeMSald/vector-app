/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 5: Atlanta Metro — 6 ZIP codes
 * Version: 1.0 — July 2026
 */

const GEO_INDUSTRY_DB_ATLANTA = {

  "30305": {
    zip: "30305",
    neighborhood: "Buckhead",
    county: "Fulton",
    clusters: [
      {
        name: "Corporate Headquarters & Consulting",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Cox Enterprises (HQ)", "regional consulting offices"],
        student_connection: "Buckhead is Atlanta's most concentrated corporate and financial-services neighborhood — Cox Enterprises anchors a genuine corporate identity distinct from Midtown's media-and-tech reputation."
      },
      {
        name: "Financial Services",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Truist (HQ)", "private wealth management firms"],
        student_connection: "Truist's headquarters and a dense concentration of private banking offices make Buckhead a genuine finance corridor, not just an affluent residential address."
      }
    ]
  },

  "30309": {
    zip: "30309",
    neighborhood: "Midtown",
    county: "Fulton",
    clusters: [
      {
        name: "Technology & Enterprise Software",
        naics: 51,
        distance: "Local",
        anchor_employers: ["NCR Voyix (HQ)", "Salesforce Atlanta offices"],
        student_connection: "NCR Voyix's headquarters anchors Midtown's growing tech identity — Atlanta's 'Tech Square' innovation district is minutes away."
      },
      {
        name: "Film, Media & Entertainment",
        naics: 71,
        distance: "Local / Regional",
        anchor_employers: ["Tyler Perry Studios", "Trilith Studios (30 miles south)"],
        student_connection: "Midtown sits at the center of Atlanta's film and media boom — one of the largest production hubs in North America runs through the metro."
      }
    ]
  },

  "30328": {
    zip: "30328",
    neighborhood: "Sandy Springs",
    county: "Fulton",
    clusters: [
      {
        name: "Corporate Headquarters",
        naics: 54,
        distance: "Local",
        anchor_employers: ["UPS (HQ, Sandy Springs)", "Mansfield Energy"],
        student_connection: "UPS's global headquarters anchors Sandy Springs — logistics and corporate strategy careers are genuinely local, not a downtown commute."
      }
    ]
  },

  "30030": {
    zip: "30030",
    neighborhood: "Decatur",
    county: "DeKalb",
    clusters: [
      {
        name: "Healthcare & Public Health",
        naics: 62,
        distance: "3 miles — Emory / CDC corridor",
        anchor_employers: ["Emory Healthcare", "CDC"],
        student_connection: "Decatur sits inside the Emory/CDC corridor directly — public health and biomedical research careers are a genuine local pathway."
      },
      {
        name: "Education & Nonprofit Leadership",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Agnes Scott College", "regional nonprofit headquarters"],
        student_connection: "Decatur's civic, walkable identity supports a real concentration of education and nonprofit-leadership careers alongside the healthcare corridor."
      }
    ]
  },

  "30022": {
    zip: "30022",
    neighborhood: "Alpharetta",
    county: "Fulton",
    clusters: [
      {
        name: "Technology & Fintech",
        naics: 51,
        distance: "Local",
        anchor_employers: ["ADP (major campus)", "LexisNexis Risk Solutions"],
        student_connection: "Alpharetta has become known as Atlanta's 'Technology City' — ADP and LexisNexis anchor a genuine fintech-adjacent tech corridor north of the city."
      }
    ]
  },


  "30060": {
    zip: "30060",
    neighborhood: "Marietta",
    county: "Cobb",
    clusters: [
      {
        name: "Aerospace & Advanced Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Lockheed Martin (Marietta plant)"],
        student_connection: "Lockheed Martin's Marietta plant — builder of the C-130 and F-22 — is one of the largest aerospace manufacturing sites in the Southeast, anchoring a genuine engineering career pathway."
      },
      {
        name: "Corporate Headquarters",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Home Depot (HQ, Vinings-adjacent)"],
        student_connection: "Home Depot's global headquarters sits just south of Marietta — retail corporate strategy and supply chain careers are a genuine local pathway."
      }
    ]
  },

  "30080": {
    zip: "30080",
    neighborhood: "Smyrna",
    county: "Cobb",
    clusters: [
      {
        name: "Corporate Headquarters & Sports Business",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Atlanta Braves (Truist Park)", "The Battery Atlanta mixed-use corridor"],
        student_connection: "Truist Park and The Battery Atlanta have turned Smyrna into a genuine sports-business and entertainment corridor, distinct from its bedroom-suburb reputation."
      }
    ]
  }

};

if (typeof module !== 'undefined') module.exports = { GEO_INDUSTRY_DB_ATLANTA };
