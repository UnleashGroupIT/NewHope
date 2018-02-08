import React from 'react'
import TalkCard from '../TalkCard/TalkCard'

const TalksLatest = () => (
    <div className="Talks--wrp">
        <h3>Latest</h3>
        <div className="TalkCard--wrp">
            <TalkCard />
            <TalkCard />
            <TalkCard />
        </div>
    </div>
)

export default TalksLatest