import React from 'react'
import Menu from './Menu/Menu'
import NewsLetter from './NewsLetter/NewsLetter'
import Social from './Social/Social'

const Footer = props => (
  <footer className="App-footer">
  	<div className="Layout-width">
    	<div className="App-footer--logo">
    		<img src="/storage/Gfx/Global/Footer/unleash-logoW.svg" alt="UNLEASH" />
    	</div>
    	<div className="App-footer--menu__wrp">
	    	<Menu />
			<div>
				<p><strong>Follow us</strong></p>
				<div className="newsLetter-and-Social">
					<NewsLetter />
					<Social />
				</div>
			</div>
		</div>
		<div className="App-footer--copyright">
		<span>&copy; 2013 - 2017 UNLEASH Group. Made with &#10084; in Budapest.</span>
		</div>
	</div>
  </footer>
)

export default Footer
