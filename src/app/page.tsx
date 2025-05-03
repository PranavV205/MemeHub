import Subreddits from '@/components/Landing/SubredditsCircle'
import Hero from '@/components/Landing/Hero'
import Navbar from '@/components/Navbar'

function Home() {
  return (
    <div className=' min-h-screen bg-black'>

      <div className=''>

        <div className='h-[100vh]'>
          <Navbar />
          <Hero />
        </div>

      </div>

    </div>
  )
}

export default Home