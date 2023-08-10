import React from 'react'
import "./workshop.css"
import p5 from "../../Images/Tech/p5.jpg"
import { useNavigate } from 'react-router-dom';
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
         <div className='Workshop_cont'>
        <div className='Workshop_title'>
          <h1 className='mobile-view'>{"< Workshop />"}</h1>
        </div>
        <h1 style={{margin:"10px"}}><span className='Work_tag'>{"<"}</span><span className='Work_tag_name'>{" div "}</span><span className='Work_tag'>{">"}</span></h1>
        <div className='all-workshop'>
        {workshopdata.map((event, index) => (
          
            <div className='Workshop_cards' key={index}>
              <h1 style={{margin:"10px"}}><span className='Work_tag'>{"<"}</span><span className='Work_tag_name'>{" Img "}</span><span className='Work_tag'>{">"}</span></h1>
            <img className="Work_img" src={event.imageSrc} alt="Event" />
            <h2 className='Work_close Work_tag'>{"/>"}</h2>
            <h2 className='Work_view' onClick={()=>{sharedata(event)}}><span className='Work_tag'>{"< "}</span> <span className='Work_tag_name'>{"a "}</span><a className='Work_view_btn'>{event.buttonText}</a><span className='Work_tag'>{" />"}</span> </h2>
          </div>
        ))}
        </div>
        <h1 style={{margin:"10px"}}><span className='Work_tag'>{"<"}</span><span className='Work_tag_name'>{" /div "}</span><span className='Work_tag'>{">"}</span></h1>
        </div>
      </div>
    )
  }

export default Workshop
