import React from 'react'
import Menu from './Menu/Menu'
import Search from './Search/Search'
import Login from './Login/Login'

const Header = props =>(
	<header className="App-header">
		<div className="App-header--menu__wrp">
			<div className="Layout-width">
				<div className="App-header--menu">
					<Menu />
					<div className="App-header--search&login">
						<Search />
						<Login />
					</div>
				</div>
			</div>
		</div>
		<div className="Layout-width">
			<h1>Header content</h1>
		</div>
	</header>
)

export default Header