import React from 'react'
import "./eventselect.css"
import TechImg from '../../Images/Tech/Tech.png';
import NonTechImg from '../../Images/NonTech/NonTech.png';
function EventSelect() {
  return (
    <div className='events_home'>
      <div className='left_tech'>
        <h1 className='events_heading'>TECHNICAL</h1>
        <img src={TechImg} className='events_img'/>
        <h2 className='run_btn'><a>Run</a></h2>
      </div>
      <div className='left_tech kela_cls'>
        <h1 className='events_heading'>NON-TECHNICAL</h1>
        <img src={NonTechImg} className='events_img'/>
        <h2 className='run_btn'><a>Run</a></h2>

      </div>
    </div>
  )
}

export default EventSelect
