import React from 'react'
import TalkCard from '../TalkCard/TalkCard'

const TalksCategory = props => (
    <div className="Talks--wrp">
        <div className="Talks--headline">
	        <div className="Talks--title">
	        	<h2>{props.name}</h2>
	        </div>
	        <div className="Talks--seeAll">
	        	<h5>See all -></h5>
	        </div>
	    </div>        
        <div className="TalkCard--wrp">
            <TalkCard />
            <TalkCard />
            <TalkCard />
        </div>
    </div>
)

export default TalksCategory