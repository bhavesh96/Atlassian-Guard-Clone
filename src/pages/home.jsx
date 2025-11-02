import React from 'react'
import Navbar from './componets/navbar'
import HeroSection from './componets/heroSection'
import MeetGuardSection from './componets/meetGuard'
import PdrSection from './componets/pdrSection'
import Footer from './componets/footer'


const Home = () => {

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Navbar />
      <HeroSection />
      <MeetGuardSection />
      <PdrSection />
      <Footer />      
    </div>
  )

}

export default Home