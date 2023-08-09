import React from "react";
// import "../cards.css";
// import "../views/background.css";
// import "../views/cards.css";
import cards from "../../Images/sponsors/cardsample.jpeg";

export default function Cards(){
  return(
    <>
    <section className="card" id="card">
        <div className="card-container">
            <div className="card-box">
                <img src={cards} alt=""/>
                <div className="card-layer">
                    <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                        {/* <a href="https://github.com/Lordoflegend2003/Online-E-Commerce-tracking-System-OETS-"><i class='bx bx-link'></i></a> */}
                </div>
            </div>
            <div className="card-box">
                <img src={cards} alt="" />

                <div className="card-layer">
                <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                </div>
            </div>
            <div className="card-box">
                <img src={cards} alt="" />

                <div className="card-layer">
                <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                    {/* <a href="#"><i class='bx bx-link'></i></a> */}
                </div>
            </div>
            <div className="card-box">
                <img src={cards} alt="" />

                <div className="card-layer">
                <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                    {/* <a href="#"><i class='bx bx-link'></i></a> */}
                </div>
            </div>
            <div className="card-box">
                <img src={cards} alt="" />

                <div className="card-layer">
                <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                    {/* <a href="#"><i class='bx bx-link'></i></a> */}
                </div>
            </div>
            <div className="card-box">
                <img src={cards}  alt=""/>

                <div className="card-layer">
                <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                    {/* <a href="https://github.com/Lordoflegend2003/OIBSIP-/tree/master/quizapp/quizapp"><i class='bx bx-link'></i></a> */}
                </div>
            </div>
            <div className="card-box">
                <img src={cards}  alt=""/>

                <div className="card-layer">
                <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                    {/* <a href="https://github.com/Lordoflegend2003/OIBSIP-/tree/master/quizapp/quizapp"><i class='bx bx-link'></i></a> */}
                </div>
            </div>
            <div className="card-box">
                <img src={cards}  alt=""/>

                <div className="card-layer">
                <h4>Sponsor name</h4>
                    <p>Sponsor details</p>
                    {/* <a href="https://github.com/Lordoflegend2003/OIBSIP-/tree/master/quizapp/quizapp"><i class='bx bx-link'></i></a> */}
                </div>
            </div>
        </div>
    </section>
    </>
  );
}