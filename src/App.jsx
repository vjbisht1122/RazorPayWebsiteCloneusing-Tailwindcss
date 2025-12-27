import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {
  return (
      <nav className="bg-[#02042a]">
          <div className="relative w-[1080px] mx-auto flex items-center justify-between ">

            <a href="/" className='cursor-pointer py-7 py-8'>
            <img src="./image/logo.svg" alt=""
            width="125px"
            height="30px" />
            </a>
            
             <ul className='flex space-x-6'>
            <li className='text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group'>
              <a href="#">Payments</a>
              <div className='absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block  transition-all duration-200'></div>
            </li>
             <li className='text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group'>
              <a href="#">Banking</a>
              <div className='absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block  transition-all duration-200'></div>
            </li>
             <li className='text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group'>
              <a href="#">Corporate Card</a>
              <div className='absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block  transition -all duration-200'></div>
            </li>
             <li className='text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group'>
              <a href="#">Payroll</a>
              <div className='absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block  transition-all duration-200'></div>
            </li>
             <li className='text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group'>
              <a href="#">Resources</a>
              <div className='absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block  transition-all duration-200'></div>
            </li> 
            <li className='text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group'>
              <a href="#">Support</a>
              <div className='absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block  transition-all duration-200'></div>
            </li>
             <li className='text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group'>
              <a href="#">Pricing</a>
              <div className='absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block  transition-all duration-200'></div>
            </li>
          </ul>

          <div className='flex space-x-6'>

            <img src="./image/india-flag.svg" alt="Not found" width="28px" height="20px"/>
            <button className='bg-[#02042a] text-white py-3 px-5 font-[Mulish] border-[#2b84ea] border rounded-sm text-sm font-bold'>Log in</button>
            <button className='bg-white  py-3 px-4 font-[Mulish] rounded-sm font-bold text-[#4b94ed] border transition-all duration-200 hover:text-[#0b72e7] cursor-pointer '>Sign up</button>

          </div>
          </div>

       
      
    </nav>
  )
}