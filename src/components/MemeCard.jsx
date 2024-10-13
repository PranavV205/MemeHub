import React, { useState } from 'react'


function MemeCard({memeData}) {

    const memes = memeData.memes 

  return (
    <>
        {memes.map((meme) => {
            return (
                <div className='h-80 w-80 rounded-xl overflow-hidden bg-gray-800'>
                    <div className='flex justify-center bg-[#121316] items-center'>
                        <img className='w-64 h-64 object-contain' src={meme.url}/>
                    </div>
                    <div className='flex flex-row'>
                        <h2 className='text-sm ml-3 mt-3'>{meme.title}</h2>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default MemeCard