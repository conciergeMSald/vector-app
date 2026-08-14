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
    'esports_gaming','horseback_riding','rock_climbing'
  ],
  think: [
    'science_experiments','psychology','biology','chemistry','coding_programming',
    'ai_machine_learning','roblox_game_design','data_statistics','philosophy',
    'true_crime','puzzles_brain_teasers','understanding_why_people'
  ],
  people: [
    'volunteering','animal_care','mental_health_wellness','working_with_little_kids',
    'teaching_tutoring','advocacy_activism','entrepreneurship','first_aid_emergencies'
  ],
  systems: [
    'cosmetic_beauty_science','cooking_chemistry','medical_science','how_body_moves',
    'learning_differences','environment_sustainability','engineering_challenges',
    'architecture','nutrition_food_science','business_startups',
    'running_a_minecraft_server','building_ai_workflows','coding_discord_bots',
    'managing_a_simulation_game','making_study_systems'
  ]
};

// Always-included tiles — high signal, high recognizability for any student
const ALWAYS_SHOW = [
  'cooking',          // universal, triggers baking/cosmetic combos
  'playing_instrument', // high EQ combo potential
  'coding_programming', // high IBIS coverage
  'entrepreneurship', // cross-cluster signal
  'animal_care',      // strong EQ indicator
  'fitness_lifting',  // universal move tile
  'writing_stories',  // strong signal across many paths
  'photography'       // broad creative signal
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
    'roblox_game_design','ai_machine_learning',
    // Systems tiles (technical build) that connect to making
    'running_a_minecraft_server','building_ai_workflows','coding_discord_bots'
  ],

  moving: [
    // Move cluster — full representation
    'dance','cheerleading','fitness_lifting','yoga','martial_arts',
    'esports_gaming','horseback_riding','rock_climbing',
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
    'true_crime','puzzles_brain_teasers','understanding_why_people',
    // Systems tiles that connect to thinking
    'cosmetic_beauty_science','medical_science','engineering_challenges',
    'environment_sustainability','cooking_chemistry','architecture',
    'running_a_minecraft_server','building_ai_workflows','coding_discord_bots',
    'managing_a_simulation_game','making_study_systems',
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
    'roblox_game_design','architecture','making_study_systems'
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
  business_startups:    ['entrepreneurship','data_statistics','coding_programming']
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

  // TILE-SYSTEMS-002 Part 3, July 24 2026: this function previously never
  // cross-checked TILE_POOLS/TILE_ADJACENCY against VECTOR_CROSSWALK, so it
  // could not detect a phantom-tile-ID regression (an ID present here but
  // never built as a real tile) -- confirmed by testing that this function
  // reported allValid: true even against the crosswalk that shipped with 9
  // undefined tile IDs. Added as an explicit, separate check so this class
  // of bug fails loudly here instead of silently at render time.
  const crosswalkIds = (typeof VECTOR_CROSSWALK !== 'undefined')
    ? new Set(VECTOR_CROSSWALK.map(t => t.id))
    : null;
  const phantomIds = [];
  if (crosswalkIds) {
    Object.values(TILE_POOLS).flat().forEach(id => { if (!crosswalkIds.has(id)) phantomIds.push(id); });
    Object.entries(TILE_ADJACENCY).forEach(([key, adj]) => {
      if (!crosswalkIds.has(key)) phantomIds.push(key);
      adj.forEach(id => { if (!crosswalkIds.has(id)) phantomIds.push(id); });
    });
  }
  if (phantomIds.length > 0) {
    allValid = false;
    results.push({ FAIL: true, phantomTileIds: Array.from(new Set(phantomIds)) });
  }

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
        // TILE-SYSTEMS-002 Part 3, July 24 2026: tightened from a 28-36
        // acceptance band to an exact 32 assertion. Confirmed via real
        // testing (post phantom-tile fix) that curateInitialTiles() -- via
        // its own result.slice(0, 32) -- already returns exactly 32 for
        // every combination given a large enough tile pool. 32 is the
        // official hard count; this now catches a genuine regression
        // instead of passing anything in a 9-tile-wide band.
        const valid = tiles.length === 32 &&
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
    const valid = tiles.length === 32 && Object.keys(clusters).length >= 4;
    results.push({ valid, ft: answers.free_time.join('+'), count: tiles.length, clusters });
    if (!valid) allValid = false;
  });

  return { allValid, results };
}

/**
 * TILE_REALM_WEIGHTS — STUDENT-AGENT-002 Gate 4, Item 2.
 * Built 2026-07-30, closing the gap confirmed open since 2026-07-23 across
 * console warnings, student-domain2-realm-weights.browser.js (the wiring
 * module, correct and already live), and student-signal-fusion-engine.
 * browser.js (the Signal Fusion Engine, correct and already live) — all
 * three were real and wired correctly; only this data was ever missing.
 *
 * EXPANDED 2026-07-30 (same day) from an initial 10-tile first-pass seed to
 * full coverage of all 138 tiles in crosswalk-db.js, per explicit go-ahead.
 * The 10-tile version shipped first and was verified end-to-end (real
 * console warning gone, real dominant-realm/RIASEC-blend output traced all
 * the way into a Claude-prompt-ready text block) before expanding — the
 * derivation method did not change between the two passes.
 *
 * METHOD: NOT hand-picked. Mathematically derived by inverting the
 * REALM_TO_RIASEC crosswalk already disclosed and shipped in
 * student-signal-fusion-engine.browser.js (the same crosswalk that file
 * uses to turn realm weights INTO a riasec_blend) and running it in
 * reverse against each tile's own already-approved riasec_weights in
 * crosswalk-db.js. Internally consistent with logic already signed off on
 * elsewhere in this codebase, not a fabricated dataset. Same disclosure
 * standard as that original crosswalk: "a defensible mapping, not a
 * verified psychometric equivalence" — worth calibrating against real
 * behavioral data once available, not treated as ground truth forever.
 *
 * KNOWN, EXPECTED CHARACTERISTIC (not a bug): a tile's derived dominant
 * realm does not always match its own `cluster` tag in crosswalk-db.js.
 * E.g. fitness_lifting is clustered 'move' but derives highest on
 * 'systems' — because its riasec_weights carry meaningful C (conventional/
 * process) signal, and C maps 100% to 'systems' in this crosswalk with
 * nothing to dilute it. This is a real, traceable consequence of the
 * tile's own RIASEC profile, confirmed by hand-checking the math on
 * several tiles before shipping — not a derivation error. Cluster tags
 * describe curation-UI grouping; derived realm weights describe genome
 * signal — the two systems are related but not required to agree tile by
 * tile.
 *
 * SCOPE: full 138-tile crosswalk-db.js coverage. Includes the 2 tiles used
 * as best-inferred replacements for the original 10-tile seed's renamed
 * IDs (content_creation -> tiktok_content, daily_word_puzzles ->
 * logic_puzzle_games — label-matched, not certain, flagged for a 30-second
 * confirm). Does NOT include the 'compete' World tile — that lives in
 * IBIS_WORLD_REGISTRY (Domain 2's World-selection layer), a different
 * system from this file's activity-tile layer; not an omission.
 *
 * Sanity-checked before shipping: 138/138 tiles derived, zero NaN values,
 * zero all-zero-weight tiles, spot-checked across multiple clusters
 * including eq. Full derivation script (re-runnable against any future
 * tile additions) kept alongside this file as derive_tile_realm_weights.js.
 */
const TILE_REALM_WEIGHTS = {
  "tiktok_content": { make: 2.57, move: 0.2, think: 1.43, people: 1.37, systems: 2.43 },
  "drawing": { make: 2.9, move: 0.67, think: 1.43, people: 0, systems: 1 },
  "painting": { make: 2.9, move: 0.67, think: 0.43, people: 0, systems: 1 },
  "photography": { make: 2.9, move: 0.67, think: 1.43, people: 0.29, systems: 1.71 },
  "graphic_design": { make: 2.57, move: 0, think: 1.43, people: 0.29, systems: 2.71 },
  "animation": { make: 2.57, move: 0, think: 1.43, people: 0.29, systems: 1.71 },
  "fashion_inspiration": { make: 2.57, move: 0.2, think: 1.43, people: 1.37, systems: 2.43 },
  "wardrobe_styling": { make: 2.57, move: 0.4, think: 1.43, people: 2.17, systems: 2.43 },
  "music_production": { make: 2.9, move: 0.67, think: 1.43, people: 0.29, systems: 1.71 },
  "playing_instrument": { make: 2.9, move: 0.67, think: 1.43, people: 0, systems: 2 },
  "singing": { make: 2.57, move: 0.2, think: 0.43, people: 1.09, systems: 0.71 },
  "writing_stories": { make: 2.57, move: 0.2, think: 2.43, people: 0.8, systems: 1 },
  "cooking": { make: 2.38, move: 1.53, think: 1.29, people: 1.09, systems: 1.71 },
  "baking": { make: 2.38, move: 1.53, think: 1.29, people: 0.8, systems: 2 },
  "nail_art": { make: 2.9, move: 0.87, think: 0.43, people: 1.09, systems: 2.71 },
  "hair_makeup": { make: 2.9, move: 1.07, think: 0.43, people: 1.89, systems: 1.71 },
  "roblox_building": { make: 2.05, move: 0.87, think: 2.29, people: 1.09, systems: 1.71 },
  "lego_building": { make: 2.71, move: 2, think: 1.29, people: 0, systems: 1 },
  "three_d_printing": { make: 1.86, move: 2, think: 2.14, people: 0, systems: 2 },
  "football": { make: 1, move: 2.2, think: 0, people: 1.37, systems: 2.43 },
  "flag_football": { make: 1, move: 2.2, think: 0, people: 1.37, systems: 2.43 },
  "baseball": { make: 1, move: 2.2, think: 1, people: 1.09, systems: 1.71 },
  "softball": { make: 1, move: 2.2, think: 1, people: 1.09, systems: 1.71 },
  "basketball": { make: 1, move: 2.2, think: 0, people: 1.37, systems: 2.43 },
  "soccer": { make: 1, move: 2.2, think: 0, people: 1.09, systems: 1.71 },
  "volleyball": { make: 1, move: 2.4, think: 0, people: 1.89, systems: 1.71 },
  "lacrosse": { make: 1, move: 2.2, think: 0, people: 1.37, systems: 2.43 },
  "field_hockey": { make: 1, move: 2.2, think: 0, people: 1.09, systems: 1.71 },
  "swim_team": { make: 1, move: 2.2, think: 1, people: 1.09, systems: 2.71 },
  "track_relay": { make: 1, move: 2.2, think: 0, people: 1.37, systems: 2.43 },
  "cheerleading": { make: 2.38, move: 1.73, think: 0.29, people: 1.89, systems: 1.71 },
  "club_travel_sports": { make: 1, move: 2.4, think: 0, people: 2.17, systems: 2.43 },
  "dance": { make: 3.24, move: 1.53, think: 0.43, people: 1.09, systems: 1.71 },
  "ride_bike": { make: 1, move: 2.2, think: 0, people: 0.8, systems: 0 },
  "yoga": { make: 1.19, move: 0.87, think: 1.14, people: 0.8, systems: 1 },
  "pilates": { make: 0.67, move: 1.53, think: 1, people: 0.8, systems: 2 },
  "fitness_f45": { make: 0.67, move: 1.73, think: 0, people: 1.89, systems: 1.71 },
  "fitness_lifting": { make: 1, move: 2, think: 1, people: 0.29, systems: 2.71 },
  "running_fitness_classes": { make: 0.67, move: 1.53, think: 0, people: 0.8, systems: 1 },
  "martial_arts": { make: 1.86, move: 2, think: 1.14, people: 0.57, systems: 3.43 },
  "rock_climbing": { make: 1, move: 2, think: 1, people: 0.29, systems: 1.71 },
  "ebike_outdoor_adventure": { make: 1.86, move: 2, think: 0.14, people: 0.29, systems: 0.71 },
  "esports_gaming": { make: 0.86, move: 0.2, think: 2.14, people: 1.37, systems: 3.43 },
  "science_experiments": { make: 0.67, move: 1.33, think: 3, people: 0, systems: 1 },
  "psychology": { make: 0.86, move: 0.4, think: 3.14, people: 1.6, systems: 0 },
  "biology": { make: 0.33, move: 0.87, think: 3, people: 0.8, systems: 1 },
  "chemistry": { make: 0.33, move: 0.67, think: 3, people: 0, systems: 2 },
  "coding_programming": { make: 1.19, move: 0.67, think: 3.14, people: 0.29, systems: 3.71 },
  "ai_machine_learning": { make: 0.86, move: 0, think: 3.14, people: 0.57, systems: 3.43 },
  "data_statistics": { make: 0, move: 0, think: 3, people: 0.29, systems: 3.71 },
  "logic_puzzle_games": { make: 0, move: 0, think: 3, people: 0, systems: 3 },
  "youtube_learning": { make: 1.19, move: 0.67, think: 2.14, people: 0, systems: 1 },
  "fantasy_sports": { make: 0, move: 0.2, think: 2, people: 1.66, systems: 4.14 },
  "philosophy": { make: 0.86, move: 0.2, think: 3.14, people: 0.8, systems: 0 },
  "true_crime": { make: 0.86, move: 0.2, think: 3.14, people: 0.8, systems: 1 },
  "understanding_why_people": { make: 0.86, move: 0.6, think: 2.14, people: 2.4, systems: 0 },
  "volunteering": { make: 0.33, move: 1.27, think: 0, people: 2.69, systems: 1.71 },
  "animal_care": { make: 0.67, move: 1.93, think: 1, people: 2.4, systems: 1 },
  "mental_health_wellness": { make: 0.86, move: 0.6, think: 2.14, people: 2.4, systems: 0 },
  "working_with_little_kids": { make: 1.19, move: 1.27, think: 1.14, people: 2.4, systems: 1 },
  "teaching_tutoring": { make: 0, move: 0.6, think: 2, people: 2.69, systems: 1.71 },
  "advocacy_activism": { make: 0.86, move: 0.4, think: 2.14, people: 2.46, systems: 2.14 },
  "entrepreneurship": { make: 1.19, move: 0.87, think: 2.14, people: 1.66, systems: 3.14 },
  "young_entrepreneur": { make: 1.52, move: 1.53, think: 1.14, people: 1.66, systems: 2.14 },
  "first_aid_emergencies": { make: 0.67, move: 1.93, think: 2, people: 2.69, systems: 1.71 },
  "reading_biographies": { make: 1.71, move: 0.4, think: 2.29, people: 1.89, systems: 0.71 },
  "attending_events_concerts": { make: 1.71, move: 0.4, think: 0.29, people: 2.46, systems: 2.14 },
  "public_speaking_debate": { make: 0.86, move: 0.4, think: 2.14, people: 2.46, systems: 3.14 },
  "community_organizing": { make: 0.33, move: 1.27, think: 1, people: 2.97, systems: 2.43 },
  "cosmetic_beauty_science": { make: 2.05, move: 0.67, think: 3.29, people: 0.29, systems: 1.71 },
  "cooking_chemistry": { make: 1.52, move: 1.33, think: 3.14, people: 0, systems: 1 },
  "medical_science": { make: 0.33, move: 1.07, think: 3, people: 1.6, systems: 2 },
  "how_body_moves": { make: 0.67, move: 1.53, think: 3, people: 0.8, systems: 1 },
  "learning_differences": { make: 0, move: 0.6, think: 2, people: 2.4, systems: 1 },
  "environment_sustainability": { make: 0.67, move: 1.53, think: 3, people: 1.09, systems: 1.71 },
  "engineering_challenges": { make: 1, move: 2, think: 3, people: 0.29, systems: 2.71 },
  "architecture": { make: 3.24, move: 1.33, think: 2.43, people: 0, systems: 2 },
  "nutrition_food_science": { make: 0.33, move: 1.07, think: 3, people: 1.6, systems: 2 },
  "business_startups": { make: 0, move: 0, think: 2, people: 0.86, systems: 4.14 },
  "supply_chain_logistics": { make: 0.33, move: 0.67, think: 2, people: 0.57, systems: 4.43 },
  "precise_procedures": { make: 1.52, move: 1.33, think: 1.14, people: 0.29, systems: 3.71 },
  "finance_investing": { make: 0, move: 0, think: 3, people: 0.57, systems: 4.43 },
  "i_feel_things_deeply": { make: 1.71, move: 0.6, think: 1.29, people: 2.4, systems: 0 },
  "i_notice_when_left_out": { make: 0, move: 0.6, think: 1, people: 2.4, systems: 0 },
  "i_stay_calm_when_things_go_wrong": { make: 0, move: 0.4, think: 1, people: 2.17, systems: 2.43 },
  "i_cant_ignore_unfairness": { make: 0, move: 0.4, think: 1, people: 2.46, systems: 2.14 },
  "i_am_person_people_call": { make: 0, move: 0.6, think: 0, people: 2.97, systems: 1.43 },
  "i_slow_down_for_people": { make: 0, move: 0.6, think: 0, people: 2.4, systems: 0 },
  "i_like_figuring_out_different_way": { make: 1.19, move: 0.67, think: 3.14, people: 0.29, systems: 0.71 },
  "little_kids_love_me": { make: 0, move: 0.6, think: 0, people: 2.4, systems: 0 },
  "animals_trust_me": { make: 0.33, move: 1.27, think: 0, people: 2.4, systems: 0 },
  "i_like_explaining_things": { make: 0.86, move: 0.6, think: 2.14, people: 2.69, systems: 0.71 },
  "id_rather_listen_than_talk": { make: 0, move: 0.6, think: 2, people: 2.4, systems: 0 },
  "i_notice_things_others_miss": { make: 1.71, move: 0, think: 3.29, people: 0, systems: 1 },
  "want_to_fix_it_not_talk_about_it": { make: 0.67, move: 1.33, think: 2, people: 0.57, systems: 2.43 },
  "i_lose_track_of_time_making": { make: 2.9, move: 0.67, think: 1.43, people: 0, systems: 0 },
  "im_one_who_holds_group_together": { make: 0, move: 0.6, think: 0, people: 2.97, systems: 2.43 },
  "i_ask_why": { make: 0.86, move: 0, think: 3.14, people: 0, systems: 0 },
  "i_remember_details_about_people": { make: 0, move: 0.6, think: 2, people: 2.4, systems: 1 },
  "i_process_through_art_music": { make: 2.57, move: 0.2, think: 0.43, people: 0.8, systems: 0 },
  "i_can_tell_when_upset": { make: 0, move: 0.6, think: 1, people: 2.4, systems: 0 },
  "i_think_of_others_feelings": { make: 0, move: 0.6, think: 1, people: 2.4, systems: 1 },
  "i_can_talk_to_anyone": { make: 0.86, move: 0.4, think: 0.14, people: 2.46, systems: 2.14 },
  "i_know_everyone": { make: 0, move: 0.4, think: 0, people: 2.46, systems: 2.14 },
  "i_remember_everything_about_people": { make: 0, move: 0.6, think: 1, people: 2.69, systems: 2.71 },
  "i_talk_to_new_people_first": { make: 0, move: 0.4, think: 0, people: 2.46, systems: 2.14 },
  "i_fix_friend_group_drama": { make: 0, move: 0.6, think: 1, people: 2.97, systems: 1.43 },
  "im_friends_with_older_people": { make: 0, move: 0.4, think: 1, people: 2.17, systems: 1.43 },
  "i_make_the_group_chat": { make: 0.86, move: 0.4, think: 0.14, people: 2.46, systems: 3.14 },
  "people_tell_me_personal_stuff": { make: 0, move: 0.6, think: 1, people: 2.4, systems: 0 },
  "i_feel_the_vibe_immediately": { make: 0.86, move: 0.4, think: 2.14, people: 1.89, systems: 0.71 },
  "i_see_connections_others_miss": { make: 0.86, move: 0, think: 3.14, people: 0.29, systems: 0.71 },
  "i_know_before_it_happens": { make: 0.86, move: 0.2, think: 3.14, people: 0.8, systems: 0 },
  "i_usually_right_about_people": { make: 0, move: 0.4, think: 2, people: 1.89, systems: 0.71 },
  "my_friends_say_i_have_good_instincts": { make: 0, move: 0.4, think: 2, people: 2.17, systems: 1.43 },
  "i_notice_trends_early": { make: 1.71, move: 0, think: 2.29, people: 0.57, systems: 1.43 },
  "still_figuring_it_out": { make: 0, move: 0, think: 1, people: 0, systems: 0 },
  "good_at_a_lot_not_great_at_one": { make: 0, move: 0, think: 1, people: 0.29, systems: 0.71 },
  "get_into_things_then_move_on": { make: 0.86, move: 0, think: 2.14, people: 0.29, systems: 0.71 },
  "people_always_want_me_on_their_team": { make: 0.33, move: 1.07, think: 0, people: 2.17, systems: 2.43 },
  "i_show_up_when_it_matters": { make: 0, move: 0.4, think: 0, people: 2.17, systems: 3.43 },
  "fashion_design": { make: 2.9, move: 0.67, think: 0.43, people: 0.29, systems: 1.71 },
  "filmmaking": { make: 2.57, move: 0, think: 1.43, people: 0.29, systems: 0.71 },
  "woodworking": { make: 1.86, move: 2, think: 0.14, people: 0, systems: 2 },
  "horseback_riding": { make: 1, move: 2.4, think: 1, people: 1.6, systems: 0 },
  "roblox_game_design": { make: 2.38, move: 1.33, think: 3.29, people: 0.29, systems: 0.71 },
  "puzzles_brain_teasers": { make: 0, move: 0, think: 3, people: 0, systems: 2 },
  "journalism": { make: 0, move: 0.4, think: 3, people: 1.89, systems: 0.71 },
  "law_justice": { make: 0, move: 0.4, think: 2, people: 2.17, systems: 2.43 },
  "economics": { make: 0, move: 0, think: 3, people: 0.57, systems: 2.43 },
  "planning_trips_adventures": { make: 0, move: 0.2, think: 0, people: 1.09, systems: 3.71 },
  "organizing_people": { make: 0, move: 0.4, think: 0, people: 2.46, systems: 3.14 },
  "running_the_household": { make: 0, move: 0.4, think: 0, people: 2.17, systems: 3.43 },
  "running_a_minecraft_server": { make: 0, move: 0.4, think: 2, people: 2.17, systems: 2.43 },
  "building_ai_workflows": { make: 0, move: 0, think: 3, people: 0.57, systems: 2.43 },
  "coding_discord_bots": { make: 0.67, move: 1.33, think: 3, people: 0, systems: 1 },
  "managing_a_simulation_game": { make: 0, move: 0, think: 3, people: 0.57, systems: 3.43 },
  "making_study_systems": { make: 0, move: 0, think: 2, people: 0, systems: 3 },
};

if (typeof module !== 'undefined') module.exports = {
  curateInitialTiles,
  surfaceRelatedTiles,
  getEQPriority,
  validateCurationMap,
  TILE_POOLS,
  TILE_ADJACENCY,
  ALWAYS_SHOW,
  TILE_REALM_WEIGHTS
};
