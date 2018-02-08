import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsLatest = props => (
    <div className="News--wrp">
        <h3>{props.name}</h3>
        <div className="NewsCard--wrp">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    </div>
)

export default NewsLatest