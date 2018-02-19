import React from 'react'
import { Link } from 'react-router-dom'

const StartupCard = props => (

  StartupCard.defaultProps = {
    src: '/storage/Gfx/Startup/robotVera.png'
  },

  <div className="Startup-card">
  	<div className="Startup-card--details">
  		<h5>Robot Vera</h5>
  	  <span className="Startup-card--category">HR Technology &middot; AI &middot; Payroll &middot; Recruitment </span>
  		<span className="Startup-card--rank">Exhibitor at UNLEASH Las Vegas 2018</span>
  	</div>
  	<div className="Startup-card--preview">
  		<img src={props.src} alt="UNLEASH Startup Sponsor"/>
  	</div>
  </div>
)

export default StartupCard 