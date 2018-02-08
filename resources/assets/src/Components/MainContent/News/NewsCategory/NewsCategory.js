import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsCategory = props => (
    <div className="News--wrp">
        <h3>{props.name}</h3>
        {props.img ? <div className="NewsCategory--img">
        	<img src={props.src} alt={props.alt}/>
        </div> : null}
        
        <div className="NewsCard--wrp">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    </div>
)

export default NewsCategory