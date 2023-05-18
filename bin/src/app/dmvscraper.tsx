import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://ilsosappt.cxmflow.com/Appointment/Index/dbe30824-497b-4325-8c5f-68b146a5e898'

async function getData() {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData()