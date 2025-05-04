import Subreddits from '@/components/Landing/SubredditsCircle'
import Hero from '@/components/Landing/Hero'
import Navbar from '@/components/Navbar'
import RollingG from '@/components/Landing/RollingG'
import TextReveal from '@/components/Landing/TextReveal'
function Home() {
  return (
    <div className=' min-h-screen bg-black'>

      <div className=''>

        <div className='h-[100vh]'>
          <Navbar />
          <Hero />
        </div>


        <div className='h-[100vh]'>
          <TextReveal />
        </div>

        {/* <div className='h-[100vh]'>
          <RollingG />
          </div> */}

      </div>

    </div>
  )
}

export default Home