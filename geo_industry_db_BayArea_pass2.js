/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 2: San Francisco Bay Area — 19 ZIP codes
 * Version: 1.3 — 2026-07-11: added civic-infrastructure pass to Piedmont/
 * Oakland Hills (94611) — PG&E (utility), BART (transit infrastructure),
 * and Patelco Credit Union (community financial services) — completing the
 * same infrastructure-of-society pass already applied to LA, Dallas, and
 * Atlanta this session. This is the only Alameda County ZIP in the file,
 * which is where all three anchors are actually located, so no new ZIP
 * was needed.
 */

const GEO_INDUSTRY_DB_BAYAREA = {

  // ─────────────────────────────────────────────────────────────
  // PENINSULA — THE SILICON VALLEY CORE
  // ─────────────────────────────────────────────────────────────

  "94027": {
    zip: "94027",
    neighborhood: "Atherton",
    county: "San Mateo",
    clusters: [
      {
        name: "Venture Capital & Private Equity",
        naics: 52,
        distance: "Local — Sand Hill Road (1 mile)",
        anchor_employers: ["Sequoia Capital", "Andreessen Horowitz (a16z)", "Kleiner Perkins", "Benchmark Capital"],
        student_connection: "Sand Hill Road — the most powerful mile in global finance — runs through Atherton. Every major technology company that changed the world in the last 30 years was funded by firms within walking distance of your neighborhood."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "3 miles — Menlo Park / Palo Alto",
        anchor_employers: ["Meta / Facebook (Menlo Park HQ)", "Stanford Research Park companies", "Intuit"],
        student_connection: "Meta's global headquarters is 3 miles north in Menlo Park — and the Stanford Research Park hosts dozens of the most significant technology companies in the world."
      },
      {
        name: "Biotech & Life Sciences",
        naics: 54,
        distance: "8 miles — South San Francisco",
        anchor_employers: ["Genentech (South SF)", "Gilead Sciences", "BioMarin Pharmaceutical"],
        student_connection: "South San Francisco — the birthplace of the biotech industry — is 8 miles north. Genentech invented recombinant DNA technology here, and the resulting biotech ecosystem is the most significant in the world."
      },
      {
        name: "Academic Research & University Ecosystem",
        naics: 61,
        distance: "2 miles — Stanford University",
        anchor_employers: ["Stanford University", "Stanford Health Care", "Stanford Research Institute (SRI)"],
        student_connection: "Stanford University — ranked among the top 3 research universities in the world — is 2 miles south. More venture-backed companies have been founded by Stanford alumni than any other university on earth."
      },
      {
        name: "Semiconductor & Hardware Engineering",
        naics: 33,
        distance: "10 miles — Palo Alto / Santa Clara",
        anchor_employers: ["NVIDIA (Santa Clara)", "Intel (Santa Clara)", "Advanced Micro Devices"],
        student_connection: "The semiconductor industry that powers every computer, phone, and AI system in the world was invented in this corridor — and NVIDIA, the most valuable chip company on earth, is 10 miles south."
      }
    ]
  },

  "94028": {
    zip: "94028",
    neighborhood: "Portola Valley",
    county: "San Mateo",
    clusters: [
      {
        name: "Venture Capital & Private Equity",
        naics: 52,
        distance: "Local — Sand Hill Road",
        anchor_employers: ["Andreessen Horowitz", "Sequoia Capital", "Canvas Ventures (Portola Valley)"],
        student_connection: "Sand Hill Road runs directly through Portola Valley — the address of the venture capital firms that have funded Apple, Google, WhatsApp, Airbnb, and virtually every transformative technology company of the last 40 years."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "5 miles — Palo Alto / Menlo Park",
        anchor_employers: ["Meta / Facebook", "Palantir Technologies", "VMware"],
        student_connection: "The heart of Silicon Valley is 5 miles east — and Portola Valley's position on Sand Hill Road places it at the exact intersection of the capital and the companies that capital funds."
      },
      {
        name: "Clean Energy & Environmental Technology",
        naics: 22,
        distance: "10 miles — Palo Alto / South Bay",
        anchor_employers: ["Tesla (Palo Alto HQ)", "SunPower", "Bloom Energy"],
        student_connection: "Tesla's headquarters is 10 miles southeast — and the Bay Area is the global center of clean energy technology, producing companies that are redefining transportation, energy storage, and sustainable infrastructure."
      },
      {
        name: "Biotech & Life Sciences",
        naics: 54,
        distance: "10 miles — South San Francisco",
        anchor_employers: ["Genentech", "Gilead Sciences", "Roche (South SF)"],
        student_connection: "South San Francisco's biotech corridor — the largest in the world — is 10 miles north. The life sciences industry here has produced more breakthrough medicines than any other geography on earth."
      },
      {
        name: "Academic Research",
        naics: 61,
        distance: "3 miles — Stanford University",
        anchor_employers: ["Stanford University", "Stanford Linear Accelerator Center (SLAC)", "SRI International"],
        student_connection: "Stanford is 3 miles east — and SLAC National Accelerator Laboratory, where fundamental discoveries about the nature of matter have been made for 60 years, is adjacent to the campus."
      }
    ]
  },

  "94022": {
    zip: "94022",
    neighborhood: "Los Altos Hills",
    county: "Santa Clara",
    clusters: [
      {
        name: "Technology & Software",
        naics: 51,
        distance: "5 miles — Mountain View / Cupertino",
        anchor_employers: ["Apple (Cupertino HQ)", "Google (Mountain View HQ)", "Microsoft"],
        student_connection: "Apple Park and Googleplex — the two most recognizable corporate campuses in the world — are 5 and 8 miles south respectively. Los Altos Hills sits at the center of the geography that defined modern computing."
      },
      {
        name: "Semiconductor & Hardware Engineering",
        naics: 33,
        distance: "8 miles — Santa Clara / Sunnyvale",
        anchor_employers: ["NVIDIA", "Intel", "Advanced Micro Devices (AMD)"],
        student_connection: "NVIDIA — whose GPU chips power every major AI system in the world — is headquartered 8 miles south. The semiconductor valley that gave Silicon Valley its name runs directly through this corridor."
      },
      {
        name: "Venture Capital & Private Equity",
        naics: 52,
        distance: "5 miles — Sand Hill Road / Menlo Park",
        anchor_employers: ["Sequoia Capital", "Kleiner Perkins", "Andreessen Horowitz"],
        student_connection: "Sand Hill Road is 5 miles north — and Los Altos Hills has been home to more technology founders and venture capital partners than almost any ZIP code in America."
      },
      {
        name: "Biotech & Pharmaceutical",
        naics: 54,
        distance: "15 miles — South San Francisco / Palo Alto",
        anchor_employers: ["Genentech", "Gilead Sciences", "23andMe (Mountain View)"],
        student_connection: "The Bay Area biotech corridor is 15 miles north — and the proximity to Stanford medical research creates a steady pipeline of clinical discovery into commercial biotech companies."
      },
      {
        name: "Clean Energy & Climate Technology",
        naics: 22,
        distance: "8 miles — Palo Alto / Fremont",
        anchor_employers: ["Tesla", "SunPower", "Bloom Energy"],
        student_connection: "The global center of clean energy technology is in this corridor — and companies solving the largest environmental challenge in human history are headquartered within 10 miles."
      }
    ]
  },

  "94306": {
    zip: "94306",
    neighborhood: "Palo Alto",
    county: "Santa Clara",
    clusters: [
      {
        name: "Technology & Software",
        naics: 51,
        distance: "Local / 5 miles",
        anchor_employers: ["Hewlett Packard Enterprise", "VMware", "Tesla (Palo Alto HQ)", "Palantir"],
        student_connection: "Palo Alto is the birthplace of Silicon Valley — William Hewlett and David Packard started HP in a garage here in 1939, and the tradition of technology innovation they started has never stopped."
      },
      {
        name: "Venture Capital & Startup Ecosystem",
        naics: 52,
        distance: "3 miles — Sand Hill Road",
        anchor_employers: ["Sequoia Capital", "Andreessen Horowitz", "Benchmark Capital", "General Catalyst"],
        student_connection: "Sand Hill Road is 3 miles west — and Palo Alto's University Avenue is where startup founders meet investors for the coffee meetings that have changed the world more often than anywhere else."
      },
      {
        name: "Biomedical Research & Healthcare",
        naics: 62,
        distance: "Local — Stanford Medical Center",
        anchor_employers: ["Stanford Health Care", "Lucile Packard Children's Hospital", "Stanford School of Medicine"],
        student_connection: "Stanford Medical Center is adjacent to Palo Alto — one of the top 10 medical centers in the country and the source of some of the most significant biomedical research discoveries of the last century."
      },
      {
        name: "AI & Machine Learning",
        naics: 51,
        distance: "Local / 5 miles",
        anchor_employers: ["OpenAI (San Francisco)", "Anthropic (San Francisco)", "Google DeepMind"],
        student_connection: "The AI revolution that is reshaping every industry on earth is centered in the Bay Area — and Palo Alto sits at the center of the research ecosystem producing the technology that will define the next 50 years."
      },
      {
        name: "Clean Energy & Climate Tech",
        naics: 22,
        distance: "5 miles — Mountain View",
        anchor_employers: ["Tesla", "SunPower", "various climate tech startups"],
        student_connection: "Palo Alto itself runs on 100% renewable energy — and the city is home to dozens of clean energy startups working on the grid, storage, and efficiency technologies the world needs."
      }
    ]
  },

  "94025": {
    zip: "94025",
    neighborhood: "Menlo Park",
    county: "San Mateo",
    clusters: [
      {
        name: "Technology & Social Media",
        naics: 51,
        distance: "Local — Menlo Park",
        anchor_employers: ["Meta / Facebook (global HQ)", "Instagram", "WhatsApp"],
        student_connection: "Meta's global headquarters — the company that connects 3 billion people — is in Menlo Park. The campus alone employs over 10,000 engineers, designers, product managers, policy analysts, and researchers."
      },
      {
        name: "Venture Capital & Private Equity",
        naics: 52,
        distance: "Local — Sand Hill Road",
        anchor_employers: ["Sequoia Capital", "Andreessen Horowitz", "Kleiner Perkins", "NEA"],
        student_connection: "Sand Hill Road runs through Menlo Park — and the venture capital firms headquartered here have funded more world-changing companies than any other address on earth."
      },
      {
        name: "Biotech & Life Sciences",
        naics: 54,
        distance: "8 miles — South San Francisco",
        anchor_employers: ["Genentech", "Gilead Sciences", "BioMarin", "Roche"],
        student_connection: "The world's largest biotech cluster is 8 miles north — and Menlo Park's position in the VC ecosystem means many of the newest biotech companies in South SF were founded by people who work on Sand Hill Road."
      },
      {
        name: "Semiconductor & Hardware",
        naics: 33,
        distance: "10 miles — Santa Clara / Sunnyvale",
        anchor_employers: ["NVIDIA", "Intel", "Marvell Technology"],
        student_connection: "The semiconductor companies powering AI, smartphones, and data centers are 10 miles south — and the engineering pipeline from Menlo Park into the semiconductor corridor is one of the strongest in the valley."
      },
      {
        name: "Financial Technology",
        naics: 52,
        distance: "Local / 10 miles",
        anchor_employers: ["Robinhood (Menlo Park)", "Lending Club", "SoFi"],
        student_connection: "Financial technology companies that are rebuilding how the world moves money are headquartered in Menlo Park — and the intersection of finance and software engineering is one of the highest-demand skill combinations in the industry."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SAN FRANCISCO
  // ─────────────────────────────────────────────────────────────

  "94123": {
    zip: "94123",
    neighborhood: "Pacific Heights / Marina",
    county: "San Francisco",
    clusters: [
      {
        name: "Technology & Software",
        naics: 51,
        distance: "3 miles — SOMA / Mission",
        anchor_employers: ["Salesforce (SF HQ)", "Twitter / X", "Airbnb", "Lyft"],
        student_connection: "San Francisco's South of Market technology corridor is 3 miles south — home to Salesforce, Airbnb, Lyft, and dozens of the most significant technology companies built in the last 15 years."
      },
      {
        name: "AI & Machine Learning",
        naics: 51,
        distance: "3 miles — Mission District / SOMA",
        anchor_employers: ["OpenAI", "Anthropic", "Scale AI", "Cohere"],
        student_connection: "San Francisco is the global capital of artificial intelligence research — OpenAI and Anthropic, the two most significant AI companies in the world, are both headquartered 3 miles from Pacific Heights."
      },
      {
        name: "Finance & Fintech",
        naics: 52,
        distance: "5 miles — Financial District",
        anchor_employers: ["Wells Fargo (SF HQ)", "Charles Schwab", "Visa (Foster City)", "Stripe"],
        student_connection: "San Francisco's Financial District is one of the largest in the US — and fintech companies reinventing banking, payments, and investing are headquartered throughout the city."
      },
      {
        name: "Healthcare & Biotech",
        naics: 62,
        distance: "3 miles — Mission Bay / UCSF",
        anchor_employers: ["UCSF Medical Center", "UCSF Benioff Children's Hospital", "various Mission Bay biotech companies"],
        student_connection: "UCSF — one of the world's premier medical research universities — anchors Mission Bay with a growing biotech cluster that has attracted billions in investment. It's 3 miles from Pacific Heights."
      },
      {
        name: "Design, Brand & Creative Industries",
        naics: 54,
        distance: "Local / 5 miles",
        anchor_employers: ["IDEO (design consulting)", "Huge (design agency)", "various architecture firms"],
        student_connection: "San Francisco is one of the global centers of design thinking, UX design, and brand strategy — the design agencies and product studios that shape how technology looks and feels are clustered throughout the city."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // MARIN COUNTY
  // ─────────────────────────────────────────────────────────────

  "94920": {
    zip: "94920",
    neighborhood: "Belvedere / Tiburon",
    county: "Marin",
    clusters: [
      {
        name: "Finance, Wealth Management & Hedge Funds",
        naics: 52,
        distance: "10 miles — San Francisco Financial District",
        anchor_employers: ["Charles Schwab (Westlake Village operations)", "various hedge funds & family offices", "Morgan Stanley Wealth Management"],
        student_connection: "Marin County has one of the highest concentrations of financial professionals and hedge fund managers in the Bay Area — and the San Francisco financial district is 10 miles south across the bay."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "12 miles — San Francisco / Silicon Valley",
        anchor_employers: ["Autodesk (San Rafael)", "MarinSoft companies", "various remote-first tech firms"],
        student_connection: "Autodesk — whose software designs virtually every building, bridge, and manufactured product on earth — has its roots in Marin County. The tech sector is a short ferry ride across the bay."
      },
      {
        name: "Environmental Science & Conservation",
        naics: 54,
        distance: "Local — Marin Headlands",
        anchor_employers: ["Marin County Open Space District", "Point Reyes National Seashore", "The Marine Mammal Center"],
        student_connection: "The Marine Mammal Center in the Marin Headlands — which rescues and rehabilitates more marine mammals than any organization in the world — is 5 miles west. Marin's extraordinary natural environment supports one of the richest concentrations of conservation and environmental science work in the country."
      },
      {
        name: "Healthcare & Life Sciences",
        naics: 62,
        distance: "12 miles — South San Francisco / SF",
        anchor_employers: ["Marin General Hospital", "Sutter Health Novato", "UCSF (SF campus)"],
        student_connection: "Marin General Hospital is the primary healthcare employer in the county — and the UCSF and South San Francisco biotech corridors are a short drive south across the Golden Gate."
      },
      {
        name: "Media, Publishing & Film",
        naics: 51,
        distance: "5 miles — San Rafael / Lucas Valley",
        anchor_employers: ["Industrial Light & Magic (San Rafael)", "Lucasfilm", "Pixar (Emeryville, 20 mi)"],
        student_connection: "Industrial Light & Magic — the visual effects company that created the technology behind Star Wars, Jurassic Park, and Avatar — was founded in Marin County and remains in San Rafael, 5 miles north. It's one of the most creative workplaces on earth."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // EAST BAY
  // ─────────────────────────────────────────────────────────────

  "94611": {
    zip: "94611",
    neighborhood: "Piedmont / Oakland Hills",
    county: "Alameda",
    clusters: [
      {
        name: "Technology & Software",
        naics: 51,
        distance: "5 miles — Oakland / Emeryville",
        anchor_employers: ["Pandora (Oakland)", "Clorox (Oakland HQ)", "Pixar Animation Studios (Emeryville)"],
        student_connection: "Pixar Animation Studios — which created Toy Story, Finding Nemo, and every Pixar film — is in Emeryville, 5 miles west. Oakland's technology sector is growing rapidly as Bay Area companies seek alternatives to San Francisco."
      },
      {
        name: "Biotech & Life Sciences",
        naics: 54,
        distance: "8 miles — Emeryville / Berkeley",
        anchor_employers: ["Bayer (Emeryville)", "Berkeley Lights", "Caribou Biosciences", "UC Berkeley spinoffs"],
        student_connection: "Bayer's US pharmaceutical research headquarters is in Emeryville, and UC Berkeley's proximity has generated dozens of biotech companies in the East Bay biotech corridor — one of the most productive in the country."
      },
      {
        name: "Academic Research & University",
        naics: 61,
        distance: "5 miles — UC Berkeley",
        anchor_employers: ["University of California Berkeley", "Lawrence Berkeley National Laboratory", "Lawrence Livermore National Laboratory"],
        student_connection: "UC Berkeley — one of the world's premier research universities — is 5 miles west, and Lawrence Berkeley National Laboratory sits on the Berkeley Hills above campus, conducting federally funded research in energy, materials science, and genomics."
      },
      {
        name: "Healthcare & Medical Centers",
        naics: 62,
        distance: "5 miles — Oakland",
        anchor_employers: ["Kaiser Permanente (Oakland HQ)", "Children's Hospital Oakland", "Alta Bates Summit Medical Center"],
        student_connection: "Kaiser Permanente's national headquarters is in Oakland — the largest integrated managed care organization in the US, employing physicians, nurses, administrators, data scientists, and technology professionals by the thousands."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "8 miles — San Francisco Financial District",
        anchor_employers: ["BlackRock (SF office)", "Wells Fargo", "various hedge funds & family offices"],
        student_connection: "The San Francisco Financial District — one of the largest in the US — is 8 miles west across the bay, and the East Bay's growing professional community increasingly works in finance and investment management."
      },
      {
        name: "Utility & Energy Infrastructure",
        naics: 22,
        distance: "5 miles — Oakland",
        anchor_employers: ["PG&E Corporation (corporate HQ)"],
        student_connection: "Pacific Gas and Electric — one of the largest utility companies in the country, serving 16 million people across Northern and Central California — is headquartered in downtown Oakland. Utility engineering, grid operations, and wildfire-mitigation infrastructure work are stable, essential careers that rarely get discussed alongside the Peninsula's venture capital and startup narrative, but are genuinely local here."
      },
      {
        name: "Public Transit Infrastructure",
        naics: 48,
        distance: "5 miles — Oakland",
        anchor_employers: ["BART (Bay Area Rapid Transit) headquarters"],
        student_connection: "BART operates the Bay Area's regional rail network from its Oakland headquarters — transit planning, systems engineering, and infrastructure operations are genuine public-service career pathways supporting the daily functioning of the whole region, distinct from the venture-backed companies that dominate the Peninsula's identity."
      },
      {
        name: "Community Financial Services",
        naics: 52,
        distance: "12 miles — Dublin",
        anchor_employers: ["Patelco Credit Union (HQ)"],
        student_connection: "Patelco — one of the largest credit unions in the country — is headquartered in Dublin, in the same East Bay economic orbit as Piedmont and Oakland Hills. Credit union and community-banking careers are a genuine, stable local pathway distinct from the venture capital and hedge fund finance that dominates the Bay Area's usual finance narrative."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SOUTH BAY PENINSULA
  // ─────────────────────────────────────────────────────────────

  "94010": {
    zip: "94010",
    neighborhood: "Burlingame",
    county: "San Mateo",
    clusters: [
      {
        name: "Biotech & Life Sciences",
        naics: 54,
        distance: "5 miles — South San Francisco",
        anchor_employers: ["Genentech (South SF)", "Gilead Sciences", "Roche (South SF)", "Nektar Therapeutics"],
        student_connection: "South San Francisco is the birthplace of the modern biotech industry — Genentech was founded here in 1976 and the cluster it spawned now employs more than 50,000 life sciences professionals within 10 miles of Burlingame."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "10 miles — Menlo Park / San Francisco",
        anchor_employers: ["Meta", "Oracle (Redwood City)", "Electronic Arts (Redwood City)"],
        student_connection: "Burlingame sits at the midpoint between San Francisco's tech corridor and Silicon Valley proper — making it one of the most well-positioned residential communities for technology careers in the Bay Area."
      },
      {
        name: "Aviation & Aerospace",
        naics: 48,
        distance: "Local — San Francisco International Airport",
        anchor_employers: ["United Airlines (SFO hub)", "Alaska Airlines (SFO operations)", "various airport technology companies"],
        student_connection: "SFO is adjacent to Burlingame — and the aviation industry surrounding one of the busiest international airports in the US creates careers in airline operations, air traffic management, aviation technology, and logistics."
      },
      {
        name: "Finance & Fintech",
        naics: 52,
        distance: "8 miles — San Francisco Financial District",
        anchor_employers: ["Visa (Foster City, 5 miles)", "Lending Club", "various fintech companies"],
        student_connection: "Visa's global operations headquarters is 5 miles south in Foster City — the company that processes more payment transactions than any other network on earth, employing engineers, data scientists, and financial analysts throughout the Peninsula."
      },
      {
        name: "Hospitality & Business Travel",
        naics: 72,
        distance: "Local — SFO corridor",
        anchor_employers: ["Marriott (SFO properties)", "Hilton", "various airport hotels and conference centers"],
        student_connection: "The SFO corridor supports one of the largest concentrations of business hospitality in California — and the hospitality management, events, and business services industries are significant local employers."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SILICON VALLEY SOUTH
  // ─────────────────────────────────────────────────────────────

  "95070": {
    zip: "95070",
    neighborhood: "Saratoga",
    county: "Santa Clara",
    clusters: [
      {
        name: "Technology & Software",
        naics: 51,
        distance: "8 miles — Cupertino / San Jose",
        anchor_employers: ["Apple (Cupertino — 5 miles)", "Cisco Systems (San Jose)", "Adobe (San Jose)"],
        student_connection: "Apple Park — the most valuable company headquarters in the world — is 5 miles north in Cupertino. Apple employs engineers, designers, lawyers, supply chain specialists, retail leaders, and marketers in the tens of thousands within this corridor."
      },
      {
        name: "Semiconductor & Hardware Engineering",
        naics: 33,
        distance: "8 miles — Santa Clara / San Jose",
        anchor_employers: ["Intel (Santa Clara)", "NVIDIA (Santa Clara)", "Broadcom", "Advanced Micro Devices"],
        student_connection: "Santa Clara is the semiconductor capital of the world — the companies that design the chips inside every device you own are headquartered 8 miles north, and the engineering workforce they require is among the most specialized and best-compensated in any industry."
      },
      {
        name: "Venture Capital & Private Equity",
        naics: 52,
        distance: "12 miles — Sand Hill Road",
        anchor_employers: ["Sequoia Capital", "Andreessen Horowitz", "New Enterprise Associates"],
        student_connection: "Sand Hill Road is 12 miles north — and Saratoga's position in the South Bay makes it one of the premier residential communities for the venture capital and technology executive community."
      },
      {
        name: "Biotech & Medical Devices",
        naics: 54,
        distance: "10 miles — San Jose / Santa Clara",
        anchor_employers: ["Intuitive Surgical (Sunnyvale)", "Nevro Corp", "Natus Medical"],
        student_connection: "Intuitive Surgical — whose da Vinci robotic surgery system has performed more than 10 million procedures worldwide — is headquartered in Sunnyvale, 10 miles north. The medical robotics and device industry is one of the most significant in the South Bay."
      },
      {
        name: "Clean Energy & Electric Vehicles",
        naics: 22,
        distance: "15 miles — Palo Alto / Fremont",
        anchor_employers: ["Tesla (Palo Alto HQ / Fremont factory)", "SunPower", "Bloom Energy"],
        student_connection: "Tesla's Fremont factory — which produces more electric vehicles than any plant in North America — is 20 miles north. The clean energy and EV revolution is headquartered in this corridor, and the engineering, manufacturing, and software careers it creates are among the most in-demand in the industry."
      }
    ]
  },

  "94103": {
    zip: "94103",
    neighborhood: "SoMa / Mission",
    county: "San Francisco",
    clusters: [
      {
        name: "Technology & Software",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Salesforce Tower (HQ)", "Airbnb (HQ)", "Stripe", "Pinterest"],
        student_connection: "SoMa is the literal center of San Francisco's technology industry — Salesforce Tower anchors the skyline, and Airbnb, Stripe, and Pinterest all headquarter within walking distance."
      },
      {
        name: "Startup & Venture Ecosystem",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Y Combinator alumni companies", "countless early-stage startups"],
        student_connection: "SoMa and the Mission hold the highest density of early-stage startups in the world — a student here grows up genuinely surrounded by founders, not just employees."
      },
      {
        name: "Arts, Design & Creative Industries",
        naics: 71,
        distance: "Local",
        anchor_employers: ["independent design studios", "SFMOMA", "creative agencies"],
        student_connection: "The Mission's design and creative-agency culture runs alongside the tech industry — a genuinely dual identity, tech money and independent art culture in the same few blocks."
      }
    ]
  },

  "94108": {
    zip: "94108",
    neighborhood: "Nob Hill / Financial District",
    county: "San Francisco",
    clusters: [
      {
        name: "Financial Services & Banking",
        naics: 52,
        distance: "Local",
        anchor_employers: ["Wells Fargo (HQ)", "Charles Schwab (SF office)", "First Republic Bank (legacy HQ)"],
        student_connection: "The Financial District blocks below Nob Hill house Wells Fargo's headquarters and a genuine concentration of West Coast banking — a different San Francisco than the tech-startup narrative most people know."
      },
      {
        name: "Law & Professional Services",
        naics: 54,
        distance: "Local",
        anchor_employers: ["major California law firms", "management consulting offices"],
        student_connection: "Nob Hill and the Financial District support one of the highest concentrations of corporate law and professional services firms on the West Coast."
      }
    ]
  },

  "94122": {
    zip: "94122",
    neighborhood: "Sunset District",
    county: "San Francisco",
    clusters: [
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "3 miles — UCSF Parnassus",
        anchor_employers: ["UCSF Medical Center", "Kaiser Permanente SF"],
        student_connection: "UCSF's Parnassus campus — one of the top academic medical centers in the country — is minutes away, making healthcare and biomedical research careers a genuine local pathway, not just a commute destination."
      },
      {
        name: "Education & Public Sector",
        naics: 61,
        distance: "Local",
        anchor_employers: ["San Francisco State University", "SFUSD"],
        student_connection: "The Sunset is a quieter, more residential San Francisco than downtown — with education and public-sector careers genuinely represented locally alongside the citywide tech industry."
      }
    ]
  },

  "94941": {
    zip: "94941",
    neighborhood: "Mill Valley",
    county: "Marin",
    clusters: [
      {
        name: "Media, Film & Entertainment",
        naics: 51,
        distance: "Local — Skywalker Sound / Lucasfilm legacy",
        anchor_employers: ["Skywalker Sound (Nicasio)", "independent production companies"],
        student_connection: "Mill Valley and greater Marin have a genuine, understated media production history — Skywalker Sound is minutes away, and the Mill Valley Film Festival draws the industry north every year."
      },
      {
        name: "Technology & Venture Capital",
        naics: 54,
        distance: "20 miles — San Francisco",
        anchor_employers: ["remote-based tech executives", "SF-headquartered venture firms"],
        student_connection: "Marin has become a genuine home base for senior technology and venture capital professionals who work in San Francisco but choose the quieter, wealthier North Bay to live."
      }
    ]
  },

  "94901": {
    zip: "94901",
    neighborhood: "San Rafael",
    county: "Marin",
    clusters: [
      {
        name: "Biotech & Life Sciences",
        naics: 62,
        distance: "Local",
        anchor_employers: ["BioMarin Pharmaceutical (HQ)"],
        student_connection: "BioMarin Pharmaceutical — a genuine leader in rare-disease drug development — is headquartered in San Rafael, giving Marin County a real biotech identity beyond its wealth-and-scenery reputation."
      },
      {
        name: "Professional Services & Nonprofit Leadership",
        naics: 54,
        distance: "Local",
        anchor_employers: ["regional nonprofit headquarters", "professional services firms"],
        student_connection: "San Rafael anchors Marin's civic and nonprofit-leadership community — a real, if less visible, career corridor for students drawn to mission-driven work."
      }
    ]
  },

  "94965": {
    zip: "94965",
    neighborhood: "Sausalito",
    county: "Marin",
    clusters: [
      {
        name: "Design, Architecture & Creative Industries",
        naics: 54,
        distance: "Local",
        anchor_employers: ["independent architecture and design studios"],
        student_connection: "Sausalito's houseboat community and waterfront studios have long attracted architects and designers — a genuinely distinct creative-industry identity within the Bay Area."
      },
      {
        name: "Technology & Venture Capital",
        naics: 51,
        distance: "8 miles — San Francisco",
        anchor_employers: ["SF-headquartered tech and venture firms"],
        student_connection: "Sausalito sits at the base of the Golden Gate Bridge — an 8-mile, scenic commute for tech and finance professionals working in the city."
      }
    ]
  },

  "94945": {
    zip: "94945",
    neighborhood: "Novato",
    county: "Marin",
    clusters: [
      {
        name: "Biomedical Research — Aging & Longevity Science",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Buck Institute for Research on Aging"],
        student_connection: "The Buck Institute for Research on Aging — one of the only research institutes in the world focused exclusively on the biology of aging — is headquartered in Novato, giving North Marin a genuine, if under-recognized, biomedical research identity."
      }
    ]
  },

  "94925": {
    zip: "94925",
    neighborhood: "Corte Madera",
    county: "Marin",
    clusters: [
      {
        name: "Publishing, Bookselling & Literary Programming",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Book Passage"],
        student_connection: "Book Passage in Corte Madera is one of the most nationally recognized independent bookstores in America for its author events and writing conferences — a real literary-industry anchor inside a retail corridor most people just drive past."
      }
    ]
  },

  "94960": {
    zip: "94960",
    neighborhood: "San Anselmo",
    county: "Marin",
    clusters: [
      {
        name: "Theology, Divinity & Religious Studies",
        naics: 61,
        distance: "Local",
        anchor_employers: ["San Francisco Theological Seminary"],
        student_connection: "San Francisco Theological Seminary, one of the oldest and most established divinity schools on the West Coast, has been based in San Anselmo since 1892 — a genuine academic and religious-studies anchor in a small Marin town."
      }
    ]
  }

};

// ─────────────────────────────────────────────────────────────
// MERGE WITH LA DATABASE
// In production these are combined into a single GEO_INDUSTRY_DB
// ─────────────────────────────────────────────────────────────

function getBayAreaGeoIntelligence(zip) {
  if (!zip || zip.length < 5) return null;
  if (GEO_INDUSTRY_DB_BAYAREA[zip]) return GEO_INDUSTRY_DB_BAYAREA[zip];

  // 3-digit prefix match
  const prefix3 = zip.slice(0, 3);
  const match3 = Object.values(GEO_INDUSTRY_DB_BAYAREA).find(e => e.zip.startsWith(prefix3));
  if (match3) return match3;

  // 2-digit prefix match
  const prefix2 = zip.slice(0, 2);
  const match2 = Object.values(GEO_INDUSTRY_DB_BAYAREA).find(e => e.zip.startsWith(prefix2));
  if (match2) return match2;

  return null;
}

if (typeof module !== 'undefined') module.exports = {
  GEO_INDUSTRY_DB_BAYAREA,
  getBayAreaGeoIntelligence
};
