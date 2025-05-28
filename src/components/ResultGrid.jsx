import Image from 'next/image'
import React from 'react'

function ResultGrid({ memes }) {
    console.log(memes[0])
    return (
        <div
            className='grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-8'
        >
            {memes && (
                memes.map(meme => (
                    <div className='bg-amber-100 rounded-md overflow-hidden' key={meme.postLink}>
                        <div className='relative aspect-square'>
                            <Image fill src={meme.url} alt={meme.title} />
                        </div>
                        <p className='p-1 text-black text-ellipsis text-nowrap overflow-hidden'>{meme.title}</p>
                    </div>
                ))
            )}
        </div>
    )
}

export default ResultGrid