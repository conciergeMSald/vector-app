/**
 * student-signal-fusion-engine.browser.js
 * VECTOR — STUDENT-AGENT-002, Section 6 (Signal Fusion Engine)
 *
 * Classic-script (non-ESM) port of student-signal-fusion-engine.js, for
 * inclusion in lifescape.html the same way every other module is loaded
 * (crosswalk-db.js, lifescape_major_map.js, etc. — all globals, no
 * import/export). Logic is byte-identical to the canonical module;
 * only the export mechanism differs. If the REALM_TO_RIASEC bridge or
 * scoring logic ever changes, change it in BOTH files or extract to a
 * single source — noted here so the two don't silently drift.
 */

(function (global) {
  'use strict';

  var ENGINE_VERSION = 'student-signal-fusion-v1.1.0';

  var REALM_TO_RIASEC = {
    make:   { R: 3, I: 1, C: 1 },
    move:   { R: 3, E: 1 },
    think:  { I: 3 },
    create: { A: 3, E: 1 },
  };

  var REALM_FALLBACK_DESCRIPTIONS = {
    make:   'shows the strongest signal through building and producing tangible things',
    move:   'shows the strongest signal through physical activity, competition, or performance',
    think:  'shows the strongest signal through investigation, strategy, and problem-solving',
    create: 'shows the strongest signal through expression, storytelling, and design',
  };

  var REALM_KEYWORDS = {
    make:   ['build', 'built', 'fix', 'fixed', 'assemble', 'grow', 'grew', 'cook', 'produce', 'repair', 'made'],
    move:   ['compete', 'competition', 'perform', 'explore', 'coordinate', 'travel', 'sport', 'practice'],
    think:  ['investigate', 'strategy', 'strategize', 'calculate', 'debate', 'figure out', 'solve', 'research'],
    create: ['imagine', 'design', 'write', 'wrote', 'film', 'compose', 'draw', 'paint', 'invent'],
  };

  var TEXT_EVIDENCE_BASE = 1;
  var TEXT_EVIDENCE_KEYWORD = 1;
  var MAX_TEXT_EVIDENCE_PER_REALM = 4;

  function hasContent(text) {
    return typeof text === 'string' && text.trim().length > 0;
  }

  function textEvidenceForRealm(realm, textA, textB) {
    var joined = [textA, textB].filter(hasContent).join(' ').toLowerCase();
    if (!joined) return 0;
    var score = TEXT_EVIDENCE_BASE;
    var keywords = REALM_KEYWORDS[realm] || [];
    for (var i = 0; i < keywords.length; i++) {
      if (joined.indexOf(keywords[i]) !== -1) score += TEXT_EVIDENCE_KEYWORD;
    }
    return Math.min(score, MAX_TEXT_EVIDENCE_PER_REALM);
  }

  function deriveAnxietySignal(rawWorry) {
    if (!hasContent(rawWorry)) return { primary: null, secondary: null };
    var parts = rawWorry.split('. ').map(function (s) { return s.trim(); }).filter(Boolean);
    return { primary: parts[0] || null, secondary: parts[1] || null };
  }

  function pickTopRealm(realmScores) {
    var entries = Object.keys(realmScores || {}).map(function (k) { return [k, realmScores[k]]; });
    var nonZero = entries.filter(function (e) { return e[1] > 0; });
    if (nonZero.length === 0) return null;
    nonZero.sort(function (a, b) { return b[1] - a[1]; });
    return nonZero[0][0];
  }

  function deriveDominantSignal(narrativeSnapshot, realmScores) {
    if (hasContent(narrativeSnapshot)) return narrativeSnapshot.trim();
    var topRealm = pickTopRealm(realmScores);
    return topRealm
      ? REALM_FALLBACK_DESCRIPTIONS[topRealm]
      : 'has not yet generated enough signal to describe a dominant pattern';
  }

  function computeRealmScores(worldSelections, domain1Text, domain3Text) {
    var scores = { make: 0, move: 0, think: 0, create: 0 };
    var sels = Array.isArray(worldSelections) ? worldSelections : [];
    for (var i = 0; i < sels.length; i++) {
      var weights = (sels[i] && sels[i].realm_weights) || {};
      for (var realm in scores) {
        var w = Number(weights[realm]);
        if (!isNaN(w) && isFinite(w)) scores[realm] += w;
      }
    }
    scores.create += textEvidenceForRealm('create', domain1Text);
    scores.think += textEvidenceForRealm('think', domain1Text);
    scores.make += textEvidenceForRealm('make', domain3Text);
    return scores;
  }

  function deriveRiasecBlend(realmScores) {
    var points = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    var anySignal = false;
    for (var realm in (realmScores || {})) {
      var score = realmScores[realm];
      if (!score) continue;
      var bridge = REALM_TO_RIASEC[realm];
      if (!bridge) continue;
      anySignal = true;
      for (var letter in bridge) {
        points[letter] += score * bridge[letter];
      }
    }
    if (!anySignal) return [];
    var hexOrder = ['R', 'I', 'A', 'S', 'E', 'C'];
    return Object.keys(points)
      .filter(function (l) { return points[l] > 0; })
      .sort(function (a, b) {
        return points[b] - points[a] || hexOrder.indexOf(a) - hexOrder.indexOf(b);
      });
  }

  /**
   * fuseStudentSignal — same contract as the canonical module. Never
   * throws; missing/partial input produces a valid, thin StudentGenome.
   */
  function fuseStudentSignal(input) {
    input = input || {};
    var studentId = input.studentId || null;
    var familyId = input.familyId || null;
    var domain1 = input.domain1 || {};
    var domain2 = input.domain2 || {};
    var domain3 = input.domain3 || {};
    var domain4 = input.domain4 || {};
    var domain5 = input.domain5 || {};

    var narrative = hasContent(domain1.narrative) ? domain1.narrative.trim() : null;
    var narrativeFollowup = hasContent(domain1.narrativeFollowup) ? domain1.narrativeFollowup.trim() : null;
    var narrativeSnapshot = [narrative, narrativeFollowup].filter(Boolean).join(' ') || null;

    var worldSelections = Array.isArray(domain2.worldSelections) ? domain2.worldSelections : [];

    var building = hasContent(domain3.evidence) ? domain3.evidence.trim() : null;
    var buildingFollowup = hasContent(domain3.evidenceFollowup) ? domain3.evidenceFollowup.trim() : null;
    var buildingEvidence = [building, buildingFollowup].filter(Boolean).join(' ') || null;

    var geographicIdentity = hasContent(domain4.geographicIdentity) ? domain4.geographicIdentity.trim() : null;

    var anxietySignal = deriveAnxietySignal(domain5.rawWorry);
    var realmScores = computeRealmScores(worldSelections, narrativeSnapshot, buildingEvidence);
    var riasecBlend = deriveRiasecBlend(realmScores);
    var dominantSignal = deriveDominantSignal(narrativeSnapshot, realmScores);

    var domainsPresent = [];
    if (narrativeSnapshot) domainsPresent.push(1);
    if (worldSelections.length > 0) domainsPresent.push(2);
    if (buildingEvidence) domainsPresent.push(3);
    if (geographicIdentity) domainsPresent.push(4);
    if (anxietySignal.primary) domainsPresent.push(5);

    return {
      student_id: studentId,
      family_id: familyId,
      narrative_snapshot: narrativeSnapshot,
      world_selections: worldSelections,
      building_evidence: buildingEvidence,
      geographic_identity: geographicIdentity,
      anxiety_signal: anxietySignal,
      realm_scores: realmScores,
      riasec_blend: riasecBlend,
      dominant_signal: dominantSignal,
      network_geography: geographicIdentity,
      engine_version: ENGINE_VERSION,
      meta: { domains_present: domainsPresent },
    };
  }

  /**
   * Formats a StudentGenome into the text block buildReportUpgradeContext()
   * expects at ctx.genome.claude_genome_context. Kept separate from
   * fuseStudentSignal itself so the pure data function stays free of any
   * prompt-formatting concerns — mirrors the separation already used for
   * Parent Agent's context block.
   */
  function formatGenomeContextBlock(genome) {
    if (!genome) return '';
    var lines = [];
    if (genome.riasec_blend && genome.riasec_blend.length) {
      lines.push('RIASEC signal (derived, do not name to student): ' + genome.riasec_blend.join('-'));
    }
    if (genome.dominant_signal) {
      lines.push('Dominant behavioral signal: ' + genome.dominant_signal);
    }
    if (genome.building_evidence) {
      lines.push('Building/creating evidence: "' + genome.building_evidence + '"');
    }
    if (genome.geographic_identity) {
      lines.push('Geographic identity: "' + genome.geographic_identity + '"');
    }
    return lines.join('\n');
  }

  global.ENGINE_VERSION = ENGINE_VERSION;
  global.deriveAnxietySignal = deriveAnxietySignal;
  global.deriveDominantSignal = deriveDominantSignal;
  global.computeRealmScores = computeRealmScores;
  global.deriveRiasecBlend = deriveRiasecBlend;
  global.fuseStudentSignal = fuseStudentSignal;
  global.formatGenomeContextBlock = formatGenomeContextBlock;

})(typeof window !== 'undefined' ? window : this);
