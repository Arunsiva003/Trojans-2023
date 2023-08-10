import React from "react";
import Logo from "../../../Images/Trojans/OnlyLogo_White.webp";
import "../Footer/footer.css";
import image from "../../../Images/Trojans/Screenshot 2023-08-08 134643.png"
import citlogo from "../../../Images/Trojans/cit_white_logo.webp";

export default function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className="links-main">
                    <ul className="links">
                        <li><a href="/">HOME</a></li>
                        <ul className="Home-links">
                        <li><a href="/">ABOUT US</a></li>
                        <li><a href="/">COLLEGE</a></li>
                        <li><a href="/">HOME</a></li>
                        </ul>

                        <li><a href="/">EVENTS</a></li>
                        <ul className="Home-links">
                        <li><a href="/">TECH-EVENTS</a></li>
                        <li><a href="/">NONTECH-EVENTS</a></li>
                        </ul>
                        <li><a href="/">SPONSORS</a></li>
                        <li><a href="/">CONTACTUS</a></li>
                        <li><a href="/">REGHI</a></li>
                        <img src={Logo} className="logo" alt="Trojans2023" />
                    </ul>
                    {/* <label>2</label> */}
                    
                </div>
                <img src={image} className="right" alt="Trojans2023" />
                <img src={citlogo} className="right" alt="Trojans2023" />
                <h1 className="tag">PS C:\Users\Desktop\Trojans-2023\Home : "ENJOY THE UNLIMITED ENTERTAINMENT BY JOINING WITH US</h1>
            </div>
        </>
    )
}
