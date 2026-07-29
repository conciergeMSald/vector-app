/**
 * VECTOR Lifescape — Geographic Industry Intelligence Database
 * Pass 18: Manhattan — Journalism, Marketing/Advertising, Finance/Media
 * Version: 1.0 — 2026-07-27
 *
 * Adds specific, address-verified content in three areas the existing
 * NY_Boston_DC_pass4.js file only covered generically or not at all:
 *
 *   - Journalism, as its own distinct category: pass4's existing 10024
 *     entry lists "The New York Times (Midtown)" inside a broader,
 *     generic "Media, Publishing & Entertainment" cluster alongside
 *     "various publishing houses" — real, but thin, and not factually
 *     wrong (that entry's own distance field already models it as
 *     commuting-distance content, same pattern as Boeing under Seattle
 *     ZIPs elsewhere in this database). This pass adds NYT's real,
 *     specific address as its own entry, one tier more specific than
 *     what already existed.
 *   - Marketing & advertising: a genuine total gap. Nothing in the
 *     existing database represented this industry at all, despite New
 *     York being its historic and current global center.
 *   - Finance/media crossover (Bloomberg): distinct from pass4's existing
 *     Wall Street/investment-banking finance content — Bloomberg is a
 *     financial data/media company, a different real career pathway than
 *     either pure finance or pure journalism.
 *
 * MAJOR INDUSTRY EVENT, confirmed live and dated: Omnicom completed its
 * acquisition of The Interpublic Group of Companies (IPG) on November 26,
 * 2025 — the largest-ever takeover in advertising industry history,
 * forming the world's largest advertising/marketing holding company
 * (~$26B combined revenue). IPG no longer exists as an independent
 * company as of this date. Confirmed via Omnicom's own press release plus
 * independent trade press (PR Newswire, Campaign US, Ad Age), not assumed
 * from outdated general knowledge.
 *
 * Every employer below verified live (real-time web search) at build
 * time. Matches the verification standard established across this
 * session's other passes.
 */

const GEO_INDUSTRY_DB_MANHATTAN_MEDIA = {
  "10018": {
    zip: "10018",
    neighborhood: "Garment District / Times Square South",
    county: "New York",
    clusters: [
      {
        name: "Journalism & News Media",
        naics: 51,
        distance: "Local",
        anchor_employers: ["The New York Times Company (headquarters, 620 Eighth Avenue)"],
        student_connection: "The New York Times' actual headquarters building — not a generic Midtown reference — sits at 620 Eighth Avenue, between 40th and 41st Streets. A real, specific, walkable address for a student to understand what a global newsroom's physical home looks like, not an abstraction. Real journalism careers here span reporting, editing, investigative work, and increasingly data journalism and product roles supporting the paper's digital subscription business."
      }
    ]
  },
  "10022": {
    zip: "10022",
    neighborhood: "Midtown East",
    county: "New York",
    clusters: [
      {
        name: "Financial Data & Media",
        naics: 51,
        distance: "Local",
        anchor_employers: ["Bloomberg L.P. (global headquarters, 731 Lexington Avenue)"],
        student_connection: "Bloomberg's real headquarters tower sits at 731 Lexington Avenue — a genuine hybrid career pathway distinct from both pure Wall Street finance and pure journalism: Bloomberg terminals are the trading desk's essential real-time data infrastructure, while Bloomberg News is a genuine, competitive newsroom. A student here can see financial analysis, data engineering, and financial journalism as three real, different doors into the same real building."
      },
      {
        name: "Advertising & Marketing Holding Companies",
        naics: 54,
        distance: "Local",
        anchor_employers: ["Omnicom Group (headquarters, 437 Madison Avenue)"],
        student_connection: "Confirmed as of November 26, 2025: Omnicom completed its acquisition of The Interpublic Group (IPG), forming the largest advertising and marketing holding company in the world by revenue — the biggest consolidation in the industry's history, real and current, not historical Mad-Men-era Madison Avenue nostalgia. A student interested in advertising, brand strategy, or marketing sees a real, currently-unfolding story about industry consolidation, not just creative work — account management, media buying, data/analytics, and creative all exist inside a single holding company at genuinely massive scale."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_MANHATTAN_MEDIA = GEO_INDUSTRY_DB_MANHATTAN_MEDIA;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_MANHATTAN_MEDIA };
