import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Changed import to useNavigate
import "./eventselect.css";
import TechImg from '../../Images/Tech/Tech.png';
import NonTechImg from "../../Images/NonTech/NonTech.png";

function EventSelect() {
  const [compile, setCompile] = useState(false);
  const navigate = useNavigate(); 

  const runbtn_tech = () => {
    setCompile(true);
    setTimeout(() => {
      navigate("/tech");
    }, 500);
  }
  const runbtn_nontech = () => {
    setCompile(true);
    setTimeout(() => {
      navigate("/nontech");
    }, 500);
  }

  return (
    <>
      <div className='events_home'>
        <div className='left_tech'>
          <h1 className='events_heading'>TECHNICAL</h1>
          <img src={TechImg} className='events_img' alt="Tech"/>
          <h2 className='run_btn' onClick={runbtn_tech}><a>Run</a></h2>
        </div>
        <div className='left_tech kela_cls'>
          <h1 className='events_heading'>NON-TECHNICAL</h1>
          <img src={NonTechImg} className='events_img' alt="Non-Tech" />
          <h2 className='run_btn' onClick={runbtn_nontech}><a>Run</a></h2>
        </div>
      </div>
      <div className={compile ? "compiling" : "notcompile"}>
      <div class="ring">
        <h1 className='compile_heading'>Compiling</h1>
        <span className='span_ani'></span>
      </div>
      </div>
    </>
  )
}

export default EventSelect;
