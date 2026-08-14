// ============================================================================
// VECTOR — School name → slug lookup, single source of truth
//
// Why this exists instead of a slugify() transform: real institutional names
// don't collapse predictably to short slugs. "University of Colorado
// Boulder" naively slugifies to "university-of-colorado-boulder", not the
// "cu-boulder" convention actually used in alumni_network_seed_data.js — a
// real mismatch caught by test_alumni_network.js during Code-phase build.
// A lookup table makes the mapping explicit and reviewable instead of
// hoping a string transform happens to agree with itself everywhere.
//
// Both keys matter: V5_NAME must match UNIVERSITY_DB_V5_MASTER.js's own
// top-level key exactly (confirmed against the live file, not assumed —
// e.g. "Indiana University Bloomington", not "Indiana University").
// REPORT_NAME is the name as it's expected to appear inside a family's own
// report_data.schools.* — flagged as an ASSUMPTION below where not yet
// confirmed against a real report_data payload.
// ============================================================================

'use strict';

const SCHOOL_SLUG_MAP = [
  { slug: 'indiana-university', v5Name: 'Indiana University Bloomington', reportName: 'Indiana University' },
  { slug: 'vanderbilt', v5Name: 'Vanderbilt University', reportName: 'Vanderbilt University' },
  { slug: 'tulane', v5Name: 'Tulane University', reportName: 'Tulane University' },
  { slug: 'cu-boulder', v5Name: 'University of Colorado Boulder', reportName: 'University of Colorado Boulder' },
  { slug: 'elon', v5Name: 'Elon University', reportName: 'Elon University' },
  { slug: 'missouri', v5Name: 'University of Missouri', reportName: 'University of Missouri' },
  // Added for LA cohort expansion pass 2 (August 2026) — all four confirmed
  // against the live UNIVERSITY_DB_V5_MASTER.js, not assumed. Berkeley in
  // particular would have broken silently: the natural name is hyphenated
  // ("University of California-Berkeley"), not "UC Berkeley" or "Berkeley"
  // — exactly the mismatch class this file exists to catch.
  { slug: 'syracuse', v5Name: 'Syracuse University', reportName: 'Syracuse University' },
  { slug: 'nyu', v5Name: 'New York University', reportName: 'New York University' },
  { slug: 'berkeley', v5Name: 'University of California-Berkeley', reportName: 'University of California-Berkeley' },
  { slug: 'stanford', v5Name: 'Stanford University', reportName: 'Stanford University' },
];

const SLUG_BY_V5_NAME = Object.fromEntries(SCHOOL_SLUG_MAP.map((r) => [r.v5Name, r.slug]));
const SLUG_BY_REPORT_NAME = Object.fromEntries(SCHOOL_SLUG_MAP.map((r) => [r.reportName, r.slug]));
const V5_NAME_BY_SLUG = Object.fromEntries(SCHOOL_SLUG_MAP.map((r) => [r.slug, r.v5Name]));

/**
 * Resolves a school name as it might appear in a family's report_data to a
 * slug. Returns null (not a guess) if the name isn't in the map — an
 * unmapped school should be treated as "no alumni data available," never
 * silently matched via string transformation.
 *
 * ASSUMPTION FLAGGED: reportName values above assume report_data stores
 * school names matching V5's institutionNarrative.name field. Confirm
 * against a real report_data payload before this ships — if report_data
 * actually stores something else (e.g. a different display name), update
 * reportName here, not the calling code.
 */
function resolveSlugFromReportName(name) {
  return SLUG_BY_REPORT_NAME[name] || null;
}

if (typeof module !== 'undefined') {
  module.exports = {
    SCHOOL_SLUG_MAP,
    SLUG_BY_V5_NAME,
    SLUG_BY_REPORT_NAME,
    V5_NAME_BY_SLUG,
    resolveSlugFromReportName,
  };
}
