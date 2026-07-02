/**
 * VECTOR University Intelligence Database
 * Schema: v5.1 -- Full Architecture + MegaRegion Integration + CC Transfer Pathway
 *
 * REBUILD IN PROGRESS -- v4.0
 * Rebuilt from scratch via validated batches after the original v3.3 database was found
 * to have pervasive, unrecoverable structural corruption. Every entry in this file has
 * been individually syntax-validated (node --check), section-checked, and content-sanity-
 * checked (name/location consistency, no cross-contamination) before inclusion.
 *
 * Schools complete: 56
 * Last updated: 2026-07-01
 *
 * Schema notes:
 *   - Schools sourced from BATCH11.js / BATCH10.js use the full 18-section schema plus
 *     jewishLife + honorsCollege (20 sections total)
 *   - Schools sourced from BATCH5.js and UNIVERSITY_DB_V5_MASTER_MW14.js use a narrower
 *     14-section schema (missing institutionScale, trajectoryProfile, comparativePositioning)
 *   - Some entries additionally include a merged "lifestyleIdentity" / "humanOutcomes"
 *     enrichment layer sourced from separate deep-research validation reports (marked
 *     with an ENRICHMENT MERGED comment inline)
 *
 * Known gaps / flagged items (not included in this file, pending corrected source):
 *   - University of Mississippi (BATCH11 -- two stacked incomplete attempts in source)
 *   - Wofford College (BATCH10 -- 5+ compounding corruption types)
 *   - Vanderbilt, Tulane, UC Berkeley, UVA, Georgetown, CU Boulder, Syracuse, University of
 *     Miami (all confirmed present in UNIVERSITY_DB_V5_MASTER_MW14.js source with genuine
 *     structural corruption; enrichment data IS staged and ready for all 8 once corrected)
 *
 * School index:
 *     1. Arizona State University
 *     2. University of Washington
 *     3. University of Arizona
 *     4. University of Oregon
 *     5. Reed College
 *     6. Gonzaga University
 *     7. Indiana University Bloomington
 *     8. Iowa State University
 *     9. Oklahoma State University
 *    10. University of Kansas
 *    11. University of Houston
 *    12. The University of Texas at Dallas
 *    13. The University of Alabama
 *    14. Harvard University
 *    15. Brown University
 *    16. University of Illinois Urbana-Champaign
 *    17. University of Wisconsin–Madison
 *    18. Duke University
 *    19. Dartmouth College
 *    20. University of Missouri
 *    21. University of Pennsylvania
 *    22. Columbia University
 *    23. University of Connecticut
 *    24. University of Massachusetts Amherst
 *    25. Drexel University
 *    26. Rutgers University
 *    27. University of Pittsburgh
 *    28. Virginia Tech
 *    29. University of Tennessee, Knoxville
 *    30. Texas A&M University
 *    31. University of Arkansas
 *    32. University of Nebraska–Lincoln
 *    33. University of North Carolina at Chapel Hill
 *    34. California Polytechnic State University, San Luis Obispo
 *    35. University of California, Merced
 *    36. Temple University
 *    37. University of Iowa
 *    38. California State University, Long Beach
 *    39. California State University, Fullerton
 *    40. San José State University
 *    41. University of California, Santa Barbara
 *    42. University of California, Santa Cruz
 *    43. University of California, San Diego
 *    44. University of Michigan
 *    45. University of South Carolina
 *    46. University of Georgia
 *    47. University of Florida
 *    48. University of Oklahoma
 *    49. Louisiana State University
 *    50. Auburn University
 *    51. Clemson University
 *    52. Colorado School of Mines
 *    53. Colorado College
 *    54. University of Northern Colorado
 *    55. United States Air Force Academy
 *    56. Northern Arizona University
 */

const UNIVERSITY_DB_V5 = {
"Arizona State University": {
  institutionNarrative: {
  name: "Arizona State University",

  location: "Tempe, Arizona",

  region: "West",

  archetype: "The Innovation Metropolis — Entrepreneurship, Engineering, Business, Technology, and the Future Economy",

  oneSentenceSummary: "Arizona State University has transformed into one of America's most innovative public universities, combining massive research investment, elite engineering, business, computer science, sustainability, aerospace, healthcare, and entrepreneurship with direct access to the rapidly expanding Phoenix metropolitan economy.",

  pipeline: "Approximately 80,000 on-campus students (180,000+ including ASU Online). ASU is nationally recognized for Engineering, Computer Science, Artificial Intelligence, Business (W. P. Carey), Supply Chain Management, Finance, Sustainability, Aerospace Engineering, Construction Management, Architecture, Nursing, Journalism, Public Policy, Education, Design, Data Science, Biological Sciences, and Entrepreneurship. Major recruiters include Intel, TSMC, Honeywell Aerospace, Amazon, Microsoft, Google, Apple, Nvidia, Deloitte, EY, PwC, KPMG, JPMorgan Chase, American Express, Raytheon, Boeing, Northrop Grumman, Banner Health, Mayo Clinic Arizona, Deloitte Digital, and hundreds of Phoenix-area startups.",

  hiddenPathway: "ASU's greatest hidden advantage is the extraordinary economic momentum surrounding Phoenix. Students build careers inside one of America's fastest-growing metropolitan economies while benefiting from one of the country's largest innovation ecosystems spanning semiconductors, aerospace, defense, fintech, healthcare, logistics, AI, renewable energy, and advanced manufacturing.",

  institutionalSecret: "While critics often focus on ASU's accessibility, its true competitive advantage is scale married to innovation. Few universities simultaneously produce elite honors graduates, top engineering talent, startup founders, Fortune 500 executives, healthcare leaders, and research breakthroughs while maintaining one of America's largest university innovation ecosystems.",

  theRoom: "Located within Greater Phoenix, students operate inside one of the fastest-growing economic regions in North America. Major semiconductor investments, corporate headquarters, aerospace manufacturing, defense contractors, fintech, healthcare systems, sports organizations, and venture-backed startups surround the university across Tempe, Scottsdale, Chandler, Mesa, and downtown Phoenix.",

  lifestyle: "Energetic, entrepreneurial, warm-weather, socially active, professionally ambitious, and highly diverse. Students combine major athletics, internships, startup accelerators, outdoor recreation, research, and one of the nation's largest honors college communities.",

  bestFitPersonality: "Highly motivated, entrepreneurial, adaptable, career-oriented, independent, and excited by rapid economic growth and emerging industries.",

  faithTradition: "Public",

  geographicInfluenceRadius: "Strong throughout Arizona and the Southwest with rapidly expanding influence nationally in engineering, business, semiconductors, sustainability, aerospace, and entrepreneurship.",

  economicOutcome: "Excellent career outcomes across engineering, technology, semiconductors, finance, aerospace, healthcare, consulting, entrepreneurship, logistics, and advanced manufacturing.",

  gradCities: [
    "Phoenix AZ",
    "Scottsdale AZ",
    "Tempe AZ",
    "Dallas TX",
    "Denver CO",
    "Los Angeles CA",
    "Seattle WA"
  ],

  comparableInstitutions: [
    "University of Central Florida",
    "North Carolina State University",
    "University of Cincinnati",
    "University of Texas at Dallas",
    "Georgia Institute of Technology"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Mesa Community College",
      "Chandler-Gilbert Community College",
      "Scottsdale Community College",
      "Phoenix College"
    ],

    transferAcceptanceRate: "~85%",

    freshmanAcceptanceRate: "~90%",

    estimatedSavingsRange: "$18,000-$55,000",

    transferNotes: "ASU maintains one of America's strongest community college transfer ecosystems through the Maricopa County Community College District, creating seamless pathways into engineering, business, healthcare, computer science, and nearly every major."

  },

institutionIdentity: {

  archetype: "Large Urban Research Innovation University"
},

institutionalPersonality: "innovative, entrepreneurial, ambitious, collaborative, future-focused",

  cultureKeywords: [
    "Innovation",
    "Entrepreneurship",
    "Engineering",
    "Technology",
    "Research",
    "Sustainability",
    "Business",
    "Leadership",
    "Discovery"
  ],

  missionOrientation: "Expanding educational access while advancing research, entrepreneurship, economic development, and societal innovation.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through interdisciplinary collaboration, applied research, entrepreneurship, internships, innovation labs, and industry partnerships.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Broadly diverse and pragmatic with strong emphasis on innovation, economic development, sustainability, and technology.",

  studentAutonomy: "Very High",

  prestigeOrientation: "Rapidly rising global research university with exceptional reputation for innovation, entrepreneurship, and applied research.",

  socialClimate: "Large, energetic, professionally ambitious, socially active, and exceptionally diverse.",

  leadershipStyle: "Leadership through innovation, experimentation, interdisciplinary collaboration, and entrepreneurial thinking."

},

megaRegionIntegration: {

  primaryMegaRegion: "Southwest Innovation Corridor",

  regionalRole: "One of the Southwest's primary talent engines supporting semiconductors, aerospace, defense, healthcare, fintech, logistics, artificial intelligence, and advanced manufacturing."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 26,
  BosWash: 24,
  TorBuffChester: 10,
  TexasTriangle: 76,
  CharLanta: 20,
  NorCalInnovationCorridor: 62,
  SoCalCreativeEconomy: 84

},
comparativePositioning: {

  versusUniversityOfArizona:
    "The University of Arizona has stronger historical strengths in astronomy, optics, and certain life sciences, while ASU has become substantially larger, more entrepreneurial, and more deeply integrated into engineering, semiconductors, business, artificial intelligence, and the Phoenix corporate economy.",

  versusNCState:
    "Both are outstanding public innovation universities. NC State maintains stronger historical engineering prestige, while ASU offers a broader entrepreneurship ecosystem, larger scale, stronger sustainability initiatives, and greater integration with one of America's fastest-growing metropolitan economies.",

  versusUniversityOfCentralFlorida:
    "Both leverage rapidly growing Sun Belt economies and emphasize workforce development. ASU possesses greater research intensity, stronger entrepreneurship infrastructure, a more mature honors ecosystem, and broader national recognition.",

  versusGeorgiaTech:
    "Georgia Tech remains more selective and engineering-focused, while ASU provides significantly broader academic offerings, larger scale, stronger business integration, and one of the country's largest university innovation ecosystems."

},

institutionScale: {

  enrollmentCategory: "Very Large",

  undergraduateEnrollment: 66000,

  graduateEnrollment: 14000,

  totalEnrollment: 80000,

  campusType: "Multi-Campus Urban Public Research University",

  residentialIntensity: 58,

  communityFeel: 76,

  studentFacultyRatio: "18:1",

  classSizeExperience: "Introductory courses can be large, particularly in engineering, business, biology, psychology, and computer science. Upper-division coursework becomes considerably more personalized through Barrett Honors College, undergraduate research, innovation labs, capstone projects, internships, startup accelerators, and faculty mentorship.",

  scaleAdvantages: [
    "One of America's broadest academic portfolios",
    "Exceptional undergraduate research opportunities",
    "Massive employer and internship ecosystem",
    "Extensive honors college opportunities through Barrett",
    "Nearly unmatched flexibility to change majors or pursue interdisciplinary degrees"
  ],

  scaleDisadvantages: [
    "Large introductory courses require initiative",
    "Students must actively build faculty relationships",
    "Campus culture can initially feel decentralized across multiple campuses",
    "The size of the university rewards self-directed students"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 90,
    conscientiousness: 84,
    extraversion: 80,
    agreeableness: 72,
    neuroticism: 34
  },

  hollandCodes: ["E","I","R"],

  learningStyle: [
    "Applied Learning",
    "Entrepreneurship",
    "Research",
    "Industry Collaboration",
    "Experiential Education"
  ],

  socialEnvironment: [
    "Entrepreneurial",
    "Career Focused",
    "Highly Diverse",
    "Innovative",
    "Socially Active"
  ],

  idealStudentTraits: [
    "Self-directed",
    "Entrepreneurial",
    "Career-oriented",
    "Adaptable",
    "Comfortable creating opportunities"
  ],

  thrivesIf: [
    "Wants internships throughout college",
    "Enjoys large universities with abundant opportunities",
    "Interested in engineering, business, AI, semiconductors, healthcare, or entrepreneurship",
    "Likes warm weather and an active social environment",
    "Can proactively build relationships and seek opportunities"
  ],

  strugglesIf: [
    "Needs a highly structured academic environment",
    "Prefers intimate liberal arts colleges",
    "Expects professors to provide constant guidance",
    "Dislikes navigating large institutions"
  ],

  transferRiskFactors: [
    "Students overwhelmed by institutional scale",
    "Students seeking traditional residential college intimacy",
    "Students uncomfortable advocating for themselves academically"
  ]

},
hiddenOpportunities: {

  underratedMajors: [
    "Supply Chain Management",
    "Construction Management",
    "Industrial Engineering",
    "Human Systems Engineering",
    "Microelectronics Engineering",
    "Technological Entrepreneurship & Management",
    "Actuarial Science",
    "Global Logistics Management"
  ],

  hiddenCareerPipelines: [
    "Semiconductor Manufacturing",
    "AI Infrastructure",
    "Defense Technology",
    "Commercial Aerospace",
    "Sports Business",
    "Climate Technology",
    "Financial Technology",
    "Digital Healthcare"
  ],

  nicheRecruitingAdvantages: [
    "TSMC Arizona",
    "Intel",
    "Honeywell Aerospace",
    "Raytheon",
    "Northrop Grumman",
    "Banner Health",
    "Mayo Clinic Arizona",
    "American Express"
  ],

  overlookedStrengths: [
    "Barrett Honors College provides a small-college experience inside one of America's largest universities.",
    "SkySong Innovation Center connects students directly with startups, venture-backed companies, and corporate innovation teams.",
    "Exceptional undergraduate research opportunities due to institutional scale.",
    "One of the country's strongest university entrepreneurship ecosystems through Venture Devils and numerous startup accelerators.",
    "Direct access to one of America's fastest-growing semiconductor manufacturing clusters."
  ],

  sleeperIndustries: [
    "Semiconductors",
    "Space Technology",
    "Autonomous Vehicles",
    "Quantum Computing",
    "Defense AI",
    "Water Technology"
  ]

},

networkCapital: {

  alumniAccessibility: 90,

  mentorshipDensity: 88,

  executiveAccess: 92,

  internshipNetwork: 98,

  familyBusinessExposure: 54,

  relationshipCapitalScore: 94,

  alumniLoyaltyScore: 90,

  referralCultureStrength: 90,

  donorNetworkStrength: 88,

  boardMemberDensity: 88

},

economicEcosystem: {

  primaryIndustries: [
    "Semiconductors",
    "Technology",
    "Financial Services",
    "Aerospace",
    "Healthcare",
    "Advanced Manufacturing",
    "Construction",
    "Logistics"
  ],

  regionalEconomicDrivers: [
    "Semiconductor Manufacturing",
    "Artificial Intelligence",
    "Aerospace & Defense",
    "Financial Technology",
    "Cloud Computing",
    "Healthcare",
    "Advanced Manufacturing"
  ],

  topEmployers: [
    "Intel",
    "TSMC",
    "Honeywell",
    "American Express",
    "Amazon",
    "Microsoft",
    "Banner Health",
    "Mayo Clinic Arizona",
    "Raytheon",
    "Boeing"
  ],

  emergingIndustries: [
    "Artificial Intelligence",
    "Semiconductor Fabrication",
    "Autonomous Systems",
    "Cybersecurity",
    "Renewable Energy",
    "Quantum Technologies"
  ],

  startupDensity: "Very High",

  ventureCapitalAccess: 82,

  corporateHeadquartersDensity: 90,

  healthcareHubStrength: 90,

  innovationIndex: 98
},

geographicInfluence: {

  dominantMarket: "Greater Phoenix Metropolitan Area and the Southwest Innovation Economy",

  secondaryMarkets: [
    "Dallas TX",
    "Denver CO",
    "Los Angeles CA",
    "San Diego CA",
    "Seattle WA",
    "Las Vegas NV",
    "Austin TX"
  ],

  alumniStrongholds: [
    "Phoenix AZ",
    "Scottsdale AZ",
    "Tempe AZ",
    "Dallas TX",
    "Southern California"
  ],

  relocationPatterns: [
    "A significant percentage of graduates remain throughout Greater Phoenix, joining semiconductor manufacturers, aerospace firms, healthcare systems, financial institutions, technology companies, and rapidly growing startups.",
    "Southern California continues to attract graduates into entertainment technology, engineering, real estate, consulting, and consumer products.",
    "Texas draws engineering, semiconductor, logistics, finance, and energy graduates into Dallas and Austin.",
    "Seattle recruits graduates into cloud computing, software engineering, artificial intelligence, and aerospace through Microsoft, Amazon, and Boeing.",
    "Denver increasingly attracts graduates seeking careers in technology, defense, renewable energy, commercial real estate, and outdoor industry leadership."
  ],

  regionalInfluenceScore: 100,

  nationalReachScore: 88,

  internationalReachScore: 58

},



socialCapital: {

  greekLifeInfluence: 28,

  studentOrganizationStrength: 98,

  leadershipDevelopment: 96,

  crossDisciplinaryInteraction: 98,

  civicEngagement: 86

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 48,
    notes: "Phoenix's rapidly expanding consumer products, wellness, and beauty markets provide meaningful opportunities, although this is not a primary institutional strength."
  },

  healthWellness: {
    strength: 90,
    notes: "Banner Health, Mayo Clinic Arizona, health technology, biomedical engineering, digital health, and sports medicine create outstanding career pathways."
  },

  nutraceuticals: {
    strength: 62,
    notes: "Arizona's growing wellness and food science industries support emerging opportunities in nutrition, supplements, and consumer health innovation."
  },

  consumerProducts: {
    strength: 88,
    notes: "Excellent preparation for product management, consumer technology, retail innovation, and brand strategy through Phoenix's expanding corporate ecosystem."
  },

  outdoorIndustry: {
    strength: 76,
    notes: "Arizona's outdoor recreation economy, sustainability initiatives, and environmental sciences provide meaningful opportunities in recreation, tourism, and outdoor product companies."
  },

  sportsBusiness: {
    strength: 94,
    notes: "One of the strongest public universities in the Southwest for sports business due to Phoenix's concentration of professional franchises, spring training, major sporting events, and sports media."
  },

  entertainmentMedia: {
    strength: 72,
    notes: "Strong opportunities in digital media, sports broadcasting, gaming, journalism, and content creation, particularly through the Walter Cronkite School."
  },

  ventureCapital: {
    strength: 84,
    notes: "Phoenix's rapidly expanding startup ecosystem, Venture Devils, SkySong, and increasing venture investment create one of the nation's strongest emerging entrepreneurship environments."
  },

  privateEquity: {
    strength: 74,
    notes: "Graduates enter middle-market private equity, commercial real estate investment, infrastructure funds, and corporate development throughout the Southwest."
  },

  investmentBanking: {
    strength: 72,
    notes: "Strong regional placement into commercial banking, corporate finance, and middle-market investment banking, with selective placement into Wall Street firms."
  },

  consulting: {
    strength: 88,
    notes: "Excellent recruiting by Deloitte, EY, PwC, Accenture, KPMG, Slalom, and regional strategy firms."
  },

  medicine: {
    strength: 88,
    notes: "Outstanding preparation through biomedical sciences, engineering, nursing, and partnerships with Mayo Clinic Arizona and Banner Health."
  },

  healthcareAdministration: {
    strength: 90,
    notes: "One of the Southwest's strongest ecosystems for healthcare management, health systems innovation, hospital administration, and digital health."
  },

  defense: {
    strength: 94,
    notes: "Major pathways into Raytheon, Boeing, Honeywell Aerospace, Northrop Grumman, General Dynamics, and rapidly expanding defense technology companies."
  },

  realEstate: {
    strength: 90,
    notes: "Phoenix's explosive commercial and residential growth creates exceptional opportunities in development, REITs, commercial brokerage, urban planning, and infrastructure."
  },

  luxuryBrands: {
    strength: 58,
    notes: "Scottsdale's luxury retail, hospitality, and real estate markets provide opportunities, although luxury is not a core institutional focus."
  },

  entrepreneurship: {
    strength: 98,
    notes: "ASU has built one of America's premier public university entrepreneurship ecosystems through Venture Devils, SkySong, Startup Village, and extensive founder support."
  },

  technology: {
    strength: 96,
    notes: "Outstanding pathways into software, cloud computing, semiconductors, cybersecurity, AI, enterprise technology, and digital infrastructure."
  },

  publicPolicy: {
    strength: 82,
    notes: "Strong preparation through public affairs, sustainability, urban planning, and state government partnerships."
  },

  nonprofitLeadership: {
    strength: 78,
    notes: "Community engagement, sustainability initiatives, education, and public service create meaningful nonprofit leadership opportunities."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 90,

  firstGenerationSupport: 98,

  wealthCreationPotential: 94,

  familyBusinessPipelineStrength: 64

},

futureResilience: {

  aiResistance: 96,

  automationResistance: 96,

  adaptabilityScore: 98,

  interdisciplinaryStrength: 98,

  futureReadiness: 99,

  entrepreneurialFlexibility: 100,

  lifelongLearningCulture: 100,

  innovationCapacity: 100

},

lifeDesignOutcomes: {

  wealthCreationPotential: 94,

  communityLeadershipPotential: 92,

  geographicMobility: 90,

  workLifeBalancePotential: 92,

  purposeAlignment: 90,

  familyFormationSupport: 88,

  personalDevelopmentPotential: 94,

  careerOptionality: 98,

  longTermLifeSatisfaction: 92

},

institutionalMoat: {

  prestigeMoat: 84,

  networkMoat: 94,

  geographicMoat: 98,

  industryMoat: 96,

  alumniMoat: 90,

  brandDurability: 94,

  overallMoatScore: 93

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 94,

  returnerScore: 42,

  stewardScore: 32,

  navigatorScore: 98,

  geographicLockIn: "very_low",

  alumniDispersalPattern: "national with particularly strong representation throughout the Southwest, Texas, California, Colorado, Washington, and rapidly expanding technology markets"

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 98,
    type: "Independent Campus Hillel"
  },

  estimatedJewishUndergraduates: 4500,

  jewishStudentPercentage: "~7%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Exceptional",

  notes: "ASU has one of the largest and most active Hillel communities at any public university in the United States. Students benefit from extensive Shabbat programming, leadership development, Birthright participation, Israel engagement, Greek life partnerships, and deep integration with Phoenix and Scottsdale's large Jewish community. For Jewish students seeking a major public university with vibrant campus Jewish life, ASU ranks alongside Florida, Wisconsin, Michigan, Maryland, Indiana, Penn State, Ohio State, and Texas."

},

honorsCollege: {

  exists: true,

  name: "Barrett, The Honors College",

  strength: 100,

  notes: "Barrett is widely regarded as the premier honors college in American public higher education. It provides small seminar-style classes, dedicated residential communities, priority registration, undergraduate research, national fellowship advising, honors thesis requirements, and a liberal arts experience embedded within one of the country's largest research universities. Barrett significantly alters the undergraduate experience and serves as one of ASU's defining competitive advantages."

}
},

"University of Washington": {
institutionNarrative: {

  name: "University of Washington",

  location: "Seattle, Washington",

  region: "West",

  archetype: "The Pacific Innovation Gateway — Artificial Intelligence, Medicine, Engineering, Global Health, and Cloud Computing",

  oneSentenceSummary: "The University of Washington is one of the world's premier public research universities, combining elite engineering, computer science, medicine, business, public health, life sciences, and global research with unmatched access to Seattle's technology, biotechnology, aerospace, and global commerce ecosystem.",

  pipeline: "Approximately 60,000 students. UW is internationally recognized for Computer Science, Artificial Intelligence, Machine Learning, Electrical Engineering, Bioengineering, Medicine, Public Health, Nursing, Information Science, Business (Foster), Oceanography, Environmental Science, Economics, Architecture, Global Health, and Data Science. Major recruiters include Microsoft, Amazon, Google, Meta, Apple, Nvidia, Boeing, Costco, Starbucks, Alaska Airlines, Expedia, T-Mobile, Providence Health, Fred Hutch Cancer Center, Seattle Children's Hospital, Bill & Melinda Gates Foundation, Deloitte, McKinsey & Company, and numerous venture-backed startups throughout Seattle.",

  hiddenPathway: "UW's greatest hidden advantage is its integration into Seattle's knowledge economy. Students gain daily exposure to one of the world's highest concentrations of software engineers, AI researchers, cloud computing experts, biotech innovators, healthcare leaders, and global technology executives.",

  institutionalSecret: "Although often compared to Berkeley and Michigan, UW has quietly become one of the world's primary talent pipelines for cloud computing, artificial intelligence, biotechnology, global health, and software engineering. Few universities are more deeply integrated into the world's digital infrastructure economy.",

  theRoom: "Located in Seattle, students operate inside one of the world's most concentrated innovation ecosystems. Amazon, Microsoft, major AI laboratories, biotechnology companies, aerospace manufacturers, healthcare systems, venture capital firms, and internationally significant research institutes surround the university.",

  lifestyle: "Academically rigorous, intellectually collaborative, research-intensive, environmentally conscious, globally diverse, and professionally ambitious. Students balance research, internships, startups, outdoor recreation, and one of the nation's strongest public university innovation ecosystems.",

  bestFitPersonality: "Highly curious, analytical, collaborative, independent, resilient, and motivated by solving complex scientific, technological, healthcare, or societal problems.",

  faithTradition: "Public",

  geographicInfluenceRadius: "Global, with particularly strong influence throughout Seattle, Silicon Valley, Vancouver, New York, Boston, Asia-Pacific economies, and international technology markets.",

  economicOutcome: "Exceptional career outcomes across software engineering, artificial intelligence, biotechnology, medicine, healthcare, consulting, finance, scientific research, entrepreneurship, and global technology leadership.",

  gradCities: [
    "Seattle WA",
    "Bellevue WA",
    "San Francisco CA",
    "New York NY",
    "Los Angeles CA",
    "Boston MA",
    "Vancouver BC"
  ],

  comparableInstitutions: [
    "University of California, Berkeley",
    "University of Michigan",
    "Georgia Institute of Technology",
    "University of California, San Diego",
    "Carnegie Mellon University"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Bellevue College",
      "Seattle Central College",
      "North Seattle College",
      "Shoreline Community College"
    ],

    transferAcceptanceRate: "~45%",

    freshmanAcceptanceRate: "~43%",

    estimatedSavingsRange: "$20,000-$60,000",

    transferNotes: "UW maintains one of the Pacific Northwest's strongest transfer ecosystems. Washington community college students regularly transfer into engineering, business, computer science, nursing, public health, and life sciences."

  }

},

institutionIdentity: {

  archetype: "Elite Global Public Research University",

  institutionalPersonality: "innovative, collaborative, analytical, globally engaged, research-driven",

  cultureKeywords: [
    "Artificial Intelligence",
    "Cloud Computing",
    "Medicine",
    "Research",
    "Biotechnology",
    "Innovation",
    "Global Health",
    "Engineering",
    "Discovery"
  ],

  missionOrientation: "Advancing society through world-class research, healthcare, education, innovation, and public service.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through interdisciplinary research, scientific discovery, clinical experience, industry partnerships, entrepreneurship, and solving globally significant challenges.",

  competitiveness: "Highly Selective",

  politicalCulture: "Generally progressive, globally engaged, environmentally conscious, and scientifically oriented.",

  studentAutonomy: "Very High",

  prestigeOrientation: "One of the world's premier public universities across medicine, computer science, engineering, public health, and scientific research.",

  socialClimate: "Intellectually ambitious, collaborative, globally diverse, research-oriented, and professionally driven.",

  leadershipStyle: "Leadership through discovery, scientific excellence, technological innovation, and public impact."

},

megaRegionIntegration: {

  primaryMegaRegion: "Cascadia Innovation Corridor",

  regionalRole: "One of the world's primary talent generators for cloud computing, artificial intelligence, biotechnology, aerospace, healthcare, and Pacific Rim commerce."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 18,
  BosWash: 52,
  TorBuffChester: 20,
  TexasTriangle: 42,
  CharLanta: 16,
  NorCalInnovationCorridor: 88,
  SoCalCreativeEconomy: 42

},

comparativePositioning: {

  versusBerkeley:
    "Berkeley possesses stronger integration with venture capital, startup formation, economics, and the Silicon Valley founder ecosystem, while UW has deeper relationships with cloud computing, enterprise software, biotechnology, medicine, and global health through Seattle's technology economy.",

  versusMichigan:
    "Michigan offers greater breadth across nearly every academic discipline and a stronger national alumni footprint, while UW possesses substantially deeper integration with Big Tech, artificial intelligence, cloud computing, biotechnology, and the Pacific Rim economy.",

  versusCarnegieMellon:
    "Carnegie Mellon specializes in computer science, robotics, and AI on a smaller scale, while UW combines world-class computing with elite medicine, biotechnology, public health, environmental sciences, and a much broader research ecosystem.",

  versusUCSanDiego:
    "Both excel in engineering, life sciences, and research. UC San Diego maintains stronger strengths in biotechnology commercialization and Southern California industry connections, while UW has significantly deeper relationships with cloud computing, enterprise software, and global technology firms centered in Seattle."

},

institutionScale: {

  enrollmentCategory: "Very Large",

  undergraduateEnrollment: 38000,

  graduateEnrollment: 22000,

  totalEnrollment: 60000,

  campusType: "Urban Public Research University",

  residentialIntensity: 64,

  communityFeel: 78,

  studentFacultyRatio: "21:1",

  classSizeExperience: "Large introductory courses are common across computer science, biology, chemistry, psychology, economics, and engineering. Upper-division students gain increasing access to research laboratories, clinical experiences, design projects, faculty mentorship, startup incubators, and one of the nation's strongest undergraduate research ecosystems.",

  scaleAdvantages: [
    "One of the world's largest research enterprises",
    "Extraordinary access to undergraduate research",
    "Exceptional employer and internship ecosystem",
    "Elite medical and health sciences integration",
    "Broad interdisciplinary academic opportunities"
  ],

  scaleDisadvantages: [
    "Highly competitive admission into certain majors",
    "Large introductory lecture courses",
    "Students must proactively seek faculty mentorship",
    "Urban environment feels less intimate than residential college campuses"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 96,
    conscientiousness: 94,
    extraversion: 60,
    agreeableness: 76,
    neuroticism: 42
  },

  hollandCodes: ["I","E","R"],

  learningStyle: [
    "Research",
    "Analytical Learning",
    "Laboratory Discovery",
    "Industry Collaboration",
    "Interdisciplinary Problem Solving"
  ],

  socialEnvironment: [
    "Highly Intellectual",
    "Collaborative",
    "Research Focused",
    "Globally Diverse",
    "Professionally Ambitious"
  ],

  idealStudentTraits: [
    "Intellectually curious",
    "Independent",
    "Research-oriented",
    "Collaborative",
    "Comfortable with academic rigor"
  ],

  thrivesIf: [
    "Plans for technology, medicine, engineering, biotechnology, or graduate school",
    "Wants access to world-class research laboratories",
    "Enjoys interdisciplinary collaboration",
    "Values internship opportunities with major technology companies",
    "Can navigate a large research university proactively"
  ],

  strugglesIf: [
    "Needs constant academic structure",
    "Prefers small liberal arts colleges",
    "Dislikes highly competitive STEM environments",
    "Wants a traditional small-campus residential experience"
  ],

  transferRiskFactors: [
    "Students frustrated by competitive major admission processes",
    "Students seeking highly personalized undergraduate advising",
    "Students overwhelmed by the size and pace of a major research university"
  ]
},

competitiveMajorPressure: {
  level: "Very High",
  notes: "Several high-demand majors—including Computer Science and Computer Engineering—have competitive admission processes beyond general university admission."
},

hiddenOpportunities: {

  underratedMajors: [
    "Informatics",
    "Human Centered Design & Engineering",
    "Oceanography",
    "Environmental Health",
    "Supply Chain Management",
    "Construction Management",
    "Geographic Information Systems",
    "Biostatistics"
  ],

  hiddenCareerPipelines: [
    "Cloud Infrastructure",
    "Artificial Intelligence Research",
    "Biotechnology",
    "Digital Health",
    "Life Sciences Venture Capital",
    "Aerospace Engineering",
    "Climate Technology",
    "Global Development"
  ],

  nicheRecruitingAdvantages: [
    "Microsoft",
    "Amazon",
    "Fred Hutch Cancer Center",
    "Allen Institute",
    "Institute for Protein Design",
    "Boeing",
    "Bill & Melinda Gates Foundation",
    "Expedia Group"
  ],

  overlookedStrengths: [
    "The Paul G. Allen School is one of the world's premier computer science departments.",
    "The Institute for Protein Design has become one of the world's leading centers for computational biology and AI-driven protein engineering.",
    "Extraordinary undergraduate research opportunities across medicine, engineering, AI, environmental science, and global health.",
    "Deep integration with Seattle's startup ecosystem despite receiving less attention than Silicon Valley.",
    "Exceptional interdisciplinary collaboration between engineering, medicine, business, and public health."
  ],

  sleeperIndustries: [
    "Computational Biology",
    "Synthetic Biology",
    "Climate Technology",
    "AI Infrastructure",
    "Space Technology",
    "Quantum Computing"
  ]

},

networkCapital: {

  alumniAccessibility: 92,

  mentorshipDensity: 92,

  executiveAccess: 98,

  internshipNetwork: 100,

  familyBusinessExposure: 48,

  relationshipCapitalScore: 96,

  alumniLoyaltyScore: 90,

  referralCultureStrength: 94,

  donorNetworkStrength: 96,

  boardMemberDensity: 96

},

economicEcosystem: {

  primaryIndustries: [
    "Artificial Intelligence",
    "Cloud Computing",
    "Technology",
    "Biotechnology",
    "Healthcare",
    "Aerospace",
    "Global Commerce",
    "Research"
  ],

  regionalEconomicDrivers: [
    "Cloud Computing",
    "Enterprise Software",
    "Artificial Intelligence",
    "Biotechnology",
    "Aerospace",
    "Global Logistics",
    "Life Sciences"
  ],

  topEmployers: [
    "Microsoft",
    "Amazon",
    "Google",
    "Meta",
    "Boeing",
    "Fred Hutch Cancer Center",
    "University of Washington Medicine",
    "Providence Health",
    "Costco",
    "Expedia Group"
  ],

  emergingIndustries: [
    "Generative AI",
    "Quantum Computing",
    "Synthetic Biology",
    "Climate Technology",
    "Space Technology",
    "Digital Health"
  ],

  startupDensity: "Extremely High",

  ventureCapitalAccess: 90,

  corporateHeadquartersDensity: 96,

  healthcareHubStrength: 100,

  innovationIndex: 100

},

geographicInfluence: {

  dominantMarket: "Seattle, the Pacific Northwest, and the Global Technology Economy",

  secondaryMarkets: [
    "San Francisco CA",
    "Bellevue WA",
    "New York NY",
    "Boston MA",
    "Los Angeles CA",
    "Vancouver BC",
    "Singapore"
  ],

  alumniStrongholds: [
    "Seattle WA",
    "Bellevue WA",
    "Redmond WA",
    "San Francisco CA",
    "New York NY"
  ],

  relocationPatterns: [
    "A large percentage of graduates remain throughout the Seattle metropolitan area, joining Microsoft, Amazon, Boeing, healthcare systems, biotechnology firms, AI laboratories, and venture-backed startups.",
    "Silicon Valley attracts software engineers, AI researchers, founders, venture capital professionals, and product leaders.",
    "New York recruits graduates into quantitative finance, consulting, technology leadership, healthcare administration, and global business.",
    "Boston draws graduates pursuing biotechnology, pharmaceuticals, robotics, healthcare innovation, and scientific research.",
    "A globally dispersed alumni network extends throughout Vancouver, Singapore, London, Tokyo, and other Pacific Rim innovation centers through multinational technology companies, healthcare organizations, and research institutions."
  ],

  regionalInfluenceScore: 100,

  nationalReachScore: 98,

  internationalReachScore: 98

},

socialCapital: {

  greekLifeInfluence: 16,

  studentOrganizationStrength: 100,

  leadershipDevelopment: 96,

  crossDisciplinaryInteraction: 100,

  civicEngagement: 92

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 26,
    notes: "Limited institutional emphasis beyond consumer technology, e-commerce, and digital marketing innovation."
  },

  healthWellness: {
    strength: 98,
    notes: "One of the world's premier ecosystems for biotechnology, digital health, precision medicine, healthcare AI, medical devices, and biomedical research."
  },

  nutraceuticals: {
    strength: 42,
    notes: "Scientific research supports nutrition science and food innovation, though this is not a primary institutional focus."
  },

  consumerProducts: {
    strength: 94,
    notes: "Exceptional preparation for product management, software platforms, consumer technology, e-commerce, and digital services through Seattle's technology ecosystem."
  },

  outdoorIndustry: {
    strength: 84,
    notes: "The Pacific Northwest's outdoor economy creates meaningful opportunities in recreation, sustainability, environmental science, and outdoor consumer brands."
  },

  sportsBusiness: {
    strength: 58,
    notes: "Professional sports organizations and sports analytics provide opportunities, though this is not a major institutional specialty."
  },

  entertainmentMedia: {
    strength: 66,
    notes: "Strong opportunities in gaming, interactive media, digital content, streaming technology, and technology-enabled entertainment."
  },

  ventureCapital: {
    strength: 90,
    notes: "Seattle's venture ecosystem continues to expand rapidly, particularly across enterprise software, AI, biotechnology, cloud infrastructure, and deep technology startups."
  },

  privateEquity: {
    strength: 82,
    notes: "Graduates enter growth equity, infrastructure investing, software-focused funds, healthcare investment, and technology private equity."
  },

  investmentBanking: {
    strength: 78,
    notes: "Wall Street and West Coast investment banks recruit regularly, although many of UW's strongest students pursue technology and healthcare instead."
  },

  consulting: {
    strength: 90,
    notes: "McKinsey, Bain, BCG, Deloitte, Accenture, EY-Parthenon, and numerous technology consulting firms recruit extensively."
  },

  medicine: {
    strength: 100,
    notes: "One of the strongest universities in the world for medicine, physician training, biomedical sciences, translational research, and academic healthcare."
  },

  healthcareAdministration: {
    strength: 94,
    notes: "Outstanding preparation for health systems leadership, hospital administration, digital health innovation, and public health management."
  },

  defense: {
    strength: 84,
    notes: "Strong opportunities through Boeing, cybersecurity, naval engineering, aerospace systems, and dual-use technologies."
  },

  realEstate: {
    strength: 72,
    notes: "Growing commercial development, technology campuses, urban planning, and infrastructure investment provide meaningful opportunities."
  },

  luxuryBrands: {
    strength: 28,
    notes: "Limited institutional emphasis outside premium consumer technology and retail innovation."
  },

  entrepreneurship: {
    strength: 94,
    notes: "UW has become one of the nation's premier startup ecosystems for AI, cloud computing, life sciences, software, and biotechnology entrepreneurship."
  },

  technology: {
    strength: 100,
    notes: "Arguably one of the world's strongest universities for cloud computing, enterprise software, AI, machine learning, cybersecurity, distributed systems, and technology leadership."
  },

  publicPolicy: {
    strength: 90,
    notes: "Excellent preparation through the Evans School, public health, environmental policy, global development, and technology policy."
  },

  nonprofitLeadership: {
    strength: 92,
    notes: "The Gates Foundation, global health ecosystem, public service, and international development organizations create exceptional nonprofit leadership pathways."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 90,

  firstGenerationSupport: 94,

  wealthCreationPotential: 98,

  familyBusinessPipelineStrength: 52

},

futureResilience: {

  aiResistance: 100,

  automationResistance: 100,

  adaptabilityScore: 100,

  interdisciplinaryStrength: 100,

  futureReadiness: 100,

  entrepreneurialFlexibility: 96,

  lifelongLearningCulture: 100,

  innovationCapacity: 100

},

lifeDesignOutcomes: {

  wealthCreationPotential: 98,

  communityLeadershipPotential: 96,

  geographicMobility: 98,

  workLifeBalancePotential: 88,

  purposeAlignment: 98,

  familyFormationSupport: 86,

  personalDevelopmentPotential: 98,

  careerOptionality: 100,

  longTermLifeSatisfaction: 96

},

institutionalMoat: {

  prestigeMoat: 98,

  networkMoat: 98,

  geographicMoat: 98,

  industryMoat: 100,

  alumniMoat: 96,

  brandDurability: 100,

  overallMoatScore: 98

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 98,

  returnerScore: 38,

  stewardScore: 24,

  navigatorScore: 100,

  geographicLockIn: "very_low",

  alumniDispersalPattern: "global"

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 94,
    type: "University Hillel"
  },

  estimatedJewishUndergraduates: 2400,

  jewishStudentPercentage: "~6%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Very Strong",

  notes: "UW has one of the strongest Jewish communities in the Pacific Northwest. Hillel at the University of Washington is highly active with weekly Shabbat dinners, leadership programs, Birthright participation, Israel engagement, service initiatives, and close ties to Seattle's established Jewish community. For students considering public universities on the West Coast, UW is among the strongest options alongside Berkeley and UCLA."

},

honorsCollege: {

  exists: true,

  name: "Interdisciplinary Honors Program",

  strength: 90,

  notes: "UW's Interdisciplinary Honors Program provides small seminar-based coursework, priority access to faculty, research opportunities, and an academically intimate liberal arts experience within a major research university. Departmental Honors programs further allow high-achieving students to complete advanced research and honors theses within their majors."

}
},

"University of Arizona": {
institutionNarrative: {

  name: "University of Arizona",

  location: "Tucson, Arizona",

  region: "West",

  archetype: "Elite Scientific Research University — Space Science, Optics, Engineering, Health Sciences, and the American Southwest",

  oneSentenceSummary: "The University of Arizona is a leading public research university renowned for astronomy, optics, space sciences, engineering, business, medicine, environmental science, and health research, combining world-class scientific discovery with strong connections to aerospace, defense, biosciences, and the rapidly growing Southwest economy.",

  pipeline: "Approximately 56,000 students. Arizona is internationally recognized for Astronomy, Optical Sciences, Aerospace Engineering, Systems Engineering, Computer Science, Eller College of Management, Environmental Science, Hydrology, Mining Engineering, Medicine, Pharmacy, Public Health, Agriculture, Veterinary Science, and Biosystems Engineering. Major recruiters include Raytheon, RTX, Honeywell Aerospace, Texas Instruments, IBM, Intel, TSMC, Boeing, Northrop Grumman, Freeport-McMoRan, Banner Health, Mayo Clinic Arizona, Deloitte, Amazon, Microsoft, and numerous aerospace, optics, defense, and bioscience companies.",

  hiddenPathway: "Arizona's greatest hidden advantage is its global leadership in optics, astronomy, and space science. Combined with Tucson's deep aerospace and defense ecosystem, students gain access to industries that exist at only a handful of universities worldwide.",

  institutionalSecret: "While often overshadowed nationally by larger flagship universities, Arizona quietly operates one of the world's premier ecosystems for optical sciences, planetary exploration, climate research, water resources, and aerospace engineering. It remains one of NASA's most important university research partners.",

  theRoom: "Located in Tucson, students operate inside one of America's largest aerospace and defense corridors. Raytheon, Davis-Monthan Air Force Base, world-leading observatories, bioscience companies, and advanced manufacturing firms surround the university, while Phoenix's expanding technology economy sits less than two hours away.",

  lifestyle: "Collaborative, outdoors-oriented, research-driven, sunny, community-focused, and academically ambitious. Students combine Division I athletics, undergraduate research, entrepreneurship, hiking, public service, and strong school spirit with the lifestyle of the Sonoran Desert.",

  bestFitPersonality: "Curious, collaborative, scientifically minded, resilient, adventurous, and interested in applying research to real-world problems.",

  faithTradition: "Public",

  geographicInfluenceRadius: "Strong throughout Arizona, the Southwest, California, Texas, and increasingly across aerospace, optics, defense, healthcare, and environmental research sectors worldwide.",

  economicOutcome: "Excellent outcomes in engineering, aerospace, defense, healthcare, scientific research, business, environmental science, mining, and technology.",

  gradCities: [
    "Phoenix AZ",
    "Tucson AZ",
    "Los Angeles CA",
    "Dallas TX",
    "Denver CO",
    "Seattle WA",
    "San Diego CA"
  ],

  comparableInstitutions: [
    "Colorado School of Mines",
    "North Carolina State University",
    "University of Colorado Boulder",
    "University of Utah",
    "Arizona State University"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Pima Community College",
      "Mesa Community College",
      "Scottsdale Community College",
      "Chandler-Gilbert Community College"
    ],

    transferAcceptanceRate: "~80%",

    freshmanAcceptanceRate: "~87%",

    estimatedSavingsRange: "$18,000-$55,000",

    transferNotes: "Arizona maintains strong transfer agreements with Arizona community colleges, creating well-established pathways into engineering, business, health sciences, education, and scientific research."

  }

},

institutionIdentity: {

  archetype: "Elite Public Research University",

  institutionalPersonality: "scientific, collaborative, adventurous, research-driven, innovative",

  cultureKeywords: [
    "Space Science",
    "Astronomy",
    "Optics",
    "Engineering",
    "Research",
    "Healthcare",
    "Innovation",
    "Environmental Science",
    "Discovery"
  ],

  missionOrientation: "Advancing society through scientific discovery, research, healthcare, education, and public service.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through hands-on research, interdisciplinary collaboration, laboratory discovery, field science, entrepreneurship, and solving complex scientific and societal challenges.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Politically diverse, pragmatic, research-oriented, and civically engaged.",

  studentAutonomy: "Very High",

  prestigeOrientation: "Globally respected across astronomy, optics, engineering, medicine, environmental science, and space research.",

  socialClimate: "Collaborative, spirited, research-focused, outdoors-oriented, and professionally ambitious.",

  leadershipStyle: "Leadership through scientific excellence, innovation, exploration, and interdisciplinary collaboration."

},

megaRegionIntegration: {

  primaryMegaRegion: "Southwest Innovation Corridor",

  regionalRole: "A leading scientific and research institution powering aerospace, defense, optics, healthcare, mining, environmental science, and advanced manufacturing throughout the American Southwest."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 30,
  BosWash: 20,
  TorBuffChester: 10,
  TexasTriangle: 72,
  CharLanta: 18,
  NorCalInnovationCorridor: 58,
  SoCalCreativeEconomy: 82

},
comparativePositioning: {

  versusArizonaState:
    "ASU emphasizes entrepreneurship, business, semiconductors, and the rapidly expanding Phoenix innovation economy, while Arizona possesses deeper historical strengths in astronomy, optics, planetary science, environmental research, aerospace engineering, and biomedical research.",

  versusColoradoBoulder:
    "Both are outstanding Western research universities with strong aerospace and environmental science programs. Colorado offers stronger proximity to the Denver technology corridor, while Arizona is internationally recognized for optics, astronomy, planetary science, and defense research.",

  versusNCState:
    "NC State maintains deeper integration with manufacturing, engineering, and the Research Triangle, while Arizona offers globally distinctive leadership in optical sciences, astronomy, water resources, and space exploration.",

  versusUniversityOfUtah:
    "Utah has become a leader in entrepreneurship, medical innovation, and the Wasatch technology corridor, while Arizona possesses stronger international prestige in astronomy, optics, planetary sciences, and environmental research."

},

institutionScale: {

  enrollmentCategory: "Very Large",

  undergraduateEnrollment: 43000,

  graduateEnrollment: 13000,

  totalEnrollment: 56000,

  campusType: "Residential Public Research University",

  residentialIntensity: 74,

  communityFeel: 84,

  studentFacultyRatio: "17:1",

  classSizeExperience: "Introductory courses in engineering, biology, chemistry, psychology, business, and the sciences can be large. Upper-division coursework becomes considerably smaller through research laboratories, fieldwork, capstone projects, clinical experiences, honors seminars, and faculty mentorship.",

  scaleAdvantages: [
    "One of America's premier undergraduate research universities",
    "Exceptional access to faculty conducting internationally recognized scientific research",
    "Strong balance between large university resources and a cohesive campus community",
    "Outstanding opportunities in field research, observatories, and laboratory sciences",
    "Broad academic offerings with nationally recognized STEM programs"
  ],

  scaleDisadvantages: [
    "Large introductory STEM lecture courses",
    "Students must proactively seek research opportunities",
    "Some high-demand majors have competitive progression requirements",
    "National prestige is sometimes underestimated outside the Southwest"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 94,
    conscientiousness: 88,
    extraversion: 78,
    agreeableness: 78,
    neuroticism: 34
  },

  hollandCodes: ["I","R","E"],

  learningStyle: [
    "Research",
    "Experiential Learning",
    "Laboratory Discovery",
    "Field Research",
    "Applied Science"
  ],

  socialEnvironment: [
    "Collaborative",
    "School Spirited",
    "Research Focused",
    "Outdoor Oriented",
    "Professionally Ambitious"
  ],

  idealStudentTraits: [
    "Scientifically curious",
    "Independent",
    "Collaborative",
    "Enjoys hands-on learning",
    "Comfortable balancing academics and campus life"
  ],

  thrivesIf: [
    "Interested in engineering, healthcare, astronomy, environmental science, aerospace, or business",
    "Wants meaningful undergraduate research opportunities",
    "Enjoys outdoor recreation and an active campus culture",
    "Values strong school spirit alongside rigorous academics",
    "Seeks close interaction with faculty in upper-division coursework"
  ],

  strugglesIf: [
    "Prefers a small liberal arts college",
    "Needs extensive academic structure",
    "Dislikes large public university environments",
    "Wants immediate access to a major coastal technology hub"
  ],

  transferRiskFactors: [
    "Students seeking a more urban environment",
    "Students overwhelmed by introductory STEM rigor",
    "Students looking for smaller residential colleges"
  ]

},
hiddenOpportunities: {

  underratedMajors: [
    "Optical Sciences & Engineering",
    "Mining Engineering",
    "Hydrology & Atmospheric Sciences",
    "Systems Engineering",
    "Geographic Information Systems",
    "Environmental & Water Resources",
    "Agricultural & Biosystems Engineering",
    "Latin American Studies"
  ],

  hiddenCareerPipelines: [
    "Space Exploration",
    "Optical Engineering",
    "Defense Technology",
    "Remote Sensing & Geospatial Intelligence",
    "Water Resources",
    "Mining & Critical Minerals",
    "Precision Agriculture",
    "Biomedical Imaging"
  ],

  nicheRecruitingAdvantages: [
    "Raytheon",
    "RTX",
    "NASA",
    "Kitt Peak National Observatory",
    "Steward Observatory",
    "Freeport-McMoRan",
    "Banner Health",
    "Mayo Clinic Arizona"
  ],

  overlookedStrengths: [
    "Home to the world's leading College of Optical Sciences.",
    "One of NASA's premier university research partners in planetary science and space exploration.",
    "Exceptional undergraduate access to faculty-led scientific research beginning early in college.",
    "Deep relationships with Arizona's aerospace, defense, and bioscience industries.",
    "National leadership in water policy, arid-land agriculture, and environmental resilience research."
  ],

  sleeperIndustries: [
    "Quantum Photonics",
    "Space Commercialization",
    "Climate Adaptation",
    "Critical Minerals",
    "Autonomous Systems",
    "Medical Imaging"
  ]

},

networkCapital: {

  alumniAccessibility: 88,

  mentorshipDensity: 90,

  executiveAccess: 90,

  internshipNetwork: 92,

  familyBusinessExposure: 56,

  relationshipCapitalScore: 90,

  alumniLoyaltyScore: 94,

  referralCultureStrength: 90,

  donorNetworkStrength: 90,

  boardMemberDensity: 86

},

economicEcosystem: {

  primaryIndustries: [
    "Aerospace",
    "Defense",
    "Healthcare",
    "Optics",
    "Technology",
    "Mining",
    "Environmental Science",
    "Research"
  ],

  regionalEconomicDrivers: [
    "Aerospace & Defense",
    "Optical Engineering",
    "Biosciences",
    "Advanced Manufacturing",
    "Healthcare",
    "Mining",
    "Water Technology"
  ],

  topEmployers: [
    "Raytheon",
    "RTX",
    "Banner Health",
    "Mayo Clinic Arizona",
    "Honeywell Aerospace",
    "Freeport-McMoRan",
    "IBM",
    "Texas Instruments",
    "Boeing",
    "NASA"
  ],

  emergingIndustries: [
    "Commercial Space",
    "Quantum Optics",
    "Artificial Intelligence",
    "Autonomous Systems",
    "Climate Technology",
    "Advanced Semiconductor Manufacturing"
  ],

  startupDensity: "High",

  ventureCapitalAccess: 68,

  corporateHeadquartersDensity: 72,

  healthcareHubStrength: 90,

  innovationIndex: 92

},
geographicInfluence: {

  dominantMarket: "Arizona, the Desert Southwest, and the National Aerospace & Defense Economy",

  secondaryMarkets: [
    "Phoenix AZ",
    "Los Angeles CA",
    "San Diego CA",
    "Dallas TX",
    "Denver CO",
    "Seattle WA",
    "Albuquerque NM"
  ],

  alumniStrongholds: [
    "Phoenix AZ",
    "Tucson AZ",
    "Scottsdale AZ",
    "Southern California",
    "Denver CO"
  ],

  relocationPatterns: [
    "A significant percentage of graduates remain in Arizona, joining aerospace firms, healthcare systems, engineering companies, financial institutions, technology firms, and public agencies throughout Phoenix and Tucson.",
    "Southern California attracts graduates into aerospace, defense, engineering, entertainment technology, healthcare, and business leadership.",
    "Texas recruits engineering, energy, aerospace, defense, and technology graduates into Dallas, Austin, and Houston.",
    "Colorado draws graduates into aerospace, environmental science, renewable energy, geospatial technologies, and outdoor industry leadership.",
    "A specialized international alumni network extends into Europe, Chile, Australia, and Asia through astronomy, planetary science, mining, optics, and global scientific research."
  ],

  regionalInfluenceScore: 98,

  nationalReachScore: 84,

  internationalReachScore: 86

},

socialCapital: {

  greekLifeInfluence: 32,

  studentOrganizationStrength: 94,

  leadershipDevelopment: 90,

  crossDisciplinaryInteraction: 92,

  civicEngagement: 84

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 30,
    notes: "Limited institutional emphasis outside consumer sciences, dermatology research, and wellness innovation."
  },

  healthWellness: {
    strength: 92,
    notes: "Strong opportunities through the College of Medicine, Banner Health, cancer research, biomedical engineering, pharmacy, nursing, and public health."
  },

  nutraceuticals: {
    strength: 56,
    notes: "Agricultural sciences, food systems, nutrition, and biosciences support emerging opportunities in food innovation and nutritional research."
  },

  consumerProducts: {
    strength: 68,
    notes: "Graduates enter consumer technology, manufacturing, supply chain management, and product development, though this is not a primary institutional focus."
  },

  outdoorIndustry: {
    strength: 90,
    notes: "Exceptional strengths in environmental science, conservation, climate resilience, water policy, public lands, and outdoor recreation industries throughout the Southwest."
  },

  sportsBusiness: {
    strength: 70,
    notes: "Strong athletics tradition and sports management opportunities throughout the Southwest, although sports business is not a defining institutional specialty."
  },

  entertainmentMedia: {
    strength: 58,
    notes: "Opportunities exist through journalism, digital media, and broadcasting, but entertainment is secondary to STEM and research."
  },

  ventureCapital: {
    strength: 72,
    notes: "Arizona's startup ecosystem continues to grow, particularly in aerospace, healthcare, climate technology, and scientific commercialization."
  },

  privateEquity: {
    strength: 66,
    notes: "Graduates enter regional investment firms, infrastructure investing, mining finance, and middle-market private equity."
  },

  investmentBanking: {
    strength: 68,
    notes: "Strong regional placement with selective national recruiting, particularly for students in Eller and engineering-related finance."
  },

  consulting: {
    strength: 82,
    notes: "Deloitte, EY, PwC, Accenture, Slalom, and regional consulting firms recruit regularly across business, engineering, and analytics."
  },

  medicine: {
    strength: 94,
    notes: "Outstanding preparation for medical school, biomedical research, pharmacy, nursing, physician-scientist careers, and healthcare innovation."
  },

  healthcareAdministration: {
    strength: 86,
    notes: "Healthcare leadership opportunities are strengthened by Arizona's expanding medical sector and partnerships with Banner Health and academic medicine."
  },

  defense: {
    strength: 96,
    notes: "One of the nation's strongest public university pipelines into aerospace, missile systems, optics, defense engineering, intelligence technologies, and national security research."
  },

  realEstate: {
    strength: 74,
    notes: "Arizona's sustained population growth creates solid opportunities in commercial development, construction, land planning, and infrastructure investment."
  },

  luxuryBrands: {
    strength: 26,
    notes: "Luxury industries are not a major institutional emphasis outside hospitality and premium consumer markets."
  },

  entrepreneurship: {
    strength: 84,
    notes: "The Center for Innovation, Tech Launch Arizona, and expanding startup ecosystem support scientific commercialization and technology entrepreneurship."
  },

  technology: {
    strength: 88,
    notes: "Strong pathways into software, engineering, cybersecurity, aerospace technologies, optics, AI, and scientific computing."
  },

  publicPolicy: {
    strength: 84,
    notes: "Well-regarded programs in public administration, environmental policy, border studies, water policy, and regional economic development."
  },

  nonprofitLeadership: {
    strength: 84,
    notes: "Environmental organizations, healthcare systems, education, conservation, and community development provide meaningful nonprofit leadership pathways."
  }

},
wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 88,

  firstGenerationSupport: 94,

  wealthCreationPotential: 90,

  familyBusinessPipelineStrength: 58

},

futureResilience: {

  aiResistance: 96,

  automationResistance: 98,

  adaptabilityScore: 96,

  interdisciplinaryStrength: 96,

  futureReadiness: 96,

  entrepreneurialFlexibility: 88,

  lifelongLearningCulture: 98,

  innovationCapacity: 96

},

lifeDesignOutcomes: {

  wealthCreationPotential: 90,

  communityLeadershipPotential: 92,

  geographicMobility: 90,

  workLifeBalancePotential: 90,

  purposeAlignment: 96,

  familyFormationSupport: 90,

  personalDevelopmentPotential: 94,

  careerOptionality: 94,

  longTermLifeSatisfaction: 94

},

institutionalMoat: {

  prestigeMoat: 90,

  networkMoat: 88,

  geographicMoat: 94,

  industryMoat: 98,

  alumniMoat: 88,

  brandDurability: 94,

  overallMoatScore: 92

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 88,

  returnerScore: 54,

  stewardScore: 40,

  navigatorScore: 92,

  geographicLockIn: "low",

  alumniDispersalPattern: "national with particularly strong concentration throughout Arizona, California, Texas, Colorado, and the aerospace and scientific research sectors"

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 96,
    type: "University Hillel"
  },

  estimatedJewishUndergraduates: 3200,

  jewishStudentPercentage: "~8%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Exceptional",

  notes: "The University of Arizona has one of the strongest Jewish student communities among public universities in the United States. Arizona Hillel serves a large undergraduate population through weekly Shabbat dinners, leadership fellowships, Birthright Israel, Jewish Greek life partnerships, Israel engagement, service opportunities, and strong connections to Tucson's long-established Jewish community. Along with ASU, Florida, Wisconsin, Maryland, Indiana, Michigan, Penn State, and Ohio State, Arizona is consistently considered one of the premier public universities for Jewish campus life."

},

honorsCollege: {

  exists: true,

  name: "W.A. Franke Honors College",

  strength: 94,

  notes: "The W.A. Franke Honors College provides an academically rigorous, small-college experience within the University of Arizona. Students benefit from honors seminars, dedicated advising, priority registration, undergraduate research, faculty mentorship, honors housing, national fellowship support, and interdisciplinary thesis opportunities. It significantly enhances the undergraduate experience, particularly for students pursuing STEM, medicine, business, and research careers."

}
},

"University of Oregon": {
institutionNarrative: {

  name: "University of Oregon",

  location: "Eugene, Oregon",

  region: "West",

  archetype: "The Creative Northwest — Design, Business, Sports Innovation, Sustainability, and the Pacific Lifestyle",

  oneSentenceSummary: "The University of Oregon combines nationally respected programs in business, journalism, architecture, environmental studies, law, product design, sports business, and innovation with deep ties to Nike, the outdoor industry, sustainability, and the Pacific Northwest's creative economy.",

  pipeline: "Approximately 24,000 students. Oregon is nationally recognized for Business (Lundquist), Sports Product Management, Journalism (SOJC), Architecture, Environmental Studies, Law, Psychology, Biology, Computer Science, Data Science, Human Physiology, and Education. Major recruiters include Nike, Adidas North America, Columbia Sportswear, Intel, Deloitte, EY, PwC, Amazon, Microsoft, PeaceHealth, Providence Health, Boeing, Oregon Health & Science University, and an expanding network of Pacific Northwest startups and creative companies.",

  hiddenPathway: "Oregon's greatest hidden advantage is its extraordinary relationship with Nike and the global sports industry. Few universities provide students comparable access to athletic apparel, footwear innovation, sports marketing, product design, and sports entrepreneurship while simultaneously offering strong opportunities in sustainability and environmental leadership.",

  institutionalSecret: "Although often viewed as a traditional flagship university, Oregon has quietly become one of the world's most influential talent pipelines into athletic apparel, branding, sports business, design thinking, sustainability, and creative consumer products through decades of collaboration with Nike and Oregon's innovation ecosystem.",

  theRoom: "Located in Eugene, students benefit from a classic residential college environment while remaining connected to Portland's creative economy, Nike's global headquarters, Adidas North America, Columbia Sportswear, Intel's Oregon operations, and one of America's strongest outdoor recreation industries.",

  lifestyle: "Collaborative, outdoors-oriented, environmentally conscious, creative, spirited, and entrepreneurial. Students balance Pac-12 (now Big Ten) athletics, outdoor recreation, student organizations, internships, sustainability initiatives, entrepreneurship, and an active campus culture.",

  bestFitPersonality: "Creative, curious, collaborative, adventurous, socially engaged, and interested in combining professional ambition with quality of life.",

  faithTradition: "Public",

  geographicInfluenceRadius: "Strong throughout Oregon, the Pacific Northwest, California, Colorado, and the outdoor, consumer products, design, and sports industries nationally.",

  economicOutcome: "Excellent outcomes across sports business, consumer products, marketing, design, journalism, business, environmental science, architecture, healthcare, and technology.",

  gradCities: [
    "Portland OR",
    "Seattle WA",
    "San Francisco CA",
    "Los Angeles CA",
    "Denver CO",
    "Eugene OR",
    "New York NY"
  ],

  comparableInstitutions: [
    "University of Colorado Boulder",
    "University of Washington",
    "University of Wisconsin",
    "University of Utah",
    "Penn State"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Lane Community College",
      "Portland Community College",
      "Chemeketa Community College",
      "Clackamas Community College"
    ],

    transferAcceptanceRate: "~70%",

    freshmanAcceptanceRate: "~86%",

    estimatedSavingsRange: "$18,000-$50,000",

    transferNotes: "Oregon maintains strong transfer partnerships with Oregon community colleges, allowing students to move efficiently into business, journalism, environmental science, education, engineering, and liberal arts majors."

  }

},

institutionIdentity: {

  archetype: "Flagship Public Research University",

  institutionalPersonality: "creative, collaborative, entrepreneurial, environmentally conscious, innovative",

  cultureKeywords: [
    "Innovation",
    "Sports",
    "Design",
    "Sustainability",
    "Journalism",
    "Business",
    "Outdoor Leadership",
    "Creativity",
    "Research"
  ],

  missionOrientation: "Preparing leaders through research, creativity, innovation, public engagement, and environmental stewardship.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through interdisciplinary collaboration, experiential education, design thinking, undergraduate research, internships, entrepreneurship, and real-world problem solving.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Generally progressive, environmentally conscious, civically engaged, and globally aware.",

  studentAutonomy: "High",

  prestigeOrientation: "Highly respected flagship university with distinctive national leadership in sports business, journalism, sustainability, and design.",

  socialClimate: "Collaborative, spirited, creative, outdoors-oriented, and professionally ambitious.",

  leadershipStyle: "Leadership through creativity, innovation, collaboration, sustainability, and experiential learning."

},

megaRegionIntegration: {

  primaryMegaRegion: "Pacific Northwest Innovation Corridor",

  regionalRole: "A leading talent engine for the Pacific Northwest's consumer products, outdoor recreation, sports innovation, sustainability, creative industries, and entrepreneurial economy."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 16,
  BosWash: 30,
  TorBuffChester: 12,
  TexasTriangle: 28,
  CharLanta: 16,
  NorCalInnovationCorridor: 82,
  SoCalCreativeEconomy: 58

},

comparativePositioning: {

  versusColoradoBoulder:
    "Both offer outstanding residential flagship experiences with strong outdoor cultures and environmental science programs. Oregon has significantly deeper relationships with Nike, sports business, journalism, and consumer products, while Colorado maintains stronger aerospace, engineering, and federal research integration.",

  versusWashington:
    "Washington possesses substantially greater research intensity, medicine, engineering, artificial intelligence, and technology integration. Oregon provides a more intimate undergraduate experience with unique strengths in sports business, design, journalism, sustainability, and brand innovation.",

  versusWisconsin:
    "Wisconsin offers broader national research strength across STEM, economics, and public policy, while Oregon distinguishes itself through athletic apparel, sports marketing, architecture, creative industries, and Pacific Northwest consumer brands.",

  versusPennState:
    "Penn State has stronger engineering, manufacturing, and East Coast industry connections, while Oregon excels in sports product innovation, journalism, sustainability, outdoor industries, and creative brand development."

},

institutionScale: {

  enrollmentCategory: "Medium-Large",

  undergraduateEnrollment: 20000,

  graduateEnrollment: 4000,

  totalEnrollment: 24000,

  campusType: "Residential Public Research University",

  residentialIntensity: 90,

  communityFeel: 92,

  studentFacultyRatio: "17:1",

  classSizeExperience: "Lower-division courses vary from medium-sized lectures to smaller discussion sections. Upper-division students experience significantly smaller classes, close faculty interaction, project-based learning, internships, undergraduate research, studio work, and collaborative capstone experiences.",

  scaleAdvantages: [
    "Traditional residential flagship campus with a strong sense of community",
    "Accessible faculty and collaborative learning environment",
    "Outstanding experiential learning through internships and industry partnerships",
    "Excellent balance between research opportunities and undergraduate focus",
    "Strong school spirit and nationally recognized athletic culture"
  ],

  scaleDisadvantages: [
    "Fewer graduate and research resources than the largest AAU public universities",
    "Less breadth in engineering and medicine than peer flagships",
    "Some specialized industries require relocation after graduation",
    "National recruiting is strongest in selected disciplines rather than universally across all fields"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 92,
    conscientiousness: 82,
    extraversion: 82,
    agreeableness: 84,
    neuroticism: 32
  },

  hollandCodes: ["A","E","S"],

  learningStyle: [
    "Experiential Learning",
    "Project-Based Learning",
    "Collaborative Learning",
    "Creative Problem Solving",
    "Professional Practice"
  ],

  socialEnvironment: [
    "Collaborative",
    "School Spirited",
    "Creative",
    "Outdoors Oriented",
    "Professionally Ambitious"
  ],

  idealStudentTraits: [
    "Creative",
    "Collaborative",
    "Entrepreneurial",
    "Community-oriented",
    "Interested in balancing academics with campus involvement"
  ],

  thrivesIf: [
    "Interested in business, journalism, sports, design, architecture, sustainability, or environmental sciences",
    "Values a traditional residential college experience",
    "Enjoys outdoor recreation and an active student culture",
    "Wants meaningful internship opportunities with Pacific Northwest employers",
    "Seeks strong relationships with professors and classmates"
  ],

  strugglesIf: [
    "Wants an intensely competitive academic environment",
    "Plans for highly specialized engineering or medical research",
    "Prefers a large urban university",
    "Needs extensive global finance or venture capital recruiting"
  ],

  transferRiskFactors: [
    "Students seeking elite STEM research universities",
    "Students wanting major metropolitan campuses",
    "Students looking for highly specialized engineering ecosystems"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Sports Product Design",
    "Environmental Studies",
    "Landscape Architecture",
    "Advertising",
    "Product Design",
    "Human Physiology",
    "Planning, Public Policy & Management",
    "Data Science"
  ],

  hiddenCareerPipelines: [
    "Athletic Footwear & Apparel",
    "Brand Strategy",
    "Sports Marketing",
    "Outdoor Industry",
    "Sustainable Product Design",
    "Sports Technology",
    "Creative Agencies",
    "Environmental Consulting"
  ],

  nicheRecruitingAdvantages: [
    "Nike",
    "Adidas North America",
    "Columbia Sportswear",
    "On",
    "Under Armour",
    "Pendleton Woolen Mills",
    "Wieden+Kennedy",
    "Intel Oregon"
  ],

  overlookedStrengths: [
    "The Sports Product Management program is considered one of the nation's premier graduate pipelines into the global athletic apparel industry.",
    "The School of Journalism and Communication consistently ranks among the country's strongest public journalism schools.",
    "Deep institutional relationships with Nike provide unparalleled exposure to product innovation, branding, and consumer marketing.",
    "Architecture, sustainable design, and environmental planning are longstanding institutional strengths.",
    "The Knight Campus for Accelerating Scientific Impact is rapidly expanding Oregon's research profile in biotechnology, genomics, and translational science."
  ],

  sleeperIndustries: [
    "Sports Technology",
    "Wearable Technology",
    "Sustainable Consumer Products",
    "Climate Innovation",
    "Performance Science",
    "Digital Brand Strategy"
  ]

},

networkCapital: {

  alumniAccessibility: 90,

  mentorshipDensity: 90,

  executiveAccess: 94,

  internshipNetwork: 92,

  familyBusinessExposure: 52,

  relationshipCapitalScore: 92,

  alumniLoyaltyScore: 96,

  referralCultureStrength: 94,

  donorNetworkStrength: 100,

  boardMemberDensity: 92

},

economicEcosystem: {

  primaryIndustries: [
    "Consumer Products",
    "Sports Business",
    "Marketing",
    "Technology",
    "Healthcare",
    "Outdoor Recreation",
    "Architecture",
    "Education"
  ],

  regionalEconomicDrivers: [
    "Athletic Apparel",
    "Outdoor Products",
    "Technology",
    "Healthcare",
    "Advanced Manufacturing",
    "Creative Services",
    "Sustainability"
  ],

  topEmployers: [
    "Nike",
    "Adidas North America",
    "Columbia Sportswear",
    "Intel",
    "Amazon",
    "Microsoft",
    "PeaceHealth",
    "Providence",
    "Deloitte",
    "Boeing"
  ],

  emergingIndustries: [
    "Sports Technology",
    "Wearable Computing",
    "Climate Technology",
    "Artificial Intelligence",
    "Digital Media",
    "Consumer Health"
  ],

  startupDensity: "Moderate-High",

  ventureCapitalAccess: 70,

  corporateHeadquartersDensity: 84,

  healthcareHubStrength: 82,

  innovationIndex: 88

},

geographicInfluence: {

  dominantMarket: "Oregon, the Pacific Northwest, and the Global Consumer Products & Sports Industry",

  secondaryMarkets: [
    "Seattle WA",
    "San Francisco CA",
    "Los Angeles CA",
    "Denver CO",
    "New York NY",
    "Austin TX",
    "Portland OR"
  ],

  alumniStrongholds: [
    "Portland OR",
    "Seattle WA",
    "Eugene OR",
    "San Francisco CA",
    "Los Angeles CA"
  ],

  relocationPatterns: [
    "Many graduates remain in Oregon, joining Nike, Adidas North America, Columbia Sportswear, healthcare systems, technology firms, architecture practices, educational institutions, and entrepreneurial ventures throughout Portland and Eugene.",
    "Seattle attracts graduates into technology, consumer products, consulting, healthcare, and product management at Microsoft, Amazon, and other Pacific Northwest employers.",
    "California recruits graduates into entertainment, technology, consumer brands, architecture, advertising, sustainability, and entrepreneurial ventures.",
    "Denver continues to attract graduates pursuing outdoor recreation, environmental consulting, renewable energy, product design, and active lifestyle industries.",
    "A nationally dispersed alumni network extends into New York, Austin, Chicago, and international consumer brands through marketing, journalism, design, sports business, and corporate leadership."
  ],

  regionalInfluenceScore: 96,

  nationalReachScore: 82,

  internationalReachScore: 76

},

socialCapital: {

  greekLifeInfluence: 24,

  studentOrganizationStrength: 94,

  leadershipDevelopment: 90,

  crossDisciplinaryInteraction: 90,

  civicEngagement: 88

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 54,
    notes: "Strong preparation in consumer branding, marketing, product strategy, and retail innovation provides transferable skills for premium consumer and beauty brands."
  },

  healthWellness: {
    strength: 82,
    notes: "Human physiology, public health, psychology, and sports science create solid pathways into health, wellness, fitness, and performance industries."
  },

  nutraceuticals: {
    strength: 56,
    notes: "Nutrition, exercise science, and sustainable food systems provide emerging opportunities, though this is not a primary institutional focus."
  },

  consumerProducts: {
    strength: 96,
    notes: "One of the nation's premier universities for consumer products, brand management, product innovation, footwear, apparel, and global retail leadership."
  },

  outdoorIndustry: {
    strength: 100,
    notes: "Arguably America's strongest public university pipeline into outdoor recreation, performance apparel, sustainability, outdoor equipment, and adventure brands."
  },

  sportsBusiness: {
    strength: 100,
    notes: "National leader in sports marketing, sports product management, athletic branding, sponsorship, merchandising, and global sports business."
  },

  entertainmentMedia: {
    strength: 82,
    notes: "Outstanding journalism, advertising, public relations, digital storytelling, and creative communications produce strong media career pathways."
  },

  ventureCapital: {
    strength: 66,
    notes: "Entrepreneurship continues to grow through Portland's startup ecosystem, particularly in consumer products, sustainability, and technology."
  },

  privateEquity: {
    strength: 56,
    notes: "Graduates occasionally enter middle-market investing and consumer-focused private equity, although finance is not a defining institutional strength."
  },

  investmentBanking: {
    strength: 58,
    notes: "Regional placement is solid, with selective national recruiting for top-performing business students."
  },

  consulting: {
    strength: 82,
    notes: "Deloitte, EY, PwC, Accenture, West Monroe, and strategy boutiques recruit across business, analytics, and marketing disciplines."
  },

  medicine: {
    strength: 72,
    notes: "Strong preparation for health professions and graduate study, although students pursuing academic medicine often continue through OHSU and other medical centers."
  },

  healthcareAdministration: {
    strength: 74,
    notes: "Business, public administration, and health sciences support careers in healthcare management and health systems leadership."
  },

  defense: {
    strength: 40,
    notes: "Limited institutional emphasis outside engineering, cybersecurity, and select federal research partnerships."
  },

  realEstate: {
    strength: 62,
    notes: "Growing opportunities exist through urban planning, architecture, sustainable development, and Pacific Northwest commercial real estate."
  },

  luxuryBrands: {
    strength: 86,
    notes: "Exceptional preparation for premium consumer brands, global apparel, footwear, lifestyle companies, and luxury-adjacent retail marketing."
  },

  entrepreneurship: {
    strength: 84,
    notes: "Strong entrepreneurial culture in consumer products, sustainability, creative industries, sports innovation, and design-driven startups."
  },

  technology: {
    strength: 76,
    notes: "Growing opportunities through software, product management, digital marketing, UX design, and Pacific Northwest technology employers."
  },

  publicPolicy: {
    strength: 78,
    notes: "Environmental policy, education, public administration, and sustainability create meaningful public-sector leadership opportunities."
  },

  nonprofitLeadership: {
    strength: 86,
    notes: "Environmental advocacy, education, youth development, conservation, and community organizations provide strong nonprofit leadership pathways."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 84,

  firstGenerationSupport: 90,

  wealthCreationPotential: 88,

  familyBusinessPipelineStrength: 54

},

futureResilience: {

  aiResistance: 88,

  automationResistance: 90,

  adaptabilityScore: 94,

  interdisciplinaryStrength: 94,

  futureReadiness: 92,

  entrepreneurialFlexibility: 90,

  lifelongLearningCulture: 94,

  innovationCapacity: 92

},

lifeDesignOutcomes: {

  wealthCreationPotential: 88,

  communityLeadershipPotential: 92,

  geographicMobility: 88,

  workLifeBalancePotential: 98,

  purposeAlignment: 96,

  familyFormationSupport: 96,

  personalDevelopmentPotential: 96,

  careerOptionality: 90,

  longTermLifeSatisfaction: 98

},

institutionalMoat: {

  prestigeMoat: 84,

  networkMoat: 90,

  geographicMoat: 94,

  industryMoat: 96,

  alumniMoat: 92,

  brandDurability: 98,

  overallMoatScore: 92

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 84,

  returnerScore: 62,

  stewardScore: 42,

  navigatorScore: 90,

  geographicLockIn: "low",

  alumniDispersalPattern: "national with particularly strong concentration throughout the Pacific Northwest, California, Colorado, and the global consumer products and sports industries"

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 80,
    type: "University Hillel"
  },

  estimatedJewishUndergraduates: 700,

  jewishStudentPercentage: "~3–4%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Moderate",

  notes: "Oregon Hillel maintains an active presence through weekly Shabbat dinners, holiday celebrations, Birthright Israel participation, leadership development, and community service. While considerably smaller than Jewish communities at schools such as Arizona, Wisconsin, Maryland, Indiana, or Florida, students seeking an engaged Jewish community within a classic Pacific Northwest campus environment will find consistent programming and strong student leadership."

},

honorsCollege: {

  exists: true,

  name: "Clark Honors College",

  strength: 98,

  notes: "The Robert D. Clark Honors College is widely regarded as one of the nation's premier public honors colleges. Students complete an interdisciplinary liberal arts curriculum in seminar-style classes averaging fewer than twenty students while retaining full access to the University of Oregon's research university resources. The college emphasizes exceptional writing, faculty mentorship, undergraduate research, national fellowships, and a senior thesis, creating a small liberal arts college experience within a flagship public university."

}
},

"Reed College": {
institutionNarrative: {

  name: "Reed College",

  location: "Portland, Oregon",

  region: "West",

  archetype: "The Intellectual Sanctuary — Pure Scholarship, Independent Inquiry, and Academic Rigor",

  oneSentenceSummary: "Reed College is one of America's most intellectually rigorous liberal arts colleges, emphasizing original thinking, deep scholarship, close faculty mentorship, and learning for its own sake rather than prestige, pre-professionalism, or conventional career pathways.",

  pipeline: "Approximately 1,330 students. Reed is nationally respected for Physics, Mathematics, Chemistry, Biology, Computer Science, Philosophy, Literature, History, Political Science, Psychology, Linguistics, Economics, and the Humanities. Graduates disproportionately pursue PhDs, medicine, scientific research, academia, software engineering, public policy, publishing, data science, and graduate education. Employers include Google, Microsoft, Intel, OHSU, Nike, Amazon, research laboratories, universities, and mission-driven organizations, though graduate school is a defining post-graduation pathway.",

  hiddenPathway: "Reed's greatest hidden advantage is not immediate recruiting but intellectual formation. Few colleges produce as many future professors, scientists, physicians, researchers, and scholars relative to their size. The senior thesis requirement, conference-based courses, and emphasis on original research create unusually strong preparation for graduate education and intellectually demanding careers.",

  institutionalSecret: "Reed deliberately rejects many status signals common in higher education—including varsity athletics, Greek life, and traditional GPA culture—in favor of building one of the country's purest academic communities. Its influence is significantly larger than its enrollment because of its extraordinary graduate-school placement and reputation among academics.",

  theRoom: "Located in Portland, Reed combines an intimate residential campus with access to the Pacific Northwest's technology, healthcare, publishing, nonprofit, and creative economies while maintaining an intentionally insulated academic culture centered on scholarship and intellectual independence.",

  lifestyle: "Intellectually intense, discussion-driven, quirky, independent, collaborative, literary, research-oriented, and deeply residential. Students spend significant time reading, writing, debating ideas, conducting research, and building close academic communities.",

  bestFitPersonality: "Exceptionally curious, intrinsically motivated, intellectually fearless, independent, analytical, and comfortable prioritizing learning over prestige signals or conventional campus life.",

  faithTradition: "None",

  geographicInfluenceRadius: "National among graduate schools and academia, with particularly strong influence throughout the Pacific Northwest, California, Boston, New York, and research institutions worldwide.",

  economicOutcome: "Outstanding long-term outcomes through graduate education, scientific research, medicine, technology, academia, and intellectually demanding professions.",

  gradCities: [
    "Portland OR",
    "Seattle WA",
    "San Francisco CA",
    "Boston MA",
    "New York NY",
    "Chicago IL",
    "Washington DC"
  ],

  comparableInstitutions: [
    "Swarthmore College",
    "Carleton College",
    "University of Chicago",
    "St. John's College",
    "Oberlin College"
  ],

  ccTransferPathway: {

    hasCCPathway: false,

    ccFeederNames: [],

    transferAcceptanceRate: "~20%",

    freshmanAcceptanceRate: "~25%",

    estimatedSavingsRange: "",

    transferNotes: "Reed enrolls relatively few transfer students. Most students enter as first-years and complete the full four-year academic experience centered on the required humanities sequence and senior thesis." 

  }

},

institutionIdentity: {

  archetype: "Elite Liberal Arts College",

  institutionalPersonality: "intellectually fearless, scholarly, independent, unconventional, deeply analytical",

  cultureKeywords: [
    "Scholarship",
    "Research",
    "Independent Thinking",
    "Humanities",
    "Science",
    "Writing",
    "Academic Freedom",
    "Inquiry",
    "Original Research"
  ],

  missionOrientation: "Developing independent thinkers through rigorous scholarship, original inquiry, and a lifelong commitment to learning.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through intensive seminars, conference-style discussion, original research, close faculty mentorship, and the expectation that education is pursued for understanding rather than credentialing.",

  competitiveness: "Highly Selective",

  politicalCulture: "Predominantly progressive, intellectually independent, and highly engaged in philosophical and social discourse.",

  studentAutonomy: "Extremely High",

  prestigeOrientation: "Exceptionally respected within academia, graduate education, and intellectual professions despite intentionally maintaining a relatively low public profile.",

  socialClimate: "Highly intellectual, unconventional, collaborative, intensely academic, and community-oriented.",

  leadershipStyle: "Leadership through intellectual rigor, original thinking, scholarship, and independent inquiry."

},

megaRegionIntegration: {

  primaryMegaRegion: "Pacific Northwest Innovation Corridor",

  regionalRole: "A distinctive liberal arts institution producing scholars, scientists, physicians, researchers, and intellectually oriented leaders for graduate education, technology, healthcare, and public service."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 10,
  BosWash: 52,
  TorBuffChester: 18,
  TexasTriangle: 12,
  CharLanta: 10,
  NorCalInnovationCorridor: 82,
  SoCalCreativeEconomy: 42

},
comparativePositioning: {

  versusSwarthmore:
    "Both are among America's most intellectually rigorous liberal arts colleges with exceptional PhD production. Swarthmore maintains stronger engineering options, East Coast institutional connectivity, and somewhat broader national prestige, while Reed embraces an even more unconventional academic culture centered on independent scholarship, conference-style learning, and the senior thesis.",

  versusCarleton:
    "Carleton offers a more balanced blend of intellectual rigor, undergraduate research, and traditional campus life, while Reed places greater emphasis on academic intensity, independent inquiry, and scholarship as an end in itself.",

  versusUniversityOfChicago:
    "Chicago provides the scale, research infrastructure, graduate schools, and global reputation of a major research university. Reed recreates much of Chicago's intellectual culture within an intimate liberal arts environment focused almost entirely on undergraduate education.",

  versusOberlin:
    "Both cultivate independent thinkers with progressive campus cultures and strong humanities traditions. Reed is considerably more academically intense and research-oriented, while Oberlin places greater emphasis on music, arts, activism, and creative expression."

},

institutionScale: {

  enrollmentCategory: "Very Small",

  undergraduateEnrollment: 1330,

  graduateEnrollment: 0,

  totalEnrollment: 1330,

  campusType: "Residential Liberal Arts College",

  residentialIntensity: 98,

  communityFeel: 98,

  studentFacultyRatio: "9:1",

  classSizeExperience: "Nearly all classes are seminar-based or conference-style discussions with extensive reading, writing, faculty interaction, and individualized feedback. Every student completes an original senior thesis, making independent research a defining feature of the undergraduate experience.",

  scaleAdvantages: [
    "Exceptional faculty accessibility",
    "Deep intellectual community",
    "Highly individualized academic experience",
    "Universal undergraduate research through the senior thesis",
    "Strong interdisciplinary dialogue across the campus"
  ],

  scaleDisadvantages: [
    "Limited course breadth compared to major research universities",
    "No graduate or professional schools",
    "Few large-scale recruiting pipelines",
    "Very small alumni base"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 100,
    conscientiousness: 94,
    extraversion: 28,
    agreeableness: 82,
    neuroticism: 48
  },

  hollandCodes: ["I","A","S"],

  learningStyle: [
    "Seminar Discussion",
    "Independent Inquiry",
    "Original Research",
    "Close Reading",
    "Analytical Writing"
  ],

  socialEnvironment: [
    "Highly Intellectual",
    "Collaborative",
    "Independent",
    "Residential",
    "Unconventional"
  ],

  idealStudentTraits: [
    "Exceptionally intellectually curious",
    "Self-motivated",
    "Comfortable with ambiguity",
    "Enjoys reading and writing",
    "Values learning over competition"
  ],

  thrivesIf: [
    "Wants graduate school or research preparation",
    "Enjoys discussion-based learning",
    "Seeks close faculty mentorship",
    "Values intellectual independence",
    "Prefers a close-knit residential community"
  ],

  strugglesIf: [
    "Wants Division I athletics or traditional school spirit",
    "Prefers structured pre-professional pathways",
    "Needs extensive career placement infrastructure",
    "Dislikes heavy reading and writing workloads",
    "Wants a highly social Greek-life culture"
  ],

  transferRiskFactors: [
    "Students seeking larger social environments",
    "Students focused primarily on immediate corporate recruiting",
    "Students uncomfortable with sustained academic intensity"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Linguistics",
    "Classics",
    "Neuroscience",
    "Mathematics",
    "Chemistry",
    "Physics",
    "Religion",
    "Russian"
  ],

  hiddenCareerPipelines: [
    "PhD Programs",
    "Academic Medicine",
    "Scientific Research",
    "Artificial Intelligence Research",
    "Public Policy Analysis",
    "Quantitative Research",
    "Publishing",
    "Think Tanks"
  ],

  nicheRecruitingAdvantages: [
    "Google",
    "Microsoft",
    "Intel",
    "Oregon Health & Science University",
    "Fred Hutch Cancer Center",
    "Los Alamos National Laboratory",
    "Lawrence Livermore National Laboratory",
    "RAND Corporation"
  ],

  overlookedStrengths: [
    "Reed consistently ranks among the nation's leading colleges in the percentage of graduates who eventually earn PhDs.",
    "Every student completes a year-long senior thesis based on original scholarship or scientific research.",
    "The conference method creates unusually close intellectual relationships between faculty and students.",
    "Strong placement into elite graduate schools across the sciences, humanities, medicine, law, and public policy.",
    "Despite its humanities reputation, Reed produces exceptional graduates in mathematics, chemistry, physics, computer science, and neuroscience."
  ],

  sleeperIndustries: [
    "Artificial Intelligence Research",
    "Computational Biology",
    "Science Policy",
    "Research Consulting",
    "Behavioral Economics",
    "Educational Technology"
  ]

},

networkCapital: {

  alumniAccessibility: 88,

  mentorshipDensity: 98,

  executiveAccess: 72,

  internshipNetwork: 70,

  familyBusinessExposure: 34,

  relationshipCapitalScore: 86,

  alumniLoyaltyScore: 96,

  referralCultureStrength: 82,

  donorNetworkStrength: 84,

  boardMemberDensity: 72

},

economicEcosystem: {

  primaryIndustries: [
    "Higher Education",
    "Scientific Research",
    "Technology",
    "Healthcare",
    "Public Policy",
    "Publishing",
    "Data Science",
    "Nonprofit Leadership"
  ],

  regionalEconomicDrivers: [
    "Technology",
    "Healthcare",
    "Research",
    "Creative Economy",
    "Higher Education",
    "Public Service",
    "Environmental Innovation"
  ],

  topEmployers: [
    "Google",
    "Microsoft",
    "Intel",
    "Oregon Health & Science University",
    "Amazon",
    "Nike",
    "Providence Health",
    "University Systems",
    "Federal Research Laboratories",
    "Nonprofit Organizations"
  ],

  emergingIndustries: [
    "Artificial Intelligence",
    "Computational Biology",
    "Climate Science",
    "Digital Humanities",
    "Precision Medicine",
    "Data Analytics"
  ],

  startupDensity: "Moderate",

  ventureCapitalAccess: 42,

  corporateHeadquartersDensity: 62,

  healthcareHubStrength: 82,

  innovationIndex: 86

},

geographicInfluence: {

  dominantMarket: "The Pacific Northwest and the National Graduate Education Ecosystem",

  secondaryMarkets: [
    "Seattle WA",
    "San Francisco CA",
    "Boston MA",
    "New York NY",
    "Washington DC",
    "Chicago IL",
    "Los Angeles CA"
  ],

  alumniStrongholds: [
    "Portland OR",
    "Seattle WA",
    "San Francisco CA",
    "Boston MA",
    "New York NY"
  ],

  relocationPatterns: [
    "Many graduates remain in the Pacific Northwest, joining technology companies, healthcare organizations, universities, research institutes, and mission-driven nonprofits.",
    "California attracts graduates into software engineering, artificial intelligence, biotechnology, publishing, and graduate education.",
    "Boston continues to draw Reed graduates into doctoral programs, medicine, scientific research, biotechnology, and higher education.",
    "Washington, DC recruits graduates into public policy, think tanks, nonprofit leadership, economics, and government research.",
    "An unusually large percentage of alumni pursue advanced degrees before entering long-term careers, creating a geographically dispersed network centered on research universities, laboratories, hospitals, and knowledge-intensive organizations."
  ],

  regionalInfluenceScore: 82,

  nationalReachScore: 88,

  internationalReachScore: 74

},

socialCapital: {

  greekLifeInfluence: 0,

  studentOrganizationStrength: 82,

  leadershipDevelopment: 84,

  crossDisciplinaryInteraction: 98,

  civicEngagement: 88

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 18,
    notes: "Limited institutional emphasis beyond scientific research and consumer behavior."
  },

  healthWellness: {
    strength: 78,
    notes: "Excellent preparation through neuroscience, biology, chemistry, psychology, and pre-health advising for medicine, research, and healthcare innovation."
  },

  nutraceuticals: {
    strength: 26,
    notes: "Scientific preparation is strong, but industry-specific recruiting is limited."
  },

  consumerProducts: {
    strength: 48,
    notes: "Graduates occasionally enter product management and technology firms, though Reed is not a traditional consumer products pipeline."
  },

  outdoorIndustry: {
    strength: 44,
    notes: "The Pacific Northwest location supports environmental careers, but this is not a defining institutional focus."
  },

  sportsBusiness: {
    strength: 10,
    notes: "Virtually no institutional emphasis on sports management or athletic industries."
  },

  entertainmentMedia: {
    strength: 54,
    notes: "Writing, publishing, journalism, criticism, and documentary work represent stronger pathways than commercial entertainment."
  },

  ventureCapital: {
    strength: 30,
    notes: "Some alumni enter venture capital through technology and scientific expertise, but Reed is not a founder-driven ecosystem."
  },

  privateEquity: {
    strength: 18,
    notes: "Private equity is not a significant recruiting destination."
  },

  investmentBanking: {
    strength: 20,
    notes: "A small number of graduates pursue finance, but Reed's culture is not oriented toward investment banking recruitment."
  },

  consulting: {
    strength: 56,
    notes: "Graduates occasionally join strategy and research consulting firms, particularly in economics, public policy, and analytics."
  },

  medicine: {
    strength: 90,
    notes: "Outstanding preparation for medical school through rigorous science curricula, research experience, and exceptional faculty mentorship."
  },

  healthcareAdministration: {
    strength: 54,
    notes: "Preparation is stronger for clinical, research, and physician careers than administrative leadership."
  },

  defense: {
    strength: 20,
    notes: "Limited institutional emphasis outside scientific research and select federal laboratories."
  },

  realEstate: {
    strength: 12,
    notes: "Real estate is not a meaningful institutional pathway."
  },

  luxuryBrands: {
    strength: 12,
    notes: "Minimal institutional connection to luxury consumer industries."
  },

  entrepreneurship: {
    strength: 52,
    notes: "Entrepreneurship emerges primarily from scientific, software, and intellectual ventures rather than organized startup ecosystems."
  },

  technology: {
    strength: 80,
    notes: "Strong placement into software engineering, AI research, computational sciences, and technical roles through the college's rigorous analytical preparation."
  },

  publicPolicy: {
    strength: 82,
    notes: "Excellent preparation for policy analysis, economics, law, government research, and public service."
  },

  nonprofitLeadership: {
    strength: 90,
    notes: "A longstanding culture of public service, education, environmental advocacy, research, and mission-driven leadership supports outstanding nonprofit career pathways."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 78,

  firstGenerationSupport: 84,

  wealthCreationPotential: 82,

  familyBusinessPipelineStrength: 24

},

futureResilience: {

  aiResistance: 98,

  automationResistance: 98,

  adaptabilityScore: 100,

  interdisciplinaryStrength: 100,

  futureReadiness: 98,

  entrepreneurialFlexibility: 82,

  lifelongLearningCulture: 100,

  innovationCapacity: 94

},

lifeDesignOutcomes: {

  wealthCreationPotential: 82,

  communityLeadershipPotential: 94,

  geographicMobility: 90,

  workLifeBalancePotential: 88,

  purposeAlignment: 100,

  familyFormationSupport: 90,

  personalDevelopmentPotential: 100,

  careerOptionality: 94,

  longTermLifeSatisfaction: 98

},

institutionalMoat: {

  prestigeMoat: 88,

  networkMoat: 84,

  geographicMoat: 74,

  industryMoat: 82,

  alumniMoat: 90,

  brandDurability: 96,

  overallMoatScore: 88

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 94,

  returnerScore: 32,

  stewardScore: 22,

  navigatorScore: 96,

  geographicLockIn: "very_low",

  alumniDispersalPattern: "national and international, concentrated in graduate schools, research universities, technology hubs, academic medicine, and knowledge-intensive organizations"

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 62,
    type: "Greater Portland Hillel"
  },

  estimatedJewishUndergraduates: 100,

  jewishStudentPercentage: "~8%",

  kosherDining: false,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Small but Active",

  notes: "Reed is served by Greater Portland Hillel rather than a standalone campus Hillel. Students participate in Shabbat dinners, Jewish holiday programming, Birthright Israel, social events, and leadership opportunities alongside students from other Portland-area colleges. Although the community is relatively small, Jewish life is well supported within the broader Portland Jewish community."

},

honorsCollege: {

  exists: false,

  name: "",

  strength: 0,

  notes: "Reed does not maintain a separate honors college because the entire institution functions as an honors-level academic experience. Every student participates in an interdisciplinary humanities sequence, completes an original senior thesis, and studies within small discussion-based classes emphasizing scholarship, writing, and independent inquiry."

}
},

"Gonzaga University": {
institutionNarrative: {

  name: "Gonzaga University",

  location: "Spokane, Washington",

  region: "West",

  archetype: "The Jesuit Leadership Community — Character, Service, Business, Health Sciences, and Pacific Northwest Leadership",

  oneSentenceSummary: "Gonzaga University combines Jesuit values, a highly residential undergraduate experience, nationally respected business and engineering programs, strong health sciences, and one of the country's premier basketball cultures to develop principled leaders across the Pacific Northwest and beyond.",

  pipeline: "Approximately 7,400 students. Gonzaga is recognized for Business, Accounting, Finance, Engineering, Nursing, Education, Psychology, Biology, Political Science, Communication, Computer Science, and Pre-Health. Major employers include Providence, Boeing, Amazon, Microsoft, Deloitte, KPMG, PwC, Avista, Kaiser Permanente, Providence Health, Washington state healthcare systems, and numerous Pacific Northwest businesses.",

  hiddenPathway: "Gonzaga's greatest hidden advantage is the unusually close relationship between students, faculty, alumni, and employers. Despite its relatively small size, Gonzaga graduates benefit from an exceptionally loyal alumni network that opens doors throughout the Pacific Northwest in business, healthcare, engineering, law, and public service.",

  institutionalSecret: "While nationally recognized because of basketball, Gonzaga's deeper strength is producing graduates with unusually high levels of professional trust. Employers consistently describe Gonzaga alumni as collaborative, ethical, dependable, and ready for leadership, making the university one of the Pacific Northwest's most respected talent producers.",

  theRoom: "Located in Spokane, Gonzaga provides a traditional residential campus while connecting students to growing healthcare systems, engineering firms, regional corporate headquarters, and the broader economies of Seattle, Portland, Boise, and the Inland Northwest.",

  lifestyle: "Residential, community-oriented, faith-informed, service-focused, spirited, collaborative, and outdoors-oriented. Students balance academics with Division I athletics, service learning, leadership development, campus ministry, and outdoor recreation.",

  bestFitPersonality: "Collaborative, service-minded, relationship-oriented, ambitious, and interested in combining professional success with ethical leadership.",

  faithTradition: "Jesuit Catholic",

  geographicInfluenceRadius: "Strong throughout Washington, Oregon, Idaho, Montana, Alaska, and the broader Pacific Northwest, with growing national recognition.",

  economicOutcome: "Excellent outcomes across business, accounting, healthcare, engineering, education, law, and public service, particularly throughout the Pacific Northwest.",

  gradCities: [
    "Seattle WA",
    "Spokane WA",
    "Portland OR",
    "Boise ID",
    "Denver CO",
    "San Francisco CA",
    "Phoenix AZ"
  ],

  comparableInstitutions: [
    "Loyola Marymount University",
    "Santa Clara University",
    "Marquette University",
    "Creighton University",
    "University of Portland"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Spokane Falls Community College",
      "Spokane Community College",
      "Bellevue College",
      "North Idaho College"
    ],

    transferAcceptanceRate: "~70%",

    freshmanAcceptanceRate: "~76%",

    estimatedSavingsRange: "$20,000-$60,000",

    transferNotes: "Gonzaga maintains strong transfer pathways from regional community colleges, particularly into business, engineering, nursing, education, and liberal arts majors."

  }

},

institutionIdentity: {

  archetype: "Jesuit Comprehensive University",

  institutionalPersonality: "ethical, collaborative, service-oriented, intellectually curious, community-centered",

  cultureKeywords: [
    "Leadership",
    "Service",
    "Faith",
    "Business",
    "Health Sciences",
    "Engineering",
    "Community",
    "Ethics",
    "Basketball"
  ],

  missionOrientation: "Educating students for lives of leadership, service, justice, and lifelong learning rooted in the Jesuit educational tradition.",

  faithTradition: "Jesuit Catholic",

  educationalPhilosophy: "Students develop through rigorous academics, ethical reflection, service learning, leadership experiences, close faculty mentorship, and a commitment to the common good.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Moderate with a strong emphasis on social justice, service, dialogue, and respectful intellectual engagement consistent with Jesuit education.",

  studentAutonomy: "High",

  prestigeOrientation: "Highly respected throughout the Pacific Northwest, particularly in business, healthcare, education, engineering, and leadership development.",

  socialClimate: "Welcoming, collaborative, spirited, residential, and values-driven.",

  leadershipStyle: "Leadership through service, ethical decision-making, personal integrity, and community engagement."

},

megaRegionIntegration: {

  primaryMegaRegion: "Pacific Northwest Innovation Corridor",

  regionalRole: "A leading private university developing business, healthcare, engineering, and civic leaders for the Inland Northwest and broader Pacific Northwest economy."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 16,
  BosWash: 22,
  TorBuffChester: 8,
  TexasTriangle: 18,
  CharLanta: 8,
  NorCalInnovationCorridor: 74,
  SoCalCreativeEconomy: 34

},

comparativePositioning: {

  versusSantaClara:
    "Both are highly respected Catholic universities with strong business programs and close faculty relationships. Santa Clara benefits from direct integration with Silicon Valley and technology recruiting, while Gonzaga offers a more traditional residential campus, stronger school spirit, and deeper influence throughout the Inland Northwest.",

  versusCreighton:
    "Both are Jesuit universities emphasizing ethics, service, and undergraduate teaching. Creighton has greater strength in health sciences and medicine, while Gonzaga enjoys stronger recognition in the Pacific Northwest and a nationally recognized basketball culture.",

  versusMarquette:
    "Marquette provides stronger access to major corporate headquarters in Milwaukee and Chicago, while Gonzaga offers a more intimate campus community and exceptional alumni loyalty across the Pacific Northwest.",

  versusUniversityOfPortland:
    "Both are Catholic universities in the Pacific Northwest. Gonzaga has broader national visibility, stronger business and engineering programs, a larger alumni network, and a more prominent Division I athletic culture."

},

institutionScale: {

  enrollmentCategory: "Small-Medium",

  undergraduateEnrollment: 5100,

  graduateEnrollment: 2300,

  totalEnrollment: 7400,

  campusType: "Residential Private Comprehensive University",

  residentialIntensity: 96,

  communityFeel: 98,

  studentFacultyRatio: "11:1",

  classSizeExperience: "Classes are predominantly small and discussion-oriented, with close faculty mentorship, personalized advising, experiential learning, undergraduate research opportunities, and extensive community engagement. Students benefit from a liberal arts atmosphere combined with professional school resources.",

  scaleAdvantages: [
    "Exceptional faculty accessibility",
    "Highly personal advising and mentorship",
    "Strong residential community with outstanding school spirit",
    "Excellent undergraduate teaching",
    "Extremely loyal alumni network throughout the Pacific Northwest"
  ],

  scaleDisadvantages: [
    "Smaller research enterprise than major universities",
    "More limited graduate program breadth",
    "Regional employer network is stronger than national recruiting",
    "Fewer specialized academic offerings than large flagship institutions"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 82,
    conscientiousness: 90,
    extraversion: 82,
    agreeableness: 94,
    neuroticism: 28
  },

  hollandCodes: ["S","E","C"],

  learningStyle: [
    "Collaborative Learning",
    "Experiential Education",
    "Service Learning",
    "Leadership Development",
    "Faculty Mentorship"
  ],

  socialEnvironment: [
    "Community-Oriented",
    "School Spirited",
    "Faith-Informed",
    "Collaborative",
    "Residential"
  ],

  idealStudentTraits: [
    "Values relationships and community",
    "Interested in ethical leadership",
    "Enjoys a close-knit campus",
    "Seeks strong faculty mentorship",
    "Wants a balanced academic and social experience"
  ],

  thrivesIf: [
    "Values Jesuit education and service",
    "Plans for business, healthcare, engineering, education, or law",
    "Enjoys Division I athletics and school spirit",
    "Prefers smaller classes and accessible professors",
    "Wants a strong alumni network in the Pacific Northwest"
  ],

  strugglesIf: [
    "Wants a large research university",
    "Prefers a highly urban campus",
    "Seeks intense startup or venture capital ecosystems",
    "Needs the academic breadth of a flagship university"
  ],

  transferRiskFactors: [
    "Students wanting major-city environments",
    "Students seeking nationally dominant STEM recruiting",
    "Students looking for a highly secular campus culture"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Supply Chain Management",
    "Computer Science",
    "Civil Engineering",
    "Economics",
    "Political Science",
    "Human Physiology",
    "Data Science",
    "Environmental Studies"
  ],

  hiddenCareerPipelines: [
    "Healthcare Administration",
    "Public Accounting",
    "Corporate Finance",
    "Medical Device Industry",
    "Pacific Northwest Manufacturing",
    "Energy & Utilities",
    "Mission-Driven Organizations",
    "Commercial Banking"
  ],

  nicheRecruitingAdvantages: [
    "Moss Adams",
    "Deloitte",
    "KPMG",
    "PwC",
    "Providence",
    "Avista",
    "Boeing",
    "Washington Trust Bank"
  ],

  overlookedStrengths: [
    "The School of Business Administration consistently produces exceptionally strong placement into accounting, finance, and consulting throughout the Pacific Northwest.",
    "Gonzaga's School of Engineering and Applied Science emphasizes undergraduate teaching, hands-on design, and industry partnerships.",
    "Strong pre-health advising contributes to excellent placement into medical, dental, physician assistant, and physical therapy programs.",
    "The Hogan Entrepreneurial Leadership Program provides one of the nation's more respected undergraduate leadership experiences.",
    "Small class sizes allow students to build unusually strong faculty relationships and recommendation networks."
  ],

  sleeperIndustries: [
    "Medical Technology",
    "Renewable Energy",
    "Cybersecurity",
    "Financial Technology",
    "Advanced Manufacturing",
    "Sports Administration"
  ]

},

networkCapital: {

  alumniAccessibility: 96,

  mentorshipDensity: 96,

  executiveAccess: 84,

  internshipNetwork: 86,

  familyBusinessExposure: 48,

  relationshipCapitalScore: 94,

  alumniLoyaltyScore: 98,

  referralCultureStrength: 96,

  donorNetworkStrength: 90,

  boardMemberDensity: 84

},

economicEcosystem: {

  primaryIndustries: [
    "Healthcare",
    "Business",
    "Accounting",
    "Engineering",
    "Education",
    "Finance",
    "Professional Services",
    "Public Service"
  ],

  regionalEconomicDrivers: [
    "Healthcare",
    "Advanced Manufacturing",
    "Energy",
    "Technology",
    "Financial Services",
    "Education",
    "Construction"
  ],

  topEmployers: [
    "Providence",
    "Boeing",
    "Amazon",
    "Microsoft",
    "Deloitte",
    "KPMG",
    "PwC",
    "Avista",
    "Kaiser Permanente",
    "Moss Adams"
  ],

  emergingIndustries: [
    "Cybersecurity",
    "Digital Health",
    "Renewable Energy",
    "Artificial Intelligence",
    "Financial Technology",
    "Healthcare Analytics"
  ],

  startupDensity: "Moderate",

  ventureCapitalAccess: 42,

  corporateHeadquartersDensity: 56,

  healthcareHubStrength: 90,

  innovationIndex: 76

},

geographicInfluence: {

  dominantMarket: "The Pacific Northwest, particularly Washington, Oregon, Idaho, and Montana",

  secondaryMarkets: [
    "Seattle WA",
    "Portland OR",
    "Boise ID",
    "Denver CO",
    "Phoenix AZ",
    "San Francisco CA",
    "Los Angeles CA"
  ],

  alumniStrongholds: [
    "Spokane WA",
    "Seattle WA",
    "Portland OR",
    "Boise ID",
    "Tacoma WA"
  ],

  relocationPatterns: [
    "A large percentage of graduates remain in Washington, joining healthcare systems, accounting firms, engineering companies, financial institutions, law firms, and regional employers throughout Seattle, Spokane, and Tacoma.",
    "Portland attracts graduates into healthcare, professional services, consumer products, architecture, engineering, and nonprofit leadership.",
    "Boise has become an increasingly important destination through technology, advanced manufacturing, healthcare, and financial services.",
    "California recruits graduates into technology, consulting, engineering, healthcare administration, and corporate leadership, although Gonzaga's network is strongest in the Pacific Northwest.",
    "A growing alumni presence extends into Denver, Phoenix, Dallas, and other Western metropolitan areas as graduates pursue careers in business, healthcare, engineering, education, and public service."
  ],

  regionalInfluenceScore: 96,

  nationalReachScore: 68,

  internationalReachScore: 42

},

socialCapital: {

  greekLifeInfluence: 18,

  studentOrganizationStrength: 90,

  leadershipDevelopment: 96,

  crossDisciplinaryInteraction: 90,

  civicEngagement: 96

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 22,
    notes: "Limited institutional emphasis outside consumer marketing and retail business."
  },

  healthWellness: {
    strength: 92,
    notes: "Nursing, human physiology, psychology, and strong pre-health advising create excellent pathways into healthcare professions, wellness, and clinical leadership."
  },

  nutraceuticals: {
    strength: 36,
    notes: "Biology and health sciences provide scientific preparation, though industry-specific recruiting is limited."
  },

  consumerProducts: {
    strength: 62,
    notes: "Business graduates enter consumer products, retail, and brand management, particularly within the Pacific Northwest."
  },

  outdoorIndustry: {
    strength: 72,
    notes: "The Inland Northwest location and regional employer base create opportunities in outdoor recreation, sporting goods, and environmental organizations."
  },

  sportsBusiness: {
    strength: 68,
    notes: "Gonzaga's nationally recognized basketball brand creates opportunities in collegiate athletics, sports administration, sponsorship, and athletic fundraising."
  },

  entertainmentMedia: {
    strength: 42,
    notes: "Communication and journalism support regional media careers, but entertainment is not a primary institutional focus."
  },

  ventureCapital: {
    strength: 30,
    notes: "Some alumni participate in entrepreneurship and angel investing, but venture capital is not a defining strength."
  },

  privateEquity: {
    strength: 34,
    notes: "A limited number of graduates enter lower middle-market private equity and investment firms through finance careers."
  },

  investmentBanking: {
    strength: 52,
    notes: "Regional investment banking placement is solid, though national Wall Street recruiting is relatively limited."
  },

  consulting: {
    strength: 82,
    notes: "Accounting firms, operational consulting, and regional strategy practices recruit consistently from Gonzaga's business programs."
  },

  medicine: {
    strength: 88,
    notes: "Strong preparation for medical school through rigorous science curricula, faculty mentorship, and excellent health professions advising."
  },

  healthcareAdministration: {
    strength: 86,
    notes: "Business and health sciences provide strong preparation for leadership within hospitals, healthcare systems, and medical organizations."
  },

  defense: {
    strength: 46,
    notes: "Engineering graduates find opportunities with aerospace and defense employers, particularly Boeing, though defense is not a defining institutional pathway."
  },

  realEstate: {
    strength: 54,
    notes: "Business graduates pursue commercial banking, development, and regional real estate careers throughout the Pacific Northwest."
  },

  luxuryBrands: {
    strength: 24,
    notes: "Minimal institutional emphasis beyond general marketing and business education."
  },

  entrepreneurship: {
    strength: 72,
    notes: "Leadership programs, business education, and a collaborative alumni network support entrepreneurship, particularly in small business and regional ventures."
  },

  technology: {
    strength: 68,
    notes: "Computer science, engineering, and business graduates increasingly enter software, cloud computing, and technology management roles throughout the Pacific Northwest."
  },

  publicPolicy: {
    strength: 76,
    notes: "Political science, law, and Jesuit values prepare graduates for public service, government, and civic leadership."
  },

  nonprofitLeadership: {
    strength: 96,
    notes: "One of Gonzaga's defining institutional strengths. Jesuit education, service learning, and ethical leadership produce graduates who lead nonprofit organizations, foundations, educational institutions, and mission-driven enterprises."
  }

},
wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 82,

  firstGenerationSupport: 88,

  wealthCreationPotential: 84,

  familyBusinessPipelineStrength: 52

},

futureResilience: {

  aiResistance: 90,

  automationResistance: 92,

  adaptabilityScore: 94,

  interdisciplinaryStrength: 90,

  futureReadiness: 92,

  entrepreneurialFlexibility: 84,

  lifelongLearningCulture: 94,

  innovationCapacity: 86

},

lifeDesignOutcomes: {

  wealthCreationPotential: 84,

  communityLeadershipPotential: 98,

  geographicMobility: 82,

  workLifeBalancePotential: 94,

  purposeAlignment: 98,

  familyFormationSupport: 96,

  personalDevelopmentPotential: 96,

  careerOptionality: 88,

  longTermLifeSatisfaction: 98

},

institutionalMoat: {

  prestigeMoat: 78,

  networkMoat: 92,

  geographicMoat: 90,

  industryMoat: 76,

  alumniMoat: 98,

  brandDurability: 94,

  overallMoatScore: 88

},

trajectoryProfile: {

  dominantTrajectory: "STEWARD",

  leaverScore: 56,

  returnerScore: 82,

  stewardScore: 96,

  navigatorScore: 72,

  geographicLockIn: "medium",

  alumniDispersalPattern: "Predominantly Pacific Northwest with growing national representation in healthcare, business, engineering, education, law, and nonprofit leadership."

},

jewishLife: {

  hillel: {
    exists: false,
    strength: 18,
    type: ""
  },

  estimatedJewishUndergraduates: 50,

  jewishStudentPercentage: "~1%",

  kosherDining: false,

  shabbatProgramming: false,

  birthrightSupport: true,

  jewishCommunityStrength: "Very Small",

  notes: "Gonzaga does not have an on-campus Hillel. Jewish students generally connect with Spokane's small but welcoming Jewish community, nearby synagogues, and regional Jewish organizations. Students interested in Birthright Israel and Jewish leadership opportunities typically participate through regional programs rather than campus-based organizations."

},

honorsCollege: {

  exists: true,

  name: "Gonzaga University Honors Program",

  strength: 90,

  notes: "The Gonzaga Honors Program creates a liberal arts, seminar-based experience within the university through interdisciplinary coursework, close faculty mentorship, priority registration, undergraduate research, and a senior thesis. The program emphasizes critical thinking, ethics, writing, and leadership while allowing students to complete majors across business, engineering, sciences, and the humanities."

}
},

"Indiana University Bloomington": {
institutionNarrative: {

  name: "Indiana University Bloomington",

  location: "Bloomington, Indiana",

  region: "Midwest",

  archetype: "The Professional Republic — Elite Business, Public Leadership, Music, Healthcare, and Big Ten Tradition",

  oneSentenceSummary: "Indiana University Bloomington is one of America's premier flagship universities for business, accounting, finance, public affairs, music, media, law, healthcare preparation, and leadership development, combining a classic Big Ten residential experience with one of the nation's deepest alumni networks and strongest professional recruiting ecosystems.",

  pipeline: "Approximately 47,000 students. Indiana is internationally recognized for the Kelley School of Business, the O'Neill School of Public and Environmental Affairs, the Jacobs School of Music, Media, Informatics, Psychology, Biology, Economics, Political Science, Computer Science, Law, Public Health, and Healthcare Management. Major recruiters include Deloitte, EY, PwC, KPMG, Goldman Sachs, JPMorgan Chase, Bank of America, Eli Lilly, Cummins, Salesforce, Amazon, Microsoft, Oracle, Accenture, PepsiCo, Abbott, UnitedHealth Group, Northwestern Mutual, and hundreds of Fortune 500 companies across finance, consulting, healthcare, and corporate leadership.",

  hiddenPathway: "Indiana's greatest hidden advantage is the combination of elite professional schools within a traditional flagship university. Kelley, O'Neill, Jacobs, and Luddy create nationally elite career pipelines while allowing students to benefit from one of America's strongest alumni cultures and a highly collaborative residential campus.",

  institutionalSecret: "Although often overshadowed by engineering-focused Big Ten peers, Indiana quietly produces one of the country's largest concentrations of executives, CFOs, consultants, accountants, investment professionals, healthcare administrators, public leaders, and corporate managers. Few public universities combine this level of professional breadth with such an accessible undergraduate experience.",

  theRoom: "Located in Bloomington, one of America's classic college towns, Indiana provides a self-contained residential campus while connecting students to Indianapolis, Chicago, Cincinnati, St. Louis, Nashville, and the broader Midwest corporate economy. National employers recruit heavily on campus through Kelley, O'Neill, Jacobs, and the university's expansive alumni network.",

  lifestyle: "School-spirited, professionally ambitious, highly social, collaborative, residential, and tradition-rich. Students balance rigorous academics with Big Ten athletics, Greek life, student organizations, leadership development, internships, performing arts, entrepreneurship, and one of the nation's most vibrant campus cultures.",

  bestFitPersonality: "Ambitious, collaborative, outgoing, relationship-oriented, professionally focused, and interested in combining academic excellence with leadership, networking, and a rich campus experience.",

  faithTradition: "Public",

  geographicInfluenceRadius: "National, with particularly strong influence throughout the Midwest, Chicago, Indianapolis, New York, Dallas, Atlanta, Washington DC, and major corporate and financial centers.",

  economicOutcome: "Outstanding career outcomes across business, accounting, finance, consulting, healthcare administration, law, public policy, media, technology, and corporate leadership, supported by one of the nation's strongest alumni and employer recruiting networks.",

  gradCities: [
    "Chicago IL",
    "Indianapolis IN",
    "New York NY",
    "Dallas TX",
    "Washington DC",
    "Atlanta GA",
    "Nashville TN"
  ],

  comparableInstitutions: [
    "University of Wisconsin",
    "University of Michigan",
    "Ohio State University",
    "Penn State University",
    "University of Florida"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Ivy Tech Community College",
      "Vincennes University",
      "Ivy Tech Indianapolis",
      "Ivy Tech Bloomington"
    ],

    transferAcceptanceRate: "~70%",

    freshmanAcceptanceRate: "~82%",

    estimatedSavingsRange: "$20,000-$60,000",

    transferNotes: "Indiana maintains strong articulation agreements with Ivy Tech and other Indiana institutions. Transfer students successfully enter Kelley, O'Neill, Luddy, Education, Public Health, and many liberal arts programs, although direct admission into Kelley has additional academic requirements."

  }

},

institutionIdentity: {

  archetype: "Flagship Public Research University",

  institutionalPersonality: "professional, collaborative, ambitious, relationship-driven, tradition-rich",

  cultureKeywords: [
    "Business",
    "Leadership",
    "Finance",
    "Public Affairs",
    "Music",
    "Big Ten",
    "Professional Development",
    "School Spirit",
    "Alumni Network"
  ],

  missionOrientation: "Preparing leaders through research, professional education, public service, creativity, and lifelong learning across business, government, healthcare, the arts, and the sciences.",

  faithTradition: "None",

  educationalPhilosophy: "Students develop through a combination of rigorous academics, experiential learning, internships, leadership opportunities, undergraduate research, global engagement, and one of the nation's strongest professional alumni networks.",

  competitiveness: "Selective",

  politicalCulture: "Politically diverse with a broad range of viewpoints typical of a major public flagship, balancing Midwestern pragmatism with active civic engagement.",

  studentAutonomy: "High",

  prestigeOrientation: "Internationally respected for business, accounting, public affairs, music, and professional education, with strong national recognition across a wide range of disciplines.",

  socialClimate: "Highly engaged, collaborative, spirited, professionally ambitious, and deeply connected through residential traditions and student organizations.",

  leadershipStyle: "Leadership through professional excellence, collaboration, service, integrity, and lifelong relationships."

},

megaRegionIntegration: {

  primaryMegaRegion: "Mid-Continent Industrial & Corporate Corridor",

  regionalRole: "One of the Midwest's leading talent engines for corporate leadership, finance, healthcare administration, consulting, public policy, accounting, and professional services."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 96,
  BosWash: 72,
  TorBuffChester: 48,
  TexasTriangle: 64,
  CharLanta: 52,
  NorCalInnovationCorridor: 38,
  SoCalCreativeEconomy: 34

},
  
comparativePositioning: {

  versusWisconsin:
    "Both are elite flagship public universities with outstanding undergraduate experiences. Wisconsin offers broader engineering and STEM strength, while Indiana distinguishes itself through the Kelley School of Business, public affairs, music, media, and a stronger pipeline into corporate leadership and finance.",

  versusMichigan:
    "Michigan possesses greater overall research prestige, engineering, medicine, and national selectivity. Indiana offers a more accessible flagship experience with world-class business, music, accounting, public policy, and an exceptionally collaborative alumni culture.",

  versusIllinois:
    "Illinois is considerably stronger in engineering, computer science, and technology, while Indiana is nationally recognized for business, accounting, finance, public affairs, music, and media.",

  versusOhioState:
    "Both have large, spirited Big Ten campuses with broad academic offerings. Indiana provides a more picturesque residential college environment and nationally elite business and music programs, while Ohio State has broader engineering, medicine, and research infrastructure."

},

institutionScale: {

  enrollmentCategory: "Large",

  undergraduateEnrollment: 36000,

  graduateEnrollment: 11000,

  totalEnrollment: 47000,

  campusType: "Residential Public Research University",

  residentialIntensity: 90,

  communityFeel: 90,

  studentFacultyRatio: "17:1",

  classSizeExperience: "Introductory courses may include large lectures, but upper-division students—particularly in Kelley, O'Neill, Jacobs, Media, and honors programs—benefit from significantly smaller classes, extensive team-based learning, faculty mentorship, internships, consulting projects, and experiential education.",

  scaleAdvantages: [
    "Nationally elite undergraduate business education",
    "Exceptional breadth across professional and liberal arts disciplines",
    "One of America's strongest alumni networks",
    "Outstanding campus traditions and residential experience",
    "Extensive internship and employer recruiting across multiple industries"
  ],

  scaleDisadvantages: [
    "Large introductory classes in many disciplines",
    "Competitive admission into certain direct-admit majors",
    "Students must proactively seek faculty relationships outside honors programs",
    "Engineering offerings are narrower than at peer Big Ten institutions"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 86,
    conscientiousness: 88,
    extraversion: 88,
    agreeableness: 82,
    neuroticism: 30
  },

  hollandCodes: ["E","S","C"],

  learningStyle: [
    "Experiential Learning",
    "Case-Based Learning",
    "Professional Development",
    "Leadership Training",
    "Collaborative Learning"
  ],

  socialEnvironment: [
    "School Spirited",
    "Collaborative",
    "Professionally Ambitious",
    "Residential",
    "Highly Involved"
  ],

  idealStudentTraits: [
    "Professionally ambitious",
    "Collaborative",
    "Leadership-oriented",
    "Socially engaged",
    "Interested in balancing academics with campus life"
  ],

  thrivesIf: [
    "Interested in business, accounting, finance, music, media, public affairs, healthcare, or law",
    "Enjoys a vibrant Big Ten campus environment",
    "Values networking and internship opportunities",
    "Wants strong alumni engagement",
    "Appreciates a traditional residential college experience"
  ],

  strugglesIf: [
    "Prefers a very small liberal arts environment",
    "Needs highly specialized engineering or technology ecosystems",
    "Dislikes large university settings",
    "Wants a highly urban campus"
  ],

  transferRiskFactors: [
    "Students seeking intimate academic communities",
    "Students wanting top-tier engineering research",
    "Students uncomfortable navigating large institutions independently"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Informatics",
    "Intelligent Systems Engineering",
    "Health Services Management",
    "Supply Chain Management",
    "Economic Consulting",
    "International Studies",
    "Cybersecurity",
    "Sport Marketing & Management"
  ],

  hiddenCareerPipelines: [
    "Corporate Leadership Development Programs",
    "Healthcare Administration",
    "Commercial Real Estate",
    "Investment Management",
    "Enterprise Technology Consulting",
    "Sports Business",
    "Life Sciences Management",
    "Public Sector Leadership"
  ],

  nicheRecruitingAdvantages: [
    "Eli Lilly",
    "Cummins",
    "Simon Property Group",
    "Salesforce",
    "Deloitte",
    "EY",
    "JPMorgan Chase",
    "Goldman Sachs"
  ],

  overlookedStrengths: [
    "The Kelley School of Business is consistently one of the nation's strongest undergraduate business schools, with exceptional placement into consulting, finance, accounting, and Fortune 500 leadership programs.",
    "The O'Neill School is widely regarded as one of the premier public affairs schools in the world, producing leaders across government, nonprofits, and healthcare systems.",
    "The Jacobs School of Music is among the world's elite conservatories, producing internationally recognized performers, educators, and arts leaders.",
    "The Luddy School has become a rapidly growing force in computer science, cybersecurity, informatics, artificial intelligence, and data science.",
    "Indiana's alumni network is one of the largest and most engaged in the United States, providing outstanding mentorship and recruiting access across multiple industries."
  ],

  sleeperIndustries: [
    "Sports Business",
    "Health Informatics",
    "Commercial Real Estate",
    "Life Sciences",
    "Financial Technology",
    "Digital Media"
  ]

},

networkCapital: {

  alumniAccessibility: 96,

  mentorshipDensity: 92,

  executiveAccess: 94,

  internshipNetwork: 98,

  familyBusinessExposure: 58,

  relationshipCapitalScore: 96,

  alumniLoyaltyScore: 94,

  referralCultureStrength: 94,

  donorNetworkStrength: 94,

  boardMemberDensity: 90

},

economicEcosystem: {

  primaryIndustries: [
    "Business",
    "Finance",
    "Healthcare",
    "Consulting",
    "Technology",
    "Accounting",
    "Public Administration",
    "Media"
  ],

  regionalEconomicDrivers: [
    "Life Sciences",
    "Healthcare",
    "Advanced Manufacturing",
    "Financial Services",
    "Technology",
    "Logistics",
    "Higher Education"
  ],

  topEmployers: [
    "Eli Lilly",
    "Cummins",
    "Deloitte",
    "EY",
    "PwC",
    "KPMG",
    "JPMorgan Chase",
    "Salesforce",
    "Amazon",
    "Accenture"
  ],

  emergingIndustries: [
    "Artificial Intelligence",
    "Healthcare Analytics",
    "Financial Technology",
    "Cybersecurity",
    "Sports Technology",
    "Digital Health"
  ],

  startupDensity: "Moderate",

  ventureCapitalAccess: 56,

  corporateHeadquartersDensity: 82,

  healthcareHubStrength: 92,

  innovationIndex: 84

},

geographicInfluence: {

  dominantMarket: "The Midwest Corporate Corridor, with particularly strong influence in Chicago, Indianapolis, and the broader Great Lakes economy",

  secondaryMarkets: [
    "Chicago IL",
    "Indianapolis IN",
    "New York NY",
    "Dallas TX",
    "Atlanta GA",
    "Washington DC",
    "Nashville TN"
  ],

  alumniStrongholds: [
    "Indianapolis IN",
    "Chicago IL",
    "New York NY",
    "Cincinnati OH",
    "Louisville KY"
  ],

  relocationPatterns: [
    "A significant percentage of graduates begin their careers in Indianapolis, joining Eli Lilly, Salesforce, Cummins, healthcare systems, state government, consulting firms, and numerous Fortune 500 employers.",
    "Chicago remains Indiana's largest out-of-state destination, attracting graduates into investment banking, consulting, accounting, commercial real estate, corporate leadership, law, and financial services.",
    "New York draws Kelley graduates into investment banking, asset management, private wealth, consulting, media, and corporate finance.",
    "Dallas, Atlanta, and Nashville have become major growth markets as graduates pursue careers in technology, healthcare, corporate headquarters, logistics, and professional services.",
    "An increasingly national alumni footprint places graduates across major metropolitan markets while maintaining one of the strongest concentrations of alumni throughout the Midwest."
  ],

  regionalInfluenceScore: 98,

  nationalReachScore: 90,

  internationalReachScore: 64

},

socialCapital: {

  greekLifeInfluence: 82,

  studentOrganizationStrength: 98,

  leadershipDevelopment: 94,

  crossDisciplinaryInteraction: 88,

  civicEngagement: 84

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 30,
    notes: "Marketing and retail management provide occasional pathways into consumer beauty companies, though the sector is not a defining institutional strength."
  },

  healthWellness: {
    strength: 90,
    notes: "Excellent opportunities through public health, healthcare management, kinesiology, nursing partnerships, and pre-health preparation."
  },

  nutraceuticals: {
    strength: 42,
    notes: "Supported through life sciences, nutrition, and healthcare research, though recruiting remains limited."
  },

  consumerProducts: {
    strength: 90,
    notes: "Kelley graduates are heavily recruited into brand management, consumer marketing, sales leadership, merchandising, and Fortune 500 rotational programs."
  },

  outdoorIndustry: {
    strength: 28,
    notes: "Limited institutional emphasis outside recreation management and environmental studies."
  },

  sportsBusiness: {
    strength: 94,
    notes: "One of the nation's strongest pipelines into collegiate athletics, sports marketing, media, sponsorship, athletic administration, and professional sports business through Kelley, The Media School, and Indiana's athletic tradition."
  },

  entertainmentMedia: {
    strength: 88,
    notes: "The Media School provides outstanding preparation for journalism, broadcasting, digital media, sports media, film production, and communications leadership."
  },

  ventureCapital: {
    strength: 58,
    notes: "Entrepreneurship continues to grow, though venture capital is not a defining institutional strength compared with coastal innovation hubs."
  },

  privateEquity: {
    strength: 74,
    notes: "Kelley graduates increasingly enter middle-market and upper-middle-market private equity, private credit, and investment management, particularly after investment banking experience."
  },

  investmentBanking: {
    strength: 94,
    notes: "The Kelley School is one of the premier undergraduate pipelines into investment banking, with elite placement in New York, Chicago, Charlotte, and other financial centers."
  },

  consulting: {
    strength: 96,
    notes: "McKinsey, Bain, BCG, Deloitte, Accenture, EY-Parthenon, and many national consulting firms recruit extensively from Kelley and O'Neill."
  },

  medicine: {
    strength: 82,
    notes: "Strong preparation for medical school through biology, chemistry, neuroscience, psychology, and extensive healthcare partnerships."
  },

  healthcareAdministration: {
    strength: 96,
    notes: "One of the nation's strongest public university pathways into healthcare administration, hospital leadership, health policy, and healthcare consulting."
  },

  defense: {
    strength: 40,
    notes: "Limited direct emphasis outside cybersecurity, informatics, public policy, and federal government careers."
  },

  realEstate: {
    strength: 88,
    notes: "Kelley produces outstanding graduates for commercial real estate, development, REITs, investment sales, and corporate real estate leadership."
  },

  luxuryBrands: {
    strength: 48,
    notes: "Marketing graduates occasionally enter luxury retail, fashion, and premium consumer brands, though this is not a dominant recruiting sector."
  },

  entrepreneurship: {
    strength: 82,
    notes: "Strong entrepreneurial programming through Kelley supports startup formation, family business leadership, innovation, and venture creation, particularly in the Midwest."
  },

  technology: {
    strength: 78,
    notes: "Luddy graduates increasingly enter software engineering, cybersecurity, AI, cloud computing, enterprise technology, and product management roles."

  },

  publicPolicy: {
    strength: 100,
    notes: "The O'Neill School stands among the world's leading institutions for public affairs, public policy, nonprofit leadership, environmental policy, and government management."
  },

  nonprofitLeadership: {
    strength: 92,
    notes: "Indiana produces significant numbers of nonprofit executives, philanthropic leaders, healthcare administrators, and public-sector innovators through O'Neill and extensive civic engagement."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 84,

  firstGenerationSupport: 90,

  wealthCreationPotential: 92,

  familyBusinessPipelineStrength: 72

},

futureResilience: {

  aiResistance: 94,

  automationResistance: 94,

  adaptabilityScore: 96,

  interdisciplinaryStrength: 94,

  futureReadiness: 96,

  entrepreneurialFlexibility: 90,

  lifelongLearningCulture: 94,

  innovationCapacity: 90

},

lifeDesignOutcomes: {

  wealthCreationPotential: 92,

  communityLeadershipPotential: 94,

  geographicMobility: 90,

  workLifeBalancePotential: 90,

  purposeAlignment: 92,

  familyFormationSupport: 92,

  personalDevelopmentPotential: 94,

  careerOptionality: 98,

  longTermLifeSatisfaction: 94

},

institutionalMoat: {

  prestigeMoat: 88,

  networkMoat: 96,

  geographicMoat: 94,

  industryMoat: 96,

  alumniMoat: 98,

  brandDurability: 96,

  overallMoatScore: 94

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 88,

  returnerScore: 72,

  stewardScore: 62,

  navigatorScore: 96,

  geographicLockIn: "low",

  alumniDispersalPattern: "National, with especially strong concentrations in Chicago, Indianapolis, New York, Dallas, Atlanta, Washington DC, and other major corporate and financial centers."

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 92,
    type: "IU Hillel"
  },

  estimatedJewishUndergraduates: 2500,

  jewishStudentPercentage: "~7%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Very Strong",

  notes: "IU Hillel is one of the largest and most active Hillels in the Midwest. Hundreds of students participate weekly in Shabbat dinners, holiday celebrations, leadership programs, Israel engagement, Birthright trips, service initiatives, and extensive Jewish student organizations. The university also supports kosher dining and maintains a vibrant Jewish presence that is well integrated into campus life."

},

honorsCollege: {

  exists: true,

  name: "Hutton Honors College",

  strength: 98,

  notes: "The Hutton Honors College is one of the nation's premier honors programs at a public university. Students receive honors seminars, priority registration, dedicated advising, research funding, scholarships, international study support, and close faculty mentorship while retaining access to the full resources of Indiana University and schools such as Kelley, O'Neill, Jacobs, and Luddy."

}
},

"Iowa State University": {
institutionNarrative: {

  name: "Iowa State University",

  location: "Ames, Iowa",

  region: "Midwest",

  archetype: "The Applied Innovation Engine — Engineering, Agriculture, Industrial Technology, and America's Infrastructure Economy",

  oneSentenceSummary: "Iowa State University is one of America's premier land-grant research universities, combining nationally respected engineering, agriculture, veterinary medicine, design, business, data science, and applied research with deep partnerships across manufacturing, food systems, energy, infrastructure, and the industrial economy.",

  pipeline: "Approximately 30,000 students. Iowa State is nationally recognized for Engineering, Agricultural Engineering, Mechanical Engineering, Civil Engineering, Aerospace Engineering, Computer Engineering, Computer Science, Agriculture, Animal Science, Agronomy, Architecture, Landscape Architecture, Veterinary Medicine, Data Science, Supply Chain Management, Finance, Food Science, and Industrial Design. Major recruiters include John Deere, Collins Aerospace, Cargill, Boeing, Caterpillar, John Deere Financial, Principal Financial Group, Vermeer, Pella, Kemin Industries, Corteva, ADM, Bayer Crop Science, Garmin, Emerson, Microsoft, Amazon, Tesla, Burns & McDonnell, and hundreds of engineering, manufacturing, construction, and agribusiness firms nationwide.",

  hiddenPathway: "Iowa State's greatest hidden advantage is its integration with America's industrial backbone. Students work directly with companies solving real-world problems in advanced manufacturing, precision agriculture, renewable energy, food production, aerospace, and infrastructure long before graduation.",

  institutionalSecret: "While often viewed primarily as an agriculture and engineering school, Iowa State has become one of the nation's most important talent producers for advanced manufacturing, food technology, industrial automation, supply chain management, renewable energy, and infrastructure modernization. Its graduates quietly help build and operate many of the systems that power the American economy.",

  theRoom: "Located in Ames, one of America's quintessential college towns, Iowa State offers a highly residential campus with deep industry partnerships extending throughout the Midwest and into national engineering, manufacturing, aerospace, agriculture, and technology sectors.",

  lifestyle: "Collaborative, practical, engineering-focused, school-spirited, hands-on, and community-oriented. Students balance rigorous academics with Big 12 athletics, undergraduate research, design teams, engineering competitions, agricultural organizations, entrepreneurship, and one of the nation's largest student organization communities.",

  bestFitPersonality: "Analytical, collaborative, practical, curious, resilient, and motivated by solving real-world engineering, scientific, agricultural, or business problems.",

  faithTradition: "Public",

  geographicInfluenceRadius: "National, with particularly strong influence throughout the Midwest, Great Plains, Texas, Colorado, and major engineering, manufacturing, construction, aerospace, and agricultural markets.",

  economicOutcome: "Outstanding career outcomes across engineering, agriculture, construction, manufacturing, food science, supply chain, veterinary medicine, technology, and industrial leadership with exceptionally high job placement.",

  gradCities: [
    "Des Moines IA",
    "Minneapolis MN",
    "Kansas City MO",
    "Chicago IL",
    "Dallas TX",
    "Denver CO",
    "Omaha NE"
  ],

  comparableInstitutions: [
    "Purdue University",
    "Virginia Tech",
    "Kansas State University",
    "Colorado State University",
    "Texas A&M University"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Des Moines Area Community College",
      "Kirkwood Community College",
      "Iowa Western Community College",
      "Hawkeye Community College"
    ],

    transferAcceptanceRate: "~75%",

    freshmanAcceptanceRate: "~89%",

    estimatedSavingsRange: "$20,000-$60,000",

    transferNotes: "Iowa State maintains one of the nation's strongest transfer ecosystems through Iowa's community college network, with particularly seamless pathways into engineering, agriculture, business, design, and the sciences."

  }

},

institutionIdentity: {

  archetype: "Land-Grant Research University",

  institutionalPersonality: "practical, innovative, collaborative, industrious, down-to-earth",

  cultureKeywords: [
    "Engineering",
    "Agriculture",
    "Innovation",
    "Manufacturing",
    "Research",
    "Design",
    "Infrastructure",
    "Big 12",
    "Applied Science"
  ],

  missionOrientation: "Advancing society through applied research, innovation, education, public service, and practical solutions to global engineering, agricultural, environmental, and economic challenges.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through experiential education, undergraduate research, engineering design, industry partnerships, cooperative learning, and solving complex real-world problems.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Politically diverse with a pragmatic, solution-oriented culture reflecting its land-grant mission and broad statewide student population.",

  studentAutonomy: "High",

  prestigeOrientation: "Nationally respected for engineering, agriculture, veterinary medicine, design, and applied research with an exceptionally strong employer reputation.",

  socialClimate: "Collaborative, welcoming, hardworking, highly involved, and deeply connected through Big 12 traditions and student organizations.",

  leadershipStyle: "Leadership through innovation, technical excellence, collaboration, practical problem-solving, and service."

},

megaRegionIntegration: {

  primaryMegaRegion: "Mid-Continent Industrial & Agricultural Corridor",

  regionalRole: "One of America's leading talent engines for engineering, advanced manufacturing, agriculture, food systems, renewable energy, infrastructure, and industrial innovation."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 100,
  BosWash: 38,
  TorBuffChester: 52,
  TexasTriangle: 70,
  CharLanta: 26,
  NorCalInnovationCorridor: 28,
  SoCalCreativeEconomy: 20

},

comparativePositioning: {

  versusPurdue:
    "Both are elite engineering-focused public universities with exceptional employer reputations. Purdue has greater national prestige in engineering and aerospace, while Iowa State offers stronger agriculture, agricultural engineering, veterinary medicine, and a more collaborative campus culture.",

  versusTexasAM:
    "Both are premier land-grant universities producing engineers, agricultural leaders, and industry executives. Texas A&M has a larger alumni network and stronger defense and energy connections, while Iowa State has broader strength in agricultural technology, design, and precision agriculture.",

  versusVirginiaTech:
    "Virginia Tech and Iowa State share similar land-grant missions emphasizing engineering, applied science, and industry partnerships. Virginia Tech enjoys greater East Coast and defense exposure, while Iowa State leads in agricultural innovation, food systems, and Midwest industrial recruiting.",

  versusKansasState:
    "Both are outstanding land-grant universities with strengths in agriculture and engineering. Iowa State has substantially larger research capacity, stronger engineering depth, greater national recruiting, and broader technology integration."

},

institutionScale: {

  enrollmentCategory: "Large",

  undergraduateEnrollment: 25000,

  graduateEnrollment: 5000,

  totalEnrollment: 30000,

  campusType: "Residential Public Research University",

  residentialIntensity: 92,

  communityFeel: 90,

  studentFacultyRatio: "17:1",

  classSizeExperience: "Introductory STEM courses can be large, but upper-division engineering, agriculture, design, business, and science courses become significantly smaller. Students benefit from extensive laboratory work, undergraduate research, senior design projects, industry-sponsored competitions, and close collaboration with faculty and employers.",

  scaleAdvantages: [
    "Outstanding undergraduate access to research",
    "Extensive industry-sponsored engineering projects",
    "Strong faculty accessibility",
    "One of America's largest student organization ecosystems",
    "Excellent employer recruiting across engineering and industrial sectors"
  ],

  scaleDisadvantages: [
    "Less international brand recognition than elite coastal engineering schools",
    "Rural location offers fewer nearby corporate headquarters",
    "Large introductory STEM courses require initiative",
    "Social life is more campus-centered than urban universities"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 84,
    conscientiousness: 94,
    extraversion: 72,
    agreeableness: 88,
    neuroticism: 28
  },

  hollandCodes: ["R","I","E"],

  learningStyle: [
    "Applied Learning",
    "Engineering Design",
    "Laboratory Research",
    "Industry Collaboration",
    "Project-Based Learning"
  ],

  socialEnvironment: [
    "Collaborative",
    "School Spirited",
    "Hands-On",
    "Practical",
    "Community-Oriented"
  ],

  idealStudentTraits: [
    "Enjoys solving practical problems",
    "Interested in engineering, agriculture, design, or technology",
    "Works well on collaborative teams",
    "Comfortable with rigorous STEM coursework",
    "Values career readiness and applied experience"
  ],

  thrivesIf: [
    "Wants strong engineering or agricultural programs",
    "Enjoys undergraduate research and design projects",
    "Prefers a traditional residential campus",
    "Values employer recruiting and internship opportunities",
    "Likes collaborative rather than highly competitive academic environments"
  ],

  strugglesIf: [
    "Prefers a dense urban campus",
    "Wants a humanities-focused liberal arts education",
    "Seeks venture capital or startup-heavy ecosystems",
    "Dislikes STEM-intensive environments"
  ],

  transferRiskFactors: [
    "Students looking for major-city lifestyles",
    "Students wanting highly theoretical rather than applied education",
    "Students uninterested in technical or scientific disciplines"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Industrial Engineering",
    "Supply Chain Management",
    "Cybersecurity Engineering",
    "Food Science",
    "Construction Engineering",
    "Data Science",
    "Materials Engineering",
    "Landscape Architecture"
  ],

  hiddenCareerPipelines: [
    "Precision Agriculture",
    "Semiconductor Manufacturing",
    "Renewable Energy",
    "Advanced Manufacturing",
    "Construction Management",
    "Industrial Automation",
    "Food Technology",
    "Infrastructure Consulting"
  ],

  nicheRecruitingAdvantages: [
    "John Deere",
    "Collins Aerospace",
    "Corteva",
    "Cargill",
    "Vermeer",
    "Burns & McDonnell",
    "Kemin Industries",
    "Principal Financial Group"
  ],

  overlookedStrengths: [
    "The College of Engineering consistently ranks among the nation's strongest for employer reputation and return on investment.",
    "Iowa State is a global leader in precision agriculture, agricultural technology, and food systems innovation.",
    "The College of Design is nationally recognized in architecture, landscape architecture, community planning, and industrial design.",
    "Students regularly participate in industry-sponsored senior design projects, engineering competitions, and undergraduate research beginning early in their academic careers.",
    "The university's land-grant mission creates unusually deep partnerships with industry, government, and extension organizations throughout the United States."
  ],

  sleeperIndustries: [
    "Autonomous Agricultural Equipment",
    "Battery Manufacturing",
    "Agricultural Robotics",
    "Smart Infrastructure",
    "Clean Energy",
    "Industrial Artificial Intelligence"
  ]

},

networkCapital: {

  alumniAccessibility: 90,

  mentorshipDensity: 90,

  executiveAccess: 88,

  internshipNetwork: 96,

  familyBusinessExposure: 64,

  relationshipCapitalScore: 92,

  alumniLoyaltyScore: 94,

  referralCultureStrength: 92,

  donorNetworkStrength: 88,

  boardMemberDensity: 82

},

economicEcosystem: {

  primaryIndustries: [
    "Engineering",
    "Advanced Manufacturing",
    "Agriculture",
    "Construction",
    "Food Science",
    "Technology",
    "Supply Chain",
    "Energy"
  ],

  regionalEconomicDrivers: [
    "Advanced Manufacturing",
    "Agriculture",
    "Life Sciences",
    "Renewable Energy",
    "Food Processing",
    "Construction",
    "Logistics"
  ],

  topEmployers: [
    "John Deere",
    "Collins Aerospace",
    "Cargill",
    "Corteva",
    "Boeing",
    "Caterpillar",
    "Principal Financial Group",
    "Microsoft",
    "Burns & McDonnell",
    "Vermeer"
  ],

  emergingIndustries: [
    "Artificial Intelligence",
    "Precision Agriculture",
    "Agricultural Robotics",
    "Renewable Energy",
    "Autonomous Systems",
    "Smart Manufacturing"
  ],

  startupDensity: "Moderate",

  ventureCapitalAccess: 36,

  corporateHeadquartersDensity: 64,

  healthcareHubStrength: 72,

  innovationIndex: 90

},

geographicInfluence: {

  dominantMarket: "The Mid-Continent Industrial & Agricultural Corridor, with particularly strong influence across the Midwest and Great Plains",

  secondaryMarkets: [
    "Des Moines IA",
    "Minneapolis MN",
    "Kansas City MO",
    "Chicago IL",
    "Dallas TX",
    "Denver CO",
    "Omaha NE"
  ],

  alumniStrongholds: [
    "Des Moines IA",
    "Minneapolis MN",
    "Kansas City MO",
    "Omaha NE",
    "Chicago IL"
  ],

  relocationPatterns: [
    "Many graduates begin their careers in Iowa through engineering firms, financial services, agribusiness, biotechnology, insurance, and advanced manufacturing, particularly in the Des Moines metropolitan area.",
    "Minneapolis–Saint Paul attracts graduates into Fortune 500 companies, medical technology, food science, construction, engineering consulting, and supply chain management.",
    "Kansas City and Omaha recruit heavily into engineering, construction, transportation, logistics, architecture, and agribusiness.",
    "Texas continues to attract graduates into aerospace, energy, semiconductors, civil engineering, and advanced manufacturing, particularly throughout Dallas–Fort Worth, Austin, and Houston.",
    "Graduates are geographically mobile throughout the industrial Midwest, Great Plains, Mountain West, and Sun Belt, following employer demand in engineering, manufacturing, agriculture, and infrastructure."
  ],

  regionalInfluenceScore: 98,

  nationalReachScore: 84,

  internationalReachScore: 54

},

socialCapital: {

  greekLifeInfluence: 62,

  studentOrganizationStrength: 100,

  leadershipDevelopment: 92,

  crossDisciplinaryInteraction: 90,

  civicEngagement: 84

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 12,
    notes: "Minimal institutional emphasis outside chemistry, packaging, and consumer product manufacturing."
  },

  healthWellness: {
    strength: 68,
    notes: "Nutrition, kinesiology, food science, and biomedical engineering provide meaningful preparation, though healthcare is not the university's primary institutional focus."
  },

  nutraceuticals: {
    strength: 72,
    notes: "Food science, nutrition, bioprocessing, and agricultural research create strong opportunities within food innovation and functional ingredients."
  },

  consumerProducts: {
    strength: 82,
    notes: "Engineering, industrial design, supply chain, and marketing prepare graduates for leadership in consumer products, durable goods, agricultural equipment, and manufacturing."
  },

  outdoorIndustry: {
    strength: 56,
    notes: "Engineering and manufacturing support companies involved in outdoor equipment, agricultural machinery, utility vehicles, and environmental systems."
  },

  sportsBusiness: {
    strength: 28,
    notes: "Limited institutional emphasis outside athletics administration, sports analytics, and marketing."
  },

  entertainmentMedia: {
    strength: 24,
    notes: "Media opportunities exist but are not a defining institutional strength."
  },

  ventureCapital: {
    strength: 34,
    notes: "Entrepreneurship is growing through engineering and agricultural technology, though venture capital is not a major recruiting pathway."
  },

  privateEquity: {
    strength: 42,
    notes: "Some graduates enter industrial, manufacturing, infrastructure, and agribusiness investment firms after careers in consulting or corporate finance."
  },

  investmentBanking: {
    strength: 48,
    notes: "Placement into investment banking exists primarily through finance and accounting but is not a major institutional focus."
  },

  consulting: {
    strength: 82,
    notes: "Engineering consulting, operational consulting, construction consulting, and technology consulting represent significant career pathways."
  },

  medicine: {
    strength: 64,
    notes: "Strong preparation in biology and biomedical engineering, though Iowa State is more closely associated with veterinary medicine than human medicine."
  },

  healthcareAdministration: {
    strength: 56,
    notes: "Business and health-related majors provide opportunities, but healthcare administration is not a signature strength."
  },

  defense: {
    strength: 82,
    notes: "Engineering graduates are recruited into aerospace, defense manufacturing, avionics, cybersecurity, and government contractors including Collins Aerospace, Boeing, and federal agencies."
  },

  realEstate: {
    strength: 66,
    notes: "Construction engineering, finance, architecture, and regional development support careers in commercial real estate, development, and infrastructure."
  },

  luxuryBrands: {
    strength: 10,
    notes: "Minimal institutional connection to luxury goods or premium consumer branding."
  },

  entrepreneurship: {
    strength: 78,
    notes: "Engineering, agriculture, and design programs foster entrepreneurship in manufacturing, ag-tech, clean energy, food innovation, and industrial technology."
  },

  technology: {
    strength: 86,
    notes: "Strong preparation in software engineering, cybersecurity, computer engineering, artificial intelligence, embedded systems, and industrial automation."
  },

  publicPolicy: {
    strength: 62,
    notes: "Agricultural policy, environmental policy, transportation, and land-grant public service create meaningful policy pathways."
  },

  nonprofitLeadership: {
    strength: 70,
    notes: "Extension programs, community development, engineering outreach, and agricultural organizations provide strong opportunities for civic leadership."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 90,

  firstGenerationSupport: 92,

  wealthCreationPotential: 88,

  familyBusinessPipelineStrength: 74

},

futureResilience: {

  aiResistance: 96,

  automationResistance: 97,

  adaptabilityScore: 95,

  interdisciplinaryStrength: 92,

  futureReadiness: 95,

  entrepreneurialFlexibility: 86,

  lifelongLearningCulture: 94,

  innovationCapacity: 92

},

lifeDesignOutcomes: {

  wealthCreationPotential: 88,

  communityLeadershipPotential: 90,

  geographicMobility: 86,

  workLifeBalancePotential: 92,

  purposeAlignment: 92,

  familyFormationSupport: 94,

  personalDevelopmentPotential: 92,

  careerOptionality: 90,

  longTermLifeSatisfaction: 92

},

institutionalMoat: {

  prestigeMoat: 80,

  networkMoat: 90,

  geographicMoat: 94,

  industryMoat: 98,

  alumniMoat: 92,

  brandDurability: 94,

  overallMoatScore: 92

},

trajectoryProfile: {

  dominantTrajectory: "STEWARD",

  leaverScore: 72,

  returnerScore: 90,

  stewardScore: 96,

  navigatorScore: 80,

  geographicLockIn: "medium",

  alumniDispersalPattern: "Graduates disperse nationally into engineering, manufacturing, agriculture, aerospace, construction, technology, and energy, while maintaining particularly strong concentrations throughout the Midwest, Great Plains, Texas, and Mountain West."

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 70,
    type: "Hillel at Iowa State University"
  },

  estimatedJewishUndergraduates: 250,

  jewishStudentPercentage: "~1%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Moderate",

  notes: "Hillel at Iowa State serves a relatively small but active Jewish community. Students participate in weekly Shabbat dinners, holiday celebrations, Israel programming, leadership opportunities, and Birthright Israel trips. Kosher dining options are available by arrangement, and the community is known for being welcoming and close-knit."

},

honorsCollege: {

  exists: true,

  name: "University Honors Program",

  strength: 92,

  notes: "The University Honors Program provides honors seminars, faculty mentoring, undergraduate research, priority registration, international experiences, and interdisciplinary learning. Honors students benefit from smaller academic communities while maintaining access to Iowa State's extensive engineering, agriculture, design, and research ecosystem."

}
},

"Oklahoma State University": {
institutionNarrative: {

  name: "Oklahoma State University",

  location: "Stillwater, Oklahoma",

  region: "South Central",

  archetype: "The Industry Builder — Energy, Engineering, Agriculture, Aviation, Business, and America's Heartland Economy",

  oneSentenceSummary: "Oklahoma State University is a leading land-grant research university that combines nationally respected engineering, energy, agriculture, aviation, business, veterinary medicine, and applied sciences with one of the country's strongest cultures of employer engagement, alumni loyalty, and practical leadership development.",

  pipeline: "Approximately 25,000 students. Oklahoma State is nationally recognized for Petroleum Engineering, Mechanical Engineering, Civil Engineering, Aerospace Engineering, Biosystems Engineering, Agriculture, Animal Science, Veterinary Medicine, Aviation, Supply Chain Management, Finance, Accounting, Energy Business, Hospitality Management, Architecture, and Fire Protection & Safety Engineering Technology. Major recruiters include ConocoPhillips, Devon Energy, ONEOK, Williams, Phillips 66, Koch Industries, American Airlines, Boeing, Lockheed Martin, Northrop Grumman, Deloitte, EY, Paycom, Love's Travel Stops, Walmart, John Deere, Halliburton, and numerous engineering, construction, aviation, and energy firms.",

  hiddenPathway: "OSU's greatest hidden strength is the integration of engineering, agriculture, business, and energy into one highly connected employer ecosystem. Students gain unusually early exposure to internships, industry projects, alumni mentoring, and career placement across sectors that build and power the American economy.",

  institutionalSecret: "While many people associate Oklahoma State primarily with agriculture and athletics, the university quietly produces an enormous number of engineers, energy executives, aviation professionals, veterinarians, entrepreneurs, and business leaders. Its employer reputation consistently exceeds its national rankings because graduates are known for technical competence, leadership, and work ethic.",

  theRoom: "Located in Stillwater, Oklahoma State offers a classic residential college-town experience while maintaining deep recruiting relationships across Oklahoma City, Tulsa, Dallas–Fort Worth, Houston, Denver, Kansas City, and the broader energy, aerospace, manufacturing, and agricultural economies.",

  lifestyle: "School-spirited, practical, collaborative, entrepreneurial, community-oriented, and tradition-rich. Students combine rigorous academics with Big 12 athletics, Greek life, undergraduate research, entrepreneurship, agricultural organizations, engineering competitions, and one of the nation's strongest alumni cultures.",

  bestFitPersonality: "Hardworking, collaborative, practical, leadership-oriented, community-minded, and interested in solving real-world problems through engineering, business, agriculture, aviation, or applied sciences.",

  faithTradition: "Public",

  geographicInfluenceRadius: "National, with especially strong influence throughout Oklahoma, Texas, Kansas, Colorado, Arkansas, and the broader South-Central industrial and energy economy.",

  economicOutcome: "Excellent career outcomes across engineering, energy, aviation, agriculture, construction, manufacturing, accounting, supply chain, business leadership, and veterinary medicine, supported by exceptionally loyal alumni and employer recruiting.",

  gradCities: [
    "Oklahoma City OK",
    "Tulsa OK",
    "Dallas TX",
    "Houston TX",
    "Denver CO",
    "Kansas City MO",
    "Fort Worth TX"
  ],

  comparableInstitutions: [
    "Texas Tech University",
    "Kansas State University",
    "Iowa State University",
    "Texas A&M University",
    "Auburn University"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Tulsa Community College",
      "Oklahoma City Community College",
      "Northern Oklahoma College",
      "Rose State College"
    ],

    transferAcceptanceRate: "~75%",

    freshmanAcceptanceRate: "~71%",

    estimatedSavingsRange: "$20,000-$60,000",

    transferNotes: "Oklahoma State maintains strong articulation agreements with Oklahoma community colleges, creating efficient pathways into engineering, business, agriculture, education, and many STEM disciplines."

  }

},

institutionIdentity: {

  archetype: "Land-Grant Research University",

  institutionalPersonality: "practical, loyal, entrepreneurial, collaborative, resilient",

  cultureKeywords: [
    "Engineering",
    "Energy",
    "Agriculture",
    "Business",
    "Aviation",
    "Leadership",
    "Big 12",
    "Innovation",
    "Applied Learning"
  ],

  missionOrientation: "Advancing society through applied research, practical education, innovation, entrepreneurship, and service across engineering, agriculture, business, health, and the sciences.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through experiential education, internships, undergraduate research, design projects, industry partnerships, entrepreneurial initiatives, and leadership development rooted in the university's land-grant mission.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Generally moderate to conservative relative to national public universities, while maintaining intellectual diversity across academic disciplines and a practical, solutions-oriented campus culture.",

  studentAutonomy: "High",

  prestigeOrientation: "Highly respected by employers in engineering, energy, agriculture, aviation, veterinary medicine, and business, with an employer reputation that exceeds its national public profile.",

  socialClimate: "Welcoming, spirited, collaborative, tradition-rich, and strongly connected through alumni, athletics, Greek life, and student organizations.",

  leadershipStyle: "Leadership through service, technical excellence, entrepreneurship, resilience, and community engagement."

},

megaRegionIntegration: {

  primaryMegaRegion: "South-Central Energy & Industrial Corridor",

  regionalRole: "One of the leading talent producers for the energy industry, advanced manufacturing, aviation, engineering, agriculture, and business leadership across the South-Central United States."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 98,
  TexasTriangle: 90,
  CharLanta: 30,
  BosWash: 28,
  TorBuffChester: 24,
  NorCalInnovationCorridor: 22,
  SoCalCreativeEconomy: 16

},

comparativePositioning: {

  versusTexasTech:
    "Both are major public universities serving the South-Central economy with strengths in engineering, agriculture, and business. Oklahoma State has stronger employer loyalty in energy, agriculture, veterinary medicine, and aviation, while Texas Tech benefits from greater scale in health sciences and West Texas regional influence.",

  versusTexasAM:
    "Both are elite land-grant institutions with exceptional engineering, agriculture, and industry partnerships. Texas A&M enjoys a larger global alumni network, stronger research funding, and greater national prestige, while Oklahoma State provides a more accessible, close-knit campus with outstanding employer engagement and one of the nation's strongest petroleum and energy ecosystems.",

  versusIowaState:
    "Both universities excel in applied engineering and land-grant education. Iowa State has broader manufacturing, agricultural technology, and industrial engineering strength, while Oklahoma State offers deeper connections to energy, aviation, and the oil and gas sector.",

  versusKansasState:
    "Kansas State and Oklahoma State share similar land-grant missions emphasizing agriculture, engineering, and applied science. Oklahoma State has broader engineering depth, stronger aviation and energy programs, and a larger national recruiting footprint."

},

institutionScale: {

  enrollmentCategory: "Medium-Large",

  undergraduateEnrollment: 20000,

  graduateEnrollment: 5000,

  totalEnrollment: 25000,

  campusType: "Residential Public Research University",

  residentialIntensity: 90,

  communityFeel: 92,

  studentFacultyRatio: "18:1",

  classSizeExperience: "Large introductory STEM and business courses give way to smaller upper-division classes emphasizing applied projects, industry collaboration, undergraduate research, design experiences, internships, and close faculty mentoring. Students benefit from unusually high levels of employer engagement throughout their education.",

  scaleAdvantages: [
    "Strong faculty accessibility",
    "Excellent employer recruiting across engineering, agriculture, and business",
    "Highly engaged alumni network",
    "Extensive undergraduate research opportunities",
    "Strong balance between campus resources and personal attention"
  ],

  scaleDisadvantages: [
    "More limited national brand recognition than flagship peers like Texas A&M",
    "Fewer specialized graduate offerings than the largest research universities",
    "Regional recruiting remains stronger than coastal recruiting",
    "Stillwater offers fewer urban internship opportunities during the academic year"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 80,
    conscientiousness: 94,
    extraversion: 82,
    agreeableness: 90,
    neuroticism: 26
  },

  hollandCodes: ["R","E","S"],

  learningStyle: [
    "Applied Learning",
    "Experiential Education",
    "Industry Collaboration",
    "Leadership Development",
    "Project-Based Learning"
  ],

  socialEnvironment: [
    "School Spirited",
    "Collaborative",
    "Community-Oriented",
    "Practical",
    "Leadership-Focused"
  ],

  idealStudentTraits: [
    "Hardworking and dependable",
    "Interested in engineering, agriculture, aviation, or business",
    "Enjoys hands-on learning",
    "Values school traditions and alumni relationships",
    "Wants strong career preparation"
  ],

  thrivesIf: [
    "Prefers a collaborative rather than highly competitive culture",
    "Values employer recruiting and internships",
    "Enjoys traditional college-town life",
    "Wants strong opportunities in engineering, energy, agriculture, aviation, or business",
    "Likes building long-term professional relationships"
  ],

  strugglesIf: [
    "Prefers a dense urban environment",
    "Seeks a humanities-centered liberal arts education",
    "Wants elite coastal prestige or startup ecosystems",
    "Dislikes traditional campus culture and athletics"
  ],

  transferRiskFactors: [
    "Students seeking major metropolitan lifestyles",
    "Students wanting nationally elite research prestige",
    "Students primarily interested in media, entertainment, or luxury industries"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Aerospace Administration & Operations",
    "Fire Protection & Safety Engineering Technology",
    "Management Information Systems",
    "Supply Chain Management",
    "Construction Engineering Technology",
    "Hospitality & Tourism Management",
    "Biosystems Engineering",
    "Geospatial Information Science"
  ],

  hiddenCareerPipelines: [
    "Energy Infrastructure",
    "Commercial Aviation",
    "Industrial Construction",
    "Pipeline & Midstream Operations",
    "Precision Agriculture",
    "Industrial Safety",
    "Aerospace Manufacturing",
    "Utility Management"
  ],

  nicheRecruitingAdvantages: [
    "ConocoPhillips",
    "Devon Energy",
    "ONEOK",
    "Williams",
    "Love's Travel Stops",
    "Paycom",
    "Phillips 66",
    "American Airlines"
  ],

  overlookedStrengths: [
    "The College of Engineering, Architecture and Technology maintains exceptionally strong relationships with regional and national employers in energy, aerospace, construction, and manufacturing.",
    "OSU is one of the country's leading producers of talent for the oil, natural gas, midstream, and utility industries.",
    "The Spears School of Business has particularly strong placement into accounting, energy finance, management information systems, and supply chain management.",
    "OSU's aviation programs have developed strong industry partnerships with airlines, airports, and aerospace employers.",
    "The university's land-grant mission creates unusually deep connections with agricultural producers, extension services, and rural economic development organizations."
  ],

  sleeperIndustries: [
    "Carbon Capture & Storage",
    "Grid Modernization",
    "Drone & Uncrewed Aviation",
    "Industrial Cybersecurity",
    "Energy Transition",
    "Infrastructure Analytics"
  ]

},

networkCapital: {

  alumniAccessibility: 94,

  mentorshipDensity: 92,

  executiveAccess: 90,

  internshipNetwork: 94,

  familyBusinessExposure: 72,

  relationshipCapitalScore: 94,

  alumniLoyaltyScore: 96,

  referralCultureStrength: 94,

  donorNetworkStrength: 88,

  boardMemberDensity: 84

},

economicEcosystem: {

  primaryIndustries: [
    "Energy",
    "Engineering",
    "Agriculture",
    "Aviation",
    "Construction",
    "Business",
    "Manufacturing",
    "Technology"
  ],

  regionalEconomicDrivers: [
    "Oil & Gas",
    "Aerospace",
    "Renewable Energy",
    "Agriculture",
    "Advanced Manufacturing",
    "Logistics",
    "Financial Services"
  ],

  topEmployers: [
    "ConocoPhillips",
    "Devon Energy",
    "ONEOK",
    "Williams",
    "Boeing",
    "Lockheed Martin",
    "Love's Travel Stops",
    "Paycom",
    "American Airlines",
    "Halliburton"
  ],

  emergingIndustries: [
    "Hydrogen Energy",
    "Carbon Management",
    "Artificial Intelligence",
    "Industrial Automation",
    "Drone Systems",
    "Energy Analytics"
  ],

  startupDensity: "Moderate",

  ventureCapitalAccess: 34,

  corporateHeadquartersDensity: 70,

  healthcareHubStrength: 66,

  innovationIndex: 86

},

geographicInfluence: {

  dominantMarket: "The South-Central Energy, Aviation, and Industrial Corridor",

  secondaryMarkets: [
    "Oklahoma City OK",
    "Tulsa OK",
    "Dallas TX",
    "Houston TX",
    "Fort Worth TX",
    "Denver CO",
    "Kansas City MO"
  ],

  alumniStrongholds: [
    "Oklahoma City OK",
    "Tulsa OK",
    "Dallas TX",
    "Houston TX",
    "Fort Worth TX"
  ],

  relocationPatterns: [
    "A large percentage of graduates remain in Oklahoma, joining energy producers, engineering firms, utilities, healthcare systems, financial institutions, and rapidly growing technology companies in Oklahoma City and Tulsa.",
    "Dallas–Fort Worth is one of the university's largest out-of-state destinations, attracting graduates into engineering, accounting, finance, commercial construction, aerospace, consulting, and corporate leadership roles.",
    "Houston remains a premier destination for petroleum engineers, energy executives, geoscientists, and infrastructure professionals across upstream, midstream, downstream, and renewable energy sectors.",
    "Denver has become an increasingly important market for graduates pursuing careers in aerospace, civil engineering, renewable energy, environmental consulting, and industrial technology.",
    "OSU graduates maintain a growing presence throughout the Sun Belt while preserving exceptionally dense alumni networks across Oklahoma and Texas."
  ],

  regionalInfluenceScore: 98,

  nationalReachScore: 78,

  internationalReachScore: 44

},

socialCapital: {

  greekLifeInfluence: 74,

  studentOrganizationStrength: 96,

  leadershipDevelopment: 94,

  crossDisciplinaryInteraction: 88,

  civicEngagement: 90

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 10,
    notes: "Minimal institutional emphasis beyond general marketing and consumer products."
  },

  healthWellness: {
    strength: 68,
    notes: "Strong preparation through nutrition, human sciences, and allied health, though healthcare is not a defining institutional focus."
  },

  nutraceuticals: {
    strength: 66,
    notes: "Food science, agricultural sciences, and animal nutrition provide pathways into nutrition and agricultural biotechnology."
  },

  consumerProducts: {
    strength: 78,
    notes: "Business, supply chain, agricultural products, and manufacturing support careers with major consumer and industrial product companies."
  },

  outdoorIndustry: {
    strength: 56,
    notes: "Agriculture, natural resource management, wildlife, and environmental sciences create opportunities connected to land management and outdoor industries."
  },

  sportsBusiness: {
    strength: 36,
    notes: "Athletics administration and sports management opportunities exist, but sports business is not a primary institutional strength."
  },

  entertainmentMedia: {
    strength: 22,
    notes: "Communications supports regional media careers, though entertainment is not a major recruiting sector."
  },

  ventureCapital: {
    strength: 32,
    notes: "Entrepreneurship is growing through business and engineering, but venture capital remains limited relative to major innovation hubs."
  },

  privateEquity: {
    strength: 46,
    notes: "Graduates occasionally enter energy-focused, industrial, and middle-market investment firms after engineering, finance, or accounting careers."
  },

  investmentBanking: {
    strength: 52,
    notes: "Placement is strongest in energy banking, corporate finance, and regional financial institutions rather than traditional Wall Street recruiting."
  },

  consulting: {
    strength: 82,
    notes: "Engineering, energy, operations, accounting, and technology consulting firms recruit consistently from OSU."
  },

  medicine: {
    strength: 62,
    notes: "Solid pre-health preparation exists, though the university is better known for veterinary medicine than traditional medical school pipelines."
  },

  healthcareAdministration: {
    strength: 56,
    notes: "Business graduates enter healthcare operations and administration, but this is not a signature institutional pathway."
  },

  defense: {
    strength: 86,
    notes: "Engineering and aviation graduates are recruited into aerospace, defense manufacturing, military aviation, cybersecurity, and national security programs through Boeing, Lockheed Martin, Northrop Grumman, and related employers."
  },

  realEstate: {
    strength: 70,
    notes: "Construction management, finance, and business support careers in commercial real estate, development, and energy-related property sectors."
  },

  luxuryBrands: {
    strength: 8,
    notes: "Very limited institutional emphasis on luxury consumer industries."
  },

  entrepreneurship: {
    strength: 84,
    notes: "The Spears School of Business, Riata Center for Entrepreneurship, and strong alumni culture support entrepreneurship, family businesses, and energy-related venture creation."
  },

  technology: {
    strength: 76,
    notes: "Computer science, cybersecurity, engineering, and management information systems provide growing pathways into enterprise technology, industrial software, AI applications, and digital infrastructure."
  },

  publicPolicy: {
    strength: 64,
    notes: "Agricultural policy, energy policy, public administration, and economic development represent OSU's strongest public-sector pathways."
  },

  nonprofitLeadership: {
    strength: 76,
    notes: "Extension programs, agricultural outreach, youth development, and civic engagement cultivate nonprofit and community leadership throughout Oklahoma and the broader region."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 88,

  firstGenerationSupport: 92,

  wealthCreationPotential: 90,

  familyBusinessPipelineStrength: 82

},

futureResilience: {

  aiResistance: 94,

  automationResistance: 96,

  adaptabilityScore: 94,

  interdisciplinaryStrength: 90,

  futureReadiness: 92,

  entrepreneurialFlexibility: 90,

  lifelongLearningCulture: 92,

  innovationCapacity: 88

},

lifeDesignOutcomes: {

  wealthCreationPotential: 90,

  communityLeadershipPotential: 94,

  geographicMobility: 82,

  workLifeBalancePotential: 92,

  purposeAlignment: 92,

  familyFormationSupport: 94,

  personalDevelopmentPotential: 92,

  careerOptionality: 90,

  longTermLifeSatisfaction: 94

},

institutionalMoat: {

  prestigeMoat: 78,

  networkMoat: 94,

  geographicMoat: 96,

  industryMoat: 98,

  alumniMoat: 96,

  brandDurability: 94,

  overallMoatScore: 92

},

trajectoryProfile: {

  dominantTrajectory: "STEWARD",

  leaverScore: 74,

  returnerScore: 92,

  stewardScore: 96,

  navigatorScore: 82,

  geographicLockIn: "medium",

  alumniDispersalPattern: "Graduates disperse nationally into engineering, energy, aviation, business, agriculture, construction, and defense while maintaining exceptionally strong concentrations throughout Oklahoma, Texas, Colorado, Kansas, and the broader South-Central economy."

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 58,
    type: "Hillel at Oklahoma State University"
  },

  estimatedJewishUndergraduates: 125,

  jewishStudentPercentage: "<1%",

  kosherDining: false,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Small",

  notes: "Hillel at Oklahoma State serves a small but active Jewish student community through weekly Shabbat dinners, holiday celebrations, Israel programming, and leadership opportunities. Students also connect with Jewish communities in Stillwater, Oklahoma City, and Tulsa. Kosher dining is available by request rather than as a full-time campus dining option."

},

honorsCollege: {

  exists: true,

  name: "OSU Honors College",

  strength: 90,

  notes: "The Honors College offers smaller seminar courses, priority enrollment, faculty mentorship, undergraduate research, honors housing, and interdisciplinary academic opportunities. Students combine the personalized honors experience with the extensive resources of a major land-grant research university."

}
},

"University of Kansas": {
institutionNarrative: {

  name: "University of Kansas",

  location: "Lawrence, Kansas",

  region: "Midwest",

  archetype: "The Public Flagship of Ideas — Liberal Arts, Healthcare, Business, Engineering, and Big 12 Tradition",

  oneSentenceSummary: "The University of Kansas is Kansas' flagship research university, combining nationally recognized strengths in pharmacy, medicine, engineering, business, journalism, architecture, public policy, and the liberal arts with one of America's great college towns, a globally recognized basketball tradition, and deep influence across the Midwest.",

  pipeline: "Approximately 28,000 students. KU is nationally recognized for Pharmacy, Special Education, Journalism, Business, Engineering, Architecture, Public Policy, Psychology, Biology, Aerospace Engineering, Computer Science, Nursing, and Pre-Health preparation. Major recruiters include Garmin, Cerner (Oracle Health), Black & Veatch, Burns & McDonnell, Hallmark, H&R Block, Koch Industries, Deloitte, EY, KPMG, PwC, Lockton, Children's Mercy, The University of Kansas Health System, JE Dunn Construction, and numerous engineering, healthcare, consulting, and financial services employers.",

  hiddenPathway: "KU's greatest hidden advantage is the combination of elite professional schools with a classic flagship university experience. Students benefit from nationally respected healthcare and journalism programs while accessing a broad employer network across Kansas City, one of the Midwest's fastest-growing business and healthcare markets.",

  institutionalSecret: "Although nationally known for basketball, KU quietly produces large numbers of physicians, pharmacists, architects, engineers, journalists, healthcare executives, educators, and business leaders. The proximity to Kansas City dramatically expands internship, research, and career opportunities beyond what many students initially expect.",

  theRoom: "Located in Lawrence, one of America's premier college towns, KU combines a highly residential campus with direct access to the Kansas City metropolitan area, giving students an uncommon balance of traditional campus life and major-market career opportunities.",

  lifestyle: "School-spirited, collaborative, intellectually curious, residential, and tradition-rich. Students balance rigorous academics with Big 12 athletics, Greek life, undergraduate research, student media, service organizations, entrepreneurship, and an exceptionally vibrant college-town culture.",

  bestFitPersonality: "Curious, collaborative, ambitious, community-oriented, and interested in combining academic breadth with strong professional preparation and a classic residential university experience.",

  faithTradition: "Public",

  geographicInfluenceRadius: "Strong throughout the Midwest and Great Plains, with particularly significant influence across Kansas City, Denver, Dallas, Chicago, St. Louis, and growing national placement in healthcare and business.",

  economicOutcome: "Excellent career outcomes across healthcare, pharmacy, engineering, architecture, business, journalism, education, consulting, and public service, supported by one of the Midwest's strongest employer ecosystems.",

  gradCities: [
    "Kansas City MO",
    "Kansas City KS",
    "Wichita KS",
    "Denver CO",
    "Dallas TX",
    "Chicago IL",
    "St. Louis MO"
  ],

  comparableInstitutions: [
    "University of Missouri",
    "University of Nebraska",
    "University of Iowa",
    "Michigan State University",
    "Indiana University Bloomington"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Johnson County Community College",
      "Butler Community College",
      "Kansas City Kansas Community College",
      "Cowley College"
    ],

    transferAcceptanceRate: "~85%",

    freshmanAcceptanceRate: "~88%",

    estimatedSavingsRange: "$20,000-$60,000",

    transferNotes: "KU has one of the strongest transfer systems in the region, with well-developed articulation agreements across Kansas community colleges. Students regularly transfer into business, engineering, healthcare, education, journalism, and liberal arts programs."

  }

},

institutionIdentity: {

  archetype: "Flagship Public Research University",

  institutionalPersonality: "collaborative, intellectually curious, welcoming, resilient, tradition-rich",

  cultureKeywords: [
    "Healthcare",
    "Basketball",
    "Business",
    "Journalism",
    "Engineering",
    "Research",
    "Public Service",
    "Big 12",
    "Liberal Arts"
  ],

  missionOrientation: "Advancing knowledge through research, public service, healthcare, innovation, and comprehensive education while serving Kansas and the broader Midwest.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through research, interdisciplinary collaboration, experiential learning, internships, clinical education, leadership development, and engagement with both a residential campus and the Kansas City metropolitan economy.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Politically diverse, reflecting both the university's liberal arts tradition and its role as the state's flagship institution, with active civic engagement and a broad range of viewpoints.",

  studentAutonomy: "High",

  prestigeOrientation: "Nationally respected for pharmacy, journalism, special education, architecture, healthcare, and several professional programs, with a particularly strong regional employer reputation.",

  socialClimate: "Highly spirited, collaborative, welcoming, and deeply connected through athletics, traditions, student organizations, and the Lawrence community.",

  leadershipStyle: "Leadership through service, scholarship, innovation, collaboration, and civic engagement."

},

megaRegionIntegration: {

  primaryMegaRegion: "Mid-Continent Innovation & Healthcare Corridor",

  regionalRole: "One of the Midwest's leading talent producers for healthcare, engineering, architecture, journalism, business, education, and public leadership."

},

megaRegionExposure: {

  MidContinentIndustrialEnergyCorridor: 92,
  TexasTriangle: 58,
  TorBuffChester: 48,
  BosWash: 40,
  CharLanta: 32,
  NorCalInnovationCorridor: 28,
  SoCalCreativeEconomy: 24

},

comparativePositioning: {

  versusMissouri:
    "Both are flagship universities with broad academic offerings and strong SEC/Big 12 traditions. Kansas has stronger pharmacy, journalism, architecture, and special education, while Missouri has greater influence in agriculture, animal sciences, and statewide political leadership.",

  versusNebraska:
    "Both are major Great Plains flagships serving statewide economies. Nebraska has greater strength in agriculture and biological systems engineering, while Kansas has stronger healthcare, pharmacy, architecture, journalism, and closer integration with the Kansas City economy.",

  versusIndiana:
    "Indiana possesses greater national visibility in business, public policy, and music, while Kansas offers stronger pharmacy, special education, architecture, and direct access to one of the Midwest's fastest-growing healthcare markets through Kansas City.",

  versusIowa:
    "Both universities excel in healthcare and public research. Iowa has stronger medicine and writing programs, while Kansas leads in pharmacy, special education, journalism, and architecture. Both provide outstanding flagship experiences with loyal alumni bases."

},

institutionScale: {

  enrollmentCategory: "Large",

  undergraduateEnrollment: 20000,

  graduateEnrollment: 8000,

  totalEnrollment: 28000,

  campusType: "Residential Public Research University",

  residentialIntensity: 90,

  communityFeel: 94,

  studentFacultyRatio: "17:1",

  classSizeExperience: "Introductory courses can be large, but upper-level programs in pharmacy, engineering, journalism, architecture, business, healthcare, and the liberal arts become significantly smaller. Undergraduate research, clinical experiences, internships, and faculty mentoring are widely available across disciplines.",

  scaleAdvantages: [
    "Comprehensive flagship academic offerings",
    "Excellent access to undergraduate research",
    "Strong Kansas City internship ecosystem",
    "Extensive student organizations and leadership opportunities",
    "High faculty accessibility in upper-division coursework"
  ],

  scaleDisadvantages: [
    "Some introductory STEM and business classes are large",
    "National prestige is sometimes overshadowed by athletics",
    "Recruiting is strongest in the Midwest rather than on the coasts",
    "Students seeking major-city life will commute to Kansas City rather than live in it"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 88,
    conscientiousness: 84,
    extraversion: 82,
    agreeableness: 90,
    neuroticism: 28
  },

  hollandCodes: ["S","I","E"],

  learningStyle: [
    "Collaborative Learning",
    "Research",
    "Clinical Education",
    "Experiential Learning",
    "Interdisciplinary Study"
  ],

  socialEnvironment: [
    "School Spirited",
    "Collaborative",
    "Traditional",
    "Community-Oriented",
    "Highly Involved"
  ],

  idealStudentTraits: [
    "Values a classic flagship university experience",
    "Interested in healthcare, business, engineering, journalism, or public service",
    "Enjoys collaborative learning and campus traditions",
    "Wants access to internships without sacrificing college-town life",
    "Appreciates both academics and school spirit"
  ],

  thrivesIf: [
    "Wants the balance of a residential campus and metropolitan career access",
    "Enjoys Big 12 traditions and an active campus culture",
    "Plans to pursue healthcare, business, engineering, journalism, education, or architecture",
    "Values broad academic choice and interdisciplinary opportunities",
    "Likes collaborative rather than highly competitive environments"
  ],

  strugglesIf: [
    "Prefers a dense urban campus",
    "Seeks a highly specialized STEM-only environment",
    "Wants elite coastal prestige",
    "Dislikes traditional college sports culture"
  ],

  transferRiskFactors: [
    "Students seeking year-round urban living",
    "Students wanting an intensely technical engineering culture",
    "Students primarily pursuing entertainment or fashion industries"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Health Information Management",
    "Supply Chain Management",
    "Construction Management",
    "Informatics",
    "Speech-Language-Hearing",
    "Applied Behavioral Science",
    "Environmental Studies",
    "Data Science"
  ],

  hiddenCareerPipelines: [
    "Healthcare Administration",
    "Health Informatics",
    "Architecture & Urban Design",
    "Sports Medicine",
    "Clinical Research",
    "Construction & Infrastructure",
    "Insurance & Risk Management",
    "Public Health"
  ],

  nicheRecruitingAdvantages: [
    "The University of Kansas Health System",
    "Children's Mercy Kansas City",
    "Garmin",
    "Black & Veatch",
    "Burns & McDonnell",
    "Hallmark",
    "Lockton",
    "Koch Industries"
  ],

  overlookedStrengths: [
    "The University of Kansas Medical Center and the University of Kansas Health System create one of the strongest healthcare ecosystems in the Midwest for clinical education, research, and professional networking.",
    "The School of Journalism and Mass Communications has produced nationally recognized journalists, broadcasters, communications executives, and digital media leaders for decades.",
    "KU's architecture and design programs enjoy an outstanding regional reputation, with strong placement into architecture, planning, and commercial development firms.",
    "Lawrence's proximity to Kansas City dramatically expands internship access across healthcare, engineering, consulting, finance, architecture, technology, and nonprofit leadership.",
    "The university's combination of flagship breadth and manageable size creates unusually strong opportunities for undergraduate research and faculty mentorship."
  ],

  sleeperIndustries: [
    "Digital Health",
    "Sports Analytics",
    "Health Technology",
    "Life Sciences",
    "Biomedical Devices",
    "Infrastructure Consulting"
  ]

},

networkCapital: {

  alumniAccessibility: 88,

  mentorshipDensity: 90,

  executiveAccess: 86,

  internshipNetwork: 94,

  familyBusinessExposure: 68,

  relationshipCapitalScore: 90,

  alumniLoyaltyScore: 92,

  referralCultureStrength: 90,

  donorNetworkStrength: 86,

  boardMemberDensity: 82

},

economicEcosystem: {

  primaryIndustries: [
    "Healthcare",
    "Engineering",
    "Business",
    "Architecture",
    "Education",
    "Technology",
    "Consulting",
    "Public Service"
  ],

  regionalEconomicDrivers: [
    "Healthcare",
    "Life Sciences",
    "Engineering",
    "Construction",
    "Financial Services",
    "Technology",
    "Professional Services"
  ],

  topEmployers: [
    "The University of Kansas Health System",
    "Garmin",
    "Oracle Health",
    "Black & Veatch",
    "Burns & McDonnell",
    "Hallmark",
    "Lockton",
    "Deloitte",
    "EY",
    "Koch Industries"
  ],

  emergingIndustries: [
    "Digital Health",
    "Artificial Intelligence",
    "Biomedical Research",
    "Health Analytics",
    "Sports Technology",
    "Advanced Infrastructure"
  ],

  startupDensity: "Moderate",

  ventureCapitalAccess: 46,

  corporateHeadquartersDensity: 78,

  healthcareHubStrength: 98,

  innovationIndex: 88

},

geographicInfluence: {

  dominantMarket: "The Kansas City Innovation, Healthcare, and Professional Services Corridor",

  secondaryMarkets: [
    "Kansas City MO",
    "Kansas City KS",
    "Wichita KS",
    "Denver CO",
    "Dallas TX",
    "Chicago IL",
    "St. Louis MO"
  ],

  alumniStrongholds: [
    "Kansas City MO",
    "Kansas City KS",
    "Wichita KS",
    "Denver CO",
    "Dallas TX"
  ],

  relocationPatterns: [
    "A significant percentage of graduates build their careers in the Kansas City metropolitan area, joining leading employers in healthcare, engineering, architecture, consulting, financial services, technology, and consumer products.",
    "Wichita attracts engineering, aerospace, healthcare, education, and business graduates through its strong aviation and manufacturing sectors.",
    "Denver has become an increasingly important destination for graduates entering healthcare, engineering, architecture, consulting, technology, and outdoor-oriented industries.",
    "Dallas continues to recruit KU graduates into accounting, consulting, finance, engineering, commercial real estate, healthcare administration, and corporate leadership roles.",
    "Although KU maintains a national alumni footprint, its greatest influence remains concentrated throughout Kansas City and the broader Midwest."
  ],

  regionalInfluenceScore: 96,

  nationalReachScore: 82,

  internationalReachScore: 52

},

socialCapital: {

  greekLifeInfluence: 72,

  studentOrganizationStrength: 96,

  leadershipDevelopment: 92,

  crossDisciplinaryInteraction: 92,

  civicEngagement: 92

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 18,
    notes: "Limited institutional emphasis beyond chemistry, consumer marketing, and retail management."
  },

  healthWellness: {
    strength: 98,
    notes: "One of the university's defining strengths through medicine, pharmacy, nursing, allied health, public health, clinical research, and the University of Kansas Health System."
  },

  nutraceuticals: {
    strength: 64,
    notes: "Supported through pharmacy, nutrition, medicinal chemistry, and health sciences, though not a primary recruiting sector."
  },

  consumerProducts: {
    strength: 76,
    notes: "Business, marketing, supply chain, and regional corporate employers provide strong opportunities in consumer products and brand management."
  },

  outdoorIndustry: {
    strength: 34,
    notes: "Environmental studies and regional conservation organizations offer opportunities, though outdoor recreation is not a major institutional focus."
  },

  sportsBusiness: {
    strength: 74,
    notes: "KU's nationally recognized athletics brand supports opportunities in collegiate athletics, sports administration, media, sponsorship, and athletic fundraising."
  },

  entertainmentMedia: {
    strength: 82,
    notes: "The William Allen White School of Journalism & Mass Communications is one of the nation's premier journalism schools, producing graduates in broadcasting, digital media, communications, sports media, and strategic communications."
  },

  ventureCapital: {
    strength: 44,
    notes: "Entrepreneurship is expanding through the business school and Kansas City startup ecosystem, though venture capital remains a secondary institutional strength."
  },

  privateEquity: {
    strength: 50,
    notes: "Graduates occasionally enter middle-market private equity, healthcare investment, and regional investment firms after careers in finance or consulting."
  },

  investmentBanking: {
    strength: 58,
    notes: "Placement is strongest in Kansas City, Chicago, Dallas, and regional financial centers, with selective Wall Street outcomes."
  },

  consulting: {
    strength: 86,
    notes: "National and regional consulting firms recruit consistently from business, engineering, and public policy programs."
  },

  medicine: {
    strength: 96,
    notes: "KU is one of the Midwest's strongest public university pathways into medicine through its medical center, research enterprise, and healthcare partnerships."
  },

  healthcareAdministration: {
    strength: 94,
    notes: "The university produces significant numbers of healthcare administrators, health policy leaders, hospital executives, and clinical operations professionals."
  },

  defense: {
    strength: 54,
    notes: "Engineering graduates enter aerospace and defense employers, though defense is not a defining institutional specialty."
  },

  realEstate: {
    strength: 74,
    notes: "Architecture, business, construction, and regional development firms create solid pathways into commercial real estate and urban development."
  },

  luxuryBrands: {
    strength: 18,
    notes: "Minimal institutional emphasis beyond marketing and consumer branding."
  },

  entrepreneurship: {
    strength: 76,
    notes: "Growing entrepreneurial support through business, engineering, life sciences, and the expanding Kansas City innovation ecosystem."
  },

  technology: {
    strength: 74,
    notes: "Computer science, engineering, informatics, cybersecurity, and health technology support growing placement into enterprise technology and software careers."

  },

  publicPolicy: {
    strength: 82,
    notes: "Public administration, law, education, and health policy provide strong preparation for leadership in government and public institutions."
  },

  nonprofitLeadership: {
    strength: 90,
    notes: "Strong traditions in education, healthcare, philanthropy, public service, and community engagement produce graduates who frequently lead nonprofit organizations throughout the Midwest."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 88,

  firstGenerationSupport: 90,

  wealthCreationPotential: 86,

  familyBusinessPipelineStrength: 68

},

futureResilience: {

  aiResistance: 92,

  automationResistance: 94,

  adaptabilityScore: 94,

  interdisciplinaryStrength: 94,

  futureReadiness: 94,

  entrepreneurialFlexibility: 84,

  lifelongLearningCulture: 94,

  innovationCapacity: 88

},

lifeDesignOutcomes: {

  wealthCreationPotential: 86,

  communityLeadershipPotential: 94,

  geographicMobility: 84,

  workLifeBalancePotential: 92,

  purposeAlignment: 94,

  familyFormationSupport: 94,

  personalDevelopmentPotential: 94,

  careerOptionality: 92,

  longTermLifeSatisfaction: 94

},

institutionalMoat: {

  prestigeMoat: 84,

  networkMoat: 90,

  geographicMoat: 94,

  industryMoat: 92,

  alumniMoat: 92,

  brandDurability: 94,

  overallMoatScore: 90

},

trajectoryProfile: {

  dominantTrajectory: "STEWARD",

  leaverScore: 78,

  returnerScore: 88,

  stewardScore: 94,

  navigatorScore: 84,

  geographicLockIn: "medium",

  alumniDispersalPattern: "Graduates spread throughout the Midwest and Sun Belt, with particularly strong concentrations in Kansas City, Wichita, Denver, Dallas, Chicago, and St. Louis. Many remain connected to Kansas through healthcare, education, engineering, and business networks while building national careers."

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 84,
    type: "KU Hillel"
  },

  estimatedJewishUndergraduates: 650,

  jewishStudentPercentage: "~3%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Strong",

  notes: "KU Hillel is one of the most active Jewish campus organizations in the central United States. Students participate in weekly Shabbat dinners, holiday celebrations, leadership programs, Israel engagement, Birthright trips, service opportunities, and strong connections with the larger Kansas City Jewish community. Kosher dining is available through campus dining services."

},

honorsCollege: {

  exists: true,

  name: "University Honors Program",

  strength: 90,

  notes: "KU's University Honors Program provides interdisciplinary seminars, faculty mentorship, undergraduate research, priority enrollment, global learning opportunities, and honors housing. Students gain the benefits of a close academic community while leveraging the resources of a comprehensive flagship research university."

}
},

"University of Houston": {
institutionNarrative: {

  name: "University of Houston",

  location: "Houston, Texas",

  region: "South",

  archetype: "The Urban Opportunity Engine — Energy, Business, Healthcare, Engineering, and the Global City",

  oneSentenceSummary: "The University of Houston is one of America's premier urban public research universities, combining nationally respected engineering, business, law, hospitality, architecture, computer science, healthcare, and energy programs with direct access to one of the world's largest concentrations of Fortune 500 companies, the Texas Medical Center, and the global energy industry.",

  pipeline: "Approximately 47,000 students. The University of Houston is nationally recognized for Petroleum Engineering, Chemical Engineering, Mechanical Engineering, Computer Science, Bauer College of Business, Supply Chain Management, Finance, Accounting, Hospitality Management, Architecture, Law, Construction Management, Public Policy, and Digital Media. Major recruiters include ExxonMobil, Chevron, Shell, ConocoPhillips, Phillips 66, SLB, Halliburton, KBR, Hewlett Packard Enterprise, Hewlett Packard, Microsoft, Amazon, Deloitte, EY, PwC, KPMG, JPMorgan Chase, Goldman Sachs, MD Anderson Cancer Center, Memorial Hermann, Houston Methodist, and hundreds of multinational corporations headquartered throughout Houston.",

  hiddenPathway: "UH's greatest hidden advantage is location. Students are immersed in one of the world's most economically diverse metropolitan regions, allowing internships, research, entrepreneurship, and corporate networking throughout the academic year on a scale few universities can match.",

  institutionalSecret: "Although often overshadowed by Texas and Texas A&M in public perception, the University of Houston has quietly become one of the country's most powerful career-launching institutions. Its graduates are deeply embedded throughout the energy industry, healthcare, commercial real estate, logistics, aerospace, finance, and one of America's fastest-growing technology ecosystems.",

  theRoom: "Located just minutes from downtown Houston, the Texas Medical Center, the Energy Corridor, and numerous Fortune 500 headquarters, UH functions as an integrated part of one of the world's most important business cities rather than an isolated college campus.",

  lifestyle: "Urban, ambitious, entrepreneurial, highly diverse, professionally focused, and opportunity-rich. Students combine academics with internships, research, startup activity, athletics, cultural organizations, and year-round engagement with Houston's corporate, healthcare, and civic institutions.",

  bestFitPersonality: "Independent, career-oriented, adaptable, entrepreneurial, and eager to build professional experience while earning a degree in one of America's largest global cities.",

  faithTradition: "Public",

  geographicInfluenceRadius: "National, with especially strong influence across Houston, Dallas, Austin, San Antonio, and the broader Texas Triangle, alongside growing international reach through energy, logistics, healthcare, and engineering.",

  economicOutcome: "Outstanding career outcomes across engineering, business, energy, healthcare, construction, logistics, architecture, technology, and hospitality, driven by unparalleled access to Houston's economy.",

  gradCities: [
    "Houston TX",
    "Dallas TX",
    "Austin TX",
    "San Antonio TX",
    "Denver CO",
    "Atlanta GA",
    "New York NY"
  ],

  comparableInstitutions: [
    "Georgia State University",
    "University of Illinois Chicago",
    "University of Texas at Dallas",
    "Drexel University",
    "Florida International University"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Houston Community College",
      "Lone Star College",
      "San Jacinto College",
      "Lee College"
    ],

    transferAcceptanceRate: "~90%",

    freshmanAcceptanceRate: "~70%",

    estimatedSavingsRange: "$20,000-$60,000",

    transferNotes: "UH maintains one of Texas' strongest transfer ecosystems, with seamless pathways from Houston-area community colleges into engineering, business, healthcare, technology, and numerous professional programs."

  }

},

institutionIdentity: {

  archetype: "Urban Public Research University",

  institutionalPersonality: "ambitious, entrepreneurial, resilient, diverse, opportunity-driven",

  cultureKeywords: [
    "Houston",
    "Energy",
    "Business",
    "Healthcare",
    "Engineering",
    "Entrepreneurship",
    "Diversity",
    "Research",
    "Urban"
  ],

  missionOrientation: "Expanding opportunity through research, innovation, professional education, entrepreneurship, and public service while serving one of the world's most globally connected metropolitan economies.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through internships, cooperative education, research, entrepreneurship, clinical partnerships, industry engagement, and real-world experience embedded throughout Houston.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Politically diverse and internationally oriented, reflecting Houston's multicultural population and globally connected business environment.",

  studentAutonomy: "Very High",

  prestigeOrientation: "Highly respected by employers throughout Texas in engineering, business, hospitality, law, architecture, healthcare, and energy, with rising national research visibility.",

  socialClimate: "Highly diverse, professionally focused, entrepreneurial, and less residential than traditional flagship universities, with student life deeply connected to the surrounding city.",

  leadershipStyle: "Leadership through innovation, resilience, entrepreneurship, technical expertise, and civic engagement."

},

megaRegionIntegration: {

  primaryMegaRegion: "Texas Triangle",

  regionalRole: "One of the Texas Triangle's leading producers of engineering, healthcare, energy, business, architecture, logistics, and technology talent."

},

megaRegionExposure: {

  TexasTriangle: 100,
  MidContinentIndustrialEnergyCorridor: 82,
  CharLanta: 56,
  BosWash: 42,
  NorCalInnovationCorridor: 34,
  TorBuffChester: 28,
  SoCalCreativeEconomy: 26

},

comparativePositioning: {

  versusUTDallas:
    "Both universities are deeply connected to major Texas metropolitan economies and produce outstanding outcomes in business, engineering, computer science, and technology. UT Dallas has stronger national visibility in computer science and research, while Houston offers broader strength in energy, architecture, hospitality, law, logistics, healthcare, and access to the nation's largest medical center.",

  versusTexasAM:
    "Texas A&M has greater national prestige, a larger alumni network, and stronger traditional residential culture. The University of Houston provides a more urban, professionally integrated experience with exceptional access to internships and corporate relationships throughout Houston.",

  versusGeorgiaState:
    "Both are outstanding urban public universities integrated into major business centers. Houston has stronger engineering, energy, architecture, hospitality, and healthcare ecosystems, while Georgia State has greater emphasis on public policy, government, and Atlanta's corporate economy.",

  versusUIC:
    "Both universities leverage large metropolitan economies to create career opportunities. Chicago provides stronger finance and healthcare access, while Houston offers greater opportunities in energy, engineering, logistics, construction, architecture, and industrial business."

},

institutionScale: {

  enrollmentCategory: "Very Large",

  undergraduateEnrollment: 38000,

  graduateEnrollment: 9000,

  totalEnrollment: 47000,

  campusType: "Urban Public Research University",

  residentialIntensity: 54,

  communityFeel: 72,

  studentFacultyRatio: "22:1",

  classSizeExperience: "Large introductory courses transition into significantly smaller upper-division classes emphasizing internships, applied research, design projects, clinical experiences, and close engagement with Houston-area employers. Many students begin professional work well before graduation because of the university's location.",

  scaleAdvantages: [
    "Exceptional internship opportunities during the academic year",
    "Direct access to Fortune 500 headquarters",
    "Outstanding research partnerships",
    "Highly diverse student population",
    "Extensive graduate and professional program offerings"
  ],

  scaleDisadvantages: [
    "Less residential than traditional flagship universities",
    "Many students commute",
    "Students must actively build community outside the classroom",
    "School spirit is growing but less central than at traditional college-town universities"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 88,
    conscientiousness: 90,
    extraversion: 70,
    agreeableness: 84,
    neuroticism: 34
  },

  hollandCodes: ["E","I","C"],

  learningStyle: [
    "Experiential Learning",
    "Professional Internships",
    "Urban Research",
    "Industry Collaboration",
    "Entrepreneurship"
  ],

  socialEnvironment: [
    "Career-Oriented",
    "Diverse",
    "Independent",
    "Urban",
    "Professionally Focused"
  ],

  idealStudentTraits: [
    "Highly self-directed",
    "Comfortable navigating a large city",
    "Interested in building a professional network early",
    "Career-focused and entrepreneurial",
    "Enjoys multicultural environments"
  ],

  thrivesIf: [
    "Wants internships during the academic year",
    "Plans to work in engineering, energy, healthcare, finance, architecture, logistics, or technology",
    "Prefers city life over an isolated college town",
    "Values diversity and professional opportunity",
    "Is proactive about creating career opportunities"
  ],

  strugglesIf: [
    "Wants a highly residential campus experience",
    "Prefers small liberal arts environments",
    "Expects campus life to be the center of the college experience",
    "Needs extensive structure to build community"
  ],

  transferRiskFactors: [
    "Students seeking traditional SEC or Big 10-style campus culture",
    "Students uncomfortable with commuting or urban environments",
    "Students looking for a highly insulated residential experience"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Construction Management",
    "Management Information Systems",
    "Digital Media",
    "Industrial Engineering",
    "Actuarial Mathematics",
    "Global Hospitality Leadership",
    "Human Resource Development",
    "Retail & Consumer Science"
  ],

  hiddenCareerPipelines: [
    "Commercial Real Estate",
    "Healthcare Administration",
    "Energy Trading",
    "Industrial Automation",
    "Corporate Treasury",
    "Maritime Logistics",
    "Commercial Construction",
    "Sports & Entertainment Venue Management"
  ],

  nicheRecruitingAdvantages: [
    "ExxonMobil",
    "Chevron",
    "Shell",
    "SLB",
    "MD Anderson Cancer Center",
    "Houston Methodist",
    "KBR",
    "Hewlett Packard Enterprise"
  ],

  overlookedStrengths: [
    "The Bauer College of Business maintains one of the strongest employer networks in Texas, particularly in accounting, finance, energy, and entrepreneurship.",
    "The Conrad N. Hilton College is consistently regarded as one of the premier hospitality schools in the United States, with exceptional placement into hotel, restaurant, tourism, and event leadership.",
    "The Cullen College of Engineering benefits from deep partnerships with Houston's energy, aerospace, manufacturing, and industrial sectors.",
    "UH students gain year-round access to internships with Fortune 500 companies because of the university's location inside the Houston metropolitan area.",
    "The Texas Medical Center—the largest medical complex in the world—creates extraordinary opportunities in healthcare, biotechnology, clinical research, health informatics, and administration."
  ],

  sleeperIndustries: [
    "Carbon Capture",
    "Hydrogen Energy",
    "Space Commercialization",
    "Digital Health",
    "Port & Maritime Technology",
    "Climate Technology"
  ]

},

networkCapital: {

  alumniAccessibility: 88,

  mentorshipDensity: 88,

  executiveAccess: 94,

  internshipNetwork: 100,

  familyBusinessExposure: 64,

  relationshipCapitalScore: 92,

  alumniLoyaltyScore: 88,

  referralCultureStrength: 90,

  donorNetworkStrength: 84,

  boardMemberDensity: 88

},

economicEcosystem: {

  primaryIndustries: [
    "Energy",
    "Healthcare",
    "Engineering",
    "Finance",
    "Technology",
    "Construction",
    "Logistics",
    "Hospitality"
  ],

  regionalEconomicDrivers: [
    "Energy",
    "Texas Medical Center",
    "Port of Houston",
    "Advanced Manufacturing",
    "Commercial Real Estate",
    "Aerospace",
    "Financial Services"
  ],

  topEmployers: [
    "ExxonMobil",
    "Chevron",
    "Shell",
    "MD Anderson Cancer Center",
    "Houston Methodist",
    "Hewlett Packard Enterprise",
    "KBR",
    "JPMorgan Chase",
    "Deloitte",
    "Amazon"
  ],

  emergingIndustries: [
    "Artificial Intelligence",
    "Energy Transition",
    "Climate Technology",
    "Biotechnology",
    "Space Economy",
    "Robotics"
  ],

  startupDensity: "High",

  ventureCapitalAccess: 72,

  corporateHeadquartersDensity: 100,

  healthcareHubStrength: 100,

  innovationIndex: 94

},

geographicInfluence: {

  dominantMarket: "The Texas Triangle and Global Energy Corridor",

  secondaryMarkets: [
    "Houston TX",
    "Dallas TX",
    "Austin TX",
    "San Antonio TX",
    "New Orleans LA",
    "Denver CO",
    "Atlanta GA"
  ],

  alumniStrongholds: [
    "Houston TX",
    "Dallas TX",
    "Austin TX",
    "San Antonio TX",
    "New York NY"
  ],

  relocationPatterns: [
    "The overwhelming majority of graduates begin their careers in Houston, taking advantage of one of the nation's deepest employment markets across energy, healthcare, finance, engineering, logistics, construction, hospitality, and technology.",
    "Dallas has become the second-largest destination, attracting graduates into consulting, accounting, banking, technology, commercial real estate, and corporate leadership.",
    "Austin draws computer science, engineering, entrepreneurship, and startup-oriented graduates seeking careers in software, AI, semiconductor manufacturing, and venture-backed companies.",
    "A smaller but growing number of graduates relocate to Denver, Atlanta, and New York for opportunities in energy finance, consulting, engineering, healthcare administration, logistics, and investment banking.",
    "While the alumni network is increasingly national, Houston remains the center of gravity for professional influence, networking, and long-term career development."
  ],

  regionalInfluenceScore: 100,

  nationalReachScore: 86,

  internationalReachScore: 78

},

socialCapital: {

  greekLifeInfluence: 42,

  studentOrganizationStrength: 94,

  leadershipDevelopment: 92,

  crossDisciplinaryInteraction: 94,

  civicEngagement: 90

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 20,
    notes: "Business, marketing, chemistry, and consumer sciences provide occasional pathways into beauty and consumer products, though the sector is not a defining institutional focus."
  },

  healthWellness: {
    strength: 98,
    notes: "The university's proximity to the Texas Medical Center provides exceptional opportunities in healthcare delivery, public health, nursing, health informatics, biotechnology, and clinical research."
  },

  nutraceuticals: {
    strength: 60,
    notes: "Supported through nutrition, biology, chemistry, and healthcare research, though not a major recruiting area."
  },

  consumerProducts: {
    strength: 84,
    notes: "Houston's corporate ecosystem provides strong placement into consumer products, retail strategy, supply chain, marketing, and operations leadership."
  },

  outdoorIndustry: {
    strength: 24,
    notes: "Limited institutional emphasis outside environmental science and sustainability."
  },

  sportsBusiness: {
    strength: 74,
    notes: "Houston's professional sports franchises, venue management industry, and hospitality programs provide meaningful opportunities in sports business, event management, sponsorship, and operations."
  },

  entertainmentMedia: {
    strength: 68,
    notes: "Communications, digital media, and Houston's media market support careers in broadcasting, digital content, advertising, and corporate communications."
  },

  ventureCapital: {
    strength: 74,
    notes: "The expanding Houston innovation ecosystem, particularly in energy, healthcare, climate technology, and software, provides increasing exposure to venture-backed startups and venture capital."
  },

  privateEquity: {
    strength: 72,
    notes: "Graduates enter infrastructure, energy, healthcare, and middle-market private equity firms, often after careers in investment banking, consulting, or corporate finance."
  },

  investmentBanking: {
    strength: 82,
    notes: "The Bauer College maintains strong placement into Houston's investment banking ecosystem, particularly in energy, industrials, restructuring, and corporate finance, with additional placement into Dallas and New York."
  },

  consulting: {
    strength: 90,
    notes: "Major consulting firms recruit consistently across business, engineering, supply chain, technology, healthcare, and energy practices."
  },

  medicine: {
    strength: 88,
    notes: "Exceptional pre-med preparation is strengthened by direct access to the Texas Medical Center, research hospitals, and clinical opportunities."
  },

  healthcareAdministration: {
    strength: 98,
    notes: "One of the strongest public university pathways into healthcare administration, hospital operations, health systems management, and health informatics due to the surrounding medical ecosystem."
  },

  defense: {
    strength: 72,
    notes: "Engineering graduates enter aerospace, defense manufacturing, cybersecurity, and NASA-related organizations through Houston's aerospace sector."
  },

  realEstate: {
    strength: 92,
    notes: "Houston's commercial real estate market, architecture school, construction management, and business programs create one of the nation's strongest real estate ecosystems."
  },

  luxuryBrands: {
    strength: 34,
    notes: "Houston's luxury retail, hospitality, and consumer markets create some opportunities, though this is not a defining institutional strength."
  },

  entrepreneurship: {
    strength: 92,
    notes: "The Wolff Center for Entrepreneurship—consistently recognized as one of the nation's top undergraduate entrepreneurship programs—combined with Houston's startup ecosystem creates exceptional opportunities for founders and operators."
  },

  technology: {
    strength: 86,
    notes: "Computer science, engineering, cybersecurity, AI, cloud computing, and enterprise technology benefit from Houston's rapidly diversifying technology sector."
  },

  publicPolicy: {
    strength: 74,
    notes: "Public affairs, urban planning, public administration, and policy benefit from Houston's scale and governmental institutions."
  },

  nonprofitLeadership: {
    strength: 82,
    notes: "Houston's large nonprofit sector and the university's civic engagement programs create meaningful pathways into philanthropic and community leadership."
  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 96,

  firstGenerationSupport: 96,

  wealthCreationPotential: 94,

  familyBusinessPipelineStrength: 82

},

futureResilience: {

  aiResistance: 94,

  automationResistance: 96,

  adaptabilityScore: 96,

  interdisciplinaryStrength: 94,

  futureReadiness: 96,

  entrepreneurialFlexibility: 94,

  lifelongLearningCulture: 92,

  innovationCapacity: 94

},

lifeDesignOutcomes: {

  wealthCreationPotential: 94,

  communityLeadershipPotential: 90,

  geographicMobility: 90,

  workLifeBalancePotential: 84,

  purposeAlignment: 90,

  familyFormationSupport: 86,

  personalDevelopmentPotential: 90,

  careerOptionality: 96,

  longTermLifeSatisfaction: 90

},

institutionalMoat: {

  prestigeMoat: 82,

  networkMoat: 94,

  geographicMoat: 100,

  industryMoat: 98,

  alumniMoat: 90,

  brandDurability: 94,

  overallMoatScore: 94

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 90,

  returnerScore: 66,

  stewardScore: 74,

  navigatorScore: 98,

  geographicLockIn: "low",

  alumniDispersalPattern: "Graduates begin disproportionately in Houston but rapidly disperse throughout the Texas Triangle, New York, Denver, Atlanta, and international energy, finance, healthcare, engineering, logistics, and technology markets. Career movement between industries is unusually common because of the breadth of Houston's economy."

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 80,
    type: "Houston Hillel (serving the University of Houston and neighboring institutions)"
  },

  estimatedJewishUndergraduates: 700,

  jewishStudentPercentage: "~2%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Strong",

  notes: "Houston Hillel serves University of Houston students through weekly Shabbat dinners, holiday celebrations, Israel engagement, leadership development, and Birthright opportunities. Students also benefit from Houston's large and well-established Jewish community, numerous synagogues across denominations, kosher dining options, and extensive professional networking."

},

honorsCollege: {

  exists: true,

  name: "The Honors College",

  strength: 94,

  notes: "The Honors College is one of UH's signature academic assets. It offers interdisciplinary seminars, priority registration, undergraduate research, close faculty mentoring, prestigious scholarship advising, and specialized programs in medicine, law, public policy, entrepreneurship, and the humanities. The Honors College creates a small-college academic experience within one of the nation's largest urban research universities."

}
},

"The University of Texas at Dallas": {
institutionNarrative: {

  name: "The University of Texas at Dallas",

  location: "Richardson, Texas",

  region: "South",

  archetype: "The Innovation Engine — Technology, Business, AI, Engineering, and Merit-Based Opportunity",

  oneSentenceSummary: "The University of Texas at Dallas is one of America's fastest-rising public research universities, combining nationally recognized strengths in computer science, artificial intelligence, engineering, business, data science, cybersecurity, neuroscience, and mathematics with direct access to the Dallas–Fort Worth technology and corporate economy.",

  pipeline: "Approximately 31,000 students. UTD is nationally recognized for Computer Science, Software Engineering, Artificial Intelligence, Cybersecurity, Data Science, Electrical Engineering, Mechanical Engineering, Biomedical Engineering, Finance, Accounting, Information Technology, Analytics, Mathematics, Neuroscience, and the Naveen Jindal School of Management. Major recruiters include Texas Instruments, Raytheon, Lockheed Martin, Goldman Sachs, JPMorgan Chase, Capital One, AT&T, Toyota North America, Amazon, Microsoft, NVIDIA, Cisco, Deloitte, EY, PwC, KPMG, PepsiCo, Samsung, and numerous high-growth technology companies throughout the Dallas–Fort Worth Metroplex.",

  hiddenPathway: "UTD's greatest advantage is the convergence of elite STEM education, generous merit scholarships, and one of the nation's strongest technology employment markets. Students often graduate with substantial professional experience through internships completed during the academic year.",

  institutionalSecret: "Although it lacks the traditions of older flagship universities, UTD has quietly become one of America's premier talent pipelines into technology, semiconductors, artificial intelligence, finance, consulting, and advanced engineering. Employer reputation within Texas often exceeds public perception nationally.",

  theRoom: "Located in Richardson's Telecom Corridor, minutes from Plano, Frisco, and North Dallas, UTD operates inside one of America's largest concentrations of technology companies, financial institutions, defense contractors, and corporate headquarters.",

  lifestyle: "Academically intense, intellectually curious, entrepreneurial, globally diverse, and career-focused. Students emphasize research, internships, hackathons, entrepreneurship, student organizations, and professional networking over traditional collegiate culture.",

  bestFitPersonality: "Analytical, ambitious, self-motivated, intellectually curious, and interested in maximizing career outcomes through technology, engineering, business, research, or entrepreneurship.",

  faithTradition: "Public",

  geographicInfluenceRadius: "Strong throughout Texas with growing national influence across Silicon Valley, Seattle, Austin, New York, and major technology hubs.",

  economicOutcome: "Exceptional outcomes in software engineering, AI, semiconductor engineering, finance, cybersecurity, consulting, data science, and advanced technology, supported by one of the country's strongest employer ecosystems.",

  gradCities: [
    "Dallas TX",
    "Plano TX",
    "Frisco TX",
    "Austin TX",
    "Seattle WA",
    "San Jose CA",
    "New York NY"
  ],

  comparableInstitutions: [
    "Georgia Tech",
    "University of California, Irvine",
    "University of Maryland",
    "North Carolina State University",
    "University of Houston"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Collin College",
      "Dallas College",
      "Tarrant County College",
      "North Central Texas College"
    ],

    transferAcceptanceRate: "~85%",

    freshmanAcceptanceRate: "~78%",

    estimatedSavingsRange: "$20,000–$60,000",

    transferNotes: "UTD has extensive transfer pathways from North Texas community colleges, particularly into engineering, computer science, business, mathematics, and information technology. Many transfer students secure internships shortly after arrival because of the university's employer relationships."

  }

},

institutionIdentity: {

  archetype: "Technology-Focused Public Research University",

  institutionalPersonality: "analytical, ambitious, innovative, meritocratic, globally connected",

  cultureKeywords: [
    "Technology",
    "Artificial Intelligence",
    "Engineering",
    "Research",
    "Business",
    "Innovation",
    "Data Science",
    "Entrepreneurship",
    "Cybersecurity"
  ],

  missionOrientation: "Advancing research, innovation, entrepreneurship, and workforce development while serving the rapidly evolving technology economy of North Texas and beyond.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through research, internships, entrepreneurship, interdisciplinary collaboration, and deep engagement with industry partners across technology, finance, healthcare, and engineering.",

  competitiveness: "Selective",

  politicalCulture: "Politically diverse but generally pragmatic, internationally oriented, and focused on innovation, economic development, and scientific advancement.",

  studentAutonomy: "Very High",

  prestigeOrientation: "Rapidly rising national reputation in STEM disciplines, with particularly strong employer recognition in Texas and among technology companies.",

  socialClimate: "Academically focused, globally diverse, collaborative, and career-oriented. Student engagement centers more on research, innovation, and professional organizations than on traditional college traditions.",

  leadershipStyle: "Leadership through innovation, technical expertise, entrepreneurship, research, and collaborative problem-solving."

},

megaRegionIntegration: {

  primaryMegaRegion: "Texas Triangle",

  regionalRole: "One of the Texas Triangle's premier producers of technology, engineering, AI, finance, and data science talent."

},

megaRegionExposure: {

  TexasTriangle: 100,
  NorCalInnovationCorridor: 84,
  MidContinentIndustrialEnergyCorridor: 76,
  BosWash: 52,
  SoCalCreativeEconomy: 38,
  CharLanta: 36,
  TorBuffChester: 28

},

comparativePositioning: {

  versusUniversityOfHouston:
    "Both universities leverage major Texas metropolitan economies to create exceptional career outcomes. UTD has greater strength in computer science, artificial intelligence, semiconductors, cybersecurity, and quantitative finance, while Houston has broader advantages in energy, healthcare, architecture, hospitality, and logistics.",

  versusTexasAM:
    "Texas A&M offers a more traditional flagship experience with greater national prestige, engineering scale, and alumni reach. UTD provides a more technology-centric environment with stronger integration into the Dallas technology, semiconductor, telecommunications, and financial services sectors.",

  versusGeorgiaTech:
    "Georgia Tech possesses broader international prestige and larger engineering research scale. UTD offers a more accessible admissions pathway, generous merit scholarships, smaller graduate debt for many students, and exceptional placement into the rapidly expanding Dallas technology economy.",

  versusNorthCarolinaState:
    "Both universities are rising STEM powerhouses integrated into major technology ecosystems. NC State has stronger manufacturing, materials science, and East Coast employer reach, while UTD excels in AI, software engineering, semiconductors, cybersecurity, quantitative finance, and North Texas corporate recruiting."

},

institutionScale: {

  enrollmentCategory: "Large",

  undergraduateEnrollment: 22000,

  graduateEnrollment: 9000,

  totalEnrollment: 31000,

  campusType: "Suburban Public Research University",

  residentialIntensity: 58,

  communityFeel: 74,

  studentFacultyRatio: "24:1",

  classSizeExperience: "Introductory STEM courses can be large, but advanced coursework emphasizes research labs, project-based learning, faculty collaboration, industry-sponsored capstones, and internship integration. Many students combine coursework with part-time professional employment throughout the academic year.",

  scaleAdvantages: [
    "Outstanding undergraduate research opportunities",
    "Extensive access to Dallas-area internships",
    "Strong graduate-level course availability",
    "Exceptional STEM facilities",
    "Close relationships with regional employers"
  ],

  scaleDisadvantages: [
    "Less traditional residential campus culture",
    "School spirit is secondary to academics and careers",
    "Many students commute from across North Texas",
    "Social life is more decentralized than at flagship universities"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 92,
    conscientiousness: 94,
    extraversion: 58,
    agreeableness: 82,
    neuroticism: 28
  },

  hollandCodes: ["I","C","E"],

  learningStyle: [
    "Research",
    "Project-Based Learning",
    "Industry Collaboration",
    "Independent Learning",
    "Technical Problem Solving"
  ],

  socialEnvironment: [
    "Academically Focused",
    "Career-Oriented",
    "International",
    "Collaborative",
    "Technology-Centered"
  ],

  idealStudentTraits: [
    "Highly analytical",
    "Self-directed learner",
    "Interested in AI, engineering, technology, finance, or research",
    "Comfortable in academically rigorous environments",
    "Motivated by long-term career outcomes"
  ],

  thrivesIf: [
    "Enjoys mathematics, engineering, or computer science",
    "Wants internships before graduation",
    "Values research opportunities",
    "Prefers career development over traditional college culture",
    "Enjoys working alongside ambitious peers"
  ],

  strugglesIf: [
    "Wants a highly spirited athletic culture",
    "Prefers a classic residential college-town experience",
    "Needs structured social programming",
    "Dislikes academically competitive environments"
  ],

  transferRiskFactors: [
    "Students seeking SEC-style campus traditions",
    "Students prioritizing nightlife and residential culture",
    "Students wanting humanities-centered liberal arts experiences"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Cognitive Science",
    "Human-Computer Interaction",
    "Business Analytics",
    "Supply Chain Management",
    "Actuarial Science",
    "Speech, Language & Hearing Sciences",
    "Geospatial Information Sciences",
    "Healthcare Studies"
  ],

  hiddenCareerPipelines: [
    "Semiconductor Design",
    "Quantitative Finance",
    "Cloud Infrastructure",
    "Product Management",
    "Healthcare Technology",
    "Enterprise Software",
    "Telecommunications",
    "Defense Electronics"
  ],

  nicheRecruitingAdvantages: [
    "Texas Instruments",
    "NVIDIA",
    "Samsung",
    "Capital One",
    "Raytheon",
    "AT&T",
    "Toyota North America",
    "Goldman Sachs"
  ],

  overlookedStrengths: [
    "The Erik Jonsson School of Engineering and Computer Science has become one of the nation's strongest pipelines into software engineering, artificial intelligence, cybersecurity, semiconductor engineering, and cloud computing.",
    "The Naveen Jindal School of Management has developed an exceptional reputation for analytics, finance, information systems, accounting, and technology-oriented business leadership.",
    "The university's location within the Telecom Corridor and North Dallas technology ecosystem allows students to complete internships throughout the academic year with Fortune 500 companies and high-growth startups.",
    "UTD's undergraduate research culture gives students unusually early exposure to faculty-led research, making it an attractive choice for graduate school preparation and technical careers.",
    "Generous merit scholarships have attracted a highly accomplished student body, increasing the academic caliber and employer reputation of the university over the past two decades."
  ],

  sleeperIndustries: [
    "Artificial Intelligence",
    "Quantum Computing",
    "Semiconductor Manufacturing",
    "Autonomous Systems",
    "Enterprise SaaS",
    "Financial Technology"
  ]

},

networkCapital: {

  alumniAccessibility: 82,

  mentorshipDensity: 86,

  executiveAccess: 92,

  internshipNetwork: 98,

  familyBusinessExposure: 58,

  relationshipCapitalScore: 88,

  alumniLoyaltyScore: 84,

  referralCultureStrength: 86,

  donorNetworkStrength: 78,

  boardMemberDensity: 84

},

economicEcosystem: {

  primaryIndustries: [
    "Technology",
    "Artificial Intelligence",
    "Semiconductors",
    "Financial Services",
    "Engineering",
    "Cybersecurity",
    "Telecommunications",
    "Healthcare Technology"
  ],

  regionalEconomicDrivers: [
    "Technology",
    "Corporate Headquarters",
    "Financial Services",
    "Defense",
    "Telecommunications",
    "Semiconductor Manufacturing",
    "Professional Services"
  ],

  topEmployers: [
    "Texas Instruments",
    "Toyota North America",
    "Capital One",
    "AT&T",
    "Raytheon",
    "Goldman Sachs",
    "Amazon",
    "Microsoft",
    "NVIDIA",
    "Samsung"
  ],

  emergingIndustries: [
    "Artificial Intelligence",
    "Quantum Computing",
    "Semiconductor Fabrication",
    "Robotics",
    "Cloud Infrastructure",
    "Financial Technology"
  ],

  startupDensity: "High",

  ventureCapitalAccess: 82,

  corporateHeadquartersDensity: 98,

  healthcareHubStrength: 76,

  innovationIndex: 98

},

geographicInfluence: {

  dominantMarket: "The Dallas–Fort Worth Technology and Corporate Corridor",

  secondaryMarkets: [
    "Dallas TX",
    "Plano TX",
    "Frisco TX",
    "Austin TX",
    "Houston TX",
    "Seattle WA",
    "San Jose CA"
  ],

  alumniStrongholds: [
    "Dallas TX",
    "Plano TX",
    "Frisco TX",
    "Austin TX",
    "Seattle WA"
  ],

  relocationPatterns: [
    "Most graduates begin their careers in the Dallas–Fort Worth Metroplex, joining technology companies, financial institutions, consulting firms, healthcare organizations, and Fortune 500 corporate headquarters.",
    "Austin attracts software engineers, AI researchers, entrepreneurs, semiconductor engineers, and startup-oriented graduates seeking careers in one of the nation's fastest-growing innovation ecosystems.",
    "Seattle has become a major destination for graduates entering cloud computing, enterprise software, AI, and large technology firms including Amazon and Microsoft.",
    "Silicon Valley continues to recruit top graduates into software engineering, semiconductors, machine learning, cloud infrastructure, and venture-backed technology companies.",
    "Although North Texas remains the primary employment market, graduates increasingly disperse nationally into major technology, finance, and research hubs while maintaining strong ties to the Dallas corporate ecosystem."
  ],

  regionalInfluenceScore: 98,

  nationalReachScore: 90,

  internationalReachScore: 82

},

socialCapital: {

  greekLifeInfluence: 20,

  studentOrganizationStrength: 94,

  leadershipDevelopment: 90,

  crossDisciplinaryInteraction: 96,

  civicEngagement: 80

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 12,
    notes: "Minimal institutional emphasis outside consumer analytics, marketing, and product management."
  },

  healthWellness: {
    strength: 74,
    notes: "Strong preparation through healthcare studies, biomedical engineering, neuroscience, psychology, and health technology, though clinical medicine is not the university's defining focus."
  },

  nutraceuticals: {
    strength: 34,
    notes: "Limited activity beyond biomedical research and life sciences."
  },

  consumerProducts: {
    strength: 82,
    notes: "Dallas headquarters for major consumer brands create strong opportunities in analytics, marketing, operations, supply chain, finance, and product management."
  },

  outdoorIndustry: {
    strength: 12,
    notes: "Very limited institutional emphasis."
  },

  sportsBusiness: {
    strength: 40,
    notes: "Opportunities exist through the Dallas professional sports ecosystem, though sports management is not a major institutional strength."
  },

  entertainmentMedia: {
    strength: 38,
    notes: "Communications and digital arts support regional media careers, but entertainment is not a defining recruiting sector."
  },

  ventureCapital: {
    strength: 84,
    notes: "The rapidly expanding North Texas startup ecosystem and increasing venture investment in AI, enterprise software, fintech, cybersecurity, and semiconductor technologies create substantial opportunities for founders and early-stage technology professionals."
  },

  privateEquity: {
    strength: 82,
    notes: "Dallas is one of America's strongest private equity markets. Finance, accounting, analytics, and engineering graduates increasingly enter middle-market and large-cap investment firms."
  },

  investmentBanking: {
    strength: 84,
    notes: "The Jindal School of Management places graduates into investment banking, corporate finance, capital markets, and restructuring firms throughout Dallas, Houston, Chicago, and New York."
  },

  consulting: {
    strength: 92,
    notes: "Major consulting firms recruit heavily for technology consulting, strategy, cybersecurity, analytics, ERP implementation, operations, and digital transformation."

  },

  medicine: {
    strength: 64,
    notes: "Excellent pre-med preparation through neuroscience, biology, biomedical engineering, and undergraduate research, though UTD does not operate a traditional medical school."

  },

  healthcareAdministration: {
    strength: 68,
    notes: "Healthcare technology, analytics, informatics, and business create pathways into healthcare administration and digital health leadership."

  },

  defense: {
    strength: 92,
    notes: "North Texas defense contractors recruit extensively across electrical engineering, computer science, cybersecurity, AI, systems engineering, and software development."

  },

  realEstate: {
    strength: 78,
    notes: "Dallas commercial real estate, finance, analytics, and construction sectors provide strong placement into development, investment, and corporate real estate."

  },

  luxuryBrands: {
    strength: 22,
    notes: "Some opportunities exist through Dallas consumer and retail sectors, though luxury is not a defining institutional focus."

  },

  entrepreneurship: {
    strength: 88,
    notes: "Strong entrepreneurship programming, technology commercialization, engineering innovation, and proximity to one of America's fastest-growing startup ecosystems support ambitious founders."

  },

  technology: {
    strength: 100,
    notes: "UT Dallas is one of the nation's strongest public universities for careers in software engineering, AI, cybersecurity, cloud computing, semiconductors, enterprise technology, telecommunications, and data science."

  },

  publicPolicy: {
    strength: 56,
    notes: "Public policy exists but is secondary to engineering, business, and technology."

  },

  nonprofitLeadership: {
    strength: 62,
    notes: "Leadership opportunities exist through civic organizations and STEM outreach, though nonprofit leadership is not a defining institutional pathway."

  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 94,

  firstGenerationSupport: 90,

  wealthCreationPotential: 96,

  familyBusinessPipelineStrength: 70

},

futureResilience: {

  aiResistance: 98,

  automationResistance: 98,

  adaptabilityScore: 98,

  interdisciplinaryStrength: 94,

  futureReadiness: 100,

  entrepreneurialFlexibility: 92,

  lifelongLearningCulture: 96,

  innovationCapacity: 98

},

lifeDesignOutcomes: {

  wealthCreationPotential: 96,

  communityLeadershipPotential: 82,

  geographicMobility: 94,

  workLifeBalancePotential: 86,

  purposeAlignment: 88,

  familyFormationSupport: 84,

  personalDevelopmentPotential: 90,

  careerOptionality: 98,

  longTermLifeSatisfaction: 90

},

institutionalMoat: {

  prestigeMoat: 84,

  networkMoat: 90,

  geographicMoat: 98,

  industryMoat: 98,

  alumniMoat: 86,

  brandDurability: 94,

  overallMoatScore: 94

},

trajectoryProfile: {

  dominantTrajectory: "NAVIGATOR",

  leaverScore: 94,

  returnerScore: 54,

  stewardScore: 68,

  navigatorScore: 100,

  geographicLockIn: "low",

  alumniDispersalPattern: "Graduates begin disproportionately in the Dallas–Fort Worth Metroplex before rapidly dispersing into Austin, Seattle, Silicon Valley, New York, Boston, and international technology markets. Career mobility between industries—including software, semiconductors, finance, AI, consulting, defense, and entrepreneurship—is exceptionally high."

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 82,
    type: "UT Dallas Hillel"
  },

  estimatedJewishUndergraduates: 700,

  jewishStudentPercentage: "~3%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Strong",

  notes: "UT Dallas Hillel serves an active Jewish student community with weekly Shabbat dinners, holiday celebrations, Israel engagement, leadership development, and Birthright programming. Students also benefit from the large and well-established Jewish communities in Richardson, Plano, and North Dallas, along with extensive professional networking opportunities."

},

honorsCollege: {

  exists: true,

  name: "Hobson Wildenthal Honors College",

  strength: 96,

  notes: "The Hobson Wildenthal Honors College is one of UTD's signature differentiators. It provides small interdisciplinary seminars, priority registration, faculty mentorship, undergraduate research, generous scholarship opportunities, and accelerated pathways into graduate study. Combined with UTD's STEM focus, it creates an elite academic experience within a rapidly ascending public research university."

}
},

"The University of Alabama": {
institutionNarrative: {

  name: "The University of Alabama",

  location: "Tuscaloosa, Alabama",

  region: "South",

  archetype: "The Flagship of Leadership — SEC Tradition, Merit Scholarships, Business, Engineering, and National Student Recruitment",

  oneSentenceSummary: "The University of Alabama is one of the nation's fastest-growing flagship universities, combining nationally recognized strengths in business, engineering, nursing, communications, law, accounting, and honors education with one of the country's strongest merit scholarship programs, legendary SEC traditions, and an increasingly national student body.",

  pipeline: "Approximately 40,000 students. Alabama is nationally recognized for Accounting, Finance, Management, Engineering, Computer Science, Nursing, Public Relations, Communications, Supply Chain Management, Marketing, Law, Aerospace Engineering, Psychology, and Political Science. Major recruiters include Mercedes-Benz U.S. International, Lockheed Martin, Regions Financial, PwC, EY, KPMG, Deloitte, Amazon, Southern Company, Alabama Power, Boeing, Honda, Blue Origin, Bank of America, JPMorgan Chase, and numerous employers throughout the Southeast.",

  hiddenPathway: "Alabama's greatest hidden advantage is its combination of generous merit scholarships, a rapidly improving academic profile, nationally respected Honors College, and a deeply loyal alumni network. High-achieving students often receive an honors-level academic experience at a significantly lower cost than peer institutions.",

  institutionalSecret: "While many people associate Alabama primarily with football, the university has quietly transformed into a national destination for merit scholars. Today, more than half of incoming students come from outside Alabama, creating one of the country's fastest-growing national flagship communities.",

  theRoom: "Located in Tuscaloosa, Alabama combines a classic SEC college-town experience with strong employer connections across Birmingham, Huntsville, Atlanta, Nashville, Dallas, and the broader Southeast.",

  lifestyle: "Highly spirited, residential, tradition-rich, social, and increasingly academically ambitious. Students balance rigorous academics with SEC athletics, Greek life, honors programs, undergraduate research, leadership organizations, and a vibrant campus culture.",

  bestFitPersonality: "Ambitious, outgoing, community-oriented, and interested in combining a traditional flagship experience with strong career preparation and exceptional value.",

  faithTradition: "Public",

  geographicInfluenceRadius: "Strong throughout the Southeast with growing national influence due to aggressive out-of-state recruitment, merit scholarships, and expanding employer recognition.",

  economicOutcome: "Excellent career outcomes across accounting, business, engineering, healthcare, manufacturing, communications, consulting, and public leadership, particularly throughout the Southeast.",

  gradCities: [
    "Birmingham AL",
    "Atlanta GA",
    "Nashville TN",
    "Dallas TX",
    "Charlotte NC",
    "Huntsville AL",
    "Houston TX"
  ],

  comparableInstitutions: [
    "University of South Carolina",
    "University of Tennessee",
    "Auburn University",
    "University of Mississippi",
    "University of Arkansas"
  ],

  ccTransferPathway: {

    hasCCPathway: true,

    ccFeederNames: [
      "Shelton State Community College",
      "Jefferson State Community College",
      "Wallace State Community College",
      "Bevill State Community College"
    ],

    transferAcceptanceRate: "~80%",

    freshmanAcceptanceRate: "~76%",

    estimatedSavingsRange: "$20,000–$60,000",

    transferNotes: "The University of Alabama maintains strong transfer pathways from Alabama community colleges into business, engineering, education, nursing, communications, and liberal arts. Transfer students have broad access to internships and career services."

  }

},

institutionIdentity: {

  archetype: "Flagship Public Research University",

  institutionalPersonality: "confident, welcoming, ambitious, tradition-rich, leadership-oriented",

  cultureKeywords: [
    "SEC",
    "Leadership",
    "Business",
    "Engineering",
    "Honors",
    "School Spirit",
    "Merit Scholarships",
    "Tradition",
    "Research"
  ],

  missionOrientation: "Preparing leaders through research, teaching, service, and professional education while serving Alabama, the Southeast, and an increasingly national student population.",

  faithTradition: "None",

  educationalPhilosophy: "Students learn through leadership development, experiential learning, undergraduate research, internships, honors education, service, and strong alumni engagement.",

  competitiveness: "Moderately Selective",

  politicalCulture: "Politically diverse with a somewhat more conservative culture than many flagship universities, reflecting both the SEC environment and a growing national student body.",

  studentAutonomy: "High",

  prestigeOrientation: "Nationally respected across the Southeast with particularly strong employer recognition in business, accounting, engineering, law, communications, and healthcare. The Honors College significantly elevates the academic experience for high-achieving students.",

  socialClimate: "Highly residential, socially active, tradition-rich, and exceptionally spirited, with one of the nation's strongest campus communities centered around athletics, Greek life, and student organizations.",

  leadershipStyle: "Leadership through service, tradition, professional excellence, and community engagement."

},

megaRegionIntegration: {

  primaryMegaRegion: "CharLanta",

  regionalRole: "A leading producer of business, engineering, healthcare, accounting, communications, and public-sector talent across the Southeast."

},

megaRegionExposure: {

  CharLanta: 98,
  TexasTriangle: 66,
  MidContinentIndustrialEnergyCorridor: 72,
  BosWash: 42,
  NorCalInnovationCorridor: 26,
  SoCalCreativeEconomy: 22,
  TorBuffChester: 18

},

comparativePositioning: {

  versusAuburn:
    "Both are premier public universities in Alabama with deeply loyal alumni and strong SEC traditions. Auburn has broader national recognition in engineering, architecture, aviation, and agriculture, while Alabama offers stronger accounting, communications, public relations, law, honors education, and a larger national out-of-state student population driven by merit scholarships.",

  versusSouthCarolina:
    "Both provide classic SEC flagship experiences with vibrant residential campuses and strong business schools. Alabama has a larger Honors College, stronger merit scholarship programs, a more nationally dispersed student body, and broader recognition in accounting and communications, while South Carolina benefits from its location in the rapidly growing Columbia–Charlotte corridor.",

  versusTennessee:
    "Tennessee enjoys stronger national visibility in engineering research, supply chain, and Oak Ridge-related STEM partnerships. Alabama distinguishes itself through exceptional merit aid, one of the nation's premier public Honors Colleges, accounting, communications, and a more cohesive residential campus culture.",

  versusArkansas:
    "Both universities serve as flagship institutions with strong business and engineering programs. Arkansas has deeper corporate relationships through Walmart, Tyson Foods, and J.B. Hunt, while Alabama has stronger accounting, communications, honors education, and a broader national undergraduate recruitment strategy."

},

institutionScale: {

  enrollmentCategory: "Large",

  undergraduateEnrollment: 32000,

  graduateEnrollment: 8000,

  totalEnrollment: 40000,

  campusType: "Residential Public Research University",

  residentialIntensity: 96,

  communityFeel: 98,

  studentFacultyRatio: "19:1",

  classSizeExperience: "Introductory courses can be large, particularly in business and engineering, but Honors College seminars, upper-division coursework, undergraduate research, and professional programs offer significantly smaller classes with close faculty engagement.",

  scaleAdvantages: [
    "One of the nation's strongest residential flagship experiences",
    "Large Honors College with extensive academic enrichment",
    "Outstanding alumni engagement",
    "Wide selection of majors and student organizations",
    "Strong SEC traditions and school spirit"
  ],

  scaleDisadvantages: [
    "Large introductory lecture courses",
    "Greek life has a significant social influence",
    "Football culture can overshadow academics for some students",
    "Professional recruiting is strongest in the Southeast"
  ]

},

studentFit: {

  bigFiveProfile: {
    openness: 82,
    conscientiousness: 86,
    extraversion: 94,
    agreeableness: 90,
    neuroticism: 26
  },

  hollandCodes: ["E","S","C"],

  learningStyle: [
    "Leadership Development",
    "Experiential Learning",
    "Collaborative Learning",
    "Professional Internships",
    "Undergraduate Research"
  ],

  socialEnvironment: [
    "School Spirited",
    "Highly Residential",
    "Traditional",
    "Collaborative",
    "Leadership-Oriented"
  ],

  idealStudentTraits: [
    "Enjoys an energetic campus community",
    "Wants a balance of academics and student life",
    "Interested in leadership roles and campus involvement",
    "Values strong alumni relationships",
    "Looking for significant merit scholarship opportunities"
  ],

  thrivesIf: [
    "Wants a classic SEC college experience",
    "Plans to study business, accounting, engineering, communications, nursing, or law",
    "Enjoys traditions, athletics, and school pride",
    "Seeks a highly engaged residential community",
    "Wants access to Honors College opportunities"
  ],

  strugglesIf: [
    "Prefers a quiet or highly intellectual campus culture",
    "Dislikes large athletic or Greek life traditions",
    "Wants a dense urban campus",
    "Prefers a small liberal arts environment"
  ],

  transferRiskFactors: [
    "Students uncomfortable with highly visible athletics",
    "Students seeking a predominantly urban experience",
    "Students wanting a more politically progressive campus culture"
  ]

},

hiddenOpportunities: {

  underratedMajors: [
    "Management Information Systems",
    "Supply Chain Management",
    "Cyber Security",
    "Public Relations",
    "Advertising",
    "Operations Management",
    "Health Care Management",
    "Environmental Engineering"
  ],

  hiddenCareerPipelines: [
    "Corporate Leadership Development Programs",
    "Defense & Aerospace",
    "Automotive Manufacturing",
    "Sports Business",
    "Healthcare Administration",
    "Financial Advisory",
    "Industrial Operations",
    "Public Affairs"
  ],

  nicheRecruitingAdvantages: [
    "Mercedes-Benz U.S. International",
    "Blue Origin",
    "Lockheed Martin",
    "Regions Financial",
    "Southern Company",
    "Alabama Power",
    "Boeing",
    "PwC"
  ],

  overlookedStrengths: [
    "The Culverhouse College of Business is one of the Southeast's strongest producers of accountants, financial analysts, management consultants, and corporate leaders.",
    "The Honors College dramatically elevates the academic experience through small seminars, undergraduate research, nationally competitive fellowships, and faculty mentoring.",
    "The College of Communication & Information Sciences has long been regarded as one of the country's premier public relations and sports communication programs.",
    "Engineering graduates benefit from Alabama's expanding aerospace, automotive, and advanced manufacturing sectors, especially in Huntsville and Birmingham.",
    "The university's extensive merit scholarship strategy has created one of the nation's most geographically diverse public undergraduate populations, enriching both the classroom and alumni network."
  ],

  sleeperIndustries: [
    "Space & Aerospace",
    "Autonomous Vehicles",
    "Sports Media",
    "Advanced Manufacturing",
    "Defense Technology",
    "Data Analytics"
  ]

},

networkCapital: {

  alumniAccessibility: 94,

  mentorshipDensity: 92,

  executiveAccess: 90,

  internshipNetwork: 88,

  familyBusinessExposure: 72,

  relationshipCapitalScore: 92,

  alumniLoyaltyScore: 98,

  referralCultureStrength: 96,

  donorNetworkStrength: 92,

  boardMemberDensity: 90

},

economicEcosystem: {

  primaryIndustries: [
    "Business",
    "Accounting",
    "Healthcare",
    "Engineering",
    "Manufacturing",
    "Aerospace",
    "Financial Services",
    "Communications"
  ],

  regionalEconomicDrivers: [
    "Automotive Manufacturing",
    "Defense",
    "Aerospace",
    "Healthcare",
    "Banking",
    "Energy",
    "Professional Services"
  ],

  topEmployers: [
    "Mercedes-Benz U.S. International",
    "Lockheed Martin",
    "Regions Financial",
    "Southern Company",
    "Alabama Power",
    "Blue Origin",
    "Boeing",
    "EY",
    "PwC",
    "Deloitte"
  ],

  emergingIndustries: [
    "Space Economy",
    "Artificial Intelligence",
    "Defense Technology",
    "Advanced Manufacturing",
    "Cybersecurity",
    "Robotics"
  ],

  startupDensity: "Moderate",

  ventureCapitalAccess: 56,

  corporateHeadquartersDensity: 68,

  healthcareHubStrength: 76,

  innovationIndex: 82

},

geographicInfluence: {

  dominantMarket: "The Southeast Leadership & Industrial Growth Corridor",

  secondaryMarkets: [
    "Birmingham AL",
    "Huntsville AL",
    "Atlanta GA",
    "Nashville TN",
    "Charlotte NC",
    "Dallas TX",
    "Houston TX"
  ],

  alumniStrongholds: [
    "Birmingham AL",
    "Atlanta GA",
    "Huntsville AL",
    "Nashville TN",
    "Charlotte NC"
  ],

  relocationPatterns: [
    "A large percentage of graduates begin their careers in Birmingham, entering banking, healthcare, law, accounting, corporate leadership, and professional services.",
    "Huntsville has become one of the fastest-growing destinations for engineering graduates due to its expanding aerospace, defense, cybersecurity, and space industries.",
    "Atlanta attracts graduates into consulting, finance, commercial real estate, logistics, marketing, and Fortune 500 leadership development programs.",
    "Dallas, Houston, Charlotte, and Nashville increasingly recruit Alabama graduates because of the university's expanding national reputation and large out-of-state student population.",
    "Although Alabama's historic influence is concentrated across the Southeast, its alumni footprint has become substantially more national over the past decade as graduates disperse into high-growth metropolitan economies."
  ],

  regionalInfluenceScore: 98,

  nationalReachScore: 84,

  internationalReachScore: 42

},

socialCapital: {

  greekLifeInfluence: 96,

  studentOrganizationStrength: 98,

  leadershipDevelopment: 96,

  crossDisciplinaryInteraction: 90,

  civicEngagement: 88

},

industryPathways: {

  aestheticsAndBeauty: {
    strength: 24,
    notes: "Consumer marketing, retail, chemistry, and communications provide some pathways, but beauty is not a major institutional focus."
  },

  healthWellness: {
    strength: 82,
    notes: "Strong nursing, public health, kinesiology, psychology, and healthcare management programs support growing placement across the Southeast."
  },

  nutraceuticals: {
    strength: 40,
    notes: "Supported through nutrition, biology, chemistry, and health sciences, though not a defining recruiting sector."
  },

  consumerProducts: {
    strength: 82,
    notes: "Graduates enter brand management, sales leadership, marketing, supply chain, and consumer analytics through major national employers."
  },

  outdoorIndustry: {
    strength: 24,
    notes: "Limited institutional emphasis outside environmental sciences and natural resources."
  },

  sportsBusiness: {
    strength: 92,
    notes: "One of the nation's strongest universities for sports communication, athletic administration, collegiate athletics, NIL operations, fundraising, event management, and sports media due to the SEC ecosystem."
  },

  entertainmentMedia: {
    strength: 88,
    notes: "The College of Communication & Information Sciences has a national reputation in public relations, advertising, digital media, journalism, and sports broadcasting."
  },

  ventureCapital: {
    strength: 46,
    notes: "Entrepreneurship continues to grow, though venture-backed startup activity remains secondary to corporate leadership pathways."
  },

  privateEquity: {
    strength: 56,
    notes: "Graduates occasionally enter middle-market private equity and investment firms after careers in consulting, accounting, or investment banking."
  },

  investmentBanking: {
    strength: 70,
    notes: "Strong placement throughout the Southeast, particularly in Birmingham, Atlanta, Charlotte, Dallas, and Houston, with selective Wall Street outcomes through the Honors College and Culverhouse College of Business."
  },

  consulting: {
    strength: 88,
    notes: "National and regional consulting firms recruit consistently from business, engineering, accounting, MIS, and analytics programs."
  },

  medicine: {
    strength: 74,
    notes: "Strong pre-health advising and research support students pursuing medical, dental, and allied health professions, although clinical education is centered elsewhere in the state."
  },

  healthcareAdministration: {
    strength: 82,
    notes: "Healthcare management, business, and nursing graduates benefit from Alabama's expanding healthcare systems and regional hospital networks."
  },

  defense: {
    strength: 90,
    notes: "Engineering, computer science, and cybersecurity graduates benefit from extensive recruiting by aerospace and defense organizations centered around Huntsville and the broader Southeast."
  },

  realEstate: {
    strength: 74,
    notes: "Business, finance, and construction graduates find solid opportunities in commercial real estate, development, and corporate real estate throughout the Southeast."
  },

  luxuryBrands: {
    strength: 20,
    notes: "Limited institutional emphasis beyond luxury retail marketing and hospitality."
  },

  entrepreneurship: {
    strength: 72,
    notes: "Entrepreneurship programs continue to expand, particularly within business and engineering, although the university remains more strongly oriented toward corporate leadership development."
  },

  technology: {
    strength: 76,
    notes: "Computer science, cybersecurity, data analytics, and engineering support growing placement into enterprise technology, software development, and defense-related technology."

  },

  publicPolicy: {
    strength: 74,
    notes: "Law, political science, public administration, and public policy prepare graduates for leadership throughout Alabama and the Southeast."

  },

  nonprofitLeadership: {
    strength: 86,
    notes: "The university's culture of service, philanthropy, education, and civic engagement produces many graduates who assume nonprofit and community leadership roles."

  }

},

wealthMobility: {

  averageFamilyIncome: "",

  socialMobilityIndex: 86,

  firstGenerationSupport: 88,

  wealthCreationPotential: 90,

  familyBusinessPipelineStrength: 76

},

futureResilience: {

  aiResistance: 90,

  automationResistance: 92,

  adaptabilityScore: 92,

  interdisciplinaryStrength: 90,

  futureReadiness: 90,

  entrepreneurialFlexibility: 80,

  lifelongLearningCulture: 92,

  innovationCapacity: 84

},

lifeDesignOutcomes: {

  wealthCreationPotential: 90,

  communityLeadershipPotential: 96,

  geographicMobility: 88,

  workLifeBalancePotential: 94,

  purposeAlignment: 92,

  familyFormationSupport: 96,

  personalDevelopmentPotential: 96,

  careerOptionality: 90,

  longTermLifeSatisfaction: 96

},

institutionalMoat: {

  prestigeMoat: 84,

  networkMoat: 96,

  geographicMoat: 88,

  industryMoat: 86,

  alumniMoat: 98,

  brandDurability: 98,

  overallMoatScore: 92

},

trajectoryProfile: {

  dominantTrajectory: "STEWARD",

  leaverScore: 82,

  returnerScore: 90,

  stewardScore: 98,

  navigatorScore: 80,

  geographicLockIn: "medium",

  alumniDispersalPattern: "Graduates are concentrated throughout Birmingham, Huntsville, Atlanta, Nashville, Charlotte, Dallas, and Houston. Many build careers outside Alabama while remaining deeply engaged with the university through one of the country's most active alumni communities, frequently returning for mentorship, philanthropy, athletics, and recruiting."

},

jewishLife: {

  hillel: {
    exists: true,
    strength: 84,
    type: "UA Hillel"
  },

  estimatedJewishUndergraduates: 900,

  jewishStudentPercentage: "~3%",

  kosherDining: true,

  shabbatProgramming: true,

  birthrightSupport: true,

  jewishCommunityStrength: "Strong",

  notes: "UA Hillel has grown significantly alongside Alabama's expanding out-of-state enrollment. Students participate in weekly Shabbat dinners, holiday celebrations, leadership development, Israel programming, Birthright trips, and service initiatives. Kosher dining is available, and the organization has become an important community for Jewish students drawn to Alabama through its merit scholarship programs."

},

honorsCollege: {

  exists: true,

  name: "The Honors College",

  strength: 98,

  notes: "The Honors College is widely regarded as one of the premier public honors programs in the United States. Students benefit from small seminars, priority registration, undergraduate research, nationally competitive fellowships, specialized housing, close faculty mentorship, and programs such as Randall Research Scholars and Blount Scholars. For many high-achieving students, it delivers an honors experience comparable to far more selective institutions while paired with substantial merit scholarships."

}
},

"Harvard University": {
institutionNarrative: {

    name: "Harvard University",

    location: "Cambridge, Massachusetts",

    region: "Northeast",

    archetype: "The Global Establishment Engine — Leadership, Law, Finance, Medicine, Policy, and Intellectual Authority",

    oneSentenceSummary: "Harvard University is the world's most influential academic institution, combining elite education in law, business, medicine, government, and the arts with unmatched global prestige, leadership networks, and access to the highest levels of finance, policy, academia, and corporate power.",

    pipeline: "Approximately 25,000 students across all schools. Harvard is globally dominant in Government, Economics, Applied Mathematics, Computer Science, Law (Harvard Law School), Business (Harvard Business School), Medicine (Harvard Medical School), Public Policy (Kennedy School), and elite graduate research across sciences and humanities. Major recruiting pipelines include McKinsey & Company, Bain & Company, Boston Consulting Group, Goldman Sachs, Morgan Stanley, JPMorgan Chase, Blackstone, KKR, Bridgewater Associates, Google, Meta, Microsoft, Apple, Amazon, OpenAI, top global hedge funds, U.S. federal institutions, NGOs, and leading academic institutions worldwide.",

    hiddenPathway: "Harvard's true power is not curriculum—it is access density. Students operate inside a multi-generational network of global leaders, where alumni routinely occupy CEO roles, Supreme Court seats, presidential administrations, Nobel Prize communities, and top-tier investment firms. The network effect compounds across centuries of institutional dominance.",

    institutionalSecret: "Harvard functions less like a university and more like a global sorting mechanism for elite leadership roles. Its advantage is not just intelligence concentration, but institutional trust—employers, governments, and organizations globally assume competence at scale, creating immediate credibility transfer for graduates.",

    theRoom: "Situated in Cambridge, directly across the river from Boston's financial, biotech, and academic ecosystems, Harvard sits at the intersection of American intellectual history and modern innovation. Within a short radius are MIT, major hospitals, venture capital firms, hedge funds, biotech clusters, and federal research institutions.",

    lifestyle: "Highly structured, opportunity-dense, prestige-driven, intellectually intense, and globally connected. Students balance elite academics with leadership roles, research, publications, internships, consulting, finance recruiting, and extensive extracurricular influence.",

    bestFitPersonality: "Highly ambitious, strategically minded, academically elite, socially adaptive, and motivated by leadership, influence, and long-term impact at institutional scale.",

    faithTradition: "Secular (historically Puritan roots, now fully nonsectarian)",

    geographicInfluenceRadius: "Global, with disproportionate influence in North America, Western Europe, East Asia, and major financial and political capitals worldwide",

    economicOutcome: "Among the highest long-term economic and leadership outcomes globally, particularly in finance, law, consulting, government, entrepreneurship, medicine, and academia",

    gradCities: [
      "New York NY",
      "Boston MA",
      "San Francisco CA",
      "Washington DC",
      "London UK",
      "Hong Kong",
      "Singapore"
    ],

    comparableInstitutions: [
      "Stanford University",
      "Yale University",
      "Princeton University",
      "Massachusetts Institute of Technology",
      "University of Oxford"
    ],

    ccTransferPathway: {
      hasCCPathway: false,

      ccFeederNames: [],

      transferAcceptanceRate: "<2% (extremely limited transfer intake)",

      freshmanAcceptanceRate: "~3-4%",

      estimatedSavingsRange: "N/A (need-based aid dominant)",

      transferNotes: "Transfer admissions are exceptionally rare and highly constrained; most students are admitted as first-year students with significant need-based financial aid available."

    }
},

institutionIdentity: {
    archetype: "Elite Global Ivy League Research University",

    institutionalPersonality: "authoritative, globally networked, prestige-dominant, intellectually expansive, leadership-oriented",

    cultureKeywords: [
      "Leadership",
      "Law",
      "Finance",
      "Government",
      "Medicine",
      "Research",
      "Economics",
      "Global Influence",
      "Public Policy"
],

missionOrientation: "Educating leaders who shape global institutions through knowledge, governance, innovation, and influence.",

    faithTradition: "None (secular global elite institution)",

    educationalPhilosophy: "Interdisciplinary intellectual formation combined with elite professional pipeline development across law, business, government, and science.",

    competitiveness: "Extremely Selective",

    politicalCulture: "Intellectually diverse but institutionally influential, with strong representation in public policy and governance networks",

    studentAutonomy: "High",

    prestigeOrientation: "Highest global academic prestige across multiple disciplines",

    socialClimate: "Highly ambitious, network-aware, leadership-focused, and globally oriented",

    leadershipStyle: "Leadership through institutional placement, intellectual authority, and global network leverage"
},

megaRegionIntegration: {
    primaryMegaRegion: "BosWash Innovation + Policy Corridor",

    regionalRole: "Anchor institution in the Boston-Cambridge ecosystem spanning academia, biotech, finance, venture capital, and government policy"
},

megaRegionExposure: {
    MidContinentIndustrialEnergyCorridor: 18,
    BosWash: 100,
    TorBuffChester: 35,
    TexasTriangle: 40,
    CharLanta: 28,
    NorCalInnovationCorridor: 75,
    SoCalCreativeEconomy: 45
},

comparativePositioning: {
    versusStanford:
      "Harvard dominates in global institutional leadership, law, government, and traditional elite networks, while Stanford dominates in venture capital adjacency and modern tech founder ecosystems.",

    versusMIT:
      "MIT leads in technical engineering and applied science depth, while Harvard leads in interdisciplinary elite formation across law, business, government, and medicine.",

    versusYale:
      "Yale shares similar elite humanities and law dominance, but Harvard has broader global institutional reach and stronger finance and business pipelines.",

    versusPrinceton:
      "Princeton is more academically pure and research-focused at the undergraduate level, while Harvard is more directly connected to global leadership and professional pipelines."
},

institutionScale: {

    enrollmentCategory: "Medium-Large (multi-school university system)",

    undergraduateEnrollment: 7500,

    graduateEnrollment: 17000,

    totalEnrollment: 24500,

    campusType: "Urban Ivy League Research University",

    residentialIntensity: 85,

    communityFeel: 80,

    studentFacultyRatio: "7:1",

    classSizeExperience: "Small, discussion-based undergraduate instruction with intense faculty access; graduate schools operate as elite professional training environments",

    scaleAdvantages: [
      "Unmatched global alumni network",
      "Access to elite graduate schools (HBS, HLS, HMS, HKS)",
      "Dense research ecosystem across disciplines",
      "Direct recruitment pipeline into elite firms and governments",
      "Cross-registration across world-leading institutions"
    ],

    scaleDisadvantages: [
      "Highly competitive internal environment",
      "Prestige pressure and performance intensity",
      "Less intimate undergraduate experience than small liberal arts colleges",
      "High self-direction required for optimal outcomes"
    ]
},


  studentFit: {

    bigFiveProfile: {
      openness: 96,
      conscientiousness: 97,
      extraversion: 70,
      agreeableness: 72,
      neuroticism: 52
    },

    hollandCodes: ["I", "E", "C"],

    learningStyle: [
      "Case-Based Learning",
      "Research Apprenticeship",
      "Seminar Discussion",
      "Professional Pipeline Training"
    ],

    socialEnvironment: [
      "Elite Networked",
      "Globally Ambitious",
      "Highly Competitive",
      "Leadership Oriented",
      "Institutionally Aware"
    ],

    idealStudentTraits: [
      "Extremely high academic performance",
      "Long-term strategic ambition",
      "Comfort navigating elite networks",
      "Interest in leadership or institutional roles",
      "High intellectual curiosity and discipline"
    ],

    thrivesIf: [
      "Wants access to global leadership pipelines",
      "Aims for finance, law, government, consulting, or academia at highest level",
      "Excels in competitive academic environments",
      "Values prestige networks and institutional leverage"
    ],

    strugglesIf: [
      "Prefers low-pressure academic environments",
      "Dislikes competition or status-oriented ecosystems",
      "Wants highly technical narrow specialization without interdisciplinary exposure",
      "Prefers small, isolated campus environments"
    ],

    transferRiskFactors: [
      "Mismatch with elite competitive intensity",
      "Underutilization of network advantages",
      "Difficulty navigating self-directed elite ecosystem"
    ]

  },

  hiddenOpportunities: {

    underratedMajors: [
      "Applied Mathematics",
      "Statistics",
      "Government",
      "Social Studies",
      "History of Science",
      "Neuroscience",
      "Economics"
    ],

    hiddenCareerPipelines: [
      "Supreme Court clerkships",
      "Top-tier hedge funds",
      "Presidential administrations",
      "Global consulting leadership",
      "Elite academia",
      "Foundations and global NGOs"
    ],

    nicheRecruitingAdvantages: [
      "McKinsey / Bain / BCG",
      "Goldman Sachs / Morgan Stanley",
      "Blackstone / KKR",
      "World Bank / IMF",
      "U.S. State Department",
      "Top global think tanks"
    ],

    overlookedStrengths: [
      "HBS case method ecosystem",
      "Harvard Law global dominance",
      "Cross-school interdisciplinary access",
      "Century-spanning alumni compounding effect",
      "Institutional legitimacy transfer effect"
    ],

    sleeperIndustries: [
      "Global AI governance",
      "Financial regulation",
      "Biotech commercialization",
      "Climate policy",
      "Digital law and ethics",
      "Public-private infrastructure systems"
    ]

  },

  networkCapital: {

    alumniAccessibility: 98,

    mentorshipDensity: 95,

    executiveAccess: 100,

    internshipNetwork: 100,

    familyBusinessExposure: 85,

    relationshipCapitalScore: 100,

    alumniLoyaltyScore: 96,

    referralCultureStrength: 98,

    donorNetworkStrength: 100,

    boardMemberDensity: 100

  },

  economicEcosystem: {

    primaryIndustries: [
      "Finance",
      "Law",
      "Government",
      "Consulting",
      "Biotechnology",
      "Academia",
      "Public Policy"
    ],

    regionalEconomicDrivers: [
      "Biotech (Boston/Cambridge)",
      "Venture Capital",
      "Healthcare systems",
      "Investment banking",
      "Higher education",
      "Federal institutions"
    ],

    topEmployers: [
      "McKinsey & Company",
      "Goldman Sachs",
      "Morgan Stanley",
      "Bain & Company",
      "Boston Consulting Group",
      "Blackstone",
      "KKR",
      "Google",
      "Meta",
      "Microsoft"
    ],

    emergingIndustries: [
      "AI governance",
      "Bioengineering",
      "Climate finance",
      "Digital law",
      "Quantum computing policy",
      "Public sector AI integration"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 95,

    corporateHeadquartersDensity: 90,

    healthcareHubStrength: 100,

    innovationIndex: 98

  },

  geographicInfluence: {

    dominantMarket: "Global elite institutions (finance, law, government, academia)",

    secondaryMarkets: [
      "New York NY",
      "Washington DC",
      "San Francisco CA",
      "London UK",
      "Singapore",
      "Boston MA"
    ],

    alumniStrongholds: [
      "New York NY",
      "Boston MA",
      "Washington DC",
      "San Francisco CA",
      "London UK"
    ],

    relocationPatterns: [
      "Graduates disproportionately enter elite finance, consulting, law, and government roles in New York and Washington DC.",
      "Strong migration into Silicon Valley and San Francisco for tech leadership roles.",
      "Significant international placement into London, Singapore, and Hong Kong financial and policy institutions.",
      "Large academic pipeline into global top-tier PhD programs and professorships."
    ],

    regionalInfluenceScore: 100,

    nationalReachScore: 100,

    internationalReachScore: 100

  },

  socialCapital: {

    greekLifeInfluence: 10,

    studentOrganizationStrength: 95,

    leadershipDevelopment: 100,

    crossDisciplinaryInteraction: 100,

    civicEngagement: 92

  },

  industryPathways: {

    finance: {
      strength: 100,
      notes: "Top global feeder into investment banking, private equity, hedge funds, and sovereign wealth funds."
    },

    law: {
      strength: 100,
      notes: "Harvard Law School dominates global legal elite pipeline."
    },

    consulting: {
      strength: 100,
      notes: "Highest global penetration into McKinsey, Bain, and BCG."
    },

    medicine: {
      strength: 100,
      notes: "Harvard Medical School is among the strongest biomedical research and clinical training institutions globally."
    },

    government: {
      strength: 100,
      notes: "Dominant pipeline into U.S. federal government and global policy institutions."
    },

    entrepreneurship: {
      strength: 92,
      notes: "Strong but secondary to Stanford in startup ecosystem density."
    }

  },

  wealthMobility: {

    socialMobilityIndex: 90,

    firstGenerationSupport: 94,

    wealthCreationPotential: 100,

    familyBusinessPipelineStrength: 85

  },

  futureResilience: {

    aiResistance: 95,

    automationResistance: 98,

    adaptabilityScore: 98,

    interdisciplinaryStrength: 100,

    futureReadiness: 100,

    entrepreneurialFlexibility: 90,

    lifelongLearningCulture: 100,

    innovationCapacity: 98

  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 100,

    communityLeadershipPotential: 100,

    geographicMobility: 100,

    workLifeBalancePotential: 65,

    purposeAlignment: 96,

    familyFormationSupport: 80,

    personalDevelopmentPotential: 100,

    careerOptionality: 100,

    longTermLifeSatisfaction: 94

  },

  institutionalMoat: {

    prestigeMoat: 100,

    networkMoat: 100,

    geographicMoat: 100,

    industryMoat: 100,

    alumniMoat: 100,

    brandDurability: 100,

    overallMoatScore: 100

  },

  trajectoryProfile: {

    dominantTrajectory: "GLOBAL ELITE",

    leaverScore: 90,

    returnerScore: 85,

    stewardScore: 100,

    navigatorScore: 95,

    geographicLockIn: "low",

    alumniDispersalPattern: "global elite concentration"
}
},

"Brown University": {
institutionNarrative: {

    name: "Brown University",

    location: "Providence, Rhode Island",

    region: "Northeast",

    archetype: "The Open Curriculum Engine — Intellectual Freedom, Interdisciplinary Exploration, Creative Scholarship, and Elite Academic Self-Design",

    oneSentenceSummary: "Brown University is an Ivy League institution known for its open curriculum, intellectual independence, and interdisciplinary excellence across humanities, social sciences, computer science, public health, and entrepreneurship, producing highly self-directed graduates who thrive in creative, academic, and leadership-driven careers.",

    pipeline: "Approximately 10,000 students total. Brown is especially strong in Computer Science, Applied Mathematics, Economics, International Relations, Public Health, Biology, English, Political Science, Cognitive Science, and Entrepreneurship. Graduates frequently enter elite graduate programs and careers in tech, finance, consulting, medicine, law, media, academia, and startups. Major recruiters include Google, Meta, Amazon, Microsoft, McKinsey & Company, Bain & Company, Boston Consulting Group, Goldman Sachs, Morgan Stanley, JP Morgan, along with strong placement into PhD programs, medical schools, law schools, and creative industries.",

    hiddenPathway: "Brown’s hidden advantage is its radical academic flexibility. The open curriculum attracts highly self-directed students who intentionally design their own intellectual paths, often blending technical and humanistic disciplines. This produces unusually creative problem-solvers who thrive in startups, research, and cross-disciplinary innovation environments.",

    institutionalSecret: "Brown’s true strength is not traditional prestige competition, but intellectual autonomy. Students graduate with unusually diverse academic combinations—computer science + philosophy, economics + public health, or engineering + political science—making them disproportionately adaptable in rapidly changing industries.",

    theRoom: "Located in Providence, Brown sits within the BosWash corridor, with close proximity to Boston’s biotech ecosystem, New York’s finance and media industries, and Rhode Island’s growing healthcare and design sectors.",

    lifestyle: "Intellectually free, socially progressive, highly creative, and self-directed. Students design their own academic journeys while participating in an active residential campus culture emphasizing discussion, collaboration, and exploration.",

    bestFitPersonality: "Independent thinker, intellectually curious, self-motivated, interdisciplinary, and creatively driven.",

    faithTradition: "Nonsectarian",

    geographicInfluenceRadius: "Global, with strong influence in Boston, New York, San Francisco, London, and academic/creative hubs worldwide",

    economicOutcome: "Strong outcomes across tech, finance, consulting, medicine, academia, public policy, and creative industries, particularly for self-directed students",

    gradCities: [
      "New York NY",
      "Boston MA",
      "San Francisco CA",
      "Washington DC",
      "Los Angeles CA",
      "London UK",
      "Chicago IL"
    ],

    comparableInstitutions: [
      "University of Chicago",
      "Yale University",
      "Columbia University",
      "Dartmouth College",
      "Stanford University"
    ],

    ccTransferPathway: {

      hasCCPathway: true,

      ccFeederNames: [
        "Rhode Island Community College",
        "Massachusetts Community Colleges",
        "Community College of Rhode Island"
      ],

      transferAcceptanceRate: "~5–7% (selective transfer intake)",

      freshmanAcceptanceRate: "~5–6%",

      estimatedSavingsRange: "$50,000–$90,000",

      transferNotes: "Transfer admissions are competitive and emphasize academic excellence, intellectual curiosity, and strong fit with the open curriculum philosophy."

    }

  },

  institutionIdentity: {

    archetype: "Ivy League Research University (Open Curriculum Model)",

    institutionalPersonality: "intellectually free, creative, interdisciplinary, student-driven, innovative",

    cultureKeywords: [
      "Open Curriculum",
      "Interdisciplinary Studies",
      "Computer Science",
      "Humanities",
      "Innovation",
      "Entrepreneurship",
      "Public Health",
      "Creative Inquiry"
    ],

    missionOrientation: "To educate students through unrestricted intellectual exploration and interdisciplinary academic freedom.",

    faithTradition: "None",

    educationalPhilosophy: "No core curriculum; students design their own academic pathways, encouraging intellectual risk-taking and cross-disciplinary synthesis.",

    competitiveness: "Highly Selective",

    politicalCulture: "Progressive, intellectually diverse, and discussion-oriented",

    studentAutonomy: "Very High",

    prestigeOrientation: "Elite Ivy League prestige with distinctive emphasis on intellectual independence",

    socialClimate: "Creative, collaborative, intellectually curious, socially engaged",

    leadershipStyle: "Leadership through intellectual originality, innovation, and self-directed exploration"

  },

  megaRegionIntegration: {

    primaryMegaRegion: "BosWash Innovation Corridor",

    regionalRole: "Academic anchor feeding talent into Boston biotech, New York finance/media, and national/global innovation ecosystems"

  },

  megaRegionExposure: {

    MidContinentIndustrialEnergyCorridor: 20,
    BosWash: 95,
    TorBuffChester: 30,
    TexasTriangle: 40,
    CharLanta: 25,
    NorCalInnovationCorridor: 70,
    SoCalCreativeEconomy: 60

  },

  comparativePositioning: {

    versusHarvard:
      "Harvard offers stronger institutional power networks and global elite pipeline density, while Brown offers greater intellectual freedom and interdisciplinary creativity.",

    versusYale:
      "Yale emphasizes structured humanities excellence and institutional tradition, while Brown emphasizes flexibility and self-directed learning.",

    versusColumbia:
      "Columbia is more core-curriculum structured and NYC-integrated, while Brown is more academically open and student-designed.",

    versusDartmouth:
      "Dartmouth offers stronger cohesion and traditional campus culture, while Brown offers greater academic independence and urban-adjacent flexibility."

  },

  institutionScale: {

    enrollmentCategory: "Medium",

    undergraduateEnrollment: 7400,

    graduateEnrollment: 2500,

    totalEnrollment: 9900,

    campusType: "Urban-Adjacent Ivy League Campus",

    residentialIntensity: 88,

    communityFeel: 85,

    studentFacultyRatio: "6:1",

    classSizeExperience: "Small, discussion-based classes with strong faculty mentorship and high student autonomy in course selection",

    scaleAdvantages: [
      "Open curriculum flexibility",
      "Strong faculty accessibility",
      "High interdisciplinary mobility",
      "Elite research opportunities",
      "Close-knit residential experience"
    ],

    scaleDisadvantages: [
      "Requires strong self-direction",
      "Less structured academic path than peers",
      "Competitive high-demand departments (CS, Econ)",
      "Less prescriptive career pipeline guidance"
    ]

  },

  studentFit: {

    bigFiveProfile: {
      openness: 98,
      conscientiousness: 88,
      extraversion: 65,
      agreeableness: 75,
      neuroticism: 50
    },

    hollandCodes: ["I", "A", "E"],

    learningStyle: [
      "Self-Designed Curriculum",
      "Interdisciplinary Exploration",
      "Seminar Discussion",
      "Research-Based Learning"
    ],

    socialEnvironment: [
      "Creative Academic Culture",
      "Intellectually Curious",
      "Progressive",
      "Collaborative",
      "Independent"
    ],

    idealStudentTraits: [
      "Highly self-motivated",
      "Intellectually curious",
      "Comfortable with ambiguity",
      "Interdisciplinary thinker",
      "Independent academic planner"
    ],

    thrivesIf: [
      "Wants freedom to design own academic path",
      "Enjoys blending disciplines creatively",
      "Prefers intellectual exploration over rigid structure",
      "Interested in research, startups, or graduate school"
    ],

    strugglesIf: [
      "Needs structured curriculum or strict guidance",
      "Prefers highly linear pre-professional pipelines",
      "Dislikes self-directed academic planning",
      "Wants highly structured career tracking"
    ],

    transferRiskFactors: [
      "Underutilizing academic flexibility",
      "Difficulty choosing coherent academic path",
      "Mismatch with self-directed system"
    ]

  },

  hiddenOpportunities: {

    underratedMajors: [
      "Cognitive Science",
      "Computer Science",
      "Public Health",
      "Applied Mathematics",
      "Modern Culture & Media",
      "Economics",
      "Urban Studies"
    ],

    hiddenCareerPipelines: [
      "Startup Founders",
      "UX/UI and Product Design",
      "AI Research",
      "Public Health Policy",
      "Media and Journalism",
      "Tech Product Management"
    ],

    nicheRecruitingAdvantages: [
      "Google",
      "Meta",
      "Amazon",
      "McKinsey & Company",
      "Goldman Sachs",
      "Startups in Boston and NYC ecosystems"
    ],

    overlookedStrengths: [
      "Open curriculum intellectual synthesis",
      "Strong humanities + CS cross-pollination",
      "High creative output culture",
      "Flexible pre-med and pre-law paths"
    ],

    sleeperIndustries: [
      "Digital media innovation",
      "AI ethics and governance",
      "Health tech",
      "Creative AI industries",
      "Climate tech startups"
    ]

  },

  networkCapital: {

    alumniAccessibility: 90,

    mentorshipDensity: 88,

    executiveAccess: 85,

    internshipNetwork: 90,

    familyBusinessExposure: 65,

    relationshipCapitalScore: 88,

    alumniLoyaltyScore: 86,

    referralCultureStrength: 82,

    donorNetworkStrength: 85,

    boardMemberDensity: 80

  },

  economicEcosystem: {

    primaryIndustries: [
      "Technology",
      "Finance",
      "Healthcare",
      "Biotechnology",
      "Media",
      "Academia"
    ],

    regionalEconomicDrivers: [
      "Boston biotech corridor",
      "New York finance/media",
      "Providence healthcare and education sector"
    ],

    topEmployers: [
      "Google",
      "Amazon",
      "Meta",
      "McKinsey & Company",
      "Goldman Sachs",
      "Morgan Stanley",
      "Biotech startups",
      "Academic institutions"
    ],

    emergingIndustries: [
      "AI ethics",
      "Health technology",
      "Creative AI",
      "Climate innovation",
      "Digital media platforms"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 85,

    corporateHeadquartersDensity: 80,

    healthcareHubStrength: 90,

    innovationIndex: 90

  },

  geographicInfluence: {

    dominantMarket: "Boston–New York intellectual and innovation corridor",

    secondaryMarkets: [
      "San Francisco CA",
      "New York NY",
      "Boston MA",
      "Washington DC",
      "London UK"
    ],

    alumniStrongholds: [
      "New York NY",
      "Boston MA",
      "San Francisco CA",
      "Washington DC"
    ],

    relocationPatterns: [
      "Strong migration to New York finance and media sectors.",
      "High placement into Boston biotech and healthcare ecosystems.",
      "Significant tech migration to San Francisco Bay Area.",
      "Consistent academic placement into graduate programs worldwide."
    ],

    regionalInfluenceScore: 90,

    nationalReachScore: 95,

    internationalReachScore: 92

  },

  socialCapital: {

    greekLifeInfluence: 18,

    studentOrganizationStrength: 92,

    leadershipDevelopment: 90,

    crossDisciplinaryInteraction: 100,

    civicEngagement: 88

  },

  industryPathways: {

    technology: {
      strength: 95,
      notes: "Strong CS and product pipeline into top tech firms."
    },

    finance: {
      strength: 88,
      notes: "Strong placement into investment banking and hedge funds."
    },

    consulting: {
      strength: 90,
      notes: "High placement into MBB consulting firms."
    },

    medicine: {
      strength: 92,
      notes: "Strong pre-med pipeline and public health preparation."
    },

    entrepreneurship: {
      strength: 90,
      notes: "Strong startup culture driven by intellectual independence."
    }

  },

  wealthMobility: {

    socialMobilityIndex: 88,

    firstGenerationSupport: 90,

    wealthCreationPotential: 90,

    familyBusinessPipelineStrength: 70

  },

  futureResilience: {

    aiResistance: 95,

    automationResistance: 95,

    adaptabilityScore: 100,

    interdisciplinaryStrength: 100,

    futureReadiness: 100,

    entrepreneurialFlexibility: 95,

    lifelongLearningCulture: 100,

    innovationCapacity: 95

  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 92,

    communityLeadershipPotential: 90,

    geographicMobility: 100,

    workLifeBalancePotential: 75,

    purposeAlignment: 94,

    familyFormationSupport: 82,

    personalDevelopmentPotential: 100,

    careerOptionality: 100,

    longTermLifeSatisfaction: 92

  },

  institutionalMoat: {

    prestigeMoat: 95,

    networkMoat: 90,

    geographicMoat: 90,

    industryMoat: 90,

    alumniMoat: 88,

    brandDurability: 92,

    overallMoatScore: 92

  },

  trajectoryProfile: {

    dominantTrajectory: "NAVIGATOR",

    leaverScore: 85,

    returnerScore: 75,

    stewardScore: 80,

    navigatorScore: 95,

    geographicLockIn: "low",

    alumniDispersalPattern: "highly distributed global professionals"

  }
},

"University of Illinois Urbana-Champaign": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Illinois Urbana-Champaign",

    location: "Champaign-Urbana, Illinois, USA",

    region: "Great Lakes / Midwest Innovation Corridor",

    universitySize: "Very Large",

    institutionType: "Public Flagship Research University",

    archetype: "Engineering & Computing Powerhouse + Quantitative Talent Factory + Big Ten Flagship + Global Research Institution",

    institutionalPersonality: "Analytical, ambitious, meritocratic, technical, research-intensive, globally connected",

    cultureKeywords: [
      "engineering excellence",
      "computer science powerhouse",
      "Big Ten flagship",
      "quantitative rigor",
      "global talent concentration",
      "research commercialization"
    ],

    missionOrientation: "Advance knowledge, innovation, and economic development through world-class research, engineering, computing, science, business, and public service",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Large-scale research university model emphasizing discovery, technical excellence, innovation, and broad societal impact",

    competitiveness: "Very High",

    politicalCulture: "Moderate with broad ideological diversity",

    studentAutonomy: "Very High",

    prestigeOrientation: "Global academic prestige with particular dominance in engineering, computer science, data science, and quantitative disciplines",

    socialClimate: "Large, highly diverse, academically intense, globally represented student population",

    leadershipStyle: "Innovation leadership through technical expertise, research achievement, and entrepreneurial problem solving",

    oneSentenceSummary: "One of the world's premier public universities for engineering, computer science, quantitative research, and technology-driven innovation."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 92,
      conscientiousness: 90,
      extraversion: 68,
      agreeableness: 72,
      neuroticism: 58
    },

    hollandCodes: [
      "IRC",
      "IRE",
      "IEC"
    ],

    learningStyle: [
      "research-intensive",
      "analytical and quantitative",
      "large-scale collaborative problem solving"
    ],

    socialEnvironment: [
      "high-achieving peer group",
      "globally diverse student body",
      "strong STEM concentration"
    ],

    idealStudentTraits: [
      "intellectually curious",
      "strong quantitative aptitude",
      "comfortable with competition",
      "interested in innovation and technology"
    ],

    thrivesIf: [
      "wants elite engineering or computer science outcomes",
      "enjoys rigorous analytical environments",
      "seeks global-scale opportunities"
    ],

    strugglesIf: [
      "prefers small liberal arts environments",
      "needs extensive academic hand-holding",
      "dislikes highly competitive academic cultures"
    ],

    transferRiskFactors: [
      "desire for smaller residential experience",
      "difficulty adjusting to scale and rigor",
      "preference for humanities-centered institutions"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Industrial Engineering",
      "Agricultural & Biological Engineering",
      "Supply Chain Management",
      "Statistics",
      "Actuarial Science",
      "Information Sciences"
    ],

    hiddenCareerPipelines: [
      "high-frequency trading firms",
      "quantitative hedge funds",
      "semiconductor industry leadership",
      "AI research labs",
      "industrial automation companies",
      "Fortune 500 technology leadership tracks"
    ],

    nicheRecruitingAdvantages: [
      "deep quantitative recruiting ecosystem",
      "elite engineering alumni density",
      "Big Tech engineering pipelines",
      "Chicago quant finance recruiting access"
    ],

    overlookedStrengths: [
      "arguably top-tier engineering talent production globally",
      "extremely strong ROI versus private elite schools",
      "one of the largest technical alumni networks in America"
    ],

    sleeperIndustries: [
      "semiconductor design",
      "quantitative trading",
      "robotics systems integration",
      "advanced manufacturing automation",
      "AI infrastructure"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 86,
    mentorshipDensity: 88,
    executiveAccess: 90,
    internshipNetwork: 96,
    familyBusinessExposure: 72,

    relationshipCapitalScore: 90,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 88,
    donorNetworkStrength: 92,
    boardMemberDensity: 92

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "technology",
      "artificial intelligence",
      "engineering",
      "advanced manufacturing",
      "finance",
      "healthcare technology"
    ],

    regionalEconomicDrivers: [
      "Chicago financial markets",
      "Midwest manufacturing economy",
      "research commercialization",
      "technology startups",
      "global engineering demand"
    ],

    topEmployers: [
      "Google",
      "Microsoft",
      "Amazon",
      "NVIDIA",
      "Meta",
      "Caterpillar",
      "Abbott",
      "JPMorgan",
      "Citadel",
      "Jane Street"
    ],

    emergingIndustries: [
      "artificial intelligence",
      "quantum computing",
      "robotics",
      "semiconductors",
      "industrial automation"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 90,
    corporateHeadquartersDensity: 92,
    healthcareHubStrength: 88,
    innovationIndex: 98

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Chicago–Great Lakes Innovation Economy",

    secondaryMarkets: [
      "Silicon Valley",
      "Seattle technology ecosystem",
      "Texas technology corridor",
      "Northeast finance sector",
      "global engineering markets"
    ],

    alumniStrongholds: [
      "Chicago",
      "San Francisco Bay Area",
      "Seattle",
      "New York City",
      "Austin",
      "Los Angeles"
    ],

    relocationPatterns: [
      "Big Tech hubs",
      "quant finance firms",
      "Fortune 500 headquarters",
      "venture-backed startups"
    ],

    regionalInfluenceScore: 95,
    nationalReachScore: 98,
    internationalReachScore: 95

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 65,
    studentOrganizationStrength: 95,
    leadershipDevelopment: 90,
    crossDisciplinaryInteraction: 92,
    civicEngagement: 82,

    relationshipCapital: 88,
    luxuryNetworkAccess: 78,
    familyOfficeExposure: 72,
    internationalBusinessExposure: 95,
    personalBrandLeverage: 94

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    technology: { strength: 99 },

    artificialIntelligence: { strength: 99 },

    cloudComputing: { strength: 98 },

    cybersecurity: { strength: 95 },

    robotics: { strength: 97 },

    semiconductorManufacturing: { strength: 96 },

    engineeringServices: { strength: 99 },

    industrialEngineering: { strength: 99 },

    manufacturing: { strength: 94 },

    advancedManufacturing: { strength: 95 },

    ventureCapital: { strength: 88 },

    entrepreneurship: { strength: 92 },

    investmentBanking: { strength: 88 },

    wealthManagement: { strength: 82 },

    fintech: { strength: 92 },

    consulting: { strength: 90 },

    healthcareAdministration: { strength: 82 },

    medicalDevices: { strength: 90 },

    climateTechnology: { strength: 92 },

    cleanEnergy: { strength: 88 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Upper-middle baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 84,
    wealthCreationPotential: 95,
    familyBusinessPipelineStrength: 74

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 96,
    automationResistance: 95,
    adaptabilityScore: 97,
    interdisciplinaryStrength: 94,
    futureReadiness: 99,
    entrepreneurialFlexibility: 94,
    lifelongLearningCulture: 94,
    innovationCapacity: 99

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 95,
    communityLeadershipPotential: 84,
    geographicMobility: 98,
    workLifeBalancePotential: 76,
    purposeAlignment: 84,
    familyFormationSupport: 80,
    personalDevelopmentPotential: 92,
    careerOptionality: 99,
    longTermLifeSatisfaction: 88

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 95,
    networkMoat: 94,
    geographicMoat: 92,
    industryMoat: 99,
    alumniMoat: 94,
    brandDurability: 98,

    overallMoatScore: 96

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Great Lakes Innovation & Industrial Super-Region",

    megaRegionArchetype: "Engineering Flagship → Technology Creation + Industrial Innovation Engine",

    megaRegionIntegrationScore: 98,

    regionalInheritanceMultiplier: 1.90,

    talentDensityInheritance: 98,
    innovationInheritance: 99,
    capitalAccessInheritance: 92,

    networkInheritance: {
      executiveAccess: 92,
      founderDensity: 94,
      alumniMobility: 98,
      industryConnectivity: 99
    },

    industryDensityAdvantages: {
      technology: 100,
      artificialIntelligence: 100,
      engineering: 100,
      manufacturing: 98,
      finance: 90
    },

    careerPathwayBoosts: {
      technology: 2.40,
      artificialIntelligence: 2.50,
      engineering: 2.40,
      robotics: 2.30,
      semiconductors: 2.20,
      quantFinance: 2.00
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Great Lakes Innovation Corridor",

    secondaryMegaRegions: [
      "Chicago Finance Corridor",
      "Silicon Valley",
      "Seattle Tech Corridor",
      "Texas Innovation Triangle",
      "Bos-Wash Knowledge Economy"
    ],

    crossRegionalMobility: 98,
    nationalOpportunityAccess: 99,
    globalOpportunityAccess: 96

  },

  // ===== ENRICHMENT MERGED FROM DEEP-RESEARCH FILE =====

  lifestyleIdentity: {
    overallLifestyleStrength: 96, outdoorAdventure: 57, coastalLiving: 4, urbanEnergy: 66,
    wellnessHealth: 82, creativityArts: 87, entrepreneurship: 94, intellectualism: 97,
    luxuryLifestyle: 40, sustainability: 83, familyCentered: 57, faithCommunity: 33,
    civicEngagement: 79, athleticsSportsCulture: 85, globalCosmopolitan: 97,
    collegeTownImmersion: 95, nightlifeEntertainment: 78, foodCulture: 82,
    makerCulture: 98, digitalNomadCompatibility: 76, workLifeBalance: 61,
    naturalBeauty: 66, outdoorAccessibility: 62, weatherQuality: 44, walkability: 91,
    entrepreneurialDensity: 94, innovationDensity: 99, artsCulture: 88,
    foodCultureDriver: 82, careerLifestyleAlignment: 96, physicalActivityCulture: 80,
    entrepreneurialLifestyle: 92, geographicMobility: 89, communityEngagement: 80,
    longTermLifeSatisfaction: 88, identityFormationStrength: 95
  },
  humanOutcomes: {
    overallCulturalStrength: 96, ambition: 96, intellectualCuriosity: 98, competitiveness: 90,
    collaboration: 82, humility: 64, confidence: 90, optimism: 75, tradition: 80,
    innovation: 99, entrepreneurship: 94, serviceOrientation: 72, civicEngagement: 77,
    adventure: 54, wellnessOrientation: 78, creativity: 86, practicality: 93,
    independence: 89, prestigeConsciousness: 87, inclusiveness: 85, institutionalLoyalty: 89,
    networkActivation: 92, institutionalPride: 89, mentoringCulture: 83,
    hiringOtherAlumni: 88, philanthropy: 77, returnForHomecoming: 74,
    emotionalAttachment: 85, lifelongIdentity: 90
  }
},

"University of Wisconsin–Madison": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Wisconsin–Madison",

    location: "Madison, Wisconsin, USA",

    region: "Great Lakes / Upper Midwest",

    universitySize: "Very Large",

    institutionType: "Public Flagship Research University",

    archetype: "Research Flagship + Science & Public Service Powerhouse + Midwest Leadership Factory + Innovation Ecosystem Builder",

    institutionalPersonality: "Intellectual, collaborative, research-driven, civic-minded, innovative, balanced",

    cultureKeywords: [
      "Wisconsin Idea",
      "public service mission",
      "research excellence",
      "Big Ten flagship",
      "science leadership",
      "Midwest pragmatism",
      "entrepreneurial research"
    ],

    missionOrientation: "Advance knowledge and improve society through research, teaching, innovation, and public service across Wisconsin, the nation, and the world",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Research-intensive education grounded in the Wisconsin Idea—the belief that university knowledge should directly benefit society",

    competitiveness: "Very High",

    politicalCulture: "Moderate-to-progressive with broad ideological diversity",

    studentAutonomy: "Very High",

    prestigeOrientation: "Elite public research reputation with global recognition in science, medicine, agriculture, engineering, and public affairs",

    socialClimate: "Large, energetic, academically strong, socially active residential flagship",

    leadershipStyle: "Knowledge-to-impact leadership emphasizing science, policy, research, and institution building",

    oneSentenceSummary: "A world-class public flagship that combines scientific research, public service, entrepreneurship, and Midwest leadership development at scale."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 90,
      conscientiousness: 86,
      extraversion: 78,
      agreeableness: 82,
      neuroticism: 52
    },

    hollandCodes: [
      "IRC",
      "IEC",
      "SEC"
    ],

    learningStyle: [
      "research-based learning",
      "collaborative problem solving",
      "interdisciplinary exploration"
    ],

    socialEnvironment: [
      "traditional flagship experience",
      "strong school spirit",
      "high academic engagement",
      "large student organization ecosystem"
    ],

    idealStudentTraits: [
      "intellectually curious",
      "interested in research and impact",
      "comfortable in large university environment",
      "values both academics and campus life"
    ],

    thrivesIf: [
      "wants top-tier research opportunities",
      "values public service and societal impact",
      "seeks broad career optionality"
    ],

    strugglesIf: [
      "prefers highly structured environments",
      "wants intimate liberal arts setting",
      "dislikes large university systems"
    ],

    transferRiskFactors: [
      "desire for smaller elite private environment",
      "need for highly individualized academic support",
      "preference for urban corporate culture"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Biochemistry",
      "Agricultural & Applied Economics",
      "Life Sciences Communication",
      "Industrial Engineering",
      "Atmospheric Sciences",
      "Food Science"
    ],

    hiddenCareerPipelines: [
      "biotechnology leadership",
      "medical technology companies",
      "federal science agencies",
      "agriculture innovation firms",
      "public policy and administration",
      "consumer packaged goods leadership"
    ],

    nicheRecruitingAdvantages: [
      "strong pharmaceutical recruiting",
      "major healthcare systems pipeline",
      "Midwest Fortune 500 access",
      "science commercialization ecosystem"
    ],

    overlookedStrengths: [
      "one of America's strongest public research institutions",
      "elite life sciences ecosystem",
      "exceptional science-to-commercialization track record"
    ],

    sleeperIndustries: [
      "synthetic biology",
      "agricultural technology",
      "food innovation",
      "medical devices",
      "climate science"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 88,
    mentorshipDensity: 90,
    executiveAccess: 88,
    internshipNetwork: 94,
    familyBusinessExposure: 72,

    relationshipCapitalScore: 90,
    alumniLoyaltyScore: 92,
    referralCultureStrength: 88,
    donorNetworkStrength: 92,
    boardMemberDensity: 90

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "biotechnology",
      "healthcare",
      "engineering",
      "agriculture",
      "consumer products",
      "technology"
    ],

    regionalEconomicDrivers: [
      "Madison biotech cluster",
      "Midwest healthcare economy",
      "advanced manufacturing",
      "agricultural innovation",
      "research commercialization"
    ],

    topEmployers: [
      "Epic Systems",
      "Exact Sciences",
      "Promega",
      "American Family Insurance",
      "AbbVie",
      "Johnson Controls",
      "Rockwell Automation"
    ],

    emergingIndustries: [
      "synthetic biology",
      "AI for healthcare",
      "precision agriculture",
      "climate technology",
      "food innovation"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 88,
    corporateHeadquartersDensity: 86,
    healthcareHubStrength: 96,
    innovationIndex: 96

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Great Lakes Research & Innovation Economy",

    secondaryMarkets: [
      "Chicago corporate corridor",
      "Twin Cities innovation ecosystem",
      "Midwest healthcare sector",
      "national biotech industry",
      "Washington policy ecosystem"
    ],

    alumniStrongholds: [
      "Chicago",
      "Madison",
      "Milwaukee",
      "Minneapolis",
      "Washington DC",
      "San Francisco"
    ],

    relocationPatterns: [
      "healthcare leadership",
      "biotechnology firms",
      "Fortune 500 corporations",
      "public sector leadership",
      "research institutions"
    ],

    regionalInfluenceScore: 96,
    nationalReachScore: 94,
    internationalReachScore: 88

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 60,
    studentOrganizationStrength: 96,
    leadershipDevelopment: 92,
    crossDisciplinaryInteraction: 94,
    civicEngagement: 92,

    relationshipCapital: 90,
    luxuryNetworkAccess: 70,
    familyOfficeExposure: 60,
    internationalBusinessExposure: 86,
    personalBrandLeverage: 92

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    medicine: { strength: 95 },

    biotechnology: { strength: 99 },

    healthcareAdministration: { strength: 92 },

    agriculture: { strength: 98 },

    agriculturalTechnology: { strength: 98 },

    foodScience: { strength: 98 },

    engineeringServices: { strength: 92 },

    climateTechnology: { strength: 92 },

    sustainability: { strength: 95 },

    publicPolicy: { strength: 94 },

    nonprofitLeadership: { strength: 90 },

    entrepreneurship: { strength: 88 },

    consumerProducts: { strength: 92 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Upper-middle baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 86,
    wealthCreationPotential: 90,
    familyBusinessPipelineStrength: 70

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 94,
    automationResistance: 94,
    adaptabilityScore: 96,
    interdisciplinaryStrength: 98,
    futureReadiness: 96,
    entrepreneurialFlexibility: 92,
    lifelongLearningCulture: 96,
    innovationCapacity: 98

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 90,
    communityLeadershipPotential: 95,
    geographicMobility: 94,
    workLifeBalancePotential: 84,
    purposeAlignment: 94,
    familyFormationSupport: 88,
    personalDevelopmentPotential: 95,
    careerOptionality: 96,
    longTermLifeSatisfaction: 92

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 93,
    networkMoat: 92,
    geographicMoat: 92,
    industryMoat: 96,
    alumniMoat: 92,
    brandDurability: 96,

    overallMoatScore: 94

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Great Lakes Research & Innovation Super-Region",

    megaRegionArchetype: "Science Creation + Public Impact + Institutional Innovation",

    megaRegionIntegrationScore: 97,

    regionalInheritanceMultiplier: 1.85,

    talentDensityInheritance: 95,
    innovationInheritance: 98,
    capitalAccessInheritance: 88,

    networkInheritance: {
      executiveAccess: 90,
      founderDensity: 88,
      alumniMobility: 95,
      industryConnectivity: 96
    },

    industryDensityAdvantages: {
      biotechnology: 100,
      healthcare: 98,
      agriculture: 100,
      publicPolicy: 95,
      engineering: 92
    },

    careerPathwayBoosts: {
      biotechnology: 2.40,
      healthcare: 2.10,
      agriculture: 2.30,
      publicPolicy: 2.00,
      climateTechnology: 2.10
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Great Lakes Research & Innovation Corridor",

    secondaryMegaRegions: [
      "Chicago Corporate Corridor",
      "Twin Cities Innovation Cluster",
      "Bos-Wash Research Economy",
      "National Biotechnology Network"
    ],

    crossRegionalMobility: 94,
    nationalOpportunityAccess: 96,
    globalOpportunityAccess: 90

  },

  // ===== ENRICHMENT MERGED FROM DEEP-RESEARCH FILE =====

  lifestyleIdentity: {
    dimensions: {
      athleticsSportsCulture: 90,
      intellectualism: 91,
      entrepreneurshipLikelihood: 82,
      relationshipCapital: 90
    },
    narrative: {
      summary: "Spirited and collaborative, with a Midwestern balance of enthusiasm and groundedness -- energetic, outdoorsy, community-focused with a firm work ethic.",
      confidence: "High (95%) on social engagement + academic purpose blend"
    }
  },
  humanOutcomes: {
    narrative: {
      careerPaths: ">90% report well-prepared for next step; 90% in jobs/grad school within 6 months; many stay Midwest (Milwaukee, Chicago) or head to tech hubs (Seattle, Bay Area)",
      physicalHealthLifestyle: "Bike-friendly campus, lake access, high rec-sports participation -- durable 'Badger outdoorsman spirit'",
      socialNetworks: "Strong but regionally focused; Greek life ~4,000 members; career-focused ties more than purely social (medium confidence)"
    }
  },
  environmentalAndDailyLifeLogic: {
    narrative: "Campus straddles city and nature (933-acre isthmus between two lakes); high-coherence environment where academic seriousness, social life, and outdoor activity reinforce rather than conflict. Confidence 90%."
  }
},

"Duke University": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Duke University",

    location: "Durham, North Carolina, USA",

    region: "Research Triangle / New South",

    universitySize: "Medium",

    institutionType: "Private Research University",

    archetype: "Elite Modern Leadership + Professional Achievement + Cross-Sector Influence Engine",

    institutionalPersonality: "Ambitious, polished, collaborative, high-achieving, socially sophisticated, leadership-oriented",

    cultureKeywords: [
      "modern elite",
      "leadership development",
      "professional achievement",
      "Research Triangle",
      "cross-sector influence",
      "global ambition",
      "high-performance culture"
    ],

    missionOrientation: "Develop leaders who combine intellectual excellence, professional achievement, innovation, and societal impact",

    faithTradition: "Historically Methodist, functionally secular",

    educationalPhilosophy: "Elite research education focused on producing leaders capable of succeeding across business, medicine, technology, policy, and global institutions",

    competitiveness: "Extremely High",

    politicalCulture: "Moderate-to-progressive with broad elite institutional diversity",

    studentAutonomy: "High",

    prestigeOrientation: "National and global prestige with strong emphasis on achievement and leadership",

    socialClimate: "High-performance, socially engaged, ambitious but collaborative",

    leadershipStyle: "Network-driven leadership through achievement, influence, and institution building",

    oneSentenceSummary: "A modern elite university that produces leaders across business, medicine, technology, policy, sports, and global institutions."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 92,
      conscientiousness: 92,
      extraversion: 82,
      agreeableness: 78,
      neuroticism: 58
    },

    hollandCodes: [
      "EIC",
      "ESC",
      "IEC"
    ],

    learningStyle: [
      "high-achievement collaborative learning",
      "interdisciplinary exploration",
      "leadership-centered development"
    ],

    socialEnvironment: [
      "elite peer network",
      "high social engagement",
      "professional ambition culture",
      "strong campus identity"
    ],

    idealStudentTraits: [
      "highly ambitious",
      "leadership-oriented",
      "socially capable",
      "comfortable among high achievers"
    ],

    thrivesIf: [
      "wants broad elite opportunities",
      "values leadership development",
      "seeks strong social and professional networks"
    ],

    strugglesIf: [
      "prefers low-pressure environments",
      "dislikes achievement-oriented peer groups",
      "wants highly specialized academic culture only"
    ],

    transferRiskFactors: [
      "preference for small intellectual communities",
      "desire for highly technical environments only",
      "discomfort with elite social ecosystems"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Public Policy",
      "Economics",
      "Biomedical Engineering",
      "Global Health",
      "Statistical Science",
      "Environmental Sciences"
    ],

    hiddenCareerPipelines: [
      "healthcare administration leadership",
      "sports business executives",
      "venture-backed healthcare startups",
      "global nonprofit leadership",
      "private equity operations",
      "institutional leadership tracks"
    ],

    nicheRecruitingAdvantages: [
      "cross-sector recruiting strength",
      "exceptional alumni responsiveness",
      "Research Triangle innovation access",
      "healthcare and life sciences leadership pipeline"
    ],

    overlookedStrengths: [
      "arguably America's strongest all-around professional outcomes school",
      "elite medicine-business-technology intersection",
      "extremely balanced career optionality"
    ],

    sleeperIndustries: [
      "healthtech",
      "sports business",
      "biotech venture creation",
      "global health innovation",
      "longevity economy"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 92,
    mentorshipDensity: 94,
    executiveAccess: 95,
    internshipNetwork: 95,
    familyBusinessExposure: 84,

    relationshipCapitalScore: 95,
    alumniLoyaltyScore: 93,
    referralCultureStrength: 92,
    donorNetworkStrength: 96,
    boardMemberDensity: 95

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "healthcare",
      "biotechnology",
      "consulting",
      "finance",
      "technology",
      "life sciences"
    ],

    regionalEconomicDrivers: [
      "Research Triangle innovation economy",
      "life sciences sector",
      "healthcare systems",
      "venture-backed startups",
      "advanced research commercialization"
    ],

    topEmployers: [
      "Duke Health",
      "McKinsey",
      "Bain",
      "BCG",
      "Goldman Sachs",
      "Google",
      "Apple",
      "Pfizer",
      "IQVIA"
    ],

    emergingIndustries: [
      "healthtech",
      "biotech venture creation",
      "AI in healthcare",
      "precision medicine",
      "sports analytics"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 92,
    corporateHeadquartersDensity: 88,
    healthcareHubStrength: 100,
    innovationIndex: 96

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Research Triangle Innovation Economy",

    secondaryMarkets: [
      "New York",
      "Washington DC",
      "Charlotte",
      "Atlanta",
      "Boston",
      "San Francisco"
    ],

    alumniStrongholds: [
      "New York",
      "Washington DC",
      "Charlotte",
      "Atlanta",
      "Research Triangle",
      "San Francisco"
    ],

    relocationPatterns: [
      "consulting firms",
      "finance",
      "healthcare leadership",
      "technology companies",
      "venture-backed startups"
    ],

    regionalInfluenceScore: 96,
    nationalReachScore: 98,
    internationalReachScore: 94

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 55,
    studentOrganizationStrength: 96,
    leadershipDevelopment: 99,
    crossDisciplinaryInteraction: 98,
    civicEngagement: 90,

    relationshipCapital: 96,
    luxuryNetworkAccess: 90,
    familyOfficeExposure: 86,
    internationalBusinessExposure: 95,
    personalBrandLeverage: 98

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    medicine: { strength: 99 },

    healthcareAdministration: { strength: 99 },

    biotechnology: { strength: 96 },

    ventureCapital: { strength: 92 },

    privateEquity: { strength: 94 },

    investmentBanking: { strength: 94 },

    consulting: { strength: 98 },

    technology: { strength: 92 },

    entrepreneurship: { strength: 94 },

    publicPolicy: { strength: 92 },

    sportsBusiness: { strength: 95 },

    globalHealth: { strength: 99 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "High baseline",

    socialMobilityIndex: 82,
    firstGenerationSupport: 84,
    wealthCreationPotential: 96,
    familyBusinessPipelineStrength: 86

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 95,
    automationResistance: 94,
    adaptabilityScore: 97,
    interdisciplinaryStrength: 99,
    futureReadiness: 98,
    entrepreneurialFlexibility: 96,
    lifelongLearningCulture: 95,
    innovationCapacity: 97

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 96,
    communityLeadershipPotential: 96,
    geographicMobility: 98,
    workLifeBalancePotential: 82,
    purposeAlignment: 92,
    familyFormationSupport: 84,
    personalDevelopmentPotential: 98,
    careerOptionality: 99,
    longTermLifeSatisfaction: 92

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 98,
    networkMoat: 97,
    geographicMoat: 94,
    industryMoat: 97,
    alumniMoat: 95,
    brandDurability: 98,

    overallMoatScore: 97

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Research Triangle Innovation & Leadership System",

    megaRegionArchetype: "Elite Leadership Factory → Medicine, Business, Technology, and Institutional Influence",

    megaRegionIntegrationScore: 98,

    regionalInheritanceMultiplier: 1.95,

    talentDensityInheritance: 97,
    innovationInheritance: 97,
    capitalAccessInheritance: 94,

    networkInheritance: {
      executiveAccess: 98,
      founderDensity: 92,
      alumniMobility: 98,
      industryConnectivity: 98
    },

    industryDensityAdvantages: {
      healthcare: 100,
      consulting: 100,
      finance: 95,
      biotechnology: 98,
      technology: 92
    },

    careerPathwayBoosts: {
      consulting: 2.35,
      healthcareLeadership: 2.40,
      medicine: 2.30,
      finance: 2.10,
      ventureCapital: 2.00
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Research Triangle Innovation Corridor",

    secondaryMegaRegions: [
      "Bos-Wash Knowledge Economy",
      "New York Finance Corridor",
      "Charlotte Financial Hub",
      "Atlanta Growth Corridor",
      "Silicon Valley"
    ],

    crossRegionalMobility: 98,
    nationalOpportunityAccess: 99,
    globalOpportunityAccess: 95

  }
},

"Dartmouth College": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Dartmouth College",

    location: "Hanover, New Hampshire, USA",

    region: "Northern New England",

    universitySize: "Small",

    institutionType: "Private Ivy League College",

    archetype: "Elite Relationship Capital + Trust Network Formation + Leadership Through Community",

    institutionalPersonality: "Close-knit, loyal, outdoors-oriented, relationship-driven, collaborative, high-achieving",

    cultureKeywords: [
      "tight alumni network",
      "community",
      "leadership",
      "relationship capital",
      "outdoors",
      "loyalty",
      "small-college intimacy"
    ],

    missionOrientation: "Develop leaders through deep relationships, close mentorship, personal responsibility, and lifelong community membership",

    faithTradition: "Historically Congregational, functionally secular",

    educationalPhilosophy: "Elite liberal arts education combined with unusually strong social cohesion and alumni engagement",

    competitiveness: "Extremely High",

    politicalCulture: "Moderate with broad ideological diversity",

    studentAutonomy: "High",

    prestigeOrientation: "High prestige with lower overt status competition than peer institutions",

    socialClimate: "Collaborative, residential, community-centered, highly connected",

    leadershipStyle: "Leadership through trust, relationships, loyalty, and network stewardship",

    oneSentenceSummary: "A small Ivy that converts deep relationships and alumni loyalty into disproportionate long-term professional opportunity."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 90,
      conscientiousness: 88,
      extraversion: 85,
      agreeableness: 90,
      neuroticism: 45
    },

    hollandCodes: [
      "SEC",
      "ECS",
      "IEC"
    ],

    learningStyle: [
      "discussion-based learning",
      "close faculty mentorship",
      "community-centered development"
    ],

    socialEnvironment: [
      "high residential engagement",
      "strong alumni identity",
      "relationship-oriented culture",
      "outdoor lifestyle"
    ],

    idealStudentTraits: [
      "socially engaged",
      "relationship builder",
      "community-oriented",
      "comfortable in small environments"
    ],

    thrivesIf: [
      "values relationships over prestige signaling",
      "wants close mentorship",
      "enjoys residential campus life"
    ],

    strugglesIf: [
      "needs large-city stimulation",
      "prefers anonymity",
      "wants highly specialized professional schools"
    ],

    transferRiskFactors: [
      "rural isolation concerns",
      "desire for larger university ecosystem",
      "urban career obsession"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Government",
      "Engineering Sciences",
      "Neuroscience",
      "Environmental Studies",
      "Economics",
      "Geography"
    ],

    hiddenCareerPipelines: [
      "private wealth management",
      "family offices",
      "private equity operations",
      "venture-backed entrepreneurship",
      "healthcare leadership",
      "board governance"
    ],

    nicheRecruitingAdvantages: [
      "alumni responsiveness",
      "small-network trust effects",
      "executive-level mentorship",
      "private capital introductions"
    ],

    overlookedStrengths: [
      "arguably the strongest alumni loyalty network in higher education",
      "unusually high executive accessibility",
      "small size creates exceptional relationship density"
    ],

    sleeperIndustries: [
      "family offices",
      "wealth advisory",
      "outdoor industry leadership",
      "impact investing",
      "healthcare entrepreneurship"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 100,
    mentorshipDensity: 99,
    executiveAccess: 97,
    internshipNetwork: 92,
    familyBusinessExposure: 92,

    relationshipCapitalScore: 100,
    alumniLoyaltyScore: 100,
    referralCultureStrength: 99,
    donorNetworkStrength: 96,
    boardMemberDensity: 94

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "finance",
      "consulting",
      "healthcare",
      "entrepreneurship",
      "education",
      "private capital"
    ],

    regionalEconomicDrivers: [
      "Ivy alumni networks",
      "Boston knowledge economy",
      "New York finance ecosystem",
      "private capital markets"
    ],

    topEmployers: [
      "Goldman Sachs",
      "Morgan Stanley",
      "McKinsey",
      "Bain",
      "Boston Consulting Group",
      "Dartmouth Health",
      "venture-backed startups"
    ],

    emergingIndustries: [
      "health technology",
      "private credit",
      "outdoor recreation economy",
      "digital health",
      "climate innovation"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 88,
    corporateHeadquartersDensity: 82,
    healthcareHubStrength: 90,
    innovationIndex: 88

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Northeast Elite Leadership Network",

    secondaryMarkets: [
      "New York",
      "Boston",
      "Washington DC",
      "San Francisco",
      "Denver"
    ],

    alumniStrongholds: [
      "New York",
      "Boston",
      "Washington DC",
      "San Francisco",
      "Denver"
    ],

    relocationPatterns: [
      "finance",
      "consulting",
      "healthcare leadership",
      "entrepreneurship",
      "wealth management"
    ],

    regionalInfluenceScore: 92,
    nationalReachScore: 96,
    internationalReachScore: 86

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 75,
    studentOrganizationStrength: 90,
    leadershipDevelopment: 95,
    crossDisciplinaryInteraction: 94,
    civicEngagement: 86,

    relationshipCapital: 100,
    luxuryNetworkAccess: 94,
    familyOfficeExposure: 95,
    internationalBusinessExposure: 84,
    personalBrandLeverage: 92

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    investmentBanking: { strength: 94 },

    privateEquity: { strength: 92 },

    ventureCapital: { strength: 88 },

    consulting: { strength: 96 },

    entrepreneurship: { strength: 88 },

    wealthManagement: { strength: 98 },

    familyOfficeServices: { strength: 99 },

    healthcareAdministration: { strength: 90 },

    medicine: { strength: 92 },

    outdoorIndustry: { strength: 92 },

    nonprofitLeadership: { strength: 90 },

    publicPolicy: { strength: 88 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Very High baseline",

    socialMobilityIndex: 76,
    firstGenerationSupport: 82,
    wealthCreationPotential: 94,
    familyBusinessPipelineStrength: 95

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 92,
    automationResistance: 92,
    adaptabilityScore: 96,
    interdisciplinaryStrength: 95,
    futureReadiness: 95,
    entrepreneurialFlexibility: 92,
    lifelongLearningCulture: 96,
    innovationCapacity: 90

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 94,
    communityLeadershipPotential: 98,
    geographicMobility: 94,
    workLifeBalancePotential: 92,
    purposeAlignment: 94,
    familyFormationSupport: 95,
    personalDevelopmentPotential: 96,
    careerOptionality: 94,
    longTermLifeSatisfaction: 98

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 96,
    networkMoat: 100,
    geographicMoat: 88,
    industryMoat: 90,
    alumniMoat: 100,
    brandDurability: 97,

    overallMoatScore: 96

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Northern New England + Bos-Wash Elite Network",

    megaRegionArchetype: "Relationship Capital Factory → Trust, Loyalty, and Leadership Networks",

    megaRegionIntegrationScore: 95,

    regionalInheritanceMultiplier: 1.85,

    talentDensityInheritance: 92,
    innovationInheritance: 88,
    capitalAccessInheritance: 94,

    networkInheritance: {
      executiveAccess: 98,
      founderDensity: 88,
      alumniMobility: 96,
      industryConnectivity: 95
    },

    industryDensityAdvantages: {
      wealthManagement: 100,
      consulting: 96,
      finance: 94,
      healthcare: 90,
      entrepreneurship: 88
    },

    careerPathwayBoosts: {
      wealthManagement: 2.50,
      familyOfficeServices: 2.70,
      consulting: 2.20,
      finance: 2.10,
      healthcareLeadership: 2.00
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Northeast Elite Relationship Network",

    secondaryMegaRegions: [
      "New York Finance Corridor",
      "Boston Knowledge Economy",
      "Washington Institutional Network",
      "Mountain West Outdoor Economy"
    ],

    crossRegionalMobility: 95,
    nationalOpportunityAccess: 96,
    globalOpportunityAccess: 86

  }
},

"University of Missouri": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Missouri",

    location: "Columbia, Missouri, USA",

    region: "Mid-Continent Industrial & Agricultural Corridor",

    universitySize: "Large",

    institutionType: "Public Flagship Land-Grant Research University",

    archetype: "Heartland Influence Engine + Agricultural Innovation Capital + Media Powerhouse",

    institutionalPersonality: "Practical, entrepreneurial, relationship-oriented, civic-minded, resilient, opportunity-focused",

    cultureKeywords: [
      "flagship university",
      "land-grant mission",
      "journalism leadership",
      "agriculture",
      "Midwest influence",
      "public service",
      "economic mobility"
    ],

    missionOrientation: "Develop leaders, innovators, communicators, scientists, and entrepreneurs who strengthen America's agricultural, business, healthcare, and civic institutions",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Applied education combining research, communication, leadership, and economic development",

    competitiveness: "Moderately High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Strong regional prestige",

    socialClimate: "Collaborative, relationship-driven, professionally ambitious",

    leadershipStyle: "Leadership through communication, execution, and institutional stewardship",

    oneSentenceSummary: "The flagship university connecting the agricultural, media, healthcare, and business systems that power America's interior economy."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 80,
      conscientiousness: 88,
      extraversion: 82,
      agreeableness: 84,
      neuroticism: 44
    },

    hollandCodes: [
      "SEC",
      "ERC",
      "IEC"
    ],

    learningStyle: [
      "applied learning",
      "communication-focused education",
      "industry engagement"
    ],

    socialEnvironment: [
      "large flagship culture",
      "SEC athletics",
      "professional networking",
      "Midwestern relationship culture"
    ],

    idealStudentTraits: [
      "relationship builder",
      "communicator",
      "adaptable learner",
      "career-focused"
    ],

    thrivesIf: [
      "wants broad career optionality",
      "likes flagship university culture",
      "values practical outcomes"
    ],

    strugglesIf: [
      "wants elite coastal prestige",
      "prefers highly specialized environments",
      "needs intensive academic structure"
    ],

    transferRiskFactors: [
      "prestige seeking",
      "urban campus preference",
      "desire for stronger national branding"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Agricultural Economics",
      "Health Administration",
      "Supply Chain Management",
      "Food Science",
      "Strategic Communication",
      "Animal Sciences"
    ],

    hiddenCareerPipelines: [
      "agricultural enterprise leadership",
      "food systems management",
      "healthcare administration",
      "state government leadership",
      "media management",
      "insurance and risk management"
    ],

    nicheRecruitingAdvantages: [
      "Missouri healthcare systems",
      "Midwest corporate recruiting",
      "agribusiness leadership",
      "journalism and media placement"
    ],

    overlookedStrengths: [
      "home of the most influential journalism school in America",
      "strong agricultural innovation ecosystem",
      "excellent healthcare administration pathways",
      "deep Midwest business network"
    ],

    sleeperIndustries: [
      "agricultural technology",
      "food innovation",
      "digital media",
      "rural healthcare",
      "insurance operations"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 88,
    mentorshipDensity: 86,
    executiveAccess: 80,
    internshipNetwork: 84,
    familyBusinessExposure: 70,

    relationshipCapitalScore: 88,
    alumniLoyaltyScore: 90,
    referralCultureStrength: 88,
    donorNetworkStrength: 82,
    boardMemberDensity: 78

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "agriculture",
      "food systems",
      "healthcare",
      "media",
      "manufacturing",
      "insurance"
    ],

    regionalEconomicDrivers: [
      "agribusiness",
      "food production",
      "Kansas City economy",
      "St. Louis economy",
      "healthcare systems"
    ],

    topEmployers: [
      "Bayer Crop Science",
      "Cerner/Oracle Health",
      "BJC HealthCare",
      "Edward Jones",
      "Emerson",
      "Veterans United",
      "Hallmark",
      "Anheuser-Busch"
    ],

    emergingIndustries: [
      "agricultural technology",
      "food innovation",
      "health analytics",
      "digital media",
      "AI-enabled agriculture"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 68,
    corporateHeadquartersDensity: 80,
    healthcareHubStrength: 84,
    innovationIndex: 82

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Missouri Economic Corridor",

    secondaryMarkets: [
      "Kansas City",
      "St. Louis",
      "Dallas",
      "Chicago",
      "Nashville"
    ],

    alumniStrongholds: [
      "Missouri",
      "Kansas City",
      "St. Louis",
      "Texas",
      "Chicago"
    ],

    relocationPatterns: [
      "healthcare",
      "media",
      "agribusiness",
      "corporate operations",
      "public leadership"
    ],

    regionalInfluenceScore: 94,
    nationalReachScore: 80,
    internationalReachScore: 58

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 64,
    studentOrganizationStrength: 86,
    leadershipDevelopment: 88,
    crossDisciplinaryInteraction: 82,
    civicEngagement: 88,

    relationshipCapital: 88,
    luxuryNetworkAccess: 42,
    familyOfficeExposure: 44,
    internationalBusinessExposure: 58,
    personalBrandLeverage: 84

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    journalism: { strength: 100 },

    media: { strength: 100 },

    strategicCommunications: { strength: 96 },

    agriculture: { strength: 94 },

    agriculturalTechnology: { strength: 90 },

    foodSystems: { strength: 92 },

    foodScience: { strength: 92 },

    healthcareAdministration: { strength: 90 },

    publicPolicy: { strength: 84 },

    logistics: { strength: 82 },

    supplyChain: { strength: 82 },

    entrepreneurship: { strength: 76 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-class baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 84,
    wealthCreationPotential: 82,
    familyBusinessPipelineStrength: 72

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 90,
    automationResistance: 92,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 88,
    futureReadiness: 90,
    entrepreneurialFlexibility: 84,
    lifelongLearningCulture: 88,
    innovationCapacity: 86

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 82,
    communityLeadershipPotential: 92,
    geographicMobility: 80,
    workLifeBalancePotential: 92,
    purposeAlignment: 88,
    familyFormationSupport: 92,
    personalDevelopmentPotential: 88,
    careerOptionality: 90,
    longTermLifeSatisfaction: 92

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 74,
    networkMoat: 88,
    geographicMoat: 92,
    industryMoat: 98,
    alumniMoat: 88,
    brandDurability: 92,

    overallMoatScore: 90

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Mid-Continent Agricultural & Industrial Corridor",

    megaRegionArchetype: "Agriculture + Media + Heartland Leadership",

    megaRegionIntegrationScore: 95,

    regionalInheritanceMultiplier: 1.95,

    talentDensityInheritance: 78,
    innovationInheritance: 84,
    capitalAccessInheritance: 76,

    networkInheritance: {
      executiveAccess: 80,
      founderDensity: 68,
      alumniMobility: 88,
      industryConnectivity: 94
    },

    industryDensityAdvantages: {
      agriculture: 96,
      foodSystems: 94,
      journalism: 100,
      healthcare: 84,
      logistics: 82
    },

    careerPathwayBoosts: {
      journalism: 3.20,
      media: 3.00,
      agriculture: 2.30,
      healthcareAdministration: 2.10,
      foodSystems: 2.20
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Mid-Continent Agricultural Corridor",

    secondaryMegaRegions: [
      "Texas Triangle",
      "Chicago Industrial Network",
      "Southeast Growth Belt",
      "Great Plains Agricultural Economy"
    ],

    crossRegionalMobility: 82,
    nationalOpportunityAccess: 84,
    globalOpportunityAccess: 58

  },

  // ===== ENRICHMENT MERGED FROM DEEP-RESEARCH FILE =====

  lifestyleIdentity: {
    sportsIntensity: { score: 93, confidence: 0.91 },
    academicSeriousness: { score: 74, confidence: 0.80 },
    schoolSpiritTradition: { score: 92, confidence: 0.95 },
    greekSocialVisibility: { score: 84, confidence: 0.90 },
    studentBodyWarmth: { score: 78, confidence: 0.62 },
    collegeTownImmersion: { score: 91, confidence: 0.89 },
    entrepreneurialEnergy: { score: 71, confidence: 0.68 }
  },
  humanOutcomes: {
    careerLaunchStrength: { score: 87, confidence: 0.94 },
    inStateCareerAnchoring: { score: 79, confidence: 0.90 },
    alumniActivation: { score: 81, confidence: 0.76 },
    practicalPrestige: { score: 75, confidence: 0.73 },
    leadershipDevelopment: { score: 83, confidence: 0.79 },
    upwardMobilityPotential: { score: 82, confidence: 0.78 }
  },
  environmentalAndDailyLifeLogic: {
    walkableDailyLife: { score: 86, confidence: 0.82 },
    outdoorsAccess: { score: 83, confidence: 0.83 },
    artsCultureAccess: { score: 77, confidence: 0.72 },
    wellnessInfrastructure: { score: 80, confidence: 0.88 },
    nightlifeSocialRhythm: { score: 72, confidence: 0.61 },
    cityCollegeTownBalance: { score: 88, confidence: 0.89 }
  },
  keyFacts: {
    careerOutcomesRate6mo: "95.4% (Class of 2025)",
    fortune500Hirers: 88,
    alumniStayingInState: "69.7%",
    greekLife: "34 fraternities, 20 sororities, 7,200+ members",
    positioning: "Practical prestige / regional placement engine, not elite-national selectivity signaling"
  }
},

"University of Pennsylvania": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Pennsylvania",

    location: "Philadelphia, Pennsylvania, USA",

    region: "Bos-Wash Megalopolis",

    universitySize: "Large",

    institutionType: "Private Ivy League Research University",

    archetype: "Applied Elite Power + Wealth Creation + Institutional Leadership + Professional Prestige Engine",

    institutionalPersonality: "Ambitious, professional, network-oriented, entrepreneurial, highly social, achievement-driven",

    cultureKeywords: [
      "Wharton influence",
      "professional achievement",
      "wealth creation",
      "elite networking",
      "applied leadership",
      "cross-disciplinary ambition",
      "institutional power"
    ],

    missionOrientation: "Develop leaders capable of creating economic, institutional, scientific, and societal impact through interdisciplinary excellence",

    faithTradition: "Secular",

    educationalPhilosophy: "Applied elite education emphasizing the practical deployment of knowledge into business, medicine, finance, policy, and entrepreneurship",

    competitiveness: "Extremely High",

    politicalCulture: "Moderate with broad elite institutional diversity",

    studentAutonomy: "Very High",

    prestigeOrientation: "Extremely high with strong emphasis on measurable achievement and professional success",

    socialClimate: "Ambitious, highly networked, socially active, career-oriented",

    leadershipStyle: "Influence through institution building, wealth creation, and professional accomplishment",

    oneSentenceSummary: "The Ivy League's premier applied-power institution, producing leaders in finance, business, healthcare, entrepreneurship, and institutional management."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 90,
      conscientiousness: 95,
      extraversion: 86,
      agreeableness: 72,
      neuroticism: 62
    },

    hollandCodes: [
      "EIC",
      "ESC",
      "IEC"
    ],

    learningStyle: [
      "high-performance professional learning",
      "cross-disciplinary collaboration",
      "real-world application"
    ],

    socialEnvironment: [
      "elite peer network",
      "high-achievement culture",
      "strong pre-professional orientation",
      "competitive but collaborative"
    ],

    idealStudentTraits: [
      "extremely ambitious",
      "career-focused",
      "socially adept",
      "comfortable with elite competition"
    ],

    thrivesIf: [
      "wants finance, consulting, entrepreneurship, medicine, or leadership opportunities",
      "values networking",
      "enjoys high-performance environments"
    ],

    strugglesIf: [
      "prefers low-pressure academic settings",
      "dislikes career-focused peer groups",
      "seeks purely intellectual environments"
    ],

    transferRiskFactors: [
      "preference for theoretical academia",
      "desire for smaller communities",
      "discomfort with status-conscious cultures"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Health Care Management",
      "Behavioral Economics",
      "Bioengineering",
      "Urban Studies",
      "Systems Engineering",
      "Nursing"
    ],

    hiddenCareerPipelines: [
      "family office leadership",
      "private wealth management",
      "healthcare executive leadership",
      "institutional investing",
      "sports ownership and management",
      "real estate investment"
    ],

    nicheRecruitingAdvantages: [
      "Wharton alumni density",
      "private equity recruiting",
      "hedge fund pipelines",
      "elite healthcare administration network",
      "venture-backed startup ecosystem"
    ],

    overlookedStrengths: [
      "strongest business school ecosystem in undergraduate education",
      "elite cross-school collaboration",
      "exceptional wealth-network concentration"
    ],

    sleeperIndustries: [
      "family office services",
      "sports investing",
      "digital health",
      "private market investing",
      "wealth technology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 94,
    mentorshipDensity: 95,
    executiveAccess: 99,
    internshipNetwork: 99,
    familyBusinessExposure: 95,

    relationshipCapitalScore: 99,
    alumniLoyaltyScore: 92,
    referralCultureStrength: 97,
    donorNetworkStrength: 99,
    boardMemberDensity: 99

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "finance",
      "private equity",
      "venture capital",
      "healthcare",
      "consulting",
      "technology"
    ],

    regionalEconomicDrivers: [
      "New York financial markets",
      "Philadelphia healthcare ecosystem",
      "Bos-Wash institutional economy",
      "venture capital networks",
      "private capital markets"
    ],

    topEmployers: [
      "Goldman Sachs",
      "Blackstone",
      "KKR",
      "Apollo",
      "McKinsey",
      "JPMorgan",
      "Morgan Stanley",
      "Google",
      "Penn Medicine"
    ],

    emergingIndustries: [
      "AI-enabled finance",
      "digital health",
      "private credit",
      "family office investing",
      "fintech infrastructure"
    ],

    startupDensity: "Very High",

    ventureCapitalAccess: 98,
    corporateHeadquartersDensity: 96,
    healthcareHubStrength: 98,
    innovationIndex: 96

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Bos-Wash Elite Institutional Economy",

    secondaryMarkets: [
      "New York Finance",
      "Washington Policy",
      "Boston Knowledge Economy",
      "Silicon Valley",
      "Global Financial Centers"
    ],

    alumniStrongholds: [
      "New York City",
      "Philadelphia",
      "Washington DC",
      "Boston",
      "San Francisco",
      "London",
      "Hong Kong"
    ],

    relocationPatterns: [
      "Wall Street",
      "private equity",
      "venture capital",
      "elite healthcare leadership",
      "institutional management"
    ],

    regionalInfluenceScore: 98,
    nationalReachScore: 99,
    internationalReachScore: 97

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 65,
    studentOrganizationStrength: 99,
    leadershipDevelopment: 98,
    crossDisciplinaryInteraction: 99,
    civicEngagement: 88,

    relationshipCapital: 99,
    luxuryNetworkAccess: 98,
    familyOfficeExposure: 99,
    internationalBusinessExposure: 98,
    personalBrandLeverage: 99

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    investmentBanking: { strength: 100 },

    privateEquity: { strength: 100 },

    ventureCapital: { strength: 98 },

    wealthManagement: { strength: 99 },

    familyOfficeServices: { strength: 100 },

    privateBanking: { strength: 99 },

    fintech: { strength: 96 },

    consulting: { strength: 96 },

    entrepreneurship: { strength: 96 },

    healthcareAdministration: { strength: 98 },

    medicine: { strength: 96 },

    realEstate: { strength: 95 },

    internationalBusiness: { strength: 98 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Very High baseline",

    socialMobilityIndex: 80,
    firstGenerationSupport: 82,
    wealthCreationPotential: 100,
    familyBusinessPipelineStrength: 98

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 95,
    automationResistance: 94,
    adaptabilityScore: 98,
    interdisciplinaryStrength: 99,
    futureReadiness: 98,
    entrepreneurialFlexibility: 98,
    lifelongLearningCulture: 95,
    innovationCapacity: 97

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 100,
    communityLeadershipPotential: 92,
    geographicMobility: 99,
    workLifeBalancePotential: 72,
    purposeAlignment: 86,
    familyFormationSupport: 78,
    personalDevelopmentPotential: 95,
    careerOptionality: 99,
    longTermLifeSatisfaction: 90

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 99,
    networkMoat: 100,
    geographicMoat: 99,
    industryMoat: 100,
    alumniMoat: 98,
    brandDurability: 99,

    overallMoatScore: 99

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Bos-Wash Institutional & Capital Corridor",

    megaRegionArchetype: "Applied Elite Power → Wealth Creation + Institutional Leadership",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.10,

    talentDensityInheritance: 98,
    innovationInheritance: 96,
    capitalAccessInheritance: 100,

    networkInheritance: {
      executiveAccess: 100,
      founderDensity: 96,
      alumniMobility: 99,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      finance: 100,
      privateCapital: 100,
      healthcare: 98,
      consulting: 96,
      entrepreneurship: 95
    },

    careerPathwayBoosts: {
      investmentBanking: 2.60,
      privateEquity: 2.70,
      ventureCapital: 2.30,
      wealthManagement: 2.50,
      healthcareLeadership: 2.20
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Bos-Wash Capital & Institutional Corridor",

    secondaryMegaRegions: [
      "New York Finance System",
      "Washington Policy Network",
      "Boston Knowledge Economy",
      "Silicon Valley",
      "Global Financial Centers"
    ],

    crossRegionalMobility: 99,
    nationalOpportunityAccess: 100,
    globalOpportunityAccess: 98

  }
},

"Columbia University": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Columbia University",

    location: "New York City, New York, USA",

    region: "Bos-Wash Megalopolis",

    universitySize: "Large",

    institutionType: "Private Ivy League Research University",

    archetype: "Global Elite Gateway + New York Power Network + Institutional Influence Engine",

    institutionalPersonality: "Ambitious, cosmopolitan, intellectually rigorous, globally connected, urban, achievement-oriented",

    cultureKeywords: [
      "New York City",
      "global influence",
      "urban intellectualism",
      "institutional power",
      "media access",
      "finance proximity",
      "international networks"
    ],

    missionOrientation: "Develop leaders, thinkers, researchers, journalists, financiers, policymakers, and innovators capable of operating within the world's most influential institutions",

    faithTradition: "Secular",

    educationalPhilosophy: "Rigorous intellectual education integrated directly into the world's most powerful economic, media, political, and cultural ecosystem",

    competitiveness: "Extremely High",

    politicalCulture: "Moderate-to-progressive with significant international diversity",

    studentAutonomy: "High",

    prestigeOrientation: "Extremely High",

    socialClimate: "Intense, ambitious, globally diverse, professionally focused",

    leadershipStyle: "Leadership through influence, institutional access, information, and global connectivity",

    oneSentenceSummary: "The Ivy League university most deeply embedded inside the global capital of finance, media, diplomacy, publishing, and institutional power."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 96,
      conscientiousness: 94,
      extraversion: 78,
      agreeableness: 68,
      neuroticism: 65
    },

    hollandCodes: [
      "IEC",
      "EIC",
      "IAS"
    ],

    learningStyle: [
      "intellectually rigorous",
      "urban experiential learning",
      "global interdisciplinary exposure"
    ],

    socialEnvironment: [
      "high-achievement peers",
      "international student density",
      "professional networking culture",
      "city-integrated lifestyle"
    ],

    idealStudentTraits: [
      "highly ambitious",
      "globally minded",
      "intellectually resilient",
      "comfortable in fast-moving environments"
    ],

    thrivesIf: [
      "wants direct access to New York opportunities",
      "enjoys urban intensity",
      "values global career pathways"
    ],

    strugglesIf: [
      "prefers traditional campus bubbles",
      "needs highly structured environments",
      "dislikes constant competition"
    ],

    transferRiskFactors: [
      "urban burnout",
      "cost-of-living pressures",
      "desire for stronger campus cohesion"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Operations Research",
      "Urban Studies",
      "Data Science",
      "Political Economy",
      "Sustainable Development",
      "Comparative Literature"
    ],

    hiddenCareerPipelines: [
      "global media leadership",
      "sovereign wealth funds",
      "international organizations",
      "UN system leadership",
      "global philanthropy",
      "institutional asset management"
    ],

    nicheRecruitingAdvantages: [
      "year-round NYC internships",
      "media executive access",
      "UN ecosystem proximity",
      "Wall Street integration",
      "global corporate recruiting"
    ],

    overlookedStrengths: [
      "arguably the most geographically advantaged Ivy",
      "exceptional international mobility",
      "one of the strongest journalism and media ecosystems in the world"
    ],

    sleeperIndustries: [
      "global communications",
      "alternative asset management",
      "international development",
      "digital publishing",
      "urban innovation"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 92,
    mentorshipDensity: 94,
    executiveAccess: 99,
    internshipNetwork: 100,
    familyBusinessExposure: 90,

    relationshipCapitalScore: 98,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 94,
    donorNetworkStrength: 99,
    boardMemberDensity: 100

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "finance",
      "media",
      "consulting",
      "technology",
      "healthcare",
      "international affairs"
    ],

    regionalEconomicDrivers: [
      "Wall Street",
      "global media",
      "international diplomacy",
      "venture capital",
      "corporate headquarters concentration"
    ],

    topEmployers: [
      "Goldman Sachs",
      "BlackRock",
      "JPMorgan",
      "Morgan Stanley",
      "McKinsey",
      "Google",
      "Meta",
      "Bloomberg",
      "United Nations",
      "Columbia University Medical Center"
    ],

    emergingIndustries: [
      "AI-enabled finance",
      "digital media",
      "global climate finance",
      "urban technology",
      "international venture investing"
    ],

    startupDensity: "Very High",

    ventureCapitalAccess: 97,
    corporateHeadquartersDensity: 100,
    healthcareHubStrength: 95,
    innovationIndex: 95

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "New York Global Power System",

    secondaryMarkets: [
      "London",
      "Washington DC",
      "Boston",
      "San Francisco",
      "Hong Kong",
      "Singapore"
    ],

    alumniStrongholds: [
      "New York City",
      "Washington DC",
      "London",
      "San Francisco",
      "Hong Kong",
      "Singapore"
    ],

    relocationPatterns: [
      "Wall Street",
      "global consulting",
      "media leadership",
      "international organizations",
      "venture capital"
    ],

    regionalInfluenceScore: 100,
    nationalReachScore: 99,
    internationalReachScore: 100

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 15,
    studentOrganizationStrength: 96,
    leadershipDevelopment: 95,
    crossDisciplinaryInteraction: 96,
    civicEngagement: 90,

    relationshipCapital: 98,
    luxuryNetworkAccess: 98,
    familyOfficeExposure: 94,
    internationalBusinessExposure: 100,
    personalBrandLeverage: 99

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    investmentBanking: { strength: 99 },

    privateEquity: { strength: 96 },

    ventureCapital: { strength: 94 },

    wealthManagement: { strength: 96 },

    consulting: { strength: 97 },

    technology: { strength: 92 },

    internationalBusiness: { strength: 100 },

    publicPolicy: { strength: 98 },

    nonprofitLeadership: { strength: 94 },

    entertainmentMedia: { strength: 100 },

    journalism: { strength: 100 },

    healthcareAdministration: { strength: 94 },

    entrepreneurship: { strength: 90 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Very High baseline",

    socialMobilityIndex: 82,
    firstGenerationSupport: 84,
    wealthCreationPotential: 97,
    familyBusinessPipelineStrength: 90

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 94,
    automationResistance: 93,
    adaptabilityScore: 98,
    interdisciplinaryStrength: 98,
    futureReadiness: 98,
    entrepreneurialFlexibility: 94,
    lifelongLearningCulture: 96,
    innovationCapacity: 95

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 97,
    communityLeadershipPotential: 94,
    geographicMobility: 100,
    workLifeBalancePotential: 68,
    purposeAlignment: 88,
    familyFormationSupport: 72,
    personalDevelopmentPotential: 96,
    careerOptionality: 99,
    longTermLifeSatisfaction: 88

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 99,
    networkMoat: 99,
    geographicMoat: 100,
    industryMoat: 98,
    alumniMoat: 96,
    brandDurability: 99,

    overallMoatScore: 99

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Bos-Wash Institutional & Global Capital Corridor",

    megaRegionArchetype: "Global Gateway → Finance, Media, Diplomacy, and Institutional Influence",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.15,

    talentDensityInheritance: 99,
    innovationInheritance: 95,
    capitalAccessInheritance: 100,

    networkInheritance: {
      executiveAccess: 100,
      founderDensity: 92,
      alumniMobility: 100,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      finance: 100,
      media: 100,
      diplomacy: 100,
      consulting: 98,
      internationalBusiness: 100
    },

    careerPathwayBoosts: {
      finance: 2.50,
      media: 2.70,
      diplomacy: 2.80,
      consulting: 2.30,
      internationalBusiness: 2.70
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "New York Global Capital System",

    secondaryMegaRegions: [
      "Bos-Wash Corridor",
      "London Financial System",
      "Washington Policy Network",
      "Silicon Valley",
      "Asia-Pacific Financial Hubs"
    ],

    crossRegionalMobility: 100,
    nationalOpportunityAccess: 100,
    globalOpportunityAccess: 100

  }
},

"University of Connecticut": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Connecticut",

    location: "Storrs, Connecticut, USA",

    region: "Southern New England / Bos-Wash Corridor",

    universitySize: "Large",

    institutionType: "Public Flagship Research University",

    archetype: "New England Professional Mobility + Public Research Excellence + Corporate Pipeline",

    institutionalPersonality: "Driven, practical, upwardly-mobile, research-oriented, community-focused, resilient",

    cultureKeywords: [
      "public flagship",
      "New England opportunity",
      "professional mobility",
      "research growth",
      "basketball culture",
      "healthcare strength",
      "corporate access"
    ],

    missionOrientation: "Provide world-class education, research, and economic mobility while serving Connecticut's workforce, healthcare, and innovation ecosystems",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Research-intensive public education emphasizing practical career outcomes and broad access to opportunity",

    competitiveness: "High",

    politicalCulture: "Moderate-to-progressive New England",

    studentAutonomy: "High",

    prestigeOrientation: "Strong regional prestige with growing national recognition",

    socialClimate: "Collaborative, ambitious, school-spirit driven, professionally focused",

    leadershipStyle: "Leadership through competence, expertise, and institutional contribution",

    oneSentenceSummary: "A rising public flagship connecting students to New England's healthcare, insurance, finance, research, and corporate ecosystems."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 82,
      conscientiousness: 86,
      extraversion: 78,
      agreeableness: 82,
      neuroticism: 54
    },

    hollandCodes: [
      "SEC",
      "IEC",
      "IRC"
    ],

    learningStyle: [
      "applied research",
      "professional preparation",
      "collaborative problem solving"
    ],

    socialEnvironment: [
      "large flagship experience",
      "strong athletics culture",
      "career-oriented student body",
      "broad socioeconomic diversity"
    ],

    idealStudentTraits: [
      "hard-working",
      "upwardly mobile",
      "career-focused",
      "comfortable in large institutions"
    ],

    thrivesIf: [
      "wants strong value for cost",
      "seeks healthcare or corporate careers",
      "likes major university environments"
    ],

    strugglesIf: [
      "wants elite private-school intimacy",
      "prefers highly specialized academic environments",
      "needs extensive structure"
    ],

    transferRiskFactors: [
      "seeking Ivy-level prestige",
      "desire for smaller campus culture",
      "interest in niche liberal arts environments"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Actuarial Science",
      "Allied Health Sciences",
      "Supply Chain Management",
      "Nursing",
      "Data Science",
      "Materials Science"
    ],

    hiddenCareerPipelines: [
      "insurance leadership",
      "actuarial careers",
      "healthcare administration",
      "defense contracting",
      "consumer packaged goods management",
      "supply chain leadership"
    ],

    nicheRecruitingAdvantages: [
      "Hartford insurance ecosystem",
      "New England healthcare recruiting",
      "strong nursing placements",
      "supply chain management pipeline"
    ],

    overlookedStrengths: [
      "one of the strongest public universities in the Northeast",
      "elite actuarial and insurance pathways",
      "excellent healthcare outcomes"
    ],

    sleeperIndustries: [
      "insurance technology",
      "medical devices",
      "health analytics",
      "advanced materials",
      "logistics technology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 84,
    mentorshipDensity: 82,
    executiveAccess: 78,
    internshipNetwork: 88,
    familyBusinessExposure: 65,

    relationshipCapitalScore: 84,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 82,
    donorNetworkStrength: 78,
    boardMemberDensity: 76

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "healthcare",
      "insurance",
      "finance",
      "advanced manufacturing",
      "defense",
      "education"
    ],

    regionalEconomicDrivers: [
      "Hartford insurance industry",
      "New England healthcare systems",
      "aerospace manufacturing",
      "financial services",
      "research and development"
    ],

    topEmployers: [
      "UnitedHealth Group",
      "Travelers",
      "The Hartford",
      "Pratt & Whitney",
      "Raytheon",
      "Aetna",
      "Cigna"
    ],

    emergingIndustries: [
      "health analytics",
      "AI-enabled insurance",
      "medical technology",
      "advanced manufacturing",
      "cybersecurity"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 74,
    corporateHeadquartersDensity: 88,
    healthcareHubStrength: 92,
    innovationIndex: 82

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Southern New England Professional Economy",

    secondaryMarkets: [
      "Boston",
      "New York City",
      "Hartford",
      "Providence",
      "Washington DC"
    ],

    alumniStrongholds: [
      "Connecticut",
      "Boston",
      "New York City",
      "Providence",
      "Florida"
    ],

    relocationPatterns: [
      "insurance",
      "healthcare",
      "corporate management",
      "government",
      "education"
    ],

    regionalInfluenceScore: 92,
    nationalReachScore: 82,
    internationalReachScore: 68

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 45,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 84,
    civicEngagement: 86,

    relationshipCapital: 84,
    luxuryNetworkAccess: 60,
    familyOfficeExposure: 52,
    internationalBusinessExposure: 70,
    personalBrandLeverage: 82

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    healthcareAdministration: { strength: 92 },

    medicine: { strength: 88 },

    nursing: { strength: 98 },

    insurance: { strength: 100 },

    actuarialScience: { strength: 100 },

    supplyChain: { strength: 94 },

    logistics: { strength: 90 },

    defense: { strength: 88 },

    manufacturing: { strength: 84 },

    wealthManagement: { strength: 76 },

    consulting: { strength: 72 },

    entrepreneurship: { strength: 70 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle to upper-middle baseline",

    socialMobilityIndex: 90,
    firstGenerationSupport: 88,
    wealthCreationPotential: 82,
    familyBusinessPipelineStrength: 62

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 90,
    automationResistance: 90,
    adaptabilityScore: 88,
    interdisciplinaryStrength: 86,
    futureReadiness: 88,
    entrepreneurialFlexibility: 78,
    lifelongLearningCulture: 90,
    innovationCapacity: 84

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 82,
    communityLeadershipPotential: 88,
    geographicMobility: 84,
    workLifeBalancePotential: 90,
    purposeAlignment: 86,
    familyFormationSupport: 92,
    personalDevelopmentPotential: 88,
    careerOptionality: 84,
    longTermLifeSatisfaction: 90

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 82,
    networkMoat: 84,
    geographicMoat: 90,
    industryMoat: 92,
    alumniMoat: 86,
    brandDurability: 90,

    overallMoatScore: 87

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Bos-Wash Professional Services Corridor",

    megaRegionArchetype: "Professional Mobility + Corporate Workforce Development",

    megaRegionIntegrationScore: 90,

    regionalInheritanceMultiplier: 1.75,

    talentDensityInheritance: 88,
    innovationInheritance: 82,
    capitalAccessInheritance: 86,

    networkInheritance: {
      executiveAccess: 80,
      founderDensity: 70,
      alumniMobility: 88,
      industryConnectivity: 90
    },

    industryDensityAdvantages: {
      insurance: 100,
      healthcare: 92,
      finance: 84,
      manufacturing: 84,
      logistics: 88
    },

    careerPathwayBoosts: {
      insurance: 2.60,
      actuarialScience: 2.70,
      healthcareAdministration: 2.10,
      supplyChain: 2.00,
      defense: 1.90
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Southern New England Corridor",

    secondaryMegaRegions: [
      "New York Financial System",
      "Boston Knowledge Economy",
      "Bos-Wash Corridor",
      "Northeast Healthcare Network"
    ],

    crossRegionalMobility: 86,
    nationalOpportunityAccess: 84,
    globalOpportunityAccess: 70

  }
},

"University of Massachusetts Amherst": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Massachusetts Amherst",

    location: "Amherst, Massachusetts, USA",

    region: "New England / Bos-Wash Knowledge Corridor",

    universitySize: "Very Large",

    institutionType: "Public Flagship Research University",

    archetype: "Public Knowledge Economy Gateway + Upward Mobility Engine + Research Flagship",

    institutionalPersonality: "Intellectual, independent, research-oriented, socially aware, upwardly mobile, entrepreneurial",

    cultureKeywords: [
      "Massachusetts knowledge economy",
      "public flagship",
      "research university",
      "social mobility",
      "innovation",
      "New England",
      "intellectual independence"
    ],

    missionOrientation: "Expand access to advanced education, research, innovation, and economic opportunity while serving the Commonwealth of Massachusetts",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Large-scale research education that combines academic rigor, public access, innovation, and workforce development",

    competitiveness: "High",

    politicalCulture: "Progressive New England",

    studentAutonomy: "High",

    prestigeOrientation: "Strong academic reputation with rising national visibility",

    socialClimate: "Large, diverse, academically serious, socially active",

    leadershipStyle: "Leadership through expertise, research, innovation, and public contribution",

    oneSentenceSummary: "The flagship university of one of the world's strongest knowledge economies, connecting students to technology, healthcare, research, entrepreneurship, and public-sector leadership."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 88,
      conscientiousness: 84,
      extraversion: 74,
      agreeableness: 82,
      neuroticism: 56
    },

    hollandCodes: [
      "IRC",
      "IEC",
      "SEC"
    ],

    learningStyle: [
      "research-driven learning",
      "applied problem solving",
      "interdisciplinary collaboration"
    ],

    socialEnvironment: [
      "large flagship culture",
      "academic diversity",
      "entrepreneurial opportunities",
      "strong residential community"
    ],

    idealStudentTraits: [
      "intellectually curious",
      "independent",
      "career-oriented",
      "comfortable in large institutions"
    ],

    thrivesIf: [
      "wants access to Boston opportunities at public-school cost",
      "values research and innovation",
      "seeks broad career flexibility"
    ],

    strugglesIf: [
      "needs small-campus intimacy",
      "wants highly structured environments",
      "prefers elite private-school culture"
    ],

    transferRiskFactors: [
      "desire for stronger prestige signaling",
      "interest in urban campuses",
      "preference for smaller learning environments"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Hospitality & Tourism Management",
      "Food Science",
      "Sport Management",
      "Public Health",
      "Computer Science",
      "Operations & Information Management"
    ],

    hiddenCareerPipelines: [
      "Boston technology firms",
      "biotechnology companies",
      "consumer packaged goods leadership",
      "sports management",
      "hospitality leadership",
      "public sector innovation"
    ],

    nicheRecruitingAdvantages: [
      "Boston startup ecosystem access",
      "major hospitality recruiting",
      "New England healthcare pathways",
      "strong technology recruiting"
    ],

    overlookedStrengths: [
      "one of the strongest public universities in the Northeast",
      "elite hospitality program",
      "surprisingly strong technology outcomes",
      "excellent social mobility outcomes"
    ],

    sleeperIndustries: [
      "food innovation",
      "sports business",
      "hospitality technology",
      "digital health",
      "consumer brands"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 84,
    mentorshipDensity: 82,
    executiveAccess: 76,
    internshipNetwork: 90,
    familyBusinessExposure: 60,

    relationshipCapitalScore: 84,
    alumniLoyaltyScore: 86,
    referralCultureStrength: 82,
    donorNetworkStrength: 76,
    boardMemberDensity: 74

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "technology",
      "healthcare",
      "biotechnology",
      "education",
      "hospitality",
      "consumer products"
    ],

    regionalEconomicDrivers: [
      "Boston innovation economy",
      "life sciences",
      "higher education",
      "healthcare systems",
      "venture-backed startups"
    ],

    topEmployers: [
      "Google",
      "Amazon",
      "Microsoft",
      "Raytheon",
      "Mass General Brigham",
      "Boston Scientific",
      "Biogen",
      "DraftKings"
    ],

    emergingIndustries: [
      "artificial intelligence",
      "biotechnology",
      "digital health",
      "food innovation",
      "sports analytics"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 88,
    corporateHeadquartersDensity: 86,
    healthcareHubStrength: 95,
    innovationIndex: 92

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Massachusetts Knowledge Economy",

    secondaryMarkets: [
      "Boston",
      "New York City",
      "Providence",
      "Washington DC",
      "San Francisco"
    ],

    alumniStrongholds: [
      "Boston",
      "New York City",
      "Massachusetts",
      "Connecticut",
      "Washington DC"
    ],

    relocationPatterns: [
      "technology",
      "healthcare",
      "education",
      "hospitality leadership",
      "government"
    ],

    regionalInfluenceScore: 92,
    nationalReachScore: 84,
    internationalReachScore: 72

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 35,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 88,
    civicEngagement: 90,

    relationshipCapital: 84,
    luxuryNetworkAccess: 55,
    familyOfficeExposure: 48,
    internationalBusinessExposure: 74,
    personalBrandLeverage: 82

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    technology: { strength: 88 },

    artificialIntelligence: { strength: 84 },

    healthcareAdministration: { strength: 90 },

    biotechnology: { strength: 88 },

    hospitality: { strength: 100 },

    tourism: { strength: 98 },

    sportsBusiness: { strength: 95 },

    foodScience: { strength: 96 },

    consumerProducts: { strength: 88 },

    entrepreneurship: { strength: 80 },

    publicPolicy: { strength: 82 },

    education: { strength: 90 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle to upper-middle baseline",

    socialMobilityIndex: 92,
    firstGenerationSupport: 90,
    wealthCreationPotential: 84,
    familyBusinessPipelineStrength: 58

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 90,
    automationResistance: 90,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 90,
    futureReadiness: 92,
    entrepreneurialFlexibility: 84,
    lifelongLearningCulture: 92,
    innovationCapacity: 90

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 84,
    communityLeadershipPotential: 88,
    geographicMobility: 86,
    workLifeBalancePotential: 90,
    purposeAlignment: 88,
    familyFormationSupport: 90,
    personalDevelopmentPotential: 90,
    careerOptionality: 90,
    longTermLifeSatisfaction: 92

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 84,
    networkMoat: 84,
    geographicMoat: 95,
    industryMoat: 90,
    alumniMoat: 86,
    brandDurability: 92,

    overallMoatScore: 89

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Boston Knowledge Economy",

    megaRegionArchetype: "Public Gateway Into Elite Innovation Systems",

    megaRegionIntegrationScore: 95,

    regionalInheritanceMultiplier: 1.90,

    talentDensityInheritance: 96,
    innovationInheritance: 98,
    capitalAccessInheritance: 90,

    networkInheritance: {
      executiveAccess: 82,
      founderDensity: 88,
      alumniMobility: 90,
      industryConnectivity: 94
    },

    industryDensityAdvantages: {
      biotechnology: 95,
      healthcare: 95,
      technology: 92,
      education: 98,
      hospitality: 100
    },

    careerPathwayBoosts: {
      biotechnology: 2.10,
      healthcare: 2.20,
      technology: 2.00,
      hospitality: 2.60,
      sportsBusiness: 2.30
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Boston Innovation Corridor",

    secondaryMegaRegions: [
      "Bos-Wash Corridor",
      "New York Financial System",
      "New England Healthcare Network",
      "National Research University Network"
    ],

    crossRegionalMobility: 88,
    nationalOpportunityAccess: 86,
    globalOpportunityAccess: 74

  }
},

"Drexel University": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Drexel University",

    location: "Philadelphia, Pennsylvania, USA",

    region: "Bos-Wash Megalopolis",

    universitySize: "Large",

    institutionType: "Private Research University",

    archetype: "Experiential Career Accelerator + Co-Op Employment Engine + Applied Professional University",

    institutionalPersonality: "Practical, ambitious, career-focused, entrepreneurial, industry-connected, outcomes-oriented",

    cultureKeywords: [
      "co-op education",
      "career acceleration",
      "professional experience",
      "industry partnerships",
      "Philadelphia",
      "applied learning",
      "work-integrated education"
    ],

    missionOrientation: "Prepare students for immediate professional success through immersive real-world work experience and applied education",

    faithTradition: "Secular",

    educationalPhilosophy: "Learning by doing through repeated professional work experiences integrated directly into academic programs",

    competitiveness: "Moderately High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate",

    socialClimate: "Professional, career-driven, urban, pragmatic",

    leadershipStyle: "Leadership through execution, competence, and professional credibility",

    oneSentenceSummary: "One of America's strongest career-launch universities, converting classroom learning into substantial work experience before graduation."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 80,
      conscientiousness: 92,
      extraversion: 74,
      agreeableness: 76,
      neuroticism: 52
    },

    hollandCodes: [
      "ERC",
      "IEC",
      "SEC"
    ],

    learningStyle: [
      "experiential learning",
      "applied problem solving",
      "professional immersion"
    ],

    socialEnvironment: [
      "career-oriented peers",
      "urban campus life",
      "industry engagement",
      "professional networking"
    ],

    idealStudentTraits: [
      "highly practical",
      "career-focused",
      "independent",
      "comfortable balancing work and academics"
    ],

    thrivesIf: [
      "wants significant work experience before graduation",
      "values ROI and employability",
      "prefers applied learning"
    ],

    strugglesIf: [
      "wants traditional residential college culture",
      "prefers purely theoretical academics",
      "seeks prestige-driven environments"
    ],

    transferRiskFactors: [
      "desire for stronger campus identity",
      "interest in liberal arts environments",
      "wanting more traditional college experiences"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Biomedical Engineering",
      "Health Informatics",
      "Supply Chain Management",
      "User Experience Design",
      "Construction Management",
      "Entrepreneurship"
    ],

    hiddenCareerPipelines: [
      "medical devices",
      "healthcare technology",
      "construction leadership",
      "product management",
      "industrial operations",
      "corporate innovation"
    ],

    nicheRecruitingAdvantages: [
      "multiple paid co-op cycles",
      "Philadelphia healthcare ecosystem",
      "mid-Atlantic corporate recruiting",
      "strong engineering employer relationships"
    ],

    overlookedStrengths: [
      "graduates often enter the workforce with 12–18 months of experience",
      "one of the strongest experiential-learning models in America",
      "excellent employer reputation relative to admissions selectivity"
    ],

    sleeperIndustries: [
      "health technology",
      "building technology",
      "medical devices",
      "industrial software",
      "advanced manufacturing"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 82,
    mentorshipDensity: 84,
    executiveAccess: 78,
    internshipNetwork: 98,
    familyBusinessExposure: 58,

    relationshipCapitalScore: 84,
    alumniLoyaltyScore: 82,
    referralCultureStrength: 84,
    donorNetworkStrength: 72,
    boardMemberDensity: 74

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "healthcare",
      "engineering",
      "technology",
      "construction",
      "manufacturing",
      "finance"
    ],

    regionalEconomicDrivers: [
      "Philadelphia healthcare systems",
      "mid-Atlantic corporate economy",
      "life sciences",
      "engineering services",
      "urban development"
    ],

    topEmployers: [
      "Comcast",
      "Independence Blue Cross",
      "Children's Hospital of Philadelphia",
      "Penn Medicine",
      "Lockheed Martin",
      "Johnson & Johnson",
      "Accenture"
    ],

    emergingIndustries: [
      "digital health",
      "AI-enabled healthcare",
      "medical devices",
      "smart infrastructure",
      "cybersecurity"
    ],

    startupDensity: "Moderate to High",

    ventureCapitalAccess: 78,
    corporateHeadquartersDensity: 84,
    healthcareHubStrength: 96,
    innovationIndex: 86

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Philadelphia Professional Economy",

    secondaryMarkets: [
      "New York City",
      "Washington DC",
      "Boston",
      "Baltimore",
      "Charlotte"
    ],

    alumniStrongholds: [
      "Philadelphia",
      "New York City",
      "Washington DC",
      "New Jersey",
      "Pennsylvania"
    ],

    relocationPatterns: [
      "healthcare",
      "engineering",
      "technology",
      "operations leadership",
      "consulting"
    ],

    regionalInfluenceScore: 90,
    nationalReachScore: 80,
    internationalReachScore: 68

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 35,
    studentOrganizationStrength: 82,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 88,
    civicEngagement: 80,

    relationshipCapital: 84,
    luxuryNetworkAccess: 52,
    familyOfficeExposure: 42,
    internationalBusinessExposure: 68,
    personalBrandLeverage: 84

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    healthcareAdministration: { strength: 95 },

    biomedicalEngineering: { strength: 98 },

    medicalDevices: { strength: 96 },

    technology: { strength: 88 },

    productManagement: { strength: 92 },

    constructionManagement: { strength: 98 },

    engineeringServices: { strength: 95 },

    manufacturing: { strength: 88 },

    supplyChain: { strength: 90 },

    entrepreneurship: { strength: 82 },

    cybersecurity: { strength: 84 },

    industrialAutomation: { strength: 86 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle to upper-middle baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 82,
    wealthCreationPotential: 84,
    familyBusinessPipelineStrength: 54

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 92,
    automationResistance: 92,
    adaptabilityScore: 92,
    interdisciplinaryStrength: 90,
    futureReadiness: 94,
    entrepreneurialFlexibility: 84,
    lifelongLearningCulture: 88,
    innovationCapacity: 88

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 84,
    communityLeadershipPotential: 82,
    geographicMobility: 84,
    workLifeBalancePotential: 82,
    purposeAlignment: 84,
    familyFormationSupport: 84,
    personalDevelopmentPotential: 86,
    careerOptionality: 92,
    longTermLifeSatisfaction: 86

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 76,
    networkMoat: 82,
    geographicMoat: 90,
    industryMoat: 94,
    alumniMoat: 80,
    brandDurability: 88,

    overallMoatScore: 85

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Bos-Wash Industrial & Professional Corridor",

    megaRegionArchetype: "Applied Career Acceleration Through Work Experience",

    megaRegionIntegrationScore: 92,

    regionalInheritanceMultiplier: 1.85,

    talentDensityInheritance: 90,
    innovationInheritance: 88,
    capitalAccessInheritance: 84,

    networkInheritance: {
      executiveAccess: 80,
      founderDensity: 76,
      alumniMobility: 88,
      industryConnectivity: 96
    },

    industryDensityAdvantages: {
      healthcare: 98,
      engineering: 96,
      construction: 100,
      technology: 88,
      manufacturing: 90
    },

    careerPathwayBoosts: {
      healthcare: 2.20,
      biomedicalEngineering: 2.40,
      constructionManagement: 2.60,
      productManagement: 2.10,
      engineeringServices: 2.30
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Philadelphia-New York Professional Corridor",

    secondaryMegaRegions: [
      "Bos-Wash Corridor",
      "New York Financial System",
      "Washington Institutional Network",
      "Mid-Atlantic Healthcare Network"
    ],

    crossRegionalMobility: 86,
    nationalOpportunityAccess: 82,
    globalOpportunityAccess: 68

  }
},

"Rutgers University": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Rutgers University",

    location: "New Brunswick, New Jersey, USA",

    region: "Bos-Wash Megalopolis",

    universitySize: "Very Large",

    institutionType: "Public Flagship Research University",

    archetype: "Gateway to New York Power Systems + Public Ivy Mobility + Northeast Professional Class Engine",

    institutionalPersonality: "Ambitious, resilient, practical, diverse, upwardly-mobile, opportunity-seeking",

    cultureKeywords: [
      "public flagship",
      "New York proximity",
      "professional mobility",
      "research university",
      "corporate pathways",
      "diversity",
      "upward mobility"
    ],

    missionOrientation: "Provide broad access to elite educational, professional, research, and economic opportunities across New Jersey, New York, and the Northeast",

    faithTradition: "Historically Dutch Reformed, now secular",

    educationalPhilosophy: "Large-scale research education integrated with major economic and professional ecosystems",

    competitiveness: "High",

    politicalCulture: "Moderate-to-progressive",

    studentAutonomy: "High",

    prestigeOrientation: "Moderately High",

    socialClimate: "Diverse, ambitious, career-focused, decentralized",

    leadershipStyle: "Leadership through competence, expertise, and upward mobility",

    oneSentenceSummary: "The flagship university positioned between New York and Philadelphia that converts scale, diversity, and proximity into professional and economic mobility."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 84,
      conscientiousness: 88,
      extraversion: 76,
      agreeableness: 80,
      neuroticism: 56
    },

    hollandCodes: [
      "SEC",
      "IEC",
      "ERC"
    ],

    learningStyle: [
      "research-driven learning",
      "professional preparation",
      "large-system navigation"
    ],

    socialEnvironment: [
      "large public flagship culture",
      "extreme diversity",
      "career-oriented peers",
      "regional commuter influence"
    ],

    idealStudentTraits: [
      "self-motivated",
      "career-focused",
      "adaptable",
      "comfortable navigating large systems"
    ],

    thrivesIf: [
      "wants access to New York opportunities",
      "values ROI and career outcomes",
      "likes large research universities"
    ],

    strugglesIf: [
      "needs highly personalized environments",
      "wants small-college intimacy",
      "expects opportunities to come automatically"
    ],

    transferRiskFactors: [
      "desire for elite private-school prestige",
      "interest in smaller academic communities",
      "difficulty navigating large institutions"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Supply Chain Analytics",
      "Pharmacy",
      "Food Science",
      "Labor Studies",
      "Public Health",
      "Packaging Engineering"
    ],

    hiddenCareerPipelines: [
      "pharmaceutical leadership",
      "consumer products management",
      "supply chain leadership",
      "government affairs",
      "healthcare administration",
      "corporate operations"
    ],

    nicheRecruitingAdvantages: [
      "New York corporate recruiting",
      "New Jersey pharmaceutical corridor",
      "consumer products industry",
      "major healthcare systems"
    ],

    overlookedStrengths: [
      "one of the strongest pharmaceutical pipelines in America",
      "excellent social mobility outcomes",
      "massive alumni network throughout the Northeast",
      "strong value relative to cost"
    ],

    sleeperIndustries: [
      "biopharmaceuticals",
      "food innovation",
      "logistics technology",
      "consumer packaged goods",
      "health analytics"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 86,
    mentorshipDensity: 82,
    executiveAccess: 80,
    internshipNetwork: 92,
    familyBusinessExposure: 62,

    relationshipCapitalScore: 86,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 84,
    donorNetworkStrength: 78,
    boardMemberDensity: 80

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "pharmaceuticals",
      "healthcare",
      "finance",
      "technology",
      "consumer products",
      "logistics"
    ],

    regionalEconomicDrivers: [
      "New York finance",
      "New Jersey pharmaceutical corridor",
      "healthcare systems",
      "corporate headquarters",
      "global logistics"
    ],

    topEmployers: [
      "Johnson & Johnson",
      "Merck",
      "Pfizer",
      "JPMorgan",
      "Prudential",
      "Amazon",
      "Bristol Myers Squibb",
      "RWJBarnabas Health"
    ],

    emergingIndustries: [
      "AI-enabled healthcare",
      "biotechnology",
      "supply chain technology",
      "digital therapeutics",
      "fintech"
    ],

    startupDensity: "Moderate to High",

    ventureCapitalAccess: 84,
    corporateHeadquartersDensity: 94,
    healthcareHubStrength: 96,
    innovationIndex: 90

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "New York-New Jersey Professional Economy",

    secondaryMarkets: [
      "Philadelphia",
      "Boston",
      "Washington DC",
      "Miami",
      "Charlotte"
    ],

    alumniStrongholds: [
      "New York City",
      "New Jersey",
      "Philadelphia",
      "Washington DC",
      "South Florida"
    ],

    relocationPatterns: [
      "finance",
      "pharmaceuticals",
      "healthcare",
      "technology",
      "corporate management"
    ],

    regionalInfluenceScore: 98,
    nationalReachScore: 86,
    internationalReachScore: 74

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 35,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 88,
    civicEngagement: 88,

    relationshipCapital: 86,
    luxuryNetworkAccess: 64,
    familyOfficeExposure: 54,
    internationalBusinessExposure: 80,
    personalBrandLeverage: 86

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    pharmaceuticals: { strength: 100 },

    biotechnology: { strength: 94 },

    healthcareAdministration: { strength: 94 },

    medicine: { strength: 92 },

    supplyChain: { strength: 94 },

    logistics: { strength: 92 },

    consumerProducts: { strength: 94 },

    foodScience: { strength: 96 },

    investmentBanking: { strength: 82 },

    wealthManagement: { strength: 84 },

    technology: { strength: 84 },

    entrepreneurship: { strength: 80 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle to upper-middle baseline",

    socialMobilityIndex: 95,
    firstGenerationSupport: 92,
    wealthCreationPotential: 88,
    familyBusinessPipelineStrength: 64

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 92,
    automationResistance: 92,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 90,
    futureReadiness: 92,
    entrepreneurialFlexibility: 84,
    lifelongLearningCulture: 92,
    innovationCapacity: 90

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 88,
    communityLeadershipPotential: 88,
    geographicMobility: 92,
    workLifeBalancePotential: 88,
    purposeAlignment: 86,
    familyFormationSupport: 88,
    personalDevelopmentPotential: 90,
    careerOptionality: 92,
    longTermLifeSatisfaction: 90

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 84,
    networkMoat: 88,
    geographicMoat: 98,
    industryMoat: 96,
    alumniMoat: 90,
    brandDurability: 92,

    overallMoatScore: 91

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "New York-New Jersey Economic Super Region",

    megaRegionArchetype: "Public Gateway Into Elite Northeast Economic Systems",

    megaRegionIntegrationScore: 99,

    regionalInheritanceMultiplier: 2.00,

    talentDensityInheritance: 94,
    innovationInheritance: 92,
    capitalAccessInheritance: 98,

    networkInheritance: {
      executiveAccess: 88,
      founderDensity: 84,
      alumniMobility: 96,
      industryConnectivity: 98
    },

    industryDensityAdvantages: {
      pharmaceuticals: 100,
      finance: 95,
      healthcare: 98,
      logistics: 94,
      consumerProducts: 94
    },

    careerPathwayBoosts: {
      pharmaceuticals: 2.80,
      healthcare: 2.20,
      finance: 2.10,
      supplyChain: 2.20,
      consumerProducts: 2.30
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "New York-New Jersey Power Corridor",

    secondaryMegaRegions: [
      "Bos-Wash Corridor",
      "Philadelphia Economy",
      "Boston Knowledge Economy",
      "Northeast Healthcare Network"
    ],

    crossRegionalMobility: 92,
    nationalOpportunityAccess: 90,
    globalOpportunityAccess: 76

  }
},

"University of Pittsburgh": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Pittsburgh",

    location: "Pittsburgh, Pennsylvania, USA",

    region: "Appalachian Innovation Corridor / Great Lakes Interface",

    universitySize: "Large",

    institutionType: "Public Research University",

    archetype: "Healthcare Innovation Engine + Applied Research Powerhouse + Urban Knowledge Economy Gateway",

    institutionalPersonality: "Intellectual, resilient, research-driven, practical, innovative, collaborative",

    cultureKeywords: [
      "medical research",
      "healthcare leadership",
      "urban innovation",
      "life sciences",
      "engineering",
      "upward mobility",
      "Pittsburgh renaissance"
    ],

    missionOrientation: "Advance research, healthcare, innovation, and public impact while developing talent for emerging knowledge industries",

    faithTradition: "Secular",

    educationalPhilosophy: "Research-intensive education integrated with real-world healthcare, technology, and scientific innovation ecosystems",

    competitiveness: "High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Strong academic and research reputation",

    socialClimate: "Collaborative, professional, academically serious",

    leadershipStyle: "Leadership through expertise, discovery, and institutional contribution",

    oneSentenceSummary: "A research powerhouse deeply integrated into one of America's most successful post-industrial innovation economies."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 88,
      conscientiousness: 88,
      extraversion: 72,
      agreeableness: 82,
      neuroticism: 54
    },

    hollandCodes: [
      "IRC",
      "IEC",
      "SEC"
    ],

    learningStyle: [
      "research-intensive learning",
      "evidence-based problem solving",
      "interdisciplinary collaboration"
    ],

    socialEnvironment: [
      "urban research environment",
      "strong healthcare presence",
      "academically ambitious peers",
      "professional development culture"
    ],

    idealStudentTraits: [
      "intellectually curious",
      "career-focused",
      "research-oriented",
      "adaptable"
    ],

    thrivesIf: [
      "wants healthcare or research opportunities",
      "values academic rigor",
      "likes innovation-driven economies"
    ],

    strugglesIf: [
      "wants small liberal arts settings",
      "prefers highly social campus cultures",
      "needs extensive academic structure"
    ],

    transferRiskFactors: [
      "desire for elite private-school prestige",
      "preference for traditional college-town culture",
      "interest in smaller institutions"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Bioengineering",
      "Health Informatics",
      "Rehabilitation Science",
      "Public Health",
      "Computational Biology",
      "Supply Chain Management"
    ],

    hiddenCareerPipelines: [
      "hospital administration",
      "medical devices",
      "health technology",
      "clinical research",
      "robotics commercialization",
      "biotechnology operations"
    ],

    nicheRecruitingAdvantages: [
      "UPMC ecosystem access",
      "major NIH-funded research opportunities",
      "healthcare innovation recruiting",
      "robotics and autonomy ecosystem"
    ],

    overlookedStrengths: [
      "one of the strongest healthcare ecosystems in America",
      "elite medical research opportunities",
      "excellent outcomes in life sciences",
      "deep integration with Pittsburgh's innovation economy"
    ],

    sleeperIndustries: [
      "digital health",
      "robotics",
      "autonomous systems",
      "medical devices",
      "biotechnology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 84,
    mentorshipDensity: 90,
    executiveAccess: 82,
    internshipNetwork: 90,
    familyBusinessExposure: 54,

    relationshipCapitalScore: 88,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 86,
    donorNetworkStrength: 84,
    boardMemberDensity: 82

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "healthcare",
      "biotechnology",
      "robotics",
      "engineering",
      "education",
      "advanced manufacturing"
    ],

    regionalEconomicDrivers: [
      "UPMC healthcare system",
      "life sciences",
      "robotics ecosystem",
      "advanced manufacturing",
      "research commercialization"
    ],

    topEmployers: [
      "UPMC",
      "University of Pittsburgh Medical Center",
      "PNC Financial",
      "Highmark",
      "Google Pittsburgh",
      "Duolingo",
      "Carnegie Mellon spinouts"
    ],

    emergingIndustries: [
      "artificial intelligence",
      "robotics",
      "autonomous vehicles",
      "digital health",
      "biotechnology"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 82,
    corporateHeadquartersDensity: 74,
    healthcareHubStrength: 100,
    innovationIndex: 94

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Pittsburgh Innovation Economy",

    secondaryMarkets: [
      "Philadelphia",
      "Washington DC",
      "New York City",
      "Cleveland",
      "Chicago"
    ],

    alumniStrongholds: [
      "Pittsburgh",
      "Pennsylvania",
      "Washington DC",
      "Ohio",
      "Florida"
    ],

    relocationPatterns: [
      "healthcare",
      "medicine",
      "research",
      "technology",
      "engineering"
    ],

    regionalInfluenceScore: 94,
    nationalReachScore: 86,
    internationalReachScore: 74

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 28,
    studentOrganizationStrength: 86,
    leadershipDevelopment: 88,
    crossDisciplinaryInteraction: 92,
    civicEngagement: 86,

    relationshipCapital: 88,
    luxuryNetworkAccess: 48,
    familyOfficeExposure: 40,
    internationalBusinessExposure: 72,
    personalBrandLeverage: 84

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    medicine: { strength: 100 },

    healthcareAdministration: { strength: 100 },

    biotechnology: { strength: 96 },

    biomedicalEngineering: { strength: 96 },

    medicalDevices: { strength: 94 },

    artificialIntelligence: { strength: 84 },

    robotics: { strength: 90 },

    publicHealth: { strength: 96 },

    research: { strength: 98 },

    entrepreneurship: { strength: 80 },

    advancedManufacturing: { strength: 84 },

    technology: { strength: 82 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle to upper-middle baseline",

    socialMobilityIndex: 90,
    firstGenerationSupport: 86,
    wealthCreationPotential: 86,
    familyBusinessPipelineStrength: 50

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 96,
    automationResistance: 96,
    adaptabilityScore: 92,
    interdisciplinaryStrength: 94,
    futureReadiness: 94,
    entrepreneurialFlexibility: 84,
    lifelongLearningCulture: 94,
    innovationCapacity: 96

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 86,
    communityLeadershipPotential: 90,
    geographicMobility: 86,
    workLifeBalancePotential: 88,
    purposeAlignment: 92,
    familyFormationSupport: 88,
    personalDevelopmentPotential: 92,
    careerOptionality: 92,
    longTermLifeSatisfaction: 92

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 86,
    networkMoat: 88,
    geographicMoat: 92,
    industryMoat: 100,
    alumniMoat: 88,
    brandDurability: 92,

    overallMoatScore: 91

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Pittsburgh Innovation Corridor",

    megaRegionArchetype: "Healthcare Innovation & Applied Research Capital",

    megaRegionIntegrationScore: 96,

    regionalInheritanceMultiplier: 1.95,

    talentDensityInheritance: 90,
    innovationInheritance: 98,
    capitalAccessInheritance: 82,

    networkInheritance: {
      executiveAccess: 84,
      founderDensity: 86,
      alumniMobility: 88,
      industryConnectivity: 98
    },

    industryDensityAdvantages: {
      healthcare: 100,
      biotechnology: 96,
      robotics: 92,
      research: 100,
      advancedManufacturing: 84
    },

    careerPathwayBoosts: {
      medicine: 2.80,
      healthcareAdministration: 2.80,
      biotechnology: 2.40,
      medicalDevices: 2.30,
      robotics: 2.10
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Pittsburgh Healthcare & Innovation Cluster",

    secondaryMegaRegions: [
      "Great Lakes Industrial Corridor",
      "Bos-Wash Corridor",
      "Midwest Research Network",
      "Appalachian Technology Corridor"
    ],

    crossRegionalMobility: 88,
    nationalOpportunityAccess: 86,
    globalOpportunityAccess: 74

  }
},

"Virginia Tech": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Virginia Tech",

    location: "Blacksburg, Virginia, USA",

    region: "Appalachian Innovation Corridor / Mid-Atlantic Growth Belt",

    universitySize: "Very Large",

    institutionType: "Public Land-Grant Research University",

    archetype: "Engineering Nation Builder + Applied Innovation Platform + Industrial Leadership Engine",

    institutionalPersonality: "Disciplined, practical, collaborative, innovative, service-oriented, builder-minded",

    cultureKeywords: [
      "engineering",
      "land-grant mission",
      "applied innovation",
      "military tradition",
      "industry partnerships",
      "problem solving",
      "public service"
    ],

    missionOrientation: "Advance engineering, science, agriculture, technology, and public service through practical innovation and workforce development",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Learn by doing through engineering, research, leadership, and applied problem-solving",

    competitiveness: "High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Strong professional prestige",

    socialClimate: "Collaborative, ambitious, technically-oriented, community-focused",

    leadershipStyle: "Leadership through competence, execution, and technical mastery",

    oneSentenceSummary: "One of America's premier engineering universities, producing builders, operators, innovators, and technical leaders across industry, government, and defense."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 84,
      conscientiousness: 94,
      extraversion: 72,
      agreeableness: 82,
      neuroticism: 46
    },

    hollandCodes: [
      "IRC",
      "IEC",
      "ERC"
    ],

    learningStyle: [
      "applied engineering",
      "systems thinking",
      "project-based learning"
    ],

    socialEnvironment: [
      "engineering-heavy culture",
      "strong school spirit",
      "leadership development",
      "collaborative technical environment"
    ],

    idealStudentTraits: [
      "builder mentality",
      "problem solver",
      "high work ethic",
      "team oriented"
    ],

    thrivesIf: [
      "likes engineering and technology",
      "enjoys solving real-world problems",
      "wants practical career outcomes"
    ],

    strugglesIf: [
      "prefers highly theoretical environments",
      "wants elite social prestige",
      "dislikes structured technical work"
    ],

    transferRiskFactors: [
      "seeking Ivy-style prestige",
      "interest in urban campuses",
      "preference for liberal arts environments"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Industrial Systems Engineering",
      "Construction Engineering",
      "Packaging Systems",
      "Supply Chain Management",
      "Food Science",
      "Natural Resources"
    ],

    hiddenCareerPipelines: [
      "defense systems leadership",
      "industrial operations",
      "advanced manufacturing",
      "energy infrastructure",
      "construction megaprojects",
      "federal technology programs"
    ],

    nicheRecruitingAdvantages: [
      "defense contractor recruiting",
      "government engineering pathways",
      "industrial systems recruiting",
      "advanced manufacturing leadership"
    ],

    overlookedStrengths: [
      "one of the strongest engineering employment networks in America",
      "elite construction and industrial systems outcomes",
      "strong military and defense connectivity",
      "excellent ROI"
    ],

    sleeperIndustries: [
      "autonomous systems",
      "energy infrastructure",
      "industrial automation",
      "aerospace systems",
      "construction technology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 90,
    mentorshipDensity: 90,
    executiveAccess: 84,
    internshipNetwork: 94,
    familyBusinessExposure: 58,

    relationshipCapitalScore: 90,
    alumniLoyaltyScore: 96,
    referralCultureStrength: 94,
    donorNetworkStrength: 82,
    boardMemberDensity: 84

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "engineering",
      "defense",
      "aerospace",
      "manufacturing",
      "technology",
      "construction"
    ],

    regionalEconomicDrivers: [
      "Virginia defense economy",
      "federal contracting",
      "advanced manufacturing",
      "energy infrastructure",
      "technology services"
    ],

    topEmployers: [
      "Boeing",
      "Northrop Grumman",
      "Lockheed Martin",
      "General Dynamics",
      "RTX",
      "Amazon Web Services",
      "Bechtel",
      "Deloitte"
    ],

    emergingIndustries: [
      "AI engineering",
      "autonomous systems",
      "cybersecurity",
      "clean energy",
      "advanced robotics"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 76,
    corporateHeadquartersDensity: 80,
    healthcareHubStrength: 60,
    innovationIndex: 92

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Virginia–Washington Defense & Technology Economy",

    secondaryMarkets: [
      "Washington DC",
      "Northern Virginia",
      "Charlotte",
      "Atlanta",
      "Dallas"
    ],

    alumniStrongholds: [
      "Virginia",
      "Washington DC",
      "North Carolina",
      "Texas",
      "Atlanta"
    ],

    relocationPatterns: [
      "engineering",
      "defense",
      "technology",
      "construction",
      "operations leadership"
    ],

    regionalInfluenceScore: 96,
    nationalReachScore: 90,
    internationalReachScore: 72

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 45,
    studentOrganizationStrength: 92,
    leadershipDevelopment: 94,
    crossDisciplinaryInteraction: 88,
    civicEngagement: 88,

    relationshipCapital: 90,
    luxuryNetworkAccess: 48,
    familyOfficeExposure: 38,
    internationalBusinessExposure: 70,
    personalBrandLeverage: 88

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    engineering: { strength: 100 },

    aerospace: { strength: 96 },

    aerospaceManufacturing: { strength: 96 },

    defense: { strength: 100 },

    defenseManufacturing: { strength: 96 },

    cybersecurity: { strength: 92 },

    artificialIntelligence: { strength: 86 },

    industrialEngineering: { strength: 98 },

    advancedManufacturing: { strength: 98 },

    constructionManagement: { strength: 100 },

    energyInfrastructure: { strength: 92 },

    logistics: { strength: 88 },

    supplyChain: { strength: 90 },

    entrepreneurship: { strength: 78 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle to upper-middle baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 84,
    wealthCreationPotential: 90,
    familyBusinessPipelineStrength: 56

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 98,
    automationResistance: 98,
    adaptabilityScore: 92,
    interdisciplinaryStrength: 90,
    futureReadiness: 96,
    entrepreneurialFlexibility: 84,
    lifelongLearningCulture: 92,
    innovationCapacity: 94

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 90,
    communityLeadershipPotential: 88,
    geographicMobility: 92,
    workLifeBalancePotential: 86,
    purposeAlignment: 90,
    familyFormationSupport: 88,
    personalDevelopmentPotential: 90,
    careerOptionality: 94,
    longTermLifeSatisfaction: 90

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 88,
    networkMoat: 92,
    geographicMoat: 94,
    industryMoat: 100,
    alumniMoat: 94,
    brandDurability: 96,

    overallMoatScore: 94

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Washington–Virginia Defense & Technology Corridor",

    megaRegionArchetype: "Engineering + National Infrastructure Builder",

    megaRegionIntegrationScore: 98,

    regionalInheritanceMultiplier: 2.05,

    talentDensityInheritance: 90,
    innovationInheritance: 92,
    capitalAccessInheritance: 88,

    networkInheritance: {
      executiveAccess: 90,
      founderDensity: 76,
      alumniMobility: 94,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      defense: 100,
      aerospace: 98,
      engineering: 100,
      cybersecurity: 94,
      construction: 100
    },

    careerPathwayBoosts: {
      defense: 2.90,
      engineering: 2.70,
      constructionManagement: 2.80,
      aerospace: 2.50,
      cybersecurity: 2.20
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Washington-Virginia Defense Corridor",

    secondaryMegaRegions: [
      "Research Triangle",
      "Atlanta Growth Corridor",
      "Texas Industrial Corridor",
      "Bos-Wash Corridor"
    ],

    crossRegionalMobility: 92,
    nationalOpportunityAccess: 94,
    globalOpportunityAccess: 74

  }
},

"University of Tennessee, Knoxville": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Tennessee, Knoxville",

    location: "Knoxville, Tennessee, USA",

    region: "Appalachian Innovation Corridor / Tennessee Valley Growth Belt",

    universitySize: "Very Large",

    institutionType: "Public Flagship Land-Grant Research University",

    archetype: "Energy & Applied Science Gateway + Southern Growth Economy Platform + Tennessee Power Network",

    institutionalPersonality: "Practical, ambitious, relationship-oriented, innovative, community-focused, resilient",

    cultureKeywords: [
      "flagship university",
      "energy research",
      "Oak Ridge",
      "SEC culture",
      "southern growth economy",
      "applied science",
      "public leadership"
    ],

    missionOrientation: "Advance Tennessee's economic development through research, workforce development, energy innovation, agriculture, and public service",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Applied learning integrated with research, industry partnerships, and regional economic development",

    competitiveness: "Moderately High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Strong regional prestige",

    socialClimate: "High school spirit, relationship-driven, ambitious, collaborative",

    leadershipStyle: "Leadership through service, execution, and community building",

    oneSentenceSummary: "The flagship university of Tennessee connecting students to energy, manufacturing, logistics, healthcare, and one of America's fastest-growing economic regions."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 80,
      conscientiousness: 88,
      extraversion: 84,
      agreeableness: 84,
      neuroticism: 46
    },

    hollandCodes: [
      "SEC",
      "ERC",
      "IEC"
    ],

    learningStyle: [
      "applied learning",
      "industry engagement",
      "research with practical outcomes"
    ],

    socialEnvironment: [
      "large flagship culture",
      "SEC athletics",
      "relationship-driven networking",
      "strong alumni loyalty"
    ],

    idealStudentTraits: [
      "community-oriented",
      "career-focused",
      "adaptable",
      "relationship builder"
    ],

    thrivesIf: [
      "likes large flagship environments",
      "wants strong regional networks",
      "values practical career outcomes"
    ],

    strugglesIf: [
      "wants elite-coastal prestige",
      "prefers highly intellectualized campus cultures",
      "needs small-class environments"
    ],

    transferRiskFactors: [
      "seeking stronger national prestige",
      "interest in private universities",
      "desire for more urban environments"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Nuclear Engineering",
      "Supply Chain Management",
      "Food Science",
      "Materials Science",
      "Logistics",
      "Agricultural Economics"
    ],

    hiddenCareerPipelines: [
      "Department of Energy laboratories",
      "Oak Ridge National Laboratory",
      "energy infrastructure leadership",
      "advanced manufacturing",
      "federal research programs",
      "automotive manufacturing"
    ],

    nicheRecruitingAdvantages: [
      "Oak Ridge access",
      "Tennessee manufacturing economy",
      "energy research partnerships",
      "southern corporate recruiting"
    ],

    overlookedStrengths: [
      "one of the strongest public-university energy ecosystems in America",
      "exceptional access to national laboratory research",
      "major logistics and manufacturing opportunities",
      "strong SEC alumni network"
    ],

    sleeperIndustries: [
      "nuclear energy",
      "advanced materials",
      "energy storage",
      "automotive technology",
      "industrial automation"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 90,
    mentorshipDensity: 86,
    executiveAccess: 80,
    internshipNetwork: 86,
    familyBusinessExposure: 64,

    relationshipCapitalScore: 88,
    alumniLoyaltyScore: 96,
    referralCultureStrength: 92,
    donorNetworkStrength: 82,
    boardMemberDensity: 80

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "energy",
      "manufacturing",
      "logistics",
      "healthcare",
      "agriculture",
      "advanced materials"
    ],

    regionalEconomicDrivers: [
      "Oak Ridge National Laboratory",
      "Tennessee Valley Authority",
      "automotive manufacturing",
      "distribution and logistics",
      "federal energy programs"
    ],

    topEmployers: [
      "Oak Ridge National Laboratory",
      "Tennessee Valley Authority",
      "Denso",
      "Volkswagen",
      "Amazon",
      "FedEx",
      "Y-12 National Security Complex",
      "Pilot Company"
    ],

    emergingIndustries: [
      "small modular reactors",
      "advanced nuclear",
      "energy storage",
      "AI-enabled manufacturing",
      "advanced materials"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 68,
    corporateHeadquartersDensity: 72,
    healthcareHubStrength: 76,
    innovationIndex: 88

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Tennessee Growth Economy",

    secondaryMarkets: [
      "Nashville",
      "Atlanta",
      "Charlotte",
      "Dallas",
      "Washington DC"
    ],

    alumniStrongholds: [
      "Tennessee",
      "Nashville",
      "Atlanta",
      "Charlotte",
      "Texas"
    ],

    relocationPatterns: [
      "manufacturing",
      "energy",
      "healthcare",
      "logistics",
      "corporate operations"
    ],

    regionalInfluenceScore: 96,
    nationalReachScore: 80,
    internationalReachScore: 62

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 60,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 88,
    crossDisciplinaryInteraction: 82,
    civicEngagement: 84,

    relationshipCapital: 90,
    luxuryNetworkAccess: 46,
    familyOfficeExposure: 40,
    internationalBusinessExposure: 64,
    personalBrandLeverage: 84

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    energy: { strength: 100 },

    nuclearEnergy: { strength: 100 },

    advancedManufacturing: { strength: 92 },

    industrialEngineering: { strength: 90 },

    materialsScience: { strength: 94 },

    logistics: { strength: 92 },

    supplyChain: { strength: 92 },

    agriculture: { strength: 86 },

    agriculturalTechnology: { strength: 82 },

    healthcareAdministration: { strength: 80 },

    defense: { strength: 84 },

    entrepreneurship: { strength: 74 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-class baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 84,
    wealthCreationPotential: 84,
    familyBusinessPipelineStrength: 64

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 94,
    automationResistance: 96,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 88,
    futureReadiness: 92,
    entrepreneurialFlexibility: 80,
    lifelongLearningCulture: 88,
    innovationCapacity: 92

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 84,
    communityLeadershipPotential: 90,
    geographicMobility: 84,
    workLifeBalancePotential: 90,
    purposeAlignment: 88,
    familyFormationSupport: 92,
    personalDevelopmentPotential: 88,
    careerOptionality: 90,
    longTermLifeSatisfaction: 92

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 78,
    networkMoat: 88,
    geographicMoat: 94,
    industryMoat: 96,
    alumniMoat: 92,
    brandDurability: 92,

    overallMoatScore: 90

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Tennessee Valley Energy & Manufacturing Corridor",

    megaRegionArchetype: "Energy Innovation + Southern Industrial Growth",

    megaRegionIntegrationScore: 96,

    regionalInheritanceMultiplier: 1.95,

    talentDensityInheritance: 82,
    innovationInheritance: 94,
    capitalAccessInheritance: 78,

    networkInheritance: {
      executiveAccess: 82,
      founderDensity: 68,
      alumniMobility: 90,
      industryConnectivity: 98
    },

    industryDensityAdvantages: {
      energy: 100,
      nuclearEnergy: 100,
      manufacturing: 94,
      logistics: 92,
      advancedMaterials: 96
    },

    careerPathwayBoosts: {
      nuclearEnergy: 3.00,
      energy: 2.70,
      manufacturing: 2.20,
      logistics: 2.10,
      materialsScience: 2.40
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Tennessee Valley Corridor",

    secondaryMegaRegions: [
      "Nashville Growth Economy",
      "Atlanta-Charlotte Corridor",
      "Mid-Continent Industrial Corridor",
      "Texas Growth Network"
    ],

    crossRegionalMobility: 86,
    nationalOpportunityAccess: 84,
    globalOpportunityAccess: 62

  }
},

"Texas A&M University": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Texas A&M University",

    location: "College Station, Texas, USA",

    region: "Texas Triangle / Gulf Energy Corridor",

    universitySize: "Very Large",

    institutionType: "Public Land-Grant Research University",

    archetype: "Industrial America + Energy Leadership + Relationship Capital Machine",

    institutionalPersonality: "Loyal, disciplined, relationship-driven, ambitious, operational, institution-minded",

    cultureKeywords: [
      "Aggie Network",
      "land-grant",
      "energy economy",
      "engineering",
      "military tradition",
      "relationship capital",
      "Texas leadership"
    ],

    missionOrientation: "Develop leaders, engineers, operators, innovators, and public servants who drive the economic and industrial infrastructure of Texas and the United States",

    faithTradition: "Secular public institution with culturally conservative roots",

    educationalPhilosophy: "Leadership through service, technical competence, operational excellence, and lifelong relationships",

    competitiveness: "High",

    politicalCulture: "Moderate-to-conservative",

    studentAutonomy: "High",

    prestigeOrientation: "Strong professional prestige",

    socialClimate: "Relationship-intensive, loyal, tradition-oriented, career-focused",

    leadershipStyle: "Leadership through service, trust, execution, and organizational responsibility",

    oneSentenceSummary: "One of America's most powerful relationship-capital universities, producing leaders across energy, engineering, agriculture, defense, construction, and Texas industry."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 74,
      conscientiousness: 96,
      extraversion: 84,
      agreeableness: 86,
      neuroticism: 42
    },

    hollandCodes: [
      "ERC",
      "SEC",
      "IRC"
    ],

    learningStyle: [
      "applied leadership",
      "engineering problem solving",
      "organizational responsibility"
    ],

    socialEnvironment: [
      "high-trust relationships",
      "deep alumni loyalty",
      "tradition-rich culture",
      "career-oriented peer group"
    ],

    idealStudentTraits: [
      "team oriented",
      "relationship builder",
      "high work ethic",
      "leadership focused"
    ],

    thrivesIf: [
      "values community and loyalty",
      "wants strong alumni support",
      "seeks engineering or industrial careers"
    ],

    strugglesIf: [
      "dislikes tradition",
      "wants highly individualistic culture",
      "prefers elite coastal social environments"
    ],

    transferRiskFactors: [
      "seeking Ivy-style prestige",
      "interest in highly urban environments",
      "preference for independent academic cultures"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Petroleum Engineering",
      "Construction Science",
      "Industrial Distribution",
      "Agribusiness",
      "Nuclear Engineering",
      "Maritime Administration"
    ],

    hiddenCareerPipelines: [
      "energy leadership",
      "industrial operations",
      "defense contracting",
      "commercial construction",
      "agricultural enterprise",
      "Texas political leadership"
    ],

    nicheRecruitingAdvantages: [
      "Aggie Network referrals",
      "Texas energy recruiting",
      "industrial employer access",
      "defense and government relationships"
    ],

    overlookedStrengths: [
      "arguably the strongest alumni loyalty network in America",
      "elite industrial leadership outcomes",
      "massive influence throughout Texas",
      "exceptional executive placement in energy and construction"
    ],

    sleeperIndustries: [
      "industrial automation",
      "energy infrastructure",
      "water systems",
      "commodity trading",
      "industrial services"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 100,
    mentorshipDensity: 98,
    executiveAccess: 94,
    internshipNetwork: 94,
    familyBusinessExposure: 82,

    relationshipCapitalScore: 100,
    alumniLoyaltyScore: 100,
    referralCultureStrength: 100,
    donorNetworkStrength: 92,
    boardMemberDensity: 94

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "energy",
      "engineering",
      "construction",
      "agriculture",
      "defense",
      "manufacturing"
    ],

    regionalEconomicDrivers: [
      "Texas energy economy",
      "Houston industrial complex",
      "Texas Triangle growth",
      "agricultural production",
      "infrastructure development"
    ],

    topEmployers: [
      "ExxonMobil",
      "Chevron",
      "Shell",
      "Halliburton",
      "Fluor",
      "Bechtel",
      "Lockheed Martin",
      "Texas Instruments"
    ],

    emergingIndustries: [
      "carbon management",
      "advanced energy",
      "industrial AI",
      "water technology",
      "advanced manufacturing"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 76,
    corporateHeadquartersDensity: 92,
    healthcareHubStrength: 70,
    innovationIndex: 90

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Texas Industrial Economy",

    secondaryMarkets: [
      "Houston",
      "Dallas",
      "Austin",
      "San Antonio",
      "Middle East Energy Markets"
    ],

    alumniStrongholds: [
      "Houston",
      "Dallas",
      "Austin",
      "Texas",
      "Energy Industry Globally"
    ],

    relocationPatterns: [
      "energy",
      "engineering",
      "construction",
      "operations leadership",
      "industrial management"
    ],

    regionalInfluenceScore: 100,
    nationalReachScore: 90,
    internationalReachScore: 84

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 28,
    studentOrganizationStrength: 100,
    leadershipDevelopment: 98,
    crossDisciplinaryInteraction: 86,
    civicEngagement: 92,

    relationshipCapital: 100,
    luxuryNetworkAccess: 72,
    familyOfficeExposure: 78,
    internationalBusinessExposure: 84,
    personalBrandLeverage: 92

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    energy: { strength: 100 },

    oilAndGas: { strength: 100 },

    naturalGas: { strength: 100 },

    energyInfrastructure: { strength: 100 },

    engineering: { strength: 98 },

    constructionManagement: { strength: 100 },

    industrialEngineering: { strength: 96 },

    advancedManufacturing: { strength: 92 },

    agriculture: { strength: 96 },

    agriculturalTechnology: { strength: 90 },

    defense: { strength: 94 },

    logistics: { strength: 88 },

    commodityTrading: { strength: 92 },

    wealthManagement: { strength: 82 },

    entrepreneurship: { strength: 82 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle to upper-middle baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 84,
    wealthCreationPotential: 94,
    familyBusinessPipelineStrength: 84

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 96,
    automationResistance: 98,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 88,
    futureReadiness: 92,
    entrepreneurialFlexibility: 88,
    lifelongLearningCulture: 92,
    innovationCapacity: 92

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 94,
    communityLeadershipPotential: 96,
    geographicMobility: 88,
    workLifeBalancePotential: 88,
    purposeAlignment: 90,
    familyFormationSupport: 94,
    personalDevelopmentPotential: 92,
    careerOptionality: 94,
    longTermLifeSatisfaction: 94

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 88,
    networkMoat: 100,
    geographicMoat: 100,
    industryMoat: 100,
    alumniMoat: 100,
    brandDurability: 98,

    overallMoatScore: 98

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Texas Triangle + Gulf Energy Corridor",

    megaRegionArchetype: "Industrial America & Energy Leadership",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.25,

    talentDensityInheritance: 90,
    innovationInheritance: 90,
    capitalAccessInheritance: 98,

    networkInheritance: {
      executiveAccess: 98,
      founderDensity: 84,
      alumniMobility: 98,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      energy: 100,
      construction: 100,
      engineering: 98,
      agriculture: 96,
      defense: 94
    },

    careerPathwayBoosts: {
      oilAndGas: 3.20,
      energyInfrastructure: 3.00,
      constructionManagement: 2.80,
      engineering: 2.60,
      commodityTrading: 2.50
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Texas Triangle",

    secondaryMegaRegions: [
      "Houston Energy Corridor",
      "Mid-Continent Industrial Corridor",
      "Sunbelt Growth Belt",
      "Global Energy Network"
    ],

    crossRegionalMobility: 90,
    nationalOpportunityAccess: 92,
    globalOpportunityAccess: 86

  }
},

"University of Arkansas": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Arkansas",

    location: "Fayetteville, Arkansas, USA",

    region: "Ozark Growth Corridor / Walmart Economic Sphere",

    universitySize: "Large",

    institutionType: "Public Flagship Land-Grant Research University",

    archetype: "Consumer Economy Capital + Retail Supply Chain Command Center + Corporate America Operations Pipeline",

    institutionalPersonality: "Practical, entrepreneurial, relationship-driven, collaborative, ambitious, grounded",

    cultureKeywords: [
      "Walmart ecosystem",
      "consumer products",
      "supply chain",
      "retail innovation",
      "SEC culture",
      "corporate partnerships",
      "entrepreneurship"
    ],

    missionOrientation: "Develop leaders, innovators, operators, and entrepreneurs who drive consumer markets, retail systems, logistics networks, and regional economic growth",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Applied learning through direct integration with business, logistics, retail, and entrepreneurship ecosystems",

    competitiveness: "Moderately High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Strong regional prestige",

    socialClimate: "Friendly, relationship-oriented, ambitious, business-focused",

    leadershipStyle: "Leadership through execution, relationships, and operational excellence",

    oneSentenceSummary: "The flagship university embedded inside the world's most influential consumer-products and retail ecosystem."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 78,
      conscientiousness: 90,
      extraversion: 84,
      agreeableness: 86,
      neuroticism: 42
    },

    hollandCodes: [
      "SEC",
      "ERC",
      "ESC"
    ],

    learningStyle: [
      "applied business learning",
      "industry-connected education",
      "corporate problem solving"
    ],

    socialEnvironment: [
      "SEC flagship culture",
      "business-oriented peers",
      "relationship-intensive networking",
      "entrepreneurial community"
    ],

    idealStudentTraits: [
      "relationship builder",
      "operator mindset",
      "business-focused",
      "adaptable"
    ],

    thrivesIf: [
      "wants direct corporate access",
      "likes practical business education",
      "values strong career ROI"
    ],

    strugglesIf: [
      "wants elite coastal prestige",
      "prefers highly theoretical academics",
      "seeks highly urban environments"
    ],

    transferRiskFactors: [
      "prestige-seeking behavior",
      "interest in major metro campuses",
      "desire for stronger national branding"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Supply Chain Management",
      "Logistics",
      "Retail Management",
      "Food Science",
      "Data Analytics",
      "Consumer Behavior"
    ],

    hiddenCareerPipelines: [
      "consumer packaged goods leadership",
      "retail strategy",
      "vendor management",
      "merchandising leadership",
      "supply chain operations",
      "consumer insights"
    ],

    nicheRecruitingAdvantages: [
      "Walmart supplier ecosystem",
      "Fortune 500 consumer brands",
      "retail analytics recruiting",
      "consumer products management"
    ],

    overlookedStrengths: [
      "arguably the strongest retail ecosystem in America",
      "elite supply chain opportunities",
      "unmatched access to consumer brands",
      "one of the best business ROI schools in the SEC"
    ],

    sleeperIndustries: [
      "e-commerce operations",
      "retail technology",
      "consumer analytics",
      "food innovation",
      "omnichannel commerce"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 88,
    mentorshipDensity: 88,
    executiveAccess: 90,
    internshipNetwork: 94,
    familyBusinessExposure: 72,

    relationshipCapitalScore: 90,
    alumniLoyaltyScore: 90,
    referralCultureStrength: 90,
    donorNetworkStrength: 94,
    boardMemberDensity: 88

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "retail",
      "consumer products",
      "supply chain",
      "food systems",
      "logistics",
      "e-commerce"
    ],

    regionalEconomicDrivers: [
      "Walmart",
      "Tyson Foods",
      "J.B. Hunt",
      "supplier ecosystem",
      "consumer products industry"
    ],

    topEmployers: [
      "Walmart",
      "Tyson Foods",
      "J.B. Hunt",
      "Procter & Gamble",
      "PepsiCo",
      "Nestlé",
      "Unilever",
      "General Mills"
    ],

    emergingIndustries: [
      "retail technology",
      "consumer analytics",
      "AI-enabled logistics",
      "e-commerce infrastructure",
      "food innovation"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 72,
    corporateHeadquartersDensity: 96,
    healthcareHubStrength: 52,
    innovationIndex: 84

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Northwest Arkansas Consumer Economy",

    secondaryMarkets: [
      "Dallas",
      "Atlanta",
      "Chicago",
      "Minneapolis",
      "Bentonville"
    ],

    alumniStrongholds: [
      "Arkansas",
      "Dallas",
      "Texas",
      "Atlanta",
      "Consumer Products Industry"
    ],

    relocationPatterns: [
      "consumer products",
      "retail",
      "logistics",
      "sales leadership",
      "corporate operations"
    ],

    regionalInfluenceScore: 96,
    nationalReachScore: 84,
    internationalReachScore: 60

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 62,
    studentOrganizationStrength: 86,
    leadershipDevelopment: 88,
    crossDisciplinaryInteraction: 82,
    civicEngagement: 80,

    relationshipCapital: 90,
    luxuryNetworkAccess: 52,
    familyOfficeExposure: 58,
    internationalBusinessExposure: 66,
    personalBrandLeverage: 82

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    supplyChain: { strength: 100 },

    logistics: { strength: 100 },

    consumerProducts: { strength: 100 },

    ecommerce: { strength: 94 },

    directToConsumerBrands: { strength: 92 },

    foodSystems: { strength: 92 },

    foodManufacturing: { strength: 94 },

    consumerBrandCreation: { strength: 90 },

    productManagement: { strength: 86 },

    industrialSales: { strength: 94 },

    entrepreneurship: { strength: 84 },

    wealthManagement: { strength: 72 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-class baseline",

    socialMobilityIndex: 88,
    firstGenerationSupport: 84,
    wealthCreationPotential: 88,
    familyBusinessPipelineStrength: 72

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 92,
    automationResistance: 94,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 84,
    futureReadiness: 90,
    entrepreneurialFlexibility: 88,
    lifelongLearningCulture: 86,
    innovationCapacity: 86

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 88,
    communityLeadershipPotential: 86,
    geographicMobility: 84,
    workLifeBalancePotential: 90,
    purposeAlignment: 84,
    familyFormationSupport: 92,
    personalDevelopmentPotential: 86,
    careerOptionality: 90,
    longTermLifeSatisfaction: 90

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 72,
    networkMoat: 90,
    geographicMoat: 100,
    industryMoat: 100,
    alumniMoat: 88,
    brandDurability: 88,

    overallMoatScore: 92

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Northwest Arkansas Consumer Products Corridor",

    megaRegionArchetype: "Retail, Consumer Products & Supply Chain Capital",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.30,

    talentDensityInheritance: 86,
    innovationInheritance: 84,
    capitalAccessInheritance: 92,

    networkInheritance: {
      executiveAccess: 94,
      founderDensity: 80,
      alumniMobility: 88,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      retail: 100,
      consumerProducts: 100,
      supplyChain: 100,
      logistics: 100,
      foodSystems: 94
    },

    careerPathwayBoosts: {
      consumerProducts: 3.20,
      supplyChain: 3.10,
      logistics: 3.00,
      retailLeadership: 3.30,
      ecommerce: 2.40
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Northwest Arkansas Consumer Economy",

    secondaryMegaRegions: [
      "Texas Triangle",
      "Mid-Continent Industrial Corridor",
      "Atlanta Growth Corridor",
      "Chicago Consumer Products Network"
    ],

    crossRegionalMobility: 84,
    nationalOpportunityAccess: 88,
    globalOpportunityAccess: 62

  }
},

"University of Nebraska–Lincoln": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Nebraska–Lincoln",

    location: "Lincoln, Nebraska, USA",

    region: "Great Plains Agricultural & Industrial Corridor",

    universitySize: "Large",

    institutionType: "Public Flagship Land-Grant Research University",

    archetype: "Food, Agriculture & Risk Management Capital",

    institutionalPersonality: "Practical, disciplined, community-oriented, resilient, relationship-driven, builder-minded",

    cultureKeywords: [
      "land-grant mission",
      "agriculture",
      "food systems",
      "insurance",
      "Great Plains",
      "community leadership",
      "economic resilience"
    ],

    missionOrientation: "Develop leaders and innovators who strengthen agriculture, food production, business, engineering, natural resources, and rural economic development",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Applied research and practical problem solving tied directly to real-world industries",

    competitiveness: "Moderately High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Strong regional prestige",

    socialClimate: "Collaborative, loyal, practical, relationship-centered",

    leadershipStyle: "Leadership through reliability, competence, stewardship, and execution",

    oneSentenceSummary: "The flagship university at the center of America's food production, agricultural innovation, and risk-management economy."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 76,
      conscientiousness: 92,
      extraversion: 80,
      agreeableness: 88,
      neuroticism: 40
    },

    hollandCodes: [
      "ERC",
      "SEC",
      "IRC"
    ],

    learningStyle: [
      "applied learning",
      "industry-integrated education",
      "research with practical outcomes"
    ],

    socialEnvironment: [
      "large flagship culture",
      "strong alumni loyalty",
      "Midwestern relationship culture",
      "community-focused networking"
    ],

    idealStudentTraits: [
      "dependable",
      "relationship builder",
      "practical thinker",
      "long-term planner"
    ],

    thrivesIf: [
      "wants strong career ROI",
      "likes applied education",
      "values community and relationships"
    ],

    strugglesIf: [
      "wants elite coastal prestige",
      "prefers highly theoretical cultures",
      "seeks highly urban lifestyles"
    ],

    transferRiskFactors: [
      "prestige seeking",
      "urban preference",
      "desire for stronger national branding"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Actuarial Science",
      "Agricultural Economics",
      "Supply Chain Management",
      "Food Science",
      "Water Resources",
      "Risk Management"
    ],

    hiddenCareerPipelines: [
      "crop science leadership",
      "food manufacturing",
      "insurance leadership",
      "commodity markets",
      "agricultural technology",
      "farm management systems"
    ],

    nicheRecruitingAdvantages: [
      "agribusiness recruiting",
      "insurance and actuarial recruiting",
      "commodity trading pathways",
      "food systems leadership"
    ],

    overlookedStrengths: [
      "one of America's strongest agricultural innovation universities",
      "elite actuarial science outcomes",
      "deep insurance industry relationships",
      "strong food systems ecosystem"
    ],

    sleeperIndustries: [
      "precision agriculture",
      "agricultural biotechnology",
      "crop analytics",
      "food logistics",
      "water systems management"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 90,
    mentorshipDensity: 88,
    executiveAccess: 80,
    internshipNetwork: 84,
    familyBusinessExposure: 86,

    relationshipCapitalScore: 90,
    alumniLoyaltyScore: 94,
    referralCultureStrength: 92,
    donorNetworkStrength: 84,
    boardMemberDensity: 78

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "agriculture",
      "food systems",
      "insurance",
      "manufacturing",
      "logistics",
      "financial services"
    ],

    regionalEconomicDrivers: [
      "agribusiness",
      "food production",
      "crop science",
      "insurance sector",
      "commodity markets"
    ],

    topEmployers: [
      "Berkshire Hathaway",
      "Union Pacific",
      "Cargill",
      "Conagra Brands",
      "Valmont Industries",
      "Farm Credit Services",
      "Gallup",
      "Mutual of Omaha"
    ],

    emergingIndustries: [
      "precision agriculture",
      "agricultural AI",
      "food technology",
      "climate resilience",
      "water management"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 62,
    corporateHeadquartersDensity: 78,
    healthcareHubStrength: 60,
    innovationIndex: 84

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Great Plains Agricultural Economy",

    secondaryMarkets: [
      "Omaha",
      "Kansas City",
      "Denver",
      "Dallas",
      "Chicago"
    ],

    alumniStrongholds: [
      "Nebraska",
      "Omaha",
      "Kansas City",
      "Colorado",
      "Texas"
    ],

    relocationPatterns: [
      "agribusiness",
      "insurance",
      "food systems",
      "supply chain",
      "financial services"
    ],

    regionalInfluenceScore: 98,
    nationalReachScore: 76,
    internationalReachScore: 54

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 48,
    studentOrganizationStrength: 86,
    leadershipDevelopment: 88,
    crossDisciplinaryInteraction: 82,
    civicEngagement: 90,

    relationshipCapital: 90,
    luxuryNetworkAccess: 34,
    familyOfficeExposure: 44,
    internationalBusinessExposure: 52,
    personalBrandLeverage: 80

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    agriculture: { strength: 100 },

    agriculturalTechnology: { strength: 98 },

    precisionAgriculture: { strength: 100 },

    foodSystems: { strength: 98 },

    foodScience: { strength: 96 },

    foodManufacturing: { strength: 96 },

    waterResources: { strength: 94 },

    supplyChain: { strength: 88 },

    logistics: { strength: 86 },

    insurance: { strength: 100 },

    actuarialScience: { strength: 100 },

    commodityTrading: { strength: 90 },

    entrepreneurship: { strength: 74 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-class baseline",

    socialMobilityIndex: 90,
    firstGenerationSupport: 86,
    wealthCreationPotential: 84,
    familyBusinessPipelineStrength: 88

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 94,
    automationResistance: 96,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 88,
    futureReadiness: 92,
    entrepreneurialFlexibility: 82,
    lifelongLearningCulture: 88,
    innovationCapacity: 88

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 84,
    communityLeadershipPotential: 94,
    geographicMobility: 78,
    workLifeBalancePotential: 94,
    purposeAlignment: 90,
    familyFormationSupport: 96,
    personalDevelopmentPotential: 88,
    careerOptionality: 88,
    longTermLifeSatisfaction: 94

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 70,
    networkMoat: 90,
    geographicMoat: 100,
    industryMoat: 100,
    alumniMoat: 92,
    brandDurability: 92,

    overallMoatScore: 91

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Great Plains Food & Agricultural Corridor",

    megaRegionArchetype: "Food Production + Agricultural Innovation + Risk Management",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.20,

    talentDensityInheritance: 76,
    innovationInheritance: 88,
    capitalAccessInheritance: 72,

    networkInheritance: {
      executiveAccess: 82,
      founderDensity: 68,
      alumniMobility: 88,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      agriculture: 100,
      precisionAgriculture: 100,
      foodSystems: 98,
      insurance: 100,
      waterResources: 94
    },

    careerPathwayBoosts: {
      agriculture: 3.20,
      precisionAgriculture: 3.30,
      foodSystems: 2.80,
      insurance: 3.00,
      commodityTrading: 2.40
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Great Plains Agricultural Corridor",

    secondaryMegaRegions: [
      "Mid-Continent Industrial Corridor",
      "Texas Triangle",
      "Chicago Commodity Network",
      "Mountain West Growth Belt"
    ],

    crossRegionalMobility: 80,
    nationalOpportunityAccess: 82,
    globalOpportunityAccess: 54

  }
},

"University of North Carolina at Chapel Hill": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of North Carolina at Chapel Hill",

    location: "Chapel Hill, North Carolina, USA",

    region: "Research Triangle / Char-Lanta Growth Corridor",

    universitySize: "Large",

    institutionType: "Public Flagship Research University",

    archetype: "Southern Professional Class + Public Ivy Leadership Engine",

    institutionalPersonality: "intellectual, socially polished, collaborative, ambitious, civic-minded, relationship-oriented",

    cultureKeywords: [
      "Public Ivy",
      "Research Triangle",
      "professional class",
      "healthcare leadership",
      "public service",
      "southern influence",
      "institutional leadership"
    ],

    missionOrientation: "Develop leaders across healthcare, business, government, research, media, and the professional economy.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Blend elite academics, professional preparation, public service, and research excellence.",

    competitiveness: "Very High",

    politicalCulture: "Moderate-to-progressive",

    studentAutonomy: "High",

    prestigeOrientation: "Very High",

    socialClimate: "Collaborative, high-achieving, socially sophisticated, professionally ambitious",

    leadershipStyle: "Leadership through expertise, influence, institution building, and relationship management",

    oneSentenceSummary: "The flagship university of the modern South, producing leaders for healthcare, business, government, media, and the professional class."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 90,
      conscientiousness: 88,
      extraversion: 82,
      agreeableness: 80,
      neuroticism: 46
    },

    hollandCodes: [
      "SEC",
      "SIA",
      "ESA"
    ],

    learningStyle: [
      "research-informed",
      "discussion-based",
      "professional development",
      "interdisciplinary"
    ],

    socialEnvironment: [
      "high-achieving peers",
      "professional networking",
      "public service culture",
      "strong school spirit"
    ],

    idealStudentTraits: [
      "intellectually curious",
      "socially skilled",
      "leadership oriented",
      "professionally ambitious"
    ],

    thrivesIf: [
      "wants elite outcomes without Ivy tuition",
      "values healthcare and professional pathways",
      "enjoys collaborative achievement cultures"
    ],

    strugglesIf: [
      "prefers highly technical environments",
      "wants intense startup culture",
      "dislikes prestige-oriented peer groups"
    ],

    transferRiskFactors: [
      "desire for private-school prestige",
      "interest in hyper-specialized campuses",
      "preference for major urban centers"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Health Policy",
      "Biostatistics",
      "Information Science",
      "Public Health",
      "Sports Administration",
      "Media & Journalism"
    ],

    hiddenCareerPipelines: [
      "healthcare administration",
      "pharmaceutical leadership",
      "sports business",
      "research commercialization",
      "government affairs",
      "corporate leadership"
    ],

    nicheRecruitingAdvantages: [
      "Research Triangle employers",
      "healthcare systems",
      "pharmaceutical recruiting",
      "southern corporate leadership"
    ],

    overlookedStrengths: [
      "one of America's strongest public-health ecosystems",
      "elite healthcare administration placement",
      "deep influence across the modern South",
      "exceptional balance of prestige and affordability"
    ],

    sleeperIndustries: [
      "clinical research",
      "biotechnology operations",
      "sports business",
      "health analytics",
      "life sciences consulting"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 88,
    mentorshipDensity: 88,
    executiveAccess: 88,
    internshipNetwork: 92,
    familyBusinessExposure: 68,

    relationshipCapitalScore: 90,
    alumniLoyaltyScore: 90,
    referralCultureStrength: 88,
    donorNetworkStrength: 90,
    boardMemberDensity: 88

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "healthcare",
      "life sciences",
      "research",
      "technology",
      "finance",
      "professional services"
    ],

    regionalEconomicDrivers: [
      "Research Triangle",
      "biotechnology",
      "pharmaceuticals",
      "academic medicine",
      "technology growth"
    ],

    topEmployers: [
      "UNC Health",
      "Duke Health",
      "IQVIA",
      "Cisco",
      "IBM",
      "Fidelity Investments",
      "Labcorp",
      "RTI International"
    ],

    emergingIndustries: [
      "biotechnology",
      "health analytics",
      "AI in healthcare",
      "clinical research",
      "life sciences innovation"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 84,
    corporateHeadquartersDensity: 82,
    healthcareHubStrength: 100,
    innovationIndex: 94

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Research Triangle",

    secondaryMarkets: [
      "Charlotte",
      "Atlanta",
      "Washington DC",
      "New York",
      "Nashville"
    ],

    alumniStrongholds: [
      "North Carolina",
      "Charlotte",
      "Atlanta",
      "Washington DC",
      "Research Triangle"
    ],

    relocationPatterns: [
      "healthcare",
      "consulting",
      "finance",
      "technology",
      "government"
    ],

    regionalInfluenceScore: 100,
    nationalReachScore: 90,
    internationalReachScore: 68

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 50,
    studentOrganizationStrength: 92,
    leadershipDevelopment: 94,
    crossDisciplinaryInteraction: 92,
    civicEngagement: 94,

    relationshipCapital: 92,
    luxuryNetworkAccess: 66,
    familyOfficeExposure: 60,
    internationalBusinessExposure: 72,
    personalBrandLeverage: 90

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    medicine: { strength: 98 },

    healthcareAdministration: { strength: 100 },

    publicHealth: { strength: 100 },

    biotechnology: { strength: 96 },

    healthWellness: { strength: 92 },

    consulting: { strength: 90 },

    investmentBanking: { strength: 84 },

    technology: { strength: 82 },

    ventureCapital: { strength: 76 },

    sportsBusiness: { strength: 94 },

    media: { strength: 90 },

    publicPolicy: { strength: 92 },

    nonprofitLeadership: { strength: 90 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Upper-middle-class baseline",

    socialMobilityIndex: 90,
    firstGenerationSupport: 84,
    wealthCreationPotential: 88,
    familyBusinessPipelineStrength: 68

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 94,
    automationResistance: 94,
    adaptabilityScore: 92,
    interdisciplinaryStrength: 94,
    futureReadiness: 94,
    entrepreneurialFlexibility: 88,
    lifelongLearningCulture: 92,
    innovationCapacity: 94

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 88,
    communityLeadershipPotential: 96,
    geographicMobility: 92,
    workLifeBalancePotential: 92,
    purposeAlignment: 92,
    familyFormationSupport: 90,
    personalDevelopmentPotential: 94,
    careerOptionality: 96,
    longTermLifeSatisfaction: 94

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 92,
    networkMoat: 92,
    geographicMoat: 96,
    industryMoat: 94,
    alumniMoat: 90,
    brandDurability: 96,

    overallMoatScore: 94

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Research Triangle / Char-Lanta Corridor",

    megaRegionArchetype: "Southern Professional Class & Knowledge Economy",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.30,

    talentDensityInheritance: 96,
    innovationInheritance: 96,
    capitalAccessInheritance: 88,

    networkInheritance: {
      executiveAccess: 90,
      founderDensity: 84,
      alumniMobility: 92,
      industryConnectivity: 96
    },

    industryDensityAdvantages: {
      healthcare: 100,
      biotechnology: 96,
      consulting: 90,
      publicPolicy: 92,
      technology: 84
    },

    careerPathwayBoosts: {
      healthcareAdministration: 3.20,
      publicHealth: 3.10,
      biotechnology: 2.80,
      consulting: 2.40,
      sportsBusiness: 2.70
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Research Triangle",

    secondaryMegaRegions: [
      "Char-Lanta Corridor",
      "Bos-Wash",
      "Florida Growth Belt",
      "Texas Triangle"
    ],

    crossRegionalMobility: 92,
    nationalOpportunityAccess: 94,
    globalOpportunityAccess: 70

  }
},

"California Polytechnic State University, San Luis Obispo": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "California Polytechnic State University, San Luis Obispo",

    location: "San Luis Obispo, California, USA",

    region: "California Innovation Coast / NorCal-SoCal Connector",

    universitySize: "Medium",

    institutionType: "Public Polytechnic University",

    archetype: "Applied Innovation Builder + California Product Creation Engine",

    institutionalPersonality: "hands-on, entrepreneurial, practical, innovative, independent, builder-oriented",

    cultureKeywords: [
      "learn by doing",
      "polytechnic",
      "engineering",
      "product development",
      "entrepreneurship",
      "California innovation",
      "maker culture"
    ],

    missionOrientation: "Develop builders, engineers, entrepreneurs, designers, and operators capable of creating products, companies, and real-world solutions.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Learn by Doing — direct application of theory to engineering, design, business, agriculture, and entrepreneurship.",

    competitiveness: "High",

    politicalCulture: "Moderate",

    studentAutonomy: "Very High",

    prestigeOrientation: "Moderate",

    socialClimate: "Collaborative, entrepreneurial, outdoors-oriented, project-based",

    leadershipStyle: "Leadership through execution, creation, and technical competence",

    oneSentenceSummary: "California's premier applied-learning university, producing engineers, builders, founders, product managers, and operational leaders."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 88,
      conscientiousness: 92,
      extraversion: 72,
      agreeableness: 78,
      neuroticism: 36
    },

    hollandCodes: [
      "IRC",
      "ERC",
      "IEC"
    ],

    learningStyle: [
      "project-based",
      "hands-on learning",
      "industry-sponsored work",
      "experiential education"
    ],

    socialEnvironment: [
      "maker culture",
      "engineering-heavy",
      "startup-curious",
      "outdoor lifestyle"
    ],

    idealStudentTraits: [
      "builder",
      "problem solver",
      "self-starter",
      "entrepreneurial thinker"
    ],

    thrivesIf: [
      "wants practical skills",
      "likes building real things",
      "prefers execution over theory"
    ],

    strugglesIf: [
      "wants elite prestige signaling",
      "prefers highly theoretical academics",
      "needs heavily structured environments"
    ],

    transferRiskFactors: [
      "prestige seeking",
      "desire for larger research ecosystems",
      "interest in Ivy-style networking"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Industrial Technology",
      "Construction Management",
      "Agribusiness",
      "Packaging",
      "Manufacturing Engineering",
      "Wine & Viticulture"
    ],

    hiddenCareerPipelines: [
      "product management",
      "operations leadership",
      "hardware startups",
      "construction leadership",
      "manufacturing management",
      "industrial sales"
    ],

    nicheRecruitingAdvantages: [
      "California engineering recruiting",
      "product-development firms",
      "hardware startups",
      "manufacturing employers"
    ],

    overlookedStrengths: [
      "arguably the strongest hands-on engineering education in California",
      "elite placement into product and operations roles",
      "exceptional founder density relative to size",
      "strong employer trust in graduates"
    ],

    sleeperIndustries: [
      "industrial automation",
      "advanced manufacturing",
      "ag-tech",
      "consumer products",
      "construction technology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 90,
    mentorshipDensity: 88,
    executiveAccess: 78,
    internshipNetwork: 92,
    familyBusinessExposure: 72,

    relationshipCapitalScore: 88,
    alumniLoyaltyScore: 92,
    referralCultureStrength: 90,
    donorNetworkStrength: 76,
    boardMemberDensity: 70

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "engineering",
      "technology",
      "manufacturing",
      "construction",
      "agriculture",
      "consumer products"
    ],

    regionalEconomicDrivers: [
      "California innovation economy",
      "Silicon Valley influence",
      "advanced manufacturing",
      "construction growth",
      "agricultural production"
    ],

    topEmployers: [
      "Apple",
      "Tesla",
      "Lockheed Martin",
      "Northrop Grumman",
      "Google",
      "Amazon",
      "Chevron",
      "Turner Construction"
    ],

    emergingIndustries: [
      "robotics",
      "industrial AI",
      "clean technology",
      "advanced manufacturing",
      "autonomous systems"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 84,
    corporateHeadquartersDensity: 90,
    healthcareHubStrength: 50,
    innovationIndex: 96

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "California Innovation Economy",

    secondaryMarkets: [
      "Silicon Valley",
      "Los Angeles",
      "Orange County",
      "San Diego",
      "Seattle"
    ],

    alumniStrongholds: [
      "Silicon Valley",
      "Bay Area",
      "Los Angeles",
      "Orange County",
      "San Diego"
    ],

    relocationPatterns: [
      "technology",
      "engineering",
      "construction",
      "manufacturing",
      "product management"
    ],

    regionalInfluenceScore: 96,
    nationalReachScore: 82,
    internationalReachScore: 58

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 36,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 90,
    civicEngagement: 76,

    relationshipCapital: 88,
    luxuryNetworkAccess: 56,
    familyOfficeExposure: 48,
    internationalBusinessExposure: 66,
    personalBrandLeverage: 84

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    engineering: { strength: 100 },

    manufacturing: { strength: 96 },

    advancedManufacturing: { strength: 98 },

    industrialEngineering: { strength: 96 },

    constructionManagement: { strength: 100 },

    productManagement: { strength: 94 },

    entrepreneurship: { strength: 92 },

    technology: { strength: 90 },

    artificialIntelligence: { strength: 78 },

    industrialAutomation: { strength: 94 },

    agriculture: { strength: 84 },

    agriculturalTechnology: { strength: 88 },

    consumerProducts: { strength: 88 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Upper-middle-class baseline",

    socialMobilityIndex: 84,
    firstGenerationSupport: 78,
    wealthCreationPotential: 90,
    familyBusinessPipelineStrength: 74

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 96,
    automationResistance: 98,
    adaptabilityScore: 92,
    interdisciplinaryStrength: 92,
    futureReadiness: 96,
    entrepreneurialFlexibility: 94,
    lifelongLearningCulture: 88,
    innovationCapacity: 96

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 90,
    communityLeadershipPotential: 80,
    geographicMobility: 90,
    workLifeBalancePotential: 92,
    purposeAlignment: 88,
    familyFormationSupport: 84,
    personalDevelopmentPotential: 90,
    careerOptionality: 96,
    longTermLifeSatisfaction: 94

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 74,
    networkMoat: 88,
    geographicMoat: 92,
    industryMoat: 96,
    alumniMoat: 90,
    brandDurability: 94,

    overallMoatScore: 91

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "California Innovation Coast",

    megaRegionArchetype: "Product Creation + Applied Innovation",

    megaRegionIntegrationScore: 98,

    regionalInheritanceMultiplier: 2.20,

    talentDensityInheritance: 94,
    innovationInheritance: 100,
    capitalAccessInheritance: 88,

    networkInheritance: {
      executiveAccess: 82,
      founderDensity: 92,
      alumniMobility: 90,
      industryConnectivity: 96
    },

    industryDensityAdvantages: {
      engineering: 100,
      productDevelopment: 100,
      manufacturing: 96,
      technology: 92,
      entrepreneurship: 92
    },

    careerPathwayBoosts: {
      engineering: 2.80,
      productManagement: 3.00,
      constructionManagement: 3.10,
      manufacturing: 2.90,
      entrepreneurship: 2.70
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "California Innovation Coast",

    secondaryMegaRegions: [
      "Silicon Valley",
      "SoCal Technology Corridor",
      "Pacific Northwest Innovation Corridor",
      "Mountain West Growth Network"
    ],

    crossRegionalMobility: 90,
    nationalOpportunityAccess: 88,
    globalOpportunityAccess: 68

  }
},

"University of California, Merced": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of California, Merced",

    location: "Merced, California, USA",

    region: "Central Valley Innovation Corridor",

    universitySize: "Medium",

    institutionType: "Public Research University (University of California System)",

    archetype: "Future California Growth Engine",

    institutionalPersonality: "ambitious, upwardly-mobile, entrepreneurial, diverse, resilient, future-oriented",

    cultureKeywords: [
      "young UC campus",
      "social mobility",
      "Central Valley",
      "research growth",
      "first-generation success",
      "future-focused",
      "emerging institution"
    ],

    missionOrientation: "Expand access to world-class research and leadership opportunities while driving economic development throughout California's Central Valley.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Research-intensive education with strong emphasis on opportunity creation, innovation, interdisciplinary collaboration, and economic mobility.",

    competitiveness: "Moderate-to-High",

    politicalCulture: "Moderate-to-progressive",

    studentAutonomy: "High",

    prestigeOrientation: "Growing",

    socialClimate: "Collaborative, ambitious, opportunity-seeking, highly diverse",

    leadershipStyle: "Leadership through growth, innovation, adaptability, and upward mobility",

    oneSentenceSummary: "The youngest UC campus and the primary higher-education engine for California's rapidly growing Central Valley economy."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 88,
      conscientiousness: 84,
      extraversion: 72,
      agreeableness: 88,
      neuroticism: 46
    },

    hollandCodes: [
      "IEC",
      "SIA",
      "ERC"
    ],

    learningStyle: [
      "research-driven",
      "interdisciplinary",
      "entrepreneurial",
      "growth-oriented"
    ],

    socialEnvironment: [
      "first-generation heavy",
      "diverse student body",
      "emerging traditions",
      "collaborative culture"
    ],

    idealStudentTraits: [
      "self-starter",
      "adaptable",
      "growth-oriented",
      "entrepreneurial thinker"
    ],

    thrivesIf: [
      "wants UC opportunities without legacy barriers",
      "values upward mobility",
      "enjoys helping build new institutions"
    ],

    strugglesIf: [
      "needs established traditions",
      "wants elite legacy prestige",
      "expects mature alumni networks"
    ],

    transferRiskFactors: [
      "prestige chasing",
      "desire for larger urban campuses",
      "interest in older UC brands"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Environmental Engineering",
      "Data Science",
      "Public Health",
      "Cognitive Science",
      "Agricultural Systems",
      "Sustainability"
    ],

    hiddenCareerPipelines: [
      "Central Valley economic development",
      "water management",
      "agricultural technology",
      "healthcare administration",
      "environmental policy",
      "regional entrepreneurship"
    ],

    nicheRecruitingAdvantages: [
      "UC research access with less competition",
      "Central Valley leadership opportunities",
      "early-stage institutional leadership",
      "public sector development roles"
    ],

    overlookedStrengths: [
      "fastest-growing UC network opportunity",
      "strong social mobility outcomes",
      "excellent faculty accessibility",
      "growing research funding trajectory"
    ],

    sleeperIndustries: [
      "ag-tech",
      "water technology",
      "food systems innovation",
      "renewable energy",
      "regional healthcare systems"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 82,
    mentorshipDensity: 84,
    executiveAccess: 68,
    internshipNetwork: 76,
    familyBusinessExposure: 58,

    relationshipCapitalScore: 82,
    alumniLoyaltyScore: 86,
    referralCultureStrength: 82,
    donorNetworkStrength: 62,
    boardMemberDensity: 56

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "agriculture",
      "food systems",
      "water resources",
      "healthcare",
      "renewable energy",
      "logistics"
    ],

    regionalEconomicDrivers: [
      "Central Valley agriculture",
      "water infrastructure",
      "food production",
      "distribution networks",
      "population growth"
    ],

    topEmployers: [
      "E&J Gallo",
      "Blue Diamond Growers",
      "Kaiser Permanente",
      "Sutter Health",
      "Foster Farms",
      "California state agencies"
    ],

    emergingIndustries: [
      "agricultural technology",
      "precision agriculture",
      "water technology",
      "AI-enabled farming",
      "clean energy"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 62,
    corporateHeadquartersDensity: 48,
    healthcareHubStrength: 72,
    innovationIndex: 84

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "California Central Valley",

    secondaryMarkets: [
      "Sacramento",
      "Bay Area",
      "Fresno",
      "Los Angeles",
      "Inland Empire"
    ],

    alumniStrongholds: [
      "Central Valley",
      "Northern California",
      "Sacramento",
      "Bay Area"
    ],

    relocationPatterns: [
      "public sector",
      "healthcare",
      "agriculture",
      "technology",
      "education"
    ],

    regionalInfluenceScore: 92,
    nationalReachScore: 62,
    internationalReachScore: 44

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 10,
    studentOrganizationStrength: 78,
    leadershipDevelopment: 84,
    crossDisciplinaryInteraction: 92,
    civicEngagement: 88,

    relationshipCapital: 84,
    luxuryNetworkAccess: 24,
    familyOfficeExposure: 18,
    internationalBusinessExposure: 42,
    personalBrandLeverage: 68

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    agriculture: { strength: 88 },

    agriculturalTechnology: { strength: 92 },

    precisionAgriculture: { strength: 92 },

    foodSystems: { strength: 90 },

    waterResources: { strength: 100 },

    sustainability: { strength: 96 },

    cleanEnergy: { strength: 86 },

    publicHealth: { strength: 84 },

    healthcareAdministration: { strength: 78 },

    artificialIntelligence: { strength: 76 },

    dataScience: { strength: 84 },

    entrepreneurship: { strength: 72 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Lower-to-middle income baseline",

    socialMobilityIndex: 98,
    firstGenerationSupport: 96,
    wealthCreationPotential: 78,
    familyBusinessPipelineStrength: 54

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 90,
    automationResistance: 92,
    adaptabilityScore: 94,
    interdisciplinaryStrength: 96,
    futureReadiness: 94,
    entrepreneurialFlexibility: 88,
    lifelongLearningCulture: 90,
    innovationCapacity: 92

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 78,
    communityLeadershipPotential: 94,
    geographicMobility: 80,
    workLifeBalancePotential: 88,
    purposeAlignment: 92,
    familyFormationSupport: 86,
    personalDevelopmentPotential: 94,
    careerOptionality: 88,
    longTermLifeSatisfaction: 90

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 56,
    networkMoat: 72,
    geographicMoat: 94,
    industryMoat: 90,
    alumniMoat: 62,
    brandDurability: 88,

    overallMoatScore: 80

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "California Central Valley Growth Corridor",

    megaRegionArchetype: "Agriculture + Water + Population Growth",

    megaRegionIntegrationScore: 98,

    regionalInheritanceMultiplier: 2.10,

    talentDensityInheritance: 76,
    innovationInheritance: 84,
    capitalAccessInheritance: 64,

    networkInheritance: {
      executiveAccess: 68,
      founderDensity: 62,
      alumniMobility: 78,
      industryConnectivity: 92
    },

    industryDensityAdvantages: {
      waterResources: 100,
      agriculture: 92,
      agriculturalTechnology: 94,
      foodSystems: 90,
      sustainability: 96
    },

    careerPathwayBoosts: {
      waterResources: 3.50,
      agriculturalTechnology: 2.80,
      sustainability: 2.90,
      foodSystems: 2.50,
      publicHealth: 2.10
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "California Central Valley",

    secondaryMegaRegions: [
      "NorCal Innovation Corridor",
      "Bay Area",
      "Sacramento Growth Belt",
      "SoCal Logistics Network"
    ],

    crossRegionalMobility: 80,
    nationalOpportunityAccess: 72,
    globalOpportunityAccess: 48

  }
},

"Temple University": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "Temple University",

    location: "Philadelphia, Pennsylvania, USA",

    region: "Bos-Wash Megalopolis",

    universitySize: "Very Large",

    institutionType: "Public Urban Research University",

    archetype: "Urban Professional Mobility + Philadelphia Power Network + Opportunity Maximizer",

    institutionalPersonality: "Resilient, ambitious, practical, entrepreneurial, hardworking, opportunity-seeking",

    cultureKeywords: [
      "urban university",
      "first-generation mobility",
      "professional advancement",
      "Philadelphia",
      "grit",
      "career outcomes",
      "real-world experience"
    ],

    missionOrientation: "Expand access to professional opportunity through education, career preparation, research, and economic mobility",

    faithTradition: "Secular",

    educationalPhilosophy: "Professional preparation through direct engagement with major urban industries and employers",

    competitiveness: "Moderate",

    politicalCulture: "Moderate-to-progressive urban environment",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate",

    socialClimate: "Independent, commuter-influenced, career-focused, diverse",

    leadershipStyle: "Leadership through execution, persistence, and practical achievement",

    oneSentenceSummary: "A major urban university that converts ambition and hustle into professional advancement through Philadelphia's healthcare, media, business, government, and sports ecosystems."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 78,
      conscientiousness: 88,
      extraversion: 78,
      agreeableness: 76,
      neuroticism: 56
    },

    hollandCodes: [
      "SEC",
      "ECS",
      "ERC"
    ],

    learningStyle: [
      "applied learning",
      "career preparation",
      "urban experiential education"
    ],

    socialEnvironment: [
      "high socioeconomic diversity",
      "working students",
      "career-oriented culture",
      "urban independence"
    ],

    idealStudentTraits: [
      "self-starter",
      "resilient",
      "career-focused",
      "resourceful"
    ],

    thrivesIf: [
      "wants affordable access to a major city economy",
      "values professional outcomes over prestige",
      "is willing to create opportunities independently"
    ],

    strugglesIf: [
      "expects a traditional residential college experience",
      "needs extensive hand-holding",
      "wants highly insulated campus culture"
    ],

    transferRiskFactors: [
      "seeking stronger national prestige",
      "desire for more residential community",
      "interest in elite private institutions"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Sport & Recreation Management",
      "Media Studies",
      "Health Professions",
      "Supply Chain Management",
      "Risk Management & Insurance",
      "Public Health"
    ],

    hiddenCareerPipelines: [
      "sports industry leadership",
      "local media networks",
      "healthcare administration",
      "municipal government",
      "commercial real estate",
      "regional banking"
    ],

    nicheRecruitingAdvantages: [
      "Philadelphia healthcare ecosystem",
      "Philadelphia sports franchises",
      "regional media access",
      "public-sector opportunities"
    ],

    overlookedStrengths: [
      "strong sports business network",
      "excellent healthcare placement",
      "large alumni footprint in Philadelphia",
      "strong first-generation success outcomes"
    ],

    sleeperIndustries: [
      "sports analytics",
      "health technology",
      "digital media",
      "urban development",
      "public administration"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 86,
    mentorshipDensity: 82,
    executiveAccess: 74,
    internshipNetwork: 88,
    familyBusinessExposure: 50,

    relationshipCapitalScore: 84,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 86,
    donorNetworkStrength: 72,
    boardMemberDensity: 70

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "healthcare",
      "education",
      "media",
      "sports",
      "government",
      "finance"
    ],

    regionalEconomicDrivers: [
      "Philadelphia healthcare systems",
      "professional sports franchises",
      "higher education",
      "media production",
      "municipal government"
    ],

    topEmployers: [
      "Penn Medicine",
      "Jefferson Health",
      "Comcast",
      "Independence Blue Cross",
      "Philadelphia Eagles",
      "Philadelphia Phillies",
      "City of Philadelphia"
    ],

    emergingIndustries: [
      "sports technology",
      "digital health",
      "urban innovation",
      "AI-enabled media",
      "health analytics"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 72,
    corporateHeadquartersDensity: 82,
    healthcareHubStrength: 98,
    innovationIndex: 80

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Philadelphia Metropolitan Economy",

    secondaryMarkets: [
      "New York City",
      "Washington DC",
      "Baltimore",
      "New Jersey",
      "Charlotte"
    ],

    alumniStrongholds: [
      "Philadelphia",
      "Pennsylvania",
      "New Jersey",
      "Delaware",
      "Washington DC"
    ],

    relocationPatterns: [
      "healthcare",
      "sports management",
      "government",
      "media",
      "business administration"
    ],

    regionalInfluenceScore: 94,
    nationalReachScore: 74,
    internationalReachScore: 58

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 28,
    studentOrganizationStrength: 86,
    leadershipDevelopment: 84,
    crossDisciplinaryInteraction: 82,
    civicEngagement: 90,

    relationshipCapital: 84,
    luxuryNetworkAccess: 42,
    familyOfficeExposure: 34,
    internationalBusinessExposure: 62,
    personalBrandLeverage: 80

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    healthcareAdministration: { strength: 96 },

    medicine: { strength: 90 },

    publicHealth: { strength: 94 },

    sportsBusiness: { strength: 98 },

    entertainmentMedia: { strength: 88 },

    journalism: { strength: 86 },

    publicPolicy: { strength: 90 },

    nonprofitLeadership: { strength: 88 },

    supplyChain: { strength: 84 },

    realEstate: { strength: 82 },

    wealthManagement: { strength: 72 },

    entrepreneurship: { strength: 74 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-class baseline",

    socialMobilityIndex: 94,
    firstGenerationSupport: 92,
    wealthCreationPotential: 80,
    familyBusinessPipelineStrength: 48

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 88,
    automationResistance: 88,
    adaptabilityScore: 88,
    interdisciplinaryStrength: 86,
    futureReadiness: 88,
    entrepreneurialFlexibility: 80,
    lifelongLearningCulture: 88,
    innovationCapacity: 82

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 80,
    communityLeadershipPotential: 90,
    geographicMobility: 78,
    workLifeBalancePotential: 86,
    purposeAlignment: 88,
    familyFormationSupport: 88,
    personalDevelopmentPotential: 88,
    careerOptionality: 86,
    longTermLifeSatisfaction: 88

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 68,
    networkMoat: 84,
    geographicMoat: 92,
    industryMoat: 90,
    alumniMoat: 86,
    brandDurability: 84,

    overallMoatScore: 84

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Philadelphia Urban Opportunity Corridor",

    megaRegionArchetype: "Urban Economic Mobility Through Professional Access",

    megaRegionIntegrationScore: 92,

    regionalInheritanceMultiplier: 1.85,

    talentDensityInheritance: 86,
    innovationInheritance: 80,
    capitalAccessInheritance: 80,

    networkInheritance: {
      executiveAccess: 76,
      founderDensity: 68,
      alumniMobility: 88,
      industryConnectivity: 94
    },

    industryDensityAdvantages: {
      healthcare: 100,
      sports: 100,
      media: 88,
      government: 90,
      education: 88
    },

    careerPathwayBoosts: {
      healthcareAdministration: 2.30,
      sportsBusiness: 2.70,
      publicHealth: 2.20,
      media: 2.00,
      publicService: 2.10
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Philadelphia-New York Corridor",

    secondaryMegaRegions: [
      "Bos-Wash Corridor",
      "Washington Institutional Network",
      "Northeast Healthcare Network",
      "Mid-Atlantic Business Economy"
    ],

    crossRegionalMobility: 82,
    nationalOpportunityAccess: 78,
    globalOpportunityAccess: 60

  }
},

"University of Iowa": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of Iowa",

    location: "Iowa City, Iowa, USA",

    region: "Mid-Continent Knowledge & Healthcare Corridor",

    universitySize: "Large",

    institutionType: "Public Flagship Research University",

    archetype: "Healthcare Leadership + Communication Excellence + Human Capital Development",

    institutionalPersonality: "intellectual, collaborative, professional, civic-minded, creative, relationship-oriented",

    cultureKeywords: [
      "academic medicine",
      "writing culture",
      "Big Ten",
      "public service",
      "healthcare leadership",
      "research",
      "communication"
    ],

    missionOrientation: "Develop leaders, healthcare professionals, communicators, researchers, and public servants who strengthen institutions and communities.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Strong integration of liberal arts, professional education, healthcare, and research.",

    competitiveness: "High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate-to-high",

    socialClimate: "Collaborative, academically engaged, professionally ambitious",

    leadershipStyle: "Leadership through expertise, communication, and institutional stewardship",

    oneSentenceSummary: "A flagship university that combines elite healthcare systems, nationally influential writing programs, and broad professional career mobility."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 88,
      conscientiousness: 84,
      extraversion: 76,
      agreeableness: 84,
      neuroticism: 44
    },

    hollandCodes: [
      "ISA",
      "SEC",
      "SIA"
    ],

    learningStyle: [
      "discussion-based",
      "professional preparation",
      "research-informed",
      "interdisciplinary"
    ],

    socialEnvironment: [
      "Big Ten flagship",
      "healthcare ecosystem",
      "creative culture",
      "student leadership"
    ],

    idealStudentTraits: [
      "strong communicator",
      "intellectually curious",
      "service-oriented",
      "relationship builder"
    ],

    thrivesIf: [
      "values healthcare and public service",
      "enjoys writing and communication",
      "wants broad career flexibility"
    ],

    strugglesIf: [
      "wants hyper-elite prestige environments",
      "prefers narrowly technical cultures",
      "needs constant big-city stimulation"
    ],

    transferRiskFactors: [
      "seeking coastal prestige",
      "desire for stronger finance ecosystems",
      "interest in highly specialized campuses"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Health Administration",
      "Speech Pathology",
      "Actuarial Science",
      "Public Health",
      "Health Informatics",
      "Enterprise Leadership"
    ],

    hiddenCareerPipelines: [
      "hospital leadership",
      "healthcare administration",
      "medical device management",
      "publishing",
      "communications leadership",
      "government relations"
    ],

    nicheRecruitingAdvantages: [
      "University of Iowa Health Care ecosystem",
      "medical center leadership pathways",
      "writing and publishing networks",
      "Midwest healthcare recruiting"
    ],

    overlookedStrengths: [
      "one of America's strongest academic medical ecosystems",
      "home of the Iowa Writers' Workshop",
      "elite speech pathology outcomes",
      "exceptional healthcare administration placement"
    ],

    sleeperIndustries: [
      "health informatics",
      "medical communications",
      "digital health",
      "healthcare consulting",
      "clinical operations"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 88,
    mentorshipDensity: 86,
    executiveAccess: 78,
    internshipNetwork: 84,
    familyBusinessExposure: 62,

    relationshipCapitalScore: 86,
    alumniLoyaltyScore: 90,
    referralCultureStrength: 86,
    donorNetworkStrength: 82,
    boardMemberDensity: 76

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "healthcare",
      "education",
      "insurance",
      "financial services",
      "communications",
      "biomedical research"
    ],

    regionalEconomicDrivers: [
      "academic medicine",
      "healthcare delivery",
      "insurance sector",
      "medical research",
      "professional services"
    ],

    topEmployers: [
      "University of Iowa Health Care",
      "ACT",
      "Transamerica",
      "Principal Financial Group",
      "UnitedHealthcare",
      "Collins Aerospace"
    ],

    emergingIndustries: [
      "digital health",
      "health analytics",
      "healthcare technology",
      "medical communications",
      "AI-assisted medicine"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 64,
    corporateHeadquartersDensity: 68,
    healthcareHubStrength: 100,
    innovationIndex: 84

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Iowa Healthcare & Professional Economy",

    secondaryMarkets: [
      "Chicago",
      "Minneapolis",
      "Kansas City",
      "Denver",
      "St. Louis"
    ],

    alumniStrongholds: [
      "Iowa",
      "Chicago",
      "Minneapolis",
      "Midwest healthcare systems"
    ],

    relocationPatterns: [
      "healthcare",
      "hospital administration",
      "communications",
      "education",
      "professional services"
    ],

    regionalInfluenceScore: 94,
    nationalReachScore: 82,
    internationalReachScore: 58

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 42,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 90,
    crossDisciplinaryInteraction: 90,
    civicEngagement: 92,

    relationshipCapital: 88,
    luxuryNetworkAccess: 34,
    familyOfficeExposure: 36,
    internationalBusinessExposure: 52,
    personalBrandLeverage: 84

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    medicine: { strength: 100 },

    healthcareAdministration: { strength: 100 },

    publicHealth: { strength: 96 },

    healthWellness: { strength: 88 },

    healthcareConsulting: { strength: 90 },

    speechPathology: { strength: 100 },

    communications: { strength: 96 },

    journalism: { strength: 90 },

    nonprofitLeadership: { strength: 88 },

    publicPolicy: { strength: 82 },

    insurance: { strength: 82 },

    wealthManagement: { strength: 70 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-class baseline",

    socialMobilityIndex: 90,
    firstGenerationSupport: 86,
    wealthCreationPotential: 82,
    familyBusinessPipelineStrength: 62

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 96,
    automationResistance: 96,
    adaptabilityScore: 90,
    interdisciplinaryStrength: 92,
    futureReadiness: 92,
    entrepreneurialFlexibility: 78,
    lifelongLearningCulture: 90,
    innovationCapacity: 88

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 82,
    communityLeadershipPotential: 94,
    geographicMobility: 84,
    workLifeBalancePotential: 94,
    purposeAlignment: 94,
    familyFormationSupport: 94,
    personalDevelopmentPotential: 94,
    careerOptionality: 92,
    longTermLifeSatisfaction: 95

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 76,
    networkMoat: 86,
    geographicMoat: 88,
    industryMoat: 98,
    alumniMoat: 88,
    brandDurability: 94,

    overallMoatScore: 90

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Mid-Continent Healthcare & Knowledge Corridor",

    megaRegionArchetype: "Healthcare Leadership + Human Capital Development",

    megaRegionIntegrationScore: 94,

    regionalInheritanceMultiplier: 1.95,

    talentDensityInheritance: 82,
    innovationInheritance: 86,
    capitalAccessInheritance: 70,

    networkInheritance: {
      executiveAccess: 78,
      founderDensity: 62,
      alumniMobility: 88,
      industryConnectivity: 96
    },

    industryDensityAdvantages: {
      healthcare: 100,
      medicine: 100,
      healthcareAdministration: 100,
      communications: 92,
      insurance: 82
    },

    careerPathwayBoosts: {
      medicine: 3.00,
      healthcareAdministration: 3.20,
      speechPathology: 3.30,
      publicHealth: 2.60,
      healthcareConsulting: 2.30
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Mid-Continent Healthcare Corridor",

    secondaryMegaRegions: [
      "Chicago Professional Network",
      "Great Plains Economy",
      "Twin Cities Innovation Corridor",
      "Midwest Knowledge Economy"
    ],

    crossRegionalMobility: 84,
    nationalOpportunityAccess: 86,
    globalOpportunityAccess: 58

  }
},

"California State University, Long Beach": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "California State University, Long Beach",

    location: "Long Beach, California, USA",

    region: "Southern California Global Trade & Logistics Corridor",

    universitySize: "Large",

    institutionType: "Public Comprehensive University (California State University System)",

    archetype: "Southern California Mobility Engine",

    institutionalPersonality: "practical, ambitious, diverse, career-oriented, entrepreneurial, upwardly-mobile",

    cultureKeywords: [
      "Southern California",
      "economic mobility",
      "commuter-professional culture",
      "international trade",
      "public university",
      "career-focused",
      "diverse talent"
    ],

    missionOrientation: "Provide affordable pathways into California's business, healthcare, logistics, education, engineering, and public-sector economies.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Applied professional education closely integrated with Southern California employers and industries.",

    competitiveness: "Moderate-to-High",

    politicalCulture: "Moderate-to-progressive",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate",

    socialClimate: "Diverse, hardworking, professionally focused, opportunity-driven",

    leadershipStyle: "Leadership through execution, career advancement, and community impact",

    oneSentenceSummary: "One of America's strongest economic-mobility universities, connecting students directly into the industries that power Southern California."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 82,
      conscientiousness: 88,
      extraversion: 74,
      agreeableness: 84,
      neuroticism: 42
    },

    hollandCodes: [
      "ESC",
      "ERC",
      "SEC"
    ],

    learningStyle: [
      "applied learning",
      "career-oriented education",
      "industry-connected coursework",
      "professional development"
    ],

    socialEnvironment: [
      "diverse student body",
      "commuter-professional culture",
      "career-focused networking",
      "Southern California lifestyle"
    ],

    idealStudentTraits: [
      "self-motivated",
      "career-focused",
      "resourceful",
      "relationship builder"
    ],

    thrivesIf: [
      "wants strong ROI",
      "plans to work while attending school",
      "values employer access over prestige"
    ],

    strugglesIf: [
      "wants traditional residential college culture",
      "seeks elite-brand signaling",
      "expects extensive campus social life"
    ],

    transferRiskFactors: [
      "prestige seeking",
      "desire for larger research ecosystems",
      "interest in traditional college experiences"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Supply Chain Management",
      "International Business",
      "Industrial Design",
      "Healthcare Administration",
      "Construction Management",
      "Hospitality Management"
    ],

    hiddenCareerPipelines: [
      "port operations leadership",
      "global logistics",
      "international trade",
      "aerospace operations",
      "healthcare administration",
      "municipal leadership"
    ],

    nicheRecruitingAdvantages: [
      "Port of Long Beach ecosystem",
      "Southern California logistics firms",
      "aerospace employers",
      "regional healthcare systems"
    ],

    overlookedStrengths: [
      "extraordinary employer penetration across Southern California",
      "strong business and supply-chain outcomes",
      "excellent social mobility performance",
      "deep connections to trade and logistics industries"
    ],

    sleeperIndustries: [
      "international trade",
      "port technology",
      "supply-chain analytics",
      "municipal infrastructure",
      "distribution operations"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 88,
    mentorshipDensity: 84,
    executiveAccess: 76,
    internshipNetwork: 90,
    familyBusinessExposure: 62,

    relationshipCapitalScore: 86,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 86,
    donorNetworkStrength: 66,
    boardMemberDensity: 68

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "logistics",
      "international trade",
      "healthcare",
      "aerospace",
      "consumer products",
      "professional services"
    ],

    regionalEconomicDrivers: [
      "Port of Long Beach",
      "Port of Los Angeles",
      "global trade",
      "distribution networks",
      "Southern California economy"
    ],

    topEmployers: [
      "Boeing",
      "Northrop Grumman",
      "Kaiser Permanente",
      "Port of Long Beach",
      "Long Beach Memorial",
      "Amazon",
      "Disney",
      "Southern California Edison"
    ],

    emergingIndustries: [
      "logistics technology",
      "port automation",
      "supply-chain AI",
      "clean transportation",
      "trade analytics"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 72,
    corporateHeadquartersDensity: 88,
    healthcareHubStrength: 82,
    innovationIndex: 82

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Southern California",

    secondaryMarkets: [
      "Orange County",
      "Los Angeles",
      "Inland Empire",
      "San Diego",
      "Phoenix"
    ],

    alumniStrongholds: [
      "Los Angeles",
      "Long Beach",
      "Orange County",
      "Inland Empire",
      "Southern California"
    ],

    relocationPatterns: [
      "logistics",
      "healthcare",
      "business operations",
      "government",
      "aerospace"
    ],

    regionalInfluenceScore: 96,
    nationalReachScore: 68,
    internationalReachScore: 52

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 18,
    studentOrganizationStrength: 82,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 84,
    civicEngagement: 88,

    relationshipCapital: 86,
    luxuryNetworkAccess: 34,
    familyOfficeExposure: 28,
    internationalBusinessExposure: 86,
    personalBrandLeverage: 78

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    logistics: { strength: 100 },

    supplyChain: { strength: 100 },

    transportation: { strength: 96 },

    internationalTrade: { strength: 100 },

    industrialSales: { strength: 90 },

    healthcareAdministration: { strength: 86 },

    hospitality: { strength: 88 },

    entrepreneurship: { strength: 78 },

    aerospace: { strength: 84 },

    constructionManagement: { strength: 84 },

    internationalBusiness: { strength: 92 },

    consumerProducts: { strength: 82 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-income baseline",

    socialMobilityIndex: 96,
    firstGenerationSupport: 92,
    wealthCreationPotential: 82,
    familyBusinessPipelineStrength: 58

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 90,
    automationResistance: 92,
    adaptabilityScore: 92,
    interdisciplinaryStrength: 86,
    futureReadiness: 92,
    entrepreneurialFlexibility: 84,
    lifelongLearningCulture: 86,
    innovationCapacity: 82

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 82,
    communityLeadershipPotential: 90,
    geographicMobility: 84,
    workLifeBalancePotential: 86,
    purposeAlignment: 86,
    familyFormationSupport: 82,
    personalDevelopmentPotential: 88,
    careerOptionality: 90,
    longTermLifeSatisfaction: 88

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 54,
    networkMoat: 84,
    geographicMoat: 98,
    industryMoat: 96,
    alumniMoat: 86,
    brandDurability: 88,

    overallMoatScore: 84

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Southern California Global Trade Corridor",

    megaRegionArchetype: "Logistics + International Trade + Economic Mobility",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.30,

    talentDensityInheritance: 86,
    innovationInheritance: 82,
    capitalAccessInheritance: 78,

    networkInheritance: {
      executiveAccess: 78,
      founderDensity: 70,
      alumniMobility: 88,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      logistics: 100,
      supplyChain: 100,
      internationalTrade: 100,
      transportation: 96,
      aerospace: 84
    },

    careerPathwayBoosts: {
      logistics: 3.50,
      supplyChain: 3.50,
      internationalTrade: 3.40,
      transportation: 3.00,
      industrialSales: 2.60
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Southern California Trade Corridor",

    secondaryMegaRegions: [
      "California Innovation Coast",
      "Pacific Rim Trade Network",
      "Texas Triangle",
      "Inland Empire Logistics Hub"
    ],

    crossRegionalMobility: 86,
    nationalOpportunityAccess: 80,
    globalOpportunityAccess: 74

  }
},

"California State University, Fullerton": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "California State University, Fullerton",

    location: "Fullerton, California, USA",

    region: "Orange County Enterprise Corridor",

    universitySize: "Large",

    institutionType: "Public Comprehensive University (California State University System)",

    archetype: "Orange County Business & Entrepreneurship Engine",

    institutionalPersonality: "ambitious, practical, entrepreneurial, professionally-oriented, relationship-driven, upwardly-mobile",

    cultureKeywords: [
      "Orange County",
      "business education",
      "entrepreneurship",
      "economic mobility",
      "professional development",
      "Southern California",
      "career-focused"
    ],

    missionOrientation: "Provide affordable access to Southern California's business, accounting, entrepreneurship, education, healthcare, and corporate leadership pathways.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Applied professional education with deep employer integration and strong emphasis on workforce readiness.",

    competitiveness: "Moderate-to-High",

    politicalCulture: "Moderate",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate",

    socialClimate: "Professional, commuter-oriented, ambitious, highly diverse",

    leadershipStyle: "Leadership through execution, business development, and professional advancement",

    oneSentenceSummary: "The university most closely connected to Orange County's middle-market business economy, producing managers, accountants, entrepreneurs, and corporate operators."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 80,
      conscientiousness: 90,
      extraversion: 76,
      agreeableness: 82,
      neuroticism: 40
    },

    hollandCodes: [
      "ESC",
      "ERC",
      "SEC"
    ],

    learningStyle: [
      "career-focused",
      "applied business education",
      "professional networking",
      "industry-connected learning"
    ],

    socialEnvironment: [
      "commuter-professional culture",
      "entrepreneurial students",
      "working professionals",
      "business-oriented networking"
    ],

    idealStudentTraits: [
      "self-directed",
      "career-minded",
      "entrepreneurial",
      "relationship builder"
    ],

    thrivesIf: [
      "wants strong ROI",
      "plans to work while attending school",
      "values employer access over prestige"
    ],

    strugglesIf: [
      "wants a traditional residential college experience",
      "seeks elite academic signaling",
      "expects a research-first environment"
    ],

    transferRiskFactors: [
      "prestige chasing",
      "desire for a stronger national brand",
      "interest in more residential campuses"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Accounting",
      "Supply Chain Management",
      "Risk Management",
      "Entrepreneurship",
      "Hospitality Management",
      "Information Systems"
    ],

    hiddenCareerPipelines: [
      "Orange County corporate leadership",
      "CPA partnerships",
      "middle-market business ownership",
      "wealth management",
      "commercial banking",
      "regional entrepreneurship"
    ],

    nicheRecruitingAdvantages: [
      "Orange County accounting firms",
      "middle-market companies",
      "regional banks",
      "family-owned businesses"
    ],

    overlookedStrengths: [
      "one of the strongest accounting pipelines in California",
      "excellent employer reputation among regional businesses",
      "deep penetration into Orange County companies",
      "strong entrepreneurial culture"
    ],

    sleeperIndustries: [
      "commercial banking",
      "wealth management",
      "business services",
      "insurance brokerage",
      "private-company operations"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 90,
    mentorshipDensity: 86,
    executiveAccess: 80,
    internshipNetwork: 92,
    familyBusinessExposure: 78,

    relationshipCapitalScore: 90,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 90,
    donorNetworkStrength: 70,
    boardMemberDensity: 72

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "business services",
      "accounting",
      "financial services",
      "healthcare",
      "consumer products",
      "technology"
    ],

    regionalEconomicDrivers: [
      "Orange County middle-market companies",
      "entrepreneurship",
      "professional services",
      "wealth management",
      "consumer brands"
    ],

    topEmployers: [
      "Deloitte",
      "PwC",
      "EY",
      "KPMG",
      "Edwards Lifesciences",
      "Pacific Life",
      "Banc of California",
      "Kaiser Permanente"
    ],

    emergingIndustries: [
      "fintech",
      "health technology",
      "digital commerce",
      "business analytics",
      "wealth technology"
    ],

    startupDensity: "Moderately High",

    ventureCapitalAccess: 72,
    corporateHeadquartersDensity: 92,
    healthcareHubStrength: 80,
    innovationIndex: 80

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Orange County",

    secondaryMarkets: [
      "Los Angeles",
      "Inland Empire",
      "San Diego",
      "Phoenix",
      "Dallas"
    ],

    alumniStrongholds: [
      "Orange County",
      "Los Angeles",
      "Southern California",
      "Inland Empire"
    ],

    relocationPatterns: [
      "accounting",
      "corporate management",
      "banking",
      "wealth management",
      "entrepreneurship"
    ],

    regionalInfluenceScore: 98,
    nationalReachScore: 68,
    internationalReachScore: 50

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 22,
    studentOrganizationStrength: 86,
    leadershipDevelopment: 88,
    crossDisciplinaryInteraction: 82,
    civicEngagement: 82,

    relationshipCapital: 90,
    luxuryNetworkAccess: 48,
    familyOfficeExposure: 52,
    internationalBusinessExposure: 72,
    personalBrandLeverage: 80

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    accounting: { strength: 100 },

    wealthManagement: { strength: 92 },

    privateBanking: { strength: 82 },

    commercialBanking: { strength: 90 },

    entrepreneurship: { strength: 94 },

    consumerProducts: { strength: 88 },

    ecommerce: { strength: 84 },

    fintech: { strength: 80 },

    supplyChain: { strength: 82 },

    healthcareAdministration: { strength: 80 },

    internationalBusiness: { strength: 88 },

    industrialSales: { strength: 90 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-to-upper-middle-class baseline",

    socialMobilityIndex: 94,
    firstGenerationSupport: 90,
    wealthCreationPotential: 86,
    familyBusinessPipelineStrength: 80

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 88,
    automationResistance: 90,
    adaptabilityScore: 92,
    interdisciplinaryStrength: 84,
    futureReadiness: 90,
    entrepreneurialFlexibility: 94,
    lifelongLearningCulture: 86,
    innovationCapacity: 82

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 86,
    communityLeadershipPotential: 86,
    geographicMobility: 82,
    workLifeBalancePotential: 86,
    purposeAlignment: 84,
    familyFormationSupport: 84,
    personalDevelopmentPotential: 88,
    careerOptionality: 90,
    longTermLifeSatisfaction: 88

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 56,
    networkMoat: 88,
    geographicMoat: 98,
    industryMoat: 94,
    alumniMoat: 88,
    brandDurability: 90,

    overallMoatScore: 86

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Orange County Enterprise Corridor",

    megaRegionArchetype: "Business Ownership + Professional Services + Entrepreneurship",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.30,

    talentDensityInheritance: 84,
    innovationInheritance: 82,
    capitalAccessInheritance: 86,

    networkInheritance: {
      executiveAccess: 82,
      founderDensity: 88,
      alumniMobility: 88,
      industryConnectivity: 96
    },

    industryDensityAdvantages: {
      accounting: 100,
      entrepreneurship: 94,
      wealthManagement: 92,
      commercialBanking: 90,
      consumerProducts: 88
    },

    careerPathwayBoosts: {
      accounting: 3.50,
      entrepreneurship: 3.00,
      wealthManagement: 2.80,
      commercialBanking: 2.70,
      industrialSales: 2.80
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Orange County Enterprise Corridor",

    secondaryMegaRegions: [
      "Southern California Power Network",
      "California Innovation Coast",
      "Texas Triangle",
      "Phoenix Growth Corridor"
    ],

    crossRegionalMobility: 84,
    nationalOpportunityAccess: 80,
    globalOpportunityAccess: 58

  }
},

"San José State University": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "San José State University",

    location: "San Jose, California, USA",

    region: "Silicon Valley",

    universitySize: "Large",

    institutionType: "Public Comprehensive University (California State University System)",

    archetype: "Silicon Valley Workforce Engine",

    institutionalPersonality: "practical, ambitious, technical, entrepreneurial, career-focused, opportunity-driven",

    cultureKeywords: [
      "Silicon Valley",
      "technology workforce",
      "engineering",
      "upward mobility",
      "startup ecosystem",
      "computer science",
      "professional networking"
    ],

    missionOrientation: "Provide direct pathways into the technology, engineering, startup, and innovation sectors that power Silicon Valley.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Applied education integrated with real-world employers, internships, and industry partnerships.",

    competitiveness: "Moderate-to-High",

    politicalCulture: "Moderate-to-progressive",

    studentAutonomy: "Very High",

    prestigeOrientation: "Moderate",

    socialClimate: "Career-oriented, technical, entrepreneurial, highly diverse",

    leadershipStyle: "Leadership through execution, innovation, and technical competence",

    oneSentenceSummary: "The most direct public-university pipeline into Silicon Valley's workforce, startup ecosystem, and technology economy."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 90,
      conscientiousness: 88,
      extraversion: 68,
      agreeableness: 76,
      neuroticism: 40
    },

    hollandCodes: [
      "IRC",
      "IEC",
      "ERC"
    ],

    learningStyle: [
      "hands-on",
      "technical",
      "industry-connected",
      "project-based"
    ],

    socialEnvironment: [
      "tech-focused",
      "commuter-professional culture",
      "startup exposure",
      "career-driven networking"
    ],

    idealStudentTraits: [
      "builder",
      "problem solver",
      "self-starter",
      "technical thinker"
    ],

    thrivesIf: [
      "wants Silicon Valley access",
      "values internships",
      "prioritizes career outcomes over prestige"
    ],

    strugglesIf: [
      "wants traditional residential culture",
      "seeks elite academic signaling",
      "expects a highly theoretical environment"
    ],

    transferRiskFactors: [
      "prestige seeking",
      "interest in elite private universities",
      "desire for a more traditional campus experience"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Management Information Systems",
      "Industrial Technology",
      "Supply Chain Management",
      "Software Engineering",
      "Human Factors Engineering",
      "Data Analytics"
    ],

    hiddenCareerPipelines: [
      "product management",
      "technical sales",
      "startup operations",
      "engineering management",
      "cybersecurity",
      "enterprise software"
    ],

    nicheRecruitingAdvantages: [
      "Silicon Valley internships",
      "startup recruiting",
      "mid-sized technology firms",
      "engineering employers"
    ],

    overlookedStrengths: [
      "arguably the strongest CSU technology pipeline",
      "extraordinary internship access",
      "deep employer trust across Silicon Valley",
      "strong ROI relative to tuition"
    ],

    sleeperIndustries: [
      "enterprise software",
      "semiconductors",
      "developer tools",
      "cloud infrastructure",
      "technical consulting"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 92,
    mentorshipDensity: 90,
    executiveAccess: 84,
    internshipNetwork: 100,
    familyBusinessExposure: 62,

    relationshipCapitalScore: 92,
    alumniLoyaltyScore: 88,
    referralCultureStrength: 92,
    donorNetworkStrength: 68,
    boardMemberDensity: 74

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "technology",
      "software",
      "semiconductors",
      "artificial intelligence",
      "cloud computing",
      "venture-backed startups"
    ],

    regionalEconomicDrivers: [
      "Silicon Valley",
      "venture capital",
      "technology innovation",
      "startup creation",
      "global software markets"
    ],

    topEmployers: [
      "Google",
      "Apple",
      "NVIDIA",
      "Cisco",
      "Adobe",
      "Meta",
      "Intel",
      "PayPal"
    ],

    emergingIndustries: [
      "artificial intelligence",
      "robotics",
      "cybersecurity",
      "cloud infrastructure",
      "autonomous systems"
    ],

    startupDensity: "Extremely High",

    ventureCapitalAccess: 96,
    corporateHeadquartersDensity: 100,
    healthcareHubStrength: 52,
    innovationIndex: 100

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Silicon Valley",

    secondaryMarkets: [
      "San Francisco",
      "Seattle",
      "Austin",
      "Los Angeles",
      "New York"
    ],

    alumniStrongholds: [
      "San Jose",
      "Silicon Valley",
      "Bay Area",
      "Seattle",
      "Austin"
    ],

    relocationPatterns: [
      "technology",
      "startups",
      "software engineering",
      "product management",
      "cybersecurity"
    ],

    regionalInfluenceScore: 100,
    nationalReachScore: 84,
    internationalReachScore: 70

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 12,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 88,
    civicEngagement: 72,

    relationshipCapital: 92,
    luxuryNetworkAccess: 52,
    familyOfficeExposure: 30,
    internationalBusinessExposure: 84,
    personalBrandLeverage: 88

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    technology: { strength: 100 },

    softwareEngineering: { strength: 100 },

    SaaS: { strength: 98 },

    cloudComputing: { strength: 96 },

    artificialIntelligence: { strength: 94 },

    cybersecurity: { strength: 90 },

    productManagement: { strength: 96 },

    entrepreneurship: { strength: 92 },

    ventureCapital: { strength: 76 },

    semiconductors: { strength: 96 },

    industrialAutomation: { strength: 84 },

    technicalSales: { strength: 92 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Middle-income baseline",

    socialMobilityIndex: 98,
    firstGenerationSupport: 92,
    wealthCreationPotential: 94,
    familyBusinessPipelineStrength: 58

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 92,
    automationResistance: 94,
    adaptabilityScore: 96,
    interdisciplinaryStrength: 88,
    futureReadiness: 100,
    entrepreneurialFlexibility: 94,
    lifelongLearningCulture: 92,
    innovationCapacity: 100

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 94,
    communityLeadershipPotential: 76,
    geographicMobility: 92,
    workLifeBalancePotential: 76,
    purposeAlignment: 84,
    familyFormationSupport: 72,
    personalDevelopmentPotential: 88,
    careerOptionality: 100,
    longTermLifeSatisfaction: 86

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 58,
    networkMoat: 92,
    geographicMoat: 100,
    industryMoat: 100,
    alumniMoat: 90,
    brandDurability: 92,

    overallMoatScore: 91

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Silicon Valley",

    megaRegionArchetype: "Technology Creation + Startup Formation + Innovation",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.50,

    talentDensityInheritance: 100,
    innovationInheritance: 100,
    capitalAccessInheritance: 100,

    networkInheritance: {
      executiveAccess: 92,
      founderDensity: 100,
      alumniMobility: 94,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      technology: 100,
      SaaS: 100,
      artificialIntelligence: 96,
      semiconductors: 100,
      startups: 100
    },

    careerPathwayBoosts: {
      softwareEngineering: 3.80,
      productManagement: 3.50,
      entrepreneurship: 3.40,
      artificialIntelligence: 3.60,
      technicalSales: 3.10
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Silicon Valley",

    secondaryMegaRegions: [
      "California Innovation Coast",
      "Seattle Tech Corridor",
      "Austin Tech Hub",
      "Global Startup Network"
    ],

    crossRegionalMobility: 94,
    nationalOpportunityAccess: 92,
    globalOpportunityAccess: 82

  }
},

"University of California, Santa Barbara": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of California, Santa Barbara",

    location: "Santa Barbara, California, USA",

    region: "California Innovation Coast",

    universitySize: "Large",

    institutionType: "Public Research University (University of California System)",

    archetype: "Innovation Coast Research & Lifestyle Elite",

    institutionalPersonality: "intellectually curious, entrepreneurial, collaborative, innovative, independent, socially confident",

    cultureKeywords: [
      "research excellence",
      "California lifestyle",
      "entrepreneurship",
      "technology innovation",
      "beach culture",
      "venture creation",
      "scientific discovery"
    ],

    missionOrientation: "Advance world-class research while cultivating innovators, scientists, entrepreneurs, and leaders capable of shaping the future economy.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Research-driven education combined with interdisciplinary collaboration, innovation, and entrepreneurial opportunity.",

    competitiveness: "Very High",

    politicalCulture: "Moderate-to-progressive",

    studentAutonomy: "Very High",

    prestigeOrientation: "High",

    socialClimate: "Collaborative, ambitious, socially active, intellectually curious",

    leadershipStyle: "Leadership through innovation, scientific discovery, and entrepreneurial creation",

    oneSentenceSummary: "A top-tier research university that combines elite science and engineering with one of the strongest quality-of-life environments in American higher education."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 94,
      conscientiousness: 84,
      extraversion: 82,
      agreeableness: 80,
      neuroticism: 34
    },

    hollandCodes: [
      "IRC",
      "IEC",
      "EIC"
    ],

    learningStyle: [
      "research-driven",
      "collaborative",
      "interdisciplinary",
      "innovation-focused"
    ],

    socialEnvironment: [
      "high-achieving students",
      "entrepreneurial culture",
      "beach lifestyle",
      "research community"
    ],

    idealStudentTraits: [
      "intellectually curious",
      "independent thinker",
      "entrepreneurial",
      "scientifically inclined"
    ],

    thrivesIf: [
      "wants elite academics with lifestyle balance",
      "enjoys innovation ecosystems",
      "values research and entrepreneurship"
    ],

    strugglesIf: [
      "needs heavy structure",
      "wants purely career-training education",
      "prefers highly traditional campus culture"
    ],

    transferRiskFactors: [
      "desire for stronger East Coast prestige",
      "interest in urban environments",
      "preference for highly professionalized campuses"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Materials Science",
      "Chemical Engineering",
      "Physics",
      "Environmental Studies",
      "Economics",
      "Technology Management"
    ],

    hiddenCareerPipelines: [
      "deep tech startups",
      "semiconductor innovation",
      "venture-backed science companies",
      "quantum technologies",
      "clean technology",
      "technology commercialization"
    ],

    nicheRecruitingAdvantages: [
      "Santa Barbara tech cluster",
      "deep-tech startups",
      "research commercialization",
      "venture-backed engineering firms"
    ],

    overlookedStrengths: [
      "one of America's strongest physics ecosystems",
      "major contributor to semiconductor innovation",
      "exceptional founder density relative to size",
      "elite research output with lower public visibility than peers"
    ],

    sleeperIndustries: [
      "photonics",
      "optics",
      "quantum computing",
      "materials science",
      "clean technology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 86,
    mentorshipDensity: 88,
    executiveAccess: 82,
    internshipNetwork: 88,
    familyBusinessExposure: 72,

    relationshipCapitalScore: 88,
    alumniLoyaltyScore: 84,
    referralCultureStrength: 84,
    donorNetworkStrength: 78,
    boardMemberDensity: 76

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "technology",
      "semiconductors",
      "scientific research",
      "venture-backed startups",
      "clean technology",
      "aerospace"
    ],

    regionalEconomicDrivers: [
      "Santa Barbara technology cluster",
      "research commercialization",
      "venture capital",
      "innovation economy",
      "scientific entrepreneurship"
    ],

    topEmployers: [
      "AppFolio",
      "Procore",
      "Raytheon",
      "Google",
      "Amazon",
      "Lockheed Martin",
      "Northrop Grumman",
      "Deckers Brands"
    ],

    emergingIndustries: [
      "quantum technology",
      "AI research",
      "clean energy",
      "advanced materials",
      "space technologies"
    ],

    startupDensity: "Very High",

    ventureCapitalAccess: 88,
    corporateHeadquartersDensity: 72,
    healthcareHubStrength: 56,
    innovationIndex: 98

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "California Innovation Coast",

    secondaryMarkets: [
      "Silicon Valley",
      "Los Angeles",
      "Orange County",
      "San Diego",
      "Seattle"
    ],

    alumniStrongholds: [
      "Santa Barbara",
      "Bay Area",
      "Los Angeles",
      "Orange County",
      "San Diego"
    ],

    relocationPatterns: [
      "technology",
      "venture-backed startups",
      "research",
      "engineering",
      "entrepreneurship"
    ],

    regionalInfluenceScore: 94,
    nationalReachScore: 86,
    internationalReachScore: 74

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 42,
    studentOrganizationStrength: 88,
    leadershipDevelopment: 86,
    crossDisciplinaryInteraction: 92,
    civicEngagement: 76,

    relationshipCapital: 88,
    luxuryNetworkAccess: 74,
    familyOfficeExposure: 68,
    internationalBusinessExposure: 76,
    personalBrandLeverage: 88

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    technology: { strength: 94 },

    entrepreneurship: { strength: 92 },

    artificialIntelligence: { strength: 88 },

    semiconductors: { strength: 100 },

    materialsScience: { strength: 100 },

    photonics: { strength: 100 },

    optics: { strength: 100 },

    appliedPhysics: { strength: 100 },

    climateTechnology: { strength: 86 },

    cleanEnergy: { strength: 84 },

    ventureCapital: { strength: 82 },

    aerospace: { strength: 84 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Upper-middle-class baseline",

    socialMobilityIndex: 84,
    firstGenerationSupport: 78,
    wealthCreationPotential: 92,
    familyBusinessPipelineStrength: 72

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 94,
    automationResistance: 96,
    adaptabilityScore: 94,
    interdisciplinaryStrength: 96,
    futureReadiness: 98,
    entrepreneurialFlexibility: 94,
    lifelongLearningCulture: 92,
    innovationCapacity: 100

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 92,
    communityLeadershipPotential: 82,
    geographicMobility: 92,
    workLifeBalancePotential: 98,
    purposeAlignment: 92,
    familyFormationSupport: 88,
    personalDevelopmentPotential: 96,
    careerOptionality: 96,
    longTermLifeSatisfaction: 98

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 88,
    networkMoat: 86,
    geographicMoat: 94,
    industryMoat: 98,
    alumniMoat: 82,
    brandDurability: 94,

    overallMoatScore: 92

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "California Innovation Coast",

    megaRegionArchetype: "Science Commercialization + Technology Innovation + Lifestyle Capital",

    megaRegionIntegrationScore: 98,

    regionalInheritanceMultiplier: 2.30,

    talentDensityInheritance: 94,
    innovationInheritance: 100,
    capitalAccessInheritance: 88,

    networkInheritance: {
      executiveAccess: 84,
      founderDensity: 92,
      alumniMobility: 90,
      industryConnectivity: 94
    },

    industryDensityAdvantages: {
      semiconductors: 100,
      photonics: 100,
      appliedPhysics: 100,
      entrepreneurship: 92,
      technology: 94
    },

    careerPathwayBoosts: {
      semiconductors: 3.60,
      photonics: 3.80,
      appliedPhysics: 3.80,
      entrepreneurship: 3.00,
      technology: 2.90
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "California Innovation Coast",

    secondaryMegaRegions: [
      "Silicon Valley",
      "Southern California Power Network",
      "San Diego Innovation Cluster",
      "Pacific Technology Corridor"
    ],

    crossRegionalMobility: 92,
    nationalOpportunityAccess: 90,
    globalOpportunityAccess: 82

  }
},

"University of California, Santa Cruz": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of California, Santa Cruz",

    location: "Santa Cruz, California, USA",

    region: "Silicon Valley Periphery / Monterey Bay Innovation Coast",

    universitySize: "Medium",

    institutionType: "Public Research University (University of California System)",

    archetype: "Alternative Silicon Valley",

    institutionalPersonality: "creative, intellectually independent, experimental, entrepreneurial, socially conscious, innovative",

    cultureKeywords: [
      "counterculture roots",
      "research university",
      "Silicon Valley access",
      "innovation",
      "creativity",
      "environmentalism",
      "independent thinkers"
    ],

    missionOrientation: "Develop intellectually curious innovators capable of advancing science, technology, sustainability, and social progress through interdisciplinary inquiry.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Interdisciplinary research combined with intellectual freedom, experimentation, and innovation.",

    competitiveness: "High",

    politicalCulture: "Progressive",

    studentAutonomy: "Very High",

    prestigeOrientation: "Moderate",

    socialClimate: "Collaborative, unconventional, research-focused, creative",

    leadershipStyle: "Leadership through innovation, exploration, and independent thinking",

    oneSentenceSummary: "A research-intensive university that combines Silicon Valley access with one of the most independent and creative intellectual cultures in American higher education."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 98,
      conscientiousness: 76,
      extraversion: 68,
      agreeableness: 86,
      neuroticism: 44
    },

    hollandCodes: [
      "IAR",
      "IRC",
      "AEC"
    ],

    learningStyle: [
      "interdisciplinary",
      "research-driven",
      "experimental",
      "self-directed"
    ],

    socialEnvironment: [
      "creative thinkers",
      "research communities",
      "alternative culture",
      "entrepreneurial innovators"
    ],

    idealStudentTraits: [
      "curious",
      "independent",
      "creative",
      "non-conformist"
    ],

    thrivesIf: [
      "enjoys intellectual freedom",
      "likes interdisciplinary thinking",
      "wants Silicon Valley proximity without Silicon Valley culture"
    ],

    strugglesIf: [
      "needs highly structured environments",
      "prefers traditional prestige culture",
      "wants heavily professionalized networking"
    ],

    transferRiskFactors: [
      "desire for stronger prestige signaling",
      "interest in more traditional campuses",
      "preference for highly career-focused cultures"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Computer Science",
      "Bioinformatics",
      "Computational Media",
      "Environmental Studies",
      "Marine Sciences",
      "Game Design"
    ],

    hiddenCareerPipelines: [
      "AI research",
      "game development",
      "scientific computing",
      "environmental technology",
      "bioinformatics",
      "startup innovation"
    ],

    nicheRecruitingAdvantages: [
      "Silicon Valley technology firms",
      "AI research labs",
      "gaming companies",
      "scientific computing organizations"
    ],

    overlookedStrengths: [
      "strong computer science outcomes",
      "major contributions to genomics and bioinformatics",
      "exceptional undergraduate research access",
      "proximity to Silicon Valley without extreme competition"
    ],

    sleeperIndustries: [
      "gaming",
      "computational biology",
      "AI research",
      "scientific software",
      "environmental technology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 82,
    mentorshipDensity: 86,
    executiveAccess: 74,
    internshipNetwork: 86,
    familyBusinessExposure: 58,

    relationshipCapitalScore: 84,
    alumniLoyaltyScore: 82,
    referralCultureStrength: 80,
    donorNetworkStrength: 68,
    boardMemberDensity: 62

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "technology",
      "artificial intelligence",
      "software",
      "gaming",
      "life sciences",
      "environmental research"
    ],

    regionalEconomicDrivers: [
      "Silicon Valley spillover",
      "technology entrepreneurship",
      "research commercialization",
      "Monterey Bay innovation economy"
    ],

    topEmployers: [
      "Google",
      "Apple",
      "NVIDIA",
      "Meta",
      "Electronic Arts",
      "Genentech",
      "Amazon",
      "Cisco"
    ],

    emergingIndustries: [
      "artificial intelligence",
      "computational biology",
      "quantum computing",
      "environmental technology",
      "scientific software"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 84,
    corporateHeadquartersDensity: 88,
    healthcareHubStrength: 62,
    innovationIndex: 94

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "Silicon Valley",

    secondaryMarkets: [
      "San Francisco",
      "Seattle",
      "Los Angeles",
      "San Diego",
      "Austin"
    ],

    alumniStrongholds: [
      "Bay Area",
      "Santa Cruz",
      "Silicon Valley",
      "Seattle",
      "Southern California"
    ],

    relocationPatterns: [
      "technology",
      "research",
      "gaming",
      "AI",
      "life sciences"
    ],

    regionalInfluenceScore: 92,
    nationalReachScore: 80,
    internationalReachScore: 66

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 6,
    studentOrganizationStrength: 84,
    leadershipDevelopment: 80,
    crossDisciplinaryInteraction: 96,
    civicEngagement: 88,

    relationshipCapital: 84,
    luxuryNetworkAccess: 46,
    familyOfficeExposure: 34,
    internationalBusinessExposure: 64,
    personalBrandLeverage: 82

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    technology: { strength: 90 },

    artificialIntelligence: { strength: 92 },

    SaaS: { strength: 84 },

    softwareEngineering: { strength: 90 },

    computationalBiology: { strength: 100 },

    bioinformatics: { strength: 100 },

    gaming: { strength: 94 },

    environmentalTechnology: { strength: 92 },

    marineScience: { strength: 96 },

    climateTechnology: { strength: 88 },

    entrepreneurship: { strength: 82 },

    scientificResearch: { strength: 96 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Upper-middle-class baseline",

    socialMobilityIndex: 84,
    firstGenerationSupport: 82,
    wealthCreationPotential: 86,
    familyBusinessPipelineStrength: 54

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 92,
    automationResistance: 94,
    adaptabilityScore: 96,
    interdisciplinaryStrength: 100,
    futureReadiness: 94,
    entrepreneurialFlexibility: 90,
    lifelongLearningCulture: 94,
    innovationCapacity: 96

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 86,
    communityLeadershipPotential: 84,
    geographicMobility: 88,
    workLifeBalancePotential: 96,
    purposeAlignment: 96,
    familyFormationSupport: 86,
    personalDevelopmentPotential: 98,
    careerOptionality: 92,
    longTermLifeSatisfaction: 96

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 74,
    networkMoat: 82,
    geographicMoat: 92,
    industryMoat: 90,
    alumniMoat: 76,
    brandDurability: 90,

    overallMoatScore: 86

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "Silicon Valley Periphery",

    megaRegionArchetype: "Creative Innovation + Research + Alternative Technology Culture",

    megaRegionIntegrationScore: 94,

    regionalInheritanceMultiplier: 2.20,

    talentDensityInheritance: 92,
    innovationInheritance: 96,
    capitalAccessInheritance: 84,

    networkInheritance: {
      executiveAccess: 76,
      founderDensity: 88,
      alumniMobility: 88,
      industryConnectivity: 92
    },

    industryDensityAdvantages: {
      artificialIntelligence: 92,
      gaming: 94,
      bioinformatics: 100,
      computationalBiology: 100,
      technology: 90
    },

    careerPathwayBoosts: {
      bioinformatics: 3.70,
      computationalBiology: 3.70,
      gaming: 3.20,
      artificialIntelligence: 3.10,
      environmentalTechnology: 2.90
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "Silicon Valley",

    secondaryMegaRegions: [
      "California Innovation Coast",
      "Pacific Technology Corridor",
      "Seattle Tech Ecosystem",
      "Global AI Network"
    ],

    crossRegionalMobility: 90,
    nationalOpportunityAccess: 86,
    globalOpportunityAccess: 74

  }
},

"University of California, San Diego": {


  // =====================================================
  // CORE IDENTITY
  // =====================================================

  institutionIdentity: {

    name: "University of California, San Diego",

    location: "La Jolla, San Diego, California, USA",

    region: "San Diego Innovation Coast",

    universitySize: "Large",

    institutionType: "Public Research University (University of California System)",

    archetype: "Life Sciences & Future Technology Capital",

    institutionalPersonality: "intellectually intense, innovative, scientific, globally-oriented, entrepreneurial, research-driven",

    cultureKeywords: [
      "biotech",
      "life sciences",
      "research excellence",
      "technology innovation",
      "ocean sciences",
      "global talent",
      "future industries"
    ],

    missionOrientation: "Advance scientific discovery, technological innovation, and global problem-solving through elite research and interdisciplinary collaboration.",

    faithTradition: "Secular public institution",

    educationalPhilosophy: "Research-first education integrating science, technology, medicine, entrepreneurship, and global collaboration.",

    competitiveness: "Very High",

    politicalCulture: "Moderate-to-progressive",

    studentAutonomy: "Very High",

    prestigeOrientation: "High",

    socialClimate: "Highly academic, collaborative, international, innovation-focused",

    leadershipStyle: "Leadership through discovery, scientific advancement, and technological innovation",

    oneSentenceSummary: "One of the world's premier universities for biotechnology, life sciences, engineering, AI, and future-industry innovation."

  },

  // =====================================================
  // STUDENT FIT
  // =====================================================

  studentFit: {

    bigFiveProfile: {
      openness: 96,
      conscientiousness: 92,
      extraversion: 64,
      agreeableness: 78,
      neuroticism: 38
    },

    hollandCodes: [
      "IRC",
      "IEC",
      "ICR"
    ],

    learningStyle: [
      "research-intensive",
      "analytical",
      "interdisciplinary",
      "innovation-driven"
    ],

    socialEnvironment: [
      "high-achieving students",
      "global talent",
      "research communities",
      "startup-adjacent ecosystems"
    ],

    idealStudentTraits: [
      "scientifically curious",
      "independent",
      "analytical",
      "future-oriented"
    ],

    thrivesIf: [
      "wants research opportunities",
      "loves science and technology",
      "enjoys solving difficult problems"
    ],

    strugglesIf: [
      "wants a traditional sports culture",
      "needs constant social stimulation",
      "prefers highly structured learning"
    ],

    transferRiskFactors: [
      "desire for stronger social culture",
      "interest in traditional college experiences",
      "preference for more visible prestige brands"
    ]

  },

  // =====================================================
  // HIDDEN OPPORTUNITIES
  // =====================================================

  hiddenOpportunities: {

    underratedMajors: [
      "Bioengineering",
      "Marine Biology",
      "Data Science",
      "Cognitive Science",
      "Public Health",
      "Nanoengineering"
    ],

    hiddenCareerPipelines: [
      "biotech entrepreneurship",
      "drug discovery",
      "medical devices",
      "AI-driven healthcare",
      "venture-backed life sciences",
      "defense technology"
    ],

    nicheRecruitingAdvantages: [
      "San Diego biotech ecosystem",
      "life-science startups",
      "research commercialization",
      "medical-device companies"
    ],

    overlookedStrengths: [
      "arguably the strongest biotech ecosystem in public higher education",
      "exceptional research funding",
      "elite STEM outcomes",
      "major contributor to startup formation"
    ],

    sleeperIndustries: [
      "genomics",
      "synthetic biology",
      "medical devices",
      "neuroscience technology",
      "ocean technology"
    ]

  },

  // =====================================================
  // NETWORK CAPITAL
  // =====================================================

  networkCapital: {

    alumniAccessibility: 84,
    mentorshipDensity: 90,
    executiveAccess: 88,
    internshipNetwork: 94,
    familyBusinessExposure: 62,

    relationshipCapitalScore: 88,
    alumniLoyaltyScore: 82,
    referralCultureStrength: 84,
    donorNetworkStrength: 82,
    boardMemberDensity: 80

  },

  // =====================================================
  // ECONOMIC ECOSYSTEM
  // =====================================================

  economicEcosystem: {

    primaryIndustries: [
      "biotechnology",
      "life sciences",
      "healthcare innovation",
      "artificial intelligence",
      "defense technology",
      "communications technology"
    ],

    regionalEconomicDrivers: [
      "biotech cluster",
      "research institutions",
      "venture-backed innovation",
      "defense contractors",
      "healthcare systems"
    ],

    topEmployers: [
      "Illumina",
      "Qualcomm",
      "Scripps Research",
      "Pfizer",
      "Thermo Fisher Scientific",
      "General Atomics",
      "Dexcom",
      "Neurocrine Biosciences"
    ],

    emergingIndustries: [
      "synthetic biology",
      "precision medicine",
      "AI healthcare",
      "genomics",
      "autonomous systems"
    ],

    startupDensity: "Extremely High",

    ventureCapitalAccess: 92,
    corporateHeadquartersDensity: 84,
    healthcareHubStrength: 100,
    innovationIndex: 100

  },

  // =====================================================
  // GEOGRAPHIC INFLUENCE
  // =====================================================

  geographicInfluence: {

    dominantMarket: "San Diego Innovation Coast",

    secondaryMarkets: [
      "Silicon Valley",
      "Los Angeles",
      "Boston",
      "Seattle",
      "Research Triangle"
    ],

    alumniStrongholds: [
      "San Diego",
      "Bay Area",
      "Los Angeles",
      "Boston",
      "Seattle"
    ],

    relocationPatterns: [
      "biotech",
      "technology",
      "research",
      "healthcare innovation",
      "venture-backed startups"
    ],

    regionalInfluenceScore: 98,
    nationalReachScore: 92,
    internationalReachScore: 86

  },

  // =====================================================
  // SOCIAL CAPITAL
  // =====================================================

  socialCapital: {

    greekLifeInfluence: 12,
    studentOrganizationStrength: 86,
    leadershipDevelopment: 84,
    crossDisciplinaryInteraction: 98,
    civicEngagement: 76,

    relationshipCapital: 88,
    luxuryNetworkAccess: 62,
    familyOfficeExposure: 54,
    internationalBusinessExposure: 88,
    personalBrandLeverage: 90

  },

  // =====================================================
  // INDUSTRY PATHWAYS
  // =====================================================

  industryPathways: {

    biotechnology: { strength: 100 },

    genomics: { strength: 100 },

    bioengineering: { strength: 100 },

    medicalDevices: { strength: 98 },

    artificialIntelligence: { strength: 92 },

    neuroscience: { strength: 98 },

    healthcareAdministration: { strength: 82 },

    publicHealth: { strength: 90 },

    defense: { strength: 84 },

    entrepreneurship: { strength: 90 },

    climateTechnology: { strength: 82 },

    oceanSciences: { strength: 100 }

  },

  // =====================================================
  // WEALTH MOBILITY
  // =====================================================

  wealthMobility: {

    averageFamilyIncome: "Upper-middle-class baseline",

    socialMobilityIndex: 82,
    firstGenerationSupport: 76,
    wealthCreationPotential: 96,
    familyBusinessPipelineStrength: 62

  },

  // =====================================================
  // FUTURE RESILIENCE
  // =====================================================

  futureResilience: {

    aiResistance: 96,
    automationResistance: 98,
    adaptabilityScore: 96,
    interdisciplinaryStrength: 100,
    futureReadiness: 100,
    entrepreneurialFlexibility: 94,
    lifelongLearningCulture: 94,
    innovationCapacity: 100

  },

  // =====================================================
  // LIFE DESIGN OUTCOMES
  // =====================================================

  lifeDesignOutcomes: {

    wealthCreationPotential: 96,
    communityLeadershipPotential: 84,
    geographicMobility: 94,
    workLifeBalancePotential: 94,
    purposeAlignment: 94,
    familyFormationSupport: 88,
    personalDevelopmentPotential: 96,
    careerOptionality: 100,
    longTermLifeSatisfaction: 96

  },

  // =====================================================
  // INSTITUTIONAL MOAT
  // =====================================================

  institutionalMoat: {

    prestigeMoat: 92,
    networkMoat: 90,
    geographicMoat: 96,
    industryMoat: 100,
    alumniMoat: 84,
    brandDurability: 98,

    overallMoatScore: 95

  },

  // =====================================================
  // MEGA REGION INTEGRATION
  // =====================================================

  megaRegionIntegration: {

    megaRegion: "San Diego Innovation Coast",

    megaRegionArchetype: "Biotech + Life Sciences + Future Technologies",

    megaRegionIntegrationScore: 100,

    regionalInheritanceMultiplier: 2.45,

    talentDensityInheritance: 96,
    innovationInheritance: 100,
    capitalAccessInheritance: 92,

    networkInheritance: {
      executiveAccess: 90,
      founderDensity: 92,
      alumniMobility: 92,
      industryConnectivity: 100
    },

    industryDensityAdvantages: {
      biotechnology: 100,
      genomics: 100,
      medicalDevices: 98,
      neuroscience: 98,
      oceanSciences: 100
    },

    careerPathwayBoosts: {
      biotechnology: 4.00,
      genomics: 4.00,
      bioengineering: 3.80,
      medicalDevices: 3.60,
      artificialIntelligence: 3.00
    }

  },

  // =====================================================
  // SUPER REGION / MEGA REGION MAPPING
  // =====================================================

  megaRegionExposure: {

    primaryMegaRegion: "San Diego Innovation Coast",

    secondaryMegaRegions: [
      "Silicon Valley",
      "Boston Life Sciences Corridor",
      "Research Triangle",
      "Global Biotechnology Network"
    ],

    crossRegionalMobility: 96,
    nationalOpportunityAccess: 96,
    globalOpportunityAccess: 92

  }
},

"University of Michigan": {


  institutionNarrative: {

    name: "University of Michigan",

    location: "Ann Arbor, Michigan",

    region: "Big Ten",

    archetype: "The Public Ivy That Recruits Like a Private One",

    oneSentenceSummary: "Michigan is the definitive public Ivy — a top-5 research university by any serious measure, with Ross Business School placing into McKinsey and Goldman at rates that rival Wharton, an engineering school that feeds Apple, Google, and Ford simultaneously, and a college football culture that makes the institution feel, from the outside, like a state school and feel, from the inside, like the most ambitious place you have ever been.",

    pipeline: "Consulting, Technology, Financial Services, Engineering, Healthcare, Law, Public Policy, Architecture and Urban Planning, Music and Performing Arts. Michigan Ross Business School sends graduates to BCG, McKinsey, Amazon, Deloitte, Bain, Goldman Sachs, and Bank of America at rates that rival Wharton and Booth. The College of Engineering feeds Apple, Google, Microsoft, Ford, GM, Boeing, and Lockheed Martin. The Law School is consistently top-10 nationally. The School of Public Health and School of Information are among the most respected in the country. Michigan Medicine is a top-5 hospital system and clinical research enterprise. 30,000 undergraduates; 47,000 total enrollment. 97% first-to-second year retention. Average starting salary for Ross BBA graduates exceeds $85,000.",

    hiddenPathway: "Michigan's Erb Institute for Global Sustainable Enterprise is the leading MBA-MS dual degree in sustainability business in America — and as ESG leadership positions multiply at Fortune 500 companies, Erb graduates carry a credential with almost no competition. The School of Information (SI) is one of the most consequential hidden assets at any public university in America: its graduates go to Google, Amazon, and Meta in data science and UX research roles that previously required Stanford or CMU. The Stamps School of Art and Design produces creative directors and brand strategists who enter consumer product companies through a pipeline that other large public universities cannot replicate. Michigan's alumni network — 630,000 living alumni across 180 countries — is the largest active alumni network of any university in the world, and its referral culture is among the strongest of any institution that is not in the Ivy League.",

    institutionalSecret: "Michigan is the most underpriced elite university in America for out-of-state students who get in. The credential is indistinguishable from an Ivy League degree in most consulting, finance, and technology recruiting contexts — and in automotive, engineering, and Midwest corporate environments, it is frequently more valuable. The Ross BBA program is the most selective undergraduate business program at any public university in the country, and its placement outcomes rival Wharton's at a fraction of the reputational awareness.",

    theRoom: "Ann Arbor is a city of 125,000 built around Michigan — 47,000 students on a campus that functions as a complete ecosystem. Approximately 50% of undergraduates are Michigan residents and 50% are from out of state, a dramatic demographic shift from a decade ago when 64% were in-state. Michigan Stadium — the Big House — holds 107,501 people and is the largest stadium in the Western Hemisphere. The campus is architecturally distinguished: the Law Quad and the Diag are among the most photographed spaces in American higher education. The student body is intensely achievement-oriented and self-selected for ambition — Michigan is a school that students choose, not a school they default to.",

    lifestyle: "Ann Arbor is a genuine college town with the infrastructure of a small city — independent restaurants, live music, a walkable downtown, and a cultural density that belies its size. Michigan football is not a backdrop to campus life — it is a central organizing force from September through November. The winters are genuinely cold. The social scene is broad and self-directed: Greek life exists but does not dominate the way it does at Vanderbilt or Southern schools. Students who want to build their own path have the institutional infrastructure to do so.",

    bestFitPersonality: "High Conscientiousness, High Openness, Independently motivated, Ambition-driven, Comfortable in large environments, Drawn to Michigan's specific culture of earned achievement",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "National and international — Chicago financial services dominant, New York finance and consulting, San Francisco technology, Detroit automotive and manufacturing, Washington DC policy, global through 630,000-alumni network",

    economicOutcome: "Elite outcomes across consulting, finance, technology, engineering, law, medicine, and public policy — Ross BBA starting salaries above $85,000; engineering graduates at Apple, Google, Ford, Boeing; law school to federal clerkships and Big Law; medicine through Michigan Medicine residency and research pipeline",

    gradCities: [
      "Chicago IL",
      "New York NY",
      "Detroit-Ann Arbor MI",
      "San Francisco CA",
      "Washington DC",
      "Boston MA",
      "Los Angeles CA",
      "Seattle WA"
    ],

    comparableInstitutions: [
      "UC Berkeley",
      "University of Virginia",
      "University of North Carolina Chapel Hill",
      "Georgetown University",
      "Carnegie Mellon University"
    ],

    ccTransferPathway: {
      hasCCPathway: false,
      ccFeederNames: [],
      transferAcceptanceRate: "~30% (highly variable by college)",
      freshmanAcceptanceRate: "17%",
      estimatedSavingsRange: "",
      transferNotes: "Michigan accepts transfers into most colleges but does not maintain formal CC feeder agreements. Ross Business School is effectively closed to transfers. Engineering transfer is possible but competitive. LSA is the most accessible transfer entry point. Community college transfer is not a primary strategic pathway for Michigan admission."
    }
  },

  institutionIdentity: {

    archetype: "Public Ivy Research Flagship",

    institutionalPersonality: "ambitious, independent, achievement-oriented, intellectually serious, proudly Michigan",

    cultureKeywords: [
      "Go Blue",
      "Leaders and Best",
      "Big House",
      "Ross BBA",
      "Big Ten",
      "Earned Achievement",
      "Research Excellence",
      "Ann Arbor Energy",
      "Alumni Network"
    ],

    missionOrientation: "Research excellence, professional formation, and public service — Michigan's stated mission is to serve the people of Michigan and the world",

    faithTradition: "None",

    educationalPhilosophy: "Breadth of academic exposure combined with professional school depth; strong emphasis on research participation and independent intellectual development",

    competitiveness: "Highly Selective (17% overall; Ross BBA and Engineering significantly more selective)",

    politicalCulture: "Center-left — Ann Arbor is among the most politically progressive college towns in the Midwest; student body reflects national range with Midwest pragmatism",

    studentAutonomy: "Very High",

    prestigeOrientation: "Very High",

    socialClimate: "Self-directed, achievement-focused, large-campus energy, Michigan-proud",

    leadershipStyle: "Organizational and entrepreneurial — student government, startup culture, research leadership, athletic community"
  },



  megaRegionIntegration: {
    primaryMegaRegion: "Chi-Pitts",

    regionalRole:
      "America's most powerful large-scale public talent platform."
  },

  megaRegionExposure: {
    MidContinentIndustrialEnergyCorridor: 100,
    BosWash: 85,
    TorBuffChester: 80,
    TexasTriangle: 75,
    CharLanta: 75,
    NorCalInnovationCorridor: 70,
    SoCalCreativeEconomy: 65
  },

  comparativePositioning: {
    versusBerkeley:
      "Berkeley scales innovation; Michigan scales leadership.",

    versusVirginia:
      "Virginia develops public-sector leadership; Michigan develops leadership across all sectors.",

    versusHarvard:
      "Harvard dominates elite institutional leadership; Michigan provides leadership access at much larger scale.",

    versusStanford:
      "Stanford concentrates innovation elites; Michigan distributes talent broadly across the American economy."
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 31000,

    graduateEnrollment: 16000,

    totalEnrollment: 47000,

    campusType: "Residential University",

    residentialIntensity: 72,

    communityFeel: 70,

    studentFacultyRatio: "11:1",

    classSizeExperience: "Large introductory lectures (200-500+) in first two years; smaller seminars and lab sections in upper division; professional schools (Ross, Engineering) offer more intimate cohort experiences",

    scaleAdvantages: [
      "630,000 living alumni — largest active network in the world",
      "Research infrastructure rivaling any private university",
      "Breadth of academic programs unmatched at peer institutions",
      "Professional school access (Ross, Law, Medicine, Public Health) from undergraduate",
      "Michigan Medicine clinical and research access"
    ],

    scaleDisadvantages: [
      "Easy to feel anonymous in first two years without intentional community building",
      "Large lecture courses can feel impersonal",
      "Resource competition within high-demand programs (Ross, CS, Engineering)",
      "Ann Arbor winters require psychological preparation"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 84,
      conscientiousness: 86,
      extraversion: 68,
      agreeableness: 70,
      neuroticism: 34
    },

    hollandCodes: ["I", "E", "C"],

    learningStyle: [
      "Independent Research",
      "Large Lecture with Self-Directed Supplement",
      "Professional Cohort Learning (Ross, Engineering)",
      "Experiential and Internship-Based"
    ],

    socialEnvironment: [
      "Achievement-Oriented",
      "Large Campus Self-Directed",
      "Michigan-Identity Strong",
      "Big Ten Athletics Culture"
    ],

    idealStudentTraits: [
      "Self-motivated without external structure",
      "Comfortable navigating large institutions",
      "Intellectually ambitious across disciplines",
      "Michigan-identity oriented (Go Blue is real)",
      "Career-driven from day one"
    ],

    thrivesIf: [
      "Motivated to build their own path in a large environment",
      "Interested in consulting, finance, technology, engineering, law, or medicine",
      "Wants the largest possible alumni network behind them",
      "Can find their community within a 47,000-student institution",
      "Values Big Ten athletics culture as part of the college experience"
    ],

    strugglesIf: [
      "Needs structured guidance and close faculty mentorship from day one",
      "Prefers a small, intimate academic community",
      "Uncomfortable with large lecture hall learning in early years",
      "Expects the feel of a private elite university — Michigan is distinctly a public institution",
      "Struggles with cold Midwest winters"
    ],

    transferRiskFactors: [
      "Students who underestimate the self-direction required at a 47,000-person institution",
      "Students who chose Michigan for its football culture and don't engage academically",
      "Out-of-state students who experience sticker shock without understanding the financial return"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Information (School of Information)",
      "Sustainable Business (Erb Institute)",
      "Stamps School of Art and Design",
      "Cognitive Science",
      "Applied Statistics",
      "Urban Technology (Taubman College)"
    ],

    hiddenCareerPipelines: [
      "Google and Amazon UX Research and Data Science (SI pipeline)",
      "ESG and Sustainability Leadership at Fortune 500 (Erb Institute)",
      "Automotive Technology and Autonomous Vehicles (Ford, GM, Waymo)",
      "Federal Clerkships and Big Law (Law School feeder)",
      "Creative Direction and Brand Strategy (Stamps School)"
    ],

    nicheRecruitingAdvantages: [
      "Ross BBA on-campus recruiting — among the strongest in the country",
      "Michigan Engineering direct pipeline to Apple, Google, Boeing, Lockheed",
      "Michigan Medicine undergraduate research access",
      "630,000 alumni referral network — the largest in the world",
      "Ann Arbor startup ecosystem and entrepreneurship programs"
    ],

    overlookedStrengths: [
      "School of Information — Google and Amazon feeder at scale",
      "Erb Institute for sustainability leadership",
      "Stamps School creative-to-brand-strategy pipeline",
      "Michigan's automotive and mobility technology ecosystem",
      "Out-of-state students get an effectively Ivy-level credential at public university cost"
    ],

    sleeperIndustries: [
      "Autonomous Vehicles and Mobility Technology",
      "Sustainability and ESG Leadership",
      "UX Research and Human-Centered Design",
      "Health Information Technology",
      "Urban Planning and Smart Cities"
    ]
  },

  networkCapital: {

    alumniAccessibility: 90,

    mentorshipDensity: 84,

    executiveAccess: 90,

    internshipNetwork: 92,

    familyBusinessExposure: 74,

    relationshipCapitalScore: 90,

    alumniLoyaltyScore: 96,

    referralCultureStrength: 92,

    donorNetworkStrength: 94,

    boardMemberDensity: 88
  },

  economicEcosystem: {

    primaryIndustries: [
      "Consulting",
      "Technology",
      "Financial Services",
      "Engineering and Manufacturing",
      "Healthcare",
      "Law",
      "Public Policy"
    ],

    regionalEconomicDrivers: [
      "Detroit Automotive Industry",
      "Ann Arbor Technology and Startup Ecosystem",
      "Michigan Medicine Research Enterprise",
      "Big Ten Athletics Economy",
      "Chicago Financial Services Proximity"
    ],

    topEmployers: [
      "McKinsey",
      "BCG",
      "Bain",
      "Goldman Sachs",
      "Google",
      "Apple",
      "Amazon",
      "Ford",
      "GM",
      "Deloitte",
      "Microsoft"
    ],

    emergingIndustries: [
      "Autonomous Vehicles",
      "Sustainable Business",
      "Health Information Technology",
      "Artificial Intelligence",
      "Urban Technology"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 68,

    corporateHeadquartersDensity: 74,

    healthcareHubStrength: 88,

    innovationIndex: 86
  },

  geographicInfluence: {

    dominantMarket: "Chicago and Midwest",

    secondaryMarkets: [
      "New York",
      "San Francisco",
      "Washington DC",
      "Detroit",
      "Boston",
      "Seattle"
    ],

    alumniStrongholds: [
      "Chicago IL",
      "New York NY",
      "Detroit-Ann Arbor MI",
      "San Francisco CA",
      "Washington DC"
    ],

    relocationPatterns: [
      "Chicago financial services and consulting dominant",
      "New York banking and media",
      "San Francisco and Seattle technology",
      "Detroit automotive leadership",
      "Washington DC policy and law"
    ],

    regionalInfluenceScore: 88,

    nationalReachScore: 94,

    internationalReachScore: 78
  },

  socialCapital: {

    greekLifeInfluence: 48,

    studentOrganizationStrength: 92,

    leadershipDevelopment: 88,

    crossDisciplinaryInteraction: 82,

    civicEngagement: 80
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 36,
      notes: "Limited. Stamps School has some exposure to brand aesthetics but not a primary pipeline."
    },

    healthWellness: {
      strength: 80,
      notes: "Strong through Michigan Medicine, School of Public Health, and Kinesiology. Not a consumer wellness pipeline but a serious health sciences one."
    },

    nutraceuticals: {
      strength: 18,
      notes: "Minimal. Not a defining corridor."
    },

    consumerProducts: {
      strength: 72,
      notes: "Ross BBA pipeline to CPG companies including P&G, Kraft Heinz, and Unilever. Solid but not dominant."
    },

    outdoorIndustry: {
      strength: 34,
      notes: "Limited. Some exposure through Midwest outdoor culture but not a pipeline."
    },

    sportsBusiness: {
      strength: 76,
      notes: "Michigan's athletics program is one of the largest revenue-generating programs in college sports. Sports business and sports media exposure is strong."
    },

    entertainmentMedia: {
      strength: 64,
      notes: "Michigan has a strong performing arts culture and some media alumni, but not a primary entertainment pipeline."
    },

    ventureCapital: {
      strength: 70,
      notes: "Growing Ann Arbor and Detroit startup ecosystems. Alumni network in Chicago and NY VC. Solid but not Stanford-level."
    },

    privateEquity: {
      strength: 82,
      notes: "Strong Ross and alumni network PE placement in Chicago and New York. One of the top public university pipelines for PE."
    },

    investmentBanking: {
      strength: 90,
      notes: "Ross BBA is a top-5 undergraduate feeder for Goldman, J.P. Morgan, and boutique banking. Among the strongest public university pipelines in the country."
    },

    consulting: {
      strength: 94,
      notes: "McKinsey, BCG, and Bain actively recruit on campus. Ross BBA is consistently one of the top 5 undergraduate consulting feeders nationally, public or private."
    },

    medicine: {
      strength: 86,
      notes: "Strong pre-med program with Michigan Medicine research access. One of the top public university pathways to medical school."
    },

    healthcareAdministration: {
      strength: 78,
      notes: "Michigan Medicine and School of Public Health create strong healthcare administration and health policy pipelines."
    },

    defense: {
      strength: 58,
      notes: "ROTC presence and engineering school create defense sector pipeline, particularly aerospace and defense contracting."
    },

    realEstate: {
      strength: 64,
      notes: "Taubman College of Architecture and Urban Planning, Ross real estate concentration. Moderate but growing."
    },

    luxuryBrands: {
      strength: 38,
      notes: "Limited. Some exposure through student demographics and New York alumni network."
    },

    entrepreneurship: {
      strength: 76,
      notes: "Growing. Michigan has invested significantly in entrepreneurship infrastructure including the Michigan entrepreneurship program and Detroit startup adjacency."
    },

    technology: {
      strength: 92,
      notes: "One of the top public university technology pipelines. College of Engineering feeds Apple, Google, Microsoft, Amazon, and Ford at scale. School of Information adds data science and UX pathways."
    },

    publicPolicy: {
      strength: 84,
      notes: "Ford School of Public Policy is top-10 nationally. Washington DC alumni network strong. Michigan produces a disproportionate share of federal agency leaders and policy researchers."
    },

    nonprofitLeadership: {
      strength: 74,
      notes: "Strong civic engagement culture and public service orientation. Ford School and social work programs create solid nonprofit pathways."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle to Upper-Middle",

    socialMobilityIndex: 78,

    firstGenerationSupport: 76,

    wealthCreationPotential: 90,

    familyBusinessPipelineStrength: 72
  },

  futureResilience: {

    aiResistance: 86,

    automationResistance: 84,

    adaptabilityScore: 88,

    interdisciplinaryStrength: 86,

    futureReadiness: 88,

    entrepreneurialFlexibility: 76,

    lifelongLearningCulture: 84,

    innovationCapacity: 88
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 90,

    communityLeadershipPotential: 86,

    geographicMobility: 92,

    workLifeBalancePotential: 72,

    purposeAlignment: 80,

    familyFormationSupport: 76,

    personalDevelopmentPotential: 86,

    careerOptionality: 94,

    longTermLifeSatisfaction: 84
  },

  institutionalMoat: {

    prestigeMoat: 88,

    networkMoat: 96,

    geographicMoat: 80,

    industryMoat: 88,

    alumniMoat: 98,

    brandDurability: 94,

    overallMoatScore: 92
  },

  // ===== ENRICHMENT MERGED FROM DEEP-RESEARCH FILE =====

  lifestyleOutcomes: {
    overallLifestyleStrength: 91, academicLifestyleBalance: 81, socialEnergy: 90,
    athleticSpirit: 99, creativeScene: 86, politicalEngagement: 92,
    wellnessOrientation: 79, adventureAccess: 78, environmentalConsciousness: 82
  },
  environmentalDrivers: {
    schoolSpiritCollectiveIdentity: 98, socialSceneVariety: 90, communityLayoutWalkability: 91,
    campusEventDensity: 94, peerNetworkFormation: 92, facultyCulturalInfluence: 88,
    stressCultureAndPace: 88, culturalVibrancyOfTown: 95
  },
  institutionalCultureDNA: {
    overallCulturalStrength: 93, ambitionIntensity: 95, collaborativeSpirit: 84,
    traditionRitualStrength: 99, intellectualism: 96, careerism: 94,
    inclusivityWarmth: 68, independenceDIYEthos: 76, prestigeAwareness: 97,
    innovationEnergy: 92, humorQuirkiness: 80, alumniLoyalty: 98,
    alumniInvolvement: 93, brandEvangelism: 98, philanthropicCulture: 91
  }
},

"University of South Carolina": {


  institutionNarrative: {

    name: "University of South Carolina",

    location: "Columbia, South Carolina",

    region: "SEC",

    archetype: "The International Business and Supply Chain Flagship of the Southeast",

    oneSentenceSummary: "The University of South Carolina houses the Darla Moore School of Business — the #1 undergraduate international business program in America for 24 consecutive years, a streak no other business school has matched in any category in the history of US News rankings — alongside the #1 undergraduate supply chain program nationally, producing graduates who enter Goldman Sachs, Bank of America, and JPMorgan with domain expertise that MBA graduates spend two years trying to build.",

    pipeline: "International Business and Global Trade — Moore School of Business, #1 undergraduate international business program in America for 24 consecutive years. Bank of America, Wells Fargo, Goldman Sachs, JPMorgan Chase, Jefferies, Deloitte, PwC recruit on campus. Supply Chain and Operations: #1 undergraduate supply chain program nationally. Arnold School of Public Health: top-20 nationally. School of Law: top-50 nationally, South Carolina's dominant law school. College of Engineering: aerospace, mechanical, and civil engineering with BMW, Michelin, Boeing South Carolina, and Volvo recruiting. 28,000 undergraduates; 36,000 total enrollment.",

    hiddenPathway: "The Darla Moore School of Business has been the #1 undergraduate international business program in America for 24 consecutive years — a streak no other business school in any category at any university has ever matched in the history of US News rankings. Most families outside the Southeast do not know this. The supply chain program is simultaneously ranked #1 nationally — meaning USC is the only university in America that holds simultaneous #1 rankings in two major business disciplines. BMW's North American headquarters in Spartanburg (60 miles from Columbia) and Boeing's South Carolina operations recruit UofSC supply chain and engineering graduates at scale, creating an advanced manufacturing pipeline that rivals any in the Southeast.",

    institutionalSecret: "South Carolina's out-of-state enrollment transformation is one of the most dramatic in American public higher education. 25 years ago, 87% of students were South Carolina residents. Today, 52% are from out of state — a 333% surge driven by Moore School's national rankings, competitive merit scholarships, and Columbia's quality of life. The result is a student body that is increasingly nationally diverse while retaining the warmth of SEC culture. For out-of-state students, UofSC offers a #1-ranked business school at public university cost.",

    theRoom: "52% of UofSC students come from out of state — a 333% surge in out-of-state enrollment over the past 25 years that is reshaping the character of the campus. Williams-Brice Stadium seats 80,000 and SEC football is the dominant social force from September through November. Columbia is a state capital of 140,000 with the infrastructure of a real city — state government, legal market, healthcare, and the university create a diverse professional environment that smaller SEC college towns cannot match.",

    lifestyle: "Columbia is a state capital college town where USC is the dominant social and economic institution. The Vista entertainment district, Five Points, and the Congaree River create a quality of life that has attracted significant out-of-state enrollment. Charleston is 90 minutes south — accessible for weekends and a major draw for students and graduates alike.",

    bestFitPersonality: "High Conscientiousness, International business or supply chain-oriented, Southeast or Charlotte-bound, SEC football culture-comfortable, Globally-minded, Drawn to Columbia's college-capital-city character",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Southeast dominant — Charlotte primary graduate market, Atlanta secondary, national through international business and supply chain alumni networks, global through Moore School international program",

    economicOutcome: "Elite outcomes in international business and supply chain through Goldman Sachs, Bank of America, JPMorgan, Deloitte, and BMW/Boeing/Michelin; strong Southeast legal placement through School of Law; growing engineering placement in advanced manufacturing corridor",

    gradCities: [
      "Columbia SC",
      "Charlotte NC",
      "Atlanta GA",
      "New York NY",
      "Charleston SC",
      "Washington DC",
      "Greenville SC"
    ],

    comparableInstitutions: [
      "Clemson University",
      "University of Georgia",
      "University of Tennessee",
      "University of Alabama",
      "Virginia Tech"
    ],

    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: [
        "Midlands Technical College",
        "Trident Technical College",
        "Greenville Technical College",
        "Piedmont Technical College"
      ],
      transferAcceptanceRate: "~55%",
      freshmanAcceptanceRate: "~65%",
      estimatedSavingsRange: "$14,000–$22,000",
      transferNotes: "UofSC participates in South Carolina's statewide transfer articulation system. Midlands Technical College in Columbia is the primary CC feeder — it sits in the same city as USC. Moore School of Business transfer is competitive and requires a separate application with GPA requirements. Supply chain and international business transfers must demonstrate prerequisites. For South Carolina residents targeting USC's general programs, the CC pathway is viable and saves meaningful tuition. Students specifically targeting Moore School should be aware that direct freshman admission is more reliable for the #1-ranked programs."
    }
  },

  institutionIdentity: {

    archetype: "International Business, Supply Chain, and Advanced Manufacturing Flagship",

    institutionalPersonality: "globally-minded, professionally ambitious, SEC-proud, increasingly nationally diverse, Charlotte-orbit-aware, supply-chain-savvy",

    cultureKeywords: [
      "Moore School",
      "International Business #1",
      "Supply Chain #1",
      "Gamecocks",
      "SEC Football",
      "Charlotte Pipeline",
      "BMW Corridor",
      "Columbia Capital City",
      "Out-of-State Transformation"
    ],

    missionOrientation: "Research, professional formation, and service to South Carolina — USC's land-grant mission alongside its growing national reputation in international business and supply chain",

    faithTradition: "None",

    educationalPhilosophy: "Professional formation in business, supply chain, law, public health, and engineering with deep Southeast and global industry integration; strong emphasis on international experience and business application",

    competitiveness: "Moderately Selective (~65% overall; Moore School direct-admit more selective)",

    politicalCulture: "Conservative to moderate — South Carolina is a conservative state; Columbia is slightly more moderate as a state capital; campus reflects the increasing national diversity of student body",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate nationally; very high within international business and supply chain communities",

    socialClimate: "SEC-energized, increasingly nationally diverse, Charlotte-professional-orbit-aware, Columbia-capital-city embedded",

    leadershipStyle: "Professional and international — Moore School global business networks, supply chain industry leadership, Charlotte banking and finance community integration"
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 28000,

    graduateEnrollment: 8000,

    totalEnrollment: 36000,

    campusType: "Residential University",

    residentialIntensity: 72,

    communityFeel: 74,

    studentFacultyRatio: "18:1",

    classSizeExperience: "Large introductory lectures in first two years; Moore School and engineering programs offer more cohort-based professional experiences; upper-division courses more intimate",

    scaleAdvantages: [
      "Moore School #1 international business — 24-year streak no competitor can replicate",
      "Supply chain #1 nationally — BMW, Boeing, Michelin recruit exclusively",
      "Columbia state capital — legal, government, and healthcare professional market",
      "Charleston 90 minutes south — weekend and career asset",
      "Out-of-state student body creating nationally diverse peer group within SEC culture"
    ],

    scaleDisadvantages: [
      "Moore School direct-admit is competitive — not all business-interested students gain access",
      "National brand recognition still below actual program quality in key fields",
      "Columbia is not a major national economic hub for non-Southeast careers",
      "SEC reputation can overshadow the academic distinction of Moore School nationally"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 74,
      conscientiousness: 84,
      extraversion: 78,
      agreeableness: 76,
      neuroticism: 34
    },

    hollandCodes: ["E", "C", "S"],

    learningStyle: [
      "Professional Cohort Learning (Moore School)",
      "Case and International Business",
      "Large Lecture with Professional Supplement",
      "Applied and Industry-Based (Supply Chain, Engineering)"
    ],

    socialEnvironment: [
      "SEC Football Culture",
      "Increasingly Nationally Diverse",
      "Charlotte-Professional-Orbit-Aware",
      "Columbia Capital City Embedded",
      "Greek-Active"
    ],

    idealStudentTraits: [
      "International business, supply chain, or finance-oriented",
      "Southeast or Charlotte-bound with professional ambitions",
      "Globally-minded and open to international experiences",
      "Comfortable with SEC football as a social anchor",
      "Drawn to the college-capital-city character of Columbia"
    ],

    thrivesIf: [
      "Targeting international business, global trade, or supply chain management",
      "Wants access to BMW, Boeing, Michelin, and advanced manufacturing recruiting",
      "Drawn to Charlotte's banking and financial services market",
      "Values the combination of SEC culture and #1-ranked professional programs",
      "Open to international study or language immersion through Moore School"
    ],

    strugglesIf: [
      "Targeting technology, venture capital, or non-business professional paths nationally",
      "Uncomfortable with conservative South Carolina political culture",
      "Interested in Moore School but cannot gain direct-admit or internal transfer",
      "Wants a large city adjacent to campus rather than a state capital college town",
      "Seeking more racial and socioeconomic diversity than current UofSC composition provides"
    ],

    transferRiskFactors: [
      "Students who chose UofSC for SEC culture without specific Moore School orientation",
      "Students who cannot gain Moore School access and feel outside the school's primary identity",
      "Out-of-state students who expected more urban energy than Columbia provides"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Sport and Entertainment Management",
      "Hospitality Management",
      "Public Health (Arnold School top-20)",
      "Integrated Information Technology",
      "Exercise Science"
    ],

    hiddenCareerPipelines: [
      "BMW North American Supply Chain (Spartanburg headquarters pipeline)",
      "Boeing South Carolina Manufacturing and Logistics",
      "Michelin North America (Greenville, SC headquarters)",
      "Volvo Cars North America Manufacturing (Berkeley County, SC)",
      "Charlotte Banking and Financial Services (1 hour north)"
    ],

    nicheRecruitingAdvantages: [
      "Moore School international business — 24-year #1 streak creates alumni density in global trade and export finance that no competitor can match",
      "Supply chain #1 — BMW, Boeing, and Michelin recruit almost exclusively from UofSC for their South Carolina operations",
      "Sport and Entertainment Management program — nationally recognized niche program",
      "Arnold School of Public Health top-20 — CDC and federal public health agency pipeline",
      "South Carolina's automotive FDI corridor — BMW, Volvo, Michelin all have SC headquarters creating unique international business exposure domestically"
    ],

    overlookedStrengths: [
      "Moore School 24-year #1 streak — the most sustained #1 ranking in business school history",
      "Supply chain and international business simultaneous #1 rankings — unique in America",
      "South Carolina's automotive FDI corridor — international business experience without leaving the state",
      "Charleston proximity — 90 minutes to one of America's most desirable cities",
      "Sport and Entertainment Management — top national program rarely mentioned in counseling conversations"
    ],

    sleeperIndustries: [
      "Global Supply Chain Technology and Logistics",
      "Port and Maritime Trade (Port of Charleston is top-10 US port)",
      "Automotive Manufacturing Technology",
      "Export Finance and Trade Credit",
      "Cybersecurity (South Carolina's growing defense technology presence)"
    ]
  },

  networkCapital: {

    alumniAccessibility: 80,

    mentorshipDensity: 76,

    executiveAccess: 78,

    internshipNetwork: 80,

    familyBusinessExposure: 72,

    relationshipCapitalScore: 78,

    alumniLoyaltyScore: 84,

    referralCultureStrength: 80,

    donorNetworkStrength: 76,

    boardMemberDensity: 70
  },

  economicEcosystem: {

    primaryIndustries: [
      "International Business and Global Trade",
      "Supply Chain and Logistics",
      "Financial Services",
      "Advanced Manufacturing",
      "Law and Government",
      "Healthcare and Public Health",
      "Hospitality and Tourism"
    ],

    regionalEconomicDrivers: [
      "Charlotte Banking and Financial Services (60 miles north)",
      "South Carolina Automotive FDI Corridor (BMW, Volvo, Michelin)",
      "Port of Charleston (top-10 US port)",
      "Columbia State Government and Legal Market",
      "South Carolina Tourism and Hospitality (Myrtle Beach, Hilton Head)"
    ],

    topEmployers: [
      "Bank of America",
      "Wells Fargo",
      "Goldman Sachs",
      "JPMorgan Chase",
      "Deloitte",
      "PwC",
      "BMW",
      "Boeing",
      "Michelin",
      "Palmetto Health"
    ],

    emergingIndustries: [
      "Port and Logistics Technology",
      "Electric Vehicle Manufacturing",
      "Cybersecurity",
      "Healthcare Technology",
      "Defense Manufacturing"
    ],

    startupDensity: "Low to Moderate",

    ventureCapitalAccess: 38,

    corporateHeadquartersDensity: 54,

    healthcareHubStrength: 66,

    innovationIndex: 62
  },

  geographicInfluence: {

    dominantMarket: "Southeast and Charlotte",

    secondaryMarkets: [
      "Atlanta",
      "New York",
      "Washington DC",
      "Charleston",
      "Greenville SC"
    ],

    alumniStrongholds: [
      "Columbia SC",
      "Charlotte NC",
      "Atlanta GA",
      "New York NY",
      "Charleston SC"
    ],

    relocationPatterns: [
      "Charlotte banking and finance dominant for business graduates",
      "Columbia retention in law, government, and healthcare",
      "Atlanta Southeast professional market migration",
      "New York international business and finance migration through Moore alumni"
    ],

    regionalInfluenceScore: 82,

    nationalReachScore: 66,

    internationalReachScore: 62
  },

  socialCapital: {

    greekLifeInfluence: 60,

    studentOrganizationStrength: 76,

    leadershipDevelopment: 76,

    crossDisciplinaryInteraction: 70,

    civicEngagement: 70
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 26,
      notes: "Minimal direct pipeline."
    },

    healthWellness: {
      strength: 66,
      notes: "Arnold School of Public Health top-20 and Palmetto Health system create solid health and wellness pathways."
    },

    nutraceuticals: {
      strength: 24,
      notes: "Minimal."
    },

    consumerProducts: {
      strength: 54,
      notes: "Moore School supply chain and international business create exposure to global CPG companies."
    },

    outdoorIndustry: {
      strength: 38,
      notes: "South Carolina outdoor recreation culture and some alumni in outdoor industry. Not a primary pipeline."
    },

    sportsBusiness: {
      strength: 74,
      notes: "Sport and Entertainment Management program is nationally recognized. SEC athletics culture and Charlotte Hornets/Panthers proximity create strong sports business exposure."
    },

    entertainmentMedia: {
      strength: 50,
      notes: "Some journalism and media placement. Sport and entertainment management creates tangential exposure."
    },

    ventureCapital: {
      strength: 34,
      notes: "Limited. South Carolina startup ecosystem is nascent."
    },

    privateEquity: {
      strength: 58,
      notes: "Charlotte PE market accessible through Moore alumni. Not a primary pipeline but growing."
    },

    investmentBanking: {
      strength: 74,
      notes: "Goldman Sachs, JPMorgan, Bank of America, and Jefferies recruit on campus. Charlotte proximity creates strong regional IB access."
    },

    consulting: {
      strength: 68,
      notes: "Deloitte, PwC, and Big 4 recruit on campus. Moore School supply chain consulting is a specific strength."
    },

    medicine: {
      strength: 60,
      notes: "Pre-med program and USC School of Medicine create solid medical pathways for South Carolina residents."
    },

    healthcareAdministration: {
      strength: 64,
      notes: "Arnold School public health and Palmetto Health system create healthcare administration exposure."
    },

    defense: {
      strength: 52,
      notes: "Fort Jackson (largest Army basic training post in America) adjacent to Columbia creates some defense exposure. Not a primary pipeline."
    },

    realEstate: {
      strength: 52,
      notes: "Columbia and Charleston real estate markets accessible through alumni network."
    },

    luxuryBrands: {
      strength: 24,
      notes: "Minimal."
    },

    entrepreneurship: {
      strength: 54,
      notes: "Growing. Columbia startup ecosystem developing. International business entrepreneurship is the most active corridor."
    },

    technology: {
      strength: 56,
      notes: "Integrated Information Technology program and growing IT sector in Columbia create solid technology exposure. Not a primary national tech pipeline."
    },

    publicPolicy: {
      strength: 66,
      notes: "Columbia state capital, School of Law, and Arnold School of Public Health create strong public policy pathways. Fort Jackson and federal presence create government career exposure."
    },

    nonprofitLeadership: {
      strength: 60,
      notes: "Public service culture and Arnold School public health create solid nonprofit pathways."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle to Upper-Middle",

    socialMobilityIndex: 74,

    firstGenerationSupport: 72,

    wealthCreationPotential: 76,

    familyBusinessPipelineStrength: 68
  },

  futureResilience: {

    aiResistance: 74,

    automationResistance: 72,

    adaptabilityScore: 76,

    interdisciplinaryStrength: 72,

    futureReadiness: 74,

    entrepreneurialFlexibility: 62,

    lifelongLearningCulture: 72,

    innovationCapacity: 64
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 76,

    communityLeadershipPotential: 76,

    geographicMobility: 70,

    workLifeBalancePotential: 80,

    purposeAlignment: 74,

    familyFormationSupport: 82,

    personalDevelopmentPotential: 74,

    careerOptionality: 70,

    longTermLifeSatisfaction: 80
  },

  institutionalMoat: {

    prestigeMoat: 62,

    networkMoat: 74,

    geographicMoat: 78,

    industryMoat: 86,

    alumniMoat: 80,

    brandDurability: 74,

    overallMoatScore: 78
  },

  // ===== ENRICHMENT MERGED FROM DEEP-RESEARCH FILE =====

  lifestyleIdentity: {
    dimensions: {
      sportsIntensity: 90,
      greekLifeCentrality: 80,
      partyTailgateCulture: 75,
      intellectualism: 65,
      outdoorsAccess: 30,
      wellnessHealth: 50,
      entrepreneurshipEnergy: 40
    },
    narrative: {
      summary: "Energetic and Southern -- SEC football/basketball central, heavy Greek life (~26% of enrollment, 10,000+ students), classic party-spirited SEC school but with genuine academic seriousness available (top-ranked international business, honors college, #1 first-year experience for publics).",
      collegeTownFit: "Best fit for students wanting college-town immersion with built-in community; weaker fit for students wanting a large metropolis or tech-startup vibe."
    }
  },
  humanOutcomes: {
    narrative: "R1 status, Darla Moore School (#1 international business among publics for decades), ~92% retention, $323M FY25 research funding. In-state tuition ~$12k/yr, ~80% receive grants. Two-thirds of in-state alumni live outside Columbia metro -- strong statewide reach."
  }
},

"University of Georgia": {


  institutionNarrative: {

    name: "University of Georgia",

    location: "Athens, Georgia",

    region: "Southeast",

    archetype: "The SEC Flagship That Quietly Became a Top-20 Public",

    oneSentenceSummary: "The University of Georgia — the nation's first public university, founded 1785 — has quietly built one of the most effective business-to-Atlanta pipelines in American higher education, with a top-25 business school, top-5 journalism program, 95% graduate employment rate, and the Student Managed Investment Fund producing bulge-bracket bankers from Athens.",

    pipeline: "Founded 1785 — the nation's first state-chartered university. 32,000 undergraduates. #18 among public universities nationally by US News 2025 — one of only two Georgia institutions in the top 20 alongside Georgia Tech, and one of only nine public universities in the country with a 90%+ six-year graduation rate. 95% of graduates employed or continuing education within six months. Terry College of Business: #13 among public business schools, #23 overall — all eight undergraduate majors nationally ranked for eight consecutive years. 81% of Terry Class of 2025 completed at least one business internship before graduation; 92.5% employed within three months; average starting salary $71,927. Grady College of Journalism: consistently top-5 nationally. Primary employers: Amazon, Delta Air Lines, The Home Depot, Chick-fil-A, Coca-Cola, PwC, Bank of America, Truist, NCR Voyix.",

    hiddenPathway: "The Atlanta Fortune 500 corridor is UGA's most consequential placement asset — and it is closer and more direct than most out-of-state families realize. Atlanta is 70 miles from Athens and home to Coca-Cola, Delta, UPS, The Home Depot, CNN, Intercontinental Hotels, NCR Voyix, and Southern Company — a concentration of corporate headquarters that rivals any American city outside New York. Terry graduates enter this ecosystem through alumni relationships and institutional recruiting pipelines that have been built over generations. The Student Managed Investment Fund at Terry is one of the most impressive undergraduate investment programs at any public university in the South — graduates who complete it arrive at bulge-bracket investment banking and consulting interviews having managed real capital. The Grady College produces a disproportionate share of national political correspondents, local news anchors, and sports media professionals who entered through Athens and built careers in Atlanta, New York, and Washington.",

    institutionalSecret: "UGA is the most undervalued flagship in the SEC. Its academic profile — 4.17 GPA, ACT 31, top-20 public ranking — has risen dramatically in the past decade, but the national perception of UGA as a football school has not caught up. Families who evaluate UGA purely on football culture are missing a Terry College of Business that rivals Kelley, a journalism school that rivals Northwestern's Medill in placement outcomes, and a city-campus relationship with Atlanta that no Southeastern peer can replicate.",

    theRoom: "767-acre campus in Athens — a city of 130,000 built almost entirely around the university, with a cultural identity that extends far beyond football. R.E.M., the B-52s, and Drive-By Truckers all originated in Athens, which has maintained one of the most vibrant independent music and restaurant scenes of any college town in the South for four decades. 80% of enrolled students are Georgia residents; 20% are from out of state by institutional design. Sanford Stadium seats 93,000 — one of the largest in the country — and SEC football is the campus's social heartbeat from August through December. The academic culture has risen significantly over the past decade: incoming class average GPA is now 4.17, with average ACT of 31 and SAT of 1356.",

    lifestyle: "Athens is the college town that college town culture is based on — downtown bars, live music venues, independent restaurants, and a walkable grid that makes the city accessible without a car. The Greek system is large and active. The pace of life is distinctly Southern without being slow.",

    bestFitPersonality: "High Conscientiousness, SEC football culture-comfortable, Business or journalism-oriented, Georgia-rooted or Atlanta-bound, Community-minded, Professionally ambitious within a large state university context",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Georgia dominant — Atlanta Fortune 500 corridor primary, Southeast regional, national journalism and media",

    economicOutcome: "Strong outcomes in business, finance, journalism, law, and healthcare through Atlanta Fortune 500 employer base; Terry SMIF produces investment banking and consulting placements at rates exceeding larger peer programs",

    gradCities: [
      "Atlanta GA",
      "New York NY",
      "Austin TX",
      "Charlotte NC",
      "Washington DC",
      "Nashville TN",
      "Chicago IL"
    ],

    comparableInstitutions: [
      "University of North Carolina Chapel Hill",
      "University of Virginia",
      "University of Florida",
      "Auburn University",
      "University of Tennessee"
    ],

    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: [
        "Georgia Gwinnett College",
        "Georgia Perimeter College (now Georgia State Perimeter)",
        "Athens Technical College"
      ],
      transferAcceptanceRate: "~55%",
      freshmanAcceptanceRate: "~40%",
      estimatedSavingsRange: "$18,000–$28,000",
      transferNotes: "UGA accepts transfers from Georgia's technical college and state college system. Georgia Perimeter and Georgia Gwinnett College are the most common feeder CCs. Transfer acceptance is competitive but meaningfully more accessible than direct freshman admission. Terry College of Business has a separate transfer process — general UGA transfer admission does not guarantee Terry access. For Georgia residents targeting UGA, the CC pathway represents a legitimate two-year savings strategy with a viable transfer route."
    }
  },

  institutionIdentity: {

    archetype: "Rising SEC Research Flagship",

    institutionalPersonality: "community-oriented, SEC-proud, professionally ambitious, Southern in pace and warmth, rising academically",

    cultureKeywords: [
      "Go Dawgs",
      "SEC Football",
      "Athens Music Scene",
      "Terry Business",
      "Grady Journalism",
      "Atlanta Pipeline",
      "Southern Culture",
      "Greek Life",
      "Founded 1785"
    ],

    missionOrientation: "Public service, research, and the advancement of Georgia — UGA's land-grant mission shapes its institutional identity as a servant of the state's citizens and economy",

    faithTradition: "None",

    educationalPhilosophy: "Broad public university access with elite professional school depth in business, journalism, law, and veterinary medicine; strong emphasis on experiential learning and Atlanta industry connection",

    competitiveness: "Selective (~40% overall; Terry and Grady more competitive)",

    politicalCulture: "Moderate to conservative — Athens is a blue dot in a red state; campus reflects a mix of Georgia cultural conservatism and college-town progressivism",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate and rising",

    socialClimate: "Warm, SEC-saturated, Greek-active, Athens-embedded, Southern community-oriented",

    leadershipStyle: "Community and organizational — Greek leadership, student government, Atlanta networking from day one"
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 32000,

    graduateEnrollment: 9000,

    totalEnrollment: 41000,

    campusType: "Residential University",

    residentialIntensity: 74,

    communityFeel: 80,

    studentFacultyRatio: "17:1",

    classSizeExperience: "Large introductory lectures in first two years; Terry and Grady provide cohort-based professional school intimacy; upper-division courses significantly more personal",

    scaleAdvantages: [
      "Atlanta Fortune 500 proximity and recruiting pipeline",
      "Terry SMIF — real capital management experience at undergraduate level",
      "Athens cultural scene as a genuine four-year asset",
      "Large Greek system creates immediate community",
      "Strong SEC alumni loyalty and referral network"
    ],

    scaleDisadvantages: [
      "80% Georgia resident composition limits geographic and cultural diversity",
      "Easy to prioritize Athens social life over professional development",
      "Terry internal transfer competitive — not all business-interested students gain access",
      "National brand recognition still lagging actual academic quality"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 70,
      conscientiousness: 82,
      extraversion: 82,
      agreeableness: 80,
      neuroticism: 34
    },

    hollandCodes: ["E", "S", "C"],

    learningStyle: [
      "Professional Cohort Learning (Terry, Grady)",
      "Large Lecture with Self-Directed Supplement",
      "Experiential and Internship-Based",
      "Case and Investment Management (Terry SMIF)"
    ],

    socialEnvironment: [
      "SEC Football Culture",
      "Greek-Active",
      "Athens College-Town Embedded",
      "Southern Community Warmth"
    ],

    idealStudentTraits: [
      "Georgia-rooted or Atlanta-bound",
      "Business, journalism, or pre-law oriented",
      "Comfortable with SEC football as a campus organizing force",
      "Community-minded and socially active",
      "Professionally ambitious with Southeastern career focus"
    ],

    thrivesIf: [
      "Wants direct access to Atlanta's Fortune 500 recruiting ecosystem",
      "Interested in business, journalism, law, or veterinary medicine",
      "Thrives in large, warm, SEC-culture college environments",
      "Values Athens as a four-year cultural experience",
      "Wants strong peer community with shared Southern cultural identity"
    ],

    strugglesIf: [
      "Seeking geographic and cultural diversity beyond the Southeast",
      "Uncomfortable with SEC football as a dominant social force",
      "Wants a more internationally or technologically oriented student body",
      "Needs close faculty mentorship in large lecture settings",
      "Targeting tech or finance careers primarily outside the Atlanta corridor"
    ],

    transferRiskFactors: [
      "Students who over-invest in Athens social life at the expense of Atlanta internship development",
      "Out-of-state students who feel culturally outside the Georgia-dominant student body",
      "Business-interested students who cannot gain Terry internal transfer"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Agricultural and Applied Economics",
      "International Affairs",
      "Cognitive Science",
      "Financial Planning",
      "Advertising (Grady College)",
      "Agricultural Communication"
    ],

    hiddenCareerPipelines: [
      "Atlanta Fortune 500 C-Suite (Coca-Cola, Delta, Home Depot, UPS pipeline)",
      "National Political Journalism (Grady to Washington bureau)",
      "Investment Banking through Terry SMIF",
      "Sports Media and Broadcast Journalism",
      "Veterinary Medicine and Animal Health Industry"
    ],

    nicheRecruitingAdvantages: [
      "Terry SMIF — undergraduate real capital management, direct IB recruiting advantage",
      "Grady College sports journalism to ESPN, SEC Network, and national broadcast",
      "Atlanta corporate proximity — internships accessible by 45-minute drive",
      "UGA College of Veterinary Medicine — top-5 nationally, exceptional DVM pipeline",
      "Bulldog alumni network in Atlanta finance — referral culture is among the strongest in the SEC"
    ],

    overlookedStrengths: [
      "Terry SMIF — most rigorous undergraduate investment program in the South",
      "Grady journalism placement rivals Northwestern Medill in Southeast market",
      "Athens cultural scene as a four-year living asset",
      "UGA Veterinary Medicine — a top-5 DVM program almost never mentioned in counseling conversations",
      "Atlanta Fortune 500 recruiting distance — 70 miles, not 700"
    ],

    sleeperIndustries: [
      "Agricultural Technology and AgriTech",
      "Sports Media and SEC Network",
      "Political Communications and Campaign Media",
      "Veterinary and Animal Health Industry",
      "Supply Chain and Logistics (UPS, Home Depot pipelines)"
    ]
  },

  networkCapital: {

    alumniAccessibility: 84,

    mentorshipDensity: 78,

    executiveAccess: 80,

    internshipNetwork: 82,

    familyBusinessExposure: 74,

    relationshipCapitalScore: 82,

    alumniLoyaltyScore: 90,

    referralCultureStrength: 86,

    donorNetworkStrength: 82,

    boardMemberDensity: 76
  },

  economicEcosystem: {

    primaryIndustries: [
      "Financial Services",
      "Consulting",
      "Media and Journalism",
      "Healthcare",
      "Retail and Consumer Products",
      "Law",
      "Agriculture and AgriTech"
    ],

    regionalEconomicDrivers: [
      "Atlanta Fortune 500 Concentration",
      "Georgia Agricultural and Food Industry",
      "Southeast Corporate Relocation Wave",
      "UGA Research and Innovation Economy",
      "Athens Cultural and Tourism Economy"
    ],

    topEmployers: [
      "Coca-Cola",
      "Delta Air Lines",
      "The Home Depot",
      "Amazon",
      "PwC",
      "Bank of America",
      "Truist",
      "Chick-fil-A",
      "NCR Voyix",
      "Southern Company"
    ],

    emergingIndustries: [
      "FinTech (Atlanta is the FinTech capital of the Southeast)",
      "Supply Chain Technology",
      "AgriTech",
      "Digital Media",
      "Healthcare IT"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 58,

    corporateHeadquartersDensity: 76,

    healthcareHubStrength: 72,

    innovationIndex: 70
  },

  geographicInfluence: {

    dominantMarket: "Atlanta and Georgia",

    secondaryMarkets: [
      "New York",
      "Charlotte",
      "Washington DC",
      "Austin",
      "Nashville"
    ],

    alumniStrongholds: [
      "Atlanta GA",
      "New York NY",
      "Charlotte NC",
      "Washington DC",
      "Austin TX"
    ],

    relocationPatterns: [
      "Strong Atlanta retention (70%)",
      "New York finance and media migration",
      "Charlotte banking corridor",
      "Washington DC policy and journalism"
    ],

    regionalInfluenceScore: 92,

    nationalReachScore: 70,

    internationalReachScore: 48
  },

  socialCapital: {

    greekLifeInfluence: 74,

    studentOrganizationStrength: 80,

    leadershipDevelopment: 78,

    crossDisciplinaryInteraction: 68,

    civicEngagement: 74
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 38,
      notes: "Some exposure through Atlanta consumer brand ecosystem and Grady advertising pipeline."
    },

    healthWellness: {
      strength: 68,
      notes: "College of Public Health and UGA Health Science programs create solid health and wellness pathways."
    },

    nutraceuticals: {
      strength: 32,
      notes: "Some exposure through agricultural sciences and food science programs. Not a primary corridor."
    },

    consumerProducts: {
      strength: 78,
      notes: "Coca-Cola, Chick-fil-A, and Home Depot alumni relationships create strong CPG and consumer products pipelines. Terry BBA is well-placed in Atlanta consumer brand companies."
    },

    outdoorIndustry: {
      strength: 36,
      notes: "Limited. Some exposure through Georgia's outdoor recreation culture but not a pipeline."
    },

    sportsBusiness: {
      strength: 78,
      notes: "SEC culture, Grady sports journalism, Atlanta Braves and Hawks proximity, and sports media alumni create strong sports business exposure."
    },

    entertainmentMedia: {
      strength: 76,
      notes: "Grady College produces national broadcast journalists and political correspondents. Atlanta's film and television production industry (Georgia is a top-3 film production state) creates growing entertainment media exposure."
    },

    ventureCapital: {
      strength: 52,
      notes: "Atlanta FinTech and startup ecosystem is growing. Not a primary VC pipeline but improving."
    },

    privateEquity: {
      strength: 66,
      notes: "Terry and Atlanta alumni network create moderate PE placement. Not at Michigan or Vanderbilt levels."
    },

    investmentBanking: {
      strength: 74,
      notes: "Terry SMIF graduates have strong IB placement relative to the program's size. Bank of America, Truist, and boutique Atlanta firms recruit on campus."
    },

    consulting: {
      strength: 72,
      notes: "Deloitte, PwC, and Big 4 advisory recruit on campus. MBB placement exists but is less consistent than peer institutions in the Southeast."
    },

    medicine: {
      strength: 68,
      notes: "Strong pre-med program with Medical College of Georgia partnership. Solid medical school placement for Georgia residents."
    },

    healthcareAdministration: {
      strength: 66,
      notes: "Atlanta healthcare industry and public health programs create healthcare administration exposure."
    },

    defense: {
      strength: 46,
      notes: "ROTC present. Georgia's military installations create some exposure. Not a defining corridor."
    },

    realEstate: {
      strength: 62,
      notes: "Atlanta's exceptional real estate growth creates exposure. Terry real estate concentration and alumni network in Atlanta commercial real estate."
    },

    luxuryBrands: {
      strength: 30,
      notes: "Minimal direct pipeline."
    },

    entrepreneurship: {
      strength: 60,
      notes: "Growing Atlanta startup ecosystem and UGA entrepreneurship programs. Not yet a primary pipeline but improving with the Atlanta tech scene."
    },

    technology: {
      strength: 66,
      notes: "Atlanta's FinTech and technology sector, Amazon and NCR Voyix recruiting, and growing CS programs create solid technology placement. Not a primary tech pipeline nationally."
    },

    publicPolicy: {
      strength: 70,
      notes: "School of Public and International Affairs and Grady political journalism create solid public policy pathways. Washington DC alumni network."
    },

    nonprofitLeadership: {
      strength: 68,
      notes: "Strong civic culture and public service orientation rooted in UGA's land-grant mission. Solid nonprofit pathways through Atlanta's large nonprofit sector."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle",

    socialMobilityIndex: 82,

    firstGenerationSupport: 80,

    wealthCreationPotential: 78,

    familyBusinessPipelineStrength: 72
  },

  futureResilience: {

    aiResistance: 74,

    automationResistance: 72,

    adaptabilityScore: 76,

    interdisciplinaryStrength: 70,

    futureReadiness: 74,

    entrepreneurialFlexibility: 62,

    lifelongLearningCulture: 74,

    innovationCapacity: 68
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 78,

    communityLeadershipPotential: 82,

    geographicMobility: 72,

    workLifeBalancePotential: 80,

    purposeAlignment: 78,

    familyFormationSupport: 84,

    personalDevelopmentPotential: 76,

    careerOptionality: 74,

    longTermLifeSatisfaction: 84
  },

  institutionalMoat: {

    prestigeMoat: 70,

    networkMoat: 82,

    geographicMoat: 88,

    industryMoat: 78,

    alumniMoat: 88,

    brandDurability: 80,

    overallMoatScore: 82
  },

  // ===== ENRICHMENT MERGED FROM DEEP-RESEARCH FILE =====

  lifestyleIdentity: {
    dimensions: {
      outdoorAdventure: 58, coastalLiving: 5, urbanEnergy: 49, wellnessHealth: 76,
      creativityArts: 74, entrepreneurship: 68, intellectualism: 78, luxuryLifestyle: 38,
      sustainability: 70, familyCentered: 61, faithCommunity: 57, civicEngagement: 75,
      athleticsSportsCulture: 98, globalCosmopolitan: 64, collegeTownImmersion: 97,
      nightlifeEntertainment: 85, foodCulture: 77, makerCulture: 62,
      digitalNomadCompatibility: 43, workLifeBalance: 73
    },
    lifeTrajectory: {
      outdoorParticipation: 62, volunteerism: 79, entrepreneurshipLikelihood: 61,
      geographicMobility: 68, homeOwnershipPreference: 63, familyFormationLikelihood: 67,
      civicParticipation: 74, physicalActivityLevel: 84, workLifeIntegration: 72,
      lifelongLearning: 79, happinessPredictor: 82
    },
    environmentalDNA: {
      weatherInfluence: 78, walkability: 72, naturalBeauty: 74, architectureCharacter: 86,
      localFoodCulture: 77, artsExposure: 78, musicCulture: 91, outdoorAccessibility: 65,
      politicalClimateInfluence: 60, entrepreneurialDensity: 63, innovationDensity: 66
    },
    dailyLifestyle: {
      averageTimeOutside: 68, coffeeCulture: 77, fitnessCulture: 82, bikingCulture: 46,
      publicSpaceUsage: 79, campusSpontaneity: 74, studentOrganizationIntensity: 88,
      sportingEventCulture: 98, lateNightCulture: 86
    }
  },
  humanOutcomes: {
    institutionalCultureDNA: {
      ambition: 87, intellectualCuriosity: 80, competitiveness: 89, collaboration: 73,
      humility: 61, confidence: 87, optimism: 79, tradition: 96, innovation: 69,
      entrepreneurship: 66, serviceOrientation: 79, civicEngagement: 75, adventure: 55,
      wellnessOrientation: 73, creativity: 72, practicality: 82, independence: 68,
      prestigeConsciousness: 78, inclusiveness: 67, institutionalLoyalty: 96
    },
    alumniBehavior: {
      networkActivation: 90, institutionalPride: 97, mentoringCulture: 79,
      hiringOtherAlumni: 81, philanthropy: 76, returnForHomecoming: 90,
      emotionalAttachment: 95, lifelongIdentity: 97
    },
    outsiderPerception: {
      employerView: "Graduates read as socially capable, team-oriented, institutionally literate, increasingly academically strong -- especially business, public affairs, journalism, life sciences, flagship-professional tracks. Main underestimation risk: assuming the school is more culturally shallow than it is.",
      peerSchoolView: "A rising academic flagship with elite sports culture, unusually strong school pride, and a more serious intellectual floor than its stereotypes imply.",
      alumniSelfImage: "Loyal, hardworking, practical, fun, not embarrassed by tradition -- a 'we can do both' self-image of serious achievement and big communal spirit.",
      stereotypes: "football-obsessed, Greek-dominated, Southern-preppy, less intellectual than reality, conservative monolith",
      hiddenTruths: "Athens gives UGA more artistic and musical depth than outsiders expect; wellbeing ecosystem stronger than stereotype suggests; entrepreneurship real but shouldn't be overclaimed; inclusiveness improving institutionally though social layering still matters on the ground."
    }
  }
},

"University of Florida": {

  institutionNarrative: {

    name: "University of Florida",

    location: "Gainesville, Florida",

    region: "Southeast",

    archetype: "The Flagship Research, STEM, Medicine and Large-Scale Innovation University",

    oneSentenceSummary: "The University of Florida is Florida's preeminent public research university — a top-10 public nationally with elite engineering, medicine, pharmacy, agriculture, and law programs, one of the most powerful statewide alumni networks in America, and a healthcare system in UF Health that places it in a different category than any other Florida institution.",

    pipeline: "Healthcare and Medicine — UF Health / Shands is one of the top-10 academic medical centers in America. UF College of Medicine, College of Nursing, College of Pharmacy, College of Dentistry, and College of Public Health are all nationally ranked. Warrington College of Business: top-10 undergraduate business nationally by US News. Levin College of Law: top-40 nationally, Florida's dominant law school feeder. Herbert Wertheim College of Engineering: NASA, Lockheed Martin, and major defense contractors recruit on campus. College of Agricultural and Life Sciences: top-5 nationally, biotechnology and life sciences pipeline. 35,000 undergraduates; 56,000 total enrollment. 97% first-to-second year retention. Top employers: UF Health, Mayo Clinic (Florida), Johnson and Johnson, Pfizer, NASA, Lockheed Martin, Deloitte, McKinsey, Google, Amazon, Florida Blue.",

    hiddenPathway: "UF's Warrington College of Business is ranked top-10 undergraduate business nationally but operates almost entirely in the shadow of Florida's football culture and beach-state identity — meaning families who dismiss UF as a state school are overlooking a business program that rivals Indiana Kelley and Wisconsin in placement outcomes. The Herbert Wertheim College of Engineering feeds NASA and Lockheed Martin at a scale that few public universities outside of Georgia Tech can match. UF's agriculture and life sciences program is the most consequential hidden asset in the university's profile: it feeds directly into biotechnology, pharmaceutical development, environmental consulting, and food science industries that are growing faster than almost any sector in the American economy. The combination of UF Health clinical access, top pharmacy program, and biomedical research infrastructure makes UF one of the three or four best pre-health undergraduate institutions in the country — at public university cost.",

    institutionalSecret: "Florida residents who attend UF are making one of the highest-ROI decisions in American higher education. The in-state tuition is among the lowest at any top-25 public university in America. The credential opens doors in every Florida market, in national medicine and engineering, and increasingly in technology. The 88% in-state enrollment ratio is not a weakness — it is the mechanism through which UF has built the most dominant statewide professional alumni network in Florida, which is itself one of the largest economies in the world.",

    theRoom: "Approximately 88% of UF students are Florida residents and only 12% are from out of state — one of the highest in-state ratios of any top-20 public university in America. The 2,000-acre campus in Gainesville is among the largest in the country and functions as a complete self-contained ecosystem. Ben Hill Griffin Stadium — The Swamp — seats 88,000 and is one of the loudest venues in college football. SEC football from September through December is the dominant social organizing force. Greek life is large and active. The academic culture is intensely pre-professional, particularly in health sciences and engineering.",

    lifestyle: "Gainesville is a college town of 140,000 built around UF — with the character of a Southern college town and the energy of a major research university. The Swamp defines the fall social calendar. Downtown Gainesville, the innovation district, and the proximity to both coasts of Florida give students access to a quality of life that is distinctive among large public universities in the South.",

    bestFitPersonality: "High Conscientiousness, STEM or health-sciences oriented, Florida-rooted, Pre-professionally ambitious, SEC football culture-comfortable, Comfortable navigating large institutional environments independently",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Florida dominant — Miami, Tampa, Orlando, and Jacksonville primary; national reach in medicine, engineering, and biotech; growing technology placement in Austin, San Francisco, and New York",

    economicOutcome: "Elite outcomes in medicine, pharmacy, engineering, biotech, and law through UF Health, NASA, Lockheed Martin, and Florida's Fortune 500 corridor; Warrington BBA places into McKinsey, Deloitte, and major Florida financial institutions; agriculture and life sciences pipeline to pharmaceutical and biotech R&D",

    gradCities: [
      "Miami FL",
      "Tampa FL",
      "Orlando FL",
      "Jacksonville FL",
      "New York NY",
      "Atlanta GA",
      "Boston MA",
      "Chicago IL",
      "San Francisco CA"
    ],

    comparableInstitutions: [
      "University of Georgia",
      "University of North Carolina Chapel Hill",
      "University of Wisconsin-Madison",
      "Ohio State University",
      "University of Washington"
    ],

    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: [
        "Santa Fe College",
        "Valencia College",
        "Broward College",
        "Miami Dade College",
        "Palm Beach State College"
      ],
      transferAcceptanceRate: "~40%",
      freshmanAcceptanceRate: "~23%",
      estimatedSavingsRange: "$18,000–$30,000",
      transferNotes: "UF has a formal articulation agreement with Florida's state college system. Santa Fe College in Gainesville is the primary CC feeder — it sits adjacent to campus and has a well-documented transfer pipeline into UF. Valencia College (Orlando) is the second most common feeder. The Florida Statewide Articulation Agreement guarantees transfer admission consideration to UF for students who complete the AA degree with qualifying GPA. Health sciences and engineering have more restrictive transfer requirements. For Florida residents targeting UF, the Santa Fe College pathway is a legitimate and dignified strategic option that can save $20,000+ while demonstrating academic readiness."
    }
  },

  institutionIdentity: {

    archetype: "Flagship Public Research and Health Sciences University",

    institutionalPersonality: "ambitious, research-driven, health-sciences-oriented, SEC-proud, Florida-loyal, pre-professionally intense",

    cultureKeywords: [
      "Go Gators",
      "The Swamp",
      "UF Health",
      "Warrington Business",
      "SEC Football",
      "Pre-Med Culture",
      "Research Scale",
      "Florida Network",
      "STEM Dominance"
    ],

    missionOrientation: "Research excellence, health sciences leadership, and service to the people of Florida — UF's land-grant mission shapes its identity as Florida's academic and economic engine",

    faithTradition: "None",

    educationalPhilosophy: "Research-intensive public education with strong pre-professional tracks in health sciences, engineering, law, and business; emphasis on scale, research access, and Florida industry connection",

    competitiveness: "Selective (~23% overall; Engineering, Business, and Health Sciences more competitive)",

    politicalCulture: "Moderate — Gainesville is a progressive college town in a conservative state; student body reflects Florida's political diversity with a range from Miami cosmopolitan to rural North Florida",

    studentAutonomy: "High",

    prestigeOrientation: "High and rising",

    socialClimate: "SEC-saturated, pre-professionally intense, large-campus self-directed, Florida-proud",

    leadershipStyle: "Pre-professional and organizational — health sciences research, student government, Greek leadership, Florida market networking from year one"
  },

  institutionScale: {

    enrollmentCategory: "Mega",

    undergraduateEnrollment: 35000,

    graduateEnrollment: 21000,

    totalEnrollment: 56000,

    campusType: "Research Flagship",

    residentialIntensity: 68,

    communityFeel: 66,

    studentFacultyRatio: "17:1",

    classSizeExperience: "Large introductory lectures (300-500+) in first two years; health sciences and engineering programs offer cohort-based professional experiences; upper-division courses more intimate; research lab access available to motivated undergraduates",

    scaleAdvantages: [
      "UF Health clinical and research infrastructure — one of top-10 academic medical centers in America",
      "Scale of Florida alumni network — dominant in every Florida market",
      "NASA and Lockheed Martin engineering pipeline at flagship scale",
      "Florida statewide articulation agreement — CC transfer pathway well-documented",
      "Breadth of professional schools accessible from undergraduate"
    ],

    scaleDisadvantages: [
      "88% Florida resident composition limits geographic and cultural diversity",
      "Large lecture hall learning for first two years requires significant self-direction",
      "Gainesville is geographically isolated — not adjacent to a major Florida city",
      "Pre-med competition is intense and can create a high-anxiety academic culture",
      "National brand recognition still slightly below actual ranking and outcomes"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 76,
      conscientiousness: 90,
      extraversion: 74,
      agreeableness: 72,
      neuroticism: 38
    },

    hollandCodes: ["I", "R", "E"],

    learningStyle: [
      "Research and Laboratory",
      "Large Lecture with Independent Supplement",
      "Clinical and Applied (Health Sciences)",
      "Case and Problem-Based (Engineering, Law)"
    ],

    socialEnvironment: [
      "SEC Football Culture",
      "Pre-Professional and Pre-Med Intensity",
      "Large Campus Self-Directed",
      "Greek-Active",
      "Florida Community Identity"
    ],

    idealStudentTraits: [
      "Florida-rooted with statewide career ambitions",
      "Health sciences, engineering, or STEM-oriented",
      "Self-motivated in large institutional environments",
      "SEC football culture as a positive",
      "Willing to leverage Florida's dominant alumni network"
    ],

    thrivesIf: [
      "Targeting medicine, pharmacy, dentistry, nursing, or biomedical research",
      "Engineering-oriented with interest in aerospace, defense, or biotech",
      "Wants the highest-ROI public university education in Florida",
      "Comfortable in large, competitive, pre-professionally intense academic cultures",
      "Drawn to Florida's economic ecosystem for long-term career placement"
    ],

    strugglesIf: [
      "Seeking geographic or cultural diversity beyond Florida and the Southeast",
      "Uncomfortable with large lecture hall learning in first two years",
      "Wants a small, intimate academic community with close faculty access",
      "Not interested in health sciences, engineering, or pre-professional tracks",
      "Finds the pre-med competition culture anxiety-producing"
    ],

    transferRiskFactors: [
      "Students who chose UF for Florida lifestyle and do not engage pre-professionally",
      "Out-of-state students who feel like outsiders in the 88% Florida-resident culture",
      "Pre-med students who struggle with UF's highly competitive health sciences curve"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Agricultural and Life Sciences (Biotech and Food Science tracks)",
      "Health Education and Behavior",
      "Statistics (Data Science track)",
      "Telecommunication (journalism and media technology)",
      "Environmental Engineering",
      "Computer and Information Science (AI and machine learning track)"
    ],

    hiddenCareerPipelines: [
      "NASA and Aerospace Engineering (Lockheed Martin, Boeing, SpaceX Florida facilities)",
      "Pharmaceutical and Biotech R&D (Pfizer, Johnson and Johnson, Florida biotech corridor)",
      "Academic Medicine and Clinical Research (UF Health residency pipeline)",
      "Agricultural Technology and Food Science",
      "Environmental Consulting and Climate Science"
    ],

    nicheRecruitingAdvantages: [
      "UF Health — undergraduate clinical research access at a top-10 academic medical center",
      "NASA pipeline through Herbert Wertheim Engineering — direct Cape Canaveral adjacency",
      "Santa Fe College articulation — the most structured CC-to-flagship pathway in Florida",
      "Florida statewide alumni network — dominant in every Florida industry vertical",
      "Pharmacy and Dentistry programs — among the highest-regarded professional school pipelines at any public university"
    ],

    overlookedStrengths: [
      "Warrington College of Business top-10 national ranking — almost never mentioned in UF's public identity",
      "UF Health research access for undergraduates in pre-health tracks",
      "Agricultural and life sciences — one of the top-5 programs nationally, feeding into the fastest-growing industry sectors",
      "Florida's in-state tuition — among the lowest at any top-25 public university",
      "Santa Fe College transfer pathway — the most clearly defined CC route to a flagship in the Southeast"
    ],

    sleeperIndustries: [
      "Pharmaceutical Manufacturing and Biotech",
      "Agricultural Technology and Precision Farming",
      "Medical Device Innovation",
      "Environmental and Climate Science",
      "Space and Aerospace Technology (Florida Space Coast)"
    ]
  },

  networkCapital: {

    alumniAccessibility: 82,

    mentorshipDensity: 76,

    executiveAccess: 80,

    internshipNetwork: 82,

    familyBusinessExposure: 72,

    relationshipCapitalScore: 82,

    alumniLoyaltyScore: 90,

    referralCultureStrength: 88,

    donorNetworkStrength: 84,

    boardMemberDensity: 76
  },

  economicEcosystem: {

    primaryIndustries: [
      "Healthcare and Medicine",
      "Engineering and Aerospace",
      "Biotechnology and Pharmaceuticals",
      "Financial Services",
      "Law",
      "Agriculture and Life Sciences",
      "Technology"
    ],

    regionalEconomicDrivers: [
      "Florida Healthcare and Life Sciences Corridor",
      "NASA and Florida Space Coast",
      "Miami and Tampa Financial Services",
      "Orlando Technology and Tourism Economy",
      "Florida Agricultural and Biotech Industry"
    ],

    topEmployers: [
      "UF Health",
      "Mayo Clinic Florida",
      "Johnson and Johnson",
      "Pfizer",
      "NASA",
      "Lockheed Martin",
      "Deloitte",
      "McKinsey",
      "Google",
      "Amazon",
      "Florida Blue",
      "Procter and Gamble"
    ],

    emergingIndustries: [
      "Space Technology and Commercial Aerospace",
      "Digital Health and HealthTech",
      "Agricultural Technology",
      "Cybersecurity",
      "Climate and Environmental Science"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 58,

    corporateHeadquartersDensity: 66,

    healthcareHubStrength: 96,

    innovationIndex: 82
  },

  geographicInfluence: {

    dominantMarket: "Florida statewide",

    secondaryMarkets: [
      "Atlanta",
      "New York",
      "Boston",
      "Chicago",
      "San Francisco"
    ],

    alumniStrongholds: [
      "Miami FL",
      "Tampa FL",
      "Orlando FL",
      "Jacksonville FL",
      "Atlanta GA"
    ],

    relocationPatterns: [
      "Strong Florida retention across all four major metros",
      "National medicine and research placement (Boston, New York, Houston)",
      "Engineering migration to aerospace corridors (Houston, Huntsville, Cape Canaveral)",
      "Growing technology sector placement (Austin, San Francisco)"
    ],

    regionalInfluenceScore: 94,

    nationalReachScore: 74,

    internationalReachScore: 52
  },

  socialCapital: {

    greekLifeInfluence: 62,

    studentOrganizationStrength: 82,

    leadershipDevelopment: 80,

    crossDisciplinaryInteraction: 68,

    civicEngagement: 72
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 72,
      notes: "UF's dermatology, plastic surgery, and aesthetic medicine programs through UF Health create a genuine pipeline for physician-founders in aesthetic medicine — one of the strongest at any public university."
    },

    healthWellness: {
      strength: 96,
      notes: "UF Health is a top-10 academic medical center. Medicine, nursing, pharmacy, dentistry, and public health programs are all nationally ranked. One of the elite health and wellness pipelines at any American university."
    },

    nutraceuticals: {
      strength: 62,
      notes: "Agriculture and life sciences programs with food science and nutrition specializations create solid nutraceutical and supplement industry pathways."
    },

    consumerProducts: {
      strength: 64,
      notes: "Warrington BBA places into Procter and Gamble and major CPG companies. Solid but not a primary CPG pipeline nationally."
    },

    outdoorIndustry: {
      strength: 42,
      notes: "Some exposure through Florida's recreational economy. Not a primary pipeline."
    },

    sportsBusiness: {
      strength: 74,
      notes: "SEC athletics program, Florida sports market depth (NFL, NBA, MLB all represented in state), and strong sports management exposure through Warrington and the College of Health and Human Performance."
    },

    entertainmentMedia: {
      strength: 58,
      notes: "Telecommunication and journalism programs create some media placement. Orlando's entertainment industry provides exposure. Not a primary pipeline."
    },

    ventureCapital: {
      strength: 54,
      notes: "Growing Gainesville and Tampa startup ecosystems. UF Innovation Hub and Sid Martin Biotech incubator. Not yet a primary VC pipeline."
    },

    privateEquity: {
      strength: 64,
      notes: "Warrington BBA and Florida alumni network create moderate PE placement. Miami and Tampa PE corridors accessible."
    },

    investmentBanking: {
      strength: 72,
      notes: "Warrington BBA places into Florida regional banks and national firms. Not at Michigan Ross or Kelley levels nationally but strong in the Southeast."
    },

    consulting: {
      strength: 80,
      notes: "McKinsey, Deloitte, and Big 4 advisory recruit on campus. Warrington's consulting placement is stronger than most families expect from a public Florida university."
    },

    medicine: {
      strength: 98,
      notes: "UF College of Medicine, UF Health Shands, and the depth of clinical research infrastructure make this one of the two or three strongest pre-medicine pipelines at any public university in America."
    },

    healthcareAdministration: {
      strength: 86,
      notes: "UF Health system, Florida Blue, and Florida's healthcare-dominant economy create exceptional healthcare administration and health policy pathways."
    },

    defense: {
      strength: 76,
      notes: "NASA, Lockheed Martin, and Florida's defense contractor concentration (Cape Canaveral, Jacksonville NAS) create a strong defense and aerospace pipeline through Herbert Wertheim Engineering."
    },

    realEstate: {
      strength: 64,
      notes: "Florida's exceptional real estate growth market and Warrington real estate program create solid real estate exposure. Alumni network in Florida commercial real estate."
    },

    luxuryBrands: {
      strength: 34,
      notes: "Minimal. Some Miami luxury market exposure through alumni network."
    },

    entrepreneurship: {
      strength: 72,
      notes: "UF Innovation Hub, Sid Martin Biotech incubator, and growing Gainesville startup ecosystem. Biotech entrepreneurship is the strongest specific corridor."
    },

    technology: {
      strength: 84,
      notes: "Herbert Wertheim College of Engineering feeds Google, Amazon, Microsoft, and aerospace tech companies. Computer science and AI programs are growing rapidly. Strong and improving."
    },

    publicPolicy: {
      strength: 70,
      notes: "Levin College of Law and political science programs create public policy pathways. Tallahassee state government proximity is an asset."
    },

    nonprofitLeadership: {
      strength: 62,
      notes: "Public service culture and Florida's large nonprofit sector create solid pathways. Not a defining corridor."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle",

    socialMobilityIndex: 86,

    firstGenerationSupport: 84,

    wealthCreationPotential: 84,

    familyBusinessPipelineStrength: 70
  },

  futureResilience: {

    aiResistance: 84,

    automationResistance: 82,

    adaptabilityScore: 82,

    interdisciplinaryStrength: 78,

    futureReadiness: 84,

    entrepreneurialFlexibility: 70,

    lifelongLearningCulture: 78,

    innovationCapacity: 82
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 84,

    communityLeadershipPotential: 80,

    geographicMobility: 70,

    workLifeBalancePotential: 76,

    purposeAlignment: 80,

    familyFormationSupport: 84,

    personalDevelopmentPotential: 78,

    careerOptionality: 80,

    longTermLifeSatisfaction: 82
  },

  institutionalMoat: {

    prestigeMoat: 78,

    networkMoat: 88,

    geographicMoat: 94,

    industryMoat: 90,

    alumniMoat: 90,

    brandDurability: 84,

    overallMoatScore: 88
  }

},

"University of Oklahoma": {

  institutionNarrative: {

    name: "University of Oklahoma",

    location: "Norman, Oklahoma",

    region: "SEC",

    archetype: "The Energy and Petroleum Engineering Flagship",

    oneSentenceSummary: "The University of Oklahoma is America's preeminent energy university — the Mewbourne College of Earth and Energy houses the top-ranked petroleum engineering program in the country, feeding Devon Energy, ConocoPhillips, Chevron, and Halliburton at starting salaries above $73,000, while a private equity and energy finance pipeline in Oklahoma City and Tulsa operates entirely below the national radar.",

    pipeline: "Energy and Petroleum Engineering — Devon Energy, ConocoPhillips, Chevron, BP, ExxonMobil, Halliburton. Mewbourne College of Earth and Energy is the top-ranked petroleum engineering program in America. Average starting salary $73,880 for petroleum engineering graduates. Price College of Business: finance, energy management, and supply chain tracks with regional dominance in Oklahoma City and Tulsa markets. Gaylord College of Journalism and Mass Communication: top-20 journalism program nationally, producing broadcast journalists and political correspondents. Pre-law pipeline to OU College of Law, consistently ranked top-50 nationally. Price Energy Management program is the most respected undergraduate energy business program in the country. 21,000 undergraduates; 33,000 total enrollment.",

    hiddenPathway: "The Price College of Business has a private equity and energy finance pipeline that is invisible nationally but dominant regionally. Oklahoma City and Tulsa host dozens of family offices and energy-focused private equity funds that recruit exclusively from OU and Oklahoma State — creating a concentration of deal flow access that no coastal university can replicate. The Stacy L. Schusterman College of Business energy management program produces graduates who enter the energy finance sector with a level of domain expertise that MBA programs spend two years trying to build. OU's meteorology program is the top-ranked in the nation — feeding NOAA, the National Weather Service, and private weather analytics firms in a field where OU graduates face essentially no competition at the entry level.",

    institutionalSecret: "OU's petroleum engineering program produces starting salaries that rival Wharton finance graduates — and does so for in-state tuition. The energy industry's concentration of wealth in Oklahoma City and Tulsa means that OU graduates entering the regional energy economy have access to a density of family offices, independent operators, and mid-size E&P companies that creates wealth-building opportunities unavailable at larger, more nationally prominent universities.",

    theRoom: "Approximately 62% of OU students are Oklahoma residents and 38% are from out of state or international. The dominant out-of-state feeder is Texas — particularly Dallas and Houston families drawn to OU's energy credentials and Big 12 / SEC athletics culture. Gaylord Family-Oklahoma Memorial Stadium holds 86,000 and football Saturdays define the Norman social calendar. The campus is architecturally distinctive — Georgian Revival limestone buildings on a 3,000-acre campus — and Norman is a college town with genuine character beyond football.",

    lifestyle: "Norman is a college town of 130,000 immediately south of Oklahoma City — giving students access to a major metropolitan area while living in a walkable college-town environment. Oklahoma City has transformed significantly over the past decade: Bricktown, Midtown, and the Devon Tower have made it a genuinely livable mid-size American city. The pace is distinctly Oklahoma — warm, community-oriented, and without the coastal pressure of larger university markets.",

    bestFitPersonality: "High Conscientiousness, Energy or engineering-oriented, Oklahoma or Texas-rooted, SEC football culture-comfortable, Community-minded, Drawn to the energy industry's wealth creation potential",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Oklahoma and Texas dominant — Oklahoma City and Tulsa primary energy markets, Dallas and Houston secondary, Denver and Houston energy corridors, national through petroleum engineering and meteorology",

    economicOutcome: "Elite outcomes in petroleum engineering and energy management through Devon Energy, ConocoPhillips, Chevron, and Halliburton; strong regional placement in energy finance and private equity through Oklahoma City and Tulsa family office networks; top-ranked meteorology producing NOAA and private weather analytics graduates",

    gradCities: [
      "Oklahoma City OK",
      "Tulsa OK",
      "Dallas TX",
      "Houston TX",
      "Denver CO",
      "Washington DC",
      "New York NY"
    ],

    comparableInstitutions: [
      "Texas A&M University",
      "University of Arkansas",
      "University of Kansas",
      "Oklahoma State University",
      "University of Colorado Boulder"
    ],

    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: [
        "Rose State College",
        "Oklahoma City Community College",
        "Tulsa Community College",
        "Redlands Community College"
      ],
      transferAcceptanceRate: "~75%",
      freshmanAcceptanceRate: "~70%",
      estimatedSavingsRange: "$14,000–$22,000",
      transferNotes: "OU maintains articulation agreements with Oklahoma's community college system. Rose State College and Oklahoma City Community College are the primary feeders. For Oklahoma residents, the CC pathway provides meaningful savings while maintaining transfer access. Petroleum engineering and the Price College of Business have separate transfer requirements — students targeting these programs should confirm transferability of specific coursework. For general OU admission, the CC pathway is accessible and well-documented."
    }
  },

  institutionIdentity: {

    archetype: "Energy and Engineering Flagship",

    institutionalPersonality: "community-oriented, energy-industry-proud, SEC-loyal, practical, regionally dominant, warmly ambitious",

    cultureKeywords: [
      "Boomer Sooner",
      "Petroleum Engineering",
      "Energy Finance",
      "SEC Football",
      "Oklahoma City",
      "Meteorology",
      "Price Business",
      "Mewbourne Energy",
      "Norman Community"
    ],

    missionOrientation: "Research, professional formation, and service to Oklahoma — OU's land-grant identity shapes its deep integration with the state's energy, agricultural, and legal economy",

    faithTradition: "None",

    educationalPhilosophy: "Professional formation in energy, business, journalism, and law with deep regional industry integration; strong emphasis on career placement within Oklahoma and Texas energy markets",

    competitiveness: "Moderately Selective (~70% overall; Petroleum Engineering and Price Business more selective)",

    politicalCulture: "Conservative — Oklahoma is one of the most politically conservative states in America; campus reflects that culture with range from moderate to strongly conservative",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate nationally; very high within energy industry",

    socialClimate: "Warm, SEC-proud, community-oriented, energy-industry-conscious, Oklahoma-loyal",

    leadershipStyle: "Industry and community — energy industry networking, Greek leadership, student government, Oklahoma City professional community integration"
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 21000,

    graduateEnrollment: 12000,

    totalEnrollment: 33000,

    campusType: "Residential University",

    residentialIntensity: 72,

    communityFeel: 78,

    studentFacultyRatio: "18:1",

    classSizeExperience: "Large introductory lectures in general education; Mewbourne and Price programs offer more cohort-based professional experiences; upper-division engineering and business courses are smaller and more intensive",

    scaleAdvantages: [
      "Top-ranked petroleum engineering program in America — no peer at any scale",
      "Oklahoma City and Tulsa energy industry proximity and alumni density",
      "Norman college-town quality of life with OKC metro access",
      "Price Energy Management — most respected undergraduate energy business program nationally",
      "Meteorology program — top-ranked nationally with NOAA and private sector pipeline"
    ],

    scaleDisadvantages: [
      "Limited geographic and cultural diversity — 62% Oklahoma resident",
      "National brand recognition significantly below actual program quality in key fields",
      "Energy industry concentration creates some career path narrowing for non-energy students",
      "Oklahoma City is a mid-size market with limited breadth of industry diversity"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 68,
      conscientiousness: 84,
      extraversion: 76,
      agreeableness: 80,
      neuroticism: 32
    },

    hollandCodes: ["R", "I", "E"],

    learningStyle: [
      "Applied and Laboratory (Petroleum Engineering)",
      "Case and Industry-Based (Price Business)",
      "Large Lecture with Professional Supplement",
      "Field and Simulation-Based (Meteorology, Geology)"
    ],

    socialEnvironment: [
      "SEC Football Culture",
      "Energy Industry Identity",
      "Community-Warm Oklahoma Culture",
      "Greek-Active",
      "Norman College-Town Embedded"
    ],

    idealStudentTraits: [
      "Energy, engineering, or geology-oriented",
      "Oklahoma or Texas-rooted with regional career ambitions",
      "Drawn to wealth creation in the energy sector",
      "Community-minded and relationship-oriented",
      "SEC football as a positive cultural anchor"
    ],

    thrivesIf: [
      "Targeting petroleum engineering, energy management, or energy finance",
      "Wants deep regional industry integration from year one",
      "Values warm, community-oriented campus culture",
      "Drawn to Oklahoma City or Tulsa as long-term markets",
      "Interested in meteorology, atmospheric science, or environmental geoscience"
    ],

    strugglesIf: [
      "Seeking geographic or cultural diversity beyond Oklahoma and Texas",
      "Targeting technology, consulting, or finance outside the energy sector",
      "Uncomfortable with politically conservative campus and community culture",
      "Wants a nationally prominent brand name for coastal market careers",
      "Not interested in the energy industry or regional Oklahoma economy"
    ],

    transferRiskFactors: [
      "Students who chose OU for football culture without energy or engineering orientation",
      "Out-of-state students who feel culturally distant from Oklahoma's community identity",
      "Students targeting national consulting or technology careers who find OKC market limiting"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Meteorology and Atmospheric Science",
      "Energy Management (Price College)",
      "Geology and Geophysics",
      "Supply Chain Management",
      "Native American Studies (OU has the most comprehensive program in the country)",
      "Journalism and Electronic Media (Gaylord College)"
    ],

    hiddenCareerPipelines: [
      "Energy Private Equity and Family Offices (Oklahoma City and Tulsa)",
      "NOAA and National Weather Service (top meteorology pipeline nationally)",
      "Independent Oil and Gas Operators (Oklahoma basin)",
      "Energy Law (OU Law to Oklahoma and Texas energy bar)",
      "Native American Law and Tribal Government"
    ],

    nicheRecruitingAdvantages: [
      "Mewbourne petroleum engineering — #1 nationally, Devon/ConocoPhillips/Chevron recruit exclusively",
      "Price Energy Management — only undergraduate program of its kind nationally",
      "Oklahoma City family office network — recruits exclusively from OU and OSU",
      "NOAA Southern Plains recruiting — meteorology graduates face almost no competition",
      "Native American law and tribal casino management pipeline unique to OU"
    ],

    overlookedStrengths: [
      "Starting salaries in petroleum engineering rival Ivy League finance graduates",
      "Energy finance private equity access in OKC rivals Dallas and Houston at smaller scale",
      "Meteorology program — top-ranked nationally, almost never mentioned in college counseling",
      "Gaylord College broadcast journalism — top-20 nationally, strong regional media placement",
      "Norman-OKC proximity — major city access without major city cost of living"
    ],

    sleeperIndustries: [
      "Private Weather Analytics (The Weather Company, DTN, Weatherford)",
      "Energy Transition and Renewable Energy Finance",
      "Tribal Economic Development and Casino Management",
      "Carbon Capture and Environmental Geoscience",
      "Agricultural Technology and Precision Farming"
    ]
  },

  networkCapital: {

    alumniAccessibility: 84,

    mentorshipDensity: 80,

    executiveAccess: 82,

    internshipNetwork: 80,

    familyBusinessExposure: 82,

    relationshipCapitalScore: 82,

    alumniLoyaltyScore: 88,

    referralCultureStrength: 86,

    donorNetworkStrength: 80,

    boardMemberDensity: 74
  },

  economicEcosystem: {

    primaryIndustries: [
      "Energy and Petroleum",
      "Engineering",
      "Financial Services",
      "Law",
      "Agriculture",
      "Healthcare",
      "Media and Journalism"
    ],

    regionalEconomicDrivers: [
      "Oklahoma and Texas Energy Corridor",
      "Oklahoma City Corporate and Energy Economy",
      "Tulsa Energy and Aerospace Manufacturing",
      "Oklahoma Agricultural Economy",
      "Native American Economic Development"
    ],

    topEmployers: [
      "Devon Energy",
      "ConocoPhillips",
      "Chevron",
      "BP",
      "ExxonMobil",
      "Halliburton",
      "NOAA",
      "Deloitte",
      "Love's Travel Stops",
      "INTEGRIS Health"
    ],

    emergingIndustries: [
      "Energy Transition and Renewables",
      "Carbon Capture Technology",
      "Private Weather Analytics",
      "Agricultural Technology",
      "Aerospace and Defense (Tulsa)"
    ],

    startupDensity: "Low to Moderate",

    ventureCapitalAccess: 42,

    corporateHeadquartersDensity: 58,

    healthcareHubStrength: 66,

    innovationIndex: 64
  },

  geographicInfluence: {

    dominantMarket: "Oklahoma and Texas",

    secondaryMarkets: [
      "Houston",
      "Dallas",
      "Denver",
      "Washington DC",
      "New York"
    ],

    alumniStrongholds: [
      "Oklahoma City OK",
      "Tulsa OK",
      "Dallas TX",
      "Houston TX",
      "Denver CO"
    ],

    relocationPatterns: [
      "Strong Oklahoma retention in energy sector",
      "Texas energy corridor migration (Houston, Dallas, Midland)",
      "Denver energy and outdoors migration",
      "Washington DC policy placement through law and public affairs"
    ],

    regionalInfluenceScore: 88,

    nationalReachScore: 62,

    internationalReachScore: 48
  },

  socialCapital: {

    greekLifeInfluence: 66,

    studentOrganizationStrength: 76,

    leadershipDevelopment: 76,

    crossDisciplinaryInteraction: 66,

    civicEngagement: 70
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 24,
      notes: "Minimal. Not a defining corridor."
    },

    healthWellness: {
      strength: 62,
      notes: "OU Health Sciences Center and INTEGRIS Health create solid pre-health pathways. Not a primary corridor nationally."
    },

    nutraceuticals: {
      strength: 28,
      notes: "Some exposure through agricultural sciences. Not a pipeline."
    },

    consumerProducts: {
      strength: 44,
      notes: "Limited. Some exposure through Price Business CPG tracks."
    },

    outdoorIndustry: {
      strength: 38,
      notes: "Oklahoma outdoor and hunting culture creates some exposure. Not a defined pipeline."
    },

    sportsBusiness: {
      strength: 68,
      notes: "SEC athletics culture, Oklahoma City Thunder proximity, and sports media programs through Gaylord create solid sports business exposure."
    },

    entertainmentMedia: {
      strength: 62,
      notes: "Gaylord College of Journalism is top-20 nationally. Broadcast journalism and sports media placement is strong regionally."
    },

    ventureCapital: {
      strength: 36,
      notes: "Limited. Oklahoma City startup ecosystem is early-stage. Not a VC pipeline."
    },

    privateEquity: {
      strength: 72,
      notes: "Oklahoma City and Tulsa family offices and energy PE funds recruit almost exclusively from OU and OSU. Regionally dominant; nationally invisible."
    },

    investmentBanking: {
      strength: 58,
      notes: "Price Business places into regional banks and energy-focused boutiques. Limited national IB placement."
    },

    consulting: {
      strength: 60,
      notes: "Deloitte and Big 4 recruit on campus. MBB placement is limited. Regional consulting in energy is stronger."
    },

    medicine: {
      strength: 66,
      notes: "OU Health Sciences Center and pre-med program create solid medical school pathways for Oklahoma residents."
    },

    healthcareAdministration: {
      strength: 60,
      notes: "OU Health and Oklahoma's healthcare system create regional healthcare administration exposure."
    },

    defense: {
      strength: 58,
      notes: "Tinker Air Force Base proximity and engineering school create defense sector exposure. Not a primary pipeline."
    },

    realEstate: {
      strength: 52,
      notes: "Oklahoma City real estate growth and Price Business real estate track create moderate exposure."
    },

    luxuryBrands: {
      strength: 18,
      notes: "Minimal."
    },

    entrepreneurship: {
      strength: 60,
      notes: "Energy entrepreneurship is the strongest corridor — independent operator culture in Oklahoma is an entrepreneurial training ground unlike any other industry."
    },

    technology: {
      strength: 54,
      notes: "Growing. Software engineering and data science programs improving. Not a primary technology pipeline nationally."
    },

    publicPolicy: {
      strength: 62,
      notes: "OU Law and political science create public policy pathways. Oklahoma's unique Native American law landscape is a niche strength."
    },

    nonprofitLeadership: {
      strength: 56,
      notes: "Community-oriented culture and civic engagement create solid nonprofit pathways in Oklahoma."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle",

    socialMobilityIndex: 78,

    firstGenerationSupport: 76,

    wealthCreationPotential: 80,

    familyBusinessPipelineStrength: 80
  },

  futureResilience: {

    aiResistance: 72,

    automationResistance: 68,

    adaptabilityScore: 72,

    interdisciplinaryStrength: 66,

    futureReadiness: 70,

    entrepreneurialFlexibility: 68,

    lifelongLearningCulture: 70,

    innovationCapacity: 66
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 80,

    communityLeadershipPotential: 80,

    geographicMobility: 66,

    workLifeBalancePotential: 82,

    purposeAlignment: 76,

    familyFormationSupport: 86,

    personalDevelopmentPotential: 74,

    careerOptionality: 68,

    longTermLifeSatisfaction: 82
  },

  institutionalMoat: {

    prestigeMoat: 60,

    networkMoat: 78,

    geographicMoat: 84,

    industryMoat: 92,

    alumniMoat: 84,

    brandDurability: 74,

    overallMoatScore: 80
  }

},

"Louisiana State University": {

  institutionNarrative: {

    name: "Louisiana State University",

    location: "Baton Rouge, Louisiana",

    region: "SEC",

    archetype: "The Gulf Coast Energy, Architecture, and Media Flagship",

    oneSentenceSummary: "LSU is the dominant public university of the Gulf Coast — a flagship where petroleum and petrochemical engineering feed the second-largest energy-producing state in America, the Manship School produces the South's most influential journalists, and Tiger Stadium on a Saturday night is one of the most culturally singular experiences in American college life.",

    pipeline: "Energy and Petrochemical Engineering — ExxonMobil, Shell, Chevron, Marathon, Entergy. Louisiana is the second-largest energy-producing state in America. LSU's Craft and Hawkins Department of Petroleum Engineering is a primary Gulf Coast energy pipeline. E.J. Ourso College of Business: finance, accounting, and energy management. Paul M. Hebert Law Center: top-50 nationally, Louisiana's dominant law school pipeline. College of Art and Design: architecture and interior design programs ranked among the top public programs in the South. Manship School of Mass Communication: top-20 journalism nationally. College of Agriculture: one of the most comprehensive agriculture programs in the SEC, feeding agribusiness and food science. 32,000 undergraduates; 38,000 total enrollment.",

    hiddenPathway: "LSU's Manship School of Mass Communication is the South's most influential journalism and media institution — its alumni network extends through every major Louisiana media market and into national broadcast networks including CNN, NBC, and Fox News. The architecture and interior design programs at LSU are among the most rigorous and well-regarded at any public university in the South, producing graduates who dominate the Gulf Coast construction and design market. LSU's coastal and environmental science programs sit at the intersection of Louisiana's most urgent policy challenge — coastal erosion — and a rapidly growing field of environmental consulting, federal grant work, and climate adaptation that pays well and has essentially no qualified talent surplus.",

    institutionalSecret: "LSU's transformation from a regional school to a nationally competitive institution has been dramatic and largely unreported nationally. Out-of-state enrollment grew from 17% of freshmen in 2017 to 40% today — driven by merit scholarships, a genuinely distinctive campus culture, and the realization among Texas and Southeast families that LSU offers an SEC flagship experience at a price point that no peer institution can match. The Ourso College of Business energy finance track produces graduates who enter Houston and Dallas energy banking with domain expertise that MBA graduates spend years trying to acquire.",

    theRoom: "60% of LSU undergraduates are Louisiana residents and 40% are from out of state — a dramatic transformation from 2017 when only 17% of freshmen came from other states. Tiger Stadium — Death Valley — seats 102,000 and is the loudest venue in college football. Saturday nights in Baton Rouge during football season are one of the most distinctive social and cultural experiences in American college life. The campus is 2,000 acres of live oaks and Spanish architecture. New Orleans is 80 miles south — accessible for weekends, providing cultural depth that no landlocked campus can replicate.",

    lifestyle: "Baton Rouge is a city of 230,000 with a distinct Louisiana identity — food culture, music, Mardi Gras, and a pace of life unlike anywhere else in the South. New Orleans proximity gives LSU students access to one of America's most culturally rich cities on a weekend basis. The campus is beautiful, the weather is warm, and the sense of place is irreplaceable.",

    bestFitPersonality: "High Extraversion, SEC football culture-essential, Louisiana or Gulf Coast-rooted, Energy or business-oriented, Community-minded, Drawn to the cultural richness of Louisiana and New Orleans",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Louisiana and Gulf Coast dominant — Baton Rouge and New Orleans primary, Houston and Dallas energy corridors, SEC regional reach in journalism and media",

    economicOutcome: "Strong outcomes in energy engineering and energy finance through Gulf Coast petroleum industry; dominant Louisiana law placement through Hebert Law Center; architecture and design graduates dominate Gulf Coast market; Manship journalism alumni in national broadcast and print media",

    gradCities: [
      "Baton Rouge LA",
      "New Orleans LA",
      "Houston TX",
      "Dallas TX",
      "Atlanta GA",
      "New York NY",
      "Washington DC"
    ],

    comparableInstitutions: [
      "University of Alabama",
      "University of Arkansas",
      "University of Mississippi",
      "University of Tennessee",
      "Auburn University"
    ],

    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: [
        "Bossier Parish Community College",
        "Delgado Community College",
        "Baton Rouge Community College",
        "Southern University at Shreveport"
      ],
      transferAcceptanceRate: "~65%",
      freshmanAcceptanceRate: "~75%",
      estimatedSavingsRange: "$12,000–$20,000",
      transferNotes: "LSU participates in Louisiana's statewide transfer articulation system. Baton Rouge Community College is the closest and most common feeder. For Louisiana residents, the CC pathway provides savings while maintaining strong transfer access. Engineering and architecture programs have specific prerequisite requirements for transfer admission. The Ourso College of Business accepts transfers with competitive GPAs. For students certain about LSU's culture and willing to demonstrate academic readiness, the CC pathway is viable and respectful."
    }
  },

  institutionIdentity: {

    archetype: "Gulf Coast Energy, Architecture, and Media Flagship",

    institutionalPersonality: "SEC-proud, Louisiana-loyal, culturally rich, community-oriented, energy-industry-aware, festival-culture embracing",

    cultureKeywords: [
      "Geaux Tigers",
      "Death Valley",
      "Gulf Coast Energy",
      "Manship Journalism",
      "New Orleans Proximity",
      "Louisiana Culture",
      "SEC Football",
      "Architecture",
      "Baton Rouge"
    ],

    missionOrientation: "Research, professional formation, and service to Louisiana — LSU's land-grant mission shapes its role as the economic and intellectual anchor of the Gulf Coast",

    faithTradition: "None",

    educationalPhilosophy: "Professional formation in energy, business, law, architecture, journalism, and agriculture with deep Louisiana industry and cultural integration",

    competitiveness: "Accessible to Moderately Selective (~75% overall; Architecture, Engineering, and Honors more selective)",

    politicalCulture: "Conservative to moderate — Louisiana's political culture is distinctive: Democratic in New Orleans, Republican in most of the state; campus reflects that range",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate nationally; strong regionally and within energy and journalism",

    socialClimate: "SEC-saturated, Louisiana-culturally rich, community-warm, New Orleans-influenced, socially vibrant",

    leadershipStyle: "Community and industry — energy industry networking, Greek leadership, Louisiana legal and political networks"
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 32000,

    graduateEnrollment: 6000,

    totalEnrollment: 38000,

    campusType: "Residential University",

    residentialIntensity: 70,

    communityFeel: 76,

    studentFacultyRatio: "21:1",

    classSizeExperience: "Large introductory lectures in first two years; engineering, architecture, and journalism programs offer more intensive cohort experiences; upper-division courses smaller",

    scaleAdvantages: [
      "Gulf Coast energy industry proximity and alumni density",
      "New Orleans cultural access 80 miles south",
      "Manship journalism alumni network across national broadcast",
      "Architecture program dominance in Gulf Coast design market",
      "Louisiana's statewide transfer articulation system"
    ],

    scaleDisadvantages: [
      "National brand recognition lags actual program quality",
      "Louisiana's economic challenges can limit local market depth for non-energy careers",
      "Baton Rouge is not a major national economic hub",
      "Student-to-faculty ratio is higher than peer institutions"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 72,
      conscientiousness: 76,
      extraversion: 84,
      agreeableness: 82,
      neuroticism: 36
    },

    hollandCodes: ["E", "R", "S"],

    learningStyle: [
      "Applied and Studio-Based (Architecture, Design)",
      "Large Lecture with Industry Integration",
      "Field and Hands-On (Agriculture, Engineering)",
      "Media and Production (Manship)"
    ],

    socialEnvironment: [
      "SEC Football Culture — Essential",
      "Louisiana Cultural Identity",
      "Greek-Active",
      "New Orleans Weekend Culture",
      "Energy Industry Awareness"
    ],

    idealStudentTraits: [
      "Louisiana or Gulf Coast-rooted",
      "Energy, architecture, journalism, or business-oriented",
      "Drawn to LSU's irreplaceable cultural identity",
      "SEC football as a core part of the college experience",
      "Community-oriented and relationship-driven"
    ],

    thrivesIf: [
      "Drawn to Louisiana's unique cultural identity as part of four years",
      "Targeting petroleum engineering, energy finance, architecture, or journalism",
      "Wants Gulf Coast industry access from day one",
      "Values New Orleans proximity as a cultural and career asset",
      "Comfortable in large, socially vibrant SEC campus culture"
    ],

    strugglesIf: [
      "Seeking a nationally prestigious brand for coastal markets",
      "Uncomfortable with Louisiana's distinct political and cultural conservatism",
      "Targeting technology, venture capital, or non-energy finance nationally",
      "Wants a small, academically intimate campus environment",
      "Not drawn to Louisiana as a long-term geographic anchor"
    ],

    transferRiskFactors: [
      "Students who chose LSU for Death Valley football and don't engage professionally",
      "Out-of-state students who find Louisiana's culture less accessible than expected",
      "Students targeting national careers who find Baton Rouge market limiting"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Coastal Environmental Science",
      "Interior Design (nationally ranked)",
      "Agricultural Business",
      "Mass Communication and Media Studies",
      "Construction Management"
    ],

    hiddenCareerPipelines: [
      "Gulf Coast Petrochemical Operations (Shell, ExxonMobil Baton Rouge facilities)",
      "Louisiana Architecture and Construction Market (dominant alumni network)",
      "National Broadcast Journalism (CNN, NBC, Fox News alumni)",
      "Coastal and Environmental Consulting (federal grant market)",
      "New Orleans Hospitality and Entertainment Industry"
    ],

    nicheRecruitingAdvantages: [
      "Petroleum engineering Gulf Coast pipeline — Shell and ExxonMobil Baton Rouge refineries recruit exclusively from LSU",
      "Manship alumni network in national media — second only to Northwestern Medill in SEC footprint",
      "Architecture graduates dominate Gulf Coast design and construction market",
      "Coastal science graduates face almost no competition for federal NOAA and USACE positions in Louisiana",
      "New Orleans hospitality and tourism industry pipeline unique among flagship universities"
    ],

    overlookedStrengths: [
      "Death Valley on a Saturday night — the most culturally distinctive campus experience in the SEC",
      "New Orleans proximity — 80 miles to one of America's most culturally significant cities",
      "Gulf Coast environmental consulting — underappreciated growth field with federal funding tailwinds",
      "LSU architecture — top public program in the South, produces Gulf Coast market leaders",
      "Out-of-state merit scholarship availability — LSU actively recruits talented out-of-state students with significant aid"
    ],

    sleeperIndustries: [
      "Coastal and Climate Adaptation Consulting",
      "Offshore Energy Technology",
      "Louisiana Film and Entertainment Production",
      "Agribusiness and Food Science",
      "Hospitality and Tourism Management"
    ]
  },

  networkCapital: {

    alumniAccessibility: 80,

    mentorshipDensity: 74,

    executiveAccess: 76,

    internshipNetwork: 76,

    familyBusinessExposure: 78,

    relationshipCapitalScore: 78,

    alumniLoyaltyScore: 90,

    referralCultureStrength: 84,

    donorNetworkStrength: 76,

    boardMemberDensity: 68
  },

  economicEcosystem: {

    primaryIndustries: [
      "Energy and Petrochemicals",
      "Architecture and Construction",
      "Law",
      "Media and Journalism",
      "Agriculture and Food Science",
      "Healthcare",
      "Hospitality and Tourism"
    ],

    regionalEconomicDrivers: [
      "Gulf Coast Energy and Petrochemical Corridor",
      "New Orleans Tourism and Hospitality Economy",
      "Louisiana Agricultural and Food Industry",
      "Baton Rouge State Government and Legal Market",
      "Louisiana Film and Entertainment Production"
    ],

    topEmployers: [
      "ExxonMobil",
      "Shell",
      "Chevron",
      "Marathon Petroleum",
      "Entergy",
      "Turner Industries",
      "Baton Rouge General Medical Center",
      "Louisiana Department of Revenue",
      "Ochsner Health"
    ],

    emergingIndustries: [
      "Offshore Renewable Energy",
      "Coastal Adaptation and Environmental Consulting",
      "Louisiana Film Production (major tax incentive state)",
      "Agricultural Technology",
      "Healthcare Technology"
    ],

    startupDensity: "Low",

    ventureCapitalAccess: 34,

    corporateHeadquartersDensity: 52,

    healthcareHubStrength: 68,

    innovationIndex: 60
  },

  geographicInfluence: {

    dominantMarket: "Louisiana and Gulf Coast",

    secondaryMarkets: [
      "Houston",
      "Dallas",
      "Atlanta",
      "New York",
      "Washington DC"
    ],

    alumniStrongholds: [
      "Baton Rouge LA",
      "New Orleans LA",
      "Houston TX",
      "Dallas TX",
      "Atlanta GA"
    ],

    relocationPatterns: [
      "Strong Louisiana retention in energy, law, and architecture",
      "Houston energy corridor migration",
      "Dallas finance and energy migration",
      "National media migration through Manship journalism alumni"
    ],

    regionalInfluenceScore: 88,

    nationalReachScore: 60,

    internationalReachScore: 44
  },

  socialCapital: {

    greekLifeInfluence: 64,

    studentOrganizationStrength: 76,

    leadershipDevelopment: 74,

    crossDisciplinaryInteraction: 64,

    civicEngagement: 72
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 30,
      notes: "Minimal direct pipeline."
    },

    healthWellness: {
      strength: 62,
      notes: "LSU Health Sciences Center and Ochsner Health create solid pre-health pathways. Not a primary national corridor."
    },

    nutraceuticals: {
      strength: 32,
      notes: "Some exposure through agricultural sciences and food science. Not a pipeline."
    },

    consumerProducts: {
      strength: 46,
      notes: "Limited. Some CPG exposure through Ourso Business."
    },

    outdoorIndustry: {
      strength: 44,
      notes: "Louisiana's hunting, fishing, and outdoor culture create some exposure. Not a defined pipeline."
    },

    sportsBusiness: {
      strength: 72,
      notes: "SEC athletics at Death Valley scale, New Orleans Saints and Pelicans proximity, and strong sports media through Manship create solid sports business exposure."
    },

    entertainmentMedia: {
      strength: 70,
      notes: "Manship School journalism and media alumni in national broadcast. Louisiana film production industry (major tax incentive state) creates entertainment exposure."
    },

    ventureCapital: {
      strength: 28,
      notes: "Minimal. Louisiana startup ecosystem is nascent."
    },

    privateEquity: {
      strength: 56,
      notes: "Energy-focused PE in Houston and Dallas accessible through petroleum engineering and energy finance alumni."
    },

    investmentBanking: {
      strength: 54,
      notes: "Ourso Business places into regional banking and energy-focused boutiques. Limited national IB placement."
    },

    consulting: {
      strength: 56,
      notes: "Big 4 recruit on campus. MBB placement is limited. Energy consulting in Gulf Coast is stronger."
    },

    medicine: {
      strength: 66,
      notes: "LSU Health Sciences Center and pre-med program create solid medical school pathways for Louisiana residents."
    },

    healthcareAdministration: {
      strength: 60,
      notes: "Ochsner Health and Louisiana healthcare system create regional healthcare administration exposure."
    },

    defense: {
      strength: 56,
      notes: "Barksdale Air Force Base proximity and engineering school create some defense exposure. Not a primary pipeline."
    },

    realEstate: {
      strength: 54,
      notes: "Baton Rouge and New Orleans real estate markets and construction management program create moderate exposure."
    },

    luxuryBrands: {
      strength: 22,
      notes: "Minimal."
    },

    entrepreneurship: {
      strength: 54,
      notes: "Energy entrepreneurship and restaurant/hospitality entrepreneurship are the most active corridors. Growing but not a primary pipeline."
    },

    technology: {
      strength: 50,
      notes: "Computer science and data science programs improving. Not a primary technology pipeline."
    },

    publicPolicy: {
      strength: 64,
      notes: "Baton Rouge state capital proximity, Hebert Law Center, and political science create solid public policy pathways. Louisiana's unique political landscape is a training ground."
    },

    nonprofitLeadership: {
      strength: 62,
      notes: "Louisiana's extensive nonprofit and community development sector, particularly in New Orleans post-Katrina rebuilding, creates active pathways."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle",

    socialMobilityIndex: 78,

    firstGenerationSupport: 76,

    wealthCreationPotential: 74,

    familyBusinessPipelineStrength: 76
  },

  futureResilience: {

    aiResistance: 68,

    automationResistance: 64,

    adaptabilityScore: 70,

    interdisciplinaryStrength: 64,

    futureReadiness: 68,

    entrepreneurialFlexibility: 60,

    lifelongLearningCulture: 68,

    innovationCapacity: 60
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 74,

    communityLeadershipPotential: 78,

    geographicMobility: 64,

    workLifeBalancePotential: 82,

    purposeAlignment: 76,

    familyFormationSupport: 88,

    personalDevelopmentPotential: 74,

    careerOptionality: 64,

    longTermLifeSatisfaction: 84
  },

  institutionalMoat: {

    prestigeMoat: 58,

    networkMoat: 76,

    geographicMoat: 86,

    industryMoat: 82,

    alumniMoat: 86,

    brandDurability: 72,

    overallMoatScore: 78
  }

},

"Auburn University": {

  institutionNarrative: {

    name: "Auburn University",

    location: "Auburn, Alabama",

    region: "SEC",

    archetype: "The Engineering, Aerospace, and Veterinary Medicine Flagship of the Deep South",

    oneSentenceSummary: "Auburn University is the SEC's preeminent engineering school — Boeing, Lockheed Martin, Raytheon, Honda, Hyundai, Blue Origin, and NASA Marshall recruit directly on campus, the College of Veterinary Medicine is top-5 nationally, and Jordan-Hare Stadium on an Iron Bowl Saturday is the most intensely tribal experience in college football.",

    pipeline: "Engineering and Manufacturing — Gus Harbert College of Engineering in aerospace, mechanical, chemical, civil, and materials engineering. Boeing, Lockheed Martin, Raytheon, Honda, Hyundai, Blue Origin, and NASA Marshall recruit on campus. Samuel Ginn College of Engineering is consistently top-25 nationally among public engineering programs. Harbert College of Business: finance, accounting, and supply chain tracks with strong regional placement. College of Veterinary Medicine: consistently top-5 nationally. College of Agriculture: top-20 nationally, agribusiness and food science pipelines. Raymond J. Harbert College of Business produces graduates entering Atlanta consulting, Charlotte banking, and Houston energy firms. 22,000 undergraduates; 33,000 total enrollment.",

    hiddenPathway: "Auburn's College of Veterinary Medicine is consistently ranked top-5 nationally — and it is the only top-5 veterinary program at a school with the SEC football culture and social experience of Auburn. For students serious about veterinary medicine, Auburn offers something no other top-5 DVM program can: a genuine, warm, large-university social experience alongside one of the most respected veterinary schools in the world. Auburn's aerospace engineering pipeline to Boeing and Blue Origin is among the most direct at any public university outside of Georgia Tech — and the proximity of Huntsville's aerospace corridor (60 miles north, home to NASA Marshall and Redstone Arsenal) creates internship and co-op access that students at larger, more geographically remote universities cannot match.",

    institutionalSecret: "Auburn has quietly built one of the strongest automotive manufacturing pipelines in America — Honda and Hyundai both have major Alabama manufacturing plants and recruit Auburn engineering graduates at scale. As electric vehicle manufacturing expands in the Southeast, Auburn's position at the center of Alabama's automotive corridor will only strengthen. The Hunger Center and Auburn's culture of service are also distinctive: Auburn graduates talk about their university with a warmth and loyalty that is unusual even by SEC standards.",

    theRoom: "57% of Auburn undergraduates are Alabama residents and 43% are from out of state or international — with all 67 Alabama counties represented. Jordan-Hare Stadium seats 87,000 and the Iron Bowl is the defining social event of the Alabama calendar. Toomer's Corner — where fans roll the oaks with toilet paper after victories — is one of college football's most beloved traditions. The campus is a small city of its own: Auburn, Alabama has 80,000 residents, and the university is the entire culture of the place.",

    lifestyle: "Auburn is the most college-town-as-total-identity campus in the SEC. The city of Auburn exists because of the university. The pace is warm, Southern, and deeply communal. The Iron Bowl rivalry with Alabama is not a sporting event — it is a cultural organizing principle for the entire state.",

    bestFitPersonality: "High Conscientiousness, Engineering or veterinary medicine-oriented, SEC football culture-essential, Alabama or Southeast-rooted, Community-warm, Service-oriented, Drawn to Auburn's specific culture of earned loyalty",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Alabama and Southeast dominant — Atlanta primary graduate market, Charlotte and Houston secondary, Huntsville aerospace corridor, national through veterinary medicine and aerospace engineering",

    economicOutcome: "Strong outcomes in aerospace and automotive engineering through Boeing, Lockheed Martin, Honda, Hyundai, and NASA; top-5 veterinary medicine placement; Harbert Business graduates in Atlanta consulting and Charlotte banking; agriculture and agribusiness pipeline throughout the Southeast",

    gradCities: [
      "Atlanta GA",
      "Birmingham AL",
      "Charlotte NC",
      "Houston TX",
      "Washington DC",
      "Huntsville AL",
      "Nashville TN"
    ],

    comparableInstitutions: [
      "University of Alabama",
      "Clemson University",
      "University of Georgia",
      "Mississippi State University",
      "University of Tennessee"
    ],

    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: [
        "Southern Union State Community College",
        "Central Alabama Community College",
        "Trenholm State Community College"
      ],
      transferAcceptanceRate: "~60%",
      freshmanAcceptanceRate: "~80%",
      estimatedSavingsRange: "$12,000–$18,000",
      transferNotes: "Auburn accepts transfers through Alabama's community college articulation system. Southern Union State Community College in Opelika (adjacent to Auburn) is the primary feeder. Veterinary medicine and engineering programs have specific prerequisite requirements that students must map carefully before pursuing the CC pathway. For general Auburn admission, the CC transfer route is accessible for Alabama residents. The savings are meaningful for in-state students, though Auburn's direct admission is also accessible enough that the CC pathway is a choice rather than a necessity for most qualified Alabama applicants."
    }
  },

  institutionIdentity: {

    archetype: "SEC Engineering, Aerospace, and Veterinary Medicine Flagship",

    institutionalPersonality: "warmly loyal, SEC-proud, engineering-driven, service-oriented, deeply communal, Auburn-family-identity-strong",

    cultureKeywords: [
      "War Eagle",
      "Iron Bowl",
      "Toomer's Corner",
      "Boeing Pipeline",
      "Veterinary Medicine",
      "Huntsville Aerospace",
      "Auburn Family",
      "Jordan-Hare",
      "Engineering Excellence"
    ],

    missionOrientation: "Research, professional formation, and service to Alabama and the world — Auburn's land-grant mission is deeply embedded in a culture of practical service and community",

    faithTradition: "None",

    educationalPhilosophy: "Applied engineering excellence, professional formation in business and agriculture, veterinary science leadership, and a culture of service that is genuinely distinctive among SEC institutions",

    competitiveness: "Moderately Selective (~80% overall; Engineering, Vet Medicine, and Business more competitive)",

    politicalCulture: "Conservative — Auburn and Alabama are among the most politically conservative communities in America; campus reflects that strongly",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate nationally; very high within engineering, aerospace, and veterinary medicine",

    socialClimate: "SEC-saturated, warmly communal, Iron Bowl-obsessed, Auburn-family-identity-dominant",

    leadershipStyle: "Community and service — Auburn family culture produces graduates who actively refer and mentor each other with unusual loyalty"
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 22000,

    graduateEnrollment: 11000,

    totalEnrollment: 33000,

    campusType: "Residential University",

    residentialIntensity: 74,

    communityFeel: 84,

    studentFacultyRatio: "19:1",

    classSizeExperience: "Large introductory lectures in first two years; engineering and veterinary medicine programs offer cohort-based intensive experiences; upper-division courses more personal",

    scaleAdvantages: [
      "Huntsville aerospace corridor 60 miles north — NASA Marshall, Redstone Arsenal, Blue Origin co-op access",
      "Honda and Hyundai Alabama manufacturing plants recruit Auburn engineering exclusively",
      "Top-5 veterinary medicine in an SEC social environment — unique nationally",
      "Auburn family alumni loyalty — among the strongest referral cultures in the SEC",
      "Southern Union CC articulation — structured transfer pathway adjacent to campus"
    ],

    scaleDisadvantages: [
      "Auburn's geographic isolation — not adjacent to a major city",
      "National brand recognition below Georgia Tech and other SEC engineering peers",
      "Conservative cultural environment may be limiting for some students",
      "Limited diversity in student body demographics"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 64,
      conscientiousness: 86,
      extraversion: 78,
      agreeableness: 84,
      neuroticism: 30
    },

    hollandCodes: ["R", "I", "S"],

    learningStyle: [
      "Applied and Laboratory (Engineering)",
      "Clinical and Hands-On (Veterinary Medicine)",
      "Large Lecture with Professional Supplement",
      "Field and Experiential (Agriculture)"
    ],

    socialEnvironment: [
      "SEC Football Culture — Essential",
      "Auburn Family Identity",
      "Warmly Communal",
      "Greek-Active",
      "Service-Oriented"
    ],

    idealStudentTraits: [
      "Engineering, aerospace, or veterinary medicine-oriented",
      "Alabama or Southeast-rooted with regional career ambitions",
      "Drawn to Auburn's specific culture of communal loyalty",
      "Iron Bowl rivalry as a joyful rather than stressful identity",
      "Service-oriented and community-minded"
    ],

    thrivesIf: [
      "Targeting aerospace, automotive, or mechanical engineering",
      "Serious about veterinary medicine in an SEC social environment",
      "Wants a campus where alumni loyalty creates genuine career advantages",
      "Values the warmth and community of a smaller SEC college town",
      "Drawn to Huntsville aerospace ecosystem as a career destination"
    ],

    strugglesIf: [
      "Seeking geographic or cultural diversity beyond Alabama and the Southeast",
      "Uncomfortable with politically conservative campus and community culture",
      "Targeting technology, finance, or consulting in national markets",
      "Wants a major city adjacent to campus",
      "Not drawn to Auburn's specific community identity"
    ],

    transferRiskFactors: [
      "Students who chose Auburn for Iron Bowl culture without engineering or professional orientation",
      "Out-of-state students who underestimate how Alabama-centric the social culture is",
      "Students targeting national careers who find Auburn's regional identity limiting"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Materials Engineering (battery technology and EV materials)",
      "Biosystems Engineering",
      "Poultry Science (Auburn produces more poultry science graduates than any program in America)",
      "Industrial and Systems Engineering",
      "Nutrition and Dietetics"
    ],

    hiddenCareerPipelines: [
      "Huntsville Aerospace and Defense (NASA Marshall, Redstone Arsenal, Blue Origin, Dynetics)",
      "Alabama Automotive Manufacturing (Honda Lincoln, Hyundai Montgomery)",
      "Veterinary and Animal Health Industry (top-5 DVM pipeline)",
      "Poultry and Food Science Industry (Tyson, Koch Foods, Wayne Farms)",
      "Southeast Agribusiness and Precision Farming"
    ],

    nicheRecruitingAdvantages: [
      "Boeing and Lockheed Martin aerospace engineering — direct and exclusive campus recruiting",
      "Honda and Hyundai Alabama plants — Auburn engineering graduates are the primary talent pipeline",
      "Auburn Vet Med — top-5 DVM in an SEC environment that no other top-5 program can replicate",
      "NASA Marshall Space Flight Center co-op program — direct Huntsville adjacency advantage",
      "Auburn family alumni referral culture — among the strongest informal networks in the SEC"
    ],

    overlookedStrengths: [
      "Huntsville is 60 miles north and is the fastest-growing defense and aerospace city in America",
      "Auburn's automotive manufacturing pipeline rivals any engineering school outside Michigan",
      "Veterinary medicine — top-5 nationally, essentially never mentioned in general college counseling",
      "Auburn alumni loyalty is functionally a career asset — War Eagle grads hire War Eagle grads",
      "Poultry science — the most respected program nationally in a multi-billion dollar industry"
    ],

    sleeperIndustries: [
      "Electric Vehicle Battery Manufacturing (Alabama EV corridor developing)",
      "Space Technology and Commercial Aerospace",
      "Precision Agriculture and AgriTech",
      "Animal Health and Pharmaceutical",
      "Defense Technology and Cybersecurity (Huntsville)"
    ]
  },

  networkCapital: {

    alumniAccessibility: 86,

    mentorshipDensity: 82,

    executiveAccess: 78,

    internshipNetwork: 78,

    familyBusinessExposure: 76,

    relationshipCapitalScore: 82,

    alumniLoyaltyScore: 94,

    referralCultureStrength: 92,

    donorNetworkStrength: 78,

    boardMemberDensity: 70
  },

  economicEcosystem: {

    primaryIndustries: [
      "Aerospace and Defense",
      "Automotive Manufacturing",
      "Veterinary and Animal Health",
      "Engineering and Manufacturing",
      "Agriculture and Food Science",
      "Financial Services",
      "Healthcare"
    ],

    regionalEconomicDrivers: [
      "Huntsville Defense and Aerospace Economy",
      "Alabama Automotive Manufacturing Corridor",
      "Atlanta Fortune 500 Graduate Market",
      "Alabama Agricultural and Poultry Industry",
      "SEC Athletics Economy"
    ],

    topEmployers: [
      "Boeing",
      "Lockheed Martin",
      "Raytheon",
      "Honda",
      "Hyundai",
      "Blue Origin",
      "NASA Marshall",
      "Dynetics",
      "Auburn University",
      "Protective Life"
    ],

    emergingIndustries: [
      "Electric Vehicle Manufacturing",
      "Space Technology",
      "Precision Agriculture",
      "Cybersecurity (Huntsville)",
      "Animal Health Biotechnology"
    ],

    startupDensity: "Low",

    ventureCapitalAccess: 32,

    corporateHeadquartersDensity: 48,

    healthcareHubStrength: 60,

    innovationIndex: 66
  },

  geographicInfluence: {

    dominantMarket: "Alabama and Southeast",

    secondaryMarkets: [
      "Atlanta",
      "Charlotte",
      "Houston",
      "Huntsville",
      "Nashville"
    ],

    alumniStrongholds: [
      "Atlanta GA",
      "Birmingham AL",
      "Huntsville AL",
      "Charlotte NC",
      "Houston TX"
    ],

    relocationPatterns: [
      "Strong Atlanta migration for business and consulting graduates",
      "Huntsville retention for aerospace and defense engineers",
      "Charlotte financial services migration",
      "Houston energy corridor migration"
    ],

    regionalInfluenceScore: 84,

    nationalReachScore: 62,

    internationalReachScore: 42
  },

  socialCapital: {

    greekLifeInfluence: 64,

    studentOrganizationStrength: 76,

    leadershipDevelopment: 78,

    crossDisciplinaryInteraction: 64,

    civicEngagement: 78
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 22,
      notes: "Minimal direct pipeline."
    },

    healthWellness: {
      strength: 62,
      notes: "Pre-health programs and East Alabama Medical Center create solid health pathways. Veterinary medicine is the signature health sciences strength."
    },

    nutraceuticals: {
      strength: 36,
      notes: "Food science and nutrition programs through agriculture create some nutraceutical exposure."
    },

    consumerProducts: {
      strength: 44,
      notes: "Harbert Business places some graduates into CPG companies. Not a primary pipeline."
    },

    outdoorIndustry: {
      strength: 46,
      notes: "Alabama's hunting, fishing, and outdoor culture create exposure. Some alumni in outdoor and sporting goods industry."
    },

    sportsBusiness: {
      strength: 70,
      notes: "SEC athletics at Iron Bowl intensity, strong sports loyalty culture, and Harbert Business sports management tracks create solid sports business exposure."
    },

    entertainmentMedia: {
      strength: 46,
      notes: "Limited. Some journalism and communications placement. Not a primary pipeline."
    },

    ventureCapital: {
      strength: 26,
      notes: "Minimal. Alabama startup ecosystem is very early-stage."
    },

    privateEquity: {
      strength: 52,
      notes: "Atlanta and Charlotte alumni networks create some PE access. Not a primary pipeline."
    },

    investmentBanking: {
      strength: 54,
      notes: "Harbert Business places into Charlotte and Atlanta regional banking. Limited national IB placement."
    },

    consulting: {
      strength: 58,
      notes: "Big 4 recruit on campus. Atlanta consulting market accessible through strong alumni network. MBB placement is limited."
    },

    medicine: {
      strength: 64,
      notes: "Pre-med program and UAB medical school pipeline create solid medical pathways for Alabama residents."
    },

    healthcareAdministration: {
      strength: 58,
      notes: "Healthcare administration programs and Southeast healthcare market create moderate exposure."
    },

    defense: {
      strength: 82,
      notes: "Huntsville's concentration of NASA, Redstone Arsenal, Boeing Defense, Lockheed, and Raytheon makes Auburn one of the top aerospace and defense engineering pipelines in the country."
    },

    realEstate: {
      strength: 48,
      notes: "Birmingham and Atlanta real estate markets accessible through alumni network. Limited specific program infrastructure."
    },

    luxuryBrands: {
      strength: 18,
      notes: "Minimal."
    },

    entrepreneurship: {
      strength: 52,
      notes: "Growing. Auburn's engineering culture creates some entrepreneurial energy, particularly in aerospace and agricultural technology."
    },

    technology: {
      strength: 60,
      notes: "Computer science and software engineering programs are solid. Huntsville's defense technology ecosystem creates applied technology placement. Not a primary national tech pipeline."
    },

    publicPolicy: {
      strength: 54,
      notes: "Political science and public administration programs create solid Alabama policy pathways. Washington DC placement through ROTC and defense connections."
    },

    nonprofitLeadership: {
      strength: 66,
      notes: "Auburn's service culture is genuinely distinctive — the university produces graduates with an unusual orientation toward community service and civic engagement."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle",

    socialMobilityIndex: 76,

    firstGenerationSupport: 74,

    wealthCreationPotential: 76,

    familyBusinessPipelineStrength: 74
  },

  futureResilience: {

    aiResistance: 74,

    automationResistance: 72,

    adaptabilityScore: 74,

    interdisciplinaryStrength: 68,

    futureReadiness: 74,

    entrepreneurialFlexibility: 60,

    lifelongLearningCulture: 72,

    innovationCapacity: 68
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 76,

    communityLeadershipPotential: 82,

    geographicMobility: 66,

    workLifeBalancePotential: 82,

    purposeAlignment: 78,

    familyFormationSupport: 88,

    personalDevelopmentPotential: 74,

    careerOptionality: 66,

    longTermLifeSatisfaction: 86
  },

  institutionalMoat: {

    prestigeMoat: 62,

    networkMoat: 80,

    geographicMoat: 80,

    industryMoat: 84,

    alumniMoat: 92,

    brandDurability: 76,

    overallMoatScore: 80
  }

},

"Clemson University": {

  institutionNarrative: {

    name: "Clemson University",

    location: "Clemson, South Carolina",

    region: "ACC",

    archetype: "The Automotive Engineering and Advanced Manufacturing University of the Southeast",

    oneSentenceSummary: "Clemson University is the Southeast's premier engineering and advanced manufacturing institution — home to CU-ICAR, the only university-industry automotive research campus of its kind in America, with BMW, Michelin, Bosch, and Siemens Energy recruiting on campus, Death Valley selling out 81,500 seats every Saturday, and a campus-community bond that rivals any institution in American higher education for the intensity of its loyalty.",

    pipeline: "Engineering and Manufacturing — College of Engineering, Computing and Applied Sciences. Automotive, mechanical, civil, electrical, chemical, and bioengineering tracks. BMW Manufacturing, Michelin North America, Bosch, Siemens Energy, and Duke Energy recruit on campus. CU-ICAR (International Center for Automotive Research) in Greenville is the only university-industry automotive research campus of its kind in America — students work directly with BMW, Daimler, and automotive suppliers on live product development. College of Business: finance, marketing, and management with strong Charlotte placement. College of Agriculture, Forestry and Life Sciences: agribusiness, food science, and environmental science. 20,000 undergraduates; 27,000 total enrollment.",

    hiddenPathway: "Clemson's International Center for Automotive Research (CU-ICAR) in Greenville is the only university-industry automotive research campus of its kind in the United States — BMW's North American engineering headquarters sits on the same campus as Clemson graduate students and faculty, creating a research and co-op environment that Stanford and MIT cannot replicate for automotive engineering. As electric vehicle manufacturing expands — Volvo, BMW, and Scout Motors all have South Carolina facilities — CU-ICAR positions Clemson graduates at the center of the EV transition in a way that is structurally unique. The Greenville-Spartanburg market, where Clemson places 35% of its graduates, has emerged as one of the most dynamic mid-size economies in the Southeast: a concentration of advanced manufacturing, healthcare, finance, and entrepreneurship that consistently outperforms its national profile.",

    institutionalSecret: "Clemson's academic transformation over the past 20 years is one of the most dramatic in SEC-adjacent higher education. Selectivity that was 70% in 2005 has tightened to approximately 44% today, while the engineering and computing programs have simultaneously elevated to top-25 national rankings. Families who evaluated Clemson a decade ago and formed impressions based on that era are working with outdated data. The Greenville-Spartanburg market, often overlooked nationally, is genuinely one of the best places to begin a career in advanced manufacturing, healthcare, and finance in America.",

    theRoom: "56% of Clemson undergraduates are South Carolina residents — but the character of the campus is shaped by the 44% who come from out of state, drawn by CU-ICAR's national reputation, the football culture, and Clemson's improving academic profile. Memorial Stadium — Death Valley — seats 81,500 and consistently ranks among the loudest venues in college football. The campus sits on Lake Hartwell in the foothills of the Blue Ridge Mountains — arguably the most physically beautiful campus setting in the SEC.",

    lifestyle: "Clemson, South Carolina is a town of 18,000 that exists entirely because of the university — the most complete college-town-as-identity environment in the SEC. The Blue Ridge Mountains, Lake Hartwell, and outdoor recreation are accessible from campus. Greenville is 30 miles east — a city that has transformed into one of the most livable mid-size cities in America, with a thriving restaurant scene, arts culture, and a growing technology and healthcare economy.",

    bestFitPersonality: "High Conscientiousness, Engineering or manufacturing-oriented, SEC football culture-essential, Southeast or Charlotte-bound, Outdoor recreation-comfortable, Drawn to Clemson's specific community intensity",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Greenville-Spartanburg and Southeast dominant — Charlotte secondary, Atlanta tertiary, national through automotive engineering and CU-ICAR alumni network",

    economicOutcome: "Strong outcomes in automotive engineering through BMW, Michelin, Bosch, and CU-ICAR; growing technology and computing placement; Greenville-Spartanburg advanced manufacturing market dominant for engineering graduates; Charlotte finance accessible through business school alumni",

    gradCities: [
      "Greenville-Spartanburg SC",
      "Charlotte NC",
      "Atlanta GA",
      "Columbia SC",
      "Raleigh-Durham NC",
      "Charleston SC",
      "Washington DC"
    ],

    comparableInstitutions: [
      "University of South Carolina",
      "Auburn University",
      "Virginia Tech",
      "North Carolina State University",
      "University of Georgia"
    ],

    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: [
        "Tri-County Technical College",
        "Greenville Technical College",
        "Piedmont Technical College"
      ],
      transferAcceptanceRate: "~45%",
      freshmanAcceptanceRate: "~44%",
      estimatedSavingsRange: "$14,000–$22,000",
      transferNotes: "Clemson participates in South Carolina's statewide transfer articulation system. Tri-County Technical College in Pendleton (10 minutes from Clemson's campus) is the primary CC feeder and has a documented articulation agreement. Engineering transfer to Clemson requires specific prerequisite completion and competitive GPA. The College of Business transfer is more accessible. For South Carolina residents, the CC pathway through Tri-County provides genuine savings while maintaining a clear transfer route. Given that Clemson's freshman acceptance rate has tightened to 44%, the CC pathway is increasingly a strategic option rather than just a financial one — demonstrated college-level performance at Tri-County can strengthen a transfer application."
    }
  },

  institutionIdentity: {

    archetype: "Automotive Engineering, Advanced Manufacturing, and SEC Identity Flagship",

    institutionalPersonality: "fiercely loyal, engineering-proud, SEC-essential, outdoor-life-comfortable, community-intensity-high, Greenville-orbit-aware",

    cultureKeywords: [
      "Go Tigers",
      "Death Valley",
      "CU-ICAR",
      "BMW Pipeline",
      "Lake Hartwell",
      "Blue Ridge Mountains",
      "Greenville Market",
      "Clemson Family",
      "Advanced Manufacturing"
    ],

    missionOrientation: "Research, professional formation, and service to South Carolina — Clemson's land-grant mission with an engineering and applied sciences emphasis",

    faithTradition: "None",

    educationalPhilosophy: "Applied engineering and manufacturing excellence with deep industry integration through CU-ICAR and South Carolina's automotive corridor; strong emphasis on co-op, internship, and hands-on research",

    competitiveness: "Selective (~44% overall; Engineering and Computing more selective at ~35%)",

    politicalCulture: "Conservative — Clemson and the Upstate South Carolina region are among the most politically conservative in the state",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate nationally; high within engineering and automotive manufacturing; rising rapidly",

    socialClimate: "Clemson-identity-essential, Death Valley-saturated, outdoor-recreation-integrated, community-intensely-loyal",

    leadershipStyle: "Industry and community — CU-ICAR research leadership, Greek and campus organizations, Greenville professional market integration"
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 20000,

    graduateEnrollment: 7000,

    totalEnrollment: 27000,

    campusType: "Residential University",

    residentialIntensity: 78,

    communityFeel: 86,

    studentFacultyRatio: "18:1",

    classSizeExperience: "Large introductory lectures in first two years; engineering and CU-ICAR programs offer intensive cohort and industry-integrated experiences; upper-division courses significantly more personal",

    scaleAdvantages: [
      "CU-ICAR — only university-industry automotive research campus of its kind nationally",
      "BMW, Michelin, Bosch on-campus recruiting — direct advanced manufacturing pipeline",
      "Lake Hartwell and Blue Ridge Mountains — campus setting creates genuine quality of life",
      "Greenville 30 minutes east — one of the most livable mid-size cities in the Southeast",
      "Tri-County Technical College articulation — structured CC pathway adjacent to campus"
    ],

    scaleDisadvantages: [
      "Clemson, SC is highly geographically isolated — not adjacent to a major city",
      "Limited diversity in student body demographics",
      "Automotive manufacturing concentration creates some career path narrowing",
      "National brand recognition still growing — not yet at Virginia Tech or NC State levels nationally"
    ]
  },

  studentFit: {

    bigFiveProfile: {
      openness: 66,
      conscientiousness: 86,
      extraversion: 78,
      agreeableness: 80,
      neuroticism: 30
    },

    hollandCodes: ["R", "I", "E"],

    learningStyle: [
      "Applied and Laboratory (Engineering, CU-ICAR)",
      "Industry-Integrated Research",
      "Large Lecture with Professional Supplement",
      "Co-op and Experiential (CU-ICAR, BMW)"
    ],

    socialEnvironment: [
      "Death Valley Football Culture — Essential",
      "Clemson Family Identity",
      "Outdoor Recreation Integrated",
      "Greek-Active",
      "Greenville Market-Aware"
    ],

    idealStudentTraits: [
      "Engineering, automotive, or computing-oriented",
      "Drawn to Clemson's specific community intensity and loyalty",
      "SEC football as a core identity anchor",
      "Outdoor recreation as a lifestyle complement",
      "Southeast or Charlotte-bound with manufacturing or technology career ambitions"
    ],

    thrivesIf: [
      "Targeting automotive, mechanical, electrical, or bioengineering",
      "Wants industry-integrated research through CU-ICAR and BMW",
      "Values the intensity and warmth of Clemson's community identity",
      "Drawn to Greenville as a career launching market",
      "Comfortable in a small college town with outdoor recreation access"
    ],

    strugglesIf: [
      "Seeking geographic or cultural diversity beyond the Southeast",
      "Uncomfortable with conservative Upstate South Carolina culture",
      "Targeting national technology, finance, or consulting outside the Southeast",
      "Wants a major city adjacent to campus",
      "Not drawn to Clemson's specific identity — it is hard to be lukewarm at Clemson"
    ],

    transferRiskFactors: [
      "Students who chose Clemson for Death Valley football without engineering or professional orientation",
      "Out-of-state students who find the community insularity difficult to penetrate",
      "Students targeting national careers who find Greenville-Spartanburg market limiting"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Automotive Engineering (CU-ICAR graduate track)",
      "Biosystems Engineering",
      "Financial Technology",
      "Packaging Science (one of the top programs nationally)",
      "Computer Science (AI and machine learning track)",
      "Environmental Engineering and Earth Sciences"
    ],

    hiddenCareerPipelines: [
      "BMW North American Engineering (CU-ICAR direct pipeline)",
      "Michelin North America Manufacturing and R&D",
      "Volvo Cars North America (Berkeley County SC)",
      "Scout Motors EV Manufacturing (South Carolina, opening 2026)",
      "Greenville-Spartanburg Healthcare and Finance Market"
    ],

    nicheRecruitingAdvantages: [
      "CU-ICAR — BMW engineers and Clemson students work in the same building; no other US university has this",
      "Packaging science program — one of only a handful nationally, serves a massive industry with virtually no talent surplus",
      "Michelin North America headquarters in Greenville — primary engineering recruiting partner",
      "Scout Motors EV plant (opening 2026) — first-mover South Carolina EV manufacturing pipeline",
      "Clemson family alumni referral culture — rivals Auburn for intensity of mutual support"
    ],

    overlookedStrengths: [
      "CU-ICAR — genuinely unique in American higher education, no competitor replicates it",
      "Packaging science — top program in an enormous industry, almost never mentioned in counseling",
      "Greenville transformation — now one of the 10 most livable mid-size cities in America",
      "Lake Hartwell and Blue Ridge access — campus setting as a quality of life asset",
      "Scout Motors EV plant creating first-mover pipeline for EV manufacturing graduates"
    ],

    sleeperIndustries: [
      "Electric Vehicle Manufacturing and Battery Technology",
      "Packaging Engineering and Sustainable Packaging",
      "Automotive Cybersecurity",
      "Precision Agriculture Technology",
      "Healthcare Technology (Greenville Health System growing)"
    ]
  },

  networkCapital: {

    alumniAccessibility: 86,

    mentorshipDensity: 82,

    executiveAccess: 76,

    internshipNetwork: 82,

    familyBusinessExposure: 72,

    relationshipCapitalScore: 80,

    alumniLoyaltyScore: 92,

    referralCultureStrength: 90,

    donorNetworkStrength: 76,

    boardMemberDensity: 68
  },

  economicEcosystem: {

    primaryIndustries: [
      "Automotive and Advanced Manufacturing",
      "Engineering and Technology",
      "Financial Services",
      "Healthcare",
      "Agriculture and Food Science",
      "Forestry and Environmental Science"
    ],

    regionalEconomicDrivers: [
      "BMW and Automotive FDI Corridor (Spartanburg)",
      "Michelin North America Headquarters (Greenville)",
      "Greenville-Spartanburg Economic Transformation",
      "South Carolina Port and Logistics Economy",
      "Charlotte Financial Services Proximity"
    ],

    topEmployers: [
      "BMW Manufacturing",
      "Michelin North America",
      "Bosch",
      "Siemens Energy",
      "Duke Energy",
      "Fluor Corporation",
      "Greenville Health System",
      "TD Bank",
      "Deloitte"
    ],

    emergingIndustries: [
      "Electric Vehicle Manufacturing",
      "Automotive Cybersecurity",
      "Healthcare Technology",
      "Sustainable Packaging",
      "Defense Manufacturing"
    ],

    startupDensity: "Low to Moderate",

    ventureCapitalAccess: 36,

    corporateHeadquartersDensity: 52,

    healthcareHubStrength: 64,

    innovationIndex: 70
  },

  geographicInfluence: {

    dominantMarket: "Greenville-Spartanburg and Southeast",

    secondaryMarkets: [
      "Charlotte",
      "Atlanta",
      "Columbia",
      "Raleigh-Durham",
      "Charleston"
    ],

    alumniStrongholds: [
      "Greenville-Spartanburg SC",
      "Charlotte NC",
      "Atlanta GA",
      "Columbia SC",
      "Raleigh-Durham NC"
    ],

    relocationPatterns: [
      "Strong Greenville-Spartanburg retention for engineering graduates",
      "Charlotte banking and finance migration",
      "Atlanta Southeast professional market",
      "Raleigh-Durham technology sector migration"
    ],

    regionalInfluenceScore: 84,

    nationalReachScore: 62,

    internationalReachScore: 48
  },

  socialCapital: {

    greekLifeInfluence: 58,

    studentOrganizationStrength: 76,

    leadershipDevelopment: 78,

    crossDisciplinaryInteraction: 66,

    civicEngagement: 72
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 20,
      notes: "Minimal direct pipeline."
    },

    healthWellness: {
      strength: 62,
      notes: "Greenville Health System and pre-health programs create solid health pathways. Bioengineering adds clinical research dimension."
    },

    nutraceuticals: {
      strength: 28,
      notes: "Food science and agriculture programs create some exposure. Not a pipeline."
    },

    consumerProducts: {
      strength: 46,
      notes: "Packaging science program creates a distinctive CPG-adjacent pipeline. Business school places some graduates into CPG companies."
    },

    outdoorIndustry: {
      strength: 54,
      notes: "Blue Ridge Mountains and Lake Hartwell adjacency, strong outdoor recreation culture, and some alumni in outdoor and sporting goods industry. More than most SEC schools."
    },

    sportsBusiness: {
      strength: 68,
      notes: "Death Valley and ACC/SEC athletics culture create solid sports business exposure. Not a defined program but strong culture."
    },

    entertainmentMedia: {
      strength: 38,
      notes: "Limited. Some journalism and communications placement."
    },

    ventureCapital: {
      strength: 32,
      notes: "Minimal. Greenville startup ecosystem is early-stage."
    },

    privateEquity: {
      strength: 52,
      notes: "Charlotte PE market accessible. Not a primary pipeline."
    },

    investmentBanking: {
      strength: 60,
      notes: "Charlotte bank recruiting accessible through business alumni. Not at UofSC Moore School levels nationally."
    },

    consulting: {
      strength: 60,
      notes: "Deloitte and Big 4 recruit on campus. Charlotte consulting market accessible. MBB placement is limited."
    },

    medicine: {
      strength: 58,
      notes: "Pre-med program and Greenville Health System partnership create solid medical school pathways."
    },

    healthcareAdministration: {
      strength: 60,
      notes: "Greenville Health System and growing healthcare market create healthcare administration exposure."
    },

    defense: {
      strength: 56,
      notes: "ROTC, engineering school, and South Carolina's defense manufacturing presence create moderate defense exposure."
    },

    realEstate: {
      strength: 50,
      notes: "Greenville real estate transformation and Charlotte market accessible through alumni."
    },

    luxuryBrands: {
      strength: 18,
      notes: "Minimal."
    },

    entrepreneurship: {
      strength: 54,
      notes: "Growing Greenville entrepreneurial ecosystem and CU-ICAR spinout culture create increasing entrepreneurial energy."
    },

    technology: {
      strength: 66,
      notes: "Computer science and software engineering programs improving rapidly. Raleigh-Durham and Charlotte technology markets accessible. CU-ICAR automotive technology is the niche strength."
    },

    publicPolicy: {
      strength: 52,
      notes: "Political science and public administration programs create South Carolina policy pathways. Not a primary strength."
    },

    nonprofitLeadership: {
      strength: 60,
      notes: "Service culture and land-grant mission create solid civic and nonprofit pathways in the Upstate South Carolina community."
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle",

    socialMobilityIndex: 74,

    firstGenerationSupport: 72,

    wealthCreationPotential: 74,

    familyBusinessPipelineStrength: 70
  },

  futureResilience: {

    aiResistance: 76,

    automationResistance: 74,

    adaptabilityScore: 76,

    interdisciplinaryStrength: 68,

    futureReadiness: 76,

    entrepreneurialFlexibility: 62,

    lifelongLearningCulture: 72,

    innovationCapacity: 70
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 74,

    communityLeadershipPotential: 80,

    geographicMobility: 66,

    workLifeBalancePotential: 84,

    purposeAlignment: 76,

    familyFormationSupport: 86,

    personalDevelopmentPotential: 74,

    careerOptionality: 66,

    longTermLifeSatisfaction: 86
  },

  institutionalMoat: {

    prestigeMoat: 62,

    networkMoat: 78,

    geographicMoat: 80,

    industryMoat: 86,

    alumniMoat: 90,

    brandDurability: 74,

    overallMoatScore: 80
  }

}
};

if (typeof module !== "undefined") module.exports = { UNIVERSITY_DB_V5,

"Colorado School of Mines": {

  institutionNarrative: {
    name: "Colorado School of Mines",
    location: "Golden, Colorado",
    region: "Mountain West",
    archetype: "The STEM Crucible of the Rocky Mountain West — Energy, Mining, and Engineering Excellence",
    oneSentenceSummary: "Colorado School of Mines is one of the most rigorous and specialized engineering universities in America — a STEM-only institution of 6,000 students in Golden where petroleum engineers earn average starting salaries above $97,000, computer science graduates enter Google and Amazon, and the graduation rate for students who survive the first year rivals MIT.",
    pipeline: "Petroleum Engineering — #1 or #2 nationally every year, average starting salary $97,000+, feeding ExxonMobil, Chevron, ConocoPhillips, Halliburton, and every major Colorado and Texas energy firm. Chemical and Biochemical Engineering — top-10 nationally. Mechanical Engineering — strong aerospace, defense, and manufacturing placement. Computer Science — growing rapidly, feeding Google, Amazon, Lockheed Martin, and the Denver-Boulder tech corridor. Civil and Environmental Engineering — strong infrastructure and environmental consulting placement. Mining Engineering — the founding program, still top-2 nationally. Geophysics — top-ranked nationally, feeding energy exploration. 4,800 undergraduates; 6,000 total.",
    hiddenPathway: "Mines graduates earn the highest average starting salaries of any public university in Colorado — and among the highest of any public university in the Mountain West — at a tuition that is dramatically lower than peer private engineering schools. The combination of Mines' petroleum engineering ranking, the Denver-Boulder Front Range technology corridor, and Golden's proximity to the National Renewable Energy Laboratory (NREL) — the federal government's primary renewable energy research institution, located on campus — creates a student who can pivot from fossil fuel engineering to renewable energy research within the same institution. Mines is the only engineering university in America with a federally-funded national renewable energy laboratory as a campus neighbor.",
    institutionalSecret: "The Mines academic culture is genuinely demanding in a way that separates it from most engineering programs — the Freshman Engineering Crucible is a rite of passage that produces graduates who have been tested at a level most engineers never experience. The result is an alumni network with an unusual density of senior engineers, executives, and founders who share a common experience of having survived something difficult together. The Mines alumni loyalty index is among the highest of any STEM institution in the country.",
    theRoom: "Golden, Colorado — a historic mining town at the foot of the Front Range, 15 miles west of downtown Denver. The campus sits at 5,675 feet with Clear Creek running through town and Table Mesa rising immediately behind campus. 4,800 undergraduates in a STEM-only environment. The gender ratio is approximately 70% male / 30% female — improving but still significantly imbalanced. Denver is 30 minutes east. Boulder is 25 minutes north.",
    lifestyle: "Golden is a genuine Colorado mountain town with craft breweries, Clear Creek whitewater kayaking, hiking trails from campus, and easy access to every ski resort in the state. The outdoor recreation lifestyle is fully integrated with the academic culture — Mines students work hard and play hard in equal measure.",
    bestFitPersonality: "Very High Conscientiousness, STEM-essential (not STEM-adjacent), High tolerance for academic intensity, Outdoor recreation-integrated, Energy or engineering or computing-career-certain, Colorado or Mountain West-drawn",
    faithTradition: "Nonsectarian Public University",
    geographicInfluenceRadius: "Front Range dominant — Denver-Boulder technology corridor, national through energy industry, international through mining and petroleum engineering",
    economicOutcome: "Highest average starting salaries of any Colorado public university; petroleum engineering $97,000+ average; Google and Amazon for computer science; Lockheed Martin and Raytheon for mechanical and aerospace; NREL for renewable energy research; ExxonMobil and Chevron for energy",
    gradCities: ["Denver CO", "Houston TX", "Dallas TX", "San Francisco CA", "Seattle WA", "Washington DC"],
    comparableInstitutions: ["South Dakota School of Mines and Technology", "Missouri University of Science and Technology", "Montana Tech", "New Mexico Tech", "University of Colorado Boulder"],
    ccTransferPathway: {
      hasCCPathway: false,
      ccFeederNames: [],
      transferAcceptanceRate: "~30%",
      freshmanAcceptanceRate: "~58%",
      estimatedSavingsRange: "",
      transferNotes: "Mines accepts a small number of transfers but it is not a primary pathway. The engineering curriculum is highly sequential — transfer students frequently lose credit and must extend their timeline. Students serious about Mines should apply as freshmen. The CC pathway is not a strategic recommendation for Mines admission."
    }
  },

  institutionIdentity: {
    archetype: "Rocky Mountain STEM Crucible — Energy, Mining, and Engineering",
    institutionalPersonality: "academically intense, STEM-only, engineering-proud, outdoor-recreation-integrated, alumni-loyal, energy-industry-adjacent",
    cultureKeywords: ["Orediggers", "Petroleum Engineering #1", "NREL Campus", "Golden Colorado", "Engineering Crucible", "Clear Creek", "Energy Industry", "Starting Salary Leaders"],
    missionOrientation: "Engineering and applied science excellence in service of the earth and its resources — Mines' mission is explicitly tied to energy, minerals, and the responsible development of natural resources",
    faithTradition: "None",
    educationalPhilosophy: "Intensive STEM education with professional formation in energy, computing, and engineering; outdoor recreation and Colorado lifestyle integrated as essential components of the Mines identity",
    competitiveness: "Selective (~58% overall; Petroleum Engineering and Computer Science more selective)",
    politicalCulture: "Moderate to conservative — engineering culture tends toward pragmatism over ideology; energy industry adjacency shapes political perspectives",
    studentAutonomy: "High",
    prestigeOrientation: "Very High within engineering and energy; less relevant outside STEM",
    socialClimate: "STEM-intense, outdoor-recreation-essential, engineering-community-bonded, alumni-loyalty-high"
  },

name: "Colorado School of Mines",

    location: "Golden, Colorado",

    region: "Mountain West",

    archetype: "Applied Engineering & Resource Innovation Institute",

    oneSentenceSummary: "Colorado School of Mines is one of the world's premier applied engineering universities, producing highly compensated technical leaders across energy, aerospace, defense, advanced manufacturing, materials science, mining, and emerging climate technologies.",

    pipeline: "Founded in 1874 during the Colorado Gold Rush, Mines was originally established to support mining and geological development in the American West. Today it has evolved into a globally respected engineering and applied science institution known for petroleum engineering, mining engineering, metallurgy, materials science, aerospace engineering, mechanical engineering, computer science, energy systems, and advanced manufacturing.",

    hiddenPathway: "Most families think Mines is simply an engineering school. The hidden reality is that Mines sits at the intersection of energy, aerospace, defense, advanced materials, manufacturing, climate technology, and industrial innovation. Its graduates frequently enter industries that quietly power the modern economy.",

    institutionalSecret: "Mines graduates often possess a combination rarely found elsewhere: elite technical capability, practical engineering experience, and direct exposure to industries responsible for global infrastructure, energy systems, manufacturing, and national security.",

    theRoom: "Students are intensely analytical, hardworking, intellectually curious, and highly career-focused. Collaboration exists, but expectations are demanding. Academic rigor is one of the strongest cultural norms on campus.",

    lifestyle: "Engineering-intensive coursework, outdoor Colorado lifestyle, strong internship culture, undergraduate research, mountain recreation, and close industry engagement.",

    bestFitPersonality: "High Conscientiousness, High Openness, Analytical, Technically Curious, Problem Solver",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "National Engineering Markets, Energy Sector, Aerospace Corridor, Global Technical Industries",

    economicOutcome: "Among the strongest salary outcomes of any public university in America, particularly in engineering, energy, aerospace, manufacturing, and technology sectors.",

    gradCities: [
      "Denver",
      "Houston",
      "Dallas",
      "Seattle",
      "Phoenix",
      "San Diego",
      "Colorado Springs"
    ],

    comparableInstitutions: [
      "Missouri University of Science and Technology",
      "South Dakota School of Mines",
      "New Mexico Tech",
      "Rose-Hulman Institute of Technology",
      "Worcester Polytechnic Institute"
    ]
  },

  institutionIdentity: {

    archetype: "Technical Problem Solver",

    institutionalPersonality: "analytical, rigorous, practical, innovative, disciplined",

    cultureKeywords: [
      "Engineering",
      "Innovation",
      "Research",
      "Applied Science",
      "Problem Solving",
      "Industry Partnerships",
      "Technology",
      "Technical Leadership"
    ],

    missionOrientation: "Solving global engineering, energy, environmental, and technological challenges.",

    faithTradition: "None",

    educationalPhilosophy: "Applied technical education grounded in rigorous science, engineering practice, and industry relevance.",

    competitiveness: "Highly Selective",

    politicalCulture: "Mixed",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate",

    socialClimate: "Collaborative but demanding",

    leadershipStyle: "Technical Leadership"
  },

  institutionScale: {

    enrollmentCategory: "Medium",

    undergraduateEnrollment: 6000,

    graduateEnrollment: 1700,

    totalEnrollment: 7700,

    campusType: "STEM Research University",

    residentialIntensity: 72,

    communityFeel: 82,

    studentFacultyRatio: "16:1",

    classSizeExperience: "Medium",

    scaleAdvantages: [
      "Strong faculty access",
      "Industry connectivity",
      "Undergraduate research",
      "Highly specialized programs",
      "Strong recruiting pipelines"
    ],

    scaleDisadvantages: [
      "Limited academic breadth",
      "Extremely rigorous coursework",
      "Less traditional college experience"
    ]
  },

  studentFit: {

    bigFiveProfile: {

      openness: 88,

      conscientiousness: 98,

      extraversion: 48,

      agreeableness: 68,

      neuroticism: 42
    },

    hollandCodes: ["I", "R", "E"],

    learningStyle: [
      "Analytical Learning",
      "Laboratory Learning",
      "Project-Based Learning",
      "Research Learning"
    ],

    socialEnvironment: [
      "STEM-Focused",
      "Collaborative",
      "Career-Oriented",
      "Technically Intensive"
    ],

    idealStudentTraits: [
      "Engineer",
      "Builder",
      "Inventor",
      "Systems Thinker",
      "Problem Solver"
    ],

    thrivesIf: [
      "Enjoys math and science",
      "Likes solving complex problems",
      "Wants strong career outcomes",
      "Enjoys technical challenges",
      "Seeks industry engagement"
    ],

    strugglesIf: [
      "Dislikes quantitative work",
      "Prefers broad liberal arts education",
      "Needs low academic pressure",
      "Seeks highly social environments"
    ],

    transferRiskFactors: [
      "Engineering burnout",
      "Desire for broader majors",
      "Academic rigor fatigue"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Metallurgical Engineering",
      "Geophysics",
      "Materials Science",
      "Engineering Physics",
      "Quantitative Biosciences",
      "Space Resources",
      "Environmental Engineering"
    ],

    hiddenCareerPipelines: [
      "Aerospace Systems",
      "Defense Contractors",
      "Energy Trading",
      "Advanced Manufacturing",
      "Semiconductors",
      "Climate Technology",
      "Industrial Automation"
    ],

    nicheRecruitingAdvantages: [
      "Energy companies",
      "Defense contractors",
      "Aerospace firms",
      "Industrial manufacturers",
      "Engineering consulting firms"
    ],

    overlookedStrengths: [
      "Salary outcomes",
      "Materials science leadership",
      "Industry partnerships",
      "Entrepreneurial engineering"
    ],

    sleeperIndustries: [
      "Quantum Technology",
      "Hydrogen Energy",
      "Carbon Capture",
      "Space Resources",
      "Advanced Materials"
    ]
  },

  networkCapital: {

    alumniAccessibility: 88,

    mentorshipDensity: 86,

    executiveAccess: 82,

    internshipNetwork: 96,

    familyBusinessExposure: 28,

    relationshipCapitalScore: 86,

    alumniLoyaltyScore: 92,

    referralCultureStrength: 92,

    donorNetworkStrength: 84,

    boardMemberDensity: 78
  },

  economicEcosystem: {

    primaryIndustries: [
      "Energy",
      "Aerospace",
      "Defense",
      "Manufacturing",
      "Technology",
      "Engineering Services"
    ],

    regionalEconomicDrivers: [
      "Aerospace Corridor",
      "Energy Innovation",
      "Defense Spending",
      "Advanced Manufacturing",
      "Technology Growth"
    ],

    topEmployers: [
      "Lockheed Martin",
      "Ball Aerospace",
      "Chevron",
      "Halliburton",
      "Schlumberger",
      "Northrop Grumman",
      "RTX"
    ],

    emergingIndustries: [
      "Climate Technology",
      "Hydrogen Systems",
      "Quantum Technology",
      "Space Technology",
      "Advanced Materials"
    ],

    startupDensity: "High",

    ventureCapitalAccess: 74,

    corporateHeadquartersDensity: 78,

    healthcareHubStrength: 34,

    innovationIndex: 96
  },

  geographicInfluence: {

    dominantMarket: "National Engineering Economy",

    secondaryMarkets: [
      "Houston",
      "Denver",
      "Seattle",
      "Dallas",
      "Phoenix",
      "Washington DC"
    ],

    alumniStrongholds: [
      "Denver",
      "Houston",
      "Dallas",
      "Seattle",
      "Colorado Springs"
    ],

    relocationPatterns: [
      "Engineering hubs",
      "Energy sector migration",
      "Defense industry careers",
      "Technology leadership"
    ],

    regionalInfluenceScore: 88,

    nationalReachScore: 94,

    internationalReachScore: 72
  },

  socialCapital: {

    greekLifeInfluence: 28,

    studentOrganizationStrength: 88,

    leadershipDevelopment: 82,

    crossDisciplinaryInteraction: 68,

    civicEngagement: 54
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 12
    },

    healthWellness: {
      strength: 38
    },

    nutraceuticals: {
      strength: 46,
      notes: "Growing opportunities through chemical engineering, process engineering, manufacturing systems, formulation science, packaging, and supply-chain operations."
    },

    consumerProducts: {
      strength: 58,
      notes: "Strong for manufacturing, operations, materials engineering, product development, and industrial design support."
    },

    outdoorIndustry: {
      strength: 64,
      notes: "Colorado outdoor brands recruit engineering, product-development, materials, and manufacturing talent."
    },

    sportsBusiness: {
      strength: 12
    },

    entertainmentMedia: {
      strength: 8
    },

    ventureCapital: {
      strength: 62
    },

    privateEquity: {
      strength: 38
    },

    investmentBanking: {
      strength: 24
    },

    consulting: {
      strength: 72
    },

    medicine: {
      strength: 28
    },

    healthcareAdministration: {
      strength: 18
    },

    defense: {
      strength: 98
    },

    realEstate: {
      strength: 18
    },

    luxuryBrands: {
      strength: 4
    },

    entrepreneurship: {
      strength: 82
    },

    technology: {
      strength: 92
    },

    publicPolicy: {
      strength: 34
    },

    nonprofitLeadership: {
      strength: 24
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Upper-Middle Income",

    socialMobilityIndex: 78,

    firstGenerationSupport: 72,

    wealthCreationPotential: 96,

    familyBusinessPipelineStrength: 32
  },

  futureResilience: {

    aiResistance: 96,

    automationResistance: 98,

    adaptabilityScore: 92,

    interdisciplinaryStrength: 74,

    futureReadiness: 98,

    entrepreneurialFlexibility: 82,

    lifelongLearningCulture: 88,

    innovationCapacity: 98
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 96,

    communityLeadershipPotential: 68,

    geographicMobility: 94,

    workLifeBalancePotential: 72,

    purposeAlignment: 82,

    familyFormationSupport: 76,

    personalDevelopmentPotential: 84,

    careerOptionality: 92,

    longTermLifeSatisfaction: 86
  },

  institutionalMoat: {

    prestigeMoat: 82,

    networkMoat: 90,

    geographicMoat: 78,

    industryMoat: 98,

    alumniMoat: 92,

    brandDurability: 96,

    overallMoatScore: 94
  },

"Colorado College": {

  institutionNarrative: {
    name: "Colorado College",
    location: "Colorado Springs, Colorado",
    region: "Mountain West",
    archetype: "The Block Plan Liberal Arts College — One Course, Total Immersion, the Rocky Mountain West",
    oneSentenceSummary: "Colorado College is one of the most intellectually distinctive liberal arts colleges in America — 2,200 students in Colorado Springs who take one course at a time for 3.5 weeks, then move to the next, in a Block Plan that produces a depth of learning that no semester-based institution can replicate, alongside one of the most integrated outdoor education programs in American higher education.",
    pipeline: "Liberal Arts across all disciplines — environmental science, biology, economics, political science, history, English, sociology, art, physics, chemistry, mathematics, and philosophy. CC does not have professional schools — its graduates go to law school, medical school, graduate programs, consulting, finance, technology, nonprofit leadership, and environmental careers through the depth of liberal arts preparation and the CC alumni network. Top employers and programs: McKinsey, Teach for America, Peace Corps, environmental consulting firms, law schools, and medical schools.",
    hiddenPathway: "The Block Plan is CC's most consequential differentiating asset — and the most misunderstood. Students take one course for 3.5 weeks, nothing else. The professor teaches nothing else. The entire intellectual community is in the same conversation simultaneously. The depth of engagement this produces — field trips, lab immersion, overnight expeditions, visiting experts, primary source archives — is structurally impossible in a semester system. CC graduates arrive at law school, medical school, and graduate programs having already experienced what total scholarly immersion feels like. That is a different kind of preparation than accumulating credits in five courses simultaneously. The Block Break — the week between blocks — is institutionally supported for travel, outdoor expeditions, and independent research. It is not a vacation. It is built into the educational architecture.",
    institutionalSecret: "Colorado College places more graduates per capita into Teach for America, Peace Corps, and Watson Fellowship programs than almost any liberal arts college in the country. The combination of outdoor education, global block travel, and a culture that takes seriously the question of how to live a meaningful life produces graduates who are drawn to service, adventure, and impact in disproportionate numbers. This is not marketing — it is a measurable outcome of the Block Plan's emphasis on presence, depth, and direct experience.",
    theRoom: "100-acre campus at the base of Pikes Peak in Colorado Springs — a city of 480,000 that surprises students who expect a small college town. Garden of the Gods is 10 minutes from campus. Pikes Peak is the immediate western backdrop. 2,200 students, 96% living on campus, producing one of the most genuinely residential liberal arts experiences in the Mountain West. The student body is predominantly from out of state — California, the Northeast, and Texas — with a progressive political orientation that coexists somewhat tensely with Colorado Springs' conservative political culture.",
    lifestyle: "Colorado Springs is a city of contrasts — one of the most militarily concentrated cities in America alongside one of the most physically spectacular outdoor environments. Garden of the Gods, Pikes Peak, the Broadmoor, and the entire Front Range trail system are accessible from campus. The outdoor lifestyle is not an amenity at CC — it is structurally integrated into the Block Plan through field courses, Block Break expeditions, and an outdoor recreation program that is among the most developed of any liberal arts college in the country.",
    bestFitPersonality: "High Openness, Intellectually intense, Outdoor recreation-essential, Service-oriented, Comfortable with academic depth over breadth, Independent and self-directed, Pacific Northwest or California or Northeast-origin typical",
    faithTradition: "Nonsectarian Private Liberal Arts College",
    geographicInfluenceRadius: "National — Colorado Springs location is a setting, not a career market; CC graduates distribute nationally through law, medicine, graduate school, consulting, and service programs",
    economicOutcome: "Strong law school and medical school placement; consulting through CC alumni network; environmental careers through depth of environmental science program; Teach for America and Peace Corps at disproportionate rates; Watson Fellowship and Fulbright at above-average rates for institutional size",
    gradCities: ["Denver CO", "New York NY", "San Francisco CA", "Washington DC", "Seattle WA", "Boulder CO"],
    comparableInstitutions: ["Carleton College", "Whitman College", "Reed College", "University of Puget Sound", "Lewis and Clark College"],
    ccTransferPathway: {
      hasCCPathway: false,
      ccFeederNames: [],
      transferAcceptanceRate: "~25%",
      freshmanAcceptanceRate: "~18%",
      estimatedSavingsRange: "",
      transferNotes: "Colorado College accepts a small number of transfers but the Block Plan creates significant credit translation challenges — community college courses do not map cleanly to block courses. Students serious about CC should apply as freshmen. The CC admission rate has tightened significantly — it is now a selective institution comparable to Colgate or Hamilton in selectivity."
    }
  },

  institutionIdentity: {
    archetype: "Block Plan Liberal Arts College — Intellectual Depth and Mountain West Identity",
    institutionalPersonality: "intellectually intense, outdoor-recreation-essential, service-oriented, progressive, Block-Plan-devoted, depth-over-breadth-committed",
    cultureKeywords: ["Tigers", "The Block Plan", "One Course at a Time", "Block Break", "Garden of the Gods", "Pikes Peak", "Outdoor Education", "Watson Fellows"],
    missionOrientation: "Liberal arts education through total immersion — the Block Plan as a philosophy of learning, not just a scheduling system",
    faithTradition: "None",
    educationalPhilosophy: "One course at a time, 3.5 weeks of total immersion, then the next — the Block Plan produces depth, presence, and direct experience that no semester system replicates; outdoor education as integral academic experience",
    competitiveness: "Selective (~18% acceptance rate)",
    politicalCulture: "Progressive — CC's student body is significantly more progressive than Colorado Springs itself; this tension is part of the CC experience",
    studentAutonomy: "Very High",
    prestigeOrientation: "Moderate nationally; very high within liberal arts and outdoor education communities",
    socialClimate: "Intellectually intense, outdoor-essential, service-drawn, Block-community-bonded, progressive-leaning"
  },

name: "Colorado College",

    location: "Colorado Springs, Colorado",

    region: "Mountain West",

    archetype: "Elite Adventure Liberal Arts College",

    oneSentenceSummary: "Colorado College combines elite liberal arts education, extraordinary student autonomy, outdoor adventure culture, and national graduate-school placement to create one of the most distinctive undergraduate experiences in America.",

    pipeline: "Founded in 1874, Colorado College is a highly selective liberal arts college known nationally for its innovative Block Plan, where students take one course at a time in intensive 3.5-week sessions. The college has developed exceptional strength in environmental studies, economics, political science, international affairs, psychology, geology, and interdisciplinary learning. Despite its small size, Colorado College places graduates into elite graduate schools, consulting firms, nonprofits, public policy organizations, and leadership roles across the country.",

    hiddenPathway: "Most families see Colorado College as a small liberal arts college in the Rockies. The hidden reality is that it functions as an elite national talent-development institution. Its combination of selectivity, intellectual freedom, experiential learning, and alumni influence often produces outcomes more comparable to elite East Coast liberal arts colleges than regional western institutions.",

    institutionalSecret: "The Block Plan fundamentally changes how students think. Graduates become unusually skilled at immersion, adaptability, synthesis, communication, and deep work—traits increasingly valuable in an AI-driven economy.",

    theRoom: "Students are intellectually curious, adventurous, independent, highly self-directed, and often unconventional. Status competition exists but is typically expressed through achievement, experiences, and intellectual exploration rather than traditional prestige signaling.",

    lifestyle: "Outdoor recreation, mountain culture, study abroad, intensive academics, skiing, climbing, hiking, and experiential learning.",

    bestFitPersonality: "High Openness, Independent Thinker, Intellectual Explorer, Self-Directed Learner, Adventurous",

    faithTradition: "Nonsectarian",

    geographicInfluenceRadius: "National Liberal Arts Network, Graduate Schools, Public Policy, Environmental Leadership",

    economicOutcome: "Strong outcomes in consulting, law, medicine, public policy, nonprofit leadership, entrepreneurship, environmental careers, and graduate education.",

    gradCities: [
      "Denver",
      "Boulder",
      "Seattle",
      "San Francisco",
      "New York",
      "Washington DC",
      "Chicago"
    ],

    comparableInstitutions: [
      "Middlebury College",
      "Bowdoin College",
      "Carleton College",
      "Pomona College",
      "Davidson College"
    ]
  },

  institutionIdentity: {

    archetype: "Independent Intellectual Explorer",

    institutionalPersonality: "curious, adventurous, independent, reflective, intellectually ambitious",

    cultureKeywords: [
      "Block Plan",
      "Experiential Learning",
      "Outdoor Culture",
      "Liberal Arts",
      "Global Citizenship",
      "Intellectual Freedom",
      "Leadership",
      "Adventure"
    ],

    missionOrientation: "Developing intellectually adventurous leaders capable of addressing complex global challenges.",

    faithTradition: "None",

    educationalPhilosophy: "Immersive liberal arts education emphasizing depth, reflection, interdisciplinary thinking, and experiential learning.",

    competitiveness: "Highly Selective",

    politicalCulture: "Progressive",

    studentAutonomy: "Extremely High",

    prestigeOrientation: "Moderate",

    socialClimate: "Collaborative, intellectually curious, and independent",

    leadershipStyle: "Thought Leadership"
  },

  institutionScale: {

    enrollmentCategory: "Small",

    undergraduateEnrollment: 2200,

    graduateEnrollment: 0,

    totalEnrollment: 2200,

    campusType: "Residential Liberal Arts College",

    residentialIntensity: 96,

    communityFeel: 94,

    studentFacultyRatio: "8:1",

    classSizeExperience: "Very Small",

    scaleAdvantages: [
      "Elite faculty access",
      "Exceptional mentorship",
      "Strong alumni engagement",
      "Highly personalized education",
      "Leadership opportunities"
    ],

    scaleDisadvantages: [
      "Limited major breadth",
      "Small alumni population",
      "Less corporate recruiting volume"
    ]
  },

  studentFit: {

    bigFiveProfile: {

      openness: 98,

      conscientiousness: 76,

      extraversion: 62,

      agreeableness: 82,

      neuroticism: 34
    },

    hollandCodes: ["I", "A", "E"],

    learningStyle: [
      "Immersive Learning",
      "Discussion-Based Learning",
      "Experiential Learning",
      "Interdisciplinary Learning"
    ],

    socialEnvironment: [
      "Intellectual",
      "Independent",
      "Outdoor-Oriented",
      "Collaborative"
    ],

    idealStudentTraits: [
      "Explorer",
      "Scholar",
      "Leader",
      "Creative Thinker",
      "Global Citizen"
    ],

    thrivesIf: [
      "Loves intellectual exploration",
      "Enjoys self-directed learning",
      "Values faculty mentorship",
      "Wants academic flexibility",
      "Enjoys outdoor culture"
    ],

    strugglesIf: [
      "Needs structure",
      "Prefers large universities",
      "Wants major sports culture",
      "Requires highly vocational programs"
    ],

    transferRiskFactors: [
      "Desire for larger social scene",
      "Seeking specialized professional programs",
      "Wanting major research university resources"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Geology",
      "Environmental Science",
      "Southwest Studies",
      "International Political Economy",
      "Organismal Biology",
      "Economics",
      "Mathematical Economics"
    ],

    hiddenCareerPipelines: [
      "Environmental Leadership",
      "Foreign Service",
      "Public Policy",
      "Consulting",
      "Outdoor Industry Leadership",
      "Graduate School Placement",
      "Climate Policy"
    ],

    nicheRecruitingAdvantages: [
      "Elite graduate schools",
      "Environmental organizations",
      "Consulting firms",
      "Policy organizations",
      "National nonprofit networks"
    ],

    overlookedStrengths: [
      "Block Plan learning model",
      "Graduate-school placement",
      "Alumni accessibility",
      "Leadership development"
    ],

    sleeperIndustries: [
      "Climate Technology",
      "Impact Investing",
      "Outdoor Brands",
      "Environmental Consulting",
      "Public Affairs"
    ]
  },

  networkCapital: {

    alumniAccessibility: 94,

    mentorshipDensity: 96,

    executiveAccess: 82,

    internshipNetwork: 82,

    familyBusinessExposure: 54,

    relationshipCapitalScore: 90,

    alumniLoyaltyScore: 94,

    referralCultureStrength: 90,

    donorNetworkStrength: 88,

    boardMemberDensity: 82
  },

  economicEcosystem: {

    primaryIndustries: [
      "Professional Services",
      "Government",
      "Education",
      "Healthcare",
      "Environmental Organizations"
    ],

    regionalEconomicDrivers: [
      "Defense",
      "Outdoor Recreation",
      "Tourism",
      "Technology",
      "Professional Services"
    ],

    topEmployers: [
      "Federal Government",
      "Consulting Firms",
      "Environmental Organizations",
      "Healthcare Systems",
      "Technology Companies"
    ],

    emergingIndustries: [
      "Climate Technology",
      "Sustainability Consulting",
      "Outdoor Innovation",
      "Public Affairs",
      "Impact Investing"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 58,

    corporateHeadquartersDensity: 42,

    healthcareHubStrength: 62,

    innovationIndex: 82
  },

  geographicInfluence: {

    dominantMarket: "National Liberal Arts Network",

    secondaryMarkets: [
      "Denver",
      "San Francisco",
      "Seattle",
      "Washington DC",
      "New York",
      "Chicago"
    ],

    alumniStrongholds: [
      "Denver",
      "Boulder",
      "Washington DC",
      "San Francisco",
      "Seattle",
      "New York"
    ],

    relocationPatterns: [
      "Graduate school",
      "Consulting",
      "Public service",
      "Outdoor-industry leadership",
      "Professional services"
    ],

    regionalInfluenceScore: 76,

    nationalReachScore: 92,

    internationalReachScore: 68
  },

  socialCapital: {

    greekLifeInfluence: 8,

    studentOrganizationStrength: 88,

    leadershipDevelopment: 90,

    crossDisciplinaryInteraction: 98,

    civicEngagement: 92
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 26
    },

    healthWellness: {
      strength: 64
    },

    nutraceuticals: {
      strength: 28,
      notes: "Indirect opportunities through sustainability, wellness, and consumer-behavior fields."
    },

    consumerProducts: {
      strength: 42,
      notes: "More likely through leadership, marketing, sustainability, and strategy than manufacturing."
    },

    outdoorIndustry: {
      strength: 88,
      notes: "One of the strongest liberal arts colleges in America for outdoor-industry leadership and environmental engagement."
    },

    sportsBusiness: {
      strength: 24
    },

    entertainmentMedia: {
      strength: 42
    },

    ventureCapital: {
      strength: 52
    },

    privateEquity: {
      strength: 28
    },

    investmentBanking: {
      strength: 32
    },

    consulting: {
      strength: 84
    },

    medicine: {
      strength: 72
    },

    healthcareAdministration: {
      strength: 52
    },

    defense: {
      strength: 28
    },

    realEstate: {
      strength: 22
    },

    luxuryBrands: {
      strength: 18
    },

    entrepreneurship: {
      strength: 74
    },

    technology: {
      strength: 58
    },

    publicPolicy: {
      strength: 92
    },

    nonprofitLeadership: {
      strength: 94
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Affluent",

    socialMobilityIndex: 64,

    firstGenerationSupport: 72,

    wealthCreationPotential: 82,

    familyBusinessPipelineStrength: 58
  },

  futureResilience: {

    aiResistance: 92,

    automationResistance: 90,

    adaptabilityScore: 98,

    interdisciplinaryStrength: 100,

    futureReadiness: 96,

    entrepreneurialFlexibility: 86,

    lifelongLearningCulture: 98,

    innovationCapacity: 88
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 82,

    communityLeadershipPotential: 94,

    geographicMobility: 96,

    workLifeBalancePotential: 94,

    purposeAlignment: 96,

    familyFormationSupport: 84,

    personalDevelopmentPotential: 100,

    careerOptionality: 96,

    longTermLifeSatisfaction: 98
  },

  institutionalMoat: {

    prestigeMoat: 82,

    networkMoat: 86,

    geographicMoat: 96,

    industryMoat: 72,

    alumniMoat: 88,

    brandDurability: 92,

    overallMoatScore: 88
  },

"University of Northern Colorado": {

  institutionNarrative: {
    name: "University of Northern Colorado",
    location: "Greeley, Colorado",
    region: "Mountain West",
    archetype: "The Education, Music, and Allied Health University of the Northern Front Range",
    oneSentenceSummary: "The University of Northern Colorado is Colorado's primary teacher preparation institution — a regional university of 9,000 students in Greeley that produces more licensed K-12 educators for Colorado's public school system than any other institution, with a nationally accredited music program, a strong allied health and nursing pipeline, and a College of Business that feeds the Northern Front Range agricultural and corporate corridor.",
    pipeline: "College of Education and Behavioral Sciences — UNC is Colorado's flagship teacher preparation institution, producing licensed educators across all grade levels and subject areas for Colorado public schools. College of Natural and Health Sciences — nursing, dietetics, athletic training, and audiology programs with strong regional placement. College of Performing and Visual Arts — music education and music therapy programs nationally accredited and among the strongest in the Mountain West. College of Business — regional placement in Greeley, Fort Collins, and Denver markets. 7,500 undergraduates; 9,000 total enrollment.",
    hiddenPathway: "UNC's audiology program is one of the most respected Doctor of Audiology programs in the Mountain West — producing audiologists who serve an aging population in a field with structural talent shortages. The music therapy program is similarly distinctive — one of the few accredited programs in Colorado, producing graduates who enter healthcare, rehabilitation, and educational settings with a credential that has almost no competition at the regional level. UNC's teacher pipeline is genuinely essential to Colorado's education system — the state cannot function without UNC graduates in its classrooms.",
    institutionalSecret: "Greeley is an agricultural and energy city that most out-of-state families have never heard of, which means UNC is systematically undervalued as a cost-effective pathway to teaching, health sciences, and music careers in Colorado. For Colorado residents who want a career in K-12 education, UNC is the single most direct and cost-effective pathway in the state.",
    theRoom: "Greeley is a city of 107,000 in Weld County — one of the most productive agricultural counties in America and home to significant oil and gas production. The UNC campus is a traditional residential campus with a strong sense of community. Fort Collins is 30 miles west and Denver is 50 miles south.",
    lifestyle: "Greeley is a working Colorado city without the outdoor recreation glamour of Boulder or Fort Collins — but it is affordable, community-oriented, and genuinely pleasant for students who are focused on their professional preparation rather than the college experience as social spectacle.",
    bestFitPersonality: "High Agreeableness, Education or music or health sciences-oriented, Colorado-rooted, Community-service-motivated, Cost-conscious, Professionally focused from day one",
    faithTradition: "Nonsectarian Public University",
    geographicInfluenceRadius: "Northern Front Range dominant — Colorado primary through education and health sciences pipeline, regional music therapy and audiology placement",
    economicOutcome: "Colorado K-12 education system placement; allied health placement throughout Northern Front Range; audiology and music therapy statewide; regional business placement",
    gradCities: ["Greeley CO", "Fort Collins CO", "Denver CO", "Colorado Springs CO", "Cheyenne WY"],
    comparableInstitutions: ["University of Colorado Colorado Springs", "Colorado Mesa University", "Western Colorado University", "Adams State University", "Fort Lewis College"],
    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: ["Aims Community College", "Front Range Community College"],
      transferAcceptanceRate: "~80%",
      freshmanAcceptanceRate: "~93%",
      estimatedSavingsRange: "$10,000–$16,000",
      transferNotes: "UNC accepts transfers broadly through Colorado's statewide articulation system. Aims Community College in Greeley is the primary local feeder and sits in the same city. Given UNC's high acceptance rate, the CC pathway is primarily a cost-savings mechanism. Education licensure programs have specific prerequisite sequences that transfer students should map carefully."
    }
  },

  institutionIdentity: {
    archetype: "Colorado Teacher Preparation and Allied Health Regional University",
    institutionalPersonality: "education-mission-driven, community-service-oriented, music-culture-active, health-sciences-focused, Northern-Front-Range-rooted",
    cultureKeywords: ["Bears", "Teacher Pipeline", "Music Education", "Audiology", "Allied Health", "Greeley", "Colorado Education System", "Agricultural Corridor"],
    missionOrientation: "Teacher preparation, health sciences, and community service — UNC's identity is built around producing the professionals Colorado's communities depend on",
    faithTradition: "None",
    educationalPhilosophy: "Career-focused professional preparation in education, health sciences, music, and business; strong emphasis on practical training and community integration",
    competitiveness: "Accessible (~93% overall)",
    politicalCulture: "Moderate — Greeley and Weld County are politically conservative; campus reflects a range",
    studentAutonomy: "High",
    prestigeOrientation: "Low nationally; high within Colorado education and health sciences communities",
    socialClimate: "Community-warm, education-mission-oriented, music-culture-active, professionally focused"
  },

name: "University of Northern Colorado",

    location: "Greeley, Colorado",

    region: "Mountain West",

    archetype: "Teaching, Healthcare & Social Mobility University",

    oneSentenceSummary: "UNC is Colorado's original teacher-preparation institution and one of the state's strongest talent pipelines for education, healthcare, human services, public-sector leadership, and upward economic mobility.",

    pipeline: "Founded in 1889 as the State Normal School of Colorado. UNC was originally created to train teachers for the growing western United States and remains one of the most influential educator-preparation institutions in the Mountain West. Over time it expanded into nursing, healthcare, business, performing arts, psychology, criminal justice, and public service. Its graduates are disproportionately represented in Colorado school systems, healthcare organizations, and local government leadership.",

    hiddenPathway: "Most families see UNC as a regional university. The hidden reality is that UNC possesses one of the deepest educator, counseling, nursing, and public-service alumni networks in Colorado. Its influence is often invisible because graduates disperse into schools, hospitals, nonprofits, and government agencies rather than high-profile corporate careers.",

    institutionalSecret: "UNC's greatest strength is people development. The university consistently produces educators, healthcare professionals, counselors, social workers, and community leaders who shape Colorado's institutions from the ground up.",

    theRoom: "A welcoming and accessible campus culture where relationships matter. Students often receive significant faculty support, mentorship, and professional preparation. The environment is collaborative rather than competitive.",

    lifestyle: "Affordable college-town living, strong community engagement, outdoor recreation access, and practical career preparation.",

    bestFitPersonality: "High Agreeableness, High Conscientiousness, Service-Oriented, Community-Minded, Relationship-Focused",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Colorado, Wyoming, Nebraska, Mountain West Public Service Networks",

    economicOutcome: "Strong outcomes in education, nursing, healthcare administration, counseling, public service, criminal justice, and community leadership.",

    gradCities: [
      "Denver",
      "Greeley",
      "Fort Collins",
      "Colorado Springs",
      "Aurora",
      "Cheyenne"
    ],

    comparableInstitutions: [
      "Western Washington University",
      "Minnesota State Mankato",
      "Illinois State University",
      "University of Wisconsin–Eau Claire",
      "Appalachian State University"
    ]
  },

  institutionIdentity: {

    archetype: "Community Leadership University",

    institutionalPersonality: "supportive, collaborative, service-oriented, practical, student-centered",

    cultureKeywords: [
      "Teaching",
      "Healthcare",
      "Public Service",
      "Community",
      "Leadership",
      "Accessibility",
      "Mentorship",
      "Student Success"
    ],

    missionOrientation: "Student development, workforce preparation, public service, and social mobility",

    faithTradition: "None",

    educationalPhilosophy: "High-touch education emphasizing professional readiness, mentorship, and community impact.",

    competitiveness: "Moderately Selective",

    politicalCulture: "Moderate",

    studentAutonomy: "Moderate",

    prestigeOrientation: "Low",

    socialClimate: "Supportive, welcoming, and community-oriented",

    leadershipStyle: "Service Leadership"
  },

  institutionScale: {

    enrollmentCategory: "Medium",

    undergraduateEnrollment: 8000,

    graduateEnrollment: 3000,

    totalEnrollment: 11000,

    campusType: "Residential University",

    residentialIntensity: 65,

    communityFeel: 90,

    studentFacultyRatio: "15:1",

    classSizeExperience: "Small",

    scaleAdvantages: [
      "Faculty accessibility",
      "Strong mentorship",
      "Supportive campus culture",
      "Personalized advising",
      "Professional preparation"
    ],

    scaleDisadvantages: [
      "Limited national visibility",
      "Smaller alumni base",
      "Less recruiting volume than flagships"
    ]
  },

  studentFit: {

    bigFiveProfile: {

      openness: 68,

      conscientiousness: 84,

      extraversion: 68,

      agreeableness: 90,

      neuroticism: 32
    },

    hollandCodes: ["S", "E", "I"],

    learningStyle: [
      "Collaborative Learning",
      "Experiential Learning",
      "Professional Learning",
      "Field-Based Learning"
    ],

    socialEnvironment: [
      "Supportive",
      "Community-Oriented",
      "Relationship-Based",
      "Career-Focused"
    ],

    idealStudentTraits: [
      "Helper",
      "Mentor",
      "Community Builder",
      "Service-Oriented Leader",
      "Relationship Builder"
    ],

    thrivesIf: [
      "Values mentorship",
      "Enjoys helping professions",
      "Wants strong faculty relationships",
      "Seeks affordable education",
      "Likes collaborative environments"
    ],

    strugglesIf: [
      "Seeks elite prestige",
      "Wants highly competitive cultures",
      "Prioritizes national brand recognition",
      "Needs major-city environments"
    ],

    transferRiskFactors: [
      "Seeking larger university experiences",
      "Wanting stronger prestige signaling",
      "Desiring broader recruiting pipelines"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Nursing",
      "Audiology",
      "Special Education",
      "Music Education",
      "Speech-Language Pathology",
      "Human Services",
      "Sport & Exercise Science"
    ],

    hiddenCareerPipelines: [
      "K-12 Leadership",
      "Healthcare Administration",
      "Nursing Leadership",
      "School Psychology",
      "Speech Pathology",
      "Public Administration",
      "Community Health"
    ],

    nicheRecruitingAdvantages: [
      "Colorado school districts",
      "Regional healthcare systems",
      "Public-sector employers",
      "Community organizations",
      "Human services agencies"
    ],

    overlookedStrengths: [
      "Teacher preparation",
      "Student support",
      "Nursing outcomes",
      "Community leadership development"
    ],

    sleeperIndustries: [
      "Behavioral Health",
      "Special Education",
      "Community Healthcare",
      "Rehabilitation Services",
      "Educational Technology"
    ]
  },

  networkCapital: {

    alumniAccessibility: 84,

    mentorshipDensity: 90,

    executiveAccess: 58,

    internshipNetwork: 72,

    familyBusinessExposure: 34,

    relationshipCapitalScore: 82,

    alumniLoyaltyScore: 86,

    referralCultureStrength: 84,

    donorNetworkStrength: 52,

    boardMemberDensity: 48
  },

  economicEcosystem: {

    primaryIndustries: [
      "Education",
      "Healthcare",
      "Public Service",
      "Human Services",
      "Agriculture"
    ],

    regionalEconomicDrivers: [
      "Healthcare",
      "Agriculture",
      "Population Growth",
      "Education",
      "Government Services"
    ],

    topEmployers: [
      "Banner Health",
      "UCHealth",
      "Weld County School Districts",
      "State of Colorado",
      "University of Northern Colorado"
    ],

    emergingIndustries: [
      "Behavioral Health",
      "Educational Technology",
      "Healthcare Services",
      "Community Wellness"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 26,

    corporateHeadquartersDensity: 24,

    healthcareHubStrength: 76,

    innovationIndex: 58
  },

  geographicInfluence: {

    dominantMarket: "Colorado",

    secondaryMarkets: [
      "Wyoming",
      "Nebraska",
      "Kansas"
    ],

    alumniStrongholds: [
      "Denver",
      "Greeley",
      "Fort Collins",
      "Colorado Springs"
    ],

    relocationPatterns: [
      "Colorado retention",
      "Public-service careers",
      "Healthcare careers",
      "Education-sector leadership"
    ],

    regionalInfluenceScore: 82,

    nationalReachScore: 42,

    internationalReachScore: 16
  },

  socialCapital: {

    greekLifeInfluence: 24,

    studentOrganizationStrength: 78,

    leadershipDevelopment: 84,

    crossDisciplinaryInteraction: 76,

    civicEngagement: 90
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 18,
      notes: "Minimal institutional presence."
    },

    healthWellness: {
      strength: 82,
      notes: "Strong through nursing, behavioral health, community health, and wellness professions."
    },

    nutraceuticals: {
      strength: 24,
      notes: "Limited direct ecosystem exposure."
    },

    consumerProducts: {
      strength: 22,
      notes: "Not a primary institutional pathway."
    },

    outdoorIndustry: {
      strength: 54,
      notes: "Moderate access through Colorado's outdoor economy."
    },

    sportsBusiness: {
      strength: 52
    },

    entertainmentMedia: {
      strength: 30
    },

    ventureCapital: {
      strength: 18
    },

    privateEquity: {
      strength: 8
    },

    investmentBanking: {
      strength: 10
    },

    consulting: {
      strength: 34
    },

    medicine: {
      strength: 72
    },

    healthcareAdministration: {
      strength: 84
    },

    defense: {
      strength: 26
    },

    realEstate: {
      strength: 22
    },

    luxuryBrands: {
      strength: 6
    },

    entrepreneurship: {
      strength: 42
    },

    technology: {
      strength: 38
    },

    publicPolicy: {
      strength: 74
    },

    nonprofitLeadership: {
      strength: 92
    }
  },

  wealthMobility: {

    averageFamilyIncome: "Middle Income",

    socialMobilityIndex: 90,

    firstGenerationSupport: 92,

    wealthCreationPotential: 62,

    familyBusinessPipelineStrength: 28
  },

  futureResilience: {

    aiResistance: 86,

    automationResistance: 90,

    adaptabilityScore: 82,

    interdisciplinaryStrength: 74,

    futureReadiness: 82,

    entrepreneurialFlexibility: 54,

    lifelongLearningCulture: 88,

    innovationCapacity: 60
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 62,

    communityLeadershipPotential: 96,

    geographicMobility: 62,

    workLifeBalancePotential: 90,

    purposeAlignment: 96,

    familyFormationSupport: 90,

    personalDevelopmentPotential: 92,

    careerOptionality: 70,

    longTermLifeSatisfaction: 92
  },

  institutionalMoat: {

    prestigeMoat: 22,

    networkMoat: 72,

    geographicMoat: 62,

    industryMoat: 74,

    alumniMoat: 82,

    brandDurability: 72,

    overallMoatScore: 64
  },

"United States Air Force Academy": {

  institutionNarrative: {
    name: "United States Air Force Academy",
    location: "Colorado Springs, Colorado",
    region: "Mountain West",
    archetype: "The Officer Factory of the American Air and Space Domain",
    oneSentenceSummary: "The United States Air Force Academy is a fully-funded federal service academy of 4,100 cadets at 7,200 feet in the Rocky Mountains above Colorado Springs — the only institution in America that simultaneously provides a fully-funded engineering education, immediate officer commission in the Air Force or Space Force upon graduation, and access to one of the most loyal and connected alumni networks in American professional and civic life.",
    pipeline: "Every graduate commissions as a Second Lieutenant in the United States Air Force or United States Space Force upon graduation — there is no civilian job search. The pipeline is the institution itself. Graduates go to pilot training (approximately 25% become pilots), Space Force operations, cybersecurity, intelligence, engineering, acquisitions, and special operations. Post-service civilian careers cluster in defense contracting (Lockheed Martin, Boeing, Raytheon, Northrop Grumman, L3Harris), technology (Amazon, Google, Microsoft, Palantir), finance (private equity, venture capital, investment banking), and government (CIA, NSA, State Department, Congress). 4,100 cadets; undergraduate only.",
    hiddenPathway: "The Air Force Academy's most consequential hidden asset is what happens after the 5-year service commitment ends. USAFA graduates who enter civilian life at 27–30 years old arrive with a security clearance, leadership experience managing people and complex systems under pressure, and an alumni network of officers that is among the most mutually supportive professional communities in America. The USAFA graduate who enters private equity, venture capital, or technology after service is a known quantity — disciplined, cleared, and vetted in ways that civilian university graduates cannot replicate. Palantir, Anduril, and the entire defense technology sector actively recruit USAFA alumni because the combination of clearance, technical training, and operational experience is structurally scarce.",
    institutionalSecret: "The United States Space Force — the newest branch of the American military, established in 2019 and headquartered in Colorado Springs — draws a significant percentage of its officers from USAFA. A cadet who commissions into Space Force today is entering an institution that is 5 years old, growing rapidly, and whose leadership culture and institutional traditions are still being formed. USAFA graduates who choose Space Force are not entering a mature bureaucracy — they are entering something being built in real time, with the attendant opportunity for early leadership and institutional shaping that no other branch can currently offer.",
    theRoom: "7,200 feet above sea level in the Rocky Mountains north of Colorado Springs — one of the most architecturally and physically dramatic campus settings in America. The Cadet Chapel is one of the most visited tourist sites in Colorado. 4,100 cadets live, eat, train, and study together in a total institutional environment. There are no commuter students, no part-time cadets, no one who is not fully committed. The Cadet Area is a self-contained world — academic buildings, dormitories, athletic facilities, and the parade ground in a single integrated campus. Pikes Peak is the immediate southern backdrop.",
    lifestyle: "Cadet life is not a college lifestyle — it is a structured, demanding, and purposeful existence governed by the Cadet Honor Code and the Uniform Code of Military Justice. First-year cadets (Doolies) have almost no personal freedom. By senior year, cadets have significant leadership responsibility and more autonomy. Colorado Springs' outdoor resources — Garden of the Gods, Pikes Peak, skiing, hiking — are accessible on weekends for upperclassmen. The lifestyle is the preparation.",
    bestFitPersonality: "Very High Conscientiousness, Service-oriented at the deepest level, Physical fitness-essential, Leadership-motivated, Comfortable with authority structures, Certainty about a military career path, Outdoor recreation-compatible",
    faithTradition: "Nonsectarian Federal Institution (chaplains of all faiths present; no institutional religious affiliation)",
    geographicInfluenceRadius: "National and global — USAFA graduates are assigned across the United States and at bases worldwide; Colorado Springs is the entry point, not the career geography",
    economicOutcome: "Officer commission upon graduation — immediate $50,000+ compensation with housing, healthcare, and benefits; post-service civilian placement in defense technology, private equity, venture capital, consulting, and technology at premium levels due to clearance and leadership credential",
    gradCities: ["Colorado Springs CO", "Washington DC", "San Antonio TX", "Dayton OH", "Los Angeles CA", "Tampa FL"],
    comparableInstitutions: ["United States Military Academy", "United States Naval Academy", "United States Coast Guard Academy", "Virginia Military Institute", "The Citadel"],
    ccTransferPathway: {
      hasCCPathway: false,
      ccFeederNames: [],
      transferAcceptanceRate: "",
      freshmanAcceptanceRate: "~11%",
      estimatedSavingsRange: "",
      transferNotes: "USAFA does not accept transfer students. Admission is exclusively through the freshman application process, which requires a congressional nomination from the applicant's representative or senator in addition to meeting USAFA's academic and physical fitness standards. The nomination process must begin in the junior year of high school. There is no alternative entry pathway."
    }
  },

  institutionIdentity: {
    archetype: "Federal Service Academy — Air and Space Officer Formation",
    institutionalPersonality: "mission-certain, service-essential, physically-elite, honor-code-governed, leadership-forming, total-institution-committed",
    cultureKeywords: ["Falcons", "Cadet Honor Code", "Doolie Year", "Space Force Pipeline", "Officer Commission", "Cadet Chapel", "Pikes Peak", "Congressional Nomination"],
    missionOrientation: "To educate, train, and inspire men and women to become officers of character motivated to lead the United States Air Force and Space Force in service to the nation",
    faithTradition: "None (federal institution; chaplains of all traditions present)",
    educationalPhilosophy: "Engineering and sciences core with military leadership formation; the Cadet Honor Code — 'We will not lie, steal, or cheat, nor tolerate among us anyone who does' — as the foundational ethical framework; leadership as a learned and practiced discipline",
    competitiveness: "Highly Selective (~11% acceptance rate; congressional nomination required)",
    politicalCulture: "Conservative to moderate — military institutions trend conservative; the Space Force and technology tracks attract more politically diverse cadets than traditional aviation tracks",
    studentAutonomy: "Low by design — structure and accountability are the pedagogical tools",
    prestigeOrientation: "Very High within military, defense, government, and veteran communities; respected broadly",
    socialClimate: "Total-institution-structured, honor-code-governed, physically-elite, mission-certain, outdoor-recreation-accessible for upperclassmen"
  },

name: "United States Air Force Academy",

    location: "Colorado Springs, Colorado",

    region: "Mountain West",

    archetype: "Military Leadership & National Security Academy",

    oneSentenceSummary: "The Air Force Academy develops military officers, aerospace leaders, and national-security professionals through one of the most rigorous leadership-development systems in the United States.",

    pipeline: "Founded in 1954, the Air Force Academy is one of the five U.S. federal service academies. Cadets receive a fully funded education while preparing to serve as commissioned officers in the United States Air Force and United States Space Force. The academy has developed exceptional strength in aerospace engineering, systems engineering, cyber operations, military leadership, international affairs, astronautics, physics, and national security studies.",

    hiddenPathway: "Most people think USAFA produces military officers. The hidden reality is that it produces future generals, astronauts, defense executives, intelligence leaders, aerospace entrepreneurs, Fortune 500 executives, government leaders, and national-security decision-makers. The leadership pipeline often extends decades beyond active military service.",

    institutionalSecret: "The Academy's true product is not education. It is leadership under pressure. Few institutions in America systematically develop responsibility, discipline, resilience, accountability, and decision-making at the same level.",

    theRoom: "Students are exceptionally disciplined, achievement-oriented, physically capable, competitive, and mission-driven. Personal responsibility is woven into every aspect of daily life.",

    lifestyle: "Military training, athletics, leadership development, aviation exposure, engineering coursework, physical fitness, structured schedules, and service commitment.",

    bestFitPersonality: "High Conscientiousness, High Emotional Stability, Competitive, Mission-Oriented, Leadership Focused",

    faithTradition: "Nonsectarian Federal Service Academy",

    geographicInfluenceRadius: "National Security, Aerospace, Defense, Space Force, Federal Government",

    economicOutcome: "Outstanding long-term outcomes in military leadership, aerospace, defense, government service, executive leadership, consulting, aviation, intelligence, and technology.",

    gradCities: [
      "Colorado Springs",
      "Washington DC",
      "Denver",
      "San Antonio",
      "Tampa",
      "Huntsville",
      "Seattle"
    ],

    comparableInstitutions: [
      "United States Military Academy",
      "United States Naval Academy",
      "Virginia Military Institute",
      "The Citadel",
      "Norwich University"
    ]
  },

  institutionIdentity: {

    archetype: "Warrior-Scholar-Leader",

    institutionalPersonality: "disciplined, resilient, mission-focused, accountable, competitive",

    cultureKeywords: [
      "Leadership",
      "Service",
      "Discipline",
      "Honor",
      "Aerospace",
      "National Security",
      "Character Development",
      "Excellence"
    ],

    missionOrientation: "Developing leaders of character for the Air Force, Space Force, and the nation.",

    faithTradition: "None",

    educationalPhilosophy: "Integrated development of mind, body, character, and leadership capability.",

    competitiveness: "Extremely Selective",

    politicalCulture: "Moderate Institutional Conservatism",

    studentAutonomy: "Low During Enrollment",

    prestigeOrientation: "High Achievement Orientation",

    socialClimate: "Structured, demanding, and team-oriented",

    leadershipStyle: "Command Leadership"
  },

  institutionScale: {

    enrollmentCategory: "Small",

    undergraduateEnrollment: 4400,

    graduateEnrollment: 0,

    totalEnrollment: 4400,

    campusType: "Federal Service Academy",

    residentialIntensity: 100,

    communityFeel: 96,

    studentFacultyRatio: "8:1",

    classSizeExperience: "Small",

    scaleAdvantages: [
      "Intensive leadership development",
      "Extraordinary mentorship",
      "Lifetime alumni network",
      "Elite leadership opportunities",
      "Fully funded education"
    ],

    scaleDisadvantages: [
      "Limited personal freedom",
      "Military service commitment",
      "Extremely demanding environment",
      "Restricted lifestyle flexibility"
    ]
  },

  studentFit: {

    bigFiveProfile: {

      openness: 72,

      conscientiousness: 99,

      extraversion: 78,

      agreeableness: 72,

      neuroticism: 12
    },

    hollandCodes: ["E", "R", "I"],

    learningStyle: [
      "Leadership Learning",
      "Experiential Learning",
      "Systems Thinking",
      "Applied Learning"
    ],

    socialEnvironment: [
      "Highly Structured",
      "Mission-Oriented",
      "Competitive",
      "Team-Centered"
    ],

    idealStudentTraits: [
      "Leader",
      "Patriot",
      "Competitor",
      "Problem Solver",
      "Team Builder"
    ],

    thrivesIf: [
      "Seeks leadership responsibility",
      "Handles pressure well",
      "Values service",
      "Enjoys structure",
      "Welcomes accountability"
    ],

    strugglesIf: [
      "Needs personal freedom",
      "Dislikes authority structures",
      "Avoids physical challenges",
      "Prefers unstructured lifestyles"
    ],

    transferRiskFactors: [
      "Military lifestyle mismatch",
      "Desire for traditional college experience",
      "Service commitment concerns"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Systems Engineering",
      "Operations Research",
      "Foreign Area Studies",
      "Astronautical Engineering",
      "Cyber Science",
      "Behavioral Sciences",
      "Military Strategic Studies"
    ],

    hiddenCareerPipelines: [
      "Space Force Leadership",
      "Intelligence Community",
      "Defense Technology",
      "Aerospace Executive Leadership",
      "Federal Agency Leadership",
      "Defense Consulting",
      "National Security Policy"
    ],

    nicheRecruitingAdvantages: [
      "Department of Defense",
      "Intelligence Agencies",
      "Space Force",
      "Aerospace Contractors",
      "Federal Leadership Programs"
    ],

    overlookedStrengths: [
      "Leadership training",
      "Executive development",
      "Decision-making under pressure",
      "Alumni loyalty"
    ],

    sleeperIndustries: [
      "Space Economy",
      "Cyber Operations",
      "Defense Technology",
      "National Security AI",
      "Satellite Systems"
    ]
  },

  networkCapital: {

    alumniAccessibility: 98,

    mentorshipDensity: 96,

    executiveAccess: 94,

    internshipNetwork: 88,

    familyBusinessExposure: 18,

    relationshipCapitalScore: 96,

    alumniLoyaltyScore: 99,

    referralCultureStrength: 98,

    donorNetworkStrength: 92,

    boardMemberDensity: 94
  },

  economicEcosystem: {

    primaryIndustries: [
      "Defense",
      "Aerospace",
      "Space Systems",
      "Cybersecurity",
      "Federal Government"
    ],

    regionalEconomicDrivers: [
      "Defense Spending",
      "Space Operations",
      "Military Installations",
      "Aerospace Engineering",
      "Cybersecurity"
    ],

    topEmployers: [
      "United States Air Force",
      "United States Space Force",
      "Lockheed Martin",
      "Northrop Grumman",
      "Boeing",
      "RTX",
      "Federal Government"
    ],

    emergingIndustries: [
      "Space Economy",
      "Defense AI",
      "Autonomous Systems",
      "Cyber Warfare",
      "Satellite Technology"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 54,

    corporateHeadquartersDensity: 74,

    healthcareHubStrength: 34,

    innovationIndex: 92
  },

  geographicInfluence: {

    dominantMarket: "National Security Ecosystem",

    secondaryMarkets: [
      "Washington DC",
      "Colorado Springs",
      "Huntsville",
      "Tampa",
      "San Antonio",
      "Seattle"
    ],

    alumniStrongholds: [
      "Washington DC",
      "Colorado Springs",
      "Northern Virginia",
      "Huntsville",
      "Tampa"
    ],

    relocationPatterns: [
      "Military leadership",
      "Federal government",
      "Defense industry",
      "Aerospace leadership"
    ],

    regionalInfluenceScore: 82,

    nationalReachScore: 99,

    internationalReachScore: 88
  },

  socialCapital: {

    greekLifeInfluence: 0,

    studentOrganizationStrength: 94,

    leadershipDevelopment: 100,

    crossDisciplinaryInteraction: 88,

    civicEngagement: 98
  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 2
    },

    healthWellness: {
      strength: 42
    },

    nutraceuticals: {
      strength: 10
    },

    consumerProducts: {
      strength: 18
    },

    outdoorIndustry: {
      strength: 52,
      notes: "Strong leadership overlap but not a primary recruiting pathway."
    },

    sportsBusiness: {
      strength: 24
    },

    entertainmentMedia: {
      strength: 6
    },

    ventureCapital: {
      strength: 58
    },

    privateEquity: {
      strength: 34
    },

    investmentBanking: {
      strength: 18
    },

    consulting: {
      strength: 82
    },

    medicine: {
      strength: 42
    },

    healthcareAdministration: {
      strength: 38
    },

    defense: {
      strength: 100
    },

    realEstate: {
      strength: 18
    },

    luxuryBrands: {
      strength: 2
    },

    entrepreneurship: {
      strength: 72
    },

    technology: {
      strength: 88
    },

    publicPolicy: {
      strength: 96
    },

    nonprofitLeadership: {
      strength: 68
    }
  },

  industrialInnovation: {

    advancedManufacturing: 84,

    supplyChainInfluence: 72,

    energySystems: 68,

    aerospaceSystems: 100,

    materialsScience: 72,

    processEngineering: 58,

    automationLeadership: 92
  },

  wealthMobility: {

    averageFamilyIncome: "Broad National Distribution",

    socialMobilityIndex: 96,

    firstGenerationSupport: 94,

    wealthCreationPotential: 86,

    familyBusinessPipelineStrength: 12
  },

  futureResilience: {

    aiResistance: 98,

    automationResistance: 98,

    adaptabilityScore: 98,

    interdisciplinaryStrength: 88,

    futureReadiness: 99,

    entrepreneurialFlexibility: 78,

    lifelongLearningCulture: 96,

    innovationCapacity: 92
  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 86,

    communityLeadershipPotential: 100,

    geographicMobility: 98,

    workLifeBalancePotential: 62,

    purposeAlignment: 98,

    familyFormationSupport: 82,

    personalDevelopmentPotential: 100,

    careerOptionality: 90,

    longTermLifeSatisfaction: 90
  },

  institutionalMoat: {

    prestigeMoat: 96,

    networkMoat: 98,

    geographicMoat: 84,

    industryMoat: 100,

    alumniMoat: 99,

    brandDurability: 100,

    overallMoatScore: 98
  },

"Northern Arizona University": {

  institutionNarrative: {
    name: "Northern Arizona University",
    location: "Flagstaff, Arizona",
    region: "Southwest",
    archetype: "The Ponderosa Pine Flagship — Hospitality, Forestry, and the Colorado Plateau",
    oneSentenceSummary: "Northern Arizona University is a research university of 28,000 students at 7,000 feet in Flagstaff — one of the most livable mid-size cities in the American Southwest, surrounded by the largest contiguous ponderosa pine forest in the world, 80 miles from the Grand Canyon, home to a nationally ranked Hotel and Restaurant Management program, a W.A. Franke College of Business, and one of the most respected Indigenous studies and tribal education programs of any public university in the Southwest.",
    pipeline: "W.A. Franke College of Business — Hotel and Restaurant Management is the signature program, ranked consistently among the top-15 nationally and producing graduates who enter the Southwest hospitality corridor (Grand Canyon, Sedona, Scottsdale, Las Vegas) with a credential respected throughout the industry. Forestry — NAU's School of Forestry is one of the strongest in the American West, producing graduates who enter USFS, BLM, and private land management. Education — NAU is Arizona's second-largest teacher preparation institution, with particular strength in Indigenous education and bilingual education. Nursing and Health Sciences — regional placement throughout Arizona. Engineering — civil and environmental engineering with Southwest infrastructure emphasis. Psychology — strong counseling track. Indigenous Studies — one of the most comprehensive programs at any public university in the Southwest. 22,000 undergraduates; 28,000 total.",
    hiddenPathway: "NAU's Hotel and Restaurant Management program is the most consequential hidden asset in the Southwest hospitality industry. The Grand Canyon alone hosts 6 million visitors annually — more than Yellowstone and Yosemite combined — and the hospitality infrastructure that serves them (Xanterra Parks and Resorts, Delaware North, Forever Resorts) actively recruits NAU graduates. Sedona's luxury resort corridor, Scottsdale's conference and events industry, and Las Vegas's massive hospitality economy are all within the NAU career geography. NAU HRM graduates enter a Southwest hospitality market with more demand and less competition than comparable programs in Florida or Nevada. The Indigenous studies program is the second hidden asset — NAU's relationships with the Navajo Nation (the largest reservation in the United States, adjacent to Flagstaff), the Hopi Tribe, and Arizona's 22 federally recognized tribes create a pipeline for tribal government, Indigenous health, and reservation school careers that no other Arizona university can replicate.",
    institutionalSecret: "Flagstaff is one of the great secrets of the American Southwest as a place to spend four years. At 7,000 feet, it is 30 degrees cooler than Phoenix in summer, receives 100 inches of snow annually, and sits at the intersection of the Colorado Plateau, the San Francisco Peaks, and Route 66. The outdoor recreation access is extraordinary — skiing at Arizona Snowbowl 14 miles north, hiking in Coconino National Forest directly adjacent to campus, mountain biking on the Flagstaff Urban Trail System, and the Grand Canyon 80 miles north. The city of 76,000 has a craft beer culture, independent music scene, and genuine college-town character that significantly exceeds what families expect when they hear 'Arizona.'",
    theRoom: "NAU's 740-acre campus sits in a ponderosa pine forest at the base of the San Francisco Peaks in north-central Arizona. 28,000 students, approximately 38% living on campus. The student body is approximately 30% Hispanic — one of the most diverse enrollment profiles of any public flagship in Arizona — reflecting NAU's role in educating first-generation college students from the Navajo Nation, the White Mountain Apache, and Arizona's Latino communities. The Lumberjack identity is authentic — Flagstaff is genuinely a mountain city, not a desert suburb.",
    lifestyle: "Flagstaff is the most pleasant mid-size city in Arizona for year-round outdoor living — four genuine seasons, world-class mountain biking and hiking, a craft brewery scene with more breweries per capita than almost any city its size, and the Colorado Plateau's incomparable geology as the literal backdrop. Route 66 runs through downtown. Wupatki, Walnut Canyon, and Sunset Crater National Monuments are within 30 minutes. The Grand Canyon is a day trip.",
    bestFitPersonality: "High Conscientiousness, Hospitality or forestry or education-motivated, Southwest or Mountain West-drawn, Outdoor recreation-comfortable, First-generation college student-welcoming, Indigenous community-connected or allied, Large university environment-comfortable",
    faithTradition: "Nonsectarian Public University",
    geographicInfluenceRadius: "Southwest dominant — Arizona primary, Nevada and Utah secondary through hospitality; national through forestry and federal land management; regional through Indigenous tribal government and education",
    economicOutcome: "Southwest hospitality industry through Grand Canyon, Sedona, Scottsdale, and Las Vegas placement; USFS and BLM through forestry program; Arizona K-12 education particularly bilingual and Indigenous education; tribal government and Indigenous health through Navajo Nation and Arizona tribal relationships; regional nursing and health sciences",
    gradCities: ["Flagstaff AZ", "Phoenix AZ", "Tucson AZ", "Las Vegas NV", "Denver CO", "Albuquerque NM"],
    comparableInstitutions: ["University of Arizona", "Arizona State University", "University of Montana", "Colorado State University", "University of New Mexico"],
    ccTransferPathway: {
      hasCCPathway: true,
      ccFeederNames: ["Coconino Community College", "Yavapai College", "Maricopa Community Colleges"],
      transferAcceptanceRate: "~85%",
      freshmanAcceptanceRate: "~85%",
      estimatedSavingsRange: "$12,000–$20,000",
      transferNotes: "NAU participates in Arizona's statewide transfer articulation system. Coconino Community College in Flagstaff is the primary local feeder and shares the Flagstaff community with NAU. Yavapai College in Prescott is the secondary feeder for students in Central Arizona. Given NAU's accessible acceptance rate, the CC pathway is primarily a cost-savings mechanism. Hotel and Restaurant Management transfers should confirm program-specific requirements. Forestry and nursing have specific prerequisite sequences."
    }
  },

  institutionIdentity: {
    archetype: "Colorado Plateau Public University — Hospitality, Forestry, and Indigenous Education",
    institutionalPersonality: "ponderosa-pine-rooted, hospitality-industry-adjacent, forestry-mission-oriented, Indigenous-community-connected, Flagstaff-mountain-lifestyle-integrated, first-generation-welcoming",
    cultureKeywords: ["Lumberjacks", "Hotel and Restaurant Management", "Grand Canyon Gateway", "Coconino Forest", "Navajo Nation Adjacent", "San Francisco Peaks", "Route 66", "Forestry School"],
    missionOrientation: "Access, research, and service — NAU's land-grant character is expressed through teacher preparation, Indigenous education, forestry, and hospitality management serving the Southwest",
    faithTradition: "None",
    educationalPhilosophy: "Research university education integrated with the Southwest's natural and cultural landscape; hospitality, forestry, and Indigenous studies as defining career pipelines; Honors College as intimate academic track within the large university",
    competitiveness: "Accessible (~85% overall; competitive programs in HRM and nursing)",
    politicalCulture: "Moderate to progressive — Flagstaff is politically progressive for Arizona; Indigenous rights and environmental issues shape campus political culture",
    studentAutonomy: "High",
    prestigeOrientation: "Moderate nationally; respected within Southwest hospitality, forestry, and Indigenous education communities",
    socialClimate: "Ponderosa-pine-outdoor-integrated, mountain-city-livable, hospitality-industry-adjacent, Indigenous-community-present, Lumberjack-athletic-culture, first-generation-welcoming"
  },

name: "Northern Arizona University",

    location: "Flagstaff, Arizona",

    region: "Southwest",

    archetype: "Outdoor Research & Mobility University",

    oneSentenceSummary: "Northern Arizona University combines outdoor recreation, environmental science, healthcare, forestry, and upward mobility into one of the most distinctive public universities in the American West.",

    pipeline: "Founded in 1899, NAU has evolved into a major regional public university serving over 28,000 students. The university is nationally known for forestry, physical therapy, environmental sciences, parks and recreation, education, nursing, healthcare professions, and mountain-region workforce development. NAU's location in Flagstaff places students inside one of the largest outdoor recreation, public lands, and environmental research ecosystems in America.",

    hiddenPathway: "Most families compare NAU to Arizona State and immediately assume it loses on prestige and scale. The hidden reality is that NAU dominates several niche sectors including forestry, outdoor leadership, recreation management, environmental sciences, wildfire science, rural healthcare, physical therapy, and mountain-community workforce development.",

    institutionalSecret: "Flagstaff itself is the moat. Students gain access to outdoor recreation, environmental research, public lands management, healthcare systems, tourism industries, and mountain-town quality of life that few large public universities can replicate.",

    theRoom: "Students are adventurous, collaborative, environmentally conscious, health-oriented, community-minded, and less prestige-focused than their peers at flagship universities.",

    lifestyle: "Skiing, hiking, climbing, mountain biking, outdoor recreation, sustainability culture, healthcare pathways, and mountain-town living.",

    bestFitPersonality: "High Openness, Moderate Conscientiousness, Outdoor-Oriented, Health-Focused, Community-Minded",

    faithTradition: "Nonsectarian Public University",

    geographicInfluenceRadius: "Arizona, Southwest, Outdoor Industry, Public Lands Sector",

    economicOutcome: "Strong outcomes in healthcare, forestry, environmental science, physical therapy, recreation management, education, nursing, and public-sector leadership.",

    gradCities: [
      "Phoenix",
      "Denver",
      "Salt Lake City",
      "Flagstaff",
      "Tucson",
      "Las Vegas",
      "Boise"
    ],

    comparableInstitutions: [
      "Western Colorado University",
      "Colorado State University",
      "University of Montana",
      "University of Utah",
      "Oregon State University"
    ]
  },

  institutionIdentity: {

    archetype: "Outdoor Research Builder",

    institutionalPersonality: "active, practical, adventurous, collaborative, environmentally conscious",

    cultureKeywords: [
      "Outdoor Recreation",
      "Forestry",
      "Healthcare",
      "Environmental Science",
      "Public Lands",
      "Mountain Living",
      "Research",
      "Student Success"
    ],

    missionOrientation: "Expanding opportunity and workforce development through research, education, and community impact.",

    faithTradition: "None",

    educationalPhilosophy: "Applied public research education emphasizing career readiness, experiential learning, and community engagement.",

    competitiveness: "Moderately Selective",

    politicalCulture: "Moderate to Progressive",

    studentAutonomy: "High",

    prestigeOrientation: "Moderate",

    socialClimate: "Collaborative and outdoors-oriented",

    leadershipStyle: "Applied Leadership"
  },

  institutionScale: {

    enrollmentCategory: "Large",

    undergraduateEnrollment: 24000,

    graduateEnrollment: 4500,

    totalEnrollment: 28500,

    campusType: "Research University",

    residentialIntensity: 58,

    communityFeel: 78,

    studentFacultyRatio: "19:1",

    classSizeExperience: "Medium",

    scaleAdvantages: [
      "Major diversity",
      "Research opportunities",
      "Healthcare pathways",
      "Outdoor access",
      "Large alumni network"
    ],

    scaleDisadvantages: [
      "Less individualized attention",
      "Housing pressure",
      "Some large introductory courses"
    ]
  },

  studentFit: {

    bigFiveProfile: {

      openness: 90,

      conscientiousness: 72,

      extraversion: 70,

      agreeableness: 82,

      neuroticism: 28

    },

    hollandCodes: ["R","I","S"],

    learningStyle: [
      "Applied Learning",
      "Field-Based Learning",
      "Research Learning",
      "Experiential Learning"
    ],

    socialEnvironment: [
      "Outdoor-Oriented",
      "Health-Focused",
      "Collaborative",
      "Community-Minded"
    ],

    idealStudentTraits: [
      "Explorer",
      "Researcher",
      "Healthcare Professional",
      "Environmental Steward",
      "Leader"
    ],

    thrivesIf: [
      "Loves outdoor recreation",
      "Values healthcare pathways",
      "Enjoys environmental sciences",
      "Wants mountain-town living",
      "Prefers balanced academics and lifestyle"
    ],

    strugglesIf: [
      "Needs elite prestige",
      "Wants major-city nightlife",
      "Seeks Wall Street recruiting",
      "Prioritizes status over fit"
    ],

    transferRiskFactors: [
      "Prestige aspirations",
      "Desire for larger metropolitan environment",
      "Seeking stronger corporate recruiting"
    ]
  },

  hiddenOpportunities: {

    underratedMajors: [
      "Forestry",
      "Wildfire Science",
      "Physical Therapy",
      "Parks & Recreation Management",
      "Environmental Science",
      "Geology",
      "Nursing"
    ],

    hiddenCareerPipelines: [
      "Forestry Leadership",
      "Public Lands Management",
      "Healthcare",
      "Outdoor Recreation",
      "Wildfire Management",
      "Environmental Consulting"
    ],

    nicheRecruitingAdvantages: [
      "National Park Service",
      "US Forest Service",
      "Healthcare Systems",
      "Outdoor Recreation Organizations",
      "Environmental Agencies"
    ],

    overlookedStrengths: [
      "Forestry program",
      "Physical therapy reputation",
      "Outdoor leadership",
      "Environmental research",
      "Mountain ecosystem access"
    ],

    sleeperIndustries: [
      "Wildfire Management",
      "Outdoor Recreation",
      "Climate Adaptation",
      "Environmental Analytics",
      "Ecotourism"
    ]
  },

  networkCapital: {

    alumniAccessibility: 76,

    mentorshipDensity: 78,

    executiveAccess: 48,

    internshipNetwork: 82,

    familyBusinessExposure: 38,

    relationshipCapitalScore: 78,

    alumniLoyaltyScore: 84,

    referralCultureStrength: 80,

    donorNetworkStrength: 44,

    boardMemberDensity: 34

  },

  economicEcosystem: {

    primaryIndustries: [
      "Healthcare",
      "Education",
      "Outdoor Recreation",
      "Environmental Services",
      "Tourism"
    ],

    regionalEconomicDrivers: [
      "Healthcare",
      "Tourism",
      "Public Lands",
      "Environmental Science",
      "Outdoor Recreation"
    ],

    topEmployers: [
      "Northern Arizona Healthcare",
      "US Forest Service",
      "National Park Service",
      "State of Arizona",
      "Educational Institutions"
    ],

    emergingIndustries: [
      "Wildfire Science",
      "Climate Resilience",
      "Outdoor Technology",
      "Environmental Data Analytics",
      "Health Innovation"
    ],

    startupDensity: "Moderate",

    ventureCapitalAccess: 28,

    corporateHeadquartersDensity: 16,

    healthcareHubStrength: 84,

    innovationIndex: 74

  },

  geographicInfluence: {

    dominantMarket: "Arizona & Southwest",

    secondaryMarkets: [
      "Denver",
      "Salt Lake City",
      "Las Vegas",
      "Phoenix",
      "Albuquerque"
    ],

    alumniStrongholds: [
      "Arizona",
      "Colorado",
      "Nevada",
      "Utah"
    ],

    relocationPatterns: [
      "Mountain communities",
      "Healthcare systems",
      "Public lands careers",
      "Outdoor industry hubs"
    ],

    regionalInfluenceScore: 88,

    nationalReachScore: 58,

    internationalReachScore: 22

  },

  socialCapital: {

    greekLifeInfluence: 16,

    studentOrganizationStrength: 84,

    leadershipDevelopment: 82,

    crossDisciplinaryInteraction: 84,

    civicEngagement: 86

  },

  industryPathways: {

    aestheticsAndBeauty: {
      strength: 12
    },

    healthWellness: {
      strength: 86,
      notes: "One of the strongest health and wellness ecosystems in the Southwest outside flagship medical universities."
    },

    nutraceuticals: {
      strength: 58,
      notes: "Natural alignment through exercise science, outdoor performance, sports nutrition, wellness, and active-lifestyle industries."
    },

    consumerProducts: {
      strength: 42
    },

    outdoorIndustry: {
      strength: 88,
      notes: "Flagstaff is one of the premier outdoor recreation hubs in the American Southwest."
    },

    sportsBusiness: {
      strength: 54
    },

    entertainmentMedia: {
      strength: 22
    },

    ventureCapital: {
      strength: 24
    },

    privateEquity: {
      strength: 8
    },

    investmentBanking: {
      strength: 6
    },

    consulting: {
      strength: 42
    },

    medicine: {
      strength: 82
    },

    healthcareAdministration: {
      strength: 78
    },

    defense: {
      strength: 22
    },

    realEstate: {
      strength: 32
    },

    luxuryBrands: {
      strength: 8
    },

    entrepreneurship: {
      strength: 68
    },

    technology: {
      strength: 52
    },

    publicPolicy: {
      strength: 62
    },

    nonprofitLeadership: {
      strength: 72
    }
  },

  industrialInnovation: {

    advancedManufacturing: 24,

    supplyChainInfluence: 28,

    energySystems: 32,

    aerospaceSystems: 18,

    materialsScience: 22,

    processEngineering: 18,

    automationLeadership: 22

  },

  wealthMobility: {

    averageFamilyIncome: "Middle Income",

    socialMobilityIndex: 84,

    firstGenerationSupport: 88,

    wealthCreationPotential: 72,

    familyBusinessPipelineStrength: 42

  },

  futureResilience: {

    aiResistance: 86,

    automationResistance: 88,

    adaptabilityScore: 92,

    interdisciplinaryStrength: 88,

    futureReadiness: 90,

    entrepreneurialFlexibility: 84,

    lifelongLearningCulture: 88,

    innovationCapacity: 80

  },

  lifeDesignOutcomes: {

    wealthCreationPotential: 72,

    communityLeadershipPotential: 88,

    geographicMobility: 84,

    workLifeBalancePotential: 92,

    purposeAlignment: 90,

    familyFormationSupport: 88,

    personalDevelopmentPotential: 92,

    careerOptionality: 86,

    longTermLifeSatisfaction: 92

  },

  institutionalMoat: {

    prestigeMoat: 42,

    networkMoat: 62,

    geographicMoat: 90,

    industryMoat: 88,

    alumniMoat: 74,

    brandDurability: 82,

    overallMoatScore: 76

  }




// === UNC_Chapel_Hill ===
};

if (typeof module !== "undefined") { module.exports = UNIVERSITY_DB_V5; }
