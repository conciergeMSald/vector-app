/**
 * VECTOR Lifescape — Career Intelligence Integration Guide
 * Day 3 Implementation — June 19, 2026
 *
 * TWO CHANGES to lifescape.html:
 *   1. Add script tag in <head>
 *   2. Wire buildCareerLandscape() into callB prompt
 *   3. Wire findBridgePath() into callC prompt
 */

// ─────────────────────────────────────────────────────────────
// CHANGE 1 — Add to <head> after lifescape_college_prefs_v3.js
// ─────────────────────────────────────────────────────────────

// <script src="/lifescape_career_intelligence.js"></script>


// ─────────────────────────────────────────────────────────────
// CHANGE 2 — callB prompt injection
// Find the callB prompt builder in lifescape.html and add this
// block BEFORE the "YOUR JOB" instructions section
// ─────────────────────────────────────────────────────────────

function buildCareerLandscapeBlock(session) {
  // Resolve worlds from session
  const worlds = session.worlds_chosen || [];
  
  // If no worlds chosen yet, fall back to NAICS inference
  const resolvedWorlds = worlds.length > 0 
    ? worlds 
    : inferWorldsFromNAICS(session.naicsSectors || []);

  if (!resolvedWorlds || resolvedWorlds.length === 0) return '';

  return buildCareerLandscape(resolvedWorlds, IBIS_WORLD_REGISTRY);
}

function inferWorldsFromNAICS(naicsSectors) {
  // Map NAICS sector codes to world IDs using WORLD_KEYWORDS
  const worlds = [];
  for (const sector of naicsSectors) {
    const worldId = resolveWorldId(sector.label || sector.name || '');
    if (worldId && !worlds.includes(worldId)) worlds.push(worldId);
  }
  return worlds.slice(0, 2); // max 2 inferred worlds
}

// In your callB prompt builder, add this after student profile block:
// const careerBlock = buildCareerLandscapeBlock(session);
// Then inject into prompt:
// ${careerBlock ? `\n── CAREER LANDSCAPE ──\n${careerBlock}\n` : ''}


// ─────────────────────────────────────────────────────────────
// CHANGE 3 — callC prompt injection (counselor note)
// Find the callC prompt builder and add this block
// ─────────────────────────────────────────────────────────────

function buildBridgePathBlock(session) {
  // resolveRegionalBridgeKey gives us the nearest metro for any US ZIP
  const bridgeKey = resolveRegionalBridgeKey(session.zip || '');
  
  // findBridgePath checks if student profile triggers CC pathway
  const bridgePath = findBridgePath(session, bridgeKey);
  
  if (!bridgePath) return '';
  
  return `── COMMUNITY COLLEGE BRIDGE PATH ──
Metro: ${bridgeKey}
Institution: ${bridgePath.name}
Transfer Rate: ${bridgePath.transfer_rate || 'strong'}
Target: ${bridgePath.target || 'regional university'}
Note: ${bridgePath.note || ''}`;
}

// In your callC prompt builder:
// const bridgeBlock = buildBridgePathBlock(session);
// Then inject into prompt:
// ${bridgeBlock ? `\n${bridgeBlock}\n` : ''}


// ─────────────────────────────────────────────────────────────
// CHANGE 4 — Add worlds_chosen to session object
// Find where session is initialized in lifescape.html and add:
// ─────────────────────────────────────────────────────────────

// worlds_chosen: [],   // populated by screen-37 world selection
// big_five: {},        // populated by screen-36 BFI-10


// ─────────────────────────────────────────────────────────────
// TESTING CHECKLIST — Day 3
// ─────────────────────────────────────────────────────────────
/*
  □ Script loads without console errors
  □ IBIS_WORLD_REGISTRY accessible in browser console
  □ buildCareerLandscape(['technology']) returns non-empty string
  □ resolveRegionalBridgeKey('90210') returns 'Beverly Hills' or 'Los Angeles'
  □ findBridgePath() returns null for high-GPA students (no CC trigger)
  □ findBridgePath() returns pathway for GPA < 2.8 students
  □ callB prompt contains career landscape block
  □ callC prompt contains bridge path when triggered, empty when not
  □ Report career section reads as intelligence-backed, not generic
*/
