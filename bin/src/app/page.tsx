import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import Image from 'next/image';

export default function Home() {
  const hai = async () => {
    const url = 'https://ilsosappt.cxmflow.com/Appointment/Index/dbe30824-497b-4325-8c5f-68b146a5e898'
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //launches page
    await page.goto(url);
    // goes to website
    await page.evaluate(() => {
      // wait for reading of page, aka this whole funcition
      const button = document.querySelector('[data-id="1"]') as HTMLButtonElement;
      if (button) {
        button.click();
      } else {
        console.log('ERR: UNABLE TO FETCH');
        console.log('ERR: Button not found');
      }
    });
    //Finds the button and clicks, if not found then err
    
    await page.waitForNavigation();
    const data = await page.content()
    //wait for the DOM to be loaded before creating const
  
    console.log(data);
  
    // Logs the data
    await browser.close();
  };
  
  hai()
  return (
    <main>
      <div className='flex justify-center bg-blue-500 text-white text-6xl'>
        <h1 className='m-10'>ScheduleMyILDrivingTest</h1>
      </div>
      <div className='flex justify-center mt-12 mx-10 text-2xl'>
        <p>Schedule your Illinois Driver Test with ease. Choose from available dates or set up notifications for upcoming openings. Take control of your testing experience.</p>
      </div>
      <div className='flex justify-center mt-12 mx-10'>
        <a href='' className='bg-gray-400 border rounded-lg px-10 py-5'>
          <button className=''>
            <span className='text-3xl'>Select A Facility</span>
          </button>
        </a>
      </div>
      <div>
      </div>
    </main>
  );
}