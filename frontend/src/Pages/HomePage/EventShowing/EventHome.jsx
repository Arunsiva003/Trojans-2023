import React from 'react'
import "./eventhome.css"
import trojanslogo from "../../../Images/Trojans/trojans_logo.webp"
import searchicon from "../../../Images/search.png"
import dotsicon from "../../../Images/dots.png"
import smile from "../../../Images/smile.png"
import plus from "../../../Images/plus.png"
import microphone from "../../../Images/microphone.png"
import { Link, useNavigate } from 'react-router-dom'
function EventHome() {
  const navigation=useNavigate();
  return (
    <div  className='event_home_cont'>
       	<div class="mbp-mockup-wrapper">
<div class="mbp-container">
	<div class="mbp-display with-glare">
		<div class="display-edge">
			<div class="bezel">
				<div class="display-camera" ></div>
				<div class="display-frame">


          <div className='whatsapp'>
            <div className='whatsapp_navbar'>
              <div className='logo_name'>
                <img src={trojanslogo} className='logo_trojans'/>
                <h2>Trojans</h2>
              </div>
              <div className='search_dots'>
                <img src={searchicon} className='_icons'/>
                <img src={dotsicon} className='_icons'/>

              </div>
            </div>
            <div className='whatsapp_main'>
				<div className='title_pages'>Events and Workshop</div>
				<div className='message_whatsapp'>
					<div className='inside_msg'>
						<Link to="/events" className='butns'>Events</Link>
						<Link to="/workshop" className='butns'>Workshop</Link>
					</div>
					<h5 className='time_wa'>now</h5>
				</div>
			</div>
            <div className='whatsapp_footer'>
				<img src={smile} alt='smile' className='icons_footer'/>
				<img src={plus} alt='plus' className='icons_footer'/>
				<div className='type'>Click the pages that you wanna go</div>
				<img src={microphone} alt="mike"  className='icons_footer'/>
			</div>
          </div>


          <iframe src="" allowfullscreen></iframe>
				</div>
				<div class="below-display">
					<div class="macbookpro"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="mbp-keyboard">
		<div class="front">
			<div class="opener-left"></div>
			<div class="opener-right"></div>
		</div>
		<div class="bottom-left"></div>
		<div class="bottom-right"></div>
		<div class="mbp-shadow">			
			<div class="shadow-left"></div>
			<div class="shadow-right"></div>
		</div>
	</div>
</div>
		</div>
		<div className='mobile_view_evetn'>

		<div className='whatsapp'>
            <div className='whatsapp_navbar'>
              <div className='logo_name'>
                <img src={trojanslogo} className='logo_trojans'/>
                <h2>Trojans</h2>
              </div>
              <div className='search_dots'>
                <img src={searchicon} className='_icons'/>
                <img src={dotsicon} className='_icons'/>

              </div>
            </div>
            <div className='whatsapp_main'>
				<div className='title_pages'>Events and Workshop</div>
				<div className='message_whatsapp'>
					<div className='inside_msg'>
						<Link to="/events" className='butns'>Events</Link>
						<Link to="/workshop" className='butns'>Workshop</Link>
					</div>
					<h5 className='time_wa'>now</h5>
				</div>
			</div>
            <div className='whatsapp_footer'>
				<img src={smile} alt='smile' className='icons_footer'/>
				<img src={plus} alt='plus' className='icons_footer'/>
				<div className='type'>Click the pages that you wanna go</div>
				<img src={microphone} alt="mike"  className='icons_footer'/>
			</div>
          </div>



		</div>
    </div>
  )
}

export default EventHome
