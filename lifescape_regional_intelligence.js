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
  },

  // ── FLORIDA ───────────────────────────────────────────────────────────────
  florida: {
    name: 'Florida',
    zipPrefixes: [
      '330','331','332','333','334','335','336','337','338','339',
      '340','341','342','343','344','345','346','347','348','349'
    ],
    corridors: [
      {
        name: 'Finance, Wealth Management & Private Equity',
        anchor: 'Miami Brickell / Palm Beach / Coral Gables',
        industries: ['Private Equity','Hedge Funds','Family Offices','Wealth Management','International Banking','Real Estate Finance'],
        employers: ['Blackstone','Apollo Global','Citadel','Wells Fargo Private Bank','Northern Trust','Raymond James'],
        naics: [52, 54]
      },
      {
        name: 'Real Estate & Development',
        anchor: 'Miami / Boca Raton / Orlando / Tampa',
        industries: ['Commercial Real Estate','Residential Development','REIT Management','Construction','Property Management'],
        employers: ['Lennar','PulteGroup','CBRE','JLL','Related Group'],
        naics: [52, 23, 54]
      },
      {
        name: 'Healthcare & Life Sciences',
        anchor: 'Tampa Bay / Miami Medical District / Orlando',
        industries: ['Hospital Systems','Pharmaceutical Distribution','Medical Devices','Health Insurance','Telehealth'],
        employers: ['HCA Healthcare','AdventHealth','Moffitt Cancer Center','BayCare','Humana'],
        naics: [62, 54]
      },
      {
        name: 'Tourism, Hospitality & Entertainment',
        anchor: 'Orlando (Theme Parks) / Miami Beach / Tampa',
        industries: ['Theme Parks','Hotel & Resort Management','Cruise Lines','Event Management','Sports Entertainment'],
        employers: ['Walt Disney World','Universal Orlando','SeaWorld','Royal Caribbean','Carnival Corp'],
        naics: [71, 72, 48]
      },
      {
        name: 'Latin American Business & International Trade',
        anchor: 'Miami International / Doral / Coral Gables',
        industries: ['International Trade','Latin American Banking','Import/Export','Logistics','Multinational Corporations'],
        employers: ['Miami Port Authority','Bacardi','Burger King Corporate','World Fuel Services'],
        naics: [48, 52, 42]
      },
      {
        name: 'Aerospace, Defense & Technology',
        anchor: 'Space Coast (Cape Canaveral / Melbourne) / Tampa Defense',
        industries: ['Space Launch','Aerospace Engineering','Defense Contracting','Satellite Systems','Cyber Defense'],
        employers: ['NASA','SpaceX Cape Canaveral','Boeing','Lockheed Martin','L3Harris','Northrop Grumman'],
        naics: [33, 54, 92]
      },
      {
        name: 'AgriTech, Logistics & Supply Chain',
        anchor: 'Jacksonville / Tampa Port / Central Florida',
        industries: ['Port Logistics','Supply Chain','Agricultural Technology','Food Processing','Distribution'],
        employers: ['JAXPORT','Port Tampa Bay','Publix HQ','Darden Restaurants'],
        naics: [48, 42, 11]
      }
    ],
    trajectories: {
      stay_close: {
        label: 'Stay Close',
        summary: 'Florida schools that put you directly inside the state\'s strongest corridors.',
        connections: [
          { school: 'University of Miami', corridor: 'Finance, Wealth Management & Private Equity', note: '55% Miami concentration — Business school inside the Brickell finance corridor. Latin American business network strongest in the country for Florida-rooted students.' },
          { school: 'University of Florida', corridor: 'Healthcare & Life Sciences', note: '45% Florida placement — #1 public in the state, direct pipeline into Gainesville biotech, Tampa and Miami hospital networks.' },
          { school: 'Florida State University', corridor: 'Finance, Wealth Management & Private Equity', note: '50% Florida placement — College of Business feeds Tallahassee government, Tampa finance, and the broader Florida professional network.' },
          { school: 'University of Central Florida', corridor: 'Tourism, Hospitality & Entertainment', note: '65% Florida concentration — sits in the backyard of Disney, Universal, and SeaWorld. Hospitality, entertainment operations, simulation and gaming pipeline.' },
          { school: 'Florida International University', corridor: 'Latin American Business & International Trade', note: '70% South Florida concentration — the undisputed pipeline into Miami\'s Latin American business corridor, international trade, and bilingual finance.' },
          { school: 'University of South Florida', corridor: 'Healthcare & Life Sciences', note: '60% Tampa Bay concentration — inside Moffitt Cancer Center and BayCare recruiting zone. Health sciences, public health, biomedical engineering.' },
          { school: 'Embry-Riddle Aeronautical University', corridor: 'Aerospace, Defense & Technology', note: '40% Florida placement — the premier aerospace university in the state, sitting between Cape Canaveral and the Melbourne corridor. NASA and SpaceX recruit directly on campus.' }
        ]
      },
      leave_and_return: {
        label: 'Leave and Return',
        summary: 'Schools outside Florida that still pipeline back into the state\'s strongest corridors.',
        connections: [
          { school: 'University of Michigan', corridor: 'Finance, Wealth Management & Private Equity', note: '8% Florida placement — Ross School of Business has documented placement in Brickell and Palm Beach wealth management.' },
          { school: 'Georgetown University', corridor: 'Latin American Business & International Trade', note: '6% Florida placement — Georgetown\'s Latin American studies and international affairs programs pipeline back into Miami\'s diplomatic and trade corridor.' },
          { school: 'Vanderbilt University', corridor: 'Healthcare & Life Sciences', note: '7% Florida placement — Vanderbilt medical and health policy graduates return to Tampa and Miami health systems.' },
          { school: 'Cornell University', corridor: 'Tourism, Hospitality & Entertainment', note: '5% Florida placement — Cornell Hotel Administration is the most credentialed pipeline into resort, cruise, and hospitality management in Florida.' },
          { school: 'Tulane University', corridor: 'Finance, Wealth Management & Private Equity', note: '9% Florida placement — Gulf South network pipelines naturally back to Tampa, Fort Lauderdale, and Miami finance.' }
        ]
      },
      leave_and_stay: {
        label: 'Leave and Stay Gone',
        summary: 'Schools that represent a genuine geographic bet away from Florida.',
        connections: [
          { school: 'University of Pennsylvania / Wharton', corridor: 'Northeast Finance', note: '35% Philadelphia/NYC — A Florida student who goes to Wharton is making a Wall Street bet, not a Florida bet.' },
          { school: 'Northwestern University', corridor: 'Chicago Consulting & Media', note: '40% Chicago — Kellogg and Medill pipeline into Chicago consulting, media, and finance. Strong outcome, different geography.' },
          { school: 'Stanford University', corridor: 'Bay Area Tech & Venture', note: '55% Bay Area — A Florida student at Stanford is almost certainly making a Silicon Valley bet. The Florida network does not reach Sand Hill Road.' },
          { school: 'New York University', corridor: 'New York Finance & Media', note: '50% New York — NYU Stern and Tisch students overwhelmingly stay in New York. Entertainment and finance corridors with no Florida equivalent.' }
        ]
      }
    },
    callc_context: `FLORIDA REGIONAL INTELLIGENCE — THREE TRAJECTORIES:

This student lives in one of the most economically complex states in the country. Florida is not a single market — it is a collection of distinct corridors sharing geography: the Brickell finance district that rivals mid-tier Wall Street, the Orlando entertainment economy, the Space Coast aerospace cluster, the Miami international trade gateway, and the Tampa Bay health sciences hub.

KEY CORRIDORS BY PROFILE MATCH:
- Finance, Wealth Management & Private Equity (Miami Brickell / Palm Beach): Blackstone, Apollo, Citadel, family offices — serious money, real dealmaking
- Real Estate & Development (statewide): Lennar, Related Group, CBRE — the industry that built Florida and keeps building it
- Healthcare & Life Sciences (Tampa / Miami Medical District): HCA, Moffitt, AdventHealth — one of the fastest-growing health markets in the US
- Tourism, Hospitality & Entertainment (Orlando / Miami Beach): Disney, Universal, Royal Caribbean, Carnival — a $100B+ industry hiding in plain sight
- Latin American Business & International Trade (Miami / Doral): The US-Latin America commerce gateway — bilingual, bicultural, globally connected
- Aerospace, Defense & Technology (Space Coast / Cape Canaveral): NASA, SpaceX, L3Harris — a legitimate aerospace corridor
- AgriTech, Logistics & Supply Chain (Jacksonville / Tampa Port): JAXPORT, Publix HQ — infrastructure and distribution at national scale

THREE TRAJECTORIES TO NAME EXPLICITLY:
STAY CLOSE: FIU → Latin American business in Miami (70% in-state). UCF → Disney/Universal entertainment operations. USF → Tampa Bay health systems. Embry-Riddle → NASA and SpaceX on the Space Coast. UM → Brickell finance and international business.
LEAVE AND RETURN: Michigan or Georgetown finance/law → return to Brickell or Palm Beach. Cornell Hotel → return to manage Orlando or Miami resort. Vanderbilt health → return to Tampa or Miami hospital systems. Tulane → Gulf South network back to Florida finance.
LEAVE AND STAY GONE: Wharton → Wall Street, not Brickell. Stanford → Silicon Valley, not Miami. Northwestern → Chicago, not Tampa. NYU → New York finance and media, no Florida equivalent.

Connect this student's specific profile to the corridor that fits, name the trajectory type, and name the school decision that corresponds to it. If this student has family in Florida but lives elsewhere, name Florida as a legitimate Leave and Return destination with the specific corridor their interests map to.`
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

// ── NAICS → Corridor mapping per region ──────────────────────────────────────
// Maps student's top NAICS sectors to the most relevant regional corridor
// Returns the corridor object or null if no strong match

const CORRIDOR_NAICS_MAP = {
  socal: [
    { corridorName: 'Entertainment & Media',              naics: [51, 71],     riasec: ['A','E','S'] },
    { corridorName: 'Aerospace & Defense',                naics: [33, 54],     riasec: ['R','I','C'] },
    { corridorName: 'Tech & Digital Media',               naics: [51, 54],     riasec: ['I','R','C'] },
    { corridorName: 'CPG, Action Sports & Lifestyle Brands', naics: [44, 71, 81], riasec: ['E','S','A'] },
    { corridorName: 'Fashion, Beauty & Cosmetics',        naics: [31, 44],     riasec: ['A','E','R'] },
    { corridorName: 'Pharmaceutical & Biotech',           naics: [62, 54],     riasec: ['I','R','S'] },
    { corridorName: 'Startup & Venture Ecosystem',        naics: [54, 51, 81], riasec: ['E','I','C'] }
  ],
  bayarea: [
    { corridorName: 'Deep Tech, AI & Semiconductor',      naics: [51, 54, 33], riasec: ['I','R','C'] },
    { corridorName: 'Enterprise & Consumer Tech',         naics: [51, 54],     riasec: ['I','E','C'] },
    { corridorName: 'Biotech & Life Sciences',            naics: [62, 54],     riasec: ['I','R','S'] },
    { corridorName: 'Financial Services & Fintech',       naics: [52, 54],     riasec: ['C','E','I'] },
    { corridorName: 'Venture Capital & Startup Ecosystem',naics: [52, 54, 81], riasec: ['E','I','C'] }
  ],
  chicago: [
    { corridorName: 'Finance, Trading & Quant',           naics: [52],         riasec: ['C','I','E'] },
    { corridorName: 'Consulting & Professional Services', naics: [54],         riasec: ['E','I','C'] },
    { corridorName: 'Healthcare & Life Sciences',         naics: [62, 54],     riasec: ['I','S','R'] },
    { corridorName: 'Manufacturing, Logistics & Supply Chain', naics: [33, 48, 42], riasec: ['R','C','I'] },
    { corridorName: 'Technology & Digital',               naics: [51, 54],     riasec: ['I','R','C'] },
    { corridorName: 'Consumer Goods & Retail',            naics: [44, 31, 72, 54], riasec: ['E','S','C'] }
  ],
  florida: [
    { corridorName: 'Finance, Wealth Management & Private Equity', naics: [52, 54],     riasec: ['E','C','I'] },
    { corridorName: 'Real Estate & Development',                   naics: [52, 23, 54], riasec: ['E','R','C'] },
    { corridorName: 'Healthcare & Life Sciences',                  naics: [62, 54],     riasec: ['I','S','R'] },
    { corridorName: 'Tourism, Hospitality & Entertainment',        naics: [71, 72, 48], riasec: ['E','S','A'] },
    { corridorName: 'Latin American Business & International Trade',naics: [48, 52, 42],riasec: ['E','S','C'] },
    { corridorName: 'Aerospace, Defense & Technology',             naics: [33, 54, 92], riasec: ['R','I','C'] },
    { corridorName: 'AgriTech, Logistics & Supply Chain',          naics: [48, 42, 11], riasec: ['R','C','E'] }
  ]
};

// ── resolveStudentCorridor ────────────────────────────────────────────────────
// Given a student's NAICS sectors, RIASEC codes, and regional key,
// returns the single best-matching corridor for this student in this region.
// Uses a weighted score: NAICS overlap (primary) + RIASEC affinity (secondary)
//
// @param naicsSectors  array of {sector, count/score} from getNAICSProfile()
// @param riasec        array of {code, score} from getRIASECProfile()
// @param regionalKey   'socal' | 'bayarea' | 'chicago'
// @returns { corridorName, naics, riasec, score } | null

function resolveStudentCorridor(naicsSectors, riasec, regionalKey) {
  if (!naicsSectors || !naicsSectors.length || !regionalKey) return null;

  const corridorMap = CORRIDOR_NAICS_MAP[regionalKey];
  if (!corridorMap) return null;

  // Student's top RIASEC codes (top 3, ordered)
  const studentRIASEC = (riasec || []).slice(0, 3).map(r => r.code);
  const studentRIASECSet = new Set(studentRIASEC);

  // High-signal NAICS codes that are corridor-specific (not generic crossovers)
  // NAICS 71 (Arts/Entertainment) almost uniquely signals Entertainment — boost it
  // NAICS 52 (Finance) almost uniquely signals Finance — boost it
  // NAICS 62 (Healthcare) almost uniquely signals Healthcare — boost it
  // NAICS 44 (Retail/Consumer) almost uniquely signals CPG/Consumer — boost it
  // NAICS 33 (Manufacturing) almost uniquely signals Aerospace/Industrial — boost it
  const HIGH_SIGNAL_NAICS = new Set([71, 52, 62, 44, 31, 33, 48]);

  // Score each corridor
  const scored = corridorMap.map(corridor => {
    let score = 0;

    // Primary signal — NAICS overlap, weighted by position and specificity
    naicsSectors.slice(0, 5).forEach((n, idx) => {
      if (corridor.naics.includes(n.sector)) {
        const baseWeight = (5 - idx) * 3; // top sector worth 15, 5th worth 3
        // High-signal NAICS get a stronger boost when they appear in top-2 positions
        // This ensures Finance(52), Healthcare(62), Entertainment(71) aren't beaten
        // by generic 51/54 combinations even when both sectors are tied by count
        const isTopPosition = idx <= 1;
        const specificityBoost = HIGH_SIGNAL_NAICS.has(n.sector) ? (isTopPosition ? 14 : 8) : 0;
        score += baseWeight + specificityBoost;
      }
    });

    // Secondary signal — RIASEC affinity, ordered match matters
    corridor.riasec.forEach((code, corridorRIASECIdx) => {
      const studentIdx = studentRIASEC.indexOf(code);
      if (studentIdx !== -1) {
        // Both corridor position and student position matter
        const corridorWeight = (3 - corridorRIASECIdx); // primary corridor code worth 3
        const studentWeight = (3 - studentIdx);          // student's primary code worth 3
        score += corridorWeight * studentWeight;
      }
    });

    return { ...corridor, score };
  });

  // Return highest-scoring corridor, or null if no real match (score < 3)
  const best = scored.sort((a, b) => b.score - a.score)[0];
  return best && best.score >= 3 ? best : null;
}

// ── getStudentCorridorContext ─────────────────────────────────────────────────
// Returns a short, prompt-ready string naming the student's matched corridor
// Used to sharpen callC prompt beyond "here are all corridors"

function getStudentCorridorContext(naicsSectors, riasec, zip) {
  const region = resolveRegion(zip);
  if (!region) return '';

  const corridor = resolveStudentCorridor(naicsSectors, riasec, region.key);
  if (!corridor) return '';

  // Find the full corridor object from the region for employer/detail data
  const fullCorridor = region.corridors.find(c => c.name === corridor.corridorName);
  if (!fullCorridor) return `Student corridor match: ${corridor.corridorName}`;

  return `STUDENT CORRIDOR MATCH: ${corridor.corridorName} (${fullCorridor.anchor})
Key employers in this corridor: ${fullCorridor.employers.slice(0,4).join(', ')}
Industries: ${fullCorridor.industries.slice(0,3).join(', ')}`;
}

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

// ── resolveStudentCorridor ────────────────────────────────────────────────────
// Given a student's NAICS sectors, RIASEC codes, and regional key,
// returns the single best-matching corridor for this student in this region.
// Uses a weighted score: NAICS overlap (primary) + RIASEC affinity (secondary)
//
// @param naicsSectors  array of {sector, count/score} from getNAICSProfile()
// @param riasec        array of {code, score} from getRIASECProfile()
// @param regionalKey   'socal' | 'bayarea' | 'chicago'
// @returns { corridorName, naics, riasec, score } | null

function resolveStudentCorridor(naicsSectors, riasec, regionalKey) {
  if (!naicsSectors || !naicsSectors.length || !regionalKey) return null;

  const corridorMap = CORRIDOR_NAICS_MAP[regionalKey];
  if (!corridorMap) return null;

  // Student's top RIASEC codes (top 3, ordered)
  const studentRIASEC = (riasec || []).slice(0, 3).map(r => r.code);
  const studentRIASECSet = new Set(studentRIASEC);

  // High-signal NAICS codes that are corridor-specific (not generic crossovers)
  // NAICS 71 (Arts/Entertainment) almost uniquely signals Entertainment — boost it
  // NAICS 52 (Finance) almost uniquely signals Finance — boost it
  // NAICS 62 (Healthcare) almost uniquely signals Healthcare — boost it
  // NAICS 44 (Retail/Consumer) almost uniquely signals CPG/Consumer — boost it
  // NAICS 33 (Manufacturing) almost uniquely signals Aerospace/Industrial — boost it
  const HIGH_SIGNAL_NAICS = new Set([71, 52, 62, 44, 31, 33, 48]);

  // Score each corridor
  const scored = corridorMap.map(corridor => {
    let score = 0;

    // Primary signal — NAICS overlap, weighted by position and specificity
    naicsSectors.slice(0, 5).forEach((n, idx) => {
      if (corridor.naics.includes(n.sector)) {
        const baseWeight = (5 - idx) * 3; // top sector worth 15, 5th worth 3
        // High-signal NAICS get a stronger boost when they appear in top-2 positions
        // This ensures Finance(52), Healthcare(62), Entertainment(71) aren't beaten
        // by generic 51/54 combinations even when both sectors are tied by count
        const isTopPosition = idx <= 1;
        const specificityBoost = HIGH_SIGNAL_NAICS.has(n.sector) ? (isTopPosition ? 14 : 8) : 0;
        score += baseWeight + specificityBoost;
      }
    });

    // Secondary signal — RIASEC affinity, ordered match matters
    corridor.riasec.forEach((code, corridorRIASECIdx) => {
      const studentIdx = studentRIASEC.indexOf(code);
      if (studentIdx !== -1) {
        // Both corridor position and student position matter
        const corridorWeight = (3 - corridorRIASECIdx); // primary corridor code worth 3
        const studentWeight = (3 - studentIdx);          // student's primary code worth 3
        score += corridorWeight * studentWeight;
      }
    });

    return { ...corridor, score };
  });

  // Return highest-scoring corridor, or null if no real match (score < 3)
  const best = scored.sort((a, b) => b.score - a.score)[0];
  return best && best.score >= 3 ? best : null;
}

// ── getStudentCorridorContext ─────────────────────────────────────────────────
// Returns a short, prompt-ready string naming the student's matched corridor
// Used to sharpen callC prompt beyond "here are all corridors"

function getStudentCorridorContext(naicsSectors, riasec, zip) {
  const region = resolveRegion(zip);
  if (!region) return '';

  const corridor = resolveStudentCorridor(naicsSectors, riasec, region.key);
  if (!corridor) return '';

  // Find the full corridor object from the region for employer/detail data
  const fullCorridor = region.corridors.find(c => c.name === corridor.corridorName);
  if (!fullCorridor) return `Student corridor match: ${corridor.corridorName}`;

  return `STUDENT CORRIDOR MATCH: ${corridor.corridorName} (${fullCorridor.anchor})
Key employers in this corridor: ${fullCorridor.employers.slice(0,4).join(', ')}
Industries: ${fullCorridor.industries.slice(0,3).join(', ')}`;
}