/**
 * VECTOR Cloudflare Worker
 * Domain: api.abettercollegeconsultant.com
 *
 * Auth: Supabase JWT verification using ECDSA P-256 public key
 *
 * Routes:
 *   POST /v1/messages         — Claude API proxy
 *   POST /save-family         — Save family report to Supabase
 *   GET  /consultant-me       — Get/create consultant record (Supabase JWT required)
 *   GET  /consultant-families — Get families for consultant (Supabase JWT required)
 *   POST /create-checkout     — Create Stripe checkout session (Supabase JWT required)
 *   POST /stripe-webhook      — Stripe webhook (signature verified)
 *   POST /cc-override         — Consultant CC pathway override (consolidated)
 *   POST /save-session        — Save session to Airtable
 *   GET  /scorecard-schools   — Fetch + cache College Scorecard filtered institution list
 *   GET  /scorecard-status    — Check KV cache health and record count
 *   POST /parent-session      — Parent Agent: receive transcript, extract signals, persist
 *
 * REMOVED: /update-family-cc — consolidated into /cc-override (July 2026)
 *
 * Secrets required:
 *   ANTHROPIC_API_KEY
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_KEY
 *   STRIPE_SECRET_KEY
 *   STRIPE_WEBHOOK_SECRET
 *   SCORECARD_API_KEY
 *
 * KV Namespaces required:
 *   SCORECARD_CACHE
 *
 * Changelog:
 *   July 2026 — Billing fix: plan_key routing replaces hardcoded tier fallback.
 *               /update-family-cc consolidated into /cc-override.
 *               Entitlement snapshot written on checkout.session.completed.
 *   July 2026 — Parent Agent Phase 1: /parent-session route added.
 */

import { callF } from './parent-signal-callF.js';
import { extractParentSignals } from './parent-signal-engine.js';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const STRIPE_PRICE_MAP = {
  consultant_beta: 'price_1ToU3BGGKZNoACrKdePYFirn',
  family_monthly:  'price_1TjldoGGKZNoACrKQs7pLAsI',
};

const PLAN_ENTITLEMENTS = {
  consultant_beta: {
    max_active_families: 10,
    white_label:         false,
    priority_support:    true,
    plan_label:          'Beta Test',
  },
  family_monthly: {
    max_active_families: null,
    plan_label:          'Family Monthly',
  },
};

const SCORECARD_BASE_URL    = 'https://api.data.gov/ed/collegescorecard/v1/schools';
const SCORECARD_CACHE_KEY   = 'scorecard_institutions_v1';
const SCORECARD_TTL_SECONDS = 7 * 24 * 60 * 60;

const SCORECARD_FIELDS = [
  'id', 'school.name', 'school.state', 'school.city', 'school.ownership',
  'school.locale', 'school.institutional_characteristics.level',
  'latest.student.size', 'latest.admissions.admission_rate.overall',
  'latest.admissions.sat_scores.midpoint.critical_reading',
  'latest.admissions.sat_scores.midpoint.math',
  'latest.completion.rate_suppressed.overall',
  'latest.cost.tuition.in_state', 'latest.cost.tuition.out_of_state',
  'latest.cost.avg_net_price.public', 'latest.cost.avg_net_price.private',
  'latest.cost.net_price.public.by_income_level.0-30000',
  'latest.cost.net_price.public.by_income_level.30001-48000',
  'latest.cost.net_price.public.by_income_level.48001-75000',
  'latest.cost.net_price.public.by_income_level.75001-110000',
  'latest.cost.net_price.public.by_income_level.110001-plus',
  'latest.cost.net_price.private.by_income_level.0-30000',
  'latest.cost.net_price.private.by_income_level.48001-75000',
  'latest.cost.net_price.private.by_income_level.75001-110000',
  'latest.cost.net_price.private.by_income_level.110001-plus',
  'latest.aid.pell_grant_rate', 'latest.aid.median_debt.completers.overall',
  'latest.aid.median_debt.completers.monthly_payments',
  'latest.repayment.1_yr_repayment.completers',
  'latest.earnings.6_yrs_after_entry.median',
  'latest.earnings.10_yrs_after_entry.median',
  'latest.student.retention_rate.four_year.full_time',
  'latest.student.pell_grant_rate', 'latest.student.first_generation',
  'latest.school.faculty_salary',
].join(',');

const SCORECARD_FILTERS = {
  'school.degrees_awarded.predominant':                    '3',
  'school.ownership':                                      '1,2',
  'school.online_only':                                    '0',
  'latest.student.size__range':                            '500..',
  'latest.completion.rate_suppressed.overall__range':      '0.35..',
  'latest.earnings.6_yrs_after_entry.median__range':       '1..',
};

const SUPABASE_JWKS = {
  keys: [{
    x: 'SumCNm3dSvzT7P22zQUwR1cHyWKp7i-7ex0JZStodvU',
    y: 'EBeeVe8dKJc6eBUbc_kziWzAnOiSTEwNO_oSewOG0yg',
    alg: 'ES256', crv: 'P-256', ext: true,
    kid: '59fe74eb-a849-4b16-9300-8b1581b9efc4',
    kty: 'EC', key_ops: ['verify'],
  }]
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url  = new URL(request.url);
    const path = url.pathname;

    try {
      if (path === '/v1/messages'         && request.method === 'POST') return await handleClaudeProxy(request, env);
      if (path === '/save-family'         && request.method === 'POST') return await handleSaveFamily(request, env);
      if (path === '/consultant-me'       && request.method === 'GET')  return await handleConsultantMe(request, env);
      if (path === '/consultant-families' && request.method === 'GET')  return await handleConsultantFamilies(request, env);
      if (path === '/create-checkout'     && request.method === 'POST') return await handleCreateCheckout(request, env);
      if (path === '/stripe-webhook'      && request.method === 'POST') return await handleStripeWebhook(request, env);
      if (path === '/cc-override'         && request.method === 'POST') return await handleCCOverride(request, env);
      if (path === '/save-session'        && request.method === 'POST') return await handleSaveSession(request, env);
      if (path === '/validate-invite-code' && request.method === 'POST') return await handleValidateInviteCode(request, env);

      // ── Parent Agent Phase 1 ──────────────────────────────────────────────
      if (path === '/parent-session'      && request.method === 'POST') return await handleParentSession(request, env);

      // ── Operational table routes ──────────────────────────────────────────
      if (path === '/key-dates'            && request.method === 'GET')  return await handleKeyDates(request, env, 'GET');
      if (path === '/key-dates'            && request.method === 'POST') return await handleKeyDates(request, env, 'POST');
      if (path === '/school-priority'      && request.method === 'GET')  return await handleSchoolPriority(request, env, 'GET');
      if (path === '/school-priority'      && request.method === 'POST') return await handleSchoolPriority(request, env, 'POST');
      if (path === '/school-priority'      && request.method === 'PATCH') return await handleSchoolPriority(request, env, 'PATCH');
      if (path === '/school-requirements'  && request.method === 'GET')  return await handleSchoolRequirements(request, env, 'GET');
      if (path === '/school-requirements'  && request.method === 'POST') return await handleSchoolRequirements(request, env, 'POST');
      if (path === '/school-requirements'  && request.method === 'PATCH') return await handleSchoolRequirements(request, env, 'PATCH');

      if (path === '/scorecard-schools'   && request.method === 'GET')  return await handleScorecardSchools(request, env);
      if (path === '/scorecard-status'    && request.method === 'GET')  return await handleScorecardStatus(request, env);

      if (path === '/update-family-cc'    && request.method === 'POST') {
        console.warn('[VECTOR Worker] /update-family-cc is deprecated — use /cc-override');
        return await handleCCOverride(request, env);
      }

      return jsonResponse({ error: 'Not found' }, 404);
    } catch (err) {
      console.error('[VECTOR Worker] Unhandled error:', err);
      return jsonResponse({ error: 'Internal server error', detail: err.message }, 500);
    }
  }
};

async function handleClaudeProxy(request, env) {
  const body     = await request.text();
  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method:  'POST',
    headers: {
      'Content-Type':      'application/json',
      'x-api-key':         env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body,
  });
  const responseBody = await upstream.text();
  return new Response(responseBody, {
    status:  upstream.status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

async function handleSaveFamily(request, env) {
  let payload;
  try { payload = await request.json(); }
  catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }

  const record = {
    email:             payload.email             || null,
    zip:               payload.zip               || null,
    gpa:               payload.gpa               || null,
    vector_score:      payload.vector_score       || null,
    career:            payload.top_career         || null,
    report_text:       payload.report_text        || null,
    consultant_code:   payload.consultant_code    || null,
    cc_pathway_shown:  payload.cc_pathway_shown   || 'N',
    consent_obtained:  payload.consent_obtained   || false,
    consent_timestamp: payload.consent_timestamp  || null,
    created_at:        new Date().toISOString(),
  };

  const res = await supabaseInsert(env, 'families', record);
  if (!res.ok) {
    const err = await res.text();
    console.error('[VECTOR Worker] Supabase insert error:', err);
    return jsonResponse({ error: 'Database write failed', detail: err }, 500);
  }

  if (payload.consultant_code) {
    const consultant = await supabaseFetchOne(env, 'consultants',
      'access_code=eq.' + payload.consultant_code);
    if (consultant) {
      const insertedFamily = await supabaseFetchOne(env, 'families',
        'session_id=eq.' + (payload.session_id || '') + '&order=created_at.desc');
      if (insertedFamily) {
        await supabaseInsert(env, 'client_activities', {
          consultant_id: consultant.id,
          family_id:     insertedFamily.id,
          activity_type: 'intake_completed',
          title:         'Family assessment submitted',
          created_at:    new Date().toISOString(),
        });
      }
    }
  }

  return jsonResponse({ success: true });
}

async function handleConsultantMe(request, env) {
  const userId = await verifySupabaseJWT(request);
  if (!userId) return jsonResponse({ error: 'Unauthorized' }, 401);

  let consultant = await supabaseFetchOne(env, 'consultants', 'clerk_user_id=eq.' + userId);

  if (!consultant) {
    const newRecord = {
      clerk_user_id:    userId,
      subscription_status: 'inactive',
      tier:                'standard',
      access_code:         generateAccessCode(),
      created_at:          new Date().toISOString(),
    };
    const insertRes = await supabaseInsert(env, 'consultants', newRecord);
    if (!insertRes.ok) return jsonResponse({ error: 'Failed to create consultant record' }, 500);
    consultant = newRecord;
  }

  return jsonResponse(consultant);
}

async function handleConsultantFamilies(request, env) {
  const userId = await verifySupabaseJWT(request);
  if (!userId) return jsonResponse({ error: 'Unauthorized' }, 401);

  const consultant = await supabaseFetchOne(env, 'consultants', 'clerk_user_id=eq.' + userId);
  if (!consultant) return jsonResponse({ error: 'Consultant not found' }, 404);

  const families = await supabaseFetchMany(
    env, 'families',
    'consultant_code=eq.' + consultant.access_code + '&order=created_at.desc'
  );
  return jsonResponse({ families: families || [] });
}

async function handleCreateCheckout(request, env) {
  const userId = await verifySupabaseJWT(request);
  if (!userId) return jsonResponse({ error: 'Unauthorized' }, 401);

  const consultant = await supabaseFetchOne(env, 'consultants', 'clerk_user_id=eq.' + userId);
  if (!consultant) return jsonResponse({ error: 'Consultant not found' }, 404);

  let body;
  try { body = await request.json(); } catch { body = {}; }

  const planKey = body.plan_key || null;
  const priceId = planKey
    ? STRIPE_PRICE_MAP[planKey]
    : (body.price_id || null);

  if (!priceId) {
    return jsonResponse({
      error:   'Invalid plan_key. Send { plan_key: "consultant_beta" } or { plan_key: "family_monthly" }',
      valid:   Object.keys(STRIPE_PRICE_MAP),
    }, 400);
  }

  const successUrl = 'https://abettercollegeconsultant.com/consultant-portal.html?checkout=success';
  const cancelUrl  = 'https://abettercollegeconsultant.com/consultant-portal.html?checkout=cancel';

  const params = new URLSearchParams({
    'payment_method_types[]':     'card',
    'mode':                       'subscription',
    'line_items[0][price]':       priceId,
    'line_items[0][quantity]':    '1',
    'success_url':                successUrl,
    'cancel_url':                 cancelUrl,
    'client_reference_id':        userId,
    'customer_email':             consultant.email || '',
    'metadata[consultant_id]':    String(consultant.id || ''),
    'metadata[clerk_user_id]': userId,
    'metadata[plan_key]':         planKey || '',
  });

  const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method:  'POST',
    headers: {
      'Authorization': 'Bearer ' + env.STRIPE_SECRET_KEY,
      'Content-Type':  'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!stripeRes.ok) {
    const err = await stripeRes.text();
    console.error('[VECTOR Worker] Stripe error:', err);
    return jsonResponse({ error: 'Stripe checkout failed', detail: err }, 500);
  }

  const session = await stripeRes.json();
  return jsonResponse({ url: session.url });
}

async function handleStripeWebhook(request, env) {
  const signature = request.headers.get('stripe-signature');
  const rawBody   = await request.arrayBuffer();

  const isValid = await verifyStripeSignature(rawBody, signature, env.STRIPE_WEBHOOK_SECRET);
  if (!isValid) {
    console.error('[VECTOR Worker] Stripe webhook signature invalid');
    return new Response('Webhook signature invalid', { status: 400 });
  }

  const event = JSON.parse(new TextDecoder().decode(rawBody));

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId  = session.metadata && session.metadata.clerk_user_id;
    const planKey = session.metadata && session.metadata.plan_key;

    if (userId) {
      const entitlements = (planKey && PLAN_ENTITLEMENTS[planKey])
        ? PLAN_ENTITLEMENTS[planKey]
        : {};

      await supabaseUpdate(env, 'consultants', 'clerk_user_id=eq.' + userId, {
        subscription_status: 'active',
        stripe_customer_id:  session.customer,
        entitlements:        JSON.stringify(entitlements),
      });

      console.log('[VECTOR Worker] Subscription activated:', userId, planKey);
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const customerId = event.data.object.customer;
    await supabaseUpdate(env, 'consultants', 'stripe_customer_id=eq.' + customerId, {
      subscription_status: 'inactive',
    });
  }

  return new Response('OK', { status: 200 });
}

async function handleCCOverride(request, env) {
  const userId = await verifySupabaseJWT(request);
  if (!userId) return jsonResponse({ error: 'Unauthorized' }, 401);

  let payload;
  try { payload = await request.json(); }
  catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }

  const { family_id, cc_override_name, cc_override_target, cc_override_city } = payload;
  if (!family_id) return jsonResponse({ error: 'family_id required' }, 400);

  const consultant = await supabaseFetchOne(env, 'consultants', 'clerk_user_id=eq.' + userId);
  if (!consultant) return jsonResponse({ error: 'Consultant not found' }, 404);

  const family = await supabaseFetchOne(env, 'families',
    'id=eq.' + family_id + '&consultant_code=eq.' + consultant.access_code);
  if (!family) return jsonResponse({ error: 'Family not found or not authorized' }, 404);

  const updates = {
    cc_pathway_shown:   'Y',
    cc_override_name:   cc_override_name   || null,
    cc_override_target: cc_override_target || null,
    cc_override_city:   cc_override_city   || null,
    cc_override_by:     userId,
    cc_override_at:     new Date().toISOString(),
  };

  const res = await supabaseUpdate(env, 'families', 'id=eq.' + family_id, updates);
  if (!res.ok) {
    const err = await res.text();
    console.error('[VECTOR Worker] CC override error:', err);
    return jsonResponse({ error: 'Update failed', detail: err }, 500);
  }
  return jsonResponse({ success: true, updates });
}

async function handleValidateInviteCode(request, env) {
  let payload;
  try { payload = await request.json(); }
  catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }

  const code = (payload.code || '').trim().toUpperCase();
  if (!code) return jsonResponse({ valid: false, reason: 'no_code' }, 400);

  const record = await supabaseFetchOne(env, 'invite_codes',
    'code=eq.' + code + '&status=eq.active');

  if (!record) {
    return jsonResponse({ valid: false, reason: 'invalid_code' }, 200);
  }

  if (record.expires_at && new Date(record.expires_at) < new Date()) {
    return jsonResponse({ valid: false, reason: 'expired' }, 200);
  }

  if (record.max_uses !== 999 && record.uses_count >= record.max_uses) {
    return jsonResponse({ valid: false, reason: 'exhausted' }, 200);
  }

  await supabaseUpdate(env, 'invite_codes', 'id=eq.' + record.id, {
    uses_count: (record.uses_count || 0) + 1,
    redeemed_at: new Date().toISOString(),
  });

  let consultantName = null;
  if (record.consultant_id) {
    const consultant = await supabaseFetchOne(env, 'consultants', 'id=eq.' + record.consultant_id);
    if (consultant) consultantName = consultant.first_name || null;
  }

  return jsonResponse({
    valid:                  true,
    code_type:              record.code_type,
    invited_role:           record.invited_role || 'family',
    personalization_context: record.personalization_context || {},
    consultant_name:        consultantName,
  });
}

// ── Parent Agent — /parent-session ────────────────────────────────────────────
// InterviewService single write entry point for Parent Agent data.
// Flow: transcript in → callF (Claude extraction) → extractParentSignals
//       (pure fn) → Supabase write. Bypass rule applies throughout —
//       thin or empty transcripts still produce a valid, non-error write.
async function handleParentSession(request, env) {
  let payload;
  try { payload = await request.json(); }
  catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }

  const { family_member_id, parent_first_name, transcriptByDomain } = payload;
  if (!family_member_id) {
    return jsonResponse({ error: 'family_member_id required' }, 400);
  }

  let claudeResult;
  try {
    claudeResult = await callF({ transcriptByDomain, parent_first_name }, env);
  } catch (err) {
    console.error('[VECTOR Worker] Parent Agent callF error:', err);
    claudeResult = { skipped: true, reason: 'callF_error', error: err.message };
  }

  const profile = extractParentSignals({
    familyMemberId: family_member_id,
    transcriptByDomain,
    preFilledSignals: claudeResult.skipped ? null : claudeResult.extracted,
  });

  const record = {
    family_member_id,
    raw_payload:          profile.raw_payload,
    alumni_signal:         profile.alumni_signal,
    professional_signal:   profile.professional_signal,
    network_geography:     profile.network_geography,
    aspiration_profile:    profile.aspiration_profile,
    child_perception:      profile.child_perception,
    hidden_constraints:    profile.hidden_constraints,
    engine_version:        profile.engine_version,
    global_confidence:     profile.global_confidence,
    created_at:            new Date().toISOString(),
  };

  const res = await supabaseInsert(env, 'parent_intelligence_profiles', record);
  if (!res.ok) {
    const err = await res.text();
    console.error('[VECTOR Worker] parent_intelligence_profiles insert failed:', err);
    return jsonResponse({ error: 'Database write failed', detail: err }, 500);
  }

  await supabaseUpdate(env, 'family_members', 'id=eq.' + family_member_id, {
    session_complete: true,
  });

  return jsonResponse({ success: true, profile_valid: profile.meta.profile_valid });
}

async function handleSaveSession(request, env) {
  let payload;
  try { payload = await request.json(); }
  catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }

  if (!env.AIRTABLE_API_KEY) {
    console.warn('[VECTOR Worker] AIRTABLE_API_KEY not set — skipping session write');
    return jsonResponse({ success: false, reason: 'Airtable not configured' });
  }

  const BASE_ID  = 'appZnHR2LdSSrUBC8';
  const TABLE_ID = 'tblcD7aujX8P5R96C';

  const fields = {};
  if (payload.session_id)           fields['fldlYzvA5ZjJePLZB'] = payload.session_id;
  if (payload.email)                fields['fldaP36PQX0uo6rQp'] = payload.email;
  if (payload.path)                 fields['fldJYGNPzQJmkjoLN'] = payload.path;
  if (payload.vector_score != null) fields['fldmWwNbu0LeelfI8'] = Number(payload.vector_score) || 0;
  if (payload.score_narrative)      fields['fld3r2tICfIMvMifm'] = payload.score_narrative;
  if (payload.drive_answers)        fields['fldcLLpPJV5ONxU7l'] = payload.drive_answers;
  if (payload.variable_scores)      fields['fldZKqCf92DBmHYFJ'] = payload.variable_scores;
  if (payload.campus_size_pref)     fields['flduyGO2GwbkgADNx'] = payload.campus_size_pref;
  if (payload.state_pref)           fields['fldoxz8VlHGDsGkc8'] = payload.state_pref;
  if (payload.gpa && payload.gpa !== '') fields['fldXvcMwL20K6aUWH'] = parseFloat(payload.gpa) || null;
  if (payload.faith_pref)           fields['fldpylE0qcjWkFbKw'] = payload.faith_pref;
  if (payload.specific_career)      fields['fldsd2xpqAMAB47PD'] = payload.specific_career;
  if (payload.worlds_chosen)        fields['fldTRVSP2MJ6NC0jM'] = payload.worlds_chosen;
  if (payload.primary_match)        fields['fldjxRWf9yBtekjVl'] = payload.primary_match;
  if (payload.adjacent_match)       fields['fldCT8kdBdiy298jy'] = payload.adjacent_match;
  if (payload.unexpected_match)     fields['fldhJiBympxFYkUsR'] = payload.unexpected_match;
  if (payload.bridge_path)          fields['fld6FhxtwvyYI2HCp'] = payload.bridge_path;
  if (payload.report_text)          fields['fldyFEw6xrMdSMSmM'] = payload.report_text.slice(0, 100000);
  if (payload.report_generated != null) fields['fldiXlkkbCrjPAexj'] = !!payload.report_generated;
  if (payload.pref_3out3in)         fields['fld0L9lHVxl4DCTrE'] = payload.pref_3out3in;
  if (payload.consultant_code)      fields['fldGF3rKNzs2KDzql'] = payload.consultant_code;
  if (payload.outcome_school)       fields['fldm4AJu1ty0qMttC'] = payload.outcome_school;
  if (payload.session_source)       fields['fldMgw3BKjCGyYESF'] = payload.session_source;
  if (payload.assessment_date)      fields['fld4H1lldNkH6SaZC'] = payload.assessment_date;
  if (payload.student_name)         fields['fldlOPgpTY9IZ5ybh'] = payload.student_name;
  if (payload.zip_code)             fields['fldo8GhxRyaAKCE2h'] = payload.zip_code;
  if (payload.grade)                fields['fldoeFculqD1FV9iG'] = String(payload.grade || '');
  if (payload.voice_path)           fields['fldtubzScn9ey8C97'] = payload.voice_path;
  if (payload.top_university)       fields['fldaTWPOLiKuHMccO'] = payload.top_university;
  if (payload.pronoun_label)        fields['fld4r7T4cN5JwkP0g'] = payload.pronoun_label;
  if (payload.vector_score != null && payload.vector_score !== 0) fields['fldGjivt6vS3RkueP'] = Number(payload.vector_score) || 0;
  if (payload.cc_pathway_shown)     fields['fldUtf6pKr2XbSM1U'] = payload.cc_pathway_shown;

  const res = await fetch(
    'https://api.airtable.com/v0/' + BASE_ID + '/' + TABLE_ID,
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + env.AIRTABLE_API_KEY,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({ fields }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    let errParsed = {};
    try { errParsed = JSON.parse(err); } catch(e) {}
    const errMsg = (errParsed.error && errParsed.error.message)
      ? errParsed.error.message
      : (errParsed.error || err || 'Unknown Airtable error');
    console.error('[VECTOR Worker] Airtable session write error:', res.status, err);
    return jsonResponse({
      success: false,
      error: 'Airtable write failed',
      message: errMsg,
      detail: err.slice(0, 500),
      airtable_status: res.status
    }, 500);
  }

  const data = await res.json();
  console.log('[VECTOR Worker] Session written to Airtable:', data.id, '| Consultant:', payload.consultant_code || 'none');

  if (payload.consultant_code && payload.report_generated) {
    const consultant = await supabaseFetchOne(env, 'consultants',
      'access_code=eq.' + payload.consultant_code);
    if (consultant) {
      const family = await supabaseFetchOne(env, 'families',
        'session_id=eq.' + (payload.session_id || '') + '&order=created_at.desc');
      if (family) {
        await supabaseInsert(env, 'client_activities', {
          consultant_id: consultant.id,
          family_id:     family.id,
          activity_type: 'recommendation_generated',
          title:         'Lifescape report generated',
          created_at:    new Date().toISOString(),
        });
      }
    }
  }

  return jsonResponse({ success: true, airtable_id: data.id });
}

async function resolveConsultantAndFamily(request, env, familyId) {
  const userId = await verifySupabaseJWT(request);
  if (!userId) return { error: 'Unauthorized', status: 401 };
  const consultant = await supabaseFetchOne(env, 'consultants', 'clerk_user_id=eq.' + userId);
  if (!consultant) return { error: 'Consultant not found', status: 404 };
  if (familyId) {
    const family = await supabaseFetchOne(env, 'families',
      'id=eq.' + familyId + '&consultant_code=eq.' + consultant.access_code);
    if (!family) return { error: 'Family not found or not authorized', status: 404 };
  }
  return { userId, consultant };
}

async function handleKeyDates(request, env, method) {
  const url = new URL(request.url);

  if (method === 'GET') {
    const familyId = url.searchParams.get('family_id');
    if (!familyId) return jsonResponse({ error: 'family_id required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, familyId);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const rows = await supabaseFetchMany(env, 'key_dates',
      'family_id=eq.' + familyId + '&order=date_value.asc');
    return jsonResponse({ key_dates: rows || [] });
  }

  if (method === 'POST') {
    let body; try { body = await request.json(); } catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }
    if (!body.family_id) return jsonResponse({ error: 'family_id required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, body.family_id);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const record = {
      family_id:     body.family_id,
      consultant_id: auth.consultant.id,
      title:         body.title,
      date_value:    body.date_value,
      date_type:     body.date_type     || null,
      school_slug:   body.school_slug   || null,
      notes:         body.notes         || null,
      created_at:    new Date().toISOString(),
    };
    const res = await supabaseInsert(env, 'key_dates', record);
    if (!res.ok) { const e = await res.text(); return jsonResponse({ error: 'Insert failed', detail: e }, 500); }
    await supabaseInsert(env, 'client_activities', {
      consultant_id: auth.consultant.id, family_id: body.family_id,
      activity_type: 'deadline_added', title: 'Key date added: ' + body.title,
      created_by_auth_user_id: auth.userId, created_at: new Date().toISOString(),
    });
    return jsonResponse({ success: true });
  }
}

async function handleSchoolPriority(request, env, method) {
  const url = new URL(request.url);

  if (method === 'GET') {
    const familyId = url.searchParams.get('family_id');
    if (!familyId) return jsonResponse({ error: 'family_id required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, familyId);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const rows = await supabaseFetchMany(env, 'school_priority_list',
      'family_id=eq.' + familyId + '&status=neq.removed&order=created_at.asc');
    return jsonResponse({ schools: rows || [] });
  }

  let body; try { body = await request.json(); } catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }

  if (method === 'POST') {
    if (!body.family_id || !body.school_slug) return jsonResponse({ error: 'family_id and school_slug required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, body.family_id);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const record = {
      family_id:        body.family_id,
      consultant_id:    auth.consultant.id,
      school_slug:      body.school_slug,
      priority_tier:    body.priority_tier    || null,
      status:           body.status           || 'considering',
      reason_added:     body.reason_added     || null,
      consultant_notes: body.consultant_notes || null,
      family_notes:     body.family_notes     || null,
      created_at:       new Date().toISOString(),
      updated_at:       new Date().toISOString(),
    };
    const res = await supabaseInsert(env, 'school_priority_list', record);
    if (!res.ok) { const e = await res.text(); return jsonResponse({ error: 'Insert failed', detail: e }, 500); }
    await supabaseInsert(env, 'client_activities', {
      consultant_id: auth.consultant.id, family_id: body.family_id,
      activity_type: 'school_added', title: 'School added: ' + body.school_slug,
      created_by_auth_user_id: auth.userId, created_at: new Date().toISOString(),
    });
    return jsonResponse({ success: true });
  }

  if (method === 'PATCH') {
    if (!body.id || !body.family_id) return jsonResponse({ error: 'id and family_id required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, body.family_id);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const updates = { updated_at: new Date().toISOString() };
    if (body.priority_tier    !== undefined) updates.priority_tier    = body.priority_tier;
    if (body.status           !== undefined) updates.status           = body.status;
    if (body.consultant_notes !== undefined) updates.consultant_notes = body.consultant_notes;
    if (body.family_notes     !== undefined) updates.family_notes     = body.family_notes;
    const res = await supabaseUpdate(env, 'school_priority_list', 'id=eq.' + body.id, updates);
    if (!res.ok) { const e = await res.text(); return jsonResponse({ error: 'Update failed', detail: e }, 500); }
    return jsonResponse({ success: true });
  }
}

async function handleSchoolRequirements(request, env, method) {
  const url = new URL(request.url);

  if (method === 'GET') {
    const familyId  = url.searchParams.get('family_id');
    const schoolSlug = url.searchParams.get('school_slug');
    if (!familyId) return jsonResponse({ error: 'family_id required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, familyId);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const query = 'family_id=eq.' + familyId +
      (schoolSlug ? '&school_slug=eq.' + encodeURIComponent(schoolSlug) : '') +
      '&order=due_date.asc.nullslast';
    const rows = await supabaseFetchMany(env, 'school_requirements', query);
    return jsonResponse({ requirements: rows || [] });
  }

  let body; try { body = await request.json(); } catch { return jsonResponse({ error: 'Invalid JSON' }, 400); }

  if (method === 'POST') {
    if (!body.family_id || !body.school_slug || !body.title)
      return jsonResponse({ error: 'family_id, school_slug, and title required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, body.family_id);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const record = {
      family_id:        body.family_id,
      consultant_id:    auth.consultant.id,
      school_slug:      body.school_slug,
      requirement_type: body.requirement_type || null,
      title:            body.title,
      status:           body.status           || 'not_started',
      due_date:         body.due_date         || null,
      notes:            body.notes            || null,
      created_at:       new Date().toISOString(),
      updated_at:       new Date().toISOString(),
    };
    const res = await supabaseInsert(env, 'school_requirements', record);
    if (!res.ok) { const e = await res.text(); return jsonResponse({ error: 'Insert failed', detail: e }, 500); }
    return jsonResponse({ success: true });
  }

  if (method === 'PATCH') {
    if (!body.id || !body.family_id) return jsonResponse({ error: 'id and family_id required' }, 400);
    const auth = await resolveConsultantAndFamily(request, env, body.family_id);
    if (auth.error) return jsonResponse({ error: auth.error }, auth.status);
    const updates = { updated_at: new Date().toISOString() };
    if (body.status   !== undefined) updates.status   = body.status;
    if (body.due_date !== undefined) updates.due_date = body.due_date;
    if (body.notes    !== undefined) updates.notes    = body.notes;
    const res = await supabaseUpdate(env, 'school_requirements', 'id=eq.' + body.id, updates);
    if (!res.ok) { const e = await res.text(); return jsonResponse({ error: 'Update failed', detail: e }, 500); }
    return jsonResponse({ success: true });
  }
}

async function handleScorecardSchools(request, env) {
  if (!env.SCORECARD_API_KEY)  return jsonResponse({ error: 'SCORECARD_API_KEY not configured' }, 500);
  if (!env.SCORECARD_CACHE)    return jsonResponse({ error: 'SCORECARD_CACHE KV namespace not bound' }, 500);

  const url   = new URL(request.url);
  const force = url.searchParams.get('force') === 'true';

  if (!force) {
    const cached = await env.SCORECARD_CACHE.get(SCORECARD_CACHE_KEY, { type: 'json' });
    if (cached) {
      return jsonResponse({ source: 'cache', cached_at: cached.cached_at, count: cached.institutions.length, institutions: cached.institutions });
    }
  }

  const institutions = await fetchAllScorecardPages(env);
  if (!institutions || institutions.length === 0) {
    return jsonResponse({ error: 'Scorecard API returned no results' }, 500);
  }

  institutions.sort((a, b) => {
    const earnA = a['latest.earnings.6_yrs_after_entry.median'] || 0;
    const earnB = b['latest.earnings.6_yrs_after_entry.median'] || 0;
    return earnB - earnA;
  });

  const cachePayload = { cached_at: new Date().toISOString(), count: institutions.length, institutions };
  await env.SCORECARD_CACHE.put(SCORECARD_CACHE_KEY, JSON.stringify(cachePayload), { expirationTtl: SCORECARD_TTL_SECONDS });

  return jsonResponse({ source: 'api', cached_at: cachePayload.cached_at, count: institutions.length, institutions });
}

async function handleScorecardStatus(request, env) {
  if (!env.SCORECARD_CACHE) return jsonResponse({ status: 'error', reason: 'SCORECARD_CACHE KV not bound' }, 500);

  const cached = await env.SCORECARD_CACHE.get(SCORECARD_CACHE_KEY, { type: 'json' });
  if (!cached) return jsonResponse({ status: 'empty', message: 'Cache not populated. Call GET /scorecard-schools to seed it.' });

  const cachedAt  = new Date(cached.cached_at);
  const ageHours  = Math.round((Date.now() - cachedAt.getTime()) / 1000 / 60 / 60);
  return jsonResponse({
    status: 'ok', cached_at: cached.cached_at,
    age_hours: ageHours, age_days: (ageHours / 24).toFixed(1),
    expires_in_days: Math.max(0, 7 - ageHours / 24).toFixed(1),
    count: cached.institutions.length, ttl_days: 7,
  });
}

async function fetchAllScorecardPages(env) {
  const allInstitutions = [];
  const PER_PAGE = 100;
  const MAX_PAGES = 20;
  let page = 0;
  let totalExpected = null;

  while (page < MAX_PAGES) {
    const params = new URLSearchParams({
      api_key: env.SCORECARD_API_KEY, fields: SCORECARD_FIELDS,
      per_page: String(PER_PAGE), page: String(page),
      sort: 'latest.earnings.6_yrs_after_entry.median:desc',
      ...SCORECARD_FILTERS,
    });

    let res;
    try { res = await fetch(SCORECARD_BASE_URL + '?' + params.toString()); }
    catch (err) { console.error('[Scorecard] Network error page', page, ':', err.message); break; }

    if (!res.ok) { const t = await res.text(); console.error('[Scorecard] API error page', page, res.status, t.slice(0, 200)); break; }

    const data    = await res.json();
    const results = data.results || [];
    if (page === 0) { totalExpected = (data.metadata || {}).total || null; }
    if (results.length === 0) break;

    allInstitutions.push(...results);
    if (totalExpected && allInstitutions.length >= totalExpected) break;
    if (results.length < PER_PAGE) break;

    page++;
    await new Promise(r => setTimeout(r, 200));
  }

  return allInstitutions;
}

async function verifySupabaseJWT(request) {
  const authHeader = request.headers.get('Authorization') || '';
  const token      = authHeader.replace('Bearer ', '').trim();
  if (!token) return null;

  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const header  = JSON.parse(b64UrlDecode(parts[0]));
    const payload = JSON.parse(b64UrlDecode(parts[1]));

    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;

    const jwk = SUPABASE_JWKS.keys.find(k => !header.kid || k.kid === header.kid);
    if (!jwk) { console.error('[VECTOR Worker] No matching JWK for kid:', header.kid); return null; }

    const cryptoKey = await crypto.subtle.importKey('jwk', jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
    const sigInput  = new TextEncoder().encode(parts[0] + '.' + parts[1]);
    const sigBytes  = Uint8Array.from(atob(parts[2].replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
    const valid     = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, cryptoKey, sigBytes, sigInput);

    if (!valid) { console.error('[VECTOR Worker] JWT signature invalid'); return null; }
    return payload.sub || null;
  } catch (err) {
    console.error('[VECTOR Worker] JWT verification error:', err);
    return null;
  }
}

function b64UrlDecode(str) {
  return atob(str.replace(/-/g, '+').replace(/_/g, '/'));
}

async function verifyStripeSignature(rawBody, signature, secret) {
  try {
    if (!signature || !secret) return false;
    const sigParts  = Object.fromEntries(signature.split(',').map(p => p.split('=')));
    const timestamp = sigParts.t;
    const sigHash   = sigParts.v1;
    const keyData   = new TextEncoder().encode(secret);
    const msgData   = new TextEncoder().encode(timestamp + '.' + new TextDecoder().decode(rawBody));
    const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const computed  = await crypto.subtle.sign('HMAC', cryptoKey, msgData);
    const hex       = Array.from(new Uint8Array(computed)).map(b => b.toString(16).padStart(2, '0')).join('');
    return hex === sigHash;
  } catch (err) {
    console.error('[VECTOR Worker] Stripe sig verify error:', err);
    return false;
  }
}

function supabaseHeaders(env) {
  return {
    'Content-Type':  'application/json',
    'apikey':        env.SUPABASE_SERVICE_KEY,
    'Authorization': 'Bearer ' + env.SUPABASE_SERVICE_KEY,
    'Prefer':        'return=representation',
  };
}

async function supabaseInsert(env, table, record) {
  return fetch(env.SUPABASE_URL + '/rest/v1/' + table, {
    method: 'POST', headers: supabaseHeaders(env), body: JSON.stringify(record),
  });
}

async function supabaseFetchOne(env, table, query) {
  const res = await fetch(env.SUPABASE_URL + '/rest/v1/' + table + '?' + query + '&limit=1', {
    headers: { ...supabaseHeaders(env), 'Accept': 'application/json' },
  });
  if (!res.ok) return null;
  const rows = await res.json();
  return Array.isArray(rows) ? rows[0] || null : rows;
}

async function supabaseFetchMany(env, table, query) {
  const res = await fetch(env.SUPABASE_URL + '/rest/v1/' + table + '?' + query, {
    headers: { ...supabaseHeaders(env), 'Accept': 'application/json' },
  });
  if (!res.ok) return [];
  return res.json();
}

async function supabaseUpdate(env, table, query, updates) {
  return fetch(env.SUPABASE_URL + '/rest/v1/' + table + '?' + query, {
    method: 'PATCH', headers: supabaseHeaders(env), body: JSON.stringify(updates),
  });
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function generateAccessCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}
