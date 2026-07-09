/**
 * VECTOR Lifescape — Crosswalk Database
 * Version: 2.1 — June 2026
 *
 * SCHEMA PER TILE:
 * {
 *   id:            string   — unique tile identifier (snake_case)
 *   label:         string   — student-facing first-person text
 *   label_parent:  string?  — parent-voice override (third person)
 *   cluster:       string   — 'make' | 'move' | 'think' | 'people' | 'systems' | 'eq'
 *   riasec_weights: {R,I,A,S,E,C}  — 0-3 per code (sum ≤ 9)
 *   naics_sectors: number[] — primary NAICS codes this tile signals
 *   eq_multiplier: bool?    — true = extra weight in rawScore (EQ-inflected tiles)
 *   gender:        string?  — 'male' | 'female' | 'both' (omit = 'both')
 *                             Filtered at display time in lifescape.html
 *                             based on student-reported gender preference.
 *   sport_type:    string?  — 'team' | 'individual' (move cluster only)
 *                             Target ratio: 60% team / 40% individual
 * }
 *
 * RIASEC CODES:
 *   R = Realistic (physical, hands-on)
 *   I = Investigative (analytical, research)
 *   A = Artistic (creative, expressive)
 *   S = Social (helping, teaching)
 *   E = Enterprising (leading, selling)
 *   C = Conventional (organizing, detail)
 *
 * NAICS CODES (primary):
 *   11 = Agriculture  21 = Mining/Energy  23 = Construction
 *   31-33 = Manufacturing  44-45 = Retail  48-49 = Transport
 *   51 = Information/Media  52 = Finance  54 = Professional Services
 *   56 = Admin/Support  61 = Education  62 = Healthcare
 *   71 = Arts/Entertainment  72 = Hospitality  81 = Other Services
 *   92 = Government/Military
 *
 * GENDER FILTERING NOTE:
 *   Gender is collected as a writing-instruction preference.
 *   Tiles tagged gender:'male' are hidden for female students.
 *   Tiles tagged gender:'female' are hidden for male students.
 *   Tiles with no gender field (or gender:'both') always show.
 *   The algorithm never infers gender from name.
 *   Minimum 8 visible tiles must remain per cluster after filtering.
 */

const VECTOR_CROSSWALK = [

  // ════════════════════════════════════════════════════════
  // MAKE & CREATE
  // ════════════════════════════════════════════════════════

  { id:'tiktok_content', label:'I make TikToks or short videos',
    label_parent:'Makes TikToks or short videos',
    cluster:'make',
    riasec_weights:{R:0,I:1,A:3,S:1,E:2,C:1},
    naics_sectors:[51,54,71,72] },

  { id:'drawing', label:'I draw or sketch',
    label_parent:'Draws or sketches',
    cluster:'make',
    riasec_weights:{R:1,I:1,A:3,S:0,E:0,C:1},
    naics_sectors:[51,54,71] },

  { id:'painting', label:'I paint',
    label_parent:'Paints',
    cluster:'make',
    riasec_weights:{R:1,I:0,A:3,S:0,E:0,C:1},
    naics_sectors:[71,51] },

  { id:'photography', label:'I take photos',
    label_parent:'Takes photos',
    cluster:'make',
    riasec_weights:{R:1,I:1,A:3,S:0,E:1,C:1},
    naics_sectors:[51,71,54] },

  { id:'graphic_design', label:'I design things on Canva or Photoshop',
    label_parent:'Designs things on Canva or Photoshop',
    cluster:'make',
    riasec_weights:{R:0,I:1,A:3,S:0,E:1,C:2},
    naics_sectors:[51,54,44] },

  { id:'animation', label:'I make animations or motion graphics',
    label_parent:'Makes animations or motion graphics',
    cluster:'make',
    riasec_weights:{R:0,I:1,A:3,S:0,E:1,C:1},
    naics_sectors:[51,71,54] },

  { id:'fashion_inspiration', label:'I get obsessed with outfits and style',
    label_parent:'Gets obsessed with outfits and style',
    cluster:'make',
    riasec_weights:{R:0,I:1,A:3,S:1,E:2,C:1},
    naics_sectors:[44,51,54,71] },

  { id:'wardrobe_styling', label:'I style outfits for myself or others',
    label_parent:'Styles outfits for themselves or others',
    cluster:'make',
    riasec_weights:{R:0,I:1,A:3,S:2,E:2,C:1},
    naics_sectors:[44,54,71,81] },

  { id:'music_production', label:'I produce beats or record music',
    label_parent:'Produces beats or records music',
    cluster:'make',
    riasec_weights:{R:1,I:1,A:3,S:0,E:1,C:1},
    naics_sectors:[51,71] },

  { id:'playing_instrument', label:'I play a musical instrument',
    label_parent:'Plays a musical instrument',
    cluster:'make',
    riasec_weights:{R:1,I:1,A:3,S:0,E:0,C:2},
    naics_sectors:[71,61], eq_multiplier:true },

  { id:'singing', label:'I sing — in the car, shower, everywhere',
    label_parent:'Sings constantly',
    cluster:'make',
    riasec_weights:{R:0,I:0,A:3,S:1,E:1,C:0},
    naics_sectors:[71,61] },

  { id:'writing_stories', label:'I write stories, scripts, or poems',
    label_parent:'Writes stories, scripts, or poems',
    cluster:'make',
    riasec_weights:{R:0,I:2,A:3,S:1,E:0,C:1},
    naics_sectors:[51,71,61] },

  { id:'cooking', label:'I cook real meals',
    label_parent:'Cooks real meals',
    cluster:'make',
    riasec_weights:{R:2,I:1,A:2,S:1,E:1,C:1},
    naics_sectors:[72,31,62] },

  { id:'baking', label:'I bake — cakes, cookies, bread',
    label_parent:'Bakes — cakes, cookies, bread',
    cluster:'make',
    riasec_weights:{R:2,I:1,A:2,S:1,E:0,C:2},
    naics_sectors:[31,72] },

  { id:'nail_art', label:'I do nail art',
    label_parent:'Does nail art',
    cluster:'make', gender:'female',
    riasec_weights:{R:1,I:0,A:3,S:1,E:1,C:2},
    naics_sectors:[81,44,54] },

  { id:'hair_makeup', label:'I do hair or makeup on myself or others',
    label_parent:'Does hair or makeup on themselves or others',
    cluster:'make', gender:'female',
    riasec_weights:{R:1,I:0,A:3,S:2,E:1,C:1},
    naics_sectors:[81,44,62] },

  { id:'roblox_building', label:'I build or play in Roblox',
    label_parent:'Builds or plays in Roblox',
    cluster:'make', gender:'male',
    riasec_weights:{R:1,I:2,A:2,S:1,E:1,C:1},
    naics_sectors:[51,71,54] },

  { id:'lego_building', label:'I build with LEGOs',
    label_parent:'Builds with LEGOs',
    cluster:'make', gender:'male',
    riasec_weights:{R:3,I:1,A:2,S:0,E:0,C:1},
    naics_sectors:[31,23,54] },

  { id:'three_d_printing', label:'I 3D print things',
    label_parent:'3D prints things',
    cluster:'make',
    riasec_weights:{R:3,I:2,A:1,S:0,E:0,C:2},
    naics_sectors:[33,54,51] },

  // ════════════════════════════════════════════════════════
  // MOVE & COMPETE
  // Team sports (60%) | Individual sports & fitness (40%)
  //
  // TEAM  (13 tiles): football, flag_football, baseball, softball, basketball,
  //   soccer, volleyball, lacrosse, field_hockey, swim_team,
  //   track_relay, cheerleading, club_travel_sports
  //
  // INDIVIDUAL (8 tiles): dance, yoga, pilates, fitness_f45,
  //   fitness_lifting, running_fitness_classes, martial_arts,
  //   rock_climbing, ebike_outdoor_adventure, esports_gaming
  //
  // Gender tags applied where sport diverges by sex.
  // Both-gender sports carry no gender field.
  // ════════════════════════════════════════════════════════

  // ── TEAM SPORTS ──────────────────────────────────────

  { id:'football', label:'I play football',
    label_parent:'Plays football',
    cluster:'move', sport_type:'team', gender:'male',
    riasec_weights:{R:3,I:0,A:0,S:1,E:2,C:1},
    naics_sectors:[71,61,92] },

  { id:'flag_football', label:'I play flag football',
    label_parent:'Plays flag football',
    cluster:'move', sport_type:'team', gender:'female',
    riasec_weights:{R:3,I:0,A:0,S:1,E:2,C:1},
    naics_sectors:[71,61,92] },

  { id:'baseball', label:'I play baseball',
    label_parent:'Plays baseball',
    cluster:'move', sport_type:'team', gender:'male',
    riasec_weights:{R:3,I:1,A:0,S:1,E:1,C:1},
    naics_sectors:[71,61] },

  { id:'softball', label:'I play softball',
    label_parent:'Plays softball',
    cluster:'move', sport_type:'team', gender:'female',
    riasec_weights:{R:3,I:1,A:0,S:1,E:1,C:1},
    naics_sectors:[71,61] },

  { id:'basketball', label:'I play basketball',
    label_parent:'Plays basketball',
    cluster:'move', sport_type:'team',
    riasec_weights:{R:3,I:0,A:0,S:1,E:2,C:1},
    naics_sectors:[71,61] },

  { id:'soccer', label:'I play soccer',
    label_parent:'Plays soccer',
    cluster:'move', sport_type:'team',
    riasec_weights:{R:3,I:0,A:0,S:1,E:1,C:1},
    naics_sectors:[71,61] },

  { id:'volleyball', label:'I play volleyball',
    label_parent:'Plays volleyball',
    cluster:'move', sport_type:'team',
    riasec_weights:{R:3,I:0,A:0,S:2,E:1,C:1},
    naics_sectors:[71,61] },

  { id:'lacrosse', label:'I play lacrosse',
    label_parent:'Plays lacrosse',
    cluster:'move', sport_type:'team',
    riasec_weights:{R:3,I:0,A:0,S:1,E:2,C:1},
    naics_sectors:[71,61] },

  { id:'field_hockey', label:'I play field hockey',
    label_parent:'Plays field hockey',
    cluster:'move', sport_type:'team', gender:'female',
    riasec_weights:{R:3,I:0,A:0,S:1,E:1,C:1},
    naics_sectors:[71,61] },

  { id:'swim_team', label:'I swim competitively',
    label_parent:'Swims competitively',
    cluster:'move', sport_type:'team',
    riasec_weights:{R:3,I:1,A:0,S:1,E:1,C:2},
    naics_sectors:[71,61,62] },

  { id:'track_relay', label:'I run track or do relay events',
    label_parent:'Runs track or does relay events',
    cluster:'move', sport_type:'team',
    riasec_weights:{R:3,I:0,A:0,S:1,E:2,C:1},
    naics_sectors:[71,61] },

  { id:'cheerleading', label:'I cheer or do competitive cheer',
    label_parent:'Does cheerleading or competitive cheer',
    cluster:'move', sport_type:'team', gender:'female',
    riasec_weights:{R:2,I:0,A:2,S:2,E:1,C:1},
    naics_sectors:[71,61] },

  { id:'club_travel_sports', label:'I play club or travel sports',
    label_parent:'Plays club or travel sports',
    cluster:'move', sport_type:'team',
    riasec_weights:{R:3,I:0,A:0,S:2,E:2,C:1},
    naics_sectors:[71,61,92] },

  // ── INDIVIDUAL SPORTS & FITNESS ───────────────────────

  { id:'dance', label:'I dance — hip hop, ballet, ballroom, anything',
    label_parent:'Dances — hip hop, ballet, ballroom, anything',
    cluster:'move', sport_type:'individual', gender:'female',
    riasec_weights:{R:2,I:0,A:3,S:1,E:1,C:1},
    naics_sectors:[71,61] },

  { id:'ride_bike', label:'I ride my bike',
    label_parent:'Rides their bike',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:3,I:0,A:0,S:1,E:0,C:0},
    naics_sectors:[71,61,48] },

  { id:'yoga', label:'I do yoga',
    label_parent:'Does yoga',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:1,I:1,A:1,S:1,E:0,C:1},
    naics_sectors:[62,81,61] },

  { id:'pilates', label:'I do Pilates or core training',
    label_parent:'Does Pilates or core training',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:2,I:1,A:0,S:1,E:0,C:2},
    naics_sectors:[62,81,61] },

  { id:'fitness_f45', label:'I take group fitness classes like F45, Barry\'s, or OrangeTheory',
    label_parent:'Takes group fitness classes like F45, Barry\'s, or OrangeTheory',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:2,I:0,A:0,S:2,E:1,C:1},
    naics_sectors:[62,81,71] },

  { id:'fitness_lifting', label:'I lift weights or work out at the gym',
    label_parent:'Lifts weights or works out at the gym',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:3,I:1,A:0,S:0,E:1,C:2},
    naics_sectors:[62,81,71] },

  { id:'running_fitness_classes', label:'I run — long distances, 5Ks, or just to clear my head',
    label_parent:'Runs long distances, 5Ks, or just to clear their head',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:2,I:0,A:0,S:1,E:0,C:1},
    naics_sectors:[62,81,71] },

  { id:'martial_arts', label:'I do martial arts or combat sports',
    label_parent:'Does martial arts or combat sports',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:3,I:1,A:1,S:0,E:2,C:2},
    naics_sectors:[71,61,81] },

  { id:'rock_climbing', label:'I rock climb or boulder',
    label_parent:'Rock climbs or boulders',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:3,I:1,A:0,S:0,E:1,C:1},
    naics_sectors:[71,81] },

  { id:'ebike_outdoor_adventure', label:'I ride eBikes or do outdoor adventures',
    label_parent:'Rides eBikes or does outdoor adventures',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:3,I:0,A:1,S:0,E:1,C:0},
    naics_sectors:[71,81,48] },

  { id:'esports_gaming', label:'I play competitive video games or esports',
    label_parent:'Plays competitive video games or esports',
    cluster:'move', sport_type:'individual',
    riasec_weights:{R:0,I:2,A:1,S:1,E:2,C:2},
    naics_sectors:[51,71,54] },

  // ════════════════════════════════════════════════════════
  // THINK & EXPLORE
  // ════════════════════════════════════════════════════════

  { id:'science_experiments', label:'I do science experiments or lab work',
    label_parent:'Does science experiments or lab work',
    cluster:'think',
    riasec_weights:{R:2,I:3,A:0,S:0,E:0,C:1},
    naics_sectors:[54,62,21,32] },

  { id:'psychology', label:'I am obsessed with why people do what they do',
    label_parent:'Is obsessed with why people do what they do',
    cluster:'think',
    riasec_weights:{R:0,I:3,A:1,S:2,E:0,C:0},
    naics_sectors:[62,61,54], eq_multiplier:true },

  { id:'biology', label:'I am into biology — cells, organisms, life systems',
    label_parent:'Is into biology — cells, organisms, life systems',
    cluster:'think',
    riasec_weights:{R:1,I:3,A:0,S:1,E:0,C:1},
    naics_sectors:[62,54,61] },

  { id:'chemistry', label:'I like chemistry — reactions, compounds, elements',
    label_parent:'Likes chemistry — reactions, compounds, elements',
    cluster:'think',
    riasec_weights:{R:1,I:3,A:0,S:0,E:0,C:2},
    naics_sectors:[32,54,62,21] },

  { id:'coding_programming', label:'I code or program',
    label_parent:'Codes or programs',
    cluster:'think',
    riasec_weights:{R:1,I:3,A:1,S:0,E:1,C:3},
    naics_sectors:[51,54,56] },

  { id:'ai_machine_learning', label:'I am into AI or machine learning',
    label_parent:'Is into AI or machine learning',
    cluster:'think',
    riasec_weights:{R:0,I:3,A:1,S:0,E:2,C:2},
    naics_sectors:[51,54,52] },

  { id:'data_statistics', label:'I like working with data and numbers',
    label_parent:'Likes working with data and numbers',
    cluster:'think',
    riasec_weights:{R:0,I:3,A:0,S:0,E:1,C:3},
    naics_sectors:[52,54,56,51] },

  { id:'logic_puzzle_games', label:'I play Wordle, Connections, Sudoku, or logic games',
    label_parent:'Plays Wordle, Connections, Sudoku, or logic games',
    cluster:'think',
    riasec_weights:{R:0,I:3,A:0,S:0,E:0,C:3},
    naics_sectors:[51,54,52,61] },

  { id:'youtube_learning', label:'I watch YouTube videos to learn how to do things',
    label_parent:'Watches YouTube videos to learn how to do things',
    cluster:'think',
    riasec_weights:{R:1,I:2,A:1,S:0,E:0,C:1},
    naics_sectors:[51,61,54] },

  { id:'fantasy_sports', label:'I play fantasy sports in a league',
    label_parent:'Plays fantasy sports in a league',
    cluster:'think',
    riasec_weights:{R:0,I:2,A:0,S:1,E:3,C:2},
    naics_sectors:[71,52,51,54] },

  { id:'philosophy', label:'I think about big questions — life, existence, ethics',
    label_parent:'Thinks about big questions — life, existence, ethics',
    cluster:'think',
    riasec_weights:{R:0,I:3,A:1,S:1,E:0,C:0},
    naics_sectors:[61,92,54], eq_multiplier:true },

  { id:'true_crime', label:'I am obsessed with true crime podcasts or shows',
    label_parent:'Is obsessed with true crime podcasts or shows',
    cluster:'think',
    riasec_weights:{R:0,I:3,A:1,S:1,E:0,C:1},
    naics_sectors:[92,54,51,61] },

  { id:'understanding_why_people', label:'I always try to understand why people act the way they do',
    label_parent:'Always tries to understand why people act the way they do',
    cluster:'think',
    riasec_weights:{R:0,I:2,A:1,S:3,E:0,C:0},
    naics_sectors:[62,61,54], eq_multiplier:true },

  // ════════════════════════════════════════════════════════
  // PEOPLE & STORIES
  // ════════════════════════════════════════════════════════

  { id:'volunteering', label:'I volunteer or do community service',
    label_parent:'Volunteers or does community service',
    cluster:'people',
    riasec_weights:{R:1,I:0,A:0,S:3,E:1,C:1},
    naics_sectors:[92,61,62,81] },

  { id:'animal_care', label:'I love taking care of animals',
    label_parent:'Loves taking care of animals',
    cluster:'people',
    riasec_weights:{R:2,I:1,A:0,S:3,E:0,C:1},
    naics_sectors:[62,11,81], eq_multiplier:true },

  { id:'mental_health_wellness', label:'I care a lot about mental health and emotional wellness',
    label_parent:'Cares a lot about mental health and emotional wellness',
    cluster:'people',
    riasec_weights:{R:0,I:2,A:1,S:3,E:0,C:0},
    naics_sectors:[62,61,81], eq_multiplier:true },

  { id:'working_with_little_kids', label:'I love working with young kids',
    label_parent:'Loves working with young kids',
    cluster:'people',
    riasec_weights:{R:1,I:1,A:1,S:3,E:0,C:1},
    naics_sectors:[61,62,81] },

  { id:'teaching_tutoring', label:'I tutor or teach peers',
    label_parent:'Tutors or teaches peers',
    cluster:'people',
    riasec_weights:{R:0,I:2,A:0,S:3,E:1,C:1},
    naics_sectors:[61,62,81] },

  { id:'advocacy_activism', label:'I advocate for causes I believe in',
    label_parent:'Advocates for causes they believe in',
    cluster:'people',
    riasec_weights:{R:0,I:2,A:1,S:2,E:3,C:0},
    naics_sectors:[92,61,54] },

  { id:'entrepreneurship', label:'I love building things and starting businesses',
    label_parent:'Loves building things and starting businesses',
    cluster:'people',
    riasec_weights:{R:1,I:2,A:1,S:1,E:3,C:1},
    naics_sectors:[52,54,81,44] },

  { id:'young_entrepreneur', label:'I\'m always finding ways to make money — lemonade stands, shoveling snow, selling things',
    label_parent:'Always finding ways to make money — lemonade stands, shoveling snow, selling things',
    cluster:'people',
    riasec_weights:{R:2,I:1,A:1,S:1,E:3,C:0},
    naics_sectors:[44,81,56] },

  { id:'first_aid_emergencies', label:'I am calm in emergencies and want to help',
    label_parent:'Is calm in emergencies and wants to help',
    cluster:'people',
    riasec_weights:{R:2,I:2,A:0,S:3,E:1,C:1},
    naics_sectors:[62,92,61] },

  { id:'reading_biographies', label:'I read biographies or watch documentaries about real people',
    label_parent:'Reads biographies or watches documentaries about real people',
    cluster:'people',
    riasec_weights:{R:0,I:2,A:2,S:2,E:1,C:0},
    naics_sectors:[61,51,71,54], eq_multiplier:true },

  { id:'attending_events_concerts', label:'I go to concerts, festivals, or live events whenever I can',
    label_parent:'Goes to concerts, festivals, or live events whenever possible',
    cluster:'people',
    riasec_weights:{R:0,I:0,A:2,S:2,E:3,C:0},
    naics_sectors:[71,72,81,44] },

  { id:'public_speaking_debate', label:'I do public speaking, debate, or Model UN',
    label_parent:'Does public speaking, debate, or Model UN',
    cluster:'people',
    riasec_weights:{R:0,I:2,A:1,S:2,E:3,C:1},
    naics_sectors:[92,54,61] },

  { id:'community_organizing', label:'I help organize my community or neighborhood',
    label_parent:'Helps organize their community or neighborhood',
    cluster:'people',
    riasec_weights:{R:1,I:1,A:0,S:3,E:2,C:1},
    naics_sectors:[92,81,61] },

  // ════════════════════════════════════════════════════════
  // SYSTEMS & HOW THINGS WORK
  // ════════════════════════════════════════════════════════

  { id:'cosmetic_beauty_science', label:'I am fascinated by the science behind beauty products',
    label_parent:'Is fascinated by the science behind beauty products',
    cluster:'systems',
    riasec_weights:{R:1,I:3,A:2,S:0,E:1,C:1},
    naics_sectors:[32,54,62,44] },

  { id:'cooking_chemistry', label:'I think about cooking as chemistry',
    label_parent:'Thinks about cooking as chemistry',
    cluster:'systems',
    riasec_weights:{R:2,I:3,A:1,S:0,E:0,C:1},
    naics_sectors:[32,31,72,62] },

  { id:'medical_science', label:'I am into how the body works medically',
    label_parent:'Is into how the body works medically',
    cluster:'systems',
    riasec_weights:{R:1,I:3,A:0,S:2,E:0,C:2},
    naics_sectors:[62,54,32] },

  { id:'how_body_moves', label:'I think about biomechanics and how the body moves',
    label_parent:'Thinks about biomechanics and how the body moves',
    cluster:'systems',
    riasec_weights:{R:2,I:3,A:0,S:1,E:0,C:1},
    naics_sectors:[62,71,61] },

  { id:'learning_differences', label:'I am interested in how people learn differently',
    label_parent:'Is interested in how people learn differently',
    cluster:'systems',
    riasec_weights:{R:0,I:2,A:0,S:3,E:0,C:1},
    naics_sectors:[61,62,81] },

  { id:'environment_sustainability', label:'I care about the environment and sustainability',
    label_parent:'Cares about the environment and sustainability',
    cluster:'systems',
    riasec_weights:{R:2,I:3,A:0,S:1,E:1,C:1},
    naics_sectors:[21,54,92,11] },

  { id:'engineering_challenges', label:'I like engineering problems and building systems',
    label_parent:'Likes engineering problems and building systems',
    cluster:'systems',
    riasec_weights:{R:3,I:3,A:0,S:0,E:1,C:2},
    naics_sectors:[33,23,54,48] },

  { id:'architecture', label:'I think about how buildings and spaces are designed',
    label_parent:'Thinks about how buildings and spaces are designed',
    cluster:'systems',
    riasec_weights:{R:2,I:2,A:3,S:0,E:0,C:2},
    naics_sectors:[23,54,71] },

  { id:'nutrition_food_science', label:'I am into nutrition and food science',
    label_parent:'Is into nutrition and food science',
    cluster:'systems',
    riasec_weights:{R:1,I:3,A:0,S:2,E:0,C:2},
    naics_sectors:[62,31,72,54] },

  { id:'business_startups', label:'I am obsessed with how businesses and startups work',
    label_parent:'Is obsessed with how businesses and startups work',
    cluster:'systems',
    riasec_weights:{R:0,I:2,A:0,S:0,E:3,C:2},
    naics_sectors:[52,54,81,44] },

  { id:'supply_chain_logistics', label:'I find it fascinating how things get made and shipped',
    label_parent:'Finds it fascinating how things get made and shipped',
    cluster:'systems',
    riasec_weights:{R:1,I:2,A:0,S:0,E:2,C:3},
    naics_sectors:[48,33,56,52] },

  { id:'precise_procedures', label:'I like following exact steps to get something right, every time',
    label_parent:'Likes following exact steps to get something right, every time',
    cluster:'systems',
    riasec_weights:{R:2,I:1,A:1,S:0,E:1,C:3},
    naics_sectors:[31,62,54] },

  { id:'finance_investing', label:'I am interested in investing, markets, or personal finance',
    label_parent:'Is interested in investing, markets, or personal finance',
    cluster:'systems',
    riasec_weights:{R:0,I:3,A:0,S:0,E:2,C:3},
    naics_sectors:[52,54,56] },

  // ════════════════════════════════════════════════════════
  // EQ TILES — Identity & emotional intelligence signals
  // These render in a separate vertical stack, not in cluster sections
  // All first-person; label_parent provides third-person override
  // ════════════════════════════════════════════════════════

  { id:'i_feel_things_deeply', label:"I feel things more deeply than most people",
    label_parent:"Feels things more deeply than most people",
    cluster:'eq', riasec_weights:{R:0,I:1,A:2,S:3,E:0,C:0}, naics_sectors:[62,71,61], eq_multiplier:true },

  { id:'i_notice_when_left_out', label:"I notice when someone is being left out",
    label_parent:"Notices when someone is being left out",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:3,E:0,C:0}, naics_sectors:[62,61,81], eq_multiplier:true },

  { id:'i_stay_calm_when_things_go_wrong', label:"I stay calm when things go wrong",
    label_parent:"Stays calm when things go wrong",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:2,E:2,C:1}, naics_sectors:[92,62,54], eq_multiplier:true },

  { id:'i_cant_ignore_unfairness', label:"I can't ignore something that's unfair",
    label_parent:"Can't ignore something that's unfair",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:2,E:3,C:0}, naics_sectors:[92,61,54], eq_multiplier:true },

  { id:'i_am_person_people_call', label:"I'm the person people call when something goes wrong",
    label_parent:"Is the person people call when something goes wrong",
    cluster:'eq', riasec_weights:{R:0,I:0,A:0,S:3,E:2,C:0}, naics_sectors:[62,81,92], eq_multiplier:true },

  { id:'i_slow_down_for_people', label:"I slow down for people even when I'm busy",
    label_parent:"Slows down for people even when busy",
    cluster:'eq', riasec_weights:{R:0,I:0,A:0,S:3,E:0,C:0}, naics_sectors:[62,61,81], eq_multiplier:true },

  { id:'i_like_figuring_out_different_way', label:"I like figuring out a different way to do something",
    label_parent:"Likes figuring out a different way to do something",
    cluster:'eq', riasec_weights:{R:1,I:3,A:1,S:0,E:1,C:0}, naics_sectors:[54,51,33], eq_multiplier:true },

  { id:'little_kids_love_me', label:"Little kids always love me",
    label_parent:"Little kids always love them",
    cluster:'eq', riasec_weights:{R:0,I:0,A:0,S:3,E:0,C:0}, naics_sectors:[61,62,81], eq_multiplier:true },

  { id:'animals_trust_me', label:"Animals trust me immediately",
    label_parent:"Animals trust them immediately",
    cluster:'eq', riasec_weights:{R:1,I:0,A:0,S:3,E:0,C:0}, naics_sectors:[62,11,81], eq_multiplier:true },

  { id:'i_like_explaining_things', label:"I like explaining things so people actually get it",
    label_parent:"Likes explaining things so people actually get it",
    cluster:'eq', riasec_weights:{R:0,I:2,A:1,S:3,E:1,C:0}, naics_sectors:[61,54,51], eq_multiplier:true },

  { id:'id_rather_listen_than_talk', label:"I'd rather listen than talk in most situations",
    label_parent:"Would rather listen than talk in most situations",
    cluster:'eq', riasec_weights:{R:0,I:2,A:0,S:3,E:0,C:0}, naics_sectors:[62,61,54], eq_multiplier:true },

  { id:'i_notice_things_others_miss', label:"I notice things other people walk right past",
    label_parent:"Notices things other people walk right past",
    cluster:'eq', riasec_weights:{R:0,I:3,A:2,S:0,E:0,C:1}, naics_sectors:[54,51,71], eq_multiplier:true },

  { id:'want_to_fix_it_not_talk_about_it', label:"When something's broken I want to fix it, not talk about it",
    label_parent:"When something's broken, wants to fix it, not talk about it",
    cluster:'eq', riasec_weights:{R:2,I:2,A:0,S:0,E:2,C:1}, naics_sectors:[33,54,92], eq_multiplier:true },

  { id:'i_lose_track_of_time_making', label:"I lose track of time when I'm making or creating something",
    label_parent:"Loses track of time when making or creating something",
    cluster:'eq', riasec_weights:{R:1,I:1,A:3,S:0,E:0,C:0}, naics_sectors:[71,51,54], eq_multiplier:true },

  { id:'im_one_who_holds_group_together', label:"I'm the one who holds the group together",
    label_parent:"Is the one who holds the group together",
    cluster:'eq', riasec_weights:{R:0,I:0,A:0,S:3,E:2,C:1}, naics_sectors:[81,92,61], eq_multiplier:true },

  { id:'i_ask_why', label:"I always ask why — about everything",
    label_parent:"Always asks why — about everything",
    cluster:'eq', riasec_weights:{R:0,I:3,A:1,S:0,E:0,C:0}, naics_sectors:[54,61,51], eq_multiplier:true },

  { id:'i_remember_details_about_people', label:"I remember specific details about people years later",
    label_parent:"Remembers specific details about people years later",
    cluster:'eq', riasec_weights:{R:0,I:2,A:0,S:3,E:0,C:1}, naics_sectors:[62,61,54], eq_multiplier:true },

  { id:'i_process_through_art_music', label:"I process my feelings through art or music",
    label_parent:"Processes feelings through art or music",
    cluster:'eq', riasec_weights:{R:0,I:0,A:3,S:1,E:0,C:0}, naics_sectors:[71,62,61], eq_multiplier:true },

  { id:'i_can_tell_when_upset', label:"I can tell when someone is upset before they say anything",
    label_parent:"Can tell when someone is upset before they say anything",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:3,E:0,C:0}, naics_sectors:[62,61,81], eq_multiplier:true },

  { id:'i_think_of_others_feelings', label:"I think about how my decisions will affect other people",
    label_parent:"Thinks about how decisions will affect other people",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:3,E:0,C:1}, naics_sectors:[62,92,61], eq_multiplier:true },

  { id:'i_can_talk_to_anyone', label:"I can talk to basically anyone",
    label_parent:"Can talk to basically anyone",
    cluster:'eq', riasec_weights:{R:0,I:0,A:1,S:2,E:3,C:0}, naics_sectors:[72,81,54], eq_multiplier:true },

  { id:'i_know_everyone', label:"I somehow know everyone",
    label_parent:"Somehow knows everyone",
    cluster:'eq', riasec_weights:{R:0,I:0,A:0,S:2,E:3,C:0}, naics_sectors:[72,81,54], eq_multiplier:true },

  { id:'i_remember_everything_about_people', label:"I remember everyone's names, birthdays, details",
    label_parent:"Remembers everyone's names, birthdays, details",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:3,E:1,C:2}, naics_sectors:[62,61,54], eq_multiplier:true },

  { id:'i_talk_to_new_people_first', label:"I'm usually the first one to talk to someone new",
    label_parent:"Is usually the first one to talk to someone new",
    cluster:'eq', riasec_weights:{R:0,I:0,A:0,S:2,E:3,C:0}, naics_sectors:[72,54,81], eq_multiplier:true },

  { id:'i_fix_friend_group_drama', label:"I'm the one who fixes drama in friend groups",
    label_parent:"Is the one who fixes drama in friend groups",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:3,E:2,C:0}, naics_sectors:[92,62,81], eq_multiplier:true },

  { id:'im_friends_with_older_people', label:"A lot of my close friends are older than me",
    label_parent:"Has a lot of close friends who are older",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:2,E:2,C:0}, naics_sectors:[54,81,92], eq_multiplier:true },

  { id:'i_make_the_group_chat', label:"I'm the one who starts the group chat",
    label_parent:"Is the one who starts the group chat",
    cluster:'eq', riasec_weights:{R:0,I:0,A:1,S:2,E:3,C:1}, naics_sectors:[51,72,81], eq_multiplier:true },

  { id:'people_tell_me_personal_stuff', label:"People tell me personal things they don't tell others",
    label_parent:"People tell them personal things they don't tell others",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:3,E:0,C:0}, naics_sectors:[62,81,61], eq_multiplier:true },

  { id:'i_feel_the_vibe_immediately', label:"I feel the vibe of a room immediately when I walk in",
    label_parent:"Feels the vibe of a room immediately when they walk in",
    cluster:'eq', riasec_weights:{R:0,I:2,A:1,S:2,E:1,C:0}, naics_sectors:[72,54,71], eq_multiplier:true },

  { id:'i_see_connections_others_miss', label:"I see connections between things other people don't notice",
    label_parent:"Sees connections between things other people don't notice",
    cluster:'eq', riasec_weights:{R:0,I:3,A:1,S:0,E:1,C:0}, naics_sectors:[54,51,52], eq_multiplier:true },

  { id:'i_know_before_it_happens', label:"I often know something is going to happen before it does",
    label_parent:"Often knows something is going to happen before it does",
    cluster:'eq', riasec_weights:{R:0,I:3,A:1,S:1,E:0,C:0}, naics_sectors:[54,62,92], eq_multiplier:true },

  { id:'i_usually_right_about_people', label:"I'm usually right about people",
    label_parent:"Is usually right about people",
    cluster:'eq', riasec_weights:{R:0,I:2,A:0,S:2,E:1,C:0}, naics_sectors:[54,62,81], eq_multiplier:true },

  { id:'my_friends_say_i_have_good_instincts', label:"My friends say I have unusually good instincts",
    label_parent:"Friends say they have unusually good instincts",
    cluster:'eq', riasec_weights:{R:0,I:2,A:0,S:2,E:2,C:0}, naics_sectors:[54,52,72], eq_multiplier:true },

  { id:'i_notice_trends_early', label:"I notice trends before most people",
    label_parent:"Notices trends before most people",
    cluster:'eq', riasec_weights:{R:0,I:2,A:2,S:0,E:2,C:0}, naics_sectors:[51,54,44], eq_multiplier:true },

  { id:'still_figuring_it_out', label:"I'm still figuring out what I'm into — and that's fine",
    label_parent:"Is still figuring out what they're into — and that's fine",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:0,E:0,C:0}, naics_sectors:[61], eq_multiplier:false },

  { id:'good_at_a_lot_not_great_at_one', label:"I'm good at a lot of things but haven't found my one thing",
    label_parent:"Is good at a lot of things but hasn't found their one thing",
    cluster:'eq', riasec_weights:{R:0,I:1,A:0,S:0,E:1,C:0}, naics_sectors:[54,61], eq_multiplier:false },

  { id:'get_into_things_then_move_on', label:"I get really into something and then move on",
    label_parent:"Gets really into something and then moves on",
    cluster:'eq', riasec_weights:{R:0,I:2,A:1,S:0,E:1,C:0}, naics_sectors:[54,51,71], eq_multiplier:false },

  { id:'people_always_want_me_on_their_team', label:"People always want me on their team or in their group",
    label_parent:"People always want them on their team or in their group",
    cluster:'eq', riasec_weights:{R:1,I:0,A:0,S:2,E:2,C:1}, naics_sectors:[71,81,92], eq_multiplier:true },

  { id:'i_show_up_when_it_matters', label:"I show up when it actually matters",
    label_parent:"Shows up when it actually matters",
    cluster:'eq', riasec_weights:{R:0,I:0,A:0,S:2,E:2,C:2}, naics_sectors:[92,81,62], eq_multiplier:true },

];

// ── Helper functions expected by lifescape.html ────────────────────────────

/**
 * Filter tiles by student gender before display.
 * Call this before rendering any cluster section.
 * gender param: 'male' | 'female' | 'other' | null (null = show all)
 */
function getTilesForGender(gender) {
  if (!gender) return VECTOR_CROSSWALK;
  return VECTOR_CROSSWALK.filter(tile => {
    if (!tile.gender || tile.gender === 'both') return true;
    return tile.gender === gender;
  });
}

function getRIASECProfile(selectedIds) {
  const totals = {R:0, I:0, A:0, S:0, E:0, C:0};
  selectedIds.forEach(id => {
    const tile = VECTOR_CROSSWALK.find(t => t.id === id);
    if (!tile || !tile.riasec_weights) return;
    Object.entries(tile.riasec_weights).forEach(([code, val]) => {
      totals[code] = (totals[code] || 0) + val;
    });
  });
  return Object.entries(totals)
    .sort((a,b) => b[1] - a[1])
    .map(([code, score]) => ({ code, score }));
}

function getNAICSProfile(selectedIds) {
  const counts = {};
  selectedIds.forEach(id => {
    const tile = VECTOR_CROSSWALK.find(t => t.id === id);
    if (!tile || !tile.naics_sectors) return;
    tile.naics_sectors.forEach((sector, idx) => {
      // Primary sector gets 3 points, secondary 2, tertiary 1
      counts[sector] = (counts[sector] || 0) + Math.max(1, 3 - idx);
    });
  });
  return Object.entries(counts)
    .sort((a,b) => b[1] - a[1])
    .map(([sector, score]) => ({ sector: parseInt(sector), score }));
}

function getComboUnlocks(selectedIds) {
  const combos = [
    { triggered_by:['cooking','cosmetic_beauty_science'], unlocks:['Cosmetic Chemist','Product Formulator'] },
    { triggered_by:['cooking','cooking_chemistry'], unlocks:['Food Scientist','Culinary R&D'] },
    { triggered_by:['psychology','true_crime'], unlocks:['Criminal Justice','Forensic Psychology'] },
    { triggered_by:['coding_programming','ai_machine_learning'], unlocks:['AI Engineer','Machine Learning Engineer'] },
    { triggered_by:['coding_programming','data_statistics'], unlocks:['Data Scientist','Analytics Engineer'] },
    { triggered_by:['coding_programming','entrepreneurship'], unlocks:['Tech Founder','Product Manager'] },
    { triggered_by:['fantasy_sports','data_statistics'], unlocks:['Sports Analytics','Sports Data Science'] },
    { triggered_by:['fantasy_sports','coding_programming'], unlocks:['Sports Technology','Fantasy Platform Developer'] },
    { triggered_by:['tiktok_content','entrepreneurship'], unlocks:['Content Creator Economy','Brand Strategy'] },
    { triggered_by:['tiktok_content','music_production'], unlocks:['Music Marketing','Artist Development'] },
    { triggered_by:['fashion_inspiration','entrepreneurship'], unlocks:['Fashion Merchandising','Brand Identity'] },
    { triggered_by:['fashion_inspiration','tiktok_content'], unlocks:['Fashion Influencer','Style Content Creator'] },
    { triggered_by:['wardrobe_styling','photography'], unlocks:['Fashion Styling','Editorial Photography'] },
    { triggered_by:['attending_events_concerts','entrepreneurship'], unlocks:['Event Production','Talent Management'] },
    { triggered_by:['attending_events_concerts','tiktok_content'], unlocks:['Live Entertainment Media','Venue Marketing'] },
    { triggered_by:['reading_biographies','writing_stories'], unlocks:['Narrative Journalism','Biographical Writing'] },
    { triggered_by:['reading_biographies','advocacy_activism'], unlocks:['Social Movement Leadership','Policy Communication'] },
    { triggered_by:['logic_puzzle_games','coding_programming'], unlocks:['Software Engineering','Algorithm Design'] },
    { triggered_by:['logic_puzzle_games','data_statistics'], unlocks:['Quantitative Analysis','Actuarial Science'] },
    { triggered_by:['biology','medical_science'], unlocks:['Pre-Med','Biomedical Research'] },
    { triggered_by:['chemistry','cosmetic_beauty_science'], unlocks:['Cosmetic Chemistry','Beauty R&D'] },
    { triggered_by:['fitness_lifting','nutrition_food_science'], unlocks:['Exercise Science','Sports Nutrition'] },
    { triggered_by:['how_body_moves','medical_science'], unlocks:['Physical Therapy','Kinesiology'] },
    { triggered_by:['music_production','coding_programming'], unlocks:['Audio Engineering','Music Technology'] },
    { triggered_by:['animation','coding_programming'], unlocks:['Game Development','Interactive Media'] },
    { triggered_by:['animal_care','biology'], unlocks:['Veterinary Medicine','Wildlife Biology'] },
    { triggered_by:['mental_health_wellness','psychology'], unlocks:['Counseling Psychology','Social Work'] },
    { triggered_by:['club_travel_sports','leadership'], unlocks:['Athletic Training','Sports Management'] },
    { triggered_by:['advocacy_activism','writing_stories'], unlocks:['Political Communications','Nonprofit Leadership'] },
    { triggered_by:['architecture','engineering_challenges'], unlocks:['Architectural Engineering','Urban Planning'] },
    { triggered_by:['environment_sustainability','engineering_challenges'], unlocks:['Environmental Engineering','Clean Energy'] },
    { triggered_by:['entrepreneurship','data_statistics'], unlocks:['Business Analytics','Startup Strategy'] },
    { triggered_by:['teaching_tutoring','psychology'], unlocks:['Educational Psychology','Curriculum Design'] },
    { triggered_by:['pilates','how_body_moves'], unlocks:['Movement Science','Pilates Instruction / PT'] },
    { triggered_by:['running_fitness_classes','entrepreneurship'], unlocks:['Fitness Business','Wellness Brand'] },
    { triggered_by:['fitness_f45','nutrition_food_science'], unlocks:['Wellness Coaching','Group Fitness Business'] },
    { triggered_by:['finance_investing','data_statistics'], unlocks:['Quantitative Finance','Investment Analytics'] },
    { triggered_by:['supply_chain_logistics','engineering_challenges'], unlocks:['Operations Engineering','Supply Chain Management'] },
    { triggered_by:['public_speaking_debate','advocacy_activism'], unlocks:['Policy Leadership','Civil Rights Law'] },
    { triggered_by:['community_organizing','entrepreneurship'], unlocks:['Social Enterprise','Community Development'] },
  ];

  const selectedSet = new Set(selectedIds);
  return combos.filter(combo =>
    combo.triggered_by.every(id => selectedSet.has(id))
  );
}

function hasEQSignal(selectedIds) {
  return selectedIds.some(id => {
    const tile = VECTOR_CROSSWALK.find(t => t.id === id);
    return tile && tile.eq_multiplier;
  });
}

function getGeoSignalTiles(selectedIds) {
  return selectedIds.filter(id => {
    const tile = VECTOR_CROSSWALK.find(t => t.id === id);
    return tile && tile.naics_sectors && tile.naics_sectors.includes(71);
  });
}

if (typeof module !== 'undefined') module.exports = {
  VECTOR_CROSSWALK,
  getTilesForGender,
  getRIASECProfile,
  getNAICSProfile,
  getComboUnlocks,
  hasEQSignal,
  getGeoSignalTiles
};
