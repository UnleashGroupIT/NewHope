import React from 'react'
import EventCard from '../../../../../MainContent/Events/EventCard/EventCard'
import { Link } from 'react-router-dom'

const EventsSub = () => (
	<div className="App-header--sub">
		<div className="Event london">
			<div className="App-header--subtitle">
				<h3>London</h3>
			</div>
			<EventCard src="/storage/Gfx/card-london.png"
				   alt="UNLEASH London"
				   name="UNLEASH Conference &amp; Expo London"
				   slogen="Lets warm up for 2019 in London!"
				   place="London  &middot;  ExCeL"
				   date="21-22. March 2019" />
		</div>
		<div className="Event america">
			<div className="App-header--subtitle">
				<h3>Las Vegas</h3>
			</div>
			<EventCard src="/storage/Gfx/card-america.png"
				   alt="UNLEASH America"
				   name="UNLEASH Conference &amp; Expo America"
				   slogen="Future of Work is going to Vegas, baby!"
				   place="Las Vegas  &middot;  Aria Hotel"
				   date="15-16. May 2018" />
		</div>
		<div className="Event amsterdam">
			<div className="App-header--subtitle">
				<h3>Amsterdam</h3>
			</div>
			<EventCard src="/storage/Gfx/card-amsterdam.png"
				   alt="UNLEASH Amsterdam"
				   name="UNLEASH Conference &amp; Expo Amsterdam"
				   slogen="We’re back in the ports of Amsterdam!"
				   place="Amsterdam  &middot;  Rai"
				   date="21-22. Oct 2018" />
		</div>
	</div>
);

export default EventsSub