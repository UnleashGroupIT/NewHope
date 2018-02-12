import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = props => (

  NewsCard.defaultProps = {
    src: '/storage/Gfx/news-preview.png'
  },

  <div className="News-card">
  	<div className="News-card--details">
  		<h5>How Can Your Company Work to Eliminate the Gender Pension Gap?</h5>
  		<span className="News-card--author-category">Alex Cooper &middot; <Link to="#">Category</Link></span>
  		<span className="News-card--date">Jan 15, 2018 &middot; 5 min read</span>
  	</div>
  	<div className="News-card--preview">
  		<img src={props.src} alt="UNLEASH news"/>
  	</div>
  </div>
)

export default NewsCard 