import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsCategory = props => (
    <div className="News--wrp">
        <div className="Headline">
            <div className="News--Title-and-Categs">
                <div className="News--title">
                    <h2>{props.name}</h2>    
                </div>
                {props.categs ? <div className="News--Categs">
                    <button className="btn-bw">Latest</button>
                    <button className="btn-bw passive">Popular</button>
                </div> : null}
            </div>
            <div className="seeAll">
                <h5>See all -></h5>
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