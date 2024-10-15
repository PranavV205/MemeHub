import {useState} from 'react'
import useMemeData from '../hooks/useMemeData'

import MemeCard from './MemeCard'

function MemeRow({subreddit}) {
  
  const [count, setCount] = useState(4)
  const {data:memeData, error} = useMemeData(subreddit, count)

  if (error) return <><h3>{error}</h3></>

  return (
      <div className='flex justify-center flex-row gap-5'>
      {memeData ? 
        <MemeCard
            memeData={memeData}
        /> : 
        <div>Loading...</div>
      }
      </div> 
  )
}

export default MemeRow