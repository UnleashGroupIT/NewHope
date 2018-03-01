import React, {Component} from 'react'
import DragScroll from 'react-dragscroll';

import SpeakerCard from '../Speakers/SpeakerCard/SpeakerCard'
import SpeakerCardHighLight from '../Speakers/SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import BecomeSpeakerCard from '../Speakers/SpeakerCard/BecomeSpeakerCard/BecomeSpeakerCard'
import IntroBoxes from '../../IntroBoxes/IntroBoxes'
import IntroText from '../../IntroText/IntroText'
import IntroHeader from '../../IntroHeader/IntroHeader'
import HeadlineSponsorsBox from '../Sponsors/HeadlineSponsorsBox/HeadlineSponsorsBox'
import AgendaSessionCard from '../../Agenda/AgendaSessionCard/AgendaSessionCard'
import Testimonial from '../../Testimonial/Testimonial'
import TalksCategory from '../../Talks/TalksCategory/TalksCategory'
import TwitterCard from '../../Twitter/TwitterCard/TwitterCard'
import TravelBanner from '../../Travel/TravelBanner/TravelBanner'
import PromoBox from '../../PromoBox/PromoBox'
import TicketCard from '../../Tickets/TicketCard/TicketCard'

class London extends Component {

	render(){
		return(
			<section className="London">
				<IntroHeader />
				<div className="Layout-width">
					<div className="Intro--wrp">
						<IntroText />
						<HeadlineSponsorsBox />
					</div>
					<IntroBoxes />
					<div className="Speakers--wrp">
						<div className="Headline">
							<div className="Headline--title">
								<h2>Our Speakers</h2>
							</div>
						</div>
						<div className="SpeakerCards--wrp">
							<SpeakerCardHighLight />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<SpeakerCard />
							<BecomeSpeakerCard />
						</div>
						<div className="Session--more">
							<button className="btn-b">See all Speakers</button>
						</div>
					</div>
					<div className="Agenda--wrp">
						<div className="Headline">
							<div className="Headline--title">
								<h2>Highlighted Sessions</h2>
							</div>
						</div>
						<DragScroll className="drag" width height>
							<div><AgendaSessionCard /></div>
							<div><AgendaSessionCard /></div>
							<div><AgendaSessionCard /></div>
							<div><AgendaSessionCard /></div>
						</DragScroll>
						<div className="Session--more">
							<button className="btn-b">See full agenda</button>
						</div>
					</div>
					<div className="PromoBoxes--wrp">
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-startups.png" name="Startups" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-sponsors.png" name="Sponsors" />
						<PromoBox src="/storage/Gfx/PromoBoxes/promoBox-volunteer.png" name="Volunteering" />
					</div>
					<TravelBanner />
					<div className="Testimonial--wrp">
						<Testimonial />
					</div>
				</div>
			    
			    <div className="Tickets--wrp">
			    	<div className="Layout-width">
			    		<h2>Tickets</h2>
			    	</div>	
		    		<DragScroll className="drag" width height>
			          	<div className="Layout-width">
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
				          	<div><TicketCard /></div>
			          	</div>
					</DragScroll> 	
			    </div>
				    
				<div className="Talks-and-Twitter--wrp">
					<div className="Layout-width">
						<div className="Twitter--wrp">
							<div className="Headline-wBG">
								<h2>Twitter Wall</h2>
								<div className="Headline">
									<div className="Headline--title">
									</div>
								</div>
							</div>
							<TwitterCard />
							<TwitterCard />
							<TwitterCard />
						</div>
					</div>
				</div> 
				
			</section>
		)
	}
}

export default London