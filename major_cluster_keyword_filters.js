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
 *
 * UPDATE 2026-07-31 — BATCH 1: Journalism (NAICS 51) breadth fix.
 * Surveyed cluster names actually used under naics:51 across the LA,
 * NY/Boston/DC, and Manhattan Media pass files. NAICS 51 legitimately
 * covers journalism/publishing AND general information technology under
 * one federal code — a "Journalism" major with NAICS-only matching was
 * surfacing Google, Snap, Hulu, Amazon HQ2, cybersecurity firms, and cloud
 * infrastructure clusters alongside real journalism content (NYT, Bloomberg,
 * Condé Nast, Hearst). Filter keeps the journalism/media/publishing
 * clusters and drops the generic tech clusters.
 *
 * UPDATE 2026-07-31 — BATCH 3: Dance (NAICS 71) breadth fix.
 * Surveyed cluster names actually used under naics:71 across the LA and
 * NY/Boston/DC pass files. Confirmed real bleed: "Professional Sports
 * Business" (LA Rams team headquarters, 91302) is tagged naics:71 alongside
 * genuine arts/performing-arts content (Lincoln Center, Met Museum,
 * Guggenheim). A "Dance" major with NAICS-only matching was surfacing an
 * NFL front office. Filter keeps arts/culture/performing-arts clusters and
 * drops the sports-business cluster.
 */

const MAJOR_CLUSTER_KEYWORD_FILTERS = {
  "Political Science / Pre-Law": ["law", "legal", "lobbying", "policy"],
  "Marketing": ["advertising", "brand", "consumer", "marketing"],
  "Communications & Public Relations": ["advertising", "brand", "design", "creative", "communications"],
  "Management Consulting (Business)": ["consulting", "tax", "audit"],
  "Architecture": ["architecture", "design", "civil", "urban"],
  "Psychology": ["consulting"],
  "Industrial-Organizational Psychology": ["consulting"],
  // Human Resources Management: still deliberately unfiltered — see header
  "Journalism": ["journalism", "media", "publishing", "news", "broadcast"],
  "Dance": ["arts", "culture", "performing", "dance", "museum"]
};

if (typeof window !== 'undefined') {
  window.MAJOR_CLUSTER_KEYWORD_FILTERS = MAJOR_CLUSTER_KEYWORD_FILTERS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MAJOR_CLUSTER_KEYWORD_FILTERS };
}
