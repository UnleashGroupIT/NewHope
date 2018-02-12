import React from 'react'
import NewsSub from './News-sub/News-sub'
import TalksSub from './Talks-sub/Talks-sub'
import EventsSub from './Events-sub/Events-sub'
import AboutsSub from './About-sub/About-sub'
import { Link } from 'react-router-dom'

const Menu = () => (
	<nav className="App-header--nav">
		<ul className="App-header--ul">
        	<li className="App-header--li">
        		<Link to="/news">News</Link>
        		<div className="App-header-dropdownBox--outer">
	        		<div className="App-header-dropdownBox--inner">
	        			<div className="Layout-width">
	        				<NewsSub />
		        		</div>
	        		</div>
        		</div>
        	</li>
        	<li className="App-header--li">
        		<Link to="/talks">Talks</Link>
        		<div className="App-header-dropdownBox--outer">
	        		<div className="App-header-dropdownBox--inner">
	        			<div className="Layout-width">
	        				<TalksSub />
		        		</div>
	        		</div>
        		</div>
        	</li>
			<li className="App-header--li">
				<Link to="/events">Events</Link>
				<div className="App-header-dropdownBox--outer">
	        		<div className="App-header-dropdownBox--inner">
	        			<div className="Layout-width">
	        				<EventsSub />
		        		</div>
	        		</div>
        		</div>
			</li>
			<li className="App-header--li"><Link to="/startup">Startup HUB</Link></li>
			<li className="App-header--li">
				<Link to="/about">About</Link>
				<div className="App-header-dropdownBox--outer">
	        		<div className="App-header-dropdownBox--inner">
	        			<div className="Layout-width">
	        				<AboutsSub />
		        		</div>
	        		</div>
        		</div>
			</li>
		</ul>
	</nav>
)

export default Menu