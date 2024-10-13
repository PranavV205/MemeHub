import {useState, useEffect, useRef} from 'react'

function Header() {

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
      <header className={`flex justify-between items-center bg-[#022954] text-white mb-8 h-96 transition-opacity duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} style={{ fontFamily: 'Anton' }}>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-9xl">MEME</h1>
          <h1 className="text-9xl">HUB</h1>
          <div className='flex text-white gap-6 mt-5'>
            <a href='/MemeHub/#/about'>About</a>
            <a href='/MemeHub/#/developer'>Developer</a>
            <a href='/MemeHub/#/memegen'>Create your own meme!</a>
          </div>
        </div>
        <form className='h-full w-full flex flex-col justify-center items-center'>
          <label 
            htmlFor='sub' 
            className='text-xl mb-2 '
          >Enter subreddit name:</label>
          <input 
            type='search' 
            placeholder='GymMemes' 
            name='sub' 
            className='rounded-lg p-3 bg-black'
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button
            type='submit'
            className='mt-2 text-2xl bg-black py-1 px-3 rounded-lg'
          >Search</button>
        </form>
      </header>

      {/* Small Sticky Header */}
      <header className={`fixed top-0 left-0 w-full bg-[#022954] text-white h-16 flex justify-center items-center transition-transform duration-300 ${isScrolled ?'translate-y-0' : '-translate-y-full'}`} style={{ fontFamily: 'Anton' }}>
        <h1 className="text-4xl">MEME HUB</h1>
      </header>
    </>
  )
}

export default Header