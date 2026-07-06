/**
 * VECTOR Lifescape — College Preference Mapping
 * Version: 3.0 — June 17, 2026
 * Coverage: All 207 schools across V1 + V2 + V3 + V4 databases
 *
 * Maps student college preferences (conference, region, scale, social scene)
 * to the university database pool. RIASEC + NAICS ranking fires within
 * the filtered pool to produce final recommendations.
 */

// ─────────────────────────────────────────────────────────────
// CONFERENCE → SCHOOL POOL MAP — 207 schools fully covered
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
    "University of Missouri","University of Oklahoma",
    "Texas A&M University",
    "University of Texas at Austin"
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
    "University of Oregon","University of Washington",
    "University of Illinois Urbana-Champaign",
    "University of Wisconsin-Madison","University of California Los Angeles",
    "University of Illinois Urbana-Champaign",
    "University of Wisconsin-Madison",
    "UCLA"
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
    "Stanford University",
    "Southern Methodist University",
    "University of North Carolina Chapel Hill",
    "SMU"
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
    // Cincinnati, Houston not in our DB,
    "Texas Christian University",
    "Texas Tech University",
    "Texas A&M University",
    "Texas Tech University",
    "TCU",
    "University of North Texas"
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
    "University of Utah","Brigham Young University",
    "University of Central Florida",
    // Big Ten members who are geographically West Coast:
    "University of Oregon","University of Washington",
    "San Diego State University",
    "UC Santa Barbara",
    "University of Southern California",
    "UC Berkeley","University of California Los Angeles",
    "UC Berkeley",
    "UC Santa Barbara",
    "USC",
    "San Diego State University",
    "San Jose State University",
    "San Francisco State University",
    "Eastern Washington University",
    "University of Hawaii at Manoa",
    "University of Alaska Fairbanks",
    "University of Nevada Las Vegas",
    "University of Nevada Reno",
    "University of Idaho",
    "Montana State University",
    "University of Montana",
    "University of Wyoming",
    "University of New Mexico",
    "New Mexico State University",
    "Utah Valley University"
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
    "Fordham University","UC Riverside","University of Delaware","California State University Fullerton",
    "California State University Northridge","California State University Long Beach",
    "University of Memphis",
    "East Carolina University",
    "Appalachian State University",
    "Marshall University",
    "Georgia State University",
    "Texas State University",
    "Sam Houston State University",
    "South Dakota State University",
    "North Dakota State University",
    "University of North Texas",
    "University of Tennessee at Chattanooga"
  ],


  // ── INDEPENDENT / NON-CONFERENCE / LIBERAL ARTS ─────────────────────────
  independent: [
    "UT Austin",
    "Rice University",
    "University of North Carolina Chapel Hill",
    "University of Richmond",
    "Lehigh University",
    "Quinnipiac University",
    "Marquette University",
    "Rollins College",
    "High Point University",
    "James Madison University",
    "Kennesaw State University",
    "University of Vermont",
    "University of Rhode Island",
    "Binghamton University",
    "Rochester Institute of Technology",
    "Belmont University",
    "Ithaca College",
    "Bentley University",
    "Furman University",
    "Flagler College",
    "Wofford College",
    "University of Tulsa",
    "University of Tennessee at Chattanooga",
    "Regent University",
    "College of the Ozarks",
    "Morehead State University",
    "California Lutheran University",
    "California State University San Bernardino",
    "Barnard College",
    "Hamilton College",
    "Vassar College",
    "Wesleyan University",
    "Carleton College",
    "Grinnell College",
    "Oberlin College",
    "Reed College",
    "Denison University",
    "Kenyon College",
    "Ohio Wesleyan University",
    "Dickinson College",
    "Gettysburg College",
    "Franklin and Marshall College",
    "Union College",
    "Washington and Lee University",
    "Bryn Mawr College",
    "Illinois Wesleyan University",
    "Occidental College",
    "St. John's College",
    "Providence College",
    "Berklee College of Music",
    "Fashion Institute of Technology",
    "Rhode Island School of Design",
    "Pratt Institute"
  ],

  // ── INDEPENDENT / NON-CONFERENCE / LIBERAL ARTS ─────────────────────────
  independent: [
    "UT Austin",
    "Rice University",
    "University of North Carolina Chapel Hill",
    "University of Richmond",
    "Lehigh University",
    "Quinnipiac University",
    "Marquette University",
    "Rollins College",
    "High Point University",
    "James Madison University",
    "Kennesaw State University",
    "University of Vermont",
    "University of Rhode Island",
    "Binghamton University",
    "Rochester Institute of Technology",
    "Belmont University",
    "Ithaca College",
    "Bentley University",
    "Furman University",
    "Flagler College",
    "Wofford College",
    "University of Tulsa",
    "University of Tennessee at Chattanooga",
    "Regent University",
    "College of the Ozarks",
    "Morehead State University",
    "California Lutheran University",
    "California State University San Bernardino",
    "Barnard College",
    "Hamilton College",
    "Vassar College",
    "Wesleyan University",
    "Carleton College",
    "Grinnell College",
    "Oberlin College",
    "Reed College",
    "Denison University",
    "Kenyon College",
    "Ohio Wesleyan University",
    "Dickinson College",
    "Gettysburg College",
    "Franklin and Marshall College",
    "Union College",
    "Washington and Lee University",
    "Bryn Mawr College",
    "Illinois Wesleyan University",
    "Occidental College",
    "St. John's College",
    "Providence College",
    "Berklee College of Music",
    "Fashion Institute of Technology",
    "Rhode Island School of Design",
    "Pratt Institute"
  ],
  no_sports: ["__ALL__"],
  // ── MARITIME ACADEMIES ──────────────────────────────────────────────────
  maritime: [
    "United States Merchant Marine Academy",
    "Maine Maritime Academy",
    "Massachusetts Maritime Academy",
    "Texas A&M University at Galveston",
    "California State University Maritime Academy"
  ],

  // ── HISTORICALLY BLACK COLLEGES & UNIVERSITIES ──────────────────────────
  hbcu: [
    "Howard University",
    "Spelman College",
    "Morehouse College",
    "Hampton University",
    "Florida A&M University",
    "North Carolina A&T State University",
    "Xavier University of Louisiana",
    "Tuskegee University",
    "Lincoln University",
    "Morgan State University"
  ],

  // ── MILITARY COLLEGES & SERVICE ACADEMIES ───────────────────────────────
  military: [
    "United States Military Academy",
    "United States Naval Academy",
    "United States Air Force Academy",
    "United States Coast Guard Academy",
    "The Citadel",
    "Virginia Military Institute",
    "Norwich University"
  ]
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
    "Regent University",
    "Davidson College",
    "East Carolina University",
    "Appalachian State University",
    "Marshall University",
    "Georgia State University",
    "University of Tennessee at Chattanooga",
    "Morehead State University",
    "Belmont University",
    "University of Memphis"
  ],

  southwest: [
    "University of Arizona","Arizona State University","University of Oklahoma",
    "University of Kansas","University of Arkansas",
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
    "New Mexico State University",
    "Texas State University",
    "Sam Houston State University",
    "University of North Texas",
    "Texas A&M University at Galveston"
  ],

  rocky_mountains: [
    "Colorado School of Mines",
    "University of Utah",
    "Brigham Young University",
    "University of Colorado Boulder",
    "Colorado State University",
    "University of Denver",
    "Boise State University",
    "Colorado College",
    "University of Idaho",
    "University of Nevada Las Vegas",
    "University of Nevada Reno",
    "University of Montana",
    "Montana State University"
  ],

  pacific_nw: [
    "University of Oregon",
    "Oregon State University",
    "University of Washington",
    "Gonzaga University",
    "Reed College",
    "Eastern Washington University",
    "University of Alaska Fairbanks"
  ],

  california: [
    "Stanford University",
    "UC San Diego",
    "University of California Irvine",
    "University of California Davis",
    "University of California Santa Cruz",
    "California Polytechnic State University San Luis Obispo",
    "California State University Long Beach",
    "California State University Fullerton",
    "California State University Northridge",
    "California State University Los Angeles",
    "California State University Chico",
    "California State University Fresno",
    "Claremont McKenna College",
    "Pomona College",
    "Harvey Mudd College",
    "Pepperdine University",
    "Santa Clara University",
    "University of San Diego",
    "Saint Mary's College of California",
    "UC Riverside",
    "University of San Francisco",
    "California Institute of Technology",
    "Deep Springs College",
    "San Diego State University",
    "UC Santa Barbara",
    "University of Southern California",
    "UC Berkeley",
    "University of California Los Angeles",
    "Occidental College",
    "San Jose State University",
    "California Lutheran University",
    "California State University San Bernardino",
    "University of Hawaii at Manoa",
    "San Francisco State University",
    "California State University Maritime Academy"
  ],


  new_england: [
    "Harvard University",
    "Yale University",
    "Brown University",
    "Dartmouth College",
    "Massachusetts Institute of Technology",
    "Boston University",
    "Babson College",
    "Williams College",
    "Amherst College",
    "Bowdoin College",
    "Middlebury College",
    "Worcester Polytechnic Institute",
    "Boston College",
    "University of Connecticut",
    "University of Massachusetts Amherst",
    "Northeastern University",
    "Quinnipiac University",
    "University of Rhode Island",
    "Bentley University",
    "Rhode Island School of Design",
    "Berklee College of Music",
    "Colby College",
    "Bates College",
    "Providence College",
    "University of Vermont"
  ],

  northeast: [
    "Princeton University",
    "Columbia University",
    "University of Pennsylvania",
    "Cornell University",
    "Carnegie Mellon University",
    "Stevens Institute of Technology",
    "Villanova University",
    "Fordham University",
    "Drexel University",
    "Temple University",
    "Penn State University",
    "University of Pittsburgh",
    "Syracuse University",
    "New York University",
    "United States Military Academy",
    "Rutgers University",
    "Webb Institute",
    "Binghamton University",
    "Lehigh University",
    "Ithaca College",
    "Union College",
    "Franklin and Marshall College",
    "Bryn Mawr College",
    "Pratt Institute",
    "Rochester Institute of Technology",
    "Fashion Institute of Technology",
    "Hamilton College",
    "Swarthmore College",
    "Haverford College",
    "Vassar College",
    "Colgate University",
    "Bucknell University"
  ],

  mid_atlantic: [
    "Georgetown University",
    "University of Virginia",
    "George Washington University",
    "American University",
    "University of Delaware",
    "University of Maryland College Park",
    "Johns Hopkins University"
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
    "Grinnell College",
    "Macalester College",
    "South Dakota State University",
    "North Dakota State University",
    "University of Wyoming",
    "Montana State University",
    "University of Montana",
    "University of Idaho"
  ],

  south_central: [
    "Vanderbilt University","University of Tennessee","University of Kentucky",
    "University of Louisville","University of the South","University of Arkansas",
    "University of Oklahoma","University of Kansas","University of Missouri",
    "Duke University","Wake Forest University","North Carolina State University",
    "Elon University","College of William and Mary","Tulane University",
    "University of Mississippi","Mississippi State University","Baylor University",
    "University of Alabama","Virginia Tech",
    "University of New Mexico",
    "New Mexico State University",
    "University of Nevada Las Vegas",
    "University of Nevada Reno"
  ]

};

const SCHOOL_COMPETITIVENESS = {
  "Vanderbilt University":"Extremely Selective",
  "University of Michigan":"Highly Selective",
  "Indiana University":"Accessible",
  "University of Georgia":"Selective",
  "University of Florida":"Highly Selective",
  "University of Oklahoma":"Accessible",
  "Louisiana State University":"Moderately Selective",
  "Auburn University":"Selective",
  "University of South Carolina":"Moderately Selective",
  "Clemson University":"Selective",
  "Wake Forest University":"Highly Selective",
  "University of Miami":"Highly Selective",
  "University of Arizona":"Accessible",
  "Arizona State University":"Accessible",
  "University of Virginia":"Highly Selective",
  "Babson College":"Highly Selective",
  "Boston University":"Highly Selective",
  "Dartmouth College":"Extremely Selective",
  "University of Utah":"Accessible",
  "Georgetown University":"Highly Selective",
  "Duke University":"Extremely Selective",
  "University of Oregon":"Accessible",
  "Stanford University":"Extremely Selective",
  "Williams College":"Extremely Selective",
  "Amherst College":"Extremely Selective",
  "Bowdoin College":"Extremely Selective",
  "Middlebury College":"Highly Selective",
  "Pomona College":"Extremely Selective",
  "University of Chicago":"Extremely Selective",
  "Penn State University":"Moderately Selective",
  "Stevens Institute of Technology":"Selective",
  "UC San Diego":"Selective",
  "Massachusetts Institute of Technology":"Extremely Selective",
  "Georgia Institute of Technology":"Highly Selective",
  "Rose-Hulman Institute of Technology":"Accessible",
  "California Institute of Technology":"Extremely Selective",
  "Carnegie Mellon University":"Highly Selective",
  "Colorado School of Mines":"Moderately Selective",
  "Harvey Mudd College":"Highly Selective",
  "Worcester Polytechnic Institute":"Moderately Selective",
  "University of Washington":"Selective",
  "University of Pennsylvania":"Extremely Selective",
  "Princeton University":"Extremely Selective",
  "Brown University":"Extremely Selective",
  "Harvard University":"Extremely Selective",
  "Yale University":"Extremely Selective",
  "Cornell University":"Extremely Selective",
  "Columbia University":"Extremely Selective",
  "Gonzaga University":"Accessible",
  "Northwestern University":"Extremely Selective",
  "University of Denver":"Accessible",
  "Elon University":"Moderately Selective",
  "Fordham University":"Moderately Selective",
  "University of Kansas":"Accessible",
  "University of Missouri":"Accessible",
  "University of Arkansas":"Moderately Selective",
  "University of Tennessee":"Selective",
  "University of Colorado Boulder":"Accessible",
  "Colorado State University":"Accessible",
  "University of California Davis":"Selective",
  "Santa Clara University":"Selective",
  "Saint Mary's College of California":"Accessible",
  "University of Nebraska-Lincoln":"Accessible",
  "Michigan State University":"Accessible",
  "Creighton University":"Accessible",
  "University of Iowa":"Accessible",
  "Drake University":"Moderately Selective",
  "Iowa State University":"Accessible",
  "Ohio State University":"Moderately Selective",
  "University of Notre Dame":"Highly Selective",
  "Villanova University":"Selective",
  "Temple University":"Accessible",
  "Drexel University":"Accessible",
  "UC Riverside":"Accessible",
  "California State University Long Beach":"Selective",
  "California State University Fullerton":"Accessible",
  "University of California Irvine":"Selective",
  "California Polytechnic State University San Luis Obispo":"Selective",
  "California State University Chico":"Accessible",
  "California State University Fresno":"Accessible",
  "University of California Santa Cruz":"Moderately Selective",
  "California State University Northridge":"Accessible",
  "California State University Los Angeles":"Accessible",
  "Claremont McKenna College":"Extremely Selective",
  "Pepperdine University":"Moderately Selective",
  "University of San Diego":"Moderately Selective",
  "Oregon State University":"Accessible",
  "Boise State University":"Accessible",
  "Brigham Young University":"Accessible",
  "University of Kentucky":"Accessible",
  "University of Louisville":"Accessible",
  "University of Minnesota":"Accessible",
  "Butler University":"Accessible",
  "University of the South":"Moderately Selective",
  "University of Mississippi":"Accessible",
  "Mississippi State University":"Accessible",
  "University of Alabama":"Accessible",
  "Florida State University":"Highly Selective",
  "University of South Florida":"Selective",
  "University of Central Florida":"Selective",
  "Florida Atlantic University":"Moderately Selective",
  "Stetson University":"Moderately Selective",
  "Virginia Tech":"Moderately Selective",
  "Boston College":"Highly Selective",
  "University of Pittsburgh":"Moderately Selective",
  "North Carolina State University":"Selective",
  "University of Maryland College Park":"Selective",
  "Johns Hopkins University":"Extremely Selective",
  "Emory University":"Highly Selective",
  "Tulane University":"Highly Selective",
  "Purdue University":"Selective",
  "Syracuse University":"Selective",
  "New York University":"Extremely Selective",
  "United States Military Academy":"Highly Selective",
  "Rutgers University":"Moderately Selective",
  "University of Delaware":"Moderately Selective",
  "George Washington University":"Selective",
  "Webb Institute":"Highly Selective",
  "Colorado College":"Highly Selective",
  "Kettering University":"Accessible",
  "American University":"Moderately Selective",
  "University of Connecticut":"Moderately Selective",
  "University of Massachusetts Amherst":"Moderately Selective",
  "Northeastern University":"Extremely Selective",
  "Case Western Reserve University":"Selective",
  "University of San Francisco":"Moderately Selective",
  "Baylor University":"Moderately Selective",
  "College of William and Mary":"Selective",
  "San Diego State University":"Selective",
  "UC Santa Barbara":"Selective",
  "University of Southern California":"Extremely Selective",
  "UC Berkeley":"Highly Selective",
  "University of California Los Angeles":"Extremely Selective",
  "Rice University":"Extremely Selective",
  "Southern Methodist University":"Moderately Selective",
  "Texas Christian University":"Selective",
  "Texas A&M University":"Moderately Selective",
  "Texas Tech University":"Moderately Selective",
  "University of Texas at Austin":"Selective",
  "University of North Carolina Chapel Hill":"Highly Selective",
  "Belmont University":"Accessible",
  "Furman University":"Selective",
  "Wofford College":"Moderately Selective",
  "Rollins College":"Selective",
  "High Point University":"Accessible",
  "Appalachian State University":"Accessible",
  "University of Tennessee at Chattanooga":"Accessible",
  "University of Richmond":"Highly Selective",
  "Washington and Lee University":"Highly Selective",
  "Howard University":"Selective",
  "Spelman College":"Highly Selective",
  "Georgia State University":"Moderately Selective",
  "Flagler College":"Accessible",
  "James Madison University":"Moderately Selective",
  "University of Memphis":"Moderately Selective",
  "Regent University":"Selective",
  "Davidson College":"Highly Selective",
  "University of Illinois Urbana-Champaign":"Selective",
  "University of Wisconsin-Madison":"Selective",
  "Marquette University":"Accessible",
  "Carleton College":"Highly Selective",
  "Kenyon College":"Selective",
  "Oberlin College":"Selective",
  "Ohio Wesleyan University":"Moderately Selective",
  "Denison University":"Highly Selective",
  "College of Wooster":"Moderately Selective",
  "Marshall University":"Accessible",
  "Morehead State University":"Accessible",
  "North Dakota State University":"Accessible",
  "South Dakota State University":"Accessible",
  "Grinnell College":"Highly Selective",
  "Macalester College":"Selective",
  "Binghamton University":"Selective",
  "Lehigh University":"Selective",
  "Quinnipiac University":"Moderately Selective",
  "University of Rhode Island":"Moderately Selective",
  "Ithaca College":"Moderately Selective",
  "Reed College":"Highly Selective",
  "Union College":"Selective",
  "Franklin and Marshall College":"Selective",
  "Bryn Mawr College":"Selective",
  "Occidental College":"Selective",
  "Bentley University":"Selective",
  "Rhode Island School of Design":"Highly Selective",
  "Berklee College of Music":"Selective",
  "Pratt Institute":"Moderately Selective",
  "Rochester Institute of Technology":"Moderately Selective",
  "Fashion Institute of Technology":"Moderately Selective",
  "San Jose State University":"Accessible",
  "University of Tulsa":"Moderately Selective",
  "University of Idaho":"Accessible",
  "University of Nevada Las Vegas":"Accessible",
  "University of Nevada Reno":"Moderately Selective",
  "University of Montana":"Accessible",
  "Montana State University":"Accessible",
  "University of New Mexico":"Accessible",
  "New Mexico State University":"Accessible",
  "California Lutheran University":"Accessible",
  "California State University San Bernardino":"Accessible",
  "Hamilton College":"Highly Selective",
  "Swarthmore College":"Extremely Selective",
  "Haverford College":"Highly Selective",
  "Vassar College":"Highly Selective",
  "Colgate University":"Highly Selective",
  "Colby College":"Extremely Selective",
  "Bates College":"Highly Selective",
  "Bucknell University":"Selective",
  "Deep Springs College":"Extremely Selective", // ~10% acceptance, no Scorecard record
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
  "Deep Springs College":15,
  "Vanderbilt University":7208,
  "University of Michigan":34177,
  "Indiana University":37806,
  "University of Georgia":32137,
  "University of Florida":35629,
  "University of Oklahoma":22734,
  "Louisiana State University":30594,
  "Auburn University":26816,
  "University of South Carolina":29820,
  "Clemson University":23300,
  "Wake Forest University":5485,
  "University of Miami":12913,
  "University of Arizona":42537,
  "Arizona State University":64674,
  "University of Virginia":17597,
  "Babson College":2728,
  "Boston University":18248,
  "Dartmouth College":4541,
  "University of Utah":27264,
  "Georgetown University":7569,
  "Duke University":6442,
  "University of Oregon":20497,
  "Stanford University":7554,
  "Williams College":2076,
  "Amherst College":1911,
  "Bowdoin College":1873,
  "Middlebury College":2738,
  "Pomona College":1666,
  "University of Chicago":7569,
  "Penn State University":42284,
  "Stevens Institute of Technology":4222,
  "UC San Diego":34948,
  "Massachusetts Institute of Technology":4535,
  "Georgia Institute of Technology":18785,
  "Rose-Hulman Institute of Technology":2309,
  "California Institute of Technology":987,
  "Carnegie Mellon University":7304,
  "Colorado School of Mines":6155,
  "Harvey Mudd College":921,
  "Worcester Polytechnic Institute":5447,
  "University of Washington":31942,
  "University of Pennsylvania":10650,
  "Princeton University":5709,
  "Brown University":7226,
  "Harvard University":7601,
  "Yale University":6758,
  "Cornell University":15995,
  "Columbia University":8973,
  "Gonzaga University":5198,
  "Northwestern University":9201,
  "University of Denver":6025,
  "Elon University":6452,
  "Fordham University":10512,
  "University of Kansas":21217,
  "University of Missouri":23929,
  "University of Arkansas":28677,
  "University of Tennessee":30418,
  "University of Colorado Boulder":31939,
  "Colorado State University":25538,
  "University of California Davis":32253,
  "Santa Clara University":6552,
  "Saint Mary's College of California":1947,
  "University of Nebraska-Lincoln":19178,
  "Michigan State University":40922,
  "Creighton University":4348,
  "University of Iowa":22264,
  "Drake University":2543,
  "Iowa State University":25367,
  "Ohio State University":45638,
  "University of Notre Dame":8818,
  "Villanova University":6938,
  "Temple University":20970,
  "Drexel University":13233,
  "UC Riverside":22593,
  "California State University Long Beach":35924,
  "California State University Fullerton":38546,
  "University of California Irvine":30197,
  "California Polytechnic State University San Luis Obispo":21996,
  "California State University Chico":13631,
  "California State University Fresno":21605,
  "University of California Santa Cruz":17940,
  "California State University Northridge":32691,
  "California State University Los Angeles":19562,
  "Claremont McKenna College":1388,
  "Pepperdine University":3553,
  "University of San Diego":5671,
  "Oregon State University":30743,
  "Boise State University":17674,
  "Brigham Young University":44397,
  "University of Kentucky":24763,
  "University of Louisville":14727,
  "University of Minnesota":31855,
  "Butler University":4317,
  "University of the South":1607,
  "University of Mississippi":21473,
  "Mississippi State University":18397,
  "University of Alabama":33227,
  "Florida State University":32212,
  "University of South Florida":37207,
  "University of Central Florida":59146,
  "Florida Atlantic University":23757,
  "Stetson University":2297,
  "Virginia Tech":30923,
  "Boston College":10085,
  "University of Pittsburgh":20370,
  "North Carolina State University":27371,
  "University of Maryland College Park":30760,
  "Johns Hopkins University":5693,
  "Emory University":7298,
  "Tulane University":7767,
  "Purdue University":44503,
  "Syracuse University":15477,
  "New York University":28663,
  "United States Military Academy":4408,
  "Rutgers University":37751,
  "University of Delaware":19071,
  "George Washington University":11182,
  "Webb Institute":106,
  "Colorado College":2014,
  "Kettering University":1205,
  "American University":7266,
  "University of Connecticut":19835,
  "University of Massachusetts Amherst":23671,
  "Northeastern University":17326,
  "Case Western Reserve University":6437,
  "University of San Francisco":5287,
  "Baylor University":14785,
  "College of William and Mary":7055,
  "San Diego State University":35377,
  "UC Santa Barbara":23113,
  "University of Southern California":20443,
  "UC Berkeley":33068,
  "University of California Los Angeles":33475,
  "Rice University":4776,
  "Southern Methodist University":7277,
  "Texas Christian University":11026,
  "Texas A&M University":59615,
  "Texas Tech University":32394,
  "University of Texas at Austin":42855,
  "University of North Carolina Chapel Hill":20752,
  "Belmont University":7137,
  "Furman University":2379,
  "Wofford College":1816,
  "Rollins College":2631,
  "High Point University":5129,
  "Appalachian State University":19444,
  "University of Tennessee at Chattanooga":10074,
  "University of Richmond":2980,
  "Washington and Lee University":1881,
  "Howard University":10108,
  "Spelman College":3414,
  "Georgia State University":26623,
  "Flagler College":2391,
  "James Madison University":20888,
  "University of Memphis":12701,
  "Regent University":4729,
  "Davidson College":1867,
  "University of Illinois Urbana-Champaign":36258,
  "University of Wisconsin-Madison":36902,
  "Marquette University":7660,
  "Carleton College":2086,
  "Kenyon College":1732,
  "Oberlin College":2887,
  "Ohio Wesleyan University":1516,
  "Denison University":2380,
  "College of Wooster":1730,
  "Marshall University":7266,
  "Morehead State University":4578,
  "North Dakota State University":9471,
  "South Dakota State University":9198,
  "Grinnell College":1729,
  "Macalester College":2131,
  "Binghamton University":14655,
  "Lehigh University":5898,
  "Quinnipiac University":6531,
  "University of Rhode Island":13381,
  "Ithaca College":4242,
  "Reed College":1320,
  "Union College":2046,
  "Franklin and Marshall College":1799,
  "Bryn Mawr College":1359,
  "Occidental College":1877,
  "Bentley University":4474,
  "Rhode Island School of Design":2084,
  "Berklee College of Music":7468,
  "Pratt Institute":3910,
  "Rochester Institute of Technology":13215,
  "Fashion Institute of Technology":7637,
  "San Jose State University":27601,
  "University of Tulsa":2813,
  "University of Idaho":7747,
  "University of Nevada Las Vegas":24622,
  "University of Nevada Reno":15599,
  "University of Montana":7488,
  "Montana State University":14451,
  "University of New Mexico":17244,
  "New Mexico State University":11946,
  "California Lutheran University":2296,
  "California State University San Bernardino":15023,
  "Hamilton College":2030,
  "Swarthmore College":1613,
  "Haverford College":1430,
  "Vassar College":2444,
  "Colgate University":3180,
  "Colby College":2407,
  "Bates College":1760,
  "Bucknell University":3876,
};

// ─────────────────────────────────────────────────────────────
// SOCIAL SCENE AFFINITY
// ─────────────────────────────────────────────────────────────

const SOCIAL_SCENE_AFFINITY = {

  greek_heavy: [
    "Dartmouth College","California State University Chico",
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
    "University of Pennsylvania","Princeton University","Harvard University","Yale University","Columbia University","University of California Davis","Temple University","UC Riverside","California State University Long Beach","California State University Fresno","California State University Northridge","California State University Los Angeles","Oregon State University","Boise State University","University of Louisville","University of South Florida","University of Central Florida","Florida Atlantic University","California State University Fullerton",
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
    "Saint Mary's College of California","University of California Irvine","University of California Santa Cruz","Stetson University",
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
    'Davidson College',
    'Ohio Wesleyan University',
    'College of Wooster',
    'Macalester College',
    'University of Tulsa',
    'California Lutheran University',
    'Swarthmore College',
    'Haverford College'
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
  "Harvard University":{"min":3.9},
  "Yale University":{"min":3.9},
  "Princeton University":{"min":3.9},
  "Columbia University":{"min":3.9},
  "University of Pennsylvania":{"min":3.9},
  "Brown University":{"min":3.9},
  "Cornell University":{"min":3.8},
  "Dartmouth College":{"min":3.9},
  "Massachusetts Institute of Technology":{"min":3.9},
  "Stanford University":{"min":3.9},
  "California Institute of Technology":{"min":3.9},
  "University of Chicago":{"min":3.9},
  "Johns Hopkins University":{"min":3.8},
  "Northwestern University":{"min":3.8},
  "Duke University":{"min":3.8},
  "Vanderbilt University":{"min":3.8},
  "Georgetown University":{"min":3.8},
  "Carnegie Mellon University":{"min":3.7},
  "Emory University":{"min":3.7},
  "University of Notre Dame":{"min":3.8},
  "Williams College":{"min":3.9},
  "Amherst College":{"min":3.9},
  "Bowdoin College":{"min":3.8},
  "Middlebury College":{"min":3.7},
  "Pomona College":{"min":3.8},
  "Claremont McKenna College":{"min":3.8},
  "Harvey Mudd College":{"min":3.9},
  "Webb Institute":{"min":3.7},
  "Deep Springs College":{"min":3.9},
  "Colorado College":{"min":3.7},
  "University of the South":{"min":3.4},
  "Boston College":{"min":3.7},
  "University of Virginia":{"min":3.8},
  "Wake Forest University":{"min":3.7},
  "Villanova University":{"min":3.6},
  "Georgia Institute of Technology":{"min":3.7},
  "University of Michigan":{"min":3.7},
  "UC San Diego":{"min":3.8},
  "University of California Irvine":{"min":3.7},
  "University of California Davis":{"min":3.6},
  "University of California Santa Cruz":{"min":3.4},
  "University of Washington":{"min":3.6},
  "Ohio State University":{"min":3.5},
  "Penn State University":{"min":3.4},
  "Purdue University":{"min":3.5},
  "Indiana University":{"min":3.2},
  "University of Minnesota":{"min":3.5},
  "Michigan State University":{"min":3.3},
  "University of Maryland College Park":{"min":3.5},
  "Rutgers University":{"min":3.3},
  "Babson College":{"min":3.5},
  "Boston University":{"min":3.6},
  "Northeastern University":{"min":3.6},
  "New York University":{"min":3.6},
  "George Washington University":{"min":3.5},
  "American University":{"min":3.3},
  "Fordham University":{"min":3.4},
  "Drexel University":{"min":3.3},
  "Syracuse University":{"min":3.3},
  "Temple University":{"min":3.0},
  "University of Pittsburgh":{"min":3.5},
  "Case Western Reserve University":{"min":3.7},
  "Rose-Hulman Institute of Technology":{"min":3.5},
  "Stevens Institute of Technology":{"min":3.5},
  "Worcester Polytechnic Institute":{"min":3.5},
  "Colorado School of Mines":{"min":3.5},
  "Kettering University":{"min":3.0},
  "United States Military Academy":{"min":3.8},
  "University of Georgia":{"min":3.5},
  "University of Florida":{"min":3.7},
  "University of Alabama":{"min":3.0},
  "Auburn University":{"min":3.3},
  "Louisiana State University":{"min":3.0},
  "University of Tennessee":{"min":3.2},
  "University of Arkansas":{"min":3.0},
  "University of South Carolina":{"min":3.0},
  "Clemson University":{"min":3.5},
  "University of Mississippi":{"min":2.8},
  "Mississippi State University":{"min":2.8},
  "Florida State University":{"min":3.4},
  "University of South Florida":{"min":3.0},
  "University of Central Florida":{"min":3.2},
  "Florida Atlantic University":{"min":2.8},
  "Stetson University":{"min":3.0},
  "University of Iowa":{"min":3.0},
  "Iowa State University":{"min":3.0},
  "University of Nebraska-Lincoln":{"min":3.0},
  "University of Kentucky":{"min":3.0},
  "University of Missouri":{"min":3.0},
  "Virginia Tech":{"min":3.4},
  "North Carolina State University":{"min":3.5},
  "University of Miami":{"min":3.6},
  "Elon University":{"min":3.3},
  "College of William and Mary":{"min":3.8},
  "University of Oklahoma":{"min":3.2},
  "University of Kansas":{"min":3.0},
  "Baylor University":{"min":3.4},
  "University of Arizona":{"min":3.0},
  "Arizona State University":{"min":2.8},
  "University of Colorado Boulder":{"min":3.0},
  "Colorado State University":{"min":3.0},
  "University of Denver":{"min":3.3},
  "University of Oregon":{"min":3.2},
  "Oregon State University":{"min":3.0},
  "Boise State University":{"min":2.8},
  "University of Utah":{"min":3.0},
  "Brigham Young University":{"min":3.5},
  "Gonzaga University":{"min":3.6},
  "Pepperdine University":{"min":3.5},
  "Santa Clara University":{"min":3.5},
  "University of San Diego":{"min":3.4},
  "University of San Francisco":{"min":3.2},
  "Saint Mary's College of California":{"min":3.2},
  "California Polytechnic State University San Luis Obispo":{"min":3.5},
  "UC Riverside":{"min":3.2},
  "California State University Long Beach":{"min":2.8},
  "California State University Fullerton":{"min":2.8},
  "California State University Northridge":{"min":2.5},
  "California State University Los Angeles":{"min":2.5},
  "California State University Chico":{"min":2.8},
  "California State University Fresno":{"min":2.8},
  "Tulane University":{"min":3.5},
  "Creighton University":{"min":3.4},
  "Butler University":{"min":3.2},
  "Drake University":{"min":3.2},
  "University of Louisville":{"min":3.0},
  "University of Connecticut":{"min":3.4},
  "University of Massachusetts Amherst":{"min":3.5},
  "University of Delaware":{"min":3.3},
  "San Diego State University":{"min":3.5},
  "UC Santa Barbara":{"min":3.8},
  "University of Southern California":{"min":3.7},
  "UC Berkeley":{"min":3.9},
  "University of California Los Angeles":{"min":3.9},
  "Rice University":{"min":3.9},
  "Southern Methodist University":{"min":3.5},
  "Texas Christian University":{"min":3.5},
  "Texas A&M University":{"min":3.7},
  "Texas Tech University":{"min":3.5},
  "University of Texas at Austin":{"min":3.7},
  "University of North Carolina Chapel Hill":{"min":3.8},
  "Belmont University":{"min":3.5},
  "Furman University":{"min":3.6},
  "Wofford College":{"min":3.5},
  "Rollins College":{"min":3.5},
  "High Point University":{"min":3.3},
  "Appalachian State University":{"min":3.3},
  "University of Tennessee at Chattanooga":{"min":3.1},
  "University of Richmond":{"min":3.7},
  "Washington and Lee University":{"min":3.8},
  "Howard University":{"min":3.4},
  "Spelman College":{"min":3.5},
  "Georgia State University":{"min":3.2},
  "Flagler College":{"min":3.1},
  "James Madison University":{"min":3.5},
  "University of Memphis":{"min":3.1},
  "Regent University":{"min":3.0},
  "Davidson College":{"min":3.7},
  "University of Illinois Urbana-Champaign":{"min":3.8},
  "University of Wisconsin-Madison":{"min":3.8},
  "Marquette University":{"min":3.6},
  "Carleton College":{"min":3.8},
  "Kenyon College":{"min":3.6},
  "Oberlin College":{"min":3.7},
  "Ohio Wesleyan University":{"min":3.3},
  "Denison University":{"min":3.5},
  "College of Wooster":{"min":3.4},
  "Marshall University":{"min":3.0},
  "Morehead State University":{"min":3.0},
  "North Dakota State University":{"min":3.2},
  "South Dakota State University":{"min":3.0},
  "Grinnell College":{"min":3.8},
  "Macalester College":{"min":3.7},
  "Binghamton University":{"min":3.7},
  "Lehigh University":{"min":3.7},
  "Quinnipiac University":{"min":3.4},
  "University of Rhode Island":{"min":3.3},
  "Ithaca College":{"min":3.4},
  "Reed College":{"min":3.7},
  "Union College":{"min":3.5},
  "Franklin and Marshall College":{"min":3.7},
  "Bryn Mawr College":{"min":3.7},
  "Occidental College":{"min":3.6},
  "Bentley University":{"min":3.5},
  "Rhode Island School of Design":{"min":3.4},
  "Berklee College of Music":{"min":3.0},
  "Pratt Institute":{"min":3.2},
  "Rochester Institute of Technology":{"min":3.4},
  "Fashion Institute of Technology":{"min":3.0},
  "San Jose State University":{"min":3.2},
  "University of Tulsa":{"min":3.5},
  "University of Idaho":{"min":3.0},
  "University of Nevada Las Vegas":{"min":3.0},
  "University of Nevada Reno":{"min":3.2},
  "University of Montana":{"min":3.0},
  "Montana State University":{"min":3.0},
  "University of New Mexico":{"min":3.0},
  "New Mexico State University":{"min":2.8},
  "California Lutheran University":{"min":3.2},
  "California State University San Bernardino":{"min":2.8},
  "Hamilton College":{"min":3.8},
  "Swarthmore College":{"min":3.9},
  "Haverford College":{"min":3.8},
  "Vassar College":{"min":3.8},
  "Colgate University":{"min":3.7},
  "Colby College":{"min":3.7},
  "Bates College":{"min":3.6},
  "Bucknell University":{"min":3.6},
  "UCLA":{"min":3.9},
  "USC":{"min":3.8},
  "UT Austin":{"min":3.8},
  "SMU":{"min":3.7},
  "TCU":{"min":3.7},
  "Barnard College":{"min":3.9},
  "Wesleyan University":{"min":3.8},
  "Dickinson College":{"min":3.6},
  "Gettysburg College":{"min":3.6},
  "Providence College":{"min":3.5},
  "Illinois Wesleyan University":{"min":3.5},
  "University of Vermont":{"min":3.5},
  "St. John's College":{"min":3.5},
  "United States Naval Academy":{"min":3.8},
  "United States Air Force Academy":{"min":3.8},
  "United States Coast Guard Academy":{"min":3.6},
  "The Citadel":{"min":3.2},
  "Virginia Military Institute":{"min":3.3},
  "Norwich University":{"min":3.0},
  "United States Merchant Marine Academy":{"min":3.5},
  "Maine Maritime Academy":{"min":3.0},
  "Massachusetts Maritime Academy":{"min":3.0},
  "Texas A&M University at Galveston":{"min":3.2},
  "California State University Maritime Academy":{"min":3.0},
  "San Francisco State University":{"min":3.0},
  "Eastern Washington University":{"min":3.0},
  "University of Hawaii at Manoa":{"min":3.2},
  "University of Wyoming":{"min":3.0},
  "East Carolina University":{"min":3.1},
  "Texas State University":{"min":3.1},
  "Sam Houston State University":{"min":3.0},
  "University of Alaska Fairbanks":{"min":2.8},
  "College of the Ozarks":{"min":3.0},
  "University of North Texas":{"min":3.1},
  "Kennesaw State University":{"min":3.1}
};

// ─────────────────────────────────────────────────────────────────────────────
// getMajorStrengths(school) — reads UNIVERSITY_CONTENT's pipeline field to
// determine which major clusters a school is actually strong in.
// ─────────────────────────────────────────────────────────────────────────────
// This was called in 3 places in the scoring engine but never defined, so the
// program-strength boost has been a silent no-op for every student, always.
// Uses the same cluster vocabulary as NAICS_MAJOR_MAP below so NAICS/Worlds
// signal can actually match against real per-school strength data.

const MAJOR_STRENGTH_KEYWORDS = {
  'Business':              ['business', 'finance', 'consulting', 'accounting', 'banking', 'entrepreneurship'],
  'Computer Science':      ['computer science', 'technology', 'software', 'data science', 'computing'],
  'Media & Communications':['journalism', 'media', 'communications', 'broadcast'],
  'Arts & Design':         ['design', 'architecture', 'fine arts', 'fashion'],
  'Sciences':              ['sciences', 'biology', 'chemistry', 'physics', 'research'],
  'Engineering':           ['engineering'],
  'Health Sciences':       ['healthcare', 'medicine', 'nursing', 'health sciences', 'pharmacy', 'public health'],
  'Education':             ['education', 'teaching'],
  'Law & Policy':          ['law', 'public policy', 'government'],
  'Performing Arts':       ['music', 'performing arts', 'theatre', 'dance'],
  'Entrepreneurship':      ['entrepreneurship', 'startup'],
};

function getMajorStrengths(school) {
  if (typeof UNIVERSITY_CONTENT === 'undefined' || !UNIVERSITY_CONTENT[school]) return [];
  const entry = UNIVERSITY_CONTENT[school];
  const text = ((entry.pipeline || '') + ' ' + (entry.hidden_pathway || '')).toLowerCase();
  const strengths = [];
  for (const cluster in MAJOR_STRENGTH_KEYWORDS) {
    if (MAJOR_STRENGTH_KEYWORDS[cluster].some(kw => text.includes(kw))) {
      strengths.push(cluster);
    }
  }
  return strengths;
}

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

      // Determine student profile type from their major clusters
      const studentCreativeCount  = [...studentMajorClusters].filter(c => creativeSignalClusters.has(c)).length;
      const studentStemCount      = [...studentMajorClusters].filter(c => stemSignalClusters.has(c)).length;
      const studentHealthCount    = [...studentMajorClusters].filter(c => healthSignalClusters.has(c)).length;
      const studentBizCount       = [...studentMajorClusters].filter(c => businessSignalClusters.has(c)).length;

      // School overlap by signal type
      const creativeOverlap  = schoolMajors.filter(m => studentMajorClusters.has(m) && creativeSignalClusters.has(m));
      const stemOverlap      = schoolMajors.filter(m => studentMajorClusters.has(m) && stemSignalClusters.has(m));
      const healthOverlap    = schoolMajors.filter(m => studentMajorClusters.has(m) && healthSignalClusters.has(m));
      const bizOverlap       = schoolMajors.filter(m => studentMajorClusters.has(m) && businessSignalClusters.has(m));

      // Score based on profile type — reward domain-specific match
      if (studentCreativeCount >= 2 && creativeOverlap.length >= 2) score += 25;
      else if (studentCreativeCount >= 1 && creativeOverlap.length >= 1) score += 15;
      else if (studentStemCount >= 2 && stemOverlap.length >= 2) score += 25;
      else if (studentStemCount >= 1 && stemOverlap.length >= 1) score += 15;
      else if (studentHealthCount >= 1 && healthOverlap.length >= 1) score += 20;
      else if (studentBizCount >= 1 && bizOverlap.length >= 1) score += 15;
      else {
        // Fallback: general overlap
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
function getAdjacentMatches(primaryMatches, naicsSectors, comboUnlocks, max=1, regionPool=null) {
  const allSchools = Object.keys(SCHOOL_ENROLLMENT);
  const primarySet = new Set(primaryMatches);
  const candidates = allSchools.filter(s => !primarySet.has(s) && (!regionPool || regionPool.includes(s)));

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
function getProfileAdjacentMatches(primaryMatches, riasec, naicsSectors, max=3, regionPool=null) {
  if (!riasec || riasec.length < 2) return [];

  const allSchools = Object.keys(SCHOOL_ENROLLMENT);
  const primarySet = new Set(primaryMatches);
  const candidates = allSchools.filter(s => !primarySet.has(s) && (!regionPool || regionPool.includes(s)));

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

// ─────────────────────────────────────────────────────────────
// HONORS COLLEGES — big schools (20k+) with a real, selective honors
// college that delivers a small-school academic experience inside
// a large campus. Used for the small→big size-adjacent pathway.
// ─────────────────────────────────────────────────────────────

const HONORS_COLLEGES = new Set([
  "Arizona State University","Penn State University","University of South Carolina",
  "University of Alabama","University of Georgia","University of Florida",
  "University of Michigan","Ohio State University","Purdue University",
  "University of Arizona","Texas A&M University","University of Texas at Austin",
  "Indiana University","University of Maryland College Park","Rutgers University",
  "University of Kentucky","University of Tennessee","Clemson University",
  "University of Central Florida","University of Mississippi","Louisiana State University",
  "University of Oklahoma","University of Utah"
]);

// ─────────────────────────────────────────────────────────────
// getSizeAdjacentMatches — same region, same social scene, different size
// ─────────────────────────────────────────────────────────────
// Rules:
//   big (20k+)    -> one medium alternative, same culture
//   medium        -> one small AND one big alternative
//   small (<6k)   -> one medium alternative, OR a big school with a
//                    real honors college (same small-class feel)
//
// Region and social scene gates use the SAME pools as matchUniversities()
// so this stays consistent with the rest of the matching engine.

function getSizeAdjacentMatches(primaryMatches, regions, socialScene, campusScale, max = 2) {
  const primarySet = new Set(primaryMatches || []);
  let regionPool = null;
  if (regions && regions.length > 0 && !regions.includes('anywhere') && !regions.includes('no_preference')) {
    regionPool = [];
    regions.forEach(r => (REGION_POOLS[r] || []).forEach(s => { if (!regionPool.includes(s)) regionPool.push(s); }));
  }
  let socialPool = null;
  if (socialScene && socialScene !== 'no_preference') {
    socialPool = SOCIAL_SCENE_AFFINITY[socialScene] || [];
  }

  const bucketOf = school => {
    const n = SCHOOL_ENROLLMENT[school];
    if (n == null) return null;
    if (n >= SCALE_MAP.big_university.min) return 'big';
    if (n >= SCALE_MAP.medium_university.min) return 'medium';
    return 'small';
  };

  const eligible = Object.keys(SCHOOL_ENROLLMENT).filter(s => {
    if (primarySet.has(s)) return false;
    if (regionPool && !regionPool.includes(s)) return false;
    if (socialPool && !socialPool.includes(s)) return false;
    return true;
  });

  const currentBucket = campusScale === 'big_university' ? 'big'
                       : campusScale === 'medium_university' ? 'medium'
                       : campusScale === 'small_campus' ? 'small' : null;

  const pickClosestToTarget = (pool, targetSize) => pool
    .filter(s => SCHOOL_ENROLLMENT[s] != null)
    .sort((a, b) => Math.abs(SCHOOL_ENROLLMENT[a] - targetSize) - Math.abs(SCHOOL_ENROLLMENT[b] - targetSize));

  const results = [];

  if (currentBucket === 'big') {
    const mediumOptions = eligible.filter(s => bucketOf(s) === 'medium');
    const best = pickClosestToTarget(mediumOptions, 10000)[0];
    if (best) results.push({ name: best, type: 'size_adjacent', reason: `Same region and social scene, but ${SCHOOL_ENROLLMENT[best].toLocaleString()} students instead of 20,000+` });

  } else if (currentBucket === 'medium') {
    const smallOptions = eligible.filter(s => bucketOf(s) === 'small');
    const bigOptions = eligible.filter(s => bucketOf(s) === 'big');
    const smallBest = pickClosestToTarget(smallOptions, 4000)[0];
    const bigBest = pickClosestToTarget(bigOptions, 25000)[0];
    if (smallBest) results.push({ name: smallBest, type: 'size_adjacent', reason: `Same region and social scene, smaller — ${SCHOOL_ENROLLMENT[smallBest].toLocaleString()} students` });
    if (bigBest) results.push({ name: bigBest, type: 'size_adjacent', reason: `Same region and social scene, bigger — ${SCHOOL_ENROLLMENT[bigBest].toLocaleString()} students` });

  } else if (currentBucket === 'small') {
    const mediumOptions = eligible.filter(s => bucketOf(s) === 'medium');
    const mediumBest = pickClosestToTarget(mediumOptions, 10000)[0];
    if (mediumBest) results.push({ name: mediumBest, type: 'size_adjacent', reason: `Same region and social scene, a step up in size — ${SCHOOL_ENROLLMENT[mediumBest].toLocaleString()} students` });

    const honorsOptions = eligible.filter(s => bucketOf(s) === 'big' && HONORS_COLLEGES.has(s));
    const honorsBest = pickClosestToTarget(honorsOptions, 30000)[0];
    if (honorsBest) results.push({ name: honorsBest, type: 'size_adjacent_honors', reason: `Same region and social scene, with an honors college that delivers the same small-class feel inside a larger campus` });
  }

  return results.slice(0, max);
}

if (typeof module !== 'undefined') {
  module.exports = Object.assign(module.exports || {}, {
    getMajorStrengths,
    SCHOOL_COMPETITIVENESS,
    getAdjacentMatches,
    getProfileAdjacentMatches,
    getSizeAdjacentMatches,
    HONORS_COLLEGES
  });
}
