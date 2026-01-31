const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
  { 
    id: 'Pos_Fun_0001', 
    name: 'Simple Sentence', 
    input: 'mama panthi yanavaa.', 
    expected: 'මම පන්ති යනවා.'
  },
  { 
    id: 'Pos_Fun_0002', 
    name: 'Compound sentence', 
    input: 'Adha mama panthi yanavaa, eeth mata badaginii.', 
    expected: 'අද මම පන්ති යනවා, ඒත් මට බඩගිනී.'
  },
  { 
    id: 'Pos_Fun_0003', 
    name: ' Mixed Complex sentences ', 
    input: 'kaalaguNaya hoDHAnam api pansal yamu.', 
    expected: 'කාලගුණය හොඳනම් අපි පන්සල් යමු.'  
  },
   { 
    id: 'Pos_Fun_0004', 
    name: '  Interrogative (questions) forms', 
    input: 'oyaa beheth gaththadha?', 
    expected: 'ඔයා බෙහෙත් ගත්තද?'  
  },

  { 
    id: 'Pos_Fun_0005', 
    name: ' Imperative (commands) forms', 
    input: 'oyaa dhaenma gedhara enna.', 
    expected: 'ඔයා දැන්ම ගෙදර එන්න.'  
  },
  { 
    id: 'Pos_Fun_0006', 
    name: ' Positive forms', 
    input: 'mama adhama paadam karanavaa.', 
    expected: 'මම අදම පාඩම් කරනවා.'  
  },
  { 
    id: 'Pos_Fun_0007', 
    name: 'Negative forms', 
    input: 'mata baehae paadam karanna.', 
    expected: 'මට බැහැ පාඩම් කරන්න.'  
  },
 { 
    id: 'Pos_Fun_0008', 
    name: ' Greetings', 
    input: 'suba nava vasarak veevaa!', 
    expected: 'සුබ නව වසරක් වේවා!'  
  },
   { 
    id: 'Pos_Fun_0009', 
    name: ' Requests', 
    input: 'mata meya sampuurNa kara dhenna puluvandha?', 
    expected: 'මට මෙය සම්පූර්ණ කර දෙන්න පුලුවන්ද?'  
  },
    { 
    id: 'Pos_Fun_0010', 
    name: ' Responses', 
    input: 'hari, mama eya karannam.', 
    expected: 'හරි, මම එය කරන්නම්.'
  },
  { 
    id: 'Pos_Fun_0011', 
    name: 'Polite phrasing', 
    input: 'karuNaakara mata meya sampuurNa kara dhenna puluvandha? ', 
    expected: 'කරුණාකර මට මෙය සම්පූර්ණ කර දෙන්න පුලුවන්ද?'  
  },
   { 
    id: 'Pos_Fun_0012', 
    name: 'Informal phrasing', 
    input: 'ooka aran ehaata palayan. ', 
    expected: 'ඕක අරන් එහාට පලයන්.'  
  },
   { 
    id: 'Pos_Fun_0013', 
    name: 'Frequently used day-to-day expressions', 
    input: 'mata hari mahansii.', 
    expected: 'මට හරි මහන්සී.'  
  },
    { 
    id: 'Pos_Fun_0014', 
    name: ' Multi-word expressions and frequent collocations', 
    input: 'atha soodhanna.', 
    expected: 'අත සෝදන්න.' 

  },
    { 
   id: 'Pos_Fun_0015', 
   name: 'Proper spacing', 
    input: 'mama film ekak balanna giyaa.', 
    expected: 'මම film එකක් බලන්න ගියා.' 
    
  },
    { 
    id: 'Pos_Fun_0016', 
    name: 'Dates', 
    input: 'jaathika looka Lamaa dhinaya thibennea 2026/11/01 venidhaa.', 
    expected: 'ජාතික ලෝක ළමා දිනය තිබෙන්නේ 2026/11/01 වෙනිදා.' 
    
  },
     { 
    id: 'Pos_Fun_0017', 
    name: 'Repeated word expressions used for emphasis', 
    input: 'hari hari mama tika velaavak yaluvaage gedhara gihin ennam.', 
    expected: 'හරි හරි මම ටික වෙලාවක් යලුවාගෙ ගෙදර ගිහින් එන්නම්.'
  }, 
     { 
    id: 'Pos_Fun_0018', 
    name: 'Tense variations (Past)', 
    input: 'Api iiye saadhayakata giyaa.', 
    expected: 'අපි ඊයෙ සාදයකට ගියා.'
   },
  { 
    id: 'Pos_Fun_0019', 
    name: 'Tense variations (Present)', 
    input: 'mama dhaen paadam karanavaa.', 
    expected: 'මම දැන් පාඩම් කරනවා.'
  },
   { 
    id: 'Pos_Fun_0020', 
    name: 'Tense variations (Future)', 
    input: 'akkaa heta vaedata yanavaa kivvaa.', 
    expected: 'අක්කා හෙට වැඩට යනවා කිව්වා.'
  },
    { 
    id: 'Pos_Fun_0021', 
    name: 'Negation patterns', 
    input: 'mata dhaenma kaeema epaa.', 
    expected: 'මට දැන්ම කෑම එපා.'
  },
     { 
    id: 'Pos_Fun_0022', 
    name: 'Plural usage and pronoun variations', 
    input: 'api adha pansal yamu.', 
    expected: 'අපි අද පන්සල් යමු.'
  },
    { 
    id: 'Pos_Fun_0023', 
    name: 'English technical', 
    input:'mama dhaen  office ekee vaeda karanavaa namuth WiFi eka slow nisaa Email yavanna amaruyi, ee nisa vaeda karana eka naevaeththuvaa.', 
    expected:'මම දැන්  office එකේ වැඩ කරනවා නමුත් WiFi එක slow නිසා Email යවන්න අමරුයි, ඒ නිස වැඩ කරන එක නැවැත්තුවා.'
  },
  
   { 
    id: 'Pos_Fun_0024', 
    name: 'Mixed language content', 
    input: 'aGAharuvaadhaa paevaethviimata thibuu lecture eka adha nopaevaethvena bava karuNaakara sisunta dhanvanna.brahaspathindha gaetaluva visadhiima sadhahaa timetable sakas kiriima sadhahaa vagakiva yuthu team samaga api dhaenata discuss karamin sitimu.yam venasak thibee nam, we will inform you.So, notification gaena avaDhaanayen sitinna.', 
    expected: 'අඟහරුවාදා පැවැත්වීමට තිබූ lecture එක අද නොපැවැත්වෙන බව කරුණාකර සිසුන්ට දන්වන්න.බ්‍රහස්පතින්ද ගැටලුව විසදීම සදහා timetable සකස් කිරීම සදහා වගකිව යුතු team සමග අපි දැනට discuss කරමින් සිටිමු.යම් වෙනසක් තිබේ නම්, we will inform you.So, notification ගැන අවධානයෙන් සිටින්න.' 
  },
 
   { 
    id: 'Pos_UI_0001',  
    name: 'Verify language toggle behavior', 
    input: 'please mata poddak udhav karanna puluvandha?', 
    expected: 'please මට පොඩ්ඩක් උදව් කරන්න පුලුවන්ද?' 
  }

];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    // Input: Singlish text box [cite: 303]
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputArea.pressSequentially(scenario.input, { delay: 30 });

    // Output: The specific results div we found in your DevTools
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // Verification: Real-time update check [cite: 372, 392]
    await expect(outputDiv).not.toBeEmpty({ timeout: 10000 });
    
    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    // Requirements check: Save a screenshot for your report evidence
    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // Status Check
    // Note: For Neg_Fun tests, you might expect the output to be messy
    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}