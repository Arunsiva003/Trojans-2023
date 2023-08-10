import React from 'react'
import HomeIntro from './HomeIntro.jsx/HomeIntro'
import Hero from './Hero/Hero'
import EventHome from './EventShowing/EventHome'
import ContactUs from './ContactUs/ContactUs'
import Background from '../Background/Background'
import Footer from './Footer/Footer'
import "./homemain.css"
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
    <>
    <Background/>
    <div className='home_container'>
      {/* <Navbar/>
      <HomeIntro/> */}
      <Hero/>
      <EventHome/>
      {/* <ContactUs/> */}
      {/* <Footer/> */}
    </div>
    </>
  )
}

export default Home
