import {useState, useEffect, useRef} from 'react'
import { Outlet, NavLink } from 'react-router-dom';

import bgimg from "../assets/bg.jpeg"

function Layout() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5; // 50% of the viewport height
      if (window.scrollY > threshold) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);


  return (
    <>
      {/* Large Header */}
      <header className='bg-[#000000] text-[#000000] flex m-10 rounded-2xl overflow-hidden shadow-2xl'>
        <div className='w-full h-full'>
          <img src={bgimg} className='h-full'/>
        </div>
        <div className='w-full h-full py-6 flex flex-col justify-center items-center'>
          <h1 className='text-9xl'>Meme Hub</h1>
          <div className='flex flex-col ml-5 mt-5 items-center gap-2'>
            <NavLink className="text-2xl bg-blue-50 rounded-lg text-[#000000] py-1 px-3" to="/memegen">Create your own meme!</NavLink>
            <NavLink className="text-2xl bg-blue-50 rounded-lg text-black py-1 px-3" to="/sub">Broken</NavLink>
            <NavLink className="text-2xl bg-blue-50 rounded-lg text-black py-1 px-3" to="/sub">Broken</NavLink>
            <NavLink className="text-2xl bg-blue-50 rounded-lg text-black py-1 px-3" to="/sub">Broken</NavLink>
          </div>
        </div>
      </header>

      {/* Small Sticky Header */}
      <header className={`fixed top-0 left-0 w-full bg-[#022954] text-white h-16 flex justify-center items-center transition-transform duration-300 ${isScrolled ?'translate-y-0' : '-translate-y-full'}`} style={{ fontFamily: 'Anton' }}>
        <h1 className="text-4xl">MEME HUB</h1>
      </header>
      <Outlet />
    </>
  )
}

export default Layout