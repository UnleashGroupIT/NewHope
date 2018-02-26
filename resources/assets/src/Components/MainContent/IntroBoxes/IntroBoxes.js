import React from 'react';

import ContentBox from './ContentBox/ContentBox'
import BigBox from './BigBox/BigBox'
import SmallBox from './SmallBox/SmallBox'


const IntroBoxes = () => (
	<section className="IntroBoxes">
		<ContentBox />
		<div className="ImgBoxes--wrp">
			<div className="BigBox--wrp">
				<BigBox src="/storage/Gfx/IntroBoxes/confExpo-IMG.jpg"/>
				<div className="linear-BG"></div>
			</div>
			<div className="SmallBox--wrp">
				<SmallBox src="/storage/Gfx/IntroBoxes/confExpo-IMG2.jpg"/>
				<SmallBox src="/storage/Gfx/IntroBoxes/confExpo-IMG3.jpg"/>
			</div>
		</div>
	</section>
)

export default IntroBoxes