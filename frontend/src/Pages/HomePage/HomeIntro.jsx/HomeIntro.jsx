import React from 'react'
import Mainlogo from "../../../Images/Trojans/Model.webp"
import "./homeintro.css"
function HomeIntro() {
  return (
    <div className='home_intro_container'>
      {/* <h1>home intro</h1> */}
      <img src={Mainlogo} alt = "TROJANS2023"/>
    </div>
  )
}

export default HomeIntro
