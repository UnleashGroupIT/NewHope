import React from 'react'
import NewsCard from '../../../../../MainContent/News/NewsCard/NewsCard'
import Social from '../../../../../Global/Footer/Social/Social'
import NewsLetter from '../../../../../Global/Footer/NewsLetter/NewsLetter'
import { Link } from 'react-router-dom'

const AboutSub = () => (
	<div className="App-header--sub col3">
		<div className="App-header--submenu col3">	
			<div className="App-header--submenu---wrp">
				<div className="App-header--subtitle">
					<h3>Unleash</h3>
				</div>
				<ul className="App-header--subul">
					<li className="App-header--subli"><Link to="#">Who we are</Link></li>
					<li className="App-header--subli"><Link to="#">Press</Link></li>
					<li className="App-header--subli"><Link to="#">Terms &amp; Conditions</Link></li>
					<li className="App-header--subli"><Link to="#">Privacy Policy</Link></li>
				</ul>
			</div>
			<div className="App-header--submenu---wrp">
				<div className="App-header--subtitle">
					<h3>Careers</h3>
				</div>
				<ul className="App-header--subul">
					<li className="App-header--subli"><Link to="#">Sales executive</Link></li>
					<li className="App-header--subli"><Link to="#">Operations manager</Link></li>
					<li className="App-header--subli"><Link to="#">Volunteer program</Link></li>
					<li className="App-header--subli all"><Link to="#">See more</Link></li>
				</ul>
			</div>
			<div className="App-header--social">
				<Social />
			</div>
			<div className="App-header--newsletter">
				<NewsLetter />
			</div>
		</div>
		<div className="App-header--highlight">
			<div className="App-header--subtitle">
				<h3>Corporate posts</h3>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><Link to="#"><NewsCard src="/storage/Gfx/news-previewHL.png" /></Link></li>
				<li className="App-header--subli"><Link to="#"><NewsCard src="/storage/Gfx/news-previewHL2.png" /></Link></li>
			</ul>
		</div>
	</div>
);

export default AboutSub