import React from 'react'

const NewsLetter = () => (
	<div className="newsLetter">
		<form action="" method="POST">
			<input className="newsLetter--input" type="email" placeholder="Subscribe to our newsletter" />
			<button className="newsLetter--submit" type="submit"></button>
		</form>
	</div>
);

export default NewsLetter