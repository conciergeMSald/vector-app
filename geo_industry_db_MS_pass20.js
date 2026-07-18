/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_MS (pass 20)
 * Built 2026-07-18, fourth and final state of the Southeast-completion
 * batch (SC/AR/LA/MS) -- and the state I flagged upfront as my weakest
 * lead, turned out to have two of the best-corroborated single facts in
 * this entire round.
 *
 * ZIPs match geo_zip_to_megaregion.js.
 */

const GEO_INDUSTRY_DB_MS = {
  "39567": {
    zip: "39567",
    neighborhood: "Pascagoula",
    county: "Jackson",
    clusters: [
      {
        name: "Defense Shipbuilding",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Ingalls Shipbuilding (Huntington Ingalls Industries)"],
        student_connection: "Ingalls Shipbuilding is the largest private employer in the entire state of Mississippi (confirmed via Wikipedia, 2023) — 11,000-11,500 employees building actual amphibious ships and destroyers for the U.S. Navy. A genuinely major national defense-industrial anchor most people would never think to associate with Mississippi specifically."
      }
    ]
  },
  "39046": {
    zip: "39046",
    neighborhood: "Canton",
    county: "Madison",
    clusters: [
      {
        name: "Automotive Manufacturing",
        naics: 33,
        distance: "Local",
        anchor_employers: ["Nissan North America (Canton Vehicle Assembly Plant)"],
        student_connection: "Nissan's Canton plant produces the Altima and Frontier — confirmed directly via Nissan's own global corporate site, 10,000-14,999 employees. Real automotive manufacturing careers alongside Mississippi's defense-shipbuilding identity, giving the state genuine industrial diversity rather than a single dominant employer."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_MS = GEO_INDUSTRY_DB_MS;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_MS };
