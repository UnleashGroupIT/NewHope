import React from 'react'
import { Link } from 'react-router-dom'

import NewsLetter from '../../../Global/Footer/NewsLetter/NewsLetter'

const NewsLetterBanner = () => (
	<section className="NewsLetter-Banner">
	 	<h2>SUBSCRIBE TO<br />OUR NEWSLETTER</h2>
	 	<p>Do you want more? Do you want to get all these goodies on a daily basis? Join us in our movement for a better future!</p>
	 	<NewsLetter />
	 	<span>By subscribing to our newsletter you agree to the <Link to="#">Terms & Conditions</Link> and our <Link to="#">Privacy Policy</Link>.</span>
	</section>
);

export default NewsLetterBanner