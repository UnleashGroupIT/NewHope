import React from 'react'

import NewsCategory from '../News/NewsCategory/NewsCategory'
import TalksCategory from '../Talks/TalksCategory/TalksCategory'
import Events from '../Events/Events'
import Poll from '../Poll/Poll'
import MobileApp from '../MobileApp/MobileApp'


const Home = () => (
  <section className="Home">
    <h2>Home page</h2>
    <hr/>
    <NewsCategory name="News Latest"/>
    <Events />
    <TalksCategory name="Talks Popular" />
    <div className="Poll-and-MobileApp">
    	<Poll />
    	<MobileApp />
    </div>

  </section>
)

export default Home