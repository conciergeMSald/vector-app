/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 1: Los Angeles Basin — 20 ZIP codes
 * Version: 1.0 — June 16, 2026
 *
 * STRUCTURE PER ZIP ENTRY:
 * {
 *   zip: string
 *   neighborhood: string
 *   county: string
 *   clusters: [{
 *     name: string           — industry cluster name (human, IBIS-aligned)
 *     naics: number          — primary NAICS sector code
 *     distance: string       — proximity descriptor
 *     anchor_employers: string[] — 2-3 well-known companies
 *     student_connection: string — one sentence connecting to student interests
 *   }]
 * }
 *
 * PHILOSOPHY:
 * Every cluster entry must answer: "Why would a student from this ZIP
 * care about this industry?" The student_connection field is mandatory.
 * Anchor employers must be recognizable — not obscure subsidiaries.
 */

const GEO_INDUSTRY_DB = {

  // ─────────────────────────────────────────────────────────────
  // CONEJO VALLEY / CALABASAS CORRIDOR
  // ─────────────────────────────────────────────────────────────

  "91302": {
    zip: "91302",
    neighborhood: "Calabasas / Hidden Hills",
    county: "Los Angeles",
    clusters: [
      {
        name: "Cosmetic & Personal Care Manufacturing",
        naics: 32,
        distance: "8 miles — Chatsworth / West Hills",
        anchor_employers: ["Revlon (manufacturing)", "Inter Parfums", "Cosmetic Labs International"],
        student_connection: "The same precision that makes baking satisfying makes cosmetic chemistry compelling — Chatsworth has one of the densest concentrations of beauty and personal care manufacturers in the country."
      },
      {
        name: "Biotech & Pharmaceutical R&D",
        naics: 54,
        distance: "12 miles — Thousand Oaks",
        anchor_employers: ["Amgen", "Atara Biotherapeutics", "Westlake Village BioPartners"],
        student_connection: "Amgen — the largest biotech employer in Southern California — is building a $600M research campus in Thousand Oaks, creating one of the country's fastest-growing biotech corridors 12 miles from home."
      },
      {
        name: "Medical Device Manufacturing",
        naics: 33,
        distance: "10 miles — Westlake Village",
        anchor_employers: ["Baxter Healthcare", "Stryker (regional offices)", "Allergan (Irvine pipeline)"],
        student_connection: "Medical device companies need engineers, scientists, and designers who combine technical precision with an understanding of how the human body works."
      },
      {
        name: "Financial Services & Insurance",
        naics: 52,
        distance: "8 miles — Woodland Hills",
        anchor_employers: ["Farmers Insurance (HQ)", "Anthem / Elevance Health", "Transamerica"],
        student_connection: "Woodland Hills is one of the largest insurance and financial services corridors in Southern California — Farmers Insurance alone employs thousands within 8 miles."
      },
      {
        name: "Entertainment & Media Production",
        naics: 51,
        distance: "25 miles — Burbank / Hollywood",
        anchor_employers: ["Warner Bros Discovery", "NBCUniversal", "Disney"],
        student_connection: "The global capital of entertainment is 25 miles east — and the industry hires writers, producers, marketers, technologists, lawyers, and finance professionals, not just performers."
      },
      {
        name: "Aerospace & Defense",
        naics: 33,
        distance: "30 miles — El Segundo / Redondo Beach",
        anchor_employers: ["Northrop Grumman", "SpaceX (Hawthorne)", "Raytheon Technologies"],
        student_connection: "Southern California's aerospace corridor — stretching from El Segundo to Redondo Beach — is one of the largest concentrations of aerospace engineering talent in the world."
      },
      {
        name: "Healthcare Systems & Hospital Networks",
        naics: 62,
        distance: "10 miles — Thousand Oaks / Westlake",
        anchor_employers: ["Los Robles Regional Medical Center", "Providence Health", "Kaiser Permanente"],
        student_connection: "Healthcare is the largest employer in Ventura County — hospitals, clinics, and health systems within 15 miles offer pathways from nursing and physical therapy to hospital administration and health tech."
      },
      {
        name: "Food Science & Flavor Development",
        naics: 31,
        distance: "15 miles — Chatsworth / Sylmar",
        anchor_employers: ["McCormick (West Coast R&D)", "Givaudan Flavors", "International Flavors & Fragrances"],
        student_connection: "The same curiosity that makes cooking interesting makes food science a natural fit — flavor chemists, food technologists, and sensory scientists work in facilities throughout the San Fernando Valley."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "20 miles — Santa Monica / Culver City",
        anchor_employers: ["Google (Venice)", "Snap Inc.", "Hulu"],
        student_connection: "LA's tech corridor — centered in Santa Monica and Culver City — is the fastest-growing technology market in the country outside of Silicon Valley."
      },
      {
        name: "Veterinary Medicine & Animal Health",
        naics: 62,
        distance: "10 miles — Agoura Hills",
        anchor_employers: ["National Veterinary Associates (HQ)", "VCA Animal Hospitals", "Banfield Pet Hospital"],
        student_connection: "National Veterinary Associates — the largest privately owned veterinary hospital network in North America — is headquartered in Agoura Hills, 10 miles from home."
      }
    ]
  },

  "91301": {
    zip: "91301",
    neighborhood: "Agoura Hills",
    county: "Los Angeles",
    clusters: [
      {
        name: "Veterinary Medicine & Animal Health",
        naics: 62,
        distance: "Local — Agoura Hills",
        anchor_employers: ["National Veterinary Associates (HQ)", "VCA Animal Hospitals", "Banfield Pet Hospital"],
        student_connection: "National Veterinary Associates — the largest privately owned veterinary hospital network in North America — is headquartered here in Agoura Hills."
      },
      {
        name: "Biotech & Pharmaceutical R&D",
        naics: 54,
        distance: "12 miles — Thousand Oaks",
        anchor_employers: ["Amgen", "Atara Biotherapeutics", "Capsida Biotherapeutics"],
        student_connection: "Amgen's $600M research campus expansion is turning Thousand Oaks into Biotech Valley — one of the fastest-growing life sciences hubs in the country."
      },
      {
        name: "Financial Services & Insurance",
        naics: 52,
        distance: "10 miles — Woodland Hills / Westlake",
        anchor_employers: ["Farmers Insurance", "Anthem / Elevance Health", "Bank of America"],
        student_connection: "The Woodland Hills financial services corridor employs tens of thousands of finance, insurance, and technology professionals within 15 miles."
      },
      {
        name: "Cosmetic & Personal Care Manufacturing",
        naics: 32,
        distance: "10 miles — Chatsworth",
        anchor_employers: ["Revlon (manufacturing)", "Inter Parfums", "Cosmetic Labs International"],
        student_connection: "Chatsworth's cosmetic manufacturing corridor is one of the largest in the US — and it's hiring chemists, engineers, marketers, and regulatory specialists."
      },
      {
        name: "Entertainment & Media Production",
        naics: 51,
        distance: "25 miles — Burbank",
        anchor_employers: ["Warner Bros Discovery", "NBCUniversal", "DreamWorks Animation"],
        student_connection: "Entertainment is LA's signature industry and employs far more people in business, technology, and operations than it does on screen."
      },
      {
        name: "Healthcare Systems",
        naics: 62,
        distance: "12 miles — Thousand Oaks",
        anchor_employers: ["Los Robles Regional Medical Center", "Providence Health", "Kaiser Permanente"],
        student_connection: "Healthcare is the largest employment sector in Ventura County — and offers careers from clinical practice to hospital administration, health technology, and medical research."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "22 miles — Santa Monica / Culver City",
        anchor_employers: ["Google", "Snap Inc.", "Hulu"],
        student_connection: "LA's technology sector is growing faster than any major US market outside Silicon Valley — and actively recruits from the Conejo Valley region."
      }
    ]
  },

  "91311": {
    zip: "91311",
    neighborhood: "Chatsworth",
    county: "Los Angeles",
    clusters: [
      {
        name: "Cosmetic & Personal Care Manufacturing",
        naics: 32,
        distance: "Local — Chatsworth industrial corridor",
        anchor_employers: ["Revlon (manufacturing)", "CCA Industries", "Cosmetic Labs International"],
        student_connection: "Chatsworth is the cosmetic manufacturing capital of Southern California — dozens of personal care, fragrance, and beauty product companies operate within a 3-mile radius."
      },
      {
        name: "Food Science & Flavor Development",
        naics: 31,
        distance: "Local — Chatsworth / Sylmar",
        anchor_employers: ["International Flavors & Fragrances", "Givaudan", "Sensient Technologies"],
        student_connection: "Flavor chemists and food scientists work in facilities right here in Chatsworth — and the career path starts with the same curiosity that makes cooking and baking interesting."
      },
      {
        name: "Aerospace Components & Defense",
        naics: 33,
        distance: "Local — Chatsworth / Canoga Park",
        anchor_employers: ["Boeing (Canoga Park)", "Raytheon", "Aerojet Rocketdyne"],
        student_connection: "Canoga Park — adjacent to Chatsworth — houses one of Boeing's most significant propulsion research facilities, working on systems for both commercial aviation and national defense."
      },
      {
        name: "Medical Device Manufacturing",
        naics: 33,
        distance: "5 miles — West Hills / Westlake",
        anchor_employers: ["Baxter Healthcare", "Beckman Coulter", "Hologic"],
        student_connection: "Medical device companies need engineers and scientists who combine technical precision with healthcare knowledge — and several are within a few miles of Chatsworth."
      },
      {
        name: "Electronics & Semiconductor Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Skyworks Solutions", "Teradyne", "L3 Technologies"],
        student_connection: "Electronics manufacturing requires the same systematic thinking that makes coding and engineering fascinating — and Chatsworth has a dense cluster of electronics manufacturers."
      },
      {
        name: "Financial Services & Insurance",
        naics: 52,
        distance: "8 miles — Woodland Hills",
        anchor_employers: ["Farmers Insurance", "Anthem", "Transamerica"],
        student_connection: "The Woodland Hills insurance corridor is a short drive east and represents one of the largest concentrations of financial services employment in the San Fernando Valley."
      }
    ]
  },

  "91364": {
    zip: "91364",
    neighborhood: "Woodland Hills",
    county: "Los Angeles",
    clusters: [
      {
        name: "Financial Services & Insurance",
        naics: 52,
        distance: "Local — Woodland Hills",
        anchor_employers: ["Farmers Insurance (HQ)", "Anthem / Elevance Health", "Transamerica"],
        student_connection: "Farmers Insurance headquarters is in Woodland Hills — the company employs actuaries, data scientists, marketers, attorneys, and technology professionals in the thousands."
      },
      {
        name: "Healthcare Systems & Hospital Networks",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Kaiser Permanente Woodland Hills", "West Hills Hospital", "Providence Cedars-Sinai"],
        student_connection: "Woodland Hills has one of the largest concentrations of healthcare facilities in the San Fernando Valley — from major hospitals to specialty clinics and outpatient surgery centers."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "Local / 20 miles — Santa Monica",
        anchor_employers: ["BlackLine (HQ)", "Google (remote hub)", "various SaaS startups"],
        student_connection: "BlackLine — a publicly traded financial technology company — is headquartered in Woodland Hills and represents the growing tech sector that is moving into the suburban San Fernando Valley."
      },
      {
        name: "Biotech & Pharmaceutical R&D",
        naics: 54,
        distance: "15 miles — Thousand Oaks",
        anchor_employers: ["Amgen", "Atara Biotherapeutics", "Baxter"],
        student_connection: "The Thousand Oaks biotech corridor is becoming one of the most significant life sciences hubs in the US — and the commute from Woodland Hills is under 20 minutes."
      },
      {
        name: "Cosmetic & Personal Care Manufacturing",
        naics: 32,
        distance: "8 miles — Chatsworth",
        anchor_employers: ["Revlon", "Cosmetic Labs International", "Inter Parfums"],
        student_connection: "Chatsworth's cosmetic manufacturing corridor is 8 miles north — one of the most accessible industry clusters in the region for students interested in chemistry, beauty science, or product development."
      },
      {
        name: "Entertainment & Media Production",
        naics: 51,
        distance: "20 miles — Burbank / Culver City",
        anchor_employers: ["Warner Bros Discovery", "NBCUniversal", "Sony Pictures"],
        student_connection: "The entertainment industry is LA's defining employer — and Woodland Hills residents have been commuting to Burbank and Culver City studios for three generations."
      },
      {
        name: "Legal Services & Law",
        naics: 54,
        distance: "Local / Downtown LA",
        anchor_employers: ["Major law firms (Century City)", "LA County Courts", "Corporate legal departments"],
        student_connection: "LA is one of the largest legal markets in the country — with major law firm offices in Century City and Downtown LA drawing from the San Fernando Valley talent base."
      }
    ]
  },

  "91356": {
    zip: "91356",
    neighborhood: "Tarzana",
    county: "Los Angeles",
    clusters: [
      {
        name: "Healthcare Systems & Hospital Networks",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Tarzana Medical Center (Providence)", "Kaiser Permanente", "Dignity Health"],
        student_connection: "Providence Cedars-Sinai Tarzana is a major regional medical center — and one of the largest healthcare employers in the mid-San Fernando Valley."
      },
      {
        name: "Financial Services & Insurance",
        naics: 52,
        distance: "5 miles — Woodland Hills",
        anchor_employers: ["Farmers Insurance", "Anthem", "Wells Fargo"],
        student_connection: "The Woodland Hills financial services corridor is 5 miles west — and Tarzana's proximity makes it a natural residential base for financial services careers."
      },
      {
        name: "Entertainment & Media Production",
        naics: 51,
        distance: "18 miles — Burbank / Studio City",
        anchor_employers: ["NBCUniversal", "Warner Bros", "CBS Studios"],
        student_connection: "Studio City is adjacent to Tarzana's eastern boundary — entertainment industry careers are among the most accessible of any neighborhood in the Valley."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "22 miles — Santa Monica / Culver City",
        anchor_employers: ["Google", "Snap Inc.", "Hulu"],
        student_connection: "LA's technology corridor on the Westside is a 25-minute drive south — and increasingly remote-friendly, making it accessible to students from any part of the Valley."
      },
      {
        name: "Retail & Consumer Brands",
        naics: 44,
        distance: "Local / Regional",
        anchor_employers: ["The Cheesecake Factory (HQ — Calabasas)", "Guitar Center (Westlake)", "Harbor Freight (Calabasas)"],
        student_connection: "Several major consumer brands are headquartered within 10 miles — offering careers in marketing, operations, supply chain, and brand management."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // WESTSIDE LA
  // ─────────────────────────────────────────────────────────────

  "90272": {
    zip: "90272",
    neighborhood: "Pacific Palisades",
    county: "Los Angeles",
    clusters: [
      {
        name: "Entertainment & Media Production",
        naics: 51,
        distance: "15 miles — Culver City / Burbank",
        anchor_employers: ["Sony Pictures (Culver City)", "Warner Bros (Burbank)", "Amazon Studios"],
        student_connection: "Pacific Palisades has been home to entertainment industry leadership for a century — and Culver City's studio complex is 15 miles south."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "8 miles — Santa Monica / Venice",
        anchor_employers: ["Google (Venice Beach)", "Snap Inc.", "Hulu"],
        student_connection: "Silicon Beach — LA's technology corridor centered in Santa Monica and Venice — is 8 miles south and is one of the fastest-growing tech clusters in the US."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "10 miles — Century City / Beverly Hills",
        anchor_employers: ["Ares Management", "Oaktree Capital", "various private equity firms"],
        student_connection: "Century City and Beverly Hills house some of the largest alternative investment and private equity firms in the country — and LA is the third-largest financial center in the US."
      },
      {
        name: "Healthcare & Biomedical Research",
        naics: 62,
        distance: "12 miles — Westwood / UCLA",
        anchor_employers: ["UCLA Health", "Cedars-Sinai Medical Center", "Ronald Reagan UCLA Medical Center"],
        student_connection: "UCLA Health and Cedars-Sinai are two of the most prestigious academic medical centers in the country — both within 12 miles and both among the largest employers in LA."
      },
      {
        name: "Legal Services & Law",
        naics: 54,
        distance: "12 miles — Century City / Downtown LA",
        anchor_employers: ["Latham & Watkins", "O'Melveny & Myers", "Gibson Dunn"],
        student_connection: "LA's major law firms — clustered in Century City — are a 12-mile drive east and represent one of the most significant legal markets in the country."
      },
      {
        name: "Luxury Real Estate & Architecture",
        naics: 53,
        distance: "Local",
        anchor_employers: ["Compass Real Estate", "Hilton & Hyland", "Berkshire Hathaway HomeServices"],
        student_connection: "Pacific Palisades sits in one of the most valuable real estate markets in the world — and the architecture, design, and real estate professions surrounding it are among the most lucrative in the country."
      }
    ]
  },

  "90049": {
    zip: "90049",
    neighborhood: "Brentwood",
    county: "Los Angeles",
    clusters: [
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "5 miles — Westwood / UCLA",
        anchor_employers: ["UCLA Health", "Cedars-Sinai", "Santa Monica UCLA Medical Center"],
        student_connection: "UCLA's medical campus is 5 miles east — one of the top 10 medical centers in the country and a major employer of everyone from physicians and nurses to researchers and administrators."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "8 miles — Santa Monica / Venice",
        anchor_employers: ["Google", "Snap Inc.", "Activision Blizzard"],
        student_connection: "Silicon Beach is 8 miles south — and Brentwood's proximity to the tech corridor makes it a natural residential base for technology careers."
      },
      {
        name: "Finance & Private Equity",
        naics: 52,
        distance: "8 miles — Century City",
        anchor_employers: ["Ares Management", "Oaktree Capital Management", "TCW Group"],
        student_connection: "Century City is LA's financial district — home to some of the largest private equity and asset management firms in the country, just 8 miles east."
      },
      {
        name: "Entertainment & Media Production",
        naics: 51,
        distance: "12 miles — Culver City / Burbank",
        anchor_employers: ["Sony Pictures", "Amazon Studios", "Warner Bros"],
        student_connection: "Brentwood is one of the primary residential neighborhoods for entertainment industry executives — and the studios are a short drive east."
      },
      {
        name: "Legal Services",
        naics: 54,
        distance: "8 miles — Century City",
        anchor_employers: ["Latham & Watkins", "Skadden Arps", "O'Melveny & Myers"],
        student_connection: "Century City's law firm corridor is 8 miles east — and Brentwood residents have been commuting to Century City legal practices for decades."
      }
    ]
  },

  "90210": {
    zip: "90210",
    neighborhood: "Beverly Hills",
    county: "Los Angeles",
    clusters: [
      {
        name: "Finance, Private Equity & Wealth Management",
        naics: 52,
        distance: "Local / 3 miles — Century City",
        anchor_employers: ["Ares Management", "Oaktree Capital", "UBS Wealth Management", "Merrill Lynch"],
        student_connection: "Beverly Hills and Century City form one of the largest concentrations of wealth management, private equity, and investment management in the US outside New York."
      },
      {
        name: "Entertainment & Talent Industry",
        naics: 51,
        distance: "Local",
        anchor_employers: ["CAA (Creative Artists Agency)", "WME / Endeavor", "UTA"],
        student_connection: "The three largest talent agencies in the world are headquartered in Beverly Hills — representing athletes, musicians, actors, and directors and employing hundreds of agents, lawyers, and business executives."
      },
      {
        name: "Luxury Retail & Fashion",
        naics: 44,
        distance: "Local — Rodeo Drive",
        anchor_employers: ["LVMH (multiple brands)", "Kering (Gucci, YSL)", "Chanel", "Cartier"],
        student_connection: "Rodeo Drive is the global address for luxury retail — and the industry behind it employs brand directors, merchandise buyers, marketing executives, and luxury goods specialists."
      },
      {
        name: "Legal Services",
        naics: 54,
        distance: "Local / Century City",
        anchor_employers: ["Latham & Watkins", "Greenberg Glusker", "Loeb & Loeb"],
        student_connection: "Beverly Hills has one of the highest concentrations of entertainment and corporate attorneys in the country — and the legal industry is deeply embedded in the local economy."
      },
      {
        name: "Healthcare & Aesthetic Medicine",
        naics: 62,
        distance: "Local / Cedars-Sinai (2 miles)",
        anchor_employers: ["Cedars-Sinai Medical Center", "Beverly Hills Plastic Surgery", "Skin Cancer Foundation"],
        student_connection: "Cedars-Sinai — one of the most prestigious medical centers in the country — is 2 miles east, and Beverly Hills itself hosts a dense cluster of aesthetic medicine and dermatology practices."
      },
      {
        name: "Real Estate & Development",
        naics: 53,
        distance: "Local",
        anchor_employers: ["The Agency", "Hilton & Hyland", "Coldwell Banker Beverly Hills"],
        student_connection: "Beverly Hills real estate is among the most valuable in the world — and the development, brokerage, and architecture industries surrounding it offer distinctive career pathways."
      }
    ]
  },

  "90077": {
    zip: "90077",
    neighborhood: "Bel Air",
    county: "Los Angeles",
    clusters: [
      {
        name: "Finance & Private Equity",
        naics: 52,
        distance: "5 miles — Century City / Beverly Hills",
        anchor_employers: ["Ares Management", "Oaktree Capital", "TCW Group"],
        student_connection: "Century City's financial district is 5 miles south — and Bel Air's position between Westwood and Beverly Hills places it at the center of LA's wealth management and investment community."
      },
      {
        name: "Entertainment & Media",
        naics: 51,
        distance: "10 miles — Culver City / Burbank",
        anchor_employers: ["Sony Pictures", "Warner Bros", "Amazon Studios"],
        student_connection: "Bel Air has historically housed the leadership of the entertainment industry — and the studios are a short drive in any direction."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "3 miles — Westwood / UCLA",
        anchor_employers: ["UCLA Health", "Ronald Reagan UCLA Medical Center", "Mattel Children's Hospital UCLA"],
        student_connection: "UCLA's medical campus is 3 miles south — one of the top academic medical centers in the country and a major anchor for healthcare careers in the Westside."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "10 miles — Santa Monica",
        anchor_employers: ["Google", "Snap", "Hulu"],
        student_connection: "Silicon Beach is 10 miles southwest — and Bel Air's proximity makes it a natural base for technology industry careers on the Westside."
      }
    ]
  },

  "90024": {
    zip: "90024",
    neighborhood: "Westwood / UCLA",
    county: "Los Angeles",
    clusters: [
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "Local — UCLA campus",
        anchor_employers: ["UCLA Health", "Ronald Reagan UCLA Medical Center", "Mattel Children's Hospital"],
        student_connection: "UCLA Health is one of the top 10 hospital systems in the country and the single largest employer in Westwood — offering pathways from clinical medicine to healthcare administration, research, and public health."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "5 miles — Santa Monica / Venice",
        anchor_employers: ["Google", "Snap Inc.", "Hulu"],
        student_connection: "Silicon Beach begins 5 miles west — and UCLA is one of the primary talent pipelines feeding LA's technology sector."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "5 miles — Century City",
        anchor_employers: ["Ares Management", "Oaktree Capital", "Capital Group"],
        student_connection: "Capital Group — one of the largest investment management firms in the world — is headquartered nearby and recruits heavily from UCLA."
      },
      {
        name: "Biomedical Research & Biotech",
        naics: 54,
        distance: "Local — UCLA research campus",
        anchor_employers: ["UCLA Jonsson Comprehensive Cancer Center", "various UCLA spinoff biotech firms"],
        student_connection: "UCLA generates more biotech spinoff companies than any university in Southern California — and students from Westwood are in the center of that research ecosystem."
      },
      {
        name: "Entertainment & Media",
        naics: 51,
        distance: "10 miles — Culver City",
        anchor_employers: ["Amazon Studios", "Sony Pictures", "Apple TV+"],
        student_connection: "UCLA's film school is among the most prestigious in the world — and Culver City's studio corridor is 10 minutes south."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SANTA MONICA
  // ─────────────────────────────────────────────────────────────

  "90402": {
    zip: "90402",
    neighborhood: "Santa Monica",
    county: "Los Angeles",
    clusters: [
      {
        name: "Technology & Software — Silicon Beach",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Google (Venice)", "Snap Inc. (Santa Monica HQ)", "Activision Blizzard"],
        student_connection: "Santa Monica is the heart of Silicon Beach — LA's technology corridor has produced some of the most valuable consumer technology companies in the country, right here."
      },
      {
        name: "Entertainment & Streaming Media",
        naics: 51,
        distance: "Local / 10 miles",
        anchor_employers: ["Hulu", "Lionsgate", "Amblin Entertainment"],
        student_connection: "Santa Monica hosts major entertainment companies alongside the tech sector — and the boundary between the two industries is increasingly blurred."
      },
      {
        name: "Healthcare & Wellness",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Providence Saint John's Health Center", "UCLA Santa Monica Medical Center", "Cedars-Sinai"],
        student_connection: "Santa Monica has a dense cluster of healthcare facilities — and the wellness and health technology sectors are growing rapidly in the same neighborhood as Silicon Beach."
      },
      {
        name: "Finance & Venture Capital",
        naics: 52,
        distance: "Local / 5 miles — Century City",
        anchor_employers: ["Greycroft (VC)", "Bonfire Ventures", "Clearstone Venture Partners"],
        student_connection: "Santa Monica hosts a growing venture capital community that funds the technology companies across Silicon Beach — and the intersection of finance and technology creates distinctive career pathways."
      },
      {
        name: "Architecture & Urban Design",
        naics: 54,
        distance: "Local",
        anchor_employers: ["AECOM", "Gensler (LA office)", "Skidmore Owings & Merrill"],
        student_connection: "Santa Monica's built environment is one of the most architecturally significant in California — and major architecture and urban design firms maintain significant offices here."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SOUTH BAY
  // ─────────────────────────────────────────────────────────────

  "90266": {
    zip: "90266",
    neighborhood: "Manhattan Beach",
    county: "Los Angeles",
    clusters: [
      {
        name: "Aerospace & Defense — South Bay Corridor",
        naics: 33,
        distance: "5 miles — El Segundo / Hawthorne",
        anchor_employers: ["SpaceX (Hawthorne)", "Northrop Grumman", "Raytheon Technologies", "Boeing"],
        student_connection: "El Segundo is the aerospace capital of the world — and SpaceX's Hawthorne facility is 5 miles north of Manhattan Beach, launching humans to the International Space Station and building the next generation of reusable rockets."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "8 miles — El Segundo / Playa Vista",
        anchor_employers: ["Internet Brands (El Segundo)", "AT&T (El Segundo)", "LA Lakers / LA Kings tech ops"],
        student_connection: "El Segundo has evolved into one of the most diverse technology clusters in LA — combining aerospace, media, sports technology, and consumer software."
      },
      {
        name: "Finance & Investment Management",
        naics: 52,
        distance: "15 miles — Century City / El Segundo",
        anchor_employers: ["Capital Group", "Ares Management", "various hedge funds"],
        student_connection: "The South Bay's proximity to both Century City and El Segundo gives Manhattan Beach residents access to one of the most diverse financial services markets in the country."
      },
      {
        name: "Sports & Entertainment Business",
        naics: 71,
        distance: "10 miles — Inglewood / El Segundo",
        anchor_employers: ["Los Angeles Lakers (El Segundo training facility)", "Los Angeles Rams", "SoFi Stadium"],
        student_connection: "The LA Lakers' training facility is in El Segundo — 5 miles north — and SoFi Stadium in Inglewood is one of the most technologically advanced sports venues in the world. Sports business, sports medicine, and sports technology careers are centered in this corridor."
      },
      {
        name: "Healthcare & Life Sciences",
        naics: 62,
        distance: "10 miles — Torrance / El Segundo",
        anchor_employers: ["Providence Little Company of Mary", "Torrance Memorial Medical Center", "DaVita (El Segundo HQ)"],
        student_connection: "DaVita — one of the largest kidney care companies in the world — is headquartered in El Segundo, and the South Bay has a dense cluster of hospital systems and medical groups."
      }
    ]
  },

  "90274": {
    zip: "90274",
    neighborhood: "Palos Verdes",
    county: "Los Angeles",
    clusters: [
      {
        name: "Aerospace & Defense",
        naics: 33,
        distance: "10 miles — El Segundo / Redondo Beach",
        anchor_employers: ["Northrop Grumman (Redondo Beach)", "SpaceX (Hawthorne)", "Raytheon", "Boeing"],
        student_connection: "Northrop Grumman's Redondo Beach campus — one of the largest aerospace engineering facilities in the country — is 10 miles north of Palos Verdes and actively recruits from the South Bay."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "12 miles — El Segundo / Torrance",
        anchor_employers: ["Internet Brands", "AT&T", "various defense-adjacent tech companies"],
        student_connection: "El Segundo's technology sector combines aerospace, consumer software, and media technology — and is 12 miles north of Palos Verdes."
      },
      {
        name: "Healthcare & Life Sciences",
        naics: 62,
        distance: "10 miles — Torrance",
        anchor_employers: ["Torrance Memorial Medical Center", "Providence Little Company of Mary", "DaVita"],
        student_connection: "Torrance Memorial is one of the largest hospitals in the South Bay — and the Palos Verdes Peninsula has a high concentration of healthcare professionals who commute to South Bay medical centers."
      },
      {
        name: "Finance & Wealth Management",
        naics: 52,
        distance: "15 miles — Century City",
        anchor_employers: ["Capital Group", "various private wealth management firms"],
        student_connection: "Palos Verdes has one of the highest concentrations of financial professionals in the South Bay — and Century City's wealth management corridor is 15 miles north."
      },
      {
        name: "Marine Science & Environmental Research",
        naics: 54,
        distance: "Local — Rancho Palos Verdes",
        anchor_employers: ["Cabrillo Marine Aquarium", "Southern California Marine Institute", "NOAA (regional)"],
        student_connection: "Palos Verdes sits at the edge of one of the most biologically rich marine environments on the Pacific Coast — and marine biology, environmental science, and ocean conservation careers are uniquely accessible here."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SAN GABRIEL VALLEY
  // ─────────────────────────────────────────────────────────────

  "91011": {
    zip: "91011",
    neighborhood: "La Cañada Flintridge",
    county: "Los Angeles",
    clusters: [
      {
        name: "Aerospace, Space Science & Engineering",
        naics: 33,
        distance: "Local — Pasadena / La Cañada",
        anchor_employers: ["NASA Jet Propulsion Laboratory (JPL)", "Caltech", "The Aerospace Corporation"],
        student_connection: "NASA's Jet Propulsion Laboratory — which has landed rovers on Mars, flown past Pluto, and operates the Voyager spacecraft beyond our solar system — is 3 miles from La Cañada Flintridge. It is one of the most extraordinary scientific institutions in human history, and it is your neighbor."
      },
      {
        name: "Scientific Research & Development",
        naics: 54,
        distance: "5 miles — Pasadena",
        anchor_employers: ["California Institute of Technology (Caltech)", "City of Hope", "Huntington Medical Research Institutes"],
        student_connection: "Caltech — ranked among the top 3 research universities in the world — is 5 miles south, and its proximity creates a unique scientific research ecosystem that extends into La Cañada."
      },
      {
        name: "Healthcare & Medical Centers",
        naics: 62,
        distance: "8 miles — Pasadena / Glendale",
        anchor_employers: ["Huntington Hospital", "USC Verdugo Hills Hospital", "Glendale Adventist Medical Center"],
        student_connection: "Huntington Hospital in Pasadena is one of the largest and most respected community hospitals in California — and the medical corridor along the 210 freeway is less than 10 miles east."
      },
      {
        name: "Technology & Defense Technology",
        naics: 51,
        distance: "Local / 15 miles",
        anchor_employers: ["Northrop Grumman", "L3 Technologies", "various defense tech contractors"],
        student_connection: "La Cañada's proximity to JPL has attracted a cluster of aerospace and defense technology contractors — and the defense technology sector offers careers at the intersection of engineering, computer science, and national security."
      },
      {
        name: "Education & Academic Research",
        naics: 61,
        distance: "5 miles — Pasadena",
        anchor_employers: ["Caltech", "Art Center College of Design", "Pasadena City College"],
        student_connection: "The Pasadena academic corridor — anchored by Caltech and Art Center — is one of the most intellectually dense environments in California and a pathway into research, design, and scientific careers."
      }
    ]
  },

  "91108": {
    zip: "91108",
    neighborhood: "San Marino",
    county: "Los Angeles",
    clusters: [
      {
        name: "Aerospace & Space Science",
        naics: 33,
        distance: "8 miles — La Cañada / Pasadena",
        anchor_employers: ["NASA JPL", "Caltech", "The Aerospace Corporation"],
        student_connection: "NASA's Jet Propulsion Laboratory is 8 miles north — and San Marino's San Gabriel Valley location places it in the center of one of the country's most significant aerospace research corridors."
      },
      {
        name: "Healthcare & Medical Centers",
        naics: 62,
        distance: "5 miles — Pasadena",
        anchor_employers: ["Huntington Hospital", "City of Hope National Medical Center", "Keck Hospital of USC"],
        student_connection: "City of Hope — one of the leading cancer research and treatment centers in the world — is 8 miles east in Duarte, and Huntington Hospital is 5 miles north in Pasadena."
      },
      {
        name: "Finance & Wealth Management",
        naics: 52,
        distance: "Local / 15 miles — Pasadena / Century City",
        anchor_employers: ["Western Asset Management", "Pacific Premier Bancorp", "various private wealth firms"],
        student_connection: "San Marino's position in the San Gabriel Valley places it near a significant concentration of private wealth management and investment firms serving the region's high-net-worth population."
      },
      {
        name: "Arts, Culture & Museum Sector",
        naics: 71,
        distance: "Local — San Marino / Pasadena",
        anchor_employers: ["The Huntington Library Art Museum & Botanical Gardens", "Norton Simon Museum", "Pasadena Museum of California Art"],
        student_connection: "The Huntington Library is one of the most significant research libraries and art collections in the world — located in San Marino — and offers career pathways in art history, conservation, curation, and nonprofit leadership."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "15 miles — Pasadena / Arcadia tech corridor",
        anchor_employers: ["various Caltech spinoff companies", "Idealab (Pasadena)", "Green Dot Corporation"],
        student_connection: "Pasadena's proximity to Caltech has generated dozens of technology spinoff companies — and the San Gabriel Valley technology sector is growing as companies seek space outside of Downtown LA and Silicon Beach."
      }
    ]
  },

  "91007": {
    zip: "91007",
    neighborhood: "Arcadia",
    county: "Los Angeles",
    clusters: [
      {
        name: "Healthcare & Hospital Systems",
        naics: 62,
        distance: "Local",
        anchor_employers: ["Methodist Hospital of Southern California", "Arcadia Methodist Hospital", "City of Hope (Duarte, 5 miles)"],
        student_connection: "Methodist Hospital of Southern California is right here in Arcadia — and City of Hope, one of the world's leading cancer research centers, is 5 miles east in Duarte."
      },
      {
        name: "Aerospace & Space Science",
        naics: 33,
        distance: "12 miles — La Cañada / Pasadena",
        anchor_employers: ["NASA JPL", "Caltech", "The Aerospace Corporation"],
        student_connection: "NASA's Jet Propulsion Laboratory is 12 miles northwest — and Arcadia's San Gabriel Valley location puts it within range of one of the world's greatest scientific research institutions."
      },
      {
        name: "Retail & Consumer Business",
        naics: 44,
        distance: "Local",
        anchor_employers: ["Santa Anita Park", "Westfield Santa Anita", "major retail chains"],
        student_connection: "The Santa Anita corridor is one of the major retail and consumer business hubs in the San Gabriel Valley — offering careers in retail management, marketing, and consumer brand operations."
      },
      {
        name: "Finance & Banking",
        naics: 52,
        distance: "Local / 15 miles",
        anchor_employers: ["East West Bank (Pasadena HQ)", "Cathay Bank", "Far East Bank"],
        student_connection: "East West Bank — the largest bank focused on the US-China market — is headquartered in Pasadena, 10 miles west, and the San Gabriel Valley has a growing concentration of financial services firms serving Asian-American business communities."
      },
      {
        name: "Technology & Engineering",
        naics: 51,
        distance: "10 miles — Pasadena / Monrovia",
        anchor_employers: ["Idealab", "various Caltech spinoffs", "Duarte tech corridor"],
        student_connection: "The Route 66 tech corridor from Pasadena through Arcadia to Monrovia is home to dozens of engineering and technology companies — and Caltech's proximity creates a steady flow of innovation into the region."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // ORANGE COUNTY BORDER
  // ─────────────────────────────────────────────────────────────

  "92657": {
    zip: "92657",
    neighborhood: "Newport Coast",
    county: "Orange",
    clusters: [
      {
        name: "Finance, Private Equity & Wealth Management",
        naics: 52,
        distance: "5 miles — Newport Beach / Irvine",
        anchor_employers: ["Pacific Investment Management Co. (PIMCO)", "Pacific Premier Bank", "Western Pacific Financial"],
        student_connection: "PIMCO — one of the largest bond investment management firms in the world — is headquartered 5 miles south in Newport Beach. Orange County is the third-largest financial center in California."
      },
      {
        name: "Healthcare & Biotech",
        naics: 62,
        distance: "10 miles — Irvine",
        anchor_employers: ["Allergan / AbbVie (Irvine HQ)", "Edwards Lifesciences", "Masimo Corporation"],
        student_connection: "Irvine is one of the largest biotech and medical device clusters in the US — Allergan, Edwards Lifesciences, and Masimo are all headquartered within 10 miles."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "10 miles — Irvine / Newport Beach",
        anchor_employers: ["Broadcom (Irvine)", "Verizon (Irvine)", "CoreLogic"],
        student_connection: "Irvine's technology sector — anchored by semiconductor, telecommunications, and software companies — is one of the most significant tech clusters in Southern California."
      },
      {
        name: "Real Estate & Development",
        naics: 53,
        distance: "Local",
        anchor_employers: ["The Irvine Company", "William Lyon Homes", "Taylor Morrison"],
        student_connection: "Newport Coast was developed by the Irvine Company — one of the largest real estate development firms in the US — and the real estate and development industry is one of the defining employers of coastal Orange County."
      },
      {
        name: "Hospitality & Luxury Tourism",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Pelican Hill Resort", "St. Regis Monarch Beach", "Fashion Island"],
        student_connection: "Newport Coast sits adjacent to some of the most prestigious resort properties in California — and the hospitality, events, and luxury tourism industries employ thousands in the immediate area."
      }
    ]
  },

  "92651": {
    zip: "92651",
    neighborhood: "Laguna Beach",
    county: "Orange",
    clusters: [
      {
        name: "Arts, Design & Creative Industries",
        naics: 71,
        distance: "Local",
        anchor_employers: ["Laguna Art Museum", "Festival of Arts", "numerous working artists and galleries"],
        student_connection: "Laguna Beach is one of the most significant art communities in California — with more galleries per capita than almost any city in the US, and a festival tradition that has attracted serious artists since the 1930s."
      },
      {
        name: "Finance & Wealth Management",
        naics: 52,
        distance: "10 miles — Newport Beach / Irvine",
        anchor_employers: ["PIMCO", "Pacific Premier Bank", "Merrill Lynch Wealth Management"],
        student_connection: "Newport Beach's financial district — home to PIMCO and dozens of wealth management firms — is 10 miles north and represents one of the most significant concentrations of investment management talent in the US."
      },
      {
        name: "Healthcare & Biotech",
        naics: 62,
        distance: "15 miles — Irvine",
        anchor_employers: ["Allergan / AbbVie", "Edwards Lifesciences", "Hoag Hospital"],
        student_connection: "Irvine's biotech corridor is 15 miles north — and Hoag Hospital in Newport Beach is one of the most respected community hospitals in California."
      },
      {
        name: "Hospitality & Tourism",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Montage Laguna Beach", "The Ranch at Laguna Beach", "Surf & Sand Resort"],
        student_connection: "Laguna Beach's resort and hospitality sector is among the most prestigious in California — offering careers from hotel management and culinary arts to event planning and tourism development."
      },
      {
        name: "Environmental Science & Marine Biology",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Ocean Institute (Dana Point)", "Laguna Ocean Foundation", "NOAA regional offices"],
        student_connection: "Laguna Beach's coastline and tide pools are one of the most biologically rich marine environments in California — and the environmental science and marine biology careers centered here are among the most distinctive in the region."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SAN DIEGO NORTH (BONUS — serves OC/SD border families)
  // ─────────────────────────────────────────────────────────────

  "92067": {
    zip: "92067",
    neighborhood: "Rancho Santa Fe",
    county: "San Diego",
    clusters: [
      {
        name: "Biotech & Pharmaceutical Research",
        naics: 54,
        distance: "20 miles — Torrey Pines / Sorrento Valley",
        anchor_employers: ["Illumina", "Pfizer (La Jolla)", "Johnson & Johnson Innovation"],
        student_connection: "San Diego's biotech corridor — centered in Torrey Pines and Sorrento Valley — is one of the three largest biotech clusters in the world alongside Boston and San Francisco. Illumina, Pfizer, and dozens of breakthrough companies are 20 miles south."
      },
      {
        name: "Finance & Wealth Management",
        naics: 52,
        distance: "Local / 15 miles — La Jolla",
        anchor_employers: ["Brandes Investment Partners", "Nicholas Financial", "various family offices"],
        student_connection: "Rancho Santa Fe is one of the wealthiest ZIP codes in the US — and the private wealth management and family office industry serving its residents represents a meaningful career ecosystem."
      },
      {
        name: "Real Estate & Development",
        naics: 53,
        distance: "Local",
        anchor_employers: ["Greystar (regional)", "The Corky McMillin Companies", "HomeFed Corporation"],
        student_connection: "San Diego North County's real estate market is one of the most dynamic in California — and the development, architecture, and property management industries surrounding it offer distinctive career pathways."
      },
      {
        name: "Healthcare & Life Sciences",
        naics: 62,
        distance: "15 miles — La Jolla",
        anchor_employers: ["Scripps Health", "UC San Diego Health", "Salk Institute for Biological Studies"],
        student_connection: "The Salk Institute — where Jonas Salk developed the polio vaccine — is 15 miles south in La Jolla, and UC San Diego Health is one of the top academic medical centers in the country."
      },
      {
        name: "Agriculture & Specialty Food",
        naics: 11,
        distance: "Local — North County San Diego",
        anchor_employers: ["Cal-Organic Farms", "Specialty Produce", "numerous organic farms"],
        student_connection: "North County San Diego is one of California's premier agricultural regions — producing avocados, citrus, strawberries, and specialty crops, with a growing farm-to-table and food science industry."
      }
    ]
  },

  "92130": {
    zip: "92130",
    neighborhood: "Carmel Valley / San Diego",
    county: "San Diego",
    clusters: [
      {
        name: "Biotech & Pharmaceutical Research",
        naics: 54,
        distance: "5 miles — Torrey Pines / Sorrento Valley",
        anchor_employers: ["Illumina (San Diego HQ)", "Pfizer (La Jolla)", "Neurocrine Biosciences", "Ionis Pharmaceuticals"],
        student_connection: "Carmel Valley sits at the edge of the world's third-largest biotech cluster — Torrey Pines Mesa and Sorrento Valley are 5 miles away and house more than 200 life sciences companies."
      },
      {
        name: "Technology & Telecommunications",
        naics: 51,
        distance: "5 miles — Sorrento Valley",
        anchor_employers: ["Qualcomm (San Diego HQ)", "Viasat", "ServiceNow"],
        student_connection: "Qualcomm — the company whose technology powers almost every smartphone on earth — is headquartered in Sorrento Valley, 5 miles from Carmel Valley. San Diego's tech sector is the fastest-growing in California outside of Silicon Valley."
      },
      {
        name: "Defense & National Security",
        naics: 92,
        distance: "15 miles — Miramar / Point Loma",
        anchor_employers: ["General Atomics", "SAIC", "Leidos", "SPAWAR / Naval Information Warfare Center"],
        student_connection: "San Diego is home to the largest concentration of military and defense institutions in the US — and the defense technology sector employing engineers, cybersecurity specialists, and systems analysts is centered 15 miles south."
      },
      {
        name: "Healthcare & Academic Medicine",
        naics: 62,
        distance: "8 miles — La Jolla / Torrey Pines",
        anchor_employers: ["UC San Diego Health", "Scripps Health", "Salk Institute"],
        student_connection: "UCSD Health and Scripps Health are two of the most respected medical institutions in California — both within 8 miles — and the La Jolla research corridor is home to some of the most significant biomedical research in the world."
      },
      {
        name: "Finance & Venture Capital",
        naics: 52,
        distance: "10 miles — La Jolla / Downtown San Diego",
        anchor_employers: ["Avalon Bay Capital", "various VC firms funding biotech startups", "Western Alliance Bank"],
        student_connection: "San Diego's venture capital community is heavily focused on life sciences — and the intersection of biotech, defense tech, and software is creating a distinctive investment ecosystem unique to this region."
      }
    ]
  }

};

// ─────────────────────────────────────────────────────────────
// GEO LOOKUP FUNCTION
// Called by assembleProfile() to populate geo intelligence
// Returns the richest possible match for a given ZIP
// ─────────────────────────────────────────────────────────────

function getGeoIntelligence(zip) {
  if (!zip || zip.length < 5) return getDefaultGeo(zip);

  // Exact ZIP match first
  if (GEO_INDUSTRY_DB[zip]) return GEO_INDUSTRY_DB[zip];

  // 3-digit prefix match
  const prefix3 = zip.slice(0, 3);
  const prefix3Match = Object.values(GEO_INDUSTRY_DB).find(entry =>
    entry.zip.startsWith(prefix3)
  );
  if (prefix3Match) return prefix3Match;

  // 2-digit prefix match
  const prefix2 = zip.slice(0, 2);
  const prefix2Match = Object.values(GEO_INDUSTRY_DB).find(entry =>
    entry.zip.startsWith(prefix2)
  );
  if (prefix2Match) return prefix2Match;

  return getDefaultGeo(zip);
}

function getDefaultGeo(zip) {
  return {
    zip: zip || 'unknown',
    neighborhood: 'your area',
    county: '',
    clusters: [
      {
        name: "Healthcare & Social Services",
        naics: 62,
        distance: "in your region",
        anchor_employers: ["local hospitals", "healthcare systems", "medical groups"],
        student_connection: "Healthcare is the largest employment sector in the United States — and opportunities exist in every region."
      },
      {
        name: "Technology & Software",
        naics: 51,
        distance: "in your region",
        anchor_employers: ["regional tech companies", "remote-first technology firms"],
        student_connection: "Technology careers are increasingly location-independent — and the skills that lead to them are available everywhere."
      },
      {
        name: "Education & Research",
        naics: 61,
        distance: "in your region",
        anchor_employers: ["local universities", "community colleges", "research institutions"],
        student_connection: "Education and research institutions are anchors of every regional economy — and offer careers from teaching and administration to cutting-edge research."
      }
    ]
  };
}

// Helper: get top N clusters for a student profile
// Filters clusters by NAICS alignment with student's top sectors
function getRelevantClusters(zip, naicsSectors, maxClusters = 4) {
  const geo = getGeoIntelligence(zip);
  if (!geo || !geo.clusters) return [];

  const topNAICS = new Set((naicsSectors || []).slice(0, 5).map(n => n.sector));

  // Score clusters by NAICS alignment
  const scored = geo.clusters.map(cluster => ({
    ...cluster,
    score: topNAICS.has(cluster.naics) ? 10 : 3
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, maxClusters);
}

if (typeof module !== 'undefined') module.exports = {
  GEO_INDUSTRY_DB,
  getGeoIntelligence,
  getDefaultGeo,
  getRelevantClusters
};
