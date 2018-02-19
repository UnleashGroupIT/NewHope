import React from 'react'
import { Link } from 'react-router-dom'
import StartupCard from '../../../../../MainContent/Startup/StartupCard/StartupCard'

const StartupSub = () => (
	<div className="App-header--sub col3">
		<div className="App-header--submenu col3">	
			<div className="App-header--submenu---wrp">
				<div className="App-header--subtitle">
					<h3>About</h3>
				</div>
				<ul className="App-header--subul">
					<li className="App-header--subli">
						<p>The place to go for the future leaders of the industry! Ever growing list of ambitious companies from all around the globe to provide you with new solutions for your new problems.</p>
						<div className="all">
							<Link to="#">See more</Link>
						</div>
					</li>
				</ul>
			</div>
			<div className="App-header--submenu---wrp competitions">
				<div className="App-header--subtitle">
					<h3>Competitions</h3>
				</div>
				<ul className="App-header--subul">
					<li className="App-header--subli"><Link to="#"><img src="/storage/Gfx/Menu/ams18.png" alt="Startup Amsterdam 2018" /></Link></li>
					<li className="App-header--subli"><Link to="#"><img src="/storage/Gfx/Menu/lasv18.png" alt="Startup Las Vegas 2018" /></Link></li>
					<li className="App-header--subli"><Link to="#"><img src="/storage/Gfx/Menu/lon18.png" alt="Startup London 2018" /></Link></li>
				</ul>
			</div>
		</div>
		<div className="App-header--highlight">
			<div className="App-header--subtitle">
				<h3>Recent Members</h3>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><Link to="#"><StartupCard src="/storage/Gfx/Startup/robotVera.png" /></Link></li>
				<li className="App-header--subli"><Link to="#"><StartupCard src="/storage/Gfx/Startup/robotVera.png" /></Link></li>
			</ul>
		</div>
	</div>
);

export default StartupSub