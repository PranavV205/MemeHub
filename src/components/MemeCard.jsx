

function MemeCard({memeData}) {

    const memes = memeData.memes 

  return (
    <>
        {memes.map((meme) => {
            return (
                <div className='w-full h-50 m-375:h-60 m-400:h-64 md:h-72 xl:h-80 4k:h-96 rounded-lg overflow-hidden bg-gray-800 mb-3 '>
                    <div className='flex justify-center bg-[#121316] items-center'>
                        <img className='w-44 h-44 m-375:h-52 m-375:w-52 m-400:h-56 m-400:w-56 md:h-64 md:w-64 xl:h-[280px] xl:w-72 4k:h-[330px] object-contain' src={meme.url}/>
                    </div>
                    <h2 className='text-sm xl:text-lg p-2 4k:text-2xl 4k:p-3 text-ellipsis whitespace-nowrap overflow-hidden'>{meme.title}</h2>
                </div>
            )
        })}
    </>
  )
}

export default MemeCard