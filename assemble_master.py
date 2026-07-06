"""
VECTOR University DB v5 — Master Assembly Script
Run after each approved school is added to the manifest below.
Output: UNIVERSITY_DB_V5_MASTER.js

Usage: python3 assemble_master.py
"""

import re, os, sys
from datetime import date

# ── MANIFEST — add each approved school here in order ─────────────────────
# Format: ('source_filename', 'Display Name')
MANIFEST = [
    ('arizona_state_university_v5.js',  'Arizona State University'),
    ('university_of_washington_v5.js',  'University of Washington'),
    ('university_of_arizona_v5.js',  'University of Arizona'),
    ('university_of_oregon_v5.js',  'University of Oregon'),
    ('reed_college_v5.js',  'Reed College'),
    ('gonzaga_university_v5.js',  'Gonzaga University'),
    ('indiana_university_bloomington_v5.js',  'Indiana University Bloomington'),
    ('iowa_state_university_v5.js',  'Iowa State University'),
    ('oklahoma_state_university_v5.js',  'Oklahoma State University'),
    ('university_of_kansas_v5.js',  'University of Kansas'),
    ('university_of_houston_v5.js',  'University of Houston'),
    ('the_university_of_texas_at_dallas_v5.js',  'The University of Texas at Dallas'),
    ('the_university_of_alabama_v5.js',  'The University of Alabama'),
    ('harvard_university_v5.js',  'Harvard University'),
    ('brown_university_v5.js',  'Brown University'),
    ('university_of_illinois_urbana_champaign_v5.js',  'University of Illinois Urbana-Champaign'),
    ('university_of_wisconsin_madison_v5.js',  'University of Wisconsin–Madison'),
    ('duke_university_v5.js',  'Duke University'),
    ('dartmouth_college_v5.js',  'Dartmouth College'),
    ('university_of_missouri_v5.js',  'University of Missouri'),
    ('university_of_pennsylvania_v5.js',  'University of Pennsylvania'),
    ('columbia_university_v5.js',  'Columbia University'),
    ('university_of_connecticut_v5.js',  'University of Connecticut'),
    ('university_of_massachusetts_amherst_v5.js',  'University of Massachusetts Amherst'),
    ('drexel_university_v5.js',  'Drexel University'),
    ('rutgers_university_v5.js',  'Rutgers University'),
    ('university_of_pittsburgh_v5.js',  'University of Pittsburgh'),
    ('virginia_tech_v5.js',  'Virginia Tech'),
    ('university_of_tennessee_knoxville_v5.js',  'University of Tennessee, Knoxville'),
    ('texas_a_m_university_v5.js',  'Texas A&M University'),
    ('university_of_arkansas_v5.js',  'University of Arkansas'),
    ('university_of_nebraska_lincoln_v5.js',  'University of Nebraska–Lincoln'),
    ('university_of_north_carolina_at_chapel_hill_v5.js',  'University of North Carolina at Chapel Hill'),
    ('california_polytechnic_state_university_san_luis_obispo_v5.js',  'California Polytechnic State University, San Luis Obispo'),
    ('university_of_california_merced_v5.js',  'University of California, Merced'),
    ('temple_university_v5.js',  'Temple University'),
    ('university_of_iowa_v5.js',  'University of Iowa'),
    ('california_state_university_long_beach_v5.js',  'California State University, Long Beach'),
    ('california_state_university_fullerton_v5.js',  'California State University, Fullerton'),
    ('san_jos_state_university_v5.js',  'San José State University'),
    ('university_of_california_santa_barbara_v5.js',  'University of California, Santa Barbara'),
    ('university_of_california_santa_cruz_v5.js',  'University of California, Santa Cruz'),
    ('university_of_california_san_diego_v5.js',  'University of California, San Diego'),
    ('university_of_michigan_v5.js',  'University of Michigan'),
    ('university_of_south_carolina_v5.js',  'University of South Carolina'),
    ('university_of_georgia_v5.js',  'University of Georgia'),
    ('university_of_florida_v5.js',  'University of Florida'),
    ('university_of_oklahoma_v5.js',  'University of Oklahoma'),
    ('louisiana_state_university_v5.js',  'Louisiana State University'),
    ('auburn_university_v5.js',  'Auburn University'),
    ('clemson_university_v5.js',  'Clemson University'),
    ('vanderbilt_university_v5.js',  'Vanderbilt University'),
    ('georgetown_university_v5.js',  'Georgetown University'),
    ('university_of_virginia_v5.js',  'University of Virginia'),
    ('tulane_university_v5.js',  'Tulane University'),
    ('uc_berkeley_v5.js',  'UC Berkeley'),
    ('university_of_colorado_boulder_v5.js',  'University of Colorado Boulder'),
    ('syracuse_university_v5.js',  'Syracuse University'),
    ('university_of_miami_v5.js',  'University of Miami'),
    ('colorado_school_of_mines_v5.js',  'Colorado School of Mines'),
    ('colorado_college_v5.js',  'Colorado College'),
    ('university_of_northern_colorado_v5.js',  'University of Northern Colorado'),
    ('united_states_air_force_academy_v5.js',  'United States Air Force Academy'),
    ('northern_arizona_university_v5.js',  'Northern Arizona University'),
    ('williams_college_v5.js',  'Williams College'),
    ('pomona_college_v5.js',  'Pomona College'),
    ('saint_mary_s_college_of_california_v5.js',  "Saint Mary's College of California"),
    ('university_of_san_diego_v5.js',  'University of San Diego'),
    ('santa_clara_university_v5.js',  'Santa Clara University'),
    ('california_state_university_chico_v5.js',  'California State University Chico'),
    ('elon_university_v5.js',  'Elon University'),
    ('drake_university_v5.js',  'Drake University'),
    ('creighton_university_v5.js',  'Creighton University'),
    ('indiana_university_v5.js',  'Indiana University'),
    ('biola_university_v5.js',  'Biola University'),
    ('calvin_university_v5.js',  'Calvin University'),
    ('gordon_college_v5.js',  'Gordon College'),
    ('pepperdine_university_v5.js',  'Pepperdine University'),
    ('wheaton_college_v5.js',  'Wheaton College'),
    ('baylor_university_v5.js',  'Baylor University'),
    ('southern_methodist_university_v5.js',  'Southern Methodist University'),
    ('texas_christian_university_v5.js',  'Texas Christian University'),
    ('university_of_notre_dame_v5.js',  'University of Notre Dame'),
    ('wake_forest_university_v5.js',  'Wake Forest University'),
    ('case_western_reserve_university_v5.js',  'Case Western Reserve University'),
    ('lehigh_university_v5.js',  'Lehigh University'),
    ('university_of_richmond_v5.js',  'University of Richmond'),
    ('villanova_university_v5.js',  'Villanova University'),
    ('northwestern_university_v5.js',  'Northwestern University'),
    ('rice_university_v5.js',  'Rice University'),
    ('university_of_southern_california_v5.js',  'University of Southern California'),
    ('massachusetts_institute_of_technology_v5.js',  'Massachusetts Institute of Technology'),
    ('stanford_university_v5.js',  'Stanford University'),
    ('washington_university_in_st_louis_v5.js',  'Washington University in St. Louis'),
    ('yale_university_v5.js',  'Yale University'),
    ('carnegie_mellon_university_v5.js',  'Carnegie Mellon University'),
    ('princeton_university_v5.js',  'Princeton University'),
    ('university_of_california_berkeley_v5.js',  'University of California, Berkeley'),
    ('university_of_chicago_v5.js',  'University of Chicago'),
    ('cornell_university_v5.js',  'Cornell University'),
    ('georgia_institute_of_technology_v5.js',  'Georgia Institute of Technology'),
    ('university_of_california_los_angeles_v5.js',  'University of California, Los Angeles'),
    ('azusa_pacific_university_v5.js',  'Azusa Pacific University'),
    ('point_loma_nazarene_university_v5.js',  'Point Loma Nazarene University'),
    ('seattle_pacific_university_v5.js',  'Seattle Pacific University'),
    ('westmont_college_v5.js',  'Westmont College'),
    ('emory_university_v5.js',  'Emory University'),
    ('university_of_denver_v5.js',  'University of Denver'),
    ('university_of_colorado_colorado_springs_v5.js',  'University of Colorado Colorado Springs'),
    ('university_of_utah_v5.js',  'University of Utah'),
    ('western_colorado_university_v5.js',  'Western Colorado University'),
    ('university_of_montana_western_v5.js',  'University of Montana Western'),
    ('southern_oregon_university_v5.js',  'Southern Oregon University'),
    ('prescott_college_v5.js',  'Prescott College'),
    ('university_of_montana_v5.js',  'University of Montana'),
    ('montana_state_university_v5.js',  'Montana State University'),
    ('university_of_wyoming_v5.js',  'University of Wyoming'),
    ('north_dakota_state_university_v5.js',  'North Dakota State University'),
    ('south_dakota_state_university_v5.js',  'South Dakota State University'),
    ('united_states_naval_academy_v5.js',  'United States Naval Academy'),
    ('united_states_military_academy_west_point_v5.js',  'United States Military Academy West Point'),
    ('the_citadel_v5.js',  'The Citadel'),
    ('united_states_coast_guard_academy_v5.js',  'United States Coast Guard Academy'),
    ('united_states_merchant_marine_academy_v5.js',  'United States Merchant Marine Academy'),
    ('old_dominion_university_v5.js',  'Old Dominion University'),
    ('virginia_military_institute_v5.js',  'Virginia Military Institute'),
    ('united_states_marine_corps_university_v5.js',  'United States Marine Corps University'),
    ('university_of_north_georgia_v5.js',  'University of North Georgia'),
    ('norwich_university_v5.js',  'Norwich University'),
    ('marion_military_institute_v5.js',  'Marion Military Institute'),
    ('university_of_new_hampshire_v5.js',  'University of New Hampshire'),
    ('keene_state_college_v5.js',  'Keene State College'),
    ('university_of_vermont_v5.js',  'University of Vermont'),
    ('university_of_maine_v5.js',  'University of Maine'),
    ('university_at_buffalo_v5.js',  'University at Buffalo'),
    ('union_college_v5.js',  'Union College'),
    ('university_of_nevada_reno_v5.js',  'University of Nevada, Reno'),
    ('montana_technological_university_v5.js',  'Montana Technological University'),
    ('carroll_college_v5.js',  'Carroll College'),
    ('rocky_mountain_college_v5.js',  'Rocky Mountain College'),
    ('utah_state_university_v5.js',  'Utah State University'),
    ('weber_state_university_v5.js',  'Weber State University'),
    ('utah_valley_university_v5.js',  'Utah Valley University'),
    ('brigham_young_university_v5.js',  'Brigham Young University'),
    ('university_of_north_dakota_v5.js',  'University of North Dakota'),
    ('university_of_texas_permian_basin_v5.js',  'University of Texas Permian Basin'),
    ('abilene_christian_university_v5.js',  'Abilene Christian University'),
    ('towson_university_v5.js',  'Towson University'),
    ('university_of_maryland_v5.js',  'University of Maryland'),
    ('ohio_state_university_v5.js',  'Ohio State University'),
    ('george_mason_university_v5.js',  'George Mason University'),
    ('william_mary_v5.js',  'William & Mary'),
    ('loyola_university_maryland_v5.js',  'Loyola University Maryland'),
    ('university_of_delaware_v5.js',  'University of Delaware'),
    ('michigan_state_university_v5.js',  'Michigan State University'),
    ('pennsylvania_state_university_main_campus_v5.js',  'Pennsylvania State University-Main Campus'),
    ('university_of_wisconsin_madison_1_v5.js',  'University of Wisconsin-Madison'),
    ('the_university_of_tennessee_knoxville_v5.js',  'The University of Tennessee-Knoxville'),
    ('university_of_minnesota_twin_cities_v5.js',  'University of Minnesota-Twin Cities'),
    ('texas_tech_university_v5.js',  'Texas Tech University'),
    ('american_university_v5.js',  'American University'),
    ('belmont_university_v5.js',  'Belmont University'),
    ('boston_university_v5.js',  'Boston University'),
    ('colorado_state_university_v5.js',  'Colorado State University'),
    ('fordham_university_v5.js',  'Fordham University'),
    ('george_washington_university_v5.js',  'George Washington University'),
    ('loyola_marymount_university_v5.js',  'Loyola Marymount University'),
    ('marquette_university_v5.js',  'Marquette University'),
    ('university_of_maryland_college_park_v5.js',  'University of Maryland College Park'),
    ('northeastern_university_v5.js',  'Northeastern University'),
    ('new_york_university_v5.js',  'New York University'),
    ('penn_state_university_v5.js',  'Penn State University'),
    ('purdue_university_v5.js',  'Purdue University'),
    ('smu_v5.js',  'SMU'),
    ('tcu_v5.js',  'TCU'),
    ('university_of_north_carolina_chapel_hill_v5.js',  'University of North Carolina Chapel Hill'),
    ('university_of_texas_at_austin_v5.js',  'University of Texas at Austin'),
    ('ucla_v5.js',  'UCLA'),
    ('boston_college_v5.js',  'Boston College'),
]

SOURCE_DIR  = '/home/claude/v5_schools'
OUTPUT_FILE = '/home/claude/UNIVERSITY_DB_V5_MASTER.js'

# ── VALIDATION CHECKS ──────────────────────────────────────────────────────
REQUIRED_SECTIONS = [
    'institutionNarrative', 'institutionIdentity', 'institutionScale',
    'studentFit', 'hiddenOpportunities', 'networkCapital',
    'economicEcosystem', 'geographicInfluence', 'socialCapital',
    'industryPathways', 'wealthMobility', 'futureResilience',
    'lifeDesignOutcomes', 'institutionalMoat'
]
REQUIRED_CC = [
    'hasCCPathway', 'ccFeederNames', 'transferAcceptanceRate',
    'freshmanAcceptanceRate', 'estimatedSavingsRange', 'transferNotes'
]
REQUIRED_INDUSTRIES = [
    'aestheticsAndBeauty', 'healthWellness', 'nutraceuticals',
    'consumerProducts', 'outdoorIndustry', 'sportsBusiness',
    'entertainmentMedia', 'ventureCapital', 'privateEquity',
    'investmentBanking', 'consulting', 'medicine',
    'healthcareAdministration', 'defense', 'realEstate',
    'luxuryBrands', 'entrepreneurship', 'technology',
    'publicPolicy', 'nonprofitLeadership'
]

def validate(name, content):
    # Core sections + CC pathway are hard requirements (block assembly).
    fails = []
    for s in REQUIRED_SECTIONS + REQUIRED_CC:
        if s not in content:
            fails.append(s)
    return fails

def check_industry_completeness(name, content):
    # Industry categories are tracked but NOT blocking (WORLDS-CAREER-DEPTH-001 is still in progress).
    missing = [s for s in REQUIRED_INDUSTRIES if s not in content]
    return missing

# ── ASSEMBLE ───────────────────────────────────────────────────────────────
def main():
    entries   = []
    passed    = []
    failed    = []
    industry_gap_report = {}

    for filename, display_name in MANIFEST:
        path = os.path.join(SOURCE_DIR, filename)
        if not os.path.exists(path):
            print(f'  MISSING: {path}')
            failed.append(display_name)
            continue

        with open(path) as f:
            content = f.read().strip()

        fails = validate(display_name, content)
        industry_gaps = check_industry_completeness(display_name, content)
        if fails:
            print(f'  FAIL [{display_name}]: missing core sections {fails}')
            failed.append(display_name)
        else:
            entries.append(content)
            passed.append(display_name)
            tag = f' (industry gaps: {len(industry_gaps)})' if industry_gaps else ''
            print(f'  PASS  {display_name}{tag}')
            if industry_gaps:
                industry_gap_report[display_name] = industry_gaps

    if failed:
        print(f'\n{len(failed)} school(s) EXCLUDED (missing core sections) — proceeding with the {len(passed)} that pass:')
        for f in failed:
            print(f'   - {f}')
        print()

    header = f'''/**
 * VECTOR University Intelligence Database
 * Schema: v5.0 — Full 14-Section Architecture + CC Transfer Pathway
 * Assembly: Sequential retrofit — one school per approval cycle
 *
 * MASTER FILE — DO NOT EDIT DIRECTLY
 * Edit source files, then run: python3 assemble_master.py
 *
 * Schools complete: {len(passed)}
 * Last assembled:  {date.today().strftime("%B %d, %Y")}
 *
 * School index:
{chr(10).join(f" *   {i+1:3}. {s}" for i, s in enumerate(passed))}
 */

const UNIVERSITY_DB_V5 = {{

'''
    footer = '\n};\n\nif (typeof module !== "undefined") module.exports = { UNIVERSITY_DB_V5 };\n'
    body   = ',\n\n'.join(entries)
    master = header + body + footer

    with open(OUTPUT_FILE, 'w') as f:
        f.write(master)

    # Final validation
    school_count  = master.count('institutionNarrative')
    moat_count    = master.count('institutionalMoat')
    cc_count      = master.count('ccTransferPathway')
    lines         = len(master.splitlines())

    print(f'\n{"="*50}')
    print(f'  Schools assembled:   {school_count}')
    print(f'  institutionalMoat:   {moat_count}')
    print(f'  ccTransferPathway:   {cc_count}')
    print(f'  Total lines:         {lines:,}')
    print(f'  Output:              {OUTPUT_FILE}')

    if school_count == moat_count == cc_count == len(passed):
        print(f'  Status:              ALL CHECKS PASSED')
    else:
        print(f'  Status:              MISMATCH — REVIEW OUTPUT')

if __name__ == '__main__':
    main()
