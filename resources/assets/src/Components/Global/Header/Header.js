import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu/Menu'
import Search from './Search/Search'
import Login from './Login/Login'

class Header extends Component {
	
	constructor(props) {
    	super(props);
  	}

	render(){
		return(
			<div className="App-header--placeholder">
				<header className={this.props.direction ? "App-header sticky" : "App-header"} >
					<div className="Layout-width">
						<div className="App-header--menu">
							<div className="App-header--logo-_-menu">
								<div className="App-header--logo">
			    					<Link to="/"><img src="/storage/Gfx/Global/Header/unleash-logoB.svg" alt="UNLEASH" /></Link>
			    				</div>
								<Menu />
							</div>
							<div className="App-header--search-_-login">
								<Search />
								<Login />
							</div>
						</div>
					</div>
				</header>
			</div>
		)
	}
}

export default Header