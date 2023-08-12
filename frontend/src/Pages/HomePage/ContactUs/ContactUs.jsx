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
    };

   

    const submit_handler = (event) => {
        event.preventDefault();
        const config= {
            Username : "mail",
            Password : "pass",
            Host : "name",
            Port : 3000,
            To : "trojans@citchennai.net",
            From : formstate.email,
            Subject : "This is the subject",
            Body : `${formstate.name} get connected with us on trojans`,   
            SecureToken : "token update with username and password",
        };

        if(window.Email){
            window.Email.send(config).then(() => alert("Thanks for reaching out will get contact with u soon"));
        }
    };

    return(
        <>
        <div className = "main">
            <div className="left-div_contact">
                <div className="heading">
                    <h1 className = "h1_head">Contact Us</h1>
                </div>
                <p> Get Contact with us to get the unreal form of enjoyment and entertainment</p>
                
            </div>
            <div className="register">
                        <form  className="form_contactus" onSubmit={submit_handler}>
                            <input type="text" onChange={changehandler} value= {formstate.name || ""} placeholder="Your Name"/>
                            <input type="text" onChange={changehandler} value= {formstate.email || ""} placeholder="Email ID"/>
                            <input type="text" onChange={changehandler} value= {formstate.phone || ""} placeholder="Phone No"/>
                            <button className="btn"  onChange={changehandler}>Submit</button>
                        </form>
            </div>

        </div>
        </>
    )
}