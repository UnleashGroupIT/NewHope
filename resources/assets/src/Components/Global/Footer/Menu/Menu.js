import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () =>(
	<nav className="App-footer--nav">
		<ul className="App-footer--ul">
			<li className="App-footer--li"><strong>News</strong>
				<ul className="App-footer--subul">
					<li><Link to="#">All news</Link></li>
					<li><Link to="#">Popular</Link></li>
					<li><Link to="#">Contribute</Link></li>
				</ul>
			</li>
			<li className="App-footer--li"><strong>Events</strong>
				<ul className="App-footer--subul">
					<li><Link to="#">Amsterdam</Link></li>
					<li><Link to="#">London</Link></li>
					<li><Link to="#">Las Vegas</Link></li>
				</ul>
			</li>
			<li className="App-footer--li"><strong>Talks</strong>
				<ul className="App-footer--subul">
					<li><Link to="#">All talks</Link></li>
					<li><Link to="#">Latest</Link></li>
					<li><Link to="#">Popular</Link></li>
				</ul>
			</li>
			<li className="App-footer--li"><strong>About</strong>
				<ul className="App-footer--subul">
					<li><Link to="#">Got to know us</Link></li>
					<li><Link to="#">Careers</Link></li>
					<li><Link to="#">Press</Link></li>
				</ul>
			</li>
		</ul>
	</nav>
)

export default Menu