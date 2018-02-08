import React from 'react'
import NewsLatest from './NewsLatest/NewsLatest'
import NewsPopular from './NewsPopular/NewsPopular'

const News = () => (
  <section className="News">
    <h2>News page</h2>
    <hr/>
    <NewsLatest name="Latest"/>
    <NewsPopular />
  </section>
)

export default News