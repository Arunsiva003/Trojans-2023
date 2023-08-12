import React from "react";
import "../Sponsors/cards.css";
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
                 
                </div>
            </div>

        </div>
    </section>
    </>
  );
}   