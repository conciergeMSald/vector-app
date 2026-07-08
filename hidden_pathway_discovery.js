/**
 * HIDDEN PATHWAY DISCOVERY ENGINE
 * Built: July 2026, as Unlock #2 of the Scorecard/IPEDS data initiative.
 *
 * The method that surfaced LA Valley College's Biotech Bridge Academy,
 * automated: find institutions where completions in a specific CIP code
 * (major/program) are disproportionately high relative to institution
 * size. A high ratio signals a program that's a real, substantial part
 * of that school's identity — even if the school itself is small or
 * obscure — which is exactly the shape of a genuine hidden pathway.
 *
 * This is a DISCOVERY tool, not a live report-generation feature.
 * Output is a ranked candidate list for human review — it surfaces
 * "worth looking into," not "confirmed hidden pathway." Every candidate
 * still needs the same manual verification (real employer names, real
 * program details) that biomanufacturing got before it became a World.
 *
 * Usage:
 *   findHiddenPathways({
 *     cipCode: '4805',              // CIP family+subfamily, e.g. Welding = 4805
 *     apiKey: 'YOUR_KEY',
 *     minSize: 200,                  // ignore tiny schools (noisy ratios)
 *     maxSize: 20000,                // ignore huge schools (ratio dilutes to nothing)
 *     minAwards: 5,                  // ignore near-zero award counts (noise)
 *     perPage: 100
 *   })
 *   → returns a sorted array of { name, id, size, totalAwards, ratio }
 */

async function findHiddenPathways(opts) {
  const {
    cipCode,
    apiKey,
    minSize = 200,
    maxSize = 20000,
    minAwards = 5,
    perPage = 100,
    stateFilter = null, // optional 2-letter state code to scope the search
  } = opts;

  const baseUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json';
  const fields = [
    'id',
    'school.name',
    'school.city',
    'school.state',
    'latest.student.size',
    'latest.programs.cip_4_digit.code',
    'latest.programs.cip_4_digit.title',
    'latest.programs.cip_4_digit.counts.ipeds_awards1',
  ].join(',');

  let url = `${baseUrl}?latest.programs.cip_4_digit.code=${cipCode}&fields=${fields}&per_page=${perPage}&api_key=${apiKey}`;
  if (stateFilter) url += `&school.state=${stateFilter}`;

  const data = await fetch(url).then(r => r.json());
  const results = data.results || [];

  const candidates = [];
  for (const school of results) {
    const size = school['latest.student.size'];
    const name = school['school.name'];
    const id = school['id'];
    const state = school['school.state'];
    if (!size || size < minSize || size > maxSize) continue;

    // A school can have multiple credential-level entries for the same CIP
    // (certificate, associate's, bachelor's) — sum awards across all of them.
    const programs = school['latest.programs.cip_4_digit'];
    let totalAwards = 0;
    if (Array.isArray(programs)) {
      for (const p of programs) {
        const awards = p.counts && p.counts.ipeds_awards1;
        if (typeof awards === 'number') totalAwards += awards;
      }
    }
    if (totalAwards < minAwards) continue;

    const ratio = totalAwards / size;
    candidates.push({ name, id, state, size, totalAwards, ratio: Math.round(ratio * 10000) / 10000 });
  }

  candidates.sort((a, b) => b.ratio - a.ratio);
  return {
    cipCode,
    totalSchoolsInResponse: data.metadata ? data.metadata.total : results.length,
    candidatesReturned: candidates.length,
    topCandidates: candidates.slice(0, 15),
  };
}

if (typeof module !== 'undefined') module.exports = { findHiddenPathways };
