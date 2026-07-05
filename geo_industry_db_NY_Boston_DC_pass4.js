/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 4: New York Metro + Boston + DC Corridor — 20 ZIP codes
 * Version: 1.0 — June 16, 2026
 */

const GEO_INDUSTRY_DB_EAST = {

  // ─────────────────────────────────────────────────────────────
  // CONNECTICUT — THE HEDGE FUND CORRIDOR
  // ─────────────────────────────────────────────────────────────

  "06830": {
    zip: "06830",
    neighborhood: "Greenwich",
    county: "Fairfield",
    clusters: [
      {
        name: "Hedge Funds & Quantitative Finance",
        naics: 52,
        distance: "Local — Greenwich",
        anchor_employers: ["AQR Capital Management (Greenwich HQ)", "Viking Global Investors", "Tudor Investment Corp", "Point72 Asset Management"],
        student_connection: "Greenwich is the hedge fund capital of the world — AQR Capital Management, Viking Global, and Tudor Investment are all headquartered here. The quantitative research, portfolio management, and risk analysis careers they create draw mathematicians, computer scientists, and economists at starting compensation that rivals investment banking."
      },
      {
        name: "Private Equity & Investment Management",
        naics: 52,
        distance: "Local / 5 miles — Stamford",
        anchor_employers: ["Lone Pine Capital", "Greenlight Capital", "various family offices"],
        student_connection: "Beyond hedge funds, Greenwich houses dozens of private equity firms and multi-family offices managing billions in assets — the investment management ecosystem here is the densest per square mile of any geography outside Manhattan."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "5 miles — Stamford",
        anchor_employers: ["UBS (Stamford trading floor)", "Royal Bank of Scotland Americas", "Interactive Brokers (Greenwich)"],
        student_connection: "Stamford hosts one of the largest bank trading floors in the world at UBS — and Interactive Brokers, the electronic trading platform that processes more trades than any other retail broker, is headquartered in Greenwich."
      },
      {
        name: "Technology & Financial Technology",
        naics: 51,
        distance: "5 miles / 45 minutes — New York City",
        anchor_employers: ["various fintech startups", "Two Sigma (NYC office)", "Goldman Sachs (Greenwich satellite)"],
        student_connection: "Greenwich's proximity to both Wall Street and the Connecticut technology corridor creates a unique intersection of finance and technology careers — and New York City is 45 minutes by train."
      },
      {
        name: "Media & Publishing",
        naics: 51,
        distance: "Local / 45 minutes — NYC",
        anchor_employers: ["Conde Nast (Greenwich residences)", "various media executives", "Hearst (Greenwich residences)"],
        student_connection: "Greenwich has historically been the residential address of New York media leadership — and the 45-minute train to Grand Central puts the entire New York media, advertising, and publishing industry within commuting range."
      }
    ]
  },

  "06880": {
    zip: "06880",
    neighborhood: "Westport",
    county: "Fairfield",
    clusters: [
      {
        name: "Hedge Funds & Investment Management",
        naics: 52,
        distance: "Local — Westport",
        anchor_employers: ["Bridgewater Associates (global HQ — Westport)", "Graham Capital Management", "Lone Pine Capital (Greenwich, 15 miles)"],
        student_connection: "Bridgewater Associates — the largest hedge fund in the world with over $90 billion in assets under management — is headquartered in Westport. Founded by Ray Dalio, it is one of the most intellectually demanding and distinctive workplaces in finance anywhere."
      },
      {
        name: "Finance & Wealth Management",
        naics: 52,
        distance: "Local / 15 miles — Greenwich / Stamford",
        anchor_employers: ["various wealth management firms", "Neuberger Berman (Westport office)", "Morgan Stanley Wealth Management"],
        student_connection: "Fairfield County's wealth management corridor runs from Greenwich through Westport — and the advisory firms, family offices, and private banks serving this community represent some of the most significant private wealth management practices in the US."
      },
      {
        name: "Media & Advertising",
        naics: 51,
        distance: "Local / 60 minutes — NYC",
        anchor_employers: ["various advertising executives (residential)", "Condé Nast (commuter base)", "media production companies"],
        student_connection: "Westport has been a creative community for advertising executives, writers, and media professionals for 70 years — and New York's advertising, publishing, and media industries are a 60-minute Metro-North ride east."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "15 miles — Stamford / NYC",
        anchor_employers: ["Gartner (Stamford HQ)", "Synchrony Financial (Stamford)", "Charter Communications (Stamford)"],
        student_connection: "Gartner — the world's leading technology research and advisory company — is headquartered in Stamford, 15 miles east. The technology research, consulting, and advisory careers it represents are uniquely accessible from Fairfield County."
      },
      {
        name: "Healthcare & Life Sciences",
        naics: 62,
        distance: "10 miles — Norwalk / Stamford",
        anchor_employers: ["Norwalk Hospital", "Stamford Health", "various biotech startups"],
        student_connection: "Stamford's healthcare corridor is 10 miles east — and the intersection of Connecticut's pharmaceutical industry (Pfizer is 20 miles north in New Haven) with its financial services sector creates distinctive opportunities in healthcare investment and biotech."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // WESTCHESTER COUNTY — NEW YORK SUBURBS
  // ─────────────────────────────────────────────────────────────

  "10583": {
    zip: "10583",
    neighborhood: "Scarsdale",
    county: "Westchester",
    clusters: [
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["Goldman Sachs", "JPMorgan Chase", "Morgan Stanley", "BlackRock"],
        student_connection: "Scarsdale is 30 minutes from Grand Central on Metro-North — and Wall Street's investment banks, asset managers, and private equity firms are among the most significant employers in the world. More Scarsdale residents work in finance than any other single sector."
      },
      {
        name: "Law & Legal Services",
        naics: 54,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["Sullivan & Cromwell", "Cravath Swaine & Moore", "Davis Polk & Wardwell", "Wachtell Lipton"],
        student_connection: "Manhattan's BigLaw firms — the most prestigious and highest-paying law firms in the world — are 30 minutes away. Scarsdale has historically been one of the primary residential communities for Wall Street attorneys and corporate counsel."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "10 miles — White Plains / NYC",
        anchor_employers: ["White Plains Hospital", "NewYork-Presbyterian Lawrence Hospital", "Memorial Sloan Kettering (NYC)"],
        student_connection: "Memorial Sloan Kettering — the world's oldest and largest private cancer center — is in Manhattan, 30 minutes south. Westchester's healthcare corridor includes multiple hospital systems and the broader NYC medical ecosystem."
      },
      {
        name: "Media & Advertising",
        naics: 51,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["NBCUniversal (30 Rock)", "Condé Nast", "Hearst Communications", "various advertising agencies"],
        student_connection: "New York is the global capital of media, advertising, and publishing — and Scarsdale's Metro-North access puts the entire Manhattan creative industry within daily commuting distance."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "30 minutes — NYC / local",
        anchor_employers: ["IBM (Armonk, 10 miles)", "MasterCard (Purchase, 8 miles)", "various tech companies"],
        student_connection: "IBM's global headquarters is in Armonk — 10 miles north — and Mastercard's global technology campus is in Purchase, 8 miles north. Westchester County has a significant technology employment base that most families don't associate with the suburbs."
      }
    ]
  },

  "10514": {
    zip: "10514",
    neighborhood: "Chappaqua / Bedford",
    county: "Westchester",
    clusters: [
      {
        name: "Finance & Private Equity",
        naics: 52,
        distance: "45 minutes — Manhattan",
        anchor_employers: ["various hedge funds & family offices", "Goldman Sachs (Manhattan)", "Blackstone (Manhattan)"],
        student_connection: "Northern Westchester is home to some of the most senior figures in New York finance — and Manhattan's financial district is 45 minutes south by Metro-North. Private equity, hedge fund, and wealth management careers are the dominant professional identities of this community."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "10 miles — Armonk / Purchase",
        anchor_employers: ["IBM (Armonk HQ)", "Mastercard (Purchase)", "SAP (Newtown Square, regional)"],
        student_connection: "IBM's global headquarters — the company that invented the personal computer, the hard drive, and pioneered enterprise computing — is 10 miles south in Armonk. The research and technology careers at IBM's campus represent one of the most extraordinary scientific workplaces in the country."
      },
      {
        name: "Healthcare & Life Sciences",
        naics: 62,
        distance: "15 miles / 45 minutes — NYC",
        anchor_employers: ["NewYork-Presbyterian (NYC)", "Memorial Sloan Kettering", "Regeneron Pharmaceuticals (Tarrytown, 20 miles)"],
        student_connection: "Regeneron Pharmaceuticals — which developed the COVID-19 antibody treatment and the most effective eczema drug ever made — is headquartered in Tarrytown, 20 miles south. The Hudson Valley biotech corridor is one of the most significant in the northeast."
      },
      {
        name: "Legal & Professional Services",
        naics: 54,
        distance: "45 minutes — Manhattan",
        anchor_employers: ["Cravath Swaine & Moore", "Sullivan & Cromwell", "Davis Polk & Wardwell"],
        student_connection: "Manhattan's elite law firms are 45 minutes south — and Northern Westchester is one of the primary residential communities for senior partners at the most prestigious law firms in the US."
      },
      {
        name: "Media & Communications",
        naics: 51,
        distance: "45 minutes — Manhattan",
        anchor_employers: ["NBCUniversal", "Condé Nast", "The New York Times", "various media companies"],
        student_connection: "New York is the global center of media, journalism, and publishing — and the Metro-North line from Chappaqua and Bedford puts the entire Manhattan creative economy within daily commuting distance."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MANHATTAN / NYC
  // ─────────────────────────────────────────────────────────────

  "10021": {
    zip: "10021",
    neighborhood: "Upper East Side",
    county: "New York",
    clusters: [
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "Local / 3 miles south — Midtown / Wall Street",
        anchor_employers: ["JPMorgan Chase (Park Ave HQ)", "Goldman Sachs (One Liberty Plaza)", "BlackRock (Park Ave)", "Blackstone (Park Ave)"],
        student_connection: "JPMorgan Chase and BlackRock's global headquarters are on Park Avenue — walking distance from the Upper East Side. New York is the financial capital of the world, and the investment banks, asset managers, and private equity firms concentrated in Midtown and Downtown represent the most significant financial employment in history."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Memorial Sloan Kettering Cancer Center", "NewYork-Presbyterian / Weill Cornell", "Hospital for Special Surgery"],
        student_connection: "The Upper East Side Medical Corridor — running along York Avenue — is one of the most significant concentrations of medical research and clinical care in the world. Memorial Sloan Kettering, NewYork-Presbyterian/Weill Cornell, and Hospital for Special Surgery are all within walking distance."
      },
      {
        name: "Arts, Culture & Museums",
        naics: 71,
        distance: "Local — Museum Mile",
        anchor_employers: ["Metropolitan Museum of Art", "Guggenheim Museum", "Frick Collection", "Jewish Museum"],
        student_connection: "Museum Mile runs along Fifth Avenue — the Metropolitan Museum of Art, the Guggenheim, and seven other world-class institutions are within walking distance. The arts administration, curatorial, conservation, and museum education careers they support are uniquely concentrated on the Upper East Side."
      },
      {
        name: "Law & Legal Services",
        naics: 54,
        distance: "3 miles south — Midtown",
        anchor_employers: ["Sullivan & Cromwell", "Cravath Swaine & Moore", "Wachtell Lipton Rosen & Katz", "Davis Polk"],
        student_connection: "The world's most prestigious law firms are clustered in Midtown, 3 miles south — and the Upper East Side has historically been the primary residential address for the senior partners who lead them."
      },
      {
        name: "Fashion & Luxury Goods",
        naics: 44,
        distance: "Local / 2 miles west — Fifth Avenue",
        anchor_employers: ["Ralph Lauren (Madison Ave HQ)", "LVMH Americas", "Chanel", "various luxury houses"],
        student_connection: "Ralph Lauren's headquarters is on Madison Avenue — walking distance from the Upper East Side — and the global luxury fashion industry is concentrated on Fifth and Madison Avenues. Design, brand management, buying, and marketing careers in luxury are more accessible from the Upper East Side than anywhere else in the world."
      }
    ]
  },

  "10024": {
    zip: "10024",
    neighborhood: "Upper West Side",
    county: "New York",
    clusters: [
      {
        name: "Media, Publishing & Entertainment",
        naics: 51,
        distance: "3 miles south — Midtown",
        anchor_employers: ["NBCUniversal (30 Rockefeller)", "The New York Times (Midtown)", "Sony Music Entertainment", "various publishing houses"],
        student_connection: "The Upper West Side has been the residential heart of New York's literary, musical, and media community for a century. The publishing houses, music labels, and broadcast networks concentrated in Midtown are a short subway ride south."
      },
      {
        name: "Arts, Culture & Performing Arts",
        naics: 71,
        distance: "Local — Lincoln Center",
        anchor_employers: ["Lincoln Center for the Performing Arts", "New York Philharmonic", "Metropolitan Opera", "Juilliard School"],
        student_connection: "Lincoln Center — the world's largest performing arts complex — is on the Upper West Side. The New York Philharmonic, Metropolitan Opera, American Ballet Theatre, and Juilliard School are all here. The performing arts, arts administration, and music industry careers concentrated at Lincoln Center are uniquely accessible."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "Local — Columbia Medical Center",
        anchor_employers: ["NewYork-Presbyterian / Columbia University Irving Medical Center", "Columbia University", "various biomedical research institutes"],
        student_connection: "Columbia University Irving Medical Center — one of the top academic medical centers in the world — is on the northern Upper West Side. The research, clinical, and public health careers it supports are among the most significant in medicine."
      },
      {
        name: "Finance & Asset Management",
        naics: 52,
        distance: "3 miles south — Midtown / Downtown",
        anchor_employers: ["Goldman Sachs", "JPMorgan", "BlackRock", "various hedge funds"],
        student_connection: "The Upper West Side's professional community is deeply connected to Manhattan finance — and the subway lines running south put every major bank, hedge fund, and asset manager in Midtown and Downtown within 20 minutes."
      },
      {
        name: "Education & Academic Research",
        naics: 61,
        distance: "Local — Columbia University",
        anchor_employers: ["Columbia University", "Barnard College", "Teachers College"],
        student_connection: "Columbia University — one of the Ivy League's most research-intensive institutions — is at the northern edge of the Upper West Side. Its business, law, medical, and journalism schools feed directly into New York's professional economy."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // BOSTON SUBURBS
  // ─────────────────────────────────────────────────────────────

  "02481": {
    zip: "02481",
    neighborhood: "Wellesley",
    county: "Norfolk",
    clusters: [
      {
        name: "Biotech & Pharmaceutical Research",
        naics: 54,
        distance: "15 miles east — Kendall Square / Cambridge",
        anchor_employers: ["Moderna (Cambridge)", "Biogen (Cambridge)", "Vertex Pharmaceuticals (Boston)", "Pfizer (Cambridge)"],
        student_connection: "Kendall Square in Cambridge — 15 miles east — is the most biotech-dense square mile on earth. Moderna, Biogen, Vertex, and hundreds of life sciences companies are concentrated here, and the corridor is the global capital of drug discovery and development."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "20 miles east — Boston Financial District",
        anchor_employers: ["Fidelity Investments (Boston HQ)", "State Street Corporation (Boston HQ)", "Wellington Management"],
        student_connection: "Boston is one of the largest asset management centers in the world — Fidelity Investments and State Street Corporation are both headquartered here, collectively managing trillions in assets. The investment management, mutual fund, and institutional finance careers they create are uniquely accessible from Wellesley."
      },
      {
        name: "Academic Research & University",
        naics: 61,
        distance: "Local / 15 miles east",
        anchor_employers: ["Wellesley College (local)", "MIT (Cambridge, 15 miles)", "Harvard University (Cambridge)"],
        student_connection: "Wellesley College is one of the most academically distinguished liberal arts colleges in the world — and MIT and Harvard are 15 miles east. The Boston academic ecosystem feeds directly into the biotech, technology, and financial services industries concentrated in the city."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "15 miles east — Kendall Square / Boston",
        anchor_employers: ["Google (Cambridge office)", "Microsoft (Cambridge)", "HubSpot (Cambridge HQ)", "various MIT spinoffs"],
        student_connection: "Cambridge's technology sector — anchored by MIT spinoffs and major tech company research offices — is 15 miles east. HubSpot, the marketing software company, is headquartered in Cambridge and exemplifies the Boston tech ecosystem that has emerged from the university corridor."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "20 miles east — Boston Medical District",
        anchor_employers: ["Massachusetts General Hospital", "Brigham and Women's Hospital", "Boston Children's Hospital"],
        student_connection: "Boston's medical mile — Longwood Medical Area — is 20 miles east and is one of the greatest concentrations of clinical care and biomedical research in the world. Massachusetts General, Brigham and Women's, and Boston Children's are collectively among the most cited research institutions in medicine."
      }
    ]
  },

  "02492": {
    zip: "02492",
    neighborhood: "Needham",
    county: "Norfolk",
    clusters: [
      {
        name: "Biotech & Pharmaceutical Research",
        naics: 54,
        distance: "12 miles east — Kendall Square",
        anchor_employers: ["Moderna (Cambridge)", "Biogen", "Vertex Pharmaceuticals", "numerous biotech startups"],
        student_connection: "Needham is on the direct commute line to Kendall Square — the most biotech-dense square mile on earth. The Route 128 technology corridor that runs through Needham's backyard has been the backbone of the Boston biotech ecosystem for 40 years."
      },
      {
        name: "Technology & Software — Route 128",
        naics: 51,
        distance: "Local — Route 128 corridor",
        anchor_employers: ["TripAdvisor (Needham HQ)", "Thermo Fisher Scientific (Waltham)", "Analog Devices (Wilmington)"],
        student_connection: "TripAdvisor's global headquarters is right here in Needham — and the Route 128 technology corridor that runs adjacent to the town has housed technology companies from Digital Equipment Corporation to Oracle for 50 years."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "15 miles east — Boston",
        anchor_employers: ["Fidelity Investments", "State Street Corporation", "Wellington Management"],
        student_connection: "Fidelity Investments — which manages more mutual fund assets than any other company in the world — is 15 miles east in Boston. The investment management careers accessible from Needham are among the most significant in the industry."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "12 miles east — Longwood Medical Area",
        anchor_employers: ["Beth Israel Deaconess Medical Center", "Dana-Farber Cancer Institute", "Brigham and Women's Hospital"],
        student_connection: "The Longwood Medical Area is 12 miles east — one of the greatest concentrations of medical research and clinical care in the world, anchored by Harvard Medical School and five of its affiliated teaching hospitals."
      },
      {
        name: "Education & Academic Research",
        naics: 61,
        distance: "15 miles east",
        anchor_employers: ["MIT", "Harvard University", "Boston University"],
        student_connection: "MIT and Harvard are 15 miles east — and their proximity to Needham creates a distinctive ecosystem of research, innovation, and entrepreneurship that influences the career possibilities of every student from this corridor."
      }
    ]
  },

  "02467": {
    zip: "02467",
    neighborhood: "Chestnut Hill",
    county: "Norfolk",
    clusters: [
      {
        name: "Academic Research & University",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Boston College (Chestnut Hill HQ)", "Boston University (nearby)", "Harvard University (8 miles)"],
        student_connection: "Boston College is in Chestnut Hill — and the Boston academic ecosystem surrounding it includes Harvard, MIT, Tufts, and Northeastern within a 10-mile radius. No metro area in the US has a higher concentration of research universities per square mile."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "8 miles east — Boston Financial District",
        anchor_employers: ["Fidelity Investments", "State Street Corporation", "GMO (Grantham Mayo Van Otterloo)"],
        student_connection: "GMO — the asset management firm co-founded by Jeremy Grantham, one of the most respected investors in the world — is headquartered in Boston, 8 miles east. The Boston investment management ecosystem is the second-largest in the US."
      },
      {
        name: "Biotech & Life Sciences",
        naics: 54,
        distance: "10 miles east — Kendall Square",
        anchor_employers: ["Moderna", "Biogen", "Vertex Pharmaceuticals", "Takeda (Boston)"],
        student_connection: "Kendall Square is 10 miles east — and Chestnut Hill's position near both Boston College and the Route 128 corridor places it within reach of the most significant biotech job market in the world."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "5 miles east — Longwood",
        anchor_employers: ["Brigham and Women's Hospital", "Dana-Farber Cancer Institute", "Boston Children's Hospital"],
        student_connection: "The Longwood Medical Area — the largest concentration of medical research funding in the world — is 5 miles east. Brigham and Women's Hospital and Dana-Farber Cancer Institute are both Harvard Medical School affiliates within easy reach."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "10 miles",
        anchor_employers: ["HubSpot", "Wayfair (Boston HQ)", "various MIT / Harvard spinoffs"],
        student_connection: "Wayfair — which built the largest online home goods retailer in the US — is headquartered in Boston, 10 miles east. The Boston technology sector is one of the fastest-growing in the country."
      }
    ]
  },

  "02420": {
    zip: "02420",
    neighborhood: "Lexington",
    county: "Middlesex",
    clusters: [
      {
        name: "Technology & Defense Technology",
        naics: 54,
        distance: "Local — Route 128",
        anchor_employers: ["MIT Lincoln Laboratory (Lexington)", "Raytheon Intelligence & Space (Waltham)", "various defense tech companies"],
        student_connection: "MIT Lincoln Laboratory — a federally funded research center that invented radar, air traffic control, and early satellite communication — is in Lexington. The defense technology and national security research careers at Lincoln Lab are among the most significant in the country."
      },
      {
        name: "Biotech & Pharmaceutical Research",
        naics: 54,
        distance: "10 miles east — Kendall Square",
        anchor_employers: ["Moderna (Cambridge)", "Biogen", "Shire / Takeda (Lexington)", "various Route 128 biotech companies"],
        student_connection: "Takeda Pharmaceuticals has a significant research presence in Lexington — and the Route 128 biotech corridor running through the town connects directly to Kendall Square, 10 miles east."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "Local / 12 miles — Cambridge",
        anchor_employers: ["Akamai Technologies (Cambridge)", "Carbon Black (Waltham)", "various Route 128 tech companies"],
        student_connection: "Route 128 — the highway that circles Boston and gave its name to Massachusetts' technology corridor — runs through Lexington's employment zone. The technology companies concentrated here range from cybersecurity to cloud computing."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "15 miles east — Boston",
        anchor_employers: ["Fidelity Investments", "State Street", "GMO", "various hedge funds"],
        student_connection: "Boston's financial services sector is 15 miles east — and Lexington's Route 128 location makes it one of the best-positioned communities for technology and finance career combinations."
      },
      {
        name: "Education & Academic Research",
        naics: 61,
        distance: "10 miles east — Cambridge",
        anchor_employers: ["MIT", "Harvard", "Tufts University (Medford)"],
        student_connection: "MIT is 10 miles east — and Lincoln Laboratory, which sits in Lexington, is one of MIT's most significant research divisions. The research-to-industry pipeline from MIT through Route 128 to the market is one of the most productive innovation ecosystems in the world."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // WASHINGTON DC CORRIDOR
  // ─────────────────────────────────────────────────────────────

  "22101": {
    zip: "22101",
    neighborhood: "McLean",
    county: "Fairfax",
    clusters: [
      {
        name: "Defense, Intelligence & National Security",
        naics: 92,
        distance: "Local — McLean",
        anchor_employers: ["CIA (CIA Headquarters, McLean)", "Booz Allen Hamilton (McLean HQ)", "Leidos", "SAIC"],
        student_connection: "The CIA's headquarters is in McLean — and the defense and intelligence contracting ecosystem that surrounds it is one of the most significant in the country. Booz Allen Hamilton, headquartered in McLean, is one of the largest defense consulting firms in the US, employing analysts, engineers, and cybersecurity specialists who support the nation's most sensitive programs."
      },
      {
        name: "Management Consulting & Professional Services",
        naics: 54,
        distance: "Local / 10 miles — Tysons Corner / DC",
        anchor_employers: ["Booz Allen Hamilton (global HQ)", "McKinsey & Company (DC office)", "Deloitte (federal practice)", "MITRE Corporation"],
        student_connection: "McLean's concentration of consulting firms — anchored by Booz Allen Hamilton — is unmatched outside of Chicago and New York. Management consulting careers here are uniquely oriented toward government and defense clients, creating a distinctive niche that commands significant compensation."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "Local — Tysons Corner / 15 miles — DC",
        anchor_employers: ["Freddie Mac (McLean HQ)", "Capital One (McLean HQ)", "various investment firms"],
        student_connection: "Freddie Mac and Capital One are both headquartered in McLean — employing economists, data scientists, financial analysts, and technology professionals by the thousands. Capital One alone employs 20,000+ people in Northern Virginia."
      },
      {
        name: "Technology & Cybersecurity",
        naics: 51,
        distance: "Local / 10 miles — Tysons / Reston",
        anchor_employers: ["MITRE Corporation (McLean)", "DXC Technology (Tysons)", "various cybersecurity firms"],
        student_connection: "Northern Virginia is the cybersecurity capital of the US — and McLean's proximity to CIA, NSA (Fort Meade, 30 miles), and the intelligence community has created the most significant concentration of cybersecurity talent and companies outside of Silicon Valley."
      },
      {
        name: "Policy, Law & Government Affairs",
        naics: 92,
        distance: "10 miles — Washington DC",
        anchor_employers: ["US Government agencies", "major law firms (DC)", "think tanks and policy organizations"],
        student_connection: "Washington DC is 10 miles east — and McLean's position at the center of Northern Virginia's professional community makes it one of the most connected addresses to federal government, policy, and legal careers in the country."
      }
    ]
  },

  "20814": {
    zip: "20814",
    neighborhood: "Bethesda",
    county: "Montgomery",
    clusters: [
      {
        name: "Biomedical Research & Healthcare",
        naics: 62,
        distance: "Local — Bethesda",
        anchor_employers: ["National Institutes of Health (NIH — Bethesda campus)", "Walter Reed National Military Medical Center", "Uniformed Services University"],
        student_connection: "The National Institutes of Health — the largest funder of biomedical research in the world, with a $47 billion annual budget — is in Bethesda. The NIH campus employs more than 20,000 scientists, physicians, and researchers and is the single most significant biomedical research institution in human history."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "Local / 10 miles — DC",
        anchor_employers: ["Chevy Chase Bank / Capital One (regional)", "various hedge funds and private equity", "Carlyle Group (DC, 10 miles)"],
        student_connection: "The Carlyle Group — one of the largest private equity firms in the world — is headquartered 10 miles east in DC. Bethesda's affluent professional community is deeply connected to Washington's growing financial services and private equity sector."
      },
      {
        name: "Defense & Consulting",
        naics: 54,
        distance: "5 miles — McLean / Rockville",
        anchor_employers: ["Booz Allen Hamilton (McLean, 5 miles)", "Lockheed Martin (Bethesda HQ)", "various defense contractors"],
        student_connection: "Lockheed Martin — the world's largest defense contractor — is headquartered in Bethesda. The company that builds the F-35 fighter jet, the Orion spacecraft, and the nation's missile defense systems employs engineers, scientists, and program managers by the tens of thousands."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "10 miles — Rockville / DC",
        anchor_employers: ["IFC / World Bank Group (DC)", "various health tech startups", "Marriott International (Bethesda HQ)"],
        student_connection: "Marriott International — the world's largest hotel company — is headquartered in Bethesda, employing hospitality, technology, finance, and marketing professionals in the thousands. The technology and data science careers in hospitality are more sophisticated than most students realize."
      },
      {
        name: "Policy, International Affairs & Nonprofits",
        naics: 92,
        distance: "10 miles — Washington DC",
        anchor_employers: ["World Bank (DC)", "IMF (DC)", "various policy think tanks and nonprofits"],
        student_connection: "Washington DC — the center of global policy, international finance, and nonprofit leadership — is 10 miles east. Bethesda's position between NIH and DC creates a unique corridor where biomedical research, public health policy, and international development careers intersect."
      }
    ]
  },

  "22066": {
    zip: "22066",
    neighborhood: "Great Falls",
    county: "Fairfax",
    clusters: [
      {
        name: "Defense, Intelligence & National Security",
        naics: 92,
        distance: "8 miles — McLean / Langley",
        anchor_employers: ["CIA (Langley, 8 miles)", "Booz Allen Hamilton (McLean)", "General Dynamics (Falls Church)", "Leidos"],
        student_connection: "Great Falls is 8 miles from CIA headquarters — and the Northern Virginia defense and intelligence contracting ecosystem that surrounds it is one of the most significant employment corridors in the US. More classified government programs are run from this geography than anywhere else in the country."
      },
      {
        name: "Technology & Cybersecurity",
        naics: 51,
        distance: "10 miles — Reston / Tysons",
        anchor_employers: ["DXC Technology (Tysons)", "Neustar (Reston)", "various cybersecurity firms"],
        student_connection: "Reston and Tysons Corner — 10 miles east — host one of the largest technology corridors on the East Coast. Northern Virginia is home to more data centers, cybersecurity companies, and cloud infrastructure than any other region in the US."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "10 miles — McLean / Tysons",
        anchor_employers: ["Capital One (McLean)", "Freddie Mac (McLean)", "various wealth management firms"],
        student_connection: "Capital One's headquarters is 10 miles east in McLean — and the Northern Virginia financial services sector has grown dramatically as technology and finance have converged in this corridor."
      },
      {
        name: "Management Consulting",
        naics: 54,
        distance: "8 miles — McLean / DC",
        anchor_employers: ["Booz Allen Hamilton", "McKinsey (DC)", "Deloitte Federal", "MITRE"],
        student_connection: "Great Falls's position in the heart of Northern Virginia's consulting corridor places it within easy commuting distance of Booz Allen Hamilton, McKinsey's DC office, and the federal consulting practices that represent the most significant government advisory ecosystem in the world."
      },
      {
        name: "Law & Policy",
        naics: 54,
        distance: "15 miles — Washington DC",
        anchor_employers: ["US Government agencies", "major DC law firms", "policy think tanks"],
        student_connection: "Washington DC — the capital of global policy and governance — is 15 miles east. Great Falls residents are among the most politically and professionally connected in the DC suburbs."
      }
    ]
  },

  "22201": {
    zip: "22201",
    neighborhood: "Arlington (Courthouse / Clarendon)",
    county: "Arlington",
    clusters: [
      {
        name: "Defense & Intelligence Contracting",
        naics: 92,
        distance: "Local",
        anchor_employers: ["The Pentagon", "Boeing", "Lockheed Martin regional offices"],
        student_connection: "Arlington sits directly across the river from the Pentagon — one of the highest concentrations of defense and intelligence careers in the country runs through this single county."
      },
      {
        name: "Technology & Corporate HQ",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Amazon HQ2", "Nestlé USA (HQ)"],
        student_connection: "Amazon's second headquarters anchors Arlington's fastest-growing corridor — a genuine new tech-corporate identity layered on top of the county's federal-contracting history."
      },
      {
        name: "Management Consulting",
        naics: 54,
        distance: "Local — Rosslyn",
        anchor_employers: ["Deloitte", "Accenture Federal Services"],
        student_connection: "Deloitte's Rosslyn offices sit minutes from the Pentagon and downtown DC — one of the largest concentrations of federal-focused management consulting in the country runs through Arlington."
      }
    ]
  },

  "22314": {
    zip: "22314",
    neighborhood: "Alexandria (Old Town)",
    county: "Alexandria",
    clusters: [
      {
        name: "Federal Government & Policy",
        naics: 92,
        distance: "Local",
        anchor_employers: ["US Patent and Trademark Office", "federal agency regional offices"],
        student_connection: "Old Town Alexandria sits minutes from DC with a genuine federal-employment identity of its own, distinct from the commuter-suburb reputation of its historic waterfront."
      },
      {
        name: "Law & Regulatory Affairs",
        naics: 54,
        distance: "Local",
        anchor_employers: ["regional law firms", "government-affairs consultancies"],
        student_connection: "Alexandria's proximity to both DC and the Pentagon supports a genuine concentration of regulatory law and government-affairs firms."
      }
    ]
  },

  "20190": {
    zip: "20190",
    neighborhood: "Reston",
    county: "Fairfax",
    clusters: [
      {
        name: "Technology & Telecommunications",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Comscore (HQ)", "Leidos (HQ)", "NCI Information Systems"],
        student_connection: "Reston is a genuine tech-corporate hub in its own right, anchored by Leidos and other major government-technology contractors headquartered locally."
      },
      {
        name: "Defense & Intelligence Contracting",
        naics: 92,
        distance: "10 miles — Tysons / Dulles corridor",
        anchor_employers: ["Northrop Grumman", "Booz Allen Hamilton"],
        student_connection: "Reston sits inside the broader Dulles Technology Corridor, one of the densest concentrations of defense and intelligence contractors in the country."
      }
    ]
  },

  "22180": {
    zip: "22180",
    neighborhood: "Vienna",
    county: "Fairfax",
    clusters: [
      {
        name: "Defense & Intelligence Contracting",
        naics: 92,
        distance: "Local",
        anchor_employers: ["CIA (Langley, adjacent)", "MITRE Corporation", "Freddie Mac (HQ)"],
        student_connection: "Vienna borders Langley and hosts Freddie Mac's headquarters — a genuine dual identity of federal-intelligence and mortgage-finance careers in one town."
      },
      {
        name: "Financial Services",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Freddie Mac (HQ)", "regional banking offices"],
        student_connection: "Freddie Mac's headquarters gives Vienna a real housing-finance industry identity alongside its federal-contracting reputation."
      }
    ]
  },

  "20170": {
    zip: "20170",
    neighborhood: "Herndon",
    county: "Fairfax",
    clusters: [
      {
        name: "Technology & Telecommunications",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Neustar", "MicroStrategy (HQ, Tysons-adjacent)"],
        student_connection: "Herndon sits inside the Dulles Technology Corridor, one of the original hubs of the 1990s internet and telecom boom on the East Coast."
      },
      {
        name: "Aviation & Logistics",
        naics: 48,
        distance: "5 miles — Dulles International Airport",
        anchor_employers: ["United Airlines (Dulles hub)", "aviation logistics firms"],
        student_connection: "Dulles International Airport is minutes away, supporting real aviation operations and logistics career pathways alongside the tech corridor."
      }
    ]
  },

  "22150": {
    zip: "22150",
    neighborhood: "Springfield",
    county: "Fairfax",
    clusters: [
      {
        name: "Defense & Intelligence Contracting",
        naics: 92,
        distance: "Local",
        anchor_employers: ["National Geospatial-Intelligence Agency (NGA)", "Fort Belvoir-adjacent contractors"],
        student_connection: "Springfield hosts the National Geospatial-Intelligence Agency's headquarters directly — one of the most specialized intelligence-agency employment bases in the country."
      },
      {
        name: "Federal Government & Policy",
        naics: 92,
        distance: "Local",
        anchor_employers: ["federal agency support offices"],
        student_connection: "Springfield's proximity to Fort Belvoir and NGA makes federal and defense-adjacent careers a genuine local pathway."
      }
    ]
  },

  "22003": {
    zip: "22003",
    neighborhood: "Annandale",
    county: "Fairfax",
    clusters: [
      {
        name: "Federal Government & Policy",
        naics: 92,
        distance: "Local / 12 miles to DC",
        anchor_employers: ["federal agency regional offices", "government contractors"],
        student_connection: "Annandale's central Fairfax location makes it an accessible base for federal and government-adjacent careers across the DC metro without a premium Arlington or Alexandria price tag."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Inova Health System"],
        student_connection: "Inova Health System, Northern Virginia's dominant hospital network, has a major presence anchoring healthcare careers locally."
      }
    ]
  },

  "22015": {
    zip: "22015",
    neighborhood: "Burke",
    county: "Fairfax",
    clusters: [
      {
        name: "Federal Government & Policy",
        naics: 92,
        distance: "Local / 18 miles to DC",
        anchor_employers: ["federal agency regional offices", "government contractors"],
        student_connection: "Burke is a classic Fairfax County federal-commuter suburb — residents work across the full range of DC-area federal agencies and contractors."
      }
    ]
  },

  "20120": {
    zip: "20120",
    neighborhood: "Centreville",
    county: "Fairfax",
    clusters: [
      {
        name: "Defense & Intelligence Contracting",
        naics: 92,
        distance: "10 miles — Dulles corridor",
        anchor_employers: ["defense contractors along the Dulles corridor"],
        student_connection: "Centreville sits close enough to the Dulles Technology Corridor that defense and intelligence contracting careers remain genuinely accessible."
      }
    ]
  },

  "20151": {
    zip: "20151",
    neighborhood: "Chantilly",
    county: "Fairfax",
    clusters: [
      {
        name: "Defense & Intelligence Contracting",
        naics: 92,
        distance: "Local",
        anchor_employers: ["National Reconnaissance Office (adjacent)", "defense contractors"],
        student_connection: "Chantilly sits near the National Reconnaissance Office and a dense cluster of defense contractors — one of the more specialized intelligence-adjacent suburbs in the region."
      }
    ]
  },

  "22046": {
    zip: "22046",
    neighborhood: "Falls Church",
    county: "Falls Church City",
    clusters: [
      {
        name: "Federal Government & Policy",
        naics: 92,
        distance: "Local / 7 miles to DC",
        anchor_employers: ["federal agency regional offices", "government contractors"],
        student_connection: "Falls Church is one of the closest-in Virginia suburbs to DC — a small, independent city with an outsized concentration of federal careers relative to its size."
      }
    ]
  },

  "22192": {
    zip: "22192",
    neighborhood: "Woodbridge",
    county: "Prince William",
    clusters: [
      {
        name: "Federal Government & Policy",
        naics: 92,
        distance: "20 miles — DC / Pentagon",
        anchor_employers: ["Quantico Marine Corps Base (adjacent)", "federal contractors"],
        student_connection: "Woodbridge's proximity to Marine Corps Base Quantico gives it a genuine military and federal-law-enforcement career identity distinct from the closer-in Fairfax suburbs."
      }
    ]
  },

  "20816": {
    zip: "20816",
    neighborhood: "Chevy Chase / Friendship Heights",
    county: "Montgomery",
    clusters: [
      {
        name: "Biomedical Research & Healthcare",
        naics: 62,
        distance: "3 miles north — Bethesda / NIH",
        anchor_employers: ["National Institutes of Health", "Walter Reed National Military Medical Center", "Sibley Memorial Hospital"],
        student_connection: "The NIH campus is 3 miles north — the world's largest funder of biomedical research is essentially a neighbor. The research, clinical, and public health careers concentrated in the Bethesda-Chevy Chase corridor are extraordinary in their depth and significance."
      },
      {
        name: "Finance & Private Equity",
        naics: 52,
        distance: "5 miles east — Washington DC",
        anchor_employers: ["Carlyle Group (DC)", "various investment firms", "World Bank (DC)"],
        student_connection: "The Carlyle Group — which manages $400 billion in assets across private equity, real estate, and credit — is 5 miles east in DC. Washington's private equity and investment management sector has grown dramatically, making it one of the most significant financial centers east of New York."
      },
      {
        name: "Policy, Law & Government",
        naics: 92,
        distance: "5 miles east — Washington DC",
        anchor_employers: ["US Congress", "Executive branch agencies", "major DC law firms (Covington & Burling, Arnold & Porter)"],
        student_connection: "Washington DC is 5 miles east — and Chevy Chase's Maryland location gives it Metro access to every major government agency, law firm, and policy organization in the capital. The careers in law, policy, international affairs, and government service that are most accessible from this address are globally significant."
      },
      {
        name: "Defense & Consulting",
        naics: 54,
        distance: "10 miles — McLean / Bethesda",
        anchor_employers: ["Lockheed Martin (Bethesda)", "Booz Allen Hamilton (McLean)", "various defense contractors"],
        student_connection: "Lockheed Martin's headquarters is 10 miles northwest in Bethesda — and the defense contracting corridor running from Chevy Chase through Bethesda to McLean is one of the most significant in the country."
      },
      {
        name: "Media & Journalism",
        naics: 51,
        distance: "5 miles east — Washington DC",
        anchor_employers: ["The Washington Post", "NPR (headquarters)", "Politico", "National Geographic"],
        student_connection: "The Washington Post — one of the most significant newspapers in the world — is headquartered in DC, 5 miles east. NPR, National Geographic, and Politico are also DC-based, making Washington one of the most significant centers of journalism and media in the country."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ADDITIONAL NEW YORK METRO
  // ─────────────────────────────────────────────────────────────

  "07078": {
    zip: "07078",
    neighborhood: "Short Hills / Millburn",
    county: "Essex",
    clusters: [
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["Goldman Sachs", "JPMorgan Chase", "Morgan Stanley", "various hedge funds"],
        student_connection: "Short Hills is 30 minutes from Penn Station by NJ Transit — and Wall Street's investment banks and asset managers are among the most significant employers of Short Hills residents. The commute from Short Hills to the financial district has been a defining feature of this community for 50 years."
      },
      {
        name: "Pharmaceutical & Biotech",
        naics: 54,
        distance: "15 miles — Parsippany / Florham Park",
        anchor_employers: ["Pfizer (Parsippany)", "Bayer (Whippany)", "Allergan / AbbVie (Madison)"],
        student_connection: "New Jersey is the pharmaceutical capital of the US — more pharmaceutical companies are headquartered in NJ than any other state — and the Morris County corridor 15 miles northwest of Short Hills is one of the most significant."
      },
      {
        name: "Technology & Media",
        naics: 51,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["various Manhattan tech companies", "Comcast / NBC (Manhattan)", "advertising agencies"],
        student_connection: "Manhattan's technology, media, and advertising industries are 30 minutes by train — and New Jersey suburbs like Short Hills have historically been the residential base for Manhattan's creative and media professionals."
      },
      {
        name: "Healthcare & Life Sciences",
        naics: 62,
        distance: "10 miles — Summit / Livingston",
        anchor_employers: ["Overlook Medical Center (Summit)", "Saint Barnabas Medical Center (Livingston)", "Atlantic Health System"],
        student_connection: "Overlook Medical Center in Summit is a major regional hospital 10 miles west — and New Jersey's healthcare corridor connecting to the pharmaceutical industry creates distinctive career pathways at the intersection of clinical medicine and pharmaceutical research."
      },
      {
        name: "Law & Professional Services",
        naics: 54,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["Sullivan & Cromwell", "Davis Polk", "Kirkland & Ellis (NYC)", "various corporate legal departments"],
        student_connection: "Manhattan's elite law firms are 30 minutes by train — and Short Hills has historically been a primary residential community for senior attorneys at New York's most prestigious law firms."
      }
    ]
  },

  "10708": {
    zip: "10708",
    neighborhood: "Bronxville",
    county: "Westchester",
    clusters: [
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["Goldman Sachs", "JPMorgan Chase", "BlackRock", "various hedge funds"],
        student_connection: "Bronxville is 30 minutes from Grand Central on Metro-North — and the community has historically been home to senior executives in New York finance. Wall Street is the most significant financial market in the world, and it is a daily commute from Bronxville."
      },
      {
        name: "Media & Advertising",
        naics: 51,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["NBCUniversal", "Condé Nast", "various advertising agencies (Madison Ave)"],
        student_connection: "New York is the global capital of media, advertising, and publishing — and Bronxville's Metro-North access puts the entire Manhattan creative economy within daily reach."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "5 miles — Yonkers / NYC",
        anchor_employers: ["Montefiore Medical Center", "Lawrence Hospital (Bronxville)", "NewYork-Presbyterian"],
        student_connection: "Lawrence Hospital is in Bronxville — and Montefiore Medical Center, one of the largest hospital systems in New York, operates extensively in the northern Bronx and southern Westchester, 5 miles south."
      },
      {
        name: "Education & Academic Research",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Sarah Lawrence College (Bronxville)", "Fordham University (Bronx, 5 miles)", "Iona University"],
        student_connection: "Sarah Lawrence College — one of the most academically distinctive liberal arts colleges in the US — is in Bronxville. The college's emphasis on individualized study and its New York City proximity create a distinctive educational and professional ecosystem."
      },
      {
        name: "Law & Professional Services",
        naics: 54,
        distance: "30 minutes — Manhattan",
        anchor_employers: ["Wachtell Lipton Rosen & Katz", "Cravath Swaine & Moore", "Sullivan & Cromwell"],
        student_connection: "Wachtell Lipton — the most profitable law firm per partner in the world — is in Manhattan, 30 minutes south. Bronxville's community of legal professionals reflects the proximity to New York's elite legal market."
      }
    ]
  },

  "02138": {
    zip: "02138",
    neighborhood: "Cambridge (Harvard Square)",
    county: "Middlesex",
    clusters: [
      {
        name: "Biotech & Life Sciences — Kendall Square",
        naics: 54,
        distance: "1 mile — Kendall Square",
        anchor_employers: ["Moderna (Kendall Square HQ)", "Biogen (Cambridge)", "Vertex Pharmaceuticals", "Pfizer (Cambridge research)"],
        student_connection: "Kendall Square — 1 mile from Harvard Square — is the most biotech-dense square mile on earth. More than 150 life sciences companies operate within walking distance of Cambridge, including Moderna, which developed the first mRNA vaccine. This is the center of the global drug discovery revolution."
      },
      {
        name: "Technology & AI Research",
        naics: 51,
        distance: "Local — Kendall Square",
        anchor_employers: ["Google (Kendall Square)", "Microsoft Research (Cambridge)", "Amazon (Cambridge)", "various AI startups"],
        student_connection: "Google, Microsoft, Amazon, Apple, and Meta all have major research offices in Kendall Square — 1 mile away. Cambridge is the global capital of AI research, and the density of machine learning and computer science talent here is unmatched anywhere in the world."
      },
      {
        name: "Academic Research & University",
        naics: 61,
        distance: "Local",
        anchor_employers: ["Harvard University", "MIT (Kendall Square)", "Harvard Medical School"],
        student_connection: "Harvard University and MIT are both in Cambridge — collectively producing more Nobel laureates, company founders, and scientific breakthroughs than any other university corridor in history. The research ecosystem they anchor defines what is possible in science, technology, and business."
      },
      {
        name: "Finance & Venture Capital",
        naics: 52,
        distance: "3 miles east — Boston Financial District",
        anchor_employers: ["Fidelity Investments", "Wellington Management", "various VC firms funding Kendall Square startups"],
        student_connection: "The venture capital ecosystem funding Cambridge's biotech and technology startups is centered in the Back Bay — 3 miles east. Firms like Atlas Venture, Polaris Partners, and Third Rock Ventures have funded dozens of the most significant life sciences companies in the world from this corridor."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "3 miles — Longwood Medical Area",
        anchor_employers: ["Massachusetts General Hospital (Harvard affiliate)", "Brigham and Women's Hospital", "Dana-Farber Cancer Institute"],
        student_connection: "Massachusetts General Hospital — Harvard's flagship teaching hospital and the original home of ether anesthesia, the electroencephalogram, and gene therapy — is 3 miles west. It is one of the most research-productive hospitals in the world."
      }
    ]
  },

  "10005": {
    zip: "10005",
    neighborhood: "Lower Manhattan / Financial District",
    county: "New York",
    clusters: [
      {
        name: "Finance & Investment Banking",
        naics: 52,
        distance: "Local — Wall Street",
        anchor_employers: ["Goldman Sachs (200 West Street)", "JPMorgan Chase (383 Madison)", "Citigroup", "American Express"],
        student_connection: "This is Wall Street — the most significant financial address in the world. Goldman Sachs, JPMorgan, Citigroup, and American Express are headquartered within blocks of each other. The global flow of capital, the pricing of risk, and the allocation of investment that shapes the world economy happens here."
      },
      {
        name: "Law & Legal Services",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Sullivan & Cromwell (125 Broad St)", "Cleary Gottlieb", "Skadden Arps", "Milbank"],
        student_connection: "Sullivan & Cromwell and Cleary Gottlieb — two of the most prestigious law firms in the world — are headquartered in Lower Manhattan. The legal work done in this square mile governs the most significant corporate transactions in global business."
      },
      {
        name: "Trading & Financial Markets",
        naics: 52,
        distance: "Local — NYSE",
        anchor_employers: ["New York Stock Exchange (11 Wall Street)", "ICE (Intercontinental Exchange)", "CBOE (NYC office)"],
        student_connection: "The New York Stock Exchange — the largest stock exchange in the world by market capitalization — is at 11 Wall Street. The financial market infrastructure centered in this neighborhood underpins global commerce."
      },
      {
        name: "Technology & Financial Technology",
        naics: 51,
        distance: "3 miles north — Midtown South",
        anchor_employers: ["Google (Chelsea)", "Amazon (HQ2 partial)", "various fintech companies"],
        student_connection: "New York's technology sector has grown dramatically in the last decade — and the intersection of finance and technology in New York has produced some of the most valuable fintech companies in the world."
      },
      {
        name: "Real Estate & Development",
        naics: 53,
        distance: "Local",
        anchor_employers: ["Brookfield Asset Management", "Silverstein Properties", "Related Companies"],
        student_connection: "Lower Manhattan is home to some of the most significant real estate development companies in the US — Brookfield manages $300 billion in real estate assets and is one of the largest property owners in the world."
      }
    ]
  }

};

function getEastCoastGeoIntelligence(zip) {
  if (!zip || zip.length < 5) return null;
  if (GEO_INDUSTRY_DB_EAST[zip]) return GEO_INDUSTRY_DB_EAST[zip];
  const prefix3 = zip.slice(0, 3);
  const match3 = Object.values(GEO_INDUSTRY_DB_EAST).find(e => e.zip.startsWith(prefix3));
  if (match3) return match3;
  const prefix2 = zip.slice(0, 2);
  const match2 = Object.values(GEO_INDUSTRY_DB_EAST).find(e => e.zip.startsWith(prefix2));
  if (match2) return match2;
  return null;
}

if (typeof module !== 'undefined') module.exports = {
  GEO_INDUSTRY_DB_EAST,
  getEastCoastGeoIntelligence
};
