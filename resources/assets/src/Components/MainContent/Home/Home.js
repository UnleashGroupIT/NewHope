import React from 'react'

import NewsCategory from '../News/NewsCategory/NewsCategory'
import NewsCard from '../News/NewsCard/NewsCard'
import TalksCategory from '../Talks/TalksCategory/TalksCategory'
import Events from '../Events/Events'
import StartupBanner from '../Startup/StartupBanner/StartupBanner'
import Poll from '../Poll/Poll'
import MobileApp from '../MobileApp/MobileApp'


const Home = () => (
  <section className="Home">
    <div className="MainContent--header Home--header">
        <div className="Layout-width">
            <div className="MainContent--header---wrp">
                <div className="MainContent--title">
                    <span>Alex Cooper &middot; Future of Work</span>
                    <h1>The robots are here : is this the end of decision making by humans?</h1>
                    <button className="btn-w">Read now</button>
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
        <NewsCategory name="News" categs/>
    </div>
        <Events />
    <div className="Layout-width">
        <TalksCategory name="Talks" />
        <StartupBanner />
        <div className="Poll-and-MobileApp">
    	   <Poll />
    	   <MobileApp />
        </div>
    </div>
  </section>
)

export default Home