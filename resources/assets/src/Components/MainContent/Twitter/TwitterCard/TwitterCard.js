import React from 'react'

const TwitterCard = () => (
	<section className="TwitterCard">
		<div className="TwitterCard--wrp">
			<div className="TwitterCard-IMG">
				<img src="/storage/Gfx/Agenda/agenda-speakerIMG.png" alt="IMG" />
			</div>
			<div className="TwitterCard--Name">
				<h5>Elizabeth Johnson</h5>
				<span>@liz_johnson</span>
			</div>
		</div>
		<div className="TwitterCard--Content">
			<p>I really enjoyed last year's @UnleashAmerica. The whole conference was very well organised. The expo was surprisingly lively too. Definitely one of the most inspiring events I've attended so far 🤘👏</p>
		</div>
		<div><span>Jan 15, 2018  &middot;  Las Vegas, USA</span></div>
	</section>
)

export default TwitterCard