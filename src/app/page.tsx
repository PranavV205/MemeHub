import Subreddits from '@/components/Landing/Subreddits'
import Hero from '@/components/Landing/Hero'

function Home() {
  return (
    <div className='bg-[#F5F5F5] min-h-screen'>

      <div className=''>

        <div className='h-[100vh] relative'>
          <Hero />
        </div>

        <div style={{ height: '100vh', position: 'relative' }}>
          <Subreddits />
        </div>

      </div>

    </div>
  )
}

export default Home