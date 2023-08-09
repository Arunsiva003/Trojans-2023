import React from "react";
import Background from "../Background/Background";
import "../Sponsors/sponsors.css";
import Navbar from "../Navbar/Navbar";
import Cards from "./Cards";
import Footer from "../HomePage/Footer/Footer";

export default function Sponsors(){
    return(
        <>
        <div className = "main">
        <Background/>
        <Navbar/>
            <div className="heading">
                <h1 className = "h1_head">Our Sponsors</h1>
            <div className = "cards">
            <Cards/>    
            </div>
        </div>
        <Footer/>
        </div>
        </>
    )
}

