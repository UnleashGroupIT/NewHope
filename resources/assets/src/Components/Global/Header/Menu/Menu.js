import React, {Component} from 'react'
import NewsLi from './News-li/News-li'
import TalksLi from './Talks-li/Talks-li'
import EventsLi from './Events-li/Events-li'
import StartupLi from './Startup-li/Startup-li'
import AboutLi from './About-li/About-li'

class Menu extends Component {

	constructor(props) {
      super(props);
      this.state = {
        menuOpen: false,
      };
      this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
    	document.body.classList.toggle('fxm', this.state.menuOpen)
  	}
  	componentDidUpdate(){
  		document.body.classList.toggle('fxm', this.state.menuOpen)	
  	}
  	componentWillUnmount() {
    	document.body.classList.remove('fxm')
  	}

    toggle() {
    	this.setState(prevState => ({
      		menuOpen: !prevState.menuOpen}));
 	}


	render(){

		return(
			<div className="App-header--nav---wrp">
				<nav className={this.state.menuOpen ? "App-header--nav active" : "App-header--nav"}>
						<div className="App-header--ticket-and-ul">
							<div className="App-header--ticket">
								<h3>Unleash World Conference &amp; Expo</h3>
									<div className="App-header--ticket---wrp">
										<div className="Event-card--place-and-date">
								    		<div className="Event-card-place">
								          		<h6>Amsterdam &middot; Rai</h6>
								        	</div>
								    		<div className="Event-card-date">
								          		<h6>23-24. October 2018</h6>
								        	</div>
										</div>
										<div className="booknow">
											<button className="btn-w">Book now</button>
										</div>
									</div>
							</div>
							
							<ul className="App-header--ul">
					        	<NewsLi />
					        	<TalksLi />
								<EventsLi />
								<StartupLi />
								<AboutLi />
							</ul>
						</div>
						<div className="App-header--mobileApp">
							<h5>Download the app</h5>
						</div>
				</nav>
				<div onClick={this.toggle} className={this.state.menuOpen ? "hamburger hamburger--emphatic is-active" : "hamburger hamburger--emphatic"}>
				  <div className="hamburger-box">
				    <div className="hamburger-inner"></div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Menu