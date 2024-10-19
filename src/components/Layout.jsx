import {useState, useEffect, useRef} from 'react'
import { Outlet, NavLink } from 'react-router-dom';

import bgimg from "../assets/bg.jpeg"

function Layout() {

  return (
    <>
      {/* Large Header */}
      <header 
        className='bg-[#f7f6ee] text-[#101820] flex flex-col m-5 sm:m-10 rounded-2xl overflow-hidden shadow-2xl md:flex-row'>
        <div className='w-full h-full'>
          <img src={bgimg} className='h-full'/>
        </div>
        <div className='w-full py-2 flex flex-col justify-center items-center'>
          <h1 className='text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl'>Meme Hub</h1>
          <div className='flex flex-col mt-2 items-center justify-center text-md lg:text-xl lg:gap-1 2xl:text-2xl 2xl:gap-2 4k:text-3xl 4k:gap-4'>
            <NavLink className=" rounded-lg " to="/memegen">Create your own meme!</NavLink>
            <NavLink className=" rounded-lg " to="/sub">Broken</NavLink>
            <NavLink className=" rounded-lg " to="/sub">Broken</NavLink>
            <NavLink className=" rounded-lg " to="/sub">Broken</NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Layout