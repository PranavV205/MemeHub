import useMemeData from '../hooks/useMemeData'
import MemeCard from './MemeCard'

function Subreddit({subreddit}) {

    const {data:memeData} = useMemeData(subreddit, 20)

    if (memeData?.code === 400 || memeData?.code === 404){
        return (
            <div className='m-5 lg:m-10 text-2xl gap-2 lg:text-3xl lg:gap-3 4k:text-4xl 4k:gap-4 flex flex-col justify-center items-center'>
                <h3>{memeData.message}</h3>
                <p>Go to <a className='underline' href='/'>Meme Hub</a></p>
            </div>
        )
    }

  return (
    <div className='m-10 flex flex-col items-center mb-4 md:grid md:grid-cols-4 md:grid-rows-5 md:gap-4 xl:gap-8 4k:gap-11'>
        {memeData ? 
            <MemeCard
                memeData={memeData}
            /> : 
            <div>Loading...</div>
        }
    </div>
  )
}

export default Subreddit