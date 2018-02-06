import React from 'react';
import Menu from './Menu/Menu';
import Search from './Search/Search';
import Login from './Login/Login';

const Header = props =>(
	<header>
		<Menu />
		<Search />
		<Login />
		<p>Headerrrr</p>
	</header>
);

export default Header;