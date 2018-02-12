import React from 'react'
import NewsCard from '../../../../MainContent/News/NewsCard/NewsCard'
import { Link } from 'react-router-dom'

const NewsSub = () => (
	<div className="App-header--sub">
		<div className="App-header--submenu">	
			<div className="App-header--subtitle">
				<h2>Categories</h2>
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
				<li className="App-header--subli"><Link to="#">Future of Work</Link></li>
				<li className="App-header--subli"><Link to="#">Smart Data</Link></li>
				<li className="App-header--subli all"><Link to="/news">All news</Link></li>
			</ul>
		</div>
		<div className="App-header--highlight">
			<div className="App-header--subtitle">
				<h2>Most Popular</h2>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><Link to="#"><NewsCard src="/storage/Gfx/news-previewHL.png" /></Link></li>
				<li className="App-header--subli"><Link to="#"><NewsCard src="/storage/Gfx/news-previewHL2.png" /></Link></li>
			</ul>
		</div>
	</div>
);

export default NewsSub