import React from 'react'
import EventCard from './EventCard/EventCard'

const Events = () => (
  <section className="Events">
    <h2>Events</h2>
    <hr/>
    <div className="EventCard--wrp">
	    <EventCard />
	    <EventCard />
	    <EventCard />
	</div>
  </section>
)

export default Events