/**
 * parent-signal-engine.js
 * VECTOR — Parent Intelligence Agent — Signal Extraction Engine
 *
 * PARENT-AGENT-001 v3 (Approved) — Section 4
 * BUILD-SPEC-PA-001 — Phase 1
 *
 * CONTRACT (non-negotiable, per CTO checklist):
 *   - Pure function. No DB calls. No side effects. Deterministic output.
 *   - Input: raw conversation transcript + domain completion map.
 *   - Output: structured Parent Intelligence Profile (6 signal categories).
 *   - raw_payload is always preserved alongside derived signals — never overwritten.
 *   - engine_version stamped on every output from day one.
 *   - Race: never collected, never inferred, never used.
 *   - Gender: never inferred from name.
 *   - Bypass rule: engine must produce a valid (possibly low-confidence / null-heavy)
 *     profile even when only the two required domains (alumni, aspiration) are present.
 *     Missing domains degrade gracefully — they never throw, never block.
 */

export const ENGINE_VERSION = "parent-signal-v1.0.0";

// Per locked OQ-003: these two domains are the only required minimum.
// All others degrade gracefully if absent or incomplete.
export const REQUIRED_DOMAINS = ["alumni", "aspiration"];

export const ALL_DOMAINS = [
  "alumni",              // Domain 1 — parent's own college experience
  "professional",        // Domain 2 — career trajectory
  "network_geography",   // Domain 3 — geographic life / network
  "aspiration",          // Domain 5 — vision, budget, anxiety
  "child_perception",    // Domain 6 — child through parent's eyes
  "hidden_constraints"   // Domain 7 — closing question
];

/**
 * Main entry point. Call this and only this from outside the module.
 *
 * @param {Object} input
 * @param {string} input.familyMemberId - UUID, passed through untouched for the caller to attach to the DB row. Engine does not write it anywhere.
 * @param {Object} input.transcriptByDomain - { domainKey: string (raw transcript text) }. Missing keys = domain not reached.
 * @returns {Object} Parent Intelligence Profile — matches parent_intelligence_profiles schema shape (minus id/created_at, which the caller sets on write).
 */
export function extractParentSignals(input) {
  const { transcriptByDomain = {}, preFilledSignals = null } = input || {};

  const domainsPresent = ALL_DOMAINS.filter(d => hasContent(transcriptByDomain[d]));
  const requiredMet = REQUIRED_DOMAINS.every(d => domainsPresent.includes(d));

  // Scaffolding pass — always runs, guarantees valid shape even with zero data.
  let alumni_signal = extractAlumniSignal(transcriptByDomain.alumni);
  let professional_signal = extractProfessionalSignal(transcriptByDomain.professional);
  let network_geography = extractNetworkGeography(
    transcriptByDomain.alumni,
    transcriptByDomain.professional,
    transcriptByDomain.network_geography
  );
  let aspiration_profile = extractAspirationProfile(transcriptByDomain.aspiration);
  let child_perception = extractChildPerception(transcriptByDomain.child_perception);
  let hidden_constraints = extractHiddenConstraints(transcriptByDomain.hidden_constraints);

  // Merge pass — if callF returned real extraction, layer it over the
  // scaffolding. preFilledSignals is untrusted input from a Claude call,
  // so every field is merged individually rather than trusted wholesale.
  // divergence_flag is force-reset regardless of what Claude sent —
  // that comparison belongs to Synthesis, never to this engine.
  if (preFilledSignals && typeof preFilledSignals === "object") {
    if (preFilledSignals.alumni_signal) {
      alumni_signal = { ...alumni_signal, ...preFilledSignals.alumni_signal, confidence: "extracted", source_present: true };
    }
    if (preFilledSignals.professional_signal) {
      professional_signal = { ...professional_signal, ...preFilledSignals.professional_signal, confidence: "extracted", source_present: true };
    }
    if (preFilledSignals.network_geography) {
      network_geography = { ...network_geography, ...preFilledSignals.network_geography, confidence: "extracted", source_present: true };
    }
    if (preFilledSignals.aspiration_profile) {
      aspiration_profile = { ...aspiration_profile, ...preFilledSignals.aspiration_profile, confidence: "extracted", source_present: true };
    }
    if (preFilledSignals.child_perception) {
      child_perception = {
        ...child_perception,
        ...preFilledSignals.child_perception,
        divergence_flag: "pending_student_profile", // never trust Claude's value here
        confidence: "extracted",
        source_present: true
      };
    }
    if (preFilledSignals.hidden_constraints) {
      hidden_constraints = { ...hidden_constraints, ...preFilledSignals.hidden_constraints, confidence: "extracted", source_present: true };
    }
  }

  const global_confidence = computeGlobalConfidence(domainsPresent, requiredMet);

  return {
    // raw_payload preserved verbatim — source of truth, never overwritten downstream
    raw_payload: transcriptByDomain,

    alumni_signal,
    professional_signal,
    network_geography,
    aspiration_profile,
    child_perception,
    hidden_constraints,

    engine_version: ENGINE_VERSION,
    global_confidence,

    meta: {
      domains_present: domainsPresent,
      domains_missing: ALL_DOMAINS.filter(d => !domainsPresent.includes(d)),
      minimum_viable: requiredMet,   // per OQ-003 — true if alumni + aspiration both present
      profile_valid: requiredMet     // bypass rule: engine never throws; this flag tells the
                                      // caller whether the profile meets minimum viability.
                                      // A false value is NOT an error — synthesis/report layers
                                      // must still accept and use whatever signal IS present.
    }
  };
}

// ---------------------------------------------------------------------------
// Domain 1 — Alumni Signal
// ---------------------------------------------------------------------------
function extractAlumniSignal(text) {
  if (!hasContent(text)) {
    return nullSignal(["legacy_school", "network_activation_level", "emotional_valence", "implicit_standard"]);
  }
  return {
    legacy_school: null,              // NOTE: name-entity extraction is a Claude-call
    network_activation_level: null,   // responsibility upstream of this pure function —
    emotional_valence: null,          // this engine defines the OUTPUT SHAPE and confidence
    implicit_standard: null,          // scaffolding; field population is wired to the
    confidence: hasContent(text) ? "pending_extraction" : "no_data",
    source_present: true
  };
}

// ---------------------------------------------------------------------------
// Domain 2 — Professional Signal
// ---------------------------------------------------------------------------
function extractProfessionalSignal(text) {
  if (!hasContent(text)) {
    return nullSignal(["industry_naics", "career_origin", "network_density", "geographic_concentration"]);
  }
  return {
    industry_naics: null,
    career_origin: null,           // "chosen" | "inherited" | null
    network_density: null,         // "local" | "national" | "global" | null
    geographic_concentration: null,
    confidence: "pending_extraction",
    source_present: true
  };
}

// ---------------------------------------------------------------------------
// Domain 3 — Network Geography
// Per spec Section 4.3: this is synthesized across MULTIPLE domains, not just
// the dedicated network_geography transcript. Alumni and professional stories
// also surface city anchors ("my college roommate ended up in Denver").
// ---------------------------------------------------------------------------
function extractNetworkGeography(alumniText, professionalText, geoText) {
  const sourceTexts = [alumniText, professionalText, geoText].filter(hasContent);
  if (sourceTexts.length === 0) {
    return nullSignal(["anchor_cities", "distribution_score", "mobility_orientation"]);
  }
  return {
    anchor_cities: [],              // [{ city, weight, source_domain }] — populated upstream
    distribution_score: null,       // "local" | "national" | null
    mobility_orientation: null,     // "left_and_returned" | "left_and_stayed" | "never_left" | null
    confidence: "pending_extraction",
    source_present: true,
    source_domain_count: sourceTexts.length
  };
}

// ---------------------------------------------------------------------------
// Domain 5 — Aspiration Profile (required, per OQ-003)
// ---------------------------------------------------------------------------
function extractAspirationProfile(text) {
  if (!hasContent(text)) {
    return nullSignal(["vision_for_child", "prestige_sensitivity", "anxiety_taxonomy", "budget_tier", "debt_tolerance"]);
  }
  return {
    vision_for_child: null,
    prestige_sensitivity: null,     // low | medium | high | null
    anxiety_taxonomy: {              // primary/secondary anxiety sources — informs report ordering
      primary: null,
      secondary: null
    },
    budget_tier: null,               // feeds v5 wealth tier alignment
    debt_tolerance: null,
    financial_openness_score: null,
    confidence: "pending_extraction",
    source_present: true
  };
}

// ---------------------------------------------------------------------------
// Domain 6 — Child Perception
// divergence_flag is set downstream by Synthesis (needs student profile too) —
// this engine only stamps "pending_student_profile" since it cannot compare
// against data it doesn't have. Pure function contract: no reaching outside.
// ---------------------------------------------------------------------------
function extractChildPerception(text) {
  if (!hasContent(text)) {
    return nullSignal(["parent_description", "blind_spot_indicator"], { divergence_flag: "pending_student_profile" });
  }
  return {
    parent_description: null,
    blind_spot_indicator: null,     // what parent values that student hasn't mentioned
    divergence_flag: "pending_student_profile",  // resolved by Synthesis, never here
    confidence: "pending_extraction",
    source_present: true
  };
}

// ---------------------------------------------------------------------------
// Domain 7 — Hidden Constraints (closing question — free text, unstructured)
// ---------------------------------------------------------------------------
function extractHiddenConstraints(text) {
  if (!hasContent(text)) {
    return { items: [], source_present: false, confidence: "no_data" };
  }
  return {
    items: [],   // free-form list — caregiving, faith, geography, finances, other
    confidence: "pending_extraction",
    source_present: true
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function hasContent(text) {
  return typeof text === "string" && text.trim().length > 0;
}

function nullSignal(fields, extra = {}) {
  const base = { confidence: "no_data", source_present: false };
  fields.forEach(f => { base[f] = null; });
  return { ...base, ...extra };
}

function computeGlobalConfidence(domainsPresent, requiredMet) {
  if (!requiredMet) return "below_minimum";        // valid state, not an error — bypass rule
  const ratio = domainsPresent.length / ALL_DOMAINS.length;
  if (ratio >= 0.85) return "high";
  if (ratio >= 0.5) return "medium";
  return "low";
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------
