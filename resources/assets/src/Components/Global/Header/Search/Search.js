import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {
	
	constructor(props) {
    	super(props);
    	this.state = {addClass: false};
    	this.toggle = this.toggle.bind(this);
  	}

  	componentDidMount() {
    	document.body.classList.toggle('fxs', this.state.addClass)
  	}
  	componentDidUpdate(){
  		document.body.classList.toggle('fxs', this.state.addClass)	
  	}
  	componentWillUnmount() {
    	document.body.classList.remove('fxs')
  	}

  	toggle(e) {
    	e.preventDefault();
    	this.setState(prevState => ({
      		addClass: !prevState.addClass}));
 	}



	render(){
		return(
			<section className="Search">
				<button onClick={this.toggle}></button>
				<div className={this.state.addClass ? 'Search--wrp show' : 'Search--wrp' }>
					<form id="Search--form" className="Search--form">
						<div className="Search--input-and-results">
							<input className="Search--input" type="search" placeholder="SEARCH UNLEASH"/>
							<div className="Search--results">
								<h5>DISCOVER UNLEASH</h5>
								<Link to="#"><p>UNLEASH Conference & Expo London 2018</p></Link>
								<Link to="#"><p>Fashion Companies Need to Rethink Their Lonesome HR Function</p></Link>
								<Link to="#"><p>Lonesome HR</p></Link>
								<Link to="#"><p>About UNLEASH</p></Link>
								<Link to="#"><p>Stewart Brand: The Long Now</p></Link>
							</div>
						</div>
					</form>
				</div>
			</section>
		)
	}
}

export default Search