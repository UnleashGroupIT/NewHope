import React from 'react'

import NewsLatest from '../News/NewsLatest/NewsLatest'
import Events from '../Events/Events'
import TalksPopular from '../Talks/TalksPopular/TalksPopular'
import Poll from '../Poll/Poll'
import MobileApp from '../MobileApp/MobileApp'


const Home = () => (
  <section className="Home">
    <h2>Home page</h2>
    <hr/>
    <NewsLatest name="News Latest"/>
    <Events />
    <TalksPopular name="Talks Popular" />
    <div className="Poll-and-MobileApp">
    	<Poll />
    	<MobileApp />
    </div>

  </section>
)

export default Home