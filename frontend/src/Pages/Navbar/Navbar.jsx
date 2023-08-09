import React from "react"; 
import "../Navbar/navbar.css";


export default function Navbar(){
    return(
        <div className="nav-main">
        <div className="nav-logo">
        </div>
        <ul className="ul-main">
        <a href="/" className="nav-logo">
            <span className="logo-img"></span>
        </a>
            <li><a href="/">HOME</a></li>
            <li><a href="/">TECH</a></li>
            <li><a href="/">NON-TECH</a></li>
            <li><a href="/">SPONSORS</a></li>
            <li><a href="/">CONTACT US</a></li>
            <li><a href="/">TROJANS 2023</a></li>
        </ul>  
        </div>
    )
}