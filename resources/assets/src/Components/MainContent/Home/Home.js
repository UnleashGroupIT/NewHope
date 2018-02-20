import React, {Component} from 'react'

import HomeHeader from './HomeHeader/HomeHeader'
import NewsLatestPopular from '../News/NewsLatestPopular/NewsLatestPopular'
import TalksCategory from '../Talks/TalksCategory/TalksCategory'
import Events from '../Events/Events'
import StartupBanner from '../Startup/StartupBanner/StartupBanner'
import Poll from '../Poll/Poll'
import MobileApp from '../MobileApp/MobileApp'


class Home extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render(){
        return(
            <section className="Home">
                <HomeHeader />
                <div className="Layout-width">
                    <NewsLatestPopular name="News"/>
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
    }
}

export default Home