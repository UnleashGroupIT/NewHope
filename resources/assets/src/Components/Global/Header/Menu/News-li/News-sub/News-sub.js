import React from 'react'
import NewsCard from '../../../../../MainContent/News/NewsCard/NewsCard'
import { Link } from 'react-router-dom'

const NewsSub = props => (
	<div className="App-header--sub">
		<div className="App-header--submenu">	
			<div className="App-header--subtitle">
				<h3>Categories</h3>
			</div>
			<ul className="App-header--subul">
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">HR Technology</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Talent &amp; Recruitment</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Future of Work</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Employee Experience</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Smart Data</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">HR Tech World</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Smart Data</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">HR Tech World</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Employee Experience</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Talent &amp; Recruitment</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Future of Work</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli"><Link onClick={props.closeLi} to="#">Smart Data</Link></li>
				<li onClick={props.toggleMenu} className="App-header--subli all"><Link onClick={props.closeLi} to="/news">All news</Link></li>
			</ul>
		</div>
		<div className="App-header--highlight">
			<div className="App-header--subtitle">
				<h3>Most Popular</h3>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><Link to="#"><NewsCard src="/storage/Gfx/news-previewHL.png" /></Link></li>
				<li className="App-header--subli"><Link to="#"><NewsCard src="/storage/Gfx/news-previewHL2.png" /></Link></li>
			</ul>
		</div>
	</div>
);

export default NewsSub