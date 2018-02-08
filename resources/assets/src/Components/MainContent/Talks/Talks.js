import React from 'react'
import TalksLatest from './TalksLatest/TalksLatest'
import TalksPopular from './TalksPopular/TalksPopular'

const Talks = () => (
  <section className="Talks">
    <h2>Talks page</h2>
    <hr/>
    <TalksLatest />
    <TalksPopular name="Popular"/>
  </section>
)

export default Talks