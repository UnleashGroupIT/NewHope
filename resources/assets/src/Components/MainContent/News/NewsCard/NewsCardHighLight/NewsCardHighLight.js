import React from 'react'

const NewsCardHighLight = props => (

  NewsCardHighLight.defaultProps = {
    src: '/storage/Gfx/News/news-defaultIMG.jpg'
  },

  <div className="News-card--HighLight">
  	<div className="News-card--details">
  		<h5>How Can Your Company Work to Eliminate the Gender Pension Gap?</h5>
  		<span className="News-card--author-category">Alex Cooper &middot; Category</span>
  		<span className="News-card--date">Jan 15, 2018 &middot; 816 views</span>
  	</div>
    <div className="News-card--img">
      <img src={props.src} alt="UNLEASH news"/>
    </div>
  </div>
)

export default NewsCardHighLight 