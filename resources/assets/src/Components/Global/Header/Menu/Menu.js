import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => (
	<nav>
		<ul className="App-header--ul">
        	<li className="App-header--li"><Link to="/news">News</Link></li>
        	<li className="App-header--li"><Link to="/talks">Talks</Link></li>
        	<li className="App-header--li"><Link to="/events">Events</Link></li>
        	<li className="App-header--li"><Link to="/startup">Startup HUB</Link></li>
        	<li className="App-header--li"><Link to="/about">About</Link></li>
		</ul>
	</nav>
)

export default Menu