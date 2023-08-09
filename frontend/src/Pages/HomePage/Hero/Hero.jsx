import React, { useState } from 'react';
import "./hero.css";


function Hero() {

    const title = ["Trojans","Chennai Institue of Technology","Information Technology"]
    const desc=["Trojans is a National Level Technical Symposium organized by the department of Information Technology, Chennai Institute of Technology. Trojans emerged from the shadows on March 13th, 2022. Trojans aims to provide a platform for students to explore and exhibit their talents as well as learn about various technologies that persist in the IT industry. Our name is inspired from the historical trojan horse, which was a clever instrument used in the trojan war to turn the tides of the war. Our symposium, was also conceived by similar clever maneuvers and has now become a phenomenon of great significance and flair.,",

    "Chennai Institute of Technology (CIT Chennai) is an Industry Connected Institute, affiliated to Anna University and is a co-educational engineering college located at Kundrathur, Chennai, Tamil Nadu, India. It was established in 2010 and was established with an objective of providing quality technical education with adequate industrial exposure than any other college in Chennai.",

    "The department of Information Technology at Chennai Institute of Technology came into existence in the year 2019. Our mission is to develop industry-ready engineers who excel in the various domains of IT. The department also encourages innovative projects and quality research in various interrelated domains. They are exposed to various opportunities such as implant training, internships, and workshops during their course of study."
]
    const change = ["Chennai Institue of Technology","Information Technology","Trojans"];



    const [disp,setdisp]=useState(0);
    const handleClick = (disp)=>{
        console.log("hello")
        if(disp===0) setdisp(1);
        else if(disp===1) setdisp(2);
        else if(disp===2) setdisp(0);
    }
  return (
        <div className="container">
          <div className="mac-terminal">
            <div className="header">
              <div className="header__op">
                <span className="header__op-icon header__op-icon--red"></span>
                <span className="header__op-icon header__op-icon--yellow"></span>
                <span className="header__op-icon header__op-icon--green"></span>
              </div>
              <div className="header__title">root@macbook:~/{title[disp]}</div>
              <div className="header__empty"></div>
            </div>
{/* {disp==1 ? ( */}
              <div className="body">
              <div className="body__row">
                <span className="body__row-arrow"></span>
                <span className="body__row-folder">{title[disp]}</span>
                {/* <span className="body__row-git--label">desc</span> */}
              </div>
              <div className="body__row">
                <span className="body__row-git--label">{desc[disp]}</span>
              <div className='navigator'>
                            <span className="body__row-arrow2"></span>  
                            <span className='change_btn' onClick={() => handleClick(disp)}>
                           <span className='next_page'> <span className='cd'>cd </span>{change[disp]} </span><span className="body__row-arrow"></span>
                           </span>
                           <span className="body__row-cursor"> </span>
              </div>
              </div>        

            </div>
{/* ):<p>hello</p>} */}


          </div>
        </div>
      );
}

export default Hero;

