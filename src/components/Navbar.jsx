'use client'

import Link from 'next/link'
import { useState } from 'react'

function Navbar() {

    const [input, setInput] = useState('')

    return (
        <div className='flex justify-between items-center p-2 h-[5%]'>
            <div>
                <h1 className='text-3xl'>MemeHub</h1>
            </div>
            <div>
                <h3 className='text-2xl cursor-pointer'>Meme Generator</h3>
            </div>
            <div>
                <input
                    className='bg-white rounded-xl pl-4 text-black focus:outline-none'
                    placeholder='Search'
                />
            </div>
        </div>
    )
}

export default Navbar
