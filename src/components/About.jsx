import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
    id='About'>
        <h1 className='text-2xl sm:text-4x1 font-bold mb-2'>About<span 
        className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your vision</p>
<div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
<img src={assets.brand_img} alt='' className='w-full sm:w-1/2 max-w-lg' />
<div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
<div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2x1:pr-28'>
    <div>
        <p className='text-4x1 font-medium text-gray-800'>10+</p>
        <p>Years of Excellence</p>
    
</div>
<div>
        <p className='text-4x1 font-medium text-gray-800'>12+</p>
        <p>Years of Completed</p>
  
</div>
<div>
        <p className='text-4x1 font-medium text-gray-800'>20+</p>
        <p>Mn Sq. ft, Delivered</p>
    </div>
    <div>
        <p className='text-4x1 font-medium text-gray-800'>25+</p>
        <p>Ongoing Projecct</p>
    </div>
</div>
</div>
</div>
    </div>
  )
}

export default About