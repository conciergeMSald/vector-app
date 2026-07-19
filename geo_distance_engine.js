/**
 * VECTOR Lifescape — Geo Distance Engine
 * Built 2026-07-19 to replace the hardcoded "within 60 miles" text in
 * renderQuickRead() (lifescape.html line 6834) and the stale, unenriched
 * geo_industry_db_LA_pass1.js data resolveZIP() was pulling from (the
 * "Revlon (manufacturing)" placeholder found repeated identically across
 * 4 different ZIP entries in that file -- never independently verified,
 * never updated with this session's real research).
 *
 * This file computes REAL great-circle distance (Haversine formula)
 * between a student's home ZIP and every anchor_employers_db.js company
 * with a known Southern California facility, then selects exactly 3
 * companies within a configurable radius (default 40 miles), diversified
 * across industries where possible, sorted nearest-first as a tiebreaker.
 *
 * COORDINATE SOURCE HONESTY: 9 of the 20 ZIPs below were independently
 * verified this session against simplemaps.com and/or codigo-postal.co
 * (marked CONFIRMED). The remaining 11 are high-confidence estimates from
 * general geographic knowledge of these specific, well-known Southern
 * California cities, consistent with the confirmed points -- not
 * independently re-verified against a primary source. If precision ever
 * matters at a finer grain than a mile or two, re-verify the ESTIMATED
 * entries before relying on them.
 */

'use strict';

// ZIP centroid coordinates (latitude, longitude) for every ZIP currently
// used as a company facility location in anchor_employers_db.js's
// Southern California entries.
const ZIP_COORDINATES = {
  '90230': { lat: 34.0211,   lng: -118.3965,   city: 'Culver City' },        // estimated
  '90245': { lat: 33.9192,   lng: -118.4165,   city: 'El Segundo' },         // estimated
  '90405': { lat: 34.0195,   lng: -118.4912,   city: 'Santa Monica' },       // estimated
  '91302': { lat: 34.141854, lng: -118.664103, city: 'Calabasas' },          // CONFIRMED simplemaps
  '91304': { lat: 34.199257, lng: -118.598280, city: 'Canoga Park' },        // CONFIRMED (91303, adjacent ZIP, same city)
  '91311': { lat: 34.258253, lng: -118.591357, city: 'Chatsworth' },         // CONFIRMED simplemaps
  '91320': { lat: 34.1858,   lng: -118.9151,   city: 'Newbury Park / Thousand Oaks' }, // estimated
  '91350': { lat: 34.4231,   lng: -118.5081,   city: 'Santa Clarita' },      // estimated
  '91352': { lat: 34.23183,  lng: -118.36596,  city: 'Sun Valley' },         // CONFIRMED simplemaps
  '91406': { lat: 34.19791,  lng: -118.48987,  city: 'Van Nuys' },           // CONFIRMED simplemaps
  '91605': { lat: 34.2011,   lng: -118.3765,   city: 'North Hollywood' },    // estimated
  '91706': { lat: 34.0854,   lng: -117.9609,   city: 'Baldwin Park' },       // estimated
  '92707': { lat: 33.7250,   lng: -117.8623,   city: 'Santa Ana' },          // estimated
  '92801': { lat: 33.8442,   lng: -117.9490,   city: 'Anaheim' },            // estimated
  '93010': { lat: 34.229830, lng: -119.074640, city: 'Camarillo' },          // CONFIRMED codigo-postal.co
  '93012': { lat: 34.205180, lng: -118.993090, city: 'Camarillo' },          // CONFIRMED simplemaps + burningcompass (2 sources agree)
  '93021': { lat: 34.2856,   lng: -118.8820,   city: 'Moorpark' },           // estimated
  '93033': { lat: 34.1858,   lng: -119.1770,   city: 'Oxnard' },             // estimated
  '93063': { lat: 34.309220, lng: -118.690410, city: 'Simi Valley' },        // CONFIRMED simplemaps
  '93065': { lat: 34.262060, lng: -118.771510, city: 'Simi Valley' },        // CONFIRMED simplemaps
};

// Maps each anchor_employers_db.js company's primary facility city (as it
// appears in facility_locations[].city_or_region) to its ZIP code.
const CITY_TO_ZIP = {
  'Culver City': '90230', 'El Segundo': '90245', 'Santa Monica': '90405',
  'Calabasas': '91302', 'Canoga Park': '91304', 'Chatsworth': '91311',
  'Santa Clarita': '91350', 'Sun Valley': '91352', 'Van Nuys': '91406',
  'North Hollywood': '91605', 'Baldwin Park': '91706', 'Santa Ana': '92707',
  'Anaheim': '92801', 'Camarillo': '93012', 'Moorpark': '93021',
  'Oxnard': '93033', 'Simi Valley': '93065',
};

/**
 * Real great-circle distance in miles between two lat/lng points.
 * Standard Haversine formula, Earth radius = 3959 miles.
 */
function haversineMiles(lat1, lng1, lat2, lng2) {
  const R = 3959;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

/**
 * Resolves a company (from ANCHOR_EMPLOYERS) to its ZIP and coordinates,
 * using its first facility_locations entry whose city matches CITY_TO_ZIP.
 * Returns null if the company has no known Southern California facility.
 */
function resolveCompanyZip(company) {
  for (const loc of company.facility_locations || []) {
    const zip = CITY_TO_ZIP[loc.city_or_region];
    if (zip && ZIP_COORDINATES[zip]) {
      return { zip, ...ZIP_COORDINATES[zip], locationNote: loc.function };
    }
  }
  return null;
}

/**
 * Finds up to `count` companies within `maxMiles` of `studentZip`,
 * diversified by NAICS code where possible (so 3 results don't all say
 * "cosmetics manufacturing"), sorted nearest-first among equally-relevant
 * picks. Returns real computed distances, not hardcoded text.
 *
 * @param {string} studentZip - the student's home ZIP
 * @param {Array} anchorEmployers - ANCHOR_EMPLOYERS array
 * @param {number} maxMiles - radius in miles (default 40)
 * @param {number} count - how many companies to return (default 3)
 * @returns {Array<{company, distanceMiles, hook}>}
 */
function findNearbyEmployers(studentZip, anchorEmployers, maxMiles = 40, count = 3) {
  const origin = ZIP_COORDINATES[studentZip];
  if (!origin) {
    return { found: false, reason: 'zip_not_in_coordinate_table', results: [] };
  }

  const candidates = [];
  for (const company of anchorEmployers) {
    const loc = resolveCompanyZip(company);
    if (!loc) continue;
    const distanceMiles = haversineMiles(origin.lat, origin.lng, loc.lat, loc.lng);
    if (distanceMiles <= maxMiles) {
      candidates.push({
        company,
        distanceMiles: Math.round(distanceMiles * 10) / 10,
        naics: company.naics,
        city: loc.city,
        locationNote: loc.locationNote,
      });
    }
  }

  candidates.sort((a, b) => a.distanceMiles - b.distanceMiles);

  // Diversify among genuinely nearby candidates only -- look within the
  // nearest 15 candidates (or all of them if fewer) for industry variety,
  // rather than reaching arbitrarily far away just to avoid repeating a
  // NAICS code. Proximity matters more than variety once "nearby" starts
  // to stretch toward the edge of the radius.
  const nearPool = candidates.slice(0, 15);
  const picked = [];
  const usedNaics = new Set();
  for (const c of nearPool) {
    if (picked.length >= count) break;
    if (!usedNaics.has(c.naics)) {
      picked.push(c);
      usedNaics.add(c.naics);
    }
  }
  // If the near pool didn't have enough distinct industries, fill
  // remaining slots with the nearest still-unpicked candidates from that
  // same near pool (allowing NAICS repeats) before ever reaching further out.
  if (picked.length < count) {
    for (const c of nearPool) {
      if (picked.length >= count) break;
      if (!picked.includes(c)) picked.push(c);
    }
  }
  // Only if the near pool itself has fewer than `count` total candidates
  // does this fall back to the full candidate list beyond 15.
  if (picked.length < count) {
    for (const c of candidates) {
      if (picked.length >= count) break;
      if (!picked.includes(c)) picked.push(c);
    }
  }
  picked.sort((a, b) => a.distanceMiles - b.distanceMiles);

  return {
    found: true,
    studentZip,
    studentCity: origin.city,
    totalWithinRadius: candidates.length,
    results: picked.map(c => ({
      name: c.company.company_name,
      city: c.city,
      distanceMiles: c.distanceMiles,
      hook: c.company.growth_initiative_note,
      focus: c.company.therapeutic_or_functional_focus,
      capabilityRoles: (c.company.capability_roles || []).map(r => r.role),
    })),
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ZIP_COORDINATES, CITY_TO_ZIP, haversineMiles, resolveCompanyZip, findNearbyEmployers };
}
if (typeof window !== 'undefined') {
  window.haversineMiles = haversineMiles;
  window.findNearbyEmployers = findNearbyEmployers;
  window.ZIP_COORDINATES = ZIP_COORDINATES;
}
