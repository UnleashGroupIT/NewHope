import React from 'react'
import TalksCategory from './TalksCategory/TalksCategory'
import NewsCard from '../News/NewsCard/NewsCard'

const Talks = () => (
  <section className="Talks">
    <div className="MainContent--header Talks--header">
        <div className="Layout-width">
            <div className="MainContent--header---wrp">
                <div className="MainContent--title">
                    <span>Alex Cooper &middot; Culture</span>
                    <h1>The robots are here: is this the end of decision making by humans?</h1>
                    <button className="btn-white">Read now</button>
                </div>
                <div className="MainContent--highlight">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        </div>
    </div>
    <div className="Layout-width">
    	<TalksCategory name="Latest" />
    	<TalksCategory name="Popular"/>
    </div>
  </section>
)

export default Talks