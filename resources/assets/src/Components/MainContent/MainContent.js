import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import News from './News/News'
import Talks from './Talks/Talks'
import Events from './Events/Events'
import About from './About/About'
import NotFound from '../Global/404/NotFound'

class MainContent extends Component {
	
      render(){
            return(
                  <main>
                        <Switch>
                              <Route exact path="/" component={Home}/>
                              <Route path="/news" render={routeProps => <News {...routeProps} direction={this.props.direction}/>}/>
                              <Route path="/talks" component={Talks}/>
                              <Route path="/events" component={Events}/>
                              <Route path="/about" component={About}/>
                              <Route component={NotFound}/>
                        </Switch>
                  </main>
            )
      }
}

export default MainContent