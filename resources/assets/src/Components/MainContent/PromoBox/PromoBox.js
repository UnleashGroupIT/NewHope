import React from 'react'

const PromoBox = props => (
	<section className="PromoBox">
		<img src={props.src} alt="IMG" />
		<div className="PromoBoxDetails--wrp">	
			<h2>{props.name}</h2>
			<p>Registration closes on 24.12.2018</p>
		</div>
	</section>
)

export default PromoBox