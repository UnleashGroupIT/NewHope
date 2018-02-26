import React from 'react'

const AgendaSessionCard = () => (
	<div className="AgendaSessionCard">
		<div className="AgendaSessionCard--wrp">
			<div className="AgendaSessionCard--category"><span>Going Digital</span></div>
			<div className="AgendaSessionCard--place"><span>Room 234</span></div>
			<div className="AgendaSessionCard--date"><span>Day 1 &middot; 10:30-11:00</span></div>
		</div>
		<h5>How Will AI Shape the World for the Better in 20 years</h5>
		<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo or sit amet, consectetur adipiscing elit ipsum dolor sit amet con psum dolor sit amet, consectetur adipiscing elit, sed do eiusmo or sit...</h6>
		<div className="AgendaSessionCard--speaker">
			<div className="AgendaSessionCard--speakerIMG">
				<img src="/storage/Gfx/Agenda/agenda-speakerIMG.png" alt="IMG"/>
			</div>
			<div className="AgendaSessionCard--speakerDetails">
				<h6>Evan Smith</h6>
				<span>CEO &middot; Virgin Group</span>
			</div>
		</div>
	</div>
)

export default AgendaSessionCard