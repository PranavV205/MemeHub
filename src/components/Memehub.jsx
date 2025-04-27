'use client'

import React, { useState } from 'react'
import subreddits from '@/app/constants/Subreddits'
import useMemeData from '@/app/hooks/useMemeData'

function Hero() {
    return (
        <div className='flex flex-col w-auto md:p-5 lg:p-10'>
            {subreddits
                .sort(() => 0.5 - Math.random())
                .slice(0, 10)
                .map((subreddit) => {
                    return (
                        <React.Fragment key={subreddit}>
                            <b className='text-black text-md md:text-xl lg:text-2xl 4k:text-3xl'>{subreddit}</b>
                            <MemeRow subreddit={subreddit} />
                        </React.Fragment>
                    )
                })}
        </div>
    )
}

function MemeRow({ subreddit }) {

    const [count, setCount] = useState(12)
    const { data: memeData, error } = useMemeData(subreddit, count)

    if (error) {
        return (
            <h3>{error}</h3>
        );
    }

    return (
        <>
            <div className='mb-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
                {memeData ?
                    <MemeCard
                        memeData={memeData}
                    /> :
                    <div>Loading...</div>
                }
            </div>
        </>
    )
}

function MemeCard({ memeData }) {

    const memes = memeData.memes

    return (
        <>
            {memes.map((meme) => {
                return (
                    <div key={meme.url} className='w-full h-50 m-375:h-60 m-400:h-64 md:h-72 xl:h-80 4k:h-96 rounded-lg overflow-hidden bg-gray-800 mb-3 '>
                        <div className='flex justify-center bg-white items-center'>
                            <img className='w-44 h-44 m-375:h-52 m-375:w-52 m-400:h-56 m-400:w-56 md:h-64 md:w-64 xl:h-[280px] xl:w-72 4k:h-[330px] object-contain' src={meme.url} />
                        </div>
                        <h2 className='text-sm xl:text-lg p-2 4k:text-2xl 4k:p-3 text-ellipsis whitespace-nowrap overflow-hidden'>{meme.title}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default Hero