import {useState, useEffect, useRef} from 'react'
import { Outlet, NavLink } from 'react-router-dom';

function Layout() {

  return (
    <>
      {/* Large Header */}
      <header 
        className='bg-[#f7f6ee] text-[#101820] flex m-5 rounded-lg '>
          <div className='w-full py-2 md:py-3 lg:py-4 xl:py-6 4k:py-10 flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl 4k:text-9xl'><b>Meme Hub</b></h1>
            <NavLink 
              className=" rounded-lg text-sm underline md:text-xl md:mt-1 lg:text-2xl xl:text-3xl 4k:mt-4 4k:text-5xl" 
              to="/memegen"
            >Build a meme</NavLink>
          </div>
          <form className='flex justify-center items-center w-full'>
            <div className='mx-5 relative flex items-center'>
              <input 
                type='search' 
                name='sub' 
                placeholder='Enter Subreddit' 
                className='rounded-lg text-sm w-full py-1 pl-1 pr-7 bg-[#ecebdf] text-ellipsis appearance-none border-none outline-none md:p-2 md:pr-10 md:text-xl lg:text-2xl lg:p-3 lg:pr-14 xl:pr-16 xl:p-4 4k:text-3xl 4k:pr-20 4k:p-5 custom-input'
              />
              <button 
                type='submit'
                className='absolute right-1 p-1 h-full rounded-xl md:p-2 md:text-xl lg:text-2xl lg:p-3 xl:text-3xl xl:p-4 4k:text-3xl 4k:p-5'
              ><i class='bx bx-search-alt-2'></i></button>
            </div>
          </form>
              
        
      </header>
      <Outlet />
    </>
  )
}

export default Layout