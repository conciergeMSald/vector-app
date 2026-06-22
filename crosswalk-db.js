/**
 * VECTOR Interest → Industry Crosswalk Database
 * Version: 1.0
 * Architecture: interest_tag → RIASEC codes + NAICS sectors + career emergence + geo signal + EQ multipliers
 *
 * SCHEMA PER ENTRY:
 * {
 *   id: string                  — unique tile ID (snake_case)
 *   label: string               — display label (tile text)
 *   cluster: string             — make | move | think | people | systems | eq
 *   riasec: string[]            — Holland codes this tile signals (R/I/A/S/E/C)
 *   naics_sectors: number[]     — 2-digit NAICS sector codes
 *   industries: string[]        — human-readable industry names (IBIS-aligned)
 *   career_emergence: string[]  — specific careers that surface from this tile
 *   geo_signal: boolean         — true if ZIP proximity meaningfully changes output
 *   eq_multiplier: boolean      — true if this tile amplifies other tile signals
 *   combo_unlocks: object[]     — [{with: tile_id[], unlocks: string[]}] — combination pathways
 * }
 *
 * NAICS SECTOR REFERENCE:
 * 11 Agriculture / Forestry / Fishing
 * 21 Mining / Oil & Gas
 * 22 Utilities
 * 23 Construction
 * 31-33 Manufacturing
 * 42 Wholesale Trade
 * 44-45 Retail Trade
 * 48-49 Transportation & Warehousing
 * 51 Information
 * 52 Finance & Insurance
 * 53 Real Estate
 * 54 Professional / Scientific / Technical Services
 * 55 Management of Companies
 * 56 Administrative & Support / Waste Management
 * 61 Educational Services
 * 62 Health Care & Social Assistance
 * 71 Arts / Entertainment / Recreation
 * 72 Accommodation & Food Services
 * 81 Other Services (repair, personal care, religious)
 * 92 Public Administration
 */

const VECTOR_CROSSWALK = [

  // ─────────────────────────────────────────────
  // MAKE & CREATE
  // ─────────────────────────────────────────────

  {
    id: "cooking",
    label: "Cooking",
    cluster: "make",
    riasec: ["R", "A", "I"],
    naics_sectors: [72, 31, 54, 62],
    industries: [
      "Food Services & Restaurants",
      "Food Manufacturing",
      "Food Science & R&D",
      "Nutrition & Dietetics",
      "Culinary Arts Education"
    ],
    career_emergence: [
      "Chef / Executive Chef", "Food Scientist", "Registered Dietitian",
      "Recipe Developer", "Food Stylist", "Restaurant Owner",
      "Test Kitchen Director", "Food & Beverage Director"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["baking", "cosmetic_beauty_science"], unlocks: ["Cosmetic Chemist", "Fragrance Developer", "Product Formulator"] },
      { with: ["nutrition_food_science"], unlocks: ["Clinical Nutritionist", "Sports Dietitian", "Food Toxicologist"] },
      { with: ["entrepreneurship"], unlocks: ["Food Entrepreneur", "CPG Brand Founder", "Food Truck Owner"] },
      { with: ["i_feel_things_deeply"], unlocks: ["Therapeutic Chef", "Culinary Therapist", "Community Food Advocate"] }
    ]
  },

  {
    id: "baking",
    label: "Baking",
    cluster: "make",
    riasec: ["R", "A", "I"],
    naics_sectors: [72, 31, 54, 33],
    industries: [
      "Bakery & Confectionery Manufacturing",
      "Food Science & R&D",
      "Cosmetic & Personal Care Manufacturing",
      "Fragrance Industry",
      "Food Services"
    ],
    career_emergence: [
      "Pastry Chef", "Bakery Owner", "Food Scientist",
      "Cosmetic Chemist", "Confectionery Developer", "Product Formulator"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["cosmetic_beauty_science", "chemistry"], unlocks: ["Cosmetic Chemist", "Fragrance Chemist", "Skincare Formulator"] },
      { with: ["entrepreneurship"], unlocks: ["Bakery Founder", "Specialty Food Brand Owner"] },
      { with: ["cooking_chemistry"], unlocks: ["Food Technologist", "Flavor Scientist", "R&D Chef"] }
    ]
  },

  {
    id: "drawing",
    label: "Drawing",
    cluster: "make",
    riasec: ["A", "I"],
    naics_sectors: [54, 51, 71, 44],
    industries: [
      "Graphic Design & Visual Arts",
      "Animation & Film",
      "Architecture & Urban Design",
      "Fashion Design",
      "Game Design",
      "Publishing & Illustration"
    ],
    career_emergence: [
      "Graphic Designer", "Illustrator", "Concept Artist",
      "Animator", "Architect", "UI/UX Designer", "Art Director"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["animation", "roblox_game_design"], unlocks: ["Game Artist", "Character Designer", "Motion Graphics Designer"] },
      { with: ["architecture"], unlocks: ["Architectural Illustrator", "Urban Designer", "Interior Designer"] },
      { with: ["fashion_design"], unlocks: ["Fashion Illustrator", "Textile Designer", "Brand Identity Designer"] }
    ]
  },

  {
    id: "painting",
    label: "Painting",
    cluster: "make",
    riasec: ["A"],
    naics_sectors: [71, 54, 61],
    industries: ["Fine Arts", "Art Education", "Gallery & Museum Sector", "Commercial Art"],
    career_emergence: ["Fine Artist", "Art Therapist", "Museum Curator", "Art Educator", "Commercial Illustrator"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Art Therapist", "Expressive Arts Therapist"] }
    ]
  },

  {
    id: "photography",
    label: "Photography",
    cluster: "make",
    riasec: ["A", "R"],
    naics_sectors: [54, 51, 71, 81],
    industries: ["Photography Services", "Advertising & Media", "Journalism & Publishing", "Fashion Industry"],
    career_emergence: ["Commercial Photographer", "Photojournalist", "Creative Director", "Fashion Photographer", "Medical Photographer"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["journalism"], unlocks: ["Photojournalist", "Documentary Photographer"] },
      { with: ["fashion_personal_style"], unlocks: ["Fashion Photographer", "Editorial Director"] },
      { with: ["medical_science"], unlocks: ["Medical / Forensic Photographer"] }
    ]
  },

  {
    id: "filmmaking",
    label: "Filmmaking",
    cluster: "make",
    riasec: ["A", "E", "I"],
    naics_sectors: [51, 71, 54],
    industries: ["Film & Television Production", "Streaming & Digital Media", "Advertising & Marketing", "Documentary"],
    career_emergence: ["Film Director", "Producer", "Screenwriter", "Video Editor", "Cinematographer", "Content Creator"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["social_media_content"], unlocks: ["Digital Content Director", "Brand Filmmaker", "Social Video Producer"] },
      { with: ["journalism"], unlocks: ["Documentary Filmmaker", "Broadcast Journalist"] }
    ]
  },

  {
    id: "fashion_design",
    label: "Fashion design",
    cluster: "make",
    riasec: ["A", "E"],
    naics_sectors: [31, 44, 54, 81],
    industries: ["Apparel Manufacturing", "Fashion Retail", "Textile Industry", "Luxury Goods"],
    career_emergence: ["Fashion Designer", "Textile Designer", "Merchandiser", "Buyer", "Stylist", "Brand Manager"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["entrepreneurship"], unlocks: ["Fashion Brand Founder", "Sustainable Fashion CEO"] },
      { with: ["social_media_content"], unlocks: ["Fashion Influencer", "Brand Collaborations Manager"] }
    ]
  },

  {
    id: "graphic_design",
    label: "Graphic design",
    cluster: "make",
    riasec: ["A", "C"],
    naics_sectors: [54, 51, 44],
    industries: ["Graphic Design Services", "Advertising & Marketing", "Publishing", "Tech & Software"],
    career_emergence: ["Graphic Designer", "Brand Designer", "UI/UX Designer", "Creative Director", "Motion Designer"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["coding_apps"], unlocks: ["UI/UX Designer", "Product Designer", "Design Engineer"] },
      { with: ["entrepreneurship"], unlocks: ["Design Consultant", "Creative Agency Founder"] }
    ]
  },

  {
    id: "animation",
    label: "Animation",
    cluster: "make",
    riasec: ["A", "I"],
    naics_sectors: [51, 71, 54],
    industries: ["Animation & Visual Effects", "Film & Television", "Game Development", "Advertising"],
    career_emergence: ["Animator", "VFX Artist", "Motion Designer", "Game Animator", "Storyboard Artist"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["roblox_game_design", "coding_programming"], unlocks: ["Game Developer", "Interactive Experience Designer"] }
    ]
  },

  {
    id: "music_production",
    label: "Music production",
    cluster: "make",
    riasec: ["A", "I", "E"],
    naics_sectors: [51, 71, 81, 101],
    industries: ["Music Recording & Production", "Entertainment", "Streaming & Digital Media", "Advertising"],
    career_emergence: ["Music Producer", "Sound Engineer", "Audio Designer", "A&R Executive", "Podcast Producer"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_feel_things_deeply"], unlocks: ["Music Therapist", "Composer for Film", "Soundtrack Producer"] },
      { with: ["entrepreneurship"], unlocks: ["Independent Label Owner", "Artist Manager", "Music Entrepreneur"] },
      { with: ["entrepreneurship", "understanding_why_people"], unlocks: ["Artist Manager", "A&R Executive", "Label Strategy Director"] },
      { with: ["data_statistics", "entrepreneurship"], unlocks: ["Streaming Analytics Manager", "Music Business Analyst", "Rights & Royalty Strategist"] },
      { with: ["philosophy", "writing_stories"], unlocks: ["Music Attorney", "Entertainment Lawyer", "Music IP Specialist", "Publishing Administrator"] },
      { with: ["coding_programming"], unlocks: ["Music Software Developer", "Audio Plugin Engineer", "Music Technology Product Manager", "Game Audio Director"] },
      { with: ["filmmaking"], unlocks: ["Film Composer", "Music Supervisor", "Sync Licensing Executive", "Score Coordinator"] },
      { with: ["planning_trips_adventures", "leading_the_group"], unlocks: ["Tour Manager", "Festival Producer", "Concert Production Director", "Venue Operations Manager"] },
      { with: ["teaching_tutoring"], unlocks: ["Music Business Educator", "Audio Engineering Instructor", "Berklee-Track Music Professional"] },
      { with: ["flow_state"], unlocks: ["Music Producer", "Sound Engineer", "Composer", "Audio Software Developer"] }
    ]
  },

  {
    id: "playing_instrument",
    label: "Playing an instrument",
    cluster: "make",
    riasec: ["A", "S"],
    naics_sectors: [71, 61, 62, 81],
    industries: ["Performing Arts", "Music Education", "Music Therapy", "Entertainment"],
    career_emergence: ["Musician", "Music Educator", "Music Therapist", "Conductor", "Session Musician"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Music Therapist", "Neurologic Music Therapist"] },
      { with: ["teaching_tutoring"], unlocks: ["Music Educator", "Suzuki Instructor", "School Band Director", "Private Studio Teacher"] },
      { with: ["medical_science", "i_feel_things_deeply"], unlocks: ["Music Therapist", "Rehabilitation Specialist"] },
      { with: ["flow_state"], unlocks: ["Session Musician", "Orchestral Musician", "Composer", "Friday Night Musician — Serious Practitioner"] },
      { with: ["flow_state", "teaching_tutoring"], unlocks: ["Band Director", "Orchestral Conductor", "Music Educator who performs — the most complete musical life"] },
      { with: ["entrepreneurship", "understanding_why_people"], unlocks: ["Artist Manager", "Talent Scout", "Music Academy Founder"] },
      { with: ["philosophy", "writing_stories"], unlocks: ["Music Attorney", "Entertainment Lawyer", "Rights Advocate"] },
      { with: ["advocacy_activism", "volunteering"], unlocks: ["Community Music Director", "Music Therapy Program Director", "Arts Access Advocate"] }
    ]
  },

  {
    id: "singing",
    label: "Singing",
    cluster: "make",
    riasec: ["A", "S", "E"],
    naics_sectors: [71, 61, 81],
    industries: ["Performing Arts", "Music Industry", "Entertainment", "Religious Organizations"],
    career_emergence: ["Vocalist", "Choral Director", "Voice Coach", "Cantor", "Music Teacher"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["acting_theater"], unlocks: ["Musical Theater Performer", "Opera Singer", "Broadway Cast Member"] },
      { with: ["flow_state"], unlocks: ["Professional Vocalist", "Choral Director", "Worship Music Director", "Voice Coach"] },
      { with: ["teaching_tutoring"], unlocks: ["Choral Director", "Voice Teacher", "Worship Music Leader", "Music Education — Vocal Track"] },
      { with: ["volunteering", "advocacy_activism"], unlocks: ["Worship Music Director", "Community Choir Director", "Music Access Program Leader"] },
      { with: ["entrepreneurship"], unlocks: ["Independent Artist", "Vocal Coaching Business Owner", "Music Content Creator"] },
      { with: ["filmmaking", "music_production"], unlocks: ["Session Vocalist", "Jingle Singer", "Film Score Vocalist", "Commercial Voice Artist"] }
    ]
  },

  {
    id: "writing_stories",
    label: "Writing stories",
    cluster: "make",
    riasec: ["A", "I"],
    naics_sectors: [51, 61, 54, 71],
    industries: ["Publishing", "Journalism & Media", "Screenwriting", "Content & Copywriting", "Education"],
    career_emergence: ["Author", "Screenwriter", "Content Strategist", "Editor", "Copywriter", "Journalist"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["psychology"], unlocks: ["Narrative Therapist", "Mental Health Author", "UX Writer"] },
      { with: ["filmmaking"], unlocks: ["Screenwriter", "Story Developer", "Script Consultant"] }
    ]
  },

  {
    id: "nail_art",
    label: "Nail art",
    cluster: "make",
    riasec: ["A", "R"],
    naics_sectors: [81, 31, 44],
    industries: ["Personal Care Services", "Cosmetic & Beauty Manufacturing", "Retail Beauty"],
    career_emergence: ["Nail Technician", "Cosmetic Chemist", "Beauty Brand Developer", "Nail Artist", "Beauty Educator"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["cosmetic_beauty_science", "chemistry"], unlocks: ["Cosmetic Chemist", "Product Formulator", "Skincare Developer"] },
      { with: ["entrepreneurship"], unlocks: ["Salon Owner", "Beauty Brand Founder"] }
    ]
  },

  {
    id: "content_creation",
    label: "Making content — TikTok, YouTube, Reels",
    cluster: "make",
    riasec: ["A", "E", "I"],
    naics_sectors: [51, 71, 81, 44],
    industries: [
      "Digital Media & Content", "Social Media Marketing", "Brand Partnerships",
      "Streaming & Creator Economy", "Advertising & PR", "Beauty & Lifestyle Media"
    ],
    career_emergence: [
      "Content Creator", "Social Media Strategist", "Brand Partnerships Director",
      "UGC Creator", "Digital Marketing Manager", "Influencer Marketing Manager",
      "Creative Director", "YouTube / TikTok Producer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["hair_makeup"], unlocks: ["Beauty Content Creator", "Makeup Tutorial Creator", "Brand Ambassador"] },
      { with: ["filmmaking"], unlocks: ["Video Producer", "Creative Director", "Short-Form Film Director"] },
      { with: ["entrepreneurship"], unlocks: ["Creator Economy Entrepreneur", "Brand Founder", "Agency Owner"] },
      { with: ["i_can_talk_to_anyone"], unlocks: ["On-Camera Host", "Social Media Personality", "Brand Spokesperson"] }
    ]
  },

  {
    id: "hair_makeup",
    label: "Hair & makeup",
    cluster: "make",
    riasec: ["A", "S", "R"],
    naics_sectors: [81, 31, 71],
    industries: ["Personal Care Services", "Cosmetic Manufacturing", "Film & TV", "Fashion Industry"],
    career_emergence: ["Makeup Artist", "Hair Stylist", "Cosmetic Formulator", "Beauty Director", "Film/TV Makeup Artist"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["cosmetic_beauty_science"], unlocks: ["Cosmetic Chemist", "Skincare Formulator", "Beauty R&D Scientist"] },
      { with: ["filmmaking", "acting_theater"], unlocks: ["Film Makeup Artist", "Special Effects Makeup", "Prosthetics Designer"] }
    ]
  },

  {
    id: "legos_building",
    label: "Legos & building things",
    cluster: "make",
    riasec: ["R", "I", "A"],
    naics_sectors: [33, 54, 23],
    industries: [
      "Product Design", "Architecture & Built Environment", "Engineering",
      "Toy & Consumer Product Design", "Construction & Development", "Education Technology"
    ],
    career_emergence: [
      "Product Designer", "Architect", "Structural Engineer",
      "Industrial Designer", "Urban Planner", "Set Designer",
      "Mechanical Engineer", "Physical Prototyping Engineer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["engineering_challenges"], unlocks: ["Mechanical Engineer", "Structural Engineer", "Physical Product Designer"] },
      { with: ["architecture"], unlocks: ["Architect", "Urban Designer", "Interior Architect"] },
      { with: ["roblox_game_design"], unlocks: ["3D Environment Designer", "Product Prototyping Engineer", "Game Level Designer"] }
    ]
  },

  {
    id: "woodworking",
    label: "Woodworking",
    cluster: "make",
    riasec: ["R", "A"],
    naics_sectors: [23, 31, 54, 44],
    industries: ["Construction & Carpentry", "Furniture Manufacturing", "Interior Design", "Architecture"],
    career_emergence: ["Carpenter", "Cabinet Maker", "Furniture Designer", "General Contractor", "Set Designer"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["architecture"], unlocks: ["Architectural Woodworker", "Interior Finish Specialist"] },
      { with: ["entrepreneurship"], unlocks: ["Custom Furniture Maker", "Craft Business Owner"] }
    ]
  },

  {
    id: "three_d_printing",
    label: "3D printing",
    cluster: "make",
    riasec: ["R", "I", "A"],
    naics_sectors: [33, 54, 62, 23],
    industries: ["Advanced Manufacturing", "Medical Device Manufacturing", "Product Design", "Aerospace"],
    career_emergence: ["Product Designer", "Manufacturing Engineer", "Prosthetics Designer", "Aerospace Engineer", "Materials Scientist"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["medical_science"], unlocks: ["Biomedical Engineer", "Prosthetics Designer", "Surgical Device Developer"] },
      { with: ["engineering_challenges"], unlocks: ["Manufacturing Engineer", "Materials Scientist"] }
    ]
  },

  // ─────────────────────────────────────────────
  // MOVE & COMPETE
  // ─────────────────────────────────────────────

  {
    id: "dance",
    label: "Dance",
    cluster: "move",
    riasec: ["A", "S", "R"],
    naics_sectors: [71, 61, 62, 81],
    industries: ["Performing Arts", "Dance Education", "Physical Therapy & Rehab", "Entertainment", "Health & Wellness"],
    career_emergence: [
      "Dancer / Choreographer", "Dance Educator", "Movement Therapist",
      "Dance/Movement Therapist", "Physical Therapist", "Pilates Instructor",
      "Arts Administrator", "Kinesiology Researcher"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Dance/Movement Therapist", "Somatic Therapist", "Expressive Arts Therapist"] },
      { with: ["how_body_moves"], unlocks: ["Physical Therapist", "Kinesiologist", "Athletic Trainer"] },
      { with: ["little_kids_love_me", "working_with_little_kids"], unlocks: ["Pediatric Dance Therapist", "Early Childhood Movement Educator"] }
    ]
  },

  {
    id: "cheerleading",
    label: "Cheerleading",
    cluster: "move",
    riasec: ["S", "A", "E", "R"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Performing Arts", "Sports Medicine", "Education"],
    career_emergence: [
      "Athletic Director", "Coach", "Sports Medicine Professional",
      "Choreographer", "Physical Education Teacher", "Event Coordinator"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together", "performing_in_front_of_people"], unlocks: ["Team Captain", "Athletic Director", "Team Coach"] },
      { with: ["how_body_moves"], unlocks: ["Sports Medicine", "Cheer Coach", "Athletic Trainer"] }
    ]
  },

  {
    id: "fitness_lifting",
    label: "Fitness & lifting",
    cluster: "move",
    riasec: ["R", "S", "E"],
    naics_sectors: [71, 62, 81],
    industries: ["Health & Fitness", "Sports Medicine", "Physical Therapy", "Nutritional Supplements", "Coaching"],
    career_emergence: [
      "Personal Trainer", "Physical Therapist", "Sports Medicine Physician",
      "Strength & Conditioning Coach", "Occupational Therapist", "Exercise Physiologist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["how_body_moves", "biology"], unlocks: ["Exercise Physiologist", "Sports Scientist", "Physical Therapist"] },
      { with: ["want_to_fix_it_not_talk_about_it"], unlocks: ["Physical Therapist", "Orthopedic Surgeon", "Sports Medicine Physician"] }
    ]
  },

  {
    id: "fitness_classes",
    label: "Taking fitness classes (Pilates, F45, SoulCycle)",
    cluster: "move",
    riasec: ["S", "E", "R"],
    naics_sectors: [81, 62, 71],
    industries: [
      "Health & Wellness", "Boutique Fitness", "Corporate Wellness",
      "Sports Medicine", "Lifestyle Brands", "Wellness Technology"
    ],
    career_emergence: [
      "Fitness Studio Owner", "Boutique Fitness Instructor", "Corporate Wellness Director",
      "Health & Wellness Coach", "Physical Therapist", "Wellness Brand Founder",
      "Community Manager", "Group Fitness Director"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["entrepreneurship"], unlocks: ["Fitness Studio Founder", "Wellness Brand Entrepreneur", "Health Tech Founder"] },
      { with: ["how_body_moves"], unlocks: ["Physical Therapist", "Exercise Physiologist", "Movement Coach"] },
      { with: ["i_know_everyone"], unlocks: ["Community Director", "Brand Ambassador", "Wellness Influencer"] }
    ]
  },

  {
    id: "yoga",
    label: "Yoga",
    cluster: "move",
    riasec: ["S", "A", "I"],
    naics_sectors: [62, 81, 71],
    industries: ["Health & Wellness", "Mental Health Services", "Education", "Integrative Medicine"],
    career_emergence: ["Yoga Instructor", "Wellness Coach", "Occupational Therapist", "Physical Therapist", "Mindfulness Consultant"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["mental_health_wellness", "i_feel_things_deeply"], unlocks: ["Somatic Therapist", "Mindfulness-Based Therapist", "Integrative Health Practitioner"] },
      { with: ["i_slow_down_for_people"], unlocks: ["Adaptive Yoga Instructor", "Occupational Therapist"] }
    ]
  },

  {
    id: "martial_arts",
    label: "Martial arts",
    cluster: "move",
    riasec: ["R", "S", "E"],
    naics_sectors: [71, 62, 92],
    industries: ["Athletics", "Public Safety / Law Enforcement", "Defense", "Education", "Health & Wellness"],
    career_emergence: ["Instructor / Coach", "Law Enforcement Officer", "Military Officer", "Physical Therapist", "Sports Psychologist"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_stay_calm_when_things_go_wrong"], unlocks: ["Law Enforcement", "Military Officer", "Emergency Medicine", "Surgeon"] }
    ]
  },

  {
    id: "esports_gaming",
    label: "eSports & competitive gaming",
    cluster: "think",
    riasec: ["I", "E", "C"],
    naics_sectors: [51, 71, 54],
    industries: ["Video Game Industry", "Esports", "Streaming & Content", "Game Design", "Sports Management"],
    career_emergence: ["Professional Gamer", "Esports Coach", "Game Designer", "Esports Analyst", "Gaming Content Creator", "Tournament Organizer"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["coding_programming", "ai_machine_learning"], unlocks: ["Game Developer", "AI Behavior Programmer", "Game Engine Engineer"] },
      { with: ["data_statistics"], unlocks: ["Esports Analyst", "Performance Data Scientist"] }
    ]
  },

  {
    id: "horseback_riding",
    label: "Horseback riding",
    cluster: "move",
    riasec: ["R", "S", "I"],
    naics_sectors: [11, 71, 62],
    industries: ["Equine Industry", "Animal Science", "Veterinary Medicine", "Therapeutic Riding", "Agriculture"],
    career_emergence: ["Equine Veterinarian", "Equine Therapist", "Riding Instructor", "Hippotherapy Specialist", "Ranch Manager"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["animals_trust_me", "i_slow_down_for_people"], unlocks: ["Hippotherapy Practitioner", "Therapeutic Riding Instructor", "Equine-Assisted Therapist"] }
    ]
  },

  {
    id: "rock_climbing",
    label: "Rock climbing",
    cluster: "move",
    riasec: ["R", "I"],
    naics_sectors: [71, 62, 54],
    industries: ["Outdoor Recreation", "Sports Medicine", "Physical Therapy", "Environmental Science"],
    career_emergence: ["Climbing Coach", "Physical Therapist", "Outdoor Educator", "Environmental Scientist", "Guide"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["environment_sustainability"], unlocks: ["Conservation Biologist", "Outdoor Environmental Educator"] }
    ]
  },

  // ── Team sports — Social/Enterprising signal: coordination, leadership, performing under collective pressure ──

  {
    id: "soccer",
    label: "Soccer",
    cluster: "move",
    riasec: ["S", "E", "R"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Sports Medicine", "Sports Management", "Coaching & Education", "International Sports"],
    career_emergence: [
      "Professional Athlete", "Coach", "Athletic Director", "Sports Medicine Physician",
      "Sports Marketing Executive", "Sports Agent", "International Sports Diplomat"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Athletic Director", "Head Coach"] },
      { with: ["how_body_moves"], unlocks: ["Sports Medicine Physician", "Athletic Trainer", "Kinesiologist"] },
      { with: ["people_always_want_me_on_their_team"], unlocks: ["Professional Athlete", "Team Captain", "Sports Recruiter"] }
    ]
  },

  {
    id: "basketball",
    label: "Basketball",
    cluster: "move",
    riasec: ["S", "E", "R"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Sports Medicine", "Sports Analytics", "Sports Management", "Broadcasting"],
    career_emergence: [
      "Professional Athlete", "Coach", "Sports Analyst", "Athletic Director",
      "Sports Broadcaster", "Sports Agent", "Athletic Trainer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Head Coach", "Player Development Director"] },
      { with: ["data_statistics"], unlocks: ["Sports Analyst", "Performance Data Scientist", "Scouting Director"] }
    ]
  },

  {
    id: "football",
    label: "Football",
    cluster: "move",
    riasec: ["S", "E", "R"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Sports Medicine", "Sports Management", "Coaching & Education", "Broadcasting"],
    career_emergence: [
      "Professional Athlete", "Coach", "Athletic Director", "Sports Medicine Physician",
      "Strength & Conditioning Coach", "Sports Broadcaster", "Sports Agent"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Offensive Coordinator", "Head Coach"] },
      { with: ["how_body_moves"], unlocks: ["Sports Medicine Physician", "Strength & Conditioning Coach", "Orthopedic Surgeon"] }
    ]
  },

  {
    id: "baseball_softball",
    label: "Baseball / Softball",
    cluster: "move",
    riasec: ["C", "R", "S"],
    naics_sectors: [71, 61, 54],
    industries: ["Athletics & Sports", "Sports Analytics", "Sports Management", "Broadcasting", "Coaching & Education"],
    career_emergence: [
      "Professional Athlete", "Coach", "Sports Analyst", "Scout",
      "Sports Broadcaster", "Athletic Director", "Sports Agent"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["data_statistics"], unlocks: ["Sports Analyst", "Sabermetrics Analyst", "Scouting Director"] },
      { with: ["i_ask_why"], unlocks: ["Sports Analyst", "Performance Strategist"] }
    ]
  },

  {
    id: "volleyball",
    label: "Volleyball",
    cluster: "move",
    riasec: ["S", "E", "R"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Sports Medicine", "Coaching & Education", "Sports Management"],
    career_emergence: [
      "Professional Athlete", "Coach", "Athletic Director", "Physical Therapist",
      "Sports Medicine Physician", "Athletic Trainer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Head Coach"] },
      { with: ["how_body_moves"], unlocks: ["Athletic Trainer", "Physical Therapist"] }
    ]
  },

  {
    id: "lacrosse",
    label: "Lacrosse",
    cluster: "move",
    riasec: ["S", "E", "R"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Sports Management", "Coaching & Education", "Sports Medicine"],
    career_emergence: [
      "Professional Athlete", "Coach", "Athletic Director", "Sports Medicine Physician",
      "Sports Marketing Executive", "Athletic Trainer"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Head Coach"] }
    ]
  },

  {
    id: "ice_hockey",
    label: "Ice hockey",
    cluster: "move",
    riasec: ["S", "E", "R"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Sports Management", "Coaching & Education", "Sports Medicine"],
    career_emergence: [
      "Professional Athlete", "Coach", "Athletic Director", "Sports Medicine Physician",
      "Sports Marketing Executive", "Athletic Trainer"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Head Coach"] }
    ]
  },

  // ── Individual competitive sports — Realistic/Conventional signal: self-measured discipline, data, solo accountability ──

  {
    id: "track_field",
    label: "Track & field",
    cluster: "move",
    riasec: ["R", "C", "I"],
    naics_sectors: [71, 61, 54],
    industries: ["Athletics & Sports", "Sports Analytics", "Coaching & Education", "Exercise Science"],
    career_emergence: [
      "Professional Athlete", "Track Coach", "Exercise Physiologist", "Sports Analyst",
      "Athletic Trainer", "Kinesiologist", "Sports Scientist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["data_statistics"], unlocks: ["Sports Scientist", "Performance Data Analyst"] },
      { with: ["how_body_moves"], unlocks: ["Exercise Physiologist", "Kinesiologist", "Sports Scientist"] }
    ]
  },

  {
    id: "swimming",
    label: "Swimming",
    cluster: "move",
    riasec: ["R", "C", "I"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Exercise Science", "Coaching & Education", "Sports Medicine"],
    career_emergence: [
      "Professional Athlete", "Swim Coach", "Exercise Physiologist", "Physical Therapist",
      "Athletic Trainer", "Sports Scientist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["how_body_moves"], unlocks: ["Exercise Physiologist", "Sports Scientist", "Physical Therapist"] }
    ]
  },

  {
    id: "gymnastics",
    label: "Gymnastics",
    cluster: "move",
    riasec: ["R", "A", "C"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Performing Arts", "Sports Medicine", "Coaching & Education"],
    career_emergence: [
      "Professional Athlete", "Gymnastics Coach", "Choreographer", "Physical Therapist",
      "Sports Medicine Physician", "Athletic Trainer"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["how_body_moves"], unlocks: ["Physical Therapist", "Sports Medicine Physician", "Athletic Trainer"] },
      { with: ["i_lose_track_of_time_making"], unlocks: ["Choreographer", "Routine Designer"] }
    ]
  },

  {
    id: "wrestling",
    label: "Wrestling",
    cluster: "move",
    riasec: ["R", "C", "I"],
    naics_sectors: [71, 61, 92],
    industries: ["Athletics & Sports", "Coaching & Education", "Sports Medicine", "Public Safety / Law Enforcement"],
    career_emergence: [
      "Professional Athlete", "Wrestling Coach", "Strength & Conditioning Coach", "Athletic Trainer",
      "Law Enforcement Officer", "Military Officer", "Sports Medicine Physician"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_stay_calm_when_things_go_wrong"], unlocks: ["Law Enforcement", "Military Officer", "Strength & Conditioning Coach"] }
    ]
  },

  {
    id: "tennis",
    label: "Tennis",
    cluster: "move",
    riasec: ["R", "I", "C"],
    naics_sectors: [71, 61, 81],
    industries: ["Athletics & Sports", "Coaching & Education", "Sports Management", "Hospitality & Country Clubs"],
    career_emergence: [
      "Professional Athlete", "Tennis Coach", "Sports Psychologist", "Sports Management Executive",
      "Athletic Director", "Country Club Director"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_ask_why"], unlocks: ["Sports Psychologist", "Performance Strategist"] },
      { with: ["i_know_everyone"], unlocks: ["Corporate Account Executive", "Business Development Director", "Country Club Director"] },
      { with: ["law_justice"], unlocks: ["Corporate Attorney", "Sports Agent", "Entertainment Lawyer"] }
    ]
  },

  // ── Access/endurance-coded sports — distinct geography, often prep-school or club-team signal ──

  {
    id: "golf",
    label: "Golf",
    cluster: "move",
    riasec: ["E", "R", "C"],
    naics_sectors: [52, 81, 71],
    industries: [
      "Business & Finance", "Real Estate", "Private Equity", "Energy & Oil & Gas",
      "Hospitality & Country Clubs", "Sports Management"
    ],
    career_emergence: [
      "Investment Banker", "Private Equity Partner", "Real Estate Developer",
      "Corporate Attorney", "Country Club General Manager",
      "Golf Instructor", "Sports Management Executive"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_know_everyone"], unlocks: ["Private Equity Partner", "Real Estate Developer", "Business Development Director"] },
      { with: ["i_can_talk_to_anyone"], unlocks: ["Investment Banker", "Corporate Attorney", "Business Development Executive"] },
      { with: ["economics"], unlocks: ["Private Equity Analyst", "Hedge Fund Manager", "Financial Advisor"] },
      { with: ["law_justice"], unlocks: ["Corporate Attorney", "M&A Counsel", "Real Estate Attorney"] },
      { with: ["entrepreneurship"], unlocks: ["Real Estate Developer", "Business Owner", "Venture Capital Partner"] }
    ]
  },

  {
    id: "crew_rowing",
    label: "Crew / Rowing",
    cluster: "move",
    riasec: ["R", "C", "S"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Coaching & Education", "Exercise Science", "Sports Medicine"],
    career_emergence: [
      "Professional Athlete", "Crew Coach", "Exercise Physiologist", "Sports Scientist",
      "Athletic Trainer", "Sports Performance Coach"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Crew Coach"] },
      { with: ["how_body_moves"], unlocks: ["Exercise Physiologist", "Sports Scientist"] }
    ]
  },

  {
    id: "cross_country",
    label: "Cross country",
    cluster: "move",
    riasec: ["R", "I", "C"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Exercise Science", "Coaching & Education", "Sports Medicine"],
    career_emergence: [
      "Professional Athlete", "Distance Running Coach", "Exercise Physiologist", "Sports Scientist",
      "Physical Therapist", "Sports Nutritionist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["how_body_moves"], unlocks: ["Exercise Physiologist", "Sports Scientist"] },
      { with: ["i_ask_why"], unlocks: ["Sports Scientist", "Performance Researcher"] }
    ]
  },

  {
    id: "fencing",
    label: "Fencing",
    cluster: "move",
    riasec: ["R", "I", "C"],
    naics_sectors: [71, 61, 92],
    industries: ["Athletics & Sports", "Coaching & Education", "Sports Psychology"],
    career_emergence: [
      "Professional Athlete", "Fencing Coach", "Sports Psychologist", "Strategic Analyst",
      "Military Officer", "Olympic Coach"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_ask_why"], unlocks: ["Sports Psychologist", "Strategic Analyst"] }
    ]
  },

  {
    id: "water_polo",
    label: "Water polo",
    cluster: "move",
    riasec: ["S", "R", "E"],
    naics_sectors: [71, 61, 62],
    industries: ["Athletics & Sports", "Coaching & Education", "Sports Medicine", "Exercise Science"],
    career_emergence: [
      "Professional Athlete", "Water Polo Coach", "Athletic Trainer", "Exercise Physiologist",
      "Sports Medicine Physician"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Captain", "Head Coach"] }
    ]
  },


  // ─────────────────────────────────────────────
  // THINK & EXPLORE
  // ─────────────────────────────────────────────

  {
    id: "science_experiments",
    label: "Science experiments",
    cluster: "think",
    riasec: ["I", "R"],
    naics_sectors: [54, 62, 31, 33],
    industries: ["Scientific Research & Development", "Biotechnology", "Pharmaceutical", "Chemical Manufacturing", "Medical Research"],
    career_emergence: ["Research Scientist", "Lab Technician", "Pharmacologist", "Biomedical Engineer", "Chemical Engineer", "Clinical Researcher"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["baking", "cosmetic_beauty_science"], unlocks: ["Cosmetic Chemist", "Flavor Scientist", "Fragrance Chemist"] },
      { with: ["biology"], unlocks: ["Biologist", "Geneticist", "Epidemiologist", "Microbiologist"] },
      { with: ["chemistry"], unlocks: ["Chemist", "Materials Scientist", "Pharmaceutical Researcher"] },
      { with: ["medical_science"], unlocks: ["Medical Researcher", "Clinical Scientist", "Pathologist"] }
    ]
  },

  {
    id: "psychology",
    label: "Psychology",
    cluster: "think",
    riasec: ["I", "S", "A"],
    naics_sectors: [62, 61, 92, 54],
    industries: ["Mental Health Services", "Research & Academia", "Human Resources", "Healthcare", "Education"],
    career_emergence: [
      "Psychologist", "Therapist / Counselor", "Social Worker",
      "Human Resources Professional", "UX Researcher", "School Counselor",
      "Behavioral Analyst", "Neuropsychologist"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "i_stay_calm_when_things_go_wrong"], unlocks: ["Crisis Counselor", "Trauma Therapist", "Emergency Mental Health"] },
      { with: ["animals_trust_me"], unlocks: ["Animal-Assisted Therapist", "Veterinary Behaviorist"] },
      { with: ["little_kids_love_me"], unlocks: ["Child Psychologist", "Play Therapist", "Pediatric Psychologist"] },
      { with: ["coding_programming", "ai_machine_learning"], unlocks: ["Behavioral Data Scientist", "UX Researcher", "Human-Computer Interaction Researcher"] }
    ]
  },

  {
    id: "biology",
    label: "Biology",
    cluster: "think",
    riasec: ["I", "R"],
    naics_sectors: [62, 54, 11, 31],
    industries: ["Healthcare & Medicine", "Biotechnology", "Environmental Science", "Agriculture", "Pharmaceutical"],
    career_emergence: [
      "Physician", "Nurse", "Dentist", "Physical Therapist", "Occupational Therapist",
      "Biologist", "Geneticist", "Microbiologist", "Ecologist", "Pharmacist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_slow_down_for_people", "i_notice_when_left_out"], unlocks: ["Occupational Therapist", "Rehabilitation Specialist"] },
      { with: ["animals_trust_me"], unlocks: ["Veterinarian", "Wildlife Biologist", "Marine Biologist"] },
      { with: ["little_kids_love_me"], unlocks: ["Pediatrician", "Pediatric Nurse", "Child Life Specialist"] },
      { with: ["want_to_fix_it_not_talk_about_it"], unlocks: ["Surgeon", "Physical Therapist", "Orthopedic Specialist"] }
    ]
  },

  {
    id: "chemistry",
    label: "Chemistry",
    cluster: "think",
    riasec: ["I", "R"],
    naics_sectors: [31, 54, 62, 33],
    industries: ["Chemical Manufacturing", "Pharmaceutical", "Cosmetic Manufacturing", "Food Science", "Materials Science"],
    career_emergence: [
      "Chemist", "Pharmacist", "Cosmetic Chemist", "Materials Scientist",
      "Environmental Chemist", "Food Scientist", "Forensic Chemist"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["baking", "cosmetic_beauty_science"], unlocks: ["Cosmetic Chemist", "Fragrance Chemist", "Skincare R&D Scientist"] },
      { with: ["environment_sustainability"], unlocks: ["Environmental Chemist", "Green Chemistry Researcher"] }
    ]
  },

  {
    id: "coding_programming",
    label: "Coding & programming",
    cluster: "think",
    riasec: ["I", "C", "R"],
    naics_sectors: [51, 54, 52, 62],
    industries: ["Software Development", "Cybersecurity", "FinTech", "Health Tech", "AI & Machine Learning", "Game Development"],
    career_emergence: [
      "Software Engineer", "Data Scientist", "Cybersecurity Analyst",
      "AI/ML Engineer", "Full Stack Developer", "Product Manager", "CTO"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Mental Health App Developer", "Accessibility Engineer"] },
      { with: ["ai_machine_learning"], unlocks: ["AI Researcher", "ML Engineer", "NLP Engineer"] },
      { with: ["entrepreneurship"], unlocks: ["Tech Founder", "CTO", "Product Lead"] }
    ]
  },

  {
    id: "ai_machine_learning",
    label: "AI & machine learning",
    cluster: "think",
    riasec: ["I", "C", "E"],
    naics_sectors: [51, 54, 52, 62],
    industries: ["Artificial Intelligence", "Data Science", "Health Tech", "Autonomous Vehicles", "Finance & FinTech"],
    career_emergence: ["AI Researcher", "ML Engineer", "Data Scientist", "AI Product Manager", "Robotics Engineer"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["medical_science"], unlocks: ["AI Diagnostics Developer", "Computational Biologist", "Health AI Researcher"] }
    ]
  },

  {
    id: "roblox_game_design",
    label: "Building games & virtual worlds",
    cluster: "think",
    riasec: ["I", "A", "C"],
    naics_sectors: [51, 54],
    industries: ["Game Development", "Software Engineering", "Virtual Reality", "EdTech", "Metaverse Platforms"],
    career_emergence: ["Game Designer", "Game Developer", "Level Designer", "Virtual World Developer", "Game Producer"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["coding_programming"], unlocks: ["Game Engine Developer", "Tools Programmer", "Technical Director"] },
      { with: ["entrepreneurship"], unlocks: ["Indie Game Studio Founder", "Game Publisher"] }
    ]
  },

  {
    id: "data_statistics",
    label: "Data & statistics",
    cluster: "think",
    riasec: ["I", "C"],
    naics_sectors: [51, 52, 54, 62],
    industries: ["Data Science & Analytics", "Finance", "Healthcare Analytics", "Government & Policy", "Market Research"],
    career_emergence: ["Data Scientist", "Statistician", "Actuary", "Business Analyst", "Epidemiologist", "Quantitative Analyst"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: []
  },

  {
    id: "philosophy",
    label: "Philosophy",
    cluster: "think",
    riasec: ["I", "A", "S"],
    naics_sectors: [61, 54, 92],
    industries: ["Education & Academia", "Law", "Ethics & Policy", "Technology Ethics", "Publishing"],
    career_emergence: ["Professor", "Attorney", "Ethicist", "Policy Analyst", "Technology Ethics Officer", "Author"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["law_justice"], unlocks: ["Constitutional Attorney", "Bioethicist", "AI Ethics Researcher"] }
    ]
  },

  {
    id: "true_crime",
    label: "True crime",
    cluster: "think",
    riasec: ["I", "S", "A"],
    naics_sectors: [92, 54, 51],
    industries: ["Criminal Justice", "Law", "Journalism", "Psychology", "Forensic Science"],
    career_emergence: ["Criminal Defense Attorney", "Forensic Psychologist", "FBI / Federal Agent", "Crime Journalist", "Forensic Scientist"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["psychology"], unlocks: ["Forensic Psychologist", "Criminal Profiler", "Victim Advocate"] },
      { with: ["law_justice"], unlocks: ["Criminal Attorney", "Public Defender", "Prosecutor"] }
    ]
  },

  {
    id: "puzzles_brain_teasers",
    label: "Puzzles & brain teasers",
    cluster: "think",
    riasec: ["I", "C"],
    naics_sectors: [54, 62, 51],
    industries: ["Research & Development", "Medical Diagnostics", "Software Engineering", "Consulting"],
    career_emergence: ["Diagnostic Physician", "Research Scientist", "Software Engineer", "Intelligence Analyst", "Management Consultant"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["medical_science", "biology"], unlocks: ["Diagnostic Radiologist", "Pathologist", "Neurologist"] }
    ]
  },

  // ── Daily word/logic puzzle games — Wordle, Sudoku, NYT Connections — distinct from generic puzzles and from chess ──

  {
    id: "word_puzzles",
    label: "Word puzzles (Wordle, crosswords)",
    cluster: "think",
    riasec: ["I", "A", "C"],
    naics_sectors: [54, 51, 61],
    industries: ["Publishing & Media", "Linguistics & Translation", "Journalism", "Education", "Game & Puzzle Design"],
    career_emergence: [
      "Linguist", "Editor", "Crossword Constructor", "Journalist",
      "Translator", "Game Designer", "Speechwriter", "Lexicographer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["writing_stories"], unlocks: ["Crossword Constructor", "Editor", "Lexicographer"] }
    ]
  },

  // ── Sports analytics / Moneyball tiles — the student who loves sports through numbers ──

  {
    id: "fantasy_sports_roster",
    label: "Fantasy sports & building rosters",
    cluster: "think",
    riasec: ["C", "I", "E"],
    naics_sectors: [54, 52, 71],
    industries: [
      "Sports Analytics", "Sports Management", "Quantitative Finance",
      "Data Science", "Media & Broadcasting", "Gaming & Daily Fantasy"
    ],
    career_emergence: [
      "Sports Analytics Director", "Sabermetrician", "General Manager",
      "Salary Cap Analyst", "Front Office Executive", "Quantitative Analyst",
      "Sports Data Scientist", "Scouting Director"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["baseball_softball"], unlocks: ["Sabermetrician", "Baseball Analytics Director", "Front Office Executive"] },
      { with: ["basketball"], unlocks: ["NBA Analytics Analyst", "Front Office Executive", "Player Development Director"] },
      { with: ["football"], unlocks: ["NFL Front Office Executive", "Salary Cap Analyst", "Analytics Director"] },
      { with: ["data_statistics"], unlocks: ["Sports Data Scientist", "Quantitative Sports Analyst", "Performance Analytics Lead"] },
      { with: ["economics"], unlocks: ["Salary Cap Economist", "Player Market Analyst", "Sports Contract Specialist"] }
    ]
  },

  {
    id: "collecting_trading",
    label: "Collecting & trading (cards, sneakers, memorabilia)",
    cluster: "think",
    riasec: ["C", "I", "E"],
    naics_sectors: [52, 54, 44],
    industries: [
      "Alternative Assets", "E-Commerce & Resale", "Finance & Investment",
      "Sports Business", "Auction & Appraisal", "Consumer Markets"
    ],
    career_emergence: [
      "Alternative Assets Analyst", "Collectibles Market Analyst", "Resale Platform Founder",
      "Sports Memorabilia Dealer", "E-Commerce Entrepreneur", "Asset Appraiser",
      "Investment Analyst", "Brand Licensing Manager"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["economics"], unlocks: ["Alternative Assets Analyst", "Market Maker", "Collectibles Fund Manager"] },
      { with: ["data_statistics"], unlocks: ["Market Pricing Analyst", "Card Grading Analyst", "Resale Market Data Scientist"] },
      { with: ["entrepreneurship"], unlocks: ["Resale Business Founder", "E-Commerce Entrepreneur", "Marketplace Builder"] },
      { with: ["fantasy_sports_roster"], unlocks: ["Sports Asset Manager", "Memorabilia Fund Manager", "Sports Investment Analyst"] }
    ]
  },

  {
    id: "logic_number_puzzles",
    label: "Logic & number puzzles (Sudoku, logic grids)",
    cluster: "think",
    riasec: ["I", "C", "R"],
    naics_sectors: [54, 52, 51],
    industries: ["Data Science", "Actuarial Science", "Software Engineering", "Operations Research", "Finance"],
    career_emergence: [
      "Actuary", "Data Scientist", "Operations Research Analyst", "Software Engineer",
      "Quantitative Analyst", "Systems Engineer", "Logistics Analyst"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["data_statistics"], unlocks: ["Actuary", "Quantitative Analyst", "Operations Research Analyst"] }
    ]
  },

  {
    id: "category_pattern_puzzles",
    label: "Category & connections puzzles (NYT Connections)",
    cluster: "think",
    riasec: ["I", "A", "C"],
    naics_sectors: [54, 51, 52],
    industries: ["Data Science", "Strategy Consulting", "UX Research", "Intelligence Analysis", "Product Strategy"],
    career_emergence: [
      "Strategy Consultant", "UX Researcher", "Intelligence Analyst", "Product Strategist",
      "Data Scientist", "Taxonomy & Information Architect", "Trend Analyst"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_see_connections_others_miss"], unlocks: ["Strategy Consultant", "Trend Analyst", "Intelligence Analyst"] },
      { with: ["data_statistics"], unlocks: ["Data Scientist", "Taxonomy & Information Architect"] }
    ]
  },

  {
    id: "understanding_why_people",
    label: "Understanding why people do what they do",

    cluster: "think",
    riasec: ["I", "S", "A"],
    naics_sectors: [62, 54, 51, 44],
    industries: ["Psychology & Behavioral Science", "Marketing & Consumer Insights", "UX Research", "Social Work", "Human Resources"],
    career_emergence: ["Behavioral Psychologist", "UX Researcher", "Consumer Insights Analyst", "Organizational Psychologist", "Social Worker"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  // ── Competitive intellectual activities — rated/ranked, head-to-head, distinct from casual puzzle-solving ──

  {
    id: "chess",
    label: "Chess",
    cluster: "think",
    riasec: ["I", "C", "E"],
    naics_sectors: [54, 52, 51],
    industries: ["Strategic Consulting", "Finance & Trading", "Software Engineering", "Education", "Game Theory & Analytics"],
    career_emergence: [
      "Quantitative Trader", "Management Consultant", "Game Theorist",
      "Software Engineer", "Chess Coach", "Strategic Analyst", "Investment Analyst"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["data_statistics"], unlocks: ["Quantitative Trader", "Game Theorist", "Algorithmic Strategist"] },
      { with: ["i_ask_why"], unlocks: ["Strategic Analyst", "Management Consultant"] }
    ]
  },

  {
    id: "debate_mock_un",
    label: "Debate & Model UN",
    cluster: "think",
    riasec: ["E", "I", "S"],
    naics_sectors: [54, 92, 61, 51],
    industries: ["Law", "Policy & Government", "International Relations", "Diplomacy", "Management Consulting", "Journalism"],
    career_emergence: [
      "Attorney", "Diplomat", "Foreign Service Officer", "Policy Analyst",
      "Management Consultant", "Legislative Aide", "International Relations Specialist", "Trial Lawyer"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_cant_ignore_unfairness"], unlocks: ["Civil Rights Attorney", "Policy Advocate", "Human Rights Lawyer"] },
      { with: ["i_can_talk_to_anyone"], unlocks: ["Diplomat", "Trial Lawyer", "Political Campaign Strategist"] }
    ]
  },

  {
    id: "speech_forensics",
    label: "Speech & forensics",
    cluster: "think",
    riasec: ["A", "E", "I"],
    naics_sectors: [54, 61, 51, 71],
    industries: ["Law", "Broadcasting & Media", "Education", "Public Relations", "Performing Arts"],
    career_emergence: [
      "Trial Attorney", "News Anchor", "Public Speaking Coach", "Communications Director",
      "Professor", "Broadcast Journalist", "PR Executive"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["writing_stories"], unlocks: ["Broadcast Journalist", "Speechwriter", "Communications Director"] }
    ]
  },

  // ── Speculative systems thinking — distinct from creative writing's narrative-output focus ──

  {
    id: "scifi_worldbuilding",
    label: "Science fiction & speculative world-building",
    cluster: "think",
    riasec: ["I", "A", "R"],
    naics_sectors: [54, 51, 71, 33],
    industries: ["Research & Development", "Technology & Futurism", "Entertainment & Media", "Game Design", "Aerospace"],
    career_emergence: [
      "Futurist", "UX/Speculative Designer", "Technology Strategist", "Game World Designer",
      "Science Communicator", "R&D Scientist", "Aerospace Engineer", "Concept Artist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["writing_stories"], unlocks: ["Science Fiction Author", "Game World Designer", "Speculative Concept Artist"] },
      { with: ["ai_machine_learning"], unlocks: ["AI Ethicist", "Technology Futurist", "Speculative Technology Designer"] }
    ]
  },

  // ── Journalism, Law, and Economics — broad fields with wide, often-hidden career destinations ──

  {
    id: "journalism",
    label: "Journalism & reporting",
    cluster: "think",
    riasec: ["I", "A", "E"],
    naics_sectors: [51, 54, 92],
    industries: ["News & Media", "Broadcasting", "Publishing", "Data Journalism", "Documentary Film"],
    career_emergence: [
      "Investigative Journalist", "Broadcast Journalist", "Foreign Correspondent", "Data Journalist",
      "Photojournalist", "Sports Journalist", "Documentary Producer", "News Anchor"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["data_statistics"], unlocks: ["Data Journalist", "Investigative Analyst"] },
      { with: ["filmmaking"], unlocks: ["Documentary Producer", "Broadcast Journalist"] },
      { with: ["i_cant_ignore_unfairness"], unlocks: ["Investigative Journalist", "Civil Rights Reporter"] }
    ]
  },

  {
    id: "law_justice",
    label: "Law, justice & how rules work",
    cluster: "think",
    riasec: ["E", "I", "S"],
    naics_sectors: [54, 92, 52, 71, 51],
    industries: [
      "Law & Legal Services", "Business & Corporate Law", "Finance & Investment",
      "Sports & Entertainment", "Media & Broadcasting", "Government & Politics"
    ],
    career_emergence: [
      "Trial Attorney", "Public Defender", "Civil Rights Attorney", "Judge",
      "General Counsel", "Compliance Officer", "Contract Attorney", "M&A Counsel",
      "Private Equity Partner", "Investment Banking Attorney", "Securities Attorney",
      "Sports League Commissioner", "Sports General Manager", "Talent Agent", "Entertainment Attorney",
      "Legal Analyst / Commentator", "Media Counsel",
      "Legislative Counsel", "Policy Director", "Chief of Staff", "Campaign Manager"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["soccer"], unlocks: ["Sports General Manager", "Player Agent", "Sports League Commissioner"] },
      { with: ["basketball"], unlocks: ["Sports General Manager", "Player Agent", "Sports League Commissioner"] },
      { with: ["football"], unlocks: ["Sports General Manager", "Player Agent", "Sports League Commissioner"] },
      { with: ["baseball_softball"], unlocks: ["Sports General Manager", "Player Agent", "Sports League Commissioner"] },
      { with: ["volleyball"], unlocks: ["Sports General Manager", "Player Agent"] },
      { with: ["lacrosse"], unlocks: ["Sports General Manager", "Player Agent"] },
      { with: ["ice_hockey"], unlocks: ["Sports General Manager", "Player Agent", "Sports League Commissioner"] },
      { with: ["filmmaking"], unlocks: ["Talent Agent", "Entertainment Attorney"] },
      { with: ["music_production"], unlocks: ["Talent Agent", "Entertainment Attorney"] },
      { with: ["entrepreneurship"], unlocks: ["General Counsel", "Startup Counsel"] },
      { with: ["data_statistics"], unlocks: ["Securities Attorney", "Antitrust Analyst"] },
      { with: ["debate_mock_un"], unlocks: ["Trial Attorney", "Policy Director", "Legislative Counsel"] }
    ]
  },

  {
    id: "economics",
    label: "Economics & how markets work",
    cluster: "think",
    riasec: ["I", "C", "E"],
    naics_sectors: [52, 54, 92, 51],
    industries: [
      "Finance & Investment Banking", "Economic Research & Academia", "Public Policy & Government",
      "Antitrust & Regulatory Law", "International Development", "Consumer Insights & Behavioral Economics"
    ],
    career_emergence: [
      "Investment Banker", "Quantitative Analyst", "Hedge Fund Analyst",
      "Economist", "Economic Research Professor", "World Bank / IMF Economist",
      "Policy Analyst", "Federal Reserve Economist", "Antitrust Economist",
      "Behavioral Economist", "Consumer Insights Analyst", "Development Economist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["data_statistics"], unlocks: ["Quantitative Analyst", "Hedge Fund Analyst", "Federal Reserve Economist"] },
      { with: ["law_justice"], unlocks: ["Antitrust Economist", "Regulatory Economist"] },
      { with: ["understanding_why_people"], unlocks: ["Behavioral Economist", "Consumer Insights Analyst"] },
      { with: ["entrepreneurship"], unlocks: ["Venture Capital Analyst", "Startup Economist"] }
    ]
  },

  // ─────────────────────────────────────────────
  // PEOPLE & STORIES
  // ─────────────────────────────────────────────

  {
    id: "volunteering",
    label: "Volunteering",
    cluster: "people",
    riasec: ["S", "E"],
    naics_sectors: [62, 92, 61],
    industries: ["Nonprofit & Social Services", "Healthcare", "Government & Public Service", "Education", "Community Development"],
    career_emergence: ["Social Worker", "Nonprofit Director", "Community Health Worker", "Public Health Official", "Policy Advocate"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_cant_ignore_unfairness"], unlocks: ["Civil Rights Attorney", "Policy Advocate", "Nonprofit Founder"] },
      { with: ["mental_health_wellness"], unlocks: ["Social Worker", "Community Mental Health Counselor"] }
    ]
  },

  {
    id: "animal_care",
    label: "Animal care",
    cluster: "people",
    riasec: ["R", "S", "I"],
    naics_sectors: [62, 11, 81, 71],
    industries: ["Veterinary Medicine", "Animal Science", "Wildlife Conservation", "Pet Industry", "Therapeutic Services"],
    career_emergence: [
      "Veterinarian", "Veterinary Technician", "Animal-Assisted Therapist",
      "Wildlife Biologist", "Zoologist", "Marine Biologist", "Animal Trainer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["animals_trust_me", "i_feel_things_deeply"], unlocks: ["Animal-Assisted Therapist", "Veterinary Behaviorist", "Equine Therapist"] },
      { with: ["biology", "science_experiments"], unlocks: ["Veterinarian", "Wildlife Pathologist", "Conservation Scientist"] },
      { with: ["little_kids_love_me", "i_slow_down_for_people"], unlocks: ["Pediatric Occupational Therapist", "Child Life Specialist"] }
    ]
  },

  {
    id: "mental_health_wellness",
    label: "Mental health & wellness",
    cluster: "people",
    riasec: ["S", "I", "A"],
    naics_sectors: [62, 61, 81],
    industries: ["Mental Health Services", "Social Work", "Healthcare", "Wellness & Coaching", "School Counseling"],
    career_emergence: [
      "Psychologist", "Licensed Therapist", "Social Worker", "School Counselor",
      "Psychiatrist", "Occupational Therapist", "Life Coach", "Wellness Director"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "i_am_person_people_call"], unlocks: ["Trauma Therapist", "Crisis Counselor", "Grief Counselor"] },
      { with: ["little_kids_love_me"], unlocks: ["Child Therapist", "Play Therapist", "School Psychologist"] },
      { with: ["animals_trust_me"], unlocks: ["Animal-Assisted Psychotherapist", "Equine Therapist"] }
    ]
  },

  {
    id: "working_with_little_kids",
    label: "Working with little kids",
    cluster: "people",
    riasec: ["S", "A"],
    naics_sectors: [61, 62, 81],
    industries: ["Early Childhood Education", "Pediatric Healthcare", "Occupational Therapy", "Child Psychology", "Child Life Services"],
    career_emergence: [
      "Pediatric Occupational Therapist", "Early Childhood Educator", "Pediatrician",
      "Child Psychologist", "Play Therapist", "Child Life Specialist",
      "Special Education Teacher", "Pediatric Speech Therapist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_slow_down_for_people", "i_like_figuring_out_different_way"], unlocks: ["Pediatric Occupational Therapist", "Special Education Specialist", "Learning Disabilities Specialist"] },
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Child Therapist", "Pediatric Psychologist", "Play Therapist"] },
      { with: ["biology", "science_experiments"], unlocks: ["Pediatric Nurse", "Child Life Specialist", "Pediatrician"] }
    ]
  },

  {
    id: "teaching_tutoring",
    label: "Teaching & tutoring",
    cluster: "people",
    riasec: ["S", "I", "A"],
    naics_sectors: [61, 62, 54],
    industries: ["K-12 Education", "Higher Education", "Corporate Training", "EdTech", "Special Education"],
    career_emergence: ["Teacher", "Professor", "Corporate Trainer", "Curriculum Developer", "Instructional Designer", "EdTech Product Manager"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_like_being_person_who_explains"], unlocks: ["Professor", "Medical Educator", "Science Communicator"] },
      { with: ["learning_differences"], unlocks: ["Special Education Teacher", "Learning Specialist", "Educational Therapist"] }
    ]
  },

  {
    id: "advocacy_activism",
    label: "Advocacy & activism",
    cluster: "people",
    riasec: ["S", "E", "A"],
    naics_sectors: [92, 54, 61, 62],
    industries: ["Nonprofit & Social Justice", "Government & Policy", "Law", "Journalism", "Public Health"],
    career_emergence: ["Activist", "Policy Analyst", "Attorney", "Nonprofit Founder", "Journalist", "Community Organizer", "Public Health Advocate"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_cant_ignore_unfairness", "id_rather_listen_than_talk"], unlocks: ["Victim Advocate", "Social Justice Attorney", "Community Organizer"] }
    ]
  },

  {
    id: "entrepreneurship",
    label: "Entrepreneurship",
    cluster: "people",
    riasec: ["E", "I", "C"],
    naics_sectors: [54, 52, 44, 51],
    industries: ["Startups & Venture", "Business Services", "Retail & Consumer Brands", "Technology", "Finance"],
    career_emergence: ["Founder / CEO", "Product Manager", "Venture Capitalist", "Business Development", "Management Consultant"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: []
  },

  {
    id: "first_aid_emergencies",
    label: "First aid & emergencies",
    cluster: "people",
    riasec: ["R", "S", "I"],
    naics_sectors: [62, 92],
    industries: ["Emergency Medicine", "Paramedic & EMS", "Nursing", "Public Safety", "Disaster Response"],
    career_emergence: ["Emergency Physician", "Paramedic / EMT", "ER Nurse", "Flight Nurse", "Firefighter", "Disaster Relief Coordinator"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_stay_calm_when_things_go_wrong"], unlocks: ["ER Physician", "Trauma Surgeon", "Flight Medic", "Crisis Responder"] },
      { with: ["biology", "science_experiments"], unlocks: ["Emergency Medicine Physician", "Trauma Surgeon", "Critical Care Nurse"] }
    ]
  },

  // ─────────────────────────────────────────────
  // SYSTEMS & HOW THINGS WORK
  // ─────────────────────────────────────────────

  {
    id: "cosmetic_beauty_science",
    label: "Cosmetic & beauty science",
    cluster: "systems",
    riasec: ["I", "R", "A"],
    naics_sectors: [31, 54, 44, 81],
    industries: [
      "Cosmetic & Personal Care Manufacturing",
      "Fragrance Industry",
      "Dermatology & Aesthetic Medicine",
      "Retail Beauty",
      "Cosmetic Chemistry R&D"
    ],
    career_emergence: [
      "Cosmetic Chemist", "Skincare Formulator", "Fragrance Developer",
      "Dermatologist", "Aesthetic Medicine Physician", "Beauty Brand Founder",
      "Regulatory Affairs Specialist", "Product Development Manager"
    ],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["baking", "chemistry"], unlocks: ["Cosmetic Chemist", "Fragrance Chemist", "Flavor Scientist"] },
      { with: ["nail_art", "hair_makeup"], unlocks: ["Beauty Brand Developer", "Cosmetic Formulator", "Product Launch Manager"] },
      { with: ["entrepreneurship"], unlocks: ["Beauty Brand Founder", "DTC Skincare CEO"] }
    ]
  },

  {
    id: "cooking_chemistry",
    label: "Cooking chemistry",
    cluster: "systems",
    riasec: ["I", "R", "A"],
    naics_sectors: [54, 31, 72],
    industries: ["Food Science", "Cosmetic Chemistry", "Pharmaceutical R&D", "Flavor & Fragrance Industry"],
    career_emergence: ["Food Technologist", "Flavor Scientist", "Cosmetic Chemist", "Pharmaceutical Formulator", "R&D Chef"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["baking", "cosmetic_beauty_science"], unlocks: ["Cosmetic Chemist", "Skincare Formulator", "Fragrance Developer"] }
    ]
  },

  {
    id: "medical_science",
    label: "Medical science",
    cluster: "systems",
    riasec: ["I", "S", "R"],
    naics_sectors: [62, 54, 31],
    industries: ["Healthcare & Medicine", "Pharmaceutical", "Medical Devices", "Biotechnology", "Clinical Research"],
    career_emergence: [
      "Physician", "Surgeon", "Dentist", "Dermatologist", "Anesthesiologist",
      "Pharmacist", "Biomedical Engineer", "Clinical Research Coordinator"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_stay_calm_when_things_go_wrong", "puzzles_brain_teasers"], unlocks: ["Surgeon", "Anesthesiologist", "Interventional Radiologist"] },
      { with: ["nail_art", "hair_makeup", "cosmetic_beauty_science"], unlocks: ["Dermatologist", "Plastic Surgeon", "Aesthetic Medicine Physician"] },
      { with: ["i_slow_down_for_people", "little_kids_love_me"], unlocks: ["Pediatric Occupational Therapist", "Child Life Specialist", "Pediatrician"] },
      { with: ["animals_trust_me"], unlocks: ["Veterinarian", "Veterinary Surgeon"] }
    ]
  },

  {
    id: "how_body_moves",
    label: "How the body moves & works",
    cluster: "systems",
    riasec: ["I", "R", "S"],
    naics_sectors: [62, 71, 54],
    industries: ["Physical Therapy", "Sports Medicine", "Kinesiology", "Occupational Therapy", "Ergonomics"],
    career_emergence: [
      "Physical Therapist", "Occupational Therapist", "Kinesiologist",
      "Athletic Trainer", "Orthopedic Surgeon", "Ergonomist", "Movement Scientist"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["dance", "i_feel_things_deeply"], unlocks: ["Dance/Movement Therapist", "Somatic Therapist"] },
      { with: ["i_slow_down_for_people", "i_like_figuring_out_different_way"], unlocks: ["Occupational Therapist", "Pediatric OT", "Adaptive PE Teacher"] },
      { with: ["want_to_fix_it_not_talk_about_it", "fitness_lifting"], unlocks: ["Physical Therapist", "Sports Medicine Physician", "Orthopedic Surgeon"] }
    ]
  },

  {
    id: "learning_differences",
    label: "Learning differences & how people learn",
    cluster: "systems",
    riasec: ["S", "I", "A"],
    naics_sectors: [61, 62, 54],
    industries: ["Special Education", "Occupational Therapy", "Speech Therapy", "Educational Psychology", "EdTech"],
    career_emergence: [
      "Special Education Teacher", "Learning Specialist", "Educational Therapist",
      "Occupational Therapist", "Speech-Language Pathologist", "School Psychologist",
      "Behavioral Analyst (BCBA)", "Educational Technology Designer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_slow_down_for_people", "little_kids_love_me"], unlocks: ["Pediatric Occupational Therapist", "Early Intervention Specialist", "Child Life Specialist"] },
      { with: ["i_like_figuring_out_different_way"], unlocks: ["Learning Disabilities Specialist", "Dyslexia Therapist", "Behavioral Analyst"] }
    ]
  },

  {
    id: "environment_sustainability",
    label: "Environment & sustainability",
    cluster: "systems",
    riasec: ["I", "R", "S"],
    naics_sectors: [11, 22, 54, 92],
    industries: ["Environmental Science", "Renewable Energy", "Conservation", "Green Building", "Environmental Policy"],
    career_emergence: ["Environmental Scientist", "Sustainability Consultant", "Environmental Attorney", "Conservation Biologist", "Renewable Energy Engineer"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: []
  },

  {
    id: "engineering_challenges",
    label: "Engineering challenges",
    cluster: "systems",
    riasec: ["R", "I", "C"],
    naics_sectors: [23, 33, 54, 22],
    industries: ["Civil Engineering", "Mechanical Engineering", "Aerospace", "Construction", "Manufacturing"],
    career_emergence: ["Civil Engineer", "Mechanical Engineer", "Aerospace Engineer", "Structural Engineer", "Robotics Engineer"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: []
  },

  {
    id: "robotics_competitions",
    label: "Robotics competitions",
    cluster: "systems",
    riasec: ["R", "I", "E"],
    naics_sectors: [33, 54, 51, 23],
    industries: ["Robotics & Automation", "Aerospace", "Software Engineering", "Manufacturing", "Defense Technology"],
    career_emergence: [
      "Robotics Engineer", "Mechatronics Engineer", "Automation Engineer", "Software Engineer",
      "Aerospace Engineer", "Controls Engineer", "Defense Technology Engineer"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["coding_programming"], unlocks: ["Robotics Software Engineer", "Embedded Systems Engineer"] },
      { with: ["im_one_who_holds_group_together"], unlocks: ["Team Lead Engineer", "Technical Project Manager"] }
    ]
  },

  {
    id: "architecture",
    label: "Architecture",
    cluster: "systems",
    riasec: ["A", "R", "I"],
    naics_sectors: [54, 23],
    industries: ["Architecture & Design", "Urban Planning", "Real Estate Development", "Construction Management"],
    career_emergence: ["Architect", "Urban Planner", "Interior Designer", "Real Estate Developer", "Construction Manager"],
    geo_signal: true,
    eq_multiplier: false,
    combo_unlocks: []
  },

  {
    id: "nutrition_food_science",
    label: "Nutrition & food science",
    cluster: "systems",
    riasec: ["I", "S", "R"],
    naics_sectors: [62, 31, 54],
    industries: ["Dietetics & Nutrition", "Food Manufacturing", "Sports Science", "Public Health", "Pharmaceutical"],
    career_emergence: ["Registered Dietitian", "Food Scientist", "Sports Nutritionist", "Clinical Nutritionist", "Public Health Nutritionist"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["fitness_lifting"], unlocks: ["Sports Dietitian", "Performance Nutritionist", "Athletic Health Coordinator"] }
    ]
  },

  {
    id: "business_startups",
    label: "Business & startups",
    cluster: "systems",
    riasec: ["E", "C", "I"],
    naics_sectors: [52, 54, 44, 51],
    industries: ["Venture Capital", "Management Consulting", "Corporate Strategy", "Entrepreneurship", "Finance"],
    career_emergence: ["Entrepreneur", "Investment Banker", "Venture Capitalist", "Management Consultant", "CFO", "Strategy Director"],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: []
  },

  // ─────────────────────────────────────────────
  // EQ IDENTITY LAYER — "That's just how I am"
  // ─────────────────────────────────────────────

  {
    id: "i_notice_when_left_out",
    label: "I notice when someone's left out",
    cluster: "eq",
    riasec: ["S"],
    naics_sectors: [62, 61, 92],
    industries: ["Social Work", "School Counseling", "Community Development", "Human Resources", "Nonprofit"],
    career_emergence: ["School Counselor", "Social Worker", "Inclusion Specialist", "HR Professional", "Community Organizer"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["learning_differences"], unlocks: ["Inclusion Specialist", "Special Education Advocate", "IEP Coordinator"] },
      { with: ["working_with_little_kids"], unlocks: ["School Counselor", "Child Welfare Specialist", "Child Life Specialist"] }
    ]
  },

  {
    id: "i_stay_calm_when_things_go_wrong",
    label: "I stay calm when things go wrong",
    cluster: "eq",
    riasec: ["R", "I", "S"],
    naics_sectors: [62, 92],
    industries: ["Emergency Medicine", "Surgery", "Anesthesiology", "Military & Defense", "Crisis Management", "Aviation"],
    career_emergence: [
      "Surgeon", "Anesthesiologist", "ER Physician", "Trauma Nurse",
      "Pilot", "Military Officer", "Crisis Negotiator", "Firefighter", "Air Traffic Controller"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["medical_science", "puzzles_brain_teasers"], unlocks: ["Surgeon", "Anesthesiologist", "Diagnostic Radiologist"] },
      { with: ["first_aid_emergencies"], unlocks: ["ER Physician", "Trauma Surgeon", "Flight Paramedic"] }
    ]
  },

  {
    id: "i_cant_ignore_unfairness",
    label: "I can't ignore something that's not fair",
    label_parent: "They can't ignore something that isn't fair",
    cluster: "eq",
    riasec: ["S", "E", "A"],
    naics_sectors: [92, 54, 61, 62],
    industries: ["Law & Justice", "Social Work", "Nonprofit & Advocacy", "Journalism", "Public Policy", "Civil Rights"],
    career_emergence: ["Attorney", "Social Worker", "Journalist", "Public Defender", "Policy Analyst", "Nonprofit Founder", "Civil Rights Advocate"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  {
    id: "i_am_person_people_call",
    label: "I'm the one people call when they're upset",
    cluster: "eq",
    riasec: ["S"],
    naics_sectors: [62, 61],
    industries: ["Mental Health Services", "Social Work", "Nursing", "School Counseling", "Chaplaincy & Spiritual Care"],
    career_emergence: [
      "Therapist / Counselor", "Social Worker", "Nurse", "School Counselor",
      "Crisis Counselor", "Chaplain", "Life Coach", "Hospice Worker"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Trauma Therapist", "Grief Counselor", "Hospice Social Worker"] },
      { with: ["biology", "science_experiments"], unlocks: ["Psychiatric Nurse Practitioner", "Behavioral Health Nurse"] }
    ]
  },

  {
    id: "i_slow_down_for_people",
    label: "I slow down for people who need more time",
    cluster: "eq",
    riasec: ["S", "A"],
    naics_sectors: [62, 61],
    industries: ["Occupational Therapy", "Special Education", "Speech Therapy", "Rehabilitation Medicine", "Pediatric Healthcare"],
    career_emergence: [
      "Occupational Therapist", "Pediatric OT", "Special Education Teacher",
      "Speech-Language Pathologist", "Physical Therapist", "Rehabilitation Specialist",
      "Child Life Specialist", "Adaptive PE Teacher"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["how_body_moves", "learning_differences"], unlocks: ["Occupational Therapist", "Sensory Integration Specialist"] },
      { with: ["working_with_little_kids", "learning_differences"], unlocks: ["Pediatric OT", "Early Intervention Specialist", "ABA Therapist"] },
      { with: ["animals_trust_me"], unlocks: ["Animal-Assisted Therapist", "Equine-Assisted Therapist"] }
    ]
  },

  {
    id: "i_like_figuring_out_different_way",
    label: "I like figuring out a different way when something doesn't work",
    cluster: "eq",
    riasec: ["I", "A", "R"],
    naics_sectors: [62, 61, 54],
    industries: ["Occupational Therapy", "Product Design", "Special Education", "Engineering", "Adaptive Technology"],
    career_emergence: [
      "Occupational Therapist", "Adaptive Technology Designer", "Product Designer",
      "Learning Disabilities Specialist", "Rehabilitation Engineer", "UX Designer"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_slow_down_for_people", "working_with_little_kids"], unlocks: ["Pediatric OT", "Early Intervention OT", "Sensory Specialist"] },
      { with: ["coding_apps", "engineering_challenges"], unlocks: ["Assistive Technology Engineer", "Accessibility Designer", "Rehabilitation Robotics Engineer"] }
    ]
  },

  {
    id: "little_kids_love_me",
    label: "Little kids love me",
    label_parent: "Little kids are drawn to them",
    cluster: "eq",
    riasec: ["S", "A"],
    naics_sectors: [61, 62, 81],
    industries: ["Early Childhood Education", "Pediatric Medicine", "Pediatric OT", "Child Psychology", "Child Life Services"],
    career_emergence: [
      "Pediatric Occupational Therapist", "Pediatrician", "Play Therapist",
      "Early Childhood Educator", "Child Life Specialist", "Pediatric Nurse",
      "Child Psychologist", "Preschool Director"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_slow_down_for_people", "i_like_figuring_out_different_way"], unlocks: ["Pediatric OT", "Early Intervention Specialist", "Developmental Pediatrician"] },
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Play Therapist", "Child Therapist", "Pediatric Psychologist"] }
    ]
  },

  {
    id: "animals_trust_me",
    label: "Animals trust me",
    label_parent: "Animals trust them",
    cluster: "eq",
    riasec: ["R", "S", "I"],
    naics_sectors: [62, 11, 81],
    industries: ["Veterinary Medicine", "Animal-Assisted Therapy", "Wildlife Science", "Zoology", "Animal Behavior"],
    career_emergence: [
      "Veterinarian", "Veterinary Technician", "Animal-Assisted Therapist",
      "Wildlife Biologist", "Zoologist", "Equine Therapist", "Animal Behaviorist"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Animal-Assisted Psychotherapist", "Equine Therapist", "AAT Counselor"] },
      { with: ["biology", "science_experiments"], unlocks: ["Veterinarian", "Wildlife Pathologist", "Animal Research Scientist"] },
      { with: ["i_slow_down_for_people"], unlocks: ["Hippotherapy Practitioner", "AAT Program Director"] }
    ]
  },

  {
    id: "i_like_explaining_things",
    label: "I like being the person who explains things clearly",
    cluster: "eq",
    riasec: ["S", "E", "A"],
    naics_sectors: [61, 54, 51, 62],
    industries: ["Education", "Science Communication", "Journalism", "Medical Education", "Corporate Training", "Law"],
    career_emergence: ["Teacher", "Professor", "Science Writer", "Medical Educator", "Attorney", "Journalist", "Corporate Trainer"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["medical_science"], unlocks: ["Medical Educator", "Patient Advocate", "Health Communicator"] },
      { with: ["law_justice"], unlocks: ["Attorney", "Law Professor", "Legal Writer"] }
    ]
  },

  {
    id: "i_feel_things_deeply",
    label: "I feel things really deeply",
    cluster: "eq",
    riasec: ["A", "S"],
    naics_sectors: [62, 71, 61, 81],
    industries: ["Mental Health Services", "Creative Arts", "Performing Arts", "Social Work", "Music Therapy", "Art Therapy"],
    career_emergence: [
      "Therapist / Counselor", "Music Therapist", "Art Therapist",
      "Dance/Movement Therapist", "Social Worker", "Author", "Filmmaker",
      "Grief Counselor", "Hospice Worker", "Chaplain"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["playing_instrument"], unlocks: ["Music Therapist", "Neurologic Music Therapist"] },
      { with: ["dance"], unlocks: ["Dance/Movement Therapist", "Somatic Therapist"] },
      { with: ["painting", "drawing"], unlocks: ["Art Therapist", "Expressive Arts Therapist"] },
      { with: ["mental_health_wellness"], unlocks: ["Therapist", "Trauma Counselor", "Crisis Worker"] },
      { with: ["writing_stories"], unlocks: ["Narrative Therapist", "Bibliotherapist", "Author"] }
    ]
  },

  {
    id: "id_rather_listen_than_talk",
    label: "I'd rather listen than talk",
    cluster: "eq",
    riasec: ["S", "I"],
    naics_sectors: [62, 61],
    industries: ["Counseling & Therapy", "Social Work", "Nursing", "Chaplaincy", "Restorative Justice"],
    career_emergence: ["Therapist", "Social Worker", "Nurse", "Chaplain", "Mediator", "Victim Advocate"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  {
    id: "i_notice_things_others_miss",
    label: "I notice things other people miss",
    cluster: "eq",
    riasec: ["I", "A", "R"],
    naics_sectors: [62, 54, 92, 51],
    industries: ["Diagnostic Medicine", "Research", "Forensic Science", "Intelligence", "Quality Assurance"],
    career_emergence: ["Diagnostic Physician", "Pathologist", "Forensic Scientist", "Intelligence Analyst", "UX Researcher", "Quality Inspector"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["medical_science", "puzzles_brain_teasers"], unlocks: ["Diagnostic Radiologist", "Neurologist", "Dermatologist"] },
      { with: ["true_crime", "law_justice"], unlocks: ["Forensic Scientist", "Criminal Profiler", "Intelligence Analyst"] }
    ]
  },

  {
    id: "want_to_fix_it_not_talk_about_it",
    label: "I want to fix it, not just talk about it",
    cluster: "eq",
    riasec: ["R", "I", "E"],
    naics_sectors: [62, 23, 54, 33],
    industries: ["Surgery & Procedural Medicine", "Engineering", "Physical Therapy", "Construction", "Product Development"],
    career_emergence: [
      "Surgeon", "Physical Therapist", "Engineer", "Dentist",
      "Plastic Surgeon", "Contractor", "Product Designer", "Orthopedic Specialist"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["medical_science", "i_stay_calm_when_things_go_wrong"], unlocks: ["Surgeon", "Anesthesiologist", "Interventional Cardiologist"] },
      { with: ["how_body_moves", "fitness_lifting"], unlocks: ["Physical Therapist", "Sports Medicine Physician", "Orthopedic Surgeon"] }
    ]
  },

  {
    id: "i_lose_track_of_time_making",
    label: "I lose track of time when I'm making something",
    cluster: "eq",
    riasec: ["A", "R", "I"],
    naics_sectors: [54, 71, 31, 33],
    industries: ["Design & Creative Services", "Fine Arts", "Manufacturing", "Architecture", "Software Development"],
    career_emergence: ["Designer", "Artist", "Craftsperson", "Architect", "Software Developer", "Engineer"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  {
    id: "im_one_who_holds_group_together",
    label: "I'm the one who holds the group together",
    cluster: "eq",
    riasec: ["E", "S"],
    naics_sectors: [54, 92, 61, 62],
    industries: ["Leadership & Management", "Nonprofit", "Healthcare Administration", "Education Administration", "Military"],
    career_emergence: ["Team Manager", "Program Director", "Nonprofit Leader", "School Principal", "Military Officer", "Hospital Administrator"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  {
    id: "i_ask_why",
    label: "I ask a lot of questions that start with 'but why'",
    cluster: "eq",
    riasec: ["I", "A"],
    naics_sectors: [54, 61, 51],
    industries: ["Research & Academia", "Journalism", "Philosophy & Ethics", "Science", "Innovation & Strategy"],
    career_emergence: ["Research Scientist", "Journalist", "Philosopher", "Investigator", "Innovation Consultant", "Professor"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  {
    id: "i_remember_details_about_people",
    label: "I remember details about people that they forget they told me",
    cluster: "eq",
    riasec: ["S", "C", "I"],
    naics_sectors: [62, 61, 54, 44],
    industries: ["Healthcare", "Social Work", "Client Services", "Human Resources", "Luxury & Hospitality"],
    career_emergence: ["Nurse", "Social Worker", "Client Relationship Manager", "Luxury Concierge", "HR Business Partner", "Personal Physician"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  {
    id: "i_process_through_art_music",
    label: "I process my feelings through art or music",
    label_parent: "They process their feelings through art or music",
    cluster: "eq",
    riasec: ["A", "S"],
    naics_sectors: [71, 62],
    industries: ["Expressive Arts Therapy", "Music Therapy", "Art Therapy", "Mental Health", "Performing Arts"],
    career_emergence: ["Art Therapist", "Music Therapist", "Dance Therapist", "Expressive Arts Therapist", "Performing Artist"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "playing_instrument"], unlocks: ["Music Therapist", "Neurologic Music Therapist"] },
      { with: ["i_feel_things_deeply", "painting", "drawing"], unlocks: ["Art Therapist", "Expressive Arts Counselor"] },
      { with: ["i_feel_things_deeply", "dance"], unlocks: ["Dance/Movement Therapist"] }
    ]
  },

  {
    id: "i_can_tell_when_upset",
    label: "I can tell when someone's upset even when they say they're fine",
    cluster: "eq",
    riasec: ["S", "I"],
    naics_sectors: [62, 61, 92],
    industries: ["Counseling & Therapy", "Nursing", "Social Work", "School Psychology", "Forensics & Investigation"],
    career_emergence: ["Therapist", "Psychiatric Nurse", "School Counselor", "Forensic Interviewer", "Detective", "Child Advocacy Specialist"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  {
    id: "i_think_of_others_feelings",
    label: "I think about other people's feelings before I say something",
    label_parent: "They think about others' feelings before saying something",
    cluster: "eq",
    riasec: ["S", "A"],
    naics_sectors: [62, 61, 54],
    industries: ["Mental Health & Social Services", "Healthcare", "Human Resources", "Mediation & Conflict Resolution", "Diplomacy"],
    career_emergence: ["Therapist", "Mediator", "HR Professional", "Diplomat", "Nurse", "Patient Advocate"],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: []
  },

  // ─────────────────────────────────────────────
  // CONNECTOR CLUSTER — "The way I move through the world"
  // These tiles identify the relationship-native, high-EQ social architect.
  // Career emergence: finance, PE, BD, real estate, consulting, luxury, philanthropy
  // Most valuable combo: connector + pattern_reader → highest-value advisory careers
  // ─────────────────────────────────────────────

  {
    id: "i_can_talk_to_anyone",
    label: "I can talk to literally anyone — it doesn't matter who they are",
    cluster: "eq",
    riasec: ["S", "E"],
    naics_sectors: [52, 53, 54, 44, 71, 92],
    industries: [
      "Finance & Investment Banking",
      "Real Estate",
      "Business Development",
      "Sales & Client Services",
      "Luxury Goods & Hospitality",
      "Political & Nonprofit Leadership"
    ],
    career_emergence: [
      "Investment Banker", "Private Equity Associate", "Business Development Director",
      "Real Estate Broker", "Luxury Sales Director", "Political Fundraiser",
      "Talent Agent", "Executive Recruiter", "Philanthropic Advisor"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_see_connections_others_miss"], unlocks: ["Venture Capitalist", "Strategy Consultant", "Private Equity Partner", "Chief of Staff"] },
      { with: ["i_remember_everything_about_people"], unlocks: ["Executive Recruiter", "Relationship Banker", "Major Gift Officer", "Client Partner"] },
      { with: ["entrepreneurship"], unlocks: ["Founder / CEO", "Business Development Lead", "Sales Leader"] }
    ]
  },

  {
    id: "i_remember_everything_about_people",
    label: "I remember everything about people — birthdays, what they're going through",
    cluster: "eq",
    riasec: ["S", "E"],
    naics_sectors: [52, 53, 54, 62, 81],
    industries: [
      "Wealth Management & Private Banking",
      "Executive Search & Recruiting",
      "Client Services & Account Management",
      "Luxury & Hospitality",
      "Healthcare Client Relations"
    ],
    career_emergence: [
      "Wealth Manager", "Private Banker", "Executive Recruiter",
      "Account Director", "Client Success Leader", "Luxury Concierge",
      "Major Gift Officer", "Relationship Manager"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_can_talk_to_anyone"], unlocks: ["Private Equity Relationship Partner", "Ultra-High-Net-Worth Advisor", "Chief Relationship Officer"] },
      { with: ["i_know_everyone"], unlocks: ["Super Connector", "Industry Convener", "Conference / Summit Founder"] }
    ]
  },

  {
    id: "people_tell_me_personal_stuff",
    label: "People I barely know end up telling me really personal stuff",
    label_parent: "People they've just met end up telling them really personal things",
    cluster: "eq",
    riasec: ["S", "I"],
    naics_sectors: [62, 54, 52],
    industries: [
      "Counseling & Therapy",
      "Wealth Management",
      "Executive Coaching",
      "Human Resources",
      "Journalism & Oral History"
    ],
    career_emergence: [
      "Therapist", "Executive Coach", "Wealth Advisor",
      "HR Business Partner", "Journalist", "Oral Historian",
      "Crisis Communications Advisor", "Mediator"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_things_deeply", "mental_health_wellness"], unlocks: ["Therapist", "Executive Coach", "Grief Counselor"] },
      { with: ["i_can_talk_to_anyone", "i_remember_everything_about_people"], unlocks: ["Private Client Advisor", "Family Office Relationship Manager"] }
    ]
  },

  {
    id: "i_fix_friend_group_drama",
    label: "I'm usually the one who fixes things when the friend group has drama",
    cluster: "eq",
    riasec: ["S", "E"],
    naics_sectors: [54, 62, 92],
    industries: [
      "Mediation & Conflict Resolution",
      "Human Resources & Organizational Development",
      "Law & Negotiation",
      "Nonprofit Leadership",
      "Diplomacy & International Relations"
    ],
    career_emergence: [
      "Mediator", "HR Director", "Labor Relations Specialist",
      "Attorney / Negotiator", "Diplomat", "Nonprofit Executive Director",
      "Organizational Psychologist", "Chief People Officer"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_can_talk_to_anyone", "i_cant_ignore_unfairness"], unlocks: ["Labor Attorney", "Civil Rights Mediator", "Union Negotiator"] },
      { with: ["i_remember_everything_about_people"], unlocks: ["Chief People Officer", "Culture & OD Consultant"] }
    ]
  },

  {
    id: "i_talk_to_new_people_first",
    label: "When someone new shows up, I'm the first to go talk to them",
    label_parent: "When someone new shows up, they're the first to go talk to them",
    cluster: "eq",
    riasec: ["S", "E"],
    naics_sectors: [54, 52, 44, 71],
    industries: [
      "Business Development",
      "Sales Leadership",
      "Event & Conference Management",
      "Hospitality & Tourism",
      "Recruiting & Talent Acquisition"
    ],
    career_emergence: [
      "Business Development Manager", "Sales Director", "Event Producer",
      "Hospitality Manager", "Talent Acquisition Lead", "Brand Ambassador",
      "Conference Director", "Partnership Manager"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_know_everyone", "i_can_talk_to_anyone"], unlocks: ["Conference Founder", "Industry Convener", "Community Builder"] }
    ]
  },

  {
    id: "im_friends_with_older_people",
    label: "I'm friends with people way older than me",
    cluster: "eq",
    riasec: ["S", "E", "I"],
    naics_sectors: [52, 54, 53],
    industries: [
      "Finance & Investment",
      "Real Estate",
      "Mentorship & Advisory Networks",
      "Executive Leadership",
      "Board & Governance"
    ],
    career_emergence: [
      "Investment Professional", "Real Estate Developer",
      "Board Director", "C-Suite Executive", "Family Office Advisor",
      "Strategic Advisor", "Angel Investor"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_can_talk_to_anyone", "i_see_connections_others_miss"], unlocks: ["Venture Capitalist", "Private Equity Partner", "Family Office CIO"] }
    ]
  },

  {
    id: "i_make_the_group_chat",
    label: "I'm the one who makes the group chat — and keeps it alive",
    cluster: "eq",
    riasec: ["S", "E"],
    naics_sectors: [54, 51, 71],
    industries: [
      "Community Building & Management",
      "Media & Publishing",
      "Event Production",
      "Brand & Marketing",
      "Alumni & Membership Organizations"
    ],
    career_emergence: [
      "Community Manager", "Brand Strategist", "Event Producer",
      "Media Entrepreneur", "Alumni Relations Director",
      "Membership Organization Leader", "Newsletter Founder"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_know_everyone", "entrepreneurship"], unlocks: ["Community Platform Founder", "Media Company CEO", "Membership Club Founder"] }
    ]
  },

  {
    id: "i_know_everyone",
    label: "I know everyone — and I mean everyone",
    label_parent: "They know everyone — and they mean everyone",
    cluster: "eq",
    riasec: ["S", "E"],
    naics_sectors: [52, 53, 54, 71],
    industries: [
      "Finance & Private Equity",
      "Real Estate",
      "Executive Search",
      "Business Development",
      "Political & Civic Leadership"
    ],
    career_emergence: [
      "Private Equity Professional", "Investment Banker",
      "Real Estate Developer", "Executive Search Partner",
      "Political Operative", "Civic Leader", "Industry Association CEO",
      "Conference & Summit Producer"
    ],
    geo_signal: true,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_can_talk_to_anyone", "i_see_connections_others_miss"], unlocks: ["Venture Capitalist", "Private Equity Partner", "Super Connector", "Fund of Funds Manager"] },
      { with: ["i_remember_everything_about_people"], unlocks: ["Executive Search Partner", "Relationship Capital Advisor", "Industry Convener"] },
      { with: ["entrepreneurship"], unlocks: ["Serial Entrepreneur", "Venture Studio Founder", "Angel Investor"] }
    ]
  },

  // ─────────────────────────────────────────────
  // PATTERN READER CLUSTER — perceptive, instinctive, reads rooms and trends
  // Career emergence: strategy, VC, investing, intelligence, journalism, policy
  // ─────────────────────────────────────────────

  {
    id: "i_feel_the_vibe_immediately",
    label: "I can walk into a room and immediately feel the vibe",
    cluster: "eq",
    riasec: ["S", "I", "A"],
    naics_sectors: [54, 52, 92, 51],
    industries: [
      "Strategy Consulting",
      "Intelligence & National Security",
      "Journalism & Media",
      "Organizational Leadership",
      "Venture Capital"
    ],
    career_emergence: [
      "Management Consultant", "Intelligence Analyst", "Journalist",
      "Chief of Staff", "Venture Capitalist", "Crisis Communications Advisor",
      "Organizational Psychologist", "Brand Strategist"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_see_connections_others_miss", "i_know_everyone"], unlocks: ["Venture Capitalist", "Macro Investor", "Geopolitical Analyst"] },
      { with: ["i_usually_right_about_people"], unlocks: ["Intelligence Analyst", "Forensic Interviewer", "Crisis Negotiator"] }
    ]
  },

  {
    id: "i_usually_right_about_people",
    label: "I'm usually right about people within five minutes of meeting them",
    cluster: "eq",
    riasec: ["S", "I"],
    naics_sectors: [54, 52, 92, 62],
    industries: [
      "Executive Search & Talent",
      "Venture Capital & Investing",
      "Intelligence & Law Enforcement",
      "Human Resources",
      "Journalism"
    ],
    career_emergence: [
      "Talent Scout", "Executive Search Partner", "Venture Capitalist",
      "Intelligence Officer", "HR Business Partner",
      "Investigative Journalist", "Casting Director", "Negotiator"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_feel_the_vibe_immediately", "i_can_talk_to_anyone"], unlocks: ["Venture Capitalist", "Talent Partner", "Chief People Officer"] },
      { with: ["true_crime", "law_justice"], unlocks: ["Intelligence Analyst", "Criminal Profiler", "Investigative Journalist"] }
    ]
  },

  {
    id: "i_know_before_it_happens",
    label: "I can tell when something's about to happen before it does",
    cluster: "eq",
    riasec: ["I", "S", "E"],
    naics_sectors: [52, 54, 51, 92],
    industries: [
      "Investing & Asset Management",
      "Strategy & Management Consulting",
      "Intelligence & Policy",
      "Journalism & Media",
      "Venture Capital"
    ],
    career_emergence: [
      "Hedge Fund Analyst", "Macro Investor", "Strategy Consultant",
      "Intelligence Analyst", "Policy Advisor", "Investigative Journalist",
      "Venture Capitalist", "Market Research Director"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_see_connections_others_miss"], unlocks: ["Macro Investor", "Geopolitical Risk Analyst", "Scenario Planning Consultant"] },
      { with: ["data_statistics", "business_startups"], unlocks: ["Quantitative Analyst", "Hedge Fund Manager", "Algorithmic Trader"] }
    ]
  },

  {
    id: "i_see_connections_others_miss",
    label: "I see how things are connected even when they seem totally different",
    cluster: "eq",
    riasec: ["I", "E", "A"],
    naics_sectors: [52, 54, 51, 92],
    industries: [
      "Venture Capital & Private Equity",
      "Strategy Consulting",
      "Investment Banking",
      "Intelligence & National Security",
      "Journalism & Long-Form Media",
      "Policy & Think Tanks"
    ],
    career_emergence: [
      "Venture Capitalist", "Strategy Consultant", "Investment Banker",
      "Intelligence Analyst", "Policy Researcher", "Investigative Journalist",
      "Chief Strategy Officer", "Think Tank Director", "Angel Investor"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_can_talk_to_anyone", "i_know_everyone"], unlocks: ["Private Equity Partner", "Venture Capitalist", "Super Connector", "Industry Analyst"] },
      { with: ["i_know_before_it_happens"], unlocks: ["Macro Investor", "Geopolitical Analyst", "Scenario Planning Director"] },
      { with: ["entrepreneurship", "business_startups"], unlocks: ["Serial Entrepreneur", "Venture Studio Founder", "Portfolio Company Operator"] }
    ]
  },

  {
    id: "my_friends_say_i_have_good_instincts",
    label: "My friends say I have good instincts — and they're usually right about that",
    label_parent: "Their friends say they have good instincts — and they're usually right about that",
    cluster: "eq",
    riasec: ["I", "S", "E"],
    naics_sectors: [52, 54, 51],
    industries: [
      "Investing & Finance",
      "Strategy Consulting",
      "Talent & Creative Industries",
      "Business Development",
      "Leadership & Executive Roles"
    ],
    career_emergence: [
      "Investor", "Strategy Consultant", "Talent Agent",
      "Business Development Executive", "Chief of Staff",
      "Brand Advisor", "Creative Director", "Entrepreneur"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_see_connections_others_miss", "i_know_everyone"], unlocks: ["Venture Capitalist", "Strategic Advisor", "Industry Analyst"] }
    ]
  },

  {
    id: "i_notice_trends_early",
    label: "I can tell when something's going to be huge before anyone else picks it up",
    cluster: "eq",
    riasec: ["I", "E", "A"],
    naics_sectors: [52, 54, 44, 51],
    industries: [
      "Venture Capital & Early Stage Investing",
      "Trend Forecasting & Brand Strategy",
      "Fashion & Consumer Goods",
      "Media & Entertainment",
      "Market Research & Consumer Insights"
    ],
    career_emergence: [
      "Venture Capitalist", "Trend Forecaster", "Brand Strategist",
      "Consumer Insights Director", "Fashion Buyer", "Creative Director",
      "Early Stage Investor", "Market Research Director"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_see_connections_others_miss", "entrepreneurship"], unlocks: ["Venture Capitalist", "Consumer Brand Founder", "Angel Investor"] },
      { with: ["social_media_content", "fashion_personal_style"], unlocks: ["Trend Forecaster", "Fashion Director", "Brand Consultant"] }
    ]
  },

  // ─────────────────────────────────────────────
  // STILL FIGURING IT OUT — the most important cluster in the system
  // These tiles identify the broadly curious, relationship-native, high-potential
  // student who has been told implicitly that not knowing is a problem.
  // It is not. This is the tile that changes how they see themselves.
  // ─────────────────────────────────────────────

  {
    id: "good_at_a_lot_not_great_at_one",
    label: "I'm pretty good at a lot of things but not great at any one thing yet",
    cluster: "eq",
    riasec: ["S", "E", "I"],
    naics_sectors: [54, 52, 53, 44],
    industries: [
      "General Management & Leadership",
      "Business Development",
      "Entrepreneurship",
      "Finance & Investing",
      "Consulting"
    ],
    career_emergence: [
      "General Manager", "Entrepreneur", "Business Development Executive",
      "Management Consultant", "Chief of Staff", "Operations Director",
      "Private Equity Generalist", "Startup Operator"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_can_talk_to_anyone", "i_know_everyone"], unlocks: ["Entrepreneur", "Business Developer", "General Partner"] },
      { with: ["i_see_connections_others_miss"], unlocks: ["Generalist Investor", "Strategy Consultant", "Chief of Staff to CEO"] }
    ]
  },

  {
    id: "get_into_things_then_move_on",
    label: "I get really into something and then move on to the next thing",
    cluster: "eq",
    riasec: ["I", "E", "A"],
    naics_sectors: [54, 52, 51],
    industries: [
      "Entrepreneurship & Startups",
      "Venture Capital",
      "Journalism & Media",
      "Consulting",
      "Creative Direction"
    ],
    career_emergence: [
      "Serial Entrepreneur", "Portfolio Career Professional",
      "Venture Capitalist", "Journalist", "Consultant",
      "Creative Director", "Podcast Host", "Startup Advisor"
    ],
    geo_signal: false,
    eq_multiplier: false,
    combo_unlocks: [
      { with: ["i_see_connections_others_miss", "entrepreneurship"], unlocks: ["Serial Entrepreneur", "Venture Capitalist", "Startup Studio Founder"] }
    ]
  },

  {
    id: "people_always_want_me_on_their_team",
    label: "People always want me on their team even when they can't explain why",
    label_parent: "People always want them on their team even when they can't explain why",
    cluster: "eq",
    riasec: ["S", "E"],
    naics_sectors: [54, 52, 92],
    industries: [
      "Team Leadership & Management",
      "Organizational Culture",
      "Operations & General Management",
      "Sports & Athletics Management",
      "Military & Public Service"
    ],
    career_emergence: [
      "Team Leader", "Operations Director", "Chief of Staff",
      "General Manager", "Athletic Director", "Military Officer",
      "Political Campaign Manager", "Startup COO"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["im_one_who_holds_group_together", "i_can_talk_to_anyone"], unlocks: ["Chief Operating Officer", "General Manager", "Chief of Staff"] }
    ]
  },

  {
    id: "i_show_up_when_it_matters",
    label: "I show up when it matters — people count on that",
    cluster: "eq",
    riasec: ["S", "E", "R"],
    naics_sectors: [54, 92, 62],
    industries: [
      "Leadership & Management",
      "Public Service & Military",
      "Healthcare & Emergency Services",
      "Nonprofit & Community Organizations",
      "Operations & Logistics"
    ],
    career_emergence: [
      "Operations Leader", "Military Officer", "Emergency Manager",
      "Nonprofit Executive", "Logistics Director", "Chief of Staff",
      "Political Leader", "Community Organizer"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_stay_calm_when_things_go_wrong"], unlocks: ["Emergency Manager", "Military Officer", "Crisis Operations Director"] },
      { with: ["i_can_talk_to_anyone", "i_know_everyone"], unlocks: ["Political Leader", "Nonprofit CEO", "Community Foundation Director"] }
    ]
  },

  {
    id: "still_figuring_it_out",
    label: "I don't have one big thing yet — and that feels okay",
    cluster: "eq",
    riasec: ["S", "E", "I"],
    naics_sectors: [54, 52, 53, 51],
    industries: [
      "General Management",
      "Entrepreneurship",
      "Finance & Investing",
      "Business Development",
      "Leadership"
    ],
    career_emergence: [
      "Entrepreneur", "General Manager", "Business Developer",
      "Investor", "Consultant", "Chief of Staff",
      "Operations Leader", "Startup Founder"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["i_can_talk_to_anyone", "i_know_everyone", "i_see_connections_others_miss"],
        unlocks: ["Private Equity Partner", "Venture Capitalist", "Serial Entrepreneur", "Industry Leader"] },
      { with: ["i_can_talk_to_anyone", "i_remember_everything_about_people"],
        unlocks: ["Relationship Capital Professional", "Wealth Advisor", "Executive Recruiter"] }
    ]
  },

  {
    id: "im_the_one_they_count_on_to_perform",
    label: "I'm the one my team counts on to perform when it actually matters",
    label_parent: "They're the one their team counts on to perform when it actually matters",
    cluster: "eq",
    riasec: ["R", "E", "C"],
    naics_sectors: [71, 54, 52],
    industries: [
      "Athletics & Sports",
      "Performance Management",
      "Sales & Business Development",
      "Investment & Trading",
      "Surgery & High-Stakes Medicine"
    ],
    career_emergence: [
      "Professional Athlete", "Investment Banker", "Surgeon", "Trial Attorney",
      "Closer / Top Sales Executive", "Elite Performer", "Trader"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["soccer", "basketball", "football", "volleyball", "lacrosse", "water_polo"], unlocks: ["Professional Athlete", "Elite Performer", "Star Player Development Track"] },
      { with: ["i_stay_calm_when_things_go_wrong"], unlocks: ["Surgeon", "Trial Attorney", "Closer / Top Sales Executive"] }
    ]
  },

  {
    id: "flow_state",
    label: "I lose track of time when I'm doing the thing I love most",
    label_parent: "They lose track of time when they're doing the thing they love most",
    cluster: "eq",
    riasec: ["A", "I", "R"],
    naics_sectors: [71, 51, 33, 61, 95],
    industries: ["Creative Arts", "Music & Entertainment", "Skilled Trades", "Education", "Longevity & Performance Science"],
    career_emergence: [
      "Musician", "Software Engineer", "Craftsperson", "Surgeon", "Athlete",
      "Research Scientist", "Master Tradesperson", "Composer", "Architect"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["music_production"], unlocks: ["Music Producer", "Sound Engineer", "Composer", "Audio Software Developer"] },
      { with: ["playing_instrument"], unlocks: ["Session Musician", "Orchestral Musician", "Composer", "Music Educator — Serious Practitioner"] },
      { with: ["singing"], unlocks: ["Professional Vocalist", "Choral Director", "Worship Music Director", "Voice Coach"] },
      { with: ["coding_programming"], unlocks: ["Software Engineer", "AI Research Scientist", "Systems Architect", "Game Developer"] },
      { with: ["woodworking", "three_d_printing"], unlocks: ["Master Craftsperson", "Industrial Designer", "Custom Manufacturing Specialist"] },
      { with: ["data_statistics"], unlocks: ["Research Scientist", "Quantitative Analyst", "Data Engineer", "Biostatistician"] },
      { with: ["writing_stories"], unlocks: ["Author", "Screenwriter", "Narrative Designer", "Journalist — Long Form"] },
      { with: ["fitness_lifting", "how_body_moves"], unlocks: ["Strength & Conditioning Coach", "Athletic Performance Specialist", "Physical Therapist"] }
    ]
  },

  {
    id: "compete",
    label: "Compete",
    label_parent: "Compete",
    cluster: "eq",
    riasec: ["E", "R", "S"],
    naics_sectors: [71, 61, 62, 54, 51],
    industries: ["Sports & Athletics", "Sports Medicine", "Sports Business & Management",
                 "Sports Media", "Sports Analytics", "Fitness & Wellness"],
    career_emergence: [
      "Professional Athlete", "Sports Agent", "Athletic Trainer", "Sports Medicine Physician",
      "Front Office Executive", "Sports Analyst", "Sports Broadcaster", "Strength & Conditioning Coach",
      "Sports Psychologist", "Sports Marketing Manager"
    ],
    geo_signal: false,
    eq_multiplier: true,
    combo_unlocks: [
      { with: ["fitness_lifting", "how_body_moves"], unlocks: ["Strength & Conditioning Coach", "Athletic Performance Specialist", "Physical Therapist — Sports Track"] },
      { with: ["medical_science", "biology"], unlocks: ["Sports Medicine Physician", "Athletic Trainer", "Orthopedic Surgeon", "Sports Physical Therapist"] },
      { with: ["entrepreneurship", "fantasy_sports_roster"], unlocks: ["Sports Agent", "Front Office Executive", "Sports Business Founder", "NIL Entrepreneur"] },
      { with: ["data_statistics", "ai_machine_learning"], unlocks: ["Sports Analytics Director", "Performance Data Scientist", "Sports Betting Analyst", "Wearable Technology Engineer"] },
      { with: ["teaching_tutoring", "leading_the_group"], unlocks: ["Head Coach", "Player Development Director", "Youth Sports Academy Director"] },
      { with: ["writing_stories", "filmmaking"], unlocks: ["Sports Broadcaster", "Sports Journalist", "Sports Documentary Director", "Podcast Host — Sports"] },
      { with: ["understanding_why_people", "mental_health_wellness"], unlocks: ["Sports Psychologist", "Mental Performance Consultant (CMPC)", "Athlete Transition Counselor"] },
      { with: ["philosophy", "writing_stories"], unlocks: ["Sports Attorney", "NFLPA / NBPA Agent", "NIL Compliance Counsel", "Sports Labor Lawyer"] },
      { with: ["flow_state"], unlocks: ["Elite Athlete", "Master Competitor", "Serious Amateur — Complete Athletic Life"] },
      { with: ["entrepreneurship", "understanding_why_people", "fantasy_sports_roster"], unlocks: ["General Manager", "Director of Player Personnel", "Head of Athlete Management", "Sports Brand Founder"] }
    ]
  }

];

/**
 * COMBINATION ENGINE
 * Given a set of selected tile IDs, finds all combination unlocks
 * Returns enriched career/industry suggestions beyond single-tile mapping
 */
function getComboUnlocks(selectedIds) {
  const results = [];
  const idSet = new Set(selectedIds);

  VECTOR_CROSSWALK.forEach(tile => {
    if (!idSet.has(tile.id)) return;
    tile.combo_unlocks.forEach(combo => {
      const allPresent = combo.with.every(req => idSet.has(req));
      if (allPresent) {
        results.push({
          triggered_by: [tile.id, ...combo.with],
          unlocks: combo.unlocks
        });
      }
    });
  });

  return results;
}

/**
 * RIASEC PROFILE BUILDER
 * Scores RIASEC types from selected tiles, returns ranked profile
 */
function getRIASECProfile(selectedIds) {
  const scores = { R:0, I:0, A:0, S:0, E:0, C:0 };
  const idSet = new Set(selectedIds);

  VECTOR_CROSSWALK.forEach(tile => {
    if (!idSet.has(tile.id)) return;
    tile.riasec.forEach(code => { scores[code]++; });
  });

  return Object.entries(scores)
    .sort((a,b) => b[1]-a[1])
    .map(([code, score]) => ({ code, score }));
}

/**
 * NAICS SECTOR AGGREGATOR
 * Returns ranked NAICS sectors from selected tiles
 */
function getNAICSProfile(selectedIds) {
  const counts = {};
  const idSet = new Set(selectedIds);

  VECTOR_CROSSWALK.forEach(tile => {
    if (!idSet.has(tile.id)) return;
    tile.naics_sectors.forEach(sector => {
      counts[sector] = (counts[sector] || 0) + 1;
    });
  });

  return Object.entries(counts)
    .sort((a,b) => b[1]-a[1])
    .map(([sector, count]) => ({ sector: parseInt(sector), count }));
}

/**
 * EQ MULTIPLIER CHECK
 * Returns true if any selected EQ tiles amplify the profile
 */
function hasEQSignal(selectedIds) {
  const idSet = new Set(selectedIds);
  return VECTOR_CROSSWALK.some(t => idSet.has(t.id) && t.eq_multiplier);
}

/**
 * GEO SIGNAL CHECK
 * Returns tiles that benefit from ZIP proximity matching
 */
function getGeoSignalTiles(selectedIds) {
  const idSet = new Set(selectedIds);
  return VECTOR_CROSSWALK.filter(t => idSet.has(t.id) && t.geo_signal).map(t => t.id);
}

if (typeof module !== 'undefined') module.exports = {
  VECTOR_CROSSWALK,
  getComboUnlocks,
  getRIASECProfile,
  getNAICSProfile,
  hasEQSignal,
  getGeoSignalTiles
};
