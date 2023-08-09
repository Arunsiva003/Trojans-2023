import React from 'react'
import "./eventhome.css"
import { useNavigate } from 'react-router-dom'
function EventHome() {
  const navigation=useNavigate();
  return (
    <div  className='event_home_cont'>
      <h1 >events home</h1>
      <button onClick={()=>{navigation("/events")}}>events page</button>
    </div>
  )
}

export default EventHome
