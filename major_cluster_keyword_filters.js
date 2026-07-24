/**
 * VECTOR Lifescape — MAJOR_CLUSTER_KEYWORD_FILTERS
 * Built 2026-07-12 to fix the NAICS 54 breadth bug found during the twins
 * end-to-end test: "Political Science / Pre-Law" was pulling in Genentech,
 * Gilead, and other biotech content because NAICS 54 ("Professional,
 * Scientific, and Technical Services") legitimately covers law, consulting,
 * AND scientific R&D under one federal code.
 *
 * Surveyed all 47 distinct cluster names actually used under naics:54
 * across the 6 built geo files before writing this — not guessed.
 *
 * HOW IT WORKS: for a major listed here, a cluster must match the NAICS
 * AND contain at least one of these keywords in its cluster name
 * (case-insensitive substring match) to be included. Majors NOT listed
 * here are unaffected — resolver falls back to NAICS-only matching,
 * exactly as before.
 *
 * ONE MAJOR STILL DELIBERATELY UNFILTERED, FLAGGED RATHER THAN FORCED:
 * Human Resources Management sits in NAICS 54 but none of the 47 surveyed
 * cluster names correspond to HR specifically (no "Talent," "People
 * Operations," or similar cluster exists anywhere in the built geo files).
 * Rather than write a keyword filter that would match nothing, or force a
 * bad-fit keyword, this major is left unfiltered for now — it shows the
 * same broad NAICS-54 content as before. Real, disclosed content gap, not
 * a quick fix.
 *
 * UPDATE 2026-07-12: Psychology and Industrial-Organizational Psychology
 * both re-homed into NAICS 54 after reading their actual authored content
 * (both are genuinely organizational/business psychology — Executive
 * Leadership, Talent Assessment, People Analytics — not clinical work).
 * Psychology's career_world was also corrected from 'healing' to 'power'
 * to match its real content. Psychology / Pre-Counseling (NAICS 62,
 * 'therapy') is the actual clinical-track major and was left untouched.
 */

const MAJOR_CLUSTER_KEYWORD_FILTERS = {
  "Political Science / Pre-Law": ["law", "legal", "lobbying", "policy"],
  "Marketing": ["advertising", "brand", "consumer", "marketing"],
  "Communications & Public Relations": ["advertising", "brand", "design", "creative", "communications"],
  "Management Consulting (Business)": ["consulting", "tax", "audit"],
  "Architecture": ["architecture", "design", "civil", "urban"],
  "Psychology": ["consulting"],
  "Industrial-Organizational Psychology": ["consulting"]
  // Human Resources Management: still deliberately unfiltered — see header
};

if (typeof window !== 'undefined') {
  window.MAJOR_CLUSTER_KEYWORD_FILTERS = MAJOR_CLUSTER_KEYWORD_FILTERS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MAJOR_CLUSTER_KEYWORD_FILTERS };
}
