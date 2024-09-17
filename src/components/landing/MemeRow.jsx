import {useState} from 'react'
import useMemeData from '../../hooks/useMemeData'

import MemeCard from './MemeCard'

function MemeRow({subreddit}) {
  
  const [count, setCount] = useState(4)
  const {data:memeData, isLoading, error} = useMemeData(subreddit, count)

  return (
    <div className='flex flex-col justify-center mb-7 shadow-lg'>
      <div className='flex w-auto justify-center m-3'>
        <b className='mb-2 text-xl'>{subreddit}</b>
      </div>
      <div className='flex justify-center flex-row gap-5 mb-6'>
      {memeData ? 
        <MemeCard 
            count={count} 
            memeData={memeData}
        /> : 
        <div>Loading...</div>
      }
      </div> 
    </div>
  )
}

export default MemeRow