const { test, expect } = require('@playwright/test');

// You can expand this array to include all 34+ required scenarios
const scenarios = [
  { 
    id: 'Neg_Fun_0001', 
    name: 'Incorrect transliteration of brand names', 
    input: 'mama paadam vaeda karanna samsung tab ekak gaththaa.', 
    expected: 'මම පාඩම් වැඩ කරන්න samsung tab එකක් ගත්තා.'
  },
{ 
    id: 'Neg_Fun_0002', 
    name: 'Spelling stress with uppercase letters', 
    input: 'adhath maNYANYAokkaa paeLa bedhuvaa.', 
    expected: ' අදත් මඤ්ඤොක්කා පැළ බෙදුවා.'
  },
{ 
    id: 'Neg_Fun_0003', 
    name: 'URL embedded in Singlish text', 
    input: 'oyaa meaka balannakoo https://google.com', 
    expected: 'ඔයා මේක බලන්නකෝ https://google.com'
  },
{ 
    id: 'Neg_Fun_0004', 
    name: 'Incorrect transliteration of specific words', 
    input: 'image eka save karanna image.jpg kiyalaa', 
    expected: 'image එක save කරන්න image.jpg කියලා'
  },
{ 
    id: 'Neg_Fun_0005', 
    name: 'not identifyisng some character', 
    input: 'mama sellam karanawaa.', 
    expected: 'මම සෙල්ලම් කරනවා.'
  },
 { 
    id: 'Neg_Fun_0006', 
    name: 'No word boundary', 
    input: 'apipansalyannamalkaeduvaaya.', 
    expected: 'අපි පන්සල් යන්න මල් කැඩුවාය.'
  },
{ 
    id: 'Neg_Fun_0007', 
    name: 'Incorrect Capitalization', 
    input: 'mama aBA kanavaa.', 
    expected: 'මම අඹ කනවා.'
},
  {  
    id: 'Neg_Fun_0008', 
    name: 'Foreign Script Mix', 
    input: 'api Naghoya yanavaa.', 
    expected: 'අපි Naghoya යනවා.'
  },
  { 
    id: 'Neg_Fun_0009', 
    name: 'Excessive Spacing', 
    input: 'bath    kamudha?', 
    expected: 'බත් කමුද?'
  },
  { 
    id: 'Neg_Fun_0010', 
    name: ' Code Tag Input', 
    input: '<html>paasala</html>', 
    expected: 'පාසල'
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
    if (scenario.id.startsWith('Neg')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}