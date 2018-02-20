import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import NewsCardHighLight from '../NewsCard/NewsCardHighLight/NewsCardHighLight'

const NewsCategory = props => (
    <div className="News--wrp">
        <div className="Headline">
            <div className="News--title">
                <h2>{props.name}</h2>    
            </div>
            <div className="seeAll">
                <h5>See all</h5>
            </div> 
        </div>        
        <div className="NewsCard--wrp">
            <NewsCardHighLight />
            <div className="NewsCard--wrp---inner">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </div>
)

export default NewsCategory