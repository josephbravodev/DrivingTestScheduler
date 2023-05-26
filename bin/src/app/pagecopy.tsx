import Image from 'next/image';
import hai from './dmvscraper';
import { render } from 'react-dom';
import React from 'react'

export default function pagecopy(){
  return (
    <main>
      <div className='flex justify-center bg-blue-500 text-white text-6xl'>
        <h1 className='m-10'>ScheduleMyILDrivingTest</h1>
      </div>
      <div className='flex justify-center mt-12 mx-10 text-2xl'>
        <p>Please select a time slot</p>
      </div>
      <div className='flex justify-center mt-12 mx-10'>
        <a href='' className='bg-gray-400 border rounded-lg px-10 py-5'>
          <button className=''>
            <span className='text-3xl'>8:00 AM</span>
          </button>
        </a>
        <a href='' className='bg-gray-400 border rounded-lg px-10 py-5'>
          <button className=''>
            <span className='text-3xl'>9:00 AM</span>
          </button>
        </a>
        <a href='' className='bg-gray-400 border rounded-lg px-10 py-5'>
          <button className=''>
            <span className='text-3xl'>10:00 AM</span>
          </button>
        </a>
        <a href='' className='bg-gray-400 border rounded-lg px-10 py-5'>
          <button className=''>
            <span className='text-3xl'>11:00 AM</span>
          </button>
        </a>
        <a href='' className='bg-gray-400 border rounded-lg px-10 py-5'>
          <button className=''>
            <span className='text-3xl'>12:00 AM</span>
          </button>
        </a>
      </div>
      <div>
      </div>
    </main>
  );
}