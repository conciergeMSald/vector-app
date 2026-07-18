/**
 * VECTOR Lifescape — GEO_INDUSTRY_DB_MIAMI (pass 12)
 * Built 2026-07-18, Chunk FL-A of the Florida mega region buildout —
 * closing a real gap: Florida had extensive REGIONAL_INTELLIGENCE and
 * anchor_employers_db coverage (UF Scripps, DifGen, Formulated Solutions,
 * FIS) but NO GEO_INDUSTRY_DB pass file at all, meaning none of that work
 * reached Possible Vectors or the local-area report section until now.
 *
 * ZIPs match geo_zip_to_megaregion.js (Florida megaregion / Miami subgroup).
 *
 * Medical Aesthetics is tagged naics:62 (medicine) per explicit direction —
 * framed as a distinct clinical/professional specialty (physicians, nurse
 * injectors, dermatologists), not generic consumer beauty. Routes to the
 * existing aestheticsAndBeauty V5 key.
 */

const GEO_INDUSTRY_DB_MIAMI = {
  "33132": {
    zip: "33132",
    neighborhood: "Downtown Miami / PortMiami",
    county: "Miami-Dade",
    clusters: [
      {
        name: "Global Cruise & Maritime Hospitality",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Royal Caribbean Group (headquarters, 1050 Caribbean Way)", "PortMiami"],
        student_connection: "Royal Caribbean Group's actual corporate headquarters sits at the same address as PortMiami itself — the cruise capital of the world. This is a genuinely global hospitality operation headquartered in one place: guest experience, fleet operations, itinerary planning, and destination development are all real, distinct career paths here, not just onboard service jobs."
      }
    ]
  },
  "33178": {
    zip: "33178",
    neighborhood: "Northwest Miami-Dade",
    county: "Miami-Dade",
    clusters: [
      {
        name: "Global Cruise & Maritime Hospitality",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Carnival Corporation (world headquarters)"],
        student_connection: "Carnival Corporation is the world's largest cruise company by a wide margin, and its actual global headquarters sits in this ZIP — not a regional office, the corporate center for the entire company across all its cruise brands worldwide."
      }
    ]
  },
  "33126": {
    zip: "33126",
    neighborhood: "West Miami / near Miami International Airport",
    county: "Miami-Dade",
    clusters: [
      {
        name: "Global Cruise & Maritime Hospitality",
        naics: 72,
        distance: "Local",
        anchor_employers: ["Norwegian Cruise Line Holdings (headquarters)"],
        student_connection: "The third of the world's three largest cruise companies headquartered in Miami — meaning a student interested in global hospitality, fleet logistics, or maritime tourism has three genuinely different, competing corporate cultures to consider without leaving one metro area."
      }
    ]
  },
  "33139": {
    zip: "33139",
    neighborhood: "Miami Beach",
    county: "Miami-Dade",
    clusters: [
      {
        name: "Medical Aesthetics & Beauty Industry (Trade/Commercial)",
        naics: 81,
        distance: "Local",
        anchor_employers: ["Cosmoprof North America Miami (Miami Beach Convention Center)"],
        student_connection: "Cosmoprof North America Miami is described as 'the leading B2B beauty trade show in the Americas' — its third Miami edition was held January 2026, drawing product manufacturers, distributors, and salon/spa industry professionals. This is the commercial/trade side of the beauty industry: sourcing, distribution, brand management, not clinical practice."
      }
    ]
  },
  "33180": {
    zip: "33180",
    neighborhood: "Aventura",
    county: "Miami-Dade",
    clusters: [
      {
        name: "Medical Aesthetics (Clinical/Professional)",
        naics: 62,
        distance: "Local",
        anchor_employers: ["AMWC Americas (JW Marriott Miami Turnberry Resort & Spa)"],
        student_connection: "AMWC Americas — the Aesthetic & Anti-Aging Medicine World Congress — just completed its 10th anniversary edition in Miami (February 2026), with programming on anatomy, ultrasound safety, and complication management for practicing physicians and nurse injectors. This is genuinely clinical, science-based medical education, not a consumer beauty event — a real, distinct specialty within medicine (dermatology, plastic surgery, aesthetic medicine) that Miami has become a real hub for."
      }
    ]
  }
};

if (typeof window !== 'undefined') window.GEO_INDUSTRY_DB_MIAMI = GEO_INDUSTRY_DB_MIAMI;
if (typeof module !== 'undefined' && module.exports) module.exports = { GEO_INDUSTRY_DB_MIAMI };
