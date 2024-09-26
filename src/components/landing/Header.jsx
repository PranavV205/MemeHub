import {useState, useEffect} from 'react'

import bgimg from '../../assets/bg.jpeg'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5; // 10% of the viewport height
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Large Header */}
      <header className={`flex justify-between items-center bg-[#191d23] text-[#d8cfcf] mb-8 h-96 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} style={{ fontFamily: 'Anton' }}>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-9xl">MEME</h1>
          <h1 className="text-9xl">HUB</h1>
          <div className='flex flex-row text-[#6d7275] gap-6 mt-5'>
            <a href='/#/about'>About</a>
            <a href='/#/developer'>Developer</a>
            <a href='/#/memegen'>Create your own meme!</a>
          </div>
        </div>
        <img src={bgimg} className="h-full" alt="Meme Hub Background" />
      </header>

      {/* Small Sticky Header */}
      <header className={`fixed top-0 left-0 w-full bg-[#161618] text-white h-16 flex justify-center items-center shadow-lg transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`} style={{ fontFamily: 'Anton' }}>
        <h1 className="text-4xl">MEME HUB</h1>
      </header>
    </div>
  )
}

export default Header