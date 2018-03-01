import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class TicketCard extends Component {

	render(){
		return(
			<div className="TicketCard">
				<div>
					<div className="TicketCard--category">
						<span className="TicketCard--category---BG">Single ticket</span>
						<span>Super saver*</span>
					</div>
					<div className="TicketCard--name">
						<h4>Standard Conference & Expo</h4>
					</div>
					<div className="TicketCardPrice--wrp">
						<div className="TicketCard--price">
							<h2>&euro;</h2>
							<h1>1,230</h1>
						</div>
						<span>*Save €120 off regular ticket price</span>
					</div>
					<div className="TicketCardDetails--wrp">
						<h6>Acces To</h6>
						<div className="TicketCard--details">
							<span>Main stage</span>
							<span>Breakout sessions</span>
							<span>Networking</span>
							<span>Parking</span>
							<span>Breakfast &amp; Lunch</span>
							<span>Cocktail parties</span>
							<span>sponsor parties</span>
						</div>		
					</div>
				</div>
				<div className="TicketCard--apply">
					<input id="TicketCard--promoCode" tpye="text" placeholder="Promocode" />
					<Link to="/live"><button className="btn-b">Apply</button></Link>
				</div>
			</div>
		)
	}
}

export default TicketCard