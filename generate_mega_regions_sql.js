/**
 * VECTOR — generate_mega_regions_sql.js
 * Converts mega_regions_seed_data.js into idempotent SQL for the Supabase
 * SQL editor. Same pattern as generate_alumni_network_sql.js.
 *
 * Run: node generate_mega_regions_sql.js > mega_regions_seed.sql
 */

'use strict';

const { MEGA_REGIONS_SEED } = require('./mega_regions_seed_data.js');

function sqlStr(value) {
  if (value === null || value === undefined) return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}
function sqlArray(values) {
  return `ARRAY[${values.map(sqlStr).join(', ')}]::text[]`;
}
function sqlJsonb(obj) {
  if (obj === null || obj === undefined) return 'NULL';
  return `'${JSON.stringify(obj).replace(/'/g, "''")}'::jsonb`;
}

const lines = [];
lines.push('-- ============================================================================');
lines.push('-- VECTOR — Mega Region Database — Seed Data (generated SQL)');
lines.push('-- Generated from mega_regions_seed_data.js');
lines.push('-- Run after mega_regions_migration.sql. Idempotent: upserts on region_slug.');
lines.push('-- Regions with no real research yet ship with NULL economic_scores/');
lines.push('-- cultural_scores/regional_narrative/researched_at/engine_version — not');
lines.push('-- fabricated placeholders.');
lines.push('-- ============================================================================');
lines.push('');
lines.push('BEGIN;');
lines.push('');

for (const region of MEGA_REGIONS_SEED) {
  lines.push(`-- ── ${region.region_name} (${region.region_slug}) ──`);
  lines.push('INSERT INTO mega_regions (');
  lines.push('  region_slug, region_name, states_metros,');
  lines.push('  economic_scores, cultural_scores, regional_narrative,');
  lines.push('  researched_at, engine_version');
  lines.push(') VALUES (');
  lines.push(`  ${sqlStr(region.region_slug)}, ${sqlStr(region.region_name)}, ${sqlArray(region.states_metros)},`);
  lines.push(`  ${sqlJsonb(region.economic_scores)}, ${sqlJsonb(region.cultural_scores)}, ${sqlStr(region.regional_narrative)},`);
  lines.push(`  ${sqlStr(region.researched_at)}, ${sqlStr(region.engine_version)}`);
  lines.push(')');
  lines.push('ON CONFLICT (region_slug) DO UPDATE SET');
  lines.push('  region_name = EXCLUDED.region_name,');
  lines.push('  states_metros = EXCLUDED.states_metros,');
  lines.push('  economic_scores = EXCLUDED.economic_scores,');
  lines.push('  cultural_scores = EXCLUDED.cultural_scores,');
  lines.push('  regional_narrative = EXCLUDED.regional_narrative,');
  lines.push('  researched_at = EXCLUDED.researched_at,');
  lines.push('  engine_version = EXCLUDED.engine_version,');
  lines.push('  updated_at = now();');
  lines.push('');
}

lines.push('COMMIT;');
lines.push('');
lines.push('-- ── Verification ──');
lines.push("SELECT region_slug, region_name,");
lines.push("  (economic_scores IS NOT NULL) AS has_economic_data,");
lines.push("  (cultural_scores IS NOT NULL) AS has_cultural_data");
lines.push('FROM mega_regions ORDER BY region_slug;');
lines.push('');
const researchedCount = MEGA_REGIONS_SEED.filter((r) => r.economic_scores !== null).length;
lines.push(`-- Expected: 11 total rows, ${researchedCount} with has_economic_data = true, 0 with has_cultural_data = true`);

console.log(lines.join('\n'));
