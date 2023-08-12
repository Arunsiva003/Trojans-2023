import React from "react";
import "./workshop.css";
import p5 from "../../Images/Tech/p5.jpg";
import { useNavigate } from "react-router-dom";
import { BiGlobe } from "react-icons/si";
function Workshop() {
  const navigate = useNavigate();

  let workshopdata = [
    {
      eventname: "event1",
      imageSrc: p5,
      duration: "10",

      description: `A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "View More",
    },
    {
      eventname: "event1",
      imageSrc: p5,
      duration: "10",
      description: `A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "View More",
    },
    {
      eventname: "event1",
      imageSrc: p5,
      duration: "10",
      description: `A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "View More",
    },
    {
      eventname: "event1",
      imageSrc: p5,
      duration: "10",
      description: `A single team must consist of 2 members
      •	The overall competition consists of three rounds. 
      •	Each round is fifteen minutes long.
      •	When the event begins, one person will begin coding while the other is absent.  After 3 minutes, the second person will pick up where the first left off.
      •	The first round involves reverse coding. Teams will be given an input and output format and will be expected to code for it.
      •	The second round is shortest code, where the code's efficiency is evaluated.  The efficient code will score higher marks
      •	The fastest code is used in the third round. The teams that solve the problem the fastest will receive higher marks.
      •	Between each round, a team will be eliminated.`,
      coordinators: "me and u",
      timing: "1hrs",
      buttonText: "View More",
    },
  ];



  const shareData = (event) => {
    navigate("/eventdetail", {
      state: {
        eventname: event.eventname || "",
        duration: event.duration || "",
        description: event.description || "",
        coordinators: event.coordinators || [],
        timing: event.timing || "",
      },
    });
  };

  return (
    <div className="work_back">
      <div className="work_cont">
        <div className="Workshop_title">
          <h1 className="mobile-view">{"< Workshop />"}</h1>
        </div>
        <div className="work_card__container">
          {workshopdata.map((event, index) => (
            <article className="work_card__article" key={index}>
              <div className="work_card__scale-1"></div>
              <div className="work_card__scale-2"></div>

              <div className="work_card__shape-1">
                {/* Add image element or other content here */}
              </div>

              <div className="work_card__data">
                <h2 className="work_card__title">{event.eventname}</h2>
                {/* <p className="work_card__description">{event.description}</p> */}
                <a
                  href="#"
                  className="work_card__button"
                  onClick={() => {
                    shareData(event);
                  }}
                >
                  {event.buttonText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workshop;


