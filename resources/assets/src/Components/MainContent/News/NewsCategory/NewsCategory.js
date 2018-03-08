import React from 'react'
import { Link } from 'react-router-dom'
import NewsCard from '../NewsCard/NewsCard'
import NewsCardHighLight from '../NewsCard/NewsCardHighLight/NewsCardHighLight'

const NewsCategory = props => (
    <div className="News--wrp Categ">
        <div className="Headline">
            <div className="News--title">
                <h2>{props.name}</h2>    
            </div>
            <div className="seeAll">
                <Link to="news">See all</Link>
            </div> 
        </div>        
        <div className="NewsCard--wrp">
            <NewsCardHighLight src={props.src}/>
            <div className="NewsCard--wrp---inner">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </div>
)

export default NewsCategory