import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu/Menu'
import Search from './Search/Search'
import Login from './Login/Login'

const Header = props =>(
	<header className="App-header">
		<div className="Layout-width">
			<div className="App-header--menu">
				<div className="App-header--logo-_-menu">
					<div className="App-header--logo">
    					<Link to="/"><img src="/storage/Gfx/Global/Header/unleash-logoB.svg" alt="UNLEASH" /></Link>
    				</div>
					<Menu />
				</div>
				<div className="App-header--search-_-login">
					<Search toggle={props.toggle} addClass={props.addClass}/>
					<Login />
				</div>
			</div>
		</div>
	</header>
)

export default Header