import React from 'react'
import NewsCategory from './NewsCategory/NewsCategory'
import NewsSaved from './NewsSaved/NewsSaved'
import NewsRecommended from './NewsRecommended/NewsRecommended'
import NewsLatestPopular from './NewsLatestPopular/NewsLatestPopular'
import HomeHeader from '../Home/HomeHeader/HomeHeader'
import CategSlider from '../CategSlider/CategSlider'
import NewsLetterMobileAppBanner from '../NewsLetter-MobileApp-Banner/NewsLetterMobileAppBanner'

const News = () => (
  <section className="News">
    <HomeHeader />
    <CategSlider />
    <div className="Layout-width">
    	<NewsLatestPopular />
    	<div className="NewsCateg--wrp">
    		<NewsCategory name="HR Tech"/>
    		<NewsSaved />
    	</div>
        <NewsCategory name="Future of Work" src="/storage/Gfx/News/news-defaultIMG2.jpg" />
        <div className="NewsCateg--wrp">
            <NewsRecommended />
            <NewsCategory name="Learning"/>
            
        </div>
        <NewsCategory name="Employee Experience" src="/storage/Gfx/News/news-defaultIMG2.jpg" />
        <NewsLetterMobileAppBanner />
        <NewsCategory name="Smart Data" src="/storage/Gfx/News/news-defaultIMG4.jpg" />
    </div>
  </section>
)

export default News