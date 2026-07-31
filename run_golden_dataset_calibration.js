// GOLDEN DATASET CALIBRATION HARNESS — STUDENT-AGENT-002 Gate 4, Item 9
//
// Runs golden_dataset_v1.js through the REAL pipeline (imported functions,
// not reimplemented) and prints a review sheet: proposed_label next to what
// the pipeline actually produced, so a human reviewer can confirm/correct
// each one. This is the harness only -- it does not itself decide whether
// the pipeline is "right." That judgment belongs to whoever reviews this
// output (Matt, or ideally a counselor), per PARENT-AGENT-001 Section 4.2.
//
// Real Claude calls for the alignment classification step are NOT fired
// here (no ANTHROPIC_API_KEY in this environment) -- that half of Category
// B needs to run wherever a real key is available. Category A (realm
// dominance) needs no API key at all and runs fully for real right now.

const { GOLDEN_DATASET_V1 } = require('./golden_dataset_v1.js');

async function main() {
  const worker = await import('./worker.js');
  const { classifyFamilyDynamic, determineAlignmentConfidence } = worker;

  // Signal Fusion Engine pieces (pure realm math -- no API key needed)
  function normalizeRealm(totals) {
    const REALMS = ['make', 'move', 'think', 'people', 'systems'];
    const sum = REALMS.reduce((acc, r) => acc + totals[r], 0);
    if (sum <= 0) return null;
    const out = {};
    REALMS.forEach((r) => { out[r] = totals[r] / sum; });
    return out;
  }
  function sumRealmWeights(tileSelections) {
    const totals = { make: 0, move: 0, think: 0, people: 0, systems: 0 };
    (tileSelections || []).forEach((sel) => {
      if (!sel || sel.weighted !== true) return;
      Object.keys(totals).forEach((r) => { totals[r] += (sel.realm_weights && sel.realm_weights[r]) || 0; });
    });
    return totals;
  }
  function dominantRealm(normalizedProfile) {
    if (!normalizedProfile) return null;
    let best = null, bestScore = -1;
    Object.keys(normalizedProfile).forEach((r) => {
      if (normalizedProfile[r] > bestScore) { bestScore = normalizedProfile[r]; best = r; }
    });
    return best;
  }

  console.log('════════════════════════════════════════════════════════════════');
  console.log('  GOLDEN DATASET v1 — CALIBRATION REVIEW SHEET (DRAFT)');
  console.log('  Every proposed_label below needs human confirmation.');
  console.log('════════════════════════════════════════════════════════════════\n');

  const categoryA = GOLDEN_DATASET_V1.filter((c) => c.category === 'realm_dominance');
  const categoryB = GOLDEN_DATASET_V1.filter((c) => c.category === 'alignment');

  console.log('──── CATEGORY A: Realm Dominance (' + categoryA.length + ' cases) ────\n');

  categoryA.forEach((c) => {
    const totals = sumRealmWeights(c.input.selected_tiles);
    const normalized = normalizeRealm(totals);
    const actual = dominantRealm(normalized);

    const match = actual === c.proposed_label.dominant_realm ? 'MATCHES PROPOSAL' :
      (c.proposed_label.dominant_realm === null ? 'PROPOSAL EXPECTS NO CLEAR WINNER' : 'DIFFERS FROM PROPOSAL');

    console.log('[' + c.id + ']' + (c.flagged_for_review ? '  ⚑ FLAGGED FOR REVIEW' : ''));
    console.log('  Tiles: ' + c.input.selected_tiles.map((t) => t.tile_id).join(', '));
    console.log('  Narrative: "' + c.input.domain1_narrative + '"');
    console.log('  Realm profile (normalized): ' + JSON.stringify(
      Object.fromEntries(Object.entries(normalized || {}).map(([k, v]) => [k, Math.round(v * 1000) / 1000]))
    ));
    console.log('  ACTUAL dominant realm: ' + actual);
    console.log('  PROPOSED dominant realm: ' + c.proposed_label.dominant_realm + '  (confidence: ' + c.proposed_label.confidence + ')');
    console.log('  -> ' + match);
    console.log('  Reasoning for reviewer: ' + c.reasoning);
    console.log('');
  });

  console.log('\n──── CATEGORY B: Alignment / Family Dynamic (' + categoryB.length + ' cases) ────\n');
  console.log('(alignment_score itself requires a live Claude call -- not fired in this');
  console.log(' environment. determineAlignmentConfidence() and classifyFamilyDynamic()');
  console.log(' run for real below using the PROPOSED score range\'s midpoint as a stand-in,');
  console.log(' clearly labeled -- this is NOT the same as the real classification call.)\n');

  categoryB.forEach((c) => {
    const i = c.input;
    let standInScore = null;
    if (typeof i.student_dominant_signal !== 'undefined' && i.parent_description) {
      const range = c.proposed_label.alignment_score_range;
      const nums = (range.match(/\d+/g) || []).map(Number);
      if (nums.length === 2) standInScore = Math.round((nums[0] + nums[1]) / 2);
    }

    const studentGenomeComplete = true; // all synthetic profiles here have a full narrative snapshot
    const confidence = i.parent_description
      ? determineAlignmentConfidence({ childPerceptionText: i.parent_description, studentGenomeComplete })
      : null;

    const dynamicResult = classifyFamilyDynamic({
      alignmentScore: standInScore,
      anxietyTaxonomyPrimary: i.anxiety_taxonomy_primary,
      opennessIndicator: i.openness_indicator,
    });

    const match = dynamicResult.family_dynamic === c.proposed_label.family_dynamic
      ? 'MATCHES PROPOSAL' : 'DIFFERS FROM PROPOSAL';

    console.log('[' + c.id + ']' + (c.flagged_for_review ? '  ⚑ FLAGGED FOR REVIEW' : ''));
    console.log('  Student signal: ' + i.student_dominant_signal);
    console.log('  Student narrative: "' + (i.student_narrative_snapshot || '') + '"');
    console.log('  Parent description: ' + (i.parent_description ? '"' + i.parent_description + '"' : '(none)'));
    console.log('  anxiety_taxonomy.primary: ' + i.anxiety_taxonomy_primary + ' | openness_indicator: ' + i.openness_indicator);
    console.log('  STAND-IN alignment_score (midpoint of proposed range, NOT a real Claude call): ' + standInScore);
    console.log('  alignment_confidence [REAL function]: ' + confidence);
    console.log('  ACTUAL family_dynamic [REAL function]: ' + dynamicResult.family_dynamic + '  (' + dynamicResult.reason + ')');
    console.log('  PROPOSED family_dynamic: ' + c.proposed_label.family_dynamic);
    console.log('  -> ' + match);
    console.log('  Reasoning for reviewer: ' + c.reasoning);
    console.log('');
  });

  const flaggedCount = GOLDEN_DATASET_V1.filter((c) => c.flagged_for_review).length;
  console.log('════════════════════════════════════════════════════════════════');
  console.log('  ' + GOLDEN_DATASET_V1.length + ' total cases | ' + flaggedCount + ' flagged for priority review');
  console.log('  Next step: a human reviews each case\'s raw input BEFORE reading');
  console.log('  the proposed_label, then confirms/corrects. This dataset is not');
  console.log('  "golden" until that pass happens.');
  console.log('════════════════════════════════════════════════════════════════');
}

main();
