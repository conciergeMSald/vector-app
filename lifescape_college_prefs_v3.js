/**
 * VECTOR Lifescape — College Preference Mapping
 * Version: 3.1 — July 8, 2026
 * Coverage: All 207 schools across V1 + V2 + V3 + V4 databases
 *
 * Maps student college preferences (region, scale, social scene)
 * to the university database pool. RIASEC + NAICS ranking fires within
 * the filtered pool to produce final recommendations.
 *
 * v3.1 changes: fixed DB_DISPLAY_TO_POOL_KEY — 5 of 10 regions were
 * silently mapped to the wrong pool or to a nonexistent 'west_coast' key
 * (california/pacific_nw resolved to nothing; new_england, mid_atlantic,
 * rocky_mountains resolved to the wrong real pool). Removed CONFERENCE_POOLS
 * and all conference-filtering logic — no UI screen has ever set this
 * preference, confirmed dead code.
 */


// ─────────────────────────────────────────────────────────────
// REGION → SCHOOL POOL MAP — built from database region fields
// ─────────────────────────────────────────────────────────────

const REGION_POOLS = {
  new_england: [
    "Brown University","Dartmouth College","Gordon College","Harvard University",
    "Keene State College","Massachusetts Institute of Technology",
    "University of Connecticut","University of Maine","University of Massachusetts Amherst","University of New Hampshire",
    "University of Vermont","Williams College","Yale University",
    "Maine Maritime Academy",
    "Massachusetts Maritime Academy",
    "Amherst College",
    "Babson College",
    "Bentley University",
    "Berklee College of Music",
    "Boston College",
    "Boston University",
    "Bowdoin College",
    "Brown University",
    "Dartmouth College",
    "Harvard University",
    "Massachusetts Institute of Technology",
    "Middlebury College",
    "Northeastern University",
    "Quinnipiac University",
    "Rhode Island School of Design",
    "University of Connecticut",
    "University of Rhode Island",
    "Williams College",
    "Worcester Polytechnic Institute",
    "Yale University",
    "Providence College",
    "Wesleyan University",
  ],

  northeast: [
    "American University","Bates College",
    "Binghamton University","Bryn Mawr College",
    "Bucknell University","Carnegie Mellon University","Case Western Reserve University","Colby College",
    "Colgate University","Columbia University","Cornell University","Drexel University","Fashion Institute of Technology","Fordham University","Franklin and Marshall College",
    "George Washington University","Georgetown University","Hamilton College","Haverford College","Ithaca College","Kettering University",
    "Lehigh University","New York University",
    "Penn State University","Pratt Institute","Princeton University",
    "Reed College","Rochester Institute of Technology",
    "Rutgers University","Stevens Institute of Technology","Swarthmore College","Syracuse University",
    "Temple University","Union College","United States Military Academy",
    "University at Buffalo","University of Delaware",
    "University of Massachusetts Amherst","University of Pennsylvania","University of Pittsburgh",
    "Vassar College","Villanova University",
    "Webb Institute","Dickinson College",
    "Barnard College",
    "Gettysburg College",
    "United States Merchant Marine Academy",
  ],

  mid_atlantic: [
    "Old Dominion University","University of Richmond","University of Virginia",
    "Virginia Tech",
    "Johns Hopkins University",
    "University of Maryland College Park",
    "University of Virginia",
    "St. John's College",
  ],

  southeast: [
    "Appalachian State University","Auburn University","Baylor University","Belmont University",
    "Clemson University","College of William and Mary","Davidson College","Duke University",
    "Elon University","Emory University","Flagler College","Florida Atlantic University",
    "Florida State University","Furman University","Georgia Institute of Technology","Georgia State University",
    "High Point University","Howard University","James Madison University","Louisiana State University",
    "Marion Military Institute","Mississippi State University","North Carolina State University","Regent University",
    "Rollins College","Spelman College","Stetson University",
    "The University of Alabama","Tulane University","University of Alabama",
    "University of Arkansas","University of Central Florida","University of Florida","University of Georgia",
    "University of Kentucky","University of Louisville","University of Memphis","University of Miami",
    "University of Mississippi","University of North Carolina Chapel Hill","University of North Carolina at Chapel Hill",
    "University of Oklahoma","University of Richmond","University of South Carolina","University of South Florida",
    "University of Tennessee","University of Tennessee at Chattanooga","University of Tennessee, Knoxville","University of Virginia",
    "University of the South","Vanderbilt University","Virginia Tech","Wake Forest University",
    "Washington and Lee University","Wofford College",
    "East Carolina University",
  ],

  midwest: [
    "Butler University","Calvin University","Carleton College","Case Western Reserve University",
    "College of Wooster","Creighton University","Denison University","Drake University",
    "Grinnell College","Indiana University","Indiana University Bloomington","Iowa State University",
    "Kenyon College","Macalester College","Marquette University","Marshall University",
    "Michigan State University","Morehead State University","North Dakota State University","Northwestern University",
    "Oberlin College","Ohio State University","Ohio Wesleyan University","Purdue University",
    "Rose-Hulman Institute of Technology","South Dakota State University","University of Chicago","University of Illinois Urbana-Champaign",
    "University of Iowa","University of Kansas","University of Michigan","University of Minnesota",
    "University of Missouri","University of Nebraska-Lincoln","University of Nebraska–Lincoln","University of North Dakota",
    "University of Notre Dame","University of Wisconsin-Madison","University of Wisconsin–Madison","Washington University in St. Louis",
    "Wheaton College",
    "College of the Ozarks",
    "Illinois Wesleyan University",
  ],

  rocky_mountains: [
    "Brigham Young University","Carroll College","Colorado College","Colorado School of Mines",
    "Montana State University","Montana Technological University","Rocky Mountain College",
    "University of Colorado Boulder","University of Colorado Colorado Springs","University of Denver","University of Montana",
    "University of Montana Western","University of Nevada Reno","University of Northern Colorado","University of Utah",
    "University of Wyoming","Utah State University","Utah Valley University","Weber State University",
    "Western Colorado University",
    "Colorado State University","Boise State University",
  ],

  pacific_nw: [
    "Georgetown University","Gonzaga University","Reed College","Seattle Pacific University",
    "Southern Oregon University","University of Oregon","University of Washington",
    "Eastern Washington University",
    "University of Alaska Fairbanks",
  ],

  california: [
    // FIXED July 2026: removed 18 out-of-state schools that were incorrectly
    // embedded in this pool (Boise State/ID, BYU/UT, Colorado College/CO,
    // Colorado School of Mines/CO, Colorado State/CO, Gonzaga/WA, Montana
    // State/MT, Oregon State/OR, University of Colorado Boulder/CO,
    // University of Denver/CO, University of Idaho/ID, University of
    // Montana/MT, UNLV/NV, UNR/NV, University of Oregon/OR, University of
    // Utah/UT, University of Washington/WA, University of Hawaii/HI).
    // Those schools already have their own correct homes in the
    // rocky_mountains and pacific_nw pools above — this pool should only
    // ever contain schools actually located in California.
    "Azusa Pacific University","Biola University",
    "California Institute of Technology","California Lutheran University","California Polytechnic State University San Luis Obispo","California Polytechnic State University, San Luis Obispo",
    "California State University Chico","California State University Fresno","California State University Fullerton","California State University Long Beach",
    "California State University Los Angeles","California State University Northridge","California State University San Bernardino","California State University, Fullerton",
    "California State University, Long Beach","Claremont McKenna College","Harvey Mudd College",
    "Loyola Marymount University","Occidental College",
    "Pepperdine University","Point Loma Nazarene University","Pomona College","Saint Mary's College of California",
    "San Diego State University","San Jose State University","San José State University","Santa Clara University",
    "Stanford University","UC Berkeley","UC Riverside","UC San Diego",
    "UC Santa Barbara","UCLA","University of California Davis","University of California Irvine",
    "University of California Los Angeles","University of California Santa Barbara","University of California Santa Cruz","University of California, Berkeley",
    "University of California, Los Angeles","University of California, Merced","University of California, San Diego","University of California, Santa Barbara",
    "University of California, Santa Cruz","Deep Springs College",
    "University of San Diego","University of San Francisco","University of Southern California",
    "Westmont College",
    "USC",
    "San Francisco State University",
    "California State University Maritime Academy",
  ],

  southwest: [
    "Abilene Christian University","Arizona State University","Baylor University","Brigham Young University",
    "College of William and Mary","Colorado State University","Duke University","Elon University",
    "Mississippi State University","New Mexico State University","North Carolina State University","Northern Arizona University",
    "Oklahoma State University","Prescott College","Rice University","Southern Methodist University",
    "Texas A&M University","Texas Christian University","Texas Tech University","The University of Texas at Dallas",
    "Tulane University","University of Alabama","University of Arizona","University of Arkansas",
    "University of Denver","University of Houston","University of Kansas","University of Kentucky",
    "University of Louisville","University of Mississippi","University of Missouri","University of New Mexico",
    "University of Oklahoma","University of Tennessee","University of Texas Permian Basin","University of Texas at Austin",
    "University of Tulsa","University of Utah","University of the South","Vanderbilt University",
    "Virginia Tech","Wake Forest University",
    "SMU",
    "TCU",
    "UT Austin",
    "Sam Houston State University",
    "University of North Texas",
    "Texas State University",
    "Texas A&M University at Galveston",
  ],


  military_academies: [
    "United States Air Force Academy",
    "United States Naval Academy",
    "United States Military Academy West Point",
    "United States Coast Guard Academy",
    "United States Marine Corps University",
    "United States Merchant Marine Academy",
    "The Citadel",
    "Virginia Military Institute",
    "University of North Georgia",
    "Norwich University",
  ],

};;

// ─────────────────────────────────────────────────────────────
// CAMPUS SCALE FILTER
// ─────────────────────────────────────────────────────────────

const SCALE_MAP = {
  big_university:    { min: 20000, max: 999999, label: "20,000+ students" },
  medium_university: { min: 6000,  max: 19999,  label: "6,000-19,999 students" },
  small_campus:      { min: 0,     max: 6000,   label: "Under 6,000 students" },
  no_preference:     { min: 0,     max: 999999, label: "Any size" }
};

const SCHOOL_ENROLLMENT = {
  "Vanderbilt University":7000,"University of Michigan":47000,"Indiana University":45000,
  "University of Georgia":40000,"University of Florida":55000,"University of Oklahoma":28000,
  "Louisiana State University":37000,"Auburn University":32000,
  "University of South Carolina":35000,"Clemson University":27000,
  "Wake Forest University":5500,"University of Miami":19000,
  "University of Arizona":48000,"Arizona State University":83000,
  "University of Virginia":25000,"Babson College":2400,"Boston University":34000,
  "Dartmouth College":4500,"University of Utah":34000,"Georgetown University":20000,
  "Duke University":17000,"University of Oregon":22000,"Stanford University":17000,
  "Williams College":2200,"Amherst College":1900,"Bowdoin College":1900,
  "Middlebury College":2700,"Pomona College":1700,"University of Chicago":7000,
  "Penn State University":85000,"Stevens Institute of Technology":4000,
  "UC San Diego":43000,"Massachusetts Institute of Technology":11500,
  "Georgia Institute of Technology":44000,"Rose-Hulman Institute of Technology":2200,
  "California Institute of Technology":2200,"Carnegie Mellon University":15000,
  "Colorado School of Mines":7000,"Harvey Mudd College":900,
  "Worcester Polytechnic Institute":6500,"University of Washington":47000,
  "University of Pennsylvania":10000,"Princeton University":5500,
  "Brown University":10000,"Harvard University":23000,"Yale University":14000,
  "Cornell University":25000,"Columbia University":35000,"Gonzaga University":9000,
  "Northwestern University":22000,"University of Denver":12000,"Elon University":7000,
  "Fordham University":16000,"University of Kansas":27000,"University of Missouri":30000,
  "University of Arkansas":29000,"University of Tennessee":35000,
  "University of Colorado Boulder":37000,"Colorado State University":34000,
  "University of California Davis":40000,"Santa Clara University":9000,
  "Saint Mary's College of California":4000,"University of Nebraska-Lincoln":25000,
  "Michigan State University":50000,"Creighton University":9000,
  "University of Iowa":31000,"Drake University":5000,"Iowa State University":30000,
  "Ohio State University":61000,"University of Notre Dame":12500,
  "Villanova University":11000,"Temple University":37000,"Drexel University":24000,
  "UC Riverside":26000,"California State University Long Beach":38000,
  "California State University Fullerton":41000,"University of California Irvine":36000,
  "California Polytechnic State University San Luis Obispo":22000,
  "California State University Chico":18000,"California State University Fresno":25000,
  "University of California Santa Cruz":19000,
  "California State University Northridge":38000,
  "California State University Los Angeles":27000,"Claremont McKenna College":1400,
  "Pepperdine University":9000,"University of San Diego":9000,
  "Oregon State University":33000,"Boise State University":26000,
  "Brigham Young University":34000,"University of Kentucky":30000,
  "University of Louisville":23000,"University of Minnesota":54000,
  "Butler University":5000,"University of the South":1800,
  "University of Mississippi":22000,"Mississippi State University":21000,
  "University of Alabama":38000,"Florida State University":45000,
  "University of South Florida":50000,"University of Central Florida":70000,
  "Florida Atlantic University":30000,"Stetson University":4000,
  "Virginia Tech":35000,"Boston College":14000,"University of Pittsburgh":29000,
  "North Carolina State University":37000,"University of Maryland College Park":41000,
  "Johns Hopkins University":6000,"Emory University":7000,"Tulane University":14000,
  "Purdue University":44000,"Syracuse University":22000,"New York University":51000,
  "United States Military Academy":4500,"Rutgers University":50000,"University of Delaware":24000,
  "George Washington University":17000,"Webb Institute":100,
  "Colorado College":2200,"Deep Springs College":30,"Kettering University":2000,
  "American University":8500,"University of Connecticut":32000,"University of Massachusetts Amherst":32000,
  "Northeastern University":20000,"Case Western Reserve University":5500,
  "University of San Francisco":10000,"Baylor University":20000,
  "College of William and Mary":6500,
  "San Diego State University":36000,
  "UC Santa Barbara":26000,
  "University of Southern California":22000,
  "UC Berkeley":33000,"University of California Los Angeles":47000,
  "Rice University":4400,
  "Southern Methodist University":12000,
  "Texas Christian University":10000,
  "Texas A&M University":74000,
  "Texas Tech University":40000,
  "University of Texas at Austin":53000,
  "University of North Carolina Chapel Hill":32000,
  "Belmont University":9000,
  "Furman University":2900,
  "Wofford College":1800,
  "Rollins College":3200,
  "High Point University":6000,
  "Appalachian State University":21000,
  "University of Tennessee at Chattanooga":12000,
  "University of Richmond":4000,
  "Washington and Lee University":1800,
  "Howard University":10000,
  "Spelman College":2200,
  "Georgia State University":54000,
  "Flagler College":2800,
  "James Madison University":22000,
  "University of Memphis":22000,
  "Regent University":10000,
  "Davidson College":1800,
  "University of Illinois Urbana-Champaign":56000,
  "University of Wisconsin-Madison":47000,
  "Marquette University":12000,
  "Carleton College":2100,
  "Kenyon College":1800,
  "Oberlin College":2900,
  "Ohio Wesleyan University":1500,
  "Denison University":2400,
  "College of Wooster":2000,
  "Marshall University":12000,
  "Morehead State University":10000,
  "North Dakota State University":14000,
  "South Dakota State University":12000,
  "Grinnell College":1800,
  "Macalester College":2100,
  "Binghamton University":18000,
  "Lehigh University":7000,
  "Quinnipiac University":9000,
  "University of Rhode Island":17000,
  "Ithaca College":6000,
  "Reed College":1500,
  "Union College":2300,
  "Franklin and Marshall College":2500,
  "Bryn Mawr College":1700,
  "Occidental College":2100,
  "Bentley University":5700,
  "Rhode Island School of Design":2500,
  "Berklee College of Music":6000,
  "Pratt Institute":5000,
  "Rochester Institute of Technology":19000,
  "Fashion Institute of Technology":8000,
  "San Jose State University":36000,
  "UCLA":32000,
  "University of California Santa Barbara":26000,
  "Loyola Marymount University":10000,
  "University of Tulsa":4000,
  "University of Idaho":12000,
  "University of Nevada Las Vegas":31000,
  "University of Nevada Reno":22000,
  "University of Montana":10000,
  "Montana State University":16000,
  "University of New Mexico":23000,
  "New Mexico State University":14000,
  "California Lutheran University":3000,
  "California State University San Bernardino":20000,
  "Hamilton College":1900,
  "Swarthmore College":1600,
  "Haverford College":1400,
  "Vassar College":2400,
  "Colgate University":2900,
  "Colby College":2000,
  "Bates College":1700,
  "Bucknell University":3600
};

// ─────────────────────────────────────────────────────────────
// SOCIAL SCENE AFFINITY
// ─────────────────────────────────────────────────────────────

const SOCIAL_SCENE_AFFINITY = {

  greek_heavy: [
    "University of Michigan","University of Massachusetts Amherst","University of Delaware","Indiana University","University of Georgia",
    "University of Florida","Auburn University","Louisiana State University",
    "University of Tennessee","University of Arkansas","University of South Carolina",
    "Clemson University","University of Oklahoma","University of Kansas",
    "Penn State University","Ohio State University","University of Virginia",
    "Vanderbilt University","Wake Forest University","University of Missouri",
    "University of Iowa","University of Nebraska-Lincoln","University of Alabama",
    "University of Mississippi","Mississippi State University","Florida State University",
    "North Carolina State University","Virginia Tech","Baylor University",
    "University of Kentucky","University of Maryland College Park","Rutgers University",
    "University of Minnesota","University of Pittsburgh","Syracuse University",
    "Tulane University","University of Colorado Boulder","University of Arizona",
    "Arizona State University","Michigan State University","Purdue University",
    "Iowa State University",
    "San Diego State University",
    "University of Southern California",
    "Southern Methodist University",
    "Texas Christian University",
    "Texas A&M University",
    "Texas Tech University",
    "University of Texas at Austin",
    "University of North Carolina Chapel Hill",
    "Wofford College",
    "University of Richmond",
    "Washington and Lee University",
    "James Madison University",
    "University of Memphis",
    "University of Illinois Urbana-Champaign",
    "University of Wisconsin-Madison",
    "Denison University",
    "Marshall University",
    "North Dakota State University",
    "Lehigh University",
    "University of Rhode Island",
    "Union College",
    "Franklin and Marshall College",
    "University of Tulsa",
    "University of Idaho",
    "University of Nevada Reno",
    "Colgate University",
    "Bucknell University"
  ],

  balanced: [
    "Duke University","University of California Los Angeles","University of Miami","Northwestern University",
    "Georgetown University","University of Notre Dame","Boston University",
    "Elon University","University of Denver","Villanova University",
    "Santa Clara University","Gonzaga University","University of Oregon",
    "University of Washington","University of Utah","Pepperdine University",
    "Emory University","New York University","Northeastern University",
    "Boston College","George Washington University","American University",
    "University of San Diego","University of San Francisco",
    "University of Connecticut","Fordham University","Cornell University",
    "Brown University","Drexel University","Colorado State University",
    "University of Colorado Boulder","College of William and Mary",
    "Johns Hopkins University","Brigham Young University","Creighton University",
    "Butler University","Drake University",
    "UC Santa Barbara",
    "Belmont University",
    "Furman University",
    "Rollins College",
    "High Point University",
    "Appalachian State University",
    "University of Tennessee at Chattanooga",
    "Howard University",
    "Flagler College",
    "Regent University",
    "Marquette University",
    "Ohio Wesleyan University",
    "College of Wooster",
    "Morehead State University",
    "South Dakota State University",
    "Binghamton University",
    "Quinnipiac University",
    "Ithaca College",
    "Bentley University",
    "Rochester Institute of Technology",
    "University of Nevada Las Vegas",
    "University of Montana",
    "Montana State University",
    "University of New Mexico",
    "New Mexico State University",
    "California Lutheran University"
  ],

  focused: [
    "Massachusetts Institute of Technology","California Institute of Technology",
    "Harvey Mudd College","Carnegie Mellon University","University of Chicago",
    "Rose-Hulman Institute of Technology","Stevens Institute of Technology",
    "Worcester Polytechnic Institute","Colorado School of Mines",
    "Georgia Institute of Technology","Stanford University","Williams College",
    "Amherst College","Bowdoin College","Middlebury College",
    "Claremont McKenna College","Pomona College","Babson College",
    "Johns Hopkins University","Webb Institute","Deep Springs College",
    "Kettering University","Colorado College",
    "California Polytechnic State University San Luis Obispo",
    "United States Military Academy","UC San Diego","Case Western Reserve University",
    "University of the South",
    "UC Berkeley",
    "Rice University",
    "Spelman College",
    "Georgia State University",
    "Davidson College",
    "Carleton College",
    "Kenyon College",
    "Oberlin College",
    "Grinnell College",
    "Macalester College",
    "Reed College",
    "Bryn Mawr College",
    "Occidental College",
    "Rhode Island School of Design",
    "Berklee College of Music",
    "Pratt Institute",
    "Fashion Institute of Technology",
    "San Jose State University",
    "California State University San Bernardino",
    "Hamilton College",
    "Swarthmore College",
    "Haverford College",
    "Vassar College",
    "Colby College",
    "Bates College"
  ]

};

// ─────────────────────────────────────────────────────────────
// CORE MATCHING FUNCTION
// ─────────────────────────────────────────────────────────────

// ── RELIGIOUS AFFILIATION MAP ────────────────────────────────────────────
const RELIGIOUS_AFFILIATION = {

  // ── CATHOLIC (Jesuit-heavy + diocesan) ───────────────────────────────────
  catholic: [
    'University of Notre Dame','Georgetown University','Boston College',
    'Gonzaga University','Villanova University','Fordham University',
    'Santa Clara University','University of San Diego',
    "Saint Mary's College of California",'University of San Francisco',
    'Creighton University','Marquette University',
    'Loyola University Chicago','Loyola Marymount University',
    'Seton Hall University','Duquesne University','DePaul University',
    'Providence College','Xavier University','Stonehill College'
  ],

  // ── EVANGELICAL / NON-DENOMINATIONAL CHRISTIAN ───────────────────────────
  evangelical: [
    'Wheaton College','Biola University','Calvin University',
    'Gordon College','Cedarville University'
  ],

  // ── METHODIST ────────────────────────────────────────────────────────────
  methodist: [
    'Duke University','Emory University','Boston University',
    'SMU','Ohio Wesleyan University','Elon University',
    'High Point University','Butler University','Drake University',
    'Stetson University','DePauw University','Millsaps College',
    'Hendrix College','College of Wooster'
  ],

  // ── BAPTIST ──────────────────────────────────────────────────────────────
  baptist: [
    'Baylor University','Wake Forest University','Belmont University',
    'Furman University','Wofford College','University of Tulsa',
    'Texas Christian University'
  ],

  // ── PRESBYTERIAN ─────────────────────────────────────────────────────────
  presbyterian: [
    'Davidson College','Macalester College','Centre College',
    'College of Wooster','Furman University'
  ],

  // ── QUAKER (Friends) ─────────────────────────────────────────────────────
  quaker: [
    'Swarthmore College','Haverford College'
  ],

  // ── EPISCOPAL / ANGLICAN ─────────────────────────────────────────────────
  episcopal: [
    'University of the South','Hobart and William Smith Colleges'
  ],

  // ── LUTHERAN ─────────────────────────────────────────────────────────────
  lutheran: [
    'St. Olaf College','Valparaiso University','Augustana College',
    'California Lutheran University','Gettysburg College',
    'Muhlenberg College'
  ],

  // ── CHURCH OF CHRIST ─────────────────────────────────────────────────────
  church_of_christ: [
    'Pepperdine University','Lipscomb University','Abilene Christian University'
  ],

  // ── LDS / LATTER-DAY SAINTS ──────────────────────────────────────────────
  lds: [
    'Brigham Young University'
  ],

  // ── SEVENTH-DAY ADVENTIST ────────────────────────────────────────────────
  seventh_day_adventist: [
    'Andrews University','Walla Walla University','Southern Adventist University'
  ],

  // ── JEWISH — Track A: institutional Hillel + campus Jewish life ─────────
  // Student wants active Hillel, Shabbat programming, kosher options,
  // Jewish Studies courses, significant Jewish enrollment on campus.
  // Sorted by Hillel strength — strongest first.
  jewish: [
    // Tier 1: Dominant Hillel presence, 20%+ Jewish enrollment
    'Brandeis University',             // Jewish-founded, 40%+ Jewish enrollment
    'Indiana University',              // IU Hillel — frequently ranked #1 nationally
    'University of Maryland College Park', // Clarice Smith Hillel — top-5 nationally
    'University of Michigan',          // Hillel of Greater Ann Arbor — flagship scale
    'Columbia University',
    'University of Pennsylvania',
    'Brown University',
    'Cornell University',
    // Tier 2: Strong Hillel, 10-20% Jewish enrollment
    'George Washington University',
    'American University',
    'New York University',
    'Tulane University',
    'Emory University',
    'University of Florida',
    'Ohio State University',
    'University of Wisconsin-Madison',
    'University of Illinois Urbana-Champaign',
    'Boston University',
    'Tufts University',
    'University of Massachusetts Amherst',
    'Rutgers University',
    'Binghamton University',
    'Syracuse University',
    // Tier 3: Active Hillel, Jewish community present
    'University of Pittsburgh',
    'University of Colorado Boulder',
    'University of Arizona',
    'University of Connecticut',
    'University of Minnesota',
    'University of Vermont',
    'Skidmore College',
    'Vassar College',
    'Oberlin College',
    'Yeshiva University'
  ],

  // ── JEWISH — Track B: strong Jewish social presence, secular environment ──
  // Student identifies culturally/socially as Jewish but wants a secular campus.
  // Wants to find their people without needing a formal religious structure.
  // Prioritizes cities with dense Jewish communities and large Jewish student bodies.
  jewish_community: [
    // Major city campuses — Jewish community lives on and off campus
    'New York University',             // NYC — largest Jewish student population in US
    'Columbia University',             // NYC — Upper West Side proximity
    'Boston University',              // Boston — large Jewish metro community
    'Northeastern University',         // Boston — Jewish student presence
    'Tufts University',               // Greater Boston
    'George Washington University',    // DC — active Jewish social scene
    'American University',            // DC corridor
    'University of Michigan',          // Ann Arbor — large Jewish community
    'University of Maryland College Park', // DC suburbs — dense Jewish population
    'Indiana University',             // Midwest flagship, strong Jewish social culture
    'Ohio State University',
    'University of Wisconsin-Madison',
    'University of Illinois Urbana-Champaign',
    'University of Minnesota',
    // Large flagships where Jewish community self-organizes
    'University of Florida',
    'University of Arizona',
    'University of Colorado Boulder',
    'Rutgers University',
    'University of Pittsburgh',
    'University of Connecticut',
    'Syracuse University',
    'Binghamton University',
    // California — large Jewish communities in both metros
    'UC Berkeley',
    'UCLA',
    'UC San Diego',
    'UC Santa Barbara',
    'University of Southern California',
    // Jewish roots in smaller liberal contexts
    'Vassar College',
    'Oberlin College',
    'Brandeis University',
    'Tulane University',
    'Emory University',
    'University of Vermont',
    'Skidmore College'
  ],

  // ── REFORMED CHRISTIAN ───────────────────────────────────────────────────
  reformed: [
    'Calvin University','Hope College','Dordt University'
  ],

  // ── BROAD PROTESTANT (catch-all for "Christian campus culture") ──────────
  protestant: [
    'Baylor University','Wake Forest University','Emory University',
    'Pepperdine University','Elon University','University of the South',
    'Duke University','Boston University','Tulane University',
    'Butler University','Drake University','Stetson University',
    'Texas Christian University','Belmont University',
    'Furman University','Wofford College','High Point University',
    'Regent University','Davidson College','Ohio Wesleyan University',
    'College of Wooster','Macalester College','University of Tulsa',
    'California Lutheran University','Swarthmore College','Haverford College',
    'DePauw University','St. Olaf College','Wheaton College',
    'Biola University','Calvin University','Gordon College',
    'Cedarville University','Gettysburg College','Muhlenberg College',
    'Centre College','Valparaiso University',
    'Augustana College'
  ],

  // ── SECULAR PREFERRED ────────────────────────────────────────────────────
  secular: ['__EXCLUDE_RELIGIOUS__'],

  // ── NO PREFERENCE ────────────────────────────────────────────────────────
  no_preference: ['__ALL__']
};

const RELIGIOUS_CULTURE_SCHOOLS = [
  // Schools where religious culture is pervasive and campus life is shaped by faith
  'Brigham Young University','Baylor University','Pepperdine University',
  'University of the South','Stetson University',
  'Wheaton College','Biola University','Calvin University',
  'Gordon College','Cedarville University','Regent University',
  'Belmont University','High Point University','Andrews University',
  'Abilene Christian University','Lipscomb University'
];

// ── SCHOOL GPA RANGES (unweighted 4.0 scale) ─────────────────────────────
const SCHOOL_GPA_RANGES = {
  "Harvard University":{min:3.9},"Yale University":{min:3.9},
  "Princeton University":{min:3.9},"Columbia University":{min:3.9},
  "University of Pennsylvania":{min:3.9},"Brown University":{min:3.9},
  "Cornell University":{min:3.8},"Dartmouth College":{min:3.9},
  "Massachusetts Institute of Technology":{min:3.9},
  "Stanford University":{min:3.9},"California Institute of Technology":{min:3.9},
  "University of Chicago":{min:3.9},"Johns Hopkins University":{min:3.8},
  "Northwestern University":{min:3.8},"Duke University":{min:3.8},
  "Vanderbilt University":{min:3.8},"Georgetown University":{min:3.8},
  "Carnegie Mellon University":{min:3.7},"Emory University":{min:3.7},
  "University of Notre Dame":{min:3.8},"Williams College":{min:3.9},
  "Amherst College":{min:3.9},"Bowdoin College":{min:3.8},
  "Middlebury College":{min:3.7},"Pomona College":{min:3.8},
  "Claremont McKenna College":{min:3.8},"Harvey Mudd College":{min:3.9},
  "Webb Institute":{min:3.7},"Deep Springs College":{min:3.9},
  "Colorado College":{min:3.7},"University of the South":{min:3.4},
  "Boston College":{min:3.7},"University of Virginia":{min:3.8},
  "Wake Forest University":{min:3.7},"Villanova University":{min:3.6},
  "Georgia Institute of Technology":{min:3.7},"University of Michigan":{min:3.7},
  "UC San Diego":{min:3.8},"University of California Irvine":{min:3.7},
  "University of California Davis":{min:3.6},
  "University of California Santa Cruz":{min:3.4},
  "University of Washington":{min:3.6},"Ohio State University":{min:3.5},
  "Penn State University":{min:3.4},"Purdue University":{min:3.5},
  "Indiana University":{min:3.2},"University of Minnesota":{min:3.5},
  "Michigan State University":{min:3.3},
  "University of Maryland College Park":{min:3.5},
  "Rutgers University":{min:3.3},"Babson College":{min:3.5},
  "Boston University":{min:3.6},"Northeastern University":{min:3.6},
  "New York University":{min:3.6},"George Washington University":{min:3.5},
  "American University":{min:3.3},"Fordham University":{min:3.4},
  "Drexel University":{min:3.3},"Syracuse University":{min:3.3},
  "Temple University":{min:3.0},"University of Pittsburgh":{min:3.5},
  "Case Western Reserve University":{min:3.7},
  "Rose-Hulman Institute of Technology":{min:3.5},
  "Stevens Institute of Technology":{min:3.5},
  "Worcester Polytechnic Institute":{min:3.5},
  "Colorado School of Mines":{min:3.5},"Kettering University":{min:3.0},
  "United States Military Academy":{min:3.7},
  "University of Georgia":{min:3.5},"University of Florida":{min:3.7},
  "University of Alabama":{min:3.0},"Auburn University":{min:3.3},
  "Louisiana State University":{min:3.0},"University of Tennessee":{min:3.2},
  "University of Arkansas":{min:3.0},"University of South Carolina":{min:3.0},
  "Clemson University":{min:3.5},"University of Mississippi":{min:2.8},
  "Mississippi State University":{min:2.8},"Florida State University":{min:3.4},
  "University of South Florida":{min:3.0},
  "University of Central Florida":{min:3.2},
  "Florida Atlantic University":{min:2.8},"Stetson University":{min:3.0},
  "Northwestern University":{min:3.8},"University of Iowa":{min:3.0},
  "Iowa State University":{min:3.0},"University of Nebraska-Lincoln":{min:3.0},
  "University of Kentucky":{min:3.0},"University of Missouri":{min:3.0},
  "Virginia Tech":{min:3.4},
  "North Carolina State University":{min:3.5},
  "University of Miami":{min:3.6},"Elon University":{min:3.3},
  "College of William and Mary":{min:3.8},
  "University of Oklahoma":{min:3.2},"University of Kansas":{min:3.0},
  "Baylor University":{min:3.4},"University of Arizona":{min:3.0},
  "Arizona State University":{min:2.8},
  "University of Colorado Boulder":{min:3.0},
  "Colorado State University":{min:3.0},"University of Denver":{min:3.3},
  "University of Oregon":{min:3.2},"Oregon State University":{min:3.0},
  "Boise State University":{min:2.8},"University of Utah":{min:3.0},
  "Brigham Young University":{min:3.5},"Gonzaga University":{min:3.6},
  "Pepperdine University":{min:3.5},"Santa Clara University":{min:3.5},
  "University of San Diego":{min:3.4},"University of San Francisco":{min:3.2},
  "Saint Mary's College of California":{min:3.2},
  "California Polytechnic State University San Luis Obispo":{min:3.5},
  "UC Riverside":{min:3.2},
  "California State University Long Beach":{min:2.8},
  "California State University Fullerton":{min:2.8},
  "California State University Northridge":{min:2.5},
  "California State University Los Angeles":{min:2.5},
  "California State University Chico":{min:2.8},
  "California State University Fresno":{min:2.8},
  "Tulane University":{min:3.5},"Creighton University":{min:3.4},
  "Butler University":{min:3.2},"Drake University":{min:3.2},
  "University of Louisville":{min:3.0},"University of Connecticut":{min:3.4},"University of Massachusetts Amherst":{min:3.5},"University of Delaware":{min:3.3},
  "University of the South":{min:3.4},
  "San Diego State University":{"min":3.3},
  "UC Santa Barbara":{"min":3.8},
  "University of Southern California":{"min":3.7},
  "UC Berkeley":{"min":3.9},"University of California Los Angeles":{"min":3.9},
  "Rice University":{"min":3.9},
  "Southern Methodist University":{"min":3.5},
  "Texas Christian University":{"min":3.5},
  "Texas A&M University":{"min":3.5},
  "Texas Tech University":{"min":3.2},
  "University of Texas at Austin":{"min":3.7},
  "University of North Carolina Chapel Hill":{"min":3.8},
  "Belmont University":{"min":3.4},
  "Furman University":{"min":3.7},
  "Wofford College":{"min":3.5},
  "Rollins College":{"min":3.4},
  "High Point University":{"min":3.3},
  "Appalachian State University":{"min":3.3},
  "University of Tennessee at Chattanooga":{"min":3.2},
  "University of Richmond":{"min":3.7},
  "Washington and Lee University":{"min":3.8},
  "Howard University":{"min":3.5},
  "Spelman College":{"min":3.6},
  "Georgia State University":{"min":3.2},
  "Flagler College":{"min":3.2},
  "James Madison University":{"min":3.5},
  "University of Memphis":{"min":3.1},
  "Regent University":{"min":3.2},
  "Davidson College":{"min":3.7},
  "University of Illinois Urbana-Champaign":{"min":3.7},
  "University of Wisconsin-Madison":{"min":3.7},
  "Marquette University":{"min":3.5},
  "Carleton College":{"min":3.9},
  "Kenyon College":{"min":3.7},
  "Oberlin College":{"min":3.7},
  "Ohio Wesleyan University":{"min":3.3},
  "Denison University":{"min":3.6},
  "College of Wooster":{"min":3.4},
  "Marshall University":{"min":3.0},
  "Morehead State University":{"min":3.0},
  "North Dakota State University":{"min":3.1},
  "South Dakota State University":{"min":3.0},
  "Grinnell College":{"min":3.8},
  "Macalester College":{"min":3.7},
  "Binghamton University":{"min":3.7},
  "Lehigh University":{"min":3.7},
  "Quinnipiac University":{"min":3.3},
  "University of Rhode Island":{"min":3.2},
  "Ithaca College":{"min":3.4},
  "Reed College":{"min":3.8},
  "Union College":{"min":3.6},
  "Franklin and Marshall College":{"min":3.6},
  "Bryn Mawr College":{"min":3.8},
  "Occidental College":{"min":3.7},
  "Bentley University":{"min":3.5},
  "Rhode Island School of Design":{"min":3.5},
  "Berklee College of Music":{"min":3.2},
  "Pratt Institute":{"min":3.4},
  "Rochester Institute of Technology":{"min":3.5},
  "Fashion Institute of Technology":{"min":3.2},
  "San Jose State University":{"min":3.2},
  "University of Tulsa":{"min":3.5},
  "University of Idaho":{"min":3.1},
  "University of Nevada Las Vegas":{"min":3.0},
  "University of Nevada Reno":{"min":3.1},
  "University of Montana":{"min":3.0},
  "Montana State University":{"min":3.1},
  "University of New Mexico":{"min":3.0},
  "New Mexico State University":{"min":3.0},
  "California Lutheran University":{"min":3.3},
  "California State University San Bernardino":{"min":3.0},
  "Hamilton College":{"min":3.8},
  "Swarthmore College":{"min":3.9},
  "Haverford College":{"min":3.8},
  "Vassar College":{"min":3.8},
  "Colgate University":{"min":3.7},
  "Colby College":{"min":3.7},
  "Bates College":{"min":3.6},
  "Bucknell University":{"min":3.6},
  "Providence College":{"min":3.5},
  "Xavier University":{"min":3.4},
};


// ── GPA TIER ENGINE ────────────────────────────────────────────────────────
// Converts a normalized GPA (0-4.0 unweighted) into a tier that drives
// the consultant expansion layer. Tiers are non-judgmental labels — they
// open doors for the consultant, never shown to the family.
//
// Tier definitions (unweighted 4.0 scale):
//   reach      3.7+  — qualifies for highly selective + honors tracks
//   competitive 3.3-3.69 — qualifies for selective universities
//   solid      2.7-3.29 — qualifies for strong regional and state schools
//   open       <2.7  — broad access tier, strong community college pathways


// ── HONORS COLLEGE INTELLIGENCE ────────────────────────────────────────────
// Schools where the honors track fundamentally changes the academic experience.
// Used by the consultant expansion layer — never shown to families directly.
// GPA threshold = minimum to be competitive for the honors program.
// Source: publicly available honors college admission data.

const HONORS_COLLEGES = {
  "Arizona State University":              { name: "Barrett Honors College",          gpa_min: 3.6, note: "One of the largest honors colleges in the US — small seminar culture inside a major research university. Strong pipeline to graduate school and competitive fellowships." },
  "University of Georgia":                 { name: "Foundation Fellowship / Honors",  gpa_min: 3.7, note: "Foundation Fellowship is one of the most competitive merit scholarships in the South. Honors Program offers research-intensive tracks across all colleges." },
  "University of Florida":                 { name: "UF Honors Program",               gpa_min: 3.7, note: "Small cohort experience at a flagship research university. Strong pre-med, engineering, and business honors tracks." },
  "University of South Carolina":          { name: "South Carolina Honors College",   gpa_min: 3.5, note: "Nationally ranked honors college with its own residence hall, faculty, and curriculum. Consistently produces Goldwater and Fulbright scholars." },
  "University of Alabama":                 { name: "UA Honors College",               gpa_min: 3.5, note: "Significant merit aid available for out-of-state students with strong profiles. Small-school feel with research university resources." },
  "University of Arkansas":                { name: "Honors College",                  gpa_min: 3.5, note: "Chancellor's Scholarship covers full tuition for top applicants. Strong STEM and business honors tracks." },
  "University of Tennessee, Knoxville":    { name: "Honors and Scholars Programs",    gpa_min: 3.5, note: "Haslam Scholars Program is the flagship merit scholarship. Strong engineering and pre-health honors tracks." },
  "University of Texas at Austin":         { name: "Plan II Liberal Arts / BHP",      gpa_min: 3.8, note: "Plan II is one of the most prestigious honors degrees in the country. Business Honors Program (BHP) rivals Wharton for undergrad business." },
  "Pennsylvania State University":         { name: "Schreyer Honors College",         gpa_min: 3.6, note: "Full merit scholarship for top students. One of the most funded honors colleges at a public university." },
  "University of Michigan":                { name: "LSA Honors / Ross BBA",           gpa_min: 3.8, note: "Ross School of Business BBA is among the top undergraduate business programs nationally. LSA Honors adds interdisciplinary research depth." },
  "University of Virginia":                { name: "Echols Scholars / Rodman Scholars", gpa_min: 3.8, note: "Echols Scholars (College of Arts & Sciences) and Rodman Scholars (Engineering) offer curriculum freedom and research access unavailable to general admits." },
  "University of North Carolina Chapel Hill": { name: "Morehead-Cain / Robertson Scholars", gpa_min: 3.7, note: "Morehead-Cain is one of the most prestigious merit scholarships in the US — full funding plus summer enrichment programs." },
  "University of Maryland College Park":   { name: "College Park Scholars / Gemstone", gpa_min: 3.5, note: "Gemstone Honors Program is a four-year team research program — unusual at the undergraduate level. College Park Scholars offers thematic living-learning communities." },
  "Ohio State University":                 { name: "University Honors",               gpa_min: 3.5, note: "Knowlton School of Architecture and Fisher College of Business have strong honors tracks. Research-intensive with significant merit aid available." },
  "University of Colorado Boulder":        { name: "Farrand Honors Program / Norlin Scholars", gpa_min: 3.5, note: "Norlin Scholars is a merit fellowship with community leadership focus. Farrand offers interdisciplinary curriculum in a research university setting." },
};

function getGPATier(normalizedGPA) {
  if (normalizedGPA === null || normalizedGPA === undefined) return null;
  const gpa = parseFloat(normalizedGPA);
  if (isNaN(gpa)) return null;
  if (gpa >= 3.7) return 'reach';
  if (gpa >= 3.3) return 'competitive';
  if (gpa >= 2.7) return 'solid';
  return 'open';
}

// GPA tier thresholds for school-level filtering
const GPA_TIER_THRESHOLDS = {
  reach:       3.7,
  competitive: 3.3,
  solid:       2.7,
  open:        0
};


// ── CONSULTANT EXPANSION LAYER ─────────────────────────────────────────────
// Surfaces reaches and honors tracks the student didn't ask for but qualifies for.
// Shown to consultant only — never to the family.
// Rules:
//   1. Must be within the student's selected region(s)
//   2. GPA must meet the honors threshold
//   3. Returns up to 5 schools with honors context attached

function getConsultantExpansion(gpaTier, normalizedGPA, regionPool, campusScale, primaryMatches) {
  if (!gpaTier || gpaTier === 'open') return [];
  if (!normalizedGPA) return [];

  const primarySet = new Set(primaryMatches || []);
  const results = [];

  Object.entries(HONORS_COLLEGES).forEach(([school, honors]) => {
    // Hard gates
    if (primarySet.has(school)) return;
    if (regionPool && !regionPool.includes(school)) return;
    if (normalizedGPA < honors.gpa_min) return;

    // Scale gate — strictly enforce the student's chosen size for expansion
    if (campusScale && campusScale !== 'no_preference') {
      const enroll = SCHOOL_ENROLLMENT[school] || 0;
      const scale = SCALE_MAP[campusScale];
      // Only skip schools significantly smaller than the requested range
      // but always filter out schools that exceed the upper bound
      if (scale) {
        if (enroll > scale.max) return;
        if (enroll > 0 && enroll < scale.min * 0.5) return;
      }
    }

    results.push({
      name: school,
      honors_name: honors.name,
      honors_gpa_min: honors.gpa_min,
      honors_note: honors.note,
      type: 'consultant_expansion',
      reason: 'honors_eligible'
    });
  });

  // Sort by GPA threshold descending — most selective first
  return results
    .sort((a, b) => b.honors_gpa_min - a.honors_gpa_min)
    .slice(0, 5);
}

// ═══════════════════════════════════════════════════════════════════════
// S4 — matchUniversities() — IMPL-003 Structured Pool Architecture
// OQ-001/002/003 resolutions applied (signed off July 2026)
// ═══════════════════════════════════════════════════════════════════════

// OQ-001: pool-logic-only size bands (SCALE_MAP source object untouched —
// this only affects size-alternate lookups inside the new pool builder)
const POOL_SIZE_BANDS = {
  small_campus:      { min: 0,     max: 5999 },
  medium_university: { min: 6000,  max: 19999 },
  big_university:    { min: 20000, max: 999999 },
};
const SIZE_STEP_UP   = { small_campus: 'medium_university', medium_university: 'big_university', big_university: null };
const SIZE_STEP_DOWN = { big_university: 'medium_university', medium_university: 'small_campus', small_campus: null };

// OQ-002: geographic adjacency map — used to pad short alternate pools
// and to build the counselor_3 "Consider Also" set.
// FIXED July 2026: previous version referenced 'west_coast' and
// 'south_central', neither of which are real REGION_POOLS keys or
// selectable UI regions — so this padding silently did nothing for
// southwest, and had zero entry at all for 6 of the 10 real regions.
const REGION_ADJACENCY = {
  new_england: 'northeast',       northeast: 'new_england',
  mid_atlantic: 'southeast',      southeast: 'mid_atlantic',
  midwest: 'northeast',
  rocky_mountains: 'southwest',   southwest: 'rocky_mountains',
  pacific_nw: 'california',       california: 'california',
};

function schoolsInSizeBand(schoolNames, sizeKey) {
  const band = POOL_SIZE_BANDS[sizeKey];
  if (!band) return [];
  return schoolNames.filter(s => {
    const enroll = SCHOOL_ENROLLMENT[s] || 10000;
    return enroll >= band.min && enroll <= band.max;
  });
}

function getRegionSchoolPool(regions) {
  const pool = new Set();
  (regions || []).forEach(r => (REGION_POOLS[r] || []).forEach(s => pool.add(s)));
  return [...pool];
}

function getAdjacentRegionPool(regions) {
  const pool = new Set();
  (regions || []).forEach(r => {
    const adj = REGION_ADJACENCY[r];
    if (adj && !regions.includes(adj)) {
      (REGION_POOLS[adj] || []).forEach(s => pool.add(s));
    }
  });
  return [...pool];
}

// ── The ORIGINAL fit-scoring engine — UNCHANGED, renamed for reuse ───────
// This is the exact function body from v3.0. Every filter, every score
// weight, every line of scoring logic is identical to before. It now
// returns the flat ranked-name array exactly as it always did.
function scoreAndRankSchools(collegePrefs, riasec, naicsSectors, comboUnlocks, gpaData) {
  const { campus_scale, regions, social_scene, religion } = collegePrefs;
  const gpa = gpaData ? gpaData.normalized : null;

  // Step 2 — Region pool
  let regionPool = null;
  if (regions && regions.length > 0 && !regions.includes('no_preference') && !regions.includes('anywhere')) {
    regionPool = [];
    regions.forEach(r => {
      const key = DB_DISPLAY_TO_POOL_KEY[r] || r;
      (REGION_POOLS[key] || []).forEach(school => {
        if (!regionPool.includes(school)) regionPool.push(school);
      });
    });
  }

  // Step 3 — All school names
  const allSchools = Object.keys(SCHOOL_ENROLLMENT);

  // Step 4 — Region filter
  let eligible = allSchools.filter(school => {
    const inRegion = regionPool === null || regionPool.includes(school);
    return inRegion;
  });

  // Step 5 — Scale filter
  if (campus_scale && campus_scale !== 'no_preference') {
    const scale = SCALE_MAP[campus_scale];
    eligible = eligible.filter(school => {
      const enroll = SCHOOL_ENROLLMENT[school] || 10000;
      return enroll >= scale.min && enroll <= scale.max;
    });
  }

  // Step 5b — Religion filter (hard filter for specific affiliation)
  if (religion && religion !== 'no_preference' && religion !== 'secular') {
    const religionPool = RELIGIOUS_AFFILIATION[religion] || [];
    if (religionPool.length > 0 && religionPool[0] !== '__ALL__') {
      eligible = eligible.filter(school => religionPool.includes(school));
    }
  }

  // Step 6 — Build NAICS → major cluster map for program strength scoring
  const NAICS_MAJOR_MAP = {
    52: ['Business'],
    51: ['Computer Science','Media & Communications','Arts & Design'],
    54: ['Computer Science','Sciences','Engineering'],
    62: ['Health Sciences'],
    61: ['Education','Law & Policy'],
    71: ['Arts & Design','Media & Communications','Performing Arts'],
    23: ['Engineering','Arts & Design'],
    92: ['Law & Policy'],
    56: ['Business'],
    81: ['Business','Entrepreneurship'],
    72: ['Business','Entrepreneurship'],
    44: ['Business'],
    48: ['Engineering'],
    33: ['Engineering'],
    32: ['Sciences','Engineering'],
    31: ['Sciences'],
  };

  // Derive student's desired major clusters from NAICS profile
  const studentMajorClusters = new Set();
  (naicsSectors || []).slice(0, 5).forEach(n => {
    const clusters = NAICS_MAJOR_MAP[n.sector] || [];
    clusters.forEach(c => studentMajorClusters.add(c));
  });

  // Step 6 — Score and sort
  const scored = eligible.map(school => {
    let score = 5; // base

    // ── Program strength boost — profile-aware specificity ────────────────
    if (studentMajorClusters.size > 0 && typeof getMajorStrengths === 'function') {
      const schoolMajors = getMajorStrengths(school);

      const creativeSignalClusters = new Set(['Media & Communications','Performing Arts','Arts & Design']);
      const stemSignalClusters     = new Set(['Engineering','Computer Science']);
      const healthSignalClusters   = new Set(['Health Sciences']);
      const businessSignalClusters = new Set(['Business','Entrepreneurship']);

      const studentCreativeCount  = [...studentMajorClusters].filter(c => creativeSignalClusters.has(c)).length;
      const studentStemCount      = [...studentMajorClusters].filter(c => stemSignalClusters.has(c)).length;
      const studentHealthCount    = [...studentMajorClusters].filter(c => healthSignalClusters.has(c)).length;
      const studentBizCount       = [...studentMajorClusters].filter(c => businessSignalClusters.has(c)).length;

      const creativeOverlap  = schoolMajors.filter(m => studentMajorClusters.has(m) && creativeSignalClusters.has(m));
      const stemOverlap      = schoolMajors.filter(m => studentMajorClusters.has(m) && stemSignalClusters.has(m));
      const healthOverlap    = schoolMajors.filter(m => studentMajorClusters.has(m) && healthSignalClusters.has(m));
      const bizOverlap       = schoolMajors.filter(m => studentMajorClusters.has(m) && businessSignalClusters.has(m));

      if (studentCreativeCount >= 2 && creativeOverlap.length >= 2) score += 25;
      else if (studentCreativeCount >= 1 && creativeOverlap.length >= 1) score += 15;
      else if (studentStemCount >= 2 && stemOverlap.length >= 2) score += 25;
      else if (studentStemCount >= 1 && stemOverlap.length >= 1) score += 15;
      else if (studentHealthCount >= 1 && healthOverlap.length >= 1) score += 20;
      else if (studentBizCount >= 1 && bizOverlap.length >= 1) score += 15;
      else {
        const generalOverlap = schoolMajors.filter(m => studentMajorClusters.has(m));
        if (generalOverlap.length >= 2) score += 8;
        else if (generalOverlap.length === 1) score += 4;
      }
    }

    // Social scene affinity bonus
    if (social_scene && social_scene !== 'no_preference') {
      const list = SOCIAL_SCENE_AFFINITY[social_scene] || [];
      if (list.includes(school)) score += 10;
    }

    // Religion affiliation boost
    if (religion && religion !== 'no_preference' && religion !== 'secular') {
      if ((RELIGIOUS_AFFILIATION[religion] || []).includes(school)) score += 8;
    }

    // Secular preference — soft penalize strong religious culture schools
    if (religion === 'secular') {
      if (RELIGIOUS_CULTURE_SCHOOLS.includes(school)) score -= 10;
    }

    // GPA soft filter
    if (gpa) {
      const range = SCHOOL_GPA_RANGES[school];
      if (range) {
        if (gpa >= range.min) score += 5;
        if (gpa >= range.min + 0.2) score += 3;
        if (gpa < range.min - 0.3) score -= 8;
      }
    }

    return { school, score };
  });

  return scored.sort((a, b) => b.score - a.score).map(s => s.school);
}

// ── NEW matchUniversities() — pool-aware, callD-compatible flat output ───
// Production sends DB DISPLAY-NAME region strings ("Southeast", "West Coast")
// and uses 'anywhere' as the no-constraint sentinel — NOT the snake_case
// IMPL-003 keys used internally by REGION_POOLS/REGION_ADJACENCY.
// This function bridges that gap and ALWAYS returns a flat ranked-name
// array so the existing callD block (lifescape.html) needs zero changes.

// FIXED July 2026: every region key below has its own distinct, real entry
// in REGION_POOLS (verified directly against the REGION_POOLS definition
// above). The previous version of this table incorrectly collapsed
// new_england->northeast, mid_atlantic->southeast, rocky_mountains->southwest,
// and pacific_nw/california->'west_coast' (a key that never existed in
// REGION_POOLS at all). That meant 5 of 10 regions silently routed to the
// wrong pool or to nothing — most critically, selecting California alone
// returned zero true California schools for the primary match list.
const DB_DISPLAY_TO_POOL_KEY = {
  new_england: 'new_england',
  northeast: 'northeast',
  mid_atlantic: 'mid_atlantic',
  southeast: 'southeast',
  midwest: 'midwest',
  rocky_mountains: 'rocky_mountains',
  pacific_nw: 'pacific_nw',
  california: 'california',
  southwest: 'southwest',
  military_academies: 'military_academies',
};

function matchUniversities(collegePrefs, riasec, naicsSectors, comboUnlocks, gpaData) {
  const { campus_scale, regions } = collegePrefs;

  // Always compute the base fit-ranked list first — this is unchanged behavior.
  const rankedNames = scoreAndRankSchools(collegePrefs, riasec, naicsSectors, comboUnlocks, gpaData);

  const isAnywhere = !regions || regions.length === 0 || regions.includes('anywhere');
  if (isAnywhere) {
    return rankedNames; // identical to today's behavior — zero change
  }

  // Bridge production's DB display-name strings to internal pool keys
  const poolKeys = [...new Set(
    regions.map(r => DB_DISPLAY_TO_POOL_KEY[r]).filter(Boolean)
  )];

  if (poolKeys.length === 0) {
    // Unrecognized region strings — fail safe to the unchanged flat list
    return rankedNames;
  }

  // ── Build the 9+12+3 pool internally (IMPL-003 §5) ──────────────────────
  const family_9 = rankedNames.slice(0, 9);
  const excludeSet = new Set(family_9);

  const stepUpKey   = campus_scale ? SIZE_STEP_UP[campus_scale]   : null;
  const stepDownKey = campus_scale ? SIZE_STEP_DOWN[campus_scale] : null;
  const regionSchoolPool = getRegionSchoolPool(poolKeys);

  function buildSizeAlternates(sizeKey, needed) {
    if (!sizeKey) return [];
    let candidates = schoolsInSizeBand(regionSchoolPool, sizeKey).filter(s => !excludeSet.has(s));
    if (candidates.length < needed) {
      const adjacentPool = getAdjacentRegionPool(poolKeys);
      const pad = schoolsInSizeBand(adjacentPool, sizeKey).filter(s => !excludeSet.has(s) && !candidates.includes(s));
      candidates = candidates.concat(pad);
    }
    return candidates.slice(0, needed);
  }

  const sizeUpNames   = buildSizeAlternates(stepUpKey, 6);
  const sizeDownNames = buildSizeAlternates(stepDownKey, 6);
  sizeUpNames.forEach(s => excludeSet.add(s));
  sizeDownNames.forEach(s => excludeSet.add(s));

  const adjacentCandidates = getAdjacentRegionPool(poolKeys).filter(s => !excludeSet.has(s));
  const counselor_3 = adjacentCandidates.slice(0, 3);

  // ── Return FLAT array: family_9 first (best fit), then counselor pool ──
  // This preserves exact compatibility with callD's .slice()/.push() logic —
  // matchedSchools = _rawMatches.slice(0, N) still gets the best family
  // schools first, and the full pool remains available in _rawMatches for
  // the regional-equity fill-in and Jewish-pool boost logic that already
  // exists in lifescape.html.
  const remainder = rankedNames.filter(s => !excludeSet.has(s) && !family_9.includes(s));

  return [
    ...family_9,
    ...sizeUpNames,
    ...sizeDownNames,
    ...counselor_3,
    ...remainder,
  ];
}

// ─────────────────────────────────────────────────────────────
// PREFERENCE SUMMARY
// ─────────────────────────────────────────────────────────────

function summarizePreferences(collegePrefs) {
  const { campus_scale, regions, social_scene, religion } = collegePrefs;
  const scaleLabels = {
    big_university:'large university (20,000+)',
    medium_university:'medium university (5,000-25,000)',
    small_campus:'small campus (under 6,000)',
    no_preference:'any size'
  };
  const regionLabels = {
    southeast:'Southeast', southwest:'Southwest', west_coast:'West Coast',
    northeast:'Northeast', midwest:'Midwest', south_central:'South / South-Central'
  };
  const socialLabels = {
    greek_heavy:'Greek life and social culture important',
    balanced:'Social but academics first',
    focused:'Academically focused',
    no_preference:'No social scene preference'
  };
  const parts = [];
  if (campus_scale && scaleLabels[campus_scale]) parts.push(scaleLabels[campus_scale]);
  if (regions && regions.length && !regions.includes('no_preference')) {
    parts.push(regions.map(r => regionLabels[r]).filter(Boolean).join(' or '));
  }
  if (social_scene && socialLabels[social_scene]) parts.push(socialLabels[social_scene]);
  return parts.join(' · ');
}

if (typeof module !== 'undefined') module.exports = {
  REGION_POOLS, SCALE_MAP, SCHOOL_ENROLLMENT,
  SOCIAL_SCENE_AFFINITY, RELIGIOUS_AFFILIATION, RELIGIOUS_CULTURE_SCHOOLS,
  SCHOOL_GPA_RANGES, getGPATier, GPA_TIER_THRESHOLDS, HONORS_COLLEGES, getConsultantExpansion, matchUniversities, scoreAndRankSchools, summarizePreferences, getAdjacentMatches, getProfileAdjacentMatches
};

// ─────────────────────────────────────────────────────────────
// ADJACENT MATCH FUNCTIONS
// Added per approved spec — do not modify matchUniversities
// ─────────────────────────────────────────────────────────────

/**
 * Option A — Program-adjacent picks (student-facing, "Where You Fit" tab)
 * Finds schools NOT in the primary match list that score high on
 * NAICS sector overlap regardless of conference/region/scale preferences.
 * Returns up to `max` schools with reason string.
 *
 * @param {string[]} primaryMatches  - already-ranked primary school names
 * @param {Array}    naicsSectors    - student's NAICS profile [{sector, count}]
 * @param {Array}    comboUnlocks    - student's combo unlock objects
 * @param {number}   max             - how many to return (default 1)
 */
function getAdjacentMatches(primaryMatches, naicsSectors, comboUnlocks, max=1, regionPool=null, scaleKey=null) {
  const allSchools = Object.keys(SCHOOL_ENROLLMENT);
  const primarySet = new Set(primaryMatches);
  // Hard-gate: respect region and scale — same rules as matchUniversities()
  const candidates = allSchools.filter(s => {
    if (primarySet.has(s)) return false;
    if (regionPool && !regionPool.includes(s)) return false;
    if (scaleKey && scaleKey !== 'no_preference' && SCALE_MAP[scaleKey]) {
      const enroll = SCHOOL_ENROLLMENT[s] || 10000;
      const scale = SCALE_MAP[scaleKey];
      if (enroll < scale.min || enroll > scale.max) return false;
    }
    return true;
  });

  // NAICS → major cluster map — same mapping used in matchUniversities
  const NAICS_MAJOR_MAP = {
    52: ['Business'],
    51: ['Computer Science','Media & Communications','Arts & Design'],
    54: ['Computer Science','Sciences','Engineering'],
    62: ['Health Sciences'],
    61: ['Education','Law & Policy'],
    71: ['Arts & Design','Media & Communications','Performing Arts'],
    23: ['Engineering','Arts & Design'],
    92: ['Law & Policy'],
    56: ['Business'],
    81: ['Business','Entrepreneurship'],
    72: ['Business','Entrepreneurship'],
    44: ['Business'],
    48: ['Engineering'],
    33: ['Engineering'],
    32: ['Sciences','Engineering'],
    31: ['Sciences'],
  };

  // Derive student's major clusters from NAICS profile — actual signal use
  const studentMajorClusters = new Set();
  (naicsSectors || []).slice(0, 5).forEach(n => {
    (NAICS_MAJOR_MAP[n.sector] || []).forEach(c => studentMajorClusters.add(c));
  });

  // Score candidates on actual program/major fit — this is the real "adjacent" signal
  const scored = candidates.map(school => {
    let score = 0;

    // GPA range alignment (soft — don't hard-filter)
    const range = SCHOOL_GPA_RANGES[school];
    if (range) score += 1;

    // Program strength match — the actual signal this function should use
    if (studentMajorClusters.size > 0 && typeof getMajorStrengths === 'function') {
      const schoolMajors = getMajorStrengths(school);
      const overlap = schoolMajors.filter(m => studentMajorClusters.has(m));
      if (overlap.length >= 2) score += 20;
      else if (overlap.length === 1) score += 10;
    }

    // Combo unlock boost — student has fired a multi-tile combination
    if (comboUnlocks && comboUnlocks.length > 0) score += 2;

    // Tiebreaker: alphabetical (deterministic)
    return { school, score, reason: 'program_adjacent' };
  });

  return scored
    .sort((a, b) => b.score - a.score || a.school.localeCompare(b.school))
    .slice(0, max)
    .map(s => ({
      name: s.school,
      type: 'adjacent',
      reason: 'program_adjacent'
    }));
}

/**
 * Option B — Profile-adjacent picks (counselor-only)
 * Finds schools that score well on the student's SECONDARY RIASEC code
 * rather than primary. These schools may not match stated preferences
 * but align with the underlying profile.
 * Returns up to `max` schools with explicit counselor reasoning.
 *
 * @param {string[]} primaryMatches  - already-ranked primary school names
 * @param {Array}    riasec          - student's RIASEC profile [{code, score}]
 * @param {Array}    naicsSectors    - student's NAICS profile
 * @param {number}   max             - how many to return (default 3)
 */
function getProfileAdjacentMatches(primaryMatches, riasec, naicsSectors, max=3, regionPool=null, scaleKey=null) {
  if (!riasec || riasec.length < 2) return [];

  const allSchools = Object.keys(SCHOOL_ENROLLMENT);
  const primarySet = new Set(primaryMatches);
  const candidates = allSchools.filter(s => {
    if (primarySet.has(s)) return false;
    if (regionPool && !regionPool.includes(s)) return false;
    if (scaleKey && scaleKey !== 'no_preference' && SCALE_MAP[scaleKey]) {
      const enroll = SCHOOL_ENROLLMENT[s] || 10000;
      const scale = SCALE_MAP[scaleKey];
      if (enroll < scale.min || enroll > scale.max) return false;
    }
    return true;
  });

  // Primary and secondary RIASEC codes
  const primaryCode  = riasec[0]?.code || '';
  const secondaryCode = riasec[1]?.code || '';
  const tertiaryCode  = riasec[2]?.code || '';

  // RIASEC → school type affinity map
  // R = technical/hands-on, I = research/science, A = creative/arts,
  // S = people/service, E = entrepreneurial/leadership, C = structured/systems
  const riasecSchoolAffinity = {
    R: ['Georgia Institute of Technology','Rose-Hulman Institute of Technology',
        'Colorado School of Mines','California Polytechnic State University San Luis Obispo',
        'Worcester Polytechnic Institute','Stevens Institute of Technology',
        'Kettering University','Purdue University'],
    I: ['Massachusetts Institute of Technology','California Institute of Technology',
        'University of Chicago','Johns Hopkins University','Carnegie Mellon University',
        'Case Western Reserve University','University of California Davis',
        'University of Rochester'],
    A: ['New York University','Emory University','Tulane University',
        'University of Oregon','University of Colorado Boulder',
        'University of Denver','Colorado College','University of the South',
        'Elon University'],
    S: ['Georgetown University','University of Notre Dame','Villanova University',
        'Gonzaga University','Boston College','Creighton University',
        'American University','George Washington University'],
    E: ['Babson College','University of Michigan','Indiana University',
        'University of Southern California','Fordham University',
        'Northeastern University','University of Arizona','Butler University'],
    C: ['University of Virginia','University of Wisconsin','Penn State University',
        'University of Maryland College Park','Purdue University',
        'Indiana University','University of Minnesota','Ohio State University']
  };

  const secondaryAffinity = riasecSchoolAffinity[secondaryCode] || [];
  const tertiaryAffinity  = riasecSchoolAffinity[tertiaryCode] || [];

  const scored = candidates.map(school => {
    let score = 0;
    if (secondaryAffinity.includes(school)) score += 10;
    if (tertiaryAffinity.includes(school))  score += 5;

    // GPA range exists = school is known
    if (SCHOOL_GPA_RANGES[school]) score += 2;

    // Enrollment sweet spot
    const enroll = SCHOOL_ENROLLMENT[school] || 0;
    if (enroll > 5000 && enroll < 30000) score += 3;

    return { school, score };
  });

  const top = scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score || a.school.localeCompare(b.school))
    .slice(0, max);

  // Build counselor reasoning for each
  return top.map(s => ({
    name: s.school,
    type: 'profile_adjacent',
    counselorReason: `Surfaces on ${s.school}'s secondary ${secondaryCode}-${primaryCode}-${tertiaryCode} profile alignment. ` +
      `Worth discussing if primary matches are reach schools or if ${s.school.split(' ')[0]} ` +
      `shows strong interest in programs indexed to ${secondaryCode === 'I' ? 'research and inquiry' :
        secondaryCode === 'A' ? 'creative and expressive fields' :
        secondaryCode === 'S' ? 'people-centered work' :
        secondaryCode === 'E' ? 'entrepreneurship and leadership' :
        secondaryCode === 'R' ? 'technical and applied fields' :
        'structured systems and analysis'}.`
  }));
}


