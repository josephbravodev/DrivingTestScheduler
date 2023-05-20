import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

 export default async function MYDICK()  {
  const url = 'https://ilsosappt.cxmflow.com/Appointment/Index/dbe30824-497b-4325-8c5f-68b146a5e898'
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // Click the button with dataid="1"
  const button = await page.$('[dataid="1"]');
  if (button) {
    await button.click();
  } else {
    console.log('ERR: UNABLE TO FETCH');
    console.log('ERR: Button not found');
  }
  
  await page.waitForNavigation();
  // Extract the data you need from the page
  const data = await page.evaluateHandle(() => {
    return document.body;
  });

  console.log(data);

  // Close browser.
  await browser.close();
};

MYDICK()
