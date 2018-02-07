import React from 'react'
import Menu from './Menu/Menu'
import NewsLetter from './NewsLetter/NewsLetter'
import Social from './Social/Social'

const Footer = props => (
  <footer className="App-footer">
  	<div className="Layout-width">
    	<div className="App-footer--logo">
    		<img alt="UNLEASH logo" />
    	</div>
    	<div className="App-footer--menu__wrp">
	    	<Menu />
			<div className="App-footer--social&newsletter">
				<Social />
				<NewsLetter />
			</div>
		</div>
		<div className="App-footer--copyright">
		<p>2013-2017 UNLEASH Group</p>
		</div>
	</div>
  </footer>
)

export default Footer
