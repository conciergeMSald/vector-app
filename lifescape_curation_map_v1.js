/**
 * VECTOR Lifescape — Tile Curation Mapping Table
 * Version: 2.0 — June 2026
 *
 * PURPOSE:
 * Maps the three orienting question answers to a curated starting set
 * of 30-35 activity tiles. Prevents paralysis by analysis while
 * preserving signal richness.
 *
 * ORIENTING QUESTIONS:
 * Q1 — free_time: ['making','moving','thinking','people'] (multi-select)
 * Q2 — self_view: ['know_what_i_like','still_figuring_out','both']
 * Q3 — work_style: ['on_my_own','with_people','depends']
 *
 * ADDITIONAL SIGNALS (passed to curateInitialTiles):
 * pronoun  — 'he_him' | 'she_her' | 'they_them' | null
 *            Used for gender-weighted initial tile curation only.
 *            All tiles remain accessible via Show All.
 * grade    — integer 7-12
 *            Used to gate club_travel_sports tile (surfaces grades 7-9 only).
 *
 * NEW TILES IN v2.0:
 * make:    tiktok_content, fashion_inspiration, wardrobe_styling
 * move:    football, baseball, basketball, soccer, volleyball, softball,
 *          pilates, running_fitness_classes, club_travel_sports, ebike_outdoor_adventure
 *          (horseback_riding REMOVED)
 * think:   logic_puzzle_games, fantasy_sports
 *          (puzzles_brain_teasers merged into logic_puzzle_games,
 *           roblox_game_design merged into esports_gaming)
 * people:  reading_biographies, attending_events_concerts
 *
 * OUTPUT:
 * curateInitialTiles(answers) → string[] of tile IDs (30-35)
 * surfaceRelatedTiles(selectedIds, shownIds) → string[] of next tile IDs (8-12)
 */


// ─────────────────────────────────────────────────────────────
// CLUSTER POOLS
// Full list of activity tile IDs per cluster
// Used as source material for curation
// ─────────────────────────────────────────────────────────────

const TILE_POOLS = {
  make: [
    // Visual & digital creation
    'tiktok_content','drawing','painting','photography','animation',
    'graphic_design','fashion_inspiration','wardrobe_styling',
    // Music & performance
    'music_production','playing_instrument','singing',
    // Writing & story
    'writing_stories',
    // Physical making
    'cooking','baking','nail_art','hair_makeup','three_d_printing',
    // Removed: filmmaking (→ tiktok_content), fashion_design (→ fashion_inspiration), woodworking (too niche)
  ],
  move: [
    // Team sports — male-weighted initial curation
    'football','baseball','basketball','soccer',
    // Team sports — female-weighted initial curation
    'volleyball','softball',
    // Universal team/individual
    'cheerleading','dance',
    // Fitness & body
    'fitness_lifting','yoga','pilates','running_fitness_classes',
    // Individual sport / challenge
    'martial_arts','rock_climbing',
    // Travel/club sports — surfaces for grades 7-9
    'club_travel_sports',
    // Digital/competitive
    'esports_gaming',
    // Active outdoor
    'ebike_outdoor_adventure',
    // Removed: horseback_riding (per spec)
  ],
  think: [
    // Science & data
    'science_experiments','psychology','biology','chemistry',
    'data_statistics','ai_machine_learning','coding_programming',
    // Logic & games — NYT-style, mobile logic
    'logic_puzzle_games','fantasy_sports',
    // Ideas & inquiry
    'philosophy','true_crime','understanding_why_people',
    // Removed: roblox_game_design (→ esports_gaming covers), puzzles_brain_teasers (→ logic_puzzle_games)
  ],
  people: [
    // Service & care
    'volunteering','animal_care','mental_health_wellness',
    'working_with_little_kids','teaching_tutoring','advocacy_activism',
    'first_aid_emergencies',
    // Stories & inspiration
    'reading_biographies','attending_events_concerts',
    // Entrepreneurship
    'entrepreneurship'],
  systems: [
    'cosmetic_beauty_science','cooking_chemistry','medical_science','how_body_moves',
    'learning_differences','environment_sustainability','engineering_challenges',
    'architecture','nutrition_food_science','business_startups'
  ]
};

// Always-included tiles — high signal, high recognizability for any student
const ALWAYS_SHOW = [
  'cooking',             // universal, triggers baking/cosmetic combos
  'playing_instrument',  // high EQ combo potential
  'coding_programming',  // high NAICS coverage
  'entrepreneurship',    // cross-cluster signal
  'animal_care',         // strong EQ indicator
  'fitness_lifting',     // universal move tile
  'writing_stories',     // strong signal across many paths
  'photography',         // broad creative signal
  'tiktok_content',      // universal digital creation signal
  'fantasy_sports',      // analytical + competitive cross-cluster
  'logic_puzzle_games',  // universal think signal across genders
  'attending_events_concerts' // Presence Economy + social signal
];

// ─────────────────────────────────────────────────────────────
// Q1 FREE TIME MAPPING
// Each free-time answer maps to a prioritized tile subset
// ─────────────────────────────────────────────────────────────

const FREE_TIME_MAP = {

  making: [
    // Digital & visual creation
    'tiktok_content','photography','drawing','painting','graphic_design',
    'animation','fashion_inspiration','wardrobe_styling',
    // Music
    'music_production','playing_instrument','singing',
    // Writing
    'writing_stories',
    // Hands-on
    'cooking','baking','nail_art','hair_makeup','three_d_printing',
    // Systems that connect to making
    'cosmetic_beauty_science','cooking_chemistry','architecture','engineering_challenges',
    // Think that connects to making
    'ai_machine_learning'
  ],

  moving: [
    // Team sports (all — gender weighting applied in curateInitialTiles)
    'football','baseball','basketball','soccer','volleyball','softball',
    // Performance & fitness
    'cheerleading','dance','yoga','pilates','running_fitness_classes','fitness_lifting',
    // Individual challenge
    'martial_arts','rock_climbing','club_travel_sports','ebike_outdoor_adventure',
    // Digital competitive
    'esports_gaming',
    // Systems that connect to movement
    'how_body_moves','medical_science','nutrition_food_science',
    // People that connect to movement
    'working_with_little_kids','teaching_tutoring','first_aid_emergencies',
    // Make that connects to performance
    'playing_instrument','singing','music_production','photography'
  ],

  thinking: [
    // Science & data
    'science_experiments','psychology','biology','chemistry','coding_programming',
    'ai_machine_learning','data_statistics',
    // Logic & analytical games (Wordle, Connections, Sudoku, NYT)
    'logic_puzzle_games','fantasy_sports',
    // Ideas & inquiry
    'philosophy','true_crime','understanding_why_people',
    // Systems that connect to thinking
    'cosmetic_beauty_science','medical_science','engineering_challenges',
    'environment_sustainability','cooking_chemistry','architecture',
    // People that connect to thinking
    'advocacy_activism','teaching_tutoring','mental_health_wellness'
  ],

  people: [
    // Service & care
    'volunteering','animal_care','mental_health_wellness','working_with_little_kids',
    'teaching_tutoring','advocacy_activism','first_aid_emergencies',
    // Stories & inspiration — NEW
    'reading_biographies','attending_events_concerts',
    // Entrepreneurship
    'entrepreneurship',
    // Make that connects to people
    'tiktok_content','writing_stories','photography','music_production','singing',
    // Think that connects to people
    'psychology','understanding_why_people','true_crime','philosophy',
    // Systems that connects to people
    'medical_science','how_body_moves','learning_differences','nutrition_food_science'
  ]
};

// ─────────────────────────────────────────────────────────────
// Q2 SELF-VIEW MODIFIER
// Adjusts the tile set based on how the student sees themselves
// ─────────────────────────────────────────────────────────────

const SELF_VIEW_ADDITIONS = {

  know_what_i_like: [
    // Student has crystallized interests — show depth tiles
    'cosmetic_beauty_science','cooking_chemistry','ai_machine_learning',
    'data_statistics','architecture','engineering_challenges','philosophy',
    'animation','three_d_printing','logic_puzzle_games','fantasy_sports',
    'fashion_inspiration','tiktok_content'
  ],

  still_figuring_out: [
    // Student is exploring — show breadth tiles + connector tiles
    'cooking','drawing','dance','science_experiments','psychology',
    'volunteering','entrepreneurship','writing_stories','photography',
    'tiktok_content','music_production','animal_care','fitness_lifting',
    'coding_programming','advocacy_activism','attending_events_concerts',
    'logic_puzzle_games','reading_biographies'
  ],

  both: [
    // Balanced — mix of depth and breadth
    'cooking','drawing','science_experiments','psychology','entrepreneurship',
    'writing_stories','photography','animation','coding_programming',
    'animal_care','architecture','music_production','tiktok_content',
    'logic_puzzle_games','attending_events_concerts'
  ]
};

// ─────────────────────────────────────────────────────────────
// Q3 WORK STYLE MODIFIER
// Fine-tunes based on solo vs. social orientation
// ─────────────────────────────────────────────────────────────

const WORK_STYLE_BOOST = {

  on_my_own: [
    // Solo-oriented tiles — deep focus, individual craft
    'drawing','painting','writing_stories','coding_programming','photography',
    'animation','three_d_printing','science_experiments',
    'data_statistics','ai_machine_learning','philosophy','music_production',
    'architecture','logic_puzzle_games','fashion_inspiration','tiktok_content'
  ],

  with_people: [
    // Social-oriented tiles — collaboration, performance, service
    'tiktok_content','singing','teaching_tutoring','volunteering','entrepreneurship',
    'advocacy_activism','working_with_little_kids','animal_care','cheerleading',
    'dance','first_aid_emergencies','mental_health_wellness','playing_instrument',
    'photography','writing_stories','attending_events_concerts','reading_biographies',
    'football','volleyball','basketball','soccer','softball','baseball'
  ],

  depends: [
    // Balanced — tiles that work both ways
    'photography','writing_stories','music_production','cooking','drawing',
    'science_experiments','psychology','entrepreneurship','coding_programming',
    'animation','architecture','teaching_tutoring','tiktok_content',
    'logic_puzzle_games','fantasy_sports','attending_events_concerts'
  ]
};

// ─────────────────────────────────────────────────────────────
// CORE CURATION FUNCTION
// Combines all three answer signals into a weighted tile set
// Returns exactly 32 tiles (±2 depending on overlap)
// ─────────────────────────────────────────────────────────────

function curateInitialTiles(answers) {
  const { free_time = [], self_view = 'both', work_style = 'depends',
          pronoun = null, grade = null } = answers;

  // Score every activity tile
  const scores = {};

  // Initialize all activity tiles at 0
  Object.values(TILE_POOLS).flat().forEach(id => { scores[id] = 0; });

  // Q1 — free time answers (multi-select, each adds weight)
  free_time.forEach(ft => {
    const pool = FREE_TIME_MAP[ft] || [];
    pool.forEach((id, idx) => {
      // Earlier items in the pool get higher weight (they're more central to that path)
      scores[id] = (scores[id] || 0) + (pool.length - idx);
    });
  });

  // Q2 — self view modifier (additive bonus)
  const selfViewBonus = SELF_VIEW_ADDITIONS[self_view] || SELF_VIEW_ADDITIONS['both'];
  selfViewBonus.forEach(id => { scores[id] = (scores[id] || 0) + 5; });

  // Q3 — work style modifier (smaller additive bonus)
  const workStyleBonus = WORK_STYLE_BOOST[work_style] || WORK_STYLE_BOOST['depends'];
  workStyleBonus.forEach(id => { scores[id] = (scores[id] || 0) + 3; });

  // ── Gender-weighted initial curation ──────────────────────────────────────
  // Pronoun = 'he_him' → boost male-typical sport tiles into initial set
  // Pronoun = 'she_her' → boost female-typical sport/activity tiles
  // Pronoun = 'they_them' or null → balanced / no boost
  // These are INITIAL CURATION weights only — all tiles remain accessible via Show All
  if (pronoun === 'he_him') {
    ['football','baseball','basketball','soccer','esports_gaming',
     'fantasy_sports','fitness_lifting','club_travel_sports','martial_arts']
      .forEach(id => { scores[id] = (scores[id] || 0) + 12; });
    // Reduce (not hide) tiles less likely to resonate first
    ['pilates','cheerleading','nail_art','hair_makeup','wardrobe_styling','fashion_inspiration']
      .forEach(id => { scores[id] = Math.max(0, (scores[id] || 0) - 4); });
  } else if (pronoun === 'she_her') {
    ['volleyball','softball','dance','cheerleading','yoga','pilates',
     'running_fitness_classes','fashion_inspiration','wardrobe_styling',
     'nail_art','hair_makeup','logic_puzzle_games','reading_biographies',
     'attending_events_concerts']
      .forEach(id => { scores[id] = (scores[id] || 0) + 12; });
    // Reduce (not hide) tiles less likely to resonate first
    ['football','baseball','martial_arts','esports_gaming']
      .forEach(id => { scores[id] = Math.max(0, (scores[id] || 0) - 4); });
  }

  // ── Grade gate: club_travel_sports surfaces only for grades 7-9 ────────────
  // For grade 10+ it stays in the pool but doesn't get the ALWAYS_SHOW boost
  if (grade && grade <= 9) {
    scores['club_travel_sports'] = Math.max(scores['club_travel_sports'] || 0, 10);
  } else if (grade && grade >= 10) {
    // Replace with individual sport tiles — the club journey is established
    scores['club_travel_sports'] = 0;
  }

  // Always-show tiles get a baseline score so they always appear
  ALWAYS_SHOW.forEach(id => { scores[id] = Math.max(scores[id] || 0, 8); });

  // If no free_time answers given — show balanced default set
  if (free_time.length === 0) {
    Object.values(TILE_POOLS).flat().forEach(id => {
      scores[id] = (scores[id] || 0) + 5;
    });
  }

  // Sort by score descending, take top 32
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);

  // Ensure cluster balance — at least 2 tiles from each non-dominant cluster
  const result = ensureClusterBalance(sorted, free_time);

  return result.slice(0, 32);
}


// ─────────────────────────────────────────────────────────────
// CLUSTER BALANCE ENFORCER
// Ensures no cluster is completely absent from the initial set
// A student who picked "making" still sees science and people tiles
// because cross-cluster discovery is how unexpected combos fire
// ─────────────────────────────────────────────────────────────

function ensureClusterBalance(sortedIds, free_time) {
  const MIN_PER_CLUSTER = 2;
  const result = [...sortedIds];
  const clusterCounts = {};

  // Count how many tiles from each cluster are in top 32
  result.slice(0, 32).forEach(id => {
    const cluster = getCluster(id);
    if (cluster) clusterCounts[cluster] = (clusterCounts[cluster] || 0) + 1;
  });

  // For any cluster with fewer than MIN tiles, inject the top-scored tile from that cluster
  Object.keys(TILE_POOLS).forEach(cluster => {
    if ((clusterCounts[cluster] || 0) < MIN_PER_CLUSTER) {
      const clusterTiles = TILE_POOLS[cluster];
      // Find the highest-scored tile from this cluster not already in result
      const toAdd = clusterTiles.find(id => !result.slice(0, 32).includes(id));
      if (toAdd) {
        // Insert at position 30 (before the last two slots)
        result.splice(30, 0, toAdd);
      }
    }
  });

  return result;
}

function getCluster(tileId) {
  for (const [cluster, ids] of Object.entries(TILE_POOLS)) {
    if (ids.includes(tileId)) return cluster;
  }
  return null;
}


// ─────────────────────────────────────────────────────────────
// PROGRESSIVE REVEAL FUNCTION
// After 3+ tile selections, surfaces 8-12 related tiles
// Based on what was selected, not what was shown
// Never repeats tiles already shown
// ─────────────────────────────────────────────────────────────

// Adjacency map — if you selected X, also consider showing Y
// Based on crosswalk combo_unlocks and NAICS overlap
const TILE_ADJACENCY = {
  cooking:              ['baking','nutrition_food_science','cosmetic_beauty_science','cooking_chemistry'],
  baking:               ['cooking','cosmetic_beauty_science','cooking_chemistry','chemistry'],
  drawing:              ['animation','graphic_design','architecture','painting','photography'],
  painting:             ['drawing','photography','animation','nail_art'],
  photography:          ['tiktok_content','drawing','graphic_design','fashion_design'],
  fashion_design:       ['nail_art','hair_makeup','graphic_design','cosmetic_beauty_science'],
  graphic_design:       ['drawing','animation','coding_programming','photography'],
  animation:            ['drawing','esports_gaming','tiktok_content','graphic_design'],
  music_production:     ['playing_instrument','singing','tiktok_content','coding_programming'],
  playing_instrument:   ['singing','music_production','dance'],
  singing:              ['playing_instrument','dance','music_production'],
  writing_stories:      ['psychology','journalism','philosophy','tiktok_content'],
  nail_art:             ['hair_makeup','cosmetic_beauty_science','fashion_design'],
  hair_makeup:          ['nail_art','cosmetic_beauty_science','fashion_design'],
  woodworking:          ['architecture','engineering_challenges','three_d_printing'],
  three_d_printing:     ['engineering_challenges','woodworking','medical_science','architecture'],
  dance:                ['how_body_moves','playing_instrument','cheerleading','yoga'],
  cheerleading:         ['dance','fitness_lifting','how_body_moves'],
  fitness_lifting:      ['how_body_moves','nutrition_food_science','medical_science','yoga'],
  yoga:                 ['fitness_lifting','mental_health_wellness','how_body_moves'],
  martial_arts:         ['fitness_lifting','first_aid_emergencies','how_body_moves'],
  esports_gaming:       ['coding_programming','esports_gaming','ai_machine_learning','data_statistics'],
  rock_climbing:        ['fitness_lifting','environment_sustainability','how_body_moves'],
  science_experiments:  ['chemistry','biology','cosmetic_beauty_science','medical_science'],
  psychology:           ['mental_health_wellness','understanding_why_people','philosophy','biology'],
  biology:              ['medical_science','science_experiments','chemistry','environment_sustainability'],
  chemistry:            ['science_experiments','cosmetic_beauty_science','cooking_chemistry','biology'],
  coding_programming:   ['ai_machine_learning','esports_gaming','data_statistics','engineering_challenges'],
  ai_machine_learning:  ['coding_programming','data_statistics','esports_gaming'],
  data_statistics:      ['coding_programming','business_startups','ai_machine_learning','economics'],
  philosophy:           ['psychology','writing_stories','advocacy_activism','understanding_why_people'],
  true_crime:           ['psychology','law_justice','understanding_why_people'],
  understanding_why_people:['psychology','philosophy','mental_health_wellness','writing_stories'],
  volunteering:         ['mental_health_wellness','working_with_little_kids','advocacy_activism','animal_care'],
  animal_care:          ['biology','working_with_little_kids','environment_sustainability'],
  mental_health_wellness:['psychology','working_with_little_kids','volunteering','teaching_tutoring'],
  working_with_little_kids:['teaching_tutoring','mental_health_wellness','how_body_moves','animal_care'],
  teaching_tutoring:    ['working_with_little_kids','psychology','writing_stories','learning_differences'],
  advocacy_activism:    ['volunteering','writing_stories','philosophy','mental_health_wellness'],
  entrepreneurship:     ['business_startups','coding_programming','tiktok_content','data_statistics'],
  first_aid_emergencies:['medical_science','fitness_lifting','biology','how_body_moves'],
  cosmetic_beauty_science:['chemistry','nail_art','hair_makeup','cooking_chemistry'],
  cooking_chemistry:    ['cooking','baking','cosmetic_beauty_science','chemistry'],
  medical_science:      ['biology','science_experiments','how_body_moves','first_aid_emergencies'],
  how_body_moves:       ['fitness_lifting','dance','medical_science','nutrition_food_science'],
  learning_differences: ['working_with_little_kids','teaching_tutoring','psychology','how_body_moves'],
  environment_sustainability:['biology','animal_care','engineering_challenges','architecture'],
  engineering_challenges:['architecture','woodworking','three_d_printing','coding_programming'],
  architecture:         ['woodworking','engineering_challenges','drawing','environment_sustainability'],
  nutrition_food_science:['cooking','biology','fitness_lifting','medical_science'],
  business_startups:    ['entrepreneurship','data_statistics','coding_programming'],

  // ── NEW TILE ADJACENCIES ──────────────────────────────────────────────────
  tiktok_content:       ['photography','writing_stories','music_production','graphic_design','entrepreneurship','attending_events_concerts'],
  fashion_inspiration:  ['wardrobe_styling','nail_art','hair_makeup','graphic_design','cosmetic_beauty_science','fashion_design'],
  wardrobe_styling:     ['fashion_inspiration','nail_art','hair_makeup','graphic_design','entrepreneurship'],
  logic_puzzle_games:   ['data_statistics','psychology','coding_programming','philosophy','fantasy_sports','understanding_why_people'],
  fantasy_sports:       ['data_statistics','football','baseball','basketball','soccer','esports_gaming','business_startups'],
  reading_biographies:  ['writing_stories','psychology','philosophy','advocacy_activism','understanding_why_people','true_crime'],
  attending_events_concerts: ['music_production','playing_instrument','singing','entrepreneurship','tiktok_content','advocacy_activism'],
  football:             ['club_travel_sports','fitness_lifting','how_body_moves','first_aid_emergencies','fantasy_sports'],
  baseball:             ['club_travel_sports','fitness_lifting','how_body_moves','fantasy_sports','data_statistics'],
  basketball:           ['club_travel_sports','fitness_lifting','how_body_moves','fantasy_sports','esports_gaming'],
  soccer:               ['club_travel_sports','fitness_lifting','how_body_moves','running_fitness_classes','nutrition_food_science'],
  volleyball:           ['club_travel_sports','fitness_lifting','how_body_moves','cheerleading','dance'],
  softball:             ['club_travel_sports','fitness_lifting','how_body_moves','baseball','first_aid_emergencies'],
  pilates:              ['yoga','fitness_lifting','how_body_moves','dance','running_fitness_classes'],
  running_fitness_classes: ['fitness_lifting','pilates','yoga','how_body_moves','nutrition_food_science'],
  club_travel_sports:   ['fitness_lifting','how_body_moves','first_aid_emergencies','football','basketball','soccer','volleyball','softball','baseball'],
  ebike_outdoor_adventure: ['rock_climbing','environment_sustainability','fitness_lifting','how_body_moves'],
};

function surfaceRelatedTiles(selectedIds, alreadyShownIds) {
  const candidateScores = {};
  const shownSet = new Set(alreadyShownIds);
  const selectedSet = new Set(selectedIds);

  // For each selected tile, boost its adjacent tiles
  selectedIds.forEach(id => {
    const adjacent = TILE_ADJACENCY[id] || [];
    adjacent.forEach((adjId, idx) => {
      // Skip if already shown or already selected
      if (shownSet.has(adjId) || selectedSet.has(adjId)) return;
      // Earlier adjacencies get more weight
      candidateScores[adjId] = (candidateScores[adjId] || 0) + (adjacent.length - idx + 3);
    });
  });

  // Sort by score, return top 10
  return Object.entries(candidateScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([id]) => id);
}


// ─────────────────────────────────────────────────────────────
// STILL FIGURING IT OUT — special handling
// When self_view = 'still_figuring_out', surface the connector
// and pattern reader tiles more prominently in the EQ layer
// Signal: these students need to see themselves in the system
// ─────────────────────────────────────────────────────────────

function getEQPriority(answers) {
  const { self_view, work_style, free_time = [] } = answers;

  // Default EQ order — show all 39 but prioritize by relevance
  const connectorFirst = [
    'i_can_talk_to_anyone','i_know_everyone','i_remember_everything_about_people',
    'i_talk_to_new_people_first','i_fix_friend_group_drama','im_friends_with_older_people',
    'i_make_the_group_chat','people_tell_me_personal_stuff'
  ];

  const patternFirst = [
    'i_feel_the_vibe_immediately','i_see_connections_others_miss','i_know_before_it_happens',
    'i_usually_right_about_people','my_friends_say_i_have_good_instincts','i_notice_trends_early'
  ];

  const figuringItOutFirst = [
    'still_figuring_it_out','good_at_a_lot_not_great_at_one','get_into_things_then_move_on',
    'people_always_want_me_on_their_team','i_show_up_when_it_matters'
  ];

  const standardFirst = [
    'i_feel_things_deeply','i_notice_when_left_out','i_stay_calm_when_things_go_wrong',
    'i_cant_ignore_unfairness','i_am_person_people_call','i_slow_down_for_people',
    'i_like_figuring_out_different_way','little_kids_love_me','animals_trust_me',
    'i_like_explaining_things','id_rather_listen_than_talk','i_notice_things_others_miss',
    'want_to_fix_it_not_talk_about_it','i_lose_track_of_time_making',
    'im_one_who_holds_group_together','i_ask_why','i_remember_details_about_people',
    'i_process_through_art_music','i_can_tell_when_upset','i_think_of_others_feelings'
  ];

  if (self_view === 'still_figuring_out') {
    // Lead with figuring it out tiles, then connector, then pattern, then standard
    return [...figuringItOutFirst, ...connectorFirst, ...patternFirst, ...standardFirst];
  }

  if (work_style === 'with_people' || free_time.includes('people')) {
    // Lead with connector tiles
    return [...connectorFirst, ...patternFirst, ...figuringItOutFirst, ...standardFirst];
  }

  if (free_time.includes('thinking')) {
    // Lead with pattern reader tiles
    return [...patternFirst, ...standardFirst, ...connectorFirst, ...figuringItOutFirst];
  }

  // Default — lead with the most universally relatable EQ tiles
  return [...standardFirst, ...connectorFirst, ...patternFirst, ...figuringItOutFirst];
}


// ─────────────────────────────────────────────────────────────
// VALIDATION — test all answer combinations produce valid sets
// ─────────────────────────────────────────────────────────────

function validateCurationMap() {
  const freeTimeOptions = ['making','moving','thinking','people'];
  const selfViewOptions = ['know_what_i_like','still_figuring_out','both'];
  const workStyleOptions = ['on_my_own','with_people','depends'];

  let allValid = true;
  const results = [];

  // Test all single free-time selections
  freeTimeOptions.forEach(ft => {
    selfViewOptions.forEach(sv => {
      workStyleOptions.forEach(ws => {
        const tiles = curateInitialTiles({ free_time:[ft], self_view:sv, work_style:ws });
        const clusters = {};
        tiles.forEach(id => {
          const c = getCluster(id);
          if (c) clusters[c] = (clusters[c]||0)+1;
        });
        const valid = tiles.length >= 28 && tiles.length <= 36 &&
          Object.keys(clusters).length >= 4; // at least 4 clusters represented
        if (!valid) {
          allValid = false;
          results.push({ FAIL: true, ft, sv, ws, count: tiles.length, clusters });
        }
      });
    });
  });

  // Test multi free-time selections
  const multiTests = [
    { free_time:['making','thinking'], self_view:'know_what_i_like', work_style:'on_my_own' },
    { free_time:['people','moving'], self_view:'still_figuring_out', work_style:'with_people' },
    { free_time:['making','moving','thinking','people'], self_view:'both', work_style:'depends' },
    { free_time:[], self_view:'still_figuring_out', work_style:'depends' }
  ];

  multiTests.forEach(answers => {
    const tiles = curateInitialTiles(answers);
    const clusters = {};
    tiles.forEach(id => { const c=getCluster(id); if(c) clusters[c]=(clusters[c]||0)+1; });
    const valid = tiles.length >= 28 && tiles.length <= 36 && Object.keys(clusters).length >= 4;
    results.push({ valid, ft: answers.free_time.join('+'), count: tiles.length, clusters });
    if (!valid) allValid = false;
  });

  return { allValid, results };
}

if (typeof module !== 'undefined') module.exports = {
  curateInitialTiles,
  surfaceRelatedTiles,
  getEQPriority,
  validateCurationMap,
  TILE_POOLS,
  TILE_ADJACENCY,
  ALWAYS_SHOW
}; // v2.0
