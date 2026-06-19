// ── LIFESCAPE REGIONAL INTELLIGENCE ─────────────────────────────────────────
// Three trajectory framework: Stay Close | Leave and Return | Leave and Stay Gone
// Each region has corridors, university connections, and callC prompt context
// Version: 1.0 | Built: June 2026
// ─────────────────────────────────────────────────────────────────────────────

const REGIONAL_INTELLIGENCE = {

  // ── SOUTHERN CALIFORNIA ───────────────────────────────────────────────────
  socal: {
    name: 'Southern California',
    zipPrefixes: [
      '900','901','902','903','904','905','906','907','908','909',
      '910','911','912','913','914','915','916','917','918','919',
      '920','921','922','923','924','925','926','927','928'
    ],
    corridors: [
      {
        name: 'Entertainment & Media',
        anchor: 'Burbank / Culver City / Hollywood',
        industries: ['Film & Television','Streaming','Talent Agencies','Music Labels','Entertainment Law','Post-Production'],
        employers: ['Disney','Warner Bros. Discovery','Netflix','Amazon Studios','Universal','CAA','WME','UTA'],
        naics: [51, 71]
      },
      {
        name: 'Aerospace & Defense',
        anchor: 'El Segundo / Hawthorne / Long Beach / Palmdale',
        industries: ['Aerospace Engineering','Defense Technology','Satellite Systems','Commercial Aviation'],
        employers: ['SpaceX','Boeing','Northrop Grumman','Raytheon','L3Harris'],
        naics: [33, 54]
      },
      {
        name: 'Tech & Digital Media',
        anchor: 'Santa Monica / Venice / Playa Vista (Silicon Beach)',
        industries: ['Consumer Internet','Ad Tech','Streaming Infrastructure','Gaming','Digital Marketing'],
        employers: ['Snap','Hulu','TikTok US','Google LA','Riot Games'],
        naics: [51, 54]
      },
      {
        name: 'CPG, Action Sports & Lifestyle Brands',
        anchor: 'Orange County (Costa Mesa / Irvine / Huntington Beach)',
        industries: ['Action Sports Brands','Consumer Packaged Goods','Surf / Skate / Outdoor','Brand Management','Sports Marketing'],
        employers: ['Vans','Quiksilver','Billabong','Hurley','Oakley','Volcom'],
        naics: [44, 71, 81]
      },
      {
        name: 'Fashion, Beauty & Cosmetics',
        anchor: 'Downtown LA / Fairfax District / Chatsworth / City of Industry',
        industries: ['Apparel & Fashion','Cosmetics Manufacturing','Beauty Brands','Personal Care','Packaging & Supply Chain'],
        employers: ['Revlon','e.l.f. Beauty','Benefit Cosmetics','LA Fashion District'],
        naics: [44, 31]
      },
      {
        name: 'Pharmaceutical & Biotech',
        anchor: 'San Diego (Torrey Pines / Sorrento Valley / La Jolla)',
        industries: ['Pharmaceutical R&D','Biotech','Clinical Research','Medical Devices','Genomics'],
        employers: ['Pfizer','J&J','Illumina','Neurocrine','Vertex Pharmaceuticals'],
        naics: [62, 54]
      },
      {
        name: 'Startup & Venture Ecosystem',
        anchor: 'Distributed — Venice / Culver City / Pasadena / Orange County',
        industries: ['Early Stage Tech','D2C Brands','Health Tech','Climate Tech','Venture Capital'],
        employers: ['Distributed across consumer and entertainment tech'],
        naics: [54, 51, 81]
      }
    ],
    trajectories: {
      stay_close: {
        label: 'Stay Close',
        summary: 'Schools in the region that put you directly inside a corridor\'s recruiting zone.',
        connections: [
          { school: 'University of Southern California', corridor: 'Entertainment & Media', note: '52% of graduates stay in LA — studios, agencies, and streaming companies recruit on campus directly.' },
          { school: 'University of California Los Angeles', corridor: 'Entertainment & Media', note: '58% LA concentration — entertainment and film pipeline at public university price point.' },
          { school: 'University of California Irvine', corridor: 'CPG, Action Sports & Lifestyle Brands', note: '50% Orange County concentration — inside the recruiting zone of Vans, Oakley, and the lifestyle brands corridor.' },
          { school: 'California State University Fullerton', corridor: 'CPG, Action Sports & Lifestyle Brands', note: '55% OC concentration — highest in the region. Mihaylo Business School feeds directly into CPG and brand management.' },
          { school: 'California State University Long Beach', corridor: 'Aerospace & Defense', note: '70% LA-Long Beach concentration — SpaceX, Boeing, Northrop recruit here directly. The most efficient path into El Segundo/Hawthorne.' },
          { school: 'San Diego State University', corridor: 'Pharmaceutical & Biotech', note: '65% San Diego concentration — technology and engineering pipeline inside the biotech corridor.' },
          { school: 'University of California San Diego', corridor: 'Pharmaceutical & Biotech', note: 'Sits physically inside Torrey Pines — the center of the biotech corridor. Science programs pipeline directly into Pfizer, Illumina, and Neurocrine.' },
          { school: 'Pepperdine University', corridor: 'Entertainment & Media', note: '45% LA concentration — Malibu location and business/law programs with strong LA entertainment market placement.' }
        ]
      },
      leave_and_return: {
        label: 'Leave and Return',
        summary: 'Schools outside the region that still pipeline back into Southern California corridors.',
        connections: [
          { school: 'University of Colorado Boulder', corridor: 'Aerospace & Defense', note: 'Top-5 aerospace nationally — 5% of graduates land in Los Angeles. SpaceX in Hawthorne and Boeing in Long Beach actively recruit CU aerospace graduates.' },
          { school: 'Arizona State University', corridor: 'Tech & Digital Media', note: '10% LA placement — tech graduates who return find Silicon Beach (Snap, Google LA, Hulu) as the natural home.' },
          { school: 'University of Arizona', corridor: 'Tech & Digital Media', note: '9% LA placement — semiconductor and engineering background with a return path into Southern California\'s aerospace and tech corridors.' },
          { school: 'University of Oregon', corridor: 'Entertainment & Media', note: '8% LA placement — media, journalism, and business backgrounds with a documented return path into entertainment.' },
          { school: 'Northeastern University', corridor: 'Pharmaceutical & Biotech', note: 'Boston biotech credentialing with a return option to San Diego. A deliberate strategy: train in Kendall Square, return to Torrey Pines.' }
        ]
      },
      leave_and_stay: {
        label: 'Leave and Stay Gone',
        summary: 'Schools that represent a genuine geographic bet away from Southern California — not wrong, but a different decision.',
        connections: [
          { school: 'Stanford University', corridor: 'Bay Area Tech', note: '55% Bay Area — a Southern California student who attends Stanford is most likely making a Bay Area career bet, not a return to LA.' },
          { school: 'Massachusetts Institute of Technology', corridor: 'Boston Tech & Biotech', note: '30% Boston, 25% Bay Area — the SoCal student who goes to MIT is making a Boston or Bay Area bet, not a return.' },
          { school: 'Northeastern University', corridor: 'Boston Biotech', note: '45% Boston retention — staying in Kendall Square after graduation is the more common outcome than returning to San Diego.' }
        ]
      }
    },
    callc_context: `SOUTHERN CALIFORNIA REGIONAL INTELLIGENCE — THREE TRAJECTORIES:

This student lives in one of the most economically diverse regions in the world. The region is not one industry — it is a constellation of distinct corridors spread across Los Angeles, Orange County, and San Diego.

KEY CORRIDORS BY PROFILE MATCH:
- Entertainment & Media (Burbank/Culver City/Hollywood): Film, streaming, talent agencies, music, entertainment law
- Aerospace & Defense (El Segundo/Hawthorne/Long Beach): SpaceX, Boeing, Northrop — rockets, satellites, defense systems
- Tech & Digital Media (Santa Monica/Venice/Playa Vista): Snap, Hulu, Google LA, Riot Games — consumer and media tech
- CPG, Action Sports & Lifestyle (Orange County): Vans, Oakley, Quiksilver — surf/skate/outdoor, brand management, consumer products
- Fashion, Beauty & Cosmetics (Downtown LA/Chatsworth): Apparel, cosmetics manufacturing, personal care brands
- Pharmaceutical & Biotech (San Diego/Torrey Pines): Pfizer, Illumina, Neurocrine — one of the top 3 biotech corridors in the US
- Startup & Venture (distributed): Second-largest startup ecosystem in the country

THREE TRAJECTORIES TO NAME EXPLICITLY:
STAY CLOSE: UCI or Cal State Fullerton → OC lifestyle brands corridor. CSULB → aerospace in El Segundo/Hawthorne. UCSD → biotech in Torrey Pines. USC/UCLA → entertainment in Burbank/Culver City.
LEAVE AND RETURN: CU Boulder aerospace → SpaceX/Boeing in Hawthorne when they come home. ASU/UA tech → Silicon Beach. Northeastern biotech → San Diego corridor.
LEAVE AND STAY GONE: Stanford → Bay Area (55% stay there). MIT → Boston or Bay Area. These are different geographic bets, not necessarily wrong ones.

Connect this student's specific profile to the corridor that fits, name the trajectory type, and name the school decision that corresponds to it.`
  },

  // ── BAY AREA ──────────────────────────────────────────────────────────────
  bayarea: {
    name: 'San Francisco Bay Area',
    zipPrefixes: [
      '940','941','942','943','944','945','946','947','948','949',
      '950','951','952','953','954','955','956','957','958','959'
    ],
    corridors: [
      {
        name: 'Enterprise & Consumer Tech',
        anchor: 'San Francisco / South of Market / Mission District',
        industries: ['Enterprise Software','Consumer Platforms','Fintech','Growth & Product','Design'],
        employers: ['Salesforce','Uber','Lyft','Airbnb','Stripe','Twitter/X'],
        naics: [51, 54]
      },
      {
        name: 'Deep Tech, AI & Semiconductor',
        anchor: 'Silicon Valley (Palo Alto / Menlo Park / Cupertino / Mountain View)',
        industries: ['Artificial Intelligence','Semiconductor Design','Hardware','Cloud Infrastructure','Autonomous Systems'],
        employers: ['Apple','Google','Meta','Intel','NVIDIA','AMD'],
        naics: [51, 54, 33]
      },
      {
        name: 'Biotech & Life Sciences',
        anchor: 'South San Francisco / San Carlos / Emeryville',
        industries: ['Biopharmaceutical','Genomics','Oncology Research','Clinical Development','Medical Devices'],
        employers: ['Genentech','Gilead Sciences','Roche','23andMe'],
        naics: [62, 54]
      },
      {
        name: 'Financial Services & Fintech',
        anchor: 'San Francisco / Foster City / Walnut Creek',
        industries: ['Banking','Fintech','Wealth Management','Payments','Insurance Tech'],
        employers: ['Wells Fargo','Visa','Schwab','Stripe','Brex','Chime'],
        naics: [52, 54]
      },
      {
        name: 'Venture Capital & Startup Ecosystem',
        anchor: 'Sand Hill Road (Menlo Park / Palo Alto)',
        industries: ['Venture Capital','Startup Operations','Growth Strategy','Early Stage Tech'],
        employers: ['Sequoia','Andreessen Horowitz','Kleiner Perkins','Benchmark'],
        naics: [52, 54]
      }
    ],
    trajectories: {
      stay_close: {
        label: 'Stay Close',
        summary: 'Bay Area schools that put you directly inside a corridor\'s recruiting zone.',
        connections: [
          { school: 'Stanford University', corridor: 'Deep Tech, AI & VC', note: '55% Bay Area — inside every corridor simultaneously. The anchor school for the entire ecosystem.' },
          { school: 'Santa Clara University', corridor: 'Engineering & Tech', note: '70% Bay Area concentration — highest in the data. Engineering pipeline feeds directly into Silicon Valley.' },
          { school: 'University of San Francisco', corridor: 'Financial Services & Fintech', note: '60% San Francisco — finance and business pipeline directly into the city\'s fintech and banking corridor.' },
          { school: 'Saint Mary\'s College of California', corridor: 'Bay Area Business', note: '72% Bay Area retention — business programs with strong local placement.' }
        ]
      },
      leave_and_return: {
        label: 'Leave and Return',
        summary: 'Schools outside the region with documented Bay Area return pipelines.',
        connections: [
          { school: 'University of Illinois Urbana-Champaign', corridor: 'Deep Tech & AI', note: '15% Bay Area — one of the most well-documented pipelines from Champaign to Silicon Valley in American engineering. Google, Apple, Meta recruit directly.' },
          { school: 'University of Washington', corridor: 'Enterprise Tech', note: '18% Bay Area — Seattle and the Bay Area share a tech talent pipeline. UW CS is a credible path back.' },
          { school: 'Northwestern University', corridor: 'Media Tech & Consulting', note: '10% Bay Area — Medill and Kellogg graduates who return find media-tech and consulting firms as the natural home.' }
        ]
      },
      leave_and_stay: {
        label: 'Leave and Stay Gone',
        summary: 'Schools that represent a geographic bet away from the Bay Area.',
        connections: [
          { school: 'University of Chicago', corridor: 'Chicago Finance & Trading', note: '28% New York, 35% Chicago — UChicago economics and finance graduates most commonly head to New York or stay in Chicago, not back to the Bay Area.' },
          { school: 'University of Notre Dame', corridor: 'Chicago / New York Finance', note: '30% Chicago, 20% New York — a Bay Area student at Notre Dame is making a Midwest or East Coast career bet.' },
          { school: 'Purdue University', corridor: 'Midwest Engineering & Manufacturing', note: '25% Indianapolis, 15% Chicago — a Bay Area student at Purdue is most likely heading to the Midwest engineering corridor, not back to Silicon Valley.' }
        ]
      }
    },
    callc_context: `BAY AREA REGIONAL INTELLIGENCE — THREE TRAJECTORIES:

This student lives in the most concentrated technology and innovation ecosystem in the world. The Bay Area is not one market — it splits into distinct corridors with different cultures, different employers, and different entry points.

KEY CORRIDORS BY PROFILE MATCH:
- Enterprise & Consumer Tech (San Francisco/SOMA): Salesforce, Uber, Stripe — product, growth, design, engineering
- Deep Tech, AI & Semiconductor (Silicon Valley/Palo Alto/Cupertino): Apple, Google, NVIDIA, Meta — hardware, AI research, infrastructure
- Biotech & Life Sciences (South San Francisco/Emeryville): Genentech, Gilead, Roche — one of the top 3 biotech corridors globally
- Financial Services & Fintech (SF/Foster City): Wells Fargo, Visa, Stripe, Brex — banking and tech-native finance
- Venture Capital (Sand Hill Road): Sequoia, a16z — the densest VC ecosystem in the world

THREE TRAJECTORIES TO NAME EXPLICITLY:
STAY CLOSE: Stanford or Santa Clara → Silicon Valley tech (55-70% Bay Area). USF → SF fintech and banking. Saint Mary's → Bay Area business.
LEAVE AND RETURN: UIUC → Google/Apple/Meta pipeline back to Silicon Valley (15% Bay Area). UW → tech return from Seattle (18%). Northwestern Kellogg → consulting/media-tech return.
LEAVE AND STAY GONE: UChicago → New York or Chicago finance (not Bay Area). Purdue → Midwest manufacturing. Notre Dame → Chicago or New York career bet.

Connect this student's profile to the corridor that fits, name the trajectory type, and connect it to a specific school decision.`
  },

  // ── CHICAGO ───────────────────────────────────────────────────────────────
  chicago: {
    name: 'Chicago Metro',
    zipPrefixes: [
      '600','601','602','603','604','605','606','607','608','609',
      '610','611','612','613','614','615','616','617','618','619',
      '620','621','622','623','624','625','626','627','628','629'
    ],
    corridors: [
      {
        name: 'Finance, Trading & Quant',
        anchor: 'The Loop / River North',
        industries: ['Derivatives Trading','Options Markets','Quantitative Finance','Algorithmic Trading','Hedge Funds'],
        employers: ['Citadel','CME Group','CBOE','Two Sigma','Jump Trading','DRW'],
        naics: [52]
      },
      {
        name: 'Consulting & Professional Services',
        anchor: 'The Loop / Wacker Drive',
        industries: ['Management Consulting','Audit & Tax','Strategy','Operations','Private Equity Advisory'],
        employers: ['McKinsey','Bain','BCG','Deloitte','PwC','Accenture'],
        naics: [54]
      },
      {
        name: 'Healthcare & Life Sciences',
        anchor: 'North Shore (Lake Forest / North Chicago / Deerfield)',
        industries: ['Pharmaceutical','Medical Devices','Health Insurance','Academic Medicine','Biotech'],
        employers: ['AbbVie','Abbott Laboratories','Baxter International','Northwestern Medicine','Rush'],
        naics: [62, 54]
      },
      {
        name: 'Manufacturing, Logistics & Supply Chain',
        anchor: 'Chicago Metro / Suburbs / Collar Counties',
        industries: ['Industrial Manufacturing','Logistics & Distribution','Rail & Freight','Agricultural Equipment','Defense Manufacturing'],
        employers: ['Caterpillar','Boeing Chicago','John Deere','Grainger','Motorola Solutions'],
        naics: [33, 48, 42]
      },
      {
        name: 'Technology & Digital',
        anchor: 'River North / Fulton Market / Evanston',
        industries: ['B2B Software','Health Tech','Fintech','Supply Chain Tech','Digital Transformation'],
        employers: ['GraingerDigital','McDonald\'s Tech','Morningstar','Avant','Outcome Health'],
        naics: [51, 54]
      },
      {
        name: 'Consumer Goods & Retail',
        anchor: 'Northern Suburbs (Oak Brook / Deerfield / Northbrook)',
        industries: ['Food & Beverage','CPG','Retail Operations','Brand Management','Marketing'],
        employers: ['McDonald\'s','Kraft Heinz','Mondelēz International','Walgreens','US Foods'],
        naics: [44, 31, 72]
      }
    ],
    trajectories: {
      stay_close: {
        label: 'Stay Close',
        summary: 'Chicago-area schools that put you directly inside a corridor\'s recruiting zone.',
        connections: [
          { school: 'University of Chicago', corridor: 'Finance, Trading & Quant', note: '35% Chicago — Citadel and Two Sigma recruit on campus. No other school has a more direct pipeline into quant finance.' },
          { school: 'Northwestern University', corridor: 'Consulting & Media', note: '35% Chicago — Kellogg for consulting, Medill for journalism, Feinberg for healthcare. Three corridors, one school.' },
          { school: 'University of Illinois Urbana-Champaign', corridor: 'Tech & Engineering', note: '30% Chicago — the most important public university pipeline into Chicago\'s tech and industrial corridor.' },
          { school: 'University of Notre Dame', corridor: 'Finance & Consulting', note: '30% Chicago — Mendoza is the most credentialed Catholic business school in the country. Chicago is its primary placement market.' },
          { school: 'Purdue University', corridor: 'Manufacturing & Logistics', note: '15% Chicago — specifically for the manufacturing, aerospace, and logistics corridor. Boeing and Caterpillar recruit directly.' },
          { school: 'Loyola University Chicago', corridor: 'Healthcare & Consumer Goods', note: 'Strong Chicago retention — healthcare, business, and law programs feeding into the North Shore and Loop corridors.' },
          { school: 'DePaul University', corridor: 'Consumer Goods & Tech', note: 'Highest Chicago retention among regional universities — business and technology programs feeding into the Loop and northern suburbs.' }
        ]
      },
      leave_and_return: {
        label: 'Leave and Return',
        summary: 'Schools outside Chicago with documented return pipelines.',
        connections: [
          { school: 'University of Wisconsin-Madison', corridor: 'Finance & Tech', note: '22% Chicago — engineering and business graduates who return find the Loop\'s consulting and fintech firms as the natural landing zone.' },
          { school: 'Michigan State University', corridor: 'Consumer Goods & Agriculture', note: 'Midwest agriculture and CPG pipeline — a Chicago student at MSU studying food science or supply chain has a direct path back into Kraft Heinz, Mondelēz, and US Foods.' },
          { school: 'Indiana University', corridor: 'Finance & Consulting', note: 'Kelley School finance pipeline — IU graduates who return to Chicago enter the Loop\'s consulting and financial services market.' }
        ]
      },
      leave_and_stay: {
        label: 'Leave and Stay Gone',
        summary: 'Schools that represent a geographic bet away from Chicago.',
        connections: [
          { school: 'University of Chicago', corridor: 'New York Finance', note: '28% New York — the UChicago economics and finance pipeline to Wall Street is one of the strongest in the country. A Chicago student at UChicago going into finance may well end up in New York.' },
          { school: 'Northwestern University', corridor: 'New York Media', note: '25% New York — Medill graduates go to the New York Times, Washington Post, and national media at high rates. A Chicago student at Medill pursuing national journalism is likely heading to New York.' },
          { school: 'University of Illinois Urbana-Champaign', corridor: 'Bay Area Tech', note: '15% Bay Area — the elite UIUC CS graduates who get Google, Apple, or Meta offers most commonly end up in California, not returning to Chicago.' }
        ]
      }
    },
    callc_context: `CHICAGO REGIONAL INTELLIGENCE — THREE TRAJECTORIES:

This student lives in the second-largest financial center in the United States and one of the most important manufacturing, logistics, and professional services markets in the world.

KEY CORRIDORS BY PROFILE MATCH:
- Finance, Trading & Quant (The Loop): Citadel, CME, Two Sigma — derivatives, options, algorithmic trading. Different from Wall Street. More mathematical.
- Consulting & Professional Services (Wacker Drive): McKinsey, Bain, Deloitte, Accenture — consumer goods, healthcare, manufacturing strategy
- Healthcare & Life Sciences (North Shore): AbbVie, Abbott, Baxter — two of the world's three best-selling drugs are made in the northern suburbs
- Manufacturing, Logistics & Supply Chain (Suburbs): Caterpillar, Boeing Chicago, John Deere — the most important logistics hub in North America
- Technology & Digital (Fulton Market/River North): B2B software, health tech, fintech — faster career acceleration than Silicon Valley with less competition
- Consumer Goods & Retail (Oak Brook/Deerfield): McDonald's, Kraft Heinz, Mondelēz, Walgreens — the CPG corridor most students don't know exists

THREE TRAJECTORIES TO NAME EXPLICITLY:
STAY CLOSE: UChicago → quant finance at Citadel/Two Sigma. Northwestern → consulting at McKinsey/Bain or journalism. UIUC → tech and engineering in the Loop. Notre Dame → finance and consulting. Purdue → manufacturing at Boeing/Caterpillar.
LEAVE AND RETURN: UW-Madison → consulting/fintech in the Loop (22% Chicago). Indiana Kelley → finance return. MSU → CPG and agricultural supply chain.
LEAVE AND STAY GONE: UChicago economics → Wall Street (28% New York). Northwestern Medill → national journalism in New York (25%). UIUC CS elite → Bay Area tech (15%).

Connect this student's specific profile to the corridor, name the trajectory type, and make the school connection explicit.`
  }

};

// ── resolveRegion ─────────────────────────────────────────────────────────────
// Returns the matching REGIONAL_INTELLIGENCE entry for a given ZIP code
// Returns null if no region matches (graceful fallback to ZIP-only geo)

function resolveRegion(zip) {
  if (!zip || typeof zip !== 'string') return null;
  const prefix = zip.trim().slice(0, 3);
  for (const [key, region] of Object.entries(REGIONAL_INTELLIGENCE)) {
    if (region.zipPrefixes.includes(prefix)) return { key, ...region };
  }
  return null;
}

// ── getRegionalCallCContext ───────────────────────────────────────────────────
// Returns the callC prompt context string for a given ZIP
// Returns empty string if no region matches

function getRegionalCallCContext(zip) {
  const region = resolveRegion(zip);
  return region ? region.callc_context : '';
}
