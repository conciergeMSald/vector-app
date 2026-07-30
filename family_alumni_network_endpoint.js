// ============================================================================
// VECTOR — GET /family-alumni-network
// Per ALUMNI-NETWORK-ARCH-001 v1, Sections 3-5
//
// This is a reference implementation to wire into worker.js. It assumes two
// functions already exist there (per FAMILY-PORTAL-001 v2's identity
// resolution, reused here without modification):
//
//   resolveFamilyOrConsultantIdentity(request, env)
//     -> { kind: 'family' | 'consultant', familyAccountId, subscriptionStatus }
//     -> null if unresolved
//
//   getLatestReportDataForStudent(env, familyAccountId)
//     -> the report_data blob (same one GET /family-report reads), or null
//
// Neither is redefined here — this endpoint calls them, it does not
// reimplement identity resolution or the subscription gate. That reuse is
// the whole point of Section 3.
// ============================================================================

'use strict';

// ----------------------------------------------------------------------------
// Response allowlist — ARCH-001 Section 5. This is the ONLY set of fields
// this endpoint may ever return. Adding a new internal field to the schema
// does NOT make it visible here — it has to be added to this list on
// purpose, with a reviewed decision, the same way population_confidence and
// chapter_strength were deliberately kept OFF this list.
// ----------------------------------------------------------------------------
const FAMILY_ALLOWLIST_FIELDS = [
  'family_facing_summary',
  'chapter_name',
  'signature_pipeline_name',
  'signature_pipeline_description',
  'network_character',
  // neighborhood is handled separately below (from the joined geo_nodes rows)
];

function toAllowlistedResponse(alumniNetworkRow, geoNodeRows) {
  const out = {};
  for (const field of FAMILY_ALLOWLIST_FIELDS) {
    out[field] = alumniNetworkRow[field] ?? null;
  }
  // geo_nodes: name only, never relevance_notes (internal framing) unless
  // that note has been separately reviewed and rewritten in family-safe
  // language — not the case for any row in the initial LA cohort.
  out.neighborhoods = (geoNodeRows || []).map((n) => n.neighborhood);
  return out;
}

// Explicitly documented as NEVER returned, so a future edit doesn't
// accidentally widen the allowlist above without noticing what it's
// widening past:
//   population_confidence, chapter_strength, industry strength_rating,
//   population_source_note, engine_version, id values, population_low/high
//   as raw numbers (any number a family sees arrives only inside the
//   hedged prose of family_facing_summary itself).


const { resolveSlugFromReportName } = require('./alumni_school_slug_map.js');

// ----------------------------------------------------------------------------
// Authorization scoping — ARCH-001 Section 4. A family/consultant may only
// request alumni data for a school_slug that already appears somewhere in
// the resolved student's own report.
// ----------------------------------------------------------------------------
function schoolSlugIsInFamilyReport(schoolSlug, reportData) {
  if (!reportData || !reportData.schools) return false;
  const buckets = [
    'primary', 'adjacent', 'profileAdjacent', 'underTheRadar', 'sizeAdjacent', 'scenario',
  ];
  for (const bucket of buckets) {
    const list = reportData.schools[bucket];
    if (!Array.isArray(list)) continue;
    // Resolved via the shared lookup table (alumni_school_slug_map.js), not
    // a naive string transform — see that file for why a transform failed
    // during Code-phase testing (real names don't collapse predictably).
    if (list.some((entry) => resolveSlugFromReportName(entry.name || entry) === schoolSlug)) {
      return true;
    }
  }
  return false;
}


// ----------------------------------------------------------------------------
// Main handler
// ----------------------------------------------------------------------------
async function handleFamilyAlumniNetwork(request, env) {
  const url = new URL(request.url);
  const schoolSlug = url.searchParams.get('school_slug');

  if (!schoolSlug) {
    return jsonResponse({ error: 'school_slug is required' }, 400);
  }

  // Identity + subscription gate — REUSED, not reimplemented (Section 3).
  const identity = await resolveFamilyOrConsultantIdentity(request, env);
  if (!identity) {
    return jsonResponse({ error: 'Unable to resolve identity' }, 401);
  }
  const status = (identity.subscriptionStatus || '').trim().toLowerCase();
  if (status !== 'active' && status !== 'beta') {
    return jsonResponse({ error: 'Subscription inactive' }, 403);
  }

  // Authorization scoping (Section 4) — reject any school not already in
  // this student's own report.
  const reportData = await getLatestReportDataForStudent(env, identity.familyAccountId);
  if (!schoolSlugIsInFamilyReport(schoolSlug, reportData)) {
    return jsonResponse({ error: 'School not found in this report' }, 404);
  }

  // Lookup — single school, not a list (Section 3).
  const { data: networkRow, error: networkErr } = await env.SUPABASE
    .from('alumni_networks')
    .select('*')
    .eq('school_slug', schoolSlug)
    .eq('metro_area', 'Los Angeles') // LA test zone only, per ARCH-001 Section 0
    .maybeSingle();

  if (networkErr || !networkRow) {
    // Matches the existing "your Lifescape is being prepared" convention
    // from FAMILY-PORTAL-001 v2 Section 3 — not an error state for a
    // missing/not-yet-ingested school, just nothing to show yet.
    return jsonResponse({ available: false }, 200);
  }

  const { data: geoNodes } = await env.SUPABASE
    .from('alumni_network_geo_nodes')
    .select('neighborhood, relevance_notes')
    .eq('alumni_network_id', networkRow.id);

  const responseBody = {
    available: true,
    school_slug: schoolSlug, // safe to echo back — it's the requester's own input, not internal data
    ...toAllowlistedResponse(networkRow, geoNodes),
  };

  return jsonResponse(responseBody, 200);
}

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

if (typeof module !== 'undefined') {
  module.exports = {
    handleFamilyAlumniNetwork,
    toAllowlistedResponse,
    schoolSlugIsInFamilyReport,
    FAMILY_ALLOWLIST_FIELDS,
  };
}
