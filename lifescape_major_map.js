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
