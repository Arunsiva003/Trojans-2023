import React from 'react'
import "./workshop.css"
import p5 from "../../Images/Tech/p5.jpg"
import { useNavigate } from 'react-router-dom';
import { RiFlashlightLine, RiFireLine, RiShiningLine } from 'react-icons/ri';
function Workshop() {
  const navigate=useNavigate();

    const workshopdata = [
      {eventname:"event1",
      imageSrc: p5,
      duration:"10",
      description:`A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators:"me and u",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"event1",
      imageSrc: p5,
      duration:"10",
      description:`A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators:"me and u",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"event1",
      imageSrc: p5,
      duration:"10",
      description:`A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators:"me and u",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"event1",
      imageSrc: p5,
      duration:"10",
      description:`A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators:"me and u",
      timing:"1hrs",
      buttonText: "View More",
    },

    ];
    const sharedata=(event)=>{
      console.log(event)
      navigate('/eventdetail', { state: { eventname: event.eventname,
      duration:event.duration,
      description:event.description,
      coordinators:event.coordinators,
      timing:event.timing } });
    }
    return (
      <div>
      <div class="work_back">
        <div class="work_cont">
            <div className='Workshop_title'>
                   <h1 className='mobile-view'>{"< Workshop />"}</h1>
            </div>
            <div class="work_card__container">
               
               <article class="work_card__article">
                  <div class="work_card__scale-1"></div>
                  <div class="work_card__scale-2"></div>
   
                  <div class="work_card__shape-1">
                     <div class="work_card__shape-2"></div>
                     <div class="work_card__shape-3">
                      <RiFlashlightLine className="work_card__icon" />
                     </div>
                  </div>
      
                  <div class="work_card__data">
                     <h2 class="work_card__title">Work Shop 1</h2>
                     
                     <p class="work_card__description">
                        Gradient card, with bright edges 
                        that gives it a cool look.
                     </p>
   
                     <a href="#" class="work_card__button">
                        Continue learning
                     </a>
                  </div>
               </article>
      
               <article class="work_card__article work_card__orange">
                  <div class="work_card__scale-1"></div>
                  <div class="work_card__scale-2"></div>
                    
                  <div class="work_card__shape-1">
                     <div class="work_card__shape-2"></div>
                     <div class="work_card__shape-3">
                      <RiFireLine className="work_card__icon" />
                     </div>
                  </div>
      
                  <div class="work_card__data">
                     <h2 class="work_card__title">Work Shop 02</h2>
   
                     <p class="work_card__description">
                        Gradient card, with bright edges 
                        that gives it a cool look.
                     </p>
   
                     <a href="#" class="work_card__button">
                        Continue learning
                     </a>
                  </div>
               </article>
      
               <article class="work_card__article work_card__green">
                  <div class="work_card__scale-1"></div>
                  <div class="work_card__scale-2"></div>
   
                  <div class="work_card__shape-1">
                     <div class="work_card__shape-2"></div>
                     <div class="work_card__shape-3">
                      <RiShiningLine className="work_card__icon" />
                     </div>
                  </div>
      
                  <div class="work_card__data">
                     <h2 class="work_card__title">WorkShop 03</h2>
   
                     <p class="work_card__description">
                        Gradient card, with bright edges 
                        that gives it a cool look.
                     </p>
   
                     <a href="#" class="work_card__button">
                        Continue learning
                     </a>
                  </div>
               </article>
               <article class="work_card__article work_card__green">
                  <div class="work_card__scale-1"></div>
                  <div class="work_card__scale-2"></div>
   
                  <div class="work_card__shape-1">
                     <div class="work_card__shape-2"></div>
                     <div class="work_card__shape-3">
                      <RiShiningLine className="work_card__icon" />
                     </div>
                  </div>
      
                  <div class="work_card__data">
                     <h2 class="work_card__title">Work Shop 04</h2>
   
                     <p class="work_card__description">
                        Gradient card, with bright edges 
                        that gives it a cool look.
                     </p>
   
                     <a href="#" class="work_card__button">
                        Continue learning
                     </a>
                  </div>
               </article>
            </div>
         </div>
      </div>
   </div>
      // <div>
      //    <div className='Workshop_cont_back'>
      //       <div className='Workshop_title'>
      //         <h1 className='mobile-view'>{"< Workshop />"}</h1>
      //       </div>
      //       <h1 style={{margin:"10px"}}><span className='Work_tag'>{"<"}</span><span className='Work_tag_name'>{" div "}</span><span className='Work_tag'>{">"}</span></h1>
      //       <div className="work_cont">
      //         { workshopdata.map((event,index) =>(
      //           <div className="work_card_container">
      //             <article className="work_card_article">
      //               <h1 style={{margin:"10px"}}><span className='Work_tag'>{"<"}</span><span className='Work_tag_name'>{" Img "}</span><span className='Work_tag'>{">"}</span></h1>
      //               <div class="card__scale-1"></div>
      //               <div class="card__scale-2"></div>

      //               <div className="work_shape-1">
      //                 <div className="work_shape-2"></div>
      //                 <div className="work_shape-3">
      //                   <img className="Work_img" src={event.imageSrc} alt="Event" />
      //                 </div>
      //               </div>
      //               <h2 className='Work_close Work_tag'>{"/>"}</h2>
      //               <div className="work_detail">
      //                 <h2 className="work_name"> Name</h2>
      //                 <h2 className='Work_view' onClick={()=>{sharedata(event)}}><span className='Work_tag'>{"< "}</span> <span className='Work_tag_name'>{"a "}</span><a className='Work_view_btn'>{event.buttonText}</a><span className='Work_tag'>{" />"}</span> </h2>
      //               </div>
      //             </article>
      //           </div>
      //         ))}
      //       </div>
      //       <div className='all-workshop'>
      //         {workshopdata.map((event, index) => (
            
      //         <div className='Workshop_cards' key={index}>
      //               <h1 style={{margin:"10px"}}><span className='Work_tag'>{"<"}</span><span className='Work_tag_name'>{" Img "}</span><span className='Work_tag'>{">"}</span></h1>
      //               <img className="Work_img" src={event.imageSrc} alt="Event" />
      //               <h2 className='Work_close Work_tag'>{"/>"}</h2>
      //               <h2 className='Work_view' onClick={()=>{sharedata(event)}}><span className='Work_tag'>{"< "}</span> <span className='Work_tag_name'>{"a "}</span><a className='Work_view_btn'>{event.buttonText}</a><span className='Work_tag'>{" />"}</span> </h2>
                  
      //         </div>
      //         ))}
      //       </div>
      //     <h1 style={{margin:"10px"}}><span className='Work_tag'>{"<"}</span><span className='Work_tag_name'>{" /div "}</span><span className='Work_tag'>{">"}</span></h1>
      //   </div>
      // </div>
    )
  }

export default Workshop
