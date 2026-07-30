/**
 * VECTOR — ingest_mega_regions.js
 *
 * Ingestion script for the Mega Region Database, per MEGA-REGION-ARCH-001 v1.
 * Reads mega_regions_seed_data.js and writes it into the mega_regions table
 * created by mega_regions_migration.sql. Same pattern as
 * ingest_alumni_network_la.js.
 *
 * Requires: npm install @supabase/supabase-js (if not already present)
 * Requires env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *   (worker.js reads SUPABASE_SERVICE_KEY OR SUPABASE_SERVICE_ROLE_KEY,
 *   whichever is actually set, per the 2026-07-30 fix — this script uses
 *   SUPABASE_SERVICE_ROLE_KEY specifically since that's the name confirmed
 *   valid in prior notes; adjust if your environment differs.)
 *
 * Usage:
 *   node ingest_mega_regions.js            — writes to the database
 *   node ingest_mega_regions.js --dry-run  — logs what WOULD be written, writes nothing
 *
 * Idempotent: upserts on region_slug (unique constraint from the migration).
 * Regions with null economic_scores/cultural_scores/regional_narrative/
 * researched_at/engine_version are written AS null — this script never
 * fabricates a placeholder value for a region that hasn't been researched
 * yet. Re-running after a region gets real data simply updates that row.
 */

'use strict';

const { createClient } = require('@supabase/supabase-js');
const { MEGA_REGIONS_SEED } = require('./mega_regions_seed_data.js');

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
  console.log(`Mega Region Database ingestion — ${MEGA_REGIONS_SEED.length} regions in seed file`);
  console.log(DRY_RUN ? 'Mode: DRY RUN (no writes)' : 'Mode: LIVE (will write to Supabase)');
  console.log('');

  const researched = MEGA_REGIONS_SEED.filter((r) => r.economic_scores !== null);
  const notResearched = MEGA_REGIONS_SEED.filter((r) => r.economic_scores === null);
  console.log(`Regions with real economic_scores: ${researched.length} (${researched.map((r) => r.region_slug).join(', ')})`);
  console.log(`Regions shipping as structurally-complete-but-empty: ${notResearched.length} (${notResearched.map((r) => r.region_slug).join(', ')})`);
  console.log('');

  if (DRY_RUN) {
    for (const region of MEGA_REGIONS_SEED) {
      const fieldCount = region.economic_scores ? Object.keys(region.economic_scores).length : 0;
      console.log(`  [dry-run] would upsert: ${region.region_name} (${region.region_slug}) — ${fieldCount} economic_scores fields, cultural_scores: ${region.cultural_scores ? 'present' : 'null'}`);
    }
    console.log('\nDry run complete. No writes performed.');
    return;
  }

  const supabaseUrl = requireEnv('SUPABASE_URL');
  const serviceKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');
  const supabase = createClient(supabaseUrl, serviceKey);

  let written = 0;
  for (const region of MEGA_REGIONS_SEED) {
    const { error } = await supabase
      .from('mega_regions')
      .upsert(region, { onConflict: 'region_slug' });

    if (error) {
      console.error(`FAILED to upsert ${region.region_name}:`, error.message);
      process.exitCode = 1;
      continue;
    }
    written++;
    const status = region.economic_scores ? 'real data' : 'empty row (not yet researched)';
    console.log(`  OK — ${region.region_name} (${region.region_slug}): ${status}`);
  }

  console.log('\nVerifying against the database...');
  const { count: liveCount } = await supabase
    .from('mega_regions')
    .select('*', { count: 'exact', head: true });
  const { count: researchedCount } = await supabase
    .from('mega_regions')
    .select('*', { count: 'exact', head: true })
    .not('economic_scores', 'is', null);

  console.log('');
  console.log('='.repeat(60));
  console.log('INGESTION SUMMARY');
  console.log('='.repeat(60));
  console.log(`Regions written this run: ${written} / ${MEGA_REGIONS_SEED.length}`);
  console.log(`Live total row count: ${liveCount}`);
  console.log(`Live rows with real economic_scores: ${researchedCount}`);

  if (liveCount !== 11) {
    console.log('\nWARNING: expected 11 canonical megaregions, live count differs. Investigate before treating this as complete.');
    process.exitCode = 1;
  } else {
    console.log('\nAll 11 canonical megaregion rows present (researched or not). Ingestion complete.');
  }
}

main().catch((err) => {
  console.error('Ingestion script crashed:', err);
  process.exitCode = 1;
});
