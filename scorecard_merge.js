/**
 * VECTOR Scorecard Merge Layer
 * scorecard_merge.js
 *
 * Loads alongside university-content.js and scorecard_v500.json.
 * Runs client-side before Claude calls to enrich V5 school records
 * with federally verified Scorecard data.
 *
 * Usage:
 *   const enriched = buildEnrichedContext(schoolName, profile);
 *   // Pass enriched to callB / callD prompt builder
 *
 * Fallback: if a school has no Scorecard record, returns V5 data only.
 * No crashes, no gaps.
 */

// ── Name bridge: V5 name → Scorecard UNITID ──────────────────────────────────
// Hand-curated for V5 schools that don't exact-match Scorecard names.
// Covers abbreviations (UC Berkeley → University of California-Berkeley),
// punctuation differences (San Luis Obispo), and nickname forms (SMU, USC).
const SCORECARD_NAME_BRIDGE = {
  // UC system abbreviations
  'UC Berkeley':                          '110635',
  'UCLA':                                 '110662',
  'UC San Diego':                         '110680',
  'UC Santa Barbara':                     '110705',
  'UC Riverside':                         '110671',
  'USC':                                  '123961',
  'UT Austin':                            '228778',
  'SMU':                                  '228246',
  'TCU':                                  '228875',

  // Hyphen vs space variants
  'California Polytechnic State University San Luis Obispo': '110422',
  'California State University Chico':    '110556',
  'California State University Fullerton':'110600',
  'California State University Long Beach':'110608',
  'California State University Los Angeles':'110614',
  'California State University Northridge':'110631',
  'University of California Davis':       '110644',
  'University of California Irvine':      '110653',
  'University of California Santa Cruz':  '110714',

  // "The" prefix variants
  'University of Alabama':                '100751',
  'College of Wooster':                   '201645',
  'University of the South':              '220862',

  // Disambiguations
  'University of Maryland College Park':  '163286',
  'University of Missouri':               '178396',
  'University of Minnesota':              '174066',
  'University of South Carolina':         '218663',
  'North Carolina State University':      '199193',
  'North Dakota State University':        '200280',
  'Penn State University':                '214777',
  'Ohio State University':                '204796',
  'Rutgers University':                   '186380',
  'Purdue University':                    '243780',
  'Pratt Institute':                      '194091',

  // Name differences
  'Indiana University':                   '151351',
  'University of Michigan':               '170976',
  'University of Virginia':               '234076',
  'University of Washington':             '236948',
  'University of Pittsburgh':             '215293',
  'University of North Carolina Chapel Hill': '198429',
  'University of Oklahoma':               '207500',
  'Louisiana State University':           '159391',
  'University of Nevada Reno':            '182290',
  'University of Nevada Las Vegas':       '182281',
  'Tulane University':                    '160755',
  'Texas A&M University':                 '228723',
  'University of Tennessee':              '220978',
  'Georgia Institute of Technology':      '139755',
  'Virginia Tech':                        '233921',
};

// ── Build name-keyed index from Scorecard JSON ────────────────────────────────
// scorecard_v500.json is loaded as window.SCORECARD_V500 in the browser.
// Call initScorecardIndex() once after both files load.
let _scorecardByName = null;
let _scorecardByUID  = null;

function initScorecardIndex() {
  if (!window.SCORECARD_V500) {
    console.warn('[Scorecard] scorecard_v500.json not loaded — merge layer inactive');
    return;
  }
  _scorecardByUID  = window.SCORECARD_V500.institutions;
  _scorecardByName = {};

  for (const [uid, record] of Object.entries(_scorecardByUID)) {
    if (record.name) {
      _scorecardByName[record.name] = uid;
    }
  }
  const count = Object.keys(_scorecardByUID).length;
  console.log(`[Scorecard] Index built — ${count} institutions`);
}

// ── Core lookup ───────────────────────────────────────────────────────────────
function getScorecardRecord(schoolName) {
  if (!_scorecardByName) return null;

  // 1. Bridge map (covers abbreviations + known mismatches)
  const bridgedUID = SCORECARD_NAME_BRIDGE[schoolName];
  if (bridgedUID && _scorecardByUID[bridgedUID]) {
    return _scorecardByUID[bridgedUID];
  }

  // 2. Exact name match
  const exactUID = _scorecardByName[schoolName];
  if (exactUID) return _scorecardByUID[exactUID];

  // 3. Fuzzy: strip "University of" / "The" prefix and try again
  const stripped = schoolName
    .replace(/^The\s+/i, '')
    .replace(/\s*-\s*/g, ' ')
    .trim();
  const fuzzyUID = _scorecardByName[stripped];
  if (fuzzyUID) return _scorecardByUID[fuzzyUID];

  return null;
}

// ── Merge function ────────────────────────────────────────────────────────────
/**
 * mergeSchoolData(v5Record, scorecardRecord)
 *
 * Combines the hand-authored V5 intelligence with Scorecard federal data.
 * Returns a unified enriched_record object for the Claude prompt.
 *
 * All Scorecard fields are optional — if null, they're omitted from the
 * prompt context so Claude doesn't say "data not available."
 */
function mergeSchoolData(v5Record, sc) {
  const merged = {
    // ── V5 Identity ───────────────────────────────────────────────────────
    name:           v5Record.name,
    location:       v5Record.location,
    region:         v5Record.region,

    // ── V5 Prose Intelligence ─────────────────────────────────────────────
    pipeline:       v5Record.pipeline       || null,
    hidden_pathway: v5Record.hidden_pathway || null,
    the_room:       v5Record.the_room       || null,
    lifestyle:      v5Record.lifestyle      || null,
    grad_cities:    v5Record.grad_cities    || null,

    // ── Scorecard Ground Truth (null if no record) ────────────────────────
    scorecard_matched: !!sc,
  };

  if (!sc) return merged;

  // Institutional characteristics
  merged.is_public     = sc.is_public  || false;
  merged.is_private    = sc.is_private || false;
  merged.hbcu          = sc.hbcu === 1;
  merged.hsi           = sc.hsi  === 1;
  merged.admission_rate = sc.admission_rate;
  merged.sat_avg       = sc.sat_avg;
  merged.undergrad_size = sc.undergrad_enrollment;

  // Cost — raw tuition
  merged.tuition_in_state  = sc.tuition_in_state  || null;
  merged.tuition_out_state = sc.tuition_out_state || null;

  // Cost — net price by income band (pick public or private track)
  if (sc.is_public) {
    merged.net_price_by_income = {
      band_0_30k:    sc.net_price_pub_0_30k,
      band_30_48k:   sc.net_price_pub_30_48k,
      band_48_75k:   sc.net_price_pub_48_75k,
      band_75_110k:  sc.net_price_pub_75_110k,
      band_110k_plus: sc.net_price_pub_110k_plus,
    };
  } else {
    merged.net_price_by_income = {
      band_0_30k:    sc.net_price_priv_0_30k,
      band_30_48k:   sc.net_price_priv_30_48k,
      band_48_75k:   sc.net_price_priv_48_75k,
      band_75_110k:  sc.net_price_priv_75_110k,
      band_110k_plus: sc.net_price_priv_110k_plus,
    };
  }

  // Outcomes — graduation & retention
  merged.grad_rate_6yr      = sc.grad_rate_6yr;
  merged.retention_rate     = sc.retention_rate;

  // Outcomes — debt
  merged.median_debt         = sc.median_debt_graduates;
  merged.debt_to_earnings    = sc.debt_to_earnings_ratio;
  merged.monthly_payment_10yr = sc.monthly_debt_payment_10yr;

  // Outcomes — earnings trajectory
  merged.median_earnings_6yr  = sc.median_earnings_6yr;
  merged.median_earnings_8yr  = sc.median_earnings_8yr;
  merged.median_earnings_10yr = sc.median_earnings_10yr;
  merged.beats_national_earnings = sc.beats_national_threshold;
  merged.beats_state_earnings    = sc.beats_state_threshold;

  // Student body
  merged.pct_pell          = sc.pct_pell_recipients;
  merged.pct_first_gen     = sc.pct_first_generation;
  merged.first_gen_grad_rate = sc.first_gen_grad_rate_6yr;
  merged.repayment_3yr     = sc.repayment_rate_3yr;

  return merged;
}

// ── buildEnrichedContext ──────────────────────────────────────────────────────
/**
 * Primary entry point. Call once per school before building Claude prompts.
 *
 * @param {string} schoolName  - Exact name as it appears in UNIVERSITY_CONTENT
 * @param {object} profile     - Student session profile (for wealth tier)
 * @returns {object}           - Enriched record ready for prompt injection
 */
function buildEnrichedContext(schoolName, profile) {
  const v5 = UNIVERSITY_CONTENT[schoolName];
  if (!v5) {
    console.warn(`[Scorecard] No V5 record for: ${schoolName}`);
    return null;
  }

  const sc = getScorecardRecord(schoolName);
  if (!sc) {
    console.log(`[Scorecard] No Scorecard match for: ${schoolName} — using V5 only`);
  }

  const merged = mergeSchoolData(v5, sc);

  // Inject the net price relevant to this student's wealth tier
  if (sc && merged.net_price_by_income && profile && profile.wealth_tier) {
    const band = netPriceBandForTier(profile.wealth_tier);
    merged.estimated_net_price = merged.net_price_by_income[band] || null;
  }

  return merged;
}

// ── Net price band selector ───────────────────────────────────────────────────
// Maps VECTOR wealth tier (1-4) to Scorecard income band key.
function netPriceBandForTier(tier) {
  const map = {
    1: 'band_110k_plus',   // Tier 1: $110K+
    2: 'band_75_110k',     // Tier 2: $75K-$110K
    3: 'band_48_75k',      // Tier 3: $48K-$75K
    4: 'band_0_30k',       // Tier 4: $0-$30K
  };
  return map[tier] || 'band_48_75k';
}

// ── Prompt context builder ────────────────────────────────────────────────────
/**
 * buildScorecardPromptBlock(enriched)
 *
 * Converts an enriched record into a terse, Claude-ready context block.
 * Only includes non-null Scorecard fields. Claude uses this to make
 * factual claims; V5 prose fields are passed separately for narrative.
 *
 * Designed to add ~150-250 tokens per school — well within callD budget.
 */
function buildScorecardPromptBlock(enriched) {
  if (!enriched || !enriched.scorecard_matched) return '';

  const lines = [];

  // Earnings arc
  if (enriched.median_earnings_6yr) {
    const e6  = `$${Math.round(enriched.median_earnings_6yr / 1000)}K`;
    const e10 = enriched.median_earnings_10yr
      ? ` → $${Math.round(enriched.median_earnings_10yr / 1000)}K at 10yr`
      : '';
    lines.push(`Median graduate earnings: ${e6} (6yr)${e10}`);
  }

  // National benchmark
  if (enriched.beats_national_earnings === true) {
    lines.push('Earnings exceed national threshold for this institution type');
  }

  // Debt
  if (enriched.median_debt) {
    lines.push(`Median debt at graduation: $${enriched.median_debt.toLocaleString()}`);
  }
  if (enriched.debt_to_earnings) {
    lines.push(`Debt-to-earnings ratio: ${enriched.debt_to_earnings.toFixed(2)}x`);
  }

  // Net price for this student
  if (enriched.estimated_net_price) {
    lines.push(`Estimated net price for this family: $${Math.round(enriched.estimated_net_price).toLocaleString()}/yr`);
  }

  // Graduation rate
  if (enriched.grad_rate_6yr) {
    lines.push(`6-year graduation rate: ${Math.round(enriched.grad_rate_6yr * 100)}%`);
  }

  // First-gen signal
  if (enriched.first_gen_grad_rate) {
    lines.push(`First-generation student graduation rate: ${Math.round(enriched.first_gen_grad_rate * 100)}%`);
  }

  // Institutional flags
  const flags = [];
  if (enriched.hbcu)      flags.push('HBCU');
  if (enriched.hsi)       flags.push('Hispanic-Serving Institution');
  if (flags.length)       lines.push(`Designation: ${flags.join(', ')}`);

  if (!lines.length) return '';

  return `[Federal Data — ${enriched.name}]\n${lines.join('\n')}`;
}

// ── Batch enrichment for match engine ────────────────────────────────────────
/**
 * enrichMatchCandidates(candidates, profile)
 *
 * Takes the array of school names from the match engine output,
 * enriches each with Scorecard data, and returns the full enriched list.
 * Called after matchUniversities() and before buildCallDPrompt().
 *
 * @param {string[]} candidates  - School names (primary, adjacent, unexpected + list)
 * @param {object}   profile     - Student session profile
 * @returns {object}             - Map of schoolName → enriched record
 */
function enrichMatchCandidates(candidates, profile) {
  const result = {};
  let matched = 0;
  let v5only  = 0;
  let missing = 0;

  for (const name of candidates) {
    const enriched = buildEnrichedContext(name, profile);
    if (!enriched) {
      missing++;
      continue;
    }
    result[name] = enriched;
    if (enriched.scorecard_matched) matched++;
    else v5only++;
  }

  console.log(`[Scorecard] Enriched ${candidates.length} candidates: `
    + `${matched} with federal data, ${v5only} V5 only, ${missing} missing`);

  return result;
}

// ── Export ────────────────────────────────────────────────────────────────────
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initScorecardIndex,
    getScorecardRecord,
    mergeSchoolData,
    buildEnrichedContext,
    buildScorecardPromptBlock,
    enrichMatchCandidates,
    netPriceBandForTier,
    SCORECARD_NAME_BRIDGE,
  };
}
