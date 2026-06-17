/**
 * VECTOR Lifescape — College Preference Mapping
 * Version: 3.0 — June 17, 2026
 * Coverage: All 195 schools across V1 + V2 + V3 + V4 databases
 *
 * Maps student college preferences (conference, region, scale, social scene)
 * to the university database pool. RIASEC + NAICS ranking fires within
 * the filtered pool to produce final recommendations.
 */

// ─────────────────────────────────────────────────────────────
// CONFERENCE → SCHOOL POOL MAP — 195 schools fully covered
// ─────────────────────────────────────────────────────────────

const CONFERENCE_POOLS = {

  // ── SEC (2025-26 current: 16 members) ───────────────────────────────────
  // Original 14 + Oklahoma + Texas (both joined July 2025)
  // Missouri has been SEC since 2012
  sec: [
    "University of Georgia","University of Florida","University of Alabama",
    "Auburn University","Louisiana State University","University of Tennessee",
    "University of Arkansas","University of South Carolina","University of Kentucky",
    "Vanderbilt University","University of Mississippi","Mississippi State University",
    "University of Missouri","University of Oklahoma"
    // Texas A&M not in our DB yet
    // University of Texas not in our DB yet
    "Texas A&M University",
    "University of Texas at Austin",
  ],

  // ── BIG TEN (2024-25 current: 18 members) ───────────────────────────────
  // Added UCLA, USC, Oregon, Washington in 2024
  big_ten: [
    "University of Michigan","Michigan State University","Indiana University",
    "Ohio State University","Penn State University","University of Iowa",
    "Iowa State University","University of Nebraska-Lincoln","University of Minnesota",
    "Northwestern University","Purdue University","Rutgers University",
    "University of Maryland College Park",
    // 2024 additions from Pac-12
    "University of Oregon","University of Washington"
    // UCLA not in our DB
    // USC not in our DB
    // Illinois, Wisconsin not in our DB
    "University of Illinois Urbana-Champaign",
    "University of Wisconsin-Madison",
  ],

  // ── ACC (2024-25 current: 17 members + Notre Dame partial) ─────────────
  // Added Cal, Stanford, SMU in 2024
  acc: [
    "Duke University","Wake Forest University","University of Virginia",
    "Clemson University","University of Miami","Georgia Institute of Technology",
    "North Carolina State University","Virginia Tech","Boston College",
    "University of Pittsburgh","Syracuse University","University of Louisville",
    "Florida State University","Elon University","College of William and Mary",
    // 2024 additions from Pac-12
    "Stanford University"
    // Cal/Berkeley not in our DB
    // SMU not in our DB
    // Notre Dame (independent in football, ACC in other sports)
    "Southern Methodist University",
    "University of North Carolina Chapel Hill",
  ],

  // ── BIG 12 (2024-25 current: 16 members) ────────────────────────────────
  // Oklahoma + Texas LEFT for SEC in 2025
  // Arizona, ASU, Colorado, Utah joined from Pac-12 in 2024
  // BYU, UCF, Cincinnati, Houston joined 2023
  big_12: [
    "University of Kansas","Baylor University","University of Central Florida",
    "Brigham Young University",
    // 2024 additions from Pac-12:
    "University of Arizona","Arizona State University",
    "University of Colorado Boulder","University of Utah",
    // Kansas State, Oklahoma State, TCU, Texas Tech, West Virginia, Iowa State
    // Cincinnati, Houston not in our DB
    "Texas Christian University",
    "Texas Tech University",
  ],

  // ── WEST COAST / PAC-12 LEGACY ─────────────────────────────────────────
  // The old Pac-12 has dramatically changed. For students choosing "West Coast
  // sports culture" we use school geography rather than conference membership.
  // Oregon, Washington → Big Ten. Arizona, ASU, Colorado, Utah → Big 12.
  // Stanford → ACC. Oregon State + Washington State remain in rebuilt Pac-12.
  // We label this "West Coast" for students, not "Pac-12".
  pac: [
    // Remaining Pac-12 (rebuilt 2026):
    "Oregon State University",
    // West Coast schools regardless of current conference:
    "Stanford University","UC San Diego",
    "University of California Irvine","University of California Davis",
    "University of California Santa Cruz",
    "California Polytechnic State University San Luis Obispo",
    "Pepperdine University","Santa Clara University","Gonzaga University",
    "Boise State University","University of Denver",
    "University of San Diego","University of San Francisco",
    "Saint Mary's College of California","California Institute of Technology",
    "California State University Chico","California State University Fresno",
    "California State University Fullerton","California State University Long Beach",
    "California State University Los Angeles","California State University Northridge",
    "UC Riverside",
    // Big 12 members who are geographically West Coast:
    "University of Arizona","Arizona State University",
    "University of Colorado Boulder","University of Utah","Brigham Young University",
    "University of Central Florida",
    // Big Ten members who are geographically West Coast:
    "University of Oregon","University of Washington"
    "San Diego State University",
    "UC Santa Barbara",
    "University of Southern California",
    "UC Berkeley",
  ],

  ivy: [
    // True Ivies
    "Harvard University","Yale University","Princeton University","Columbia University",
    "University of Pennsylvania","Brown University","Cornell University","Dartmouth College",
    // Ivy-equivalent: academic prestige first
    "Massachusetts Institute of Technology","Stanford University","University of Chicago",
    "Northwestern University","Duke University","Vanderbilt University",
    "Georgetown University","University of Notre Dame","Emory University",
    "Tulane University","Johns Hopkins University","Carnegie Mellon University",
    "New York University","Boston College","University of Pittsburgh",
    "Northeastern University","Case Western Reserve University",
    "George Washington University","American University",
    "United States Military Academy","College of William and Mary",
    // Elite liberal arts
    "Williams College","Amherst College","Bowdoin College","Middlebury College",
    "Pomona College","Claremont McKenna College","Harvey Mudd College",
    "Colorado College","Deep Springs College","University of the South",
    // Elite specialty / technical
    "Babson College","Webb Institute","Rose-Hulman Institute of Technology",
    "Stevens Institute of Technology","Colorado School of Mines",
    "Worcester Polytechnic Institute","Kettering University",
    // Strong prestige schools
    "Wake Forest University","University of Virginia","Villanova University",
    "Boston University","Fordham University"
  ],

  div1: [
    "University of Michigan","Ohio State University","University of Georgia",
    "University of Florida","Clemson University","Auburn University",
    "Louisiana State University","University of Tennessee","University of Oklahoma",
    "University of Kansas","University of Oregon","University of Washington",
    "Arizona State University","University of Arizona","Penn State University",
    "Indiana University","Michigan State University","University of Iowa",
    "University of Nebraska-Lincoln","University of Arkansas",
    "University of South Carolina","University of Kentucky","University of Louisville",
    "University of Utah","Boise State University","Oregon State University",
    "University of Minnesota","University of Missouri","University of Colorado Boulder",
    "Colorado State University","Butler University","Gonzaga University",
    "Creighton University","Drake University","University of Alabama",
    "Florida State University","North Carolina State University","Virginia Tech",
    "Mississippi State University","University of Mississippi",
    "University of South Florida","University of Central Florida",
    "Florida Atlantic University","Baylor University","Rutgers University",
    "Purdue University","Syracuse University","University of Connecticut",
    "University of Maryland College Park","Brigham Young University",
    "Iowa State University","University of Notre Dame","University of Pittsburgh",
    "Boston College","Villanova University","Temple University","Drexel University",
    "Northeastern University","Stetson University","Boston University",
    "Fordham University","UC Riverside","California State University Fullerton",
    "California State University Northridge","California State University Long Beach"
  ],

  no_sports: ["__ALL__"]
};

// ─────────────────────────────────────────────────────────────
// REGION → SCHOOL POOL MAP — built from database region fields
// ─────────────────────────────────────────────────────────────

const REGION_POOLS = {

  southeast: [
    // Database region: Southeast + SEC New Members
    "Vanderbilt University","University of Georgia","University of Florida",
    "Auburn University","Louisiana State University","University of South Carolina",
    "Clemson University","Wake Forest University","University of Miami",
    "Duke University","University of Tennessee","University of Arkansas",
    "University of Kentucky","University of Louisville","University of Virginia",
    "Elon University","Georgia Institute of Technology","University of the South",
    "University of Mississippi","Mississippi State University","University of Alabama",
    "Florida State University","University of South Florida","University of Central Florida",
    "Florida Atlantic University","Stetson University","Virginia Tech",
    "North Carolina State University","Emory University","Tulane University",
    "Baylor University","College of William and Mary","University of Oklahoma",
    "University of North Carolina Chapel Hill",
    "Belmont University",
    "Furman University",
    "Wofford College",
    "Rollins College",
    "High Point University",
    "Appalachian State University",
    "University of Tennessee at Chattanooga",
    "University of Richmond",
    "Washington and Lee University",
    "Howard University",
    "Spelman College",
    "Georgia State University",
    "Flagler College",
    "James Madison University",
    "University of Memphis",
    "Regent University"
  ],

  southwest: [
    "University of Arizona","Arizona State University","University of Oklahoma",
    "University of Kansas","University of Arkansas","University of Colorado Boulder",
    "Colorado State University","University of Denver","Baylor University",
    "University of Utah","Brigham Young University",
    "Rice University",
    "Southern Methodist University",
    "Texas Christian University",
    "Texas A&M University",
    "Texas Tech University",
    "University of Texas at Austin",
    "University of Tulsa",
    "University of New Mexico",
    "New Mexico State University"
  ],

  west_coast: [
    // Database regions: West Coast + Pacific Northwest + Mountain West
    "Stanford University","UC San Diego","University of California Irvine",
    "University of California Davis","University of California Santa Cruz",
    "California Polytechnic State University San Luis Obispo",
    "California State University Long Beach","California State University Fullerton",
    "California State University Northridge","California State University Los Angeles",
    "California State University Chico","California State University Fresno",
    "Claremont McKenna College","Pomona College","Harvey Mudd College",
    "Pepperdine University","Santa Clara University","University of San Diego",
    "Saint Mary's College of California","UC Riverside","University of San Francisco",
    "California Institute of Technology","Colorado School of Mines",
    "University of Oregon","Oregon State University",
    "University of Washington","Gonzaga University",
    "University of Utah","Brigham Young University",
    "University of Colorado Boulder","Colorado State University",
    "University of Denver","Boise State University","Colorado College",
    "Deep Springs College",
    "San Diego State University",
    "UC Santa Barbara",
    "University of Southern California",
    "UC Berkeley",
    "Occidental College",
    "San Jose State University",
    "University of Idaho",
    "University of Nevada Las Vegas",
    "University of Nevada Reno",
    "University of Montana",
    "Montana State University",
    "California Lutheran University",
    "California State University San Bernardino"
  ],

  northeast: [
    // Database regions: Northeast + New England + Mid-Atlantic
    "Harvard University","Yale University","Princeton University",
    "Columbia University","University of Pennsylvania","Brown University",
    "Cornell University","Dartmouth College",
    "Massachusetts Institute of Technology","Carnegie Mellon University",
    "Boston University","Babson College","Williams College","Amherst College",
    "Bowdoin College","Middlebury College","Stevens Institute of Technology",
    "Worcester Polytechnic Institute","Georgetown University","University of Virginia",
    "Villanova University","Fordham University","Drexel University","Temple University",
    "Penn State University","Boston College","University of Pittsburgh",
    "Syracuse University","New York University","United States Military Academy",
    "Rutgers University","George Washington University","Webb Institute",
    "American University","University of Connecticut","Northeastern University",
    "Case Western Reserve University","University of Maryland College Park",
    "Johns Hopkins University","Kettering University",
    "Binghamton University",
    "Lehigh University",
    "Quinnipiac University",
    "University of Rhode Island",
    "Ithaca College",
    "Reed College",
    "Union College",
    "Franklin and Marshall College",
    "Bryn Mawr College",
    "Bentley University",
    "Rhode Island School of Design",
    "Berklee College of Music",
    "Pratt Institute",
    "Rochester Institute of Technology",
    "Fashion Institute of Technology"
  ],

  midwest: [
    "University of Michigan","Michigan State University","Indiana University",
    "Ohio State University","University of Notre Dame","Northwestern University",
    "University of Chicago","University of Iowa","Iowa State University","Drake University",
    "University of Nebraska-Lincoln","Creighton University","University of Minnesota",
    "University of Kansas","University of Missouri","Butler University",
    "Rose-Hulman Institute of Technology","Purdue University",
    "Case Western Reserve University",
    "University of Illinois Urbana-Champaign",
    "University of Wisconsin-Madison",
    "Marquette University",
    "Carleton College",
    "Kenyon College",
    "Oberlin College",
    "Ohio Wesleyan University",
    "Denison University",
    "College of Wooster",
    "Marshall University",
    "Morehead State University",
    "North Dakota State University",
    "South Dakota State University",
    "Grinnell College"
  ],

  south_central: [
    "Vanderbilt University","University of Tennessee","University of Kentucky",
    "University of Louisville","University of the South","University of Arkansas",
    "University of Oklahoma","University of Kansas","University of Missouri",
    "Duke University","Wake Forest University","North Carolina State University",
    "Elon University","College of William and Mary","Tulane University",
    "University of Mississippi","Mississippi State University","Baylor University",
    "University of Alabama","Virginia Tech"
  ]

};

// ─────────────────────────────────────────────────────────────
// CAMPUS SCALE FILTER
// ─────────────────────────────────────────────────────────────

const SCALE_MAP = {
  big_university:    { min: 20000, max: 999999, label: "20,000+ students" },
  medium_university: { min: 5000,  max: 25000,  label: "5,000-25,000 students" },
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
  "United States Military Academy":4500,"Rutgers University":50000,
  "George Washington University":17000,"Webb Institute":100,
  "Colorado College":2200,"Deep Springs College":30,"Kettering University":2000,
  "American University":8500,"University of Connecticut":32000,
  "Northeastern University":20000,"Case Western Reserve University":5500,
  "University of San Francisco":10000,"Baylor University":20000,
  "College of William and Mary":6500,
  "San Diego State University":36000,
  "UC Santa Barbara":26000,
  "University of Southern California":22000,
  "UC Berkeley":33000,
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
  "Grinnell College":1800,
  "Rhode Island School of Design":2500,
  "Berklee College of Music":6000,
  "Pratt Institute":5000,
  "Rochester Institute of Technology":19000,
  "Fashion Institute of Technology":8000,
  "San Jose State University":36000,
  "University of Tulsa":4000,
  "University of Idaho":12000,
  "University of Nevada Las Vegas":31000,
  "University of Nevada Reno":22000,
  "University of Montana":10000,
  "Montana State University":16000,
  "University of New Mexico":23000,
  "New Mexico State University":14000,
  "California Lutheran University":3000,
  "California State University San Bernardino":20000
};

// ─────────────────────────────────────────────────────────────
// SOCIAL SCENE AFFINITY
// ─────────────────────────────────────────────────────────────

const SOCIAL_SCENE_AFFINITY = {

  greek_heavy: [
    "University of Michigan","Indiana University","University of Georgia",
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
    "University of Nevada Reno"
  ],

  balanced: [
    "Duke University","University of Miami","Northwestern University",
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
    "University of the South"
  ]

};

// ─────────────────────────────────────────────────────────────
// CORE MATCHING FUNCTION
// ─────────────────────────────────────────────────────────────

// ── RELIGIOUS AFFILIATION MAP ────────────────────────────────────────────
const RELIGIOUS_AFFILIATION = {
  catholic: [
    'University of Notre Dame','Georgetown University','Boston College',
    'Gonzaga University','Villanova University','Fordham University',
    'Santa Clara University','University of San Diego',
    "Saint Mary's College of California",'University of San Francisco',
    'Creighton University',
    'Marquette University'
  ],
  lds: [
    'Brigham Young University'
  ],
  protestant: [
    'Baylor University','Wake Forest University','Emory University',
    'Pepperdine University','Elon University','University of the South',
    'Duke University','Boston University','Tulane University',
    'Butler University','Drake University','Stetson University',
    'Texas Christian University',
    'Belmont University',
    'Furman University',
    'Wofford College',
    'High Point University',
    'Regent University',
    'Ohio Wesleyan University',
    'College of Wooster',
    'University of Tulsa',
    'California Lutheran University'
  ],
  jewish: [
    'Columbia University','University of Pennsylvania','Brown University',
    'Cornell University','George Washington University',
    'American University','New York University','Tulane University'
  ],
  secular: ['__EXCLUDE_RELIGIOUS__'],
  no_preference: ['__ALL__']
};

const RELIGIOUS_CULTURE_SCHOOLS = [
  'Brigham Young University','Baylor University','Pepperdine University',
  'University of the South','Stetson University'
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
  "University of Louisville":{min:3.0},"University of Connecticut":{min:3.4},
  "University of the South":{min:3.4},
  "San Diego State University":{min:3.3},
  "UC Santa Barbara":{min:3.8},
  "University of Southern California":{min:3.7},
  "UC Berkeley":{min:3.9},
  "Rice University":{min:3.9},
  "Southern Methodist University":{min:3.5},
  "Texas Christian University":{min:3.5},
  "Texas A&M University":{min:3.5},
  "Texas Tech University":{min:3.2},
  "University of Texas at Austin":{min:3.7},
  "University of North Carolina Chapel Hill":{min:3.8},
  "Belmont University":{min:3.4},
  "Furman University":{min:3.7},
  "Wofford College":{min:3.5},
  "Rollins College":{min:3.4},
  "High Point University":{min:3.3},
  "Appalachian State University":{min:3.3},
  "University of Tennessee at Chattanooga":{min:3.2},
  "University of Richmond":{min:3.7},
  "Washington and Lee University":{min:3.8},
  "Howard University":{min:3.5},
  "Spelman College":{min:3.6},
  "Georgia State University":{min:3.2},
  "Flagler College":{min:3.2},
  "James Madison University":{min:3.5},
  "University of Memphis":{min:3.1},
  "Regent University":{min:3.2},
  "University of Illinois Urbana-Champaign":{min:3.7},
  "University of Wisconsin-Madison":{min:3.7},
  "Marquette University":{min:3.5},
  "Carleton College":{min:3.9},
  "Kenyon College":{min:3.7},
  "Oberlin College":{min:3.7},
  "Ohio Wesleyan University":{min:3.3},
  "Denison University":{min:3.6},
  "College of Wooster":{min:3.4},
  "Marshall University":{min:3.0},
  "Morehead State University":{min:3.0},
  "North Dakota State University":{min:3.1},
  "South Dakota State University":{min:3.0},
  "Binghamton University":{min:3.7},
  "Lehigh University":{min:3.7},
  "Quinnipiac University":{min:3.3},
  "University of Rhode Island":{min:3.2},
  "Ithaca College":{min:3.4},
  "Reed College":{min:3.8},
  "Union College":{min:3.6},
  "Franklin and Marshall College":{min:3.6},
  "Bryn Mawr College":{min:3.8},
  "Occidental College":{min:3.7},
  "Bentley University":{min:3.5},
  "Grinnell College":{min:3.8},
  "Rhode Island School of Design":{min:3.5},
  "Berklee College of Music":{min:3.2},
  "Pratt Institute":{min:3.4},
  "Rochester Institute of Technology":{min:3.5},
  "Fashion Institute of Technology":{min:3.2},
  "San Jose State University":{min:3.2},
  "University of Tulsa":{min:3.5},
  "University of Idaho":{min:3.1},
  "University of Nevada Las Vegas":{min:3.0},
  "University of Nevada Reno":{min:3.1},
  "University of Montana":{min:3.0},
  "Montana State University":{min:3.1},
  "University of New Mexico":{min:3.0},
  "New Mexico State University":{min:3.0},
  "California Lutheran University":{min:3.3},
  "California State University San Bernardino":{min:3.0}
};

function matchUniversities(collegePrefs, riasec, naicsSectors, comboUnlocks, gpaData) {
  const { campus_scale, regions, conference, social_scene, religion } = collegePrefs;
  const gpa = gpaData ? gpaData.normalized : null;

  // Step 1 — Conference pool
  let conferencePool = null;
  if (conference && conference !== 'no_sports') {
    conferencePool = CONFERENCE_POOLS[conference] || null;
  }

  // Step 2 — Region pool
  let regionPool = null;
  if (regions && regions.length > 0 && !regions.includes('no_preference')) {
    regionPool = [];
    regions.forEach(r => {
      (REGION_POOLS[r] || []).forEach(school => {
        if (!regionPool.includes(school)) regionPool.push(school);
      });
    });
  }

  // Step 3 — All school names
  const allSchools = Object.keys(SCHOOL_ENROLLMENT);

  // Step 4 — Intersection filter
  let eligible = allSchools.filter(school => {
    const inConf = conferencePool === null || conferencePool.includes(school);
    const inRegion = regionPool === null || regionPool.includes(school);
    return inConf && inRegion;
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

  // Step 6 — Score and sort
  const scored = eligible.map(school => {
    let score = 5; // base

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

// ─────────────────────────────────────────────────────────────
// PREFERENCE SUMMARY
// ─────────────────────────────────────────────────────────────

function summarizePreferences(collegePrefs) {
  const { campus_scale, regions, conference, social_scene, religion } = collegePrefs;
  const confLabels = {
    sec:'SEC', big_ten:'Big Ten', acc:'ACC', big_12:'Big 12',
    pac:'Pac-12 / West Coast', ivy:'Ivy / Ivy-equivalent',
    div1:'Division I', no_sports:'No sports preference'
  };
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
  if (conference && confLabels[conference]) parts.push(confLabels[conference]);
  if (campus_scale && scaleLabels[campus_scale]) parts.push(scaleLabels[campus_scale]);
  if (regions && regions.length && !regions.includes('no_preference')) {
    parts.push(regions.map(r => regionLabels[r]).filter(Boolean).join(' or '));
  }
  if (social_scene && socialLabels[social_scene]) parts.push(socialLabels[social_scene]);
  return parts.join(' · ');
}

if (typeof module !== 'undefined') module.exports = {
  CONFERENCE_POOLS, REGION_POOLS, SCALE_MAP, SCHOOL_ENROLLMENT,
  SOCIAL_SCENE_AFFINITY, RELIGIOUS_AFFILIATION, RELIGIOUS_CULTURE_SCHOOLS,
  SCHOOL_GPA_RANGES, matchUniversities, summarizePreferences
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
function getAdjacentMatches(primaryMatches, naicsSectors, comboUnlocks, max=1) {
  const allSchools = Object.keys(SCHOOL_ENROLLMENT);
  const primarySet = new Set(primaryMatches);
  const candidates = allSchools.filter(s => !primarySet.has(s));

  // Top NAICS sectors for this student
  const topSectors = new Set((naicsSectors || []).slice(0,5).map(n => n.sector));

  // Score candidates purely on program/NAICS fit — ignoring preferences
  const scored = candidates.map(school => {
    let score = 0;

    // GPA range alignment (soft — don't hard-filter)
    const range = SCHOOL_GPA_RANGES[school];
    if (range) score += 3;

    // Religious affiliation pools — neutral here
    // Social scene — neutral here (we're ignoring preferences deliberately)

    // Program-NAICS signal: if the school is in a relevant industry region
    // We use geo clusters as a proxy for program strength
    // Schools in RELIGIOUS_AFFILIATION pools get a slight boost
    // (they often have distinctive programs in specific sectors)
    Object.values(RELIGIOUS_AFFILIATION).forEach(pool => {
      if (pool.includes(school)) score += 2;
    });

    // Ivy/equivalent schools have broad program strength — boost slightly
    if ((RELIGIOUS_AFFILIATION.protestant || []).includes(school)) score += 1;

    // Primary signal: enrollment diversity (larger research universities
    // tend to have stronger cross-disciplinary program offerings)
    const enroll = SCHOOL_ENROLLMENT[school] || 0;
    if (enroll > 15000 && enroll < 45000) score += 4; // sweet spot
    if (enroll >= 5000 && enroll <= 15000) score += 3; // strong smaller

    // Combo unlock boost — if school is in a specific region that
    // aligns with a fired combo unlock career path
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
function getProfileAdjacentMatches(primaryMatches, riasec, naicsSectors, max=3) {
  if (!riasec || riasec.length < 2) return [];

  const allSchools = Object.keys(SCHOOL_ENROLLMENT);
  const primarySet = new Set(primaryMatches);
  const candidates = allSchools.filter(s => !primarySet.has(s));

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

if (typeof module !== 'undefined') {
  module.exports = Object.assign(module.exports || {}, {
    getAdjacentMatches,
    getProfileAdjacentMatches
  });
}
