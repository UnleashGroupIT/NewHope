import React from 'react'
import TalkCard from '../TalkCard/TalkCard'

const TalksPopular = props => (
    <div className="Talks--wrp">
        <h3>{props.name}</h3>
        <div className="TalkCard--wrp">
            <TalkCard />
            <TalkCard />
            <TalkCard />
        </div>
    </div>
)

export default TalksPopular