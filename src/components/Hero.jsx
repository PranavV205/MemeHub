import React from 'react'
import MemeRow from './MemeRow'

import { subreddits } from '../constants/subreddit'

import Divider from '@mui/material/Divider'


function Hero() {

    
    return (
            <div className='flex flex-col w-auto md:m-5 lg:m-10'>
                {subreddits
                .sort(() => 0.5 - Math.random())
                .slice(0, 10)
                .map((subreddit) => {
                    return (
                        <React.Fragment key={subreddit}>
                            <Divider variant='middle' sx={{ marginBottom: '14px', "&::before, &::after": {
                            borderColor: 'white',  // Makes the line white
                            } }}><b className='text-md md:text-xl lg:text-2xl 4k:text-3xl'>{subreddit}</b></Divider>
                            <MemeRow subreddit={subreddit}/>
                        </React.Fragment>
                    )
                })}
            </div>
    )
}

export default Hero