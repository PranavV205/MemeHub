import {useState} from 'react'
import useMemeData from '../hooks/useMemeData'

import MemeCard from './MemeCard'

function MemeRow({subreddit}) {
  
  const [count, setCount] = useState(4)
  const {data:memeData, error} = useMemeData(subreddit, count)

  if (error) {
    return (
      <h3>{error}</h3>
    );
  }

  return (
      <>
        <div className='flex flex-col items-center mb-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 xl:flex xl:flex-row xl:grid-rows-none xl:grid-cols-none xl:gap-8 4k:gap-11'>
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

export default MemeRow