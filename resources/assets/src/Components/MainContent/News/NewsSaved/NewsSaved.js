import React from 'react'

import NewsCard from '../NewsCard/NewsCard'

const NewsSaved = props => (
    <div className="News--wrp">
        <div className="Headline">
            <div className="News--title">
                <h2>Saved Articles</h2>    
            </div> 
        </div>        
        <div className="NewsCard--wrp">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        <div className="seeAll">
            <button className="btn-bw">See all</button>
        </div>
    </div>
)

export default NewsSaved