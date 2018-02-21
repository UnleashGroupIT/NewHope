import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Slider from 'react-slick'

class CategSlider extends Component {
	
	render(){
		const settings = {
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
    	};
		return(
			<section className="CategSlider">
				<div className="Layout-width">
					<Slider {...settings}>
				        <div><h3>1</h3></div>
				        <div><h3>2</h3></div>
				        <div><h3>3</h3></div>
				        <div><h3>4</h3></div>
				        <div><h3>5</h3></div>
				        <div><h3>6</h3></div>
				     </Slider>
				</div>
			</section>
		)
	}
}



export default CategSlider