/**
 * VECTOR Lifescape — Mega Region Database — futureResilience
 * File: megaRegionDB_futureResilience.js
 * Version: 1.0 — July 10, 2026
 *
 * PURPOSE: forward-looking score (0-100) per megaregion describing how durable
 * that region's economic advantages are likely to be. Per MEGAREGION-DB-006
 * Section 2.
 *
 * METHODOLOGY (two real, computed inputs, no invented numbers):
 *   1. industryDiversificationIndex — inverse Herfindahl-Hirschman Index computed
 *      from real 2023 Census County Business Patterns employment shares across
 *      19 NAICS sectors. Higher = more economically diversified = more resilient
 *      to a single-industry downturn. Standard regional-economics methodology.
 *   2. realGdpGrowth2025Pct — real GDP growth rate, BEA SASUMMARY 2025, averaged
 *      across each megaregion's member states.
 *   Both normalized to 0-100 via min-max scaling across the 11 megaregions (a
 *   transparent, real relative comparison -- not an arbitrary anchor point).
 *   Final score = round(0.6 * diversificationNormalized + 0.4 * growthNormalized).
 *   Diversification weighted higher as the more standard, structural resilience
 *   signal in regional economics literature; growth as a secondary momentum signal.
 *   This 0.6/0.4 weighting was formally approved by the product owner on
 *   2026-07-10 -- no longer a proposed default, treat as final.
 *
 * KNOWN LIMITATIONS (disclosed):
 *   1. Northern California, Southern California share IDENTICAL underlying state
 *      data (California is one state in both CBP and BEA sources) -- same
 *      disclosed limitation as careerEcosystemScores. Same for Texas Triangle vs
 *      Gulf Coast (Texas assigned entirely to Texas Triangle).
 *   2. This is a two-input model. Other real, defensible inputs exist (e.g.
 *      population growth, patent activity, venture capital flows) that could
 *      strengthen this score if added later -- this is a solid v1, not a final word.
 */

const MEGAREGION_FUTURE_RESILIENCE = {
  "Northeast": {
    "score": 49,
    "realGdpGrowth2025Pct": 1.67,
    "industryDiversificationIndex": 11.14,
    "growthNormalized": 18.1,
    "diversificationNormalized": 70.2
  },
  "Great Lakes": {
    "score": 48,
    "realGdpGrowth2025Pct": 1.68,
    "industryDiversificationIndex": 11.05,
    "growthNormalized": 19.0,
    "diversificationNormalized": 67.5
  },
  "Piedmont Atlantic": {
    "score": 70,
    "realGdpGrowth2025Pct": 2.36,
    "industryDiversificationIndex": 11.39,
    "growthNormalized": 57.7,
    "diversificationNormalized": 77.7
  },
  "Florida": {
    "score": 40,
    "realGdpGrowth2025Pct": 3.1,
    "industryDiversificationIndex": 8.79,
    "growthNormalized": 100.0,
    "diversificationNormalized": 0.0
  },
  "Gulf Coast": {
    "score": 27,
    "realGdpGrowth2025Pct": 1.35,
    "industryDiversificationIndex": 10.29,
    "growthNormalized": 0.0,
    "diversificationNormalized": 44.8
  },
  "Texas Triangle": {
    "score": 86,
    "realGdpGrowth2025Pct": 2.5,
    "industryDiversificationIndex": 12.12,
    "growthNormalized": 65.7,
    "diversificationNormalized": 99.7
  },
  "Front Range": {
    "score": 69,
    "realGdpGrowth2025Pct": 1.73,
    "industryDiversificationIndex": 12.13,
    "growthNormalized": 21.4,
    "diversificationNormalized": 100.0
  },
  "Arizona Sun Corridor": {
    "score": 63,
    "realGdpGrowth2025Pct": 2.0,
    "industryDiversificationIndex": 11.49,
    "growthNormalized": 37.1,
    "diversificationNormalized": 80.8
  },
  "Southern California": {
    "score": 86,
    "realGdpGrowth2025Pct": 2.5,
    "industryDiversificationIndex": 12.11,
    "growthNormalized": 65.7,
    "diversificationNormalized": 99.4
  },
  "Northern California": {
    "score": 86,
    "realGdpGrowth2025Pct": 2.5,
    "industryDiversificationIndex": 12.11,
    "growthNormalized": 65.7,
    "diversificationNormalized": 99.4
  },
  "Cascadia": {
    "score": 57,
    "realGdpGrowth2025Pct": 1.6,
    "industryDiversificationIndex": 11.63,
    "growthNormalized": 14.3,
    "diversificationNormalized": 84.8
  }
};


if (typeof window !== 'undefined') {
  window.MEGAREGION_FUTURE_RESILIENCE = MEGAREGION_FUTURE_RESILIENCE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MEGAREGION_FUTURE_RESILIENCE };
}
