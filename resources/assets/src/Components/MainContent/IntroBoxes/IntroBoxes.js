import React from 'react';

import ContentBox from './ContentBox/ContentBox'
import BigBox from './BigBox/BigBox'
import SmallBox from './SmallBox/SmallBox'


const IntroBoxes = () => (
	<section className="IntroBoxes">
		<ContentBox />
		<div className="ImgBoxes--wrp">
			<BigBox />
			<SmallBox />
			<SmallBox />
		</div>
	</section>
)

export default IntroBoxes