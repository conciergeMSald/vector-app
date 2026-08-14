// ============================================================================
// VECTOR — Alumni Network Database — LA Cohort Seed Data
// Per ALUMNI-NETWORK-ARCH-001 v1, Section 2 (Ingestion Path)
//
// Source: Alumni_Network_Database.docx (the six-school LA research document).
// family_facing_summary fields are the source document's own "recommended
// database description" paragraphs, used VERBATIM — this is protected text,
// per CIO review. Do not rewrite for brevity or tone; the hedging language
// ("a reasonable current estimate", "not an official census") is load-
// bearing and must be preserved exactly.
//
// school_slug values below are confirmed against alumni_school_slug_map.js
// (single source of truth as of the pass-2 addition below) rather than
// assumed — the earlier "first draft" caveat is resolved for all ten schools
// currently in this file.
//
// engine_version stamps every row from this ingestion pass so future
// corrections or re-ingestion are traceable, matching report_versions'
// existing engine_version convention.
//
// PASS 2 (2026-08-13): added Syracuse, NYU, Berkeley, and Stanford to
// complete the 10-school LA cohort (ALUMNI-NETWORK-ARCH-001). None of these
// four schools publish an official or reliably current Los Angeles-specific
// alumni headcount, so population_confidence is 'unavailable' for all four —
// consistent with how Tulane and Missouri were already handled in pass 1,
// not a lowering of the bar. family_facing_summary text for these four is
// newly authored from public university/chapter sources (not verbatim from
// Alumni_Network_Database.docx, which only covered the original six) and
// should get the same CIO review pass 1's summaries received before it ships
// as protected/verbatim text.
// ============================================================================

'use strict';

const ENGINE_VERSION = 'alumni-la-cohort-v1-2026-07-29';
const RESEARCHED_AT = '2026-07-29';
const ENGINE_VERSION_PASS2 = 'alumni-la-cohort-v1-pass2-2026-08-13';
const RESEARCHED_AT_PASS2 = '2026-08-13';

const ALUMNI_NETWORK_SEED_LA = [
  {
    school_slug: 'indiana-university',
    school_name: 'Indiana University',
    metro_area: 'Los Angeles',
    population_low: 10000,
    population_high: null,
    population_confidence: 'directional_estimate',
    population_source_note: "Directional estimate from a former IUAA-Los Angeles board member's professional profile, not a university census. Covers Los Angeles and Orange County combined.",
    chapter_name: 'IU Alumni Association Los Angeles Chapter',
    chapter_strength: 'strong',
    signature_pipeline_name: 'Hollywood Hoosiers',
    signature_pipeline_description: "An extension of the IU Alumni Association's Los Angeles Chapter created specifically to support alumni working in entertainment; holds mixers, writer panels, and industry-oriented events. Reinforced by IU's Media School, which operates an IU Media Center in Los Angeles for student internships in film, television, sports, fashion, entertainment, and culture.",
    network_character: 'Large and industry-diverse, broad entertainment and business network',
    family_facing_summary: "Indiana University has an estimated 10,000-plus alumni across greater Los Angeles and Orange County, anchored by an official alumni chapter and an especially developed entertainment-industry subgroup, Hollywood Hoosiers. Its LA diaspora is geographically dispersed but professionally concentrated in media, entertainment, communications, marketing and adjacent business fields.",
    researched_at: RESEARCHED_AT,
    engine_version: ENGINE_VERSION,
    industries: [
      { industry_label: 'Entertainment, Media & Communications', strength_rating: 'very_strong', notes: 'Anchored by Hollywood Hoosiers and the IU Media Center in Los Angeles.' },
      { industry_label: 'Marketing, Advertising & Public Relations', strength_rating: 'strong', notes: null },
      { industry_label: 'Finance & Wealth Management', strength_rating: 'strong', notes: 'Supported by Kelley School of Business alumni infrastructure.' },
      { industry_label: 'Technology & Digital Products', strength_rating: 'moderate', notes: null },
      { industry_label: 'Sports & Sports Media', strength_rating: 'moderate', notes: null },
    ],
    geo_nodes: [
      { neighborhood: 'West Hollywood / Hollywood', relevance_notes: 'Entertainment, media, and chapter events center of gravity.' },
      { neighborhood: 'Westside Los Angeles', relevance_notes: 'Film, streaming, advertising, technology, and media.' },
      { neighborhood: 'Studio City, Burbank & San Fernando Valley', relevance_notes: 'Television and studio employment.' },
      { neighborhood: 'Pasadena & Eastern LA', relevance_notes: 'Families, professionals, Rose Bowl-related activity.' },
      { neighborhood: 'Orange County', relevance_notes: 'Business, finance, healthcare, real estate, established alumni households.' },
    ],
  },

  {
    school_slug: 'vanderbilt',
    school_name: 'Vanderbilt University',
    metro_area: 'Los Angeles',
    population_low: 3590,
    population_high: 3590,
    population_confidence: 'official',
    population_source_note: 'University-published chapter figure — 3,590 alumni and 230 current students connected to the Los Angeles chapter market.',
    chapter_name: 'Los Angeles Chapter of the Vanderbilt Alumni Association',
    chapter_strength: 'strong',
    signature_pipeline_name: 'Vandy in Hollywood',
    signature_pipeline_description: 'A formal alumni-supported entertainment pipeline founded in 2004, placing approximately 30 students annually with studios, agencies, production companies, and distributors through internships, mentoring, studio tours, and industry panels.',
    network_character: 'Selective and professionally concentrated relative to its size',
    family_facing_summary: "Vanderbilt University maintains an official Los Angeles alumni chapter serving 3,590 alumni and connecting with approximately 230 current students. Although smaller in raw population than the Los Angeles networks of Indiana University or CU Boulder, Vanderbilt's diaspora is unusually organized and professionally influential. Its defining asset is Vandy in Hollywood, a formal alumni-supported entertainment pipeline founded in 2004 that places approximately 30 students annually with studios, agencies, production companies and distributors. The broader alumni network extends into law, business, finance, healthcare, technology and professional services, with geographic nodes around Hollywood, Los Feliz, Culver City, West Hollywood, Mid-City, Santa Monica and the Westside.",
    researched_at: RESEARCHED_AT,
    engine_version: ENGINE_VERSION,
    industries: [
      { industry_label: 'Entertainment, Film & Television', strength_rating: 'exceptional', notes: 'Vandy in Hollywood is the defining asset.' },
      { industry_label: 'Entertainment & Intellectual Property Law', strength_rating: 'exceptional', notes: 'Reinforced by Vanderbilt Law School, 9,400+ law alumni worldwide.' },
      { industry_label: 'Business, Finance & Management', strength_rating: 'strong', notes: 'Owen Graduate School of Management alumni base.' },
      { industry_label: 'Healthcare & Medicine', strength_rating: 'strong', notes: 'Vanderbilt Medical Alumni Association extends the network beyond undergraduate alumni.' },
    ],
    geo_nodes: [
      { neighborhood: 'Hollywood, Los Feliz & Larchmont', relevance_notes: 'Film, television, writing, production, talent representation.' },
      { neighborhood: 'Culver City', relevance_notes: 'Proximity to studios and streaming businesses (Sony Studios area).' },
      { neighborhood: 'West Hollywood & Mid-City', relevance_notes: 'Access to Century City, Hollywood, Santa Monica, and central LA.' },
      { neighborhood: 'Santa Monica, Venice, Marina del Rey & Playa Vista', relevance_notes: 'Technology, digital media, consumer brands, startups.' },
      { neighborhood: 'Century City, Brentwood & Westside', relevance_notes: 'Law, finance, investment management, corporate leadership.' },
    ],
  },

  {
    school_slug: 'tulane',
    school_name: 'Tulane University',
    metro_area: 'Los Angeles',
    population_low: null,
    population_high: null,
    population_confidence: 'unavailable',
    population_source_note: 'Tulane does not publish a current, authoritative Los Angeles-area alumni count. Classified as medium-sized based on qualitative programming and chapter activity, not a numerical estimate.',
    chapter_name: 'Tulane Club of Los Angeles',
    chapter_strength: 'strong',
    signature_pipeline_name: null,
    signature_pipeline_description: null,
    network_character: 'Culturally cohesive and relationship-driven, with particular strength in entertainment, law, business, and community engagement',
    family_facing_summary: "Tulane University maintains an active and culturally cohesive alumni diaspora in greater Los Angeles, supported by the official Tulane Club of Los Angeles. Tulane does not publish a reliable current metropolitan alumni count, so the network should be classified as medium-sized rather than assigned an unsupported numerical estimate. Its strongest professional concentrations include entertainment, film and television, music, entertainment and intellectual-property law, business, real estate, technology, communications, architecture, and design. The club organizes Mardi Gras celebrations, crawfish boils, sports gatherings, technology meetups, book clubs, and year-round community-service programs, creating unusually strong social continuity among graduates. Geographic nodes likely include Hollywood, West Hollywood, Beverly Hills, Century City, Culver City, Santa Monica, and Silicon Beach.",
    researched_at: RESEARCHED_AT,
    engine_version: ENGINE_VERSION,
    industries: [
      { industry_label: 'Entertainment, Film & Television', strength_rating: 'very_strong', notes: null },
      { industry_label: 'Entertainment & Intellectual Property Law', strength_rating: 'very_strong', notes: 'Tulane Law entertainment/media law programming, including studio visits to Warner Bros., MGM, and Sony.' },
      { industry_label: 'Technology & Startups (Silicon Beach)', strength_rating: 'moderate', notes: 'Growing — 2026 Alumni in Tech Meetup in Silicon Beach.' },
      { industry_label: 'Business, Real Estate & Entrepreneurship', strength_rating: 'strong', notes: 'Freeman School of Business alumni base.' },
      { industry_label: 'Community Service & Civic Engagement', strength_rating: 'exceptional', notes: 'Outreach Tulane year-round local service program.' },
    ],
    geo_nodes: [
      { neighborhood: 'Hollywood, West Hollywood, Studio City & Burbank', relevance_notes: 'Film, television, talent representation, production.' },
      { neighborhood: 'Beverly Hills & Century City', relevance_notes: 'Entertainment law, talent agencies, private wealth, corporate law.' },
      { neighborhood: 'Santa Monica, Venice, Playa Vista & Silicon Beach', relevance_notes: 'Technology, startups, digital media, advertising.' },
      { neighborhood: 'Culver City & Mid-City', relevance_notes: 'Studios, streaming, advertising, media technology.' },
      { neighborhood: 'South Bay', relevance_notes: 'Finance, real estate, professional services, established family households.' },
    ],
  },

  {
    school_slug: 'cu-boulder',
    school_name: 'University of Colorado Boulder',
    metro_area: 'Los Angeles',
    population_low: 7000,
    population_high: 9000,
    population_confidence: 'directional_estimate',
    population_source_note: "Best documented historical figure: 6,528 alumni in greater Los Angeles in 2016 (CU Boulder's fifth-largest alumni market nationally at the time). The 7,000-9,000 range is a reasonable current planning estimate, not a verified 2026 census.",
    chapter_name: 'Forever Buffs Los Angeles (plus a separate Orange County chapter and Southern California Engineering Network)',
    chapter_strength: 'strong',
    signature_pipeline_name: null,
    signature_pipeline_description: null,
    network_character: 'Large and technically diverse, especially strong in aerospace, engineering, media, and lifestyle industries',
    family_facing_summary: "The University of Colorado Boulder has a large and longstanding alumni diaspora in greater Los Angeles. CU Boulder reported 6,528 Los Angeles-area alumni in 2016, making LA one of its largest markets outside Colorado; a reasonable current working estimate is approximately 7,000-9,000 alumni, although the university does not publish a verified 2026 metro count. The network is supported by an official Forever Buffs Los Angeles chapter, a separate Orange County chapter and a Southern California engineering network. Alumni are especially relevant across entertainment and media, advertising, aerospace, engineering, technology, entrepreneurship and active-lifestyle industries, with visible geographic nodes around Santa Monica, the Westside, Manhattan Beach and the South Bay.",
    researched_at: RESEARCHED_AT,
    engine_version: ENGINE_VERSION,
    industries: [
      { industry_label: 'Aerospace, Engineering & Technology', strength_rating: 'exceptional', notes: 'Southern California Alumni Network maintained by the College of Engineering.' },
      { industry_label: 'Entertainment, Media & Advertising', strength_rating: 'strong', notes: 'LA Entertainment Buffs subgroup.' },
      { industry_label: 'Entrepreneurship & Digital Business', strength_rating: 'strong', notes: null },
      { industry_label: 'Real Estate & Finance', strength_rating: 'moderate', notes: null },
      { industry_label: 'Outdoor, Sports & Lifestyle', strength_rating: 'moderate', notes: 'Cultural/career-fit inference, not a measured concentration.' },
    ],
    geo_nodes: [
      { neighborhood: 'Westside & Santa Monica', relevance_notes: 'Technology, streaming, digital media, advertising, consumer brands.' },
      { neighborhood: 'South Bay & Manhattan Beach', relevance_notes: 'Aerospace, engineering, technology — El Segundo, Hawthorne, Redondo Beach, Torrance.' },
      { neighborhood: 'Hollywood, West Hollywood, Burbank & Studio City', relevance_notes: 'Film, television, publicity, production, music.' },
      { neighborhood: 'Pasadena & San Gabriel Valley', relevance_notes: 'Engineering, scientific research, aerospace, technology.' },
      { neighborhood: 'Orange County', relevance_notes: 'Healthcare, real estate, finance, consumer products, engineering.' },
    ],
  },

  {
    school_slug: 'elon',
    school_name: 'Elon University',
    metro_area: 'Los Angeles',
    population_low: 600,
    population_high: 800,
    population_confidence: 'directional_estimate',
    population_source_note: 'Best publicly reported figure: approximately 500 Elon alumni in the LA region in 2022 (up from roughly 50 in 2008). The 600-800 range is a reasonable current working estimate, not an official 2026 census.',
    chapter_name: 'Elon Los Angeles regional alumni chapter',
    chapter_strength: 'strong',
    signature_pipeline_name: 'Elon University Los Angeles / Women of the Elon Entertainment Empire (WEEE)',
    signature_pipeline_description: "Elon University Los Angeles is a permanent university presence (part of Elon's National Campus system) letting students study, intern, and build alumni relationships in Los Angeles before graduation. Women of the Elon Entertainment Empire (WEEE) is a specialized mentoring and professional network for Elon alumnae working in LA entertainment.",
    network_character: 'Small but highly concentrated and purpose-built for an undergraduate-to-entertainment pipeline',
    family_facing_summary: "Elon University maintains a comparatively small but highly concentrated alumni diaspora in Los Angeles. The best publicly reported count placed approximately 500 Elon alumni in the region in 2022, up from roughly 50 in 2008; a reasonable current working estimate is approximately 600-800, although Elon does not publish a verified 2026 census. The network is anchored by an active regional alumni chapter and Elon University Los Angeles, which gives students direct access to courses, internships, alumni mentoring and entertainment-industry programming. Alumni are concentrated primarily in film, television, production, communications, advertising, public relations, performance, social media and content creation, with a visible center in Hollywood and West Hollywood.",
    researched_at: RESEARCHED_AT,
    engine_version: ENGINE_VERSION,
    industries: [
      { industry_label: 'Film, Television & Production', strength_rating: 'exceptional', notes: 'Relative to alumni size.' },
      { industry_label: 'Communications, Advertising & Public Relations', strength_rating: 'very_strong', notes: 'Core institutional strength, School of Communications.' },
      { industry_label: 'Content Creation & Social Media', strength_rating: 'strong', notes: null },
    ],
    geo_nodes: [
      { neighborhood: 'Hollywood & West Hollywood', relevance_notes: 'Clearest center of gravity — Elon LA programming facilities located here.' },
      { neighborhood: 'Beverly Hills & Century City', relevance_notes: 'Talent agencies, publicity firms, entertainment law.' },
      { neighborhood: 'Burbank, Studio City & San Fernando Valley', relevance_notes: 'Studio and production-company employment (inferred, not a documented alumni count).' },
      { neighborhood: 'Culver City & Westside', relevance_notes: 'Streaming, advertising, digital media, content production.' },
    ],
  },

  {
    school_slug: 'missouri',
    school_name: 'University of Missouri',
    metro_area: 'Los Angeles',
    population_low: null,
    population_high: null,
    population_confidence: 'unavailable',
    population_source_note: 'Mizzou does not publish a Los Angeles-only alumni count. In 2025 the university reported nearly 10,000 alumni collectively across Los Angeles, San Francisco, and the Bay Area combined — not an LA-only figure.',
    chapter_name: 'Los Angeles/Orange County Chapter of the Mizzou Alumni Association',
    chapter_strength: 'strong',
    signature_pipeline_name: null,
    signature_pipeline_description: null,
    network_character: 'Large regional presence, professionally concentrated around journalism, media, and strategic communications',
    family_facing_summary: "The University of Missouri maintains a large and longstanding alumni diaspora across Los Angeles and Orange County, supported by an official regional chapter whose history extends to at least the 1950s. Mizzou does not publish a current Los Angeles-only alumni count; in 2025, the university reported nearly 10,000 alumni collectively across Los Angeles, San Francisco and the Bay Area. The Los Angeles network's defining strength is the Missouri School of Journalism, with notable concentrations in broadcast and digital journalism, entertainment reporting, television production, sports media, advertising, public relations and strategic communication. Alumni are geographically distributed across greater Los Angeles, with visible activity in West Hollywood, Westwood, the Westside and Orange County.",
    researched_at: RESEARCHED_AT,
    engine_version: ENGINE_VERSION,
    industries: [
      { industry_label: 'Journalism, Broadcast & Digital News', strength_rating: 'exceptional', notes: 'Missouri School of Journalism — the defining strength.' },
      { industry_label: 'Entertainment & Sports Media', strength_rating: 'very_strong', notes: null },
      { industry_label: 'Advertising & Strategic Communication', strength_rating: 'very_strong', notes: null },
      { industry_label: 'Business & Healthcare', strength_rating: 'moderate', notes: 'Secondary, not the network\'s defining public identity.' },
    ],
    geo_nodes: [
      { neighborhood: 'West Hollywood & Hollywood', relevance_notes: 'Entertainment journalism, television production, publicity.' },
      { neighborhood: 'Westwood & the Westside', relevance_notes: 'Access to UCLA, Century City, Beverly Hills employment corridor.' },
      { neighborhood: 'Burbank, Studio City & San Fernando Valley', relevance_notes: 'Studio and network employment (inferred, not a documented alumni count).' },
      { neighborhood: 'Orange County', relevance_notes: 'Business, finance, healthcare, real estate, established family households.' },
    ],
  },

  {
    school_slug: 'syracuse',
    school_name: 'Syracuse University',
    metro_area: 'Los Angeles',
    population_low: null,
    population_high: null,
    population_confidence: 'unavailable',
    population_source_note: "Syracuse's own Los Angeles program materials describe the region's alumni base only in general terms ('thousands' of graduates), with no specific published headcount, so no numerical estimate is offered here.",
    chapter_name: 'SoCal Orange Alumni Club, supported by a 21-member LA Regional Council and the SU in LA regional office',
    chapter_strength: 'strong',
    signature_pipeline_name: 'SU in LA',
    signature_pipeline_description: "Syracuse operates a permanent 22,000-square-foot regional campus in North Hollywood — established in 2005 and expanded in 2024 through a gift honoring alumnus Dick Clark's legacy — that runs the SULA and Newhouse LA Semester programs, placing students directly with entertainment and media companies before graduation and giving the university an on-the-ground presence most peer schools address only through a club.",
    network_character: 'Media- and entertainment-concentrated, anchored by a physical West Coast campus rather than a chapter alone',
    family_facing_summary: "Syracuse University maintains an unusually developed Los Angeles presence for a school its size, anchored by a permanent 22,000-square-foot regional campus in North Hollywood — established in 2005 and expanded in 2024 through a gift honoring alumnus Dick Clark's legacy — rather than a chapter alone. Syracuse's own materials describe its Los Angeles alumni base only in general terms ('thousands' of graduates), without a specific published count, so no numerical estimate is offered here. The network is organized through the SoCal Orange Alumni Club and a 21-member LA Regional Council, and its defining strength is Newhouse School of Public Communications alumni working across entertainment, journalism, television and media, reinforced by the SULA and Newhouse LA Semester programs that place students directly with entertainment and media companies before graduation. Geographic nodes include North Hollywood, Hollywood, Burbank and Studio City, plus a Westside professional cluster.",
    researched_at: RESEARCHED_AT_PASS2,
    engine_version: ENGINE_VERSION_PASS2,
    industries: [
      { industry_label: 'Journalism, Broadcast & Media (Newhouse)', strength_rating: 'exceptional', notes: 'Newhouse School of Public Communications is the defining institutional strength.' },
      { industry_label: 'Entertainment, Film & Television', strength_rating: 'very_strong', notes: 'Reinforced by the North Hollywood campus and Newhouse LA Semester.' },
      { industry_label: 'Sports Media & Communications', strength_rating: 'strong', notes: 'Newhouse has a nationally recognized sports media concentration.' },
      { industry_label: 'Business & Management (Whitman)', strength_rating: 'moderate', notes: null },
    ],
    geo_nodes: [
      { neighborhood: 'North Hollywood', relevance_notes: 'Site of the SU in LA regional campus — the network\'s physical center of gravity.' },
      { neighborhood: 'Hollywood, Burbank & Studio City', relevance_notes: 'Film, television, and studio employment.' },
      { neighborhood: 'Westside Los Angeles', relevance_notes: 'Media, advertising, and entertainment-adjacent business (inferred, not a documented alumni count).' },
    ],
  },

  {
    school_slug: 'nyu',
    school_name: 'New York University',
    metro_area: 'Los Angeles',
    population_low: null,
    population_high: null,
    population_confidence: 'unavailable',
    population_source_note: "NYU does not publish a Los Angeles-specific alumni count. NYU is one of the largest private universities in the country by total alumni, so its LA diaspora is presumed substantial, but that is an inference from institutional scale, not a metro-level figure.",
    chapter_name: 'NYU Alumni Club in Los Angeles, alongside Tisch West (Tisch School of the Arts alumni alliance)',
    chapter_strength: 'strong',
    signature_pipeline_name: 'Tisch West',
    signature_pipeline_description: "Tisch West is a volunteer-led alliance of Los Angeles-based Tisch School of the Arts alumni, formally supported by NYU's Alumni Relations office. It exists specifically to raise the visibility of Tisch alumni in entertainment, build cross-generational and cross-department industry connections, and ease the transition for New York-trained graduates moving into the LA industry — running professional panels, an 'NYU in LA' networking group, and working alongside Tisch Represents, a parallel initiative for underrepresented voices in media.",
    network_character: 'Very large by raw population given NYU\'s overall size, but its distinct LA identity is organized around entertainment and media (Tisch) rather than the university\'s broader New York-centric business identity',
    family_facing_summary: "New York University does not publish a Los Angeles-specific alumni count, but given NYU's overall size — one of the largest private universities in the country — its Los Angeles diaspora is presumed substantial, even though that is an inference from institutional scale rather than a confirmed metro figure. The network is organized through a general NYU Alumni Club in Los Angeles and, more distinctively, Tisch West, a volunteer-led alliance of Los Angeles-based Tisch School of the Arts alumni formally supported by NYU's Alumni Relations office. Tisch West exists specifically to raise the visibility of Tisch alumni in entertainment, connect alumni across generations and departments, and ease the transition for New York-trained graduates moving into the Los Angeles industry, working alongside Tisch Represents, a parallel initiative for underrepresented voices in media. NYU's Los Angeles identity is therefore concentrated in film, television and entertainment (Tisch), with secondary strength in media, journalism and education (Steinhardt) and business (Stern) — reflecting the six NYU schools, including Stern, Tisch, Steinhardt and Gallatin, that jointly run NYU's Los Angeles study-away program for entertainment- and media-track students.",
    researched_at: RESEARCHED_AT_PASS2,
    engine_version: ENGINE_VERSION_PASS2,
    industries: [
      { industry_label: 'Film, Television & Entertainment (Tisch)', strength_rating: 'exceptional', notes: 'Tisch West is the defining LA-specific asset.' },
      { industry_label: 'Media, Journalism & Education (Steinhardt)', strength_rating: 'strong', notes: null },
      { industry_label: 'Business, Finance & Management (Stern)', strength_rating: 'moderate', notes: 'Present but less LA-specific a pull than NYU\'s New York identity.' },
      { industry_label: 'Law', strength_rating: 'moderate', notes: 'Cultural/career-fit inference from NYU Law\'s overall scale, not a measured LA concentration.' },
    ],
    geo_nodes: [
      { neighborhood: 'Hollywood & Silver Lake / Los Feliz', relevance_notes: 'Entertainment and creative-industry concentration (inferred from Tisch West\'s focus, not a documented alumni count).' },
      { neighborhood: 'Downtown LA & Arts District', relevance_notes: 'Independent film, media production, and creative business (inferred, not a documented alumni count).' },
      { neighborhood: 'Westside Los Angeles', relevance_notes: 'Studios, streaming, and entertainment-adjacent business.' },
    ],
  },

  {
    school_slug: 'berkeley',
    school_name: 'University of California-Berkeley',
    metro_area: 'Los Angeles',
    population_low: null,
    population_high: null,
    population_confidence: 'unavailable',
    population_source_note: "Berkeley's own alumni-association materials described its Los Angeles chapter as the association's second-largest nationally as of the 2016-2017 membership cycle — the most recent figure identified in this pass — but that is a relative ranking from nearly a decade ago, not a current headcount, so no numerical estimate is offered here.",
    chapter_name: 'Cal Alumni Association Los Angeles Chapter (CLAA LA), alongside the Berkeley Haas Alumni Network of LA',
    chapter_strength: 'strong',
    signature_pipeline_name: null,
    signature_pipeline_description: null,
    network_character: 'Large and civically engaged, spanning both a general-alumni chapter and a distinct business-school (Haas) chapter, without one single named industry pipeline in the way some smaller schools have',
    family_facing_summary: "The University of California, Berkeley maintains a large Los Angeles alumni presence organized through the Cal Alumni Association's Los Angeles chapter (CLAA LA), which the university's own materials described as its second-largest chapter nationally as of the 2016-2017 membership cycle — the most recent figure identified, and a relative ranking rather than a confirmed current headcount. A separate Berkeley Haas Alumni Network of LA serves business-school alumni specifically. CLAA LA's programming spans social and networking events, workforce development, and community-service partnerships in South Central, East LA and Watts, alongside collaborative events with other West Coast university chapters, including an annual Big Game gathering with Stanford alumni. Alumni are professionally concentrated in technology and engineering, business and finance, law, government and entertainment, with Haas alumni forming a distinct hub around the Westside and South Bay tech and finance corridor.",
    researched_at: RESEARCHED_AT_PASS2,
    engine_version: ENGINE_VERSION_PASS2,
    industries: [
      { industry_label: 'Technology & Engineering', strength_rating: 'very_strong', notes: 'Reflects Berkeley\'s broader College of Engineering reputation, not an LA-specific measured count.' },
      { industry_label: 'Business, Finance & Management (Haas)', strength_rating: 'strong', notes: 'Berkeley Haas Alumni Network of LA is a distinct, active chapter.' },
      { industry_label: 'Law & Government', strength_rating: 'moderate', notes: null },
      { industry_label: 'Entertainment & Media', strength_rating: 'moderate', notes: null },
      { industry_label: 'Nonprofit & Civic Engagement', strength_rating: 'strong', notes: 'CLAA LA\'s South Central, East LA, and Watts community-service partnerships are a distinctive chapter identity.' },
    ],
    geo_nodes: [
      { neighborhood: 'Westside Los Angeles', relevance_notes: 'Technology, finance, and Haas alumni concentration (inferred, not a documented alumni count).' },
      { neighborhood: 'South Bay', relevance_notes: 'Engineering and technology employment (inferred, not a documented alumni count).' },
      { neighborhood: 'South Central, East LA & Watts', relevance_notes: 'CLAA LA\'s community-service and scholarship programming footprint, not a residential/professional alumni concentration.' },
    ],
  },

  {
    school_slug: 'stanford',
    school_name: 'Stanford University',
    metro_area: 'Los Angeles',
    population_low: null,
    population_high: null,
    population_confidence: 'unavailable',
    population_source_note: 'Stanford does not publish a consolidated Los Angeles-area alumni count; its Southern California presence is instead organized across several geographically distinct clubs, which makes a single metro-wide figure difficult to source even directionally.',
    chapter_name: 'Stanford Club of West Los Angeles, Stanford Club of Pasadena, and Stanford Club of Palos Verdes/South Bay, alongside Stanford Young Alumni - LA and GSB regional programming',
    chapter_strength: 'strong',
    signature_pipeline_name: 'Stanford in Entertainment - LA',
    signature_pipeline_description: "Stanford in Entertainment - LA is a nonprofit alumni professional organization dedicated to serving Stanford graduates across film, television, music, theater, interactive media and other entertainment fields, promoting members' careers through community-building, networking and industry programming — Stanford's most distinctive asset for entertainment-oriented families, though smaller and less centrally administered than comparable programs at Vanderbilt or NYU.",
    network_character: 'Large and geographically dispersed across multiple distinct sub-metro clubs rather than one central chapter, professionally concentrated in technology, venture capital and finance, with meaningful law, aerospace/engineering, and — via a dedicated affinity group — entertainment presence',
    family_facing_summary: "Stanford University does not publish a consolidated Los Angeles-area alumni count; its Southern California presence is instead organized across several geographically distinct clubs — the Stanford Club of West Los Angeles, Stanford Club of Pasadena, and Stanford Club of Palos Verdes/South Bay, alongside Stanford Young Alumni - LA and dedicated Graduate School of Business regional programming — which makes a single metro-wide figure difficult to source even directionally. Its most distinctive asset for entertainment-oriented families is Stanford in Entertainment - LA, a nonprofit alumni professional organization serving Stanford graduates across film, television, music, theater and interactive media. Beyond entertainment, the broader Los Angeles network is professionally concentrated in technology, venture capital and finance — reflecting Stanford's core institutional identity — along with law, and, through the Pasadena and Palos Verdes/South Bay clubs, aerospace and engineering. Geographic nodes include West Los Angeles and the Westside, Pasadena and the San Gabriel Valley, and the South Bay/Palos Verdes peninsula.",
    researched_at: RESEARCHED_AT_PASS2,
    engine_version: ENGINE_VERSION_PASS2,
    industries: [
      { industry_label: 'Technology & Venture Capital', strength_rating: 'exceptional', notes: 'Reflects Stanford\'s core institutional identity, not an LA-specific measured count.' },
      { industry_label: 'Business, Finance & Consulting (GSB)', strength_rating: 'strong', notes: 'Supported by dedicated GSB regional alumni programming.' },
      { industry_label: 'Entertainment, Film & Media', strength_rating: 'strong', notes: 'Stanford in Entertainment - LA is a distinct, active affinity organization.' },
      { industry_label: 'Aerospace & Engineering', strength_rating: 'moderate', notes: 'Reflected in the Pasadena and Palos Verdes/South Bay club footprints.' },
      { industry_label: 'Law', strength_rating: 'moderate', notes: null },
    ],
    geo_nodes: [
      { neighborhood: 'West Los Angeles & the Westside', relevance_notes: 'Technology, entertainment, law, and finance — Stanford Club of West LA territory.' },
      { neighborhood: 'Pasadena & San Gabriel Valley', relevance_notes: 'Engineering, aerospace, and scientific research — Stanford Club of Pasadena territory, with JPL-adjacent professional concentration (inferred, not a documented alumni count).' },
      { neighborhood: 'Palos Verdes & South Bay', relevance_notes: 'Aerospace, engineering, and established professional households — Stanford Club of Palos Verdes/South Bay territory.' },
    ],
  },
];

const ALUMNI_NETWORK_COMPARISONS_LA = [
  {
    metro_area: 'Los Angeles',
    comparison_title: 'Six-School Los Angeles Alumni Network Comparison',
    schools_included: ['indiana-university', 'cu-boulder', 'vanderbilt', 'elon', 'tulane', 'missouri'],
    researched_at: RESEARCHED_AT,
    comparison_content:
`| University | Relative LA Scale | Defining LA Advantage | Network Character |
|---|---|---|---|
| Indiana University | Large | Entertainment, media, music and business | Broad and industry-diverse |
| CU Boulder | Large | Aerospace, engineering, media and lifestyle industries | Technically diverse |
| Vanderbilt | Medium | Formal entertainment pipeline, law and executive access | Selective and relationship-driven |
| Elon | Small | Highly structured undergraduate entertainment access | Intimate and hands-on |
| Tulane | Medium | Entertainment law, business and cultural cohesion | Social and relationship-driven |
| Missouri | Large regional presence | Journalism, television, sports media and strategic communications | Professionally concentrated around media |`,
  },

  {
    metro_area: 'Los Angeles',
    comparison_title: 'Ten-School Los Angeles Alumni Network Comparison (Full Cohort)',
    schools_included: ['indiana-university', 'cu-boulder', 'vanderbilt', 'elon', 'tulane', 'missouri', 'syracuse', 'nyu', 'berkeley', 'stanford'],
    researched_at: RESEARCHED_AT_PASS2,
    comparison_content:
`| University | Relative LA Scale | Defining LA Advantage | Network Character |
|---|---|---|---|
| Indiana University | Large | Entertainment, media, music and business | Broad and industry-diverse |
| CU Boulder | Large | Aerospace, engineering, media and lifestyle industries | Technically diverse |
| Vanderbilt | Medium | Formal entertainment pipeline, law and executive access | Selective and relationship-driven |
| Elon | Small | Highly structured undergraduate entertainment access | Intimate and hands-on |
| Tulane | Medium | Entertainment law, business and cultural cohesion | Social and relationship-driven |
| Missouri | Large regional presence | Journalism, television, sports media and strategic communications | Professionally concentrated around media |
| Syracuse | Unknown (population unpublished) | Physical North Hollywood campus, journalism and entertainment (Newhouse) | Media-concentrated, anchored by a real campus footprint |
| NYU | Unknown (population unpublished; presumed large from institutional scale) | Tisch West entertainment pipeline | Large and diverse, entertainment-led via Tisch |
| Berkeley | Unknown (population unpublished; described as a top chapter as of 2016-17) | Technology/engineering plus a distinct Haas business chapter | Large, civically engaged, no single dominant industry |
| Stanford | Unknown (population unpublished; multiple sub-metro clubs) | Technology/VC plus a dedicated entertainment affinity group | Large but decentralized across several geographic clubs |

Note: Syracuse, NYU, Berkeley and Stanford lack a published Los Angeles-specific alumni headcount (see each school's population_source_note), so "Relative LA Scale" for these four is a qualitative characterization, not a like-for-like ranking against the six schools with documented or estimated figures.`,
  },
];

if (typeof module !== 'undefined') {
  module.exports = { ALUMNI_NETWORK_SEED_LA, ALUMNI_NETWORK_COMPARISONS_LA, ENGINE_VERSION, RESEARCHED_AT };
}
