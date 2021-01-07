import React from 'react'
import { LogoIcon } from './icons'

const HomeHero = () => {
  return (
    <div className='text-center px-4 py-12 md:py-24 relative'>
      <div className='absolute max-w-full overflow-hidden inset-0 opacity-20 -z-1'>
        <svg
          className='h-full absolute bottom-0 left-1/2 transform -translate-x-2/4 text-denim-500'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,32L24,32C48,32,96,32,144,53.3C192,75,240,117,288,133.3C336,149,384,139,432,160C480,181,528,235,576,250.7C624,267,672,245,720,213.3C768,181,816,139,864,117.3C912,96,960,96,1008,117.3C1056,139,1104,181,1152,208C1200,235,1248,245,1296,213.3C1344,181,1392,107,1416,69.3L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"/>
        </svg>
      </div>

      <LogoIcon className='text-8xl mb-8 text-apple-500'/>
      <h2 className='mb-8'>Start learning with <span>bamm</span> today</h2>
      <p className='text-2xl font-semibold'>Learn and grow while we learn and grow</p>
    </div>
  )
}

export default HomeHero
