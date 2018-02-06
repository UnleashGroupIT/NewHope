import React from 'react';
import Menu from './Menu/Menu';
import NewsLetter from './NewsLetter/NewsLetter';
import Social from './Social/Social';

const Footer = props =>(
	<footer>
		<Menu />
		<Social />
		<NewsLetter />
	</footer>
);

export default Footer;