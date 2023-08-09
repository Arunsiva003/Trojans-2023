import React from 'react'
import HomeIntro from './HomeIntro.jsx/HomeIntro'
import Hero from './Hero/Hero'
import EventHome from './EventShowing/EventHome'
import ContactUs from './ContactUs/ContactUs'
import Footer from './Footer/Footer'
import "./homemain.css"
function Home() {
  return (
    <div className='home_container'>
      <HomeIntro/>
      <Hero/>
      <EventHome/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
