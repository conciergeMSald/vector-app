/**
 * VECTOR Lifescape — University Content Database
 * Version: 1.0 — June 16, 2026
 * Lightweight content snapshot for callD school recommendation generation.
 * 127 schools — pipeline, hidden_pathway, the_room, lifestyle, grad_cities
 */

const UNIVERSITY_CONTENT = {

  "Vanderbilt University": {
    name: "Vanderbilt University",
    location: "Nashville, Tennessee",
    region: "Southeast",
    pipeline: "Consulting and Finance (McKinsey, Deloitte, Goldman Sachs, HCA Healthcare, Optum, PwC, Bain - Owen Graduate School of Business is the engine for Wall Street and Nashville corporate placement), Healthcare and Medicine (Vanderbilt University Medical Center is one of the top 10 hosp",
    hidden_pathway: "Vanderbilt is the only elite research university located in Nashville - the capital of the American healthcare industry. The Healthcare MBA concentration at Owen places graduates directly into HCA Healthcare, Optum, and Change Healthcare at $95,000+.",
    the_room: "87% of students come from out of state - only 13% are Tennessee residents. Vanderbilt draws from all 50 states with the heaviest concentration from California, New York, Texas, Florida, and Georgia -",
    lifestyle: "Four years in Nashville - the fastest-growing major American city of the 2020s. The Greek system dominates social life. SEC football.",
    grad_cities: "Nashville TN (45%) | New York NY (20%) | Atlanta GA (10%) | Chicago IL (8%) | Boston MA (7%)."
  },
  "University of Michigan": {
    name: "University of Michigan",
    location: "Ann Arbor, Michigan",
    region: "Big Ten",
    pipeline: "Consulting, Technology, Financial Services, Engineering, Healthcare, Law, Public Policy, Architecture and Urban Planning, Music and Performing Arts. Michigan Ross Business School (BCG, McKinsey, Amazon, Deloitte, Bain, Goldman Sachs, Bank of America -",
    hidden_pathway: "Michigan's Erb Institute for Global Sustainable Enterprise is the leading MBA-MS dual degree in sustainability business in America. As ESG mandates and sustainability leadership positions multiply at Fortune 500 companies, Erb graduates have a creden",
    the_room: "Approximately 50% of undergraduates are Michigan residents and 50% are from out of state - a dramatic shift from a decade ago when 64% were in-state.",
    lifestyle: "Ann Arbor is a genuine college town with 47,000 students and social infrastructure rivaling small cities. Michigan Stadium holds 107,000 people -",
    grad_cities: "Chicago IL (25%) | New York NY (20%) | Detroit-Ann Arbor MI (15%) | San Francisco CA (12%) | Washington DC (8%)."
  },
  "Indiana University": {
    name: "Indiana University",
    location: "Bloomington, Indiana",
    region: "Big Ten",
    pipeline: "Finance and Investment Banking, Consulting, Technology, Media and Journalism, Music Performance and Music Business, Law, Education, Healthcare, Data Science. Kelley School of Business (Goldman Sachs, J.P. Morgan, Deloitte, PwC, Big 4 accounting -",
    hidden_pathway: "The Kelley School of Business at IU Bloomington is consistently ranked top 10 undergraduate business nationally. Kelley sends more graduates to the Chicago financial services sector per capita than any non-Ivy school except Michigan Ross.",
    the_room: "49% of students are Indiana residents and 51% are from out of state or international - a ratio consistent for three years.",
    lifestyle: "Bloomington is the quintessential college town: IU is the entire economy, culture, and social infrastructure. Kirkwood Avenue, the Sample Gates, the Lilly Library, and Assembly Hal",
    grad_cities: "Chicago IL (35%) | Indianapolis IN (20%) | New York NY (15%) | Washington DC (8%) | Columbus OH (5%)."
  },
  "University of Georgia": {
    name: "University of Georgia",
    location: "Athens, Georgia",
    region: "Southeast",
    pipeline: "Business and Finance (Terry College of Business - Amazon, Delta Air Lines, The Home Depot, Bank of America, Chick-fil-A, PwC, AT&T, Truist Bank - 68% of working graduates in business or finance-adjacent roles), Journalism and Media (Grady College of Journalism and Mass Communicat",
    hidden_pathway: "The Terry College of Business at UGA is the primary feeder for Atlanta's extraordinary concentration of Fortune 500 headquarters: Coca-Cola, Delta, UPS, Home Depot, CNN, NCR Voyix, Intercontinental Hotels.",
    the_room: "80% of enrolled students are Georgia residents and 20% are from out of state - a firm institutional target set by UGA admissions.",
    lifestyle: "Athens, Georgia is a college town with a cultural identity that transcends the university. The music scene (R.E.M., B-52s, Drive-By Truckers all from Athens), the restaurant cultur",
    grad_cities: "Atlanta GA (70%) | New York NY (8%) | Austin TX (5%) | Charlotte NC (4%) | Washington DC (3%)."
  },
  "University of Florida": {
    name: "University of Florida",
    location: "Gainesville, Florida",
    region: "Southeast",
    pipeline: "Healthcare and Medicine (UF Health / Shands is one of the top 10 academic medical centers in America - UF College of Medicine, College of Nursing, College of Pharmacy, College of Dentistry, College of Public Health all ranked nationally -",
    hidden_pathway: "UF's Warrington College of Business is ranked top 10 undergraduate business nationally by US News but operates in the shadow of Florida's football and beach identity.",
    the_room: "Approximately 88% of UF students are Florida residents and only 12% are from out of state - one of the highest in-state ratios of any top-20 public university in America.",
    lifestyle: "Ben Hill Griffin Stadium - The Swamp - seats 88,000 and is one of the loudest venues in college football. Saturday games define the social calendar.",
    grad_cities: "Miami FL (25%) | Tampa FL (20%) | Orlando FL (15%) | New York NY (10%) | Atlanta GA (8%)."
  },
  "University of Oklahoma": {
    name: "University of Oklahoma",
    location: "Norman, Oklahoma",
    region: "SEC New Members",
    pipeline: "Energy and Petroleum Engineering (Devon Energy, ConocoPhillips, Chevron, BP, ExxonMobil, Halliburton - Mewbourne College of Earth and Energy is the top-ranked petroleum engineering program in America - average starting salary $73,880 -",
    hidden_pathway: "The Stacy L. Schusterman College of Business has a private equity and energy finance pipeline that is invisible nationally but dominant regionally. Oklahoma City and Tulsa host dozens of family offices and energy-focused private equity funds that rec",
    the_room: "Approximately 62% of OU students are Oklahoma residents and 38% are from out of state or international. The dominant out-of-state feeder is Texas -",
    lifestyle: "Gaylord Family-Oklahoma Memorial Stadium holds 86,000 and football Saturdays define the Norman social calendar.",
    grad_cities: "Oklahoma City OK (30%) | Tulsa OK (20%) | Dallas TX (25%) | Houston TX (15%) | Denver CO (5%)."
  },
  "Louisiana State University": {
    name: "Louisiana State University",
    location: "Baton Rouge, Louisiana",
    region: "Southeast",
    pipeline: "Energy and Petrochemical Engineering (Exxon, Shell, Chevron, Marathon, Entergy - Louisiana is the second-largest energy-producing state in America - LSU Craft and Hawkins Department of Petroleum Engineering is a primary Gulf Coast pipeline), Architecture and Interior Design (LSU",
    hidden_pathway: "LSU's Manship School of Mass Communication is the South's most influential journalism and media institution. The alumni network extends through every major Louisiana media market and into national broadcast networks.",
    the_room: "60% of LSU undergraduates are Louisiana residents and 40% are from out of state - a dramatic transformation from 2017 when only 17% of freshmen came from other states.",
    lifestyle: "Tiger Stadium - Death Valley - seats 102,000 and is the loudest venue in college football. Saturday nights in Baton Rouge during football season are one of the most distinctive soc",
    grad_cities: "Baton Rouge LA (35%) | New Orleans LA (25%) | Houston TX (20%) | Dallas TX (10%) | Atlanta GA (5%)."
  },
  "Auburn University": {
    name: "Auburn University",
    location: "Auburn, Alabama",
    region: "Southeast",
    pipeline: "Engineering and Manufacturing (Gus Harbert College of Engineering - Aerospace, Mechanical, Chemical, Civil, Materials - Boeing, Lockheed Martin, Raytheon, Honda, Hyundai, Blue Origin, NASA Marshall recruit on campus -",
    hidden_pathway: "Auburn's College of Veterinary Medicine is consistently ranked top 5 nationally - and it is the only top-5 veterinary program at a school with the SEC football culture and social experience of Auburn.",
    the_room: "57% of Auburn undergraduates are Alabama residents and 43% are from out of state or international - with all 67 Alabama counties represented.",
    lifestyle: "Jordan-Hare Stadium seats 87,000 and the Iron Bowl is the defining social event of the Alabama calendar. Toomer's Corner -",
    grad_cities: "Atlanta GA (30%) | Birmingham AL (20%) | Charlotte NC (10%) | Houston TX (10%) | Washington DC (8%)."
  },
  "University of South Carolina": {
    name: "University of South Carolina",
    location: "Columbia, South Carolina",
    region: "Southeast",
    pipeline: "International Business and Global Trade (Moore School of Business number 1 undergraduate international business program in America for 24 consecutive years - Bank of America, Wells Fargo, Goldman Sachs, JPMorgan Chase, Jefferies, Deloitte, PwC), Supply Chain and Operations (numbe",
    hidden_pathway: "The Darla Moore School of Business has been the number 1 undergraduate international business program in America for 24 consecutive years - a streak no other business school in any category at any university has matched in the history of US News rank",
    the_room: "52% of UofSC students come from out of state - a 333% surge in out-of-state enrollment over the past 25 years that is reshaping the character of the campus.",
    lifestyle: "Columbia, South Carolina is a state capital college town - USC is the dominant social and economic institution in the city.",
    grad_cities: "Columbia SC (35%) | Charlotte NC (20%) | Atlanta GA (15%) | New York NY (10%) | Charleston SC (8%)."
  },
  "Clemson University": {
    name: "Clemson University",
    location: "Clemson, South Carolina",
    region: "Southeast",
    pipeline: "Engineering and Manufacturing (College of Engineering, Computing and Applied Sciences - Automotive, Mechanical, Civil, Electrical, Chemical, Bioengineering - BMW Manufacturing, Michelin North America, Bosch, Siemens Energy, Duke Energy recruit on campus -",
    hidden_pathway: "Clemson's International Center for Automotive Research (CU-ICAR) in Greenville is the only university-industry automotive research campus of its kind in the United States -",
    the_room: "56% of Clemson undergraduates are South Carolina residents - but the character of the campus is shaped by the 44% who come from out of state.",
    lifestyle: "Memorial Stadium - Death Valley - seats 81,500 and consistently ranks among the loudest venues in college football.",
    grad_cities: "Greenville-Spartanburg SC (35%) | Charlotte NC (20%) | Atlanta GA (12%) | Columbia SC (10%) | Raleigh-Durham NC (8%)."
  },
  "Wake Forest University": {
    name: "Wake Forest University",
    location: "Winston-Salem, North Carolina",
    region: "Southeast",
    pipeline: "Finance and Investment Banking (Wells Fargo, Bank of America, Dimension Fund Advisors, Jefferies, JPMorgan, UBS, Merrill Lynch, Barclays, Goldman Sachs - average starting salary for business graduates $85,806 with $8,245 signing bonus -",
    hidden_pathway: "Wake Forest's Office of Personal and Career Development (OPCD) is the most comprehensively engaged career office of any national university its size - over 75% of students from every class year actively engage with career resources, compared to under",
    the_room: "78% of Wake Forest students come from out of state - only 22% are North Carolina residents - making it one of the most geographically diverse private universities in the South.",
    lifestyle: "Wake Forest's 340-acre campus is consistently cited among the most beautiful in the ACC - Georgian architecture, the quad, the Wait Chapel.",
    grad_cities: "Charlotte NC (30%) | New York NY (18%) | Washington DC (10%) | Atlanta GA (9%) | Raleigh-Durham NC (8%)."
  },
  "University of Miami": {
    name: "University of Miami",
    location: "Coral Gables, Florida",
    region: "Southeast",
    pipeline: "Finance and Investment Banking (Citi, Goldman Sachs, JPMorgan Chase, Bank of America Merrill Lynch, Morgan Stanley, PwC, Deloitte - Miami is a growing global financial hub for Latin American capital flows), Healthcare and Medicine (UHealth -",
    hidden_pathway: "The University of Miami is the gateway institution for Latin American business, finance, and professional networks - a position that no other university in America occupies.",
    the_room: "Over 50% of University of Miami students come from out of state, with strong representation from the Northeast - New York, New Jersey, and Connecticut are significant feeder states alongside a substan",
    lifestyle: "The University of Miami is the only major research university in America where the campus lifestyle and the city lifestyle are genuinely inseparable.",
    grad_cities: "Miami-South Florida (55%) | New York NY (12%) | Washington DC (7%) | Los Angeles CA (6%) | Latin America and internation"
  },
  "University of Arizona": {
    name: "University of Arizona",
    location: "Tucson, Arizona",
    region: "Southwest",
    pipeline: "Technology and Semiconductors (Intel, IBM, Texas Instruments, Raytheon, Honeywell - Arizona is the second-largest semiconductor manufacturing state in America - ECE and computer science graduates recruited heavily by semiconductor corridor), Optical Sciences and Engineering (Jame",
    hidden_pathway: "The Wyant College of Optical Sciences at the University of Arizona is the number 1 optical sciences and engineering program in the world - a designation it has held for decades with no serious competitor.",
    the_room: "52.7% of first-year students are Arizona residents and 44% are non-residents - with 3.3% international. The top out-of-state feeder states are California (by far the largest), Washington, Colorado, Il",
    lifestyle: "Tucson is a genuinely distinctive college town - a small city of 550,000 with a strong cultural identity shaped by the Sonoran Desert, the University District, and a food and arts",
    grad_cities: "Phoenix-Scottsdale AZ (38%) | Tucson AZ (18%) | Los Angeles CA (9%) | San Francisco CA (7%) | Denver CO (5%)."
  },
  "Arizona State University": {
    name: "Arizona State University",
    location: "Tempe, Arizona",
    region: "Southwest",
    pipeline: "Technology and Semiconductors (Intel, Microsoft, Amazon, IBM, Google, Honeywell, TSMC - ASU is the anchor institution for the $108 billion semiconductor manufacturing build-out in Arizona - Ira A.",
    hidden_pathway: "ASU has been ranked number 1 for innovation by US News and World Report for ten consecutive years - ahead of MIT, Stanford, and Caltech every single year. This is not a vanity ranking.",
    the_room: "61% of ASU students are Arizona residents and 39% are from out of state or international. Total enrollment exceeds 194,000 including online students -",
    lifestyle: "The Tempe campus sits at the center of the Phoenix metro - a city of 5 million people with year-round sun, a booming economy, and a social infrastructure that extends well beyond a",
    grad_cities: "Phoenix-Scottsdale AZ (52%) | Los Angeles CA (10%) | San Francisco CA (7%) | Denver CO (5%) | Dallas TX (4%)."
  },
  "University of Virginia": {
    name: "University of Virginia",
    location: "Charlottesville, Virginia",
    region: "Mid-Atlantic",
    pipeline: "Finance and Consulting (McIntire School of Commerce - 5.5% acceptance rate for Class of 2025 - average starting salary $94,747 - top employers Deloitte, Capital One, KPMG, JPMorgan, Bank of America, Accenture, Bain, FTI Consulting, McKinsey, PwC -",
    hidden_pathway: "The McIntire School of Commerce is the hardest undergraduate business program to gain admission to in America - a 5.5% acceptance rate for the Class of 2025, compared to Wharton's roughly 7% for the entire university.",
    the_room: "Approximately 67% of UVA undergraduates are Virginia residents and 33% are from out of state - with UVA pledged by statute to maintain this two-thirds Virginia majority.",
    lifestyle: "The Lawn is a UNESCO World Heritage Site - designed by Thomas Jefferson, it is arguably the most architecturally significant university campus in America.",
    grad_cities: "Washington DC-Northern Virginia (35%) | New York NY (22%) | Richmond VA (10%) | Boston MA (7%) | Charlotte NC (5%)."
  },
  "Babson College": {
    name: "Babson College",
    location: "Wellesley, Massachusetts",
    region: "New England",
    pipeline: "Entrepreneurship and Venture Capital (the defining career path - Babson alumni have founded thousands of companies generating hundreds of billions in revenue - number 1 entrepreneurship program in America for 29 consecutive years -",
    hidden_pathway: "Every single Babson first-year student - regardless of concentration or interest - creates, launches, and manages a real operating business with seed money from Babson through the Foundations of Management and Entrepreneurship course.",
    the_room: "74% of Babson students come from out of state and 27% are international students - one of the highest international percentages of any business school in America.",
    lifestyle: "Babson's 370-acre suburban campus in Wellesley sits 14 miles west of Boston - close enough to access the city's startup ecosystem, restaurant scene, and cultural institutions, insu",
    grad_cities: "Boston MA (40%) | New York NY (20%) | San Francisco Bay Area CA (12%) | International (15%) | Other US cities (13%)."
  },
  "Boston University": {
    name: "Boston University",
    location: "Boston, Massachusetts",
    region: "New England",
    pipeline: "Finance and Consulting (Amazon, Deloitte, EY, Goldman Sachs, State Street, Fidelity - Boston is the second-largest asset management hub in America after New York - Questrom School of Business average starting salary $75,316), Healthcare and Medicine (Boston Children's Hospital, M",
    hidden_pathway: "BU has the number 1 ranked CTE Center - the Boston University Chronic Traumatic Encephalopathy Center - which is the world's preeminent research institution on brain trauma in athletes. It is not famous as a student attraction.",
    the_room: "87% of BU students come from out of state or from other countries - only 13% are Massachusetts residents. 21% of undergraduates are international, representing students from China, India, South Korea,",
    lifestyle: "BU's campus runs along the Charles River for two miles through the Back Bay and Fenway neighborhoods of Boston -",
    grad_cities: "Boston MA (45%) | New York NY (22%) | Washington DC (8%) | San Francisco CA (7%) | Los Angeles CA (5%)."
  },
  "Dartmouth College": {
    name: "Dartmouth College",
    location: "Hanover, New Hampshire",
    region: "New England",
    pipeline: "Consulting and Finance (Tuck School of Business - MBA median base salary $175,000 - median total compensation $205,000 - consulting 44% of MBA class at $190,000 - financial services 27% - McKinsey, Bain, BCG, Goldman Sachs, JPMorgan, Amazon, Apple, Google -",
    hidden_pathway: "The D-Plan - Dartmouth's quarter system - is the most structurally distinctive academic calendar of any Ivy League institution and is almost entirely misunderstood by families outside the Northeast.",
    the_room: "97% of Dartmouth students come from out of state - only 3% are New Hampshire residents, reflecting that Dartmouth's location in rural Hanover is entirely incidental to its national and international d",
    lifestyle: "Hanover, New Hampshire sits in the Connecticut River Valley surrounded by the White Mountains - skiing at the Dartmouth Skiway, hiking the Appalachian Trail, canoeing on the Connec",
    grad_cities: "New York NY (30%) | Boston MA (15%) | San Francisco CA (13%) | Washington DC (10%) | Chicago IL (8%)."
  },
  "University of Utah": {
    name: "University of Utah",
    location: "Salt Lake City, Utah",
    region: "Mountain West",
    pipeline: "Technology and Software (Adobe, Qualtrics, Microsoft, Domo, Pluralsight, Entrata - Silicon Slopes employs over 155,000 tech workers - Computer Science average starting salary $78,226 -",
    hidden_pathway: "The University of Utah sits at the base of the Wasatch Mountains - 7 world-class ski resorts within 45 minutes of campus, including Park City, Alta, Snowbird, Solitude, Brighton, Deer Valley, and The Canyons.",
    the_room: "Approximately 74% of University of Utah students are Utah residents and 26% are from out of state or international - with growing out-of-state recruitment driven by the Silicon Slopes boom and the Wal",
    lifestyle: "The University of Utah campus sits at 4,674 feet elevation at the base of the Wasatch Mountains, directly above Salt Lake City.",
    grad_cities: "Salt Lake City-Provo UT (58%) | San Francisco CA (9%) | Los Angeles CA (7%) | Denver CO (6%) | Seattle WA (5%)."
  },
  "Georgetown University": {
    name: "Georgetown University",
    location: "Washington, DC",
    region: "Mid-Atlantic",
    pipeline: "Finance and Consulting (McDonough School of Business - undergraduate average starting salary $100,733 for Class of 2024 - highest business school undergraduate average in the database - 60% financial services, 14% consulting -",
    hidden_pathway: "The School of Foreign Service (SFS) is the most politically powerful undergraduate program in American higher education that most families outside the Northeast have never seriously considered.",
    the_room: "98.6% of Georgetown students come from out of state - DC itself supplies only 1.4% of the student body. Students from all 49 states and 123 countries.",
    lifestyle: "The Georgetown neighborhood is one of the most architecturally beautiful urban neighborhoods in America - 18th and 19th century Federal townhouses, the C&O Canal towpath, the Potom",
    grad_cities: "Washington DC (45%) | New York NY (25%) | Boston MA (7%) | San Francisco CA (5%) | International (8%)."
  },
  "Duke University": {
    name: "Duke University",
    location: "Durham, North Carolina",
    region: "Southeast",
    pipeline: "Finance and Consulting (Fuqua School of Business - MBA median base salary $175,000 - consulting 39% of MBA class at $190,000 median - financial services 25% - 20% of MBAs placed at McKinsey-Bain-BCG combined -",
    hidden_pathway: "Duke's Fuqua School of Business places 20% of its MBA class at McKinsey, Bain, and BCG combined - a figure that exceeds several programs conventionally ranked above Fuqua.",
    the_room: "97% of Duke undergraduates come from out of state - only 3% are North Carolina residents by state statute mandate. Top domestic feeder states: New York, Florida, California, Texas, New Jersey.",
    lifestyle: "Duke's 720-acre Gothic campus in Durham is among the most visually stunning in American higher education - the Duke Chapel, the Sarah P.",
    grad_cities: "New York NY (28%) | Washington DC (14%) | San Francisco CA (16%) | Boston MA (10%) | Durham-Raleigh NC (8%)."
  },
  "University of Oregon": {
    name: "University of Oregon",
    location: "Eugene, Oregon",
    region: "Pacific Northwest",
    pipeline: "Technology and Business (Nike, Intel, Amazon, Deloitte, KPMG, U.S. Bank, Microsoft - Portland and Seattle tech corridors - Lundquist College of Business average reported salary $85,592 for Class of 2024), Journalism and Media (School of Journalism and Communication -",
    hidden_pathway: "The Phil Knight Campus for Accelerating Scientific Impact is the hidden pathway that most families have not processed. Phil Knight - Nike co-founder and UO alumnus -",
    the_room: "Approximately 85% of UO students are Oregon residents and 15% are from out of state or international - a heavily in-state profile reflecting UO's role as Oregon's flagship public university.",
    lifestyle: "Eugene sits 60 miles south of the Willamette Valley wine country, 60 miles from the Oregon Coast, and 2 hours from Crater Lake.",
    grad_cities: "Portland OR (30%) | Seattle WA (20%) | San Francisco CA (12%) | Eugene OR (10%) | Los Angeles CA (8%)."
  },
  "Stanford University": {
    name: "Stanford University",
    location: "Stanford (Palo Alto), California",
    region: "West Coast",
    pipeline: "Technology and Artificial Intelligence (Google, Apple, Meta, Microsoft, NVIDIA, Amazon, Salesforce, Oracle - Stanford graduates founded or co-founded Google, Yahoo, Instagram, Snapchat, Netflix, PayPal, WhatsApp, LinkedIn, Hewlett-Packard, and hundreds of other companies -",
    hidden_pathway: "Stanford's startup and venture capital ecosystem is the most consequential hidden pathway in American higher education - and it is only hidden to families who have not been inside it.",
    the_room: "Approximately 56% of Stanford students are from California and 44% from out of state or international. 10% are international undergraduates.",
    lifestyle: "The Stanford campus occupies 8,180 acres in the Santa Clara Valley between the Santa Cruz Mountains and the San Francisco Bay -",
    grad_cities: "San Francisco Bay Area CA (55%) | New York NY (15%) | Seattle WA (7%) | Los Angeles CA (6%) | International (8%)."
  },
  "Williams College": {
    name: "Williams College",
    location: "Williamstown, Massachusetts",
    region: "Northeast",
    pipeline: "Finance and Investment Management (Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, KKR, Bridgewater Associates recruit Williams at disproportionate rates relative to enrollment -",
    hidden_pathway: "Williams is the only liberal arts college where Williamstown itself - a small town in the Berkshires with no industry, no city, no distraction - is the mechanism of social capital formation. There is no city to escape to.",
    the_room: "Williams enrolls approximately 2,000 undergraduates from all 50 states and 50+ countries. 57% receive financial aid. The student body is genuinely economically diverse -",
    lifestyle: "Williamstown, Massachusetts is one of the most remote and beautiful college settings in America. The Berkshires in fall are extraordinary. The Clark Art Institute is on campus -",
    grad_cities: "New York NY (35%) | Boston MA (20%) | Washington DC (12%) | San Francisco CA (8%) | International (6%)."
  },
  "Amherst College": {
    name: "Amherst College",
    location: "Amherst, Massachusetts",
    region: "Northeast",
    pipeline: "Finance and Investment Management (Wall Street - Goldman Sachs, Morgan Stanley, Blackstone, Citadel recruit Amherst at rates disproportionate to its 1,900-student enrollment), Consulting (McKinsey, Bain, BCG -",
    hidden_pathway: "Amherst has no core curriculum - it is the only highly selective liberal arts college in America with zero distribution requirements. Every course is an elective. Every student designs their own education from the first day of freshman year.",
    the_room: "Amherst enrolls approximately 1,900 undergraduates - smaller than Williams. 60% of students receive financial aid. The open curriculum self-selects for intellectually confident, self-directed students",
    lifestyle: "Western Massachusetts in a college town surrounded by four other colleges. The Pioneer Valley has a specific culture: intellectual, politically engaged, outdoorsy, and socially sop",
    grad_cities: "New York NY (38%) | Boston MA (18%) | Washington DC (11%) | San Francisco CA (9%) | International (5%)."
  },
  "Bowdoin College": {
    name: "Bowdoin College",
    location: "Brunswick, Maine",
    region: "Northeast",
    pipeline: "Finance and Investment Management (Wall Street - Goldman Sachs, Morgan Stanley, Blackstone, Two Sigma, D.E. Shaw recruit Bowdoin at rates dramatically disproportionate to its 1,800-student enrollment), Consulting (McKinsey, Bain, BCG, Deloitte -",
    hidden_pathway: "Bowdoin's location in Brunswick, Maine - 25 miles north of Portland, on the coast of the Atlantic Ocean - is the hidden architecture of the social capital formation. There is no city. There is no distraction.",
    the_room: "Bowdoin enrolls approximately 1,800 undergraduates - among the smallest of any highly selective college in America. 49% of students receive financial aid.",
    lifestyle: "Brunswick, Maine is remote, beautiful, and cold. The Atlantic coast, the working harbor at Portland, Acadia National Park, and the White Mountains of New Hampshire are the physical",
    grad_cities: "New York NY (30%) | Boston MA (22%) | Washington DC (12%) | San Francisco CA (7%) | International (4%)."
  },
  "Middlebury College": {
    name: "Middlebury College",
    location: "Middlebury, Vermont",
    region: "Northeast",
    pipeline: "Finance and Investment Management (Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, hedge funds and private equity recruit Middlebury at rates disproportionate to its 2,700-student enrollment), Consulting (McKinsey, Bain, BCG, Deloitte -",
    hidden_pathway: "Middlebury's Language Schools are the most intensive and prestigious immersive language programs in America - and almost no family outside New England knows they exist as an undergraduate advantage.",
    the_room: "Middlebury enrolls approximately 2,700 undergraduates - slightly larger than Williams or Bowdoin but still intimate by any measure. 44% of students receive financial aid.",
    lifestyle: "Middlebury, Vermont is one of the most beautiful college settings in America - the Green Mountains to the east, the Adirondacks visible across Lake Champlain to the west, and a cla",
    grad_cities: "New York NY (28%) | Boston MA (16%) | Washington DC (14%) | San Francisco CA (8%) | International (10%)."
  },
  "Pomona College": {
    name: "Pomona College",
    location: "Claremont, California",
    region: "West Coast",
    pipeline: "Finance and Investment Management (Wall Street - Goldman Sachs, Morgan Stanley, Blackstone, leading hedge funds recruit Pomona at rates disproportionate to its 1,700-student enrollment), Consulting (McKinsey, Bain, BCG -",
    hidden_pathway: "The Claremont Consortium - five colleges sharing one campus footprint - gives Pomona students access to Harvey Mudd (top engineering and CS program in America), Claremont McKenna (top government and economics program among liberal arts colleges), Scr",
    the_room: "Pomona enrolls approximately 1,700 undergraduates - the smallest of the five Claremont Colleges and the anchor of the consortium. 57% of students receive financial aid.",
    lifestyle: "Claremont is a small city at the base of the San Gabriel Mountains with a genuine college town identity - the Claremont Village, the Metrolink station connecting to downtown LA, an",
    grad_cities: "Los Angeles CA (25%) | San Francisco CA (20%) | New York NY (18%) | Washington DC (8%) | International (6%)."
  },
  "University of Chicago": {
    name: "University of Chicago",
    location: "Chicago, Illinois",
    region: "Midwest",
    pipeline: "Finance and Economics (Wall Street - Goldman Sachs, Morgan Stanley, Citadel, Two Sigma, Jane Street, D.E. Shaw - Chicago is the birthplace of modern financial economics and the alumni network in quantitative finance and hedge funds is unmatched), Consulting (McKinsey, Bain, BCG,",
    hidden_pathway: "The Chicago approach to education - the Core Curriculum - is the most intellectually demanding required curriculum in American higher education and almost no family outside academia understands what it actually produces.",
    the_room: "UChicago enrolls approximately 7,000 undergraduates - larger than the liberal arts colleges but intimate relative to research university peers. 52% of students receive financial aid.",
    lifestyle: "Hyde Park, Chicago - a neighborhood on the South Side of Lake Michigan that is simultaneously a world-class university campus and a complex urban environment.",
    grad_cities: "Chicago IL (35%) | New York NY (28%) | San Francisco CA (10%) | Washington DC (8%) | International (8%)."
  },
  "Penn State University": {
    name: "Penn State University",
    location: "University Park, Pennsylvania",
    region: "Northeast",
    pipeline: "Business and Finance (Smeal College of Business - top-25 nationally - Wall Street, Big 4 accounting, corporate finance, supply chain management - Ernst and Young, PwC, Deloitte, KPMG recruit Penn State at volume higher than almost any other university in America), Engineering (Co",
    hidden_pathway: "The Penn State alumni network is the most tribally loyal of any university in America - and this tribal loyalty is the hidden pathway that no ranking captures.",
    the_room: "Penn State enrolls approximately 47,000 undergraduates at University Park - one of the largest residential campuses in America.",
    lifestyle: "State College, Pennsylvania is one of the most self-contained college towns in America - a small city of 42,000 people that exists entirely because of Penn State.",
    grad_cities: "Philadelphia PA (22%) | New York NY (18%) | Washington DC (12%) | Pittsburgh PA (10%) | Chicago IL (7%)."
  },
  "Stevens Institute of Technology": {
    name: "Stevens Institute of Technology",
    location: "Hoboken, New Jersey",
    region: "Northeast",
    pipeline: "Quantitative Finance and Financial Engineering (Wall Street - Goldman Sachs, JPMorgan, Morgan Stanley, Citadel, Two Sigma, Jane Street, Bloomberg - Stevens School of Business quantitative finance program places graduates into the most mathematically demanding roles in American fi",
    hidden_pathway: "Stevens sits on a bluff in Hoboken, New Jersey with an unobstructed view of the Manhattan skyline - and the PATH train station is a 5-minute walk from the center of campus.",
    the_room: "Stevens enrolls approximately 3,800 undergraduates - small enough for genuine faculty access, large enough for meaningful peer diversity.",
    lifestyle: "Hoboken is one of the most livable small cities in America - a square mile of brownstones, restaurants, bars, and waterfront parks directly across the Hudson from Manhattan.",
    grad_cities: "New York NY (55%) | Newark-Jersey City NJ (15%) | Philadelphia PA (8%) | Boston MA (5%) | International (7%)."
  },
  "UC San Diego": {
    name: "UC San Diego",
    location: "La Jolla, California",
    region: "West Coast",
    pipeline: "Biotechnology and Life Sciences (top-5 nationally for biological sciences - Genentech, Illumina, Pfizer, Johnson and Johnson, Eli Lilly, Thermo Fisher Scientific - San Diego is the third largest biotech cluster in America behind Boston and San Francisco and UCSD is its institutio",
    hidden_pathway: "Scripps Institution of Oceanography gives UCSD undergraduates access to the most prestigious oceanographic and climate research institution in the world -",
    the_room: "UCSD enrolls approximately 33,000 undergraduates - a large research university with the research infrastructure to match. The student body is approximately 45% Asian American -",
    lifestyle: "La Jolla is one of the most physically beautiful university settings in America - cliffs above the Pacific Ocean, the Black's Beach trail, the Torrey Pines State Reserve adjacent t",
    grad_cities: "San Diego CA (35%) | San Francisco-Bay Area CA (20%) | Los Angeles CA (12%) | Seattle WA (6%) | International (8%)."
  },
  "Massachusetts Institute of Technology": {
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, Massachusetts",
    region: "Northeast",
    pipeline: "Computer Science and Artificial Intelligence (CSAIL - MIT Computer Science and Artificial Intelligence Laboratory is the largest research laboratory at MIT and one of the most influential research institutions in the world -",
    hidden_pathway: "MIT's Independent Activities Period - IAP - is a four-week January term where the entire normal academic structure dissolves and students can take any course, launch any project, travel anywhere, or pursue any research interest with full institutiona",
    the_room: "MIT enrolls approximately 4,600 undergraduates - smaller than the liberal arts colleges in terms of feel but structured as a research university. 58% of students receive need-based financial aid.",
    lifestyle: "Cambridge, Massachusetts is one of the great intellectual cities of the world - Harvard is across the street, the Charles River is the southern border of campus, Boston is 15 minut",
    grad_cities: "Boston-Cambridge MA (30%) | San Francisco-Bay Area CA (25%) | New York NY (18%) | Seattle WA (7%) | International (10%)."
  },
  "Georgia Institute of Technology": {
    name: "Georgia Institute of Technology",
    location: "Atlanta, Georgia",
    region: "Southeast",
    pipeline: "Computer Science and Software Engineering (top-5 nationally - Google, Microsoft, Apple, Amazon, Meta, Salesforce, NCR, Cox Enterprises - Georgia Tech CS graduates are the most recruited in the Southeast and among the most recruited in America -",
    hidden_pathway: "Georgia Tech's Co-op program is one of the oldest and largest cooperative education programs in America - and it is the hidden pathway that explains why Georgia Tech graduates earn more on average at graduation than graduates of schools ranked above",
    the_room: "Georgia Tech enrolls approximately 17,000 undergraduates - large enough for research university infrastructure, small enough to maintain engineering cohort culture.",
    lifestyle: "Atlanta's Midtown neighborhood is one of the great American university locations - Piedmont Park is six blocks from campus, the Fox Theatre is four blocks away, the High Museum of",
    grad_cities: "Atlanta GA (40%) | Washington DC (12%) | New York NY (10%) | San Francisco-Bay Area CA (8%) | Charlotte NC (5%)."
  },
  "Rose-Hulman Institute of Technology": {
    name: "Rose-Hulman Institute of Technology",
    location: "Terre Haute, Indiana",
    region: "Midwest",
    pipeline: "Engineering (top-1 undergraduate engineering program in America as ranked by US News for 25+ consecutive years - mechanical, electrical, chemical, civil, biomedical, computer science, software engineering -",
    hidden_pathway: "Rose-Hulman has no graduate students. This is the hidden pathway that no ranking captures and no family outside the Midwest understands until they visit.",
    the_room: "Rose-Hulman enrolls approximately 2,000 undergraduates - the smallest institution in the technical school group and one of the smallest in the entire database.",
    lifestyle: "Terre Haute, Indiana is not a destination city - and that is precisely the point. The Rose-Hulman campus is self-contained, self-sufficient, and socially concentrated in the same w",
    grad_cities: "Indianapolis IN (25%) | Chicago IL (18%) | Cincinnati OH (12%) | St. Louis MO (8%) | Houston TX (6%)."
  },
  "California Institute of Technology": {
    name: "California Institute of Technology",
    location: "Pasadena, California",
    region: "West Coast",
    pipeline: "Physics and Astrophysics (top-1 nationally - Caltech faculty and alumni have produced more Nobel Prize winners per capita than any institution in the world - NASA Jet Propulsion Laboratory is managed by Caltech and sits adjacent to campus -",
    hidden_pathway: "JPL - the NASA Jet Propulsion Laboratory - is managed by Caltech and located 4 miles from campus in the Arroyo Seco canyon above Pasadena. Caltech undergraduates can apply for paid research positions at JPL from sophomore year.",
    the_room: "Caltech enrolls approximately 948 undergraduates - the smallest research university in the database and one of the smallest in the world at this level of research intensity.",
    lifestyle: "Pasadena, California is one of the most civilized small cities in America - the Rose Bowl is walking distance, the Huntington Library and Gardens are 2 miles away, Old Town Pasaden",
    grad_cities: "Los Angeles CA (30%) | San Francisco-Bay Area CA (25%) | Boston-Cambridge MA (15%) | International (12%) | Washington DC"
  },
  "Carnegie Mellon University": {
    name: "Carnegie Mellon University",
    location: "Pittsburgh, Pennsylvania",
    region: "Northeast",
    pipeline: "Computer Science and Artificial Intelligence (top-1 nationally - the School of Computer Science is the most influential CS institution in America for artificial intelligence, robotics, machine learning, and human-computer interaction -",
    hidden_pathway: "CMU's School of Drama is the only top-5 drama program in America located inside a top-5 CS and engineering university - and the collision between these two worlds is the hidden pathway that produces something no peer institution can replicate.",
    the_room: "CMU enrolls approximately 7,000 undergraduates across all colleges - larger than Caltech and Rose-Hulman but intimate relative to Georgia Tech or Penn State.",
    lifestyle: "Pittsburgh's Oakland neighborhood - the university district anchored by CMU and the University of Pittsburgh - is one of the great American academic neighborhoods.",
    grad_cities: "San Francisco-Bay Area CA (35%) | New York NY (20%) | Pittsburgh PA (12%) | Seattle WA (8%) | International (10%)."
  },
  "Colorado School of Mines": {
    name: "Colorado School of Mines",
    location: "Golden, Colorado",
    region: "West Coast",
    pipeline: "Energy Engineering and Petroleum Engineering (top-3 nationally for petroleum engineering - ExxonMobil, Chevron, ConocoPhillips, BP, Halliburton, Schlumberger, Pioneer Natural Resources recruit Mines at volume and at preferential rates that reflect decades of institutional relatio",
    hidden_pathway: "Mineral economics is a discipline that exists at only a handful of universities in the world and Mines is its American home. As the energy transition has accelerated global demand for lithium, cobalt, nickel, copper, and rare earth elements -",
    the_room: "Mines enrolls approximately 5,500 undergraduates - mid-sized relative to the technical school group. The student body is approximately 72% male reflecting the engineering and energy industry identity.",
    lifestyle: "Golden, Colorado is one of the great American college town settings - a small city of 20,000 at the base of the Rocky Mountain foothills where Clear Creek runs through downtown and",
    grad_cities: "Denver-Boulder CO (38%) | Houston TX (22%) | Calgary Canada (8%) | Dallas TX (7%) | International Energy Corridors (6%)."
  },
  "Harvey Mudd College": {
    name: "Harvey Mudd College",
    location: "Claremont, California",
    region: "West Coast",
    pipeline: "Computer Science and Software Engineering (top-5 nationally for undergraduate CS - Google, Apple, Microsoft, Meta, Amazon, Jane Street, Two Sigma, Citadel recruit Harvey Mudd CS graduates at starting salaries that are among the highest of any undergraduate institution in America",
    hidden_pathway: "Harvey Mudd is a member of the Claremont Consortium - which means every Harvey Mudd student has full cross-registration access to Pomona College, Claremont McKenna, Scripps, and Pitzer simultaneously.",
    the_room: "Harvey Mudd enrolls approximately 902 undergraduates - the second smallest institution in the database after Caltech, and the smallest engineering-focused college in America at this level of selectivi",
    lifestyle: "Claremont, California - the same setting as Pomona College - with all the physical advantages of Southern California: 280+ days of sunshine, Angeles National Forest 20 minutes nort",
    grad_cities: "San Francisco-Bay Area CA (40%) | Los Angeles CA (20%) | New York NY (15%) | Seattle WA (8%) | International (5%)."
  },
  "Worcester Polytechnic Institute": {
    name: "Worcester Polytechnic Institute",
    location: "Worcester, Massachusetts",
    region: "Northeast",
    pipeline: "Computer Science and Software Engineering (top-25 nationally - Google, Microsoft, Amazon, Raytheon, Fidelity Investments, Liberty Mutual, major defense and financial technology companies recruit WPI at volume -",
    hidden_pathway: "WPI's project-based education model is the most radical departure from traditional engineering education in the technical school group - and almost no family outside New England knows it exists.",
    the_room: "WPI enrolls approximately 4,700 undergraduates - mid-sized relative to the technical group. The student body is approximately 65% male reflecting the engineering concentration.",
    lifestyle: "Worcester is a mid-sized New England city of 200,000 - the second largest city in Massachusetts after Boston -",
    grad_cities: "Boston MA (35%) | New York NY (15%) | Hartford CT (10%) | Worcester MA (8%) | San Francisco CA (6%)."
  },
  "University of Washington": {
    name: "University of Washington",
    location: "Seattle, Washington",
    region: "Pacific Northwest",
    pipeline: "Computer Science and Software Engineering (top-5 nationally - the Paul G. Allen School of Computer Science and Engineering is the most influential CS program on the West Coast outside Stanford -",
    hidden_pathway: "The WWAMI program is the most consequential medical education innovation in American higher education that no family outside the Pacific Northwest has heard of. WWAMI stands for Washington, Wyoming, Alaska, Montana, and Idaho -",
    the_room: "UW enrolls approximately 35,000 undergraduates - a large research university with the research infrastructure to match. The student body is approximately 25% Asian American reflecting the Seattle metr",
    lifestyle: "Seattle is one of the great American cities for young professionals - consistently ranked among the top cities for quality of life, outdoor access, and technology career opportunit",
    grad_cities: "Seattle WA (45%) | San Francisco-Bay Area CA (18%) | Portland OR (8%) | New York NY (6%) | International (10%)."
  },
  "University of Pennsylvania": {
    name: "University of Pennsylvania",
    location: "Philadelphia, Pennsylvania",
    region: "Northeast",
    pipeline: "Finance and Investment Banking (Wharton School - top-1 undergraduate business program in America - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, KKR, Apollo, Carlyle recruit Wharton at volume and at compensation levels that set the ceiling for every other undergraduate bus",
    hidden_pathway: "Wharton is the only top-5 undergraduate business program located inside an Ivy League university - and the dual degree programs this creates are the hidden pathways that no peer school can replicate.",
    the_room: "Penn enrolls approximately 10,000 undergraduates across four undergraduate schools - Wharton, College of Arts and Sciences, Penn Engineering, and Penn Nursing.",
    lifestyle: "University City in West Philadelphia is a genuine urban neighborhood that has transformed alongside Penn's growth into one of the most research-active campuses in America.",
    grad_cities: "New York NY (35%) | Philadelphia PA (18%) | San Francisco CA (12%) | Washington DC (8%) | Boston MA (6%)."
  },
  "Princeton University": {
    name: "Princeton University",
    location: "Princeton, New Jersey",
    region: "Northeast",
    pipeline: "Finance and Investment Management (Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, Citadel, Two Sigma - Princeton mathematics and economics graduates are among the most recruited profiles in quantitative finance in America), Consulting (McKinsey, Bain, BCG -",
    hidden_pathway: "Princeton has no professional schools - no law school, no business school, no medical school, no journalism school. Every Princeton undergraduate is a liberal arts student regardless of concentration.",
    the_room: "Princeton enrolls approximately 5,500 undergraduates - mid-sized among the Ivies. The student body is assembled from all 50 states and 100+ countries with heavy representation from New York, New Jerse",
    lifestyle: "Princeton, New Jersey is one of the great American college towns - small, walkable, architecturally magnificent, and organized entirely around the university.",
    grad_cities: "New York NY (32%) | Washington DC (18%) | Boston MA (10%) | San Francisco CA (8%) | International (8%)."
  },
  "Brown University": {
    name: "Brown University",
    location: "Providence, Rhode Island",
    region: "Northeast",
    pipeline: "Consulting (McKinsey, Bain, BCG - Brown places into MBB at per-capita rates among the highest of any Ivy League university), Finance and Investment Banking (Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, major private equity and hedge funds -",
    hidden_pathway: "The Open Curriculum is Brown's defining structural feature and the hidden pathway that makes Brown categorically different from every other Ivy League university.",
    the_room: "Brown enrolls approximately 7,000 undergraduates - mid-sized among the Ivies. The student body is assembled from all 50 states and 100+ countries with heavy representation from New York, California, M",
    lifestyle: "Providence, Rhode Island is one of the most underrated college cities in America - a small city of 180,000 with a genuine arts and food culture, a waterfront district, and the Wate",
    grad_cities: "New York NY (30%) | Boston MA (16%) | San Francisco CA (14%) | Washington DC (8%) | Providence RI (5%)."
  },
  "Harvard University": {
    name: "Harvard University",
    location: "Cambridge, Massachusetts",
    region: "Northeast",
    pipeline: "Finance and Investment Banking (Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, KKR, Apollo - Harvard places into every major financial institution at volume and at the most senior levels - Harvard Business School MBA median base salary $175,000 -",
    hidden_pathway: "Harvard's tutorial system - one-on-one or small group instruction with faculty or advanced PhD students in every concentration - is the hidden educational architecture that no peer institution replicates at scale.",
    the_room: "Harvard enrolls approximately 7,000 undergraduates - mid-sized among the Ivies and small relative to its global footprint. 55% of students receive financial aid.",
    lifestyle: "Cambridge, Massachusetts is one of the great intellectual cities of the world - MIT is across the river, Boston is 15 minutes by Red Line, and the concentration of universities, ho",
    grad_cities: "New York NY (25%) | Boston-Cambridge MA (20%) | Washington DC (15%) | San Francisco CA (10%) | International (12%)."
  },
  "Yale University": {
    name: "Yale University",
    location: "New Haven, Connecticut",
    region: "Northeast",
    pipeline: "Law (Yale Law School - top-1 nationally and arguably the most prestigious law school in the world - Supreme Court clerks, federal judiciary, BigLaw, constitutional law, public interest law -",
    hidden_pathway: "Yale's residential college system is the hidden social architecture that makes Yale structurally different from every other Ivy League university - and most families on campus tours understand it as a housing arrangement rather than as the social cap",
    the_room: "Yale enrolls approximately 6,500 undergraduates - slightly smaller than Harvard. 53% of students receive financial aid. The residential college system creates 14 distinct sub-communities within the un",
    lifestyle: "New Haven, Connecticut has been unfairly maligned as a college city for decades - and Yale's investment in the city has transformed it into a genuinely vibrant urban environment wi",
    grad_cities: "New York NY (32%) | Washington DC (16%) | Boston MA (10%) | Los Angeles CA (7%) | International (10%)."
  },
  "Cornell University": {
    name: "Cornell University",
    location: "Ithaca, New York",
    region: "Northeast",
    pipeline: "Engineering (College of Engineering - top-10 nationally - one of the largest and most comprehensive engineering programs in the Ivy League - computer science, electrical, mechanical, civil, chemical, biomedical, materials, aerospace -",
    hidden_pathway: "Cornell is the only Ivy League university with seven undergraduate colleges admitting students to specific programs - not to a general arts and sciences program with a major declared later.",
    the_room: "Cornell enrolls approximately 15,000 undergraduates - the largest of the Ivy League universities and significantly larger than Harvard, Yale, or Princeton.",
    lifestyle: "Ithaca, New York is remote - 4 hours from New York City, 5 hours from Boston - and that remoteness is the social intensifier.",
    grad_cities: "New York NY (30%) | San Francisco CA (15%) | Boston MA (10%) | Washington DC (8%) | Ithaca-upstate NY (5%)."
  },
  "Columbia University": {
    name: "Columbia University",
    location: "New York City, New York",
    region: "Northeast",
    pipeline: "Finance and Investment Banking (Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, Citadel - Columbia's location in Manhattan means recruiters walk across the street rather than flying in -",
    hidden_pathway: "Columbia's Core Curriculum is the most famous required curriculum in American higher education - and it is the opposite of Brown's open curriculum and Amherst's no-requirements approach.",
    the_room: "Columbia enrolls approximately 9,000 undergraduates across Columbia College and the Fu Foundation School of Engineering - mid-sized among the Ivies.",
    lifestyle: "Morningside Heights in Upper Manhattan - 116th Street and Broadway - is Columbia's neighborhood, and it sits between Harlem to the east, the Upper West Side to the south, and Washi",
    grad_cities: "New York NY (55%) | Washington DC (10%) | San Francisco CA (8%) | Boston MA (5%) | International (10%)."
  },
  "Gonzaga University": {
    name: "Gonzaga University",
    location: "Spokane, Washington",
    region: "West Coast",
    pipeline: "Business and Finance (Gonzaga School of Business Administration - top-50 nationally - accounting, finance, marketing, management - major Pacific Northwest employers including Amazon, Microsoft, Boeing, REI, Starbucks, Costco, Nordstrom recruit Gonzaga at preferential rates reflec",
    hidden_pathway: "Gonzaga's basketball program is the most consequential hidden pathway in the database for a specific reason that has nothing to do with sports: the national visibility of Gonzaga men's basketball -",
    the_room: "Gonzaga enrolls approximately 5,000 undergraduates - intimate relative to flagship state universities and appropriately sized for the Jesuit model of individual student formation.",
    lifestyle: "Spokane, Washington is a mid-sized city of 230,000 in the Inland Northwest - surrounded by the Palouse wheat fields to the south, the Cascades to the west, and the Rocky Mountain f",
    grad_cities: "Seattle WA (25%) | Spokane WA (15%) | Portland OR (10%) | San Francisco CA (8%) | Los Angeles CA (7%)."
  },
  "Northwestern University": {
    name: "Northwestern University",
    location: "Evanston, Illinois",
    region: "Midwest",
    pipeline: "Journalism and Media (Medill School of Journalism - top-1 nationally - the New York Times, Washington Post, Wall Street Journal, NBC, ABC, CBS, CNN, major digital media companies, and every major advertising and public relations firm recruit Medill graduates with a priority that",
    hidden_pathway: "Northwestern's quarter system - the university runs on four 10-week quarters rather than two semesters - is the hidden educational architecture that produces a specific and valuable graduate profile.",
    the_room: "Northwestern enrolls approximately 8,000 undergraduates across six undergraduate schools - Weinberg College of Arts and Sciences, McCormick School of Engineering, Medill, School of Communication, Bien",
    lifestyle: "Evanston, Illinois is a small city of 75,000 immediately north of Chicago on the Lake Michigan shoreline - close enough to Chicago to access the city's full professional and cultur",
    grad_cities: "Chicago IL (35%) | New York NY (25%) | San Francisco CA (10%) | Washington DC (7%) | Los Angeles CA (6%)."
  },
  "University of Denver": {
    name: "University of Denver",
    location: "Denver, Colorado",
    region: "West Coast",
    pipeline: "Business and Finance (Daniels College of Business - top-40 nationally - accounting, finance, real estate, hospitality management, marketing - Ernst and Young, KPMG, Deloitte, PwC, major Denver financial services and real estate companies recruit Daniels at volume -",
    hidden_pathway: "The Josef Korbel School of International Studies is the hidden pathway that no Southern California family encounters on a standard college search - and it is one of the most consequential international affairs programs in America.",
    the_room: "DU enrolls approximately 6,000 undergraduates - intimate relative to flagship state universities and appropriately sized for the private university formation model.",
    lifestyle: "Denver, Colorado is one of the great American cities for young people in the 2020s - consistently ranked among the top cities for quality of life, outdoor recreation access, and ca",
    grad_cities: "Denver CO (45%) | Washington DC (12%) | New York NY (8%) | San Francisco CA (6%) | International (8%)."
  },
  "Elon University": {
    name: "Elon University",
    location: "Elon, North Carolina",
    region: "Southeast",
    pipeline: "Communications and Journalism (School of Communications - top-15 nationally - the most experiential communications program in America - NBC, ABC, CBS, CNN, major advertising agencies, public relations firms, and digital media companies recruit Elon communications graduates at rat",
    hidden_pathway: "Elon's Experiential Learning requirement is the hidden pathway that explains why Elon communications graduates get hired above peers from larger and more recognized programs.",
    the_room: "Elon enrolls approximately 7,000 undergraduates - mid-sized and appropriate for the experiential learning model that requires individual placement infrastructure for every student.",
    lifestyle: "Elon, North Carolina is a small town of 12,000 that exists in genuine symbiosis with the university - the historic Elon village, the coffee shops, and the restaurants of downtown E",
    grad_cities: "Charlotte NC (18%) | Raleigh-Durham NC (15%) | Washington DC (10%) | New York NY (10%) | Atlanta GA (8%)."
  },
  "Fordham University": {
    name: "Fordham University",
    location: "New York City, New York",
    region: "Northeast",
    pipeline: "Finance and Investment Banking (Gabelli School of Business - top-50 nationally - Wall Street - Goldman Sachs, JPMorgan, Morgan Stanley, Blackstone, major hedge funds and private equity firms recruit Fordham at volume reflecting the physical proximity advantage -",
    hidden_pathway: "Fordham has two campuses in New York City - the Rose Hill campus in the Bronx (the historic Jesuit campus with Gothic architecture and a genuine residential college feel) and the Lincoln Center campus in Midtown Manhattan (12 blocks from Wall Street",
    the_room: "Fordham enrolls approximately 10,000 undergraduates across both campuses. The student body is heavily New York-weighted - New York, New Jersey, Connecticut, and Massachusetts are the dominant feeder s",
    lifestyle: "Two campuses, two completely different New York experiences. Rose Hill in the Bronx is one of the most beautiful traditional college campuses in New York City -",
    grad_cities: "New York NY (65%) | Boston MA (6%) | Washington DC (5%) | Los Angeles CA (4%) | International (5%)."
  },
  "University of Kansas": {
    name: "University of Kansas",
    location: "Lawrence, Kansas",
    region: "Midwest",
    pipeline: "Business and Finance (School of Business - top-75 nationally - accounting, finance, marketing, supply chain management - Sprint, Garmin, Cerner, H&R Block, major Kansas City and regional Midwest employers recruit KU at volume -",
    hidden_pathway: "The William Allen White School of Journalism is named for one of the most consequential journalists in American history - the Pulitzer Prize-winning editor of the Emporia Gazette whose 1896 editorial What's the Matter with Kansas made him a national",
    the_room: "KU enrolls approximately 19,000 undergraduates - a mid-sized flagship with enough scale for research university infrastructure and enough intimacy for meaningful undergraduate community.",
    lifestyle: "Lawrence, Kansas is one of the great American college towns - a city of 100,000 built on a hill above the Kaw River, with Massachusetts Street (Mass Street) as one of the most vibr",
    grad_cities: "Kansas City MO-KS (40%) | Wichita KS (12%) | Chicago IL (8%) | Dallas TX (6%) | Denver CO (5%)."
  },
  "University of Missouri": {
    name: "University of Missouri",
    location: "Columbia, Missouri",
    region: "Midwest",
    pipeline: "Journalism and Media (Missouri School of Journalism - top-1 nationally and the oldest journalism school in the world - the school that invented the Missouri Method - learning journalism by doing journalism in real newsrooms from day one -",
    hidden_pathway: "The Missouri Method is the hidden pathway that makes Mizzou journalism categorically different from every peer journalism program in America - and it is the reason the Missouri School of Journalism has been ranked #1 in the world for most of its 117-",
    the_room: "Mizzou enrolls approximately 22,000 undergraduates - a mid-sized SEC flagship with enough scale for research university infrastructure and genuine Big 12 and now SEC athletic culture.",
    lifestyle: "Columbia, Missouri sits at the geographic center of the state - equidistant between Kansas City and St. Louis, in the rolling hills of central Missouri where the Ozark Plateau meet",
    grad_cities: "Kansas City MO (25%) | St. Louis MO (22%) | Chicago IL (8%) | Columbia MO (7%) | Dallas TX (5%)."
  },
  "University of Arkansas": {
    name: "University of Arkansas",
    location: "Fayetteville, Arkansas",
    region: "Southeast",
    pipeline: "Business and Finance (Walton College of Business - top-40 nationally and the most consequential business school name in American retail - Sam Walton founded Walmart in Arkansas and the Walton Family Foundation has invested over $300 million in the business school that bears his n",
    hidden_pathway: "The Walmart supplier ecosystem is the hidden pathway that makes Walton College categorically different from every peer business school in America - and it is the pathway that no ranking captures. Every major consumer goods company in the world -",
    the_room: "UA enrolls approximately 22,000 undergraduates - a mid-sized SEC flagship with the full research university infrastructure and a Big 12-to-SEC transition athletic profile that has elevated national vi",
    lifestyle: "Fayetteville, Arkansas sits in the Ozark Mountains of northwest Arkansas - a city of 90,000 with a genuine college town identity built around Dickson Street, the Fayetteville Farme",
    grad_cities: "Bentonville-Rogers AR (35%) | Little Rock AR (12%) | Dallas TX (10%) | Kansas City MO (6%) | Chicago IL (5%)."
  },
  "University of Tennessee": {
    name: "University of Tennessee",
    location: "Knoxville, Tennessee",
    region: "Southeast",
    pipeline: "Business and Finance (Haslam College of Business - top-40 nationally and one of the most consequential business schools in the SEC - supply chain management, logistics, finance, accounting, marketing -",
    hidden_pathway: "Oak Ridge National Laboratory - 25 miles east of campus on the Clinch River - is the hidden pathway that makes UT engineering categorically different from every peer SEC flagship in the database.",
    the_room: "UT enrolls approximately 23,000 undergraduates - a large SEC flagship with the full research university infrastructure and one of the most passionate athletic cultures in college sports.",
    lifestyle: "Knoxville, Tennessee sits in the Great Appalachian Valley between the Cumberland Plateau to the west and the Great Smoky Mountains to the east -",
    grad_cities: "Nashville TN (25%) | Knoxville TN (18%) | Atlanta GA (10%) | Charlotte NC (7%) | Washington DC (5%)."
  },
  "University of Colorado Boulder": {
    name: "University of Colorado Boulder",
    location: "Boulder, Colorado",
    region: "West Coast",
    pipeline: "Aerospace and Aerospace Engineering (top-5 nationally - CU Boulder has produced more astronauts than any public university in America and is the only flagship university in the database with a dedicated aerospace engineering program embedded in one of the most consequential aeros",
    hidden_pathway: "The Laboratory for Atmospheric and Space Physics - LASP - is the hidden pathway that makes CU Boulder's space science program categorically different from every peer public university in the database.",
    the_room: "CU Boulder enrolls approximately 30,000 undergraduates - a large flagship with the full research university infrastructure and one of the most distinctive campus cultures in the database.",
    lifestyle: "Boulder, Colorado is consistently ranked among the happiest, healthiest, and most livable cities in America - and the physical setting explains why.",
    grad_cities: "Denver-Boulder CO (45%) | San Francisco CA (10%) | Seattle WA (6%) | Los Angeles CA (5%) | Washington DC (5%)."
  },
  "Colorado State University": {
    name: "Colorado State University",
    location: "Fort Collins, Colorado",
    region: "West Coast",
    pipeline: "Veterinary Medicine and Biomedical Sciences (College of Veterinary Medicine and Biomedical Sciences - top-5 nationally and one of the most comprehensive veterinary programs in the world -",
    hidden_pathway: "CSU's Engines and Energy Conversion Laboratory and the Colorado State University Engines Laboratory are the hidden pathways in the engineering program that most families never find -",
    the_room: "CSU enrolls approximately 26,000 undergraduates - a large flagship with the full research university infrastructure and a Ram athletic identity in the Mountain West Conference.",
    lifestyle: "Fort Collins, Colorado is consistently ranked among the most livable small cities in America - a city of 170,000 at the base of the Cache la Poudre River canyon with Horsetooth Res",
    grad_cities: "Denver-Fort Collins CO (45%) | Denver Metro CO (20%) | Cheyenne WY (5%) | San Francisco CA (4%) | International (4%)."
  },
  "University of California Davis": {
    name: "University of California Davis",
    location: "Davis, California",
    region: "West Coast",
    pipeline: "Agriculture and Food Science (College of Agricultural and Environmental Sciences - top-1 nationally and top-3 globally - the most comprehensive and consequential agricultural research university in America -",
    hidden_pathway: "Viticulture and enology at UC Davis is the only program in the world that teaches the complete science of wine production - from soil science, plant genetics, and vineyard management through fermentation chemistry, sensory analysis, and wine business",
    the_room: "UC Davis enrolls approximately 31,000 undergraduates - a large UC campus with the full research university infrastructure and an Aggie athletic identity in the Big West Conference.",
    lifestyle: "Davis, California is a small city of 70,000 in the Central Valley - 15 miles west of Sacramento, 75 miles northeast of San Francisco, and embedded in the most productive agricultur",
    grad_cities: "Sacramento CA (30%) | San Francisco-Bay Area CA (25%) | Los Angeles CA (10%) | Davis CA (7%) | International (5%)."
  },
  "Santa Clara University": {
    name: "Santa Clara University",
    location: "Santa Clara, California",
    region: "West Coast",
    pipeline: "Engineering (School of Engineering - top-40 nationally for undergraduate engineering - computer science, electrical, civil, mechanical, bioengineering, web design and engineering -",
    hidden_pathway: "SCU's Jesuit identity combined with Silicon Valley location creates an ethical technology leadership credential that is increasingly the most strategically valuable profile in American technology.",
    the_room: "SCU enrolls approximately 6,000 undergraduates - intimate relative to the UC system and appropriately sized for the Jesuit formation model of individual student development.",
    lifestyle: "Santa Clara, California sits in the geographic center of Silicon Valley - surrounded by San Jose to the south, Sunnyvale to the west, and the Santa Clara technology corridor that i",
    grad_cities: "San Francisco-Bay Area CA (70%) | Los Angeles CA (7%) | Seattle WA (4%) | New York NY (4%) | International (5%)."
  },
  "Saint Mary's College of California": {
    name: "Saint Mary's College of California",
    location: "Moraga, California",
    region: "West Coast",
    pipeline: "Business and Economics (School of Economics and Business Administration - top-75 nationally for undergraduate business among Catholic universities - finance, accounting, marketing, management, entrepreneurship -",
    hidden_pathway: "Saint Mary's January Term - Jan Term - is the hidden pathway that distinguishes the Saint Mary's undergraduate experience from every peer Bay Area institution and most national peers.",
    the_room: "Saint Mary's enrolls approximately 2,500 undergraduates - the most intimate of any accredited four-year university in the East Bay and one of the smallest Catholic universities in California.",
    lifestyle: "Moraga, California is a small suburban community of 17,000 in the Lamorinda hills of Contra Costa County - one of the most affluent and educationally focused suburban corridors in",
    grad_cities: "San Francisco-Bay Area CA (72%) | Sacramento CA (6%) | Los Angeles CA (5%) | Portland OR (3%) | International (3%)."
  },
  "University of Nebraska-Lincoln": {
    name: "University of Nebraska-Lincoln",
    location: "Lincoln, Nebraska",
    region: "Midwest",
    pipeline: "Engineering (College of Engineering - top-60 nationally - civil, electrical, mechanical, chemical, computer science, construction management, biological systems engineering -",
    hidden_pathway: "Omaha is the hidden pathway that no Southern California family encounters on a standard college search - and it is one of the most consequential corporate headquarters cities in America relative to its population.",
    the_room: "UNL enrolls approximately 20,000 undergraduates - a mid-sized Big Ten flagship with the full research university infrastructure and one of the most passionate football cultures in college sports.",
    lifestyle: "Lincoln, Nebraska is the state capital and a city of 290,000 with a genuine college town identity built around the Haymarket District, the Pinnacle Bank Arena, and the UNL campus t",
    grad_cities: "Omaha NE (30%) | Lincoln NE (20%) | Kansas City MO (10%) | Denver CO (6%) | Chicago IL (5%)."
  },
  "Michigan State University": {
    name: "Michigan State University",
    location: "East Lansing, Michigan",
    region: "Midwest",
    pipeline: "Agriculture and Food Science (College of Agriculture and Natural Resources - top-5 nationally - the university that invented the agricultural extension system in America - crop and soil sciences, food science, animal science, agricultural economics, agribusiness management -",
    hidden_pathway: "MSU's School of Packaging is the most consequential academic monopoly in the database - more complete and more durable than any other single-school dominance in any field across both CSV files.",
    the_room: "MSU enrolls approximately 39,000 undergraduates - a large Big Ten flagship with the full research university infrastructure and one of the most passionate athletic cultures in college sports.",
    lifestyle: "East Lansing, Michigan is a classic Big Ten college town of 48,000 built entirely around Michigan State - the downtown Grand River Avenue corridor, the MSU Horticulture Gardens, th",
    grad_cities: "Detroit-Ann Arbor MI (30%) | Chicago IL (12%) | Grand Rapids MI (8%) | East Lansing MI (6%) | New York NY (5%)."
  },
  "Creighton University": {
    name: "Creighton University",
    location: "Omaha, Nebraska",
    region: "Midwest",
    pipeline: "Medicine and Health Sciences (School of Medicine - top-75 nationally - one of the most respected Jesuit medical schools in America - Creighton University Medical Center, CHI Health, Nebraska Medicine -",
    hidden_pathway: "The CHI Health system connection is the hidden pathway that makes Creighton's health sciences programs categorically different from peer Jesuit institutions without this specific affiliation. CHI Health - Catholic Health Initiatives -",
    the_room: "Creighton enrolls approximately 4,500 undergraduates and 4,000 graduate and professional students - the graduate and professional enrollment reflecting the concentration of medical, pharmacy, dental,",
    lifestyle: "Omaha, Nebraska has been transformed by Buffett-era wealth and corporate investment into one of the most underrated mid-sized cities in America -",
    grad_cities: "Omaha NE (45%) | Kansas City MO (10%) | Denver CO (7%) | Chicago IL (6%) | Phoenix AZ (5%)."
  },
  "University of Iowa": {
    name: "University of Iowa",
    location: "Iowa City, Iowa",
    region: "Midwest",
    pipeline: "Medicine and Health Sciences (Roy J. and Lucille A. Carver College of Medicine - top-40 nationally - University of Iowa Hospitals and Clinics is the largest hospital in Iowa and one of the premier academic medical centers in the Midwest -",
    hidden_pathway: "The Iowa Writers Workshop is the hidden pathway that makes the University of Iowa the most consequential creative writing institution in the history of American literature -",
    the_room: "UI enrolls approximately 22,000 undergraduates - a large Big Ten flagship with full research university infrastructure and the Hawkeyes athletic identity that is among the most passionately supported",
    lifestyle: "Iowa City, Iowa is one of the great American college towns and one of the most underrated intellectual cities in the country -",
    grad_cities: "Des Moines IA (25%) | Iowa City IA (12%) | Chicago IL (10%) | Minneapolis MN (7%) | Kansas City MO (6%)."
  },
  "Drake University": {
    name: "Drake University",
    location: "Des Moines, Iowa",
    region: "Midwest",
    pipeline: "Law (Drake University Law School - top-75 nationally and the most consequential law school in Iowa's capital city - Iowa state courts, federal agencies, Des Moines legal market, major Iowa and Midwest law firms -",
    hidden_pathway: "Des Moines is the insurance capital of the world - a fact that almost no family outside the Midwest financial services industry knows - and Drake University is the private university embedded at the center of it.",
    the_room: "Drake enrolls approximately 3,200 undergraduates - the most intimate private university with a law school and pharmacy school in the Midwest and one of the smallest in the database with this range of",
    lifestyle: "Des Moines, Iowa is one of the most underrated mid-sized cities in America - a city of 700,000 in the metro area with a vibrant downtown corridor, the Principal Park minor league b",
    grad_cities: "Des Moines IA (55%) | Chicago IL (8%) | Minneapolis MN (6%) | Kansas City MO (5%) | Omaha NE (4%)."
  },
  "Iowa State University": {
    name: "Iowa State University",
    location: "Ames, Iowa",
    region: "Midwest",
    pipeline: "Engineering (College of Engineering - top-40 nationally - the most comprehensive engineering program in Iowa and one of the most consequential in the Midwest - aerospace, agricultural and biosystems, chemical, civil, computer science, electrical, industrial, mechanical, materials",
    hidden_pathway: "John Deere's relationship with Iowa State is the hidden pathway that most Southern California families have never encountered - and it is one of the most consequential corporate-university partnerships in the database for the specific industries it s",
    the_room: "Iowa State enrolls approximately 24,000 undergraduates - a large Big 12 flagship with the full land-grant research university infrastructure and the Cyclones athletic identity that competes against Io",
    lifestyle: "Ames, Iowa is a classic Midwest college town of 66,000 built around Iowa State - the Iowa State Center for the Performing Arts, the Reiman Gardens (one of the finest university bot",
    grad_cities: "Des Moines IA (28%) | Ames IA (10%) | Chicago IL (9%) | Minneapolis MN (6%) | Kansas City MO (5%)."
  },
  "Ohio State University": {
    name: "Ohio State University",
    location: "Columbus, Ohio",
    region: "Midwest",
    pipeline: "Engineering (College of Engineering - top-20 nationally - one of the largest and most comprehensive engineering programs in America - aerospace, chemical, civil, computer science, electrical, industrial, materials science, mechanical, nuclear, welding -",
    hidden_pathway: "The Intel New Albany semiconductor fabrication investment is the hidden pathway that has fundamentally changed the value proposition of an Ohio State engineering degree in the last three years -",
    the_room: "Ohio State enrolls approximately 46,000 undergraduates - the largest Big Ten university in the database and one of the five largest universities in America.",
    lifestyle: "Columbus, Ohio has undergone a transformation in the 2020s that makes it one of the most compelling university city stories in the database.",
    grad_cities: "Columbus OH (40%) | Cleveland OH (10%) | Cincinnati OH (8%) | Chicago IL (8%) | New York NY (5%)."
  },
  "University of Notre Dame": {
    name: "University of Notre Dame",
    location: "Notre Dame, Indiana",
    region: "Midwest",
    pipeline: "Finance and Investment Banking (Mendoza College of Business - top-20 nationally and the most ethically credentialed business school in America - Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, major private equity firms -",
    hidden_pathway: "The Notre Dame alumni network is the hidden pathway that reframes the Notre Dame value proposition beyond rankings and beyond Catholicism - and it operates with a tribal intensity that secular alumni networks structurally cannot replicate.",
    the_room: "Notre Dame enrolls approximately 9,000 undergraduates - mid-sized and appropriate for the residential college model that defines the social architecture.",
    lifestyle: "Notre Dame, Indiana - technically a census-designated place rather than a city, existing entirely because of the university -",
    grad_cities: "Chicago IL (30%) | New York NY (20%) | Washington DC (10%) | South Bend IN (5%) | Los Angeles CA (5%)."
  },
  "Villanova University": {
    name: "Villanova University",
    location: "Villanova, Pennsylvania",
    region: "Northeast",
    pipeline: "Business and Finance (Villanova School of Business - top-30 nationally and the most consequential Augustinian business school in America - Wall Street - Goldman Sachs, JPMorgan, Morgan Stanley, Blackstone, major Philadelphia and New York financial services companies recruit Villa",
    hidden_pathway: "The Main Line location is the hidden pathway that makes Villanova's career infrastructure categorically different from Catholic peers located in urban centers or isolated suburban settings. The Philadelphia Main Line -",
    the_room: "Villanova enrolls approximately 7,000 undergraduates - mid-sized and appropriate for the Augustinian formation model that emphasizes individual student development within a faith community.",
    lifestyle: "Villanova, Pennsylvania is not a city - it is a township in Delaware County on the Philadelphia Main Line, and the Villanova campus - St.",
    grad_cities: "Philadelphia PA (40%) | New York NY (20%) | Washington DC (8%) | Boston MA (5%) | Chicago IL (4%)."
  },
  "Temple University": {
    name: "Temple University",
    location: "Philadelphia, Pennsylvania",
    region: "Northeast",
    pipeline: "Business and Finance (Fox School of Business - top-40 nationally and the largest business school in the Philadelphia metropolitan area - risk management and insurance top-3 nationally - finance, accounting, marketing, supply chain, entrepreneurship -",
    hidden_pathway: "Temple's risk management and insurance program is the hidden pathway that delivers one of the highest starting salaries of any undergraduate business program in the database at a public university price point -",
    the_room: "Temple enrolls approximately 28,000 undergraduates - a large urban research university with the full professional school infrastructure of a major metropolitan institution.",
    lifestyle: "North Philadelphia, Pennsylvania - the Temple campus sits in the Cecil B. Moore neighborhood of North Philadelphia, surrounded by the city's working-class and historically signific",
    grad_cities: "Philadelphia PA (55%) | New York NY (12%) | Washington DC (6%) | Wilmington DE (4%) | Baltimore MD (3%)."
  },
  "Drexel University": {
    name: "Drexel University",
    location: "Philadelphia, Pennsylvania",
    region: "Northeast",
    pipeline: "Engineering (College of Engineering - top-50 nationally - chemical, civil, electrical, mechanical, materials science, biomedical, computer science - major Philadelphia corridor employers including Comcast, SAP, Boeing, Lockheed Martin, and the growing Philadelphia life sciences c",
    hidden_pathway: "The Drexel co-op program is the structural feature that makes Drexel categorically different from every peer Philadelphia private university - and the co-op income offset is the hidden financial pathway that most families have never calculated.",
    the_room: "Drexel enrolls approximately 14,000 undergraduates - a mid-sized urban research university with the full professional school infrastructure of a major metropolitan institution.",
    lifestyle: "University City, Philadelphia - the neighborhood anchored by Drexel and Penn on the west side of the Schuylkill River -",
    grad_cities: "Philadelphia PA (50%) | New York NY (12%) | Washington DC (6%) | Boston MA (4%) | San Francisco CA (4%)."
  },
  "UC Riverside": {
    name: "UC Riverside",
    location: "Riverside, California",
    region: "West Coast",
    pipeline: "Engineering (Marlan and Rosemary Bourns College of Engineering - top-60 nationally - electrical, mechanical, chemical, computer science, environmental, bioengineering - major Southern California technology and defense employers including Northrop Grumman, Raytheon, Boeing, Broadc",
    hidden_pathway: "The Thomas Haider Program in Biomedical Sciences is the hidden pathway that makes UCR the most consequential pre-medicine investment for Inland Empire families and one of the most powerful guaranteed physician pathways in California.",
    the_room: "UCR enrolls approximately 22,000 undergraduates - a large UC campus with full research university infrastructure and a student body that is the most socioeconomically diverse of any UC campus.",
    lifestyle: "Riverside, California sits at the base of the San Bernardino Mountains in the eastern Inland Empire - a city of 320,000 with a historic downtown Mission Inn corridor, the Riverside",
    grad_cities: "Los Angeles CA (30%) | Inland Empire CA (35%) | San Diego CA (6%) | San Francisco CA (5%) | International (5%)."
  },
  "California State University Long Beach": {
    name: "California State University Long Beach",
    location: "Long Beach, California",
    region: "West Coast",
    pipeline: "Engineering (College of Engineering - top-50 nationally among regional universities - aerospace, civil, electrical, mechanical, chemical, computer science, biomedical - major Southern California aerospace and defense employers including Boeing, Northrop Grumman, Raytheon, SpaceX,",
    hidden_pathway: "The Long Beach College Promise is the hidden pathway that makes CSULB the most consequential access institution in Southern California and one of the most important equity mechanisms in American higher education. The Long Beach College Promise -",
    the_room: "CSULB enrolls approximately 32,000 undergraduates - the second largest CSU campus and one of the largest universities in California.",
    lifestyle: "Long Beach, California is the second largest city in the Los Angeles metropolitan area - a city of 460,000 with a working harbor, the Queen Mary, the Long Beach Convention Center,",
    grad_cities: "Los Angeles-Long Beach CA (70%) | Orange County CA (10%) | San Diego CA (4%) | San Francisco CA (3%) | International (3%"
  },
  "California State University Fullerton": {
    name: "California State University Fullerton",
    location: "Fullerton, California",
    region: "West Coast",
    pipeline: "Business and Finance (Mihaylo College of Business and Economics - top-40 nationally among regional universities and the largest business school in California - finance, accounting, marketing, supply chain, entrepreneurship, real estate, international business -",
    hidden_pathway: "Mihaylo College of Business is the hidden pathway that delivers Big 4 accounting placement volume at the lowest tuition in the database - and the mechanism is specific and consequential.",
    the_room: "CSUF enrolls approximately 35,000 undergraduates - the largest CSU campus by undergraduate enrollment and one of the largest universities in California.",
    lifestyle: "Fullerton, California sits in the northern edge of Orange County - a city of 140,000 2 miles from Disneyland, 30 miles from downtown Los Angeles, 15 miles from the Pacific Ocean be",
    grad_cities: "Orange County CA (55%) | Los Angeles CA (25%) | San Diego CA (5%) | Inland Empire CA (4%) | International (3%)."
  },
  "University of California Irvine": {
    name: "University of California Irvine",
    location: "Irvine, California",
    region: "West Coast",
    pipeline: "Computer Science and Informatics (Donald Bren School of Information and Computer Sciences - top-15 nationally and the only UC campus with a standalone school dedicated to computing - computer science, software engineering, data science, cybersecurity, informatics, game design -",
    hidden_pathway: "The Donald Bren School of Information and Computer Sciences is the hidden pathway that makes UCI's technology credential structurally different from peer UC campuses.",
    the_room: "UCI enrolls approximately 30,000 undergraduates - a large UC campus with full research university infrastructure and a student body that is approximately 42% Asian American -",
    lifestyle: "Irvine, California is one of the most planned and most livable cities in America - consistently ranked as the safest large city in America and the most livable city in California b",
    grad_cities: "Orange County CA (50%) | Los Angeles CA (20%) | San Francisco CA (8%) | San Diego CA (5%) | International (8%)."
  },
  "California Polytechnic State University San Luis Obispo": {
    name: "California Polytechnic State University San Luis Obispo",
    location: "San Luis Obispo, California",
    region: "West Coast",
    pipeline: "Engineering (College of Engineering - top-10 nationally among regional universities and top-3 among all public universities for undergraduate engineering - civil, electrical, mechanical, aerospace, industrial, biomedical, materials, environmental, manufacturing, general engineeri",
    hidden_pathway: "Learn by Doing is the institutional philosophy of Cal Poly SLO and it is the hidden pathway that explains why Apple, SpaceX, and Google recruit Cal Poly engineers with the same priority they give to UC Berkeley and Stanford graduates for specific rol",
    the_room: "Cal Poly SLO enrolls approximately 22,000 undergraduates - a mid-sized polytechnic with the engineering and applied sciences focus of a specialized institution and the breadth of a comprehensive unive",
    lifestyle: "San Luis Obispo, California is consistently ranked among the happiest cities in America and the most livable small city in California -",
    grad_cities: "San Francisco-Bay Area CA (35%) | Los Angeles CA (20%) | San Diego CA (8%) | San Luis Obispo CA (6%) | Seattle WA (4%)."
  },
  "California State University Chico": {
    name: "California State University Chico",
    location: "Chico, California",
    region: "West Coast",
    pipeline: "Business and Finance (College of Business - top-60 nationally among regional universities - finance, accounting, marketing, entrepreneurship, management information systems, supply chain -",
    hidden_pathway: "Chico State's construction management program is the hidden pathway that delivers one of the strongest career-to-cost ratios of any program at any CSU campus - and it is genuinely unknown outside the Northern California construction industry.",
    the_room: "Chico State enrolls approximately 14,000 undergraduates - a mid-sized CSU campus serving the most geographically expansive service region of any CSU in Northern California.",
    lifestyle: "Chico, California is a city of 100,000 in Butte County at the base of the Sierra Nevada foothills - one of the most underrated small cities in California with a vibrant downtown, t",
    grad_cities: "Sacramento CA (30%) | Chico-Butte County CA (20%) | Bay Area CA (12%) | Redding CA (6%) | Fresno CA (4%)."
  },
  "California State University Fresno": {
    name: "California State University Fresno",
    location: "Fresno, California",
    region: "West Coast",
    pipeline: "Agriculture and Food Science (Jordan College of Agricultural Sciences and Technology - top-15 nationally among regional universities and the most consequential agricultural college in the San Joaquin Valley -",
    hidden_pathway: "The Wonderful Company connection is the hidden pathway that makes Fresno State's agricultural business and viticulture programs uniquely consequential in the San Joaquin Valley economy. The Wonderful Company -",
    the_room: "Fresno State enrolls approximately 22,000 undergraduates - a large CSU campus serving the most geographically central and demographically significant city in the San Joaquin Valley.",
    lifestyle: "Fresno, California is the agricultural and commercial capital of the San Joaquin Valley - a city of 540,000 and the fifth largest in California, surrounded by some of the most prod",
    grad_cities: "Fresno CA (45%) | Sacramento CA (12%) | Los Angeles CA (8%) | Bakersfield CA (5%) | San Francisco CA (4%)."
  },
  "University of California Santa Cruz": {
    name: "University of California Santa Cruz",
    location: "Santa Cruz, California",
    region: "West Coast",
    pipeline: "Computer Science and Engineering (Baskin School of Engineering - top-30 nationally for graduate programs with strong undergraduate pipeline - computer science, computer engineering, electrical engineering, robotics, bioinformatics -",
    hidden_pathway: "The residential college system at UC Santa Cruz is the hidden pathway that makes the undergraduate research experience at Santa Cruz structurally different from every peer UC campus. UC Santa Cruz operates 10 residential colleges -",
    the_room: "UC Santa Cruz enrolls approximately 17,000 undergraduates - mid-sized for a UC campus and the most intimate of any UC campus larger than UC Merced. The student body is approximately 38% Hispanic -",
    lifestyle: "Santa Cruz, California is one of the most distinctive university cities in America - a city of 65,000 on a coastal bluff above the Monterey Bay, with redwood forests rising immedia",
    grad_cities: "San Francisco-Bay Area CA (40%) | Los Angeles CA (12%) | Santa Cruz CA (10%) | San Diego CA (5%) | Seattle WA (4%)."
  },
  "California State University Northridge": {
    name: "California State University Northridge",
    location: "Northridge, California",
    region: "West Coast",
    pipeline: "Business and Finance (David Nazarian College of Business and Economics - top-55 nationally among regional universities - accounting, finance, marketing, real estate, entrepreneurship, management information systems -",
    hidden_pathway: "The National Center on Deafness at CSUN is the hidden pathway that makes CSUN the most specific and irreplaceable institution in the database for one particular professional mission -",
    the_room: "CSUN enrolls approximately 33,000 undergraduates - one of the largest CSU campuses and the largest university in the San Fernando Valley. The student body is approximately 45% Hispanic -",
    lifestyle: "Northridge, California sits in the central San Fernando Valley - a suburban community of 60,000 within the city of Los Angeles, surrounded by the Santa Susana Mountains to the nort",
    grad_cities: "Los Angeles CA (65%) | San Fernando Valley CA (15%) | Ventura County CA (5%) | Orange County CA (4%) | International (3%"
  },
  "California State University Los Angeles": {
    name: "California State University Los Angeles",
    location: "Los Angeles, California",
    region: "West Coast",
    pipeline: "Business and Finance (College of Business and Economics - top-65 nationally among regional universities - accounting, finance, marketing, entrepreneurship, international business, real estate -",
    hidden_pathway: "The 2028 Los Angeles Olympics infrastructure buildout is the hidden pathway that makes CSULA's engineering and construction management programs uniquely consequential at this specific moment in Los Angeles history.",
    the_room: "CSULA enrolls approximately 24,000 undergraduates - a large CSU campus serving the most economically challenged and racially diverse urban community of any institution in the database.",
    lifestyle: "Los Angeles, California - the CSULA campus sits on a hillside in the unincorporated East Los Angeles corridor of the San Gabriel Valley, at the intersection of the 10 and 710 freew",
    grad_cities: "Los Angeles CA (75%) | East Los Angeles CA (12%) | Pasadena-San Gabriel Valley CA (6%) | Long Beach CA (3%) | Internatio"
  },
  "Claremont McKenna College": {
    name: "Claremont McKenna College",
    location: "Claremont, California",
    region: "West Coast",
    pipeline: "Finance and Investment Management (Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, KKR, Apollo, major hedge funds and private equity firms recruit CMC at per-capita rates that rival Wharton for a school of 1,400 students -",
    hidden_pathway: "The Robert Day Scholars program is the hidden pathway that makes CMC's finance credential structurally different from every peer liberal arts college in the database. The Robert Day School of Economics and Finance -",
    the_room: "CMC enrolls approximately 1,400 undergraduates - the second smallest institution in the Claremont Consortium after Harvey Mudd and one of the smallest in the entire database at this selectivity and sa",
    lifestyle: "Claremont, California - the same setting as Pomona and Harvey Mudd - with all the physical advantages of Southern California: 280+ days of sunshine, Angeles National Forest 20 minu",
    grad_cities: "New York NY (35%) | Los Angeles CA (20%) | San Francisco CA (15%) | Washington DC (10%) | International (5%)."
  },
  "Pepperdine University": {
    name: "Pepperdine University",
    location: "Malibu, California",
    region: "West Coast",
    pipeline: "Business and Finance (Graziadio Business School - top-40 nationally among private universities for MBA and top-50 for undergraduate business - finance, accounting, marketing, entrepreneurship, real estate, international business -",
    hidden_pathway: "The Straus Institute for Dispute Resolution is the hidden pathway that makes Pepperdine's law credential categorically more powerful for one specific professional domain than any peer institution in California can match.",
    the_room: "Pepperdine enrolls approximately 3,500 undergraduates in Seaver College - the undergraduate college - making it among the more intimate of the private universities in the Los Angeles area.",
    lifestyle: "Malibu, California - the Pepperdine campus sits on a bluff 400 feet above the Pacific Ocean in the Santa Monica Mountains, with panoramic views of the ocean, Catalina Island on cle",
    grad_cities: "Los Angeles CA (45%) | Orange County CA (10%) | San Francisco CA (8%) | New York NY (7%) | International (6%)."
  },
  "University of San Diego": {
    name: "University of San Diego",
    location: "San Diego, California",
    region: "West Coast",
    pipeline: "Law (School of Law - top-55 nationally with specific strength in business law, tax law, real estate law, and international law - California state courts, San Diego legal market, major California law firms, federal agencies, military law -",
    hidden_pathway: "The Kroc Institute for Peace and Justice is the hidden pathway that makes USD uniquely positioned at the intersection of military power and peace-making in a city that is simultaneously America's largest military base complex and one of the most inte",
    the_room: "USD enrolls approximately 6,000 undergraduates - mid-sized and appropriate for the Catholic formation model that emphasizes individual student development in a faith community.",
    lifestyle: "San Diego, California - the USD campus sits on Alcala Park, a mesa above Mission Bay with panoramic views of the bay, the Pacific Ocean, and the downtown San Diego skyline.",
    grad_cities: "San Diego CA (55%) | Los Angeles CA (15%) | San Francisco CA (6%) | Washington DC (5%) | International (4%)."
  },
  "Oregon State University": {
    name: "Oregon State University",
    location: "Corvallis, Oregon",
    region: "West Coast",
    pipeline: "Engineering (College of Engineering - top-40 nationally - nuclear, electrical, mechanical, civil, chemical, computer science, industrial, biological and ecological, manufacturing -",
    hidden_pathway: "The TRIGA Mark II research reactor at OSU is the hidden pathway that makes the nuclear engineering program categorically different from every peer university in the Pacific Northwest -",
    the_room: "OSU enrolls approximately 24,000 undergraduates - a large Pac-12 now ACC flagship with the full research university infrastructure and the Beavers athletic identity that competes in one of the most at",
    lifestyle: "Corvallis, Oregon is a small city of 59,000 in the Willamette Valley - one of the most livable small cities in the Pacific Northwest with a vibrant downtown corridor, the Benton Co",
    grad_cities: "Portland OR (30%) | Corvallis OR (12%) | Seattle WA (10%) | San Francisco CA (7%) | Bend OR (4%)."
  },
  "Boise State University": {
    name: "Boise State University",
    location: "Boise, Idaho",
    region: "West Coast",
    pipeline: "Engineering (College of Engineering - top-65 nationally among regional universities - electrical, mechanical, civil, computer science, materials science, construction management -",
    hidden_pathway: "The Micron Technology partnership is the hidden pathway that makes Boise State's engineering and computer science programs consequential in a way that no regional university ranking captures. Micron Technology -",
    the_room: "Boise State enrolls approximately 21,000 undergraduates - a large regional university that has grown dramatically alongside Boise's population explosion.",
    lifestyle: "Boise, Idaho has undergone the most dramatic transformation of any American city in the 2020s - a city of 240,000 in the Treasure Valley that grew 16% in a decade, attracted Califo",
    grad_cities: "Boise ID (45%) | Portland OR (8%) | Seattle WA (6%) | Salt Lake City UT (5%) | San Francisco CA (4%)."
  },
  "Brigham Young University": {
    name: "Brigham Young University",
    location: "Provo, Utah",
    region: "West Coast",
    pipeline: "Business and Finance (Marriott School of Business - top-20 nationally - finance, accounting, marketing, supply chain, entrepreneurship, information systems - Wall Street, Big 4 accounting firms, major technology companies, consulting firms -",
    hidden_pathway: "The LDS mission language training is the hidden pathway that makes BYU the most multilingual undergraduate institution in America and the most consequential language credential pipeline outside the federal Defense Language Institute.",
    the_room: "BYU enrolls approximately 33,000 undergraduates - a large private university and by far the largest private university in the Mountain West.",
    lifestyle: "Provo, Utah sits at the base of the Wasatch Front - Mount Timpanogos rising to 11,752 feet immediately east of campus, Utah Lake to the west, and the Silicon Slopes technology corr",
    grad_cities: "Salt Lake City UT (25%) | Provo-Orem UT (20%) | San Francisco CA (8%) | New York NY (8%) | International (5%)."
  },
  "University of Kentucky": {
    name: "University of Kentucky",
    location: "Lexington, Kentucky",
    region: "Southeast",
    pipeline: "Medicine and Health Sciences (College of Medicine - top-50 nationally - UK HealthCare is the only Level I trauma center and comprehensive cancer center in Kentucky - pre-medicine pipeline with direct clinical access at the most comprehensive academic medical center in the state -",
    hidden_pathway: "The Thoroughbred horse industry is the hidden pathway that makes UK the most specific and irreplaceable academic institution for one of the most economically consequential specialized industries in the world. The Kentucky Bluegrass region -",
    the_room: "UK enrolls approximately 22,000 undergraduates - a large SEC flagship with the full research university infrastructure and the Wildcats athletic identity that is among the most basketball-passionate i",
    lifestyle: "Lexington, Kentucky is a city of 320,000 in the heart of the Bluegrass region - horse farms visible from the highway, limestone-filtered springs feeding the bluegrass pastures that",
    grad_cities: "Lexington KY (25%) | Louisville KY (20%) | Cincinnati OH (10%) | Nashville TN (6%) | Frankfort KY (5%)."
  },
  "University of Louisville": {
    name: "University of Louisville",
    location: "Louisville, Kentucky",
    region: "Southeast",
    pipeline: "Medicine and Health Sciences (School of Medicine - top-50 nationally - UofL Health is one of the premier academic medical centers in the mid-South - pre-medicine pipeline with direct clinical access at a Level I trauma center serving the Louisville metropolitan area -",
    hidden_pathway: "UofL Health performs more heart transplants than any hospital in the world - and this single clinical fact is the hidden pathway that reframes UofL's medical school from a regional institution into a global cardiovascular medicine leader.",
    the_room: "UofL enrolls approximately 17,000 undergraduates - a mid-sized metropolitan research university with the full professional school infrastructure of a comprehensive university.",
    lifestyle: "Louisville, Kentucky is a city of 630,000 on the Ohio River - the largest city in Kentucky, the bourbon capital of the world, and a city that has been nationally recognized in the",
    grad_cities: "Louisville KY (50%) | Lexington KY (10%) | Cincinnati OH (8%) | Nashville TN (6%) | Indianapolis IN (5%)."
  },
  "University of Minnesota": {
    name: "University of Minnesota",
    location: "Minneapolis, Minnesota",
    region: "Midwest",
    pipeline: "Engineering (College of Science and Engineering - top-25 nationally - electrical, mechanical, civil, chemical, computer science, biomedical, aerospace, materials science -",
    hidden_pathway: "The medical device corridor is the hidden pathway that makes Minnesota's engineering, biomedical, and pre-medicine credentials categorically more consequential than peer Big Ten flagship programs for one specific professional domain.",
    the_room: "Minnesota enrolls approximately 36,000 undergraduates - a large Big Ten flagship with the full research university infrastructure and the Gophers athletic identity that competes across every Big Ten s",
    lifestyle: "Minneapolis, Minnesota is one of the great American university cities - a metropolitan area of 3.7 million people with a world-class arts scene, the most theatre seats per capita o",
    grad_cities: "Minneapolis-Saint Paul MN (50%) | Chicago IL (8%) | Milwaukee WI (5%) | Denver CO (4%) | New York NY (4%)."
  },
  "Butler University": {
    name: "Butler University",
    location: "Indianapolis, Indiana",
    region: "Midwest",
    pipeline: "Business (Lacy School of Business - top-50 nationally among private universities - finance, accounting, marketing, entrepreneurship, international business - major Indianapolis employers including Eli Lilly, Salesforce, Anthem, Allison Transmission, and the rapidly growing Indian",
    hidden_pathway: "The Eli Lilly relationship is the hidden pathway that makes Butler's pharmacy and pre-medicine programs categorically different from every peer private university in Indiana. Eli Lilly and Company -",
    the_room: "Butler enrolls approximately 4,500 undergraduates - the most intimate of any private university in the database with a top-30 pharmacy school.",
    lifestyle: "Indianapolis, Indiana is a city of 900,000 and the most sports-event-dense mid-sized city in America - the Super Bowl, the Big Ten Championship, the NCAA Men's Basketball Tournamen",
    grad_cities: "Indianapolis IN (55%) | Chicago IL (10%) | Columbus OH (6%) | Cincinnati OH (5%) | New York NY (4%)."
  },
  "University of the South": {
    name: "University of the South",
    location: "Sewanee, Tennessee",
    region: "Southeast",
    pipeline: "Liberal Arts (College of Arts and Sciences - top-40 nationally among liberal arts colleges - English, history, philosophy, political science, economics, natural sciences, classics, religious studies -",
    hidden_pathway: "The Sewanee Domain is the hidden pathway that makes Sewanee's environmental science and outdoor experience categorically different from every peer liberal arts college in the database.",
    the_room: "Sewanee enrolls approximately 1,800 undergraduates - among the most intimate of any liberal arts college in the South and similar in size to Bowdoin and Amherst.",
    lifestyle: "Sewanee, Tennessee sits on the Cumberland Plateau at 2,000 feet elevation - a mountaintop community of 2,500 people whose entire existence is organized around the University of the",
    grad_cities: "Nashville TN (20%) | Atlanta GA (15%) | New York NY (12%) | Washington DC (8%) | Charlotte NC (6%)."
  },
  "University of Mississippi": {
    name: "University of Mississippi",
    location: "Oxford, Mississippi",
    region: "Southeast",
    pipeline: "Business and Finance (School of Business Administration - top-60 nationally - accounting, finance, marketing, real estate, entrepreneurship, risk management and insurance -",
    hidden_pathway: "The Grove is the hidden pathway that most academic rankings miss entirely - and it is the single most consequential social capital formation mechanism of any SEC campus in the database. The Grove at Ole Miss -",
    the_room: "Ole Miss enrolls approximately 22,000 undergraduates - a large SEC flagship with the full research university infrastructure and the Rebels athletic identity that is among the most socially defined by",
    lifestyle: "Oxford, Mississippi is one of the great American college towns and one of the most literarily significant small cities in America -",
    grad_cities: "Memphis TN (25%) | Jackson MS (18%) | Nashville TN (10%) | New Orleans LA (7%) | Atlanta GA (6%)."
  },
  "Mississippi State University": {
    name: "Mississippi State University",
    location: "Starkville, Mississippi",
    region: "Southeast",
    pipeline: "Engineering (Bagley College of Engineering - top-50 nationally - aerospace, civil, electrical, mechanical, chemical, computer science, biomedical, industrial - major Mississippi and regional employers including Raytheon, Northrop Grumman, Toyota, Nissan, the NASA Stennis Space Ce",
    hidden_pathway: "The catfish aquaculture connection is the hidden pathway that makes MSU's veterinary and agricultural programs uniquely consequential for one of the most economically significant regional food industries in America.",
    the_room: "MSU enrolls approximately 21,000 undergraduates - a large SEC flagship with the Bulldogs athletic identity that competes in one of the most athletically competitive conferences in college sports.",
    lifestyle: "Starkville, Mississippi is a small city of 25,000 in the eastern Mississippi hills - a college town built entirely around Mississippi State with a growing restaurant and arts scene",
    grad_cities: "Jackson MS (20%) | Starkville MS (10%) | Memphis TN (15%) | Nashville TN (8%) | Atlanta GA (7%)."
  },
  "University of Alabama": {
    name: "University of Alabama",
    location: "Tuscaloosa, Alabama",
    region: "Southeast",
    pipeline: "Business and Finance (Culverhouse College of Business - top-35 nationally and the most consequential business school in the SEC South - finance, accounting, marketing, supply chain, risk management and insurance top-5 nationally, real estate -",
    hidden_pathway: "The Huntsville aerospace corridor is the hidden pathway that makes Alabama's engineering program more consequential than its ranking suggests - and almost no family outside the South understands what Huntsville represents as a career destination.",
    the_room: "Alabama enrolls approximately 38,000 undergraduates - a large SEC flagship with the most dominant football program in modern college sports history and the Crimson Tide identity that is among the most",
    lifestyle: "Tuscaloosa, Alabama is a city of 100,000 built around the University of Alabama - a genuine college city with a vibrant Strip commercial corridor, Government Plaza, and the Black W",
    grad_cities: "Birmingham AL (30%) | Atlanta GA (15%) | Huntsville AL (10%) | Nashville TN (8%) | New York NY (5%)."
  },
  "Florida State University": {
    name: "Florida State University",
    location: "Tallahassee, Florida",
    region: "Southeast",
    pipeline: "Business and Finance (College of Business - top-30 nationally and one of the most underrecognized elite business schools in the ACC - finance, accounting, marketing, real estate, risk management and insurance top-10 nationally, entrepreneurship -",
    hidden_pathway: "The FAMU-FSU College of Engineering is the hidden pathway that makes FSU's engineering credential uniquely consequential in ways no ranking captures. The FAMU-FSU College of Engineering is the only jointly accredited engineering college in the United",
    the_room: "FSU enrolls approximately 33,000 undergraduates - a large ACC flagship with the Seminoles athletic identity that competes at the Power 4 level with one of the most visually distinctive and historicall",
    lifestyle: "Tallahassee, Florida is Florida's capital city - a city of 200,000 embedded in the Tallahassee Hills at the edge of the Florida Panhandle, surrounded by live oak canopy roads that",
    grad_cities: "Tampa-Orlando FL (25%) | Tallahassee FL (18%) | Miami FL (12%) | Atlanta GA (8%) | New York NY (5%)."
  },
  "University of South Florida": {
    name: "University of South Florida",
    location: "Tampa, Florida",
    region: "Southeast",
    pipeline: "Engineering (College of Engineering - top-50 nationally - biomedical, civil, chemical, computer science, electrical, mechanical, industrial - major Tampa Bay employers including Lockheed Martin, L3Harris, TECO Energy, Raymond James, and the rapidly growing Tampa Bay technology an",
    hidden_pathway: "Tampa General Hospital's organ transplant volume is the hidden pathway that makes USF's medical and health sciences programs clinically consequential in ways that peer Florida institutions cannot match. Tampa General Hospital -",
    the_room: "USF enrolls approximately 37,000 undergraduates - a large preeminent research university with the Bulls athletic identity in the American Athletic Conference competing in football, basketball, and a f",
    lifestyle: "Tampa, Florida is one of the great American success stories of the 2020s - a city of 400,000 in a metropolitan area of 3.2 million that has attracted financial services headquarter",
    grad_cities: "Tampa-St. Petersburg FL (55%) | Orlando FL (10%) | Miami FL (8%) | Atlanta GA (5%) | Washington DC (4%)."
  },
  "University of Central Florida": {
    name: "University of Central Florida",
    location: "Orlando, Florida",
    region: "Southeast",
    pipeline: "Engineering (College of Engineering and Computer Science - top-50 nationally - computer science, electrical, mechanical, civil, aerospace, industrial, biomedical - major Orlando employers including Lockheed Martin, Siemens, Boeing, L3Harris, and the Orlando defense and simulation",
    hidden_pathway: "The Modeling Simulation and Training cluster is the hidden pathway that makes UCF's engineering and computer science programs uniquely consequential for one of the most consequential and least publicly understood defense technology industries in Amer",
    the_room: "UCF enrolls approximately 58,000 undergraduates - the second largest university enrollment in America and the largest in Florida - with a campus infrastructure scaled to this extraordinary size.",
    lifestyle: "Orlando, Florida is the most visited tourist destination on earth - Walt Disney World, Universal Orlando, SeaWorld, LEGOLAND, and dozens of major entertainment destinations create",
    grad_cities: "Orlando FL (55%) | Tampa FL (8%) | Miami FL (6%) | Jacksonville FL (5%) | Atlanta GA (4%)."
  },
  "Florida Atlantic University": {
    name: "Florida Atlantic University",
    location: "Boca Raton, Florida",
    region: "Southeast",
    pipeline: "Business and Finance (College of Business - top-65 nationally - finance, accounting, marketing, real estate, entrepreneurship, international business - major South Florida employers including the Boca Raton financial services corridor, major Palm Beach County real estate companie",
    hidden_pathway: "The IBM Boca Raton campus - where the personal computer was invented in 1981 - is the hidden pathway that contextualizes FAU's technology identity within Silicon Valley-level computing history at a South Florida campus.",
    the_room: "FAU enrolls approximately 25,000 undergraduates - a large regional research university serving the most economically productive coastal corridor in Florida outside Miami.",
    lifestyle: "Boca Raton, Florida is one of the most affluent and architecturally distinctive mid-sized cities in America - a planned city of 100,000 in Palm Beach County with Mediterranean Revi",
    grad_cities: "Boca Raton-West Palm Beach FL (45%) | Fort Lauderdale FL (15%) | Miami FL (12%) | Orlando FL (5%) | New York NY (4%)."
  },
  "Stetson University": {
    name: "Stetson University",
    location: "DeLand, Florida",
    region: "Southeast",
    pipeline: "Law (Stetson University College of Law - top-60 nationally with top-3 nationally for trial advocacy and top-5 nationally for legal writing - the most decorated trial advocacy program in America -",
    hidden_pathway: "The Stetson trial advocacy program is the hidden pathway that makes Stetson Law the most specifically powerful litigation credential in Florida - and possibly in America - for the student who wants to be a trial lawyer.",
    the_room: "Stetson enrolls approximately 3,000 undergraduates - the most intimate private university in Central Florida and one of the smallest in the database with a law school.",
    lifestyle: "DeLand, Florida is one of the most architecturally distinguished small cities in Florida - a city of 35,000 in Volusia County that was named the most beautiful small city in Americ",
    grad_cities: "Orlando FL (25%) | Tampa FL (15%) | Jacksonville FL (10%) | DeLand FL (8%) | Miami FL (6%)."
  },
  "Virginia Tech": {
    name: "Virginia Tech",
    location: "Blacksburg, Virginia",
    region: "Southeast",
    pipeline: "Engineering (College of Engineering - top-15 nationally and the most consequential engineering program in Virginia - aerospace, biological systems, chemical, civil, computer science, electrical, industrial, materials science, mechanical, mining, ocean -",
    hidden_pathway: "The Northern Virginia defense technology corridor is the hidden pathway that makes Virginia Tech engineering structurally more powerful than its ranking suggests for one specific and enormously consequential career domain. Northern Virginia -",
    the_room: "Virginia Tech enrolls approximately 28,000 undergraduates - a large ACC flagship with the Hokies athletic identity that is among the most passionate in the conference.",
    lifestyle: "Blacksburg, Virginia is a college town of 45,000 in the New River Valley of the Appalachian Mountains - one of the most physically beautiful university settings in the ACC, surroun",
    grad_cities: "Northern Virginia-DC (35%) | Roanoke VA (12%) | Richmond VA (8%) | Charlotte NC (6%) | New York NY (5%)."
  },
  "Boston College": {
    name: "Boston College",
    location: "Chestnut Hill, Massachusetts",
    region: "Northeast",
    pipeline: "Finance and Investment Banking (Carroll School of Management - top-25 nationally - Wall Street - Goldman Sachs, Morgan Stanley, JPMorgan, Blackstone, Fidelity Investments, State Street, Wellington Management, and the extraordinarily concentrated Boston financial services ecosyste",
    hidden_pathway: "The Jesuit intellectual tradition at BC creates a specific professional formation that the Boston financial services and consulting industries recruit with intentionality -",
    the_room: "BC enrolls approximately 9,500 undergraduates - mid-sized and appropriate for the Jesuit formation model. The student body is approximately 30% from New England with heavy representation from New York",
    lifestyle: "Chestnut Hill, Massachusetts is an affluent suburb on the western edge of Boston - the BC campus sits on a hill above Cleveland Circle with the Gothic towers of Gasson Hall and Sto",
    grad_cities: "Boston MA (45%) | New York NY (20%) | Washington DC (8%) | San Francisco CA (5%) | Hartford-Providence (4%)."
  },
  "University of Pittsburgh": {
    name: "University of Pittsburgh",
    location: "Pittsburgh, Pennsylvania",
    region: "Northeast",
    pipeline: "Medicine and Health Sciences (School of Medicine - top-10 nationally - UPMC is one of the largest and most powerful academic medical center systems in the world with 40 hospitals and $26 billion in annual revenue -",
    hidden_pathway: "Jonas Salk developed the polio vaccine at the University of Pittsburgh in 1955 - and the research culture that produced that breakthrough is still operating at the same institution seven decades later.",
    the_room: "Pitt enrolls approximately 20,000 undergraduates - a large research university with the full professional school infrastructure of one of the most research-active institutions in America.",
    lifestyle: "Pittsburgh, Pennsylvania is one of the great American comeback cities - a former steel capital that has reinvented itself as a technology, healthcare, and education hub with a cost",
    grad_cities: "Pittsburgh PA (40%) | Philadelphia PA (10%) | New York NY (10%) | Washington DC (7%) | Boston MA (5%)."
  },
  "North Carolina State University": {
    name: "North Carolina State University",
    location: "Raleigh, North Carolina",
    region: "Southeast",
    pipeline: "Engineering (College of Engineering - top-20 nationally and the largest engineering college in the ACC - biomedical, chemical, civil, computer science, electrical, industrial, materials science, mechanical, nuclear, textile engineering -",
    hidden_pathway: "Research Triangle Park is the hidden pathway that makes NC State engineering and computer science structurally more powerful than their rankings suggest for one of the most consequential technology and pharmaceutical ecosystems in America.",
    the_room: "NC State enrolls approximately 26,000 undergraduates - a large ACC flagship with the Wolfpack athletic identity that competes in one of the most athletically competitive conferences in college sports.",
    lifestyle: "Raleigh, North Carolina is one of the most dynamic and livable mid-sized cities in America - a city of 470,000 that has grown faster than almost any other state capital in the Sout",
    grad_cities: "Research Triangle NC (45%) | Charlotte NC (15%) | Raleigh NC (12%) | Atlanta GA (6%) | New York NY (4%)."
  },
  "University of Maryland College Park": {
    name: "University of Maryland College Park",
    location: "College Park, Maryland",
    region: "Northeast",
    pipeline: "Engineering (A. James Clark School of Engineering - top-20 nationally - aerospace, bioengineering, chemical, civil, computer science, electrical, fire protection, materials science, mechanical, systems -",
    hidden_pathway: "The NSA relationship is the hidden pathway that makes UMD computer science and mathematics programs uniquely consequential for one of the most significant and least publicly discussed federal employers in America. The National Security Agency -",
    the_room: "UMD enrolls approximately 31,000 undergraduates - a large Big Ten flagship with the Terrapins athletic identity competing in one of the most athletically competitive conferences in college sports.",
    lifestyle: "College Park, Maryland is a dense suburban community of 32,000 embedded between Washington DC and Baltimore in the most consequential federal employment corridor in America.",
    grad_cities: "Washington DC-Maryland (55%) | Northern Virginia (15%) | Baltimore MD (10%) | New York NY (5%) | Philadelphia PA (3%)."
  },
  "Johns Hopkins University": {
    name: "Johns Hopkins University",
    location: "Baltimore, Maryland",
    region: "Northeast",
    pipeline: "Medicine and Public Health (School of Medicine - top-3 nationally and the most research-intensive medical school in America - Johns Hopkins Medicine is the single most cited medical research institution in the world -",
    hidden_pathway: "The Applied Physics Laboratory is the hidden pathway that makes Hopkins uniquely consequential for national security and space science in ways that its undergraduate reputation alone does not capture. APL -",
    the_room: "Hopkins enrolls approximately 5,500 undergraduates - among the smallest research universities in the database relative to its research output and global reputation.",
    lifestyle: "Baltimore, Maryland is a city of 600,000 with a genuine urban identity - the Inner Harbor, Fells Point, Federal Hill, the American Visionary Art Museum, Lexington Market, the Balti",
    grad_cities: "Baltimore MD (25%) | Washington DC (20%) | New York NY (15%) | Boston MA (8%) | San Francisco CA (5%)."
  },
  "Emory University": {
    name: "Emory University",
    location: "Atlanta, Georgia",
    region: "Southeast",
    pipeline: "Medicine and Health Sciences (School of Medicine - top-20 nationally - Emory Healthcare is the largest health system in Georgia with 11 hospitals - pre-medicine pipeline with direct research access at one of the most research-active medical institutions in the South -",
    hidden_pathway: "The CDC adjacency is the hidden pathway that makes Emory's public health and pre-medicine programs uniquely consequential for global health careers in ways that no other university in the world can replicate outside of Johns Hopkins.",
    the_room: "Emory enrolls approximately 7,000 undergraduates across both the Atlanta campus and Oxford College - mid-sized and appropriate for the research university model that Emory has built.",
    lifestyle: "Atlanta, Georgia is one of the great American cities - a metropolitan area of 6.2 million people with more Fortune 500 headquarters than any city except New York and Houston, a thr",
    grad_cities: "Atlanta GA (45%) | New York NY (15%) | Washington DC (10%) | Boston MA (5%) | Los Angeles CA (4%)."
  },
  "Tulane University": {
    name: "Tulane University",
    location: "New Orleans, Louisiana",
    region: "Southeast",
    pipeline: "Business and Finance (Freeman School of Business - top-40 nationally - finance, accounting, marketing, real estate, international business, social entrepreneurship - major New Orleans and Gulf Coast employers, Wall Street, major energy companies including Chevron, ExxonMobil, She",
    hidden_pathway: "Louisiana's civil law system is the hidden pathway that makes Tulane Law categorically different from every other law school in America - and it is a pathway that creates a specific professional capability available nowhere else.",
    the_room: "Tulane enrolls approximately 7,000 undergraduates - mid-sized and appropriate for a research university in a city that is simultaneously the social infrastructure.",
    lifestyle: "New Orleans, Louisiana is the most culturally distinctive major city in America - a city of 390,000 that has been continuously inhabited since 1718, that holds more historic archit",
    grad_cities: "New Orleans LA (30%) | Houston TX (15%) | New York NY (12%) | Atlanta GA (8%) | Miami FL (5%)."
  },
  "Purdue University": {
    name: "Purdue University",
    location: "West Lafayette, Indiana",
    region: "Midwest",
    pipeline: "Engineering (College of Engineering - top-10 nationally and the largest engineering college in America by enrollment - aerospace, biomedical, chemical, civil, computer science, electrical, industrial, materials science, mechanical, nuclear, agricultural -",
    hidden_pathway: "Purdue has produced more astronauts than any other university in the world - and Neil Armstrong was one of them. The list of Purdue astronauts includes Neil Armstrong (first human to walk on the moon), Gus Grissom (second American in space), Eugene C",
    the_room: "Purdue enrolls approximately 36,000 undergraduates - a large Big Ten flagship with the Boilermakers athletic identity competing across all major conference sports.",
    lifestyle: "West Lafayette, Indiana is a small city of 45,000 built around Purdue on the western bank of the Wabash River -",
    grad_cities: "Indianapolis IN (25%) | Chicago IL (15%) | Cincinnati OH (8%) | Detroit MI (7%) | New York NY (5%)."
  },
  "Syracuse University": {
    name: "Syracuse University",
    location: "Syracuse, New York",
    region: "Northeast",
    pipeline: "Communications and Media (S.I. Newhouse School of Public Communications - top-3 nationally and the most recognized media and communications brand in American higher education -",
    hidden_pathway: "The Newhouse alumni network is the hidden pathway that makes Syracuse the most specifically powerful media credential in America for one reason that no ranking captures: Newhouse graduates hire Newhouse graduates with a tribal loyalty that is documen",
    the_room: "Syracuse enrolls approximately 15,000 undergraduates - a mid-sized private research university with the Orange athletic identity in the ACC competing in basketball, football, lacrosse, and a full Powe",
    lifestyle: "Syracuse, New York is a mid-sized city of 148,000 in central New York state - a city with harsh winters that are genuinely transformative in the way that all long-winter college to",
    grad_cities: "New York NY (35%) | Boston MA (8%) | Washington DC (7%) | Los Angeles CA (6%) | Philadelphia PA (5%)."
  },
  "New York University": {
    name: "New York University",
    location: "New York City, New York",
    region: "Northeast",
    pipeline: "Business and Finance (Stern School of Business - top-10 nationally and the most New York-embedded business school in America - finance, accounting, marketing, real estate, entrepreneurship, luxury marketing, entertainment business - Wall Street -",
    hidden_pathway: "NYU Grossman School of Medicine is tuition-free - and this is the most consequential single financial decision made by any university in the database. In 2018, NYU became the first major research university in America to make medical school completel",
    the_room: "NYU enrolls approximately 27,000 undergraduates - a large private research university with no traditional campus, no football team, no Greek life, and no residential campus culture.",
    lifestyle: "New York City - Greenwich Village, specifically, and Washington Square Park as the social and physical heart of the NYU world.",
    grad_cities: "New York NY (65%) | Los Angeles CA (8%) | London UK (4%) | Washington DC (3%) | Boston MA (3%)."
  },
  "United States Military Academy": {
    name: "United States Military Academy",
    location: "West Point, New York",
    region: "Northeast",
    pipeline: "Engineering (Department of Civil and Mechanical Engineering, Department of Electrical Engineering and Computer Science, Department of Systems Engineering - top-15 nationally for undergraduate engineering among institutions that grant primarily bachelor's degrees -",
    hidden_pathway: "West Point's leadership formation is the hidden pathway that makes the post-military career trajectory of West Point graduates more financially and professionally powerful than most families understand.",
    the_room: "West Point enrolls approximately 4,400 cadets - an all-male institution until 1976 when women were first admitted, now approximately 20% female.",
    lifestyle: "West Point, New York sits on a granite bluff above the Hudson River 50 miles north of New York City - one of the most physically dramatic and historically significant university se",
    grad_cities: "Washington DC-Pentagon (30%) | New York NY (10%) | Worldwide military installations (40%) | Post-military civilian caree"
  },
  "Rutgers University": {
    name: "Rutgers University",
    location: "New Brunswick, New Jersey",
    region: "Northeast",
    pipeline: "Pharmacy (Ernest Mario School of Pharmacy - top-10 nationally - one of the most respected pharmacy programs in America and the most consequential pharmacy credential in New Jersey - major pharmacy chains, hospital pharmacy systems, pharmaceutical research companies -",
    hidden_pathway: "The New Jersey pharmaceutical corridor is the hidden pathway that makes Rutgers pharmacy and engineering programs the most geographically advantaged professional school credentials in America for one specific and enormously consequential industry.",
    the_room: "Rutgers enrolls approximately 36,000 undergraduates across multiple New Brunswick campuses - a large Big Ten flagship with the Scarlet Knights athletic identity competing in the Big Ten.",
    lifestyle: "New Brunswick, New Jersey is a mid-sized city of 56,000 on the Raritan River in central New Jersey - a genuine college city built around the Rutgers campus with a vibrant George St",
    grad_cities: "New York NY (30%) | Newark-Trenton NJ (25%) | Philadelphia PA (8%) | New Brunswick NJ (6%) | Boston MA (3%)."
  },
  "George Washington University": {
    name: "George Washington University",
    location: "Washington, DC",
    region: "Northeast",
    pipeline: "Political Science and Government (Elliott School of International Affairs - top-10 nationally for international affairs - the most DC-embedded international affairs school in America -",
    hidden_pathway: "The Foggy Bottom campus location is the hidden pathway that makes GWU's government, law, and international affairs programs structurally different from every peer institution - and it is a pathway defined entirely by geography.",
    the_room: "GWU enrolls approximately 11,000 undergraduates - a mid-sized private research university in the heart of Washington DC. The student body is assembled from all 50 states and 130+ countries with heavy",
    lifestyle: "Washington DC - Foggy Bottom specifically - is the most politically consequential neighborhood in America. The GWU campus is organized around the Kogan Plaza, the Marvin Center stu",
    grad_cities: "Washington DC (60%) | New York NY (10%) | Boston MA (5%) | Los Angeles CA (4%) | International (6%)."
  },
  "Webb Institute": {
    name: "Webb Institute",
    location: "Glen Cove, New York",
    region: "Northeast",
    pipeline: "Naval Architecture and Marine Engineering (the only degree Webb Institute grants - naval architecture and marine engineering - top-1 nationally and globally by definition because Webb is the only institution in America that grants exclusively this degree at the undergraduate leve",
    hidden_pathway: "Webb's full-tuition scholarship for every student is the hidden pathway that makes Webb the most financially transformative engineering education in America -",
    the_room: "Webb enrolls exactly 100 students at any given time - the smallest accredited engineering institution in the database and one of the smallest four-year institutions in America.",
    lifestyle: "Glen Cove, New York is a small city of 27,000 on the north shore of Long Island - the Gold Coast of Long Island, the setting for The Great Gatsby, a community of Victorian-era esta",
    grad_cities: "New York NY (35%) | Washington DC (15%) | Bath ME (10%) | Newport News VA (10%) | International (10%)."
  },
  "Colorado College": {
    name: "Colorado College",
    location: "Colorado Springs, Colorado",
    region: "West Coast",
    pipeline: "Liberal Arts (the Block Plan curriculum - one course at a time for 3.5 weeks, then a 4-day break, then the next course - every discipline taught through total immersion rather than simultaneous multi-course distribution -",
    hidden_pathway: "The Block Plan is the most radical and most consequential pedagogical innovation of any liberal arts college in the database - and it is radical in a specific and practically powerful way.",
    the_room: "CC enrolls approximately 2,100 undergraduates - comparable in size to Williams and Bowdoin. The student body is assembled from 48 states and 40+ countries with heavy representation from the Mountain W",
    lifestyle: "Colorado Springs, Colorado sits at the base of Pikes Peak at 6,035 feet elevation - a city of 480,000 that is simultaneously a military city (Fort Carson, Peterson Space Force Base",
    grad_cities: "Denver CO (20%) | Colorado Springs CO (10%) | San Francisco CA (10%) | New York NY (8%) | Los Angeles CA (6%)."
  },
  "Deep Springs College": {
    name: "Deep Springs College",
    location: "Deep Springs, California",
    region: "West Coast",
    pipeline: "Liberal Arts and Great Books (the most radical liberal arts curriculum in America - every Deep Springs student reads primary texts across philosophy, literature, political theory, science, and history in seminars led by visiting faculty who are among the most distinguished schola",
    hidden_pathway: "Deep Springs Valley is the hidden pathway that is not a pathway at all - it is a total environment. The Deep Springs College campus is located in Deep Springs Valley, a high desert valley in the White Mountains of eastern California at 5,200 feet ele",
    the_room: "Deep Springs enrolls 26 students total at any given time - 13 in each of two year-groups. The student body has been all-male since the college's founding in 1917 and became co-educational in 2018 foll",
    lifestyle: "Deep Springs Valley, California is one of the most remote and geologically spectacular locations of any educational institution in the world.",
    grad_cities: "Deep Springs Valley CA (during enrollment) | New York NY (25%) | Boston MA (20%) | Chicago IL (10%) | San Francisco CA ("
  },
  "Kettering University": {
    name: "Kettering University",
    location: "Flint, Michigan",
    region: "Midwest",
    pipeline: "Engineering (College of Engineering - top-40 nationally among regional universities - mechanical, electrical, computer, chemical, industrial, materials science, robotics -",
    hidden_pathway: "The General Motors relationship is the hidden pathway that makes Kettering engineering the most institutionally connected automotive engineering credential in America. Kettering University -",
    the_room: "Kettering enrolls approximately 2,000 undergraduates - among the smallest engineering-focused institutions in the database and one of the most specifically purposeful.",
    lifestyle: "Flint, Michigan is a city of 81,000 with a complex and consequential history - the birthplace of General Motors, the site of the 1936-37 Flint Sit-Down Strike that established the",
    grad_cities: "Detroit-Metro MI (35%) | Flint MI (10%) | Chicago IL (8%) | Cincinnati OH (6%) | Dayton OH (5%)."
  },
  "American University": {
    name: "American University",
    location: "Washington, DC",
    region: "Northeast",
    pipeline: "International Service and Global Affairs (School of International Service - top-10 nationally for international affairs and one of the most DC-embedded international affairs programs in America -",
    hidden_pathway: "The AU Washington Semester Program is the hidden pathway that makes AU the most accessible DC immersion experience in American higher education - and it is a pathway available not just to AU students but to students from 150 partner universities acro",
    the_room: "AU enrolls approximately 8,500 undergraduates - a mid-sized private university in a residential DC neighborhood. The student body is assembled from all 50 states and 140+ countries with heavy draw fro",
    lifestyle: "The American University campus in Spring Valley in Northwest DC is one of the most residentially beautiful private university campuses in the city -",
    grad_cities: "Washington DC (55%) | New York NY (10%) | Boston MA (5%) | Los Angeles CA (4%) | International (8%)."
  },
  "University of Connecticut": {
    name: "University of Connecticut",
    location: "Storrs, Connecticut",
    region: "Northeast",
    pipeline: "Engineering (School of Engineering - top-40 nationally - biomedical, chemical, civil, computer science, electrical, environmental, materials science, mechanical - major Connecticut and national employers including Pratt and Whitney, United Technologies, Raytheon, Sikorsky, Cigna,",
    hidden_pathway: "The Hartford insurance corridor is the hidden pathway that makes UConn actuarial science and business programs structurally more powerful than their rankings suggest for one of the most consequential financial services industries in America.",
    the_room: "UConn enrolls approximately 19,000 undergraduates - a large flagship with the Huskies athletic identity competing in the Big East Conference for basketball and the American Athletic Conference for foo",
    lifestyle: "Storrs, Connecticut is a census-designated place of 16,000 that exists entirely around the University of Connecticut -",
    grad_cities: "Hartford CT (30%) | New York NY (20%) | Boston MA (10%) | Stamford CT (8%) | Providence RI (4%)."
  },
  "Northeastern University": {
    name: "Northeastern University",
    location: "Boston, Massachusetts",
    region: "Northeast",
    pipeline: "Engineering (College of Engineering - top-25 nationally - bioengineering, chemical, civil, computer science, electrical, industrial, mechanical, materials science - major Boston and national employers including Raytheon, General Electric, Biogen, Boston Scientific, Moderna, and t",
    hidden_pathway: "Northeastern's co-op program is the most rapidly growing and most Boston-embedded experiential learning infrastructure of any private university in the Northeast -",
    the_room: "Northeastern enrolls approximately 20,000 undergraduates - a large private research university with the Huskies athletic identity in the Colonial Athletic Association providing Division I hockey and b",
    lifestyle: "Boston's Fenway-Kenmore neighborhood is one of the great American urban university districts - Northeastern, Wentworth Institute, MassArt, the Museum of Fine Arts, Symphony Hall, a",
    grad_cities: "Boston MA (45%) | New York NY (12%) | San Francisco CA (8%) | Washington DC (6%) | International (7%)."
  },
  "Case Western Reserve University": {
    name: "Case Western Reserve University",
    location: "Cleveland, Ohio",
    region: "Midwest",
    pipeline: "Engineering (Case School of Engineering - top-20 nationally - biomedical, chemical, civil, computer science, electrical, materials science, mechanical, systems and control, aerospace -",
    hidden_pathway: "The Cleveland Clinic relationship is the hidden pathway that makes CWRU medical and health sciences programs uniquely consequential in ways that the national ranking alone understates. The Cleveland Clinic -",
    the_room: "CWRU enrolls approximately 5,500 undergraduates - a mid-sized private research university with the Spartans athletic identity in the UAA (University Athletic Association) at Division III -",
    lifestyle: "University Circle, Cleveland, Ohio is one of the great American academic and cultural neighborhoods - a square mile that contains CWRU, the Cleveland Museum of Art (one of the fine",
    grad_cities: "Cleveland OH (35%) | Pittsburgh PA (8%) | Columbus OH (8%) | New York NY (7%) | Chicago IL (6%)."
  },
  "University of San Francisco": {
    name: "University of San Francisco",
    location: "San Francisco, California",
    region: "West Coast",
    pipeline: "Business and Management (School of Management - top-50 nationally among Jesuit universities - finance, accounting, marketing, entrepreneurship, international business, nonprofit management -",
    hidden_pathway: "San Francisco nursing wages are the hidden pathway that makes USF's nursing program the most financially consequential nursing credential in the database - and it is a pathway defined entirely by geography.",
    the_room: "USF enrolls approximately 6,500 undergraduates - a mid-sized Jesuit university in the heart of San Francisco. The student body is approximately 40% California residents with significant national and i",
    lifestyle: "San Francisco, California - USF's campus on Lone Mountain in the Inner Richmond neighborhood sits on one of the highest points in San Francisco with panoramic views of the city, th",
    grad_cities: "San Francisco CA (60%) | Silicon Valley CA (15%) | Los Angeles CA (5%) | Seattle WA (3%) | International (6%)."
  },
  "Baylor University": {
    name: "Baylor University",
    location: "Waco, Texas",
    region: "Southeast",
    pipeline: "Business and Finance (Hankamer School of Business - top-40 nationally - finance, accounting, marketing, real estate, entrepreneurship, supply chain, insurance - major Texas employers including H-E-B, McLane Company, Hillcrest Baptist, and the rapidly growing Waco and Austin busin",
    hidden_pathway: "The Baylor College of Medicine affiliation is the hidden pathway that makes Baylor University's pre-medicine program among the most practically consequential in Texas. Baylor College of Medicine in Houston -",
    the_room: "Baylor enrolls approximately 16,000 undergraduates - a large faith-based research university with the Bears athletic identity in the Big 12 competing across all major conference sports.",
    lifestyle: "Waco, Texas is a city of 140,000 in the heart of Texas at the intersection of I-35 and US-84 - the geographic center of the Texas triangle formed by Dallas, Austin, and San Antonio",
    grad_cities: "Dallas-Fort Worth TX (25%) | Houston TX (15%) | Austin TX (12%) | Waco TX (8%) | San Antonio TX (6%)."
  },
  "College of William and Mary": {
    name: "College of William and Mary",
    location: "Williamsburg, Virginia",
    region: "Southeast",
    pipeline: "Law (William and Mary Law School - top-30 nationally - federal clerkships, Virginia state courts, BigLaw in DC and Virginia, government contracts law, constitutional law -",
    hidden_pathway: "The Oldest Law School in America credential is the hidden pathway that gives William and Mary Law a specific and durable institutional weight in Virginia and DC legal circles that no peer Southern public law school can claim.",
    the_room: "William and Mary enrolls approximately 6,500 undergraduates - a small public university that operates more like a liberal arts college than a flagship research university in its academic culture.",
    lifestyle: "Williamsburg, Virginia is one of the most historically significant small cities in America - the colonial capital of Virginia, the site of the most complete 18th-century historic d",
    grad_cities: "Washington DC-Northern Virginia (35%) | Richmond VA (15%) | Norfolk VA (8%) | New York NY (7%) | Boston MA (5%)."
  },
};

function getSchoolContent(schoolNames) {
  return schoolNames.map(n => UNIVERSITY_CONTENT[n]||null).filter(Boolean);
}

function formatSchoolsForPrompt(schools) {
  return schools.map(s =>
    `SCHOOL: ${s.name} (${s.location})\nPIPELINE: ${s.pipeline}\nHIDDEN PATHWAY: ${s.hidden_pathway}\nTHE ROOM: ${s.the_room}\nLIFESTYLE: ${s.lifestyle}\nGRADS GO TO: ${s.grad_cities}`
  ).join("\n\n---\n\n");
}

if(typeof module!=="undefined") module.exports={UNIVERSITY_CONTENT,getSchoolContent,formatSchoolsForPrompt};