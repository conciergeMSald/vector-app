/**
 * VECTOR Lifescape — University Content Database
 * Version: 2.0 — June 21, 2026
 * Lightweight content snapshot for callD school recommendation generation.
 * 216 schools — pipeline, hidden_pathway, the_room, lifestyle, grad_cities
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

  // ── NEW SCHOOLS — Added June 21 2026 (89 schools from university-db.js) ──────

  "San Diego State University": {
    name: "San Diego State University",
    location: "San Diego, California",
    region: "Southern California",
    pipeline: "Technology and Engineering (Google, Amazon, Qualcomm, HP, Microsoft, IBM, Adobe - Qualcomm was co-founded by SDSU alumnus Irwin Jacobs and remains a primary campus recruiter - College of Engineering p",
    hidden_pathway: "San Diego's biotech cluster is the second-largest in America and SDSU sits inside it. The Salk Institute, Scripps Research, UC San Diego, and over 1,0",
    the_room: "Approximately 79% of SDSU students are California residents and 15% are from out of state with 6.6% international - a he",
    lifestyle: "",
    grad_cities: "San Diego CA (65%) | Los Angeles CA (15%) | San Francisco Bay Area CA (8%) | Other California (5%) | Out of California ("
  },
  "UC Santa Barbara": {
    name: "UC Santa Barbara",
    location: "Santa Barbara, California",
    region: "Southern California",
    pipeline: "Technology and Engineering (College of Engineering - electrical and computer engineering, mechanical, chemical, materials science - Silicon Valley and Santa Barbara tech corridor employers - Google, A",
    hidden_pathway: "UCSB has produced 8 Nobel Prize-winning faculty members in physics, chemistry, and economics - a concentration of Nobel laureates that rivals institut",
    the_room: "Approximately 80% of UCSB students are California residents - approximately 15% are from out of state and 11% are intern",
    lifestyle: "",
    grad_cities: "San Francisco Bay Area CA (25%) | Los Angeles CA (25%) | Santa Barbara CA (12%) | San Diego CA (8%) | Other California ("
  },
  "UCLA": {
    name: "UCLA",
    location: "Los Angeles, California",
    region: "Southern California",
    pipeline: "Technology and computing, Entertainment and film, Healthcare and medicine, Business and consulting, Engineering and aerospace, Public health and policy, Nursing, Law, Music and performing arts, Archit",
    hidden_pathway: "Three hidden pathways. First: UCLA TFT is the only film school in America that combines theater, film, television, and digital media in a single profe",
    the_room: "33,500 undergraduates - large flagship campus. The room at UCLA is the most ethnically and economically diverse of any t",
    lifestyle: "",
    grad_cities: "Los Angeles CA (58%) | San Francisco CA (12%) | New York NY (7%). The LA concentration reflects both the pull of the cit"
  },
  "USC": {
    name: "USC",
    location: "Los Angeles, California",
    region: "Southern California",
    pipeline: "Entertainment and film, Technology and computing, Business and consulting, Engineering and aerospace, Communications and media, Music industry, Architecture and design, Healthcare and pharmacy. Top em",
    hidden_pathway: "Three hidden pathways. First: The Trojan Network operates as an active hiring system, not a passive alumni database. Every Hollywood office, every maj",
    the_room: "Approximately 22,000 undergraduates - large but not massive for a major research university. 25% Greek life participatio",
    lifestyle: "",
    grad_cities: "Los Angeles CA (52%) | New York NY (14%) | San Francisco CA (9%). The LA concentration is the defining feature and also "
  },
  "Rice University": {
    name: "Rice University",
    location: "Houston, Texas",
    region: "Texas + Southwest",
    pipeline: "Energy and petroleum, Biomedical engineering and life sciences, Technology and computing, Finance and investment banking, Architecture and urban design, Music performance, Consulting, Healthcare and m",
    hidden_pathway: "Three hidden pathways that define Rice's distinctiveness. First: Rice sits directly across the street from the Texas Medical Center - the largest medi",
    the_room: "Approximately 4,400 undergraduates - one of the smallest research universities in the country. The residential college s",
    lifestyle: "",
    grad_cities: "Houston TX (48%) | New York NY (10%) | San Francisco CA (8%). The Houston concentration reflects Rice's physical positio"
  },
  "SMU": {
    name: "SMU",
    location: "Dallas, Texas",
    region: "Texas + Southwest",
    pipeline: "Finance, Consulting, Luxury Retail and Beauty, Real Estate, Energy, Law, Technology, Performing Arts and Media. Top employers by college: COX - Goldman Sachs, JPMorgan, McKinsey, Deloitte, Neiman Marc",
    hidden_pathway: "Two hidden pathways most California families miss entirely. First: SMU's Meadows School of the Arts houses the Temerlin Advertising Institute - one of",
    the_room: "One of the highest concentrations of ultra-high-net-worth student families in America. Hunt family (Kansas City Chiefs),",
    lifestyle: "",
    grad_cities: "Dallas TX (62%) | New York NY (11%) | Houston TX (9%). Dallas concentration is the defining feature - an SMU Cox graduat"
  },
  "TCU": {
    name: "TCU",
    location: "Fort Worth, Texas",
    region: "Texas + Southwest",
    pipeline: "Finance and investment banking, Consulting, Technology sales, Healthcare and nursing, Media and communications, Fine arts and performance, Real estate, Supply chain. Top employers by college: FINANCE ",
    hidden_pathway: "Two hidden pathways that no California family knows. First: TCU's nurse anesthesia program is ranked #9 in the country - one of only a handful of prog",
    the_room: "Smaller than SMU and Texas Tech at ~10,000 undergraduates - genuine intimacy results. 40% of students in Greek life acro",
    lifestyle: "",
    grad_cities: "Dallas-Fort Worth (58%) | Houston (12%) | New York NY (8%). Fort Worth gives direct DFW access. The 5th largest media ma"
  },
  "Texas A&M University": {
    name: "Texas A&M University",
    location: "College Station, Texas",
    region: "Texas + Southwest",
    pipeline: "Engineering and petroleum, Agriculture and food systems, Veterinary medicine, Business and consulting, Aerospace and defense, Technology, Government and military, Energy. Top employers by college: MAY",
    hidden_pathway: "Three hidden pathways. First: Texas A&M's veterinary medicine program (#4 nationally, highest ranking in school history) is one of only 33 accredited ",
    the_room: "74,000+ undergraduates - one of the largest universities in America. The room is economically middle-class and Texas-cen",
    lifestyle: "",
    grad_cities: "Houston TX (32%) | Dallas-Fort Worth TX (24%) | Austin TX (14%). The Houston concentration reflects Texas A&M's deep roo"
  },
  "Texas Tech University": {
    name: "Texas Tech University",
    location: "Lubbock, Texas",
    region: "Texas + Southwest",
    pipeline: "Energy and natural resources, Finance and accounting, Agriculture and food systems, Meat and livestock industry, Hospitality management, Aerospace and defense, Technology, Media and communications, Wi",
    hidden_pathway: "Three hidden pathways no California family knows. First: Texas Tech has the largest retail meat cooler on any university campus in America - the Raide",
    the_room: "Genuinely economically diverse - 26% of students receive Pell Grant aid. The room is Texas ambition across every industr",
    lifestyle: "",
    grad_cities: "Dallas-Fort Worth (38%) | Houston (28%) | Lubbock-Midland-Odessa corridor (14%). 91% of students are Texas residents - g"
  },
  "UT Austin": {
    name: "UT Austin",
    location: "Austin, Texas",
    region: "Texas + Southwest",
    pipeline: "Technology and software, Consulting, Finance, Petroleum engineering, Journalism and media, Public policy and government, Social work and nonprofits, Engineering across all disciplines, Natural science",
    hidden_pathway: "Three hidden pathways that even Texas families miss. First: The Moody College of Communication is the #1 public university communication and media pro",
    the_room: "53,864 students - one of the largest universities in America - makes the room vast and economically and ethnically diver",
    lifestyle: "",
    grad_cities: "Austin TX (44%) | Dallas-Fort Worth TX (18%) | New York NY (8%). Austin retention is the defining feature - the city's e"
  },
  "University of North Carolina Chapel Hill": {
    name: "University of North Carolina Chapel Hill",
    location: "Chapel Hill, North Carolina",
    region: "Southeast",
    pipeline: "Business and Finance (Kenan-Flagler Business School - top-10 undergraduate business program nationally - finance, accounting, marketing, real estate, entrepreneurship - Bank of America, Wells Fargo, G",
    hidden_pathway: "UNC Eshelman School of Pharmacy is the number 1 pharmacy school in America - for the third consecutive US News ranking cycle. This is not a close comp",
    the_room: "Approximately 82% of UNC Chapel Hill undergraduates are North Carolina residents - the state legislature maintains a har",
    lifestyle: "",
    grad_cities: "Raleigh-Durham-Chapel Hill Research Triangle NC (35%) | Charlotte NC (20%) | Washington DC (10%) | New York NY (8%) | At"
  },
  "UC Berkeley": {
    name: "UC Berkeley",
    location: "Berkeley, California",
    region: "West Coast",
    pipeline: "Technology and software, Finance and investment banking, Consulting, Startups and venture capital, Public policy and government, Journalism and media, Engineering across all disciplines, Chemistry and",
    hidden_pathway: "Three hidden pathways. First: The Goldman School of Public Policy is ranked #1 in public policy analysis nationally and #3 overall in public affairs -",
    the_room: "Approximately 33,000 undergraduates. The room at Berkeley is defined by intellectual ambition and geographic destiny mor",
    lifestyle: "",
    grad_cities: "San Francisco-Bay Area CA (54%) | New York NY (11%) | Los Angeles CA (8%). The Bay Area concentration is the defining fe"
  },
  "University of Illinois Urbana-Champaign": {
    name: "University of Illinois Urbana-Champaign",
    location: "Champaign, Illinois",
    region: "Midwest",
    pipeline: "Engineering and Computer Science (Grainger College of Engineering ranked 5th overall and 4th among public universities nationally - Computer Science average salary $139,000 with median $30,000 signing",
    hidden_pathway: "The Grainger College of Engineering CS program acceptance rate of 7.2% is more selective than the overall admissions rates of Harvard, Yale, and Princ",
    the_room: "Illinois residents make up approximately 71% of UIUC freshmen - the remaining 29% from out of state and international, w",
    lifestyle: "",
    grad_cities: "Chicago IL (30%) | Champaign-Urbana IL (15%) | San Francisco Bay Area CA (15%) | New York NY (10%) | Other Midwest (10%)"
  },
  "University of Wisconsin-Madison": {
    name: "University of Wisconsin-Madison",
    location: "Madison, Wisconsin",
    region: "Midwest",
    pipeline: "Engineering and Technology (College of Engineering - ranked 17th overall and 9th among public universities nationally - Computer Engineering average salary $78,839, Industrial Engineering $74,061, Che",
    hidden_pathway: "Epic Systems - the company that built and runs the electronic health records system used by over 54% of American patients - is headquartered in Verona",
    the_room: "UW-Madison is the only University of Wisconsin campus where fewer than half of students are Wisconsin residents - approx",
    lifestyle: "",
    grad_cities: "Chicago IL (22%) | Madison WI (18%) | Milwaukee WI (10%) | Minneapolis MN (8%) | New York NY (8%) | San Francisco CA (7%"
  },
  "Belmont University": {
    name: "Belmont University",
    location: "Nashville, Tennessee",
    region: "South",
    pipeline: "Music Business and Entertainment Industry (Belmont's Mike Curb College of Entertainment and Music Business is the most specifically connected music industry program in the world to a single city's act",
    hidden_pathway: "The hidden pathway at Belmont is the songwriting program's alumni royalty infrastructure. The music publishing industry's royalty system means that a ",
    the_room: "Belmont enrolls approximately 8,500 students on a campus that occupies the former Belmont Mansion estate in the Belmont-",
    lifestyle: "",
    grad_cities: "Nashville TN (55%) | Los Angeles CA (12%) | New York NY (10%) | Atlanta GA (6%) | Austin TX (4%) | Chicago IL (3%) | Int"
  },
  "Binghamton University": {
    name: "Binghamton University",
    location: "Binghamton, New York",
    region: "Northeast",
    pipeline: "Business and Finance (School of Management - top-75 nationally and among the most cost-efficient business schools in the Northeast for students seeking Wall Street access at public university tuition ",
    hidden_pathway: "The hidden pathway at Binghamton is the School of Management's specific Wall Street and Big 4 accounting recruiting depth relative to its public unive",
    the_room: "Binghamton enrolls approximately 17,000 undergraduates on a campus set in the hills south of the Susquehanna River, 3 mi",
    lifestyle: "",
    grad_cities: "New York NY (42%) | Albany NY (10%) | Philadelphia PA (7%) | Boston MA (7%) | Washington DC (6%) | San Francisco-Bay Are"
  },
  "Denison University": {
    name: "Denison University",
    location: "Granville, Ohio",
    region: "Midwest",
    pipeline: "Business Economics and Finance (Denison's economics and financial economics programs have produced a disproportionate concentration of Wall Street analysts, investment bankers, and financial services ",
    hidden_pathway: "The hidden pathway at Denison is the alumni mentorship culture that the college's development office and alumni relations program have deliberately cu",
    the_room: "Denison enrolls approximately 2,400 undergraduates on a hillside campus above Granville, Ohio — a New England-style vill",
    lifestyle: "",
    grad_cities: "New York NY (22%) | Columbus OH (20%) | Chicago IL (10%) | Washington DC (8%) | Cleveland OH (7%) | Los Angeles CA (6%) "
  },
  "Flagler College": {
    name: "Flagler College",
    location: "St. Augustine, Florida",
    region: "Southeast",
    pipeline: "Education (Flagler's education program is among the strongest in Northeast Florida and produces the largest share of certified teachers for the St. Johns County and Duval County school systems — St. J",
    hidden_pathway: "The hidden pathway at Flagler is the Ponce de León Hotel campus itself as a professional credential for art history, interior design, and hospitality ",
    the_room: "Flagler enrolls approximately 2,800 undergraduates on a campus that is, without serious competition, the most architectu",
    lifestyle: "",
    grad_cities: "St. Augustine-Jacksonville FL (42%) | Orlando FL (10%) | Daytona Beach FL (8%) | Tampa FL (7%) | Atlanta GA (5%) | New Y"
  },
  "Furman University": {
    name: "Furman University",
    location: "Greenville, South Carolina",
    region: "Southeast",
    pipeline: "Business and Advanced Manufacturing (the Greenville-Spartanburg upstate South Carolina corridor is one of the most concentrated advanced manufacturing regions in the Southeast and Furman occupies the ",
    hidden_pathway: "The hidden pathway at Furman is the Furman Advantage program combined with the BMW and Michelin employer relationships in the Greenville-Spartanburg c",
    the_room: "Furman enrolls approximately 2,800 undergraduates on what is consistently described as one of the most beautiful college",
    lifestyle: "",
    grad_cities: "Greenville-Spartanburg SC (30%) | Charlotte NC (18%) | Atlanta GA (12%) | Washington DC (7%) | New York NY (6%) | Raleig"
  },
  "Grinnell College": {
    name: "Grinnell College",
    location: "Grinnell, Iowa",
    region: "Midwest",
    pipeline: "Academia and PhD Placement (Grinnell ranks among the top five liberal arts colleges in America for percentage of graduates who earn PhDs — the American Institute of Physics consistently ranks Grinnell",
    hidden_pathway: "The hidden pathway at Grinnell is the endowment itself as a professional credential and curriculum. Grinnell's endowment — over $2 billion for an inst",
    the_room: "Grinnell enrolls approximately 1,700 undergraduates in Grinnell, Iowa — a town of 9,000 in the flat agricultural terrain",
    lifestyle: "",
    grad_cities: "Chicago IL (18%) | New York NY (20%) | San Francisco-Bay Area CA (12%) | Washington DC (10%) | Boston MA (8%) | Minneapo"
  },
  "Georgia State University": {
    name: "Georgia State University",
    location: "Atlanta, Georgia",
    region: "Southeast",
    pipeline: "Business and Finance (J. Mack Robinson College of Business - top-50 nationally - one of the largest business schools in America by enrollment and the most connected business school to Atlanta's specif",
    hidden_pathway: "The hidden pathway at Georgia State is the university's nationally recognized student success and graduation rate improvement program combined with th",
    the_room: "Georgia State enrolls approximately 54,000 students across its Atlanta and Perimeter campuses - one of the largest unive",
    lifestyle: "",
    grad_cities: "Atlanta GA (72%) | Washington DC (7%) | New York NY (5%) | Charlotte NC (4%) | Dallas TX (3%) | Los Angeles CA (3%) | In"
  },
  "High Point University": {
    name: "High Point University",
    location: "High Point, North Carolina",
    region: "Southeast",
    pipeline: "Business and Entrepreneurship (the Nido R. Qubein School of Communication and the Earl N. Phillips School of Business are the institutional core of High Point University's career preparation model — H",
    hidden_pathway: "The hidden pathway at High Point University is the High Point Market combined with the university's entrepreneurship ecosystem. The High Point Market ",
    the_room: "High Point University enrolls approximately 5,000 undergraduates on a campus that President Qubein has deliberately desi",
    lifestyle: "",
    grad_cities: "Charlotte NC (22%) | Greensboro-Winston Salem-High Point NC (28%) | Raleigh-Durham NC (14%) | Washington DC (6%) | New Y"
  },
  "Ithaca College": {
    name: "Ithaca College",
    location: "Ithaca, New York",
    region: "Northeast",
    pipeline: "Communications and Media (the Roy H. Park School of Communications is consistently ranked among the top five undergraduate communications schools in America and is the defining institutional credentia",
    hidden_pathway: "The hidden pathway at Ithaca College is the Park School's sports broadcasting alumni network combined with the college's partnership with Cornell Univ",
    the_room: "Ithaca College enrolls approximately 5,500 undergraduates on a campus on the south hill above Ithaca, New York — a city ",
    lifestyle: "",
    grad_cities: "New York NY (38%) | Los Angeles CA (14%) | Boston MA (7%) | Washington DC (6%) | Chicago IL (5%) | Ithaca-Binghamton NY "
  },
  "James Madison University": {
    name: "James Madison University",
    location: "Harrisonburg, Virginia",
    region: "Southeast",
    pipeline: "Communications and Media (the School of Media Arts and Design at JMU is consistently ranked among the top ten undergraduate communications programs in America and is the single most productive feeder ",
    hidden_pathway: "The hidden pathway at JMU is the SMAD program's specific positioning in the DC public affairs and strategic communications ecosystem. Washington DC's ",
    the_room: "JMU enrolls approximately 22,000 undergraduates on a campus that occupies both sides of South Main Street in Harrisonbur",
    lifestyle: "",
    grad_cities: "Washington DC-Northern Virginia (38%) | Richmond VA (12%) | Harrisonburg-Charlottesville VA (10%) | New York NY (8%) | C"
  },
  "Kenyon College": {
    name: "Kenyon College",
    location: "Gambier, Ohio",
    region: "Midwest",
    pipeline: "Writing Publishing and Media (Kenyon has a specific and documented claim to the most concentrated media and publishing alumni network of any small college in America — the Kenyon Review, founded in 19",
    hidden_pathway: "The hidden pathway at Kenyon is the Kenyon Review and the alumni culture it has created around literary and intellectual seriousness. The Kenyon Revie",
    the_room: "Kenyon enrolls approximately 1,800 undergraduates in Gambier, Ohio — a hilltop village of stone buildings, mature trees,",
    lifestyle: "",
    grad_cities: "New York NY (30%) | Columbus OH (12%) | Washington DC (10%) | Boston MA (8%) | Chicago IL (7%) | Los Angeles CA (8%) | A"
  },
  "Lehigh University": {
    name: "Lehigh University",
    location: "Bethlehem, Pennsylvania",
    region: "Northeast",
    pipeline: "Engineering and Applied Science (P.C. Rossin College of Engineering and Applied Science - top-50 nationally - the integration of engineering and business at Lehigh is structural rather than cosmetic, ",
    hidden_pathway: "The hidden pathway at Lehigh is the IBE program's specific positioning in the quantitative finance and technology product management hiring market. Wa",
    the_room: "Lehigh enrolls approximately 7,200 undergraduates on a hillside campus above Bethlehem, Pennsylvania that is one of the ",
    lifestyle: "",
    grad_cities: "New York NY (28%) | Philadelphia PA (18%) | Washington DC (10%) | Boston MA (8%) | San Francisco-Bay Area CA (7%) | Chic"
  },
  "University of Memphis": {
    name: "University of Memphis",
    location: "Memphis, Tennessee",
    region: "South",
    pipeline: "Business and Supply Chain Management (Fogelman College of Business and Economics - top-50 nationally for supply chain management - Memphis is the logistics capital of America and the Fogelman supply c",
    hidden_pathway: "The hidden pathway at the University of Memphis is the FedEx corporate relationship combined with the supply chain management program's proximity to t",
    the_room: "The University of Memphis enrolls approximately 21,000 students on a campus in the Midtown neighborhood of Memphis - a h",
    lifestyle: "",
    grad_cities: "Memphis TN (58%) | Nashville TN (10%) | Atlanta GA (8%) | Dallas TX (6%) | Chicago IL (5%) | Washington DC (4%) | Housto"
  },
  "Oberlin College": {
    name: "Oberlin College",
    location: "Oberlin, Ohio",
    region: "Midwest",
    pipeline: "Music and Conservatory Performance (the Oberlin Conservatory of Music is the oldest continuously operating conservatory in America, founded in 1865, and is consistently ranked among the top three cons",
    hidden_pathway: "The hidden pathway at Oberlin is the double-degree program that allows Conservatory students to earn both the Bachelor of Music and the Bachelor of Ar",
    the_room: "Oberlin enrolls approximately 2,900 undergraduates — 2,100 in the College and 650 in the Conservatory — on a campus in O",
    lifestyle: "",
    grad_cities: "New York NY (28%) | Cleveland OH (15%) | Chicago IL (10%) | San Francisco-Bay Area CA (8%) | Washington DC (7%) | Los An"
  },
  "Ohio Wesleyan University": {
    name: "Ohio Wesleyan University",
    location: "Delaware, Ohio",
    region: "Midwest",
    pipeline: "Pre-Medicine and Health Sciences (Ohio Wesleyan's pre-medical program has consistently produced medical school acceptance rates that exceed national averages for liberal arts colleges — the combinatio",
    hidden_pathway: "The hidden pathway at Ohio Wesleyan is the Sagan National Colloquium combined with the university's extraordinary study abroad participation rate. The",
    the_room: "Ohio Wesleyan enrolls approximately 1,400 undergraduates on a campus in Delaware, Ohio — a county seat of 40,000 that is",
    lifestyle: "",
    grad_cities: "Columbus OH (35%) | Cleveland OH (10%) | New York NY (10%) | Chicago IL (8%) | Washington DC (7%) | International (8%) |"
  },
  "Quinnipiac University": {
    name: "Quinnipiac University",
    location: "Hamden, Connecticut",
    region: "Northeast",
    pipeline: "Health Sciences and Pre-Medicine (Quinnipiac's Frank H. Netter MD School of Medicine and the comprehensive health science programs — physician assistant studies, physical therapy, occupational therapy",
    hidden_pathway: "The hidden pathway at Quinnipiac is the Polling Institute's specific contribution to journalism and political science students. The Quinnipiac Univers",
    the_room: "Quinnipiac enrolls approximately 7,000 undergraduates on two connected campuses in Hamden — the Mount Carmel campus on a",
    lifestyle: "",
    grad_cities: "New Haven-Hartford CT (38%) | New York NY (22%) | Boston MA (8%) | Providence RI (6%) | Philadelphia PA (5%) | Washingto"
  },
  "Reed College": {
    name: "Reed College",
    location: "Portland, Oregon",
    region: "Pacific Northwest",
    pipeline: "Academia and PhD Placement (Reed produces more PhD graduates per capita than virtually any other college in America - the American Institute of Physics consistently ranks Reed first or second national",
    hidden_pathway: "The Reed senior thesis is the hidden pathway that explains outcomes the acceptance rate alone does not predict. Every Reed student completes a year-lo",
    the_room: "Reed enrolls approximately 1,500 students on a 116-acre campus in the Eastmoreland neighborhood of southeast Portland - ",
    lifestyle: "",
    grad_cities: "Portland OR (25%) | New York NY (15%) | San Francisco-Bay Area CA (20%) | Boston-Cambridge MA (12%) | Seattle WA (10%) |"
  },
  "Rhode Island School of Design": {
    name: "Rhode Island School of Design",
    location: "Providence, Rhode Island",
    region: "Northeast",
    pipeline: "Industrial and Product Design (RISD's industrial design program is consistently ranked first or second nationally and among the top five globally — Apple, Nike, IDEO, Frog Design, and every major prod",
    hidden_pathway: "The hidden pathway at RISD is the foundation year's development of material intelligence that every subsequent year of the program builds upon. RISD r",
    the_room: "RISD enrolls approximately 2,000 undergraduates in Providence's College Hill neighborhood, sharing a campus boundary wit",
    lifestyle: "",
    grad_cities: "New York NY (38%) | Providence RI (15%) | San Francisco-Bay Area CA (14%) | Los Angeles CA (12%) | Boston MA (8%) | Inte"
  },
  "Rollins College": {
    name: "Rollins College",
    location: "Winter Park, Florida",
    region: "Southeast",
    pipeline: "Business and Entrepreneurship (the Crummer Graduate School of Business at Rollins is the highest-ranked MBA program in Florida outside Miami and is housed on the same campus as the undergraduate colle",
    hidden_pathway: "The hidden pathway at Rollins is the Crummer Graduate School of Business's physical presence on the undergraduate campus. Most liberal arts colleges a",
    the_room: "Rollins enrolls approximately 1,900 undergraduates on a campus on the shores of Lake Virginia in Winter Park — one of th",
    lifestyle: "",
    grad_cities: "Orlando FL (40%) | Miami FL (12%) | Tampa FL (8%) | Atlanta GA (7%) | New York NY (7%) | Washington DC (5%) | Academic a"
  },
  "San Jose State University": {
    name: "San Jose State University",
    location: "San Jose, California",
    region: "West",
    pipeline: "Engineering and Computer Science (the Charles W. Davidson College of Engineering is the most Silicon Valley-integrated engineering program in the California State University system — San Jose State's ",
    hidden_pathway: "The hidden pathway at San Jose State is the NASA Ames Research Center relationship combined with the university's aerospace engineering and aviation p",
    the_room: "SJSU enrolls approximately 33,000 students on a campus in downtown San Jose — the urban campus occupies multiple city bl",
    lifestyle: "",
    grad_cities: "San Jose-Silicon Valley CA (52%) | San Francisco CA (18%) | Oakland-East Bay CA (8%) | Los Angeles CA (5%) | Seattle WA "
  },
  "University of Tulsa": {
    name: "University of Tulsa",
    location: "Tulsa, Oklahoma",
    region: "South Central",
    pipeline: "Petroleum Engineering (College of Engineering and Natural Sciences - top-5 nationally for petroleum engineering - the single most financially consequential undergraduate engineering degree available a",
    hidden_pathway: "The hidden pathway at TU is the intersection of its cybersecurity program with the energy industry's accelerating digitization. Every major pipeline o",
    the_room: "TU enrolls approximately 3,800 undergraduates on a campus that punches far above its enrollment weight in physical quali",
    lifestyle: "",
    grad_cities: "Tulsa OK (42%) | Oklahoma City OK (12%) | Houston TX (15%) | Dallas TX (8%) | Denver CO (6%) | Washington DC (5%) | Inte"
  },
  "University of Idaho": {
    name: "University of Idaho",
    location: "Moscow, Idaho",
    region: "Pacific Northwest",
    pipeline: "Law (University of Idaho College of Law - one of only two law schools in Idaho and the oldest law school in the Pacific Northwest - Idaho's legal profession is almost entirely trained at UIdaho Law or",
    hidden_pathway: "The hidden pathway at UIdaho is the Western Undergraduate Exchange program combined with the law school's natural resources and water law specializati",
    the_room: "UIdaho enrolls approximately 11,000 students in Moscow, a college town of 26,000 in the Palouse region of northern Idaho",
    lifestyle: "",
    grad_cities: "Boise ID (38%) | Seattle WA (12%) | Portland OR (10%) | Spokane WA (8%) | Twin Falls-Magic Valley ID (7%) | Salt Lake Ci"
  },
  "Union College": {
    name: "Union College",
    location: "Schenectady, New York",
    region: "Northeast",
    pipeline: "Engineering and Liberal Arts Integration (Union is one of the oldest and most distinctive institutions in the country that specifically integrates engineering education with liberal arts formation — f",
    hidden_pathway: "The hidden pathway at Union is the early assurance medical program with the Icahn School of Medicine at Mount Sinai, which is one of the most prestigi",
    the_room: "Union enrolls approximately 2,300 undergraduates on a campus that is one of the oldest and most physically coherent in t",
    lifestyle: "",
    grad_cities: "New York NY (30%) | Albany-Schenectady NY (18%) | Boston MA (10%) | Washington DC (8%) | Hartford-Springfield CT (6%) | "
  },
  "University of Nevada Las Vegas": {
    name: "University of Nevada Las Vegas",
    location: "Las Vegas, Nevada",
    region: "Southwest",
    pipeline: "Hospitality and Hotel Administration (William F. Harrah College of Hospitality - top-2 nationally and top-5 globally - the most industry-proximate hospitality program in the world - MGM Resorts Intern",
    hidden_pathway: "The hidden pathway at UNLV is the intersection of hospitality technology and data analytics that Harrah College is building as a formal concentration.",
    the_room: "UNLV enrolls approximately 30,000 students - a large public university by enrollment but with a distinctive demographic ",
    lifestyle: "",
    grad_cities: "Las Vegas NV (65%) | Los Angeles CA (8%) | Phoenix AZ (5%) | San Francisco-Bay Area CA (4%) | Seattle WA (3%) | Internat"
  },
  "University of Nevada Reno": {
    name: "University of Nevada Reno",
    location: "Reno, Nevada",
    region: "Mountain West",
    pipeline: "Mining and Metallurgical Engineering (Mackay School of Earth Sciences and Engineering - top-10 nationally for mining engineering - one of only a handful of programs in America that specifically trains",
    hidden_pathway: "The hidden pathway at UNR is the intersection of the Reno-Tahoe technology corridor and the university's engineering programs. The region that locals ",
    the_room: "UNR enrolls approximately 21,000 students on a campus that is genuinely beautiful by Mountain West public university sta",
    lifestyle: "",
    grad_cities: "Reno-Sparks NV (45%) | Las Vegas NV (12%) | San Francisco-Bay Area CA (14%) | Sacramento CA (8%) | Los Angeles CA (6%) |"
  },
  "University of Rhode Island": {
    name: "University of Rhode Island",
    location: "Kingston, Rhode Island",
    region: "Northeast",
    pipeline: "Ocean Engineering and Marine Sciences (URI is one of the preeminent ocean and marine science research institutions in America — the Graduate School of Oceanography is consistently ranked among the top",
    hidden_pathway: "The hidden pathway at URI is the intersection of the CVS Health headquarters proximity and the pharmacy program's direct recruiting pipeline. CVS Heal",
    the_room: "URI enrolls approximately 17,000 undergraduates on a campus in Kingston, a college village in the rural South County reg",
    lifestyle: "",
    grad_cities: "Providence RI (28%) | Boston MA (25%) | New York NY (15%) | Hartford CT (8%) | Washington DC (6%) | San Diego CA (4%) | "
  },
  "University of Tennessee at Chattanooga": {
    name: "University of Tennessee at Chattanooga",
    location: "Chattanooga, Tennessee",
    region: "South",
    pipeline: "Engineering and Advanced Manufacturing (College of Engineering and Computer Science - the Chattanooga manufacturing corridor is among the most technologically advanced in America - Volkswagen's 3.7-mi",
    hidden_pathway: "The hidden pathway at UTC is the Volkswagen co-op program combined with the Gig City technology infrastructure. Volkswagen's Chattanooga facility is t",
    the_room: "UTC enrolls approximately 11,500 students on a campus that occupies the Stringer's Ridge area of Chattanooga — positione",
    lifestyle: "",
    grad_cities: "Chattanooga TN (48%) | Nashville TN (14%) | Atlanta GA (12%) | Knoxville TN (8%) | Birmingham AL (5%) | Charlotte NC (5%"
  },
  "Washington and Lee University": {
    name: "Washington and Lee University",
    location: "Lexington, Virginia",
    region: "Southeast",
    pipeline: "Law (Washington and Lee School of Law - top-25 nationally - one of the most consistently placed law schools for Virginia, DC, and the broader Southeast legal market - the law school and the undergradu",
    hidden_pathway: "The hidden pathway at Washington and Lee is the Honor System's specific effect on employer trust and graduate school admission outcomes. The W&L Honor",
    the_room: "Washington and Lee enrolls approximately 1,850 undergraduates on the Colonnade — one of the most architecturally disting",
    lifestyle: "",
    grad_cities: "Washington DC (28%) | New York NY (16%) | Richmond VA (12%) | Charlotte NC (8%) | Atlanta GA (7%) | Boston MA (5%) | Roa"
  },
  "Wofford College": {
    name: "Wofford College",
    location: "Spartanburg, South Carolina",
    region: "Southeast",
    pipeline: "Finance and Business (Wofford's business economics and finance programs have produced a Wall Street and financial services alumni network that is disproportionate for a college of 1,800 in Spartanburg",
    hidden_pathway: "The hidden pathway at Wofford is the college's specific positioning at the intersection of the Greenville-Spartanburg BMW and Michelin industrial corr",
    the_room: "Wofford enrolls approximately 1,800 undergraduates on a campus of remarkable physical coherence in the heart of Spartanb",
    lifestyle: "",
    grad_cities: "Charlotte NC (22%) | Greenville-Spartanburg SC (18%) | Atlanta GA (12%) | Washington DC (8%) | New York NY (8%) | Columb"
  },
  "College of Wooster": {
    name: "College of Wooster",
    location: "Wooster, Ohio",
    region: "Midwest",
    pipeline: "Independent Study and Research (the College of Wooster's defining institutional characteristic is the Independent Study program — every Wooster student completes a year-long senior IS project under fa",
    hidden_pathway: "The hidden pathway at Wooster is the IS program's cumulative effect on graduate and professional school admission outcomes. The Independent Study requ",
    the_room: "Wooster enrolls approximately 1,900 undergraduates on a campus in Wooster, Ohio — the county seat of Wayne County in the",
    lifestyle: "",
    grad_cities: "Cleveland OH (22%) | Columbus OH (14%) | Pittsburgh PA (8%) | New York NY (10%) | Chicago IL (7%) | Washington DC (8%) |"
  },
  "University of Montana": {
    name: "University of Montana",
    location: "Missoula, Montana",
    region: "West",
    pipeline: "Environmental Science and Natural Resources (the University of Montana's W.A. Franke College of Forestry and Conservation is one of the most respected forestry and natural resource programs in the Ame",
    hidden_pathway: "The hidden pathway at the University of Montana is the journalism program's investigative reporting tradition combined with the environmental beat. UM",
    the_room: "UM enrolls approximately 9,000 students on a campus at the base of Mount Sentinel in Missoula — a city of 75,000 at the ",
    lifestyle: "",
    grad_cities: "Missoula MT (30%) | Billings MT (14%) | Helena MT (8%) | Bozeman MT (8%) | Seattle WA (8%) | Denver CO (6%) | Portland O"
  },
  "Montana State University": {
    name: "Montana State University",
    location: "Bozeman, Montana",
    region: "West",
    pipeline: "Engineering and Technology (the Norm Asbjornson College of Engineering is the primary engineering pipeline for Montana's energy, agriculture, and technology sectors — civil engineering, mechanical eng",
    hidden_pathway: "The hidden pathway at Montana State is the Bozeman technology ecosystem combined with the university's remote work infrastructure positioning. Bozeman",
    the_room: "MSU enrolls approximately 17,000 students on a campus in Bozeman — a city whose transformation from a quiet college town",
    lifestyle: "",
    grad_cities: "Bozeman MT (28%) | Billings MT (12%) | Missoula MT (10%) | Helena MT (7%) | Denver CO (8%) | Seattle WA (7%) | Portland "
  },
  "North Dakota State University": {
    name: "North Dakota State University",
    location: "Fargo, North Dakota",
    region: "Midwest",
    pipeline: "Engineering and Polymers (NDSU's College of Engineering is nationally recognized for a specific and unusual concentration in polymers, coatings, and materials science — the university's research in co",
    hidden_pathway: "The hidden pathway at NDSU is the coatings and polymers research program's specific industry positioning. The coatings industry — paints, protective c",
    the_room: "NDSU enrolls approximately 12,000 students on a campus in Fargo, North Dakota — the largest city in the state and the ec",
    lifestyle: "",
    grad_cities: "Fargo-Moorhead ND/MN (40%) | Minneapolis-St. Paul MN (18%) | Bismarck ND (8%) | Grand Forks ND (6%) | Denver CO (5%) | C"
  },
  "South Dakota State University": {
    name: "South Dakota State University",
    location: "Brookings, South Dakota",
    region: "Midwest",
    pipeline: "Engineering and Agricultural Engineering (the Jerome J. Lohr College of Engineering has a specific and nationally recognized strength in agricultural and biosystems engineering — the intersection of m",
    hidden_pathway: "The hidden pathway at SDSU is the precision agriculture technology sector's specific concentration in the Sioux Falls-Brookings corridor. Raven Indust",
    the_room: "SDSU enrolls approximately 12,000 students on a land-grant campus in Brookings — a college city of 25,000 on the prairie",
    lifestyle: "",
    grad_cities: "Sioux Falls SD (32%) | Brookings SD (10%) | Rapid City SD (8%) | Minneapolis-St. Paul MN (12%) | Fargo ND (6%) | Denver "
  },
  "University of New Mexico": {
    name: "University of New Mexico",
    location: "Albuquerque, New Mexico",
    region: "West",
    pipeline: "Engineering and National Laboratory Science (UNM's School of Engineering has a specific and structurally irreplaceable relationship with Sandia National Laboratories and Kirtland Air Force Base — both",
    hidden_pathway: "The hidden pathway at UNM is the Sandia National Laboratories security clearance pipeline combined with the Intel semiconductor workforce access. Sand",
    the_room: "UNM enrolls approximately 22,000 students on a campus in central Albuquerque designed by John Gaw Meem in the Pueblo Rev",
    lifestyle: "",
    grad_cities: "Albuquerque NM (48%) | Santa Fe NM (10%) | Phoenix AZ (7%) | Denver CO (6%) | Los Angeles CA (5%) | Washington DC (5%) |"
  },
  "New Mexico State University": {
    name: "New Mexico State University",
    location: "Las Cruces, New Mexico",
    region: "West",
    pipeline: "Engineering and Space Technology (NMSU's College of Engineering is anchored by a specific and unusual asset — White Sands Missile Range, the largest military installation in the United States at 3,200",
    hidden_pathway: "The hidden pathway at NMSU is the chile pepper research program's intersection with the global specialty food industry. The Fabian Garcia Science Cent",
    the_room: "NMSU enrolls approximately 14,000 students on a campus in Las Cruces — a city of 115,000 in the Mesilla Valley at the ed",
    lifestyle: "",
    grad_cities: "Las Cruces NM (32%) | Albuquerque NM (12%) | El Paso TX (14%) | Santa Fe NM (7%) | Phoenix AZ (6%) | Denver CO (5%) | Ac"
  },
  "Berklee College of Music": {
    name: "Berklee College of Music",
    location: "Boston, Massachusetts",
    region: "Northeast",
    pipeline: "Music Production and Recording Arts (Berklee is the most influential music production institution in the world — the alumni who have engineered, produced, and mixed the most commercially significant r",
    hidden_pathway: "The hidden pathway at Berklee is the global alumni network's specific density in the rooms where music is actually made. Every major recording studio ",
    the_room: "Berklee enrolls approximately 6,000 students on a campus that occupies multiple buildings along Massachusetts Avenue in ",
    lifestyle: "",
    grad_cities: "Boston MA (22%) | Los Angeles CA (32%) | New York NY (20%) | Nashville TN (7%) | London UK (4%) | International music ma"
  },
  "Fashion Institute of Technology": {
    name: "Fashion Institute of Technology",
    location: "New York, New York",
    region: "Northeast",
    pipeline: "Fashion Design and Product Development (FIT is the most institutionally connected fashion education program in America to the actual infrastructure of the global fashion industry — the school sits in ",
    hidden_pathway: "The hidden pathway at FIT is the Cosmetics and Fragrance Marketing program's monopoly position in the beauty industry management pipeline. The $600 bi",
    the_room: "FIT enrolls approximately 8,500 students on a campus that occupies a full city block in the Chelsea neighborhood of Manh",
    lifestyle: "",
    grad_cities: "New York NY (58%) | Los Angeles CA (10%) | Miami FL (6%) | London UK (4%) | Paris France (3%) | International fashion ca"
  },
  "Pratt Institute": {
    name: "Pratt Institute",
    location: "Brooklyn, New York",
    region: "Northeast",
    pipeline: "Architecture (the Pratt School of Architecture is one of the most respected and critically engaged architecture programs in the United States — the Pratt architecture faculty is drawn from New York Ci",
    hidden_pathway: "The hidden pathway at Pratt is the Pratt sculpture garden combined with the Clinton Hill and Bushwick community access for fine arts students. The Pra",
    the_room: "Pratt enrolls approximately 4,700 students on a 25-acre wooded campus in the Clinton Hill neighborhood of Brooklyn — one",
    lifestyle: "",
    grad_cities: "New York NY (52%) | Los Angeles CA (14%) | San Francisco CA (6%) | Chicago IL (5%) | Boston MA (4%) | London UK (4%) | I"
  },
  "Rochester Institute of Technology": {
    name: "Rochester Institute of Technology",
    location: "Rochester, New York",
    region: "Northeast",
    pipeline: "Computer Science and Software Engineering (RIT's B. Thomas Golisano College of Computing and Information Sciences is consistently ranked among the top undergraduate computing programs in the United St",
    hidden_pathway: "The hidden pathway at RIT is the photonics and optical sciences industry concentration in Rochester and the specific career pathway it creates for RIT",
    the_room: "RIT enrolls approximately 18,000 students on a campus in Henrietta, a suburb of Rochester — a Brutalist brick campus des",
    lifestyle: "",
    grad_cities: "New York NY (18%) | Boston MA (8%) | Rochester NY (16%) | San Francisco CA (12%) | Seattle WA (10%) | Austin TX (6%) | C"
  },
  "Marquette University": {
    name: "Marquette University",
    location: "Milwaukee, Wisconsin",
    region: "Midwest",
    pipeline: "Law (Marquette University Law School is the most respected and most connected law school in Wisconsin — the Wisconsin Supreme Court, the Wisconsin legislature, the Milwaukee County judiciary, and the ",
    hidden_pathway: "The hidden pathway at Marquette is the Jesuit network's specific professional reciprocity combined with the Milwaukee manufacturing corridor's relativ",
    the_room: "Marquette enrolls approximately 11,000 students on a campus that occupies the western edge of downtown Milwaukee — an ur",
    lifestyle: "",
    grad_cities: "Milwaukee WI (38%) | Chicago IL (22%) | Madison WI (8%) | Minneapolis MN (5%) | Washington DC (5%) | New York NY (5%) | "
  },
  "Marshall University": {
    name: "Marshall University",
    location: "Huntington, West Virginia",
    region: "Southeast",
    pipeline: "Health Sciences and Medicine (the Joan C. Edwards School of Medicine is one of only two allopathic medical schools in West Virginia and the primary physician training institution for the tri-state reg",
    hidden_pathway: "The hidden pathway at Marshall is the forensic accounting program's specific pipeline into federal financial crime investigation. The FBI's Financial ",
    the_room: "Marshall enrolls approximately 13,000 students on a campus in downtown Huntington — a city of 48,000 at the confluence o",
    lifestyle: "",
    grad_cities: "Huntington-Charleston WV (35%) | Columbus OH (12%) | Pittsburgh PA (8%) | Lexington KY (7%) | Cincinnati OH (7%) | Washi"
  },
  "Carleton College": {
    name: "Carleton College",
    location: "Northfield, Minnesota",
    region: "Midwest",
    pipeline: "Academic and Research Excellence (Carleton produces PhD students at a per-capita rate that rivals any institution in America — the American Institute of Physics, the American Chemical Society, and the",
    hidden_pathway: "The hidden pathway at Carleton is the Cowling Arboretum's research infrastructure combined with the geology department's specific strength in earth sc",
    the_room: "Carleton enrolls approximately 2,100 students on a campus in Northfield, Minnesota — a small city of 22,000 sixty miles ",
    lifestyle: "",
    grad_cities: "Minneapolis-St. Paul MN (22%) | Chicago IL (12%) | New York NY (14%) | Washington DC (12%) | San Francisco CA (10%) | Bo"
  },
  "Howard University": {
    name: "Howard University",
    location: "Washington, DC",
    region: "Northeast",
    pipeline: "Law and Government (Howard University School of Law is the most historically significant Black law school in America — the institution that trained Thurgood Marshall, the attorney who argued Brown v. ",
    hidden_pathway: "The hidden pathway at Howard is the Capstone Network — the informal name for the Howard University alumni community that functions as one of the most ",
    the_room: "Howard enrolls approximately 10,000 students on a campus in the Shaw neighborhood of Washington DC — five blocks north o",
    lifestyle: "",
    grad_cities: "Washington DC (42%) | New York NY (16%) | Atlanta GA (8%) | Los Angeles CA (7%) | Chicago IL (5%) | Baltimore MD (4%) | "
  },
  "Spelman College": {
    name: "Spelman College",
    location: "Atlanta, Georgia",
    region: "Southeast",
    pipeline: "Medicine and STEM (Spelman is the most productive institution in America for producing Black women who go on to earn PhDs in science and engineering — the NSF data is unambiguous and has been consiste",
    hidden_pathway: "The hidden pathway at Spelman is the Atlanta University Center Consortium's collective resources combined with the specific professional network that ",
    the_room: "Spelman enrolls approximately 2,200 women on a campus in the West End neighborhood of Atlanta adjacent to Morehouse Coll",
    lifestyle: "",
    grad_cities: "Atlanta GA (42%) | New York NY (12%) | Washington DC (10%) | Los Angeles CA (7%) | Charlotte NC (5%) | Chicago IL (4%) |"
  },
  "Morehead State University": {
    name: "Morehead State University",
    location: "Morehead, Kentucky",
    region: "Southeast",
    pipeline: "Space Science and Satellite Technology (the Morehead State University Space Science Center is one of the most distinctive assets of any regional public university in America — the 21-meter dish antenn",
    hidden_pathway: "The hidden pathway at Morehead State is the Space Science Center's CubeSat program and its specific positioning in the small satellite industry. The c",
    the_room: "MSU enrolls approximately 10,000 students on a campus in Morehead — a city of 7,500 at the gateway to the Daniel Boone N",
    lifestyle: "",
    grad_cities: "Morehead-Eastern Kentucky (30%) | Lexington KY (20%) | Ashland-Huntington KY/WV (10%) | Louisville KY (8%) | Cincinnati "
  },
  "Franklin and Marshall College": {
    name: "Franklin and Marshall College",
    location: "Lancaster, Pennsylvania",
    region: "Northeast",
    pipeline: "Pre-Medicine and Health Sciences (Franklin and Marshall has one of the most documented and consistently strong pre-medical programs of any liberal arts college in the Northeast — the medical school ac",
    hidden_pathway: "The hidden pathway at F&M is the Ware Institute for Civic Life and its specific connection to the Lancaster civic community as a professional and rese",
    the_room: "F&M enrolls approximately 2,400 students on a campus in Lancaster, Pennsylvania — a campus of Georgian and Federal-style",
    lifestyle: "",
    grad_cities: "Philadelphia PA (28%) | New York NY (18%) | Washington DC (10%) | Lancaster PA (8%) | Baltimore MD (6%) | Boston MA (6%)"
  },
  "Occidental College": {
    name: "Occidental College",
    location: "Los Angeles, California",
    region: "West",
    pipeline: "Diplomacy and International Relations (the Diplomacy and World Affairs program at Occidental is consistently ranked among the top five at any liberal arts college in the country — the program's combin",
    hidden_pathway: "The hidden pathway at Occidental is the Urban and Environmental Policy program's specific use of Los Angeles as a living laboratory for the most conse",
    the_room: "Occidental enrolls approximately 2,100 students on a campus in the Eagle Rock neighborhood of Los Angeles — a hillside c",
    lifestyle: "",
    grad_cities: "Los Angeles CA (42%) | San Francisco CA (12%) | New York NY (10%) | Washington DC (8%) | Seattle WA (4%) | Academic and "
  },
  "Bryn Mawr College": {
    name: "Bryn Mawr College",
    location: "Bryn Mawr, Pennsylvania",
    region: "Northeast",
    pipeline: "Graduate and Professional School Placement (Bryn Mawr's defining institutional characteristic is its extraordinary graduate and professional school placement rate — the percentage of Bryn Mawr graduat",
    hidden_pathway: "The hidden pathway at Bryn Mawr is the Graduate School of Arts and Sciences and its specific effect on undergraduate intellectual life. Bryn Mawr is t",
    the_room: "Bryn Mawr enrolls approximately 1,800 undergraduates on a campus in the Main Line suburb of Bryn Mawr — one of the most ",
    lifestyle: "",
    grad_cities: "Philadelphia PA (25%) | New York NY (18%) | Washington DC (10%) | Boston MA (8%) | San Francisco CA (7%) | Academic and "
  },
  "California State University San Bernardino": {
    name: "California State University San Bernardino",
    location: "San Bernardino, California",
    region: "West",
    pipeline: "Business and Logistics (CSUSB's Jack H. Brown College of Business and Public Administration serves the Inland Empire's specific economic infrastructure — the San Bernardino and Riverside counties cons",
    hidden_pathway: "The hidden pathway at CSUSB is the Inland Empire logistics ecosystem's specific career economics for supply chain and operations management graduates.",
    the_room: "CSUSB enrolls approximately 20,000 students on a campus at the base of the San Bernardino Mountains in San Bernardino — ",
    lifestyle: "",
    grad_cities: "Inland Empire CA (55%) | Los Angeles CA (18%) | San Diego CA (8%) | Phoenix AZ (5%) | Las Vegas NV (4%) | Academic progr"
  },
  "Regent University": {
    name: "Regent University",
    location: "Virginia Beach, Virginia",
    region: "Southeast",
    pipeline: "Law and Government (Regent University School of Law is one of the most politically connected law schools in America within the conservative Christian legal and policy community — the American Center f",
    hidden_pathway: "The hidden pathway at Regent is the Federalist Society pipeline's specific function within the conservative legal movement. The Federalist Society — t",
    the_room: "Regent enrolls approximately 11,000 students — predominantly online and graduate — on a campus in Virginia Beach adjacen",
    lifestyle: "",
    grad_cities: "Virginia Beach-Norfolk VA (45%) | Washington DC (14%) | Richmond VA (8%) | Charlotte NC (5%) | Raleigh NC (5%) | Academi"
  },
  "University of Richmond": {
    name: "University of Richmond",
    location: "Richmond, Virginia",
    region: "Southeast",
    pipeline: "Law and Government (the T.C. Williams School of Law — one of the most respected regional law schools in the Mid-Atlantic — feeds directly into the Virginia Bar, the Richmond federal courthouse, and th",
    hidden_pathway: "The hidden pathway at Richmond is the Jepson School of Leadership Studies' specific positioning as the only undergraduate leadership school in America",
    the_room: "Richmond enrolls approximately 4,100 undergraduates on a campus on the western edge of Richmond — a campus of Georgian R",
    lifestyle: "",
    grad_cities: "Richmond VA (32%) | Washington DC (18%) | New York NY (12%) | Charlotte NC (7%) | Atlanta GA (5%) | Boston MA (5%) | Aca"
  },
  "Appalachian State University": {
    name: "Appalachian State University",
    location: "Boone, North Carolina",
    region: "Southeast",
    pipeline: "Business and Supply Chain (the Walker College of Business is AACSB-accredited and produces graduates who enter the Charlotte financial services corridor, the Research Triangle technology sector, and t",
    hidden_pathway: "The hidden pathway at Appalachian State is the renewable energy and sustainability sector's specific concentration in North Carolina combined with App",
    the_room: "App State enrolls approximately 21,000 students on a campus in Boone — a mountain city of 20,000 at 3,300 feet elevation",
    lifestyle: "",
    grad_cities: "Asheville NC (16%) | Charlotte NC (24%) | Raleigh-Durham NC (14%) | Boone NC (8%) | Greensboro NC (6%) | Atlanta GA (5%)"
  },
  "Bentley University": {
    name: "Bentley University",
    location: "Waltham, Massachusetts",
    region: "Northeast",
    pipeline: "Accounting and Public Accounting (Bentley's accounting program is one of the most respected in New England and consistently produces graduates who enter the Big Four — Deloitte, PwC, Ernst and Young, ",
    hidden_pathway: "The hidden pathway at Bentley is the Marketing Analytics program's specific positioning in a skill shortage that has persisted for a decade without re",
    the_room: "Bentley enrolls approximately 4,200 undergraduates on a campus in Waltham — a suburb 9 miles west of Boston on the Route",
    lifestyle: "",
    grad_cities: "Boston MA (35%) | New York NY (14%) | Hartford CT (8%) | Providence RI (6%) | Washington DC (5%) | San Francisco CA (5%)"
  },
  "California Lutheran University": {
    name: "California Lutheran University",
    location: "Thousand Oaks, California",
    region: "West",
    pipeline: "Business and Entrepreneurship (the School of Management at Cal Lutheran is the most distinctive business program in the Conejo Valley corridor — the university's specific positioning in Thousand Oaks,",
    hidden_pathway: "The hidden pathway at Cal Lutheran is the Center for Economic Research and Forecasting and its specific function in the regional California economic c",
    the_room: "Cal Lutheran enrolls approximately 4,000 students on a campus in Thousand Oaks — a planned city of 130,000 in the Conejo",
    lifestyle: "",
    grad_cities: "Los Angeles CA (38%) | Ventura County CA (20%) | San Fernando Valley CA (10%) | San Diego CA (6%) | San Francisco CA (5%"
  },
  "University of Wyoming": {
    name: "University of Wyoming",
    location: "Laramie, Wyoming",
    region: "West",
    pipeline: "Petroleum and Energy Engineering (the University of Wyoming's College of Engineering and Applied Science has a specific and structurally irreplaceable position in Wyoming's petroleum and natural gas e",
    hidden_pathway: "The hidden pathway at the University of Wyoming is the Wyoming Permanent Mineral Trust Fund's specific effect on the institution and its graduates. Wy",
    the_room: "UW enrolls approximately 12,000 students on a campus in Laramie — a high plains city of 33,000 at 7,165 feet elevation o",
    lifestyle: "",
    grad_cities: "Cheyenne WY (18%) | Casper WY (16%) | Laramie WY (10%) | Denver CO (14%) | Salt Lake City UT (8%) | Billings MT (5%) | A"
  },
  "University of Alaska Fairbanks": {
    name: "University of Alaska Fairbanks",
    location: "Fairbanks, Alaska",
    region: "West",
    pipeline: "Arctic and Petroleum Engineering (the University of Alaska Fairbanks College of Engineering and Mines occupies a position in the Alaska energy economy that is structurally irreplaceable — the Trans-Al",
    hidden_pathway: "The hidden pathway at UAF is the Poker Flat Research Range and its specific function for space science and geophysics students. Poker Flat, operated b",
    the_room: "UAF enrolls approximately 7,500 students on a campus on a ridge above Fairbanks — a city of 32,000 in the Interior of Al",
    lifestyle: "",
    grad_cities: "Fairbanks AK (20%) | Anchorage AK (24%) | Juneau AK (6%) | Seattle WA (12%) | Denver CO (6%) | Academic and research pro"
  },
  "University of Vermont": {
    name: "University of Vermont",
    location: "Burlington, Vermont",
    region: "Northeast",
    pipeline: "Environmental Studies and Sustainable Agriculture (the Rubenstein School of Environment and Natural Resources at UVM is one of the most respected environmental programs in the Northeast — the Lake Cha",
    hidden_pathway: "The hidden pathway at UVM is the Burlington food systems economy and its specific intersection with the university's sustainable agriculture and food ",
    the_room: "UVM enrolls approximately 13,000 students on a campus on a hillside above Burlington — a city of 45,000 on the eastern s",
    lifestyle: "",
    grad_cities: "Burlington VT (28%) | Boston MA (16%) | New York NY (10%) | Portland ME (6%) | Montpelier VT (5%) | Washington DC (5%) |"
  },
  "College of the Ozarks": {
    name: "College of the Ozarks",
    location: "Point Lookout, Missouri",
    region: "Midwest",
    pipeline: "Business and Entrepreneurship (the Keeter School of Business produces graduates who enter the Branson tourism corridor, the Springfield business market, and the broader Midwest corporate economy with ",
    hidden_pathway: "The hidden pathway at College of the Ozarks is the Keeter Center Lodge and its specific function as a professional hospitality training environment. T",
    the_room: "College of the Ozarks enrolls approximately 1,500 students on a campus in Point Lookout — a community on the edge of Lak",
    lifestyle: "",
    grad_cities: "Branson-Springfield MO (38%) | Kansas City MO (12%) | St. Louis MO (8%) | Tulsa OK (6%) | Little Rock AR (5%) | Academic"
  },
  "Vassar College": {
    name: "Vassar College",
    location: "Poughkeepsie, New York",
    region: "Northeast",
    pipeline: "Arts and Creative Industries (Vassar's studio art, film, and drama programs are among the most respected at any liberal arts college in the Northeast — the Frances Lehman Loeb Art Center, one of the f",
    hidden_pathway: "The hidden pathway at Vassar is the Hudson Valley arts community's specific transformation and Vassar's position at its center. The stretch of the Hud",
    the_room: "Vassar enrolls approximately 2,400 students on a campus in Poughkeepsie — a city of 30,000 on the eastern bank of the Hu",
    lifestyle: "",
    grad_cities: "New York NY (38%) | Boston MA (10%) | Washington DC (8%) | Los Angeles CA (7%) | Hudson Valley NY (6%) | Academic and do"
  },
  "East Carolina University": {
    name: "East Carolina University",
    location: "Greenville, North Carolina",
    region: "Southeast",
    pipeline: "Medicine and Health Sciences (the Brody School of Medicine at ECU is one of the most mission-driven medical schools in America — founded explicitly to address North Carolina's physician shortage in ru",
    hidden_pathway: "The hidden pathway at ECU is the Brody School of Medicine's specific rural medicine mission and its effect on medical school acceptance rates for ECU ",
    the_room: "ECU enrolls approximately 28,000 students on a campus in Greenville — a city of 92,000 in the coastal plain of Eastern N",
    lifestyle: "",
    grad_cities: "Greenville NC (24%) | Raleigh-Durham NC (22%) | Charlotte NC (10%) | Wilmington NC (7%) | Washington DC (5%) | Virginia "
  },
  "St. John's College": {
    name: "St. John's College",
    location: "Annapolis, Maryland",
    region: "Northeast",
    pipeline: "Law and Legal Practice (St. John's College produces law school applicants whose analytical reading, argumentation, and writing skills distinguish them from conventionally educated peers — four years o",
    hidden_pathway: "The hidden pathway at St. John's is the Great Books curriculum's specific function in the classical Christian school movement and the growing market f",
    the_room: "St. John's enrolls approximately 400 students on the Annapolis campus — a historic property in the center of Annapolis, ",
    lifestyle: "",
    grad_cities: "Washington DC (22%) | New York NY (16%) | Annapolis-Baltimore MD (12%) | Santa Fe NM (8%) | Boston MA (7%) | Academic an"
  },
  "Providence College": {
    name: "Providence College",
    location: "Providence, Rhode Island",
    region: "Northeast",
    pipeline: "Business and Finance (the Providence College School of Business is AACSB-accredited and produces graduates who enter the Providence and Boston financial services, accounting, and consulting markets wi",
    hidden_pathway: "The hidden pathway at Providence College is the Development of Western Civilization program's specific function as graduate school preparation. The DW",
    the_room: "Providence College enrolls approximately 4,400 undergraduates on a campus of Gothic stone buildings in the Smith Hill ne",
    lifestyle: "",
    grad_cities: "Providence RI (28%) | Boston MA (24%) | New York NY (12%) | Hartford CT (7%) | Washington DC (6%) | Academic and profess"
  },
  "San Francisco State University": {
    name: "San Francisco State University",
    location: "San Francisco, California",
    region: "West",
    pipeline: "Creative Arts and Cinema (San Francisco State University's College of Liberal and Creative Arts houses one of the most historically significant film programs in America — the Cinema department at SFSU",
    hidden_pathway: "The hidden pathway at SFSU is the Cinema department's specific alumni network in the Bay Area and national film industry. SFSU's film program has been",
    the_room: "SFSU enrolls approximately 27,000 students on a campus in the Stonestown neighborhood of San Francisco — the southwester",
    lifestyle: "",
    grad_cities: "San Francisco CA (42%) | Silicon Valley CA (18%) | Los Angeles CA (8%) | Seattle WA (5%) | New York NY (4%) | Academic p"
  },
  "Illinois Wesleyan University": {
    name: "Illinois Wesleyan University",
    location: "Bloomington, Illinois",
    region: "Midwest",
    pipeline: "Theatre and Performing Arts (the Illinois Wesleyan School of Theatre Arts is one of the most respected undergraduate theatre programs in the Midwest — the professional training model, the Ames Laborat",
    hidden_pathway: "The hidden pathway at Illinois Wesleyan is the State Farm corporate campus's specific function as a career laboratory for IWU business, psychology, an",
    the_room: "Illinois Wesleyan enrolls approximately 1,600 students on a compact residential campus in the northern section of Bloomi",
    lifestyle: "",
    grad_cities: "Bloomington-Normal IL (22%) | Chicago IL (32%) | Springfield IL (6%) | Indianapolis IN (6%) | St. Louis MO (5%) | Academ"
  },
  "Eastern Washington University": {
    name: "Eastern Washington University",
    location: "Cheney, Washington",
    region: "West",
    pipeline: "Physical Therapy and Health Sciences (the EWU Doctor of Physical Therapy program is one of the most respected in the Pacific Northwest — the program's clinical placement network spans the Spokane metr",
    hidden_pathway: "The hidden pathway at EWU is the physical therapy program's specific positioning in Washington State's rural healthcare shortage. Rural Eastern Washin",
    the_room: "EWU enrolls approximately 12,000 students on a campus in Cheney — a college town of 12,000 in the Channeled Scablands of",
    lifestyle: "",
    grad_cities: "Spokane WA (38%) | Seattle WA (14%) | Yakima WA (6%) | Tri-Cities WA (6%) | Coeur d'Alene ID (7%) | Portland OR (5%) | A"
  },
  "Sam Houston State University": {
    name: "Sam Houston State University",
    location: "Huntsville, Texas",
    region: "Southeast",
    pipeline: "Criminal Justice and Forensic Science (the College of Criminal Justice at Sam Houston State University is one of the most respected and most cited criminal justice academic programs in the United Stat",
    hidden_pathway: "The hidden pathway at Sam Houston State is the College of Criminal Justice's specific positioning as a national research and policy institution disgui",
    the_room: "SHSU enrolls approximately 22,000 students on a campus in Huntsville — a city of 45,000 in the piney woods of East Texas",
    lifestyle: "",
    grad_cities: "Houston TX (32%) | Huntsville TX (16%) | Dallas TX (10%) | Austin TX (8%) | San Antonio TX (6%) | Federal agencies natio"
  },
  "Dickinson College": {
    name: "Dickinson College",
    location: "Carlisle, Pennsylvania",
    region: "Northeast",
    pipeline: "International Studies and Global Affairs (Dickinson's Clarke Forum for Contemporary Issues and the international studies programs are among the most globally oriented at any liberal arts college in th",
    hidden_pathway: "The hidden pathway at Dickinson is the Dickinson College Farm and the Center for Sustainability Education's specific function as professional credenti",
    the_room: "Dickinson enrolls approximately 2,200 students on a campus in Carlisle — a historic Pennsylvania market town of 20,000 a",
    lifestyle: "",
    grad_cities: "Philadelphia PA (20%) | Washington DC (16%) | New York NY (12%) | Harrisburg PA (8%) | Baltimore MD (7%) | Academic and "
  },
  "Hamilton College": {
    name: "Hamilton College",
    location: "Clinton, New York",
    region: "Northeast",
    pipeline: "Writing and Communications (Hamilton College's writing program is among the most respected at any liberal arts college in America — the open curriculum, which requires no distribution requirements and",
    hidden_pathway: "The hidden pathway at Hamilton is the open curriculum's specific effect on intellectual confidence and the professional outcomes this confidence produ",
    the_room: "Hamilton enrolls approximately 2,000 students on a campus atop College Hill in Clinton — a village of 1,800 in the Mohaw",
    lifestyle: "",
    grad_cities: "New York NY (28%) | Boston MA (12%) | Washington DC (10%) | Albany NY (8%) | Philadelphia PA (6%) | Academic and doctora"
  },
  "Barnard College": {
    name: "Barnard College",
    location: "New York, New York",
    region: "Northeast",
    pipeline: "Media, Publishing, and Communications (Barnard's connection to New York City's media and publishing industries is among the most direct of any liberal arts college in the country — the college sits ac",
    hidden_pathway: "The hidden pathway at Barnard is the Barnard-Columbia cross-registration system and its specific function in creating a dual institutional identity. B",
    the_room: "Barnard enrolls approximately 2,600 students on a campus of nine acres on the Upper West Side of Manhattan — directly ac",
    lifestyle: "",
    grad_cities: "New York NY (52%) | Los Angeles CA (10%) | Washington DC (8%) | Boston MA (6%) | San Francisco CA (5%) | Academic and pr"
  },
  "Gettysburg College": {
    name: "Gettysburg College",
    location: "Gettysburg, Pennsylvania",
    region: "Northeast",
    pipeline: "History, Public History, and Civil War Studies (Gettysburg College's Civil War Institute is the most respected undergraduate civil war studies center in America — the college's location on the Gettysb",
    hidden_pathway: "The hidden pathway at Gettysburg College is the Civil War Institute's specific function as a professional network for the historic preservation, publi",
    the_room: "Gettysburg enrolls approximately 2,400 students on a campus adjacent to the Gettysburg National Military Park — the most",
    lifestyle: "",
    grad_cities: "Baltimore MD (18%) | Washington DC (16%) | Philadelphia PA (14%) | Harrisburg PA (10%) | New York NY (8%) | Academic and"
  },
  "University of North Texas": {
    name: "University of North Texas",
    location: "Denton, Texas",
    region: "Southeast",
    pipeline: "Music and Jazz Studies (the College of Music at the University of North Texas is one of the most respected and most influential music programs in America — the One O'Clock Lab Band, the UNT jazz ensem",
    hidden_pathway: "The hidden pathway at UNT is the One O'Clock Lab Band's specific function as a professional career launch vehicle for jazz musicians. The One O'Clock ",
    the_room: "UNT enrolls approximately 44,000 students on a campus in Denton — a city of 150,000 in the northern reaches of the Dalla",
    lifestyle: "",
    grad_cities: "Dallas-Fort Worth TX (52%) | Austin TX (8%) | Houston TX (7%) | Denton TX (6%) | Nashville TN (4%) | Los Angeles CA (4%)"
  },
  "Texas State University": {
    name: "Texas State University",
    location: "San Marcos, Texas",
    region: "Southeast",
    pipeline: "Health Sciences and Physical Therapy (the College of Health Professions at Texas State houses the Department of Physical Therapy, one of the most respected DPT programs in Texas, along with a comprehe",
    hidden_pathway: "The hidden pathway at Texas State is the San Marcos River and its specific function in the university's aquatic biology and environmental science prog",
    the_room: "Texas State enrolls approximately 38,000 students on a campus that straddles the San Marcos River in downtown San Marcos",
    lifestyle: "",
    grad_cities: "Austin TX (32%) | San Antonio TX (20%) | San Marcos TX (10%) | Houston TX (8%) | Dallas TX (6%) | Academic programs (5%)"
  },
  "Wesleyan University": {
    name: "Wesleyan University",
    location: "Middletown, Connecticut",
    region: "Northeast",
    pipeline: "Film and the Arts (Wesleyan's film studies program is perhaps the most productive per capita for Hollywood directors and producers of any institution in the country — Joss Whedon, Michael Bay, Alex Ku",
    hidden_pathway: "The hidden pathway at Wesleyan is the film alumni network's specific density in the Los Angeles production community and what this means for Wesleyan ",
    the_room: "Wesleyan enrolls approximately 3,000 students on a campus in Middletown — a Connecticut city of 47,000 on the Connecticu",
    lifestyle: "",
    grad_cities: "New York NY (30%) | Los Angeles CA (18%) | Boston MA (10%) | Washington DC (8%) | Hartford CT (6%) | Academic and doctor"
  },
  "University of Hawaii at Manoa": {
    name: "University of Hawaii at Manoa",
    location: "Honolulu, Hawaii",
    region: "West",
    pipeline: "Ocean and Marine Sciences (the School of Ocean and Earth Science and Technology at UH Manoa is one of the most respected and most productive oceanographic research institutions in the world — the univ",
    hidden_pathway: "The hidden pathway at UH Manoa is the East-West Center's specific function as a diplomatic and international policy career launch vehicle. The East-We",
    the_room: "UH Manoa enrolls approximately 18,000 students on a campus in the Manoa Valley above Honolulu — a lush valley two miles ",
    lifestyle: "",
    grad_cities: "Honolulu HI (48%) | Los Angeles CA (10%) | San Francisco CA (8%) | Seattle WA (5%) | Washington DC (5%) | Asia-Pacific m"
  },

  "United States Merchant Marine Academy": {
    name: "United States Merchant Marine Academy",
    location: "Kings Point, New York",
    region: "Northeast",
    pipeline: "Three credentials at graduation: Bachelor of Science, US Coast Guard Merchant Marine Officer License, and military commission in any branch. Median salary six years out is $96,770 — among the highest of any undergraduate institution in the country. The only federal service academy under the Department of Transportation rather than Defense, which means the service obligation is the most flexible: five years active duty in any military branch, or five years in the maritime industry with an eight-year reserve commission.",
    hidden_pathway: "The shoreside career path is almost never named. Most students and parents picture ships — but Kings Point graduates run port operations, manage maritime law practices, lead defense logistics companies, direct maritime insurance underwriting, and sit in the executive suites of the companies that move 90% of global trade. The Marine Transportation major specifically prepares students for shoreside maritime careers. The degree, the license, and the commission together create a credential stack no other institution produces.",
    the_room: "962 total undergraduates — roughly one-quarter the size of West Point or Annapolis. Every midshipman is known by name. Sea Year, where students spend close to a year aboard working merchant ships worldwide as sophomores and juniors, creates a shared experience of genuine operational responsibility at sea that no classroom can replicate. The alumni network is small, intensely loyal, and positioned throughout the maritime, defense, and logistics industries in roles that most people outside those industries never see.",
    lifestyle: "",
    grad_cities: "New York, Houston, Washington DC, Los Angeles, Seattle — wherever major ports and maritime commercial operations concentrate"
  },

  "Maine Maritime Academy": {
    name: "Maine Maritime Academy",
    location: "Castine, Maine",
    region: "Northeast",
    pipeline: "95% job placement within six months of graduation — among the highest of any institution in the country. No congressional nomination required, unlike Kings Point — this is a state school with public pricing comparable to the University of Maine. Graduates walk away with a USCG license in the marine transportation or engineering track and no service obligation, giving MMA graduates flexibility Kings Point graduates trade away. 88 companies recruited on campus in spring 2025 including American Bureau of Shipping, Siemens Energy, and Grand River Navigation. Engineering median salary exceeds $70,000 at entry.",
    hidden_pathway: "Power Engineering Technology — the non-seagoing major almost nobody outside Maine knows exists. PET graduates go into shoreside power plant operations, utility companies, and industrial facilities rather than ships. Graduates sit for the Maine Third Class Stationary Engineer license and the Fundamentals of Engineering exam. Siemens Energy and Talen Energy recruit from this program specifically. The student who wants the rigor of a maritime education without ever going to sea has a direct path here that most guidance counselors have never named.",
    the_room: "Approximately 950 students in Castine — a town of 1,300 people on a peninsula in Penobscot Bay. The remoteness is the point. The Training Ship State of Maine and the historic Schooner Bowdoin provide sea time experiences that larger, more conventionally located institutions cannot replicate. The International Business and Logistics program, less well known than the license tracks, produces graduates who move directly into supply chain and freight management roles across the Northeast and beyond. MMA alumni have an industry reputation for being operationally ready on day one — a reputation the placement numbers confirm.",
    lifestyle: "",
    grad_cities: "Portland ME, Boston, New York, Houston, Seattle — distributed across port cities and industrial facilities throughout the Northeast and Gulf Coast"
  },

  "Massachusetts Maritime Academy": {
    name: "Massachusetts Maritime Academy",
    location: "Buzzards Bay, Massachusetts",
    region: "Northeast",
    pipeline: "Ranked #10 nationally for return on investment by US News and #33 for engineering programs without a doctorate. 1,580 students across seven undergraduate majors and three graduate programs. An hour from Boston and Providence — the most commercially connected of the state maritime academies. No congressional nomination required, no service obligation. Most graduates are employed in career-track positions within 90 days. The campus sits at the mouth of the Cape Cod Canal — surrounded by water on three sides, with working vessels as part of the learning environment.",
    hidden_pathway: "Energy Systems Engineering — MMA's program for students drawn to the clean energy transition rather than maritime careers. Prepares graduates for careers in power generation planning, design, and installation of technical systems for renewable energy infrastructure. Facilities Engineering is equally undersurfaced — MMA graduates in this major run the mechanical, electrical, and HVAC operations of hospitals, manufacturing plants, and commercial buildings across the country. Neither program requires sea time or a USCG license. Emergency Management is a third non-maritime path producing graduates who join FEMA, state emergency agencies, hospital preparedness programs, and military services.",
    the_room: "Regiment of Cadets structure with NCAA Division III athletics — the only state maritime academy offering both. Seven undergraduate majors span marine transportation, international maritime business, marine science, safety and environmental protection, emergency management, and three engineering tracks. The breadth makes MMA meaningfully different from the other state academies whose programs concentrate more narrowly on license tracks. International Maritime Business specifically prepares students for supply chain, shipping, chartering, and logistics careers in the global marketplace — a business degree with an operational edge that most business schools cannot match.",
    lifestyle: "",
    grad_cities: "Boston, New York, Providence, Washington DC — Northeast concentration, with energy and facilities engineering graduates distributed nationally across power infrastructure"
  },

  "Texas A&M University at Galveston": {
    name: "Texas A&M University at Galveston",
    location: "Galveston, Texas",
    region: "South Central",
    pipeline: "The largest maritime enrollment of any state maritime academy in the country — more than 5,000 students. Every graduate receives a Texas A&M University degree and the Aggie Ring, not a branch campus credential. As of fall 2025, Texas A&M is offering in-state tuition to all incoming students who select a USCG license program — making it the most affordable maritime education in the Gulf Coast and one of the most affordable in the country. Adjacent to the Port of Houston, the largest port by tonnage in the United States, and the Port of Galveston, with direct access to Gulf shipping lanes, offshore energy infrastructure, and the petrochemical industry that defines the Texas Gulf Coast economy.",
    hidden_pathway: "Maritime Business Administration — the degree for students who want to run the maritime industry rather than sail in it. Port management, supply chain, international trade, shipping logistics, chartering, and maritime finance. The program has a 3+2 track that combines a BS in Maritime Business Administration with a Master of Maritime Business Administration and Logistics in five years — two Texas A&M degrees, one of the most specific maritime business credentials in the country. Ocean Engineering is a second undersurfaced path: designing the systems that operate in the Gulf — oil rigs, subsea pipelines, offshore platforms, seawalls — one of the most Gulf Coast-specific engineering specializations available anywhere.",
    the_room: "Pelican Island campus on a barrier island off Galveston — steps from the Gulf, surrounded by working maritime and offshore energy infrastructure. The proximity to Houston means recruiting relationships with the energy majors, LNG exporters, and port operators who drive the Gulf Coast economy. Marine Biology, Marine Science, and Oceanography programs give the campus breadth beyond maritime transportation — students doing research on Gulf ecosystems alongside cadets training for USCG licenses, in the same place. Small campus feel with large university resources — the combination that the other state maritime academies cannot match.",
    lifestyle: "",
    grad_cities: "Houston, Galveston, Corpus Christi, New Orleans — Gulf Coast concentration, with maritime business graduates distributed across global shipping and trade companies"
  },

  "California State University Maritime Academy": {
    name: "California State University Maritime Academy",
    location: "Vallejo, California",
    region: "West Coast",
    pipeline: "Highest employment rate in the entire CSU system. Government data consistently shows Cal Maritime alumni having the highest average salaries of any college or university — public or private — in the western United States. Ranked #1 in California and #1 in the West for best value colleges. As of July 1, 2025, Cal Maritime merged with Cal Poly San Luis Obispo to become Cal Poly Maritime Academy on the Cal Poly Solano Campus — students now graduate with a Cal Poly degree, gaining access to one of the strongest engineering and technical alumni networks in California alongside the maritime credential. The only degree-granting maritime academy on the West Coast.",
    hidden_pathway: "International Strategy and Security — the non-maritime program for students drawn to Pacific Rim geopolitics, maritime law, port security, and trade policy. Graduates enter government agencies, military service, international organizations, and maritime-focused policy firms. Facilities Engineering Technology is the shoreside industrial path — managing mechanical, electrical, and HVAC operations of large commercial and industrial facilities with no sea time required. Both programs sit inside the same Corps of Cadets structure that produces the licensed mariners, giving graduates the leadership and operational discipline that civilian business schools cannot replicate.",
    the_room: "A 67-acre waterfront campus on the San Pablo Bay north of San Francisco, with the 500-foot Training Ship Golden Bear as the centerpiece of a Summer Sea Term that takes cadets on a 60-day Pacific Rim voyage. Approximately 800 students — the most intimate of the state maritime academies, with faculty-to-student relationships that larger institutions cannot provide. San Francisco Bay proximity means recruiting relationships with the Port of Oakland, the Pacific shipping lines, and the West Coast energy infrastructure that connects California ports to global trade. The Cal Poly merger opens new academic pathways and Co-op/internship pipelines that the standalone academy could not access.",
    lifestyle: "",
    grad_cities: "San Francisco, Los Angeles, Seattle, Portland, Oakland — West Coast port city concentration, with International Strategy graduates distributed through federal agencies and defense contractors"
  }
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
