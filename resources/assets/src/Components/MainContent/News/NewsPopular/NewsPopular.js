import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsPopular = () => (
    <div className="News--wrp">
    	<h3>Popular</h3>
    	<div className="NewsCard--wrp">
	    	<NewsCard />
	    	<NewsCard />
	    	<NewsCard />
	    	<NewsCard />
	    </div>
    </div>
)

export default NewsPopular