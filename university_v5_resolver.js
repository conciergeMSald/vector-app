/**
 * UNIVERSITY_DB_V5 Resolver
 * Single entry point for pulling school data into the report.
 *
 * Rule (per approved spec, Section 4, option C):
 *   - If a V5 entry exists, use it in full.
 *   - If not, fall back to university-content.js for the narrative fields
 *     (pipeline, hiddenPathway, theRoom, lifestyle, gradCities).
 *   - NEVER fabricate the 5 new numeric/structured features for a school
 *     that doesn't have real V5 data — those sections are simply omitted,
 *     not filled with guesses.
 *
 * Usage:
 *   const { getV5Profile } = require('./university_v5_resolver.js');
 *   const profile = getV5Profile('Arizona State University');
 *   profile.hasV5              -> true/false (does this school have full V5 data?)
 *   profile.narrative.*        -> always populated (V5 or fallback)
 *   profile.bigFiveProfile     -> null if hasV5 is false
 *   profile.hollandCodes       -> null if hasV5 is false
 *   profile.megaRegionExposure -> null if hasV5 is false
 *   profile.comparativePositioning -> null if hasV5 is false
 *   profile.hiddenOpportunities -> null if hasV5 is false
 *   profile.institutionScale   -> null if hasV5 is false
 */

const { UNIVERSITY_DB_V5 } = require('./UNIVERSITY_DB_V5_MASTER.js');
const { UNIVERSITY_CONTENT } = require('./university-content.js');

function getV5Profile(schoolName) {
  const v5 = UNIVERSITY_DB_V5[schoolName];

  if (v5) {
    const n = v5.institutionNarrative || {};
    return {
      name: schoolName,
      hasV5: true,
      narrative: {
        location: n.location || '',
        region: n.region || '',
        pipeline: n.pipeline || '',
        hiddenPathway: n.hiddenPathway || '',
        theRoom: n.theRoom || '',
        lifestyle: n.lifestyle || '',
        gradCities: n.gradCities || [],
      },
      // ── The 5 approved features — only present when hasV5 is true ──
      bigFiveProfile: (v5.studentFit && v5.studentFit.bigFiveProfile) || null,
      hollandCodes: (v5.studentFit && v5.studentFit.hollandCodes) || null,
      thrivesIf: (v5.studentFit && v5.studentFit.thrivesIf) || null,
      strugglesIf: (v5.studentFit && v5.studentFit.strugglesIf) || null,
      comparativePositioning: v5.comparativePositioning || null,
      hiddenOpportunities: v5.hiddenOpportunities || null,
      megaRegionExposure: v5.megaRegionExposure || null,
      institutionScale: v5.institutionScale || null,
    };
  }

  // ── Fallback: no V5 entry yet — use old DB, omit new features entirely ──
  const legacy = UNIVERSITY_CONTENT[schoolName];

  // Normalize gradCities to always be an array, regardless of source.
  // V5 stores it as an array; the legacy schema stores it as a single
  // pipe-delimited string like "Nashville TN (45%) | New York NY (20%) | ...".
  // Without this, callers get an array in one branch and a raw string in
  // the other, and any .map()/.join() on the result breaks unpredictably
  // depending on which school is being resolved.
  function normalizeGradCities(raw) {
    if (Array.isArray(raw)) return raw;
    if (typeof raw === 'string' && raw.trim()) {
      return raw.split('|').map(s => s.replace(/\(\d+%\)\.?/g, '').trim()).filter(Boolean);
    }
    return [];
  }

  return {
    name: schoolName,
    hasV5: false,
    narrative: legacy ? {
      location: legacy.location || '',
      region: legacy.region || '',
      pipeline: legacy.pipeline || '',
      hiddenPathway: legacy.hidden_pathway || '',
      theRoom: legacy.the_room || '',
      lifestyle: legacy.lifestyle || '',
      gradCities: normalizeGradCities(legacy.grad_cities),
    } : null,
    bigFiveProfile: null,
    hollandCodes: null,
    thrivesIf: null,
    strugglesIf: null,
    comparativePositioning: null,
    hiddenOpportunities: null,
    megaRegionExposure: null,
    institutionScale: null,
  };
}

if (typeof module !== 'undefined') module.exports = { getV5Profile };
