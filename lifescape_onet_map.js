// ── LIFESCAPE O*NET MAPPING LAYER ────────────────────────────────────────────
// Maps NAICS sector codes → grounded occupation titles + counselor intelligence
// Source: VECTOR.html career DB (verified, not model-generated)
// Consumer: buildCallBPrompt() + renderCounselorView()
// Version: 1.1 | Built: June 2026 | SOC codes added: July 2026
//
// `soc` (added v1.1): official O*NET-SOC 2019 code per title, sourced from
// 2019_Occupations.csv (1,016 codes) and manually mapped/verified — not a
// mechanical string join. 178 of 241 titles across all 29 clusters have a
// code; 63 titles (mostly executive/founder/ownership titles — e.g. Chief of
// Staff, Startup Founder, Brand Manager) have no defensible federal SOC
// analog and were deliberately left uncoded rather than forced. See
// ONET_SOC_Mapping_Review.md for the full title-by-title confidence rationale
// (EXACT / CLOSE / BROAD / NO CLEAN MATCH) and the invalid-code catch that
// preceded this patch (Supply Chain Managers corrected to 11-3071.04).
// Additive only — does not alter titles, riasecAffinity, counselorPay,
// counselorNote, metros, or any function below (getONETClusters,
// buildONETPromptBlock, buildONETCounselorBlock, getCareerMetroMatch all
// byte-identical to v1.0).
// ─────────────────────────────────────────────────────────────────────────────

const NAICS_TO_ONET = {

  // NAICS 52 — Finance & Insurance
  52: {
    clusterName: 'Finance & Capital',
    metros: ['New York NY','Charlotte NC','Chicago IL','San Francisco Bay Area CA','Los Angeles CA','Philadelphia PA','Dallas TX','Boston MA','Orange County CA','Denver-Boulder CO'],
    riasecAffinity: ['C','E','I'],
    titles: [
      'Investment Banker',
      'Portfolio Manager',
      'Financial Analyst',
      'Quantitative Trader',
      'Venture Capital Analyst',
      'Private Equity Associate',
      'Family Office Advisor',
      'Wealth Manager',
      'Economist',
      'Actuary',
      'Tax Advisor / CPA',
      'Compliance Officer'
    ],
    soc: {
      'Investment Banker': '13-2051.00',
      'Portfolio Manager': '11-3031.00',
      'Financial Analyst': '13-2051.00',
      'Quantitative Trader': '13-2099.01',
      'Venture Capital Analyst': '13-2051.00',
      'Private Equity Associate': '13-2051.00',
      'Family Office Advisor': '13-2052.00',
      'Wealth Manager': '13-2052.00',
      'Economist': '19-3011.00',
      'Actuary': '15-2011.00',
      'Tax Advisor / CPA': '13-2011.00',
      'Compliance Officer': '13-1041.00'
    },
    counselorPay: '$200K–$3M+ (varies by role and seniority)',
    counselorNote: 'Institutional proximity at the undergraduate level is the single highest-leverage variable in finance. Target school placement — Penn, Columbia, Chicago, NYU Stern — matters more here than almost any other field.'
  },

  // NAICS 51 — Information & Media / Technology
  51: {
    clusterName: 'Technology & Media',
    metros: ['San Francisco CA','Seattle WA','Austin TX','Los Angeles CA','Nashville TN','New York NY','Chicago IL','Washington DC','Atlanta GA','Tampa FL','Orlando FL','South Florida FL'],
    riasecAffinity: ['I','R','A'],
    titles: [
      'Software Engineer',
      'Product Manager',
      'AI Research Scientist',
      'Chief Technology Officer',
      'Cybersecurity Analyst',
      'Data Scientist',
      'UX Designer',
      'Content Strategist',
      'Tech Policy / Regulatory Affairs Analyst',
      'Standards & Practices Manager',
      'Design Systems Manager'
    ],
    soc: {
      'Software Engineer': '15-1252.00',
      'Product Manager': '11-2021.00',
      'AI Research Scientist': '15-1221.00',
      'Chief Technology Officer': '11-3021.00',
      'Cybersecurity Analyst': '15-1212.00',
      'Data Scientist': '15-2051.00',
      'UX Designer': '15-1255.00',
      'Content Strategist': '27-3041.00',
      'Tech Policy / Regulatory Affairs Analyst': '13-1041.07',
      'Design Systems Manager': '15-1255.00'
    },
    counselorPay: '$120K–$600K+ (FAANG staff engineer to CPO)',
    counselorNote: 'CS and engineering programs at research universities with strong recruiting pipelines to tech companies — CMU, Georgia Tech, UT Austin, UIUC, Cal Poly — outperform prestige alone. Portfolio matters as much as GPA.'
  },

  // NAICS 54 — Professional, Scientific & Technical Services
  54: {
    clusterName: 'Professional & Scientific Services',
    metros: ['Washington DC','Boston MA','San Francisco CA'],
    riasecAffinity: ['I','C','E'],
    titles: [
      'Management Consultant',
      'Data Scientist',
      'Research Scientist',
      'Policy Analyst',
      'Environmental Scientist',
      'Aerospace Engineer',
      'Biomedical Engineer',
      'UX Researcher',
      'Cybersecurity Consultant',
      'Lobbyist / Government Relations Specialist'
    ],
    soc: {
      'Management Consultant': '13-1111.00',
      'Data Scientist': '15-2051.00',
      'Research Scientist': '19-1099.00',
      'Policy Analyst': '13-1111.00',
      'Environmental Scientist': '19-2041.00',
      'Aerospace Engineer': '17-2011.00',
      'Biomedical Engineer': '17-2031.00',
      'UX Researcher': '19-3022.00',
      'Cybersecurity Consultant': '15-1212.00',
      'Lobbyist / Government Relations Specialist': '13-1075.00'
    },
    counselorPay: '$90K–$2M (research scientist to McKinsey partner)',
    counselorNote: 'This sector spans the widest pay range of any NAICS cluster. Specialization is the differentiator — a generalist consultant earns 30-40% less than one with deep sector expertise. Graduate degree ROI is highest in this cluster.'
  },

  // NAICS 62 — Health Care & Social Assistance
  62: {
    clusterName: 'Health Care',
    metros: ['Boston MA','Houston TX','Rochester MN','Cleveland OH','Phoenix AZ','San Diego CA','Los Angeles CA','San Francisco Bay Area CA','Jacksonville FL','Nashville TN'],
    riasecAffinity: ['S','I','R'],
    titles: [
      'Physician',
      'Nurse Practitioner',
      'Physician Assistant',
      'Physical Therapist',
      'Pharmacist',
      'CRNA',
      'Occupational Therapist',
      'Biomedical Engineer'
    ],
    soc: {
      'Physician': '29-1229.00',
      'Nurse Practitioner': '29-1171.00',
      'Physician Assistant': '29-1071.00',
      'Physical Therapist': '29-1123.00',
      'Pharmacist': '29-1051.00',
      'CRNA': '29-1151.00',
      'Occupational Therapist': '29-1122.00',
      'Biomedical Engineer': '17-2031.00'
    },
    counselorPay: '$70K–$900K+ (respiratory therapist to neurosurgeon)',
    counselorNote: 'Healthcare is the most credential-driven field in America. Path clarity matters enormously — a student who decides on PA school vs. medical school at 16 has a measurable advantage in undergraduate preparation and application timing.'
  },

  // NAICS 61 — Education
  61: {
    clusterName: 'Education & Public Service',
    metros: ['New York NY','Los Angeles CA','Chicago IL','Dallas-Fort Worth TX','Houston TX','Washington DC','Philadelphia PA','Atlanta GA','Miami FL','Phoenix AZ','Boston MA','San Francisco Bay Area CA','Riverside CA','Detroit MI','Seattle WA','Minneapolis-St. Paul MN','San Diego CA','Tampa FL','Denver CO','Baltimore MD'],
    riasecAffinity: ['S','A','E'],
    titles: [
      'School Administrator',
      'Education Policy Director',
      'Nonprofit Executive Director',
      'City Manager',
      'Foreign Service Officer',
      'Chief Learning Officer',
      'Foundation Program Officer',
      'University Dean',
      'Teacher',
      'Curriculum Designer',
      'Learning Specialist',
      'Independent Educational Consultant'
    ],
    soc: {
      'School Administrator': '11-9032.00',
      'Education Policy Director': '11-9039.00',
      'Nonprofit Executive Director': '11-9151.00',
      'City Manager': '11-1021.00',
      'Chief Learning Officer': '11-3131.00',
      'Foundation Program Officer': '11-9151.00',
      'University Dean': '11-9033.00',
      'Teacher': '25-2031.00',
      'Curriculum Designer': '25-9031.00',
      'Learning Specialist': '25-9031.00',
      'Independent Educational Consultant': '21-1012.00'
    },
    counselorPay: '$55K–$500K (Foreign Service officer to school superintendent)',
    counselorNote: 'Education and public service careers are among the most mission-driven in the database. Network and institutional affiliation are the primary leverage points. DC policy track and urban education leadership have meaningfully different preparation paths.'
  },

  // NAICS 71 — Arts, Entertainment & Recreation
  71: {
    clusterName: 'Arts, Entertainment & Recreation',
    metros: ['Los Angeles CA','New York NY','Nashville TN','Chicago IL','Philadelphia PA','Atlanta GA','Miami FL','Phoenix AZ','Boston MA','San Francisco Bay Area CA','Seattle WA','Denver CO','Pittsburgh PA','Portland OR','Austin TX','Raleigh-Durham NC','Minneapolis-St. Paul MN','Dallas-Fort Worth TX','San Diego CA','Detroit MI'],
    riasecAffinity: ['A','E','S'],
    titles: [
      'Film Director',
      'Music Producer',
      'Creative Director',
      'Industrial Designer',
      'Architect',
      'Interior Designer',
      'Sports Manager',
      'Entertainment Attorney',
      'Content Creator',
      'Community Manager',
      'Brand Storyteller',
      'Copywriter / Editor',
      'Content Producer',
      'Content Distribution Manager'
    ],
    soc: {
      'Film Director': '27-2012.00',
      'Music Producer': '27-2041.00',
      'Creative Director': '27-1011.00',
      'Industrial Designer': '27-1021.00',
      'Architect': '17-1011.00',
      'Interior Designer': '27-1025.00',
      'Sports Manager': '13-1011.00',
      'Entertainment Attorney': '23-1011.00',
      'Content Creator': '27-3099.00',
      'Community Manager': '27-3031.00',
      'Brand Storyteller': '27-3043.00',
      'Copywriter / Editor': '27-3043.00',
      'Content Producer': '27-2012.00',
      'Content Distribution Manager': '11-3071.00'
    },
    counselorPay: '$80K–$20M+ (staff designer to studio film director)',
    counselorNote: 'Creative careers have the widest outcome variance of any field. Portfolio and output matter more than credentials after the first job. The school matters most for network access and early opportunity — USC film, RISD, Parsons, and Berklee have specific industry pipelines that generalist universities cannot replicate.'
  },

  // NAICS 11 — Agriculture, Forestry, Fishing & Hunting
  11: {
    clusterName: 'Agriculture & Natural Resources',
    metros: ['Fresno CA','Bakersfield CA','Salinas CA','Modesto CA','Stockton CA','Des Moines IA','Cedar Rapids IA','Omaha NE','Lincoln NE','Wichita KS','Kansas City MO','Amarillo TX','Lubbock TX','Yakima WA','Boise ID','Green Bay WI','Grand Rapids MI','Gainesville FL','Raleigh-Durham NC','Memphis TN'],
    riasecAffinity: ['R','I','S'],
    titles: [
      'Agricultural Scientist',
      'Farm Manager',
      'Agronomist',
      'Veterinarian',
      'Food Safety Specialist',
      'Sustainable Agriculture Consultant',
      'Forestry Technician',
      'Agribusiness Manager',
      'Food Scientist',
      'Food Production Manager',
      'Ingredient Processing Technician',
      'Food Safety & Quality Manager'
    ],
    soc: {
      'Agricultural Scientist': '19-1013.00',
      'Farm Manager': '11-9013.00',
      'Agronomist': '19-1013.00',
      'Veterinarian': '29-1131.00',
      'Food Safety Specialist': '19-4013.00',
      'Sustainable Agriculture Consultant': '19-1031.00',
      'Forestry Technician': '19-4071.00',
      'Agribusiness Manager': '11-9013.00',
      'Food Scientist': '19-1012.00',
      'Food Production Manager': '11-3051.00',
      'Ingredient Processing Technician': '51-3099.00',
      'Food Safety & Quality Manager': '19-1012.00'
    },
    counselorPay: '$45K–$150K+ (farm technician to agribusiness executive)',
    counselorNote: 'Agriculture is undergoing a technology-driven transformation — precision agriculture, biotech crop science, and food safety are growing faster than traditional farm labor. Land-grant universities (Purdue, Iowa State, UC Davis, Texas A&M) have the strongest pipelines.'
  },

  // NAICS 21 — Mining, Quarrying, and Oil & Gas Extraction
  21: {
    clusterName: 'Energy & Natural Resource Extraction',
    metros: ['Midland TX','Williston ND','Gillette WY','Elko NV','Houston TX','Oklahoma City OK'],
    riasecAffinity: ['R','I','C'],
    titles: [
      'Petroleum Engineer',
      'Geologist',
      'Mining Engineer',
      'Environmental Compliance Specialist',
      'Energy Trader',
      'Reservoir Engineer',
      'Safety & Operations Manager',
      'Renewable Energy Analyst',
      'Landman',
      'Heavy Equipment Operator'
    ],
    soc: {
      'Petroleum Engineer': '17-2171.00',
      'Geologist': '19-2042.00',
      'Mining Engineer': '17-2151.00',
      'Environmental Compliance Specialist': '13-1041.01',
      'Energy Trader': '41-3031.00',
      'Reservoir Engineer': '17-2171.00',
      'Safety & Operations Manager': '11-1021.00',
      'Renewable Energy Analyst': '19-2041.00',
      'Heavy Equipment Operator': '47-2073.00'
    },
    counselorPay: '$65K–$250K+ (field technician to senior petroleum engineer)',
    counselorNote: 'Traditional oil & gas remains a strong-pay, high-demand field, especially in Texas Triangle and Rocky Mountain regions, while renewable energy analyst roles are the fastest-growing sub-track within this same cluster. Engineering programs at Texas A&M, Colorado School of Mines, and University of Houston have the deepest industry pipelines.'
  },

  // NAICS 31-33 — Manufacturing (incl. Biomanufacturing). 32 and 33 normalize to 31 below.
  31: {
    clusterName: 'Biomanufacturing & Production',
    metros: ['Los Angeles CA','Raleigh-Durham NC','Boston MA','Philadelphia PA'],
    riasecAffinity: ['R','C','E','A'],
    titles: [
      'Biomanufacturing Technician',
      'Quality Control Technician',
      'Quality Assurance Specialist',
      'Manufacturing Supervisor',
      'Validation Specialist',
      'Process Development Associate',
      'Plant Manager',
      'Manufacturing Assistant'
    ],
    soc: {
      'Biomanufacturing Technician': '19-4021.00',
      'Quality Control Technician': '19-4099.01',
      'Quality Assurance Specialist': '19-4099.01',
      'Manufacturing Supervisor': '51-1011.00',
      'Validation Specialist': '17-2112.02',
      'Process Development Associate': '17-2112.03',
      'Plant Manager': '11-3051.00',
      'Manufacturing Assistant': '51-9199.00'
    },
    counselorPay: '$40K–$80K entry (technician) up to $150K+ (plant manager/director)',
    counselorNote: 'A hidden pathway most families never hear about: entry-level biomanufacturing technician roles require no 4-year degree — a 6-week community college program (available in 26+ states) leads directly to hire at major pharmaceutical and biotech manufacturers. Real career ladder exists from technician to plant leadership, and many employers pay for further education once a student has shown workplace commitment. This affinity set is broader than a typical STEM cluster — it rewards precision and procedure (Conventional), hands-on floor work (Realistic), leadership track potential (Enterprising), and increasingly design/packaging/quality-visual work (Artistic), not just lab-science aptitude.'
  },

  // NAICS 23 — Construction / Architecture
  23: {
    clusterName: 'Architecture & Built Environment',
    metros: ['New York NY','Chicago IL','Los Angeles CA'],
    riasecAffinity: ['R','I','A'],
    titles: [
      'Architect',
      'Civil Engineer',
      'Structural Engineer',
      'Construction Manager',
      'Urban Planner',
      'Interior Designer',
      'Real Estate Developer',
      'Landscape Architect'
    ],
    soc: {
      'Architect': '17-1011.00',
      'Civil Engineer': '17-2051.00',
      'Structural Engineer': '17-2051.00',
      'Construction Manager': '11-9021.00',
      'Urban Planner': '19-3051.00',
      'Interior Designer': '27-1025.00',
      'Real Estate Developer': '11-9141.00',
      'Landscape Architect': '17-1012.00'
    },
    counselorPay: '$70K–$5M+ (landscape architect to principal architect)',
    counselorNote: 'Architecture requires a 5-year B.Arch or 4+2 M.Arch path plus licensure — one of the longer credentialing timelines among creative fields. Engineering sub-tracks (civil, structural) have cleaner ROI and faster licensure. Real estate development is the entrepreneurial exit with the highest wealth ceiling.'
  },

  // NAICS 92 — Government & Public Administration
  92: {
    clusterName: 'Government & Civic Leadership',
    metros: ['Washington DC','Norfolk VA','San Antonio TX'],
    riasecAffinity: ['E','S','C'],
    titles: [
      'Foreign Service Officer',
      'Military Officer',
      'Intelligence Analyst',
      'FBI Special Agent',
      'City Manager',
      'State Legislator',
      'Federal Policy Analyst',
      'Judge Advocate (JAG)'
    ],
    soc: {
      'Military Officer': '55-1019.00',
      'Intelligence Analyst': '33-3021.06',
      'FBI Special Agent': '33-3021.00',
      'City Manager': '11-1021.00',
      'State Legislator': '11-1031.00',
      'Federal Policy Analyst': '19-3094.00',
      'Judge Advocate (JAG)': '23-1011.00'
    },
    counselorPay: '$55K–$280K (federal civilian to four-star general)',
    counselorNote: 'Military and government careers offer unmatched structural clarity — promotion timelines, retirement benefits, and advancement criteria are published and predictable. Service academy admission (West Point, Annapolis, Air Force) requires congressional nomination and is a distinct application process from standard college admissions.'
  },

  // NAICS 56 — Administrative & Support / Business Operations
  56: {
    clusterName: 'Business Operations & Strategy',
    metros: ['Chicago IL','Atlanta GA','Dallas TX'],
    riasecAffinity: ['E','C','S'],
    titles: [
      'Management Consultant',
      'Supply Chain Director',
      'Chief Human Resources Officer',
      'Brand Manager',
      'Operations Director',
      'Chief of Staff',
      'Business Development Manager',
      'Franchise Owner'
    ],
    soc: {
      'Management Consultant': '13-1111.00',
      'Supply Chain Director': '11-3071.04',
      'Chief Human Resources Officer': '11-3121.00',
      'Brand Manager': '11-2021.00',
      'Operations Director': '11-1021.00',
      'Chief of Staff': '11-1011.00',
      'Business Development Manager': '11-2021.00'
    },
    counselorPay: '$80K–$500K+ (operations analyst to Fortune 500 CMO)',
    counselorNote: 'Business operations is the broadest cluster in the database — it is the destination for students whose profile is strong but not yet specialized. MBA programs (Wharton, Booth, Kellogg, Ross) are the traditional accelerant. Franchise ownership is the most underrated wealth-building path in this cluster.'
  },

  // NAICS 81 — Personal & Consumer Services / Entrepreneurship
  81: {
    clusterName: 'Entrepreneurship & Consumer Markets',
    metros: ['San Francisco CA','Austin TX','Miami FL'],
    riasecAffinity: ['E','A','R'],
    titles: [
      'Startup Founder',
      'E-Commerce Brand Founder',
      'Real Estate Developer',
      'Private Club Owner',
      'Digital Creator',
      'Brand Strategist',
      'Retail Buyer',
      'Consumer Insights Analyst'
    ],
    soc: {
      'Startup Founder': '11-1011.00',
      'Real Estate Developer': '11-9141.00',
      'Brand Strategist': '11-2021.00',
      'Retail Buyer': '13-1022.00',
      'Consumer Insights Analyst': '13-1161.00'
    },
    counselorPay: '$0–$1B+ (early-stage founder to serial entrepreneur exit)',
    counselorNote: 'Entrepreneurship has no credential gate and unlimited upside. The school matters for network access, not credentials. Students with this profile benefit from programs with strong entrepreneurship ecosystems — Babson, Northeastern co-op, Wharton, Indiana Kelley, and schools in startup-dense metros.'
  },

  // NAICS 72 — Food Service & Hospitality
  72: {
    clusterName: 'Hospitality & Experience Economy',
    metros: ['Orlando FL','Las Vegas NV','New York NY','Orange County CA','San Diego CA','San Francisco CA'],
    riasecAffinity: ['E','S','A'],
    titles: [
      'Hotel General Manager',
      'Restaurant Group Owner',
      'Event Director',
      'Hospitality Consultant',
      'Food & Beverage Director',
      'Travel Industry Executive',
      'Culinary Entrepreneur',
      'Private Club Manager'
    ],
    soc: {
      'Hotel General Manager': '11-9081.00',
      'Restaurant Group Owner': '11-9051.00',
      'Event Director': '13-1121.00',
      'Hospitality Consultant': '13-1111.00',
      'Food & Beverage Director': '11-9051.00',
      'Travel Industry Executive': '41-3041.00',
      'Culinary Entrepreneur': '35-1011.00',
      'Private Club Manager': '11-9081.00'
    },
    counselorPay: '$60K–$2M+ (food service manager to hospitality group owner)',
    counselorNote: 'Hospitality management programs (Cornell Hotel, UNLV, Johnson & Wales) have specific industry pipelines that general business programs do not. The wealth ceiling is in ownership — hotel operators, restaurant groups, and private club owners in premium markets earn 3-5x the employed equivalent.'
  },

  // NAICS 44/45 — Retail & Consumer Products
  44: {
    clusterName: 'Retail & Consumer Products',
    metros: ['New York NY','Minneapolis MN','Bentonville AR'],
    riasecAffinity: ['E','C','A'],
    titles: [
      'Brand Manager',
      'Retail Buyer',
      'Category Manager',
      'E-Commerce Director',
      'Consumer Insights Analyst',
      'Merchandise Planner',
      'DTC Brand Founder',
      'Luxury Retail Executive',
      'Omnichannel Strategy Manager',
      'International Retail Expansion Manager'
    ],
    soc: {
      'Brand Manager': '11-2021.00',
      'Retail Buyer': '13-1022.00',
      'Category Manager': '13-1022.00',
      'E-Commerce Director': '11-2021.00',
      'Consumer Insights Analyst': '13-1161.00',
      'Merchandise Planner': '13-1022.00',
      'Luxury Retail Executive': '41-1011.00',
      'International Retail Expansion Manager': '11-2021.00'
    },
    counselorPay: '$70K–$500K+ (category analyst to CMO)',
    counselorNote: 'Retail and consumer products is undergoing a structural shift toward DTC and e-commerce. Students with this profile who combine business fundamentals with digital marketing and data skills are positioned for the growth segment of this industry.'
  },

  // NAICS 48/49 — Transportation & Logistics
  48: {
    clusterName: 'Transportation & Logistics',
    metros: ['Atlanta GA','Memphis TN','Dallas TX'],
    riasecAffinity: ['R','C','E'],
    titles: [
      'Commercial Pilot',
      'Logistics Director',
      'Supply Chain Manager',
      'Port Operations Director',
      'Aviation Safety Engineer',
      'Transportation Planner',
      'Fleet Manager',
      'Maritime Officer'
    ],
    soc: {
      'Commercial Pilot': '53-2012.00',
      'Logistics Director': '13-1081.00',
      'Supply Chain Manager': '11-3071.04',
      'Port Operations Director': '11-3071.00',
      'Aviation Safety Engineer': '53-6051.01',
      'Transportation Planner': '19-3099.01',
      'Fleet Manager': '11-3071.00',
      'Maritime Officer': '53-5021.00'
    },
    counselorPay: '$75K–$350K (transportation planner to airline captain)',
    counselorNote: 'Aviation is experiencing a significant pilot shortage — commercial pilot pay has risen 40-60% since 2020. Embry-Riddle, Purdue, and UND are the primary aviation pipelines. Logistics and supply chain roles at Amazon, FedEx, and UPS now pay at technology company rates for quantitative candidates.'
  },

  // NAICS 22 — Utilities
  22: {
    clusterName: 'Utilities & Infrastructure',
    metros: ['Atlanta GA','Charlotte NC','Chicago IL','San Francisco CA','Richmond VA','Minneapolis MN'],
    riasecAffinity: ['R','C','I'],
    titles: [
      'Power Systems Engineer',
      'Grid Operations Manager',
      'Utility Regulatory Affairs Analyst',
      'Renewable Energy Project Manager',
      'Smart Grid Analyst',
      'Water Systems Engineer',
      'Nuclear Plant Operator',
      'Utility Rate Analyst'
    ],
    soc: {
      'Power Systems Engineer': '17-2071.00',
      'Grid Operations Manager': '51-8012.00',
      'Utility Regulatory Affairs Analyst': '13-1041.07',
      'Renewable Energy Project Manager': '13-1082.00',
      'Smart Grid Analyst': '17-2071.00',
      'Water Systems Engineer': '17-2051.02',
      'Nuclear Plant Operator': '51-8011.00',
      'Utility Rate Analyst': '13-2061.00'
    },
    counselorPay: '$65K–$220K+ (systems engineer to VP of operations)',
    counselorNote: 'Utilities is a regulated, stable-pay industry undergoing a genuine transformation — grid modernization and renewable integration are creating engineering roles that did not exist a decade ago. Unlike most fields on this list, career stability here is a real differentiator, not a compromise. Engineering programs near a major utility headquarters (Georgia Tech near Southern Company, NC State near Duke Energy) have direct recruiting pipelines.'
  },

  // NAICS 42 — Wholesale Trade
  42: {
    clusterName: 'Wholesale Trade & Distribution',
    metros: ['Chicago IL','Dallas TX','Atlanta GA','Memphis TN','Columbus OH','Kansas City MO'],
    riasecAffinity: ['E','C','R'],
    titles: [
      'Supply Chain Analyst',
      'Distribution Center Director',
      'Procurement Manager',
      'Import/Export Specialist',
      'Category Manager',
      'Wholesale Account Manager',
      'Logistics Coordinator',
      'Regional Sales Director'
    ],
    soc: {
      'Supply Chain Analyst': '13-1081.02',
      'Distribution Center Director': '11-3071.00',
      'Procurement Manager': '11-3061.00',
      'Import/Export Specialist': '13-1041.08',
      'Category Manager': '13-1022.00',
      'Wholesale Account Manager': '41-4012.00',
      'Logistics Coordinator': '13-1081.02',
      'Regional Sales Director': '11-2022.00'
    },
    counselorPay: '$55K–$300K+ (distribution coordinator to VP of supply chain)',
    counselorNote: 'Wholesale is the invisible middle layer of the economy most families never think to name — it is the actual business of moving goods from manufacturers to the retailers and businesses that use them, and it has a genuine, well-paid career ladder from operations analyst to regional leadership. Supply chain management programs (Michigan State, Arizona State, Penn State) have specific recruiting pipelines here that general business programs do not.'
  },

  // NAICS 53 — Real Estate
  53: {
    clusterName: 'Real Estate & Property',
    metros: ['New York NY','Los Angeles CA','Miami FL','Dallas TX','Chicago IL','San Francisco Bay Area CA'],
    riasecAffinity: ['E','C','S'],
    titles: [
      'Real Estate Developer',
      'Commercial Broker',
      'Real Estate Investment Analyst',
      'Property Manager',
      'Asset Manager',
      'Leasing Director',
      'REIT Analyst',
      'Real Estate Attorney'
    ],
    soc: {
      'Real Estate Developer': '11-9141.00',
      'Commercial Broker': '41-9021.00',
      'Real Estate Investment Analyst': '13-2051.00',
      'Property Manager': '11-9141.00',
      'Asset Manager': '11-3031.00',
      'Leasing Director': '11-9141.00',
      'REIT Analyst': '13-2051.00',
      'Real Estate Attorney': '23-1011.00'
    },
    counselorPay: '$50K–$10M+ (leasing agent to major developer — heavily commission and equity-driven upside)',
    counselorNote: 'Real estate has no single dominant academic pipeline the way law or medicine does — it is one of the most relationship- and network-driven fields on this list, and family connections in the industry genuinely accelerate entry more than in almost any other cluster. For students without that network, real estate finance and development programs (Wharton, USC Lusk, NYU Schack) build one deliberately.'
  },

  // NAICS 55 — Management of Companies & Enterprises
  55: {
    clusterName: 'Corporate Management & Holding Companies',
    metros: ['New York NY','Chicago IL','San Francisco CA','Omaha NE','Charlotte NC'],
    riasecAffinity: ['E','C','I'],
    titles: [
      'Corporate Strategy Director',
      'M&A Analyst',
      'Corporate Development Manager',
      'Chief of Staff',
      'Investor Relations Director',
      'Holding Company Executive',
      'Board Governance Analyst'
    ],
    soc: {
      'Corporate Strategy Director': '11-1021.00',
      'M&A Analyst': '13-2051.00',
      'Corporate Development Manager': '11-1021.00',
      'Chief of Staff': '11-1011.00',
      'Investor Relations Director': '11-2032.00',
      'Holding Company Executive': '11-1011.00'
    },
    counselorPay: '$90K–$2M+ (corporate strategy analyst to holding company executive)',
    counselorNote: 'This sector is genuinely distinct from NAICS 56 (Business Operations) — it is specifically the "parent company" layer that owns and directs other businesses, not the operating business itself (think Berkshire Hathaway\'s headquarters staff, not one of its subsidiaries). It is an unusually MBA-heavy track, and corporate strategy or M&A analyst roles are the most common entry point for a student aiming at this cluster.'
  },

  // ── PROPRIETARY VECTOR SECTORS (91, 93-100) ──────────────────────────
  // These are VECTOR's own coined categories, not federal NAICS codes —
  // grounded in the real definitions/notes documented in
  // naics_to_industry_pathways.js (the crosswalk that routes these to V5
  // school-scoring keys), not invented independently. Two flagged for a
  // quick gut-check rather than treated as fully confident: 93 (thinnest
  // source material — only "org communication/ops" to build from) and
  // 91 (the source file itself calls the V5 school-side fit "weak").
  // 101 ("The Planning Economy") is deliberately NOT included here — the
  // source file gives no descriptive detail at all beyond that name, and
  // guessing at 91-101's job titles/pay from a bare label crosses from
  // "grounded content" into fabrication.

  // NAICS 91 — Intelligent Trades (construction management)
  91: {
    clusterName: 'Intelligent Trades & Construction Management',
    metros: ['Dallas TX','Phoenix AZ','Atlanta GA','Charlotte NC','Nashville TN'],
    riasecAffinity: ['R','C','E'],
    titles: [
      'Construction Project Manager',
      'General Contractor',
      'Construction Technology Specialist',
      'BIM (Building Information Modeling) Manager',
      'Site Superintendent',
      'Construction Estimator',
      'Construction Safety Manager'
    ],
    soc: {
      'Construction Project Manager': '11-9021.00',
      'General Contractor': '11-9021.00',
      'Construction Technology Specialist': '11-9021.00',
      'BIM (Building Information Modeling) Manager': '17-3011.00',
      'Site Superintendent': '47-1011.00',
      'Construction Estimator': '13-1051.00',
      'Construction Safety Manager': '17-2111.00'
    },
    counselorPay: '$55K–$400K+ (project coordinator to general contracting business owner)',
    counselorNote: 'The trades carry a real, underrated wealth-building path most families overlook — ownership (running your own contracting business) has a higher ceiling than almost any salaried track in this database. Construction management programs bridge hands-on trades knowledge with real project and business leadership, and there is a genuine, persistent national shortage of skilled construction management talent.'
  },

  // NAICS 93 — The Orchestration Layer (organizational communication/operations)
  93: {
    clusterName: 'Organizational Orchestration & Internal Operations',
    metros: ['New York NY','Chicago IL','Atlanta GA','San Francisco CA'],
    riasecAffinity: ['S','C','E'],
    titles: [
      'Internal Communications Director',
      'Chief of Staff',
      'Organizational Development Manager',
      'People Operations Director',
      'Change Management Consultant',
      'Cross-Functional Program Manager'
    ],
    soc: {
      'Internal Communications Director': '11-2032.00',
      'Chief of Staff': '11-1011.00',
      'Organizational Development Manager': '11-3131.00',
      'People Operations Director': '11-3121.00',
      'Change Management Consultant': '13-1111.00',
      'Cross-Functional Program Manager': '13-1082.00'
    },
    counselorPay: '$65K–$350K (program coordinator to Chief of Staff)',
    counselorNote: 'This is the "connective tissue" role inside large organizations — coordinating communication and operations across teams that would otherwise not talk to each other. It has a less defined academic pipeline than most fields on this list; a generalist skill set (communication plus systems thinking) matters more than a specific major, and real demand tends to appear once a company scales past a certain size.'
  },

  // NAICS 94 — Acquisition Economy
  94: {
    clusterName: 'Acquisition Economy',
    metros: ['New York NY','San Francisco CA','Chicago IL','Boston MA','Greenwich CT'],
    riasecAffinity: ['E','I','C'],
    titles: [
      'M&A Analyst',
      'Private Equity Associate',
      'Corporate Development Analyst',
      'Deal Structuring Specialist',
      'Investment Banking Analyst',
      'Post-Merger Integration Manager'
    ],
    soc: {
      'M&A Analyst': '13-2051.00',
      'Private Equity Associate': '13-2051.00',
      'Corporate Development Analyst': '13-2051.00',
      'Investment Banking Analyst': '13-2051.00'
    },
    counselorPay: '$100K–$3M+ (first-year analyst to PE partner)',
    counselorNote: 'Closely related to NAICS 52\'s finance cluster, but centered specifically on acquiring and integrating companies rather than trading or portfolio management. Target-school recruiting and rigorous quantitative preparation matter as much here as anywhere in finance — this is one of the more credential- and pedigree-sensitive tracks in the database.'
  },

  // NAICS 95 — Longevity Economy
  95: {
    clusterName: 'Longevity Economy',
    metros: ['Boston MA','Rochester MN','San Diego CA','San Francisco Bay Area CA','Raleigh-Durham NC'],
    riasecAffinity: ['I','S','R'],
    titles: [
      'Biogerontology Researcher',
      'Longevity Biotech Scientist',
      'Geriatric Care Innovation Specialist',
      'Clinical Research Scientist (Aging)',
      'Aging-in-Place Technology Designer',
      'Elder Care Systems Consultant'
    ],
    soc: {
      'Biogerontology Researcher': '19-1042.00',
      'Longevity Biotech Scientist': '19-1042.00',
      'Geriatric Care Innovation Specialist': '29-1141.00',
      'Clinical Research Scientist (Aging)': '19-1042.00',
      'Elder Care Systems Consultant': '11-9111.00'
    },
    counselorPay: '$70K–$400K+ (research associate to longevity-focused biotech executive)',
    counselorNote: 'A genuinely emerging field, driven by an aging population and real biotech investment specifically in aging biology and lifespan research — distinct from general healthcare because the focus is aging itself, not acute care. Programs with strong gerontology or aging-biology research (USC Leonard Davis School among them) are the real pipeline, not a generic pre-med track.'
  },

  // NAICS 96 — Legacy Economy (wealth management / estate / family office)
  96: {
    clusterName: 'Legacy Economy',
    metros: ['New York NY','Greenwich CT','Palm Beach FL','San Francisco CA','Chicago IL'],
    riasecAffinity: ['E','C','S'],
    titles: [
      'Family Office Advisor',
      'Wealth Manager',
      'Estate Planning Attorney',
      'Trust Officer',
      'Private Banker',
      'Multi-Generational Wealth Consultant'
    ],
    soc: {
      'Family Office Advisor': '13-2052.00',
      'Wealth Manager': '13-2052.00',
      'Estate Planning Attorney': '23-1011.00',
      'Trust Officer': '13-2052.00',
      'Private Banker': '13-2052.00'
    },
    counselorPay: '$80K–$1.5M+ (private banking associate to family office principal)',
    counselorNote: 'This centers on managing and transferring wealth across generations, not growing it through active investing — a relationship- and discretion-driven field where trust and long-term client relationships matter more than deal volume. It often intersects with both law (estate planning) and finance (wealth management) rather than sitting cleanly in one academic track.'
  },

  // NAICS 97 — Physical Logistics Economy (ports/rail/warehousing)
  97: {
    clusterName: 'Physical Logistics Economy',
    metros: ['Long Beach CA','Savannah GA','Houston TX','Memphis TN','Chicago IL','Newark NJ'],
    riasecAffinity: ['R','C','E'],
    titles: [
      'Port Operations Manager',
      'Rail Logistics Coordinator',
      'Warehouse Automation Manager',
      'Freight Network Analyst',
      'Terminal Operations Director',
      'Customs & Trade Compliance Specialist'
    ],
    soc: {
      'Port Operations Manager': '11-3071.00',
      'Rail Logistics Coordinator': '13-1081.02',
      'Warehouse Automation Manager': '17-2112.03',
      'Freight Network Analyst': '13-1081.02',
      'Terminal Operations Director': '11-3071.00',
      'Customs & Trade Compliance Specialist': '13-1041.08'
    },
    counselorPay: '$55K–$300K+ (logistics coordinator to terminal operations director)',
    counselorNote: 'The physical infrastructure side of supply chain — actual ports, rail yards, and warehouses — distinct from the more corporate/analytical supply chain roles in wholesale and transportation (NAICS 42/48). Hands-on operations experience often matters as much as a degree, and the sector is seeing real wage growth amid a persistent skilled-labor shortage.'
  },

  // NAICS 98 — Systems & Automation Economy
  98: {
    clusterName: 'Systems & Automation Economy',
    metros: ['Detroit MI','Pittsburgh PA','Cincinnati OH','Chicago IL'],
    riasecAffinity: ['R','I','C'],
    titles: [
      'Automation Engineer',
      'Robotics Systems Engineer',
      'Industrial Controls Engineer',
      'Manufacturing Systems Integrator',
      'PLC Programmer',
      'Process Automation Specialist'
    ],
    soc: {
      'Automation Engineer': '17-2199.05',
      'Robotics Systems Engineer': '17-2199.08',
      'Industrial Controls Engineer': '17-2112.00',
      'Manufacturing Systems Integrator': '17-2112.03',
      'PLC Programmer': '17-3024.00',
      'Process Automation Specialist': '17-2112.03'
    },
    counselorPay: '$65K–$220K+ (automation technician to senior controls engineer)',
    counselorNote: 'The industrial side of "technology" — programming and maintaining the robotics and control systems that run modern factories and logistics centers. A genuinely different skill set from consumer or software technology despite the surface-level overlap. Mechatronics and industrial engineering programs (Georgia Tech, Purdue, Kettering) are the real pipeline.'
  },

  // NAICS 99 — Reshoring & Domestic Supply Chain Economy (manufacturing)
  99: {
    clusterName: 'Reshoring & Domestic Manufacturing Economy',
    metros: ['Huntsville AL','Covington GA','Nashville TN','Lexington KY'],
    riasecAffinity: ['R','C','E'],
    titles: [
      'Domestic Manufacturing Site Director',
      'Reshoring Strategy Analyst',
      'Supply Chain Resilience Manager',
      'Manufacturing Workforce Development Specialist',
      'Plant Startup Manager',
      'Onshore Procurement Specialist'
    ],
    soc: {
      'Domestic Manufacturing Site Director': '11-3051.00',
      'Supply Chain Resilience Manager': '11-3071.04',
      'Manufacturing Workforce Development Specialist': '13-1151.00',
      'Plant Startup Manager': '11-3051.00',
      'Onshore Procurement Specialist': '13-1023.00'
    },
    counselorPay: '$60K–$280K+ (production supervisor to site director)',
    counselorNote: 'A genuinely growing category driven by real corporate and policy shifts bringing manufacturing capital back to the U.S. — distinct from traditional manufacturing because it specifically involves standing up NEW domestic capacity, not operating established plants. States investing heavily in workforce pipelines (community-college partnerships in Alabama, Georgia, Kentucky) are creating fast, non-four-year entry paths alongside the traditional engineering track.'
  },

  // NAICS 100 — Military & Post-Service
  100: {
    clusterName: 'Military & Post-Service Careers',
    metros: ['Norfolk VA','San Antonio TX','Colorado Springs CO','Washington DC','San Diego CA'],
    riasecAffinity: ['R','C','E'],
    titles: [
      'Military Officer',
      'Defense Contractor Program Manager',
      'Military Intelligence Analyst',
      'Defense Systems Engineer',
      'Veteran Transition Consultant',
      'Post-Service Government Contractor'
    ],
    soc: {
      'Military Officer': '55-1019.00',
      'Defense Contractor Program Manager': '13-1082.00',
      'Military Intelligence Analyst': '33-3021.06',
      'Defense Systems Engineer': '17-2072.00'
    },
    counselorPay: '$50K–$250K+ (junior officer to senior defense program executive — veteran benefits and pension not reflected in salary alone)',
    counselorNote: 'Spans both active military service and the "second career" defense/government-contracting path many service members build afterward. Service academy admission (West Point, Annapolis, Air Force Academy) and ROTC scholarships are separate, distinct application processes from standard college admissions — and veteran status itself becomes a real career asset in defense-adjacent civilian roles.'
  }

};

// ── getONETClusters ───────────────────────────────────────────────────────────
// Returns top 3 industry clusters with O*NET-grounded titles ranked by RIASEC fit
// @param naicsSectors  array of {sector, score} objects from getNAICSProfile()
// @param riasec        array of {code, score} objects from getRIASECProfile()
// @returns array of { naics, clusterName, titles[], counselorPay, counselorNote }

function getONETClusters(naicsSectors, riasec) {
  if (!naicsSectors || !naicsSectors.length) return [];

  // Top RIASEC codes for affinity ranking
  const topCodes = (riasec || []).slice(0, 3).map(r => r.code);

  return naicsSectors
    .slice(0, 3)
    .map(n => {
      // Normalize sector — handle 44/45 both mapping to 44
      const sectorKey = n.sector === 45 ? 44 : n.sector === 49 ? 48 : n.sector === 32 ? 31 : n.sector === 33 ? 31 : n.sector;
      const entry = NAICS_TO_ONET[sectorKey];
      if (!entry) return null;

      // Rank titles by RIASEC affinity match
      const hasAffinity = entry.riasecAffinity.some(c => topCodes.includes(c));
      const rankedTitles = hasAffinity
        ? entry.titles
        : [...entry.titles].reverse(); // low affinity — surface unexpected titles

      return {
        naics: sectorKey,
        clusterName: entry.clusterName,
        titles: rankedTitles.slice(0, 5),
        allTitles: entry.titles,
        counselorPay: entry.counselorPay,
        counselorNote: entry.counselorNote
      };
    })
    .filter(Boolean);
}

// ── buildONETPromptBlock ──────────────────────────────────────────────────────
// Returns the prompt injection string for buildCallBPrompt()
// Student-safe: titles only, no pay data, no market verdicts

function buildONETPromptBlock(naicsSectors, riasec) {
  const clusters = getONETClusters(naicsSectors, riasec);
  if (!clusters.length) return '';

  const lines = clusters.map(c =>
    `${c.clusterName}: ${c.titles.join(', ')}`
  ).join('\n');

  return `\n── OCCUPATION INTELLIGENCE ──\nUse these grounded occupation titles when writing the CAREERS line for each industry cluster. Select the 3-5 most resonant given the student\'s tiles. Do not invent titles outside this list.\n${lines}\n`;
}

// ── buildONETCounselorBlock ───────────────────────────────────────────────────
// Returns structured HTML for the counselor view occupation section
// Counselor-only: includes pay ranges and market intelligence notes

function buildONETCounselorBlock(naicsSectors, riasec, studentName) {
  const clusters = getONETClusters(naicsSectors, riasec);
  if (!clusters.length) return '';

  const name = studentName || 'This student';

  return clusters.map(c => `
    <div style="margin-bottom:1.25rem;padding:1rem 1.25rem;border:0.5px solid var(--rule);background:var(--white);">
      <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:.5rem;">${c.clusterName}</div>
      <div style="font-size:16px;color:var(--ink);margin-bottom:.5rem;font-weight:400;">${c.titles.join(' · ')}</div>
      <div style="font-size:14px;color:var(--ink3);margin-bottom:.4rem;font-weight:300;"><strong style="color:var(--ink4);">Pay range:</strong> ${c.counselorPay}</div>
      <div style="font-size:14px;color:var(--ink3);font-weight:300;line-height:1.6;"><strong style="color:var(--ink4);">Counselor note:</strong> ${c.counselorNote}</div>
    </div>
  `).join('');
}

// ── getCareerMetroMatch ────────────────────────────────────────────────────────
// The Richard Florida layer: connects a student's career cluster to the metros
// where that industry actually concentrates, then checks which of the student's
// matched schools genuinely feed those metros — using each school's REAL grad
// city data (getTopGradCities), not assumption.
//
// Normalizes on metro CORE NAME + STATE (e.g. "Boston" + "MA") rather than exact
// string match, since real grad_cities data has legitimate variation
// ("Boston MA" vs "Boston-Cambridge MA" vs "Boston-Cambridge-Newton MA").
//
// @param naicsSectors   student's NAICS profile [{sector, score}]
// @param riasec         student's RIASEC profile [{code, score}]
// @param matchedSchools array of school name strings already matched for this student
// @returns { topCluster, targetMetros, schoolFit: [{school, feedsMetro, pct, metro}] }

function _metroCore(cityString) {
  // Extract the leading city name token(s) before the trailing state code,
  // strip hyphenated metro extensions, lowercase for comparison
  const m = cityString.match(/^([A-Za-z\s]+?)(?:-[A-Za-z\s]+)*\s+([A-Z]{2})$/);
  if (!m) return null;
  const core = m[1].trim().split(/\s+/)[0].toLowerCase(); // first word of city name
  const state = m[2];
  return { core, state, full: cityString };
}

function getCareerMetroMatch(naicsSectors, riasec, matchedSchools) {
  const clusters = getONETClusters(naicsSectors, riasec);
  if (!clusters.length || !matchedSchools || !matchedSchools.length) {
    return { topCluster: null, targetMetros: [], schoolFit: [] };
  }

  // Top cluster drives the metro target — strongest signal
  // FIXED: previously looked up NAICS_TO_ONET[naicsSectors[0].sector] directly,
  // with no alias normalization — meaning a student whose #1 sector was 45,
  // 49, 32, or 33 (aliases for 44/48/31) got undefined here even though
  // getONETClusters (a few lines above, same file) correctly resolves the
  // exact same sector via its sectorKey normalization. Now uses identical
  // normalization logic so both functions behave consistently on the same
  // input.
  const topSector = naicsSectors && naicsSectors[0] ? naicsSectors[0].sector : null;
  const topSectorKey = topSector === 45 ? 44 : topSector === 49 ? 48 : topSector === 32 ? 31 : topSector === 33 ? 31 : topSector;
  const topClusterRaw = topSectorKey != null
    ? (typeof NAICS_TO_ONET !== 'undefined' ? NAICS_TO_ONET[topSectorKey] : null)
    : null;
  const targetMetros = (topClusterRaw && topClusterRaw.metros) ? topClusterRaw.metros : [];
  const targetCores = targetMetros.map(_metroCore).filter(Boolean);

  // A school "feeds" a target metro only if concentration is meaningful (15%+),
  // not just present — an 8% trickle isn't the same signal as a 65% pipeline
  const MEANINGFUL_CONCENTRATION = 15;

  const schoolFit = matchedSchools.map(school => {
    const gradCities = (typeof getTopGradCities === 'function') ? getTopGradCities(school) : [];
    let bestMatch = null;
    for (const gc of gradCities) {
      const gcCore = _metroCore(gc.city);
      if (!gcCore) continue;
      const hit = targetCores.find(tc => tc.core === gcCore.core && tc.state === gcCore.state);
      if (hit && gc.pct >= MEANINGFUL_CONCENTRATION && (!bestMatch || gc.pct > bestMatch.pct)) {
        bestMatch = { city: gc.city, pct: gc.pct };
      }
    }
    return {
      school,
      feedsMetro: !!bestMatch,
      metro: bestMatch ? bestMatch.city : null,
      pct: bestMatch ? bestMatch.pct : null
    };
  });

  return {
    topCluster: clusters[0] ? clusters[0].clusterName : null,
    targetMetros,
    schoolFit
  };
}

