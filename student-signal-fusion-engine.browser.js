/**
 * VECTOR Lifescape — Student Signal Fusion Engine
 * STUDENT-AGENT-002 Gate 4, Item 4
 * Built 2026-07-23.
 *
 * PURE FUNCTION CONTRACT: fuseStudentSignal() makes no DB calls, no network
 * calls, no LLM calls, and has no side effects — same input always produces
 * the same output. This is deliberate: Domains 1-5's raw text (genome_
 * narrative, genome_building, genome_geo, genome_worry) is NOT interpreted
 * or summarized by an LLM inside this function. Real natural-language
 * understanding of that free text (e.g. extracting named cities from
 * genome_geo for network_geography) is explicitly NOT done here — doing so
 * would require an LLM call, breaking determinism and the "pure function"
 * requirement from the spec. That extraction, if wanted, belongs in a
 * separate, disclosed, non-pure step upstream or downstream of this engine,
 * not inside it.
 *
 * THREE CONSUMERS (per spec): the existing 4 Claude calls (via
 * formatGenomeContextBlock below), Essay Engine Stage 1 (optional pre-seed,
 * not wired in this build), and Synthesis (/synthesize-family, via the
 * dominant_signal and network_geography fields — see IMPORTANT note below).
 *
 * IMPORTANT / UNVERIFIED: dominant_signal and network_geography are
 * LOAD-BEARING exact field NAMES already read by the deployed
 * synthesizeFamilySignal() function (per STUDENT-AGENT-002 spec notes).
 * This build could not see that function's source, so the exact VALUE
 * SHAPE synthesizeFamilySignal() expects for these two fields is an
 * informed guess, not a confirmed contract. Before this ships, whoever has
 * access to synthesizeFamilySignal() should confirm these two fields'
 * shapes match what it actually reads — otherwise /synthesize-family may
 * still 404 or silently misread, just with real data now instead of none.
 *
 * riasec_blend is always derived here from realm weights, never asked of
 * the student directly, per spec.
 */

(function (root) {
  'use strict';

  var ENGINE_VERSION = '1.0.0';

  // ── Realm → RIASEC crosswalk ──────────────────────────────────────────
  // A genuine design decision, disclosed rather than hidden: realms
  // (make/move/think/people/systems, the tile-cluster taxonomy) and RIASEC
  // (Holland code, the vocational-psychology taxonomy already used
  // elsewhere in this codebase — e.g. riasec_affinity in MAJOR_MAP) are two
  // different systems. This crosswalk is a defensible mapping, not a
  // verified psychometric equivalence — each realm distributes weight
  // across 1-2 RIASEC letters that most plausibly correspond to it:
  //   make     -> R 0.4, A 0.6  (hands-on realistic + artistic/creative)
  //   move     -> R 0.8, S 0.2  (physical/realistic, some team/social)
  //   think    -> I 0.9, A 0.1  (investigative, slight idea-generation overlap)
  //   people   -> S 0.8, E 0.2  (social, some leadership/enterprising overlap)
  //   systems  -> E 0.5, C 0.5  (enterprising + conventional/process)
  var REALM_TO_RIASEC = {
    make:    { R: 0.4, A: 0.6 },
    move:    { R: 0.8, S: 0.2 },
    think:   { I: 0.9, A: 0.1 },
    people:  { S: 0.8, E: 0.2 },
    systems: { E: 0.5, C: 0.5 }
  };

  // Reused verbatim from CLUSTER_CONFIG in lifescape.html for consistency
  // with what students already see on the tile-selection screens, rather
  // than inventing new labels for the same 5 realms.
  var REALM_LABELS = {
    make:    'Make & Create',
    move:    'Move & Compete',
    think:   'Think & Explore',
    people:  'People & Stories',
    systems: 'Systems & How Things Work'
  };

  var REALMS = ['make', 'move', 'think', 'people', 'systems'];
  var RIASEC_LETTERS = ['R', 'I', 'A', 'S', 'E', 'C'];

  function sumRealmWeights(tileSelections) {
    var totals = { make: 0, move: 0, think: 0, people: 0, systems: 0 };
    var weightedCount = 0;
    (tileSelections || []).forEach(function (sel) {
      if (!sel || sel.weighted !== true) return;
      weightedCount += 1;
      REALMS.forEach(function (r) {
        totals[r] += (sel.realm_weights && sel.realm_weights[r]) || 0;
      });
    });
    return { totals: totals, weightedCount: weightedCount };
  }

  function normalize(totals) {
    var sum = REALMS.reduce(function (acc, r) { return acc + totals[r]; }, 0);
    if (sum <= 0) return null;
    var out = {};
    REALMS.forEach(function (r) { out[r] = totals[r] / sum; });
    return out;
  }

  function deriveRiasecBlend(normalizedRealmProfile) {
    if (!normalizedRealmProfile) return { blend: '', scores: null };
    var scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    REALMS.forEach(function (realm) {
      var weight = normalizedRealmProfile[realm] || 0;
      var crosswalk = REALM_TO_RIASEC[realm];
      Object.keys(crosswalk).forEach(function (letter) {
        scores[letter] += weight * crosswalk[letter];
      });
    });
    var ranked = RIASEC_LETTERS.slice().sort(function (a, b) { return scores[b] - scores[a]; });
    var top3 = ranked.slice(0, 3).filter(function (letter) { return scores[letter] > 0; });
    return { blend: top3.join(''), scores: scores };
  }

  function deriveDominantRealm(normalizedRealmProfile) {
    if (!normalizedRealmProfile) return null;
    var best = null, bestScore = -1;
    REALMS.forEach(function (r) {
      if (normalizedRealmProfile[r] > bestScore) { bestScore = normalizedRealmProfile[r]; best = r; }
    });
    return best;
  }

  /**
   * fuseStudentSignal(input) -> StudentGenome
   * @param {object} input
   * @param {string|null} input.studentId
   * @param {string|null} input.familyId
   * @param {{narrative: string|null, narrativeFollowup: string|null}} input.domain1
   * @param {{worldSelections: Array}} input.domain2 - output of buildWorldSelections()
   * @param {{evidence: string|null, evidenceFollowup: string|null}} input.domain3
   * @param {{geographicIdentity: string|null}} input.domain4
   * @param {{rawWorry: string|null}} input.domain5
   */
  function fuseStudentSignal(input) {
    input = input || {};
    var d1 = input.domain1 || {};
    var d2 = input.domain2 || {};
    var d3 = input.domain3 || {};
    var d4 = input.domain4 || {};
    var d5 = input.domain5 || {};

    var tileSelections = d2.worldSelections || [];
    var realmTotals = sumRealmWeights(tileSelections);
    var normalizedProfile = normalize(realmTotals.totals);
    var dominantRealm = deriveDominantRealm(normalizedProfile);
    var riasec = deriveRiasecBlend(normalizedProfile);

    var totalTiles = tileSelections.length;
    var allUnweighted = totalTiles > 0 && realmTotals.weightedCount === 0;

    // dominant_signal / network_geography — see IMPORTANT/UNVERIFIED note
    // at the top of this file regarding the unverified downstream contract.
    var dominantSignal = dominantRealm
      ? REALM_LABELS[dominantRealm]
      : null;

    var networkGeography = {
      raw_text: d4.geographicIdentity || null,
      extracted_anchors: [],
      extraction_method: 'not_yet_implemented'
    };

    return {
      engine_version: ENGINE_VERSION,
      student_id: input.studentId || null,
      family_id: input.familyId || null,

      domain1: {
        narrative: d1.narrative || null,
        narrativeFollowup: d1.narrativeFollowup || null,
        hasContent: !!(d1.narrative)
      },
      domain2: {
        tileSelections: tileSelections,
        totalTilesSelected: totalTiles,
        weightedTilesCount: realmTotals.weightedCount,
        unweightedTilesCount: totalTiles - realmTotals.weightedCount,
        allTilesUnweighted: allUnweighted,
        realmProfile: normalizedProfile,   // null if no weighted tiles at all
        dominantRealm: dominantRealm       // null if no weighted tiles at all
      },
      domain3: {
        evidence: d3.evidence || null,
        evidenceFollowup: d3.evidenceFollowup || null,
        hasContent: !!(d3.evidence)
      },
      domain4: {
        geographicIdentity: d4.geographicIdentity || null
      },
      domain5: {
        rawWorry: d5.rawWorry || null
      },

      riasec_blend: riasec.blend,
      riasec_scores: riasec.scores,        // null if no weighted tiles at all
      dominant_signal: dominantSignal,     // null if no weighted tiles at all — see UNVERIFIED note
      network_geography: networkGeography  // raw pass-through only — see file header note on why no NLP extraction happens here
    };
  }

  /**
   * formatGenomeContextBlock(genome) -> string
   * Produces a Claude-prompt-injectable text block, matching the existing
   * register used elsewhere in lifescape.html (e.g. the genome_worry
   * anxiety-calibration block): a directive on HOW to use the signal, never
   * an instruction to quote it back to the family verbatim.
   */
  function formatGenomeContextBlock(genome) {
    if (!genome) return '';
    var parts = [];

    if (genome.domain1.hasContent) {
      parts.push('STUDENT NARRATIVE SIGNAL: "' + genome.domain1.narrative + '"' +
        (genome.domain1.narrativeFollowup ? ' Follow-up: "' + genome.domain1.narrativeFollowup + '"' : '') +
        '\nLet this inform the voice and specificity of the narrative sections — never quote it back to the family verbatim.');
    }

    if (genome.domain2.dominantRealm) {
      parts.push('DOMINANT ACTIVITY REALM: ' + REALM_LABELS[genome.domain2.dominantRealm] +
        (genome.riasec_blend ? ' (derived RIASEC blend: ' + genome.riasec_blend + ')' : '') +
        '\nLet this calibrate which majors and career pathways feel most natural to lead with, without naming the realm or RIASEC letters to the family directly.');
    } else if (genome.domain2.totalTilesSelected > 0 && genome.domain2.allTilesUnweighted) {
      parts.push('ACTIVITY REALM SIGNAL: not yet available for this student\'s specific tile selections (realm-weighting coverage is still partial). Proceed without this signal rather than guessing.');
    }

    if (genome.domain3.hasContent) {
      parts.push('STUDENT BUILDING/CREATING EVIDENCE: "' + genome.domain3.evidence + '"' +
        (genome.domain3.evidenceFollowup ? ' Follow-up: "' + genome.domain3.evidenceFollowup + '"' : '') +
        '\nLet this inform concrete, specific language about what this student actually does, not generic "hands-on learner" framing.');
    }

    if (genome.domain4.geographicIdentity) {
      parts.push('STUDENT GEOGRAPHIC IDENTITY (raw): "' + genome.domain4.geographicIdentity + '"' +
        '\nLet this inform geographic framing alongside the separate Life Geography trajectory signal already in this prompt, if present.');
    }

    if (genome.domain5.rawWorry) {
      parts.push('STUDENT PRIMARY ANXIETY (raw): "' + genome.domain5.rawWorry + '"' +
        '\nLet this calibrate tone as elsewhere in this prompt — never reference it back to the student directly.');
    }

    return parts.join('\n\n');
  }

  var api = {
    fuseStudentSignal: fuseStudentSignal,
    formatGenomeContextBlock: formatGenomeContextBlock,
    ENGINE_VERSION: ENGINE_VERSION,
    _internal: { REALM_TO_RIASEC: REALM_TO_RIASEC, REALM_LABELS: REALM_LABELS } // exposed for testing only
  };

  if (typeof root !== 'undefined') {
    root.fuseStudentSignal = fuseStudentSignal;
    root.formatGenomeContextBlock = formatGenomeContextBlock;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this);
