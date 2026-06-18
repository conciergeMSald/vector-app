// ── LIFESCAPE O*NET MAPPING LAYER ────────────────────────────────────────────
// Maps NAICS sector codes → grounded occupation titles + counselor intelligence
// Source: VECTOR.html career DB (verified, not model-generated)
// Consumer: buildCallBPrompt() + renderCounselorView()
// Version: 1.0 | Built: June 2026
// ─────────────────────────────────────────────────────────────────────────────

const NAICS_TO_ONET = {

  // NAICS 52 — Finance & Insurance
  52: {
    clusterName: 'Finance & Capital',
    metros: ['New York NY','Charlotte NC','Chicago IL'],
    riasecAffinity: ['C','E','I'],
    titles: [
      'Investment Banker',
      'Portfolio Manager',
      'Financial Analyst',
      'Quantitative Trader',
      'Venture Capital Analyst',
      'Private Equity Associate',
      'Family Office Advisor',
      'Wealth Manager'
    ],
    counselorPay: '$200K–$3M+ (varies by role and seniority)',
    counselorNote: 'Institutional proximity at the undergraduate level is the single highest-leverage variable in finance. Target school placement — Penn, Columbia, Chicago, NYU Stern — matters more here than almost any other field.'
  },

  // NAICS 51 — Information & Media / Technology
  51: {
    clusterName: 'Technology & Media',
    metros: ['San Francisco CA','Seattle WA','Austin TX'],
    riasecAffinity: ['I','R','A'],
    titles: [
      'Software Engineer',
      'Product Manager',
      'AI Research Scientist',
      'Chief Technology Officer',
      'Cybersecurity Analyst',
      'Data Scientist',
      'UX Designer',
      'Content Strategist'
    ],
    counselorPay: '$120K–$600K+ (FAANG staff engineer to CPO)',
    counselorNote: 'CS and engineering programs at research universities with strong recruiting pipelines to tech companies — CMU, Georgia Tech, UT Austin, UIUC, Cal Poly — outperform prestige alone. Portfolio matters as much as GPA.'
  },

  // NAICS 54 — Professional, Scientific & Technical Services
  54: {
    clusterName: 'Professional & Scientific Services',
    metros: ['Washington DC','Boston MA','San Francisco CA'],
    riasecAffinity: ['I','C','E'],
    titles: [
      'Management Consultant',
      'Data Scientist',
      'Research Scientist',
      'Policy Analyst',
      'Environmental Scientist',
      'Aerospace Engineer',
      'Biomedical Engineer',
      'UX Researcher'
    ],
    counselorPay: '$90K–$2M (research scientist to McKinsey partner)',
    counselorNote: 'This sector spans the widest pay range of any NAICS cluster. Specialization is the differentiator — a generalist consultant earns 30-40% less than one with deep sector expertise. Graduate degree ROI is highest in this cluster.'
  },

  // NAICS 62 — Health Care & Social Assistance
  62: {
    clusterName: 'Health Care',
    metros: ['Boston MA','Houston TX','Rochester MN'],
    riasecAffinity: ['S','I','R'],
    titles: [
      'Physician',
      'Nurse Practitioner',
      'Physician Assistant',
      'Physical Therapist',
      'Pharmacist',
      'CRNA',
      'Occupational Therapist',
      'Biomedical Engineer'
    ],
    counselorPay: '$70K–$900K+ (respiratory therapist to neurosurgeon)',
    counselorNote: 'Healthcare is the most credential-driven field in America. Path clarity matters enormously — a student who decides on PA school vs. medical school at 16 has a measurable advantage in undergraduate preparation and application timing.'
  },

  // NAICS 61 — Education
  61: {
    clusterName: 'Education & Public Service',
    metros: ['Washington DC','Boston MA','New York NY'],
    riasecAffinity: ['S','A','E'],
    titles: [
      'School Administrator',
      'Education Policy Director',
      'Nonprofit Executive Director',
      'City Manager',
      'Foreign Service Officer',
      'Chief Learning Officer',
      'Foundation Program Officer',
      'University Dean'
    ],
    counselorPay: '$55K–$500K (Foreign Service officer to school superintendent)',
    counselorNote: 'Education and public service careers are among the most mission-driven in the database. Network and institutional affiliation are the primary leverage points. DC policy track and urban education leadership have meaningfully different preparation paths.'
  },

  // NAICS 71 — Arts, Entertainment & Recreation
  71: {
    clusterName: 'Arts, Entertainment & Recreation',
    metros: ['Los Angeles CA','New York NY','Nashville TN'],
    riasecAffinity: ['A','E','S'],
    titles: [
      'Film Director',
      'Music Producer',
      'Creative Director',
      'Industrial Designer',
      'Architect',
      'Interior Designer',
      'Sports Manager',
      'Entertainment Attorney'
    ],
    counselorPay: '$80K–$20M+ (staff designer to studio film director)',
    counselorNote: 'Creative careers have the widest outcome variance of any field. Portfolio and output matter more than credentials after the first job. The school matters most for network access and early opportunity — USC film, RISD, Parsons, and Berklee have specific industry pipelines that generalist universities cannot replicate.'
  },

  // NAICS 23 — Construction / Architecture
  23: {
    clusterName: 'Architecture & Built Environment',
    metros: ['New York NY','Chicago IL','Los Angeles CA'],
    riasecAffinity: ['R','I','A'],
    titles: [
      'Architect',
      'Civil Engineer',
      'Structural Engineer',
      'Construction Manager',
      'Urban Planner',
      'Interior Designer',
      'Real Estate Developer',
      'Landscape Architect'
    ],
    counselorPay: '$70K–$5M+ (landscape architect to principal architect)',
    counselorNote: 'Architecture requires a 5-year B.Arch or 4+2 M.Arch path plus licensure — one of the longer credentialing timelines among creative fields. Engineering sub-tracks (civil, structural) have cleaner ROI and faster licensure. Real estate development is the entrepreneurial exit with the highest wealth ceiling.'
  },

  // NAICS 92 — Government & Public Administration
  92: {
    clusterName: 'Government & Civic Leadership',
    metros: ['Washington DC','Norfolk VA','San Antonio TX'],
    riasecAffinity: ['E','S','C'],
    titles: [
      'Foreign Service Officer',
      'Military Officer',
      'Intelligence Analyst',
      'FBI Special Agent',
      'City Manager',
      'State Legislator',
      'Federal Policy Analyst',
      'Judge Advocate (JAG)'
    ],
    counselorPay: '$55K–$280K (federal civilian to four-star general)',
    counselorNote: 'Military and government careers offer unmatched structural clarity — promotion timelines, retirement benefits, and advancement criteria are published and predictable. Service academy admission (West Point, Annapolis, Air Force) requires congressional nomination and is a distinct application process from standard college admissions.'
  },

  // NAICS 56 — Administrative & Support / Business Operations
  56: {
    clusterName: 'Business Operations & Strategy',
    metros: ['Chicago IL','Atlanta GA','Dallas TX'],
    riasecAffinity: ['E','C','S'],
    titles: [
      'Management Consultant',
      'Supply Chain Director',
      'Chief Human Resources Officer',
      'Brand Manager',
      'Operations Director',
      'Chief of Staff',
      'Business Development Manager',
      'Franchise Owner'
    ],
    counselorPay: '$80K–$500K+ (operations analyst to Fortune 500 CMO)',
    counselorNote: 'Business operations is the broadest cluster in the database — it is the destination for students whose profile is strong but not yet specialized. MBA programs (Wharton, Booth, Kellogg, Ross) are the traditional accelerant. Franchise ownership is the most underrated wealth-building path in this cluster.'
  },

  // NAICS 81 — Personal & Consumer Services / Entrepreneurship
  81: {
    clusterName: 'Entrepreneurship & Consumer Markets',
    metros: ['San Francisco CA','Austin TX','Miami FL'],
    riasecAffinity: ['E','A','R'],
    titles: [
      'Startup Founder',
      'E-Commerce Brand Founder',
      'Real Estate Developer',
      'Private Club Owner',
      'Digital Creator',
      'Brand Strategist',
      'Retail Buyer',
      'Consumer Insights Analyst'
    ],
    counselorPay: '$0–$1B+ (early-stage founder to serial entrepreneur exit)',
    counselorNote: 'Entrepreneurship has no credential gate and unlimited upside. The school matters for network access, not credentials. Students with this profile benefit from programs with strong entrepreneurship ecosystems — Babson, Northeastern co-op, Wharton, Indiana Kelley, and schools in startup-dense metros.'
  },

  // NAICS 72 — Food Service & Hospitality
  72: {
    clusterName: 'Hospitality & Experience Economy',
    metros: ['Orlando FL','Las Vegas NV','New York NY'],
    riasecAffinity: ['E','S','A'],
    titles: [
      'Hotel General Manager',
      'Restaurant Group Owner',
      'Event Director',
      'Hospitality Consultant',
      'Food & Beverage Director',
      'Travel Industry Executive',
      'Culinary Entrepreneur',
      'Private Club Manager'
    ],
    counselorPay: '$60K–$2M+ (food service manager to hospitality group owner)',
    counselorNote: 'Hospitality management programs (Cornell Hotel, UNLV, Johnson & Wales) have specific industry pipelines that general business programs do not. The wealth ceiling is in ownership — hotel operators, restaurant groups, and private club owners in premium markets earn 3-5x the employed equivalent.'
  },

  // NAICS 44/45 — Retail & Consumer Products
  44: {
    clusterName: 'Retail & Consumer Products',
    metros: ['New York NY','Minneapolis MN','Bentonville AR'],
    riasecAffinity: ['E','C','A'],
    titles: [
      'Brand Manager',
      'Retail Buyer',
      'Category Manager',
      'E-Commerce Director',
      'Consumer Insights Analyst',
      'Merchandise Planner',
      'DTC Brand Founder',
      'Luxury Retail Executive'
    ],
    counselorPay: '$70K–$500K+ (category analyst to CMO)',
    counselorNote: 'Retail and consumer products is undergoing a structural shift toward DTC and e-commerce. Students with this profile who combine business fundamentals with digital marketing and data skills are positioned for the growth segment of this industry.'
  },

  // NAICS 48/49 — Transportation & Logistics
  48: {
    clusterName: 'Transportation & Logistics',
    metros: ['Atlanta GA','Memphis TN','Dallas TX'],
    riasecAffinity: ['R','C','E'],
    titles: [
      'Commercial Pilot',
      'Logistics Director',
      'Supply Chain Manager',
      'Port Operations Director',
      'Aviation Safety Engineer',
      'Transportation Planner',
      'Fleet Manager',
      'Maritime Officer'
    ],
    counselorPay: '$75K–$350K (transportation planner to airline captain)',
    counselorNote: 'Aviation is experiencing a significant pilot shortage — commercial pilot pay has risen 40-60% since 2020. Embry-Riddle, Purdue, and UND are the primary aviation pipelines. Logistics and supply chain roles at Amazon, FedEx, and UPS now pay at technology company rates for quantitative candidates.'
  }

};

// ── getONETClusters ───────────────────────────────────────────────────────────
// Returns top 3 industry clusters with O*NET-grounded titles ranked by RIASEC fit
// @param naicsSectors  array of {sector, score} objects from getNAICSProfile()
// @param riasec        array of {code, score} objects from getRIASECProfile()
// @returns array of { naics, clusterName, titles[], counselorPay, counselorNote }

function getONETClusters(naicsSectors, riasec) {
  if (!naicsSectors || !naicsSectors.length) return [];

  // Top RIASEC codes for affinity ranking
  const topCodes = (riasec || []).slice(0, 3).map(r => r.code);

  return naicsSectors
    .slice(0, 3)
    .map(n => {
      // Normalize sector — handle 44/45 both mapping to 44
      const sectorKey = n.sector === 45 ? 44 : n.sector === 49 ? 48 : n.sector;
      const entry = NAICS_TO_ONET[sectorKey];
      if (!entry) return null;

      // Rank titles by RIASEC affinity match
      const hasAffinity = entry.riasecAffinity.some(c => topCodes.includes(c));
      const rankedTitles = hasAffinity
        ? entry.titles
        : [...entry.titles].reverse(); // low affinity — surface unexpected titles

      return {
        naics: sectorKey,
        clusterName: entry.clusterName,
        titles: rankedTitles.slice(0, 5),
        allTitles: entry.titles,
        counselorPay: entry.counselorPay,
        counselorNote: entry.counselorNote
      };
    })
    .filter(Boolean);
}

// ── buildONETPromptBlock ──────────────────────────────────────────────────────
// Returns the prompt injection string for buildCallBPrompt()
// Student-safe: titles only, no pay data, no market verdicts

function buildONETPromptBlock(naicsSectors, riasec) {
  const clusters = getONETClusters(naicsSectors, riasec);
  if (!clusters.length) return '';

  const lines = clusters.map(c =>
    `${c.clusterName}: ${c.titles.join(', ')}`
  ).join('\n');

  return `\n── OCCUPATION INTELLIGENCE ──\nUse these grounded occupation titles when writing the CAREERS line for each industry cluster. Select the 3-5 most resonant given the student\'s tiles. Do not invent titles outside this list.\n${lines}\n`;
}

// ── buildONETCounselorBlock ───────────────────────────────────────────────────
// Returns structured HTML for the counselor view occupation section
// Counselor-only: includes pay ranges and market intelligence notes

function buildONETCounselorBlock(naicsSectors, riasec, studentName) {
  const clusters = getONETClusters(naicsSectors, riasec);
  if (!clusters.length) return '';

  const name = studentName || 'This student';

  return clusters.map(c => `
    <div style="margin-bottom:1.25rem;padding:1rem 1.25rem;border:0.5px solid var(--rule);background:var(--white);">
      <div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:.5rem;">${c.clusterName}</div>
      <div style="font-size:14px;color:var(--ink);margin-bottom:.5rem;font-weight:400;">${c.titles.join(' · ')}</div>
      <div style="font-size:12px;color:var(--ink3);margin-bottom:.4rem;font-weight:300;"><strong style="color:var(--ink4);">Pay range:</strong> ${c.counselorPay}</div>
      <div style="font-size:12px;color:var(--ink3);font-weight:300;line-height:1.6;"><strong style="color:var(--ink4);">Counselor note:</strong> ${c.counselorNote}</div>
    </div>
  `).join('');
}

// ── getCareerMetroMatch ────────────────────────────────────────────────────────
// The Richard Florida layer: connects a student's career cluster to the metros
// where that industry actually concentrates, then checks which of the student's
// matched schools genuinely feed those metros — using each school's REAL grad
// city data (getTopGradCities), not assumption.
//
// Normalizes on metro CORE NAME + STATE (e.g. "Boston" + "MA") rather than exact
// string match, since real grad_cities data has legitimate variation
// ("Boston MA" vs "Boston-Cambridge MA" vs "Boston-Cambridge-Newton MA").
//
// @param naicsSectors   student's NAICS profile [{sector, score}]
// @param riasec         student's RIASEC profile [{code, score}]
// @param matchedSchools array of school name strings already matched for this student
// @returns { topCluster, targetMetros, schoolFit: [{school, feedsMetro, pct, metro}] }

function _metroCore(cityString) {
  // Extract the leading city name token(s) before the trailing state code,
  // strip hyphenated metro extensions, lowercase for comparison
  const m = cityString.match(/^([A-Za-z\s]+?)(?:-[A-Za-z\s]+)*\s+([A-Z]{2})$/);
  if (!m) return null;
  const core = m[1].trim().split(/\s+/)[0].toLowerCase(); // first word of city name
  const state = m[2];
  return { core, state, full: cityString };
}

function getCareerMetroMatch(naicsSectors, riasec, matchedSchools) {
  const clusters = getONETClusters(naicsSectors, riasec);
  if (!clusters.length || !matchedSchools || !matchedSchools.length) {
    return { topCluster: null, targetMetros: [], schoolFit: [] };
  }

  // Top cluster drives the metro target — strongest signal
  const topClusterRaw = naicsSectors && naicsSectors[0]
    ? (typeof NAICS_TO_ONET !== 'undefined' ? NAICS_TO_ONET[naicsSectors[0].sector] : null)
    : null;
  const targetMetros = (topClusterRaw && topClusterRaw.metros) ? topClusterRaw.metros : [];
  const targetCores = targetMetros.map(_metroCore).filter(Boolean);

  // A school "feeds" a target metro only if concentration is meaningful (15%+),
  // not just present — an 8% trickle isn't the same signal as a 65% pipeline
  const MEANINGFUL_CONCENTRATION = 15;

  const schoolFit = matchedSchools.map(school => {
    const gradCities = (typeof getTopGradCities === 'function') ? getTopGradCities(school) : [];
    let bestMatch = null;
    for (const gc of gradCities) {
      const gcCore = _metroCore(gc.city);
      if (!gcCore) continue;
      const hit = targetCores.find(tc => tc.core === gcCore.core && tc.state === gcCore.state);
      if (hit && gc.pct >= MEANINGFUL_CONCENTRATION && (!bestMatch || gc.pct > bestMatch.pct)) {
        bestMatch = { city: gc.city, pct: gc.pct };
      }
    }
    return {
      school,
      feedsMetro: !!bestMatch,
      metro: bestMatch ? bestMatch.city : null,
      pct: bestMatch ? bestMatch.pct : null
    };
  });

  return {
    topCluster: clusters[0] ? clusters[0].clusterName : null,
    targetMetros,
    schoolFit
  };
}

