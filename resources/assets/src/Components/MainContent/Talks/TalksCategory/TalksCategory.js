import React from 'react'
import { Link } from 'react-router-dom'
import TalkCard from '../TalkCard/TalkCard'

const TalksCategory = props => (
    <div className="Talks--wrp">
        <div className="Headline">
	        <div className="Talks--title">
	        	<h2>{props.name}</h2>
	        </div>
	        <div className="seeAll">
	        	<Link to="#">See all</Link>
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