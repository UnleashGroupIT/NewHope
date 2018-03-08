import React, {Component} from 'react'

import HeaderSlider from '../HeaderSlider/HeaderSlider'
import NewsLatestPopular from '../News/NewsLatestPopular/NewsLatestPopular'
import NewsCard from '../News/NewsCard/NewsCard'
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
                <HeaderSlider />
                <div className="Layout-width">
                    <NewsLatestPopular name="News" showCategs seeAll >
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </NewsLatestPopular>
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