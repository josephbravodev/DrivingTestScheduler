import puppeteer from 'puppeteer';

 const hai = async() => {
  const url = 'https://ilsosappt.cxmflow.com/Appointment/Index/dbe30824-497b-4325-8c5f-68b146a5e898'
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //launches page
  await page.goto(url);
  // goes to website

  await page.evaluate(() => {
   const haha = document.querySelector('[data-id="1"]') as HTMLButtonElement;
   if (haha) {
    haha.click();
   } else {
    console.log("errormsg");
   }
  });
  await page.waitForNavigation();

  await page.evaluate(() => {
    const haha = document.querySelector('[data-id="5"]') as HTMLButtonElement;
    if (haha) {
     haha.click();
    } else {
     console.log("errormsg");
    }
   });
   await page.waitForNavigation();

   await page.evaluate(() => {
    const haha = document.querySelector('[data-id="117"]') as HTMLButtonElement;
    if (haha) {
     haha.click();
    } else {
     console.log("errormsg");
    }
   });

  await page.waitForNavigation();

  const data = await page.content();

  console.log(data);

  await browser.close();
}

 export default hai;