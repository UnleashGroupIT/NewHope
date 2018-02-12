import React from 'react'

const EventCard = props => (
  <div className="Event-card">
  	<div className="Event-card--img">
      <img src={props.src} alt={props.alt} />
  	</div>
    <span className="Event-card--name">{props.name}</span>
    <div className="Event-card--details">
    	<h3 className="Event-card--slogen">{props.slogen}</h3>
    	<div className="Event-card--place-and-date">
    		<div className="Event-card-place">
          <h6>{props.place}</h6>
        </div>
    		<div className="Event-card-date">
          <h6>{props.date}</h6>
        </div>
    	</div>
    </div>
  </div>
)

export default EventCard