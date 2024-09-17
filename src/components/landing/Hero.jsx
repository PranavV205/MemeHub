import React, { useEffect, useState } from 'react'

import MemeRow from './MemeRow'

import { subreddits } from '../../constants/subreddit'

function Hero() {
    

    
    return (
        <>
            <div className='flex flex-col w-auto'>
                {subreddits.map((subreddit) => {
                    return (
                        <MemeRow subreddit={subreddit}/>
                    )
                })}
            </div>
        </>
    )
}

export default Hero
