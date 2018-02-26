import React, {Component} from 'react'

import SpeakerCard from '../Speakers/SpeakerCard/SpeakerCard'
import SpeakerCardHighLight from '../Speakers/SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import BecomeSpeakerCard from '../Speakers/SpeakerCard/BecomeSpeakerCard/BecomeSpeakerCard'
import IntroBoxes from '../../IntroBoxes/IntroBoxes'
import IntroText from '../../IntroText/IntroText'
import IntroHeader from '../../IntroHeader/IntroHeader'
import HeadlineSponsorsBox from '../Sponsors/HeadlineSponsorsBox/HeadlineSponsorsBox'
import AgendaSessionCard from '../../Agenda/AgendaSessionCard/AgendaSessionCard'
import Testimonial from '../../Testimonial/Testimonial'

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
					<div className="Agenda--wrp">
						<div className="Headline">
							<div className="Headline--title">
								<h2>Highlighted Sessions</h2>
							</div>
						</div>
						<AgendaSessionCard />
						<AgendaSessionCard />
						<AgendaSessionCard />
						<AgendaSessionCard />
					</div>
					<div className="Testimonial--wrp">
						<Testimonial />
					</div>
				</div>
			</section>
		)
	}
}

export default London