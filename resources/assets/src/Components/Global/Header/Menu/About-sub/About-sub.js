import React from 'react'
import NewsCard from '../../../../MainContent/News/NewsCard/NewsCard'
import Social from '../../../../Global/Footer/Social/Social'
import NewsLetter from '../../../../Global/Footer/NewsLetter/NewsLetter'
import { Link } from 'react-router-dom'

const AboutSub = () => (
	<div className="App-header--sub about">
		<div className="App-header--submenu about">	
			<div className="App-header--submenu---wrp">
				<div className="App-header--subtitle">
					<h2>Unleash</h2>
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
					<h2>Careers</h2>
				</div>
				<ul className="App-header--subul">
					<li className="App-header--subli"><Link to="#">Sales executive</Link></li>
					<li className="App-header--subli"><Link to="#">Operations manager</Link></li>
					<li className="App-header--subli"><Link to="#">Volunteer program</Link></li>
					<li className="App-header--subli all"><Link to="#">See more</Link></li>
				</ul>
			</div>
		</div>
		<div className="App-header--highlight">
			<div className="App-header--subtitle">
				<h2>Corporate posts</h2>
			</div>
			<ul className="App-header--subul">
				<li className="App-header--subli"><Link to="#"><NewsCard /></Link></li>
				<li className="App-header--subli"><Link to="#"><NewsCard /></Link></li>
			</ul>
		</div>
		<div className="App-header--social">
			<Social />
		</div>
		<div className="App-header--newsletter">
			<NewsLetter />
		</div>
	</div>
);

export default AboutSub