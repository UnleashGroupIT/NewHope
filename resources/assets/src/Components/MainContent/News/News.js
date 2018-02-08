import React from 'react'
import NewsCategory from './NewsCategory/NewsCategory'

const News = () => (
  <section className="News">
    <h2>News page</h2>
    <hr/>
    <NewsCategory name="Latest"/>
    <NewsCategory name="Popular"/>
    <NewsCategory name="Future of Work" img="true" alt="IMG" src="src"/>
  </section>
)

export default News