import React from 'react'
import "./homeintro.css"
import Trojansimg from "../../../Images/Trojans/trojans-compressed.webp"
import scrol from "../../../Images/scroll.png";
import {Link} from 'react-router-dom'
function HomeIntro() {
  return (
    <div className="herohomecontainer">
      <p className="heroPTag">DEPARTMENT OF</p>
      <h3 id="dept-intro">INFORMATION TECHNOLOGY</h3>
      <p className="heroPTag"> PRESENTS</p>
      <img src={Trojansimg} id="logo_trojans"  alt=""/>
      <h3 id="home-intro">A NATIONAL LEVEL TECHNICAL SYMPOSIUM</h3>

      <Link to="/registration" className="register-button-home">
        Register
      </Link>

      <div className="scroll">
        <h2 className="scroll_intro">SCROLL DOWN</h2>
        <img src={scrol} alt="" className="scroll_img"></img>
      </div>
    </div>
  );
}

export default HomeIntro
