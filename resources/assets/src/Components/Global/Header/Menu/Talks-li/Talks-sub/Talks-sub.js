import React from 'react'
import TalkCard from '../../../../../MainContent/Talks/TalkCard/TalkCard'
import { Link } from 'react-router-dom'

const TalksSub = () => (
	<div className="App-header--sub">
		<div className="App-header--submenu">	
			<div className="App-header--subtitle">
				<h3>Categories</h3>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><Link to="#">HR Technology</Link></li>
				<li className="App-header--subli"><Link to="#">Talent &amp; Recruitment</Link></li>
				<li className="App-header--subli"><Link to="#">Future of Work</Link></li>
				<li className="App-header--subli"><Link to="#">Employee Experience</Link></li>
				<li className="App-header--subli"><Link to="#">Smart Data</Link></li>
				<li className="App-header--subli"><Link to="#">HR Tech World</Link></li>
				<li className="App-header--subli"><Link to="#">Smart Data</Link></li>
				<li className="App-header--subli"><Link to="#">HR Tech World</Link></li>
				<li className="App-header--subli"><Link to="#">Employee Experience</Link></li>
				<li className="App-header--subli"><Link to="#">Talent &amp; Recruitment</Link></li>
				<li className="App-header--subli all"><Link to="/talks">All news</Link></li>
			</ul>
		</div>
		<div className="App-header--highlight">
			<div className="App-header--subtitle">
				<h3>Most Popular</h3>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><Link to="#"><TalkCard src="/storage/Gfx/Talks/talk-previewHL.png" /></Link></li>
				<li className="App-header--subli"><Link to="#"><TalkCard src="/storage/Gfx/Talks/talk-previewHL.png" /></Link></li>
			</ul>
		</div>
	</div>
);

export default TalksSub