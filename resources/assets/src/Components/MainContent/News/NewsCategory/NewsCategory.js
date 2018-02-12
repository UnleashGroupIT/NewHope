import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsCategory = props => (
    <div className="News--wrp">
        <div className="News-headline">
            <div>
                <div className="News--title">
                    <h3>{props.name}</h3>    
                </div>
                {props.categs ? <div className="NewsCategs">
                    <button className="btn-white">Latest</button>
                    <button className="btn-white">Popular</button>
                </div> : null}
            </div> 
        </div>
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