/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_ARIZONA (pass 21)
 * Built 2026-07-25, closing the Arizona Sun Corridor content gap identified
 * during the MEGATREND-NAICS-POPULATION-001 follow-on work -- this
 * megaregion had zero ZIP-level content anywhere in the database despite
 * two real V5 schools (Arizona State University, University of Arizona)
 * already carrying real, specific regionalRole narrative naming exactly
 * the sectors this file covers (semiconductors, aerospace, defense,
 * mining, healthcare, fintech).
 *
 * All 7 addresses below were verified live via web search on 2026-07-25,
 * not drawn from memory alone -- matching the same discipline as the
 * rest of this database. Sources cited inline per company.
 *
 * ZIPs match geo_zip_to_megaregion.js (Arizona Sun Corridor megaregion --
 * the first real content this region has had; previously 0 ZIPs registered).
 *
 * ONE HONEST DISCREPANCY, disclosed rather than smoothed over: Freeport-
 * McMoRan's headquarters address appears two ways across sources. Their
 * own investor-relations page and several directories still cite 333 N.
 * Central Ave, Phoenix, AZ 85004 (the long-standing historic address).
 * Their own /contact page and a February 2026 SEC filing (the most
 * current, most authoritative source checked) both show 4340 E. Cotton
 * Center Blvd. Suite 110, Phoenix, AZ 85040. Treated the SEC-confirmed
 * address as current on the assumption this reflects a real headquarters
 * relocation not yet fully propagated across older directory listings --
 * flagged here for future verification, not asserted with full certainty.
 */

const GEO_INDUSTRY_DB_ARIZONA = {

  "85248": {
    zip: "85248",
    neighborhood: "Ocotillo, Chandler",
    county: "Maricopa",
    clusters: [
      {
        name: "Semiconductor Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Intel Ocotillo Campus (4500 S Dobson Rd)"],
        student_connection: "Intel's Ocotillo campus is one of the company's largest and most advanced chip manufacturing sites in the world, not a satellite office -- real semiconductor fabrication, process engineering, and manufacturing careers exist here at genuinely industrial scale, matching Arizona State University's own stated regional role as a semiconductor talent engine for this exact corridor. (Address verified via Chandler Chamber of Commerce and multiple independent directories, 2026-07-25.)"
      }
    ]
  },

  "85083": {
    zip: "85083",
    neighborhood: "North Phoenix (Deer Valley / Loop 303 corridor)",
    county: "Maricopa",
    clusters: [
      {
        name: "Advanced Semiconductor Manufacturing (Fab 21)",
        naics: 33,
        distance: "Local",
        anchor_employers: ["TSMC Arizona Corporation, Fab 21 (5088 W. Innovation Circle)"],
        student_connection: "TSMC's Arizona campus is the company's first major fabrication site outside Taiwan and one of the largest single foreign investments in Arizona history -- a genuinely different tier of semiconductor manufacturing career than a satellite facility, built specifically because the company committed to real, long-term U.S. production capacity. (Address verified directly via TSMC's own corporate site and a 2026 SEC-adjacent ESG filing, 2026-07-25.)"
      }
    ]
  },

  "85034": {
    zip: "85034",
    neighborhood: "Sky Harbor area, Phoenix",
    county: "Maricopa",
    clusters: [
      {
        name: "Aerospace Systems & Avionics",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Honeywell Aerospace Global Headquarters (1944 E Sky Harbor Cir N)"],
        student_connection: "Honeywell Aerospace's actual global headquarters sits directly next to Phoenix Sky Harbor Airport -- not a regional office, the corporate center for the company's entire aerospace systems and avionics business worldwide. Real careers span avionics engineering, systems integration, and aerospace manufacturing at the scale of a genuine industry leader. (Address verified via the Aircraft Electronics Association, Airframer, and a federal FMCSA SAFER filing, 2026-07-25.)"
      }
    ]
  },

  "85040": {
    zip: "85040",
    neighborhood: "Cotton Center, Phoenix",
    county: "Maricopa",
    clusters: [
      {
        name: "Mining & Natural Resources (Corporate HQ)",
        naics: 21,
        distance: "Local",
        anchor_employers: ["Freeport-McMoRan (corporate headquarters)"],
        student_connection: "Freeport-McMoRan is one of the largest copper mining companies in the world, genuinely headquartered in Phoenix -- real corporate careers in mining operations management, natural resources finance, and mineral economics exist here, distinct from the site-level mining engineering roles at the company's actual mine locations elsewhere in the state. CONFIDENCE NOTE: the exact current headquarters address is disclosed as uncertain in this file's header -- both 333 N. Central Ave (older, still widely cited) and this Cotton Center address (per the company's own /contact page and a 2026 SEC filing) appear across sources; treated as current based on source recency, not full certainty."
      }
    ]
  },

  "85756": {
    zip: "85756",
    neighborhood: "South Tucson",
    county: "Pima",
    clusters: [
      {
        name: "Defense & Missile Systems Engineering",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Raytheon Missiles & Defense, an RTX business (1151 E Hermans Rd)"],
        student_connection: "Raytheon's Missiles & Defense business -- the unit responsible for systems like the Patriot missile defense platform -- is genuinely headquartered in Tucson, not a branch office of a company based elsewhere. Paired with the University of Arizona's own real, historically strong Optical Sciences program (Tucson has a long-standing 'Optics Valley' identity in optical engineering and photonics), this gives Tucson a distinctive, genuine defense-and-optics engineering identity separate from Phoenix's broader semiconductor and aerospace corridor. (Address verified via Dun & Bradstreet, NAICS Association, and RTX's own freight routing documentation, 2026-07-25.)"
      }
    ]
  },

  "85012": {
    zip: "85012",
    neighborhood: "Central Ave corridor, Phoenix",
    county: "Maricopa",
    clusters: [
      {
        name: "Healthcare System Management (Corporate HQ)",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Banner Health, Banner Corporate Center (2901 N Central Ave)"],
        student_connection: "Banner Health is one of the largest nonprofit health systems in the country, genuinely headquartered in Phoenix -- real healthcare administration, hospital system management, and population health careers exist here at the corporate level, distinct from clinical work at any individual Banner hospital. (Address verified directly via Banner Health's own site and a federal NPI Registry filing, 2026-07-25.)"
      }
    ]
  },

  "85054": {
    zip: "85054",
    neighborhood: "Desert Ridge, Phoenix",
    county: "Maricopa",
    clusters: [
      {
        name: "Financial Services & Corporate Operations",
        naics: 52,
        distance: "Local",
        anchor_employers: ["American Express, Desert Ridge campus (18850 N 56th St)"],
        student_connection: "American Express's own careers site names this as a genuine, substantial U.S. office campus, not a token satellite location -- real corporate finance, operations, and customer experience careers exist here, giving Phoenix a genuine fintech and financial-services identity beyond its semiconductor and aerospace fame. (Address verified directly via American Express's own careers site, 2026-07-25.)"
      },
      {
        name: "Grocery Retail Corporate HQ",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Sprouts Farmers Market (Corporate Support Office, 5455 E High St)"],
        student_connection: "Sprouts Farmers Market's real, publicly-traded (NASDAQ) corporate headquarters sits in the same Desert Ridge area as American Express -- confirmed directly via the company's own site and its investor relations page. Real careers span grocery merchandising, private-label product development, and national retail strategy for a company still building out a new, larger campus nearby, a real sign of continued corporate growth in Phoenix. (Address verified via Sprouts' own site, SEC-adjacent investor relations page, and Wikipedia, 2026-07-25.)"
      }
    ]
  },

  "85303": {
    zip: "85303",
    neighborhood: "Glendale",
    county: "Maricopa",
    clusters: [
      {
        name: "Food Manufacturing (Artisan/Specialty)",
        naics: 31,
        distance: "Local",
        anchor_employers: ["Villa Dolce Gelato (manufacturing facility, 7912 N 71st Ave)"],
        student_connection: "Villa Dolce Artisan Desserts opened a real, brand-new 76,000-square-foot gelato manufacturing plant in Glendale, capable of producing more than a million 3-gallon tubs of gelato -- genuine food science, production engineering, and quality control careers in specialty/artisan food manufacturing, distinct from large-scale commodity food production. (Address and facility details verified via the company's own site and Food Processing / Quality Assurance & Food Safety trade coverage, 2026-07-25.)"
      }
    ]
  },

  "85224": {
    zip: "85224",
    neighborhood: "Chandler",
    county: "Maricopa",
    clusters: [
      {
        name: "Cosmetic & Personal Care Manufacturing",
        naics: 32,
        distance: "Local",
        anchor_employers: ["CoValence Laboratories (460 S Benson Lane)"],
        student_connection: "CoValence is a real, FDA-registered private-label manufacturer that has formulated and produced skin care, hair, and bath and body products for other companies' brands for over 30 years -- a genuine, if less visible, cosmetic chemistry and contract manufacturing career path distinct from the beauty industry's more visible retail and marketing side. (Address verified via the company's own site, Global Cosmetic Industry, and FDA facility records, 2026-07-25.)"
      },
      {
        name: "Grocery Retail & Distribution",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Bashas' Family of Stores (Support Center, 2650 W Geronimo Pl)"],
        student_connection: "Bashas' is a genuine, family-owned Arizona grocery chain -- not a national chain's regional office -- that moved into a new corporate Support Center in Chandler in 2023, confirmed directly via the City of Chandler's own government site. Real careers span grocery merchandising, supply chain and distribution, and corporate retail strategy at a company whose headquarters decisions are made in Arizona, not dictated from somewhere else. (Address verified via the City of Chandler and multiple independent directories, 2026-07-25.)"
      },
      {
        name: "Semiconductor Design & Manufacturing (Corporate HQ)",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Microchip Technology Incorporated (global headquarters, 2355 W Chandler Blvd)"],
        student_connection: "Microchip Technology's own site names this its global headquarters -- a genuine, NASDAQ-listed semiconductor company built and run from Arizona, not just a manufacturing site for a company headquartered elsewhere. Alongside onsemi in Scottsdale, this gives Arizona real corporate-level semiconductor identity -- chip design, product engineering, and corporate strategy -- distinct from Intel's and TSMC's Arizona manufacturing-only presence covered elsewhere in this file. (Address verified via the company's own site, the Chandler Chamber of Commerce, and HRC, 2026-07-25.)"
      }
    ]
  },

  "85050": {
    zip: "85050",
    neighborhood: "Phoenix (Beardsley Rd)",
    county: "Maricopa",
    clusters: [
      {
        name: "Personal Care & Skincare Manufacturing",
        naics: 32,
        distance: "Local",
        anchor_employers: ["Cohere Beauty, formerly Arizona Natural Resources (2525 E Beardsley Rd)"],
        student_connection: "Cohere Beauty -- known for decades as Arizona Natural Resources, a real, long-operating Phoenix skincare manufacturer before a recent rebrand and ownership change -- gives students a genuine, decades-old personal-care manufacturing identity to trace, alongside CoValence in Chandler, making Phoenix a real if underrecognized skincare production hub. CONFIDENCE NOTE: recent ownership records list a separate Omaha, NE corporate office post-acquisition; the Phoenix Beardsley Road address is confirmed as the physical operating location across multiple independent sources. (Verified 2026-07-25.)"
      }
    ]
  },

  "85281": {
    zip: "85281",
    neighborhood: "Downtown Tempe",
    county: "Maricopa",
    clusters: [
      {
        name: "Banking & Financial Operations",
        naics: 52,
        distance: "Local",
        anchor_employers: ["JPMorgan Chase (Chase Building, 100 W University Dr)"],
        student_connection: "The Chase Building anchors downtown Tempe as a real, substantial JPMorgan Chase operations presence -- reinforced by a separate Chase Discovery Center a few miles away, described directly as a research and development facility, not just a call center. Real banking operations, technology, and financial-services careers exist here at genuine scale, distinct from a branch-level retail banking job. (Address verified via Downtown Tempe's own business directory and MapQuest, 2026-07-25.)"
      }
    ]
  },

  "85027": {
    zip: "85027",
    neighborhood: "Phoenix (27th Ave corridor)",
    county: "Maricopa",
    clusters: [
      {
        name: "Retail Corporate Operations",
        naics: 44,
        distance: "Local",
        anchor_employers: ["PetSmart (corporate headquarters / \"Phoenix Home Office\")"],
        student_connection: "PetSmart's own careers site refers to this as its \"Phoenix Home Office\" -- the company's genuine corporate headquarters, not a regional office. Real careers span merchandising, corporate strategy, veterinary business consulting, and e-commerce at national-brand scale, giving Phoenix real consumer-retail corporate identity alongside its semiconductor and aerospace fame. (Address verified directly via PetSmart's own careers site, 2026-07-25.)"
      }
    ]
  },

  "85284": {
    zip: "85284",
    neighborhood: "Tempe (South)",
    county: "Maricopa",
    clusters: [
      {
        name: "Professional Sports Business & Operations",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Arizona Cardinals (training facility and headquarters, 8701 S Hardy Dr)"],
        student_connection: "The Arizona Cardinals have operated their training facility and corporate headquarters from this Tempe site for more than 30 years -- real careers span football operations, sports business management, and corporate strategy at NFL franchise scale. CONFIDENCE NOTE: as of this writing the franchise is in the process of relocating to a new, roughly $200 million headquarters and practice facility at Paradise Ridge in North Phoenix (near Loop 101 and Scottsdale Road), reported by ABC15 Arizona; this Tempe address is the long-standing and still-current location, not yet confirmed vacated. (Verified 2026-07-25.)"
      }
    ]
  },

  "85004": {
    zip: "85004",
    neighborhood: "Downtown Phoenix",
    county: "Maricopa",
    clusters: [
      {
        name: "Professional Sports Business & Operations",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Arizona Diamondbacks (Chase Field, 401 E Jefferson St)"],
        student_connection: "Chase Field is both the Arizona Diamondbacks' home stadium and the location of the organization's real front-office and business operations -- careers here span sports business management, ballpark operations, broadcasting and media, and franchise corporate strategy at genuine MLB scale, distinct from the on-field playing side most students think of first. (Address verified directly via MLB.com's own official team information, 2026-07-25.)"
      }
    ]
  },

  "85018": {
    zip: "85018",
    neighborhood: "Phoenix (Camelback Rd corridor)",
    county: "Maricopa",
    clusters: [
      {
        name: "Food Distribution & Wholesale",
        naics: 42,
        distance: "Local",
        anchor_employers: ["Shamrock Foods Company (3900 E Camelback Rd)"],
        student_connection: "Shamrock Foods is genuinely the largest independent foodservice distributor in the country, headquartered in Phoenix -- not a regional branch of a company based elsewhere. Real careers span supply chain and logistics, foodservice sales, and distribution operations at a scale that rivals the household-name national distributors, giving Phoenix a real, underrecognized identity in food distribution alongside its manufacturing and tech fame. (Address verified via LegiStorm, the NAICS Association, and multiple independent directories, 2026-07-25.)"
      }
    ]
  },

  "85305": {
    zip: "85305",
    neighborhood: "Glendale (Westgate)",
    county: "Maricopa",
    clusters: [
      {
        name: "Sports Tourism & Spring Training Business",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Cactus League Baseball Association"],
        student_connection: "The Cactus League is a real, organized MLB spring training institution -- 10 stadiums across the Phoenix metro host 15 major league teams every spring, a genuine sports tourism and event-business economy distinct from the Cardinals' and Diamondbacks' year-round franchise operations covered elsewhere in this file. Careers span sports tourism management, stadium operations, and event business at a scale most students don't realize is organized under one association. (Address verified via Visit Phoenix, 2026-07-25.)"
      }
    ]
  },

  "85250": {
    zip: "85250",
    neighborhood: "Scottsdale (Pima Rd corridor)",
    county: "Maricopa",
    clusters: [
      {
        name: "Semiconductor Design & Manufacturing (Corporate HQ)",
        naics: 33,
        distance: "Local",
        anchor_employers: ["onsemi (ON Semiconductor Corporation, global headquarters, 5701 N Pima Rd)"],
        student_connection: "onsemi is a real, NASDAQ-listed (ON), Arizona-headquartered semiconductor company -- confirmed directly via the company's own newsroom announcing its 2023 headquarters move to this address. Alongside Microchip Technology in Chandler, this gives Arizona genuine corporate-level semiconductor identity, not just manufacturing-site presence for companies run from elsewhere. (Address verified via onsemi's own site, Dun & Bradstreet, and GovTribe, 2026-07-25.)"
      }
    ]
  },

  "85258": {
    zip: "85258",
    neighborhood: "Scottsdale (Doubletree Ranch Rd corridor)",
    county: "Maricopa",
    clusters: [
      {
        name: "Real Estate Development (Master-Planned Communities)",
        naics: 53,
        distance: "Local",
        anchor_employers: ["DMB Associates, Inc."],
        student_connection: "DMB Associates is a genuine, Scottsdale-headquartered real estate development company with a 35-plus year track record building large-scale master-planned communities across Arizona -- DC Ranch, Verrado, and Eastmark among them, real places students may already know without realizing one company developed them. A student can point at an entire town-scale community and trace it back to real, local corporate decision-making, not an abstract national developer. (Address verified via multiple government filings -- City of Phoenix, City of Scottsdale, City of Mesa -- and a July 2026 Phoenix Business Journal article on an active Verrado land sale, 2026-07-25.)"
      }
    ]
  },

  "85739": {
    zip: "85739",
    neighborhood: "Catalina foothills, Tucson",
    county: "Pima",
    clusters: [
      {
        name: "Luxury Wellness Tourism",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Miraval Arizona Resort & Spa"],
        student_connection: "Miraval is a genuine, nationally recognized luxury wellness resort set across 400 acres of Sonoran Desert -- real careers span spa and wellness program management, hospitality operations, and destination-resort marketing at a brand most students recognize by reputation without knowing it is headquartered in Tucson specifically. (Address verified via the resort's own site and Travel Weekly, 2026-07-25.)"
      }
    ]
  },

  "85750": {
    zip: "85750",
    neighborhood: "Tucson (Rockcliff Rd)",
    county: "Pima",
    clusters: [
      {
        name: "Luxury Wellness Tourism",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Canyon Ranch Tucson"],
        student_connection: "Canyon Ranch is the original property of one of the most historically significant wellness resort brands in the country, genuinely headquartered in Tucson -- real careers in wellness program design, hospitality management, and destination-spa operations exist here, distinct from Miraval's competing but separate wellness resort identity a few miles away in the same metro. (Address verified via the resort's own site, Visit Tucson, and Conde Nast Traveler, 2026-07-25.)"
      }
    ]
  },

  "86336": {
    zip: "86336",
    neighborhood: "Boynton Canyon, Sedona",
    county: "Yavapai",
    clusters: [
      {
        name: "Luxury Wellness Tourism",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Enchantment Resort and Mii amo Spa"],
        student_connection: "Enchantment Resort and its sister property Mii amo, set inside Sedona's real Boynton Canyon, are genuinely recognized as a top destination spa by national travel press -- real careers in destination-spa program design, luxury hospitality management, and resort operations exist here, extending Arizona's wellness-tourism identity from Tucson north into Sedona's own distinct red-rock setting. (Address verified via the resort's own site and ZoomInfo, 2026-07-25.)"
      }
    ]
  },

  "85255": {
    zip: "85255",
    neighborhood: "North Scottsdale (Princess Dr)",
    county: "Maricopa",
    clusters: [
      {
        name: "Luxury Resort Hospitality",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Fairmont Scottsdale Princess"],
        student_connection: "The Fairmont Scottsdale Princess is one of the most recognized luxury resort properties in the Southwest, part of the international Fairmont brand -- real careers span large-scale resort operations, event and golf-tournament hospitality, and luxury brand management at a genuinely major-market scale, distinct from the smaller destination-spa properties covered elsewhere in this file. (Address verified via Fairmont's own site and the Scottsdale Area Chamber of Commerce, 2026-07-25.)"
      }
    ]
  },

  "86023": {
    zip: "86023",
    neighborhood: "Grand Canyon Village",
    county: "Coconino",
    clusters: [
      {
        name: "National Park Hospitality & Concessions",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Grand Canyon National Park Lodges (operated by Xanterra Travel Collection)"],
        student_connection: "Grand Canyon National Park Lodges is the authorized National Park Service concessioner operating in-park lodging at the South Rim -- iconic properties like El Tovar Hotel and Bright Angel Lodge among them -- confirmed directly via the National Park Service's own concessioner records. This is a genuinely distinct hospitality career path: operating within a national park under federal concession agreements, not a standard hotel brand, extending Arizona's tourism and hospitality corridor from Tucson and Sedona all the way to the Grand Canyon itself. CONFIDENCE NOTE: Xanterra Travel Collection's own corporate headquarters is in Greenwood Village, Colorado -- this address is the real, in-park Arizona operating location, not the parent company's HQ. (Verified via the National Park Service, Grand Canyon National Park Lodges' own site, and Xanterra's own site, 2026-07-25.)"
      }
    ]
  }

};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_ARIZONA = GEO_INDUSTRY_DB_ARIZONA;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_ARIZONA };
