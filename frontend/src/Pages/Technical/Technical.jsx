import React from 'react'
import "./technical.css"
import p5 from "../../Images/Tech/codegizza.jpeg"
import { useNavigate } from 'react-router-dom';
function Technical() {
  const navigate=useNavigate();
    const Nontechdatas = [
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
      navigate('/eventdetail', { state: { eventname: event.eventname,
      duration:event.duration,
    description:event.description,
  coordinators:event.coordinators,
timing:event.timing } });
    }
    return (
      <div>
         <div className='Event-Temp-Cont'>
        <div className='titleofeventtype'>
          <h1 className='mobile-view'>{"< Technical Events />"}</h1>
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" div "}</span><span className='tags'>{">"}</span></h1>
        <div className='all-events'>
        {Nontechdatas.map((event, index) => (
            <div className='box-events' key={index}>
              <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" Img "}</span><span className='tags'>{">"}</span></h1>
            <img className="event-image" src={event.imageSrc} alt="Event" />
            <h2 className='closetag tags'>{"/>"}</h2>
            <h2 className='view-cont-more'  onClick={()=>sharedata(event)}><span className='tags'>{"< "}</span> <span className='tagname'>{"a "}</span><a className='view-more-button'>{event.buttonText}</a><span className='tags'>{" />"}</span> </h2>
          </div>
        ))}
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" /div "}</span><span className='tags'>{">"}</span></h1>
        </div>
      </div>
    )
  }

export default Technical
