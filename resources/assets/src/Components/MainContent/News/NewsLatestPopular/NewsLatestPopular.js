import React from 'react'

import NewsCard from '../NewsCard/NewsCard'

const NewsLatestPopular = props => (
    <div className="News--wrp">
        <div className="Headline">
            <div className="News--Title-and-Categs">
                {props.name ? <div className="News--title">
                    <h2>{props.name}</h2>    
                </div> : null }
                <div className="News--Categs">
                    <button className="btn-bw">Latest</button>
                    <button className="btn-bw passive">Popular</button>
                </div>
            </div>
            <div className="seeAll">
                <h5>See all</h5>
            </div> 
        </div>        
        <div className="NewsCard--wrp">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    </div>
)

export default NewsLatestPopular