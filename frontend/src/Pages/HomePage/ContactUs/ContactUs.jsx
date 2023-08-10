import React , {useState} from "react";   
import "../../Background/Background.jsx"; 
import "../ContactUs/contactus.css";
// import {userForm} from "react-hook-form";
import Background from "../../Background/Background.jsx";
import Navbar from "../../Navbar/Navbar.jsx";




export default function Contactus(){

    const [formstate , setformstate] = useState({});

    const changehandler = (event) =>{
        setformstate({...formstate , [event.target.name] : event.target.value});
    }

    return(
        <>
        <div className = "main">
            <div className="heading">
                <h1 className = "h1_head">Contact Us</h1>
            </div>
            <p> Get Contact with us to get the unreal form of enjoyment and entertainment</p>
            <section>
            <div className="register">
            <div className="col-1">
                <form id='form' className="flex flex-col">
                    <input type="text" onChange={changehandler} placeholder="Your Name"/>
                    <input type="text"   onChange={changehandler}placeholder="Email ID"/>
                    <input type="text"   onChange={changehandler} placeholder="Phone No"/>
                    <button className="btn"  onChange={changehandler}>Submit</button>
                </form>
            </div>
    
            </div>
            </section>
        </div>
        </>
    )
}