import React, {Component} from 'react'

import SpeakerCard from '../Speakers/SpeakerCard/SpeakerCard'
import SpeakerCardHighLight from '../Speakers/SpeakerCard/SpeakerCardHighLight/SpeakerCardHighLight'
import BecomeSpeakerCard from '../Speakers/SpeakerCard/BecomeSpeakerCard/BecomeSpeakerCard'
import IntroBoxes from '../../IntroBoxes/IntroBoxes'

class London extends Component {

	render(){
		return(
			<section className="London">
				<div className="Layout-width">
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
				</div>
			</section>
		)
	}
}

export default London