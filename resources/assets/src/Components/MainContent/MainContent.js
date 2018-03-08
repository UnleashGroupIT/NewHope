import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import News from './News/News'
import Talks from './Talks/Talks'
import London from './Events/London/London'
import About from './About/About'
import NotFound from '../Global/404/NotFound'
import NewsCategoryPage from './News/NewsCategoryPage/NewsCategoryPage'
import NewsArticlePage from './News/NewsArticlePage/NewsArticlePage'

class MainContent extends Component {
	
      render(){
            return(
                  <main>
                        <Switch>
                              <Route exact path="/" component={Home}/>
                              <Route path="/talks" component={Talks}/>
                              <Route path="/london" component={London}/>
                              <Route path="/about" component={About}/>
                              <Switch>
                                    <Route exact path='/news' render={routeProps => <News {...routeProps} direction={this.props.direction}/>} />
                                    <Switch>
                                          <Route exact path='/news/categpage' render={routeProps => <NewsCategoryPage {...routeProps} direction={this.props.direction}/>}/>
                                          <Route path="/news/categpage/article" component={NewsArticlePage}/>
                                          <Route component={NotFound}/>
                                    </Switch>
                              </Switch>
                              <Route component={NotFound}/>
                        </Switch>
                  </main>
            )
      }
}

export default MainContent