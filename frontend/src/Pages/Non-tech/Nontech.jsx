import React from 'react'
import "./nontech.css"
import p5 from "../../Images/NonTech/NonTech.png"
function Nontech() {
    const Nontechdatas = [
      {
        imageSrc: p5,
        buttonText: "View More",
      },
      {
        imageSrc: p5,
        buttonText: "View More",
      },
      {
        imageSrc: p5,
        buttonText: "View More",
      },
      {
        imageSrc: p5,
        buttonText: "View More",
      },
      {
        imageSrc: p5,
        buttonText: "View More",
      },
      {
        imageSrc: p5,
        buttonText: "View More",
      },
    ];
    return (
      <div>
         <div className='Event-Temp-Cont'>
        <div className='titleofeventtype'>
          <h1 className='mobile-view'>{"< Non Technical Events />"}</h1>
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" div "}</span><span className='tags'>{">"}</span></h1>
        <div className='all-events'>
        {Nontechdatas.map((event, index) => (
          
            <div className='box-events' key={index}>
              <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" Img "}</span><span className='tags'>{">"}</span></h1>
            <img className="event-image" src={event.imageSrc} alt="Event" />
            <h2 className='closetag tags'>{"/>"}</h2>
            <h2 className='view-cont-more'><span className='tags'>{"< "}</span> <span className='tagname'>{"a "}</span><a className='view-more-button'>{event.buttonText}</a><span className='tags'>{" />"}</span> </h2>
          </div>
        ))}
        </div>
        <h1 style={{margin:"10px"}}><span className='tags'>{"<"}</span><span className='tagname'>{" /div "}</span><span className='tags'>{">"}</span></h1>
        </div>
      </div>
    )
  }

export default Nontech
