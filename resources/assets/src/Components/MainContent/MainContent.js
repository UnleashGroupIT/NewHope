import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import News from './News/News'
import Talks from './Talks/Talks'
import Events from './Events/Events'
import About from './About/About'
import NotFound from '../Global/404/NotFound'

const MainContent = () =>(
	<main>
		<div className="Layout-width">
			<Switch>
				<Route exact path="/" component={Home}/>
	      		<Route path="/news" component={News}/>
	      		<Route path="/talks" component={Talks}/>
	      		<Route path="/events" component={Events}/>
	      		<Route path="/about" component={About}/>
	      		<Route component={NotFound}/>
	      	</Switch>
		</div>
	</main>
)

export default MainContent