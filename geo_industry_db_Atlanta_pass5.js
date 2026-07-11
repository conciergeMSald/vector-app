/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 5: Atlanta Metro — 22 ZIP codes (60-mile radius + UGA/Athens flagged as
 * outside-radius exception, deep coverage on core anchors)
 * Version: 1.4 — named pro sports teams explicitly (Falcons, Hawks, Atlanta United,
 * Braves already present), added Chick-fil-A Peach Bowl, College Football Hall of Fame,
 * Shepherd Center + Georgia Tech/Emory Coulter biomedical engineering, CardioMEMS medical
 * device manufacturing, University of Georgia/Athens (flagged: 65-70mi by road, outside
 * strict 60mi radius, included given regional significance) — 2026-07-10
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
        anchor_employers: ["Georgia Institute of Technology", "NCR Voyix (HQ)", "Salesforce Atlanta offices"],
        student_connection: "Georgia Tech's Midtown campus anchors 'Tech Square' directly — one of the densest concentrations of tech startups, corporate innovation labs, and engineering talent in the Southeast, with NCR Voyix's headquarters a few blocks away."
      },
      {
        name: "Film, Media & Entertainment",
        naics: 71,
        distance: "Local / Regional",
        anchor_employers: ["Trilith Studios (30 miles south)", "Assembly Atlanta (Doraville, 15 miles north)"],
        student_connection: "Midtown sits at the center of Atlanta's film and media boom — one of the largest production hubs in North America runs through the metro."
      },
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Piedmont Atlanta Hospital", "Piedmont Healthcare (HQ)"],
        student_connection: "Piedmont Healthcare's flagship hospital and system headquarters sit directly in Midtown — one of the largest hospital systems in the state is a genuine local medical career pathway, not a suburban commute."
      },
      {
        name: "Biomedical Engineering & Rehabilitation Medicine",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Shepherd Center", "Wallace H. Coulter Department of Biomedical Engineering (Georgia Tech / Emory)"],
        student_connection: "Shepherd Center — one of the most internationally recognized spinal cord and brain injury rehabilitation hospitals in the world — sits blocks from Georgia Tech and Emory's jointly run Coulter Department of Biomedical Engineering, one of the top-ranked biomedical engineering programs in the country. Together they make Midtown a genuine hub for biomechanics, kinesiology, and medical device research, not just software."
      },
      {
        name: "Medical Device Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["CardioMEMS (Abbott)"],
        student_connection: "CardioMEMS — which developed an implantable heart failure monitoring device and grew directly out of Georgia Tech research before being acquired by Abbott — is a genuine, if under-recognized, medical device success story anchored in Atlanta rather than the more famous device clusters in Minneapolis or Boston."
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
      },
      {
        name: "Biomanufacturing & Regenerative Medicine",
        naics: 33,
        distance: "Local",
        anchor_employers: ["MiMedx (HQ)"],
        student_connection: "MiMedx, a regenerative medicine and biomanufacturing company headquartered in Marietta, gives Cobb County a genuine biomanufacturing identity alongside its aerospace and retail anchors — the kind of pathway most students assume only exists in Boston or the Bay Area."
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
  },

  "30144": {
    zip: "30144",
    neighborhood: "Kennesaw",
    county: "Cobb",
    clusters: [
      {
        name: "Higher Education & Regional Economic Anchor",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Kennesaw State University"],
        student_connection: "Kennesaw State University — one of the largest universities in Georgia by enrollment — makes Kennesaw a genuine higher-education and student-life hub in its own right, not just a Marietta-adjacent suburb."
      }
    ]
  },

  "30214": {
    zip: "30214",
    neighborhood: "Fayetteville",
    county: "Fayette",
    clusters: [
      {
        name: "Film & Television Production",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Trilith Studios"],
        student_connection: "Trilith Studios in Fayetteville — one of the largest film production complexes in North America, home to numerous major studio productions — makes Fayette County a genuine center of the film industry, not a satellite of Midtown's media scene."
      }
    ]
  },

  "30269": {
    zip: "30269",
    neighborhood: "Peachtree City",
    county: "Fayette",
    clusters: [
      {
        name: "Aviation & General Aviation Services",
        naics: 48,
        distance: "Local",
        anchor_employers: ["Falcon Field Airport", "aviation-adjacent businesses"],
        student_connection: "Peachtree City was purpose-built around Falcon Field and general aviation — a genuinely distinctive aviation-industry identity for a metro Atlanta suburb, reflected in the city's extensive golf-cart-path infrastructure connecting homes to the airport."
      }
    ]
  },

  "30263": {
    zip: "30263",
    neighborhood: "Newnan",
    county: "Coweta",
    clusters: [
      {
        name: "Film & Television Production",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Walking Dead production sites", "Coweta County film office"],
        student_connection: "Coweta County, and Newnan specifically, hosted extensive filming for The Walking Dead and other major productions — real, ongoing film-industry infrastructure well outside the Midtown/Trilith corridor."
      }
    ]
  },

  "30012": {
    zip: "30012",
    neighborhood: "Conyers",
    county: "Rockdale",
    clusters: [
      {
        name: "Equestrian & Sports Venue Operations",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Georgia International Horse Park"],
        student_connection: "The Georgia International Horse Park in Conyers hosted the equestrian and mountain biking events of the 1996 Atlanta Olympics and continues to operate as a major competitive equestrian venue — a genuine, if under-recognized, sports-industry anchor east of the city."
      }
    ]
  },

  "30014": {
    zip: "30014",
    neighborhood: "Covington",
    county: "Newton",
    clusters: [
      {
        name: "Film & Television Production",
        naics: 51,
        distance: "Local",
        anchor_employers: ["major TV/film production sites", "Covington historic square (frequent filming location)"],
        student_connection: "Covington has been called the 'Hollywood of the South' for decades of continuous film and TV production — from In the Heat of the Night to The Vampire Diaries — a genuine, sustained production-industry identity, not a one-off filming location."
      }
    ]
  },

  "30043": {
    zip: "30043",
    neighborhood: "Lawrenceville",
    county: "Gwinnett",
    clusters: [
      {
        name: "Higher Education & Regional Growth",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Georgia Gwinnett College"],
        student_connection: "Georgia Gwinnett College anchors Lawrenceville's identity as the seat of Gwinnett County — Georgia's second-most-populous county — giving the area a genuine higher-education and civic-administration career pathway."
      }
    ]
  },

  "30501": {
    zip: "30501",
    neighborhood: "Gainesville",
    county: "Hall",
    clusters: [
      {
        name: "Poultry Industry & Agribusiness",
        naics: 11,
        distance: "Local",
        anchor_employers: ["Fieldale Farms", "Pilgrim's Pride", "Mar-Jac Poultry"],
        student_connection: "Gainesville is widely known as the 'Poultry Capital of the World' — a genuine, concentrated agribusiness identity built around Georgia's poultry industry, one of the largest in the country."
      }
    ]
  },

  "30303": {
    zip: "30303",
    neighborhood: "Downtown Atlanta",
    county: "Fulton",
    clusters: [
      {
        name: "Higher Education & Urban Research",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Georgia State University"],
        student_connection: "Georgia State University is one of the largest urban research universities in the country, embedded directly in downtown Atlanta's business and government district rather than a separate campus town."
      },
      {
        name: "Media & Broadcasting",
        naics: 51,
        distance: "Local",
        anchor_employers: ["CNN Center"],
        student_connection: "CNN Center has anchored downtown Atlanta's identity as a global media hub since Ted Turner founded the network here in 1980 — broadcast journalism careers have a genuine, physical home in the city."
      },
      {
        name: "Healthcare & Public Medicine",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Grady Memorial Hospital"],
        student_connection: "Grady Memorial Hospital is one of the largest public hospitals in the country and the Southeast's only Level I trauma center within the city core — a genuine, high-acuity medical career pathway embedded in downtown rather than a suburban hospital campus."
      },
      {
        name: "Sports & Live Events Business",
        naics: 71,
        distance: "Local",
        anchor_employers: ["State Farm Arena (Atlanta Hawks, NBA)", "Georgia World Congress Center"],
        student_connection: "State Farm Arena — home of the Atlanta Hawks — and the Georgia World Congress Center anchor a genuine sports-and-live-events business corridor downtown — event management, stadium operations, and hospitality careers are a real local pathway, not just game-day jobs. The Georgia World Congress Center also hosts the Bronner Bros International Beauty Show, one of the largest hair and beauty trade shows in the world."
      }
    ]
  },

  "30313": {
    zip: "30313",
    neighborhood: "Centennial Olympic Park District",
    county: "Fulton",
    clusters: [
      {
        name: "Global Consumer Brands & Corporate Headquarters",
        naics: 54,
        distance: "Local",
        anchor_employers: ["The Coca-Cola Company (World HQ)"],
        student_connection: "Coca-Cola's World Headquarters sits directly on Centennial Olympic Park — one of the most recognized consumer brands on earth is a genuine, walkable local employer, not a distant corporate name on a can."
      },
      {
        name: "Marine Biology & Conservation",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Georgia Aquarium"],
        student_connection: "The Georgia Aquarium — one of the largest aquariums in the world — sits a block from Coca-Cola's headquarters, giving downtown Atlanta a genuine marine biology, animal care, and conservation career pathway that most students would never associate with a landlocked city."
      },
      {
        name: "Professional & College Sports Business",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Atlanta Falcons (NFL)", "Atlanta United FC (MLS)", "Chick-fil-A Peach Bowl", "College Football Hall of Fame"],
        student_connection: "Mercedes-Benz Stadium is home to both the Falcons and Atlanta United — which holds MLS attendance records — and hosts the Chick-fil-A Peach Bowl, one of the rotating College Football Playoff semifinal sites. The College Football Hall of Fame sits directly across the street, making this one of the most concentrated sports-business districts in the country: team operations, event management, and sports media careers are all genuinely local here, not tied to one team's season."
      }
    ]
  },

  "30354": {
    zip: "30354",
    neighborhood: "Airport Corridor (Hapeville / College Park)",
    county: "Fulton",
    clusters: [
      {
        name: "Aviation & Global Logistics",
        naics: 48,
        distance: "Local",
        anchor_employers: ["Hartsfield-Jackson Atlanta International Airport", "Delta Air Lines (World HQ)"],
        student_connection: "Hartsfield-Jackson — the busiest airport in the world by passenger traffic — and Delta Air Lines' global headquarters together make this corridor one of the most significant aviation and logistics employment centers in the country, not just a place people pass through."
      },
      {
        name: "Automotive & Corporate Headquarters",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Porsche Cars North America (HQ)", "Chick-fil-A (HQ)"],
        student_connection: "Porsche Cars North America relocated its entire U.S. headquarters to the airport corridor in 2015, joining Chick-fil-A's headquarters nearby — a real concentration of major corporate headquarters most students would associate with Buckhead, not the airport."
      }
    ]
  },

  "30310": {
    zip: "30310",
    neighborhood: "Southwest Atlanta / Fort McPherson",
    county: "Fulton",
    clusters: [
      {
        name: "Film & Television Production",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Tyler Perry Studios"],
        student_connection: "Tyler Perry Studios occupies the former Fort McPherson Army base in southwest Atlanta — one of the largest film production studios in the country, built on a genuinely significant piece of the city's history, and distinct from the Midtown media scene most people picture first."
      }
    ]
  },

  "30360": {
    zip: "30360",
    neighborhood: "Doraville",
    county: "DeKalb",
    clusters: [
      {
        name: "Film & Television Production",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Assembly Atlanta"],
        student_connection: "Assembly Atlanta — one of the largest film and TV studio complexes in the country — was built on the site of the old GM Doraville assembly plant, turning a closed auto factory into a genuine symbol of the metro's rapid industry transformation."
      }
    ]
  },

  "30308": {
    zip: "30308",
    neighborhood: "Old Fourth Ward / Poncey-Highland",
    county: "Fulton",
    clusters: [
      {
        name: "Culinary Arts & Food Hall Business",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Ponce City Market"],
        student_connection: "Ponce City Market — a former Sears distribution warehouse converted into one of the Southeast's largest food hall and mixed-use developments — anchors a genuine culinary-industry career pathway in Atlanta beyond any single restaurant, from chef-owned concepts to food hall operations and hospitality management."
      }
    ]
  },

  "30601": {
    zip: "30601",
    neighborhood: "Athens",
    county: "Clarke",
    clusters: [
      {
        name: "Higher Education & College Athletics",
        naics: 61,
        distance: "65-70 miles NE — outside the strict 60-mile radius by road, included given the school's regional significance to Atlanta-area students",
        anchor_employers: ["University of Georgia"],
        student_connection: "The University of Georgia — the state's flagship university and a College Football Playoff-caliber athletics program — is the single most common in-state destination for ambitious Atlanta-area students, and its athletics and sports management programs feed directly into the Atlanta sports-business corridor (Falcons, Hawks, Braves, Atlanta United, and the Chick-fil-A Peach Bowl)."
      }
    ]
  }

};

function getAtlantaGeoIntelligence(zip) {
  if (!zip || zip.length < 5) return null;
  if (GEO_INDUSTRY_DB_ATLANTA[zip]) return GEO_INDUSTRY_DB_ATLANTA[zip];
  const prefix3 = zip.slice(0, 3);
  const match3 = Object.values(GEO_INDUSTRY_DB_ATLANTA).find(e => e.zip.startsWith(prefix3));
  if (match3) return match3;
  const prefix2 = zip.slice(0, 2);
  const match2 = Object.values(GEO_INDUSTRY_DB_ATLANTA).find(e => e.zip.startsWith(prefix2));
  if (match2) return match2;
  return null;
}

if (typeof module !== 'undefined') module.exports = { GEO_INDUSTRY_DB_ATLANTA, getAtlantaGeoIntelligence };
