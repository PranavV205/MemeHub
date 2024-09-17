import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react'


function MemeCard({count, memeData}) {

    const memes = memeData.memes

    const [isExpanded, setIsExpanded] = useState(false)

    const handleExpandClick = () =>  {
        setIsExpanded(prev => !prev)
    }


    

  return (
    <>
        {memes.map((meme) => {
            return (
                <div className='h-80 w-80 rounded-xl overflow-hidden bg-[#660c65]'>
                    <div className='flex justify-center bg-black'>
                        <img className='w-64 h-64 object-contain mb-3' src={meme.url}/>
                    </div>
                    <div className='flex flex-row'>
                        <h2 className='text-sm ml-3'>{meme.title}</h2>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default MemeCard