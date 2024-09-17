import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center sticky top-0 bg-[#640062] text-[#feea00] mb-8' style={{'fontFamily':'Anton'}}>
      <div className='w-[18%]'></div>      
      <h1 style={{'fontFamily':'Anton', 'fontWeight': 'bold'}} className='text-4xl my-4'>Meme Hub</h1>      
      <button className='text-xl w-[18%]'>Make your own</button>     
    </header>
  )
}

export default Header