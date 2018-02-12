import React from 'react'
import { Link } from 'react-router-dom'

const TalkCard = props => (
  
  TalkCard.defaultProps = {
    src: '/storage/Gfx/Talks/talk-preview.png'
  },

  <div className="Talk-card">
  	<div className="Talk-card--preview">
  		<img src={props.src} alt="UNLEASH Talk"/>
  	</div>
  	<div className="Talk-card--details">
  		<h5>How Can Your Company Work to Eliminate the Gender Pension Gap?</h5>
  		<span className="Talk-card--category"><Link to="#">Category</Link></span>
  		<span className="Talk-card--date">Jan 15, 2018 &middot; 816 views</span>
  	</div>
  </div>
)

export default TalkCard