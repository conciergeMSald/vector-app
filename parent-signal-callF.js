/**
 * parent-signal-callF.js
 * VECTOR — Parent Agent — Claude Extraction Call
 *
 * PARENT-AGENT-001 v3 (Approved) — Section 4
 * Companion to parent-signal-engine.js (pure function, output shape owner)
 *
 * ARCHITECTURE:
 *   This is the Claude call that fills the fields parent-signal-engine.js
 *   stubs as null. It lives in the worker, follows the existing callA/B/C/D
 *   pattern (named function, Promise.all-compatible, structured system prompt).
 *
 *   Flow: raw transcript → callF(transcript) → Claude structured extraction
 *         → passed into extractParentSignals() as pre-filled signal data
 *         → pure function stamps engine_version, computes confidence, done.
 *
 *   callF NEVER writes to Supabase directly. It returns data. The worker's
 *   single write entry point (InterviewService) handles persistence.
 *
 * NON-NEGOTIABLES (carried from PARENT-AGENT-001 Section 8):
 *   - Race: never collected, never inferred, never used
 *   - Gender: never inferred from name — explicit instruction to Claude, every call
 *   - Pronouns: writing instruction only, defaults to they/them
 */

import { REQUIRED_DOMAINS, ALL_DOMAINS } from './parent-signal-engine.js';

/**
 * callF — Parent Signal Extraction
 *
 * @param {Object} session
 * @param {Object} session.transcriptByDomain - { domainKey: rawText }
 * @param {string} session.parent_first_name - for natural prompt framing only, never stored as a derived field
 * @returns {Promise<Object>} structured signal data — same shape parent-signal-engine.js expects as pre-filled input
 */
export async function callF(session) {
  const { transcriptByDomain = {}, parent_first_name } = session;

  const domainsPresent = ALL_DOMAINS.filter(d => hasContent(transcriptByDomain[d]));

  // Bypass rule: if nothing usable is present, don't call Claude at all.
  // Return the same null-shaped structure the pure function already produces
  // on empty input — no API cost, no risk, still a valid non-error state.
  if (domainsPresent.length === 0) {
    return { skipped: true, reason: "no_domains_present" };
  }

  const systemPrompt = buildSystemPrompt(parent_first_name);
  const userPrompt = buildExtractionPrompt(transcriptByDomain, domainsPresent);

  const response = await callClaudeAPI({
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
    // Structured output — same discipline as callB's university card JSON
    max_tokens: 2000
  });

  return parseExtractionResponse(response, domainsPresent);
}

// ---------------------------------------------------------------------------
// System prompt — carries the non-negotiables into every extraction call
// ---------------------------------------------------------------------------
function buildSystemPrompt(parentFirstName) {
  return `You are VECTOR's parent signal extraction engine.

You read a parent conversation transcript and extract structured signal — you do
not write prose, you do not generate a report, you produce structured data only.

HARD RULES — NO EXCEPTIONS:
- Never infer or record race or ethnicity. This field does not exist. Do not create it.
- Never infer gender from the parent's name or the student's name. If pronouns were
  not explicitly stated by the parent, leave gender fields absent entirely — do not guess.
- Extract only what is actually present in the transcript. Do not invent alumni schools,
  cities, professions, or values that were not stated or clearly implied.
- Network geography anchors (Section 4.3): extract city names only when they appear in
  the context of a real relationship (friend, roommate, business partner, family). A city
  mentioned in passing with no relational context is not an anchor.
- child_perception extraction: record what the parent said about the student. Do NOT
  compare it to anything — you have no access to the student's own profile. Leave
  divergence_flag exactly as "pending_student_profile" — that comparison is Synthesis's job, not yours.
- If a domain's transcript is thin or absent, return low confidence or null fields for
  that domain. Do not pad with generic inference to make the profile look more complete
  than the conversation actually was.

${parentFirstName ? `The parent's name is ${parentFirstName} — use it only for natural reading of the transcript, never as a field to analyze.` : ""}

Output valid JSON matching the requested schema exactly. No prose outside the JSON.`;
}

// ---------------------------------------------------------------------------
// User prompt — sends only the domains actually present
// ---------------------------------------------------------------------------
function buildExtractionPrompt(transcriptByDomain, domainsPresent) {
  const sections = domainsPresent.map(domain => {
    return `--- DOMAIN: ${domain} ---\n${transcriptByDomain[domain]}`;
  }).join("\n\n");

  return `Extract structured signal from the following parent conversation transcript.
Only these domains were reached in this conversation: ${domainsPresent.join(", ")}.
Do not fabricate content for domains not listed here.

${sections}

Return JSON with this exact shape (omit or null any field not supported by the transcript above):

{
  "alumni_signal": { "legacy_school": string|null, "network_activation_level": "active"|"dormant"|null, "emotional_valence": "pride"|"regret"|"neutral"|null, "implicit_standard": string|null },
  "professional_signal": { "industry_naics": string|null, "career_origin": "chosen"|"inherited"|null, "network_density": "local"|"national"|"global"|null, "geographic_concentration": string|null },
  "network_geography": { "anchor_cities": [{ "city": string, "weight": "high"|"medium"|"low", "source_domain": string }], "distribution_score": "local"|"national"|null, "mobility_orientation": "left_and_returned"|"left_and_stayed"|"never_left"|null },
  "aspiration_profile": { "vision_for_child": string|null, "prestige_sensitivity": "low"|"medium"|"high"|null, "anxiety_taxonomy": { "primary": string|null, "secondary": string|null }, "budget_tier": string|null, "debt_tolerance": string|null, "financial_openness_score": string|null },
  "child_perception": { "parent_description": string|null, "blind_spot_indicator": string|null },
  "hidden_constraints": { "items": [string] }
}`;
}

// ---------------------------------------------------------------------------
// Response parsing — defensive, never throws on malformed Claude output
// ---------------------------------------------------------------------------
function parseExtractionResponse(response, domainsPresent) {
  try {
    const text = response?.content?.[0]?.text || "";
    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    // child_perception.divergence_flag is never Claude's to set — enforce here
    // regardless of what came back, per the pure function's contract.
    if (parsed.child_perception) {
      parsed.child_perception.divergence_flag = "pending_student_profile";
    }

    return { skipped: false, extracted: parsed, domainsPresent };
  } catch (err) {
    // Extraction failure is not a crash — bypass rule applies here too.
    // Caller falls back to the pure function's null-shaped defaults.
    return { skipped: true, reason: "parse_error", error: err.message, domainsPresent };
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function hasContent(text) {
  return typeof text === "string" && text.trim().length > 0;
}

// Wired to the worker's actual Claude proxy route: POST /v1/messages.
// The worker forwards the raw body to api.anthropic.com and streams the
// response back untouched — so callF builds the same request shape any
// other client of that route would send.
async function callClaudeAPI({ system, messages, max_tokens }) {
  const res = await fetch("https://api.abettercollegeconsultant.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: max_tokens || 2000,
      system,
      messages,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Claude proxy error (${res.status}): ${errText.slice(0, 300)}`);
  }

  return res.json();
}
