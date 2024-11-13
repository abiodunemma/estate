import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

function Navbar() {
  const [showMobileManu, setShowMobileManu] = useState(false)

  useEffect(()=>{
    if(showMobileManu){
      document.body.style.overflow = 'hidden'
    }else{
       document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };
  }, [showMobileManu])
  return (
    <div className='absolute top-0 w-full z-10'>
<div className='container mx-auto flex justify-between
items-center py-4 px-6 md:px-20 lg:px-32
bg-transparent'>
    
    <img src={assets.logo} alt="" />
    <ul className='hidden md:flex gap-7 text-white'>
        <a href="#header" className='cursor-pointer
        hover:text-gray-400'>Home</a>
         <a href="#About" className='cursor-pointer
        hover:text-gray-400'>About</a>
         <a href="#projects" className='cursor-pointer
        hover:text-gray-400'>projects</a>
         <a href="#Testtimonials" className='cursor-pointer
        hover:text-gray-400'>Testtimonials</a>
    </ul>
    <button className='hidden md:block bg-white px-8
    py-2 rounded-full'>Sign up</button>
    <img onClick={()=> setShowMobileManu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt='' />
</div>
{/* -------- mobile menu------- */}
<div className={`md:hidden ${showMobileManu ? 'fixed w-full' : 'h-0 w-0' }  right-0 top-0 bottom-0
overflow-hidden bg-white transition-all`}>
  <div className='flex justify-end p-6 cursor-pointer'>
    <img onClick={()=> setShowMobileManu(false)} src={assets.cross_icon} className='w-6' alt='' />
  </div>
  <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg
  font-medium'>
    <a onClick={()=> setShowMobileManu(false)} href='#Header' className='px-4 py2 rounded-full inline-block'>Home</a>
    <a onClick={()=> setShowMobileManu(false)} href='#About' className='px-4 py2 rounded-full inline-block'>About</a>
    <a onClick={()=> setShowMobileManu(false)} href='#Projects' className='px-4 py2 rounded-full inline-block'>projects</a>
    <a onClick={()=> setShowMobileManu(false)} href='#Testimonails' className='px-4 py2 rounded-full inline-block'>Testtimonials</a>
  </ul>
</div>
    </div>
  )
}

export default Navbar