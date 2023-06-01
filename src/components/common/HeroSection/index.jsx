import React from 'react'
import Hero_Section from '../../../assets/hero_main.png'
import Left_Shap from '../../../assets/shap.webp'
import Marker from '../../../assets/mark-heading.webp'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='relative'>
      {/* Shaps */}
      <div className=' absolute top-44'>
        <Image src={Left_Shap} alt='Shap' />
      </div>

      <div className='flex max-w-7xl mx-auto items-center'>
        <div className='w-2/3 relative'>
          <div className=' absolute top-16 left-[180px]'>
            <Image src={Marker} alt='Shap' height={18} />
          </div>
          <div className='h-[100px] w-[100px] rounded-full bg-green-700  opacity-25 absolute -top-28 left-[250px]'></div>
          <h1 className='text-5xl font-semibold leading-relaxed z-10 mb-10 '>
            We find the best <br /> jobs for you{' '}
          </h1>
          <p className='text-gray-400 text-normal font-medium leading-loose'>
            Fill your job in hours, not weeks. Search for free.
          </p>
          <div className='relative'>
            <p className='text-gray-600 text-normal font-medium leading-loose'>
              Popular Searches: Data Scientist, UX design{' '}
            </p>
            <div className='h-[150px] w-[150px] rounded-full bg-green-700  opacity-25 absolute top-28 left-[30px]'></div>
            <div className='h-[200px] w-[200px] rounded-full bg-[#FFD75D] absolute  opacity-50 top-56 left-[450px]'></div>
          </div>
        </div>
        <div className='-mr-[20rem]'>
          <Image src={Hero_Section} alt='Hero Image' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
