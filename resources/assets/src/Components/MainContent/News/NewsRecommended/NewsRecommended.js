import React from 'react'

import NewsCard from '../NewsCard/NewsCard'

const NewsRecommended = props => (
    <div className="News--wrp Pinned Recommended">
        <div className="Headline">
            <div className="News--title">
                <h2>Recommended</h2>    
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
                Refine Interests
              <span className="border-bottom">
                <span className="transparent"></span>
              </span>
            </button>
        </div>
    </div>
)

export default NewsRecommended