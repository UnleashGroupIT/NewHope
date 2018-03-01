import React from 'react'

const SpeakerCardHighLight = props => (

	<div className="SpeakerCardHighLight">
		<div className="SpeakerCardHighLight--img">
     		<img src="/storage/Gfx/Events/Speakers/elon.png" alt="UNLEASH Speaker"/>
     		<div className="SpeakerCardHighLight--shortIno">
     			{/*<div className="SpeakerCardHighLight--categ-date-place">
					<div className="categ"><span>Future of Work</span></div>
					<div className="date"><span>Day 01 &middot; 14:30</span></div>
					<div className="place"><span>Main Stage</span></div>
				</div>*/}
				<div className="SpeakerCardHighLight--shortName">
					<h1>Elon<br />Musk</h1>
					<span>Space X  &middot; CEO</span>
				</div>
     		</div>
    	</div>
		<div className="SpeakerCardHighLight--details">
			<div className="SpeakerCardHighLight--wrp">
				<div className="SpeakerCardHighLight--name-and-social">
					<h1>Elon Musk</h1>
					<div className="SpeakerCardHighLight--social">
						<img src="/storage/Gfx/Events/Speakers/speaker-youtube.svg" alt="Youtube"/>
						<img src="/storage/Gfx/Events/Speakers/speaker-linkedin.svg" alt="Linkedin"/>
						<img src="/storage/Gfx/Events/Speakers/speaker-twitter.svg" alt="Twitter"/>
					</div>
				</div>
				<div className="SpeakerCardHighLight--categ-date-place">
					<div className="categ"><span>Future of Work</span></div>
					<div className="date"><span>Day 01 &middot; 14:30</span></div>
					<div className="place"><span>Main Stage</span></div>
				</div>
				<div className="SpeakerCardHighLight--speakContent">
					<h4>How will AI shape the world for the better in 20 years</h4>
					<p>Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how we can transform organizations and identify the technologies and ways to. Human Resources is not only HR’s responsibility anymore. It’s up to our leaders, innovators, influencers and each of you to determine how.</p>
				</div>
			</div>
			<div className="SpeakerCardHighLight--bio">
				<p>Elon Reeve Musk is a South African-American business magnate, investor, engineer, and inventor. He is the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla Inc.; co-chairman of OpenAI; founder and CEO of Neuralink, and founder of The Boring Company.</p>
			</div>
		</div>
	</div>
)

export default SpeakerCardHighLight