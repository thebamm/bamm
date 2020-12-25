import React from 'react'
import { IconWavyLine, LogoIcon } from './icons'

const HomeHero = () => {
  return (
    <div className='text-center py-12 md:py-24 relative'>
      <div className='absolute inset-0	-z-1'>
        <IconWavyLine className='test'/>
      </div>

      <LogoIcon className='text-8xl mb-8 text-apple-500'/>
      <h2 className='mb-8'>Get started with <span>bamm</span> today.</h2>
      <p className='text-2xl font-semibold'>Learn and grow while we learn and grow.</p>
    </div>
  )
}

export default HomeHero
