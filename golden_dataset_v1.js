/**
 * VECTOR — Golden Dataset v1 (DRAFT — NOT YET HUMAN-REVIEWED)
 * STUDENT-AGENT-002 Gate 4, Item 9
 *
 * STATUS: Constructed by Claude, 2026-07-31, per PARENT-AGENT-001 Section 4.2's
 * "carefully constructed or anonymized real sessions" option. Every
 * `proposed_label` below is a best-effort judgment call, NOT verified ground
 * truth — it needs a human (ideally an actual counselor, or Matt) to
 * independently confirm, correct, or overrule before this dataset earns the
 * word "golden." Per Finding 1 in FAMILY-ALIGNMENT-001: "the threshold should
 * not be picked in the abstract and then validated — it should come FROM the
 * validation." Same principle applies to every label here.
 *
 * IMPORTANT — bias warning for whoever reviews this: to avoid anchoring,
 * review each profile's raw input BEFORE reading proposed_label/reasoning.
 * The run_golden_dataset_calibration.js harness prints inputs and outputs
 * separately for exactly this reason.
 *
 * All tile IDs and their realm_weights are real, pulled directly from the
 * live crosswalk-db.js / TILE_REALM_WEIGHTS — nothing here is invented data,
 * only invented STUDENTS built from real building blocks.
 *
 * CATEGORY A (6 cases): Domain 2 realm-dominance calibration
 * CATEGORY B (6 cases): FAMILY-ALIGNMENT-001 alignment/dynamic calibration
 */

const REALM_WEIGHTS = {
  drawing:                 { make: 2.90, move: 0.67, think: 1.43, people: 0,    systems: 1.00 },
  painting:                { make: 2.90, move: 0.67, think: 0.43, people: 0,    systems: 1.00 },
  photography:             { make: 2.90, move: 0.67, think: 1.43, people: 0.29, systems: 1.71 },
  football:                { make: 1.00, move: 2.20, think: 0,    people: 1.37, systems: 2.43 },
  basketball:              { make: 1.00, move: 2.20, think: 0,    people: 1.37, systems: 2.43 },
  soccer:                  { make: 1.00, move: 2.20, think: 0,    people: 1.09, systems: 1.71 },
  coding_programming:      { make: 1.19, move: 0.67, think: 3.14, people: 0.29, systems: 3.71 },
  biology:                 { make: 0.33, move: 0.87, think: 3.00, people: 0.80, systems: 1.00 },
  chemistry:               { make: 0.33, move: 0.67, think: 3.00, people: 0,    systems: 2.00 },
  teaching_tutoring:       { make: 0,    move: 0.60, think: 2.00, people: 2.69, systems: 1.71 },
  volunteering:            { make: 0.33, move: 1.27, think: 0,    people: 2.69, systems: 1.71 },
  working_with_little_kids:{ make: 1.19, move: 1.27, think: 1.14, people: 2.40, systems: 1.00 },
  cosmetic_beauty_science: { make: 2.05, move: 0.67, think: 3.29, people: 0.29, systems: 1.71 },
  medical_science:         { make: 0.33, move: 1.07, think: 3.00, people: 1.60, systems: 2.00 },
  how_body_moves:          { make: 0.67, move: 1.53, think: 3.00, people: 0.80, systems: 1.00 },
};

function tileSel(id) {
  return { tile_id: id, weighted: true, realm_weights: REALM_WEIGHTS[id] };
}

const GOLDEN_DATASET_V1 = [

  // ══════════════════════════════════════════════════════════════════
  // CATEGORY A — Domain 2 realm-dominance calibration
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'A1-make-clean',
    category: 'realm_dominance',
    flagged_for_review: false,
    description: 'Clean, uncontroversial make-cluster selection — expect no surprise.',
    input: {
      selected_tiles: [tileSel('drawing'), tileSel('painting'), tileSel('photography')],
      domain1_narrative: 'I am always making something visual — sketching in the margins of my notes, redoing a photo edit until the light looks right.',
    },
    proposed_label: { dominant_realm: 'make', confidence: 'high' },
    reasoning: 'All three selected tiles are make-clustered AND derive make-dominant (2.90 each, clear margin over next-highest). Narrative independently supports visual/making identity. Low-risk case — mainly a sanity check that the pipeline gets the easy ones right.',
  },

  {
    id: 'A2-think-clean',
    category: 'realm_dominance',
    flagged_for_review: false,
    description: 'Clean, uncontroversial think-cluster selection.',
    input: {
      selected_tiles: [tileSel('coding_programming'), tileSel('biology'), tileSel('chemistry')],
      domain1_narrative: 'I like figuring out why something works the way it does, then testing whether I am right.',
    },
    proposed_label: { dominant_realm: 'think', confidence: 'high' },
    reasoning: 'All three tiles derive think-dominant (3.14, 3.0, 3.0), each with a wide margin. Narrative supports investigative identity directly.',
  },

  {
    id: 'A3-people-clean',
    category: 'realm_dominance',
    flagged_for_review: false,
    description: 'Clean, uncontroversial people-cluster selection.',
    input: {
      selected_tiles: [tileSel('teaching_tutoring'), tileSel('volunteering'), tileSel('working_with_little_kids')],
      domain1_narrative: 'I notice when someone is struggling before they say anything, and I cannot walk past it without trying to help.',
    },
    proposed_label: { dominant_realm: 'people', confidence: 'high' },
    reasoning: 'All three tiles derive people-dominant (2.69, 2.69, 2.40). Narrative independently supports a people-first orientation.',
  },

  {
    id: 'A4-move-cluster-systems-derived-FLAGGED',
    category: 'realm_dominance',
    flagged_for_review: true,
    description: 'Student selects ONLY move-clustered team sports — but the derivation gives systems as dominant, not move. This is the real, hand-verified pattern found while building TILE_REALM_WEIGHTS (C/conventional RIASEC weight on these tiles routes entirely to systems with nothing diluting it).',
    input: {
      selected_tiles: [tileSel('football'), tileSel('basketball'), tileSel('soccer')],
      domain1_narrative: 'I love being on a team where everyone has a role and the whole thing only works if we all do our part right.',
    },
    proposed_label: { dominant_realm: 'systems', confidence: 'low — genuinely uncertain, this is the review question' },
    reasoning: 'REVIEWER QUESTION: does this narrative ("everyone has a role... whole thing only works if we all do our part") actually support systems-thinking framed through team sport, making the derivation defensible? Or does a student who exclusively picks team sports deserve to read as move-dominant regardless of what the RIASEC-inversion math says? This is precisely the kind of case the derivation cannot resolve on its own — it was mathematically consistent with the approved RIASEC crosswalk, but "mathematically consistent" and "true to how this student would describe themselves" are not automatically the same thing. This is the single highest-value case in this dataset to get a real answer on.',
  },

  {
    id: 'A5-systems-cluster-think-derived-FLAGGED',
    category: 'realm_dominance',
    flagged_for_review: true,
    description: 'Student selects systems-clustered "how things work" tiles — but derivation gives think as dominant, not systems. Same underlying pattern as A4, opposite cluster.',
    input: {
      selected_tiles: [tileSel('cosmetic_beauty_science'), tileSel('medical_science'), tileSel('how_body_moves')],
      domain1_narrative: 'I want to understand the mechanism behind things — not just that a product works, but exactly why, at the level where it actually happens.',
    },
    proposed_label: { dominant_realm: 'think', confidence: 'medium — leaning toward accepting the derivation here' },
    reasoning: 'Narrative ("understand the mechanism... exactly why") reads as genuinely investigative/analytical, which supports think over systems more than A4 supports systems over move. Proposed as medium-confidence ACCEPT of the derivation, but paired with A4 deliberately — if a reviewer agrees with think here but disagrees with systems in A4, that is itself useful signal about where the RIASEC crosswalk needs adjustment (the C-weight/systems routing specifically, not the I-weight/think routing).',
  },

  {
    id: 'A6-genuinely-mixed',
    category: 'realm_dominance',
    flagged_for_review: true,
    description: 'Student selects one strong tile from three different realms — no real dominant signal should exist. Tests whether the pipeline over-claims a dominant realm when it should not.',
    input: {
      selected_tiles: [tileSel('drawing'), tileSel('coding_programming'), tileSel('teaching_tutoring')],
      domain1_narrative: 'I do not think I am just one kind of person — I make things, I build things, and I help people, and none of those feels more "me" than the others.',
    },
    proposed_label: { dominant_realm: null, confidence: 'this SHOULD come back closer to a genuine 3-way near-tie, not a confident single winner' },
    reasoning: 'The student explicitly narrates NOT wanting a single dominant category. Reviewer question: is the resulting realmProfile actually close/flat across make/think/people, or does the derivation still confidently pick one? If it confidently picks one despite this input, that is worth knowing — it may mean the derivation is too eager to declare a winner even from thin, evenly-split evidence (only 3 tiles total, one per realm).',
  },

  // ══════════════════════════════════════════════════════════════════
  // CATEGORY B — FAMILY-ALIGNMENT-001 alignment/dynamic calibration
  // ══════════════════════════════════════════════════════════════════

  {
    id: 'B1-aligned-confirming',
    category: 'alignment',
    flagged_for_review: false,
    description: 'Parent and student clearly describe the same person, low anxiety.',
    input: {
      student_dominant_signal: 'Think & Explore',
      student_narrative_snapshot: 'I like taking something apart, figuring out why it works, and then seeing if I can make it better.',
      parent_description: 'She has always been the kid who wants to know the "why" behind everything -- she will pull something apart just to understand it, then try to improve on it.',
      anxiety_taxonomy_primary: 'low',
      openness_indicator: 1,
    },
    proposed_label: { alignment_score_range: '75-90', family_dynamic: 'aligned_confirming' },
    reasoning: 'Near word-for-word conceptual match ("figure out why it works" / "wants to know the why"; "make it better" / "try to improve on it"). Low anxiety. Should be an easy, high-confidence case for the Claude classification call to get right — useful as a sanity floor.',
  },

  {
    id: 'B2-aligned-anxious',
    category: 'alignment',
    flagged_for_review: false,
    description: 'Same genuine alignment as B1, but high parental anxiety.',
    input: {
      student_dominant_signal: 'Systems & How Things Work',
      student_narrative_snapshot: 'I like understanding how a whole system fits together, not just one piece of it.',
      parent_description: 'He has always been able to see how all the pieces of something connect -- give him a system and he will map out how the whole thing works.',
      anxiety_taxonomy_primary: 'high',
      openness_indicator: 2,
    },
    proposed_label: { alignment_score_range: '75-90', family_dynamic: 'aligned_anxious' },
    reasoning: 'Same structural alignment quality as B1 (real conceptual match, not just keyword overlap) but anxiety_taxonomy.primary is high -- should classify as aligned_anxious, not aligned_confirming. Tests that the SAME alignment_score quality routes to a DIFFERENT family_dynamic purely based on the anxiety signal, per classifyFamilyDynamic()\'s actual branching logic.',
  },

  {
    id: 'B3-divergent-open',
    category: 'alignment',
    flagged_for_review: true,
    description: 'Parent description is generic/resume-only, genuinely different emphasis from student, but parent selected high openness.',
    input: {
      student_dominant_signal: 'Make & Create',
      student_narrative_snapshot: 'I am happiest when I am building something with my hands and it does not matter if it is messy at first.',
      parent_description: 'She has a 3.9 GPA and is planning to apply to pre-med programs.',
      anxiety_taxonomy_primary: null,
      openness_indicator: 1,
    },
    proposed_label: { alignment_score_range: '15-35', family_dynamic: 'divergent_open' },
    reasoning: 'Parent description is the exact "resume-only" pattern FAMILY-ALIGNMENT-001 Section 2a names explicitly -- genuinely different content from the student\'s own hands-on-making self-description, no real overlap. openness_indicator=1 ("I\'d want to understand it before I made up my mind") should route to divergent_open once alignment_score lands Low. REVIEWER QUESTION: is a 15-35 range right for "no real content overlap at all," or should pure resume-text (vs. an actively WRONG description) score a bit higher than a description that actively contradicts the student?',
  },

  {
    id: 'B4-divergent-protective',
    category: 'alignment',
    flagged_for_review: false,
    description: 'Parent description actively contradicts the student\'s self-description, low openness.',
    input: {
      student_dominant_signal: 'People & Stories',
      student_narrative_snapshot: 'I come alive when I am with a group of people, figuring out how to help everyone get on the same page.',
      parent_description: 'He has always been happiest alone -- give him a book and a quiet room and he does not need anyone else.',
      anxiety_taxonomy_primary: null,
      openness_indicator: 4,
    },
    proposed_label: { alignment_score_range: '5-20', family_dynamic: 'divergent_protective' },
    reasoning: 'Not just non-overlapping but actively contradictory (people-energized vs. solitary). openness_indicator=4 ("I\'d have real concerns I\'d want to voice directly") should route to divergent_protective. This is the clearest, least-ambiguous divergent case in the set -- useful as a floor check that the pipeline does not soften an obvious mismatch.',
  },

  {
    id: 'B5-insufficient-signal-no-openness',
    category: 'alignment',
    flagged_for_review: false,
    description: 'Low alignment score, but openness_indicator was never collected (Domain 6b not reached).',
    input: {
      student_dominant_signal: 'Move & Compete',
      student_narrative_snapshot: 'Competing against myself and trying to beat my own numbers is what keeps me coming back.',
      parent_description: 'She has a 4.0 and wants to study international business.',
      anxiety_taxonomy_primary: null,
      openness_indicator: null,
    },
    proposed_label: { alignment_score_range: '15-35', family_dynamic: 'insufficient_signal' },
    reasoning: 'Same resume-only pattern as B3 (Low alignment expected), but openness_indicator is null -- per Finding 6 (non-negotiable), classifyFamilyDynamic() MUST return insufficient_signal here, never guess or default. This is a pure regression check on the null-gate logic, not really an alignment-quality question -- low ambiguity, should not need much reviewer time.',
  },

  {
    id: 'B6-no-parent-data-at-all',
    category: 'alignment',
    flagged_for_review: false,
    description: 'Student-only session, no parent has completed anything yet.',
    input: {
      student_dominant_signal: 'Think & Explore',
      student_narrative_snapshot: 'I want to understand the reasoning behind a decision, not just be told what the decision is.',
      parent_description: null,
      anxiety_taxonomy_primary: null,
      openness_indicator: null,
    },
    proposed_label: { alignment_score_range: 'null (no call fired)', family_dynamic: 'insufficient_signal' },
    reasoning: 'buildAlignmentClassificationCall() should return null (no parentDescription), so no Claude call fires at all, alignment_score stays null, classifyFamilyDynamic() correctly reads this as the null gate. This is the single most common real-world case today (parent_intelligence_profiles has 0 rows in production) -- worth having as an explicit, permanent regression check.',
  },
];

if (typeof module !== 'undefined') module.exports = { GOLDEN_DATASET_V1 };
