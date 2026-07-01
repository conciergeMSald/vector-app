/**
 * VECTOR Lifescape — College Prefs Name Alias Layer
 * Companion to lifescape_college_prefs_v3.js
 *
 * The v4.0 database (UNIVERSITY_DB_V5_MASTER_v4_0.js) uses fuller/differently-
 * punctuated school names than the 207-school preference-mapping pool in
 * lifescape_college_prefs_v3.js. Rather than editing name strings across
 * CONFERENCE_POOLS, REGION_POOLS, SCHOOL_ENROLLMENT, SOCIAL_SCENE_AFFINITY,
 * and SCHOOL_GPA_RANGES independently (risk of silently breaking internal
 * consistency between them), this alias layer normalizes a v4.0 name to
 * whatever string lifescape_college_prefs_v3.js already uses internally,
 * before any lookup into its pools.
 *
 * Usage: call normalizeToPrefsName(v4SchoolName) before passing a name into
 * any lifescape_college_prefs_v3.js function or lookup table.
 */
const COLLEGE_PREFS_NAME_ALIAS = {
  "Indiana University Bloomington":            "Indiana University",
  "University of Tennessee, Knoxville":        "University of Tennessee",
  "San José State University":                 "San Jose State University",
  "University of California, Santa Barbara":   "UC Santa Barbara",
  "University of California, San Diego":       "UC San Diego",
  "University of North Carolina at Chapel Hill": "University of North Carolina Chapel Hill",
};

function normalizeToPrefsName(v4Name) {
  return COLLEGE_PREFS_NAME_ALIAS[v4Name] || v4Name;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COLLEGE_PREFS_NAME_ALIAS, normalizeToPrefsName };
}
