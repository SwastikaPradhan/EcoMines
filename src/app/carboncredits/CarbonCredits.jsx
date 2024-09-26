'use client'; // This makes the component a Client Component

import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import dynamic from 'next/dynamic'; // Dynamic import for Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically load the Slider component without SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CarbonCredits = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
  };

  const [autoPlay, setAutoPlay] = useState(true);

  const pauseAutoPlay = () => {
    setAutoPlay(false);
  };

  const resumeAutoPlay = () => {
    setAutoPlay(true);
  };

  return (
    <div className='w-3/4 m-auto'>
      {/* Heading section */}
      <div className='bg-green-800 text-white flex justify-between items-center py-6 rounded-t-xl px-4'>
        <div className='text-left'>
          <h1 className='text-3xl font-bold'>Available Carbon Credit Lands</h1>
          <p className='text-lg mt-2'>Explore and purchase lands to increase your carbon credits.</p>
        </div>
        <div className='text-3xl cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out'>
          <FiFilter />
        </div>
      </div>

      {/* Slider */}
      <div className='mt-10'>
        <Slider {...settings}
          autoplay={autoPlay}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}>
          {data.map((d) => (
            <div className='bg-gradient-to-r from-gray-800 to-black text-white rounded-xl border-2 border-gray-900 shadow-md' key={d.title}>
              <div className='h-56 rounded-t-xl bg-gradient-to-r from-yellow-400 to-green-500 flex justify-center items-center'>
                <img src={d.img} alt='' className='h-44 w-44 rounded-full border-2 border-white' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.title}</p>
                <p className='text-center'>{d.description}</p>
                <button className='bg-gray-900 text-white text-lg px-6 py-1 rounded-xl border-2 border-yellow-300 hover:bg-yellow-300 hover:bg-opacity-35 hover:text-gray-900 transition duration-300 ease-in-out'>
                  Buy Now!
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  { title: 'ROHIT', img: '/afforestationland.png', description: 'Land Area: 150 hectares, Cost: 1,40,000, Credits: 500' },
  { title: 'AMAN', img: '/afforestationland.png', description: 'Land Area: 1500 hectares, Cost: 2,00,000, Credits: 1500' },
  { title: 'SRISHTI', img: '/afforestationland.png', description: 'Land Area: 200 hectares, Cost: 80,000, Credits: 800' },
  { title: 'SHRUTI', img: '/afforestationland.png', description: 'Land Area: 1200 hectares, Cost: 1,80,000, Credits: 800' }
];

export default CarbonCredits;
