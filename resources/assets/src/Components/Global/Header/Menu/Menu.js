import React, {Component} from 'react'
import NewsSub from './News-sub/News-sub'
import TalksSub from './Talks-sub/Talks-sub'
import EventsSub from './Events-sub/Events-sub'
import AboutsSub from './About-sub/About-sub'
import { Link } from 'react-router-dom'


class Menu extends Component {

	render(){

		return(
			<nav className="App-header--nav">
				<div className="App-header--ticket">
					<h3>Unleash World Conference &amp; Expo</h3>
						<div className="App-header--ticket---wrp">
							<div className="Event-card--place-and-date">
					    		<div className="Event-card-place">
					          		<h6>Amsterdam &middot; Rai</h6>
					        	</div>
					    		<div className="Event-card-date">
					          		<h6>23-24. October 2018</h6>
					        	</div>
							</div>
							<div className="booknow">
								<button className="btn-w">Book now</button>
							</div>
						</div>
				</div>
				<ul className="App-header--ul">
		        	<li className="App-header--li news">
        				<p>News</p>
		        		<div className="App-header-dropdownBox--outer">
			        		<div className="App-header-dropdownBox--inner">
			        			<div className="Layout-width">
			        				<NewsSub />
				        		</div>
			        		</div>
		        		</div>
        			</li>
		        	<li className="App-header--li talks">
		        		<p>Talks</p>
		        		<div className="App-header-dropdownBox--outer" >
			        		<div className="App-header-dropdownBox--inner">
			        			<div className="Layout-width">
			        				<TalksSub />
				        		</div>
			        		</div>
		        		</div>
		        	</li>
					<li className="App-header--li events">
						<p>Events</p>
						<div className="App-header-dropdownBox--outer" >
			        		<div className="App-header-dropdownBox--inner">
			        			<div className="Layout-width">
			        				<EventsSub />
				        		</div>
			        		</div>
		        		</div>
					</li>
					<li className="App-header--li startup"><p>Startup HUB</p></li>
					<li className="App-header--li about">
						<p>About</p>
						<div className="App-header-dropdownBox--outer" >
			        		<div className="App-header-dropdownBox--inner">
			        			<div className="Layout-width">
			        				<AboutsSub />
				        		</div>
			        		</div>
		        		</div>
					</li>
				</ul>
				<div class="hamburger hamburger--emphatic is-active">
				  <div class="hamburger-box">
				    <div class="hamburger-inner"></div>
				  </div>
				</div>
			</nav>
		)
	}
}

export default Menu