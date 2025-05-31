import Image from 'next/image'
import React from 'react'

function ResultGrid({ memes }) {
    console.log(memes[0])
    return (
        <div
            className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8'
        >
            {memes && (
                memes.map(meme => (
                    <div className='bg-[#f5f5f5] rounded-md overflow-hidden' key={meme.postLink}>
                        <div className='relative aspect-[5/4]'>
                            <Image fill src={meme.url} alt={meme.title} quality={100} />
                        </div>
                        <p className='text-sm lg:text-lg p-1 text-black text-ellipsis text-nowrap overflow-hidden'>{meme.title}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default ResultGrid