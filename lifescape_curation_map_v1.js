/**
 * VECTOR Lifescape — Tile Curation Mapping Table
 * Version: 1.0 — June 16, 2026
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
    'cooking','baking','drawing','painting','photography','filmmaking',
    'fashion_design','graphic_design','animation','music_production',
    'playing_instrument','singing','writing_stories','nail_art','hair_makeup',
    'woodworking','three_d_printing'
  ],
  move: [
    'dance','cheerleading','fitness_lifting','yoga','martial_arts',
    'esports_gaming','horseback_riding','rock_climbing',
    'soccer','basketball','football','baseball_softball','volleyball','lacrosse','ice_hockey',
    'track_field','swimming','gymnastics','wrestling','tennis',
    'golf','crew_rowing','cross_country','fencing','water_polo'
  ],
  think: [
    'science_experiments','psychology','biology','chemistry','coding_programming',
    'ai_machine_learning','roblox_game_design','data_statistics','philosophy',
    'true_crime','puzzles_brain_teasers','word_puzzles','logic_number_puzzles',
    'category_pattern_puzzles','understanding_why_people',
    'chess','debate_mock_un','speech_forensics','scifi_worldbuilding',
    'journalism','law_justice','economics'
  ],
  people: [
    'volunteering','animal_care','mental_health_wellness','working_with_little_kids',
    'teaching_tutoring','advocacy_activism','entrepreneurship','first_aid_emergencies'
  ],
  systems: [
    'cosmetic_beauty_science','cooking_chemistry','medical_science','how_body_moves',
    'learning_differences','environment_sustainability','engineering_challenges',
    'robotics_competitions','architecture','nutrition_food_science','business_startups'
  ]
};

// Always-included tiles — high signal, high recognizability for any student
const ALWAYS_SHOW = [
  // Make cluster anchor tiles
  'cooking',          // universal, triggers baking/cosmetic combos
  'playing_instrument', // high EQ combo potential
  'writing_stories',  // strong signal across many paths
  'photography',      // broad creative signal
  // Move cluster — guaranteed minimum 5 visible regardless of free-time answer
  'fitness_lifting',  // universal move tile
  'soccer',           // highest-participation team sport
  'dance',            // expressive movement
  'basketball',       // second-highest participation
  'track_field',      // individual competitive — broad reach
  // Systems cluster — guaranteed minimum 5 visible
  'engineering_challenges', // strong systems signal
  'how_body_moves',         // body-systems crossover
  'medical_science',        // broad health signal
  'business_startups',      // entrepreneurial systems
  'environment_sustainability', // climate/outdoor signal
  // Think cluster — guaranteed minimum 5 visible
  'psychology',       // most universal Think tile
  'science_experiments', // second-most universal
  'coding_programming', // high IBIS coverage
  'ai_machine_learning', // contemporary relevance
  'data_statistics',  // completes Think minimum
  // People cluster — guaranteed minimum 5 visible
  'volunteering',     // broad civic signal
  'teaching_tutoring', // most universal People tile
  'entrepreneurship', // cross-cluster signal
  'animal_care',      // strong EQ indicator
  'mental_health_wellness' // completes People minimum
];

// ─────────────────────────────────────────────────────────────
// Q1 FREE TIME MAPPING
// Each free-time answer maps to a prioritized tile subset
// ─────────────────────────────────────────────────────────────

const FREE_TIME_MAP = {

  making: [
    // Make cluster — full representation
    'cooking','baking','drawing','painting','photography','filmmaking',
    'fashion_design','graphic_design','animation','music_production',
    'playing_instrument','nail_art','hair_makeup','woodworking','three_d_printing',
    // Systems tiles that connect to making
    'cosmetic_beauty_science','cooking_chemistry','architecture','engineering_challenges',
    // Think tiles that connect to making
    'roblox_game_design','ai_machine_learning'
  ],

  moving: [
    // Move cluster — full representation
    'dance','cheerleading','fitness_lifting','yoga','martial_arts',
    'esports_gaming','horseback_riding','rock_climbing',
    'soccer','basketball','football','baseball_softball','volleyball','lacrosse','ice_hockey',
    'track_field','swimming','gymnastics','wrestling','tennis',
    // Systems tiles that connect to movement
    'how_body_moves','medical_science','nutrition_food_science',
    // People tiles that connect to movement
    'working_with_little_kids','teaching_tutoring','first_aid_emergencies',
    // Make tiles that connect to performance
    'playing_instrument','singing','music_production','photography'
  ],

  thinking: [
    // Think cluster — full representation
    'science_experiments','psychology','biology','chemistry','coding_programming',
    'ai_machine_learning','roblox_game_design','data_statistics','philosophy',
    'true_crime','puzzles_brain_teasers','word_puzzles','logic_number_puzzles',
    'category_pattern_puzzles','understanding_why_people',
    'chess','debate_mock_un','speech_forensics','scifi_worldbuilding',
    'journalism','law_justice','economics',
    // Systems tiles that connect to thinking
    'cosmetic_beauty_science','medical_science','engineering_challenges',
    'environment_sustainability','cooking_chemistry','architecture',
    // People tiles that connect to thinking
    'advocacy_activism','teaching_tutoring','mental_health_wellness'
  ],

  people: [
    // People cluster — full representation
    'volunteering','animal_care','mental_health_wellness','working_with_little_kids',
    'teaching_tutoring','advocacy_activism','entrepreneurship','first_aid_emergencies',
    // Make tiles that connect to people
    'filmmaking','writing_stories','photography','music_production','singing',
    // Think tiles that connect to people
    'psychology','understanding_why_people','true_crime','philosophy',
    // Systems tiles that connect to people
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
    // These require some prior interest to resonate
    'cosmetic_beauty_science','cooking_chemistry','ai_machine_learning',
    'data_statistics','architecture','engineering_challenges','philosophy',
    'animation','three_d_printing','roblox_game_design'
  ],

  still_figuring_out: [
    // Student is exploring — show breadth tiles + connector tiles
    // Deliberately broad to catch latent interests
    'cooking','drawing','dance','science_experiments','psychology',
    'volunteering','entrepreneurship','writing_stories','photography',
    'filmmaking','music_production','animal_care','fitness_lifting',
    'coding_programming','advocacy_activism'
  ],

  both: [
    // Balanced — mix of depth and breadth
    'cooking','drawing','science_experiments','psychology','entrepreneurship',
    'writing_stories','photography','animation','coding_programming',
    'animal_care','architecture','music_production','filmmaking'
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
    'animation','woodworking','three_d_printing','science_experiments',
    'data_statistics','ai_machine_learning','philosophy','music_production',
    'roblox_game_design','architecture'
  ],

  with_people: [
    // Social-oriented tiles — collaboration, performance, service
    'filmmaking','singing','teaching_tutoring','volunteering','entrepreneurship',
    'advocacy_activism','working_with_little_kids','animal_care','cheerleading',
    'dance','first_aid_emergencies','mental_health_wellness','playing_instrument',
    'photography','writing_stories'
  ],

  depends: [
    // Balanced — tiles that work both ways
    'photography','writing_stories','music_production','cooking','drawing',
    'science_experiments','psychology','entrepreneurship','coding_programming',
    'animation','architecture','teaching_tutoring','filmmaking'
  ]
};

// ─────────────────────────────────────────────────────────────
// CORE CURATION FUNCTION
// Combines all three answer signals into a weighted tile set
// Returns exactly 32 tiles (±2 depending on overlap)
// ─────────────────────────────────────────────────────────────

function curateInitialTiles(answers) {
  const { free_time = [], self_view = 'both', work_style = 'depends' } = answers;

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

  // Always-show tiles get a baseline score so they always appear
  ALWAYS_SHOW.forEach(id => { scores[id] = Math.max(scores[id] || 0, 50); });

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
  const MIN_PER_CLUSTER = 5;   // every cluster guaranteed at least 5 visible tiles
  const MAX_PER_CLUSTER = 9;   // no single cluster dominates — caps Make at 9 instead of 15
  let result = [...sortedIds];

  // Pass 1 — enforce maximum per cluster: demote excess tiles beyond MAX to the back
  const seen = {};
  const kept = [];
  const demoted = [];
  result.forEach(id => {
    const cluster = getCluster(id);
    if (!cluster) { kept.push(id); return; }
    seen[cluster] = (seen[cluster] || 0) + 1;
    if (seen[cluster] <= MAX_PER_CLUSTER) kept.push(id);
    else demoted.push(id);
  });
  result = [...kept, ...demoted];

  // Pass 2 — enforce minimum per cluster: inject tiles if any cluster is under MIN
  const clusterCounts = {};
  result.slice(0, 32).forEach(id => {
    const cluster = getCluster(id);
    if (cluster) clusterCounts[cluster] = (clusterCounts[cluster] || 0) + 1;
  });

  Object.keys(TILE_POOLS).forEach(cluster => {
    let toFill = MIN_PER_CLUSTER - (clusterCounts[cluster] || 0);
    if (toFill <= 0) return;
    const clusterTiles = TILE_POOLS[cluster];
    // Find highest-scored tiles from this cluster not already in top 32
    const candidates = clusterTiles.filter(id => !result.slice(0, 32).includes(id));
    candidates.slice(0, toFill).forEach((id, i) => {
      result.splice(30 + i, 0, id);
    });
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
  photography:          ['filmmaking','drawing','graphic_design','fashion_design'],
  filmmaking:           ['photography','writing_stories','animation','graphic_design'],
  fashion_design:       ['nail_art','hair_makeup','graphic_design','cosmetic_beauty_science'],
  graphic_design:       ['drawing','animation','coding_programming','photography'],
  animation:            ['drawing','roblox_game_design','filmmaking','graphic_design'],
  music_production:     ['playing_instrument','singing','filmmaking','coding_programming'],
  playing_instrument:   ['singing','music_production','dance'],
  singing:              ['playing_instrument','dance','music_production'],
  writing_stories:      ['psychology','journalism','philosophy','filmmaking'],
  nail_art:             ['hair_makeup','cosmetic_beauty_science','fashion_design'],
  hair_makeup:          ['nail_art','cosmetic_beauty_science','fashion_design'],
  woodworking:          ['architecture','engineering_challenges','three_d_printing'],
  three_d_printing:     ['engineering_challenges','woodworking','medical_science','architecture'],
  dance:                ['how_body_moves','playing_instrument','cheerleading','yoga'],
  cheerleading:         ['dance','fitness_lifting','how_body_moves'],
  fitness_lifting:      ['how_body_moves','nutrition_food_science','medical_science','yoga'],
  yoga:                 ['fitness_lifting','mental_health_wellness','how_body_moves'],
  martial_arts:         ['fitness_lifting','first_aid_emergencies','how_body_moves'],
  esports_gaming:       ['coding_programming','roblox_game_design','ai_machine_learning','data_statistics'],
  horseback_riding:     ['animal_care','how_body_moves','environment_sustainability'],
  rock_climbing:        ['fitness_lifting','environment_sustainability','how_body_moves'],
  science_experiments:  ['chemistry','biology','cosmetic_beauty_science','medical_science'],
  psychology:           ['mental_health_wellness','understanding_why_people','philosophy','biology'],
  biology:              ['medical_science','science_experiments','chemistry','environment_sustainability'],
  chemistry:            ['science_experiments','cosmetic_beauty_science','cooking_chemistry','biology'],
  coding_programming:   ['ai_machine_learning','roblox_game_design','data_statistics','engineering_challenges'],
  ai_machine_learning:  ['coding_programming','data_statistics','roblox_game_design'],
  roblox_game_design:   ['coding_programming','animation','esports_gaming','ai_machine_learning'],
  data_statistics:      ['coding_programming','business_startups','ai_machine_learning','economics'],
  philosophy:           ['psychology','writing_stories','advocacy_activism','understanding_why_people'],
  true_crime:           ['psychology','law_justice','understanding_why_people'],
  puzzles_brain_teasers:['science_experiments','coding_programming','medical_science','data_statistics'],
  understanding_why_people:['psychology','philosophy','mental_health_wellness','writing_stories'],
  volunteering:         ['mental_health_wellness','working_with_little_kids','advocacy_activism','animal_care'],
  animal_care:          ['biology','horseback_riding','working_with_little_kids','environment_sustainability'],
  mental_health_wellness:['psychology','working_with_little_kids','volunteering','teaching_tutoring'],
  working_with_little_kids:['teaching_tutoring','mental_health_wellness','how_body_moves','animal_care'],
  teaching_tutoring:    ['working_with_little_kids','psychology','writing_stories','learning_differences'],
  advocacy_activism:    ['volunteering','writing_stories','philosophy','mental_health_wellness'],
  entrepreneurship:     ['business_startups','coding_programming','filmmaking','data_statistics'],
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

  // ── New team sports — adjacent to each other and to body/movement tiles ──
  soccer:               ['basketball','football','lacrosse','ice_hockey','how_body_moves'],
  basketball:           ['soccer','volleyball','football','how_body_moves'],
  football:             ['basketball','lacrosse','ice_hockey','fitness_lifting'],
  baseball_softball:    ['data_statistics','track_field','fitness_lifting'],
  volleyball:           ['basketball','soccer','how_body_moves'],
  lacrosse:             ['soccer','ice_hockey','football','how_body_moves'],
  ice_hockey:           ['lacrosse','soccer','football','martial_arts'],

  // ── New individual competitive sports — adjacent to each other and to data/science tiles ──
  track_field:          ['swimming','cross_country','how_body_moves','data_statistics'],
  swimming:             ['track_field','how_body_moves','medical_science'],
  gymnastics:           ['dance','how_body_moves','fitness_lifting'],
  wrestling:            ['martial_arts','fitness_lifting','how_body_moves'],
  tennis:               ['golf','fitness_lifting','data_statistics'],

  // ── New access/endurance sports — adjacent to each other and to relevant outdoor/data tiles ──
  golf:                 ['tennis','entrepreneurship','business_startups'],
  crew_rowing:          ['swimming','fitness_lifting','how_body_moves'],
  cross_country:        ['track_field','how_body_moves','environment_sustainability'],
  fencing:              ['martial_arts','chess','puzzles_brain_teasers'],
  water_polo:           ['swimming','how_body_moves','fitness_lifting'],

  // ── New puzzle tiles — adjacent to each other, to chess, and to the original generic puzzle tile ──
  word_puzzles:         ['puzzles_brain_teasers','writing_stories','category_pattern_puzzles'],
  logic_number_puzzles: ['puzzles_brain_teasers','data_statistics','chess'],
  category_pattern_puzzles:['puzzles_brain_teasers','word_puzzles','data_statistics'],

  // ── New academic/competitive club tiles — adjacent to each other and to relevant Think/Make tiles ──
  chess:                ['logic_number_puzzles','data_statistics','puzzles_brain_teasers'],
  debate_mock_un:       ['speech_forensics','philosophy','advocacy_activism'],
  speech_forensics:     ['debate_mock_un','writing_stories','philosophy'],
  scifi_worldbuilding:  ['writing_stories','ai_machine_learning','roblox_game_design'],

  // ── New Systems tile — adjacent to engineering and coding tiles ──
  robotics_competitions:['engineering_challenges','coding_programming','three_d_printing'],

  // ── Journalism, Law & Justice, Economics — adjacent to each other and to relevant existing tiles ──
  journalism:           ['writing_stories','filmmaking','data_statistics','speech_forensics'],
  law_justice:          ['debate_mock_un','economics','advocacy_activism','speech_forensics'],
  economics:            ['data_statistics','law_justice','business_startups','entrepreneurship']
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
};
