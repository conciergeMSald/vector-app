// VECTOR Data Capture — Google Apps Script
// Deploy as: Web App → Execute as Me → Anyone can access
// Receives POST from VECTOR HTML, writes to Google Sheets

const FAMILY_SHEET_ID     = '1v2gM8A5Y4TWyPKQGn-XOTghMpwg0huGMkq5yMyYqrcs';
const CONSULTANT_SHEET_ID = '1AA55yyxDu3J9VUpO9HZF9qJH4TJ6zYYrX4zzc2T42X4';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var type = data.record_type || 'family';

    if (type === 'consultant') {
      writeConsultant(data);
    } else {
      writeFamily(data);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function writeFamily(d) {
  var sheet = SpreadsheetApp
    .openById(FAMILY_SHEET_ID)
    .getActiveSheet();

  sheet.appendRow([
    new Date().toISOString(),                    // A: Timestamp
    d.session_id          || '',                 // B: Family ID
    d.email               || '',                 // C: Email
    d.family_last_name    || '',                 // D: Family Last Name
    d.primary_parent      || '',                 // E: Primary Parent
    d.secondary_parent    || '',                 // F: Secondary Parent
    d.student_first_name  || '',                 // G: Student First Name
    d.grade               || '',                 // H: Student Grade
    d.zip                 || '',                 // I: ZIP Code
    d.city_state          || '',                 // J: City / State
    d.career              || '',                 // K: Career Goal
    d.vector_score        || '',                 // L: VECTOR Score
    d.worlds              || '',                 // M: Worlds
    d.state_pref          || '',                 // N: State Preference
    d.campus_size_pref    || '',                 // O: Campus Size
    d.faith_pref          || '',                 // P: Faith Preference
    d.total_children      || '',                 // Q: Total Children
    d.child_2_grade       || '',                 // R: Child 2 Grade
    d.child_3_grade       || '',                 // S: Child 3 Grade
    d.next_engagement     || '',                 // T: Next Engagement Date
    d.consultant_code     || '',                 // U: Consultant Code
    d.report_generated    ? 'Y' : 'N',           // V: Report Generated
    d.subscription_tier   || 'consumer_295',     // W: Subscription Tier
  ]);
}

function writeConsultant(d) {
  var sheet = SpreadsheetApp
    .openById(CONSULTANT_SHEET_ID)
    .getActiveSheet();

  sheet.appendRow([
    new Date().toISOString(),                    // A: Timestamp
    d.consultant_id       || '',                 // B: Consultant ID
    d.email               || '',                 // C: Email
    d.first_name          || '',                 // D: First Name
    d.last_name           || '',                 // E: Last Name
    d.practice_name       || '',                 // F: Practice Name
    d.zip                 || '',                 // G: ZIP Code
    maskPhone(d.telephone || ''),                // H: Contact Telephone (masked)
    d.access_code         || '',                 // I: Access Code
    d.subscription_tier   || '',                 // J: Subscription Tier
    d.subscription_status || 'pending',          // K: Subscription Status
    d.linked_families     || 0,                  // L: Linked Families
    new Date().toISOString(),                    // M: Last Active
  ]);
}

function maskPhone(tel) {
  if (!tel || tel.length < 4) return tel;
  var digits = tel.replace(/\D/g, '');
  return '••••••' + digits.slice(-4);
}

// Test function — run this manually to verify the script works
function testWrite() {
  writeFamily({
    session_id: 'TEST-001',
    email: 'test@example.com',
    family_last_name: 'Smith',
    primary_parent: 'John Smith',
    student_first_name: 'Tyler',
    grade: 10,
    zip: '90210',
    city_state: 'Beverly Hills, CA',
    career: 'Investment Banker',
    vector_score: 74,
    worlds: 'finance, technology',
    state_pref: 'any',
    campus_size_pref: 'large',
    faith_pref: '',
    report_generated: true,
    subscription_tier: 'consumer_295'
  });
  Logger.log('Test row written to Family Records');
}
