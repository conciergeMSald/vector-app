/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 3: Chicago Metro — 20 ZIP codes
 * Version: 1.0 — June 16, 2026
 *
 * Chicago is the third-largest financial center in the US,
 * the largest pharmaceutical corridor in the Midwest,
 * and the home of more Fortune 500 HQs per capita than any city
 * except New York. These facts change what students see as possible.
 */

const GEO_INDUSTRY_DB_CHICAGO = {

  // ─────────────────────────────────────────────────────────────
  // NORTH SHORE — THE PHARMACEUTICAL CORRIDOR
  // ─────────────────────────────────────────────────────────────

  "60093": {
    zip: "60093",
    neighborhood: "Winnetka",
    county: "Cook",
    clusters: [
      {
        name: "Pharmaceutical & Biotech Research",
        naics: 54,
        distance: "10 miles north — North Chicago / Waukegan",
        anchor_employers: ["AbbVie (North Chicago HQ)", "Abbott Laboratories (Abbott Park)", "Baxter International (Deerfield)"],
        student_connection: "The North Shore pharmaceutical corridor is one of the most significant in the world — AbbVie makes Humira (the best-selling drug in history), Abbott invented the HIV test, and Baxter pioneered kidney dialysis. All three headquarters are within 15 miles of Winnetka."
      },
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "20 miles south — Chicago Loop",
        anchor_employers: ["William Blair (Chicago HQ)", "Baird", "Northern Trust (Chicago HQ)"],
        student_connection: "Chicago is the third-largest financial center in the US — and the Loop's investment banks, asset managers, and private equity firms draw heavily from the North Shore talent base."
      },
      {
        name: "Trading & Financial Markets",
        naics: 52,
        distance: "20 miles south — Chicago Loop",
        anchor_employers: ["CME Group (Chicago Mercantile Exchange)", "Cboe Global Markets", "Citadel"],
        student_connection: "Chicago invented futures trading — the CME Group and Cboe are the largest derivatives exchanges in the world, headquartered in the Loop. The quantitative trading firms that grew from this ecosystem employ mathematicians, computer scientists, and engineers by the thousands."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "Local / 5 miles",
        anchor_employers: ["Northwestern Medicine (Evanston)", "NorthShore University HealthSystem", "Advocate Health Care"],
        student_connection: "The North Shore is served by three major hospital systems — Northwestern Medicine, NorthShore, and Advocate — all within 10 miles and collectively employing thousands of healthcare professionals."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "15 miles south — Chicago / Evanston",
        anchor_employers: ["Morningstar (Chicago HQ)", "Redhat / IBM (Chicago)", "various Chicago tech companies"],
        student_connection: "Chicago's technology sector is the fastest-growing in the Midwest — and Morningstar, the investment research company that tracks every mutual fund and ETF in the world, is headquartered in the Loop 20 miles south."
      }
    ]
  },

  "60035": {
    zip: "60035",
    neighborhood: "Highland Park",
    county: "Lake",
    clusters: [
      {
        name: "Pharmaceutical & Biotech Research",
        naics: 54,
        distance: "8 miles north — North Chicago",
        anchor_employers: ["AbbVie (North Chicago HQ)", "Abbott Laboratories", "Baxter International (Deerfield, 5 miles)"],
        student_connection: "Highland Park sits between two of the most significant pharmaceutical campuses in the US — AbbVie to the north and Baxter to the west in Deerfield. The Lake County pharmaceutical corridor employs more than 30,000 scientists, engineers, and business professionals."
      },
      {
        name: "Medical Devices & Diagnostics",
        naics: 33,
        distance: "8 miles — Deerfield / Waukegan",
        anchor_employers: ["Baxter International", "Abbott Diagnostics", "Medline Industries (Northfield)"],
        student_connection: "Baxter International in Deerfield pioneered kidney dialysis and IV therapy — and Medline Industries in nearby Northfield is one of the largest private medical products companies in the US. Medical device careers are uniquely accessible from Highland Park."
      },
      {
        name: "Finance & Private Equity",
        naics: 52,
        distance: "25 miles south — Chicago Loop",
        anchor_employers: ["William Blair", "Baird", "Mesirow Financial"],
        student_connection: "The Chicago Loop's financial services corridor is 25 miles south — and Highland Park families have commuted to Chicago banking, investment, and private equity careers for generations."
      },
      {
        name: "Arts & Cultural Organizations",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Ravinia Festival", "Highland Park Community Theatre", "Chicago Symphony (Ravinia residency)"],
        student_connection: "Ravinia Festival — the oldest outdoor music festival in the US and the summer home of the Chicago Symphony Orchestra — is in Highland Park. The arts administration, music production, and nonprofit leadership careers surrounding this institution are uniquely local."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Highland Park Hospital (NorthShore)", "Northwestern Medicine Lake Forest", "Advocate Condell Medical Center"],
        student_connection: "Highland Park Hospital is a major regional medical center within walking distance — and the broader NorthShore University HealthSystem offers pathways from clinical medicine to research and hospital administration."
      }
    ]
  },

  "60022": {
    zip: "60022",
    neighborhood: "Glencoe",
    county: "Cook",
    clusters: [
      {
        name: "Pharmaceutical & Biotech Research",
        naics: 54,
        distance: "15 miles north — North Chicago / Deerfield",
        anchor_employers: ["AbbVie", "Baxter International", "Abbott Laboratories"],
        student_connection: "The Lake County pharmaceutical corridor — anchored by AbbVie, Baxter, and Abbott — is 15 miles north and represents the densest concentration of pharmaceutical research employment in the Midwest."
      },
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "20 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust (Chicago HQ)", "William Blair", "Citadel"],
        student_connection: "Northern Trust — one of the largest wealth management and institutional banking firms in the US — is headquartered in the Loop, 20 miles south. Glencoe families have anchored Chicago's financial services community for a century."
      },
      {
        name: "Arts & Cultural Institutions",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Chicago Botanic Garden (Glencoe HQ)", "Ravinia Festival (Highland Park, 5 miles)"],
        student_connection: "The Chicago Botanic Garden — one of the most visited botanical gardens in the US — is headquartered in Glencoe and employs scientists, horticulturalists, educators, and conservationists. It is one of the most distinctive employers in the Chicago suburbs."
      },
      {
        name: "Legal Services",
        naics: 54,
        distance: "20 miles south — Chicago Loop",
        anchor_employers: ["Kirkland & Ellis (world's highest-grossing law firm)", "Sidley Austin", "Winston & Strawn"],
        student_connection: "Kirkland & Ellis — the highest-grossing law firm in the world — is headquartered in Chicago. The Loop's legal market is one of the most significant in the US, and North Shore families have historically fed directly into Chicago BigLaw."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "5 miles",
        anchor_employers: ["NorthShore Glenbrook Hospital", "Northwestern Medicine", "Advocate Health Care"],
        student_connection: "NorthShore University HealthSystem — one of the most respected regional health systems in Illinois — operates major facilities within 5 miles of Glencoe."
      }
    ]
  },

  "60045": {
    zip: "60045",
    neighborhood: "Lake Forest",
    county: "Lake",
    clusters: [
      {
        name: "Pharmaceutical & Biotech Research",
        naics: 54,
        distance: "5 miles south — North Chicago",
        anchor_employers: ["AbbVie (global HQ — North Chicago)", "Abbott Laboratories (Abbott Park)", "Takeda Pharmaceuticals (Deerfield)"],
        student_connection: "Lake Forest is the residential address for hundreds of AbbVie and Abbott executives — and the global headquarters of both companies are 5 miles south. This is the most significant pharmaceutical corridor outside of New Jersey."
      },
      {
        name: "Finance & Wealth Management",
        naics: 52,
        distance: "30 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust", "Robert W. Baird", "various private family offices"],
        student_connection: "Lake Forest has been home to Chicago's financial leadership class for 150 years — and the Loop's wealth management, investment banking, and private equity firms draw consistently from this community."
      },
      {
        name: "Manufacturing & Industrial",
        naics: 33,
        distance: "10 miles — Waukegan / Lake County",
        anchor_employers: ["Brunswick Corporation (Mettawa, 5 miles)", "Tenneco (Lake Forest HQ)", "US Foods (Rosemont, 25 miles)"],
        student_connection: "Brunswick Corporation — which makes Mercury Marine engines, Life Fitness equipment, and bowling equipment — is headquartered 5 miles from Lake Forest. Lake County is home to a substantial industrial and manufacturing base that doesn't get discussed at dinner parties but employs engineers and supply chain professionals at scale."
      },
      {
        name: "Healthcare Systems & Research",
        naics: 62,
        distance: "Local / 5 miles",
        anchor_employers: ["Northwestern Medicine Lake Forest Hospital", "Cancer Treatment Centers of America (Zion)", "Advocate Condell Medical Center"],
        student_connection: "Northwestern Medicine Lake Forest Hospital is a major regional medical center — and the proximity to Abbott and AbbVie has created a substantial clinical research ecosystem in Lake County."
      },
      {
        name: "Legal & Professional Services",
        naics: 54,
        distance: "30 miles south — Chicago Loop",
        anchor_employers: ["Kirkland & Ellis", "Latham & Watkins (Chicago)", "Skadden Arps (Chicago)"],
        student_connection: "Chicago's BigLaw corridor is among the most significant in the US — Kirkland & Ellis is the highest-grossing law firm in the world — and Lake Forest has historically been one of the primary feeder communities for Chicago's legal profession."
      }
    ]
  },

  "60015": {
    zip: "60015",
    neighborhood: "Deerfield",
    county: "Lake",
    clusters: [
      {
        name: "Pharmaceutical & Medical Devices",
        naics: 54,
        distance: "Local — Deerfield",
        anchor_employers: ["Baxter International (global HQ)", "Takeda Pharmaceuticals (US HQ)", "Walgreens Boots Alliance (HQ — Deerfield)"],
        student_connection: "Deerfield is one of the most significant pharmaceutical addresses in the US — Baxter International, Takeda Pharmaceuticals, and Walgreens Boots Alliance are all headquartered here. More pharmaceutical executives live within a 5-mile radius of Deerfield than almost any community outside New Jersey."
      },
      {
        name: "Retail & Consumer Brands",
        naics: 44,
        distance: "Local — Deerfield",
        anchor_employers: ["Walgreens Boots Alliance (HQ)", "Kraft Heinz (Northfield, 8 miles)", "Mondelez International (Chicago, 25 miles)"],
        student_connection: "Walgreens Boots Alliance — the second-largest pharmacy chain in the world — is headquartered in Deerfield. And the food and consumer goods corridor stretching from Northfield (Kraft Heinz) to downtown Chicago represents one of the largest concentrations of CPG brand management in the country."
      },
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "25 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust", "William Blair", "Baird", "Citadel"],
        student_connection: "The Chicago Loop's financial corridor is 25 miles south — and Deerfield's residential base is deeply connected to Chicago finance, private equity, and wealth management."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "Local / 5 miles",
        anchor_employers: ["NorthShore Glenbrook Hospital", "Highland Park Hospital", "Advocate Condell Medical Center"],
        student_connection: "The NorthShore University HealthSystem operates major facilities within 5 miles of Deerfield — and the concentration of pharmaceutical executives in the area has created a distinctive healthcare ecosystem."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "10 miles south — Schaumburg / Chicago",
        anchor_employers: ["Motorola Solutions (Chicago)", "Zebra Technologies (Lincolnshire)", "CDW (Vernon Hills)"],
        student_connection: "CDW — one of the largest technology products and services companies in the US — is headquartered in nearby Vernon Hills, and Zebra Technologies in Lincolnshire is a global leader in enterprise mobility and tracking technology."
      }
    ]
  },

  "60201": {
    zip: "60201",
    neighborhood: "Evanston",
    county: "Cook",
    clusters: [
      {
        name: "Academic Research & University Ecosystem",
        naics: 61,
        distance: "Local — Northwestern University",
        anchor_employers: ["Northwestern University", "Northwestern Medicine", "Rotary International (HQ)"],
        student_connection: "Northwestern University — consistently ranked among the top 10 universities in the US — is in Evanston. Its Kellogg School of Management, Feinberg School of Medicine, and Pritzker School of Law feed directly into Chicago's financial, healthcare, and legal sectors."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Northwestern Medicine (Evanston Hospital)", "Lurie Children's Hospital (Chicago, 15 miles)", "NorthShore University HealthSystem"],
        student_connection: "Northwestern Medicine's Evanston campus is a major academic medical center — and the proximity to Northwestern University's medical school creates a clinical research environment that rivals much larger institutions."
      },
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "15 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust", "William Blair", "Citadel", "Baird"],
        student_connection: "Northwestern's Kellogg School of Management is the primary feeder for Chicago investment banking and private equity — and the Loop is a 30-minute train ride south. Evanston residents commute into one of the largest financial markets in the US."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "15 miles south / local",
        anchor_employers: ["Morningstar (Chicago)", "Groupon (Chicago)", "various Northwestern spinoff companies"],
        student_connection: "Northwestern has produced dozens of technology company founders — and Evanston's tech startup scene, fed by the university's entrepreneurship programs, is one of the most active in the Midwest."
      },
      {
        name: "Arts, Media & Entertainment",
        naics: 71,
        distance: "Local / 15 miles south",
        anchor_employers: ["Rotary International (HQ, Evanston)", "Chicago Tribune / Tribune Publishing", "various theater and arts organizations"],
        student_connection: "Evanston has a thriving arts and media community rooted in Northwestern's theater, journalism, and communications programs — and Chicago's cultural institutions are a 30-minute train ride south."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // WEST SUBURBS — THE CORPORATE CORRIDOR
  // ─────────────────────────────────────────────────────────────

  "60521": {
    zip: "60521",
    neighborhood: "Hinsdale",
    county: "DuPage",
    clusters: [
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "20 miles east — Chicago Loop",
        anchor_employers: ["Morningstar (Chicago)", "William Blair", "Northern Trust", "BMO Harris Bank"],
        student_connection: "Hinsdale is one of the most financially connected communities in the Chicago suburbs — and the Loop's financial district is 20 miles east, accessible by Metra in under 30 minutes."
      },
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "Local",
        anchor_employers: ["AdventHealth Hinsdale", "Rush Copley Medical Center", "Advocate Good Samaritan Hospital (Downers Grove)"],
        student_connection: "AdventHealth Hinsdale is a major regional medical center within walking distance of central Hinsdale — and the broader DuPage County healthcare corridor employs physicians, nurses, administrators, and researchers across dozens of facilities."
      },
      {
        name: "Professional Services & Consulting",
        naics: 54,
        distance: "20 miles east — Chicago / Oak Brook",
        anchor_employers: ["McDonald's (Hinsdale / Oak Brook area)", "Advocate Health Care", "various consulting firms"],
        student_connection: "The Oak Brook corridor — 5 miles northwest — hosts significant corporate operations including McDonald's global supply chain and real estate divisions, and dozens of professional services and consulting firms."
      },
      {
        name: "Manufacturing & Industrial",
        naics: 33,
        distance: "10 miles — DuPage County corridor",
        anchor_employers: ["Molex (Lisle)", "Anixter International", "Culligan International"],
        student_connection: "DuPage County's manufacturing corridor — running along the I-88 research and technology park — is home to some of the most significant industrial and technology companies in the Midwest."
      },
      {
        name: "Trading & Financial Markets",
        naics: 52,
        distance: "20 miles east — Chicago Loop",
        anchor_employers: ["CME Group", "Cboe Global Markets", "Citadel", "Jane Street (Chicago office)"],
        student_connection: "The Chicago derivatives exchanges — CME Group and Cboe — are the largest in the world. Quantitative trading and financial engineering careers in Chicago are among the highest-compensated in any industry, and the commute from Hinsdale is under 30 minutes by Metra."
      }
    ]
  },

  "60523": {
    zip: "60523",
    neighborhood: "Oak Brook",
    county: "DuPage",
    clusters: [
      {
        name: "Food Service & Consumer Brands",
        naics: 72,
        distance: "Local — Oak Brook",
        anchor_employers: ["McDonald's (former global HQ — Oak Brook campus still operational)", "Inland Western (real estate)", "various restaurant chains with regional HQs"],
        student_connection: "McDonald's operated its global headquarters in Oak Brook for 50 years — and the restaurant, food service, and consumer brand ecosystem that developed around it makes Oak Brook one of the most significant food industry addresses outside of New York and Chicago's Loop."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "20 miles east — Chicago Loop",
        anchor_employers: ["JP Morgan Chase (regional operations)", "Bank of America", "PNC Financial"],
        student_connection: "Oak Brook's corporate community is deeply connected to Chicago's financial services sector — and the Metra train to the Loop makes financial careers in the city accessible from the western suburbs."
      },
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "5 miles — Hinsdale / Downers Grove",
        anchor_employers: ["Advocate Good Samaritan Hospital", "AdventHealth Hinsdale", "Rush Oak Brook"],
        student_connection: "The DuPage County healthcare corridor has one of the highest concentrations of hospital facilities per capita in the Chicago suburbs — and Rush Oak Brook is a major medical center 5 miles from Oak Brook's center."
      },
      {
        name: "Real Estate & Development",
        naics: 53,
        distance: "Local",
        anchor_employers: ["Inland Real Estate Group", "Hamilton Partners", "various commercial real estate firms"],
        student_connection: "Oak Brook Center is one of the most valuable retail real estate properties in the Midwest — and the commercial real estate and development industry centered here offers careers from property management and leasing to investment and development."
      },
      {
        name: "Technology & Enterprise Software",
        naics: 51,
        distance: "15 miles — Lisle / Warrenville",
        anchor_employers: ["Molex (Lisle)", "Navient (Willow Springs)", "various I-88 tech corridor companies"],
        student_connection: "The I-88 Research and Technology Corridor — running west from Oak Brook through Lisle and Naperville — is one of the largest concentrations of technology and engineering companies in the Midwest."
      }
    ]
  },

  "60540": {
    zip: "60540",
    neighborhood: "Naperville",
    county: "DuPage",
    clusters: [
      {
        name: "Technology & Enterprise Software",
        naics: 51,
        distance: "Local — I-88 Corridor",
        anchor_employers: ["Nicor Gas (Naperville)", "Alcatel-Lucent (Naperville)", "Anixter International"],
        student_connection: "Naperville anchors the I-88 Research and Technology Corridor — one of the largest concentrations of technology and engineering companies in the Midwest, stretching from Oak Brook through Naperville to Warrenville."
      },
      {
        name: "Financial Services & Insurance",
        naics: 52,
        distance: "Local / 30 miles east",
        anchor_employers: ["Edward Jones (regional)", "Northwestern Mutual", "Zurich North America (Schaumburg)"],
        student_connection: "DuPage County's financial services sector — insurance, wealth management, and banking — is one of the largest in the suburbs. Zurich North America's US headquarters in Schaumburg is 15 miles north."
      },
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Edward Hospital (Naperville)", "Linden Oaks Medical Group", "Advocate Health Care"],
        student_connection: "Edward Hospital is a major regional medical center in Naperville — and the DuPage County healthcare ecosystem employs thousands of clinical, administrative, and research professionals."
      },
      {
        name: "Manufacturing & Engineering",
        naics: 33,
        distance: "Local / 10 miles",
        anchor_employers: ["Molex (Lisle)", "Navistar (Lisle)", "various precision manufacturing companies"],
        student_connection: "The DuPage County manufacturing corridor employs engineers, supply chain specialists, and operations professionals across dozens of significant industrial companies."
      },
      {
        name: "Food Science & Consumer Products",
        naics: 31,
        distance: "15 miles north — Downers Grove / Chicago",
        anchor_employers: ["Kraft Heinz (Northfield operations)", "ConAgra (Chicago)", "Kellogg's (Chicago)"],
        student_connection: "Chicago is the food industry capital of America — more food and beverage companies are headquartered in the Chicago metro than any other city — and the R&D, marketing, and supply chain careers they create draw from Naperville regularly."
      }
    ]
  },

  "60515": {
    zip: "60515",
    neighborhood: "Downers Grove",
    county: "DuPage",
    clusters: [
      {
        name: "Technology & Enterprise Software",
        naics: 51,
        distance: "Local — I-88 Corridor",
        anchor_employers: ["Advocate Aurora Health (corporate HQ — Downers Grove)", "Dover Corporation (HQ)", "Nalco (Naperville)"],
        student_connection: "Dover Corporation — a Fortune 200 industrial conglomerate with businesses ranging from food equipment to aerospace — is headquartered in Downers Grove. The I-88 technology corridor runs directly through the community."
      },
      {
        name: "Healthcare Systems & Hospital Networks",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Advocate Good Samaritan Hospital (Downers Grove)", "Advocate Aurora Health (corporate HQ)", "Rush Copley Medical Center"],
        student_connection: "Advocate Aurora Health — one of the largest health systems in the US with more than 70,000 employees — has its corporate headquarters in Downers Grove. Healthcare administration, health technology, and clinical careers are uniquely accessible here."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "20 miles east — Chicago Loop / 5 miles — Oak Brook",
        anchor_employers: ["BMO Harris Bank", "JP Morgan Chase (regional)", "various wealth management firms"],
        student_connection: "Downers Grove's position between Hinsdale and Oak Brook places it at the center of DuPage County's financial services community — and the Chicago Loop is accessible via Metra in under 30 minutes."
      },
      {
        name: "Manufacturing & Industrial",
        naics: 33,
        distance: "Local / 10 miles",
        anchor_employers: ["Dover Corporation (HQ)", "Nalco Water (Naperville)", "various precision manufacturing firms"],
        student_connection: "Dover Corporation's portfolio of industrial businesses — pumps, compressors, food equipment, automotive tools — employs engineers and operations professionals across dozens of locations, with corporate leadership based here."
      },
      {
        name: "Legal & Professional Services",
        naics: 54,
        distance: "20 miles east — Chicago Loop",
        anchor_employers: ["Kirkland & Ellis", "Sidley Austin", "various corporate legal departments"],
        student_connection: "Chicago's legal market — anchored by Kirkland & Ellis, the highest-grossing law firm in the world — draws from the western suburbs. The corporate legal departments of the major employers headquartered in DuPage County are also significant local employers."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // CHICAGO CITY — LINCOLN PARK / LAKEVIEW / GOLD COAST
  // ─────────────────────────────────────────────────────────────

  "60614": {
    zip: "60614",
    neighborhood: "Lincoln Park",
    county: "Cook",
    clusters: [
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "5 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust (HQ)", "William Blair", "Citadel", "Baird"],
        student_connection: "Lincoln Park is the primary residential neighborhood for Chicago's financial services professionals — and the Loop is 5 miles south. Northern Trust, William Blair, and Citadel are all within commuting distance for residents who work in the most significant financial market in the Midwest."
      },
      {
        name: "Trading & Quantitative Finance",
        naics: 52,
        distance: "5 miles south — Chicago Loop",
        anchor_employers: ["Citadel (Chicago HQ)", "Jane Street (Chicago office)", "DRW Trading", "Jump Trading"],
        student_connection: "Chicago is the global capital of derivatives trading and quantitative finance — Citadel, DRW, and Jump Trading are all headquartered here and employ mathematicians, physicists, and computer scientists at starting salaries that rival investment banking."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "5 miles north / 5 miles south",
        anchor_employers: ["Northwestern Medicine (Chicago campus)", "Lurie Children's Hospital", "Rush University Medical Center"],
        student_connection: "Lincoln Park sits between two of Chicago's most significant medical centers — Northwestern Medicine to the north and Rush University Medical Center to the south. Lurie Children's Hospital — one of the top pediatric hospitals in the country — is 2 miles north."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "5 miles south — Fulton Market",
        anchor_employers: ["Google (Chicago HQ — Fulton Market)", "McDonald's (Chicago HQ)", "Salesforce (Chicago)"],
        student_connection: "Google's Chicago headquarters is in Fulton Market — 5 miles south — and the West Loop and Fulton Market districts have become the primary Chicago addresses for technology companies seeking proximity to the Loop without paying Loop rents."
      },
      {
        name: "Arts, Media & Publishing",
        naics: 51,
        distance: "Local / 5 miles south",
        anchor_employers: ["Tribune Publishing", "Encyclopaedia Britannica (Chicago)", "Second City (Chicago)"],
        student_connection: "Chicago has one of the richest arts and media ecosystems in the US — Second City, the comedy institution that launched Bill Murray, Tina Fey, and Stephen Colbert, is 2 miles north. The city's theater, journalism, and publishing industries are internationally recognized."
      }
    ]
  },

  "60657": {
    zip: "60657",
    neighborhood: "Lakeview / Wrigleyville",
    county: "Cook",
    clusters: [
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "5 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust", "Citadel", "BMO Harris Bank (Loop HQ)", "Baird"],
        student_connection: "Lakeview is minutes from the Loop on the L train — and Chicago's financial services sector is one of the largest in the US, encompassing investment banking, asset management, private equity, and the derivatives trading that Chicago invented."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "5 miles south — Fulton Market / West Loop",
        anchor_employers: ["Google (Fulton Market)", "Salesforce", "Groupon (Chicago HQ)"],
        student_connection: "Chicago's technology sector has exploded in the Fulton Market and West Loop districts — Google, Salesforce, and Motorola Solutions all have major Chicago offices within 5 miles."
      },
      {
        name: "Sports Business & Entertainment",
        naics: 71,
        distance: "Local — Wrigley Field",
        anchor_employers: ["Chicago Cubs (Wrigley Field HQ)", "Levy Restaurants", "various sports media companies"],
        student_connection: "Wrigley Field is in this ZIP code — and the Chicago Cubs organization, the sports media companies that surround it, and the broader sports business ecosystem offer careers in marketing, analytics, operations, and media that most students never think to pursue."
      },
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "3 miles — Streeterville / Lake Shore",
        anchor_employers: ["Northwestern Memorial Hospital", "Lurie Children's Hospital", "Ann & Robert H. Lurie Children's Hospital"],
        student_connection: "Northwestern Memorial — one of the top 10 hospitals in the US — is 3 miles south. Chicago's medical center corridor along Lake Shore Drive is among the most significant in the country."
      },
      {
        name: "Food, Hospitality & Restaurant Industry",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Levy Restaurants (Chicago HQ)", "Lettuce Entertain You Enterprises", "various Chicago restaurant groups"],
        student_connection: "Chicago has one of the most significant restaurant industries in the world — Levy Restaurants and Lettuce Entertain You are major multi-city restaurant groups headquartered here, and the culinary arts, food science, and hospitality management careers they support are nationally recognized."
      }
    ]
  },

  "60610": {
    zip: "60610",
    neighborhood: "Gold Coast / Near North",
    county: "Cook",
    clusters: [
      {
        name: "Finance, Private Equity & Wealth Management",
        naics: 52,
        distance: "Local / 2 miles south — Loop",
        anchor_employers: ["Northern Trust (HQ, 2 miles)", "Mesirow Financial", "Baird", "various family offices"],
        student_connection: "The Gold Coast has been the residential address of Chicago's financial elite for 150 years — and Northern Trust's headquarters, two blocks south, serves as the anchor of a wealth management and private banking ecosystem that is among the most significant in the US."
      },
      {
        name: "Trading & Quantitative Finance",
        naics: 52,
        distance: "2 miles south — Chicago Loop",
        anchor_employers: ["Citadel (Chicago HQ)", "CME Group", "Cboe Global Markets", "DRW Trading"],
        student_connection: "The CME Group — which operates the Chicago Mercantile Exchange, the largest derivatives exchange in the world — is 2 miles south. Chicago invented futures trading in the 1800s and the quantitative finance careers it spawned are the highest-compensated in any industry."
      },
      {
        name: "Legal Services",
        naics: 54,
        distance: "2 miles south — Chicago Loop",
        anchor_employers: ["Kirkland & Ellis (world's highest-grossing law firm)", "Sidley Austin", "Skadden Arps", "Baker McKenzie"],
        student_connection: "Kirkland & Ellis — the highest-grossing law firm in the world — is headquartered 2 miles south in the Loop. Chicago's legal market includes the global headquarters of multiple top-10 law firms, making it one of the most significant legal markets in the US."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "Local / 2 miles north",
        anchor_employers: ["Northwestern Memorial Hospital", "Lurie Children's Hospital", "Chicago rehabilitation institutes"],
        student_connection: "Northwestern Memorial Hospital — ranked among the top 10 hospitals in the US — is 2 miles north on Lake Shore Drive. The Gold Coast's proximity to Chicago's medical center corridor makes it one of the best-positioned neighborhoods for healthcare careers in the city."
      },
      {
        name: "Real Estate & Development",
        naics: 53,
        distance: "Local",
        anchor_employers: ["John Buck Company", "Equity Residential (Chicago HQ)", "various luxury development firms"],
        student_connection: "Equity Residential — one of the largest apartment REITs in the US — is headquartered in Chicago. The Gold Coast real estate market is among the most significant in the Midwest, and the development, investment, and property management careers surrounding it are distinctively accessible."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ADDITIONAL NORTH SHORE / LAKE COUNTY
  // ─────────────────────────────────────────────────────────────

  "60091": {
    zip: "60091",
    neighborhood: "Wilmette",
    county: "Cook",
    clusters: [
      {
        name: "Pharmaceutical & Biotech Research",
        naics: 54,
        distance: "20 miles north — North Chicago / Deerfield",
        anchor_employers: ["AbbVie", "Baxter International", "Abbott Laboratories"],
        student_connection: "The Lake County pharmaceutical corridor is 20 miles north — and Wilmette families have historically commuted to pharmaceutical careers at AbbVie, Baxter, and Abbott for generations."
      },
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "15 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust", "William Blair", "Citadel"],
        student_connection: "Wilmette sits on the Purple Line — and the Chicago Loop is a 30-minute train ride south. The financial services corridor that residents commute to is the third-largest in the US."
      },
      {
        name: "Academic Research & University",
        naics: 61,
        distance: "5 miles south — Evanston",
        anchor_employers: ["Northwestern University", "Northwestern Medicine"],
        student_connection: "Northwestern University is 5 miles south — and its proximity creates a distinctive research, academic, and intellectual ecosystem that extends into the Wilmette community."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "5 miles south — Evanston",
        anchor_employers: ["NorthShore University HealthSystem (Evanston)", "Northwestern Medicine", "Advocate Health Care"],
        student_connection: "NorthShore's flagship Evanston Hospital is 5 miles south — and the healthcare employment corridor running from Evanston through Wilmette to Glenbrook is one of the most significant on the North Shore."
      },
      {
        name: "Legal & Professional Services",
        naics: 54,
        distance: "15 miles south — Chicago Loop",
        anchor_employers: ["Kirkland & Ellis", "Sidley Austin", "various corporate legal departments"],
        student_connection: "Chicago's legal market is globally significant — and Wilmette has historically been a primary residential community for Chicago BigLaw attorneys and corporate counsel."
      }
    ]
  },

  "60048": {
    zip: "60048",
    neighborhood: "Libertyville",
    county: "Lake",
    clusters: [
      {
        name: "Pharmaceutical & Medical Devices",
        naics: 54,
        distance: "10 miles east — North Chicago / Waukegan",
        anchor_employers: ["AbbVie", "Abbott Laboratories", "Medline Industries (Northfield, 20 miles)"],
        student_connection: "Libertyville sits in the heart of Lake County's pharmaceutical corridor — AbbVie and Abbott are 10 miles east, and the cluster of life sciences companies they anchor is one of the most significant in the Midwest."
      },
      {
        name: "Manufacturing & Industrial",
        naics: 33,
        distance: "Local / 10 miles",
        anchor_employers: ["IDEX Corporation (Lake Forest)", "Rexnord (Milwaukee corridor)", "various precision manufacturers"],
        student_connection: "IDEX Corporation — a Fortune 500 manufacturer of pumps, flow measurement, and fire suppression systems — is headquartered in Lake Forest 10 miles east. Lake County's industrial base is more significant than its residential character suggests."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "35 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust", "William Blair", "various community and regional banks"],
        student_connection: "The Chicago Loop is 35 miles south — and Libertyville's Lake County location places it at the northern edge of the commuting zone for Chicago financial services careers."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "Local / 10 miles",
        anchor_employers: ["Condell Medical Center (Libertyville)", "Northwestern Medicine Lake Forest", "Advocate Health Care"],
        student_connection: "Condell Medical Center is right in Libertyville — a major regional hospital serving northwestern Lake County — and the NorthShore and Northwestern Medicine systems operate facilities throughout the area."
      },
      {
        name: "Retail & Consumer Brands",
        naics: 44,
        distance: "10 miles — Deerfield",
        anchor_employers: ["Walgreens Boots Alliance (Deerfield HQ)", "Kraft Heinz (regional)", "various CPG companies"],
        student_connection: "The CPG and retail corridor anchored by Walgreens in Deerfield is 10 miles southeast — and the food, consumer goods, and retail careers it supports draw from across Lake County."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ADDITIONAL WEST SUBURBS
  // ─────────────────────────────────────────────────────────────

  "60137": {
    zip: "60137",
    neighborhood: "Glen Ellyn",
    county: "DuPage",
    clusters: [
      {
        name: "Technology & Enterprise Software",
        naics: 51,
        distance: "10 miles — Lisle / Warrenville / Naperville",
        anchor_employers: ["Molex (Lisle)", "Nalco Water (Naperville)", "Lucent / Nokia (Naperville)"],
        student_connection: "Glen Ellyn sits at the center of DuPage County's technology corridor — the I-88 Research and Technology Park running east-west through the county is one of the largest concentrations of technology and engineering companies in the Midwest."
      },
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "5 miles — Wheaton / Winfield",
        anchor_employers: ["Northwestern Medicine Central DuPage Hospital (Winfield)", "Advocate Good Samaritan", "DuPage Medical Group"],
        student_connection: "Northwestern Medicine's Central DuPage Hospital in Winfield is one of the largest hospitals in the Chicago suburbs — 5 miles from Glen Ellyn — and DuPage County's healthcare corridor is one of the most significant outside the city."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "25 miles east — Chicago Loop / 5 miles — Oak Brook",
        anchor_employers: ["MB Financial (regional)", "Inland Western", "various wealth management firms"],
        student_connection: "Glen Ellyn's position in DuPage County places it near Oak Brook's corporate corridor and the Metra line to the Chicago Loop — the financial services career options accessible from here range from community banking to Chicago investment management."
      },
      {
        name: "Education & Research",
        naics: 61,
        distance: "Local",
        anchor_employers: ["College of DuPage (Glen Ellyn HQ)", "Wheaton College (Wheaton, 5 miles)", "Benedictine University"],
        student_connection: "College of DuPage is one of the largest community colleges in the US — headquartered in Glen Ellyn — and Wheaton College is 5 miles west. The education and research sector in DuPage County is a significant local employer."
      },
      {
        name: "Manufacturing & Industrial",
        naics: 33,
        distance: "10 miles",
        anchor_employers: ["Molex (Lisle)", "Coilcraft (Cary)", "various precision manufacturers"],
        student_connection: "DuPage County's manufacturing base — largely invisible to residents focused on the suburban landscape — employs engineers, quality specialists, and operations professionals across dozens of significant companies."
      }
    ]
  },

  "60532": {
    zip: "60532",
    neighborhood: "Lisle",
    county: "DuPage",
    clusters: [
      {
        name: "Technology & Electronics Manufacturing",
        naics: 33,
        distance: "Local — Lisle / Warrenville",
        anchor_employers: ["Molex (global HQ — Lisle)", "Navistar International (Lisle)", "various I-88 corridor companies"],
        student_connection: "Molex — one of the largest electronic connectors manufacturers in the world, owned by Koch Industries — is headquartered in Lisle. The company's products are inside virtually every electronic device on earth, and its engineering and R&D campus is a significant local employer."
      },
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "5 miles — Naperville / Downers Grove",
        anchor_employers: ["Edward Hospital (Naperville)", "Advocate Good Samaritan (Downers Grove)", "Rush Copley Medical Center"],
        student_connection: "Three major hospital systems operate within 10 miles of Lisle — and DuPage County's healthcare corridor is one of the most significant in the Chicago suburbs."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "20 miles east — Chicago Loop",
        anchor_employers: ["JP Morgan Chase (regional operations)", "Northern Trust", "various community banks"],
        student_connection: "Lisle is on the Burlington Northern Santa Fe Metra line — and the Chicago Loop is 30 minutes east. The financial services careers accessible from this commute are among the most significant in the US."
      },
      {
        name: "Manufacturing & Automotive",
        naics: 33,
        distance: "Local / 10 miles",
        anchor_employers: ["Navistar International (Lisle HQ)", "various Tier 1 automotive suppliers"],
        student_connection: "Navistar — which makes International trucks and school buses — has its corporate headquarters in Lisle. The commercial vehicle and industrial manufacturing sector in the I-88 corridor is one of the most significant in the Midwest."
      },
      {
        name: "Education & Research",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Benedictine University (Lisle HQ)", "National Accelerator Laboratory (Batavia, 10 miles)"],
        student_connection: "Fermilab — the US Department of Energy's particle physics laboratory in Batavia — is 10 miles west of Lisle. The facility that discovered the top quark and advances the frontier of particle physics employs physicists, engineers, and computer scientists at one of the most extraordinary scientific institutions in the country."
      }
    ]
  },

  "60187": {
    zip: "60187",
    neighborhood: "Wheaton",
    county: "DuPage",
    clusters: [
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "5 miles east — Winfield",
        anchor_employers: ["Northwestern Medicine Central DuPage Hospital (Winfield)", "Advocate Good Samaritan", "DuPage Medical Group"],
        student_connection: "Northwestern Medicine Central DuPage Hospital is 5 miles east in Winfield — one of the largest hospitals in the Chicago suburbs and a major regional employer of physicians, nurses, and healthcare administrators."
      },
      {
        name: "Technology & Enterprise Software",
        naics: 51,
        distance: "10 miles east — Naperville / Lisle",
        anchor_employers: ["Molex (Lisle)", "Nalco Water (Naperville)", "various I-88 corridor firms"],
        student_connection: "The I-88 technology corridor is 10 miles east — and Wheaton's DuPage County location places it within the employment zone of one of the largest technology and engineering corridors in the Midwest."
      },
      {
        name: "Education & Nonprofit",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Wheaton College", "Illinois Institute of Technology (satellite)", "various nonprofit organizations"],
        student_connection: "Wheaton College is a nationally recognized liberal arts institution — and DuPage County's nonprofit sector, anchored by major healthcare systems and educational institutions, offers distinctive career pathways in administration, development, and program management."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "25 miles east — Chicago Loop",
        anchor_employers: ["various community banks and credit unions", "Edward Jones (regional offices)", "Northwestern Mutual"],
        student_connection: "Wheaton's position on the Union Pacific-West Metra line puts the Chicago Loop 45 minutes east — and the financial services careers accessible there range from community banking and wealth management to Loop investment banking and trading."
      },
      {
        name: "Manufacturing & Industrial",
        naics: 33,
        distance: "10 miles",
        anchor_employers: ["Molex (Lisle)", "Coilcraft (Cary)", "Chamberlain Group (Elmhurst)"],
        student_connection: "Chamberlain Group — which makes LiftMaster garage door openers and myQ smart home technology — is headquartered nearby in Elmhurst. The smart home and connected devices industry that overlaps with Chicago's industrial base creates engineering and technology careers that most students from DuPage County don't know exist."
      }
    ]
  },

  "60044": {
    zip: "60044",
    neighborhood: "Lake Bluff",
    county: "Lake",
    clusters: [
      {
        name: "Pharmaceutical & Biotech Research",
        naics: 54,
        distance: "5 miles south — North Chicago",
        anchor_employers: ["AbbVie (North Chicago campus)", "Abbott Laboratories (Abbott Park)", "Takeda Pharmaceuticals"],
        student_connection: "Lake Bluff is adjacent to North Chicago — where AbbVie's global headquarters campus employs more than 8,000 scientists, researchers, and business professionals. The pharmaceutical industry visible from Lake Bluff is among the most significant anywhere in the world."
      },
      {
        name: "Medical Devices & Diagnostics",
        naics: 33,
        distance: "8 miles south — Abbott Park / Deerfield",
        anchor_employers: ["Abbott Diagnostics", "Baxter International", "various medical device companies"],
        student_connection: "Abbott Laboratories — which invented the HIV test, produces the most widely used glucose monitor in the world, and makes FreeStyle Libre — operates one of its largest campuses in Abbott Park, 8 miles south of Lake Bluff."
      },
      {
        name: "Manufacturing & Naval Systems",
        naics: 33,
        distance: "5 miles south — North Chicago / Great Lakes",
        anchor_employers: ["Naval Station Great Lakes (Waukegan)", "various defense contractors"],
        student_connection: "Naval Station Great Lakes — the largest naval training station in the US, which has trained every Navy recruit since 1911 — is 5 miles south. The defense and naval technology careers surrounding this institution are uniquely accessible from Lake County."
      },
      {
        name: "Finance & Wealth Management",
        naics: 52,
        distance: "35 miles south — Chicago Loop",
        anchor_employers: ["Northern Trust", "William Blair", "various private wealth offices"],
        student_connection: "Lake Bluff's affluent Lake County community is deeply connected to Chicago's financial services sector — and the Loop's investment banks, asset managers, and private equity firms are accessible via the Union Pacific-North Metra line."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "8 miles — Lake Forest / Waukegan",
        anchor_employers: ["Northwestern Medicine Lake Forest Hospital", "Vista Medical Center (Waukegan)", "Advocate Condell Medical Center"],
        student_connection: "Northwestern Medicine Lake Forest Hospital is 8 miles south — and the healthcare employment corridor running through northern Lake County is one of the most significant in the Chicago suburbs."
      }
    ]
  },

  "60096": {
    zip: "60096",
    neighborhood: "Winthrop Harbor",
    county: "Lake",
    clusters: [
      {
        name: "Pharmaceutical & Biotech Research",
        naics: 54,
        distance: "15 miles south — North Chicago",
        anchor_employers: ["AbbVie", "Abbott Laboratories", "Takeda Pharmaceuticals (Deerfield)"],
        student_connection: "Lake County's pharmaceutical corridor — the densest in the Midwest — is 15 miles south. Winthrop Harbor's position at the northern end of the county puts it within the commuting zone of one of the most significant life sciences employment clusters in the US."
      },
      {
        name: "Energy & Utilities",
        naics: 22,
        distance: "Local — Winthrop Harbor",
        anchor_employers: ["Exelon / ComEd (Zion Nuclear Power Station site)", "Midwest Generation", "various energy companies"],
        student_connection: "The former Zion Nuclear Power Station site — now being decommissioned by Exelon — is adjacent to Winthrop Harbor. Energy careers in nuclear decommissioning, utility operations, and clean energy transition are uniquely accessible in this corridor."
      },
      {
        name: "Manufacturing & Industrial",
        naics: 33,
        distance: "10 miles south — Waukegan / North Chicago",
        anchor_employers: ["various Waukegan industrial companies", "Uline (Pleasant Prairie, WI, 5 miles)", "Amazon (Kenosha, 10 miles)"],
        student_connection: "The Waukegan and Kenosha manufacturing corridor — running along I-94 north of the Illinois-Wisconsin border — is one of the largest industrial employment zones in the Great Lakes region."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "15 miles south",
        anchor_employers: ["Vista Medical Center (Waukegan)", "Northwestern Medicine Lake Forest", "Advocate Condell (Libertyville)"],
        student_connection: "Vista Medical Center in Waukegan is the primary hospital serving northern Lake County — and the NorthShore and Northwestern Medicine systems extend into this area."
      }
    ]
  }

};

function getChicagoGeoIntelligence(zip) {
  if (!zip || zip.length < 5) return null;
  if (GEO_INDUSTRY_DB_CHICAGO[zip]) return GEO_INDUSTRY_DB_CHICAGO[zip];
  const prefix3 = zip.slice(0, 3);
  const match3 = Object.values(GEO_INDUSTRY_DB_CHICAGO).find(e => e.zip.startsWith(prefix3));
  if (match3) return match3;
  const prefix2 = zip.slice(0, 2);
  const match2 = Object.values(GEO_INDUSTRY_DB_CHICAGO).find(e => e.zip.startsWith(prefix2));
  if (match2) return match2;
  return null;
}

if (typeof module !== 'undefined') module.exports = {
  GEO_INDUSTRY_DB_CHICAGO,
  getChicagoGeoIntelligence
};
