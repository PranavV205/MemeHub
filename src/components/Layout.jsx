import {useState, } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import Subreddit from './Subreddit';

function Layout() {

  const [inputValue, setInputValue] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue){
      setIsSubmitted(false)
      setTimeout(() => setIsSubmitted(true), 0)
    }
  }

  const handleBuildMemeClick = () => {
    setInputValue("")
    setIsSubmitted("")
    navigate("/memegen")
  }

  return (
    <>
      {/* Large Header */}
      <header 
        className='bg-[#f7f6ee] text-[#101820] flex m-5 lg:m-10 rounded-lg '>
          <div className='w-full py-2 md:py-3 lg:py-4 xl:py-6 4k:py-10 flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-5xl lg:text-6xl xl:text-7xl 4k:text-9xl'><b><a href='/'>Meme Hub</a></b></h1>
            <NavLink 
              className=" rounded-lg text-sm underline md:text-xl md:mt-1 lg:text-2xl xl:text-3xl 4k:mt-4 4k:text-5xl" 
              to="/memegen"
              onClick={handleBuildMemeClick}
            >Build a meme</NavLink>
          </div>
          <form onSubmit={handleSubmit}className='flex justify-center items-center w-full'>
            <div className='mx-5 relative flex items-center'>
              <input 
                type='text' 
                name='sub' 
                placeholder='Enter Subreddit' 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className='rounded-lg text-sm w-full py-1 pl-1 pr-7 bg-[#ecebdf] text-ellipsis appearance-none border-none outline-none md:p-2 md:pr-10 md:text-xl lg:text-2xl lg:p-3 lg:pr-14 xl:pr-16 xl:p-4 4k:text-3xl 4k:pr-20 4k:p-5 custom-input'
              />
              <button 
                type='submit'
                className='absolute right-1 p-1 h-full rounded-xl md:p-2 md:text-xl lg:text-2xl lg:p-3 xl:text-3xl xl:p-4 4k:text-3xl 4k:p-5'
              ><i className='bx bx-search-alt-2'></i></button>
            </div>
          </form>
      </header>

      {isSubmitted ? <Subreddit subreddit={inputValue} /> : <Outlet /> }

    </>
  )
}

export default Layout