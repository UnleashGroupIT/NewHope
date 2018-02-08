import React from 'react'
import TalksCategory from './TalksCategory/TalksCategory'

const Talks = () => (
  <section className="Talks">
    <h2>Talks page</h2>
    <hr/>
    <TalksCategory name="Latest" />
    <TalksCategory name="Popular"/>
  </section>
)

export default Talks