/**
 * VECTOR Lifescape — Career Intelligence Layer
 * Version: 1.0 — June 17, 2026
 *
 * Provides:
 *   IBIS_WORLD_REGISTRY   — 10 career worlds with occupations, pay, and university pipelines
 *   BRIDGE_DB             — 67 metro community college transfer pathways
 *   buildCareerLandscape() — formats IBIS data for callB prompt injection
 *   findBridgePath()       — surfaces CC pathway for callC prompt injection
 *   resolveWorldId()       — maps NAICS/combo labels to canonical world ID
 *   resolveRegionalBridgeKey() — maps any US ZIP to nearest BRIDGE_DB metro
 *   scoreCareerPipeline()  — D4 scoring: career world → university pipeline match
 *   scoreIbisPipeline()    — D7 scoring: IBIS world → university pipeline match
 *
 * Load order: must be loaded AFTER lifescape_college_prefs_v3.js
 * Source: extracted from vector-api-2 worker v2.1 + v7
 */

// ─────────────────────────────────────────────────────────────
// WORLD_KEYWORDS
// ─────────────────────────────────────────────────────────────

const WORLD_KEYWORDS = {
  'finance':     ['finance','banking','wall street','investment','hedge fund','private equity','goldman','jp morgan','venture capital','vc','financial','asset management'],
  'tech':        ['tech','software','ai','artificial intelligence','engineering','startup','silicon valley','computer','machine learning','data science','saas'],
  'healthcare':  ['medicine','healthcare','hospital','pharma','biotech','medical','physician','surgeon','clinical','nursing'],
  'civic':       ['government','policy','law','public service','congressional','political','legislative','diplomatic','intelligence','federal','foreign service'],
  'creative':    ['art','design','film','music','entertainment','media','creative','studio','hollywood','fashion'],
  'maker':       ['manufacturing','hardware','industrial','supply chain','operations','logistics','aerospace','automotive'],
  'beauty':      ['beauty','cosmetics','retail','fashion','brand','luxury','dtc'],
  'persuasion':  ['marketing','advertising','sales','pr','public relations','brand','agency'],
  'discovery':   ['research','science','lab','academic','phd','laboratory','scientist','nobel','professor'],
  'defense':     ['intelligence','CIA','FBI','NSA','DEA','federal law enforcement','national security','counterterrorism','military intelligence','foreign service','homeland security','criminal investigation','surveillance','geopolitics','cybersecurity','cryptography','forensics','federal agent','Secret Service','border patrol','customs','ATF','marshals','diplomatic security'], 
  'military':    ['ROTC','military officer','army','navy','air force','marines','coast guard','service academy','West Point','Annapolis','Air Force Academy','JAG','military pilot','special operations','national defense','commissioning','Reserve Officers Training','veteran','armed forces','military leadership','corps of cadets'],
  'environment':  ['ecology','wildlife','marine biology','conservation','forestry','climate science','oceanography','park ranger','environmental science','botany','zoology','field research','natural resources','land management','ecosystem','fisheries','wetlands','sustainability','environmental law','habitat','biodiversity','geology','soil science'],
  'service':      ['social work','ministry','nonprofit','chaplain','divinity','theology','international development','humanitarian','peace corps','community organizing','faith','pastoral','missions','AmeriCorps','advocacy','counseling','volunteerism','relief work','NGO','community development','public service','church','seminary'],
  'healing':     ['physician','medicine','pre-med','pre-medical','doctor','hospital','nursing','clinical','residency','medical school','health sciences','public health','pharmacy','pharmacist','dentist','dental','veterinarian','surgery','anatomy','mental health','therapy','wellness','psychology','psychiatry','counseling','social work'],
  'energy':      ['energy','oil','gas','renewable','solar','utilities','petroleum'],
  'real_estate': ['real estate','property','development','construction','realty','reit'],
};

// ── D1: Geographic Fit ──
// Rewards schools whose pipeline_cities match the student's
// home-state metros. Bonus for cross-state students at OOS-heavy schools.

// ─────────────────────────────────────────────────────────────
// IBIS_WORLD_REGISTRY
// ─────────────────────────────────────────────────────────────

const IBIS_WORLD_REGISTRY = {

  healing: {
    id: 'healing',
    label: 'The world of healing',
    ibis_codes: ['OD4011','OD4012','OD4013','OD4121'],
    career_expressions: [
      { title: 'Physician',             years: 8, pay: '$200K–$500K', path: 'Pre-med → Med school → Residency → Practice' },
      { title: 'Hospital Administrator', years: 5, pay: '$120K–$300K', path: 'Operations → Department director → CMO/COO' },
      { title: 'Clinical Psychologist', years: 7, pay: '$90K–$180K',  path: 'Psych undergrad → PhD/PsyD → Licensed practice' },
    ],
    top_metros: ['Boston','Baltimore','Nashville','Houston','New York'],
    growth: 'strong',
    v2_affinity: ['human','systems'],
    v4_affinity: ['mixed'],
    university_pipeline: ['Vanderbilt University','Duke University','Emory University','Northwestern University','Wake Forest University','Johns Hopkins University'],
  },

  civic: {
    id: 'civic',
    label: 'The world of civic design',
    ibis_codes: ['OD4411','OP4191','OD4412'],
    career_expressions: [
      { title: 'Federal Policy Director', years: 8, pay: '$130K–$220K', path: 'Congressional staff → Agency → Director' },
      { title: 'Foreign Service Officer', years: 6, pay: '$80K–$150K',  path: 'FSO exam → Junior officer → Senior diplomat' },
      { title: 'Urban Planner',           years: 3, pay: '$70K–$130K',  path: 'Planning degree → Municipal role → Director' },
    ],
    top_metros: ['Washington DC','New York','Boston','Chicago','Los Angeles'],
    growth: 'moderate',
    v2_affinity: ['creative','systems'],
    v4_affinity: ['work','mixed'],
    university_pipeline: ['Georgetown University','American University','George Washington University','College of William and Mary','Tufts University','University of Virginia'],
  },

  building: {
    id: 'building',
    label: 'The world of building things',
    ibis_codes: ['OD2300','OD2310','OD2320','OD2390'],
    career_expressions: [
      { title: 'Civil Engineer',           years: 3, pay: '$80K–$150K',  path: 'BS Engineering → PE License → Senior engineer' },
      { title: 'Construction Project Manager', years: 4, pay: '$90K–$180K', path: 'Field experience → PMP → VP' },
      { title: 'Aerospace Engineer',       years: 4, pay: '$100K–$180K', path: 'BS Aero → Specialist → Principal engineer' },
    ],
    top_metros: ['Houston','Detroit','Seattle','Phoenix','Dallas'],
    growth: 'strong',
    v2_affinity: ['systems','analytical'],
    v4_affinity: ['work'],
    university_pipeline: ['University of Michigan','Purdue University','Georgia Institute of Technology','Texas A&M University','California Polytechnic State University'],
  },

  money: {
    id: 'money',
    label: 'The world of money',
    ibis_codes: ['OF5200','OF5210','OF5220','OF5330'],
    career_expressions: [
      { title: 'Investment Banker',  years: 3, pay: '$150K–$400K', path: 'Analyst → Associate → VP → MD' },
      { title: 'Private Equity Associate', years: 5, pay: '$200K–$500K', path: 'Banking → PE Associate → Principal' },
      { title: 'Hedge Fund Analyst', years: 4, pay: '$200K–$1M+',  path: 'Research → Analyst → Portfolio Manager' },
    ],
    top_metros: ['New York','San Francisco','Chicago','Boston','Greenwich'],
    growth: 'stable',
    v2_affinity: ['analytical','systems'],
    v4_affinity: ['work','self'],
    university_pipeline: ['University of Pennsylvania','Harvard University','Yale University','Princeton University','Williams College','Stanford University','Duke University','Dartmouth College'],
  },

  persuasion: {
    id: 'persuasion',
    label: 'The world of persuasion',
    ibis_codes: ['OG7000','OG7100','OG7200','OG7380'],
    career_expressions: [
      { title: 'Brand Strategist',         years: 4, pay: '$90K–$180K',  path: 'Account → Strategist → Brand Director' },
      { title: 'Ad Agency Creative Director', years: 7, pay: '$150K–$300K', path: 'Copywriter → ACD → Creative Director' },
      { title: 'PR Executive',             years: 5, pay: '$100K–$200K', path: 'Account exec → VP → Partner' },
    ],
    top_metros: ['New York','Los Angeles','Chicago','San Francisco','Atlanta'],
    growth: 'strong',
    v2_affinity: ['creative','human'],
    v4_affinity: ['self','mixed'],
    university_pipeline: ['New York University','University of Southern California','Northwestern University','Syracuse University','Boston University'],
  },

  beauty: {
    id: 'beauty',
    label: 'The world of beauty and identity',
    ibis_codes: ['OG4541','OG7311','OG4542'],
    career_expressions: [
      { title: 'Beauty Brand CMO',         years: 8, pay: '$180K–$400K',  path: 'Marketing → Brand Director → CMO' },
      { title: 'Social Commerce Director', years: 5, pay: '$120K–$250K',  path: 'Social → Influencer Marketing → Director' },
      { title: 'DTC Brand Founder',        years: 0, pay: '$0–unbounded', path: 'Operator → Founder → Exit' },
    ],
    top_metros: ['Los Angeles','New York','Dallas','Miami','Austin'],
    growth: 'very_strong',
    v2_affinity: ['creative','human'],
    v4_affinity: ['self','mixed'],
    university_pipeline: ['University of Southern California','Southern Methodist University','New York University','University of California, Los Angeles','Parsons School of Design'],
  },

  technology: {
    id: 'technology',
    label: 'The world of technology',
    ibis_codes: ['OJ5415','OJ5416','OJ5417','OJ5419'],
    career_expressions: [
      { title: 'Software Engineer',  years: 1, pay: '$130K–$300K',  path: 'BS CS → SWE → Staff → Principal' },
      { title: 'Product Manager',    years: 4, pay: '$150K–$350K',  path: 'PM I → Senior PM → Director → VP' },
      { title: 'Founder/CEO',        years: 0, pay: '$0–unbounded', path: 'Engineer → Co-founder → Exit/IPO' },
    ],
    top_metros: ['San Francisco','Seattle','New York','Austin','Boston'],
    growth: 'very_strong',
    v2_affinity: ['analytical','systems'],
    v4_affinity: ['work'],
    university_pipeline: ['Stanford University','Massachusetts Institute of Technology','University of California, Berkeley','Carnegie Mellon University','Harvey Mudd College'],
  },

  justice: {
    id: 'justice',
    label: 'The world of justice',
    ibis_codes: ['OJ5411','OP9221','OP9222'],
    career_expressions: [
      { title: 'BigLaw Litigator',        years: 3, pay: '$180K–$400K', path: 'JD → Associate → Partner' },
      { title: 'FBI Special Agent',       years: 4, pay: '$80K–$150K',  path: 'BA → FBI Academy → Field → Supervisor' },
      { title: 'Federal Judge Clerk',     years: 3, pay: '$80K–$160K',  path: 'JD → Clerkship → Litigation/Academia' },
    ],
    top_metros: ['Washington DC','New York','Los Angeles','Houston','Chicago'],
    growth: 'stable',
    v2_affinity: ['human','systems'],
    v4_affinity: ['mixed','self'],
    university_pipeline: ['Harvard University','Yale University','Stanford University','Georgetown University','Duke University','University of Virginia'],
  },

  ideas: {
    id: 'ideas',
    label: 'The world of ideas',
    ibis_codes: ['OJ6100','OJ6111','OJ6112','OJ6113'],
    career_expressions: [
      { title: 'Research Scientist', years: 8,  pay: '$80K–$180K',  path: 'PhD → Postdoc → PI' },
      { title: 'Professor',          years: 12, pay: '$90K–$250K',  path: 'PhD → Assistant → Associate → Full' },
      { title: 'Think Tank Fellow',  years: 6,  pay: '$100K–$200K', path: 'PhD/JD → Research → Senior Fellow' },
    ],
    top_metros: ['Boston','San Francisco','Washington DC','New Haven','Chicago'],
    growth: 'moderate',
    v2_affinity: ['analytical','creative'],
    v4_affinity: ['work'],
    university_pipeline: ['University of Chicago','Princeton University','Yale University','Massachusetts Institute of Technology','Williams College','Swarthmore College'],
  },

  power: {
    id: 'power',
    label: 'The world of power',
    ibis_codes: ['OP9100','OP9110','OP9120','OP9200'],
    career_expressions: [
      { title: 'Congressional Aide',    years: 2,  pay: '$50K–$120K',   path: 'Intern → LA → LD → Chief of Staff' },
      { title: 'Military Officer',      years: 4,  pay: '$60K–$200K',   path: 'Academy/ROTC → Lieutenant → Colonel/General' },
      { title: 'C-Suite Executive',     years: 12, pay: '$300K+',       path: 'Management consulting/banking → Exec → CEO' },
    ],
    top_metros: ['Washington DC','New York','Los Angeles','Atlanta','Houston'],
    growth: 'stable',
    v2_affinity: ['human','systems'],
    v4_affinity: ['self'],
    university_pipeline: ['Harvard University','Princeton University','Yale University','Georgetown University','United States Military Academy','United States Naval Academy'],
  },
};

// ── WORLD_ALIAS ──
// Maps common assessment names (v8_gravity values) to formal IBIS world IDs.
// Allows the assessment to use friendlier names while the registry stays canonical.

// ─────────────────────────────────────────────────────────────
// WORLD_ALIAS
// ─────────────────────────────────────────────────────────────

const WORLD_ALIAS = {
  // Direct IBIS IDs (pass-through)
  'defense':         'defense',
  'intelligence':    'defense',
  'law_enforcement': 'defense',
  'military':        'military',
  'military_service':'military',
  'armed_forces':    'military',
  'environment':     'environment',
  'conservation':    'environment',
  'ecology':         'environment',
  'service':         'service',
  'ministry':        'service',
  'nonprofit':       'service',
  'healing':         'healing',
  'civic':      'civic',
  'building':   'building',
  'money':      'money',
  'persuasion': 'persuasion',
  'beauty':     'beauty',
  'technology': 'technology',
  'justice':    'justice',
  'ideas':      'ideas',
  'power':      'power',

  // Common-language aliases used in assessment / v8_gravity
  'healthcare':  'healing',
  'medicine':    'healing',
  'health':      'healing',
  'tech':        'technology',
  'software':    'technology',
  'ai':          'technology',
  'finance':     'money',
  'banking':     'money',
  'investment':  'money',
  'law':         'justice',
  'legal':       'justice',
  'engineering': 'building',
  'maker':       'building',
  'real_estate': 'building',
  'marketing':   'persuasion',
  'advertising': 'persuasion',
  'sales':       'persuasion',
  'fashion':     'beauty',
  'retail':      'beauty',
  'consumer':    'beauty',
  'research':    'ideas',
  'academic':    'ideas',
  'science':     'ideas',
  'discovery':   'ideas',
  'creative':    'beauty',
  'government':  'civic',
  'policy':      'civic',
  'public':      'civic',
  'political':   'power',
  'politics':    'power',
  'leadership':  'power',
  'energy':      'building',
};

// ── resolveWorldId(input) ──
// Normalize any world string to a canonical IBIS ID.

// ─────────────────────────────────────────────────────────────
// BRIDGE_DB
// ─────────────────────────────────────────────────────────────

const BRIDGE_DB = {

  /* ── CALIFORNIA ──────────────────────────────────────── */
  "San Francisco": {
    cc: "Diablo Valley College",
    cc_city: "Pleasant Hill, California",
    target: "UC Berkeley — Haas School of Business",
    gpa: "3.5",
    years: "2",
    note: "DVC transfers to Berkeley at a 24% acceptance rate. The direct freshman admit rate is 14%. The math favors this path — and students who arrive via DVC have two intentional years of professional positioning rather than four years of assumption."
  },
  "Silicon Valley": {
    cc: "De Anza College",
    cc_city: "Cupertino, California",
    target: "UC Santa Cruz / Cal Poly San Luis Obispo",
    gpa: "3.4",
    years: "2",
    note: "De Anza sits in the heart of Silicon Valley. Students who spend two years building internship relationships with Apple, Google, and Intel — all within five miles of campus — arrive at their transfer school with professional context that freshman admits spend three years trying to acquire."
  },
  "Los Angeles": {
    cc: "Santa Monica College",
    cc_city: "Santa Monica, California",
    target: "UCLA",
    gpa: "3.4",
    years: "2",
    note: "SMC transfers to UCLA at the highest rate of any community college in California — 35% acceptance versus 14% for freshman applicants. The entertainment, business, and healthcare pipelines from UCLA are fully accessible to transfer students from day one of enrollment."
  },
  "Pasadena": {
    cc: "Pasadena City College",
    cc_city: "Pasadena, California",
    target: "USC Marshall School of Business / Cal Poly Pomona",
    gpa: "3.5",
    years: "2",
    note: "PCC has a transfer articulation pathway into USC Marshall that most families never hear about. The college sits ten minutes from Caltech and JPL — for STEM students, the proximity creates research access that rivals any four-year institution in the region."
  },
  "San Diego": {
    cc: "San Diego City College",
    cc_city: "San Diego, California",
    target: "UC San Diego",
    gpa: "3.4",
    years: "2",
    note: "UCSD's transfer acceptance rate from San Diego City College is 42% — nearly three times the 24% freshman admit rate. The military, biotech, and defense contractor networks that define San Diego's professional landscape recruit from UCSD regardless of how students entered."
  },
  "Orange County": {
    cc: "Orange Coast College",
    cc_city: "Costa Mesa, California",
    target: "UC Irvine",
    gpa: "3.3",
    years: "2",
    note: "OCC transfers to UC Irvine at one of the highest rates in the Orange County CC system. UCI's pharmaceutical, tech, and healthcare pipelines — fed by the corporate campus cluster housing Amazon, Google, and dozens of biotech firms — are fully accessible to transfer students."
  },
  "Ventura": {
    cc: "Moorpark College",
    cc_city: "Moorpark, California",
    target: "Cal Lutheran / Cal State Channel Islands",
    gpa: "3.0",
    years: "2",
    note: "Moorpark's transfer agreements with the CSU system provide the most direct pathway at the most accessible GPA threshold in Southern California. For students targeting education, social services, or Ventura County's growing tech and healthcare sectors, this is the structurally sound path."
  },
  "Foothill": {
    cc: "Foothill College",
    cc_city: "Los Altos Hills, California",
    target: "UC Santa Cruz / San Jose State",
    gpa: "3.3",
    years: "2",
    note: "Foothill sits between Stanford and Apple's headquarters. The college's articulation agreements with the UC system are among the most comprehensive in California, and students who build internship proximity during the CC years arrive at their transfer school with professional experience most four-year students never achieve before graduation."
  },
  "Sacramento": {
    cc: "City College of San Francisco",
    cc_city: "San Francisco, California",
    target: "San Francisco State / UC Berkeley select programs",
    gpa: "3.3",
    years: "2",
    note: "CCSF has direct articulation agreements with the entire UC system. For students targeting the Bay Area's nonprofit, government, and creative industries, SFSU's alumni network in these sectors is surprisingly dense — and the transfer path from CCSF is well-established and actively supported."
  },
  "San Fernando Valley": {
    cc: "Los Angeles Valley College",
    cc_city: "Valley Glen, California",
    target: "Cal State Northridge / Loyola Marymount",
    gpa: "3.2",
    years: "2",
    note: "CSUN is among the strongest feeder schools for the entertainment industry in Los Angeles — the alumni network runs through every major studio and production company in the Valley. Students who transfer from LAVC carry the same degree and the same access as students who entered as freshmen."
  },

  /* ── TEXAS ───────────────────────────────────────────── */
  "Austin": {
    cc: "Austin Community College",
    cc_city: "Austin, Texas",
    target: "UT Austin — McCombs School of Business",
    gpa: "3.5",
    years: "2",
    note: "ACC has a direct transfer pathway to UT Austin through the Texas Common Application. Students who spend two years at ACC building internship relationships in Austin's tech and startup ecosystem arrive at UT with professional context that freshman admits spend years trying to replicate."
  },
  "Dallas": {
    cc: "Dallas College — El Centro Campus",
    cc_city: "Dallas, Texas",
    target: "SMU Cox School of Business / UT Dallas",
    gpa: "3.4",
    years: "2",
    note: "The SMU transfer pathway from Dallas College is underutilized — most families assume it is not available. The finance, consulting, and energy sector pipelines from both SMU and UTD are as accessible to transfers as to freshman admits."
  },
  "Houston": {
    cc: "Houston Community College",
    cc_city: "Houston, Texas",
    target: "University of Houston — C.T. Bauer College of Business",
    gpa: "3.3",
    years: "2",
    note: "UH Bauer is one of the most connected business schools in the energy sector in America. ExxonMobil, Halliburton, and Shell recruit from Bauer's graduating class specifically. The corporate recruiting relationships at Bauer are program-level, not admit-year-level — transfers have the same access."
  },
  "San Antonio": {
    cc: "San Antonio College",
    cc_city: "San Antonio, Texas",
    target: "UTSA / Trinity University",
    gpa: "3.2",
    years: "2",
    note: "UTSA's cybersecurity program is one of the top five in the nation — ranked above programs at schools with far more recognizable names. The NSA Center of Academic Excellence designation creates federal career access that no other Texas institution outside UT Austin provides."
  },

  /* ── FLORIDA ─────────────────────────────────────────── */
  "Miami": {
    cc: "Miami Dade College",
    cc_city: "Miami, Florida",
    target: "University of Miami / Florida International University",
    gpa: "3.3",
    years: "2",
    note: "MDC is the largest institution of higher education in the United States. For students targeting Miami's international business, healthcare, and entertainment sectors, FIU's alumni network in Latin America is unmatched by any institution in Florida — and MDC is the most direct path there."
  },
  "Orlando": {
    cc: "Valencia College",
    cc_city: "Orlando, Florida",
    target: "University of Central Florida",
    gpa: "2.0",
    years: "2",
    note: "Valencia's DirectConnect program with UCF guarantees admission — not consideration, but admission — to any Valencia graduate with a 2.0 GPA. UCF is the largest university in the United States. The hospitality, simulation technology, and aerospace pipelines feed directly into Disney, Lockheed Martin, and the Orlando tourism complex."
  },
  "Tampa": {
    cc: "Hillsborough Community College",
    cc_city: "Tampa, Florida",
    target: "University of South Florida",
    gpa: "3.0",
    years: "2",
    note: "HCC's articulation agreement with USF is one of the most comprehensive in Florida. USF's healthcare and biomedical research complex — anchored by the Moffitt Cancer Center — creates research access during the transfer years that undergraduate researchers at most institutions never see before graduate school."
  },
  "Fort Lauderdale": {
    cc: "Broward College",
    cc_city: "Fort Lauderdale, Florida",
    target: "Florida Atlantic University / Nova Southeastern University",
    gpa: "3.0",
    years: "2",
    note: "FAU's business and healthcare programs have direct transfer articulation with Broward College. Nova Southeastern's law and healthcare schools — among the largest professional school complexes in the Southeast — accept Broward transfers at competitive rates."
  },
  "Tallahassee": {
    cc: "Tallahassee Community College",
    cc_city: "Tallahassee, Florida",
    target: "Florida State University",
    gpa: "3.0",
    years: "2",
    note: "TCC and FSU share a campus boundary — literally adjacent institutions. FSU's programs in criminology, film, and hospitality are among the best in the Southeast. Students who transfer from TCC carry the same degree from the same institution as students who entered as FSU freshmen."
  },
  "Jacksonville": {
    cc: "Florida State College at Jacksonville",
    cc_city: "Jacksonville, Florida",
    target: "University of North Florida",
    gpa: "3.0",
    years: "2",
    note: "FSCJ's transfer agreements with UNF create direct pathways into UNF's logistics, healthcare, and business programs — all fields where Jacksonville's port economy and growing financial services sector create strong local employment pipelines."
  },
  "Florida Gulf Coast": {
    cc: "State College of Florida",
    cc_city: "Bradenton, Florida",
    target: "University of South Florida Sarasota-Manatee / FGCU",
    gpa: "3.0",
    years: "2",
    note: "The Florida College System guarantees admission to state universities for graduates with strong GPAs. For students in the Gulf Coast corridor, FGCU and USF Sarasota provide access to Southwest Florida's healthcare, hospitality, and financial services industries through transfer pipelines that are institutionally supported."
  },

  /* ── NEW YORK ────────────────────────────────────────── */
  "New York City": {
    cc: "Borough of Manhattan Community College",
    cc_city: "New York, New York",
    target: "CUNY Baruch College — Zicklin School of Business",
    gpa: "3.2",
    years: "2",
    note: "BMCC feeds directly into Baruch, which has one of the most disproportionately effective business alumni networks of any public university in America. Baruch places graduates into Wall Street, accounting firms, and the New York financial sector at rates that rival Fordham and NYU — the transfer path from BMCC is established and used by students who become CFOs."
  },
  "Queens": {
    cc: "LaGuardia Community College",
    cc_city: "Long Island City, New York",
    target: "CUNY Queens College / CUNY Hunter College",
    gpa: "3.0",
    years: "2",
    note: "LaGuardia's cooperative education model means all students complete at least one internship as a degree requirement. Transfer students arrive at their four-year institution with documented professional experience. For students targeting New York's media, healthcare, and social services sectors, Hunter's urban-professional pipeline is among the most effective in the city."
  },
  "Long Island": {
    cc: "Nassau Community College",
    cc_city: "Garden City, New York",
    target: "Hofstra University / SUNY Stony Brook",
    gpa: "3.2",
    years: "2",
    note: "Nassau CC's transfer agreements with Hofstra provide direct access to one of the most connected business and law schools on Long Island. Stony Brook's research programs — particularly in health sciences and engineering — carry the same research credentials for transfer students as for direct admits."
  },
  "Westchester": {
    cc: "Westchester Community College",
    cc_city: "Valhalla, New York",
    target: "Pace University / Fordham University",
    gpa: "3.3",
    years: "2",
    note: "Pace's finance and accounting programs have the most concentrated Wall Street placement network of any school in the lower Hudson Valley. Fordham's business school accepts qualified transfers from Westchester CC and the Bronx campus places graduates directly into the financial district."
  },

  /* ── ILLINOIS ────────────────────────────────────────── */
  "Chicago": {
    cc: "Harold Washington College",
    cc_city: "Chicago, Illinois",
    target: "DePaul University — Driehaus College of Business",
    gpa: "3.2",
    years: "2",
    note: "DePaul's Driehaus College runs deeper into Chicago finance than the school's national reputation suggests. The alumni network within the Chicago Board of Trade, the CME Group, and the trading firms along LaSalle Street is specifically cultivated. Students who transfer from Harold Washington arrive with full access to the same recruiting relationships as freshman admits."
  },
  "Chicago North": {
    cc: "Oakton College",
    cc_city: "Des Plaines, Illinois",
    target: "Loyola University Chicago",
    gpa: "3.3",
    years: "2",
    note: "Oakton's articulation agreements with Loyola provide access to Loyola's healthcare management, business, and law school feeder programs. Loyola's Jesuit network — particularly in healthcare administration and nonprofit management — creates professional access in Chicago that extends well beyond the institution's size."
  },
  "Chicago West": {
    cc: "College of DuPage",
    cc_city: "Glen Ellyn, Illinois",
    target: "Northern Illinois University / Illinois State University",
    gpa: "3.0",
    years: "2",
    note: "NIU's business school has produced a disproportionate number of Chicago-area corporate executives relative to its regional profile. For students targeting manufacturing, logistics, and financial services in the greater Chicago metro, NIU's alumni network in these sectors is deeper than most families realize."
  },

  /* ── WASHINGTON STATE ────────────────────────────────── */
  "Seattle": {
    cc: "Bellevue College",
    cc_city: "Bellevue, Washington",
    target: "University of Washington — Foster School of Business",
    gpa: "3.4",
    years: "2",
    note: "UW Foster's alumni network runs through Amazon, Microsoft, Boeing, and every major tech employer in the Puget Sound. Bellevue College sits two miles from Microsoft's headquarters — students build professional proximity during the CC years that freshman UW students often don't develop until junior year."
  },
  "Seattle South": {
    cc: "Seattle Central College",
    cc_city: "Seattle, Washington",
    target: "Seattle University / Western Washington University",
    gpa: "3.2",
    years: "2",
    note: "Seattle University's Albers School of Business is the most Jesuit-connected professional school in the Pacific Northwest. The Boeing, Amazon, and Nordstrom corporate relationships that define Seattle's professional landscape run through both institutions' alumni networks."
  },

  /* ── GEORGIA ─────────────────────────────────────────── */
  "Atlanta": {
    cc: "Georgia State Perimeter College",
    cc_city: "Clarkston, Georgia",
    target: "Georgia State University — Robinson College of Business",
    gpa: "3.0",
    years: "2",
    note: "Georgia State's Robinson College is the most connected business school in Atlanta's corporate landscape — Delta, Coca-Cola, Cox Enterprises, and Home Depot all have deep recruiting relationships with the program. The transfer pathway from Perimeter College into Robinson is institutional — Georgia State runs it as a formal program, not an exception."
  },
  "Atlanta Tech": {
    cc: "Atlanta Technical College",
    cc_city: "Atlanta, Georgia",
    target: "Georgia Tech — select engineering programs via articulation",
    gpa: "3.5",
    years: "2",
    note: "The articulation pathway from Atlanta Technical College into Georgia Tech is narrow but real — specific STEM programs have direct transfer agreements. For a student whose credential score has not yet reached Georgia Tech's direct admit threshold, two years of technical coursework with a 3.5 GPA creates a transfer profile the admissions office is specifically designed to evaluate."
  },

  /* ── NORTH CAROLINA ──────────────────────────────────── */
  "Raleigh": {
    cc: "Wake Technical Community College",
    cc_city: "Raleigh, North Carolina",
    target: "NC State University — Poole College of Management",
    gpa: "3.3",
    years: "2",
    note: "Wake Tech and NC State have a direct articulation agreement through the NC Promise transfer pathway. NC State's engineering and business programs feed directly into the Research Triangle's biotech, pharmaceutical, and technology corridor. IBM, Cisco, and SAS all recruit from NC State specifically — transfers have the same access as freshman admits."
  },
  "Charlotte": {
    cc: "Central Piedmont Community College",
    cc_city: "Charlotte, North Carolina",
    target: "UNC Charlotte — Belk College of Business",
    gpa: "3.0",
    years: "2",
    note: "UNC Charlotte's Belk College is the most connected business school in the Charlotte financial corridor — Bank of America, Wells Fargo, and Truist all have active recruiting relationships. For students targeting banking, fintech, or financial services in one of the fastest-growing financial centers in America, this is a structurally sound and financially efficient pathway."
  },
  "Durham": {
    cc: "Durham Technical Community College",
    cc_city: "Durham, North Carolina",
    target: "North Carolina Central University / Duke University select programs",
    gpa: "3.2",
    years: "2",
    note: "NCCU's business and law programs carry historically strong HBCU alumni networks in North Carolina's banking, legal, and government sectors. Durham Tech's proximity to Duke creates access to Duke's continuing education and professional certificate programs — a distinct and powerful entry point into the Research Triangle's professional infrastructure."
  },

  /* ── PENNSYLVANIA ────────────────────────────────────── */
  "Philadelphia": {
    cc: "Community College of Philadelphia",
    cc_city: "Philadelphia, Pennsylvania",
    target: "Temple University — Fox School of Business / Drexel University",
    gpa: "3.2",
    years: "2",
    note: "Temple's Fox School is one of the most professionally connected business schools in the Mid-Atlantic. Drexel's co-op program — one of the best in the country — is accessible to transfer students. Students who transfer into Drexel's co-op program can still complete two or three rotations before graduation, the same professional experience that makes Drexel graduates exceptionally employable."
  },
  "Pittsburgh": {
    cc: "Community College of Allegheny County",
    cc_city: "Pittsburgh, Pennsylvania",
    target: "University of Pittsburgh / Carnegie Mellon — select programs",
    gpa: "3.4",
    years: "2",
    note: "Pitt's alumni network in Pittsburgh's banking, healthcare, and technology sectors is the most embedded of any institution in Western Pennsylvania. Carnegie Mellon accepts a small number of community college transfers in specific programs — the pathway is narrow but exists for students with exceptional STEM coursework."
  },

  /* ── MASSACHUSETTS ───────────────────────────────────── */
  "Boston": {
    cc: "Bunker Hill Community College",
    cc_city: "Boston, Massachusetts",
    target: "UMass Boston / Northeastern University select programs",
    gpa: "3.2",
    years: "2",
    note: "Northeastern's co-op program is one of the most valuable professional development programs in American higher education — and Northeastern accepts qualified transfers. UMass Boston's location on the harbor, adjacent to the Boston financial and biotech corridor, creates internship access that students use from their first semester regardless of entry path."
  },
  "Lowell": {
    cc: "Middlesex Community College",
    cc_city: "Bedford / Lowell, Massachusetts",
    target: "UMass Lowell / UMass Amherst",
    gpa: "3.2",
    years: "2",
    note: "UMass Lowell's engineering, computer science, and business programs have direct articulation pathways from Middlesex CC. Lowell's proximity to the Route 128 technology corridor and the Merrimack Valley's defense and manufacturing sector creates professional access for students in technical programs."
  },

  /* ── TENNESSEE ───────────────────────────────────────── */
  "Nashville": {
    cc: "Nashville State Community College",
    cc_city: "Nashville, Tennessee",
    target: "Belmont University / Lipscomb University",
    gpa: "3.0",
    years: "2",
    note: "Belmont's music business program is among the top three in America — and it accepts qualified community college transfers. Nashville State's articulation agreements with Belmont provide access to the most concentrated music industry alumni network in the country outside of Los Angeles."
  },
  "Knoxville": {
    cc: "Pellissippi State Community College",
    cc_city: "Knoxville, Tennessee",
    target: "University of Tennessee Knoxville",
    gpa: "3.0",
    years: "2",
    note: "Pellissippi State has a direct transfer agreement with UT Knoxville that is institutionally supported and straightforward. UT's engineering, business, and supply chain programs have strong recruiting relationships with Tennessee's manufacturing and logistics corridor — Volkswagen, Amazon, and Oak Ridge National Laboratory all recruit from UT specifically."
  },

  /* ── COLORADO ────────────────────────────────────────── */
  "Denver": {
    cc: "Community College of Denver",
    cc_city: "Denver, Colorado",
    target: "University of Denver — Daniels College of Business / CU Denver",
    gpa: "3.2",
    years: "2",
    note: "DU's Daniels College is the most professionally connected business school in the Rocky Mountain region — the alumni network runs through Colorado's ski industry, hospitality sector, and the growing Denver tech corridor. CCD's transfer agreements with both DU and CU Denver are well-established."
  },
  "Boulder": {
    cc: "Front Range Community College",
    cc_city: "Westminster, Colorado",
    target: "University of Colorado Boulder — Leeds School of Business",
    gpa: "3.3",
    years: "2",
    note: "CU Boulder's Leeds School has the most concentrated outdoor industry and tech startup alumni network in the Mountain West. Front Range CC's transfer agreement with CU Boulder is comprehensive — students who arrive via FRCC carry the same Leeds degree and access the same recruiting relationships as students who entered as freshmen."
  },

  /* ── ARIZONA ─────────────────────────────────────────── */
  "Phoenix": {
    cc: "Mesa Community College",
    cc_city: "Mesa, Arizona",
    target: "Arizona State University — W.P. Carey School of Business",
    gpa: "2.0",
    years: "2",
    note: "ASU has a guaranteed transfer agreement with Maricopa County community colleges including Mesa — a 2.0 GPA threshold is one of the most accessible transfer guarantees in American higher education. W.P. Carey has the deepest corporate recruiting relationships in the Southwest, and students who arrive via MCC access the same pipeline as freshman admits."
  },
  "Tucson": {
    cc: "Pima Community College",
    cc_city: "Tucson, Arizona",
    target: "University of Arizona — Eller College of Management",
    gpa: "3.0",
    years: "2",
    note: "Pima CC has direct articulation with the University of Arizona through the AZTransfer system. Eller's alumni network in Tucson's biotech, optics, and defense sectors — Raytheon is headquartered in Tucson — creates professional access that is specific to this metro and accessible to transfer students from the first semester of enrollment."
  },

  /* ── MARYLAND / DC ───────────────────────────────────── */
  "Washington DC": {
    cc: "Montgomery College",
    cc_city: "Rockville / Takoma Park / Germantown, Maryland",
    target: "University of Maryland — Robert H. Smith School of Business / American University",
    gpa: "3.3",
    years: "2",
    note: "UMD Smith's alumni network runs through every major federal contractor, consulting firm, and technology company in the DC metro. Montgomery College is UMD's largest transfer feeder. American University's proximity to Embassy Row and the lobbying corridor creates access to DC's policy and government affairs infrastructure."
  },
  "Northern Virginia": {
    cc: "Northern Virginia Community College",
    cc_city: "Annandale / Multiple Campuses, Virginia",
    target: "George Mason University / University of Virginia",
    gpa: "3.2",
    years: "2",
    note: "NOVA is the largest community college system on the East Coast. The transfer pathway to GMU is institutionally seamless — GMU was essentially designed around NOVA transfer students. For UVA, the pathway is competitive but real: NOVA graduates with strong GPAs transfer into UVA's McIntire School of Commerce at meaningful rates. The difference between a NOVA graduate who gets into UVA and one who does not is almost entirely GPA."
  },

  /* ── MINNESOTA ───────────────────────────────────────── */
  "Minneapolis": {
    cc: "Minneapolis Community and Technical College",
    cc_city: "Minneapolis, Minnesota",
    target: "University of Minnesota — Carlson School of Management",
    gpa: "3.3",
    years: "2",
    note: "Carlson's alumni network in Minneapolis's financial services, retail, and medical device sectors is the most concentrated of any business school in the Upper Midwest. Target, Best Buy, UnitedHealth Group, and 3M all have active recruiting relationships with Carlson specifically. MCTC's transfer agreements with the University of Minnesota are established and well-supported."
  },

  /* ── NEVADA ──────────────────────────────────────────── */
  "Las Vegas": {
    cc: "College of Southern Nevada",
    cc_city: "Las Vegas, Nevada",
    target: "University of Nevada Las Vegas — Harrah College of Hospitality",
    gpa: "3.0",
    years: "2",
    note: "UNLV's hospitality program is consistently ranked among the top five in the world. MGM, Caesars, Wynn, and every major hospitality corporation on the Strip recruit from UNLV's Harrah College specifically. Students who transfer from CSN have the same access to Strip internship placements as students who entered as UNLV freshmen."
  },

  /* ── HAWAII ──────────────────────────────────────────── */
  "Honolulu": {
    cc: "Honolulu Community College",
    cc_city: "Honolulu, Hawaii",
    target: "University of Hawaii at Manoa — Shidler College of Business",
    gpa: "3.0",
    years: "2",
    note: "Shidler's Pacific Rim business focus — with direct relationships to Japanese, South Korean, and Australian corporate partners — is unlike any other business school in America. For students targeting international business in the Asia-Pacific corridor, this network is geographically unmatched. The transfer pathway from Honolulu CC into UH Manoa is direct and well-supported."
  },

  /* ── BALTIMORE ───────────────────────────────────────── */
  "Baltimore": {
    cc: "Community College of Baltimore County",
    cc_city: "Catonsville / Essex / Dundalk, Maryland",
    target: "University of Maryland / Towson University / UMBC",
    gpa: "3.0",
    years: "2",
    note: "CCBC's transfer agreements with the University of Maryland system are comprehensive and well-supported. UMBC's computer science and engineering programs have disproportionate placement rates in the Baltimore-DC technology corridor. Towson's business programs feed directly into the Baltimore financial and healthcare sectors with the same access as direct admits."
  },

  /* ── PITTSBURGH (secondary) ──────────────────────────── */
  "Wilbur Wright": {
    cc: "Wilbur Wright College",
    cc_city: "Chicago, Illinois",
    target: "University of Illinois Chicago — Liautaud Graduate School feeder / Loyola",
    gpa: "3.2",
    years: "2",
    note: "UIC's business school has the deepest corporate recruiting relationships in Chicago's manufacturing, logistics, and healthcare sectors of any public institution in the city. Boeing, Hyatt, and Walgreens all recruit from UIC specifically. Wilbur Wright feeds directly into UIC via the City Colleges of Chicago articulation system."
  },
  /* ── OHIO ──────────────────────────────────────────── */
  "Columbus": {
    cc: "Columbus State Community College",
    cc_city: "Columbus, Ohio",
    target: "Ohio State University — Fisher College of Business",
    gpa: "3.2",
    years: "2",
    note: "Columbus State feeds Ohio State through the Ohio Transfer 36 and the CSCC-OSU Preferred Pathway — a formal articulation where CSCC graduates with a 3.2+ GPA and completed Transfer Module receive priority consideration. Two years at Columbus State costs $8,000 in tuition. Two years at Ohio State costs $24,000. The Preferred Pathway saves $16,000 while delivering identical junior-year standing."
  },
  "Cleveland": {
    cc: "Cuyahoga Community College",
    cc_city: "Cleveland, Ohio",
    target: "Case Western Reserve University / Cleveland State University",
    gpa: "3.3",
    years: "2",
    note: "Tri-C's Engineering and Science Transfer Pathway feeds Case Western Reserve and CSU with formal articulation agreements. Cleveland's biomedical, manufacturing, and financial services economy creates immediate employment for transfer graduates — the Cleveland Clinic, Parker Hannifin, and KeyBank all recruit from this pipeline. Two years at Tri-C saves $22,000 against Case Western's freshman year cost alone."
  },

  /* ── INDIANA ────────────────────────────────────────── */
  "Indianapolis": {
    cc: "Ivy Tech Community College",
    cc_city: "Indianapolis, Indiana",
    target: "Indiana University Indianapolis / Purdue Polytechnic",
    gpa: "3.0",
    years: "2",
    note: "Ivy Tech is Indiana's statewide community college system — 19 campuses, formal transfer agreements with every public university in Indiana. The Ivy Tech-to-IU Indianapolis pathway delivers nursing, business, and technology graduates into Indianapolis's healthcare, tech, and pharmaceutical corridor. Eli Lilly, Salesforce Indy, and the IU Health system all recruit from this pipeline. Indiana's lowest-cost accredited path to a four-year degree."
  },

  /* ── MICHIGAN ───────────────────────────────────────── */
  "Detroit": {
    cc: "Macomb Community College",
    cc_city: "Warren, Michigan",
    target: "University of Michigan-Dearborn / Michigan State University",
    gpa: "3.2",
    years: "2",
    note: "Macomb CC's Macomb-to-Michigan transfer pathway feeds UM-Dearborn's engineering and business programs through a formal articulation that reflects Macomb's 90-year relationship with the automotive industry. Ford, GM, Stellantis, and the Tier 1 automotive supplier corridor of Metro Detroit recruit Macomb-to-UM-Dearborn transfers specifically. The combination of Macomb's $4,200 annual tuition and UM-Dearborn's automotive engineering reputation creates the strongest automotive career pathway at the lowest cost in the region."
  },

  /* ── VIRGINIA ───────────────────────────────────────── */
  "Richmond": {
    cc: "Reynolds Community College",
    cc_city: "Richmond, Virginia",
    target: "Virginia Commonwealth University / University of Richmond",
    gpa: "3.0",
    years: "2",
    note: "Reynolds Community College is part of the Virginia Community College System's guaranteed admission agreement — Virginia community college graduates with a 3.0 GPA and 30+ credit hours are guaranteed admission to all Virginia public universities. Reynolds feeds VCU's nationally respected arts and health sciences programs directly. Two years at Reynolds costs $8,500 total. Two years at VCU costs $26,000. The Virginia guarantee makes this the most financially efficient arts and health sciences pathway in the state."
  },
  "Charlottesville": {
    cc: "Piedmont Virginia Community College",
    cc_city: "Charlottesville, Virginia",
    target: "University of Virginia",
    gpa: "3.4",
    years: "2",
    note: "PVCC is the most strategically positioned community college in Virginia — located in Charlottesville, it feeds UVA through the Virginia guaranteed admission program and the PVCC-UVA Transfer Advising Compact. UVA accepts PVCC transfers at significantly higher rates than freshman applicants. The total two-year cost at PVCC is $8,200, compared to $36,000 for two years of UVA in-state tuition. The path saves $27,800 while delivering a UVA degree — one of the most financially significant arbitrages in public higher education."
  },

  /* ── MISSOURI ───────────────────────────────────────── */
  "St. Louis": {
    cc: "St. Louis Community College",
    cc_city: "St. Louis, Missouri",
    target: "University of Missouri-St. Louis / Washington University",
    gpa: "3.2",
    years: "2",
    note: "STLCC's transfer agreements with UMSL deliver business, nursing, and technology graduates into the St. Louis corporate and healthcare corridor — Emerson Electric, Express Scripts, and BJC HealthCare all recruit UMSL transfers. The Missouri A+ Scholarship program covers STLCC tuition for qualifying Missouri high school graduates, making the first two years free before transferring. The combination of free community college and UMSL's regional employer relationships is the most financially efficient professional pathway in St. Louis."
  },
  "Kansas City": {
    cc: "Metropolitan Community College",
    cc_city: "Kansas City, Missouri",
    target: "University of Missouri-Kansas City / University of Kansas",
    gpa: "3.0",
    years: "2",
    note: "MCC feeds UMKC through the Kansas City Transfer Alliance — a formal compact that creates seamless credit transfer for business, technology, and health sciences students. Kansas City's growing technology sector, anchored by Cerner and the Sprint technology corridor, creates employment for UMKC transfers that MCC students access through proximity. The Missouri A+ Scholarship covers MCC tuition for qualifying students, making two years at MCC free before transfer to UMKC's Bloch School of Management."
  },

  /* ── OKLAHOMA ───────────────────────────────────────── */
  "Tulsa": {
    cc: "Tulsa Community College",
    cc_city: "Tulsa, Oklahoma",
    target: "University of Tulsa / Oklahoma State University",
    gpa: "3.0",
    years: "2",
    note: "TCC feeds the University of Tulsa and OSU-Tulsa through transfer articulation agreements that reflect Tulsa's energy industry workforce needs. ONEOK, Williams Companies, and the petroleum engineering employers of Green Country specifically recruit TCC-to-UT transfers for engineering technology and business positions. TCC's annual tuition of $4,200 against UT's $46,000 annual cost creates a total savings of $83,600 over four years for students who transfer and complete at Tulsa."
  },

  /* ── ALABAMA ────────────────────────────────────────── */
  "Birmingham": {
    cc: "Jefferson State Community College",
    cc_city: "Birmingham, Alabama",
    target: "University of Alabama at Birmingham / Samford University",
    gpa: "3.0",
    years: "2",
    note: "Jefferson State feeds UAB through Alabama's Articulation and General Studies Committee agreements — the statewide articulation system that guarantees credit transfer between Alabama community colleges and public universities. UAB's nationally ranked medical school and health sciences programs create specific pathways for Jefferson State pre-health and nursing students. Birmingham's healthcare corridor, anchored by UAB Hospital and the Brookwood Baptist Health system, employs Jefferson State-to-UAB transfers at rates reflecting institutional proximity."
  },

  /* ── TEXAS (additional) ─────────────────────────────── */
  "Fort Worth": {
    cc: "Tarrant County College",
    cc_city: "Fort Worth, Texas",
    target: "Texas Christian University / UT Arlington",
    gpa: "3.2",
    years: "2",
    note: "TCC is the largest community college in the Dallas-Fort Worth Metroplex — 75,000 students, five campuses, formal transfer agreements with TCU and UT Arlington through the Pathways Transfer Scholarship. The Fort Worth aviation and defense corridor, anchored by American Airlines headquarters and Lockheed Martin's Fort Worth plant, creates engineering and business career pathways for TCC-to-UTA transfers that are specific to Fort Worth's industrial character. TCC's $2,200 annual tuition against TCU's $58,000 annual cost makes the transfer pathway the most financially significant in the Metroplex."
  },
  "El Paso": {
    cc: "El Paso Community College",
    cc_city: "El Paso, Texas",
    target: "University of Texas at El Paso / New Mexico State University",
    gpa: "2.8",
    years: "2",
    note: "EPCC feeds UTEP through the El Paso Community College-UTEP Transfer Agreement, one of the most seamless bilateral transfer systems in the Southwest. UTEP's nationally recognized border studies, engineering, and health sciences programs serve the binational El Paso-Juárez metropolitan economy. EPCC's annual tuition of $3,100 against UTEP's $8,900 creates a meaningful savings while maintaining proximity to the same employers and the same binational professional community. For first-generation students from El Paso's working-class communities, EPCC is the most accessible on-ramp to a professional career in the Southwest border economy."
  },

  /* ── LOUISIANA ──────────────────────────────────────── */
  "New Orleans": {
    cc: "Delgado Community College",
    cc_city: "New Orleans, Louisiana",
    target: "Tulane University / University of New Orleans",
    gpa: "3.2",
    years: "2",
    note: "Delgado feeds Tulane and UNO through Louisiana's transfer articulation system and the Tulane Transfer Merit Scholarship, which provides $10,000-$15,000 annually to qualifying Delgado transfers. New Orleans's hospitality, healthcare, and creative industries — the largest hospitality economy per capita in the South — create employment for Delgado-to-Tulane transfers in the specific economic sectors that New Orleans has built. Delgado's annual tuition of $4,300 against Tulane's $61,000 creates savings of $113,400 over four years for scholarship-eligible transfers."
  },

  /* ── CONNECTICUT ────────────────────────────────────── */
  "Hartford": {
    cc: "Capital Community College",
    cc_city: "Hartford, Connecticut",
    target: "University of Connecticut / Trinity College",
    gpa: "3.0",
    years: "2",
    note: "Capital CC feeds UConn through the Connecticut community college-to-university articulation agreement — one of the most formalized transfer systems in New England. Hartford's insurance and financial services corridor — Aetna, The Hartford, and the insurance industry headquarters that make Hartford the Insurance Capital of America — creates specific business and actuarial career pathways for Capital-to-UConn transfers. Capital's annual tuition of $4,300 against UConn's $17,000 in-state annual cost saves $25,400 over two years while maintaining Connecticut residency and employer proximity."
  },

  /* ── NEW MEXICO ─────────────────────────────────────── */
  "Albuquerque": {
    cc: "Central New Mexico Community College",
    cc_city: "Albuquerque, New Mexico",
    target: "University of New Mexico — Anderson School of Management",
    gpa: "3.0",
    years: "2",
    note: "CNM feeds UNM through the New Mexico common course numbering system — a statewide articulation framework that guarantees credit transfer between all New Mexico public institutions. The UNM Anderson School's business programs and the Sandia National Laboratories career pipeline create specific pathways for CNM-to-UNM business and engineering students. The New Mexico Lottery Scholarship covers UNM tuition for qualifying residents — meaning CNM students who transfer can complete their bachelor's degree at UNM for tuition costs approaching zero for eligible New Mexico residents."
  }

};

/* ══════════════════════════════════════════════════════
   findBridgePath(session)
   Returns a BRIDGE_DB entry or null.
   Called inside buildUniversityPrompt() when CR < 6.5.
   Uses session.metro (set by resolveZIPs) to find the
   closest matching entry via normalized metro key.
══════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
// resolveWorldId
// ─────────────────────────────────────────────────────────────

function resolveWorldId(input) {
  if (!input) return null;
  const key = String(input).toLowerCase().replace(/[^a-z_]/g, '');
  return WORLD_ALIAS[key] || null;
}

/* ── scoreIbisPipeline(school, session) — D7 ──
   Returns 0-10. Awards 5 points per world for which the school
   appears in that world's IBIS university_pipeline.

   Uses S7's legacyMatchScore() for school-name matching, which
   handles University of X / X University variants AND the
   disambiguation table for Michigan/Michigan State, etc. */

// ─────────────────────────────────────────────────────────────
// resolveStateFromZip
// ─────────────────────────────────────────────────────────────

function resolveStateFromZip(zip) {
  if (!zip || zip.length < 3) return null;
  const p = parseInt(zip.slice(0, 3), 10);
  if (p >= 10  && p <= 27)  return 'MA';
  if (p >= 28  && p <= 29)  return 'RI';
  if (p >= 30  && p <= 38)  return 'NH';
  if (p >= 39  && p <= 49)  return 'ME';
  if (p >= 50  && p <= 59)  return 'VT';
  if (p >= 60  && p <= 69)  return 'CT';
  if (p >= 70  && p <= 89)  return 'NJ';
  if (p >= 100 && p <= 149) return 'NY';
  if (p >= 150 && p <= 196) return 'PA';
  if (p >= 197 && p <= 199) return 'DE';
  if (p >= 200 && p <= 205) return 'DC';
  if (p >= 206 && p <= 219) return 'MD';
  if (p >= 220 && p <= 246) return 'VA';
  if (p >= 247 && p <= 268) return 'WV';
  if (p >= 270 && p <= 289) return 'NC';
  if (p >= 290 && p <= 299) return 'SC';
  if (p >= 300 && p <= 319) return 'GA';
  if (p >= 320 && p <= 349) return 'FL';
  if (p >= 350 && p <= 369) return 'AL';
  if (p >= 370 && p <= 385) return 'TN';
  if (p >= 386 && p <= 397) return 'MS';
  if (p >= 400 && p <= 427) return 'KY';
  if (p >= 430 && p <= 458) return 'OH';
  if (p >= 460 && p <= 479) return 'IN';
  if (p >= 480 && p <= 499) return 'MI';
  if (p >= 500 && p <= 528) return 'IA';
  if (p >= 530 && p <= 549) return 'WI';
  if (p >= 550 && p <= 567) return 'MN';
  if (p >= 570 && p <= 577) return 'SD';
  if (p >= 580 && p <= 588) return 'ND';
  if (p >= 590 && p <= 599) return 'MT';
  if (p >= 600 && p <= 629) return 'IL';
  if (p >= 630 && p <= 658) return 'MO';
  if (p >= 660 && p <= 679) return 'KS';
  if (p >= 680 && p <= 693) return 'NE';
  if (p >= 700 && p <= 714) return 'LA';
  if (p >= 716 && p <= 729) return 'AR';
  if (p >= 730 && p <= 749) return 'OK';
  if (p >= 750 && p <= 799) return 'TX';
  if (p >= 800 && p <= 816) return 'CO';
  if (p >= 820 && p <= 831) return 'WY';
  if (p >= 832 && p <= 838) return 'ID';
  if (p >= 840 && p <= 847) return 'UT';
  if (p >= 850 && p <= 865) return 'AZ';
  if (p >= 870 && p <= 884) return 'NM';
  if (p >= 889 && p <= 898) return 'NV';
  if (p >= 900 && p <= 961) return 'CA';
  if (p >= 970 && p <= 979) return 'OR';
  if (p >= 980 && p <= 994) return 'WA';
  if (p >= 995 && p <= 999) return 'AK';
  return null;
}

// ─────────────────────────────────────────────────────────────
// resolveRegionalBridgeKey
// ─────────────────────────────────────────────────────────────

function resolveRegionalBridgeKey(zip) {
  if (!zip || zip.length < 3) return null;
  const p = parseInt(zip.slice(0, 3), 10);

  /* ── CALIFORNIA ──────────────────────────────────────────────── */
  if (p >= 900 && p <= 908) return 'Los Angeles';       // LA metro proper
  if (p >= 910 && p <= 912) return 'Pasadena';          // San Gabriel Valley
  if (p >= 913 && p <= 916) return 'San Fernando Valley'; // SFV
  if (p >= 917 && p <= 918) return 'Orange County';     // North OC
  if (p >= 919 && p <= 921) return 'San Diego';
  if (p >= 922 && p <= 923) return 'Orange County';     // Inland Empire west → OC nearest
  if (p >= 924 && p <= 925) return 'Los Angeles';     // San Bernardino/Riverside → LA nearest
  if (p >= 926 && p <= 928) return 'Orange County';     // South OC (Irvine/Laguna)
  if (p === 929)             return 'Los Angeles';       // San Bernardino → LA nearest
  if (p >= 930 && p <= 931) return 'Ventura';           // Santa Barbara/Ventura
  if (p >= 932 && p <= 934) return 'Los Angeles';       // Bakersfield → LA (no closer entry)
  if (p >= 935 && p <= 939) return 'San Francisco';     // Fresno/Salinas → Bay Area nearest
  if (p >= 940 && p <= 941) return 'San Francisco';
  if (p === 942)             return 'Sacramento';
  if (p >= 943 && p <= 944) return 'Silicon Valley';    // Palo Alto/San Jose
  if (p >= 945 && p <= 949) return 'San Francisco';     // Oakland/Berkeley/Marin
  if (p >= 950 && p <= 952) return 'Silicon Valley';    // San Jose
  if (p >= 953 && p <= 958) return 'Sacramento';        // Central Valley north
  if (p >= 959 && p <= 961) return 'Sacramento';        // Northern CA

  /* ── OREGON ──────────────────────────────────────────────────── */
  if (p >= 970 && p <= 979) return 'Seattle';           // Portland → Seattle nearest

  /* ── WASHINGTON ─────────────────────────────────────────────── */
  if (p >= 980 && p <= 984) return 'Seattle';
  if (p === 985)             return 'Seattle';           // Olympia
  if (p >= 986 && p <= 988) return 'Seattle South';     // Tacoma/Bellevue
  if (p >= 989 && p <= 994) return 'Seattle';           // Eastern WA → Seattle

  /* ── HAWAII ──────────────────────────────────────────────────── */
  if (p >= 967 && p <= 968) return 'Honolulu';

  /* ── NEVADA ──────────────────────────────────────────────────── */
  if (p >= 889 && p <= 895) return 'Las Vegas';         // LV + Reno (only NV entry)
  if (p >= 897 && p <= 898) return 'Las Vegas';

  /* ── ARIZONA ─────────────────────────────────────────────────── */
  if (p >= 850 && p <= 855) return 'Phoenix';
  if (p >= 856 && p <= 858) return 'Tucson';
  if (p >= 859 && p <= 865) return 'Phoenix';           // Prescott/Flagstaff → Phoenix

  /* ── NEW MEXICO ──────────────────────────────────────────────── */
  if (p >= 870 && p <= 884) return 'Albuquerque';

  /* ── COLORADO ────────────────────────────────────────────────── */
  if (p >= 800 && p <= 802) return 'Denver';
  if (p >= 803 && p <= 807) return 'Boulder';           // Boulder/Fort Collins/Longmont
  if (p >= 808 && p <= 816) return 'Denver';            // Rest of CO

  /* ── TEXAS ───────────────────────────────────────────────────── */
  if (p >= 750 && p <= 759) return 'Dallas';
  if (p >= 760 && p <= 762) return 'Fort Worth';
  if (p === 763 || p === 764) return 'Dallas';          // Denton/Gainesville → Dallas
  if (p >= 765 && p <= 769) return 'Austin';            // Waco/Temple/Killeen → Austin nearest
  if (p >= 770 && p <= 778) return 'Houston';
  if (p === 779)             return 'San Antonio';      // Victoria → San Antonio
  if (p >= 780 && p <= 782) return 'San Antonio';
  if (p >= 783 && p <= 786) return 'Austin';            // Austin/San Marcos
  if (p >= 787 && p <= 788) return 'Austin';
  if (p === 789)             return 'San Antonio';      // Del Rio
  if (p >= 790 && p <= 797) return 'Dallas';            // West TX/Lubbock/Amarillo → Dallas
  if (p >= 798 && p <= 799) return 'El Paso';

  /* ── OKLAHOMA ────────────────────────────────────────────────── */
  if (p >= 730 && p <= 732) return 'Kansas City';       // OKC → Kansas City (nearest)
  if (p === 733 || p === 734) return 'Kansas City';
  if (p >= 740 && p <= 741) return 'Tulsa';
  if (p >= 743 && p <= 749) return 'Tulsa';

  /* ── KANSAS ──────────────────────────────────────────────────── */
  if (p >= 660 && p <= 679) return 'Kansas City';       // KS side of KC metro + state

  /* ── NEBRASKA ────────────────────────────────────────────────── */
  if (p >= 680 && p <= 693) return 'Kansas City';       // Omaha → KC nearest

  /* ── IOWA ────────────────────────────────────────────────────── */
  if (p >= 500 && p <= 528) return 'Kansas City';       // Iowa → KC nearest

  /* ── MISSOURI ────────────────────────────────────────────────── */
  if (p >= 630 && p <= 631) return 'St. Louis';
  if (p >= 633 && p <= 639) return 'St. Louis';
  if (p >= 640 && p <= 658) return 'Kansas City';

  /* ── MINNESOTA ───────────────────────────────────────────────── */
  if (p >= 550 && p <= 567) return 'Minneapolis';

  /* ── WISCONSIN ───────────────────────────────────────────────── */
  if (p >= 530 && p <= 549) return 'Chicago';           // WI → Chicago nearest

  /* ── ILLINOIS ────────────────────────────────────────────────── */
  if (p >= 600 && p <= 601) return 'Chicago';
  if (p >= 602 && p <= 604) return 'Chicago North';     // Evanston/North Shore
  if (p >= 605 && p <= 608) return 'Chicago';
  if (p === 609)             return 'Chicago West';     // Aurora/Elgin
  if (p >= 610 && p <= 629) return 'Chicago';           // Downstate IL → Chicago nearest

  /* ── MICHIGAN ────────────────────────────────────────────────── */
  if (p >= 480 && p <= 490) return 'Detroit';
  if (p >= 491 && p <= 499) return 'Detroit';           // Rest of MI

  /* ── OHIO ────────────────────────────────────────────────────── */
  if (p >= 430 && p <= 432) return 'Columbus';
  if (p >= 433 && p <= 436) return 'Columbus';
  if (p >= 437 && p <= 438) return 'Columbus';
  if (p >= 439 && p <= 441) return 'Cleveland';
  if (p >= 442 && p <= 445) return 'Cleveland';         // Akron → Cleveland
  if (p >= 446 && p <= 449) return 'Columbus';
  if (p >= 450 && p <= 452) return 'Columbus';          // Cincinnati → Columbus (no Cincy entry)
  if (p >= 453 && p <= 458) return 'Columbus';          // Dayton

  /* ── INDIANA ─────────────────────────────────────────────────── */
  if (p >= 460 && p <= 479) return 'Indianapolis';

  /* ── KENTUCKY ────────────────────────────────────────────────── */
  if (p >= 400 && p <= 418) return 'Nashville';         // KY → Nashville nearest
  if (p >= 419 && p <= 427) return 'Columbus';          // Eastern KY → Columbus nearest

  /* ── TENNESSEE ───────────────────────────────────────────────── */
  if (p >= 370 && p <= 372) return 'Nashville';
  if (p >= 373 && p <= 374) return 'Nashville';
  if (p === 375)             return 'Nashville';        // Cookeville
  if (p >= 376 && p <= 379) return 'Knoxville';
  if (p >= 380 && p <= 385) return 'Nashville';         // Memphis/West TN → Nashville

  /* ── ALABAMA ─────────────────────────────────────────────────── */
  if (p >= 350 && p <= 369) return 'Birmingham';

  /* ── MISSISSIPPI ─────────────────────────────────────────────── */
  if (p >= 386 && p <= 397) return 'Birmingham';        // MS → Birmingham nearest

  /* ── LOUISIANA ───────────────────────────────────────────────── */
  if (p >= 700 && p <= 714) return 'New Orleans';

  /* ── ARKANSAS ────────────────────────────────────────────────── */
  if (p >= 716 && p <= 729) return 'St. Louis';         // AR → St. Louis/Memphis nearest

  /* ── GEORGIA ─────────────────────────────────────────────────── */
  if (p >= 300 && p <= 312) return 'Atlanta';
  if (p >= 313 && p <= 319) return 'Atlanta';

  /* ── SOUTH CAROLINA ─────────────────────────────────────────── */
  if (p >= 290 && p <= 299) return 'Charlotte';         // SC → Charlotte nearest

  /* ── NORTH CAROLINA ─────────────────────────────────────────── */
  if (p >= 270 && p <= 272) return 'Raleigh';
  if (p === 273)             return 'Durham';
  if (p >= 274 && p <= 279) return 'Raleigh';           // Greensboro/Winston-Salem
  if (p >= 280 && p <= 289) return 'Charlotte';

  /* ── VIRGINIA ────────────────────────────────────────────────── */
  if (p >= 220 && p <= 223) return 'Northern Virginia';
  if (p >= 224 && p <= 229) return 'Charlottesville';   // Blue Ridge/Charlottesville
  if (p >= 230 && p <= 238) return 'Richmond';
  if (p >= 239 && p <= 246) return 'Richmond';          // Hampton Roads/SW VA

  /* ── WEST VIRGINIA ───────────────────────────────────────────── */
  if (p >= 247 && p <= 268) return 'Richmond';          // WV → Richmond nearest

  /* ── MARYLAND ────────────────────────────────────────────────── */
  if (p >= 206 && p <= 212) return 'Baltimore';
  if (p >= 213 && p <= 219) return 'Washington DC';     // Southern MD/Eastern Shore

  /* ── DC ──────────────────────────────────────────────────────── */
  if (p >= 200 && p <= 205) return 'Washington DC';

  /* ── DELAWARE ────────────────────────────────────────────────── */
  if (p >= 197 && p <= 199) return 'Philadelphia';      // DE → Philadelphia nearest

  /* ── PENNSYLVANIA ────────────────────────────────────────────── */
  if (p >= 150 && p <= 162) return 'Pittsburgh';
  if (p >= 163 && p <= 168) return 'Philadelphia';      // Scranton/Allentown
  if (p >= 169 && p <= 196) return 'Philadelphia';

  /* ── NEW JERSEY ─────────────────────────────────────────────── */
  if (p >= 70  && p <= 84)  return 'Philadelphia';      // South NJ → Philadelphia
  if (p >= 85  && p <= 89)  return 'New York City';     // North NJ → NYC

  /* ── NEW YORK ────────────────────────────────────────────────── */
  if (p >= 100 && p <= 104) return 'New York City';     // Manhattan/Bronx
  if (p >= 105 && p <= 109) return 'Westchester';
  if (p === 110)             return 'Queens';           // Brooklyn → Queens entry
  if (p >= 111 && p <= 112) return 'Queens';
  if (p >= 113 && p <= 118) return 'Long Island';
  if (p >= 119 && p <= 149) return 'New York City';     // Hudson Valley/Upstate/Buffalo

  /* ── CONNECTICUT ─────────────────────────────────────────────── */
  if (p >= 60  && p <= 69)  return 'Hartford';

  /* ── RHODE ISLAND ────────────────────────────────────────────── */
  if (p >= 28  && p <= 29)  return 'Boston';            // Providence → Boston nearest

  /* ── MASSACHUSETTS ───────────────────────────────────────────── */
  if (p >= 10  && p <= 24)  return 'Boston';
  if (p >= 25  && p <= 27)  return 'Lowell';            // Lowell/Lawrence area

  /* ── NEW HAMPSHIRE ───────────────────────────────────────────── */
  if (p >= 30  && p <= 38)  return 'Boston';            // NH → Boston nearest

  /* ── VERMONT ─────────────────────────────────────────────────── */
  if (p >= 50  && p <= 59)  return 'Boston';            // VT → Boston nearest

  /* ── MAINE ───────────────────────────────────────────────────── */
  if (p >= 39  && p <= 49)  return 'Boston';            // ME → Boston nearest

  return null;
}

// ─────────────────────────────────────────────────────────────
// scoreCareerPipeline
// ─────────────────────────────────────────────────────────────

function scoreCareerPipeline(school, session) {
  const hidden = (school.hidden_pathway || '').toLowerCase();
  const access = (school.disproportionate_access || '').toLowerCase();
  if (!hidden && !access) return 0;

  const id = getIdentity(session);
  const worlds  = Array.isArray(id.worlds_chosen) ? id.worlds_chosen : [];
  const primary = (id.primary_career || '').toLowerCase();

  let score = 0;
  const combined = hidden + ' ' + access;

  // World keyword matches — each world counted once
  let worldHits = 0;
  for (const world of worlds) {
    const key = String(world).toLowerCase().replace(/[^a-z_]/g, '');
    const keywords = WORLD_KEYWORDS[key] || [];
    if (keywords.some(kw => combined.includes(kw))) {
      score += 7;
      worldHits++;
    }
  }

  // Multi-world bonus — schools strong across multiple chosen worlds
  if (worldHits >= 2) score += 5;

  // Primary career match bonus
  if (primary && (hidden.includes(primary) || access.includes(primary))) {
    score += 6;
  }

  // Cap at 25
  return Math.min(25, score);
}

// ── D5: OOS Affinity ──
// Cross-state or student_only students get full weight.
// In-state / unknown get 50% weight.

// ─────────────────────────────────────────────────────────────
// scoreIbisPipeline
// ─────────────────────────────────────────────────────────────

function scoreIbisPipeline(school, session) {
  const id = getIdentity(session);
  const worlds = Array.isArray(id.worlds_chosen) ? id.worlds_chosen : [];
  if (worlds.length === 0 || !school.institution_name) return 0;

  let score = 0;
  for (const rawWorld of worlds) {
    const worldId = resolveWorldId(rawWorld);
    if (!worldId) continue;

    const world = IBIS_WORLD_REGISTRY[worldId];
    if (!world || !world.university_pipeline) continue;

    // Check if the school matches any name in the pipeline.
    // legacyMatchScore handles "Stanford" → "Stanford University", etc.
    for (const pipeName of world.university_pipeline) {
      if (legacyMatchScore(pipeName, school.institution_name) > 0) {
        score += 5;
        break;  // Only count once per world
      }
    }

    if (score >= 10) break;  // Already capped
  }

  return Math.min(10, score);
}


/* ══════════════════════════════════════════════════════
   S9c — COMPOSITE SCORING + 3-TIER SELECTION

   Wraps the 5 dimension functions into:
   1. scoreSchool() — composite score + per-dim breakdown
   2. selectThreeTiers() — primary/adjacent/unexpected picks

   D6 legacy boost (+10 flat) applied here, calling
   legacyMatchScore() from S7. No duplicate logic.
══════════════════════════════════════════════════════ */

/* ── scoreSchool(school, session) ─────────────────────────
   Returns: { total, breakdown:{d1,d2,d3,d4,d5,legacy,d7}, school_ref }
   Max possible: 110 (90 dimensions + 10 legacy + 10 IBIS pipeline)
*/

// ─────────────────────────────────────────────────────────────
// buildCareerLandscape
// ─────────────────────────────────────────────────────────────

function buildCareerLandscape(session) {
  const id = getIdentity(session);
  const worlds = Array.isArray(id.worlds_chosen) ? id.worlds_chosen : [];
  if (worlds.length === 0) return '';

  const blocks = [];
  const seenIds = new Set();

  for (const rawWorld of worlds) {
    const worldId = resolveWorldId(rawWorld);
    if (!worldId || seenIds.has(worldId)) continue;
    seenIds.add(worldId);

    const world = IBIS_WORLD_REGISTRY[worldId];
    if (!world) continue;

    const lines = [];
    lines.push((world.label || worldId).toUpperCase() + ' (growth: ' + (world.growth || 'unknown') + ')');

    if (Array.isArray(world.top_metros) && world.top_metros.length > 0) {
      lines.push('Top metros: ' + world.top_metros.join(', '));
    }

    if (Array.isArray(world.career_expressions) && world.career_expressions.length > 0) {
      lines.push('');
      lines.push('Specific careers in this world:');
      for (const c of world.career_expressions) {
        const yearsLabel = c.years === 0 ? 'no fixed training' : c.years + ' yrs';
        lines.push('- ' + c.title + ' \u2014 ' + yearsLabel + ', ' + (c.pay || 'pay varies'));
        if (c.path) lines.push('  Path: ' + c.path);
      }
    }

    blocks.push(lines.join('\n'));
  }

  if (blocks.length === 0) return '';

  return '\u2500\u2500 CAREER LANDSCAPE FOR YOUR WORLDS \u2500\u2500\n\n' +
         blocks.join('\n\n') + '\n';
}


/* ══════════════════════════════════════════════════════
   BRIDGE_DB — Community College Transfer Pathways
   50 entries covering all metros in METRO_DB.
   Used by buildUniversityPrompt() when session.vector_scores.CR < 6.5
   Lookup via findBridgePath(session) below.
══════════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────────────
// findBridgePath
// ─────────────────────────────────────────────────────────────

function findBridgePath(session) {
  const vs = session.vector_scores;

  /* ── Trigger 1: Academic gap ─────────────────────────
     CR score below 6.5 — student needs the CC credential
     pathway to build competitive transfer application. */
  const academicTrigger = vs && vs.CR !== undefined && vs.CR < 6.5;

  /* ── Trigger 2: Financial strategy ──────────────────
     Student is heading toward expensive post-graduate
     education (law, medicine, MBA, pharmacy, nursing).
     CC for first 2 years saves $40K–$80K before the
     graduate tuition investment compounds on top. */
  const career = (
    (session.identity && session.identity.primary_career) ||
    (session.career) || ''
  ).toLowerCase();
  const worlds = (
    (session.identity && session.identity.worlds_chosen) ||
    (session.worlds) || []
  );
  const expensiveGradPaths = [
    'law', 'attorney', 'lawyer', 'legal',
    'medicine', 'medical', 'physician', 'doctor', 'md',
    'mba', 'business school',
    'pharmacy', 'pharmacist',
    'dentist', 'dental',
    'veterinarian', 'vet school',
  ];
  const financialTrigger = expensiveGradPaths.some(function(w) {
    return career.includes(w) ||
      worlds.some(function(wd) { return String(wd).toLowerCase().includes(w); });
  });

  /* ── Trigger 3: Home preference ────────────────────
     Student wants to stay close to home (all in-state).
     CC pathway is naturally aligned — start local,
     transfer when ready. */
  const statePref = session.state_pref || 'any';
  const homePrefTrigger = statePref === '3in';

  /* ── Trigger 4: Small campus preference ────────────
     Student wants a small school. CC allows them to
     explore academic direction before committing to
     a specific small-college environment. */
  const campusPref = session.campus_size_pref || 'any';
  const smallCampusTrigger = campusPref === 'small';

  /* Neither trigger — no bridge path surfaced */
  if (!academicTrigger && !financialTrigger && !homePrefTrigger && !smallCampusTrigger) return null;

  /* Attach trigger reason so the prompt can frame correctly */
  const triggerReason = academicTrigger ? 'academic'
                      : financialTrigger ? 'financial'
                      : homePrefTrigger  ? 'home_preference'
                      : 'exploration';


  const metro = (session.metro || '').toLowerCase();
  const state  = (session.student_state || '').toUpperCase();

  /* Normalization map: METRO_DB metro → BRIDGE_DB key */
  const norm = [
    ['san francisco', 'San Francisco'],
    ['palo alto', 'Silicon Valley'],
    ['mountain view', 'Silicon Valley'],
    ['menlo park', 'Silicon Valley'],
    ['cupertino', 'Silicon Valley'],
    ['los angeles / venice', 'Los Angeles'],
    ['los angeles / hollywood', 'Los Angeles'],
    ['los angeles / beverly', 'Los Angeles'],
    ['los angeles / century', 'Los Angeles'],
    ['los angeles', 'Los Angeles'],
    ['pasadena', 'Pasadena'],
    ['san diego', 'San Diego'],
    ['orange county', 'Orange County'],
    ['ventura', 'Ventura'],
    ['foothill', 'Foothill'],
    ['sacramento', 'Sacramento'],
    ['san fernando', 'San Fernando Valley'],
    ['austin', 'Austin'],
    ['dallas', 'Dallas'],
    ['houston', 'Houston'],
    ['san antonio', 'San Antonio'],
    ['miami', 'Miami'],
    ['orlando', 'Orlando'],
    ['tampa', 'Tampa'],
    ['st. peter', 'Tampa'],
    ['sarasota', 'Florida Gulf Coast'],
    ['fort myers', 'Florida Gulf Coast'],
    ['naples', 'Florida Gulf Coast'],
    ['jacksonville', 'Jacksonville'],
    ['tallahassee', 'Tallahassee'],
    ['fort lauderdale', 'Fort Lauderdale'],
    ['new york city', 'New York City'],
    ['queens', 'Queens'],
    ['long island', 'Long Island'],
    ['westchester', 'Westchester'],
    ['chicago / lincoln park', 'Chicago North'],
    ['chicago / loop', 'Chicago'],
    ['chicago', 'Chicago'],
    ['seattle', 'Seattle'],
    ['bellevue', 'Seattle'],
    ['atlanta', 'Atlanta'],
    ['raleigh', 'Raleigh'],
    ['durham', 'Durham'],
    ['charlotte', 'Charlotte'],
    ['philadelphia', 'Philadelphia'],
    ['pittsburgh', 'Pittsburgh'],
    ['boston / cambridge', 'Boston'],
    ['boston / longwood', 'Boston'],
    ['boston', 'Boston'],
    ['lowell', 'Lowell'],
    ['nashville', 'Nashville'],
    ['knoxville', 'Knoxville'],
    ['denver', 'Denver'],
    ['boulder', 'Boulder'],
    ['phoenix', 'Phoenix'],
    ['tempe', 'Phoenix'],
    ['scottsdale', 'Phoenix'],
    ['mesa', 'Phoenix'],
    ['tucson', 'Tucson'],
    ['washington dc / chevy chase', 'Washington DC'],
    ['washington dc / georgetown', 'Washington DC'],
    ['washington dc', 'Washington DC'],
    ['northern virginia', 'Northern Virginia'],
    ['annandale', 'Northern Virginia'],
    ['minneapolis', 'Minneapolis'],
    ['las vegas', 'Las Vegas'],
    ['honolulu', 'Honolulu'],
    ['baltimore', 'Baltimore'],
  ];

  for (const [pattern, key] of norm) {
    if (metro.includes(pattern)) {
      const matched = BRIDGE_DB[key] || null;
      return matched ? Object.assign({}, matched, { trigger: triggerReason }) : null;
    }
  }

  /* State-level fallback */
  const stateFallback = {
    'CA': 'San Francisco',
    'TX': 'Austin',
    'FL': 'Florida Gulf Coast',
    'NY': 'New York City',
    'IL': 'Chicago',
    'WA': 'Seattle',
    'GA': 'Atlanta',
    'NC': 'Raleigh',
    'PA': 'Philadelphia',
    'MA': 'Boston',
    'TN': 'Nashville',
    'CO': 'Denver',
    'AZ': 'Phoenix',
    'MD': 'Washington DC',
    'DC': 'Washington DC',
    'VA': 'Northern Virginia',
    'MN': 'Minneapolis',
    'NV': 'Las Vegas',
    'HI': 'Honolulu',
  };

  const fallbackKey = stateFallback[state];
  const entry = fallbackKey ? (BRIDGE_DB[fallbackKey] || null) : null;
  if (entry) {
    /* Return a shallow copy with the trigger reason attached */
    return Object.assign({}, entry, { trigger: triggerReason });
  }
  return null;
}


// ─────────────────────────────────────────────────────────────
// MODULE EXPORTS (for Worker / Node environments)
// ─────────────────────────────────────────────────────────────
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    IBIS_WORLD_REGISTRY,
    WORLD_KEYWORDS,
    WORLD_ALIAS,
    BRIDGE_DB,
    resolveWorldId,
    resolveStateFromZip,
    resolveRegionalBridgeKey,
    scoreCareerPipeline,
    scoreIbisPipeline,
    buildCareerLandscape,
    findBridgePath,
  };
}
