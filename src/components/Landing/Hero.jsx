import React from 'react'
import Subreddits from './SubredditsCircle'

function Hero() {
    return (
        <div className='w-full h-[95%] flex flex-row'>

            <div className='flex h-full items-center w-[30%] justify-center'>
                <h2 className='text-8xl'>
                    Explore <br />
                    memes <br />
                    across <br />
                    r/subreddits <br />
                </h2>
            </div>

            <div className='w-[70%]  flex justify-center items-center '>
                <Subreddits />
            </div>

        </div>
    )
}

export default Hero