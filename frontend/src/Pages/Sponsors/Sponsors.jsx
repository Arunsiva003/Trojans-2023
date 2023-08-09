import React from "react";
import "./sponsors.css";
import "../Sponsors/sponsors.css";

import Cards from "../Sponsors/Cards";

export default function Sponsors(){
    return(
        <>
        <div className = "main">
            <div className="heading">
                <h1 className = "h1_head">Our Sponsors</h1>
            <div className = "cards">
            <Cards/>    
            </div>
        </div>
        </div>
        </>
    )
}

