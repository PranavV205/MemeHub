import React from 'react'
import Subreddits from './SubredditsCircle'

function Hero() {
    return (
        <div className='w-full h-[95%] flex flex-row px-[2rem] max-w-[100rem] mx-auto'>

            <div className='flex h-full items-center w-[30%]'>
                <h2 className='text-8xl'>
                    Explore <br />
                    memes <br />
                    across <br />
                    r/subreddits <br />
                </h2>
            </div>

            <div className='w-[70%] flex justify-end'>
                <div className='w-[90vmin] h-[90vmin] aspect-square flex justify-center items-center '>
                    <Subreddits />
                </div>
            </div>

        </div>
    )
}

export default Hero