import MemeRow from './MemeRow'

import { subreddits } from '../constants/subreddit'
import Divider from '@mui/material/Divider'

function Hero() {
    

    
    return (
        <>
            <div className='flex flex-col w-auto m-10'>
                {subreddits.map((subreddit) => {
                    return (
                        <>
                            <Divider variant='middle' sx={{ marginBottom: '14px', "&::before, &::after": {
                            borderColor: 'white',  // Makes the line white
                        } }}><b className='text-xl'>{subreddit}</b></Divider>
                            <MemeRow subreddit={subreddit}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Hero
