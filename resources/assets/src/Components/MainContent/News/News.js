import React from 'react'
import NewsCategory from './NewsCategory/NewsCategory'

const News = () => (
  <section className="News">
    <div className="MainContent--header News--header">
        <div className="Layout-width">
            <div className="MainContent--title">
                <span>Alex Cooper &middot; Culture</span>
                <h1>The robots are here: is this the end of decision making by humans?</h1>
                <button className="btn read-now">Read now</button>
            </div>
        </div>
    </div>
    <div className="Layout-width">
    	<NewsCategory name="Latest"/>
    	<NewsCategory name="Popular"/>
    	<NewsCategory name="Future of Work" img alt="IMG" src="src"/>
    </div>
  </section>
)

export default News