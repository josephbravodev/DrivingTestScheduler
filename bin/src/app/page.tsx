import Image from 'next/image';
import hai from './dmvscraper';
import { render } from 'react-dom';
import Link from 'next/link';
const pagecopy = () => {
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
        <button className='bg-gray-400 border rounded-lg px-10 py-5'>
          <Link href='pagecopy' className='text-3xl'>Bridgeview</Link>
        </button>
        <script></script>
      </div>
      <div>
      </div>
    </main>
  );
}