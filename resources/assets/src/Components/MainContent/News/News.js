import React from 'react'
import NewsCategory from './NewsCategory/NewsCategory'
import NewsSaved from './NewsSaved/NewsSaved'
import NewsLatestPopular from './NewsLatestPopular/NewsLatestPopular'
import HomeHeader from '../Home/HomeHeader/HomeHeader'

const News = () => (
  <section className="News">
    <HomeHeader />
    <div className="Layout-width">
    	<NewsLatestPopular />
    	<div className="NewsCateg--wrp">
    		<NewsCategory name="Future of Work"/>
    		<NewsSaved />
    	</div>
    </div>
  </section>
)

export default News