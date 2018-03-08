import React from 'react'

import NewsCard from '../NewsCard/NewsCard'

const NewsSaved = props => (
    <div className="News--wrp Pinned Saved">
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
            <button className="btnspn-b">
              <span className="border-top">
                <span className="transparent"></span>
              </span>
                See all
              <span className="border-bottom">
                <span className="transparent"></span>
              </span>
            </button>
        </div>
    </div>
)

export default NewsSaved