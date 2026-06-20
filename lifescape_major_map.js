/**
 * VECTOR Lifescape — Major Map
 * File: lifescape_major_map.js
 * Version: 1.0 — Tier 1 Build — June 19, 2026
 *
 * PURPOSE:
 * Maps NAICS industry clusters → declared major candidates → entry careers → program keywords.
 * Provides structured major intelligence for:
 *   — callD prompt (resolved_major injected into school recommendation)
 *   — matchUniversities() D4 scorer (getProgramKeywords replaces brittle free-text matching)
 *   — Counselor View tab (primary_major, secondary_major, entry_careers rendered)
 *
 * BUILD STATUS:
 * ✅ Tier 1 — NAICS 51, 52, 54, 71 (complete)
 * ⬜ Tier 2 — NAICS 62, 72, 44/45, 81 (pending)
 * ⬜ Tier 3 — NAICS 61, 23, 33, 48/49, 92 (pending)
 *
 * STANDING SOP:
 * Requirements first → Architecture second → Code last.
 * No phase advances without CTO review and approval.
 *
 * FIELD DEFINITIONS:
 * major_label          — human-readable declaration as it appears on a college application
 * riasec_affinity      — RIASEC codes that strengthen this major pick (ordered, primary first)
 * riasec_conflict      — RIASEC codes that suggest this pick may be wrong (flag for co-primary)
 * program_keywords     — structured terms for D4 scorer to match against university DB fields
 *                        (hidden_pathway, disproportionate_access, industry_pipeline)
 * entry_careers        — realistic first-job titles 0-3 years post-graduation
 * world_alignment      — IBIS world: 'Make' | 'Move' | 'Think' | 'People' | 'Systems'
 * cc_transfer_friendly — true = articulation-agreement safe; false = transfer-risky declaration
 */

'use strict';

// ─────────────────────────────────────────────────────────────────────────────
// MAJOR MAP — TIER 1
// ─────────────────────────────────────────────────────────────────────────────

const MAJOR_MAP = {

  // ── NAICS 51 — Information / Technology / Media ──────────────────────────
  // Covers: software, digital media, publishing, broadcasting, streaming,
  //         social platforms, gaming, podcasting, content production
  51: [
    {
      major_label: 'Computer Science',
      riasec_affinity: ['I', 'R', 'C'],
      riasec_conflict: ['A', 'S'],
      program_keywords: ['computer science', 'software engineering', 'CS ranking', 'coding bootcamp pipeline', 'tech recruitment'],
      entry_careers: ['Software Engineer', 'Product Analyst', 'Data Scientist'],
      world_alignment: 'Think',
      cc_transfer_friendly: true,
      emerging_role: 'AI Product Engineer — the professional who builds software systems that integrate large language models and other AI capabilities into products that non-technical users actually use — managing the prompting architecture, output validation, latency constraints, and safety guardrails that determine whether an AI-powered product is reliable enough to ship. Every technology company building AI products needs engineers who can work at this boundary between model capability and product reality.',
      deployment_contexts: [
        {
          domain: 'Artificial Intelligence & Machine Learning',
          edge: 'The professionals who will define the next twenty years of technology are not the ones who use AI tools — they are the ones who understand how those tools are built, where they fail, and why. A computer science undergraduate who develops fluency in machine learning is entering a field that is still early enough that the right preparation, at the right school, can place a twenty-two-year-old into rooms that were previously inaccessible before forty. Carnegie Mellon and Stanford have built the two most rigorous undergraduate AI pipelines in the country, and both place directly into research roles at Google DeepMind, OpenAI, and Anthropic that do not require a graduate degree for candidates who arrive prepared.'
        },
        {
          domain: 'Product Management & Technology Strategy',
          edge: 'The best product managers in technology are almost never the ones who studied business. They are the ones who understand how software is actually built — what is hard, what is fast, what is impossible — and can translate between the people writing the code and the people making decisions about what gets built. A computer science major who develops strong communication skills is building toward one of the most sought-after and highest-compensated roles in the industry. MIT, Michigan, and Carnegie Mellon all have documented pipelines from CS undergraduate programs directly into product management rotations at Amazon, Meta, and Google.'
        },
        {
          domain: 'Financial Technology & Quantitative Finance',
          edge: 'Wall Street has been hiring computer scientists for thirty years, and the firms that move the most money are now run by people who understand both. A CS major who develops fluency in financial systems is not choosing between technology and finance — they are building toward the intersection where the most consequential and best-compensated work in both industries now lives. Carnegie Mellon\'s computational finance program and Cornell\'s financial engineering track both have direct recruiting relationships with Two Sigma, Citadel, and Jane Street that most students discover far too late.'
        },
        {
          domain: 'Healthcare & Biomedical Technology',
          edge: 'The next generation of medical breakthroughs will be built by people who understand both the biology and the code. Electronic health records, diagnostic AI, genomic sequencing platforms — every one of these is a software problem that requires enough medical literacy to ask the right questions. A computer science major with genuine interest in health is entering a field that most hospitals, pharmaceutical companies, and research institutions do not yet have enough of. Johns Hopkins, UCSF, and MIT Lincoln Laboratory all run programs at the intersection of CS and biomedicine that place undergraduates into roles that would otherwise require a decade of specialization.'
        },
        {
          domain: 'Cybersecurity & Critical Infrastructure',
          edge: 'Every institution that matters — banks, hospitals, governments, utilities — runs on software that someone is actively trying to compromise. The professionals who protect those systems are among the most in-demand and least available in the entire technology workforce. A computer science major who develops security expertise early is building toward a career where the work is consequential, the compensation reflects that consequence, and the shortage of qualified people is structural enough that it will not resolve in their working lifetime. Carnegie Mellon\'s CyLab and Georgia Tech\'s Security Center both have undergraduate research programs that have placed students directly into NSA, CISA, and major defense contractor roles.'
        },
        {
          domain: 'Climate Technology & Energy Systems',
          edge: 'Decarbonizing the global economy is the largest engineering project in human history, and the bottleneck is not ambition — it is people who can write the software that makes clean energy systems work at scale. Grid management, battery optimization, carbon monitoring, climate modeling — all of it runs on code that someone has to build and maintain. A computer science major who cares about this problem is entering a field where the need is urgent, the funding is substantial, and the number of people technically qualified to do the work is still far smaller than the problem requires. MIT\'s Climate and Sustainability Consortium and Stanford\'s Precourt Institute both have undergraduate pathways into climate tech that most CS students never encounter.'
        }
      ]
    },
    {
      major_label: 'Film & Television Production',
      riasec_affinity: ['A', 'E', 'I'],
      riasec_conflict: ['C', 'R'],
      program_keywords: ['film production', 'television', 'screenwriting', 'directing', 'entertainment industry pipeline'],
      entry_careers: ['Production Assistant', 'Content Creator', 'Assistant Director'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      emerging_role: 'AI Creative Director — the professional who leads creative teams using generative AI tools for visual development, pre-visualization, and asset generation — making the aesthetic and editorial judgments that determine which AI outputs are worth keeping and how they are integrated into productions that still require human creative authority over the final result. Every major studio and streaming platform is building this function into their production pipelines.',
      deployment_contexts: [
        {
          domain: 'Streaming & Digital Content Development',
          edge: 'The television industry that existed twenty years ago no longer determines how stories reach audiences. Netflix, Amazon, Apple, and a generation of platforms that did not exist a decade ago have created a volume of demand for original content that the traditional studio system cannot fill. A film and television production student who understands both the craft and the commercial architecture of streaming — how shows are greenlit, how audiences are tracked, how intellectual property compounds in value — is building toward roles that are newer, more consequential, and less crowded than the ones their predecessors competed for. USC\'s School of Cinematic Arts and NYU\'s Tisch School both have direct industry relationships that place undergraduates into development, production, and acquisitions roles at major streaming companies.'
        },
        {
          domain: 'Brand & Corporate Storytelling',
          edge: 'Every major company in the world is now a media company — they just do not all know how to act like one. The brands that understand how to tell stories rather than run advertisements are building audiences that advertising cannot buy. A film production student who can move between narrative craft and commercial strategy is entering an entirely underserved space in the corporate world, where the demand for people who understand both is growing faster than business schools can produce them. Graduates of USC\'s film program have placed into brand content roles at Nike, Apple, and Patagonia that did not have formal titles ten years ago.'
        },
        {
          domain: 'Documentary & Investigative Journalism',
          edge: 'The documentary form has never had more reach or more consequence. Streaming platforms have created distribution for long-form investigative work that previously required a network to air it, and the audiences for that work are larger and more engaged than they have been in a generation. A film production student with genuine journalistic instincts is building toward work that can change laws, unseat executives, and hold institutions accountable — through a medium that has never been more accessible to make or more powerful to distribute. Northwestern\'s Medill School and Columbia\'s journalism program both have documentary concentrations with direct relationships at Netflix, HBO, and the major documentary houses.'
        },
        {
          domain: 'Video Game Narrative & Interactive Storytelling',
          edge: 'The largest entertainment medium in the world by revenue is not film or television. It is video games — and the best games of the current generation are not games. They are interactive narratives with production values that rival film, written by teams that include screenwriters, directors, and production designers. A film production student who is genuinely drawn to interactive storytelling is moving toward a field that desperately needs people who understand narrative structure, visual language, and the craft of making an audience feel something. USC\'s Interactive Media and Games Division sits at this exact intersection and has placed graduates into narrative director and creative director roles at studios that make the games that define the medium.'
        },
        {
          domain: 'Advertising & Commercial Direction',
          edge: 'The thirty-second commercial that once defined advertising has fragmented into thousands of formats across hundreds of platforms — and the brands that break through are the ones working with directors who understand how visual storytelling operates under constraint. Commercial direction is one of the most financially rewarding applications of a film education, and one of the most overlooked by students who arrive at film school thinking entirely about features. AFI and Columbia Film School both have commercial directing tracks with relationships at the major production houses in New York and Los Angeles that place graduates into paid directing work within a year of graduating.'
        }
      ]
    },
    {
      major_label: 'Digital Media & Communication',
      riasec_affinity: ['A', 'E', 'S'],
      riasec_conflict: ['R', 'C'],
      program_keywords: ['digital media', 'content strategy', 'social media', 'multimedia', 'communication'],
      entry_careers: ['Content Strategist', 'Social Media Manager', 'Brand Coordinator'],
      world_alignment: 'Make',
      cc_transfer_friendly: true,
      emerging_role: 'Audience Intelligence Analyst — the professional who combines platform analytics, behavioral data, and AI-assisted content testing to identify what content formats, topics, and publishing cadences drive durable audience growth — moving beyond vanity metrics to the engagement signals that predict whether an audience will follow a creator or brand across platform changes, algorithm updates, and format shifts.',
      deployment_contexts: [
        {
          domain: 'Audience Strategy & Platform Intelligence',
          edge: 'The companies that win the next decade of the attention economy are not the ones who post the most content — they are the ones who understand how audiences form, what sustains their interest, and how platforms algorithmically reward specific behaviors. A digital media student who develops genuine analytical depth alongside creative instinct is building toward a role that most media companies are still trying to invent job titles for. Northwestern\'s Medill School and Syracuse\'s Newhouse School both have digital strategy concentrations that have placed graduates into audience development and platform strategy roles at major media companies.'
        },
        {
          domain: 'Creator Economy & Independent Media',
          edge: 'For the first time in history, the infrastructure to reach a global audience does not require an institution. A single person with the right skills, the right understanding of platform dynamics, and the discipline to build an audience can generate revenue, influence, and career optionality that would have required a network deal twenty years ago. A digital media student who understands both the craft of content creation and the business architecture of monetization is building toward something that does not have a traditional career path yet — which is exactly why the people who figure it out early will define what the path looks like for everyone who follows.'
        },
        {
          domain: 'Corporate Communications & Executive Visibility',
          edge: 'The executives who shape public perception of their companies are no longer doing it exclusively through press releases and quarterly earnings calls. They are building audiences on platforms, hosting podcasts, publishing thought leadership, and using digital media fluency as a competitive advantage in a way that their predecessors never had to consider. A digital media graduate who understands how to build and manage an executive\'s presence across platforms is entering a role that every major corporation now needs and very few have filled well. Weber Shandwick, Edelman, and the major communications firms all have digital practice groups that are consistently understaffed relative to client demand.'
        },
        {
          domain: 'Healthcare & Wellness Communication',
          edge: 'The gap between what medical research has established and what the general public understands about their own health is not a scientific problem — it is a communication problem. The organizations trying to close that gap — hospital systems, public health agencies, pharmaceutical companies, wellness brands — are actively looking for people who understand how to translate complex information into formats that reach and resonate with real audiences. A digital media student with genuine interest in health is building toward a career that sits at one of the most consequential intersections in modern communication. Cleveland Clinic and Mayo Clinic both run content strategy and digital health communication teams that have hired directly from digital media and communication programs.'
        },
        {
          domain: 'Social Impact & Advocacy Campaigns',
          edge: 'The movements that have changed laws, shifted public opinion, and forced institutional accountability in the past decade did not succeed because they had the best arguments. They succeeded because they understood how digital platforms amplify certain kinds of content, how to build coalitions across distributed audiences, and how to sustain attention long enough for pressure to become consequence. A digital media student who cares about how change actually happens in the world is building a toolkit that advocacy organizations, political campaigns, and foundations are actively trying to hire for — and rarely finding in candidates who also understand the craft.'
        }
      ]
    },
    {
      major_label: 'Information Systems',
      riasec_affinity: ['C', 'I', 'E'],
      riasec_conflict: ['A'],
      program_keywords: ['information systems', 'MIS', 'business technology', 'data management', 'enterprise software'],
      entry_careers: ['Business Analyst', 'Systems Analyst', 'IT Consultant'],
      world_alignment: 'Systems',
      cc_transfer_friendly: true,
      emerging_role: 'AI Legal Workflow Architect — the professional who redesigns how law firms, corporate legal departments, and compliance teams process information — identifying which document review, contract analysis, and regulatory research tasks can be handled by AI systems and building the workflows, quality checks, and human review protocols that allow legal professionals to supervise AI output rather than perform the underlying work manually.',
      deployment_contexts: [
        {
          domain: 'Enterprise Technology Consulting',
          edge: 'The largest technology implementations in the world — ERP systems, cloud migrations, digital transformations — are not primarily technical problems. They are organizational problems that require someone who understands both the technology and the business well enough to translate between the two. An information systems graduate is one of the few professionals trained to operate in both languages simultaneously. Deloitte, Accenture, and PwC all run technology consulting practices that have historically recruited MIS and information systems graduates at a higher rate than pure computer science programs for client-facing roles.'
        },
        {
          domain: 'Healthcare Information & Data Systems',
          edge: 'The American healthcare system runs on electronic health records, insurance billing platforms, and clinical data systems that were built by people who understood technology but often not healthcare — and the consequences of that mismatch are measured in patient outcomes. Information systems graduates who develop fluency in healthcare data are building toward roles that sit at the center of one of the most expensive and consequential technology transformations in the economy. Epic Systems, the dominant electronic health records company, recruits directly from information systems programs and places graduates into implementation and consulting roles that carry significant responsibility from the first year.'
        },
        {
          domain: 'Supply Chain & Operations Technology',
          edge: 'The supply chain disruptions of the past several years revealed something the industry had quietly known for decades: the systems that track global inventory, manage logistics networks, and coordinate manufacturing across continents are fragile, outdated, and badly in need of people who understand both the operations and the technology. An information systems graduate who develops expertise in supply chain platforms is building toward a career that exists at the center of every company that makes or moves a physical product. MIT\'s Center for Transportation and Logistics and Penn State\'s supply chain program both have information systems concentrations with direct industry relationships.'
        },
        {
          domain: 'Financial Systems & Regulatory Technology',
          edge: 'Every bank, investment firm, and insurance company in the world runs on technology that must comply with regulations that change faster than the systems can be updated. The professionals who understand both the regulatory requirements and the systems architecture are among the most valuable and least available in financial services. An information systems graduate who develops fluency in financial platforms and compliance frameworks is building toward a career where the complexity of the work creates natural barriers to competition. Carnegie Mellon\'s information systems program and Indiana University\'s Kelley School both have finance technology concentrations with direct recruiting relationships at Goldman Sachs, JPMorgan, and the major financial technology firms.'
        }
      ]
    },
    {
      major_label: 'Game Design & Interactive Media',
      riasec_affinity: ['A', 'I', 'R'],
      riasec_conflict: ['S', 'C'],
      program_keywords: ['game design', 'interactive media', 'UX design', 'game development', 'Unity'],
      entry_careers: ['Junior Game Designer', 'UX Researcher', 'Narrative Designer'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      emerging_role: 'Procedural Content Generation Designer — the professional who designs the AI systems that generate game content — levels, characters, dialogue, quests — at a scale and variety that human designers alone cannot produce, while maintaining the quality standards and intentional design feel that players expect. Every major game studio building open-world or live-service games is investing in procedural generation capabilities that require designers who understand both game design principles and the AI systems producing the content.',
      deployment_contexts: [
        {
          domain: 'User Experience Design & Product Design',
          edge: 'The discipline that produces the best UX designers is not HCI or graphic design — it is game design. Games are the most demanding test of user experience that exists: the player must understand what to do without being told, feel rewarded for progress, and remain engaged through difficulty without becoming frustrated. A game design student who develops strong UX instincts is building a skill set that every technology company in the world is hiring for, and arriving with a portfolio of interactive work that most UX candidates cannot match. Carnegie Mellon\'s Entertainment Technology Center and USC\'s Interactive Media Division both have direct pipelines into UX roles at Apple, Google, and Meta.'
        },
        {
          domain: 'Simulation & Training Technology',
          edge: 'The military, aviation, healthcare, and emergency response sectors all train their people using simulations — and the people who build the best simulations are not defense contractors who learned game engines. They are game designers who learned domain knowledge. A game design graduate who develops interest in training and simulation is moving toward a sector that is federally funded, technically sophisticated, and almost entirely invisible to students coming out of traditional programs. DigiPen Institute of Technology and Drexel University both have simulation and serious games concentrations with direct relationships at Lockheed Martin, Boeing, and the major defense simulation contractors.'
        },
        {
          domain: 'Theme Park & Experiential Design',
          edge: 'The physical environments that people pay to inhabit — theme parks, immersive experiences, escape rooms, interactive museum installations — are designed by people who understand interactive narrative, spatial storytelling, and the architecture of engagement. These are game design problems solved in physical space. A game design student who is drawn to the built environment is building toward a career in experience design that most people in that field arrived at circuitously. Walt Disney Imagineering, Universal Creative, and Meow Wolf all recruit from game design and interactive media programs for their creative and technical design teams.'
        },
        {
          domain: 'Esports & Competitive Gaming Infrastructure',
          edge: 'Competitive gaming is now a global industry with infrastructure that rivals traditional sport — broadcasting, team management, sponsorship, event production, player development, analytics. The people building that infrastructure need to understand the games deeply, which means they need backgrounds that most sports business graduates do not have. A game design student who is also drawn to the business and organizational side of competition is building toward a career in an industry that is still young enough that early entrants help define what the roles look like. Ohio State and USC both have esports management programs with industry partnerships that have placed graduates into operations and strategy roles at major esports organizations.'
        }
      ]
    },
    {
      major_label: 'Journalism',
      riasec_affinity: ['A', 'E', 'S'],
      riasec_conflict: ['R', 'C'],
      program_keywords: ['journalism', 'reporting', 'media', 'news', 'investigative', 'broadcast'],
      entry_careers: ['Editorial Assistant', 'Staff Reporter', 'Digital Producer'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      emerging_role: 'Computational Journalism Specialist — the professional who uses data analysis, public records automation, and AI-assisted document review to investigate stories that would be impossible to report manually — finding patterns in government spending databases, identifying anomalies in public records, and building the data infrastructure that allows investigative teams to pursue accountability journalism at a scale that individual reporters working alone cannot reach. ProPublica, The New York Times data team, and the Washington Post\'s engineering team have all built this function.',
      deployment_contexts: [
        {
          domain: 'Investigative & Data Journalism',
          edge: 'The journalism that changes institutions is not the journalism that covers what happened yesterday. It is the work that takes months or years, requires the ability to read financial documents and court filings and government databases, and produces the kind of story that forces a response from people who would prefer to remain unexamined. A journalism student who develops data literacy alongside strong writing is building toward a practice that is more defensible, more consequential, and more financially sustainable than general assignment reporting. Northwestern\'s Medill School and Columbia\'s Graduate School of Journalism both have data and investigative concentrations that have produced the reporters behind some of the most significant accountability stories of the past decade.'
        },
        {
          domain: 'Technology & Business Journalism',
          edge: 'The companies that are reshaping economies, political systems, and daily life are technology companies — and the journalists who cover them well are the ones who understand enough about how the technology works to ask questions that matter. A journalism student who develops genuine technology literacy is building toward a beat that is consequential, well-resourced by major publications, and chronically understaffed with people who can do it at the level the subject requires. The New York Times, The Wall Street Journal, and Bloomberg all have technology desks that actively recruit journalists who arrived with technical depth.'
        },
        {
          domain: 'Communications & Public Affairs',
          edge: 'The skills that make a good journalist — understanding what a story is, knowing how information travels, anticipating how an audience will receive a message — are the same skills that make a good communications professional. A journalism graduate who moves into communications is not abandoning the craft. They are applying it in a context where the ability to think like a reporter is a significant and rarely named competitive advantage. Most communications directors at major institutions have journalism backgrounds for exactly this reason. The path from journalism school into corporate or government communications is well-established at Northwestern, Missouri, and Syracuse.'
        },
        {
          domain: 'Podcast & Audio Storytelling',
          edge: 'Audio storytelling has developed into one of the most intimate and financially significant formats in media — and the people who do it well are not audio engineers who learned to tell stories. They are storytellers who learned audio. A journalism student who develops genuine interest in sound and structure is building toward a medium that is still early enough in its commercial development that the practitioners who arrive with strong fundamentals will help define the craft standards for everyone who follows. PRX, Spotify, and iHeartMedia all have development programs for audio storytellers that recruit directly from journalism programs.'
        }
      ]
    }
  ],

  // ── NAICS 52 — Finance & Business ────────────────────────────────────────
  // Covers: banking, investment management, insurance, real estate finance,
  //         private equity, hedge funds, wealth management, accounting
  52: [
    {
      major_label: 'Finance',
      riasec_affinity: ['C', 'E', 'I'],
      riasec_conflict: ['A', 'S'],
      program_keywords: ['finance', 'investment banking', 'Wall Street recruiting', 'financial modeling', 'Bloomberg terminal'],
      entry_careers: ['Financial Analyst', 'Investment Banking Analyst', 'Wealth Management Associate'],
      world_alignment: 'Systems',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Investment Banking & Capital Markets',
          edge: 'Investment banking is one of the few careers in the world where the credential, the school, and the network are not decorative — they are the entry mechanism. The banks that advise on the largest mergers, underwrite the most significant public offerings, and restructure the most consequential debt are recruiting from a small number of programs with established relationships, and they are doing it earlier than most students realize. Wharton, Booth, and Stern are the most recognized names on that list, but Michigan\'s Ross School, Georgetown\'s McDonough School, and Vanderbilt\'s Owen School have all built direct analyst pipelines to Goldman Sachs, Morgan Stanley, and JPMorgan that place students who understand this early and prepare accordingly.'
        },
        {
          domain: 'Private Equity & Venture Capital',
          edge: 'Private equity and venture capital are the careers that investment banking most directly feeds — and the people who arrive there with two years of banking behind them and genuine strategic instincts move through the field in ways that others cannot replicate. A finance student who develops the ability to think about businesses as systems — what makes them durable, what makes them fragile, what makes them worth more in five years than they are today — is building toward one of the most financially rewarding and intellectually demanding careers in the economy. The path runs through banking, but it starts with understanding what private equity is actually doing before most students have heard the term.'
        },
        {
          domain: 'Corporate Finance & Strategic Planning',
          edge: 'Every company of scale has a finance function, and the professionals who lead it are among the most consequential people in the organization. A CFO does not just report numbers — they shape strategy, evaluate acquisitions, manage the relationship with investors, and ultimately determine how the company allocates the resource that everything else depends on. A finance student who develops both technical rigor and strategic instinct is building toward a career that exists in every industry, at every scale, and that commands significant authority because it sits at the center of how organizations make decisions about their own futures.'
        },
        {
          domain: 'Real Estate Finance & Development',
          edge: 'Real estate is the largest asset class in the world, and the professionals who finance, develop, and manage it operate with a level of financial complexity that most people in the industry never fully develop. A finance student who develops genuine interest in real estate — not just the transaction, but the capital stack, the development pro forma, the debt structure — is building toward a field where the compensation is significant, the projects are physical and lasting, and the number of people who understand the full financial picture is smaller than the industry\'s size would suggest. USC\'s Lusk Center and NYU\'s Schack Institute both have real estate finance tracks with direct relationships at the major REITs and development firms.'
        },
        {
          domain: 'Nonprofit Finance & Institutional Endowments',
          edge: 'University endowments, foundation investment offices, and major nonprofit treasury functions are managed by finance professionals who chose to apply their skills in institutions where the purpose of the money is not its own multiplication. The Yale endowment model — which has influenced how nearly every major institutional investor approaches asset allocation — was built by finance professionals who understood both investment theory and institutional obligation. A finance student who is drawn to mission-driven institutions is not choosing between financial rigor and meaningful work. Yale\'s investments office, the Ford Foundation, and major university endowments all recruit finance undergraduates who want to manage capital in service of a purpose.'
        }
      ]
    },
    {
      major_label: 'Accounting',
      riasec_affinity: ['C', 'I', 'R'],
      riasec_conflict: ['A', 'E'],
      program_keywords: ['accounting', 'CPA pipeline', 'audit', 'tax', 'Big Four recruiting'],
      entry_careers: ['Staff Accountant', 'Audit Associate', 'Tax Analyst'],
      world_alignment: 'Systems',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Public Accounting & Audit',
          edge: 'The four largest accounting firms in the world — Deloitte, PwC, EY, and KPMG — collectively employ hundreds of thousands of professionals and audit the financial statements that the global economy relies on. An accounting student who earns the CPA designation and enters public accounting is joining one of the most structured and meritocratic career ladders in professional services, where the path from associate to partner is well-defined, the clients are the most consequential organizations in every sector, and the financial literacy developed in the first five years is transferable to almost any industry. The Big Four recruit from nearly every accredited accounting program in the country, but the students who arrive from Texas, Illinois, BYU, and Notre Dame tend to enter with relationships already established.'
        },
        {
          domain: 'Forensic Accounting & Financial Investigation',
          edge: 'Financial fraud is not caught by auditors who are looking for errors. It is caught by forensic accountants who understand that the numbers are a language, and that people who are hiding something leave patterns in that language that do not appear in honest records. A forensic accountant works alongside federal investigators, testifies in court proceedings, untangles the financial architecture of fraud schemes, and helps reconstruct what actually happened when institutions fail. It is one of the most intellectually demanding applications of accounting and one of the least understood by students who are choosing the major. The FBI, SEC, and the major forensic consulting firms all recruit accounting graduates with strong analytical instincts.'
        },
        {
          domain: 'Mergers, Acquisitions & Transaction Advisory',
          edge: 'Every acquisition of consequence requires someone who can look at a set of financial statements and understand not just what they say, but what they are not saying — the liabilities that are underreported, the revenue that is unsustainable, the assets that are overvalued. Transaction advisory is where accounting meets strategy, and the professionals who do it well move between the accounting firms, investment banks, and corporate development teams that structure the deals that reshape industries. An accounting student who develops financial modeling skills alongside CPA-track coursework is building toward a career path that most accounting students discover only after they have already spent two years in audit.'
        },
        {
          domain: 'Tax Strategy & International Compliance',
          edge: 'Tax is the discipline that most accounting students approach as a requirement and most corporations approach as a strategic asset. The difference between a company that pays its statutory rate and one that manages its tax position intelligently is measured in billions of dollars at scale — and the professionals who design those strategies are among the most valued in any finance organization. An accounting student who develops genuine expertise in tax — particularly international tax, where the complexity compounds across jurisdictions — is building toward a career where the technical knowledge creates natural scarcity and the compensation reflects it. The major law firms, Big Four tax practices, and treasury departments of multinational companies all recruit accounting graduates with tax concentrations.'
        }
      ]
    },
    {
      major_label: 'Economics',
      riasec_affinity: ['I', 'C', 'E'],
      riasec_conflict: ['A', 'R'],
      program_keywords: ['economics', 'econometrics', 'policy', 'quantitative analysis', 'research'],
      entry_careers: ['Economic Analyst', 'Policy Research Associate', 'Strategy Analyst'],
      world_alignment: 'Think',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Technology & Platform Economics',
          edge: 'The companies that have defined the economy of the past twenty years are not manufacturing companies or financial companies. They are platform companies — and the economists who understand how platforms create network effects, how they price their products, and how they accumulate market power are among the most sought-after people in the technology industry. An economics student who develops fluency in industrial organization and platform dynamics is building toward a role that companies like Google, Amazon, and Meta have created entire economic research teams to fill, because the regulatory and strategic questions they face require people who can do genuine economic analysis, not just build financial models.'
        },
        {
          domain: 'Policy Research & Government Advisory',
          edge: 'The decisions that determine how economies function — monetary policy, fiscal policy, trade agreements, regulatory frameworks — are made by people who either understand economic analysis or are advised by people who do. An economics student who develops strong quantitative skills alongside genuine policy interest is building toward roles at the Federal Reserve, the Congressional Budget Office, the World Bank, and the major economic think tanks that shape the intellectual environment in which those decisions are made. The path into serious policy economics runs through graduate school for most students, but the undergraduate credential from schools like Chicago, MIT, and Harvard opens doors that very few others do.'
        },
        {
          domain: 'Management Consulting & Strategy',
          edge: 'Management consulting firms recruit economics majors at a disproportionate rate for a specific reason: the ability to build a logical argument from evidence, identify the variable that actually explains the outcome, and communicate the finding clearly to people who did not run the analysis is exactly what consulting requires — and economics trains for it more directly than almost any other undergraduate major. McKinsey, Bain, and BCG all have well-documented pipelines from economics programs at target schools, but the students who arrive understanding why the major prepares them for consulting — rather than just knowing that it does — perform better in the case interview and advance faster afterward.'
        },
        {
          domain: 'Behavioral Economics & Consumer Research',
          edge: 'The field that began as an academic challenge to rational choice theory has become one of the most commercially applied disciplines in the economy. Companies use behavioral economics to design subscription pricing, retirement enrollment systems, health insurance choices, and e-commerce checkout flows — all of it structured to produce the outcome the designer intends by understanding how humans actually decide rather than how they theoretically should. An economics student who develops genuine interest in behavioral research is building toward a career that sits at the intersection of academia and industry, where the demand for people who can apply the research is growing faster than the supply of people trained to do it.'
        }
      ]
    },
    {
      major_label: 'Business Administration',
      riasec_affinity: ['E', 'C', 'S'],
      riasec_conflict: ['I', 'R'],
      program_keywords: ['business administration', 'management', 'operations', 'business fundamentals', 'MBA pipeline'],
      entry_careers: ['Management Trainee', 'Operations Associate', 'Business Development Coordinator'],
      world_alignment: 'Systems',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Entrepreneurship & Small Business Ownership',
          edge: 'Most business programs teach students how to work inside organizations. The ones who learn to build them — who understand cash flow before they understand PowerPoint, who can read a profit and loss statement before they can write a case study — arrive at entrepreneurship with a foundation that self-taught founders spend years reconstructing. A business administration student who treats the major as a toolkit for building rather than a credential for hiring is positioned differently than their peers from the first day they decide to start something. Babson College has built the most recognized undergraduate entrepreneurship program in the country specifically around this premise, and the businesses its graduates have built have validated it for decades.'
        },
        {
          domain: 'Operations & General Management',
          edge: 'The people who run things — who manage the teams, coordinate the functions, and keep complex organizations moving toward a coherent objective — are not always the ones with the most specialized knowledge. They are the ones who understand how the pieces fit together and can move across functions without losing their effectiveness. A business administration student who develops genuine operational instincts, who is comfortable with ambiguity and drawn to the work of coordination, is building toward a management career that exists in every industry and compounds in value as the organizations they lead become more complex. Indiana University\'s Kelley School and University of Texas McCombs both have management concentrations with corporate rotational program relationships that place graduates into general management tracks at major companies.'
        },
        {
          domain: 'Family Business & Generational Wealth',
          edge: 'More than half of private sector employment in the United States is in family-owned businesses — businesses that face a specific set of challenges around succession, governance, professionalization, and the navigation of family dynamics in a commercial context. A business administration student who comes from or is interested in the family business environment is building toward a career that requires a combination of financial literacy, organizational understanding, and interpersonal sophistication that no other business context demands in quite the same way. Kennesaw State\'s Cox Family Enterprise Center and Loyola University Chicago\'s Quinlan School both run family business programs that have become resources for families navigating the transition from founder to institution.'
        },
        {
          domain: 'International Business & Global Operations',
          edge: 'The companies that operate across borders face a level of complexity — regulatory, cultural, logistical, financial — that domestic operations never encounter. The professionals who manage international operations are not simply applying domestic business principles in a different time zone. They are navigating systems that operate by different rules, building relationships across cultural contexts that require genuine sophistication, and managing the risk of decisions that play out across jurisdictions simultaneously. A business administration student who develops language skills and international experience alongside core business fundamentals is building toward a career that most business graduates cannot access without spending years developing the capabilities that could have been built in school. Georgetown\'s McDonough School and Thunderbird School of Global Management at Arizona State both have international business concentrations with direct industry relationships.'
        }
      ]
    },
    {
      major_label: 'Real Estate',
      riasec_affinity: ['E', 'C', 'S'],
      riasec_conflict: ['I', 'A'],
      program_keywords: ['real estate', 'property management', 'REIT', 'development', 'commercial real estate'],
      entry_careers: ['Real Estate Analyst', 'Property Management Associate', 'Commercial Leasing Agent'],
      world_alignment: 'Systems',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Commercial Real Estate & REIT Management',
          edge: 'Commercial real estate is one of the largest and most complex asset classes in the global economy, and the professionals who finance, acquire, and manage it operate with a level of sophistication that casual observers of the market rarely see. A real estate student who develops genuine fluency in the financial architecture of commercial property — cap rates, debt service coverage, net operating income, capital structure — is building toward a career where the deals are large, the relationships are long, and the professionals who can execute at the highest level are consistently fewer than the market needs. CBRE, JLL, and the major REITs all recruit from the small number of undergraduate real estate programs with established track records — and USC\'s Lusk Center and Penn\'s Wharton real estate program are at the top of that list.'
        },
        {
          domain: 'Urban Development & Affordable Housing',
          edge: 'The housing crisis is not a political opinion — it is a structural failure to build enough of the right kind of housing in the places where people need to live. The professionals who are trying to solve it are developers, financiers, policy makers, and planners who understand both the financial constraints and the human consequences of how cities grow. A real estate student who is genuinely interested in how cities work — not just as markets but as places where people build lives — is building toward a career at the intersection of development, policy, and community that is chronically short of people with serious technical training. MIT\'s Center for Real Estate and Columbia\'s GSAPP both have urban development and affordable housing concentrations that place graduates into mission-driven development roles alongside the traditional commercial tracks.'
        },
        {
          domain: 'PropTech & Real Estate Technology',
          edge: 'The real estate industry has been one of the slowest to adopt technology at scale, which means the opportunity for people who understand both the industry and the technology is larger and less contested than in sectors that have already been transformed. Property management platforms, transaction technology, construction tech, and AI-driven underwriting tools are all being built by companies that need people who understand what real estate professionals actually need — not just what engineers assume they need. A real estate student who develops technology fluency alongside market knowledge is building toward one of the most open fields in the intersection of property and software. Ventures backed by Sequoia and Andreessen Horowitz have both sought real estate graduates with technical fluency for product and strategy roles.'
        }
      ]
    }
  ],

  // ── NAICS 54 — Professional Services / Consulting ─────────────────────────
  // Covers: management consulting, legal, marketing, advertising, PR,
  //         research, architecture, engineering services, HR
  54: [
    {
      major_label: 'Marketing',
      riasec_affinity: ['E', 'A', 'S'],
      riasec_conflict: ['R', 'I'],
      program_keywords: ['marketing', 'brand management', 'consumer behavior', 'digital marketing', 'advertising'],
      entry_careers: ['Marketing Coordinator', 'Brand Associate', 'Digital Marketing Analyst'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Internal Communications & Organizational Alignment',
          edge: 'The most consequential audience any leader will ever face is not the customer. It is the room of people who have to believe in something before it can happen. A marketing-trained mind understands how belief is built — through language, sequence, and the careful management of what is said and what is left for the listener to discover. Kellogg at Northwestern and Fuqua at Duke both run internal communications and change management concentrations built from marketing methodology. The graduates who have gone through those programs and into Chief of Staff and internal strategy roles at Apple, Amazon, and McKinsey share something in common: they learned how to move people before they learned how to manage them.'
        },
        {
          domain: 'Healthcare & Pharmaceutical Communications',
          edge: 'Changing patient behavior is the central unsolved problem in healthcare. People do not take their medication, do not follow their care plans, do not return for follow-up visits — not because they lack information, but because information alone has never changed human behavior. A marketing-trained professional who understands how people actually make decisions about their own bodies is working at the intersection of the two largest industries in the American economy. Johnson & Johnson, Pfizer, and AbbVie all run marketing associate programs that have offered direct paths into healthcare brand management for undergraduate students who never needed to wait for an MBA.'
        },
        {
          domain: 'Fundraising & Nonprofit Development',
          edge: 'A donor relationship is a marketing relationship. It requires the same understanding of motivation, value exchange, and sustained narrative that any brand relationship requires — with the added complexity that the transaction produces no tangible product for the person writing the check. The development professionals who build major gifts programs that last are the ones who understand this. Indiana University\'s Lilly Family School of Philanthropy has built the most rigorous curriculum in this space in the country, and it draws more heavily from marketing and communications than most people working in the sector realize.'
        },
        {
          domain: 'Political Campaigns & Advocacy',
          edge: 'A modern political campaign is a marketing operation with a single conversion event. The disciplines that determine its outcome — message testing, audience segmentation, narrative architecture, channel strategy — are marketing disciplines. The professionals who understand this and arrive with formal training in it are still rare enough that the field does not always know how to recruit for them directly. American University and George Washington University both sit inside the consulting ecosystem in Washington where that work happens, and both have placed undergraduate marketing students into campaign communications roles for Senate and presidential campaigns.'
        },
        {
          domain: 'Luxury Goods & Experiential Retail',
          edge: 'Luxury marketing is not a more expensive version of consumer marketing. It operates by different rules — scarcity is constructed, desire is maintained through restraint, and the customer is never chased. Understanding this requires a sophistication about human psychology and cultural signaling that mass-market training does not produce, and that most marketing programs teach poorly if at all. NYU\'s Stern School, USC\'s Marshall School, and Parsons all maintain direct relationships with LVMH, Kering, and Richemont — the three groups that control the majority of global luxury brand revenue — and all three have placed undergraduate marketing students into roles that others spent years waiting for.'
        },
        {
          domain: 'Real Estate Development & Place Marketing',
          edge: 'Selling a building is not a transaction. It is the marketing of a life — a version of who the buyer will become when they live inside this space, in this neighborhood, among these people. The developers who understand how to communicate identity and aspiration through a physical place consistently outperform those who sell square footage and amenities, because they are answering a different question. USC\'s Lusk Center for Real Estate and NYU\'s Schack Institute have both built programs that actively seek students with marketing backgrounds, because they have seen what happens when that mind enters a development firm and starts asking different questions about who the building is actually for.'
        },
        {
          domain: 'Supply Chain & Vendor Relationship Management',
          edge: 'The most underrecognized skill in supply chain management is the ability to move organizations that do not report to you — suppliers, logistics partners, contract manufacturers operating across time zones and competing priorities. That is a marketing problem. It requires understanding motivation, positioning a relationship so that the other party sees their own interest clearly, and sustaining trust across transactions that carry real consequences when they fail. Michigan State\'s Broad College of Business and Arizona State\'s Carey School have both begun recruiting marketing graduates into supply chain programs after discovering that their highest-performing vendor relationship managers were coming disproportionately from communications and marketing backgrounds.'
        },
        {
          domain: 'Sports Business & Athlete Brand Management',
          edge: 'The business of sport has become the business of attention — and the athletes, teams, and leagues that understand how to build and sustain audiences in a fragmented media environment are worth exponentially more than those who do not. A marketing-trained professional in sports is not doing promotions. They are building the commercial infrastructure of how sport gets watched, followed, and monetized for the next generation. Ohio State, Georgetown, and Northwestern all maintain recruiting relationships with the NFL, NBA, and major sports agencies, and all three have placed undergraduate marketing students into brand strategy roles that previously required an MBA and several years of waiting.'
        }
      ]
    },
    {
      major_label: 'Political Science / Pre-Law',
      riasec_affinity: ['E', 'S', 'I'],
      riasec_conflict: ['R', 'C'],
      program_keywords: ['political science', 'pre-law', 'law school pipeline', 'policy', 'government'],
      entry_careers: ['Paralegal', 'Legislative Aide', 'Policy Research Analyst'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Law — Corporate, Finance & Intellectual Property',
          edge: 'Most people who study political science and go to law school become lawyers. The ones who become consequential lawyers are almost always the ones who developed a specialty early — not in law school, but in the years before it. A political science student who arrives at law school with genuine knowledge of corporate structure, financial regulation, or intellectual property is starting the second year\'s conversation in the first week. Georgetown Law, NYU School of Law, and Columbia Law School all have corporate and IP tracks that have placed political science undergraduates with relevant concentrations into associate positions at the firms that handle the most significant transactions in those fields.'
        },
        {
          domain: 'Government Relations & Lobbying',
          edge: 'The work of translating between what companies and institutions need and what governments are willing to allow is done by a small number of people who understand both the legislative process and the commercial stakes with enough depth to be credible in both rooms. A political science student who develops genuine knowledge of regulatory frameworks, legislative procedure, and the economics of the industries they care about is building toward one of the most consequential and least understood careers in Washington — or in any state capital where the decisions that govern industries are actually made.'
        },
        {
          domain: 'International Affairs & Diplomacy',
          edge: 'The careers that operate across national boundaries — foreign service, international development, multilateral institutions, global NGOs — require people who understand how political systems work, how interests align and diverge across cultures, and how institutions sustain themselves across governments that change. A political science student who develops language skills, regional expertise, and genuine analytical depth is building toward a career that most people in the field spent years preparing for without a clear map. The Foreign Service Officer examination is one of the most demanding professional entry points in government, and the students who pass it are almost always the ones who prepared for it as seriously as they prepared for the LSAT.'
        },
        {
          domain: 'Nonprofit Leadership & Social Enterprise',
          edge: 'The organizations that address the problems that governments cannot solve and markets do not prioritize are led by people who understand both political systems and organizational management. A political science student who develops genuine interest in social change — not as an ideology but as a professional practice — is building toward a leadership career in one of the fastest-growing sectors of the economy. The social enterprise field, in particular, is attracting political science graduates who want to apply market discipline to social problems in ways that traditional nonprofits have not. Georgetown\'s Public Policy Institute and Duke\'s Sanford School both have political science concentrations with direct pipelines into nonprofit leadership and social enterprise programs.'
        }
      ]
    },
    {
      major_label: 'Psychology',
      riasec_affinity: ['S', 'I', 'A'],
      riasec_conflict: ['R', 'C'],
      program_keywords: ['psychology', 'behavioral science', 'human behavior', 'counseling pipeline', 'research methods'],
      entry_careers: ['HR Coordinator', 'Research Assistant', 'Case Manager'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Executive Leadership & Organizational Change',
          edge: 'Organizations change when the people inside them understand why change feels like loss. A psychology-trained professional carries that understanding natively — not as a management concept absorbed from a book, but as a framework built from years of studying what actually moves human beings. The executives who lead well are almost always the ones who figured this out early. Northwestern\'s Kellogg School and Michigan\'s Ross School both run organizational behavior concentrations that have placed psychology undergraduates directly into leadership development programs at companies that rarely explain where their best people came from.'
        },
        {
          domain: 'Venture Capital & Startup Investing',
          edge: 'The business model is almost never what determines whether a company survives its first three years. The team is. A psychology-trained investor reads founder resilience, cofounder tension, and organizational culture with a precision that no finance background produces — because those things were never part of the finance curriculum. Stanford\'s Graduate School of Business and Harvard Business School have both documented what their most successful venture-track graduates have in common. Behavioral science appears on that list more often than people expect.'
        },
        {
          domain: 'Enterprise Sales & Revenue Leadership',
          edge: 'Complex sales are not won on product features. They are won on the psychology of organizational buying — who carries the fear, who needs to feel ownership, who has the authority they have not yet been given permission to use. A psychology major who enters enterprise sales arrives with a decision-science framework their colleagues will spend entire careers trying to develop. Salesforce, Microsoft, and Oracle have all built structured sales development programs that have quietly over-indexed on psychology and communication graduates for exactly this reason.'
        },
        {
          domain: 'Product Design & User Experience',
          edge: 'The products that become indispensable are not the ones with the most features. They are the ones that understand how humans form habits, experience friction, and make decisions when they are distracted, tired, and not reading the instructions. That is behavioral science. It is also the native language of great product design — the field just has not always said so clearly. Carnegie Mellon\'s Human-Computer Interaction Institute and Georgia Tech\'s program in the same discipline have built their reputations on exactly this synthesis, and both actively recruit psychology undergraduates who want to work at the place where human behavior and technology meet.'
        },
        {
          domain: 'Political Strategy & Public Policy',
          edge: 'Political campaigns are won by understanding how voters process threat, identity, and trust — not by having the most coherent policy platform. A psychology-trained strategist brings behavioral science to a field that has operated largely on instinct and pattern-matching for most of its history. The gap between what campaigns know and what psychology has already proven is still wide enough that a well-trained undergraduate can walk into a room and see things the senior staff cannot. American University\'s School of Public Affairs and Georgetown\'s McCourt School both sit inside the ecosystem where that kind of work actually happens.'
        },
        {
          domain: 'Packaging & Consumer Behavior',
          edge: 'Before a product is opened, before it is used, before the customer has formed a single opinion about its quality — they have already decided. That decision happens in less than a second and is governed entirely by what the hand feels, what the eye reads, and what the brain associates with the shape and weight of the object in front of it. Michigan State\'s School of Packaging is one of three programs in the country built around this reality. Most families have never heard of it. The students who find their way there tend to stay for a reason.'
        },
        {
          domain: 'Sports Performance & Athletic Coaching',
          edge: 'At the professional level, the physical distance between competitors is rarely what determines the outcome. The mental distance is. Teams and athletic organizations are only beginning to build the infrastructure to address this seriously, which means the professionals who understand performance psychology are entering a field that is growing faster than it can fill its own positions. UNC Chapel Hill and Florida State both run sport psychology concentrations that have placed graduates inside NFL, NBA, and Olympic program staff — in roles that did not exist at scale fifteen years ago and are not going away.'
        },
        {
          domain: 'Wealth Management & Private Banking',
          edge: 'The client relationships that define a career in private banking are not built on investment returns. They are built on trust — which is built on the ability to sit with a family navigating money, fear, legacy, and disagreement, and make every person in the room feel understood before a single recommendation is made. A psychology-trained wealth manager operates in a register that a finance-trained one cannot easily access. The clients who matter most — the ones who refer and stay for decades — feel that difference immediately. Northwestern, Villanova, and SMU have all placed psychology graduates into private wealth associate tracks at Goldman Sachs, Morgan Stanley, and Northern Trust through relationships that rarely appear in the program brochure.'
        }
      ]
    },
    {
      major_label: 'Communications & Public Relations',
      riasec_affinity: ['E', 'S', 'A'],
      riasec_conflict: ['I', 'R'],
      program_keywords: ['public relations', 'communications', 'media relations', 'corporate communications', 'messaging'],
      entry_careers: ['PR Assistant', 'Communications Coordinator', 'Account Coordinator'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Crisis Communications & Reputation Management',
          edge: 'The moment that tests a communications professional is not the product launch or the quarterly earnings call. It is the crisis — the data breach, the executive scandal, the product failure, the regulatory investigation — where the decisions made in the first forty-eight hours determine whether an institution survives with its reputation intact. A communications student who develops genuine crisis preparation, who understands how media cycles accelerate and how institutional credibility is built and spent, is building toward one of the most valued and least populated specialties in professional communications. Edelman, Weber Shandwick, and the major crisis advisory firms recruit communications graduates who have studied the discipline with the same seriousness that law students study litigation.'
        },
        {
          domain: 'Investor Relations & Financial Communications',
          edge: 'Public companies are required to communicate with their investors in specific ways, at specific times, with specific levels of accuracy — and the professionals who manage that communication sit at the intersection of finance, legal, and communications in a way that very few roles in any organization replicate. Investor relations is one of the most financially rewarding applications of a communications background, and one of the least understood by students who are choosing the major. The National Investor Relations Institute runs a professional development program that has become the credential of record in the field, and it draws disproportionately from communications and business graduates who developed financial literacy alongside communication skills.'
        },
        {
          domain: 'Entertainment & Talent Publicity',
          edge: 'The careers that manage how public figures — actors, musicians, athletes, executives, politicians — are perceived and covered are built on relationships, timing, and an understanding of how media systems respond to different kinds of stories. A communications student who develops genuine knowledge of the entertainment and media landscape is building toward a career that exists at the center of the culture industry and that requires a combination of strategic thinking and interpersonal sophistication that cannot be replicated by people who simply love entertainment. PMK BNC, Rogers & Cowan, and the major talent publicity firms in Los Angeles and New York both recruit from communications programs at USC, UCLA, and Boston University that have built relationships with the industry.'
        },
        {
          domain: 'Public Affairs & Government Communications',
          edge: 'The communications professionals who work inside government agencies, elected offices, and public institutions operate under constraints — legal, political, ethical — that corporate communications does not face, and with stakes that most corporate work does not carry. A communications student who is genuinely drawn to public life — to the work of explaining what government is doing and why it matters — is building toward a career that combines the craft of communication with the weight of public trust. The Government Communication Service in Washington and the major state-level communications offices all recruit from communications programs at American University, George Washington, and the major public affairs schools.'
        }
      ]
    },
    {
      major_label: 'Management Consulting (Business)',
      riasec_affinity: ['E', 'I', 'C'],
      riasec_conflict: ['A', 'R'],
      program_keywords: ['consulting', 'strategy', 'management', 'McKinsey recruiting', 'case interview', 'operations'],
      entry_careers: ['Business Analyst', 'Strategy Associate', 'Operations Consultant'],
      world_alignment: 'Systems',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Strategy Consulting & Corporate Advisory',
          edge: 'The management consulting firms that advise the largest organizations in the world on their most consequential decisions are not simply hiring smart people. They are hiring people who can build a logical argument under pressure, communicate it to senior executives who did not ask to be challenged, and then move on to a different industry, a different problem, and a different client without losing the analytical thread. The case interview is not an arbitrary barrier — it is a simulation of the actual work, and students who prepare for it as seriously as graduate school applicants prepare for standardized testing consistently outperform those who treat it as a conversation. McKinsey, Bain, and BCG recruit from a limited number of undergraduate programs, and the students who succeed understand that preparation for the career begins well before the interview.'
        },
        {
          domain: 'Healthcare & Life Sciences Consulting',
          edge: 'The healthcare industry spends more money on external advisory than almost any other sector, because the problems it faces — regulatory complexity, clinical operations, reimbursement strategy, digital transformation — require expertise that most health systems cannot build internally. A consulting student who develops genuine knowledge of how healthcare organizations function is building toward one of the most financially rewarding and most impactful subspecialties in the profession. Huron Consulting, Guidehouse, and the healthcare practices at the major strategy firms all actively recruit undergraduates with healthcare knowledge who also demonstrate the analytical capabilities consulting requires.'
        },
        {
          domain: 'Technology & Digital Transformation',
          edge: 'Every large organization in the world is in the middle of a technology transformation that they do not fully understand. The consultants who help them navigate it are not technologists who learned business — they are business thinkers who learned enough about technology to ask the right questions about what a system can and cannot do, and what the organizational consequences of each choice will be. A consulting student who develops technology fluency alongside strategic thinking is building toward the specialty within consulting that is growing fastest and paying most. Accenture\'s technology practice and McKinsey\'s digital arm both recruit undergraduate consultants who demonstrate this combination early.'
        },
        {
          domain: 'Private Equity Due Diligence & Portfolio Operations',
          edge: 'Private equity firms do not simply acquire companies — they transform them. The operational work that happens between acquisition and exit is done by professionals who understand both the financial mechanics and the organizational reality of the businesses they are managing. A consulting student who develops strong operational and financial modeling skills is building toward one of the most direct paths from consulting into private equity — not through investment banking, which is the traditional route, but through the portfolio operations teams that the largest PE firms have built to manage what they have already bought. Apollo, Blackstone, and KKR all have in-house operations teams that recruit from strategy consulting programs.'
        }
      ]
    },
    {
      major_label: 'Architecture',
      riasec_affinity: ['A', 'R', 'I'],
      riasec_conflict: ['S', 'E'],
      program_keywords: ['architecture', 'design', 'urban planning', 'studio program', 'NAAB accredited'],
      entry_careers: ['Architectural Intern', 'Design Assistant', 'Urban Planning Associate'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Real Estate Development & Project Management',
          edge: 'The developers who build the best buildings are not always the ones who understand finance best. They are the ones who can read a set of construction documents, have a real conversation with the architect, and understand why a design decision made in the schematic phase will cost three times more to change in construction. An architecture student who develops interest in development is not leaving the field — they are moving to the part of it where the financial stakes are highest and the people who understand both sides of the table are fewest. Cornell\'s architecture program and USC\'s School of Architecture both have real estate development concentrations that place graduates into development roles at firms that build at scale.'
        },
        {
          domain: 'Sustainable Design & Environmental Systems',
          edge: 'Buildings account for a significant share of global energy consumption, and the architects who understand how to design buildings that use less of it — through passive systems, material selection, and systems integration that most firms still treat as a specialty — are building toward a career where the demand is structural and the supply of genuinely qualified practitioners is still catching up. The most rigorous sustainable design programs in the country are at Yale School of Architecture, SCI-Arc in Los Angeles, and Georgia Tech, all of which have developed direct industry relationships with the firms doing the most sophisticated work in this space.'
        },
        {
          domain: 'Technology & Computational Design',
          edge: 'The tools that architects use to design buildings have changed more in the past ten years than in the previous fifty. Parametric design, building information modeling, computational fabrication, and AI-assisted design are not elective skills for architecture students who want to work at the firms defining the next generation of building. They are the baseline. A student who develops computational fluency alongside spatial and structural understanding is building toward a practice that most firms now describe as essential and many cannot find enough people to staff. Zaha Hadid Architects, BIG, and the major computational design firms recruit from programs at Columbia GSAPP, SCI-Arc, and MIT that have made this synthesis their organizing principle.'
        },
        {
          domain: 'Healthcare & Institutional Facility Design',
          edge: 'The buildings that matter most to human health and institutional function — hospitals, research laboratories, schools, correctional facilities — are not designed the same way as office buildings or residential projects. They require deep knowledge of how the activities inside the building affect the design requirements, which means the architects who specialize in them develop a level of domain expertise that makes them genuinely difficult to replace. Healthcare architecture in particular is one of the most stable and consistently well-compensated specialties in the profession. HDR Architecture, HKS, and the major healthcare design firms all recruit architecture graduates with clinical environment interest and develop them into specialists who command significant premiums within five years.'
        }
      ]
    },
    {
      major_label: 'Human Resources Management',
      riasec_affinity: ['S', 'E', 'C'],
      riasec_conflict: ['I', 'R'],
      program_keywords: ['human resources', 'HR', 'talent management', 'organizational behavior', 'people operations'],
      entry_careers: ['HR Coordinator', 'Recruiter', 'People Operations Associate'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Talent Acquisition & Executive Search',
          edge: 'The professionals who identify and recruit the people who will lead organizations are not simply matching resumes to job descriptions. They are making judgments about potential, cultural fit, and long-term trajectory that shape the institutions they serve for decades. Executive search in particular is a field where the practitioners who develop genuine assessment skill — who can evaluate a leader\'s effectiveness before the market has validated it — build practices that are deeply relationship-dependent and extraordinarily difficult to replicate. Korn Ferry, Spencer Stuart, and Heidrick & Struggles all recruit from HR management programs at Cornell\'s ILR School and Michigan\'s Ross School, which have built the most rigorous undergraduate talent management curricula in the country.'
        },
        {
          domain: 'Organizational Development & Culture Design',
          edge: 'The cultures that make organizations exceptional are not accidents. They are designed — through hiring practices, performance systems, leadership behaviors, and the countless small decisions that accumulate into the experience of working somewhere. The professionals who design and sustain those systems are doing some of the most consequential and least visible work in any organization. An HR management student who develops genuine interest in organizational psychology and culture design is building toward a role that companies like Google, Netflix, and Patagonia have made into a competitive advantage — and that most organizations are still trying to understand how to replicate.'
        },
        {
          domain: 'Compensation, Benefits & Total Rewards',
          edge: 'How organizations compensate their people is one of the most consequential strategic decisions they make — and one of the most technically complex. Equity compensation, deferred arrangements, benefits architecture, and the regulatory environment surrounding all of it require a level of expertise that most organizations cannot develop internally at the entry level. A human resources student who develops genuine fluency in compensation design is building toward a specialty that is chronically understaffed at every level and that commands significant premiums as the complexity of the work becomes apparent to the organizations that need it. Willis Towers Watson and Mercer both run total rewards practices that recruit directly from HR management programs.'
        },
        {
          domain: 'People Analytics & Workforce Intelligence',
          edge: 'The organizations that manage their human capital most effectively are increasingly the ones that treat workforce decisions with the same analytical rigor they apply to financial decisions. People analytics — understanding turnover patterns, predicting performance, designing experiments around management practices — is a discipline that sits at the intersection of HR and data science, and the professionals who develop both are building toward one of the fastest-growing specialties in the function. An HR management student who develops quantitative skills alongside organizational knowledge is building toward a career that most HR programs have not yet fully incorporated into their curricula — which means the people who arrive with it are still unusual enough to stand out.'
        }
      ]
    }
  ],

  // ── NAICS 62 — Healthcare & Life Sciences ────────────────────────────────
  // Covers: hospitals, clinics, pharmaceutical, biotech, mental health,
  //         nursing, physical therapy, public health, medical research
  62: [
    {
      major_label: 'Biology / Pre-Medicine',
      riasec_affinity: ['I', 'R', 'S'],
      riasec_conflict: ['E', 'A'],
      program_keywords: ['pre-medicine', 'biology', 'medical school pipeline', 'MCAT prep', 'research lab'],
      entry_careers: ['Medical Scribe', 'Clinical Research Assistant', 'Lab Technician'],
      world_alignment: 'Think',
      cc_transfer_friendly: true,
      emerging_role: 'Longevity Physician — a specialty evolving from the intersection of internal medicine, endocrinology, genetics, and preventive medicine whose objective is not the treatment of illness but the deliberate slowing of biological aging. Where a traditional internist responds to disease, a longevity physician monitors epigenetic age, muscle quality, mitochondrial health, hormonal optimization, immune function, cognitive aging trajectories, and systemic inflammation in patients who arrive not because they are sick but because they want the physiology of someone fifteen years younger. The path runs through medical school and a residency in internal medicine or family medicine, followed by subspecialty training in a field whose fellowship structure is still being formalized — which means the physicians entering it now are building the specialty as they practice it. This is likely to become one of the largest concierge medicine specialties of the next two decades, and the undergraduate students who understand its biological foundations earliest will arrive at medical school with a research and clinical focus that most of their peers have not yet identified.',
      deployment_contexts: [
        {
          domain: 'Medical School & Clinical Practice',
          edge: 'Medicine is one of the few careers where the credential is also the license — and the path to that credential is more specific, more demanding, and more unforgiving of early missteps than almost any other professional track. A biology student who understands this early, who builds research experience, clinical exposure, and academic rigor in a deliberate sequence rather than a reactive one, arrives at the medical school application with a record that reflects preparation rather than recovery. Johns Hopkins, Duke, and Emory all have pre-medical advisory programs that have developed direct relationships with their affiliated medical schools, and the students who engage those programs as freshmen rather than juniors consistently outperform those who discover them late.'
        },
        {
          domain: 'Biomedical Research & Scientific Discovery',
          edge: 'The treatments that will save lives twenty years from now are being designed today by people who are asking questions that most clinicians do not have time to pursue. Biomedical research is the work that happens before the drug exists, before the treatment protocol is written, before the clinical trial is designed — and the people who do it have chosen a career where the timelines are long, the uncertainty is high, and the consequence of getting it right is measured in human lives. A biology student who develops genuine research instincts, who is drawn to the question behind the experiment rather than just the technique, is building toward a scientific career that the NIH, the Broad Institute, and the major research universities are consistently unable to staff at the level the work requires.'
        },
        {
          domain: 'Biotechnology & Pharmaceutical Development',
          edge: 'The companies that translate scientific discovery into treatments that reach patients are not run by scientists alone. They are run by people who understand enough biology to evaluate what the science is actually saying, and enough business to make decisions about which discoveries are worth pursuing and how to develop them into products. A biology student who develops genuine interest in the commercial application of biological science is building toward a career in biotechnology that exists at the intersection of discovery and deployment — one of the most consequential and best-compensated positions in the life sciences industry. Genentech, Amgen, and the major biotechnology companies all have structured associate programs that recruit biology graduates who combine scientific rigor with commercial awareness.'
        },
        {
          domain: 'Global Health & International Medicine',
          edge: 'The health problems that affect the largest number of people in the world are not the ones that receive the most research funding in developed countries. Infectious disease, maternal mortality, malnutrition, and the health consequences of poverty and displacement are the problems that global health professionals spend their careers addressing — in the field, in policy, and in the research institutions that try to produce knowledge faster than the problems evolve. A biology student who is drawn to health at a population scale, who thinks about disease as a social and political phenomenon as much as a biological one, is building toward a career in global health that organizations like the Gates Foundation, MSF, and the WHO are consistently trying to develop talent pipelines to fill.'
        }
      ]
    },
    {
      major_label: 'Nursing',
      riasec_affinity: ['S', 'I', 'R'],
      riasec_conflict: ['A', 'C'],
      program_keywords: ['nursing', 'BSN', 'clinical', 'NCLEX', 'patient care', 'RN pipeline'],
      entry_careers: ['Registered Nurse', 'Clinical Care Coordinator', 'ICU Nurse'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Advanced Practice & Nurse Practitioner',
          edge: 'The shortage of primary care physicians in the United States has created a structural opportunity for nurses who pursue advanced practice — nurse practitioners, certified nurse midwives, certified registered nurse anesthetists — to practice at a level of clinical independence and compensation that the profession has not historically offered. A nursing student who enters the BSN with the intention of continuing to an MSN or DNP is building a clinical career that does not require medical school, does not carry medical school debt, and in many states carries full practice authority. Vanderbilt\'s School of Nursing and Johns Hopkins School of Nursing both have direct pathways from BSN to advanced practice programs that have produced some of the most respected clinicians in the country.'
        },
        {
          domain: 'Nursing Leadership & Healthcare Administration',
          edge: 'The people who run hospitals, manage clinical departments, and set the operational standards that determine how care is delivered are almost always the ones who understood care from the inside before they moved to the outside. A nursing student who develops genuine interest in how healthcare systems function — not just clinically but operationally, financially, and organizationally — is building toward a leadership career in healthcare administration that most business-trained administrators cannot replicate because they have never actually taken care of a patient. The American Organization for Nursing Leadership runs fellowship programs that place clinically trained nurses directly into hospital administration tracks at major health systems.'
        },
        {
          domain: 'Public Health Nursing & Community Health',
          edge: 'The nurses who work outside hospital walls — in community health centers, public health departments, school systems, and home care settings — are addressing the health consequences of poverty, isolation, chronic disease, and the failures of a healthcare system that is organized around acute care rather than prevention. A nursing student who is drawn to the social determinants of health, who wants to understand why some communities are sicker than others and what it would take to change that, is building toward a practice in public health nursing that the CDC, major urban health departments, and community health organizations consistently describe as one of their most critical and hardest-to-fill needs.'
        },
        {
          domain: 'Healthcare Technology & Clinical Informatics',
          edge: 'Every electronic health record, every clinical decision support system, every patient monitoring platform in use today was built with input from clinicians — and the systems that work best are the ones where nurses were involved in their design. Clinical informatics is the discipline that sits between nursing practice and health technology, and the nurses who develop technology fluency alongside clinical expertise are building toward roles that every major health system now recognizes as essential and very few have the people to fill. Epic Systems and the major health technology companies both have clinical informatics roles that specifically seek nurses with technology backgrounds.'
        }
      ]
    },
    {
      major_label: 'Public Health',
      riasec_affinity: ['S', 'I', 'E'],
      riasec_conflict: ['R', 'C'],
      program_keywords: ['public health', 'epidemiology', 'community health', 'MPH pipeline', 'health policy'],
      entry_careers: ['Health Educator', 'Community Outreach Coordinator', 'Public Health Analyst'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Epidemiology & Disease Surveillance',
          edge: 'The professionals who tracked the spread of COVID-19, mapped the opioid epidemic, and identified the lead contamination in Flint\'s water supply were not physicians. They were epidemiologists — people trained to understand how disease moves through populations, what patterns reveal about causation, and what interventions have a realistic chance of changing the trajectory. A public health student who develops genuine quantitative depth alongside epidemiological thinking is building toward a career that the CDC, state health departments, and the major schools of public health describe as their most critical pipeline need. Johns Hopkins Bloomberg School of Public Health and Harvard T.H. Chan School of Public Health both have undergraduate public health programs with direct pathways into MPH programs that train the epidemiologists who respond when the next crisis arrives.'
        },
        {
          domain: 'Health Policy & Government Affairs',
          edge: 'The policies that determine what healthcare is available to whom, at what cost, and with what quality are not made by clinicians. They are made by people who understand both the health science and the political and economic systems through which health policy moves. A public health student who develops genuine policy instincts is building toward a career in health policy that sits at one of the most consequential intersections in American public life. The Robert Wood Johnson Foundation runs a fellowship program that has placed public health graduates into senior health policy roles at CMS, HHS, and major state health agencies — roles that shape the healthcare experience of millions of people.'
        },
        {
          domain: 'Corporate Health & Employee Wellness',
          edge: 'The largest employers in the country spend billions of dollars annually on employee health benefits, and most of them do not have a clear picture of whether those investments are improving health outcomes or simply covering costs. A public health student who develops expertise in population health management, workplace wellness program design, and health data analytics is building toward a corporate health career that exists inside every major employer and that is growing as organizations recognize the direct relationship between workforce health and organizational performance. Johnson & Johnson\'s health and wellness division and the major benefits consulting firms both recruit public health graduates into roles that combine analytical rigor with health expertise.'
        },
        {
          domain: 'Global Health & International Development',
          edge: 'The health problems that affect the most people in the world — malaria, tuberculosis, HIV, maternal and child mortality, malnutrition — are not primarily scientific problems. They are delivery problems: getting interventions that work to the people who need them, in the systems and communities where those people actually live. A public health student who develops genuine field orientation, who wants to work on the implementation side of global health rather than the research side, is building toward a career in international development where the USAID, the Gates Foundation, and the major global health implementing partners are consistently trying to build pipelines of people trained for exactly this work.'
        }
      ]
    },
    {
      major_label: 'Biochemistry / Biomedical Sciences',
      riasec_affinity: ['I', 'R', 'C'],
      riasec_conflict: ['E', 'S'],
      program_keywords: ['biochemistry', 'biomedical', 'pharmaceutical', 'lab research', 'biotech pipeline'],
      entry_careers: ['Research Associate', 'Pharmaceutical Sales Associate', 'Biotech Lab Analyst'],
      world_alignment: 'Think',
      cc_transfer_friendly: true,
      emerging_role: 'Regenerative Aesthetic Surgeon — a specialty evolving beyond conventional plastic surgery\'s reliance on implants, fillers, and tissue repositioning toward procedures that use the patient\'s own biology to rebuild what time or injury has changed. Where today\'s plastic surgeon inserts, the next generation will regrow — using stem-cell scaffolds, bioengineered fat, lab-grown cartilage, bioprinted tissue, and cellular rejuvenation protocols that produce results the body recognizes as its own rather than as foreign material. The undergraduate foundation for this path is tissue engineering, stem cell biology, and biomaterials — disciplines that live inside biochemistry and biomedical sciences programs, not general pre-med tracks. The path continues through medical school, a plastic and reconstructive surgery residency, and fellowship training in regenerative medicine whose structure is still being defined at the leading academic medical centers building these programs. The specialty shifts the entire frame of aesthetic medicine from reconstruction to biological regeneration — and the surgeons who will lead it are undergraduates right now.',
      deployment_contexts: [
        {
          domain: 'Drug Discovery & Pharmaceutical Research',
          edge: 'The molecules that become medicines pass through years of biochemical research before they are tested in a human being, and the people doing that work are not simply following protocols — they are making judgment calls about which hypotheses are worth pursuing, which experimental results are artifacts and which are real, and how to interpret data that was generated under conditions that were imperfect and that always will be. A biochemistry student who develops genuine experimental instincts, who can design a study and evaluate its limitations in the same breath, is building toward a research career in pharmaceutical development that Pfizer, Merck, and the major biotechnology companies consistently describe as their most critical and hardest-to-develop talent need.'
        },
        {
          domain: 'Regulatory Affairs & Drug Approval',
          edge: 'Every drug, medical device, and diagnostic test that reaches a patient in the United States has passed through a regulatory process that requires professionals who understand both the science and the legal and procedural framework governing what the FDA will and will not accept as evidence of safety and efficacy. Regulatory affairs is one of the most consequential and least visible careers in the life sciences industry — the people who do it determine whether treatments that work actually reach the patients who need them, and on what timeline. A biochemistry student who develops regulatory fluency alongside scientific training is building toward a career where the work is meaningful, the compensation is significant, and the supply of qualified professionals is consistently below demand.'
        },
        {
          domain: 'Medical Devices & Diagnostic Technology',
          edge: 'The instruments that measure what is happening inside a human body — blood glucose monitors, MRI machines, cancer diagnostic panels, cardiac monitors — are built by people who understand both the biology they are measuring and the engineering systems doing the measuring. Medical device development sits at the intersection of biochemistry, engineering, and clinical need, and the professionals who can work across all three are building toward a career in one of the most innovation-intensive sectors of the healthcare economy. Boston Scientific, Medtronic, and Abbott all have research and development programs that recruit biochemistry and biomedical sciences graduates who have developed both laboratory skills and translational thinking.'
        },
        {
          domain: 'Forensic Science & Legal Investigation',
          edge: 'The evidence that determines guilt or innocence in criminal proceedings is increasingly biochemical — DNA, toxicology, trace materials, biological fluids — and the scientists who analyze it and testify about it are operating in a context where the rigor of their methodology is subject to cross-examination by people who are paid to find its weaknesses. A biochemistry student who is drawn to the application of scientific analysis in legal contexts is building toward a forensic science career that the FBI crime laboratories, state forensic agencies, and private forensic consulting firms all describe as chronically understaffed relative to the volume and complexity of the cases they are asked to support.'
        }
      ]
    },
    {
      major_label: 'Kinesiology / Exercise Science',
      riasec_affinity: ['R', 'S', 'I'],
      riasec_conflict: ['C', 'E'],
      program_keywords: ['kinesiology', 'exercise science', 'physical therapy pipeline', 'sports medicine', 'athletic training'],
      entry_careers: ['Athletic Trainer', 'Physical Therapy Aide', 'Strength & Conditioning Coach'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Physical Therapy & Rehabilitation Medicine',
          edge: 'Physical therapists are among the most trusted clinicians in the healthcare system — they work with patients at their most vulnerable, over long enough periods to actually see the results of their work, and in a discipline where the science of movement and recovery is developing faster than most practitioners can keep pace with. A kinesiology student who develops strong anatomy and biomechanics foundations alongside genuine clinical empathy is building toward a physical therapy career that the American Physical Therapy Association consistently identifies as one of the most in-demand and most patient-satisfying healthcare professions. The DPT programs at USC, Northwestern, and Emory all maintain direct relationships with kinesiology undergraduate programs that have produced their most consistently prepared applicants.'
        },
        {
          domain: 'Strength & Conditioning & Elite Athletic Performance',
          edge: 'The difference between an athlete who performs at their genetic ceiling and one who performs below it is almost always in the training — the programming, the recovery, the load management, and the ability of the coaching staff to individualize preparation for bodies that respond differently to the same stimulus. Strength and conditioning coaches at the professional and elite collegiate level are not fitness instructors. They are applied scientists whose decisions directly affect the outcomes that determine whether careers last five years or fifteen. A kinesiology student who develops both scientific rigor and genuine coaching instinct is building toward a career in athletic performance that the NSCA certification validates and that professional sports organizations describe as one of their most consequential hires.'
        },
        {
          domain: 'Occupational Health & Corporate Wellness',
          edge: 'The musculoskeletal injuries that cost employers billions of dollars annually in workers\' compensation, lost productivity, and disability claims are almost entirely preventable — and the prevention requires professionals who understand how bodies move, how work environments create injury risk, and how to design interventions that change behavior at scale. A kinesiology student who develops occupational health expertise alongside movement science is building toward a career in workplace wellness and ergonomics that every large employer needs and that certified professionals in the field consistently describe as underserved. The American College of Occupational and Environmental Medicine runs certification programs that have placed kinesiology graduates into corporate health roles at Fortune 500 companies.'
        },
        {
          domain: 'Sports Technology & Wearable Performance Analytics',
          edge: 'Every elite sports organization in the world now collects data on the movement, load, recovery, and physiological state of their athletes — and the professionals who make sense of that data are not data scientists who happen to like sports. They are people who understand biomechanics, physiology, and athletic performance well enough to know which numbers matter and which are noise. A kinesiology student who develops genuine data analysis skills alongside movement science is building toward a career in sports technology that companies like Catapult, WHOOP, and Garmin are actively trying to staff with people who combine both capabilities.'
        }
      ]
    },
    {
      major_label: 'Psychology / Pre-Counseling',
      riasec_affinity: ['S', 'I', 'A'],
      riasec_conflict: ['R', 'C'],
      program_keywords: ['psychology', 'counseling pipeline', 'mental health', 'clinical psychology', 'social work'],
      entry_careers: ['Case Manager', 'Behavioral Health Technician', 'Social Services Assistant'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Clinical Mental Health Counseling & Therapy',
          edge: 'The mental health crisis affecting every demographic in the United States has produced a shortage of licensed mental health professionals that will not be resolved by the current pace of training programs. The clinicians who are entering practice right now — the ones who complete their licensure, build a genuine caseload, and develop clinical supervision relationships that deepen their practice over time — are entering a field where the demand for their work will exceed their capacity for their entire career. A psychology student who commits to the clinical path with genuine intention, who develops self-awareness alongside clinical skill, and who chooses a graduate program based on the quality of its training rather than its name recognition, is building toward a practice that matters in a way that most professions cannot claim.'
        },
        {
          domain: 'School Psychology & Educational Support',
          edge: 'The students who fall behind academically are almost never the ones who lack intelligence. They are the ones whose emotional circumstances, learning differences, or developmental trajectories have not been understood or supported by the systems around them. School psychologists are the professionals trained to understand that gap and to design interventions that change the trajectory — through assessment, counseling, crisis response, and the ongoing work of building school environments that support learning for students who do not fit the default assumptions of how children develop. The National Association of School Psychologists identifies school psychology as one of the most severe shortage professions in American education, with demand that current graduate programs cannot meet.'
        },
        {
          domain: 'Addiction Recovery & Behavioral Health',
          edge: 'Addiction is a healthcare problem that most of the healthcare system is poorly equipped to treat — because it requires a level of sustained relationship, behavioral understanding, and tolerance for setback that acute care models cannot sustain. The professionals who work in addiction recovery and behavioral health are doing some of the most demanding and most important clinical work in the country, in a field that is growing faster than it can train practitioners. A psychology student who approaches this work with genuine clinical rigor and without the judgment that has historically characterized how addiction is treated is building toward a practice where the need is profound and the shortage of qualified, compassionate clinicians is structural.'
        },
        {
          domain: 'Neuropsychology & Cognitive Assessment',
          edge: 'The evaluation of how brain function affects behavior, cognition, and daily functioning — neuropsychological assessment — is a specialty that sits at the intersection of clinical psychology, neuroscience, and medicine. Neuropsychologists assess the cognitive consequences of traumatic brain injury, stroke, dementia, learning disabilities, and a range of conditions where understanding what the brain is and is not doing is essential to treatment planning and legal proceedings. A psychology student who develops strong quantitative skills alongside clinical training is building toward a neuropsychology specialization that doctoral programs at Boston University, USC, and the Kessler Foundation have developed specific pipelines to support.'
        }
      ]
    },
    {
      major_label: 'Nutrition & Dietetics',
      riasec_affinity: ['I', 'S', 'R'],
      riasec_conflict: ['E', 'A'],
      program_keywords: ['nutrition', 'dietetics', 'food science', 'RD pipeline', 'clinical nutrition'],
      entry_careers: ['Dietetic Intern', 'Nutrition Educator', 'Wellness Coordinator'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Clinical Nutrition & Medical Nutrition Therapy',
          edge: 'What people eat directly affects how disease progresses, how surgery outcomes unfold, how cancer treatment is tolerated, and how chronic conditions like diabetes and heart disease are managed. The registered dietitian who works inside a hospital or clinical setting is not providing general wellness advice — they are making precise recommendations that interact with medications, laboratory values, and treatment protocols in ways that require clinical training that most nutrition programs do not develop to the depth the work requires. The Commission on Dietetic Registration credential is the license that makes this practice possible, and the programs at Penn State, Michigan State, and UNC Chapel Hill have built the most rigorous preparation pathways to it.'
        },
        {
          domain: 'Sports Nutrition & Athletic Performance',
          edge: 'What elite athletes eat — when, how much, in what combination, and in what relationship to their training load — is as carefully managed as their physical preparation, and the sports dietitians who design those protocols are working with teams that have discovered how significant the difference is between athletes who are optimally fueled and those who are not. A nutrition student who develops genuine interest in exercise physiology alongside dietary science is building toward a sports nutrition career that every professional sports organization and elite training program now considers essential. The CSSD certification validates this specialization, and the dietitians who hold it and work at the professional level are among the most sought-after practitioners in the field.'
        },
        {
          domain: 'Food Policy & Nutrition Advocacy',
          edge: 'The food that most Americans eat is shaped more by policy — farm subsidies, school lunch programs, food labeling regulations, zoning laws that determine what kinds of food are available in which neighborhoods — than by individual choice. The professionals who work on food policy are not simply nutritionists who became advocates. They are people who understand the science of nutrition deeply enough to know what the policy should accomplish, and the political and economic systems well enough to know how to make it happen. A nutrition student who develops policy instincts alongside clinical training is building toward a career in food systems and nutrition advocacy that the USDA, the CDC, and major food policy organizations describe as chronically understaffed with people who combine both.'
        },
        {
          domain: 'Food Product Development & Industry Innovation',
          edge: 'Every food product that reaches a supermarket shelf has been through a development process that required professionals who understand nutrition science, food chemistry, consumer behavior, and the regulatory constraints governing what can and cannot be claimed on a label. A nutrition student who develops food science knowledge alongside clinical training is building toward a product development career in the food industry that companies like General Mills, Nestlé, and the rapidly growing functional food and supplement companies are actively trying to fill with people who understand both the science and the market. The Institute of Food Technologists runs programs that connect nutrition and food science graduates with industry partners who sponsor research and hire directly.'
        }
      ]
    }
  ],

  // ── NAICS 72 — Hospitality & Food Service ────────────────────────────────
  // Covers: hotels, restaurants, events, travel, tourism, culinary,
  //         resort management, cruise, food & beverage operations
  72: [
    {
      major_label: 'Hospitality Management',
      riasec_affinity: ['E', 'S', 'C'],
      riasec_conflict: ['I', 'R'],
      program_keywords: ['hospitality management', 'hotel management', 'resort operations', 'Cornell Hotel', 'lodging industry'],
      entry_careers: ['Front Office Manager Trainee', 'Hotel Operations Associate', 'Event Coordinator'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Hotel & Resort General Management',
          edge: 'Running a hotel is one of the most operationally complex businesses that exists at any scale — it requires simultaneous management of real estate, food and beverage operations, human resources, revenue management, brand standards, and the moment-to-moment service of guests whose expectations vary and whose satisfaction is the only product that actually matters. The general managers who lead great hotels are not people who stumbled into the industry. They are professionals who learned operations from the inside, who understood every department before they led any of them, and who developed a standard for the guest experience that the entire organization could feel and replicate. Cornell\'s School of Hotel Administration has built the most direct pipeline into hotel general management in the country, and the companies that recruit there know exactly what they are getting.'
        },
        {
          domain: 'Food & Beverage Operations & Restaurant Groups',
          edge: 'The restaurant industry is one of the most demanding and most personally consequential businesses a person can lead — the margins are thin, the labor is intensive, and the gap between a dining experience that makes someone feel genuinely cared for and one that simply feeds them is almost entirely a function of the culture the operator has built. A hospitality student who is drawn to food and beverage as a craft and an operation, who wants to understand the economics of a well-run restaurant alongside the hospitality of a well-run dining room, is building toward a career in restaurant group management that the James Beard Foundation, Lettuce Entertain You, and the major restaurant hospitality groups recruit for from programs with serious operations curricula.'
        },
        {
          domain: 'Real Estate & Hotel Asset Management',
          edge: 'Hotels are not just service businesses — they are real estate assets whose value is determined by the quality of their operations, and the professionals who manage the relationship between ownership and operation are doing work that requires fluency in both hospitality and finance simultaneously. Hotel asset management is one of the most financially consequential and least understood careers in the industry — the people who do it determine how hundreds of millions of dollars in hospitality real estate performs over time. A hospitality student who develops genuine financial literacy alongside operations knowledge is building toward a career that Marriott, Hilton, and the major hotel REITs are consistently trying to develop people for and consistently finding that the pipeline is thin.'
        },
        {
          domain: 'Luxury Travel & Private Client Services',
          edge: 'The clients who spend the most money on travel and hospitality are not looking for service. They are looking for recognition — for someone who understands what they value before they have articulated it and who can deliver it without being asked. The professionals who serve this market — at private aviation companies, ultra-luxury hotel groups, expedition travel companies, and yacht charter operations — are building careers where the relationship is the product and where the ability to anticipate and exceed expectation is a skill that takes years to develop and cannot be taught from a manual. Aman Resorts, Four Seasons, and the major luxury travel companies all have management associate programs that recruit from hospitality programs with genuine luxury orientation.'
        }
      ]
    },
    {
      major_label: 'Culinary Arts',
      riasec_affinity: ['R', 'A', 'E'],
      riasec_conflict: ['I', 'C'],
      program_keywords: ['culinary arts', 'food service', 'restaurant management', 'CIA culinary', 'chef pipeline'],
      entry_careers: ['Line Cook', 'Pastry Assistant', 'Kitchen Manager Trainee'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Restaurant Ownership & Culinary Entrepreneurship',
          edge: 'The chefs who build lasting restaurant businesses are not just people who cook well. They are people who understand food as a business — who can cost a menu, manage a kitchen team, build a relationship with the dining room, and make the decisions that determine whether a restaurant is still open in its fifth year. The Culinary Institute of America in Hyde Park has graduated more successful restaurant operators than any other program in the country, not because it teaches the best cooking techniques, but because it insists that cooking and business are not separate disciplines and that the students who treat them as such will be better prepared than those who do not.'
        },
        {
          domain: 'Food Media, Styling & Content Creation',
          edge: 'The way people think about food, cook at home, and make decisions about what restaurants to visit is now shaped as much by digital media as by any other influence — and the professionals who create that content are not photographers who happen to like food. They are people who understand food deeply enough to make it compelling, and who have developed the visual and narrative skills to communicate that understanding across platforms. A culinary student who develops genuine media instincts alongside kitchen skills is building toward a career in food content that the major food media companies, cookbook publishers, and culinary brands are actively trying to staff with people who arrive with both.'
        },
        {
          domain: 'Research & Development Chef',
          edge: 'Every major food company, restaurant chain, and ingredient manufacturer has a research and development kitchen where the products and menu items of the next several years are being developed, tested, and refined. The professionals who run those kitchens are not chefs who became scientists or scientists who became chefs — they are people who developed genuine fluency in both culinary craft and food science simultaneously. A culinary student who develops food science knowledge alongside technical kitchen skills is building toward an R&D career that companies like PepsiCo, Nestlé, and the major restaurant chains describe as one of their most important and hardest-to-fill positions, because it requires a combination that very few training programs explicitly develop.'
        },
        {
          domain: 'Catering & Large-Scale Event Production',
          edge: 'Feeding five hundred people at a wedding is not the same problem as feeding five hundred people at a hospital. The catering professionals who operate at scale — for corporate clients, major events, institutional accounts, and private clients with high expectations — are managing food production systems that require the same level of operational discipline as any manufacturing environment, combined with the hospitality instincts that make large-scale food service feel personal rather than industrial. A culinary student who develops operational and logistics thinking alongside culinary skill is building toward a catering career that generates significant revenue, builds deep client relationships, and is less subject to the volatility of restaurant ownership than most culinary career paths.'
        }
      ]
    },
    {
      major_label: 'Event Management',
      riasec_affinity: ['E', 'S', 'A'],
      riasec_conflict: ['I', 'R'],
      program_keywords: ['event management', 'meeting planning', 'conference', 'wedding planning', 'live events'],
      entry_careers: ['Event Coordinator', 'Catering Sales Assistant', 'Conference Services Associate'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Corporate Events & Incentive Travel',
          edge: 'The meetings, conferences, product launches, and incentive programs that corporations run to motivate their people, educate their customers, and build their cultures are billion-dollar investments that most organizations manage with a level of strategic intention that is far below what the investment warrants. The event professionals who understand both the logistical execution and the strategic purpose of corporate gatherings — who can ask why this event needs to happen and what it should accomplish before they ask where it should be held — are building toward careers in corporate event management that the major hotel companies, destination management companies, and corporate meeting planning firms describe as among their most valuable and hardest-to-develop professionals.'
        },
        {
          domain: 'Experiential Marketing & Brand Activation',
          edge: 'The most effective marketing a brand can do is not advertising — it is creating an experience that puts the right people in direct contact with what the brand actually is, under conditions that make the encounter memorable. Experiential marketing and brand activation are the disciplines that design those encounters, and the professionals who do it well are building toward a career at the intersection of event production and marketing strategy that every major consumer brand now invests in and very few have the people to execute with real sophistication. George P. Johnson, Jack Morton, and the major experiential agencies all recruit event management graduates who develop both operational and strategic fluency.'
        },
        {
          domain: 'Music Festivals & Live Entertainment Touring',
          edge: 'The infrastructure that makes a music festival work — the site logistics, vendor management, ticketing systems, security protocols, artist hospitality, and the thousand other operational details that determine whether forty thousand people have a safe and memorable experience — is designed and executed by event professionals who have chosen one of the most demanding and most personally rewarding applications of their discipline. A hospitality and event management student who develops genuine interest in live entertainment is building toward a career in festival and touring production that companies like Live Nation, AEG, and the major independent festival operators describe as a career path that almost everyone in it arrived at without formal preparation — which means the people who arrive with it consistently advance faster.'
        },
        {
          domain: 'Nonprofit Galas & Fundraising Events',
          edge: 'The events that raise the most money for the causes that matter are not simply nice parties. They are carefully engineered experiences designed to move a room of people from appreciation to action — to make the ask feel like an honor rather than a request, and to send every person home feeling that they are part of something worth sustaining. The event professionals who specialize in nonprofit and fundraising events are doing work that combines the craft of event production with an understanding of donor psychology and organizational mission that most event programs do not develop explicitly. A student who develops this combination is building toward a career where the events they produce have consequences that extend far beyond the evening itself.'
        }
      ]
    },
    {
      major_label: 'Tourism & Travel Management',
      riasec_affinity: ['E', 'S', 'C'],
      riasec_conflict: ['I', 'R'],
      program_keywords: ['tourism', 'travel management', 'destination marketing', 'cruise industry', 'travel operations'],
      entry_careers: ['Travel Coordinator', 'Tourism Marketing Associate', 'Cruise Line Operations Trainee'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Destination Marketing & Tourism Development',
          edge: 'The decisions that determine where people choose to spend their travel dollars — which cities, which regions, which countries attract visitors and the economic activity they bring — are made by destination marketing professionals who understand both the product they are selling and the psychology of the traveler they are trying to reach. A tourism student who develops genuine marketing and economic development instincts alongside operational knowledge is building toward a career in destination management that convention and visitors bureaus, state tourism boards, and national tourism agencies describe as one of their most consequential and hardest-to-develop functions.'
        },
        {
          domain: 'Cruise Industry & Maritime Hospitality',
          edge: 'The cruise industry is one of the most operationally complex environments in hospitality — a floating city that must be provisioned, staffed, and operated to deliver a hospitality experience while managing the safety, environmental compliance, and logistical requirements of a vessel at sea. Royal Caribbean, Carnival Corporation, and Norwegian Cruise Line all have management associate programs that recruit hospitality and tourism graduates who want to build careers in an environment where the operational challenges are unlike anything on land, and where the professionals who thrive develop capabilities that are genuinely difficult to develop anywhere else.'
        },
        {
          domain: 'Sustainable Tourism & Ecotourism Development',
          edge: 'The places that attract travelers because of their natural and cultural integrity are also the places most vulnerable to being degraded by the travel that comes to experience them. Sustainable tourism development — designing experiences that generate economic value for local communities while preserving the environments and cultures that make those places worth visiting — is one of the most complex and consequential challenges in the industry. A tourism student who develops genuine environmental and community development knowledge alongside operational training is building toward a career in ecotourism and sustainable travel that the Global Sustainable Tourism Council and the major sustainable travel companies describe as a practice they cannot currently staff to the level the growth of the sector requires.'
        }
      ]
    }
  ],

  // ── NAICS 44/45 — Retail & Consumer ──────────────────────────────────────
  // Covers: retail operations, e-commerce, consumer goods, brand management,
  //         merchandising, supply chain retail, luxury goods, direct-to-consumer
  44: [
    {
      major_label: 'Marketing',
      riasec_affinity: ['E', 'A', 'S'],
      riasec_conflict: ['R', 'I'],
      program_keywords: ['marketing', 'consumer behavior', 'brand management', 'retail marketing', 'e-commerce'],
      entry_careers: ['Marketing Coordinator', 'Brand Associate', 'E-Commerce Analyst'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'E-Commerce & Digital Retail Strategy',
          edge: 'The shift from physical retail to digital commerce has not simply changed where people buy things — it has changed what information is available to the people selling them, how quickly they can test ideas, and how specifically they can understand the relationship between a marketing decision and a revenue outcome. A marketing student who develops genuine fluency in digital commerce — how search, social, email, and paid media interact with each other and with the purchase funnel — is building toward a career in e-commerce strategy that every brand selling consumer products now needs and that very few candidates arrive prepared for at the depth the role requires. Shopify, Amazon Seller Central, and the major e-commerce platforms all have partner programs that recruit marketing graduates who understand digital commerce at a systems level.'
        },
        {
          domain: 'Consumer Insights & Market Research',
          edge: 'The companies that consistently make better products than their competitors are almost always the ones that understand their customers better — not through intuition, but through research that is rigorous enough to reveal what people actually want rather than what they say they want. Consumer insights is the discipline that connects the customer to every major product, marketing, and business decision a company makes, and the professionals who do it well combine the rigor of social science with the commercial instincts to translate findings into decisions. Nielsen, Ipsos, and the major market research firms all recruit marketing graduates who have developed both qualitative and quantitative research skills.'
        },
        {
          domain: 'Category Management & Retail Buying',
          edge: 'The decisions that determine which products appear on a store\'s shelves, in what quantity, at what price, and in what position relative to competitors are made by category managers and buyers who understand both the consumer and the economics of retail in a way that most people outside the industry have never considered. Category management sits at the intersection of marketing, supply chain, and retail operations — and the professionals who develop fluency across all three are building toward one of the most commercially consequential careers in consumer products. Procter & Gamble, Unilever, and the major CPG companies all have category management training programs that recruit marketing graduates and invest significantly in their development because the people who do this work well are genuinely difficult to find.'
        }
      ]
    },
    {
      major_label: 'Retail Management',
      riasec_affinity: ['E', 'S', 'C'],
      riasec_conflict: ['I', 'A'],
      program_keywords: ['retail management', 'merchandising', 'store operations', 'loss prevention', 'supply chain retail'],
      entry_careers: ['Retail Manager Trainee', 'Merchandise Coordinator', 'Buying Assistant'],
      world_alignment: 'Systems',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Retail Operations & Store Leadership',
          edge: 'The general manager of a high-volume retail location is running a business — with a P&L, a team, an inventory, a customer base, and a set of operational standards that must be maintained while all of those variables are in constant motion. The people who lead great retail operations are not simply good at following procedures. They are professionals who understand how a store functions as a system, how to develop a team in an environment with high turnover, and how to create a customer experience that consistently exceeds the expectation that the brand has set. Target, Nordstrom, and the major retail companies all have accelerated management programs that recruit retail management graduates and move them toward store leadership significantly faster than the general population of retail employees.'
        },
        {
          domain: 'Merchandising & Assortment Planning',
          edge: 'The decisions that determine which products a retailer carries, in what sizes and quantities, at what price points, and in what visual arrangement are among the most financially consequential decisions in retail — and the professionals who make them well are combining art and analysis in a way that most training programs teach separately. Merchandising and assortment planning require a genuine understanding of customer psychology, sell-through data, trend forecasting, and the economics of inventory that most retail employees develop only after years of experience. The Fashion Institute of Technology and the retail management programs at Michigan State and University of Arizona have built merchandising concentrations with direct industry relationships at Gap Inc., Target, and the major retail buyers.'
        },
        {
          domain: 'Loss Prevention & Retail Security',
          edge: 'The shrinkage that reduces retail profitability — through external theft, internal theft, administrative error, and supplier fraud — costs the retail industry billions of dollars annually, and the professionals who manage it are doing work that requires a combination of operational knowledge, human behavior understanding, and analytical capability that most organizations develop only through experience. A retail management student who develops genuine interest in loss prevention is building toward a career that every major retailer needs qualified professionals for and that very few training programs address directly. The Loss Prevention Foundation offers professional certifications that have become the credential of record in the field.'
        }
      ]
    },
    {
      major_label: 'Supply Chain Management',
      riasec_affinity: ['C', 'R', 'E'],
      riasec_conflict: ['A', 'S'],
      program_keywords: ['supply chain', 'logistics', 'procurement', 'inventory management', 'APICS'],
      entry_careers: ['Supply Chain Analyst', 'Procurement Coordinator', 'Inventory Planner'],
      world_alignment: 'Systems',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Global Procurement & Strategic Sourcing',
          edge: 'The decisions about where to source materials, from which suppliers, under what contractual terms, and with what contingency plans for disruption are among the most financially consequential and least publicly visible decisions that large organizations make. A supply chain student who develops genuine procurement expertise — who understands how to evaluate supplier capability, negotiate contracts, and manage relationships across cultural and regulatory contexts — is building toward a career in strategic sourcing that Boeing, Apple, and the major manufacturers describe as one of the most important functions in their organizations and one of the hardest to staff with people who have formal preparation. The Institute for Supply Management\'s CPSM certification is the credential that validates this expertise.'
        },
        {
          domain: 'Logistics Technology & Distribution Optimization',
          edge: 'The systems that move products from manufacturers to customers — the warehouses, the transportation networks, the routing algorithms, the inventory management platforms — are among the most sophisticated and most consequential technology systems in the global economy. A supply chain student who develops genuine technology fluency alongside operational knowledge is building toward a career in logistics technology that Amazon, UPS, and the major third-party logistics companies are actively developing people for, because the combination of supply chain understanding and technology capability is rarer than either alone. The MIT Center for Transportation and Logistics has built the most rigorous undergraduate supply chain program in the country, and it prepares students for exactly this intersection.'
        },
        {
          domain: 'Humanitarian Logistics & Disaster Response',
          edge: 'The supply chains that deliver food, medicine, and shelter to populations affected by disaster and conflict are not simpler than commercial supply chains — they are harder. The environments are more uncertain, the consequences of failure are more severe, and the resources are more constrained. The logistics professionals who work in humanitarian supply chains — at the World Food Programme, UNICEF, the International Committee of the Red Cross, and the major humanitarian implementing organizations — are doing some of the most consequential supply chain work in the world. A supply chain student who develops genuine interest in this application is building toward a career where the operational skills they develop in commercial environments are directly transferable to contexts where those skills matter most.'
        },
        {
          domain: 'Sustainability & Circular Supply Chain',
          edge: 'The pressure on companies to understand the environmental and social consequences of their supply chains — where their materials come from, what the working conditions are in their supplier factories, what happens to their products at end of life — is accelerating faster than most supply chain organizations are prepared to respond. The professionals who understand how to design supply chains that minimize environmental impact while remaining commercially viable are building toward a career in sustainable supply chain management that is growing faster than almost any other specialization in the field. Patagonia\'s supply chain team and the sustainability practices at the major consulting firms both actively recruit supply chain graduates who have developed environmental and social governance knowledge alongside operational training.'
        }
      ]
    },
    {
      major_label: 'Entrepreneurship',
      riasec_affinity: ['E', 'A', 'I'],
      riasec_conflict: ['C', 'R'],
      program_keywords: ['entrepreneurship', 'startup', 'small business', 'venture', 'innovation', 'founder pipeline'],
      entry_careers: ['Startup Founder', 'Business Development Associate', 'Product Manager Trainee'],
      world_alignment: 'Systems',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Technology Startups & Venture-Backed Companies',
          edge: 'The companies that define the next decade of the technology industry are being started right now by people in their twenties who are building things that do not yet have competitors, serving markets that have not yet been named, and raising money from investors who are betting on the founder as much as the idea. An entrepreneurship student who develops genuine product instincts, who understands how venture capital works and what investors are actually evaluating, and who builds the network that allows access to the ecosystem where these things happen, is positioning themselves for a career in technology startups that most students approach without any of those foundations. Babson, Stanford, and MIT all have entrepreneurship programs with direct connections to the venture community that the students who engage them seriously use to build things faster and with more support than those who discover the ecosystem after graduation.'
        },
        {
          domain: 'Social Enterprise & Impact Entrepreneurship',
          edge: 'The organizations that are trying to solve social problems with market discipline — that believe the most sustainable way to address poverty, health disparities, environmental degradation, and educational inequity is to build businesses that profit from solving them — are led by entrepreneurs who chose to apply their ambition to problems that matter. Social entrepreneurship is not charity with a business model. It is the application of genuine commercial rigor to problems that the market has historically been unable or unwilling to address. Ashoka, the Skoll Foundation, and the major impact investing funds all support social enterprises led by founders who developed their entrepreneurial skills alongside their understanding of the problems they are trying to solve.'
        },
        {
          domain: 'Family Business Succession & Entrepreneurial Legacy',
          edge: 'The most common form of entrepreneurship is not the Silicon Valley startup. It is the family business — the company that was built by a founder and is now facing the question of how it continues, who leads it, and how it evolves without losing what made it worth continuing. An entrepreneurship student who comes from or is interested in a family business context is building toward one of the most consequential and most personal leadership challenges in business — the succession that either preserves a legacy or extinguishes it. The Family Business Review and the academic programs at Kennesaw State, Loyola Chicago, and Baylor all have family business entrepreneurship concentrations that address this specific and underserved career path.'
        },
        {
          domain: 'Intrapreneurship & Corporate Innovation',
          edge: 'The largest companies in the world are trying to figure out how to innovate with the urgency of a startup while operating at the scale of an institution — and the people who can help them do that are not consultants who have never built anything. They are professionals who understand how entrepreneurial processes work, why large organizations resist them, and what it takes to protect an innovative initiative inside a system that is optimized for efficiency rather than experimentation. Corporate innovation and intrapreneurship have become career tracks at major companies including Google, Amazon, and 3M, and the professionals who pursue them with genuine entrepreneurial preparation bring a perspective that most corporate career paths cannot develop.'
        }
      ]
    }
  ],

  // ── NAICS 81 — Personal Services / Lifestyle ─────────────────────────────
  // Covers: fitness, beauty, wellness, personal care, coaching, social services,
  //         religious organizations, pet services, repair trades
  81: [
    {
      major_label: 'Health & Wellness Coaching',
      riasec_affinity: ['S', 'E', 'R'],
      riasec_conflict: ['I', 'C'],
      program_keywords: ['health coaching', 'wellness', 'fitness management', 'personal training', 'lifestyle'],
      entry_careers: ['Personal Trainer', 'Wellness Coach', 'Corporate Fitness Coordinator'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Corporate Wellness & Employee Health Programs',
          edge: 'The largest employers in the country have discovered something that the research has been demonstrating for decades: the health of a workforce is directly correlated with its productivity, and the companies that invest in genuine employee wellness programs — not gym discounts and step challenges, but comprehensive programs that address stress, sleep, nutrition, chronic disease prevention, and behavioral health — see returns that justify the investment. A wellness student who develops genuine expertise in program design, health behavior change, and organizational implementation is building toward a career in corporate wellness that every large employer needs and that very few practitioners arrive prepared to lead with real rigor. The National Wellness Institute and the American College of Sports Medicine both offer certifications that have become the credentials of record for professionals in this field.'
        },
        {
          domain: 'Health Coaching & Chronic Disease Management',
          edge: 'The chronic diseases that consume the majority of healthcare spending in the United States — diabetes, heart disease, obesity, hypertension — are almost entirely lifestyle-related, and the medical system that treats them is not designed to change the behaviors that cause them. Health coaches are filling a gap that physicians cannot fill because they do not have time and that patients cannot fill because they have not been given the tools. A wellness student who develops genuine behavioral science knowledge alongside health expertise is building toward a health coaching practice where the demand is enormous, the reimbursement landscape is improving, and the practitioners who arrive with serious training are consistently more effective than those who arrived with only a certification. The National Board for Health and Wellness Coaching credential validates this practice at a level that the major health systems and health insurance companies are beginning to recognize and reimburse.'
        },
        {
          domain: 'Fitness Business & Studio Ownership',
          edge: 'The fitness industry has evolved from gym membership models to a landscape of boutique studios, digital platforms, and hybrid experiences that serve clients with a specificity and intimacy that traditional gyms never achieved. The professionals who build successful fitness businesses in this environment are not simply great trainers who decided to open a space. They are entrepreneurs who understand the economics of a service business, the psychology of client retention, and the marketing required to build an audience in a market that is crowded with alternatives. A wellness student who develops genuine business skills alongside fitness expertise is building toward a fitness business career that the boutique studio industry, the digital fitness platforms, and the major fitness franchise companies are all trying to develop better pipelines for.'
        }
      ]
    },
    {
      major_label: 'Social Work',
      riasec_affinity: ['S', 'I', 'E'],
      riasec_conflict: ['R', 'C'],
      program_keywords: ['social work', 'BSW pipeline', 'community services', 'case management', 'nonprofit services'],
      entry_careers: ['Case Manager', 'Community Outreach Worker', 'Youth Program Coordinator'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Clinical Social Work & Psychotherapy',
          edge: 'The licensed clinical social worker is the most common provider of mental health services in the United States — more than psychiatrists, more than psychologists, more than any other clinical profession. The MSW followed by clinical licensure is the credential that enables this practice, and the social workers who complete it are entering a field where the demand for their services will exceed their capacity for their entire career and where the ability to genuinely help people in crisis is the measure of the work. Washington University in St. Louis and Columbia University both have MSW programs with direct clinical training relationships that prepare graduates for licensure and for the full scope of independent clinical practice.'
        },
        {
          domain: 'Child Welfare & Family Services',
          edge: 'The professionals who work in child protective services, foster care, adoption, and family preservation are doing the most consequential and most emotionally demanding work in public service — making decisions that affect children\'s lives at the moments when those lives are most fragile. A social work student who prepares for this work with genuine seriousness — who develops the clinical skills, the resilience, and the systems understanding to be effective in a field that burns out the unprepared — is building toward a career where the shortage of qualified professionals has direct consequences for the children the system is supposed to protect. The Annie E. Casey Foundation has documented the workforce crisis in child welfare for decades and funds training initiatives at social work programs that develop graduates specifically for this work.'
        },
        {
          domain: 'Healthcare Social Work & Medical Settings',
          edge: 'Every hospital, hospice, oncology unit, and rehabilitation center employs social workers who help patients and families navigate the practical and emotional consequences of serious illness — the insurance denials, the discharge planning, the family conflict, the grief, the decisions that have to be made under conditions of fear and uncertainty. Healthcare social work is one of the most stable and well-compensated applications of the degree, and it is a field where the emotional intelligence and clinical training of a social worker are as consequential to patient outcomes as the medical care itself. The Society for Social Work Leadership in Health Care recognizes and supports the professionals doing this work, and major health systems across the country actively develop pipelines from MSW programs.'
        },
        {
          domain: 'Policy Advocacy & Systemic Change',
          edge: 'The problems that social workers encounter in individual cases — poverty, housing instability, substance use, domestic violence, inadequate healthcare access — are not individual problems. They are systemic failures that will only change through policy. A social work student who develops genuine policy and advocacy skills alongside clinical training is building toward a career in social policy that NASW, the Center on Budget and Policy Priorities, and the major social justice organizations describe as one of their most important and hardest-to-fill functions — because it requires people who understand both the lived experience of the systems they are trying to change and the policy tools available to change them.'
        }
      ]
    },
    {
      major_label: 'Cosmetology / Esthetics (Applied)',
      riasec_affinity: ['A', 'R', 'S'],
      riasec_conflict: ['I', 'C'],
      program_keywords: ['cosmetology', 'esthetics', 'beauty industry', 'salon management', 'personal care'],
      entry_careers: ['Licensed Cosmetologist', 'Salon Manager', 'Beauty Brand Educator'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Salon Ownership & Beauty Business',
          edge: 'The cosmetologist who builds a successful salon is not simply a skilled practitioner who opened a space. They are an entrepreneur who understands the economics of a service business, the art of client retention, the management of a creative team, and the marketing required to build a clientele that chooses them specifically — not the location, not the price, not the convenience, but the person and the experience they create. A cosmetology student who develops genuine business instincts alongside technical excellence is building toward a business ownership career that the beauty industry consistently rewards, where the practitioners who reach full books do so because they understood that their craft and their client relationships are both worth investing in deliberately.'
        },
        {
          domain: 'Beauty Brand Education & Platform Training',
          edge: 'The major beauty brands — L\'Oréal, Wella, Schwarzkopf, OPI — employ educators who travel to salons and schools teaching the techniques and brand story behind their products to the professionals who use and recommend them. Brand education is one of the most financially rewarding and most overlooked careers available to a licensed cosmetologist — it offers the opportunity to develop teaching skills, build a national network, and represent a brand that invests in the professional\'s development in return. A cosmetologist who develops genuine platform presence alongside technical mastery is building toward an education career that the major professional beauty companies recruit from the pool of practitioners who have distinguished themselves both technically and as communicators.'
        },
        {
          domain: 'Film, Television & Editorial Beauty',
          edge: 'The makeup and hair work that appears on film sets, in editorial photography, and on the runway is not the same work that happens in a salon — it requires an understanding of how light interacts with skin and product, how beauty reads on camera versus in person, and how to work quickly and precisely under production conditions where every minute has a cost. A cosmetology student who develops genuine interest in beauty for media and entertainment is building toward a career in film and editorial that the International Alliance of Theatrical Stage Employees union represents, and where the practitioners who develop both technical skill and the ability to collaborate with directors and photographers build careers that are significantly more durable than general salon work.'
        },
        {
          domain: 'Medical Aesthetics & Spa Medicine',
          edge: 'The intersection of cosmetology and medicine — the esthetic treatments that are performed in medical settings, under physician supervision, and that address skin conditions, scarring, and aging with tools and techniques that require both clinical training and esthetic skill — is one of the fastest-growing areas of healthcare. Medical estheticians who develop the additional training to work in dermatology offices, plastic surgery practices, and medical spas are building toward a career that commands significantly higher compensation than salon work, serves a clientele with specific clinical needs, and operates in a regulatory environment that rewards professionals who understand the medical context of their work.'
        }
      ]
    },
    {
      major_label: 'Family & Consumer Sciences',
      riasec_affinity: ['S', 'I', 'R'],
      riasec_conflict: ['E', 'C'],
      program_keywords: ['family sciences', 'consumer sciences', 'child development', 'human development', 'family studies'],
      entry_careers: ['Child Life Specialist', 'Family Services Coordinator', 'Early Childhood Educator'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Early Childhood Education & Development',
          edge: 'The experiences that shape cognitive, social, and emotional development happen earlier than most people realize, and the research on what quality early childhood education produces — in school readiness, lifetime earnings, health outcomes, and civic participation — is among the most compelling in all of social science. A family and consumer sciences student who develops genuine early childhood expertise is building toward a career in early education where the practitioners who understand child development at a research level are consistently more effective than those who learned from observation alone. The David and Lucile Packard Foundation and the Robert Wood Johnson Foundation both fund initiatives that recognize and develop early childhood professionals who bring genuine developmental science into their practice.'
        },
        {
          domain: 'Consumer Financial Education & Counseling',
          edge: 'The financial decisions that most families struggle with — debt management, retirement planning, housing affordability, insurance choices — are not complicated in the way that investment banking is complicated. They are complicated in the way that human behavior around money is complicated: people know what they should do and consistently do something else. A family and consumer sciences student who develops genuine financial counseling expertise alongside human development knowledge is building toward a career in consumer financial education that credit unions, nonprofit housing counseling agencies, and financial education nonprofits describe as one of their most critical and hardest-to-fill roles. The Association for Financial Counseling and Planning Education offers the AFCPE certification that validates this specialization.'
        },
        {
          domain: 'Child Life Specialist & Pediatric Support',
          edge: 'Children who are hospitalized — for surgery, illness, injury, or the treatment of chronic conditions — are not simply small patients. They are developing human beings whose experience of the healthcare system has consequences for their psychological wellbeing that extend far beyond the medical outcome. Child life specialists are the professionals trained to support children and families through medical experiences, using play, education, and therapeutic intervention to reduce fear, build coping skills, and help children understand and integrate what is happening to them. The Child Life Council certifies practitioners in this specialization, and the major pediatric hospitals — Boston Children\'s, Children\'s Hospital Los Angeles, and Cincinnati Children\'s — all have child life programs that recruit family and consumer sciences graduates with child development depth.'
        },
        {
          domain: 'Family Policy & Advocacy',
          edge: 'The policies that determine the quality of family life in the United States — parental leave, childcare access, early education funding, food assistance, housing stability — are made by people who either understand what families actually need or are guessing. A family and consumer sciences student who develops genuine policy and advocacy skills alongside human development knowledge is building toward a career in family policy where the First Five Years Fund, Zero to Three, and the major early childhood advocacy organizations consistently describe the shortage of professionals who combine clinical understanding with policy effectiveness as one of their most significant constraints.'
        }
      ]
    }
  ],

  // ── NAICS 71 — Arts / Entertainment / Recreation ─────────────────────────
  // Covers: performing arts, visual arts, music, theatre, sports management,
  //         museums, galleries, live events, creative direction
  // Also catches tile-only creative profiles with no strong NAICS anchor
  71: [
    {
      major_label: 'Fine Arts / Studio Art',
      riasec_affinity: ['A', 'I', 'S'],
      riasec_conflict: ['C', 'E'],
      program_keywords: ['fine arts', 'studio art', 'MFA pipeline', 'gallery', 'visual art', 'portfolio'],
      entry_careers: ['Gallery Assistant', 'Artist Residency', 'Art Director Assistant'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Art Direction & Visual Brand Identity',
          edge: 'The visual language of a brand — how it looks, what it implies, what kind of life it promises to the person who chooses it — is built by people who understand aesthetics at a level that most design programs teach instrumentally rather than foundationally. A fine arts student who develops fluency in commercial application alongside studio practice is building toward a career in art direction where the training in seeing — really seeing, in the way that years of studio practice develop — is an advantage that business-trained designers cannot easily replicate. Wieden+Kennedy, Apple\'s in-house design team, and the major fashion houses have all historically over-indexed on fine arts graduates for senior creative roles.'
        },
        {
          domain: 'Museum Curation & Arts Administration',
          edge: 'The institutions that preserve and present art to the public are also organizations — with budgets, boards, acquisitions strategies, and community relationships that require professionals who understand both the artistic mission and the operational reality. A fine arts student who develops genuine interest in how art institutions function is building toward a career in curation or arts administration that sits at the center of cultural life in every major city. The American Alliance of Museums and the Association of Art Museum Curators both have fellowship and emerging professional programs that recruit from fine arts undergraduate programs at schools with established museum relationships — Yale, RISD, and the School of the Art Institute of Chicago among them.'
        },
        {
          domain: 'Luxury Goods Design & Craft Production',
          edge: 'The objects that the world\'s most discerning consumers choose to own are not made by machines or designed by committees. They are conceived by people with genuine aesthetic conviction and made with a level of craft knowledge that takes years to develop. A fine arts student who combines technical skill with a genuine understanding of materials, form, and the history of objects is building toward a career in luxury goods design that most fashion and design programs produce students who want but cannot access. LVMH\'s graduate program, Hermès\'s artisan development track, and the Italian luxury manufacturers who supply the major houses all have pathways for practitioners who arrive with genuine craft preparation.'
        },
        {
          domain: 'Public Art & Community Design',
          edge: 'The art that most people encounter most often is not in museums. It is in public spaces — transit stations, parks, building facades, community centers — and the artists who create it are working at the intersection of aesthetic practice and civic life in a way that studio practice alone does not prepare for. A fine arts student who develops interest in public space, community engagement, and the politics of who gets to shape the visual environment of shared life is building toward a practice that is underserved, consequential, and increasingly supported by public and private funding that did not exist a generation ago. The Public Art Fund in New York and the Los Angeles County Arts Commission both have residency and commissioning programs that recruit directly from MFA programs at schools with strong public art histories.'
        }
      ]
    },
    {
      major_label: 'Music / Music Industry',
      riasec_affinity: ['A', 'E', 'S'],
      riasec_conflict: ['C', 'R'],
      program_keywords: ['music', 'music industry', 'recording', 'music business', 'Berklee', 'performance', 'music production'],
      entry_careers: ['Music Producer Assistant', 'A&R Coordinator', 'Tour Manager Assistant'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Music Business, Publishing & Rights Management',
          edge: 'The music that generates royalties for decades is not always the music that was most successful when it was released. It is the music whose rights were managed intelligently — whose publishing agreements were structured to retain value, whose licensing relationships were built with intention, and whose catalog was protected against the industry\'s many mechanisms for transferring value away from creators. A music student who develops genuine fluency in publishing, rights management, and music business law is building toward one of the most consequential and least glamorous roles in the industry. Berklee College of Music and Belmont University in Nashville both have music business programs with direct relationships at the major publishers and performing rights organizations.'
        },
        {
          domain: 'Sync Licensing & Media Music',
          edge: 'The music in every film, television show, advertisement, and video game is there because someone chose it, cleared it, and negotiated the terms under which it could be used. Sync licensing is the intersection of music, law, and media — and the practitioners who understand all three are consistently fewer than the industry needs. A music student who develops interest in the commercial application of music in visual media is building toward a career that exists at the center of the entertainment economy and that most music students discover only after spending years performing or recording without financial stability. The major music supervision companies in Los Angeles and New York both recruit from music programs with licensing and rights concentrations.'
        },
        {
          domain: 'Music Technology & Audio Engineering',
          edge: 'The way music is recorded, produced, and delivered has changed more in the past twenty years than in the previous century, and the professionals who understand both the artistic and technical dimensions of that change are building tools, platforms, and workflows that define how music gets made. A music student who develops genuine technical depth alongside musical knowledge is building toward a career in audio technology that sits at the intersection of creativity and engineering. Berklee\'s music technology program and the Clive Davis Institute at NYU both have direct relationships with Spotify, Apple Music, and the major recording software companies that have reshaped the production landscape.'
        },
        {
          domain: 'Advertising & Brand Sound Identity',
          edge: 'Sound is the most emotionally direct medium available to a brand, and most brands have no coherent strategy for how they use it. The professionals who develop brand sound identities — the sonic logos, the music strategy, the audio experience across every touchpoint — are doing work that most marketing organizations are only beginning to commission deliberately. A music student who develops commercial instincts alongside sonic sensibility is building toward a specialty that is underserved, growing, and valued by the brands that understand what they are missing. MassiveMusic and Man Made Music are among the studios that have built practices around this work and recruit from music programs at Berklee and NYU.'
        }
      ]
    },
    {
      major_label: 'Theatre / Performing Arts',
      riasec_affinity: ['A', 'S', 'E'],
      riasec_conflict: ['C', 'R'],
      program_keywords: ['theatre', 'performing arts', 'acting', 'drama', 'BFA', 'conservatory', 'stage management'],
      entry_careers: ['Stage Manager', 'Casting Assistant', 'Production Coordinator'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Executive Presence & Leadership Communication',
          edge: 'The skills that make an actor effective on stage — the ability to inhabit a perspective fully, to communicate clearly under pressure, to read an audience and adjust in real time — are the same skills that make an executive persuasive in a boardroom. A theatre student who moves into business is not leaving their training behind. They are applying it in a context where most of their peers have never been trained at all. The executive coaching industry, which charges significant fees to teach senior leaders what theatre programs teach undergraduates as a matter of course, has documented this gap for decades without most business schools choosing to close it.'
        },
        {
          domain: 'Casting, Talent Development & Representation',
          edge: 'The people who identify talent before the market has validated it — who recognize what a performer is capable of before they have had the opportunity to demonstrate it publicly — are doing work that is as consequential to the entertainment industry as any creative role in it. Casting directors, talent agents, and artist managers all operate from an understanding of performance and human potential that is most directly developed through serious training in the craft. A theatre student who is drawn to the business of talent rather than performance itself is building toward a career that the industry values highly and that very few people arrive at with genuine preparation. CAA, WME, and ICM all have training programs for agent trainees that actively recruit from theatre programs at Northwestern, Carnegie Mellon, and Juilliard.'
        },
        {
          domain: 'Corporate Training & Organizational Learning',
          edge: 'The most effective corporate training programs in the world do not teach through lectures or slides. They teach through experience — through simulations, role-play, and structured practice that mirror the methods that theatre has used to develop human performance for centuries. A theatre student who develops genuine interest in how organizations learn is building toward a career in organizational development and corporate training where the methodology is more sophisticated than most clients understand, and the practitioners who arrive with real performance training are consistently more effective than those who arrived through business or education. Ariel Group and the major organizational learning firms have built their practices around applied theatre methodology.'
        },
        {
          domain: 'Theme Park & Live Entertainment Production',
          edge: 'The live entertainment experiences that draw millions of people annually — theme parks, theatrical spectacles, touring productions, cruise entertainment, immersive experiences — are built and operated by professionals who understand performance, production, and the specific craft of engaging live audiences at scale. A theatre student who is drawn to the production and operational side of live entertainment is building toward a career that exists at the intersection of creativity and logistics in a way that most performing arts programs do not explicitly prepare for. Disney Theatrical, Cirque du Soleil, and the major live entertainment producers all have production management tracks that have recruited from theatre programs at Carnegie Mellon, NYU Tisch, and DePaul.'
        }
      ]
    },
    {
      major_label: 'Sports Management',
      riasec_affinity: ['E', 'S', 'C'],
      riasec_conflict: ['I', 'A'],
      program_keywords: ['sports management', 'athletics administration', 'sports marketing', 'sports business', 'agent pipeline'],
      entry_careers: ['Sports Marketing Coordinator', 'Athletic Department Assistant', 'Agent Trainee'],
      world_alignment: 'People',
      cc_transfer_friendly: true,
      deployment_contexts: [
        {
          domain: 'Sports Agency & Athlete Representation',
          edge: 'Representing an athlete is not primarily about negotiating contracts — it is about building a career, managing a brand, navigating relationships with teams and sponsors and media, and making decisions on behalf of someone whose athletic window is finite and whose long-term financial security depends on how those decisions are made. The agents who do this well are building practices that are relationship-intensive, reputation-dependent, and extraordinarily difficult to replicate once established. A sports management student who understands both the business architecture and the human dynamics of athlete representation is building toward a career that most people in it arrived at without formal preparation. Leigh Steinberg\'s agency, CAA Sports, and Wasserman all have agent training programs that have recruited from sports management programs at Ohio State, Georgetown, and IMG Academy.'
        },
        {
          domain: 'Sports Analytics & Performance Intelligence',
          edge: 'Every major professional sports organization in the world now has a department dedicated to understanding, through data, what their athletes are doing, why they are doing it, and how to do it better. The professionals who build and run those departments are not statisticians who became sports fans — they are people who understand the sport deeply enough to know which questions are worth asking, and who developed the analytical tools to answer them. A sports management student who develops genuine quantitative skills alongside deep sport knowledge is building toward one of the most competitive and intellectually demanding roles in professional athletics. MIT\'s Sloan Sports Analytics Conference has become the annual gathering of the field, and the students who present research there tend to enter the industry at a level that most of their peers will spend years trying to reach.'
        },
        {
          domain: 'Stadium Operations & Event Management',
          edge: 'The experience of attending a major sporting event — from the moment a fan decides to buy a ticket to the moment they leave the venue — is managed by professionals who understand operations, hospitality, security, technology, and the specific psychology of large crowds with significant emotional investment in what is happening in front of them. A sports management student who is drawn to the operational side of sport is building toward a career that exists at the intersection of event management and facilities management in a way that most sports business programs do not explicitly prepare for. AEG, ASM Global, and the major venue management companies all have operations management tracks that recruit from sports management programs.'
        },
        {
          domain: 'Collegiate Athletics Administration',
          edge: 'The NCAA ecosystem — which manages the athletic programs of over a thousand colleges and universities, governs the rules under which they compete, and distributes billions of dollars in revenue — employs tens of thousands of administrators, compliance officers, marketing professionals, and operations staff who understand how collegiate athletics function as both an educational enterprise and a commercial one. A sports management student who develops genuine interest in the regulatory, financial, and ethical dimensions of college sports is entering a field that is undergoing more structural change than at any point in its history, and where the professionals who understand that change clearly will have significant influence over what the system looks like on the other side. The NCAA headquarters in Indianapolis and the major athletic conferences both recruit from sports management programs with academic athletics concentrations.'
        }
      ]
    },
    {
      major_label: 'Dance',
      riasec_affinity: ['A', 'S', 'R'],
      riasec_conflict: ['C', 'I'],
      program_keywords: ['dance', 'choreography', 'movement', 'BFA dance', 'performance', 'dance company'],
      entry_careers: ['Dancer', 'Choreography Assistant', 'Movement Coach'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Choreography & Movement Direction for Film and Media',
          edge: 'The movement in every film, music video, commercial, and live broadcast that involves a human body being watched while it moves was designed by someone. That work requires a level of spatial intelligence, physical knowledge, and storytelling instinct that performance training develops and that cannot be replicated by people who simply understand camera angles. A dance student who develops genuine interest in the intersection of movement and visual media is building toward a career in choreography for screen that has grown significantly as streaming platforms have increased demand for content in which movement is central to the storytelling. Debbie Allen Dance Academy and the choreographic programs at USC and NYU Tisch both have concentrations in screen choreography with direct industry relationships.'
        },
        {
          domain: 'Physical Therapy & Movement Medicine',
          edge: 'The physical therapists who treat professional athletes, performing artists, and high-performance individuals are not simply applying protocols — they are applying an understanding of how bodies move, where they compensate for weakness, and what the difference between functional movement and optimal movement looks like to a trained eye. A dance student who develops genuine interest in the science of the body is building toward physical therapy with a foundation in kinesthetic intelligence that most physical therapy students develop only after years of clinical practice. Fordham University and Juilliard both offer programs at the intersection of dance and movement science that have placed graduates directly into graduate physical therapy programs with the foundation already built.'
        },
        {
          domain: 'Wellness, Somatic Practice & Mind-Body Education',
          edge: 'The practices that help people inhabit their bodies more fully — yoga, Pilates, somatic therapies, mindfulness movement, feldenkrais, and the range of disciplines that have grown into a substantial wellness economy — are led by practitioners who understand movement at a level that most wellness certifications do not develop. A dance student who is drawn to the healing and educational applications of movement is building toward a career at the intersection of performing arts and wellness that is growing faster than the credentialing structures around it, which means the practitioners who arrive with serious training have a significant advantage over those who arrived with only a certification. The Pilates Method Alliance and the major somatic training institutes all have pathways for dance-trained practitioners who want to develop clinical applications.'
        }
      ]
    },
    {
      major_label: 'Graphic Design / Visual Communication',
      riasec_affinity: ['A', 'I', 'R'],
      riasec_conflict: ['S', 'E'],
      program_keywords: ['graphic design', 'visual communication', 'typography', 'branding', 'portfolio', 'design studio'],
      entry_careers: ['Junior Designer', 'Brand Designer', 'Motion Graphics Artist'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Brand Identity & Visual Systems',
          edge: 'The visual identity of an organization — how it looks across every surface it occupies, from a business card to a stadium — is a system, not a collection of assets. The designers who build those systems are not decorating. They are making decisions about how an institution presents itself to every person who encounters it, decisions that persist for decades and that are extraordinarily expensive to redo when they are made without rigor. A graphic design student who develops genuine expertise in visual systems thinking — who understands how a design decision made at the logo level cascades through every application — is building toward one of the most consequential and best-compensated specialties in the profession. Pentagram, Landor, and Wolff Olins have all built their practices around designers who think at the system level.'
        },
        {
          domain: 'Information Design & Data Visualization',
          edge: 'The ability to take complex information and make it immediately comprehensible to someone who did not collect it is one of the most valuable and least common skills in any knowledge-intensive organization. Data visualization, information architecture, and the design of dashboards, reports, and analytical tools are not graphic design problems — they are communication problems that require the tools of graphic design applied with a level of analytical rigor that most design programs do not explicitly develop. A graphic design student who develops genuine interest in how information is structured and communicated is building toward a career that sits at the intersection of design, data, and decision-making, and that every organization with a data function needs but very few have found good candidates to fill.'
        },
        {
          domain: 'Motion Design & Interactive Experience',
          edge: 'The interfaces that people use every day — on their phones, their computers, the screens in airports and hospitals and retail spaces — are designed by people who understand how motion, transition, and interaction communicate meaning in ways that static design cannot. Motion design and interactive experience design are disciplines that sit between graphic design and technology, and the practitioners who develop genuine fluency in both are building toward a career where the work is increasingly central to how every digital product feels to use. Apple\'s Human Interface team, Google\'s Material Design team, and the major digital product studios all recruit from design programs that have built motion and interaction into the core curriculum — RISD, ArtCenter, and CalArts among them.'
        },
        {
          domain: 'Social Impact & Mission-Driven Design',
          edge: 'The organizations working on the most consequential problems of the current moment — climate, public health, equity, democratic participation — are almost uniformly under-resourced in design. The gap between the visual and communication quality of commercial work and mission-driven work is not a reflection of the importance of the work. It is a reflection of where design talent has historically been concentrated. A graphic design student who chooses to apply their skills in service of institutions and causes that cannot compete for talent on commercial terms is not making a sacrifice. They are entering a field where the work is more meaningful, the designer\'s voice carries more weight, and the opportunity to shape how important ideas reach the public has never been larger. IDEO.org and the major social impact design studios recruit from RISD, Yale School of Art, and MICA.'
        }
      ]
    },
    {
      major_label: 'Fashion Design / Merchandising',
      riasec_affinity: ['A', 'E', 'R'],
      riasec_conflict: ['I', 'C'],
      program_keywords: ['fashion design', 'fashion merchandising', 'apparel', 'FIDM', 'Parsons', 'fashion industry'],
      entry_careers: ['Design Assistant', 'Merchandising Coordinator', 'Styling Assistant'],
      world_alignment: 'Make',
      cc_transfer_friendly: false,
      deployment_contexts: [
        {
          domain: 'Luxury Brand Management & Retail Strategy',
          edge: 'The fashion industry that exists at the level of quality and craft that commands genuine premiums is a small world — and the people who navigate it successfully are the ones who understand both the creative language and the commercial architecture of how luxury brands maintain their desirability while growing their revenue. A fashion student who develops genuine fluency in retail strategy, brand management, and the business of exclusivity is building toward a career in luxury that most fashion graduates pursue without the business foundation that makes the creative work commercially sustainable. Parsons and FIT both have business of fashion concentrations with direct relationships at LVMH, Kering, and the major American fashion houses that recruit undergraduates who understand both sides.'
        },
        {
          domain: 'Sustainable Fashion & Supply Chain Ethics',
          edge: 'The fashion industry is one of the largest contributors to environmental degradation in the global economy, and the pressure from consumers, regulators, and investors to change how it operates is accelerating faster than most companies are prepared to respond. The professionals who understand both the design and production dimensions of fashion — who can evaluate a supply chain against a sustainability standard and identify what needs to change without destroying the product — are among the most needed and least available in the industry. Eileen Fisher, Patagonia, and the emerging generation of sustainable fashion brands all recruit fashion graduates who have developed supply chain and sustainability knowledge alongside design training, and this combination is increasingly required rather than simply valued.'
        },
        {
          domain: 'Costume Design & Entertainment Fashion',
          edge: 'The clothing worn by characters in film, television, and theatre is not decoration. It is storytelling — every piece chosen to communicate something about who the character is, what world they inhabit, and how they move through it. Costume design is one of the most technically demanding and intellectually rigorous applications of fashion training, and it requires a combination of historical knowledge, construction skill, and narrative understanding that takes years to develop. The Costume Designers Guild represents the practitioners who have built careers in this discipline, and the schools that have produced the most working costume designers — FIDM, LIM College, and the MFA programs at Yale and NYU — all have direct industry relationships with the major studios.'
        },
        {
          domain: 'Fashion Technology & Digital Apparel',
          edge: 'The way clothing is designed, sampled, produced, and sold is being transformed by technology that most fashion companies adopted later than every other major consumer industry. Digital pattern-making, 3D garment simulation, AI-assisted trend forecasting, and virtual try-on technology are all being built and implemented by people who need to understand both the technology and the physical reality of how clothes are made. A fashion student who develops genuine technology fluency alongside design and production training is building toward a career in fashion technology that does not yet have established career pathways — which means the people who arrive with the right combination are defining what those pathways look like. CLO Virtual Fashion and the major fashion tech companies recruit from fashion programs that have integrated digital tools into their core curriculum.'
        }
      ]
    }
  ]

};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────────────────────
// Tier 2 and Tier 3 clusters will be appended to MAJOR_MAP in subsequent builds.
// Resolver function (resolveMajor), D4 bridge (getProgramKeywords),
// and session injection are all Tier 1 gate — built after this data layer
// is reviewed and approved.

// For browser (lifescape.html script tag):
if (typeof window !== 'undefined') {
  window.MAJOR_MAP = MAJOR_MAP;
}

// For Node.js validation suite:
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MAJOR_MAP };
}

// ─── TIER 2+3 REBUILD ────────────────────────────────────────────────────────
// NAICS 61 — Education & Training Services
// NAICS 23 — Construction & Built Environment
// NAICS 33 — Advanced Manufacturing & Engineering
// NAICS 48 — Transportation, Logistics & Distribution
// NAICS 92 — Government, Policy & Public Administration
// ─────────────────────────────────────────────────────────────────────────────

MAJOR_MAP[61] = [
  {
    major_label: 'Education',
    riasec_affinity: ['S', 'A', 'I'],
    riasec_conflict: ['R', 'C'],
    program_keywords: ['education', 'teaching', 'curriculum', 'instructional design', 'learning sciences'],
    entry_careers: ['Teacher', 'Instructional Designer', 'Education Program Coordinator'],
    world_alignment: 'People',
    cc_transfer_friendly: true,
    deployment_contexts: [
      {
        domain: 'Instructional Design & Corporate Learning',
        edge: 'The fastest-growing segment of the education field has nothing to do with classrooms. Every major company in America is rebuilding how it trains its workforce — and the professionals who understand learning science, curriculum sequencing, and adult motivation are being recruited out of education programs into roles at Google, Deloitte, and Amazon that carry salaries no K-12 district can approach. Teachers College at Columbia and the University of Southern California\'s Rossier School have both built instructional design tracks specifically for students who want the credential of an education degree and the career optionality of a technology company.'
      },
      {
        domain: 'Education Policy & Reform',
        edge: 'The people who actually change how schools work are rarely in classrooms. They are writing policy in state legislatures, running foundation programs at Gates and Walton, directing research at Brookings and RAND, and leading the nonprofit organizations that translate research into practice at scale. Vanderbilt\'s Peabody College and Harvard\'s Graduate School of Education both produce the professionals who move between those worlds — and both actively recruit undergraduates who want to understand the system before trying to change it.'
      },
      {
        domain: 'EdTech Product & Curriculum Development',
        edge: 'Building software for learning is different from building software for commerce. The product decisions that determine whether a student actually learns something — sequencing, feedback loops, the management of frustration and reward — require genuine understanding of how human beings acquire knowledge under pressure. Khan Academy, Duolingo, and Coursera have all hired education majors into product roles because they discovered that their engineers alone could not answer the question of whether the product actually worked.'
      },
      {
        domain: 'Museum & Cultural Education',
        edge: 'Every major museum in America is also a school — with audiences that range from kindergartners on field trips to retired professionals, all of whom arrived voluntarily and can leave the moment they stop being engaged. The education departments that design those experiences draw from learning science, public history, and interpretive design in ways that most visitors never see. The Smithsonian, the Metropolitan Museum, and the Getty all run education associate programs that have launched careers sitting at the intersection of culture, pedagogy, and public engagement.'
      },
      {
        domain: 'International Education & Exchange',
        edge: 'The infrastructure that moves students and educators across borders — Fulbright, IIE, AFS, the State Department\'s exchange programs — is staffed by professionals who understand both education and international relations. Georgetown\'s School of Foreign Service and American University\'s School of International Service have both placed education majors into program officer and regional director roles that most people assume require a policy or diplomatic background.'
      }
    ]
  },
  {
    major_label: 'Learning Sciences & Human Development',
    riasec_affinity: ['I', 'S', 'A'],
    riasec_conflict: ['R', 'E'],
    program_keywords: ['learning sciences', 'cognitive development', 'educational psychology', 'child development', 'human development'],
    entry_careers: ['Learning Experience Designer', 'Child Development Specialist', 'Research Associate'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'Early Childhood & Developmental Program Design',
        edge: 'The research on what happens in the first five years of a child\'s cognitive life has never been more actionable — and the gap between what the science shows and what most programs actually do has never been more visible. The professionals who can translate developmental research into program design are working at the most consequential intersection in American social policy. Northwestern\'s School of Education and Social Policy and the University of Michigan\'s School of Education both train researchers who end up designing the programs that Head Start, the Gates Foundation, and state early childhood agencies fund at scale.'
      },
      {
        domain: 'UX Research & Human-Centered Design',
        edge: 'The question that learning scientists spend careers on — how do people actually process, retain, and apply new information — is the same question that the best UX researchers ask about every product interaction. The path from learning sciences into technology is shorter and more direct than most education students realize. IDEO, Google\'s People Analytics team, and Microsoft\'s research division have all recruited learning scientists specifically because they bring a rigor about human cognition that most computer science graduates were never trained to apply.'
      },
      {
        domain: 'Organizational Learning & Change Management',
        edge: 'When a company tries to change — new strategy, new systems, new culture — most of those changes fail not because the strategy was wrong but because nobody understood how adults actually learn and adapt under conditions of uncertainty. The learning scientists who move into organizational consulting are solving a problem that McKinsey and Bain charge enormous fees to address and often address poorly. Vanderbilt\'s Peabody College and Teachers College at Columbia both have alumni in senior learning and development roles at firms that never thought of themselves as education employers.'
      }
    ]
  },
  {
    major_label: 'Sports Management & Coaching Sciences',
    riasec_affinity: ['E', 'S', 'R'],
    riasec_conflict: ['I', 'A'],
    program_keywords: ['sports management', 'athletic administration', 'coaching', 'kinesiology', 'sports education'],
    entry_careers: ['Athletic Director Assistant', 'Coaching Associate', 'Sports Program Coordinator'],
    world_alignment: 'Move',
    cc_transfer_friendly: true,
    deployment_contexts: [
      {
        domain: 'Collegiate Athletic Administration',
        edge: 'Running a Division I athletic department is a business operation with a budget that rivals a mid-sized corporation — media rights negotiations, facility financing, Title IX compliance, NIL policy, and the management of coaching staffs whose compensation packages require board approval. The professionals who move into athletic director and senior administrator roles increasingly come from sports management programs that treat the field as a business discipline. Ohio State\'s Sport Industry program and Michigan\'s Sport Management program have both placed graduates into Power Five conference administration roles that used to require decades of coaching experience to reach.'
      },
      {
        domain: 'Strength & Conditioning in Professional Sport',
        edge: 'The science behind elite athletic performance has become sophisticated enough that every professional team in every major sport now employs specialists whose understanding of physiology, biomechanics, and recovery science directly affects roster outcomes. This is not a career for someone who loves sports. It is a career for someone who loves systems and is willing to apply them to human bodies under competitive pressure. The University of Connecticut\'s Kinesiology program and the University of Oregon\'s Human Physiology program have both produced strength and conditioning professionals now working in the NFL, NBA, and MLB.'
      }
    ]
  },
  {
    major_label: 'Library & Information Science',
    riasec_affinity: ['I', 'C', 'S'],
    riasec_conflict: ['E', 'R'],
    program_keywords: ['library science', 'information management', 'archival studies', 'knowledge management', 'data curation'],
    entry_careers: ['Research Librarian', 'Information Architect', 'Knowledge Manager'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'Knowledge Management & Enterprise Information Architecture',
        edge: 'Every large organization is drowning in its own information — documents, decisions, research, institutional memory — and most of them cannot find what they know when they need it. The professionals who solve this problem at scale are not IT professionals. They are information architects who understand how knowledge is organized, retrieved, and made useful to people who are not looking for it directly. The University of Michigan\'s School of Information and the University of Illinois\'s iSchool have both produced knowledge management professionals now working at Amazon, Microsoft, and Google in roles that did not exist under that title fifteen years ago.'
      },
      {
        domain: 'Digital Preservation & Cultural Heritage',
        edge: 'The question of what survives from the digital era — which photographs, which records, which institutional documents are still readable in fifty years — is one of the most consequential and least visible problems in contemporary information management. The Library of Congress, the Internet Archive, and every major university library system are actively building teams of professionals who understand both the technical challenges of digital preservation and the curatorial judgment required to decide what matters. Pratt Institute\'s School of Information and Simmons University\'s School of Library and Information Science have both placed graduates into digital preservation roles at institutions that are quite literally deciding what the future will remember.'
      }
    ]
  }
];

// ─── NAICS 23 — Construction & Built Environment ─────────────────────────────

MAJOR_MAP[23] = [
  {
    major_label: 'Architecture',
    riasec_affinity: ['A', 'I', 'R'],
    riasec_conflict: ['S', 'C'],
    program_keywords: ['architecture', 'design', 'building design', 'urban design', 'sustainable architecture'],
    entry_careers: ['Architectural Designer', 'Draftsperson', 'Project Designer'],
    world_alignment: 'Make',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'Healthcare Facility Design',
        edge: 'The design of a hospital room affects patient recovery rates. The layout of a nursing station affects medication error rates. The placement of windows in a psychiatric facility affects patient outcomes in ways that have been measured and published and are largely ignored by architects who have not been trained to read the research. The firms that have built practices around evidence-based healthcare design — HKS, Perkins+Will, Stantec — are among the most consistent employers of architecture graduates who want their work to carry consequences beyond aesthetics. Harvard\'s Graduate School of Design and USC\'s School of Architecture both maintain active relationships with healthcare facility clients.'
      },
      {
        domain: 'Sustainable Design & Net-Zero Buildings',
        edge: 'The built environment accounts for nearly forty percent of global carbon emissions — and the architects who understand how to design buildings that produce as much energy as they consume are working at the most commercially viable intersection of design and climate. LEED certification was once a differentiator. Now it is a baseline. The professionals who can design to Passive House standards, integrate renewable energy systems into building envelopes, and model carbon across a building\'s full lifecycle are being recruited by every major developer who has made a net-zero commitment. Cal Poly San Luis Obispo\'s Architecture program and the University of Oregon\'s Architecture program have both built sustainability concentrations that employers in this space actively recruit from.'
      },
      {
        domain: 'Real Estate Development & Project Management',
        edge: 'The architects who move into development are not abandoning design. They are acquiring the financial and organizational fluency to make design decisions that actually get built — because they understand pro formas, entitlement processes, and the economics of construction in ways that most designers never learn. Related Companies, Hines, and Tishman Speyer have all hired architects into development associate roles specifically because they want people who can read a set of drawings and understand a cap rate in the same conversation. Columbia\'s GSAPP and USC\'s School of Architecture both have graduates running development projects at firms that most architecture students think of as client organizations, not employers.'
      },
      {
        domain: 'Technology & BIM Innovation',
        edge: 'Building Information Modeling has changed how buildings are designed, documented, and constructed — and the architects who are fluent in computational design, parametric modeling, and the integration of BIM across a project lifecycle are building practices that smaller firms cannot replicate. Zaha Hadid Architects, SHoP, and Bjarke Ingels Group have all built computational design teams that draw from architecture programs with strong digital fabrication and parametric design curricula. SCI-Arc in Los Angeles and Carnegie Mellon\'s School of Architecture have both produced graduates now leading computational design studios at firms where the relationship between code and construction is genuinely new territory.'
      }
    ]
  },
  {
    major_label: 'Civil Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['civil engineering', 'structural engineering', 'transportation engineering', 'geotechnical', 'water resources'],
    entry_careers: ['Civil Engineer I', 'Project Engineer', 'Transportation Planner'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'Infrastructure & Transportation Systems',
        edge: 'The infrastructure bill passed in 2021 committed more than one trillion dollars to roads, bridges, rail, broadband, and water systems — and the civil engineers who will design, manage, and certify that work are in shorter supply than at any point in recent memory. AECOM, Jacobs, and WSP are all running accelerated hiring programs for civil engineering graduates who can step into project engineer roles on federally funded infrastructure projects. Georgia Tech\'s civil engineering program and Purdue\'s Lyles School of Civil Engineering have both placed graduates directly into project lead roles on highway and transit projects that will reshape how American cities move.'
      },
      {
        domain: 'Water Resources & Environmental Infrastructure',
        edge: 'Water scarcity is the defining infrastructure challenge of the American West — and the civil engineers who specialize in water systems, aquifer management, and wastewater treatment are working on problems that have no elegant solution and unlimited urgency. The Metropolitan Water District of Southern California, the Bureau of Reclamation, and every major water utility in the country are competing for engineers who understand hydrology, hydraulic modeling, and the regulatory frameworks that govern water rights. Colorado State\'s Walter Scott Jr. College of Engineering and the University of Arizona\'s Department of Civil and Architectural Engineering have both built water resources concentrations that the western water sector recruits from directly.'
      },
      {
        domain: 'Construction Management & Project Controls',
        edge: 'The civil engineers who move into construction management are the professionals who prevent the failures that make news — projects over budget, behind schedule, or structurally compromised because nobody was tracking what mattered. Turner Construction, Bechtel, and Skanska all run associate programs for engineering graduates who want to be on the owner side of major projects. Purdue, Arizona State, and the University of Florida all have strong construction engineering management tracks that have placed graduates into project controls roles on hospital, airport, and stadium projects.'
      }
    ]
  },
  {
    major_label: 'Urban Planning & Development',
    riasec_affinity: ['I', 'S', 'E'],
    riasec_conflict: ['R', 'A'],
    program_keywords: ['urban planning', 'city planning', 'land use', 'community development', 'zoning'],
    entry_careers: ['Planning Associate', 'Community Development Coordinator', 'Land Use Analyst'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'Housing Policy & Affordable Development',
        edge: 'The housing affordability crisis in American cities is fundamentally a planning and policy failure — a gap between what cities need and what zoning codes allow, what developers can finance and what communities will accept. The professionals who are actually solving pieces of this problem are working in planning departments, community development financial institutions, and nonprofit housing organizations that most people outside the field have never heard of. UCLA\'s Luskin School of Public Affairs and USC\'s Price School of Public Policy have both built housing policy concentrations that place graduates into roles where the decisions they make in year three determine where families can afford to live.'
      },
      {
        domain: 'Transportation & Mobility Planning',
        edge: 'How a city moves is how a city works — and the planners who design transit systems, bike networks, and pedestrian infrastructure are making decisions that affect millions of daily commutes, air quality levels, and economic mobility patterns that compound over decades. The Los Angeles Metro, BART, and New York\'s MTA all run planning associate programs, as do the major transit consulting firms like WSP and Nelson\\Nygaard. Cal Poly San Luis Obispo\'s City and Regional Planning program and the University of Michigan\'s Taubman College have both placed graduates into transit planning roles at agencies managing billion-dollar capital programs.'
      },
      {
        domain: 'Real Estate & Private Development',
        edge: 'Urban planners who move into the private sector bring something developers rarely have internally: fluency with the regulatory and community engagement processes that determine whether a project gets built at all. The entitlement process in Los Angeles, San Francisco, and New York is complex enough that major developers now employ planning professionals specifically to navigate it. Related Companies, Brookfield, and Boston Properties have all built government relations and entitlement teams that draw heavily from planning school alumni who understand how city hall works from the inside.'
      }
    ]
  },
  {
    major_label: 'Construction Management',
    riasec_affinity: ['R', 'E', 'C'],
    riasec_conflict: ['A', 'I'],
    program_keywords: ['construction management', 'project management', 'estimating', 'scheduling', 'building systems'],
    entry_careers: ['Assistant Project Manager', 'Field Engineer', 'Estimator'],
    world_alignment: 'Systems',
    cc_transfer_friendly: true,
    deployment_contexts: [
      {
        domain: 'Commercial Construction & Development',
        edge: 'Every major commercial building in America — every hospital, every data center, every mixed-use tower — goes through a construction management process that determines whether it gets built on time, on budget, and to the standards that the owner actually specified. The professionals who run those processes at the project manager and superintendent level are among the most consistently employed people in the American economy, because what they do cannot be offshored and cannot be automated. Arizona State\'s Del E. Webb School of Construction and Purdue\'s construction management program have both built direct employer relationships with Turner, Hensel Phelps, and DPR that result in job offers before graduation for students who performed well on internship.'
      },
      {
        domain: 'Specialty Contracting & Trade Management',
        edge: 'The skilled trades — electrical, mechanical, plumbing, and the specialty systems that make buildings function — are managed by professionals who understand both the technical requirements of each trade and the coordination challenges of running multiple specialty contractors on a single project simultaneously. The construction manager who can read a mechanical drawing, communicate credibly with a master electrician, and track a thirty-trade schedule on a hospital project is rare and specifically recruited. Wentworth Institute of Technology and Cal Poly Pomona both have construction management programs with strong specialty contracting relationships that most four-year construction programs do not maintain.'
      }
    ]
  }
];

// ─── NAICS 33 — Advanced Manufacturing & Engineering ─────────────────────────

MAJOR_MAP[33] = [
  {
    major_label: 'Mechanical Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['mechanical engineering', 'thermodynamics', 'fluid mechanics', 'manufacturing', 'product design'],
    entry_careers: ['Mechanical Engineer I', 'Product Development Engineer', 'Design Engineer'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Human-Robot Collaboration Engineer — the professional who designs the shared workspaces, safety systems, and task allocation protocols that allow human workers and robotic systems to operate in close physical proximity without the rigid separation that traditional industrial automation required. BMW, Ford, and Amazon are all building collaborative robotics programs whose design requirements go beyond what either mechanical or software engineering training addresses alone.',
    deployment_contexts: [
      {
        domain: 'Aerospace & Defense Systems',
        edge: 'The mechanical engineers who work on aerospace systems are solving problems where margin for error is measured in thousandths of an inch and failure modes are studied for years after they occur. SpaceX, Boeing, Northrop Grumman, and Raytheon all run co-op and internship programs that effectively function as multi-year job interviews for mechanical engineering students — and the students who perform well in those programs receive offers before their senior year ends. Purdue\'s School of Aeronautics and Astronautics and Georgia Tech\'s George W. Woodruff School of Mechanical Engineering have both produced engineers who are now leading propulsion and structures teams on programs that will define aerospace for the next generation.'
      },
      {
        domain: 'Medical Device Design & Development',
        edge: 'A medical device that fails in the field does not generate a warranty claim. It generates an FDA investigation. The mechanical engineers who design implants, surgical instruments, and diagnostic equipment work under regulatory constraints that reshape every design decision from the first sketch to the final validation test. Medtronic, Stryker, and Boston Scientific all recruit mechanical engineers specifically from programs with strong biomedical design curricula — and the graduates who arrive understanding FDA 510(k) pathways and design controls command starting offers that their peers in other sectors spend years working toward. Drexel\'s College of Engineering and the University of Minnesota\'s mechanical engineering program have both built strong medical device design concentrations that these companies recruit from directly.'
      },
      {
        domain: 'Robotics & Automation Systems',
        edge: 'The automation of manufacturing is not a future event. It is a present condition that every factory manager in America is managing right now — and the mechanical engineers who can design, integrate, and optimize robotic systems are working at the intersection of the two disciplines that are reshaping what human labor in manufacturing actually means. Fanuc, KUKA, and ABB all recruit mechanical engineers into applications engineering and systems integration roles. Carnegie Mellon\'s Robotics Institute and the University of Michigan\'s mechanical engineering program have both built robotics concentrations that industrial automation employers recruit from with a regularity that reflects genuine pipeline dependence.'
      }
    ]
  },
  {
    major_label: 'Electrical Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['electrical engineering', 'circuits', 'power systems', 'signal processing', 'embedded systems'],
    entry_careers: ['Electrical Engineer I', 'Systems Engineer', 'Hardware Engineer'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Embedded AI Systems Engineer — the professional who integrates machine learning inference directly into microcontrollers and edge computing hardware — enabling devices to make intelligent decisions locally without cloud connectivity. Every autonomous vehicle, smart sensor, and industrial IoT device requires this capability, and the engineers who can design both the hardware and the inference pipeline are among the most sought-after in the semiconductor and automotive sectors.',
    deployment_contexts: [
      {
        domain: 'Semiconductor & Chip Design',
        edge: 'The semiconductor supply chain crisis made visible something that engineers have known for decades: the chips that run every device, every vehicle, and every data center in the world are designed by a relatively small number of electrical engineers working at the intersection of physics and computer architecture. Qualcomm, Intel, NVIDIA, and TSMC are all competing for the same pipeline of chip design and verification engineers — and that competition has driven starting salaries at leading semiconductor firms to levels that rival investment banking without the hours. UC San Diego\'s Jacobs School of Engineering and Georgia Tech\'s School of Electrical and Computer Engineering have both produced semiconductor engineers who are now leading design teams on the chips that will define the next generation of AI hardware.'
      },
      {
        domain: 'Power Systems & Grid Technology',
        edge: 'The electrical grid is undergoing its most significant transformation since electrification — the integration of distributed renewable generation, utility-scale storage, and the electrification of transportation and heating are creating engineering challenges that the existing workforce is not large enough to solve. Pacific Gas & Electric, Southern California Edison, NextEra Energy, and every major utility in the country are running accelerated hiring programs for electrical engineers who understand power systems, grid stability, and the protection and control systems that keep large-scale electricity networks functional. Arizona State\'s Ira A. Fulton Schools of Engineering and the University of Washington\'s electrical engineering program have both built power systems concentrations that utility employers recruit from with a consistency that reflects genuine talent scarcity.'
      }
    ]
  },
  {
    major_label: 'Industrial Engineering & Manufacturing Systems',
    riasec_affinity: ['R', 'I', 'E'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['industrial engineering', 'manufacturing systems', 'operations research', 'lean manufacturing', 'quality engineering'],
    entry_careers: ['Industrial Engineer', 'Manufacturing Engineer', 'Process Improvement Analyst'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Chief Quality Intelligence Officer (CQIO) — the professional who replaces statistical sampling with continuous real-time quality monitoring across an entire production system, using computer vision, sensor fusion, and machine learning to detect defects, predict failure modes, and trigger corrective action before a nonconforming product reaches the next process step. This is not an incremental improvement to quality engineering — it is a structural transformation of how manufacturing quality works, and the industrial engineers who lead it are building functions that did not exist five years ago.',
    deployment_contexts: [
      {
        domain: 'Lean Manufacturing & Production Optimization',
        edge: 'Toyota did not build the most efficient manufacturing system in automotive history by accident. It built it by training engineers to see waste — in motion, in inventory, in waiting, in defects — and eliminate it systematically. The industrial engineers who carry that methodology into American manufacturing plants are producing measurable results that their employers can attach a dollar figure to within the first quarter. Boeing, General Motors, and Procter & Gamble all run industrial engineering rotational programs that treat the first two years as intensive training in applied operations research. Georgia Tech\'s H. Milton Stewart School of Industrial and Systems Engineering is the most cited pipeline for this work in the country, producing engineers who enter manufacturing and consulting roles with a rigor about human-system interaction that mechanical engineers without IE training typically lack.'
      },
      {
        domain: 'Quality Engineering & Regulatory Compliance',
        edge: 'In a pharmaceutical plant, a quality failure is not a customer service problem. It is a regulatory shutdown, a recall, and potentially a criminal investigation. The quality engineers who design and maintain the systems that prevent those failures are working at the intersection of statistical process control, regulatory compliance, and organizational culture in ways that require a sophistication most engineers are not trained for. Johnson & Johnson, Pfizer, and Merck all maintain quality engineering rotational programs at their manufacturing facilities, and the industrial engineers who go through those programs and into quality systems leadership roles are managing risks that have nine-figure consequences. Penn State\'s Harold and Inge Marcus Department of Industrial and Manufacturing Engineering and Purdue\'s School of Industrial Engineering both have quality engineering concentrations that pharmaceutical and medical device manufacturers recruit from specifically.'
      },
      {
        domain: 'Supply Chain Operations & Network Design',
        edge: 'The supply chain disruptions of the early 2020s made visible what industrial engineers have modeled for decades: the difference between a resilient supply network and a fragile one is not luck. It is the quality of the engineering decisions made about where to source, how much inventory to carry, and how to design the physical and informational flows that connect suppliers to customers across continents. Amazon, Apple, and Nike all employ industrial engineers in supply chain network design roles that most people outside the profession do not know exist — roles that carry responsibility for billions of dollars in inventory and infrastructure decisions. Michigan State\'s Broad College of Business and Penn State\'s IE program have both placed industrial engineers into supply chain network design roles at companies whose logistics operations are studied as industry benchmarks.'
      }
    ]
  },
  {
    major_label: 'Chemical Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['chemical engineering', 'process engineering', 'thermodynamics', 'reaction engineering', 'separation processes'],
    entry_careers: ['Process Engineer', 'Chemical Engineer I', 'R&D Associate'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Continuous Manufacturing Process Engineer — the professional who redesigns batch pharmaceutical and chemical manufacturing into continuous flow processes — eliminating the idle time, scale-up uncertainty, and quality variability that batch manufacturing produces. The FDA has actively encouraged continuous manufacturing adoption, and the chemical engineers who can design and validate these processes are working on a transformation of how drugs and specialty chemicals are made that reduces cost, improves quality, and compresses development timelines simultaneously.',
    deployment_contexts: [
      {
        domain: 'Pharmaceutical Manufacturing & Process Development',
        edge: 'Moving a drug from laboratory synthesis to commercial manufacturing at scale is one of the most technically demanding challenges in industrial engineering — and the chemical engineers who can design, validate, and optimize that process are working at the center of an industry that measures its output in lives. Pfizer, Eli Lilly, and AstraZeneca all run process development and manufacturing engineering programs for chemical engineering graduates, and the graduates who enter pharmaceutical manufacturing with strong process chemistry and GMP (Good Manufacturing Practice) backgrounds receive starting compensation packages that place them among the highest-paid engineering graduates in any sector. MIT\'s chemical engineering program and Carnegie Mellon\'s Department of Chemical Engineering have both produced process engineers who are now leading manufacturing scale-up programs for drugs that have changed the standard of care for serious diseases.'
      },
      {
        domain: 'Energy Transition & Green Chemistry',
        edge: 'The transition from fossil fuel chemistry to renewable energy chemistry is the largest industrial transformation in a century — and the chemical engineers who understand both the existing processes and the emerging alternatives are working on problems that have no settled answers and enormous commercial stakes. ExxonMobil, Chevron, and Shell are all running green chemistry and carbon capture programs staffed by chemical engineers who know enough about existing petroleum chemistry to understand why the alternatives are hard and enough about electrochemistry to contribute to making them work. The University of California Berkeley\'s Department of Chemical and Biomolecular Engineering and the University of Texas at Austin\'s McKetta Department of Chemical Engineering have both built energy transition concentrations that the energy sector recruits from directly.'
      }
    ]
  }
];

// ─── NAICS 48 — Transportation, Logistics & Distribution ─────────────────────

MAJOR_MAP[48] = [
  {
    major_label: 'Supply Chain Management',
    riasec_affinity: ['E', 'C', 'I'],
    riasec_conflict: ['A', 'R'],
    program_keywords: ['supply chain', 'logistics', 'operations management', 'procurement', 'demand planning'],
    entry_careers: ['Supply Chain Analyst', 'Logistics Coordinator', 'Procurement Associate'],
    world_alignment: 'Systems',
    cc_transfer_friendly: true,
    deployment_contexts: [
      {
        domain: 'Global Sourcing & Procurement',
        edge: 'Apple sources components from over forty countries before a single iPhone is assembled. The professionals who manage those sourcing relationships — negotiating contracts, qualifying suppliers, managing risk across a supply base that spans continents and currencies — are doing work that determines product margins and delivery reliability for the most valuable company in the world. Apple, Nike, and Procter & Gamble all run procurement leadership development programs for supply chain graduates, and the professionals who enter those programs with strong negotiation, data analysis, and supplier relationship skills move into global category management roles faster than any other track in those organizations. Michigan State\'s Broad College of Business has built the most consistently cited supply chain undergraduate program in the country, and its alumni placement in global sourcing roles at Fortune 500 companies reflects a recruiting relationship that spans decades.'
      },
      {
        domain: 'Fulfillment Operations & Last-Mile Logistics',
        edge: 'Amazon operates more than one thousand fulfillment centers globally, and the operations managers who run those facilities are managing workforces, technology systems, and service level agreements that have redefined what on-time delivery means. The supply chain professionals who understand fulfillment center operations, carrier management, and last-mile delivery optimization are among the most actively recruited graduates in the logistics sector — because the gap between what e-commerce customers expect and what most logistics networks can consistently deliver is still large enough that operations talent is genuinely scarce. Arizona State\'s W. P. Carey School of Business and Penn State\'s Smeal College of Business have both placed supply chain graduates into Amazon Operations and UPS Supply Chain Solutions programs that function as accelerated pathways into senior operations management.'
      },
      {
        domain: 'Healthcare Supply Chain & Medical Logistics',
        edge: 'The COVID-19 pandemic made visible what healthcare supply chain professionals had known for years: the systems that deliver personal protective equipment, pharmaceuticals, and medical devices to hospitals and clinics are among the most consequential and most fragile in the American economy. McKesson, Cardinal Health, and Medline Industries all employ supply chain professionals whose decisions affect whether a hospital has what it needs to treat patients — and those companies have responded to the recognition of that criticality by building supply chain leadership programs that compete with technology companies for the same pipeline of analytically rigorous operations graduates. Michigan State and Penn State both place graduates into healthcare distribution management programs; Rutgers Business School has built a specific healthcare supply chain concentration that these employers recruit from directly.'
      }
    ]
  },
  {
    major_label: 'Transportation & Logistics Management',
    riasec_affinity: ['E', 'C', 'R'],
    riasec_conflict: ['A', 'I'],
    program_keywords: ['transportation', 'freight', 'intermodal', 'fleet management', 'route optimization'],
    entry_careers: ['Logistics Analyst', 'Transportation Planner', 'Fleet Coordinator'],
    world_alignment: 'Systems',
    cc_transfer_friendly: true,
    deployment_contexts: [
      {
        domain: 'Freight Brokerage & Third-Party Logistics',
        edge: 'The freight brokerage industry moves trillions of dollars of goods annually by connecting shippers who need capacity with carriers who have it — and the professionals who do that work at a high level are combining market knowledge, relationship management, and real-time data analysis in ways that produce compensation outcomes that most business graduates in other sectors do not reach until their mid-thirties. C.H. Robinson, Echo Global Logistics, and XPO Logistics all run sales and operations rotational programs that have launched careers in freight brokerage for transportation graduates who understood what they were entering before they walked in the door. Western Michigan University\'s Haworth College of Business has built one of the strongest freight transportation programs in the country, and its placement in brokerage and 3PL roles reflects a regional employer relationship that reaches far beyond Michigan.'
      },
      {
        domain: 'Port Operations & International Freight',
        edge: 'Ninety percent of everything that moves in global trade moves by ocean — and the professionals who manage port operations, customs compliance, and international freight forwarding are working at the infrastructure layer of the global economy that most people interact with daily without knowing it. The Ports of Los Angeles and Long Beach together handle more container volume than any other port complex in the Western Hemisphere, and the operations professionals who manage that volume work for terminal operators, freight forwarders, and customs brokers whose names appear on no consumer product but whose decisions affect the arrival of almost everything that does. California State University Long Beach\'s Global Logistics program and the University of Houston\'s Global Supply Chain Management program have both built specific international freight concentrations that port and freight forwarding employers recruit from with a geographic intentionality that reflects the industries\' concentration near major port infrastructure.'
      }
    ]
  },
  {
    major_label: 'Aviation & Airport Management',
    riasec_affinity: ['R', 'E', 'C'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['aviation management', 'airport operations', 'airline management', 'air traffic', 'aviation safety'],
    entry_careers: ['Airport Operations Associate', 'Airline Operations Coordinator', 'Aviation Safety Analyst'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'Airline Operations & Network Planning',
        edge: 'An airline is a logistics network of extraordinary complexity — hundreds of aircraft, thousands of crew members, millions of passengers, and a schedule that must recover from disruptions in real time without cascading failure. The operations professionals who manage network planning, crew scheduling, and irregular operations recovery are solving optimization problems that have commercial consequences measured in hundreds of millions of dollars annually. Delta, United, and American all run operations management associate programs for aviation graduates, and the professionals who enter those programs with strong operations research and data analysis skills move into network planning and revenue management roles that carry significant commercial responsibility relatively early in their careers. Embry-Riddle Aeronautical University\'s Business Administration program and Purdue\'s Aviation Management program have both built airline operations pipelines that the major carriers recruit from directly and consistently.'
      }
    ]
  }
];

// ─── NAICS 92 — Government, Policy & Public Administration ───────────────────

MAJOR_MAP[92] = [
  {
    major_label: 'Political Science & Government',
    riasec_affinity: ['E', 'S', 'I'],
    riasec_conflict: ['R', 'C'],
    program_keywords: ['political science', 'government', 'politics', 'international relations', 'comparative politics'],
    entry_careers: ['Legislative Assistant', 'Policy Research Associate', 'Government Relations Coordinator'],
    world_alignment: 'People',
    cc_transfer_friendly: true,
    deployment_contexts: [
      {
        domain: 'Legislative Affairs & Congressional Staffing',
        edge: 'The people who actually write legislation are not members of Congress. They are staff members — legislative assistants, policy advisors, and chief of staff who carry the substantive expertise that elected officials rely on when making decisions about complex policy. A congressional office is one of the few places in American professional life where a twenty-three-year-old can carry genuine policy responsibility on issues that affect millions of people. Georgetown\'s Government Department and American University\'s School of Public Affairs have both built direct placement relationships with Congressional offices and the agencies that interact with them — and both have alumni networks in Washington dense enough that a phone call from a recent graduate actually reaches someone who will take it.'
      },
      {
        domain: 'Government Relations & Public Affairs',
        edge: 'Every major corporation, every hospital system, every university, and every nonprofit of meaningful scale employs professionals whose job is to understand and navigate the regulatory and legislative environment that shapes what their organization can do. Those professionals are government relations specialists — and the ones who are effective bring a combination of policy knowledge, relationship credibility, and strategic communication skills that takes years to build and that most organizations compete actively to retain. Apple, Google, Amazon, and Boeing all run government affairs teams in Washington and in state capitals where the regulatory decisions that affect their businesses are made. Georgetown, George Washington, and the University of Virginia\'s Frank Batten School both place political science graduates into government relations roles at a rate that reflects active employer recruiting relationships.'
      },
      {
        domain: 'International Affairs & Diplomatic Service',
        edge: 'The Foreign Service is one of the most competitive career paths in American government — and one of the most consequential. Foreign Service Officers represent the United States in countries ranging from allied democracies to active conflict zones, managing relationships, reporting on political developments, and implementing foreign policy at the ground level where abstractions become operational decisions. The path through the Foreign Service Officer Test is open to graduates of any institution — but the substantive preparation that makes a candidate competitive comes from political science and international affairs programs that take seriously the study of foreign policy, comparative politics, and international economics. Georgetown\'s School of Foreign Service and Tufts University\'s Fletcher School have both built international affairs programs whose graduates enter the Foreign Service at rates that reflect genuine preparation for what the test and the career actually require.'
      }
    ]
  },
  {
    major_label: 'Public Policy & Administration',
    riasec_affinity: ['I', 'E', 'S'],
    riasec_conflict: ['R', 'A'],
    program_keywords: ['public policy', 'public administration', 'policy analysis', 'program evaluation', 'public management'],
    entry_careers: ['Policy Analyst', 'Program Associate', 'Government Program Coordinator'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'Urban & Municipal Policy',
        edge: 'The decisions that most directly affect daily life — where affordable housing gets built, how transit routes are drawn, which neighborhoods receive infrastructure investment — are made not in Washington but in city halls, planning commissions, and county budget offices where the professionals who do the analytical work are often recent graduates of public policy programs. Los Angeles, Chicago, New York, and every major American city run management analyst and policy associate programs that function as entry points into municipal government for graduates who want to work on problems with immediate and visible consequences. UCLA\'s Luskin School and USC\'s Price School have both built direct relationships with Los Angeles city and county agencies that result in placement rates for policy graduates that reflect genuine employer commitment rather than incidental hiring.'
      },
      {
        domain: 'Nonprofit Management & Social Policy',
        edge: 'The nonprofit sector delivers a significant portion of social services in America — housing assistance, job training, healthcare access, food security — and the organizations that do it effectively are managed by professionals who understand both the policy environment that funds them and the operational challenges that determine whether programs actually work. The Bill & Melinda Gates Foundation, the Ford Foundation, and the major United Way affiliates all employ policy and program professionals whose backgrounds combine public policy training with genuine understanding of what works at the community level. Indiana University\'s O\'Neill School of Public and Environmental Affairs and Syracuse University\'s Maxwell School have both built nonprofit management concentrations that the major foundations and social service organizations recruit from with a consistency that reflects decades of relationship-building.'
      },
      {
        domain: 'Health Policy & Healthcare Administration',
        edge: 'American healthcare is a policy-shaped industry — the payment systems, regulatory requirements, and coverage rules that determine how care is delivered and who can access it are all products of political decisions made at the federal and state level. The professionals who help healthcare organizations navigate that environment — health policy analysts, government affairs directors, regulatory affairs managers — are working at the intersection of policy expertise and healthcare knowledge that most programs train for separately. The RAND Corporation, Mathematica Policy Research, and the major health system consulting firms all recruit policy graduates with strong quantitative and healthcare backgrounds. Vanderbilt\'s Department of Health Policy and Johns Hopkins Bloomberg School of Public Health have both built health policy tracks that these employers recruit from directly at the undergraduate and graduate level.'
      }
    ]
  },
  {
    major_label: 'Criminal Justice & Law Enforcement',
    riasec_affinity: ['S', 'E', 'R'],
    riasec_conflict: ['A', 'I'],
    program_keywords: ['criminal justice', 'criminology', 'law enforcement', 'corrections', 'forensic science'],
    entry_careers: ['Law Enforcement Officer', 'Probation Officer', 'Criminal Justice Analyst'],
    world_alignment: 'People',
    cc_transfer_friendly: true,
    deployment_contexts: [
      {
        domain: 'Federal Law Enforcement & Investigations',
        edge: 'The FBI, DEA, Secret Service, and the other federal law enforcement agencies employ professionals whose work ranges from financial crimes investigation to counterterrorism operations — and the path into those agencies for undergraduate graduates is longer and more deliberate than most candidates realize. Federal agents are not hired directly from undergraduate programs in most cases; they are hired from the pool of applicants who have spent several years building specialized expertise in accounting, technology, foreign languages, or law that the agency needs and cannot train quickly. The criminal justice graduates who enter federal service successfully are the ones who understood this and spent those years acquiring something specific. John Jay College of Criminal Justice and Sam Houston State University\'s College of Criminal Justice have both built direct relationships with federal agency recruiters and have alumni in supervisory roles at the FBI and DEA who actively recruit from their former programs.'
      },
      {
        domain: 'Forensic Science & Crime Analysis',
        edge: 'Forensic science as practiced in actual crime laboratories is considerably more methodical and considerably less dramatic than its television representations suggest — and the professionals who do it at a high level combine scientific rigor, meticulous documentation, and the ability to communicate technical findings to juries and attorneys who do not share their training. The American Board of Criminalistics certification and the accreditation standards of the ASCLD (American Society of Crime Laboratory Directors) define what competent forensic practice looks like, and the programs whose graduates pass those standards consistently are not always the ones with the most visible media presence. Virginia Commonwealth University\'s Forensic Science program and Michigan State\'s School of Criminal Justice have both built forensic science concentrations with laboratory infrastructure and faculty practitioner relationships that produce graduates who can step into state and federal crime lab positions with the technical preparation those positions actually require.'
      }
    ]
  },
  {
    major_label: 'International Relations & Diplomacy',
    riasec_affinity: ['I', 'S', 'E'],
    riasec_conflict: ['R', 'C'],
    program_keywords: ['international relations', 'diplomacy', 'foreign policy', 'global affairs', 'international security'],
    entry_careers: ['Foreign Service Associate', 'International Program Coordinator', 'Research Analyst'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    deployment_contexts: [
      {
        domain: 'International Development & Aid Organizations',
        edge: 'The organizations that design and implement development programs in low-income countries — USAID, the World Bank, the major international NGOs — are staffed by professionals who combine substantive policy knowledge with genuine operational experience in the field. The path into international development at a meaningful level of responsibility is neither short nor straightforward, and the candidates who arrive with the combination of language skills, regional expertise, and policy training that organizations actually need are in short supply relative to the number of people who want to do the work. Georgetown\'s School of Foreign Service and American University\'s School of International Service have both built international development tracks whose alumni networks in Washington and in the field are dense enough to provide genuine career navigation support in what is otherwise an opaque and relationship-dependent sector.'
      },
      {
        domain: 'National Security & Intelligence Analysis',
        edge: 'The intelligence community employs analysts whose work ranges from geopolitical assessment to technical intelligence — and the path into that community for undergraduate graduates runs through internship programs at the CIA, DIA, NSA, and the State Department\'s Bureau of Intelligence and Research that are far more accessible than most students realize. The professionals who succeed in intelligence analysis long-term are the ones who combine genuine regional or technical expertise with the ability to communicate complex, uncertain findings to decision-makers who need clarity under pressure. Johns Hopkins School of Advanced International Studies and Georgetown\'s security studies program have both built relationships with the intelligence community that provide direct pathways for graduates whose academic records and language skills meet the threshold that security clearance processes require.'
      }
    ]
  }
];

// ─── TIER 4A — NEW CLUSTERS ───────────────────────────────────────────────────
// emerging_role field native from the start in all Tier 4A entries
// ─────────────────────────────────────────────────────────────────────────────

// ─── NAICS 22 — Utilities & Energy ───────────────────────────────────────────

MAJOR_MAP[22] = [
  {
    major_label: 'Energy Systems Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['energy systems', 'power engineering', 'renewable energy', 'grid integration', 'energy storage'],
    entry_careers: ['Energy Systems Engineer', 'Grid Integration Analyst', 'Renewable Energy Engineer'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Grid Resilience Intelligence Manager — the professional who combines power systems engineering with machine learning to monitor, predict, and autonomously recover grid infrastructure from failures, weather events, and cyberattacks. Every major utility in America is actively building this function. The credential it requires does not yet have a standard name, but the engineering foundation is power systems and the layer above it is data systems.',
    deployment_contexts: [
      {
        domain: 'Utility Grid Modernization',
        edge: 'The electrical grid is the largest machine human beings have ever built — and it is being rebuilt in real time to absorb solar and wind generation that arrives unpredictably, storage systems that shift when energy is available, and electric vehicles that create demand patterns no planner in 1990 anticipated. The engineers managing that transformation at Pacific Gas & Electric, Southern California Edison, and NextEra Energy are working on problems that have no textbook solutions because the textbooks were written before the problems existed. Arizona State\'s Ira A. Fulton Schools of Engineering and the University of Wisconsin-Madison\'s electrical and energy systems program have both built grid modernization concentrations that utility employers recruit from with an urgency that reflects genuine workforce scarcity at the intersection of power engineering and digital systems.'
      },
      {
        domain: 'Renewable Energy Development & Integration',
        edge: 'The economics of solar and wind energy have crossed the threshold where they are now the cheapest form of new electricity generation in most of the world — and the engineering challenge has shifted from whether to build renewables to how to integrate them into grids that were designed for dispatchable generation that runs when called upon. The engineers who understand both the generation side and the integration side are working at the most commercially active intersection in the energy sector. NextEra Energy, Orsted, and Avangrid are all running development engineering programs for graduates who can model interconnection requirements, manage permitting timelines, and understand why a wind farm in Texas and a wind farm in Massachusetts face entirely different grid integration challenges. Colorado School of Mines and UC San Diego\'s Jacobs School of Engineering have both built renewable energy engineering concentrations that the major independent power producers recruit from directly.'
      },
      {
        domain: 'Energy Storage & Battery Systems',
        edge: 'Grid-scale battery storage is the enabling technology for the energy transition — the system that captures excess solar generation at noon and releases it at six in the evening when demand peaks and the sun is no longer producing. The engineers who design, specify, and operate those systems are working at the intersection of electrochemistry, power electronics, and grid operations in ways that most engineering programs did not teach until very recently. Tesla Energy, Fluence, and Stem Inc. all employ energy storage engineers whose undergraduate training in electrical engineering or energy systems gave them the foundation that their employers then built on through application. Stanford\'s energy program and Carnegie Mellon\'s electrical and computer engineering department have both produced storage systems engineers now leading projects that represent billions of dollars of deployed infrastructure.'
      },
      {
        domain: 'Nuclear Energy Operations & Engineering',
        edge: 'Nuclear power produces approximately twenty percent of American electricity with zero carbon emissions — and the workforce that operates those plants is aging faster than it is being replaced. The Nuclear Regulatory Commission, Exelon Generation, and Duke Energy are all running accelerated hiring programs for nuclear engineering graduates who want to work in an industry that is simultaneously navigating the retirement of existing plants and the development of next-generation small modular reactors. The University of Michigan\'s Department of Nuclear Engineering and Radiological Sciences and Penn State\'s Department of Mechanical and Nuclear Engineering have both maintained nuclear engineering programs through decades when the field received little public attention, and their graduates are now entering an industry that is rediscovering its importance in ways their professors always knew it deserved.'
      }
    ]
  },
  {
    major_label: 'Environmental Engineering',
    riasec_affinity: ['R', 'I', 'S'],
    riasec_conflict: ['E', 'A'],
    program_keywords: ['environmental engineering', 'water treatment', 'air quality', 'remediation', 'environmental systems'],
    entry_careers: ['Environmental Engineer I', 'Water Quality Engineer', 'Environmental Compliance Analyst'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Climate Resilience Systems Engineer — the professional who combines environmental engineering with climate modeling and infrastructure design to assess, quantify, and retrofit physical systems — water treatment plants, coastal infrastructure, stormwater networks — against the specific climate risks projected for their location over the next fifty years. FEMA, major municipal utilities, and engineering firms building climate adaptation practices are all hiring for this function.',
    deployment_contexts: [
      {
        domain: 'Water & Wastewater Infrastructure',
        edge: 'Clean water is not a given. The infrastructure that treats drinking water and manages wastewater in American cities is aging faster than it is being replaced, and the environmental engineers who design, evaluate, and rehabilitate those systems are working on problems that have immediate public health consequences when they fail. The Safe Drinking Water Act and Clean Water Act create a regulatory framework that generates continuous engineering work — and the American Society of Civil Engineers has given American drinking water infrastructure a D grade, which means the pipeline of work for environmental engineers who specialize in water systems is not closing anytime soon. Stanford\'s environmental engineering program and the University of Illinois Urbana-Champaign\'s Department of Civil and Environmental Engineering have both built water systems concentrations that municipal utilities and environmental consulting firms like AECOM, Jacobs, and CDM Smith recruit from directly.'
      },
      {
        domain: 'Environmental Consulting & Site Remediation',
        edge: 'Every piece of contaminated land in America — every brownfield, every industrial site with legacy chemical contamination, every underground storage tank that leaked decades ago — eventually needs an environmental engineer to assess the contamination, design the cleanup, and certify that the remediation met regulatory standards. The consulting firms that do this work — Terracon, GHD, Antea Group — are among the most consistent employers of environmental engineering graduates in the country, because the demand for remediation work is generated by decades of industrial activity and does not fluctuate with economic cycles in the way that commercial construction does. Rutgers University\'s environmental engineering program and the University of Connecticut\'s Department of Civil and Environmental Engineering have both built remediation concentrations that reflect the geographic concentration of industrial legacy sites in the northeastern United States.'
      }
    ]
  },
  {
    major_label: 'Sustainability Management',
    riasec_affinity: ['I', 'E', 'S'],
    riasec_conflict: ['R', 'C'],
    program_keywords: ['sustainability', 'ESG', 'corporate sustainability', 'environmental management', 'climate strategy'],
    entry_careers: ['Sustainability Analyst', 'ESG Associate', 'Corporate Sustainability Coordinator'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Carbon Accounting Director — the professional who designs and operates the measurement systems that allow organizations to know, verify, and report their greenhouse gas emissions across Scope 1, 2, and 3 with the rigor that financial auditors bring to revenue. SEC climate disclosure rules and European CSRD requirements have made this function legally mandatory for public companies. The credential requires both accounting methodology and systems-level understanding of industrial processes.',
    deployment_contexts: [
      {
        domain: 'Corporate ESG Strategy & Reporting',
        edge: 'Every major public company in America now faces mandatory climate disclosure requirements — and the professionals who design the measurement systems, manage the data collection, and prepare the reports that regulators and investors require are working in a function that did not exist at meaningful scale five years ago. BlackRock, Vanguard, and State Street have all made ESG performance a factor in their shareholder engagement strategies, which means the sustainability teams at Apple, Microsoft, and every S&P 500 company are now operating under scrutiny that treats their disclosures with the same seriousness as financial statements. The University of Michigan\'s Ross School of Business and Yale\'s School of the Environment have both built sustainability management programs that large corporations recruit from for ESG analyst and reporting roles that carry significant organizational visibility.'
      },
      {
        domain: 'Supply Chain Sustainability & Scope 3 Emissions',
        edge: 'A company\'s Scope 3 emissions — the greenhouse gases produced by its suppliers and customers rather than its own operations — typically represent more than seventy percent of its total carbon footprint, and the sustainability professionals who can trace, measure, and reduce those emissions are working on problems that require both supply chain fluency and carbon accounting methodology. Apple\'s supplier responsibility program, Nike\'s supply chain sustainability team, and Walmart\'s Project Gigaton have all built Scope 3 emissions programs that require professionals who understand manufacturing processes, logistics networks, and the carbon accounting standards well enough to hold suppliers accountable to measurable targets. Arizona State\'s sustainability program and the University of Vermont\'s Rubenstein School have both built supply chain sustainability concentrations that the consumer goods and technology sectors recruit from directly.'
      },
      {
        domain: 'Real Estate & Built Environment Sustainability',
        edge: 'Buildings account for nearly forty percent of global carbon emissions — and the real estate industry has responded to that fact with LEED certification, net-zero building commitments, and green bond financing that requires sustainability professionals who understand both the technical standards and the financial instruments that fund sustainable development. CBRE, JLL, and the major institutional real estate investors are all building sustainability teams whose members need to speak fluently to engineers about building performance and to investors about the financial implications of climate risk in real estate portfolios. Columbia\'s Earth Institute and NYU\'s Schack Institute have both built real estate sustainability tracks that commercial real estate employers recruit from for roles that sit at the intersection of building performance, finance, and regulatory compliance.'
      }
    ]
  },
  {
    major_label: 'Nuclear Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['nuclear engineering', 'reactor design', 'radiation safety', 'nuclear materials', 'small modular reactors'],
    entry_careers: ['Nuclear Engineer', 'Reactor Engineer', 'Radiation Protection Specialist'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Small Modular Reactor (SMR) Commissioning Engineer — the professional who leads the design verification, safety analysis, and regulatory approval process for next-generation nuclear reactors being deployed by companies like TerraPower, NuScale, and X-energy. The NRC licensing pathway for SMRs is being written in real time, and the engineers who understand both the legacy regulatory framework and the new reactor designs are among the most sought-after technical professionals in the energy sector.',
    deployment_contexts: [
      {
        domain: 'Next-Generation Reactor Development',
        edge: 'The small modular reactor is not a concept. It is an engineering program with NRC license applications in process, manufacturing contracts signed, and deployment timelines that have real investors behind them. TerraPower, NuScale Power, and X-energy are all building teams of nuclear engineers whose understanding of reactor physics, thermal hydraulics, and NRC licensing requirements gives them the ability to contribute to programs that are actively breaking ground. The University of Michigan\'s nuclear engineering program and MIT\'s Department of Nuclear Science and Engineering have both built SMR design concentrations whose faculty members are in some cases serving as technical advisors to the companies building these reactors — a proximity to the work that no other engineering discipline currently offers its undergraduates.'
      },
      {
        domain: 'Nuclear Medicine & Isotope Production',
        edge: 'Nuclear technology saves lives in ways that have nothing to do with reactors. The radioisotopes used in PET scans, cancer treatment, and diagnostic imaging are produced in research reactors and accelerators — and the nuclear engineers who manage isotope production, quality control, and regulatory compliance are working at the intersection of nuclear physics and healthcare in a sector that the general public rarely associates with nuclear engineering. SHINE Medical Technologies, NorthStar Medical Radioisotopes, and the National Isotope Development Center all employ nuclear engineers in isotope production roles that provide stable, meaningful careers for engineers who want to apply their training directly to patient outcomes.'
      }
    ]
  }
];

// ─── NAICS 32 — Chemical & Materials Manufacturing ───────────────────────────

MAJOR_MAP[32] = [
  {
    major_label: 'Materials Science & Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['materials science', 'materials engineering', 'metallurgy', 'polymers', 'nanomaterials', 'biomaterials'],
    entry_careers: ['Materials Engineer', 'R&D Associate', 'Process Development Engineer'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Sustainable Materials Architect — the professional who evaluates, selects, and validates novel materials for next-generation products with full lifecycle analysis — from raw material extraction through end-of-life — and who works at the intersection of materials performance, supply chain viability, and environmental compliance. Apple, Tesla, and Patagonia have all built materials innovation teams that require this exact combination of technical depth and systems thinking.',
    deployment_contexts: [
      {
        domain: 'Semiconductor & Electronics Materials',
        edge: 'Every semiconductor device is a materials problem. The silicon wafer, the copper interconnects, the low-k dielectrics, the high-k gate oxides — each layer represents a materials engineering decision that determines whether the chip performs at the speeds the industry requires. Intel, TSMC, and Applied Materials employ materials scientists and engineers whose work on thin-film deposition, chemical mechanical planarization, and novel material integration directly determines what the next generation of chips can do. MIT\'s Department of Materials Science and Engineering and Stanford\'s MSE program have both produced materials engineers who are now leading process integration teams at semiconductor manufacturers working on nodes below two nanometers — territory where physics itself is a constraint that materials engineers help navigate.'
      },
      {
        domain: 'Battery & Energy Storage Materials',
        edge: 'The performance of a lithium-ion battery — its energy density, its charge rate, its cycle life, its safety margin — is fundamentally a materials question. The materials scientists who develop new cathode chemistries, solid-state electrolytes, and anode architectures are doing the basic research that determines what electric vehicles can do ten years from now. Tesla, QuantumScape, and Solid Power all employ materials scientists in battery research roles that are as consequential to the energy transition as any power systems engineering. Carnegie Mellon\'s Department of Materials Science and Engineering and the University of Michigan\'s materials program have both built battery materials concentrations that the electric vehicle and energy storage sectors recruit from directly, with starting salaries that reflect genuine scarcity at the intersection of electrochemistry and materials engineering.'
      },
      {
        domain: 'Aerospace & Defense Advanced Materials',
        edge: 'An aircraft that is ten percent lighter burns ten percent less fuel over its entire service life — which is why the aerospace industry\'s investment in carbon fiber composites, titanium alloys, and ceramic matrix composites is not an engineering preference but an economic imperative. The materials engineers who develop, test, and certify these materials for flight-critical applications are working at a standard of rigor that most industrial materials work never approaches. Boeing, Lockheed Martin, and Northrop Grumman all run materials engineering development programs for graduates who want to work on problems where the consequences of a material failure are understood at the level of accident investigation and fleet grounding. Northwestern\'s Department of Materials Science and Engineering and Georgia Tech\'s School of Materials Science and Engineering have both built aerospace materials concentrations that defense contractors recruit from with a consistency that reflects the field\'s genuine dependence on academic research pipelines.'
      },
      {
        domain: 'Biomedical Materials & Implant Design',
        edge: 'A hip implant must survive thirty years of cyclic loading inside a human body without corroding, releasing toxic ions, or fatigue-fracturing at an inconvenient moment. The materials engineers who design those implants are balancing mechanical performance, biocompatibility, and manufacturing feasibility in ways that require FDA regulatory fluency alongside deep materials knowledge. Zimmer Biomet, Stryker, and DePuy Synthes all employ materials engineers in implant development roles, and the graduates who arrive with both materials engineering training and some exposure to biomechanics and regulatory affairs are recruited at a premium because that combination is genuinely uncommon. Drexel\'s materials science program and the University of California San Francisco\'s bioengineering collaboration with Berkeley have both produced biomaterials engineers whose work is now inside people\'s bodies around the world.'
      }
    ]
  },
  {
    major_label: 'Green Chemistry & Sustainable Processes',
    riasec_affinity: ['I', 'R', 'S'],
    riasec_conflict: ['E', 'A'],
    program_keywords: ['green chemistry', 'sustainable chemistry', 'bio-based materials', 'circular economy', 'process sustainability'],
    entry_careers: ['Green Chemistry Analyst', 'Sustainable Process Engineer', 'R&D Chemist'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Circular Economy Materials Strategist — the professional who redesigns industrial material flows to eliminate waste at the system level — mapping what materials enter and leave a manufacturing process, identifying where byproducts can become inputs, and building the supplier relationships and certification pathways that allow recycled or bio-based materials to meet the performance specifications that industrial customers require.',
    deployment_contexts: [
      {
        domain: 'Consumer Products & Packaging Innovation',
        edge: 'The pressure on consumer goods companies to eliminate single-use plastics, reduce packaging weight, and transition to recycled or bio-based materials has created a sustained demand for chemists and materials scientists who understand both the technical performance requirements of packaging and the supply chain constraints of sustainable alternatives. Procter & Gamble, Unilever, and Colgate-Palmolive all run packaging innovation programs that specifically recruit green chemistry and sustainable materials graduates — because the engineers who know what a material can do and what its supply chain looks like are the ones who can design a package that actually ships at scale. University of Michigan\'s Program in the Environment and Yale\'s Center for Green Chemistry and Green Engineering have both built sustainable packaging concentrations that consumer goods manufacturers recruit from directly.'
      },
      {
        domain: 'Bio-Based Materials & Bioplastics',
        edge: 'The transition from petroleum-based plastics to bio-based alternatives is not a materials preference — it is an industrial chemistry challenge that requires understanding both fermentation engineering and polymer science, and that has so far produced materials that are bio-derived but not always biodegradable, and biodegradable but not always bio-derived, and sometimes neither. The chemists who are actually solving these problems are working at startups like Novamont and NatureWorks, at large chemical companies like BASF and Evonik, and at university research labs that have attracted NIH and DOE funding for bio-based materials research. The University of Massachusetts Amherst\'s polymer science program and Iowa State\'s biorenewable chemicals and bioproducts program have both built bio-based materials concentrations that sit at a genuine research frontier.'
      }
    ]
  },
  {
    major_label: 'Polymer Engineering & Science',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['polymer engineering', 'polymer science', 'plastics engineering', 'rubber science', 'composites'],
    entry_careers: ['Polymer Engineer', 'Plastics Process Engineer', 'Composites Engineer'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Advanced Composites Integration Engineer — the professional who translates laboratory composite material performance into manufacturable aerospace, automotive, and sporting goods components — managing the gap between what a material can do in a test specimen and what it reliably does in a production part built by human hands under time and cost constraints.',
    deployment_contexts: [
      {
        domain: 'Automotive Lightweighting & EV Components',
        edge: 'Every kilogram removed from an electric vehicle extends its range without adding a single battery cell — which is why the automotive industry\'s investment in polymer composites, structural adhesives, and engineered plastics has accelerated precisely as electrification has. The polymer engineers who work on automotive applications are designing door panels that survive crash tests, battery enclosures that manage thermal events, and structural components that meet NVH (noise, vibration, harshness) requirements that consumers notice even when they cannot name them. BASF, Covestro, and Sabic all run automotive applications engineering programs for polymer graduates who can translate material performance data into design recommendations that a tier-one automotive supplier will actually implement. University of Akron\'s polymer science program — one of the most consistently cited in the industry — and Michigan\'s materials science program have both placed polymer engineers into automotive applications roles that have become increasingly central to how electric vehicles are designed.'
      },
      {
        domain: 'Medical Device Polymers & Regulatory Affairs',
        edge: 'The tubing in an intravenous line, the housing of a pacemaker, the balloon in a cardiac catheter — these are polymer engineering problems where biocompatibility, sterilization compatibility, and long-term stability inside a human body are design requirements, not preferences. The polymer engineers who work in medical devices operate under ISO 10993 biocompatibility standards and FDA material qualification requirements that transform every design decision into a documentation exercise with regulatory consequences. Medtronic, Abbott, and Becton Dickinson all employ polymer engineers in materials development and regulatory affairs roles, and the graduates who arrive with both polymer science training and some exposure to medical device regulatory pathways are competing for roles against candidates who spent years acquiring one piece of that combination or the other. University of Akron and Drexel both have polymer programs with medical device industry relationships that reflect geographic proximity to the medical device manufacturing clusters in the Midwest and Mid-Atlantic.'
      }
    ]
  },
  {
    major_label: 'Industrial & Process Chemistry',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['industrial chemistry', 'process chemistry', 'chemical manufacturing', 'reaction engineering', 'scale-up'],
    entry_careers: ['Process Chemist', 'Manufacturing Chemist', 'Quality Control Chemist'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'AI-Augmented Process Chemist — the professional who uses machine learning models to accelerate reaction screening, predict synthesis outcomes, and optimize manufacturing process parameters — reducing the experimental iterations required to move a chemical process from laboratory to pilot plant from years to months. Eli Lilly, Merck, and BASF have all built AI-assisted process chemistry programs that are actively hiring chemists who can work at this intersection.',
    deployment_contexts: [
      {
        domain: 'Specialty Chemicals & Formulation',
        edge: 'Specialty chemicals are not commodities. They are precisely formulated materials — adhesives, coatings, surfactants, lubricants — whose performance in a specific application determines whether a product works, lasts, and can be manufactured reliably at scale. The chemists who develop and refine those formulations are working in one of the most stable and consistently profitable segments of the chemical industry, because switching costs in specialty chemicals are high enough that customers rarely change suppliers unless something fails. Dow, Ashland, and Evonik all run formulation chemistry programs for industrial chemistry graduates, and the graduates who arrive with strong physical chemistry and formulation experience are entering a field where the average tenure is long and the career trajectory is predictable in ways that academic chemistry rarely is. Case Western Reserve\'s chemistry program and the University of Akron\'s polymer and chemistry programs have both built industrial chemistry concentrations that the specialty chemicals sector recruits from directly in the Midwest corridor.'
      },
      {
        domain: 'Pharmaceutical API Manufacturing',
        edge: 'The active pharmaceutical ingredient — the molecule that does the work in a drug — must be synthesized, purified, and characterized to a standard that the FDA will certify before a single patient can receive it. The process chemists who develop and optimize the manufacturing routes for API production are working under current Good Manufacturing Practice regulations that transform every procedure into a controlled, documented, and validated process. Pfizer, Lonza, and Cambrex all run API manufacturing chemistry programs, and the process chemists who arrive with strong organic synthesis skills and some exposure to GMP documentation are entering a field that has produced some of the most consistent employment records of any chemistry specialization. University of Illinois Urbana-Champaign\'s chemistry program and Purdue\'s chemistry department have both placed API chemists into pharmaceutical manufacturing roles at rates that reflect sustained employer relationships with the major pharma contract manufacturing organizations.'
      }
    ]
  }
];

// ─── NAICS 11 — Agriculture & Food Systems ───────────────────────────────────

MAJOR_MAP[11] = [
  {
    major_label: 'Agricultural Science & Agronomy',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['agronomy', 'crop science', 'soil science', 'plant biology', 'agricultural production'],
    entry_careers: ['Agronomist', 'Crop Consultant', 'Agricultural Research Associate'],
    world_alignment: 'Think',
    cc_transfer_friendly: true,
    emerging_role: 'Precision Agriculture Data Scientist — the professional who integrates satellite imagery, soil sensor networks, drone survey data, and weather modeling into field-level recommendations that allow farmers to apply water, fertilizer, and crop protection products at variable rates across individual acres rather than uniform rates across entire fields. John Deere, Climate Corporation, and Trimble Agriculture are all building precision ag data teams whose members require both agronomic knowledge and data science fluency.',
    deployment_contexts: [
      {
        domain: 'Precision Agriculture & AgTech',
        edge: 'The application of data science to agricultural production is producing yield improvements and input cost reductions that would have seemed implausible to farmers thirty years ago — and the agronomists who can translate sensor data, satellite imagery, and predictive models into field-level management recommendations are working at the most commercially active frontier in agriculture. John Deere\'s Intelligent Solutions Group, the Climate Corporation (a Bayer subsidiary), and Trimble Agriculture are all building precision ag teams whose members need to understand both why a soybean plant responds to nitrogen the way it does and how to build a model that predicts where that response will be weakest in a given field. Purdue\'s College of Agriculture and the University of Nebraska-Lincoln\'s Department of Agronomy and Horticulture have both built precision agriculture concentrations that the major AgTech companies recruit from directly, with a geographic intentionality that reflects the corn and soybean belt\'s role as the proving ground for precision agriculture at commercial scale.'
      },
      {
        domain: 'Agricultural Consulting & Extension',
        edge: 'The agronomist who walks fields with farmers — reading crop conditions, recommending inputs, diagnosing problems before they become yield losses — provides a service that satellite imagery and AI models can inform but cannot replace, because the judgment required to act on imperfect information in real time under weather and market pressure is a human function. The largest agricultural retail companies in America — Nutrien, WinField United, Helena Agri-Enterprises — all employ agronomists in field consulting roles that combine scientific knowledge with the relationship skills required to earn the trust of farmers who are making decisions with their livelihoods. Iowa State University\'s agronomy program and the University of Illinois\'s crop sciences program have both built direct relationships with agricultural retail employers that result in placement rates for agronomy graduates that reflect genuine employer commitment.'
      },
      {
        domain: 'Soil Health & Regenerative Agriculture',
        edge: 'Regenerative agriculture has moved from a niche concept to a commercial imperative — driven partly by genuine environmental commitment and partly by the recognition that healthy soil biology produces more consistent yields with fewer inputs over time. The agronomists who understand the microbiology of soil health, the mechanics of carbon sequestration, and the transition pathways that allow conventional farms to adopt regenerative practices without absorbing unacceptable yield risk are working at an intersection that the agricultural sector did not prioritize a decade ago and now cannot find enough people to fill. Patagonia Provisions, General Mills, and Danone have all built regenerative agriculture programs that require agronomists who understand both the science and the operational realities of farming at scale. UC Davis\'s Department of Plant Sciences and the Rodale Institute\'s research partnerships with Penn State have both produced soil health researchers whose work is shaping the regenerative agriculture certification frameworks that major food companies are now building their supplier requirements around.'
      }
    ]
  },
  {
    major_label: 'Precision Agriculture & Agricultural Technology',
    riasec_affinity: ['R', 'I', 'E'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['precision agriculture', 'AgTech', 'remote sensing', 'GPS technology', 'variable rate application'],
    entry_careers: ['Precision Ag Specialist', 'AgTech Sales Engineer', 'Geospatial Analyst'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Autonomous Farm Operations Manager — the professional who oversees fleets of autonomous tractors, planting equipment, and harvest machines — managing the sensor networks, software platforms, and maintenance systems that allow a single operator to supervise agricultural machinery across hundreds of acres simultaneously. John Deere\'s autonomous equipment programs and startups like Monarch Tractor and Sabanto are all hiring for this function as autonomous agricultural equipment moves from demonstration to commercial deployment.',
    deployment_contexts: [
      {
        domain: 'Agricultural Equipment & Technology Sales',
        edge: 'The most commercially successful precision agriculture professionals are often not the ones operating the technology — they are the ones selling it to farmers who need to understand both what it does and why it is worth the investment. An agricultural technology sales engineer who can walk into a farm operation, assess where the yield gaps are, and demonstrate precisely how a variable rate application system would close those gaps with a calculable ROI is a professional that John Deere, AGCO, and the major agricultural retail companies actively recruit and well compensate. The credential that makes that person credible in the field is an agricultural background — the technology layer can be learned, but the farming context cannot be faked in a conversation with a third-generation corn farmer in central Illinois. Kansas State University\'s agricultural technology management program and Purdue\'s agricultural systems management program have both built industry relationships with equipment manufacturers and precision ag companies that produce consistent placement for graduates who want to be in the field rather than behind a screen.'
      },
      {
        domain: 'Remote Sensing & Drone Applications in Agriculture',
        edge: 'The agricultural drone market is no longer about photography. It is about multispectral imagery that reveals crop stress before it is visible to the human eye, LiDAR surveys that produce centimeter-level terrain models for drainage planning, and autonomous spray applications that reduce pesticide use while maintaining coverage accuracy. The professionals who design and operate these systems for commercial agricultural clients are combining remote sensing science, agricultural knowledge, and FAA Part 137 agricultural aircraft operator certification in ways that most drone pilots outside agriculture have never encountered. North Dakota State University\'s precision agriculture program and Texas A&M\'s Department of Soil and Crop Sciences have both built drone and remote sensing applications concentrations that the agricultural aviation and precision ag service industries recruit from directly.'
      }
    ]
  },
  {
    major_label: 'Food Systems Engineering & Science',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['food science', 'food engineering', 'food safety', 'food processing', 'product development'],
    entry_careers: ['Food Scientist', 'Food Process Engineer', 'Quality Assurance Specialist'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Alternative Protein Development Scientist — the professional who designs the fermentation, extrusion, and structuring processes that transform plant proteins, precision fermentation outputs, and cultivated meat into food products that match conventional meat in texture, flavor, and nutritional profile. Impossible Foods, Perfect Day, and Eat Just are all scaling production of alternative proteins and require food scientists who combine process engineering with sensory science and consumer behavior understanding.',
    deployment_contexts: [
      {
        domain: 'Food Product Development & Innovation',
        edge: 'Every new food product on a grocery store shelf — the reformulated protein bar, the plant-based alternative, the reduced-sodium soup that still tastes like the original — is the result of a food scientist\'s work translating consumer insights, nutritional requirements, and manufacturing constraints into a formulation that a production line can make consistently at scale. Kraft Heinz, General Mills, and Nestle all run food science innovation programs that recruit directly from food science undergraduate programs, and the graduates who arrive with strong sensory evaluation, formulation, and shelf-stability skills move into product development roles that have a direct line of sight to what millions of people eat. Cornell\'s Department of Food Science and UC Davis\'s Department of Food Science and Technology have both built product development concentrations with strong industry connections — Cornell in particular maintains industry partnerships with major food manufacturers that result in sponsored research projects and recruiting pipelines that operate as multi-year job interviews for high-performing students.'
      },
      {
        domain: 'Food Safety & Regulatory Affairs',
        edge: 'A food safety failure is not a recall. It is a public health event — the kind that hospitalizes people, generates congressional hearings, and ends careers. The food scientists and quality engineers who design the HACCP plans, validate the sanitation protocols, and manage the supplier verification programs that prevent those events are working in a function that every food company in America cannot afford to staff with anyone who does not understand both the science and the regulatory requirements. The FDA Food Safety Modernization Act has expanded the compliance requirements significantly enough that food safety specialists are in consistent demand across every segment of the food industry. Michigan State\'s Department of Food Science and Human Nutrition and Iowa State\'s Department of Food Science and Human Nutrition have both built food safety concentrations with the industry relationships and regulatory affairs coursework that food companies and consulting firms recruit from directly.'
      },
      {
        domain: 'Alternative Proteins & Sustainable Food Innovation',
        edge: 'The alternative protein sector has moved from proof-of-concept to scale-up — and the food scientists who understand both the science of protein structuring and the engineering challenges of manufacturing at volume are working on problems that have genuine commercial stakes attached to them. Impossible Foods, Beyond Meat, and the precision fermentation companies building animal-free dairy and egg proteins all employ food scientists in process development and product formulation roles where the challenge is not whether the technology works but whether the product is good enough and cheap enough to compete at grocery store shelf prices. UC Davis\'s Robert Mondavi Institute and Tufts University\'s Agriculture, Food and Environment program have both built alternative protein research concentrations that the cultivated meat and fermentation-derived protein sectors recruit from, and whose faculty members are in some cases co-founders of the companies doing the work.'
      }
    ]
  },
  {
    major_label: 'Agribusiness Management',
    riasec_affinity: ['E', 'C', 'I'],
    riasec_conflict: ['A', 'R'],
    program_keywords: ['agribusiness', 'agricultural economics', 'farm management', 'agricultural finance', 'commodity markets'],
    entry_careers: ['Agribusiness Analyst', 'Agricultural Loan Officer', 'Commodity Trader'],
    world_alignment: 'Systems',
    cc_transfer_friendly: true,
    emerging_role: 'Agricultural Carbon Market Analyst — the professional who evaluates farm operations for carbon sequestration potential, structures carbon credit contracts between farmers and buyers, and manages the monitoring, reporting, and verification requirements that allow agricultural carbon credits to meet the quality standards that corporate buyers and voluntary carbon markets require. Indigo Agriculture, Corteva, and Bayer Crop Science are all building agricultural carbon programs that require this combination of agronomy, finance, and carbon accounting.',
    deployment_contexts: [
      {
        domain: 'Agricultural Finance & Farm Credit',
        edge: 'American agriculture runs on credit — operating lines for seed and inputs, equipment loans for machinery that costs more than most houses, and long-term real estate financing for land that is both a productive asset and a generational inheritance. The agricultural loan officers and farm financial analysts who structure that credit are working in a specialized segment of banking that requires understanding crop budgets, commodity price risk, and farm balance sheets in ways that a commercial banking background alone does not provide. Farm Credit Services of America, CoBank, and Rabo AgriFinance all run agricultural lending associate programs for agribusiness graduates, and the graduates who arrive with both financial analysis skills and genuine knowledge of farm economics are entering a field where the average loan officer tenure is long and the relationship with farm clients spans decades. Purdue\'s Department of Agricultural Economics and the University of Missouri\'s Division of Applied Social Sciences have both built agricultural finance concentrations that the farm credit system recruits from with a consistency that reflects genuine pipeline dependence.'
      },
      {
        domain: 'Commodity Trading & Risk Management',
        edge: 'Agricultural commodities — corn, soybeans, wheat, cotton, live cattle — trade on exchanges where price risk is managed through futures contracts, options strategies, and basis trades that require simultaneous understanding of production economics, transportation costs, and financial instrument mechanics. The commodity traders and risk managers at Cargill, ADM, Bunge, and Louis Dreyfus are among the most analytically rigorous professionals in agriculture — and they are specifically recruited from agribusiness programs that take both the agricultural and the quantitative sides of the curriculum seriously. University of Illinois\'s agricultural and consumer economics program and Iowa State\'s agricultural business program have both placed graduates into commodity trading associate programs at the major grain companies, where the first two years function as an intensive education in how agricultural markets actually work at a scale that no textbook adequately prepares a student for.'
      },
      {
        domain: 'Food & Agriculture Private Equity',
        edge: 'The food and agriculture sector represents a significant share of the global private equity market — from farm consolidation and food manufacturing buyouts to AgTech venture capital and food brand rollups. The investment professionals who evaluate those opportunities need to understand not just the financial models but the operational realities of farming, food manufacturing, and agricultural supply chains in ways that a generalist finance background does not provide. The Paine Schwartz Partners, Proterra Investment Partners, and Equilibrium Capital are all food and agriculture focused investment firms that actively recruit agribusiness graduates with strong quantitative skills for analyst and associate roles. Purdue\'s agricultural economics program and Cornell\'s Dyson School of Applied Economics and Management have both placed agribusiness graduates into food and agriculture investment roles at firms that most business school undergraduates have never heard of but that manage billions of dollars of agricultural assets.'
      }
    ]
  },
  {
    major_label: 'Soil Science & Environmental Land Management',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['E', 'A'],
    program_keywords: ['soil science', 'pedology', 'land management', 'environmental soil', 'soil remediation'],
    entry_careers: ['Soil Scientist', 'Land Use Specialist', 'Environmental Land Consultant'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Soil Carbon Verification Specialist — the professional who designs and implements the field sampling protocols, laboratory analysis workflows, and statistical models that verify how much carbon a regenerative agriculture practice has actually sequestered in a specific soil over a specific time period — providing the measurement rigor that carbon credit buyers require before paying for agricultural carbon offsets. This function is being built at Verra, Gold Standard, and the major agricultural carbon registries.',
    deployment_contexts: [
      {
        domain: 'Environmental Consulting & Land Assessment',
        edge: 'Before a developer breaks ground, before a bank finances a farm acquisition, before a government agency approves a land use change — someone has to evaluate the soil. Soil scientists who understand classification, contamination assessment, and land capability rating are working at the front end of every real estate transaction, environmental remediation project, and agricultural development decision that involves land. The major environmental consulting firms — Terracon, SCS Engineers, and Kleinfelder — all employ soil scientists in field assessment and report preparation roles that generate consistent work across economic cycles because the regulatory requirements that drive that work do not disappear when the real estate market slows. University of Wisconsin-Madison\'s soil science program and North Carolina State University\'s Department of Crop and Soil Sciences have both produced soil scientists who have built careers in environmental consulting that most agricultural graduates do not think of as available to them.'
      },
      {
        domain: 'Agricultural Carbon Markets & Soil Health Programs',
        edge: 'The agricultural carbon market is asking farmers to change how they manage their land — reducing tillage, planting cover crops, integrating livestock — and then measuring whether those changes actually put carbon into the soil. The soil scientists who design those measurement protocols and verify that carbon sequestration claims are scientifically defensible are working at the intersection of pedology, environmental science, and agricultural economics in a field that was essentially nonexistent at commercial scale five years ago. Indigo Agriculture, Nori, and the Nature Conservancy\'s agricultural programs all employ soil scientists in measurement and verification roles. UC Davis\'s Department of Land, Air and Water Resources and Cornell\'s Soil and Crop Sciences program have both produced soil carbon researchers whose methodologies are now being used to set the verification standards that agricultural carbon markets are building their credibility on.'
      }
    ]
  }
];

// ─── NAICS 42 — Wholesale Trade & Distribution ───────────────────────────────

MAJOR_MAP[42] = [
  {
    major_label: 'Distribution Management & Wholesale Operations',
    riasec_affinity: ['E', 'C', 'R'],
    riasec_conflict: ['A', 'I'],
    program_keywords: ['distribution', 'wholesale', 'inventory management', 'warehouse operations', 'trade finance'],
    entry_careers: ['Distribution Center Manager', 'Wholesale Operations Analyst', 'Inventory Control Specialist'],
    world_alignment: 'Systems',
    cc_transfer_friendly: true,
    emerging_role: 'Digital Twin Distribution Manager — the professional who builds and operates real-time virtual replicas of distribution center operations — simulating inventory flows, labor deployment, and equipment utilization to identify bottlenecks before they occur and test operational changes before implementing them in the physical facility. Amazon, Prologis, and DHL Supply Chain are all building digital twin capabilities into their distribution networks.',
    deployment_contexts: [
      {
        domain: 'Industrial Distribution & MRO',
        edge: 'The distributors who supply maintenance, repair, and operations products to manufacturing plants — the bearings, the cutting tools, the safety equipment, the electrical components that keep a factory running — operate businesses whose value is almost entirely invisible to the end consumer and almost entirely indispensable to the companies they serve. Grainger, Fastenal, and MSC Industrial Direct have built multi-billion-dollar businesses on the proposition that a manufacturing plant should never have to stop running because a part was unavailable, and the professionals who manage those distribution relationships combine inventory science, supplier management, and customer intimacy in ways that most supply chain programs treat as an afterthought. Illinois State University\'s distribution management program and Texas A&M\'s supply chain management program have both built industrial distribution concentrations that Grainger and Fastenal recruit from directly — with a geographic intentionality that reflects the manufacturing belt\'s concentration in the Midwest.'
      },
      {
        domain: 'Food & Beverage Distribution',
        edge: 'The cold chain that moves fresh produce, dairy, and refrigerated products from manufacturer to grocery store operates under temperature requirements, shelf-life constraints, and food safety regulations that transform routine distribution into a precision logistics problem. Sysco, US Foods, and KeHE Distributors are all running distribution management programs for operations graduates who understand both the logistics mechanics and the food safety regulatory environment that governs every truck, every warehouse, and every delivery. The professionals who manage distribution center operations for food and beverage distributors are making decisions about inventory rotation, temperature monitoring, and driver scheduling that have direct food safety consequences — and the employers who trust them with those decisions pay a premium for operations backgrounds with food industry context. Michigan State\'s food distribution management program and the University of Arkansas\'s supply chain management program have both placed distribution graduates into food and beverage distribution roles at a rate that reflects Walmart\'s and Tyson\'s proximity to the Fayetteville campus.'
      },
      {
        domain: 'Healthcare & Medical Products Distribution',
        edge: 'The wholesale distribution of pharmaceuticals, medical devices, and hospital supplies is among the most regulated distribution businesses in the United States — and one of the most consequential. McKesson, Cardinal Health, and AmerisourceBergen together distribute nearly ninety percent of the pharmaceuticals sold in America, and the operations professionals who manage their distribution centers are working under DEA controlled substance regulations, FDA drug supply chain security requirements, and hospital service level agreements that have no tolerance for stockouts on critical medications. The distribution managers who build careers in healthcare wholesale operate at an intersection of logistics operations and regulatory compliance that most distribution programs do not specifically prepare students for — which is precisely why the graduates who arrive with both the operations fluency and some exposure to healthcare regulatory requirements are recruited aggressively. Ohio State\'s Fisher College of Business and Purdue\'s Krannert School of Management have both placed supply chain and operations graduates into healthcare distribution roles at the major wholesalers.'
      }
    ]
  },
  {
    major_label: 'Trade Finance & Global Commerce',
    riasec_affinity: ['E', 'C', 'I'],
    riasec_conflict: ['R', 'A'],
    program_keywords: ['trade finance', 'international trade', 'letters of credit', 'export management', 'global sourcing'],
    entry_careers: ['Trade Finance Analyst', 'Export Coordinator', 'Global Commerce Associate'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Supply Chain Finance Technology Analyst — the professional who implements and manages the financial technology platforms that allow large buyers to offer early payment to their suppliers at preferential rates — using the buyer\'s credit rating to reduce borrowing costs across the entire supply chain. JPMorgan, Citibank, and the major fintech platforms like C2FO and Taulia are all building supply chain finance teams that require both trade finance knowledge and technology platform fluency.',
    deployment_contexts: [
      {
        domain: 'Import/Export Operations & Customs Compliance',
        edge: 'Every product that crosses an international border requires a customs entry — a declaration that specifies what the product is, where it came from, what it is worth, and what duty rate applies. The professionals who manage that process for importers and exporters are working in a field that most business graduates have never encountered and that has become dramatically more complex as tariff schedules, country-of-origin rules, and trade agreement requirements have multiplied. Expeditors International, Flexport, and the major customs brokerage firms all employ trade compliance specialists whose combination of regulatory knowledge and operational fluency allows their clients to move goods across borders without the delays and penalties that customs errors produce. Georgetown\'s international business program and the University of Miami\'s business school have both built international trade concentrations with customs compliance components that reflect Miami\'s position as the primary trade gateway between the United States and Latin America.'
      },
      {
        domain: 'Wholesale Distribution & Retail Buying',
        edge: 'The buyers at Target, Walmart, and every major retailer are making purchase decisions that determine what appears on store shelves — negotiating with wholesale distributors and manufacturers on price, volume, exclusivity, and promotional support in ways that require simultaneous understanding of consumer demand, inventory economics, and supplier relationship management. The wholesale distributor who sells to those buyers is solving a mirror-image problem: maintaining the right product mix, the right inventory depth, and the right service level to retain retailer accounts that could easily switch to a competitor. University of Arizona\'s Eller College of Management and Michigan State\'s Broad College of Business have both built retail buying and wholesale distribution tracks that the major retailers and distributors recruit from — with Target and Meijer both maintaining campus recruiting programs that treat these programs as primary pipelines rather than supplementary sources.'
      }
    ]
  },
  {
    major_label: 'Warehouse & Fulfillment Technology Management',
    riasec_affinity: ['R', 'C', 'I'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['warehouse management', 'WMS systems', 'fulfillment operations', 'automation systems', 'inventory technology'],
    entry_careers: ['Warehouse Operations Manager', 'WMS Analyst', 'Fulfillment Center Supervisor'],
    world_alignment: 'Systems',
    cc_transfer_friendly: true,
    emerging_role: 'Autonomous Fleet Controller — the professional who oversees the mixed fleets of autonomous mobile robots, conveyor systems, and human workers that operate modern fulfillment centers — managing the software systems that coordinate their interactions, monitoring performance against throughput targets, and making real-time decisions about task allocation when the system encounters exceptions that automation cannot resolve. Amazon Robotics, Symbotic, and Autostore are all scaling autonomous warehouse systems that require this human oversight function.',
    deployment_contexts: [
      {
        domain: 'E-Commerce Fulfillment Operations',
        edge: 'The fulfillment center that ships an online order within two hours of placement is not a warehouse. It is a precision manufacturing operation whose output is a correctly picked, packed, and labeled parcel — and the operations managers who run those facilities are managing workflows, labor productivity, and equipment uptime under service level agreements that have no flexibility. Amazon, Chewy, and Zappos have all built fulfillment operations management programs that treat the first two years as intensive training in how to manage a high-velocity, technology-dense distribution operation. The graduates who enter those programs with warehouse management system fluency, industrial engineering fundamentals, and genuine comfort with operational complexity move into area manager and operations manager roles faster than any other entry path. Arizona State\'s supply chain management program and the University of Tennessee\'s Global Supply Chain Institute have both placed operations graduates into e-commerce fulfillment management roles at a rate that reflects both programs\' investment in industry partnerships with the major e-commerce operators.'
      },
      {
        domain: 'Cold Chain & Temperature-Controlled Distribution',
        edge: 'A refrigerated distribution center that loses temperature for four hours during a heat wave does not lose inventory. It loses the trust of every grocery chain, pharmaceutical distributor, and restaurant operator whose products were inside it. The operations managers who run cold chain facilities are managing temperature monitoring systems, refrigeration equipment maintenance, and loading dock protocols under a regulatory and commercial standard that treats a temperature excursion as a product liability event. Americold, Lineage Logistics, and US Cold Storage are all the largest cold storage operators in the world, and they run operations management development programs for graduates who understand both the operational mechanics and the food safety regulatory framework that governs cold chain operations. Michigan State and Cal Poly San Luis Obispo have both built food distribution and cold chain operations concentrations that Americold and Lineage recruit from directly.'
      }
    ]
  }
];

// ─── NAICS 51 Amendment — Mathematics & Statistics + AI Infrastructure ────────

MAJOR_MAP[51].push(
  {
    major_label: 'Mathematics & Statistics',
    riasec_affinity: ['I', 'C', 'R'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['mathematics', 'statistics', 'applied math', 'data analysis', 'quantitative methods', 'probability'],
    entry_careers: ['Data Analyst', 'Quantitative Analyst', 'Statistical Analyst'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Synthetic Data Engineer — the professional who designs and generates statistically valid artificial datasets that train machine learning models when real data is scarce, sensitive, or structurally biased. The validity of a synthetic dataset depends entirely on the mathematical rigor of the generation process — which is why this function requires a statistician, not just a software engineer. Waymo, DeepMind, and the major AI labs are all building synthetic data generation capabilities whose quality determines whether their models generalize to the real world.',
    deployment_contexts: [
      {
        domain: 'Quantitative Finance & Risk Modeling',
        edge: 'The models that price derivatives, measure portfolio risk, and stress-test bank balance sheets against adverse scenarios are built and maintained by quantitative analysts whose mathematical training is the entry credential and whose financial domain knowledge is the differentiator. Goldman Sachs, Citadel, and Two Sigma all run quantitative analyst programs for mathematics and statistics graduates, and the graduates who arrive with strong probability theory, stochastic processes, and programming skills are competing for roles that carry compensation packages that most other mathematics career paths cannot approach in the first five years. University of Chicago\'s mathematics program and Carnegie Mellon\'s statistics and machine learning department have both produced quantitative analysts who are now running trading desks and risk management functions at firms where the mathematical rigor of the work is genuinely non-negotiable.'
      },
      {
        domain: 'Biostatistics & Clinical Research',
        edge: 'Every clinical trial that tests a new drug produces data — and the statisticians who design the trial, specify the primary endpoints, and analyze the results are the professionals whose work determines whether the FDA sees evidence of efficacy or noise. A biostatistician who designs a trial incorrectly does not just produce a failed study. They delay a treatment that might have worked, expose patients to risk for an inconclusive result, and cost their company hundreds of millions of dollars. Pfizer, Eli Lilly, and the major contract research organizations all employ biostatisticians in clinical trial design and analysis roles, and the mathematics and statistics graduates who arrive with some exposure to survival analysis and clinical trial methodology are entering one of the most stable and consequential quantitative careers in the American economy. University of Michigan\'s Department of Biostatistics and Johns Hopkins Bloomberg School of Public Health have both built biostatistics concentrations that the pharmaceutical sector recruits from with a consistency that reflects genuine pipeline dependence.'
      },
      {
        domain: 'Sports Analytics & Performance Intelligence',
        edge: 'The Moneyball era did not end when Oakland started winning with statistics. It expanded into every professional sport, every college athletic department, and now into the sports betting and fantasy sports industries that have grown large enough to employ their own quantitative analysts. The mathematics and statistics graduates who work in sports analytics are solving genuine optimization problems — lineup construction, draft valuation, in-game decision modeling — that have competitive and financial consequences for the organizations that get them right. MIT Sloan Sports Analytics Conference has become the industry gathering point for quantitative sports professionals, and the graduates who arrive with strong statistical modeling skills and genuine sports domain knowledge are entering a field that is still early enough in its professionalization that individual analytical contributions can produce visible results quickly. Carnegie Mellon\'s statistics program and the University of Michigan\'s applied statistics program have both placed graduates into sports analytics roles at NFL, NBA, and MLB organizations.'
      },
      {
        domain: 'Technology & Machine Learning Research',
        edge: 'The foundation of every machine learning system is mathematics — linear algebra, calculus, probability theory, and optimization methods that determine what a model can learn and how efficiently it learns it. The mathematicians who understand these foundations well enough to design new architectures, identify failure modes, and improve training methods are working at the research frontier of the most consequential technology development of the current era. Google DeepMind, OpenAI, and Anthropic all recruit mathematics and statistics graduates into research engineer and research scientist roles — and the graduates who arrive with strong theoretical foundations and genuine curiosity about why models behave the way they do are entering a field where mathematical insight still produces competitive advantage. MIT\'s mathematics department and Stanford\'s statistics department have both produced researchers who are now leading teams working on problems that will determine what AI systems can do in the next decade.'
      }
    ]
  },
  {
    major_label: 'AI Infrastructure & Systems Design',
    riasec_affinity: ['I', 'R', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['artificial intelligence', 'machine learning infrastructure', 'MLOps', 'distributed systems', 'AI systems'],
    entry_careers: ['ML Engineer', 'AI Infrastructure Engineer', 'MLOps Engineer'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'AI Model Governance Engineer — the professional who builds the monitoring, auditing, and intervention systems that track how deployed AI models behave in production — detecting drift, bias emergence, and unexpected failure modes before they cause harm at scale. Every organization deploying AI in consequential decisions is building this function, and the professionals who can design governance infrastructure that satisfies both technical and regulatory requirements are among the most sought-after in enterprise AI.',
    deployment_contexts: [
      {
        domain: 'Machine Learning Platform Engineering',
        edge: 'The AI systems that generate business value are not the models themselves — they are the platforms that train those models reliably, deploy them at scale, monitor their performance in production, and retrain them when their accuracy degrades. The engineers who build and maintain those platforms are working on infrastructure problems that are genuinely novel — distributed training across thousands of GPUs, feature stores that serve millions of predictions per second, model registries that track every version of every model in production. Uber, Airbnb, and Netflix have all published the architectures of their machine learning platforms because they recognize that the field benefits from shared learning, and the engineers who have studied those architectures and can contribute to them are recruited actively by every technology company with a serious AI program. Carnegie Mellon\'s School of Computer Science and Stanford\'s AI Lab have both produced ML platform engineers who are now building the infrastructure that other engineers use to train and deploy models at the most consequential AI organizations in the world.'
      },
      {
        domain: 'Enterprise AI Deployment & Integration',
        edge: 'The gap between a working AI prototype and a production system that reliably serves thousands of users across an enterprise is where most AI initiatives fail — and the engineers who know how to close that gap are among the most commercially valuable technical professionals in the current market. The challenge is not the model. It is the data pipelines that feed it, the APIs that expose it, the monitoring systems that detect when it degrades, and the organizational processes that ensure the humans who use it understand what it can and cannot do. Accenture, Deloitte, and the major technology consulting firms have all built AI deployment practices that draw from systems engineering, software engineering, and machine learning in proportions that no single academic program currently optimizes for. Georgia Tech\'s computational science and engineering program and MIT\'s electrical engineering and computer science department have both produced AI systems engineers who are now leading enterprise AI deployment programs at organizations where the business outcomes depend on getting the deployment right, not just the model.'
      },
      {
        domain: 'AI Safety & Alignment Research',
        edge: 'The organizations working on the safety properties of advanced AI systems — how to ensure that models behave as intended, how to detect and correct misaligned behavior, how to build the technical foundations for AI systems that remain beneficial as they become more capable — are building a research field whose importance is increasingly recognized by governments, philanthropies, and the AI companies themselves. Anthropic, DeepMind\'s safety team, and the Machine Intelligence Research Institute are all recruiting researchers and engineers whose background combines strong technical foundations with genuine engagement with the alignment problem. The path into AI safety research is not standardized, but the graduates who arrive with strong mathematics, computer science, and systems thinking backgrounds — and who have engaged seriously with the technical literature — are entering a field where the number of people working on the most important problems is still small relative to the stakes. MIT\'s mathematics and computer science programs and Berkeley\'s AI safety community have both produced researchers now contributing to the technical foundations of AI alignment.'
      }
    ]
  }
);

// ─── TIER 4C — COMPLETE COVERAGE ─────────────────────────────────────────────
// NAICS 21 — Mining & Extraction
// NAICS 31 — Food Manufacturing
// Packaging Engineering & Design — Special Entry (NAICS 31/33)
// ─────────────────────────────────────────────────────────────────────────────

// ─── NAICS 21 — Mining & Extraction ──────────────────────────────────────────

MAJOR_MAP[21] = [
  {
    major_label: 'Mining Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['mining engineering', 'mine design', 'rock mechanics', 'blasting', 'mineral extraction'],
    entry_careers: ['Mining Engineer', 'Mine Design Engineer', 'Geotechnical Engineer'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Autonomous Mine Operations Engineer — the professional who designs, deploys, and supervises the fleets of autonomous haul trucks, drilling equipment, and remote-operated machinery that are transforming large-scale surface mining — managing the sensor networks, dispatch systems, and safety protocols that allow a single control room to oversee equipment operating across a mine site the size of a small city. Rio Tinto, BHP, and Caterpillar are all scaling autonomous mining operations that require this human oversight and systems integration function.',
    deployment_contexts: [
      {
        domain: 'Critical Minerals & Battery Supply Chain',
        edge: 'The energy transition runs on mining. Every electric vehicle battery requires lithium, cobalt, nickel, and manganese. Every wind turbine requires rare earth elements for its permanent magnets. Every semiconductor requires silicon, germanium, and specialty metals whose supply chains run through mines operating in geologically specific locations around the world. The mining engineers who specialize in critical mineral extraction are working at the most strategically important intersection in the global economy right now — and the United States government has designated lithium, cobalt, and seventeen rare earth elements as critical minerals whose domestic supply the country is actively trying to secure. Colorado School of Mines and the University of Nevada Reno\'s Mackay School of Earth Sciences and Engineering have both built critical minerals concentrations that the Department of Energy and the major mining companies recruit from directly, with a geographic intentionality that reflects where those minerals actually exist in the ground.'
      },
      {
        domain: 'Mine Safety & Environmental Compliance',
        edge: 'Every operating mine in the United States is subject to MSHA inspection — and the mining engineers who design safety systems, manage hazardous materials, and ensure that operations meet the federal standards that govern everything from ventilation in underground mines to water management in surface operations are doing work whose consequences are immediate when they fail. The professionals who build careers in mine safety combine engineering fundamentals with regulatory fluency in a field that most engineers outside the industry have never encountered. Freeport-McMoRan, Newmont, and the major coal and potash producers all employ mine safety engineers whose work determines whether their operations stay open — and they recruit from a relatively small number of programs. South Dakota School of Mines and Technology and Missouri University of Science and Technology have both built mine safety concentrations that the industry recruits from with a regional intensity that reflects the mining operations concentrated in the Mountain West and Upper Midwest.'
      },
      {
        domain: 'Geotechnical Engineering & Site Stability',
        edge: 'The slope of a surface mine wall is not an aesthetic decision. It is a geotechnical calculation that determines whether the wall stands for thirty years of operations or fails catastrophically on a Tuesday morning. The geotechnical engineers who analyze rock mass properties, design slope angles, and monitor wall stability are working on safety-critical problems whose consequences — in lives and in regulatory shutdowns — are severe enough that the employers who trust them with those calculations pay accordingly. The same geotechnical skill set that serves mining also serves civil engineering, underground construction, and the assessment of natural slope stability in mountainous terrain — which means a mining engineer with strong geotechnical training has career optionality that extends well beyond the mining sector. Colorado School of Mines has built the most cited geotechnical engineering program in the United States specifically for mining applications, and its graduates move between mining, civil, and energy sector employers with a credential that translates across all three.'
      }
    ]
  },
  {
    major_label: 'Geological Engineering & Earth Sciences',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['geology', 'geoscience', 'mineralogy', 'geophysics', 'earth sciences', 'hydrogeology'],
    entry_careers: ['Geologist', 'Exploration Geologist', 'Hydrogeologist'],
    world_alignment: 'Think',
    cc_transfer_friendly: false,
    emerging_role: 'Geospatial AI Analyst — the professional who applies machine learning to satellite imagery, geophysical survey data, and geological databases to identify mineral deposit signatures that traditional exploration methods miss — reducing the time and capital required to find economic mineral deposits by screening candidate areas computationally before committing field crews and drilling budgets. Major mining companies and exploration firms are all building AI-assisted exploration programs that require geologists who can direct and interpret machine learning outputs.',
    deployment_contexts: [
      {
        domain: 'Mineral Exploration & Resource Assessment',
        edge: 'Finding an economic mineral deposit is one of the lowest-probability, highest-consequence activities in the resource industry — the exploration programs that locate the next copper mine or lithium deposit are spending years and hundreds of millions of dollars to identify something that may not exist in the ground they are sampling. The geologists who lead those programs combine regional geological knowledge, geophysical interpretation, and the statistical reasoning required to distinguish signal from noise in datasets that are inherently incomplete. Barrick Gold, Anglo American, and the major exploration companies all run exploration associate programs for geological engineering and geoscience graduates, and the graduates who arrive with strong structural geology, remote sensing, and resource estimation skills are entering a field that is simultaneously shrinking in its traditional form and expanding in new directions driven by the critical minerals demand that the energy transition has created. Colorado School of Mines and the University of Arizona\'s Department of Geosciences have both built mineral exploration concentrations that the major mining and exploration companies recruit from with a geographic and institutional specificity that reflects decades of relationship-building.'
      },
      {
        domain: 'Environmental Geology & Remediation',
        edge: 'The contaminated sites that legacy mining, petroleum, and industrial operations left behind require geologists who understand how contaminants move through soil and groundwater — and who can design the monitoring networks and remediation systems that contain, treat, or remove them. The Superfund program, state environmental agencies, and the environmental consulting firms that implement remediation work all employ hydrogeologists and environmental geologists in roles that combine field investigation with regulatory compliance and project management in ways that most geology students do not anticipate when they choose the major. Arcadis, Stantec, and Ramboll all run environmental geology and hydrogeology practices that recruit from geology and geological engineering programs at the University of Minnesota, Penn State, and the University of Wisconsin-Madison — programs whose proximity to legacy industrial sites in the Midwest and Mid-Atlantic has shaped their curriculum toward the environmental applications that those employers need.'
      }
    ]
  },
  {
    major_label: 'Petroleum Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['S', 'A'],
    program_keywords: ['petroleum engineering', 'reservoir engineering', 'drilling engineering', 'production engineering', 'well completion'],
    entry_careers: ['Petroleum Engineer', 'Reservoir Engineer', 'Drilling Engineer'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Carbon Capture & Subsurface Storage Engineer — the professional who adapts petroleum engineering knowledge of subsurface geology, reservoir mechanics, and well design to the injection and long-term storage of captured carbon dioxide in geological formations — designing the monitoring networks that verify containment integrity and managing the regulatory frameworks that govern what is effectively a new industrial use of the subsurface. ExxonMobil, Chevron, and the major CCS project developers are all hiring petroleum engineers into carbon storage roles that leverage their reservoir engineering training in a direction the industry did not exist five years ago.',
    deployment_contexts: [
      {
        domain: 'Oil & Gas Production Engineering',
        edge: 'Petroleum engineering consistently produces some of the highest starting salaries of any undergraduate engineering degree — and the volatility of oil prices that makes the industry\'s hiring cycles unpredictable also means that the engineers who stay through the downturns accumulate experience and responsibility faster than they would in a more stable sector. The shale revolution that transformed American energy production over the past two decades created an entire generation of drilling and completion engineers whose work on horizontal wells and hydraulic fracturing redefined what domestic production could look like. The University of Texas at Austin\'s Department of Petroleum and Geosystems Engineering and Texas A&M\'s Harold Vance Department of Petroleum Engineering have both built the most direct pipelines into oil and gas operating companies in the country — ExxonMobil, Chevron, ConocoPhillips, and Pioneer Natural Resources all maintain campus recruiting programs at both institutions that reflect decades of hiring relationship.'
      },
      {
        domain: 'Geothermal Energy Development',
        edge: 'The subsurface engineering skills that petroleum engineers develop — reservoir characterization, directional drilling, well design, and thermal fluid production — translate directly to geothermal energy development, which uses the earth\'s internal heat rather than fossil hydrocarbons as the energy source. Enhanced geothermal systems, which fracture hot dry rock to create artificial reservoirs, are advancing from research demonstrations to commercial projects in a way that is creating demand for petroleum engineers who can adapt their drilling and reservoir engineering skills to a carbon-free application. Fervo Energy, Sage Geosystems, and the Department of Energy\'s geothermal programs are all hiring petroleum engineers with directional drilling and reservoir stimulation experience into geothermal development roles that did not exist at commercial scale when most of those engineers chose their major. The University of Texas and Colorado School of Mines have both built geothermal engineering concentrations within their petroleum engineering programs that reflect the energy transition\'s pull on a skill set that the industry has built over a century of oil and gas development.'
      }
    ]
  }
];

// ─── NAICS 31 — Food Manufacturing ───────────────────────────────────────────

MAJOR_MAP[31] = [
  {
    major_label: 'Food Manufacturing & Processing Engineering',
    riasec_affinity: ['R', 'I', 'C'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['food manufacturing', 'food processing', 'food engineering', 'plant operations', 'food production'],
    entry_careers: ['Food Manufacturing Engineer', 'Process Engineer', 'Plant Operations Manager'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'Automated Food Production Systems Engineer — the professional who designs and integrates robotic processing lines, computer vision quality inspection systems, and AI-driven production scheduling into food manufacturing facilities — managing the technical complexity of applying industrial automation to products whose variability, contamination risk, and regulatory requirements make food manufacturing one of the most demanding automation environments in any industry. JBS, Tyson Foods, and Conagra are all investing heavily in automated processing systems that require this engineering function.',
    deployment_contexts: [
      {
        domain: 'Protein Processing & Meat Manufacturing',
        edge: 'The largest food manufacturing operations in the United States — the beef, pork, and poultry processing facilities that supply protein to American grocery stores and food service operations — are engineering environments whose complexity most people who eat the products never consider. Temperature management, line speed optimization, yield maximization, and USDA inspection compliance all operate simultaneously in facilities that run twenty hours a day and must restart within hours of any disruption. The engineers who run those facilities are solving continuous optimization problems under regulatory oversight that has no tolerance for contamination events. JBS, Tyson Foods, and Smithfield all run manufacturing engineering rotational programs for food science and agricultural engineering graduates, and the graduates who understand both the engineering mechanics and the food safety regulatory framework that governs every step of processing move into plant management roles faster than any other entry path in the sector.'
      },
      {
        domain: 'Beverage Production & Quality Systems',
        edge: 'The production of beverages at commercial scale — carbonated drinks, juices, ready-to-drink coffee, plant-based milks — is a continuous manufacturing operation whose quality outcomes are measured in millions of units per day and whose failures are visible on grocery store shelves within weeks. The engineers who design and operate beverage production lines are managing filling speed, carbonation consistency, packaging integrity, and microbiological safety simultaneously in facilities where the product specification tolerances are tighter than most consumers realize. Coca-Cola, PepsiCo, and the major craft beverage manufacturers that have scaled to regional distribution all employ food manufacturing engineers in process and quality roles. Cornell\'s Department of Food Science and Washington State University\'s School of Food Science have both built beverage manufacturing concentrations with industry partnerships that produce consistent placement into production engineering roles at manufacturers whose names appear on the labels their graduates help produce.'
      },
      {
        domain: 'Confectionery & Bakery Manufacturing',
        edge: 'Chocolate tempering, candy crystallization, bread fermentation, and pastry lamination are food chemistry processes that have been practiced for centuries — and that are now being operated at industrial scale under conditions that require engineers who understand both the underlying science and the manufacturing constraints that determine whether a process that works in a test kitchen can work in a facility producing ten thousand units per hour. The engineers who design and optimize confectionery and bakery manufacturing processes are working in a segment of food manufacturing that combines genuine technical complexity with products that carry significant brand value for their manufacturers. Mars, Mondelez, and General Mills all run food manufacturing engineering programs for food science and food engineering graduates, and the graduates who arrive with strong process engineering skills and some exposure to the specific chemistry of sugar, chocolate, and cereal grain processing move into production leadership roles that most plant-based food engineers reach a decade earlier than their counterparts in other manufacturing sectors.'
      }
    ]
  },
  {
    major_label: 'Food Quality Systems & Safety Engineering',
    riasec_affinity: ['I', 'C', 'R'],
    riasec_conflict: ['A', 'S'],
    program_keywords: ['food quality', 'HACCP', 'food safety systems', 'quality assurance', 'food microbiology', 'regulatory compliance'],
    entry_careers: ['Food Safety Manager', 'Quality Systems Engineer', 'Regulatory Affairs Specialist'],
    world_alignment: 'Systems',
    cc_transfer_friendly: false,
    emerging_role: 'AI-Assisted Food Safety Monitor — the professional who deploys and manages computer vision, spectroscopic sensing, and machine learning systems that detect contamination, adulteration, and quality defects in food production lines faster and more consistently than human inspectors — and who maintains the validation documentation that FDA and USDA require before those automated detection systems can replace or supplement human inspection under current regulatory frameworks.',
    deployment_contexts: [
      {
        domain: 'FSMA Compliance & Preventive Controls',
        edge: 'The Food Safety Modernization Act shifted the regulatory burden from responding to contamination events to preventing them — and every food manufacturer in the United States now maintains written food safety plans, preventive controls, and supply chain programs that must be designed by a Preventive Controls Qualified Individual with formal training and documented competency. The food safety engineers who design those systems are creating the infrastructure that keeps food supply chains safe and that regulators verify during inspections whose consequences — consent decrees, facility closures, criminal referrals — are severe enough that no food manufacturer can treat food safety as a secondary function. Michigan State\'s food safety program and the University of Georgia\'s Center for Food Safety have both built FSMA compliance concentrations that food manufacturers, co-manufacturers, and food safety consulting firms recruit from directly, with a consistency that reflects genuine regulatory-driven demand for this specific credential combination.'
      },
      {
        domain: 'Supplier Quality & Ingredient Verification',
        edge: 'The food that a manufacturer produces is only as safe as the ingredients that go into it — which is why the supplier quality programs that verify the safety, authenticity, and specification compliance of incoming ingredients are among the most consequential quality functions in food manufacturing. The food safety engineers who manage those programs are conducting audits, reviewing certificates of analysis, and making acceptance decisions on incoming shipments under the understanding that a failed ingredient that enters the process creates a contaminated product that may not be detected until it reaches a consumer. The complexity of global food ingredient supply chains — where a single product may contain ingredients sourced from a dozen countries — has made supplier quality management one of the most technically demanding and most consistently recruited food safety specializations. Rutgers University\'s food science program and Iowa State\'s food safety program have both built supplier quality and food fraud concentrations that the major food manufacturers and food safety consulting organizations recruit from.'
      }
    ]
  },
  {
    major_label: 'Culinary Science & Product Innovation',
    riasec_affinity: ['A', 'I', 'R'],
    riasec_conflict: ['C', 'S'],
    program_keywords: ['culinary science', 'food product development', 'sensory science', 'flavor chemistry', 'culinary arts'],
    entry_careers: ['Culinary Scientist', 'Product Development Chef', 'Sensory Analyst'],
    world_alignment: 'Make',
    cc_transfer_friendly: false,
    emerging_role: 'Personalized Nutrition Product Designer — the professional who uses consumer genomic data, microbiome research, and metabolic profiling to design food products calibrated to individual health outcomes — working at the intersection of nutritional science, food formulation, and consumer behavior in a segment of the food industry that has moved from fringe concept to venture-funded commercial reality. Habit, Viome, and the major CPG companies building personalized nutrition lines are all developing this function.',
    deployment_contexts: [
      {
        domain: 'Restaurant & Foodservice Innovation',
        edge: 'The test kitchen at a major restaurant chain is not a restaurant. It is a product development laboratory where culinary scientists translate consumer trend data, ingredient cost constraints, and operational feasibility requirements into menu items that can be executed consistently by kitchen staff across thousands of locations. McDonald\'s, Yum! Brands, and Darden Restaurants all employ culinary scientists in innovation roles that require the intersection of genuine culinary creativity with the food science fundamentals that determine whether a dish can be scaled, held, and reheated without losing the quality that made it worth developing. The Culinary Institute of America\'s food science and business programs and Johnson & Wales University\'s culinary arts and food service management programs have both built foodservice innovation tracks that the major chain restaurant operators recruit from directly — with a specificity that reflects how rare it is to find a professional who can cook well and think at scale simultaneously.'
      },
      {
        domain: 'Flavor Development & Sensory Science',
        edge: 'The flavor of a food product is not an accident and it is not simple. It is the result of hundreds of volatile compounds interacting with taste receptors, aroma pathways, and texture perceptions in ways that sensory scientists have been mapping for decades without yet fully understanding. The culinary scientists and flavor chemists who work at Givaudan, IFF, and Firmenich are designing the flavors that appear in every processed food category — and their work requires both the analytical chemistry to understand what compounds produce which sensory effects and the culinary intuition to know whether a prototype tastes like something a person would actually eat. Chapman University\'s food science program and the University of California Davis\'s sensory science program have both built flavor and sensory science concentrations that the flavor houses and consumer packaged goods companies recruit from directly, with a specificity that reflects how few programs take both the science and the culinary craft seriously enough to produce graduates who can do both.'
      }
    ]
  }
];

// ─── PACKAGING ENGINEERING & DESIGN — Special Entry ──────────────────────────
// Lives at the intersection of NAICS 31 and NAICS 33
// Appended to NAICS 31 as the closest natural home
// The MSU School of Packaging paradigm — surfaces the program a Michigan-legacy
// family never considered. Treated with the same dignity as enterprise management.
// ─────────────────────────────────────────────────────────────────────────────

MAJOR_MAP[31].push({
  major_label: 'Packaging Engineering & Design',
  riasec_affinity: ['R', 'I', 'A'],
  riasec_conflict: ['S', 'C'],
  program_keywords: ['packaging engineering', 'packaging design', 'materials packaging', 'sustainable packaging', 'package development'],
  entry_careers: ['Packaging Engineer', 'Package Development Specialist', 'Packaging Designer'],
  world_alignment: 'Make',
  cc_transfer_friendly: false,
  emerging_role: 'Sustainable Packaging Systems Architect — the professional who redesigns packaging material flows from the ground up — replacing single-use structures with reusable, compostable, or closed-loop alternatives that meet the same performance requirements for protection, shelf life, and retail presentation while satisfying the corporate sustainability commitments and extended producer responsibility regulations that are now legally binding in an increasing number of states and countries. Unilever, Nestlé, and Amazon are all building packaging sustainability teams that require this combination of engineering depth and systems thinking.',
  deployment_contexts: [
    {
      domain: 'Consumer Packaged Goods & Retail Packaging',
      edge: 'The packaging on a grocery store shelf has three seconds to communicate everything — the brand, the product, the quantity, the price tier, and the reason to pick it up rather than the one next to it. The packaging engineers and designers who create that moment are solving a problem that sits at the intersection of materials science, structural engineering, graphic design, and consumer psychology in ways that no single discipline fully prepares a student for. Michigan State\'s School of Packaging is the most cited undergraduate packaging program in the country — and it is the paradigmatic example of a program that Michigan-legacy families consistently overlook because it does not carry the brand recognition of Ross or Engineering, while placing graduates into packaging development roles at Procter & Gamble, Kellogg, and General Mills at a rate that those more visible programs cannot match for this specific career path. A student who graduates from MSU Packaging with internship experience at a major CPG company is not competing for entry-level roles. They are arriving as a specialist in a field that generalists cannot easily enter.'
    },
    {
      domain: 'E-Commerce & Fulfillment Packaging',
      edge: 'The package that arrives at a front door has survived a journey that a retail package was never designed to take — conveyor belts, sorting machines, delivery trucks, and the final drop onto a concrete porch. The packaging engineers who design for e-commerce are solving an entirely different set of structural and materials problems than their retail counterparts, and the companies that get it wrong pay the consequences in damage rates, return costs, and the kind of unboxing experience that generates the social media content that determines whether a customer orders again. Amazon, Chewy, and every direct-to-consumer brand shipping at scale all employ packaging engineers who specialize in fulfillment-optimized packaging design. Clemson University\'s packaging science program and Cal Poly San Luis Obispo\'s packaging program have both built e-commerce packaging concentrations that reflect the geographic proximity of major fulfillment infrastructure and the direct employer relationships those programs have built with the retailers and brands designing for it.'
    },
    {
      domain: 'Pharmaceutical & Medical Device Packaging',
      edge: 'A packaging failure in pharmaceutical distribution is not a customer satisfaction problem. It is a drug stability event, a contamination risk, or a child safety violation — each with its own regulatory consequence and its own potential for patient harm. The packaging engineers who work in pharmaceutical and medical device packaging operate under FDA 21 CFR requirements, USP standards for container closure systems, and ISO 11607 sterile barrier system requirements that transform every material selection and seal integrity decision into a validated, documented, and auditable process. The packaging roles at Pfizer, Johnson & Johnson, and the major contract packaging organizations are among the most technically demanding and most consistently compensated in the packaging field — and the graduates who arrive with both packaging engineering training and some exposure to pharmaceutical regulatory affairs are entering a specialization that most packaging programs do not specifically prepare students for. Rutgers University\'s packaging engineering program and Michigan State\'s School of Packaging have both developed pharmaceutical packaging curriculum components in response to sustained employer demand for graduates who can contribute to this function without a graduate degree.'
    },
    {
      domain: 'Sustainable Packaging & Circular Design',
      edge: 'The European Union\'s Packaging and Packaging Waste Regulation, California\'s SB 54, and the voluntary commitments that every major consumer goods company has made to recycled content and recyclability have created a sustained demand for packaging engineers who understand both the performance requirements of packaging and the end-of-life systems that determine whether a package is actually recyclable in the communities where consumers use it. The gap between what a package is designed to be and what the recycling infrastructure can actually process is one of the most consequential and least visible failures in the consumer goods industry — and the packaging engineers who are closing that gap are working at the intersection of material science, supply chain management, and municipal waste systems in ways that most packaging programs are still learning to teach. Michigan State\'s School of Packaging and Rochester Institute of Technology\'s packaging science program have both built sustainable packaging design concentrations whose curriculum reflects genuine engagement with the recycling infrastructure constraints that determine whether a sustainable packaging claim holds up to scrutiny.'
    }
  ]
});

// ─── NAICS 62 Amendment — Integrative Skin Biology & Dermatology ──────────────

MAJOR_MAP[62].push({
  major_label: 'Integrative Skin Biology & Dermatology',
  riasec_affinity: ['I', 'R', 'S'],
  riasec_conflict: ['E', 'C'],
  program_keywords: ['dermatology', 'skin biology', 'cellular biology', 'DNA repair', 'microbiome', 'photobiology'],
  entry_careers: ['Clinical Research Assistant', 'Dermatology Medical Assistant', 'Skin Biology Research Associate'],
  world_alignment: 'Think',
  cc_transfer_friendly: false,
  emerging_role: 'Skin Longevity Specialist — an evolution of dermatology that moves the specialty far beyond acne treatment and skin cancer screening into the deliberate management of how skin ages at the cellular level. Where today\'s dermatologist responds to visible pathology, the skin longevity specialist monitors DNA repair capacity, UV damage accumulation, cellular senescence, collagen regeneration rates, skin microbiome composition, pigmentation dynamics, and inflammation markers — using AI imaging systems that compare billions of pixels against prior annual scans to identify microscopic aging patterns and early malignancy years before they become clinically apparent. The dermatologist becomes, in this frame, a skin longevity architect: someone whose patient relationship is longitudinal, preventive, and data-driven rather than episodic and reactive. The undergraduate foundation is cellular and molecular biology, photobiology, and immunology — the biology of how skin cells respond to environmental stress at the molecular level. The path runs through medical school, a dermatology residency, and emerging fellowship training in skin longevity and photoaging that leading academic dermatology programs are beginning to formalize. The students who understand this trajectory now will arrive at medical school with a research focus and clinical curiosity that most of their peers have not yet developed.',
  deployment_contexts: [
    {
      domain: 'Longevity Medicine & Preventive Dermatology',
      edge: 'The convergence of longevity medicine and dermatology is producing a clinical specialty whose patients are not sick — they are optimizing. A 45-year-old executive who understands that skin aging is a measurable biological process with modifiable drivers does not wait for a suspicious lesion to visit a dermatologist. They come annually for a comprehensive skin age assessment that combines AI-powered dermoscopic imaging, biomarker panels for collagen synthesis and oxidative stress, and microbiome analysis that tells them whether their skin barrier is functioning at the biological age of their chronological peers or ahead of it. The practices building this model — Matthew Kelley\'s clinic in New York, the longevity-focused dermatology programs emerging at academic medical centers — are early signals of a specialty that will scale as the longevity medicine market expands. Northwestern\'s Feinberg School of Medicine and UCSF\'s Department of Dermatology have both begun building research programs at the intersection of aging biology and dermatology that are producing the faculty who will train the next generation of skin longevity specialists.'
    },
    {
      domain: 'AI Imaging & Computational Dermatology',
      edge: 'The diagnostic revolution in dermatology is not coming — it is already in early deployment. AI imaging systems trained on millions of dermoscopic images can now detect melanoma with sensitivity that matches or exceeds experienced dermatologists on standard lesion classification tasks. What those systems cannot do is exercise the clinical judgment that determines what to do with that detection — how to communicate risk, how to sequence biopsy decisions, how to integrate imaging findings with a patient\'s full skin history, sun exposure patterns, and genetic risk profile. The dermatologists who understand computational imaging well enough to direct these systems, validate their outputs, and catch their failure modes are building a clinical practice that is more accurate, more consistent, and more scalable than unaided human examination alone. Stanford\'s dermatology program has been a center of AI dermatology research, with faculty publishing work on deep learning diagnostic systems that are now influencing how academic medical centers are training the next generation of dermatology residents.'
    },
    {
      domain: 'Cosmetic Dermatology & Regenerative Skin Medicine',
      edge: 'The cosmetic dermatology market is large, growing, and being transformed by the same biological sciences that are reshaping medicine more broadly. The dermatologist who can offer not just neurotoxins and fillers but evidence-based cellular rejuvenation protocols — exosome treatments, growth factor therapies, microbiome restoration programs, and topical active ingredient regimens calibrated to a patient\'s specific skin biology — occupies a position in the aesthetic medicine market that neither a traditional dermatologist nor a non-physician injector can easily replicate. This is the commercial expression of the skin longevity specialty: a practice whose patients pay for longitudinal skin management the way they pay for personal training, because they understand that skin aging is not an event but a process that responds to deliberate intervention. USC\'s Keck School of Medicine and NYU Grossman School of Medicine both have cosmetic dermatology programs with strong research components that produce graduates who can build practices at this intersection.'
    }
  ]
});

// ─── NAICS 62 Amendment — Biomedical Informatics & Computational Medicine ─────

MAJOR_MAP[62].push({
  major_label: 'Biomedical Informatics & Computational Medicine',
  riasec_affinity: ['I', 'C', 'R'],
  riasec_conflict: ['A', 'S'],
  program_keywords: ['biomedical informatics', 'computational biology', 'health data science', 'systems biology', 'clinical informatics', 'bioinformatics'],
  entry_careers: ['Clinical Data Analyst', 'Health Informatics Specialist', 'Bioinformatics Research Associate'],
  world_alignment: 'Think',
  cc_transfer_friendly: false,
  emerging_role: 'Digital Twin Physician — a new clinical paradigm in which every patient has a continuously updated computational model of their own physiology, built from blood panels, continuous glucose monitoring, wearable cardiovascular and sleep data, imaging studies, microbiome sequencing, and genetic profile — and in which the physician simulates an intervention on that model before prescribing it to the person. The question shifts from "what does the literature say works for patients like this" to "let\'s see how your digital twin responds before we write the prescription." Adverse drug interactions, dosing sensitivities, and treatment response variability that population-level evidence cannot predict become visible in the simulation before they occur in the body. The undergraduate foundation for this path is not conventional pre-medicine — it is the intersection of computational biology, biomedical data science, and systems modeling, combined with enough biological depth to understand what the data represents physiologically. The path continues through medical school with a focus on clinical informatics, residency in internal medicine or a data-intensive specialty, and fellowship training in computational medicine at academic medical centers that are building these programs now. Stanford\'s Biomedical Informatics program and MIT\'s Health Sciences and Technology program are both producing the researchers and clinicians who will define what this specialty looks like at scale — and the students who arrive at those programs with both computational fluency and genuine biological curiosity are entering a field whose clinical infrastructure is being built around them.',
  deployment_contexts: [
    {
      domain: 'Precision Medicine & Individualized Treatment',
      edge: 'Population medicine has always been an approximation — the drug that works for seventy percent of patients with a given condition fails the other thirty percent for reasons that aggregate clinical trials were never designed to explain. The Digital Twin Physician is practicing the medicine that precision oncology has been pointing toward for two decades: treatment decisions made not on what works for most people with this diagnosis but on what the patient\'s own physiological model predicts will work for this person at this moment in their biology. Memorial Sloan Kettering, MD Anderson, and the major academic cancer centers are all building computational oncology programs that use patient-specific tumor modeling to simulate treatment response before chemotherapy is administered — and the physicians leading those programs are the early practitioners of what will eventually become standard clinical workflow across every specialty. UCSF\'s Bakar Computational Health Sciences Institute and Stanford\'s Center for Digital Health are both running digital twin research programs whose clinical outputs are beginning to influence how those institutions train their medical residents.'
    },
    {
      domain: 'Virtual Clinical Trials & Pharmaceutical Development',
      edge: 'A Phase III clinical trial costs hundreds of millions of dollars, takes years to complete, and answers a question about average response in a carefully selected patient population that may not reflect the patients who will actually receive the drug. The pharmaceutical companies that can run virtual trials on computational patient populations before committing to human studies — identifying failure modes, optimizing dosing regimens, and stratifying by predicted responder profile — are compressing development timelines and reducing the attrition rate that makes drug development so expensive. Pfizer, Novartis, and the major biotechnology companies have all begun building in silico clinical modeling teams that employ computational medicine specialists who understand both the biology being modeled and the statistical validity requirements that make a virtual trial result credible to regulators. The FDA has published guidance on the use of computational modeling in drug development that signals regulatory openness to virtual evidence — and the computational medicine professionals who understand that guidance are working at the frontier of how new treatments will be developed in the next decade.'
    },
    {
      domain: 'Hospital Systems & Real-Time Patient Monitoring',
      edge: 'The intensive care unit is already the closest thing medicine currently has to digital twin monitoring — continuous vital sign tracking, frequent laboratory draws, and real-time physiological data that attending physicians and nurses interpret against a mental model of the patient\'s trajectory. The next step is making that model computational, explicit, and predictive: a continuously updated patient-specific simulation that surfaces deterioration risk hours before clinical signs appear, identifies the specific intervention most likely to reverse it, and documents the reasoning in a form that the entire care team can interrogate. Epic Systems, Philips Healthcare, and the major health technology companies are all building predictive patient monitoring systems that require clinical informaticists who understand both the hospital workflow and the modeling methodology. Vanderbilt\'s Department of Biomedical Informatics — one of the oldest and most cited programs in the field — and the University of Washington\'s Biomedical and Health Informatics program have both produced clinical informaticists now leading patient monitoring and early warning system programs at major academic medical centers.'
    },
    {
      domain: 'Wearable Health Technology & Continuous Monitoring',
      edge: 'The data that feeds a digital twin model does not come only from clinical encounters — it comes from the continuous stream of physiological signals that wearable devices collect between appointments. Heart rate variability, sleep architecture, blood oxygen saturation, skin temperature, and electrodermal activity measured passively across days and weeks reveal patterns that a twice-yearly physical examination cannot detect. The physicians and clinical researchers who know how to interpret that data — who understand its signal quality limitations, its population-level calibration requirements, and the clinical contexts in which a wearable signal is actionable versus noise — are building the evidence base that will determine which wearable biomarkers eventually make it into clinical practice. Apple, Fitbit, and the medical-grade wearable companies like Whoop and Oura are all building clinical research partnerships with academic medical centers to validate the health signals their devices collect. UCSF\'s Digital Health Center of Excellence and Johns Hopkins\' precision medicine programs have both built wearable health research programs whose clinical faculty are simultaneously practicing physicians and the researchers defining what continuous monitoring means for how medicine is practiced.'
    }
  ]
});

// ─── NAICS 62 Amendment — Human Performance Science & Enhancement Medicine ────

MAJOR_MAP[62].push({
  major_label: 'Human Performance Science & Enhancement Medicine',
  riasec_affinity: ['I', 'R', 'E'],
  riasec_conflict: ['A', 'C'],
  program_keywords: ['exercise physiology', 'human performance', 'neuroscience', 'endocrinology', 'sport science', 'performance optimization'],
  entry_careers: ['Performance Specialist', 'Human Performance Analyst', 'Clinical Exercise Physiologist'],
  world_alignment: 'Think',
  cc_transfer_friendly: false,
  emerging_role: 'Human Enhancement Consultant — not a disease treatment specialty but a performance optimization discipline whose clients are not patients in any conventional sense. They are CEOs managing cognitive demands that would exhaust most people, surgeons who need the fine motor precision and sustained focus of an elite athlete, military operators whose physiological performance in austere environments determines mission outcomes, pilots managing fatigue and decision quality across transcontinental rotations, and entertainers sustaining peak output across touring schedules that would break an untrained body in months. The Human Enhancement Consultant is the medical equivalent of a Formula 1 engineering team — not fixing what is broken but optimizing every system that determines how well the machine performs under maximum load. The optimization domains span cognition, sleep architecture, hormonal balance, recovery kinetics, nutritional timing, metabolic efficiency, stress response, and psychological resilience — integrated into a protocol that is specific to the client\'s performance demands and continuously adjusted against measured outputs. The credential pathway has not yet standardized the way cardiology or dermatology has — the professionals building this field arrive from exercise physiology, sports medicine, endocrinology, and functional medicine by different routes, which means the student who builds deliberately toward this intersection — combining clinical training with deep performance science and the credibility to work with high-achieving clients who will not tolerate imprecision — is entering a field whose pipeline does not yet exist at the volume the demand requires. The undergraduate foundation is exercise physiology and neuroscience, with serious engagement in endocrinology, nutrition science, and the psychology of elite performance. The path continues through medical school or a doctoral program in exercise physiology or sports science, residency or fellowship in sports medicine or endocrinology, and the kind of clinical experience that builds credibility with clients who will compare your recommendations against the best performance teams in professional sport.',
  deployment_contexts: [
    {
      domain: 'Executive & Corporate Performance Medicine',
      edge: 'The CEOs and senior executives who run the largest organizations in the world are performing cognitive work of extraordinary intensity across schedules that most performance science has never systematically studied — because the research base for elite athletic performance is decades deep while the research base for elite executive performance is still being written. The Human Enhancement Consultants who serve this population are building practices that combine the rigor of sports medicine with the discretion and communication sophistication that high-profile clients require. Executives do not want to be patients. They want to be optimized — and the physician or performance scientist who can reframe the clinical relationship in those terms, back it with genuine physiological expertise, and deliver measurable improvements in cognitive clarity, energy management, and resilience is building a practice whose referral network compounds faster than almost any other medical specialty. Cleveland Clinic\'s Executive Health program and Mayo Clinic\'s Executive Health program are both early institutional expressions of this model, and the practitioners who trained at those programs are now building independent practices and corporate wellness programs that treat human performance as a design problem rather than a healthcare problem.'
    },
    {
      domain: 'Elite Athletic Performance & Recovery Science',
      edge: 'Every professional sports team in every major league now employs performance scientists, recovery specialists, sleep coaches, and nutritionists whose work extends the careers and maximizes the output of athletes whose physical capabilities represent hundreds of millions of dollars of investment. The Human Enhancement Consultant in elite sport is not the team physician managing injuries — they are the performance engineer managing the physiological systems that determine whether an athlete performs at ninety-five percent or one hundred percent on the day it matters most. The marginal gains philosophy that Team Sky brought to professional cycling and that has since spread to every elite sport has created a sustained demand for performance scientists who understand the interaction between sleep, hormonal status, nutrition timing, cognitive load, and physical training in ways that most sports medicine curricula do not integrate. IMG Academy, the United States Olympic and Paralympic Committee, and the major professional team performance departments have all built human performance programs that recruit from exercise physiology doctoral programs at the University of Florida, Penn State, and the Australian Institute of Sport — institutions whose research output defines the evidence base that elite performance practitioners actually use.'
    },
    {
      domain: 'Military & Special Operations Human Performance',
      edge: 'The United States Special Operations Command has invested more in human performance science than any other organization in the world — because the physiological and cognitive demands placed on special operations forces exceed what standard military training was designed to produce, and because the consequences of performance failure in their operating environments are measured in lives rather than games. The Human Performance Program that SOCOM runs across its commands employs performance scientists, nutritionists, sleep specialists, cognitive performance coaches, and recovery technology specialists whose work is classified at the application level but whose scientific foundations are published in peer-reviewed journals that civilian performance scientists read. The practitioners who move between military and civilian human performance work — carrying the methodological rigor of the SOCOM program into corporate and athletic contexts — are some of the most credible and most sought-after in the emerging enhancement medicine field. The University of Pittsburgh\'s Department of Sports Medicine and Nutrition and the Human Performance Laboratory at Ball State University have both produced exercise physiologists who have built careers bridging military and civilian elite performance work.'
    },
    {
      domain: 'Longevity & Healthspan Optimization',
      edge: 'The overlap between human enhancement and longevity medicine is where the field gets most interesting — and most commercially significant. The 55-year-old private equity partner who wants the hormonal profile, metabolic flexibility, and cognitive sharpness of a healthy 40-year-old is not asking for disease prevention. They are asking for performance enhancement across a longer time horizon than an athlete\'s seasonal cycle. The Human Enhancement Consultant who can work at this intersection — combining the performance science of elite sport with the longitudinal biological monitoring of longevity medicine — is practicing a specialty that Peter Attia\'s work has made visible to a high-net-worth audience that is now actively seeking practitioners trained to this standard. The market for this work is large, the supply of credentialed practitioners is small, and the practitioners who build early reputations in this space through publication, podcast presence, and measurable client outcomes are establishing positions in a field that will become far more crowded in a decade than it is today.'
    }
  ]
});

// ─── NAICS 32 Amendment — Cosmetic Science & Formulation Chemistry ────────────

MAJOR_MAP[32].push({
  major_label: 'Cosmetic Science & Formulation Chemistry',
  riasec_affinity: ['I', 'R', 'A'],
  riasec_conflict: ['E', 'S'],
  program_keywords: ['cosmetic science', 'formulation chemistry', 'skin care', 'personal care', 'cosmetic chemistry', 'active ingredients'],
  entry_careers: ['Formulation Chemist', 'Cosmetic Scientist', 'Product Development Chemist'],
  world_alignment: 'Think',
  cc_transfer_friendly: false,
  emerging_role: 'Bioactive Skincare Formulation Scientist — the professional who designs evidence-based topical products that interact with skin biology at the cellular level rather than sitting on the surface. Where conventional cosmetic formulation optimizes for texture, stability, and fragrance, the bioactive formulation scientist engineers delivery systems that carry active ingredients — retinoids, peptides, growth factors, exosomes, microbiome-modulating prebiotics — through the skin barrier to the target cell layer where the biological effect actually occurs. This requires simultaneous fluency in dermatological biology, polymer chemistry, emulsion science, and the FDA regulatory framework that determines whether a product is classified as a cosmetic or a drug — a line whose placement determines everything about how the product can be marketed, tested, and sold. The undergraduate foundation is chemistry with strong organic and physical chemistry depth, combined with biology coursework in cell biology and dermatological science that most chemistry programs do not require but that distinguish formulation scientists who understand why an ingredient works from those who only know that it does. Fairleigh Dickinson University\'s cosmetic science program and the University of Cincinnati\'s cosmetic science and formulation chemistry program are among the few undergraduate programs that take both the chemistry and the biology seriously enough to produce graduates who can contribute to bioactive product development without a graduate degree — a credential that the major skincare companies and the growing field of clinical skincare brands are actively recruiting for.',
  deployment_contexts: [
    {
      domain: 'Clinical Skincare & Dermocosmetics',
      edge: 'The fastest-growing segment of the skincare market is the space between a cosmetic and a pharmaceutical — the clinical skincare brand whose products are formulated with active ingredient concentrations and delivery system sophistication that drugstore products cannot match, whose efficacy claims are backed by clinical studies rather than consumer perception surveys, and whose distribution runs through dermatology offices, medical spas, and specialty retailers rather than mass market channels. SkinCeuticals, Revision Skincare, and Alastin are all brands whose formulation scientists have built products that dermatologists recommend by name — and whose commercial success reflects the market\'s willingness to pay a significant premium for topical products whose mechanism of action can be explained at the cellular level. The formulation chemists who work in this segment are doing some of the most technically demanding work in the consumer products industry, and they are working in a category whose growth trajectory has significantly outpaced both the mass skincare and pharmaceutical markets for the past decade.'
      },
    {
      domain: 'Personalized Skincare & Precision Formulation',
      edge: 'The convergence of at-home skin diagnostic technology, microbiome sequencing, and on-demand manufacturing is making personalized skincare formulation commercially viable at a scale that was impossible five years ago. Companies like Proven Skincare, Curology, and Function of Beauty have built business models around formulations calibrated to individual skin profiles — and the formulation scientists who design the ingredient matrices and concentration ranges that those systems draw from are working at the intersection of chemistry, data science, and consumer behavior in ways that conventional cosmetic formulation training did not prepare anyone for. The next generation of personalized skincare will incorporate microbiome data, genetic skin typing, and continuous biomarker monitoring from wearable skin sensors into formulation recommendations that adjust over time as the skin\'s biology changes — and the formulation scientists who understand both the chemistry of what goes into the product and the biological logic of why it should vary by individual are building a specialization that the personalized beauty market will compete for aggressively.'
    },
    {
      domain: 'Sustainable & Clean Beauty Formulation',
      edge: 'The clean beauty movement has moved from consumer preference to regulatory mandate — the European Union has restricted over thirteen hundred cosmetic ingredients, California\'s Safer Consumer Products program is expanding its oversight of personal care formulations, and the major beauty retailers have all published restricted substances lists that their brand partners must comply with to maintain shelf space. The formulation chemists who can replace restricted or controversial ingredients with alternatives that deliver equivalent performance without the toxicological profile that triggers regulatory or retailer concern are among the most commercially valuable scientists in the personal care industry right now — because the alternative is reformulating under pressure after a retailer restriction or a regulatory action, which is significantly more expensive and reputationally damaging than building clean from the start. Mintel\'s cosmetic formulation program and the Society of Cosmetic Chemists\' continuing education infrastructure have both built sustainable formulation curricula that the major clean beauty brands recruit from directly, supplementing the academic programs whose graduates arrive with the chemistry foundation but need the industry-specific application training that only comes from working with real formulation constraints.'
    },
    {
      domain: 'Active Ingredient Research & Delivery Systems',
      edge: 'The active ingredient that cannot reach its target is not an active ingredient — it is a marketing claim. The delivery system that carries a retinoid, a vitamin C derivative, or a peptide through the stratum corneum to the viable epidermis where the biological effect occurs is as important as the active itself, and the formulation scientists who specialize in delivery system design are working on problems that sit at the boundary between cosmetic chemistry and pharmaceutical science. Encapsulation technologies, nanoemulsions, liposomal delivery systems, and microbiome-compatible carrier matrices are all formulation approaches whose development requires the kind of physical chemistry and materials science depth that most cosmetic science programs treat as advanced elective content. The companies working at this frontier — Givaudan Active Beauty, Lucas Meyer Cosmetics, and the active ingredient development divisions of the major fragrance and flavor houses — are recruiting formulation scientists with graduate training in delivery system chemistry from programs like Rutgers\' pharmaceutical sciences department and the University of Maryland\'s pharmaceutical sciences program, whose graduates bring drug delivery methodology into cosmetic applications that the industry is only beginning to explore systematically.'
    }
  ]
});

// ─── NAICS 44 Amendment — Beauty Industry Management & Commerce ───────────────

MAJOR_MAP[44].push({
  major_label: 'Beauty Industry Management & Commerce',
  riasec_affinity: ['E', 'A', 'S'],
  riasec_conflict: ['R', 'I'],
  program_keywords: ['beauty industry', 'cosmetics business', 'beauty brand management', 'retail beauty', 'social commerce', 'beauty marketing'],
  entry_careers: ['Beauty Brand Associate', 'Retail Buying Associate', 'Beauty Marketing Coordinator'],
  world_alignment: 'Make',
  cc_transfer_friendly: false,
  emerging_role: 'Beauty Tech Brand Architect — the professional who understands the convergence of skincare science, social commerce, and personalization technology well enough to build brands that are simultaneously credible to dermatologists and compelling to consumers — navigating a market where the line between a beauty brand and a health brand is dissolving, where a TikTok biochemist with two million followers can launch a clinical skincare line that outsells legacy department store brands within eighteen months, and where the brands that win are the ones whose founders understood both the ingredient story and the algorithm. The Beauty Tech Brand Architect is not a marketing generalist who learned about beauty — they are a beauty professional who understands technology, data, community building, and the regulatory environment that determines what claims a brand can make and where it can be sold. The undergraduate foundation combines business, marketing, and consumer psychology with genuine engagement in cosmetic science and dermatological biology — because the brands that are built on a real understanding of what the products do are the ones that build the kind of consumer trust that survives algorithm changes, influencer scandals, and the inevitable moment when a competitor copies the formula. LIM College in New York and the Fashion Institute of Technology\'s cosmetics and fragrance marketing program are both building beauty industry management curricula that treat the business of beauty as a serious commercial discipline rather than a lifestyle elective.',
  deployment_contexts: [
    {
      domain: 'Direct-to-Consumer Beauty Brand Building',
      edge: 'Rare Beauty reached a billion-dollar valuation faster than most legacy beauty brands took to reach fifty million in revenue — and the infrastructure that made that possible was not a department store distribution deal but a founder with genuine community credibility, a social commerce strategy that treated content as the product and the product as the proof, and a supply chain flexible enough to respond to viral moments faster than traditional retail cycles allow. The professionals who build the next generation of DTC beauty brands are not coming from traditional consumer goods management programs — they are coming from the intersection of beauty science literacy, community management, e-commerce operations, and the financial modeling that determines when a brand is ready to take outside capital and what it gives up when it does. The business schools that are beginning to take this career path seriously — NYU Stern\'s luxury and retail programs, USC Marshall\'s entrepreneurship track — are doing so because their alumni in the beauty industry are telling them that the credential gap between what traditional business education produces and what building a modern beauty brand actually requires is significant and growing.'
      },
    {
      domain: 'Prestige Retail & Department Store Beauty',
      edge: 'The beauty floor at Neiman Marcus and the Sephora shelf are not passive distribution channels — they are brand-building environments whose buyers, counter managers, and education teams determine whether a prestige beauty brand succeeds with its target consumer or languishes in a position that looks like distribution but functions like storage. The professionals who manage prestige beauty retail relationships are doing category management, sell-through analysis, counter education programming, and the constant negotiation between brand positioning and retailer promotional requirements that determines whether a brand maintains its premium pricing integrity or erodes it chasing volume. The Estée Lauder Companies, LVMH Beauty, and Chanel\'s fragrance and beauty division all run retail management and brand development programs for beauty management graduates who understand both the commercial mechanics of prestige retail and the brand stewardship judgment that prevents a prestige positioning from being traded away for short-term sales. FIT\'s cosmetics and fragrance marketing program and LIM College have both placed graduates into prestige beauty retail management roles at the major department store chains and specialty beauty retailers.'
      },
    {
      domain: 'Beauty Tech & Personalization Platforms',
      edge: 'The technology layer on top of beauty commerce is producing an entirely new category of professional — the person who sits between the brand, the technology platform, and the consumer, managing the data systems that personalize recommendations, the AR try-on tools that reduce return rates, and the skin diagnostic algorithms that tell a consumer which product in a brand\'s lineup matches their specific biology. L\'Oréal\'s Technology Incubator, Ulta Beauty\'s digital team, and the beauty-focused AI companies like Perfect Corp and Revieve are all building product and operations roles that require professionals who understand beauty commerce deeply enough to know what the technology should optimize for. The graduates who arrive with both beauty industry fluency and genuine comfort with data systems, personalization logic, and digital product management are entering a category where the supply of people who have both is genuinely small relative to the demand that the industry\'s technology investment has created.'
      },
    {
      domain: 'Social Commerce & Creator Economy Beauty',
      edge: 'The creator economy has restructured beauty distribution more completely than any retail innovation in the past thirty years — because the trust that a skincare creator builds with an audience of two hundred thousand engaged followers converts to purchase at a rate that a full-page magazine advertisement in its prime never approached. The Beauty Tech Brand Architect who understands this environment is not managing influencer partnerships — they are building the brand strategy, content architecture, and community infrastructure that makes the brand itself the creator, or that selects and develops creator relationships whose audiences align with a specific brand positioning and whose content standards match the clinical credibility the brand requires. Charlotte Tilbury built a prestige color brand on founder-creator content before most beauty companies had a social media strategy. Hailey Bieber\'s Rhode built a skincare brand on community before it had a product line. The professionals who understand how those outcomes were engineered — and can build the operational systems that make them repeatable — are being recruited by every beauty company that understands the next decade of the industry well enough to be afraid of falling behind.'
      }
  ]
});
