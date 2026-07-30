/**
 * VECTOR — generate_alumni_network_sql.js
 *
 * Converts alumni_network_seed_data.js into a single, idempotent SQL script
 * that can be pasted directly into the Supabase SQL editor — no Node
 * process, no service role key, no env vars required. This is an
 * alternative to ingest_alumni_network_la.js for anyone who'd rather run
 * SQL directly than a script.
 *
 * Run once locally to produce the SQL file:
 *   node generate_alumni_network_sql.js > alumni_network_seed.sql
 *
 * The generated SQL is itself the deliverable — check it in, review it,
 * run it in Supabase. This generator script does not touch your database.
 */

'use strict';

const { ALUMNI_NETWORK_SEED_LA, ALUMNI_NETWORK_COMPARISONS_LA, ENGINE_VERSION } =
  require('./alumni_network_seed_data.js');

// Postgres single-quote escaping — doubles every literal single quote.
// Handles apostrophes like "Elon's", "CU's", "family's" correctly.
function sqlStr(value) {
  if (value === null || value === undefined) return 'NULL';
  return `'${String(value).replace(/'/g, "''")}'`;
}

function sqlInt(value) {
  return (value === null || value === undefined) ? 'NULL' : String(value);
}

function sqlArray(values) {
  return `ARRAY[${values.map(sqlStr).join(', ')}]::text[]`;
}

const lines = [];

lines.push('-- ============================================================================');
lines.push('-- VECTOR — Alumni Network Database — LA Cohort Seed Data (generated SQL)');
lines.push(`-- Generated from alumni_network_seed_data.js, engine_version: ${ENGINE_VERSION}`);
lines.push('-- Run this directly in the Supabase SQL editor. Requires');
lines.push('-- alumni_network_migration.sql to have been run first (tables + the');
lines.push('-- (school_slug, metro_area) unique constraint this script upserts against).');
lines.push('--');
lines.push('-- Idempotent: safe to re-run. Each school upserts on (school_slug,');
lines.push('-- metro_area); child rows (industries, geo_nodes) are cleared and');
lines.push('-- re-inserted per school on every run, matching');
lines.push('-- ingest_alumni_network_la.js\'s replace-not-merge semantics — these are');
lines.push('-- ordered lists, not independently keyed records.');
lines.push('-- ============================================================================');
lines.push('');
lines.push('BEGIN;');
lines.push('');

for (const school of ALUMNI_NETWORK_SEED_LA) {
  lines.push(`-- ── ${school.school_name} (${school.school_slug}) ──${'─'.repeat(Math.max(0, 60 - school.school_name.length))}`);
  lines.push('DO $$');
  lines.push('DECLARE');
  lines.push('  v_alumni_network_id uuid;');
  lines.push('BEGIN');
  lines.push('  INSERT INTO alumni_networks (');
  lines.push('    school_slug, school_name, metro_area,');
  lines.push('    population_low, population_high, population_confidence, population_source_note,');
  lines.push('    chapter_name, chapter_strength,');
  lines.push('    signature_pipeline_name, signature_pipeline_description,');
  lines.push('    network_character, family_facing_summary,');
  lines.push('    researched_at, engine_version');
  lines.push('  ) VALUES (');
  lines.push(`    ${sqlStr(school.school_slug)}, ${sqlStr(school.school_name)}, ${sqlStr(school.metro_area)},`);
  lines.push(`    ${sqlInt(school.population_low)}, ${sqlInt(school.population_high)}, ${sqlStr(school.population_confidence)}, ${sqlStr(school.population_source_note)},`);
  lines.push(`    ${sqlStr(school.chapter_name)}, ${sqlStr(school.chapter_strength)},`);
  lines.push(`    ${sqlStr(school.signature_pipeline_name)}, ${sqlStr(school.signature_pipeline_description)},`);
  lines.push(`    ${sqlStr(school.network_character)}, ${sqlStr(school.family_facing_summary)},`);
  lines.push(`    ${sqlStr(school.researched_at)}, ${sqlStr(school.engine_version)}`);
  lines.push('  )');
  lines.push('  ON CONFLICT (school_slug, metro_area) DO UPDATE SET');
  lines.push('    school_name = EXCLUDED.school_name,');
  lines.push('    population_low = EXCLUDED.population_low,');
  lines.push('    population_high = EXCLUDED.population_high,');
  lines.push('    population_confidence = EXCLUDED.population_confidence,');
  lines.push('    population_source_note = EXCLUDED.population_source_note,');
  lines.push('    chapter_name = EXCLUDED.chapter_name,');
  lines.push('    chapter_strength = EXCLUDED.chapter_strength,');
  lines.push('    signature_pipeline_name = EXCLUDED.signature_pipeline_name,');
  lines.push('    signature_pipeline_description = EXCLUDED.signature_pipeline_description,');
  lines.push('    network_character = EXCLUDED.network_character,');
  lines.push('    family_facing_summary = EXCLUDED.family_facing_summary,');
  lines.push('    researched_at = EXCLUDED.researched_at,');
  lines.push('    engine_version = EXCLUDED.engine_version,');
  lines.push('    updated_at = now()');
  lines.push('  RETURNING id INTO v_alumni_network_id;');
  lines.push('');
  lines.push('  DELETE FROM alumni_network_industries WHERE alumni_network_id = v_alumni_network_id;');
  lines.push('  INSERT INTO alumni_network_industries (alumni_network_id, industry_label, strength_rating, notes) VALUES');
  lines.push(
    school.industries
      .map(ind => `    (v_alumni_network_id, ${sqlStr(ind.industry_label)}, ${sqlStr(ind.strength_rating)}, ${sqlStr(ind.notes)})`)
      .join(',\n') + ';'
  );
  lines.push('');
  lines.push('  DELETE FROM alumni_network_geo_nodes WHERE alumni_network_id = v_alumni_network_id;');
  lines.push('  INSERT INTO alumni_network_geo_nodes (alumni_network_id, neighborhood, relevance_notes) VALUES');
  lines.push(
    school.geo_nodes
      .map(g => `    (v_alumni_network_id, ${sqlStr(g.neighborhood)}, ${sqlStr(g.relevance_notes)})`)
      .join(',\n') + ';'
  );
  lines.push('END $$;');
  lines.push('');
}

for (const comparison of ALUMNI_NETWORK_COMPARISONS_LA) {
  lines.push(`-- ── Comparison: ${comparison.comparison_title} ────────────────────────────`);
  lines.push('DELETE FROM alumni_network_comparisons');
  lines.push(`  WHERE metro_area = ${sqlStr(comparison.metro_area)} AND comparison_title = ${sqlStr(comparison.comparison_title)};`);
  lines.push('INSERT INTO alumni_network_comparisons (metro_area, comparison_title, comparison_content, schools_included, researched_at) VALUES (');
  lines.push(`  ${sqlStr(comparison.metro_area)},`);
  lines.push(`  ${sqlStr(comparison.comparison_title)},`);
  lines.push(`  ${sqlStr(comparison.comparison_content)},`);
  lines.push(`  ${sqlArray(comparison.schools_included)},`);
  lines.push(`  ${sqlStr(comparison.researched_at)}`);
  lines.push(');');
  lines.push('');
}

lines.push('COMMIT;');
lines.push('');
lines.push('-- ── Verification — matches the "verify before reporting complete" discipline ──');
lines.push("SELECT 'alumni_networks' AS table_name, count(*) AS row_count FROM alumni_networks WHERE metro_area = 'Los Angeles'");
lines.push("UNION ALL SELECT 'alumni_network_industries', count(*) FROM alumni_network_industries");
lines.push("UNION ALL SELECT 'alumni_network_geo_nodes', count(*) FROM alumni_network_geo_nodes");
lines.push("UNION ALL SELECT 'alumni_network_comparisons', count(*) FROM alumni_network_comparisons WHERE metro_area = 'Los Angeles';");
lines.push('');
lines.push(`-- Expected: alumni_networks = ${ALUMNI_NETWORK_SEED_LA.length}, alumni_network_industries = ${ALUMNI_NETWORK_SEED_LA.reduce((n, s) => n + s.industries.length, 0)}, alumni_network_geo_nodes = ${ALUMNI_NETWORK_SEED_LA.reduce((n, s) => n + s.geo_nodes.length, 0)}, alumni_network_comparisons = ${ALUMNI_NETWORK_COMPARISONS_LA.length}`);

console.log(lines.join('\n'));
