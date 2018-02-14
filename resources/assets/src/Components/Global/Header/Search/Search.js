import React, {Component} from 'react'

class Search extends Component {
	
	constructor(props) {
    	super(props);
    	this.state = {addClass: false};
    	this.toggle = this.toggle.bind(this);
  	}

  	componentDidMount() {
    	document.body.classList.toggle('fx', this.state.addClass)
  	}
  	componentDidUpdate(){
  		document.body.classList.toggle('fx', this.state.addClass)	
  	}
  	componentWillUnmount() {
    	document.body.classList.remove('fx')
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
							<input className="Search--input" type="search" />
							<div className="Search--results">
								<p>UNLEASH Conference & Expo London 2018</p>
								<p>Fashion Companies Need to Rethink Their Lonesome HR Function</p>
								<p>Lonesome HR</p>
								<p>Stewart Brand: The Long Now</p>
								<p>UNLEASH Conference & Expo London 2018</p>
								<p>Fashion Companies Need to Rethink Their Lonesome HR Function</p>
								<p>Lonesome HR</p>
								<p>Stewart Brand: The Long Now</p>
								<p>UNLEASH Conference & Expo London 2018</p>
								<p>Fashion Companies Need to Rethink Their Lonesome HR Function</p>
								<p>Lonesome HR</p>

							</div>
						</div>
					</form>
				</div>
			</section>
		)
	}
}

export default Search