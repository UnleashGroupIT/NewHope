import React, {Component} from 'react'

import SpeakerCard from '../Speakers/SpeakerCard/SpeakerCard'

class London extends Component {

	render(){
		return(
			<section className="London">
				<div className="Layout-width">
					<div className="Speakers--wrp">
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
					</div>
				</div>
			</section>
		)
	}
}

export default London