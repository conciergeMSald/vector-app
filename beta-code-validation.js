/**
 * beta-code-validation.js
 * VECTOR — Beta Invite Code & Account Access Flow (IMPL-PLAN-004)
 *
 * Gate 4, Item 2. Pure functions shared by BOTH /validate-invite-code
 * (check-only, no side effects) and /redeem-invite-code (check + consume).
 * This is the fix the spec's "Correction to Existing Behavior" calls for:
 * one validity check, used identically by both routes, rather than the
 * check-and-consume logic living only inside /validate-invite-code the way
 * it does today.
 *
 * These functions never touch Supabase directly — they operate on a record
 * already fetched by the caller (matching the pure-function pattern used
 * throughout the Essay Engine build). No DB calls, no side effects,
 * deterministic given the same inputs.
 */

'use strict';

export const DEFAULT_ASSESSMENTS_GRANTED = 3;

// Pre-existing sentinel in the live invite_codes data: max_uses === 999 means
// "unlimited redemptions of this code across all users" — this is a DIFFERENT
// axis from grants_unlimited (which governs what ONE redemption grants the
// person who used it). Both are preserved and must not be conflated.
const UNLIMITED_USES_SENTINEL = 999;

/**
 * Checks whether an invite_codes row is currently valid to redeem/use.
 * Mirrors the exact logic already live in handleValidateInviteCode — this
 * is a relocation, not a behavior change, so existing consultant-issued
 * codes (B2B side) see zero difference in outcome.
 *
 * @param {object|null} record - the invite_codes row (already fetched by the
 *        caller, e.g. via supabaseFetchOne), or null if no matching code was found
 * @param {Date} [now] - injectable clock for deterministic testing
 * @returns {{ valid: boolean, reason: string|null }}
 *          reason is one of: 'invalid_code', 'expired', 'exhausted', or null when valid
 */
export function checkInviteCodeValidity(record, now = new Date()) {
  if (!record) {
    return { valid: false, reason: 'invalid_code' };
  }

  if (record.expires_at && new Date(record.expires_at) < now) {
    return { valid: false, reason: 'expired' };
  }

  const maxUses = record.max_uses;
  const usesCount = record.uses_count || 0;
  if (maxUses !== UNLIMITED_USES_SENTINEL && usesCount >= maxUses) {
    return { valid: false, reason: 'exhausted' };
  }

  return { valid: true, reason: null };
}

/**
 * Determines what a single redemption of this code should grant, per
 * IMPL-PLAN-004 Section 8's OQ-3 revision: either unlimited permanent
 * access, or a fixed assessment count. The two are always mutually
 * exclusive in the returned shape — never both populated — matching the
 * database check constraint (chk_beta_grant_mutually_exclusive) added in
 * Gate 4 Item 1.
 *
 * @param {object} record - a validated invite_codes row
 * @returns {{ unlimited: true, assessmentsGranted: null } | { unlimited: false, assessmentsGranted: number }}
 */
export function computeBetaGrant(record) {
  if (record && record.grants_unlimited === true) {
    return { unlimited: true, assessmentsGranted: null };
  }
  const grantedCount =
    record && typeof record.assessments_granted === 'number' && record.assessments_granted > 0
      ? record.assessments_granted
      : DEFAULT_ASSESSMENTS_GRANTED;
  return { unlimited: false, assessmentsGranted: grantedCount };
}

/**
 * OQ-1 enforcement: a family_accounts row that already has beta_redeemed_at
 * set has already used its one beta grant, ever — regardless of grant type.
 * A second redemption attempt must be rejected by the caller before it ever
 * reaches the DB write.
 *
 * @param {object|null} familyAccountRow
 * @returns {boolean}
 */
export function hasAlreadyRedeemed(familyAccountRow) {
  return !!(familyAccountRow && familyAccountRow.beta_redeemed_at);
}
