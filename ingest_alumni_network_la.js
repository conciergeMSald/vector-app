/**
 * VECTOR — ingest_alumni_network_la.js
 *
 * One-time ingestion script for the LA cohort, per ALUMNI-NETWORK-ARCH-001 v1
 * Section 2. Reads alumni_network_seed_data.js and writes it into the four
 * tables created by alumni_network_migration.sql.
 *
 * Requires:
 *   npm install @supabase/supabase-js   (if not already in package.json)
 *
 * Requires these environment variables (never hardcode, never log them):
 *   SUPABASE_URL                — your project URL (e.g. https://pbtyanwkmbrcumwunxrv.supabase.co)
 *   SUPABASE_SERVICE_ROLE_KEY   — service role key (bypasses RLS — this script
 *                                 is the intentional write path; the family/
 *                                 consultant read endpoint never uses this key)
 *
 * Usage:
 *   node ingest_alumni_network_la.js            — writes to the database
 *   node ingest_alumni_network_la.js --dry-run  — validates and logs what
 *                                                  WOULD be written, writes nothing
 *
 * Idempotent: safe to re-run. Each school is upserted on (school_slug,
 * metro_area) — the unique constraint from the migration. Child rows
 * (industries, geo_nodes) are fully cleared and re-inserted per school on
 * every run, since they're order-sensitive lists, not independently keyed
 * records — partial merges would be harder to reason about than a clean
 * replace. Comparisons are matched on (metro_area, comparison_title) and
 * replaced the same way.
 */

'use strict';

const { createClient } = require('@supabase/supabase-js');
const {
  ALUMNI_NETWORK_SEED_LA,
  ALUMNI_NETWORK_COMPARISONS_LA,
  ENGINE_VERSION,
} = require('./alumni_network_seed_data.js');

const DRY_RUN = process.argv.includes('--dry-run');

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
}

async function main() {
  console.log(`Alumni Network LA-cohort ingestion — engine_version: ${ENGINE_VERSION}`);
  console.log(DRY_RUN ? 'Mode: DRY RUN (no writes)' : 'Mode: LIVE (will write to Supabase)');
  console.log(`Schools in seed file: ${ALUMNI_NETWORK_SEED_LA.length}`);
  console.log('');

  if (DRY_RUN) {
    for (const school of ALUMNI_NETWORK_SEED_LA) {
      console.log(`  [dry-run] would upsert: ${school.school_name} (${school.school_slug})`);
      console.log(`            industries: ${school.industries.length}, geo_nodes: ${school.geo_nodes.length}`);
    }
    for (const comparison of ALUMNI_NETWORK_COMPARISONS_LA) {
      console.log(`  [dry-run] would upsert comparison: "${comparison.comparison_title}" (${comparison.metro_area})`);
    }
    console.log('\nDry run complete. No writes performed. Re-run without --dry-run to write for real.');
    return;
  }

  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const supabase = createClient(supabaseUrl, serviceKey);

  let schoolsWritten = 0;
  let industriesWritten = 0;
  let geoNodesWritten = 0;

  for (const school of ALUMNI_NETWORK_SEED_LA) {
    const { industries, geo_nodes, ...networkFields } = school;

    // Upsert the parent row on (school_slug, metro_area) — the unique
    // constraint from the migration. Returns the row so we have its id
    // for the child-table writes below, whether this was an insert or
    // an update.
    const { data: networkRow, error: networkErr } = await supabase
      .from('alumni_networks')
      .upsert(networkFields, { onConflict: 'school_slug,metro_area' })
      .select()
      .single();

    if (networkErr) {
      console.error(`FAILED to upsert ${school.school_name}:`, networkErr.message);
      process.exitCode = 1;
      continue;
    }

    const alumniNetworkId = networkRow.id;
    schoolsWritten++;

    // Clear and re-insert child rows — see file header for why full
    // replace rather than a partial merge.
    const { error: deleteIndErr } = await supabase
      .from('alumni_network_industries')
      .delete()
      .eq('alumni_network_id', alumniNetworkId);
    if (deleteIndErr) {
      console.error(`FAILED to clear industries for ${school.school_name}:`, deleteIndErr.message);
      process.exitCode = 1;
      continue;
    }

    const { error: insertIndErr } = await supabase
      .from('alumni_network_industries')
      .insert(industries.map((i) => ({ ...i, alumni_network_id: alumniNetworkId })));
    if (insertIndErr) {
      console.error(`FAILED to insert industries for ${school.school_name}:`, insertIndErr.message);
      process.exitCode = 1;
      continue;
    }
    industriesWritten += industries.length;

    const { error: deleteGeoErr } = await supabase
      .from('alumni_network_geo_nodes')
      .delete()
      .eq('alumni_network_id', alumniNetworkId);
    if (deleteGeoErr) {
      console.error(`FAILED to clear geo_nodes for ${school.school_name}:`, deleteGeoErr.message);
      process.exitCode = 1;
      continue;
    }

    const { error: insertGeoErr } = await supabase
      .from('alumni_network_geo_nodes')
      .insert(geo_nodes.map((g) => ({ ...g, alumni_network_id: alumniNetworkId })));
    if (insertGeoErr) {
      console.error(`FAILED to insert geo_nodes for ${school.school_name}:`, insertGeoErr.message);
      process.exitCode = 1;
      continue;
    }
    geoNodesWritten += geo_nodes.length;

    console.log(`  OK — ${school.school_name} (${school.school_slug}): ${industries.length} industries, ${geo_nodes.length} geo_nodes`);
  }

  // Comparisons — matched on (metro_area, comparison_title), replaced the
  // same way as child tables above.
  let comparisonsWritten = 0;
  for (const comparison of ALUMNI_NETWORK_COMPARISONS_LA) {
    const { error: deleteCompErr } = await supabase
      .from('alumni_network_comparisons')
      .delete()
      .eq('metro_area', comparison.metro_area)
      .eq('comparison_title', comparison.comparison_title);
    if (deleteCompErr) {
      console.error(`FAILED to clear comparison "${comparison.comparison_title}":`, deleteCompErr.message);
      process.exitCode = 1;
      continue;
    }

    const { error: insertCompErr } = await supabase
      .from('alumni_network_comparisons')
      .insert(comparison);
    if (insertCompErr) {
      console.error(`FAILED to insert comparison "${comparison.comparison_title}":`, insertCompErr.message);
      process.exitCode = 1;
      continue;
    }
    comparisonsWritten++;
    console.log(`  OK — comparison: "${comparison.comparison_title}"`);
  }

  // Verification pass — matches the "verify before reporting complete"
  // discipline used throughout this build, not just trusting the writes
  // succeeded because no error was thrown.
  console.log('\nVerifying against the database (not just trusting the writes)...');
  const { count: liveSchoolCount } = await supabase
    .from('alumni_networks')
    .select('*', { count: 'exact', head: true })
    .eq('metro_area', 'Los Angeles');
  const { count: liveIndustryCount } = await supabase
    .from('alumni_network_industries')
    .select('*', { count: 'exact', head: true });
  const { count: liveGeoCount } = await supabase
    .from('alumni_network_geo_nodes')
    .select('*', { count: 'exact', head: true });

  console.log('');
  console.log('='.repeat(60));
  console.log('INGESTION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Schools written this run:      ${schoolsWritten} / ${ALUMNI_NETWORK_SEED_LA.length}`);
  console.log(`Industries written this run:   ${industriesWritten}`);
  console.log(`Geo nodes written this run:    ${geoNodesWritten}`);
  console.log(`Comparisons written this run:  ${comparisonsWritten} / ${ALUMNI_NETWORK_COMPARISONS_LA.length}`);
  console.log('---');
  console.log(`Live count, alumni_networks (Los Angeles):     ${liveSchoolCount}`);
  console.log(`Live count, alumni_network_industries (total): ${liveIndustryCount}`);
  console.log(`Live count, alumni_network_geo_nodes (total):  ${liveGeoCount}`);

  if (liveSchoolCount !== ALUMNI_NETWORK_SEED_LA.length) {
    console.log('\nWARNING: live school count does not match seed file count. Investigate before treating this ingestion as complete.');
    process.exitCode = 1;
  } else if (process.exitCode !== 1) {
    console.log('\nIngestion complete and verified. Recommend running test_alumni_network.js next.');
  }
}

main().catch((err) => {
  console.error('Ingestion script crashed:', err);
  process.exitCode = 1;
});
