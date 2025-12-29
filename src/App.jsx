import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {
  return (
    <div> 


     {/*navbar section*/}
      <nav className="bg-[#02042a]">
          <div className="relative w-[270] mx-auto flex items-center justify-between ">

            <a href="/" className='cursor-pointer px-7 py-8'>
            <img src="./images/logo.svg" alt=""
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

            <img src="./images/india-flag.svg" alt="Not found" width="28px" height="20px"/>
            <button className='bg-[#02042a] text-white py-3 px-5 font-[Mulish] border-[#2b84ea] border rounded-sm text-sm font-bold'>Log in</button>
            <button className='bg-white  py-3 px-4 font-[Mulish] rounded-sm font-bold text-[#4b94ed] border transition-all duration-200 hover:text-[#0b72e7] cursor-pointer '>Sign up</button>

          </div>
          </div>
      </nav>

    {/*hero section*/}
    <section className='relative bg-[rgb(2,4,42)] '>

      <div className='w-[83.33%] max-w-270 flex flex-row justify-between items-center mx-auto'>
        {/* left part */}
        <div className='space-y-8 '>
          <h1 className='font-[mullish] font-bold text-[40px] leading-[1.2] text-white'>Power your finance,</h1>
          <h1 className='font-[mullish] font-bold text-[40px] leading-[1.2] text-white'>grow your business</h1>
          <div className='h-1 w-7 bg-[#61cea6]'></div>
          <p className='font-[mullish] text-[18px] leading-7  text-white opacity-70'>Accept payment from customers. Automates payouts to vendors & employees. Never run out of working capital.</p>
          <button className='bg-[#4b94ed] text-white rounded-md font-[mullish] font-bold cursor-pointer hover:bg-[#2b84ea] transition-all duration-200 py-4.5 px-3.5'>Sign Up Now</button>
        </div>

         {/* right part*/}
          <img src="./images/hero-illustration.jpg" alt="" className='max-w-170 ' />
      </div>

      {/* shape image part*/}
          
          <div className='w-[100.05%] absolute left-0 right-0  '>
            <img src="./images/hero-shape.svg" alt="" className='w-full object-fill scale-x-100' />
          </div>
          


    </section>



    
    
    {/*ending div */}
    </div> 
  )
}