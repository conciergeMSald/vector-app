/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_FL_HOSPITALITY (pass 24)
 * Built 2026-07-25, hospitality/tourism footprint for the Florida
 * megaregion -- rental cars, vacation ownership, and theme park /
 * attractions corporate operations, distinct from the cruise lines
 * (Miami) and Disney/Universal (Orlando entertainment) already covered
 * elsewhere in this database.
 *
 * All addresses verified live via web search on 2026-07-25.
 *
 * ONE REAL CORPORATE NAME UPDATE, disclosed rather than using a stale
 * name: "SeaWorld Entertainment, Inc." is now legally United Parks &
 * Resorts Inc. -- confirmed via the company's own site and Wikipedia.
 * The SeaWorld Orlando park itself keeps its consumer-facing name; only
 * the parent corporate entity renamed.
 *
 * ZIPs match geo_zip_to_megaregion.js (Florida megaregion).
 */

const GEO_INDUSTRY_DB_FL_HOSPITALITY = {

  "33928": {
    zip: "33928",
    neighborhood: "Estero",
    county: "Lee",
    clusters: [
      {
        name: "Rental Car & Mobility Services (Corporate HQ)",
        naics: 53,
        distance: "Local",
        anchor_employers: ["Hertz Global Holdings (global headquarters, 8501 Williams Rd)"],
        student_connection: "Hertz's actual global headquarters -- a NASDAQ-listed company (HTZ) with over 100,000 employees worldwide -- is genuinely in Estero, Florida, not a satellite office of a company run from elsewhere. Real careers span fleet management, mobility technology, corporate strategy, and rental operations at real global scale, giving Southwest Florida a genuine corporate transportation identity distinct from the tourism and hospitality fame of the rest of the state. (Address verified via the company's own investor relations site, Dun & Bradstreet, and the NAICS Association, 2026-07-25.)"
      }
    ]
  },

  "32836": {
    zip: "32836",
    neighborhood: "Orlando (Palm Parkway)",
    county: "Orange",
    clusters: [
      {
        name: "Vacation Ownership (Corporate HQ)",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Marriott Vacations Worldwide Corporation (corporate headquarters, 7812 Palm Parkway)"],
        student_connection: "Marriott Vacations Worldwide is a genuine, publicly traded, Orlando-headquartered company distinct from Marriott's own hotel business -- real careers span vacation ownership sales strategy, resort development, and hospitality finance at a scale most students would not associate with a company outside the hotel brand itself. (Address verified via the company's own investor relations site and GlobalData, 2026-07-25.)"
      }
    ]
  },

  "32835": {
    zip: "32835",
    neighborhood: "Orlando (Metrowest)",
    county: "Orange",
    clusters: [
      {
        name: "Vacation Ownership (Corporate HQ)",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Hilton Grand Vacations Inc. (corporate headquarters, 6355 Metrowest Blvd)"],
        student_connection: "Hilton Grand Vacations is a separate, publicly traded company from Hilton's own hotel business, genuinely headquartered in Orlando -- real careers here mirror Marriott Vacations Worldwide's across town, giving Orlando two competing, real corporate headquarters in the timeshare and vacation-ownership industry specifically, not just hotel-brand satellite offices. (Address verified via the company's own site and the Better Business Bureau, 2026-07-25.)"
      }
    ]
  },

  "32821": {
    zip: "32821",
    neighborhood: "Orlando (Sea Harbor Dr)",
    county: "Orange",
    clusters: [
      {
        name: "Theme Park & Attractions Corporate Operations",
        naics: 71,
        distance: "Local",
        anchor_employers: ["United Parks & Resorts Inc., formerly SeaWorld Entertainment (corporate headquarters, 6240 Sea Harbor Drive)"],
        student_connection: "United Parks & Resorts -- the current legal name for the company long known as SeaWorld Entertainment -- is genuinely headquartered in Orlando and operates multiple theme parks beyond SeaWorld itself. Real careers span animal care and marine biology, theme park operations and engineering, and corporate entertainment strategy, giving Orlando a third major theme park corporate headquarters alongside Disney and Universal, each with its own distinct culture and business model. (Address verified via the company's own site, Wikipedia, and GlobalData, 2026-07-25.)"
      }
    ]
  }

};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_FL_HOSPITALITY = GEO_INDUSTRY_DB_FL_HOSPITALITY;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_FL_HOSPITALITY };
