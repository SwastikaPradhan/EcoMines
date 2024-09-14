'use client';  // Add this directive

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';  // Use Next.js useRouter
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GridBackgroundDemo } from './GridBackgroundDemo';  // Adjust the import path

const Slider = dynamic(() => import('react-slick'), { ssr: false });

function Cards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const [autoPlay, setAutoPlay] = React.useState(true);

  const pauseAutoPlay = () => {
    setAutoPlay(false);
  };

  const resumeAutoPlay = () => {
    setAutoPlay(true);
  };

  const router = useRouter();  // Initialize useRouter for Next.js navigation

  const handleClickMore = (title) => {
    if (title === 'AFFORESTATION') {
      router.push('/');  // Navigate to the AfforestationAnalytics page
    }
    // Add handling for other titles if needed
  };

  return (
    <GridBackgroundDemo>
      <div className='w-3/4 m-auto'>
        <div className='mt-20'>
          <h2 className='text-2xl font-bold text-center mb-8 text-white'>
            Comprehensive Solutions for <span className='text-green-600'>Sustainable Environmental</span> Management
          </h2>
          <Slider
            {...settings}
            autoplay={autoPlay}
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            {data.map((d) => (
              <div className='bg-gradient-to-r from-gray-800 to-black text-white rounded-xl border-2 border-gray-900 shadow-md' key={d.title}>
                <div className='h-56 rounded-t-xl bg-gradient-to-r from-indigo-800 to-violet-900 flex justify-center items-center'>
                  <img src={d.img} alt={d.title} className='h-44 w-44 rounded-full border-2 border-white' />
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{d.title}</p>
                  <p className='text-justify-self-center'>{d.description}</p>
                  <button
                    className='bg-gray-900 text-white text-lg px-6 py-1 rounded-xl border-2 border-yellow-300 hover:bg-yellow-300 hover:bg-opacity-35 hover:text-gray-900 transition duration-300 ease-in-out'
                    onClick={() => handleClickMore(d.title)}  // Add onClick event
                  >
                    Click More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </GridBackgroundDemo>
  );
}

const data = [
  {
    title: 'DATA COLLECTION',
    img: '/datacollection.png',
    description: 'Enter your chosen dataset for carbon footprint estimation'
  },
  {
    title: 'EMISSION ESTIMATION',
    img: '/gas-emissions-calculator-glyph-two-color-icon-vector.jpg',
    description: 'ML Model that calculates the emission estimate'
  },
  {
    title: 'AFFORESTATION',
    img: '/OIP.jpeg',
    description: 'Display afforestation analytics'
  },
  {
    title: 'CARBON CREDITS',
    img: '/CARBONCREDITS.png',
    description: 'Displays the Carbon Credit Score of the coal mine'
  }
];

export default Cards;

