import React from 'react'
import Menu from './Menu/Menu'
import Search from './Search/Search'
import Login from './Login/Login'

const Header = props =>(
	<header className="App-header">
		<div className="Layout-width">
			<div className="App-header--menu">
				<div className="App-header--logo-_-menu">
					<div className="App-header--logo">
    					<img alt="UNLEASH logo" />
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
)

export default Header