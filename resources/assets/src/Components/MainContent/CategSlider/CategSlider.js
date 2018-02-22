import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Slider from 'react-slick'

class CategSlider extends Component {
	
	constructor(props) {
      super(props);
      this.state = {
      	beSticky:false
      };
      this.handleScroll = this.handleScroll.bind(this);
  	}

  	componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

    handleScroll(event) {
	    if (window.scrollY > 700 && this.state.beSticky === false) {
	        this.setState({
	          beSticky:true
	        });
	    }else if(window.scrollY < 700 && this.state.beSticky === true){
	    	this.setState({
	          beSticky:false
	        });
	    }
	}

	render(){
		const settings = {
	      dots: false,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 4,
	      slidesToScroll: 4,
	      initialSlide: 0,
	      responsive: [{
	        breakpoint: 1024,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 3,
	          infinite: true,
	          dots: true
	        }
	      }, {
	        breakpoint: 600,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 2,
	          initialSlide: 2
	        }
	      }, {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }]
   		 };

   		 let section;
   		 if (this.state.beSticky && this.props.direction) {
   		 	section = (
   		 		<section className="CategSlider stickywM">
	   		 		<div className="Layout-width">
						<Slider {...settings}>
					        <div><Link to="#">All news</Link></div>
					        <div><Link to="#">Future of Work</Link></div>
					        <div><Link to="#">Smart Data</Link></div>
					        <div><Link to="#">Recruitment</Link></div>
					        <div><Link to="#">HR Tech Analysts</Link></div>
					        <div><Link to="#">Employee Experience</Link></div>
					        <div><Link to="#">Talent & Recruitment</Link></div>
					        <div><Link to="#">Wellbeing & Engagement</Link></div>
					        <div><Link to="#">Other Stuff</Link></div>
					        <div><Link to="#">Whats this?</Link></div>
					     </Slider>
					</div>
				</section>
   		 	)
   		 }else if(this.state.beSticky && !this.props.direction){
   		 	section = (
   		 		<section className="CategSlider sticky">
	   		 		<div className="Layout-width">
						<Slider {...settings}>
					        <div><Link to="#">All news</Link></div>
					        <div><Link to="#">Future of Work</Link></div>
					        <div><Link to="#">Smart Data</Link></div>
					        <div><Link to="#">Recruitment</Link></div>
					        <div><Link to="#">HR Tech Analysts</Link></div>
					        <div><Link to="#">Employee Experience</Link></div>
					        <div><Link to="#">Talent & Recruitment</Link></div>
					        <div><Link to="#">Wellbeing & Engagement</Link></div>
					        <div><Link to="#">Other Stuff</Link></div>
					        <div><Link to="#">Whats this?</Link></div>
					     </Slider>
					</div>
				</section>
   		 	)
   		 }else{
   		 	section = (
   		 		<section className="CategSlider">
	   		 		<div className="Layout-width">
						<Slider {...settings}>
					        <div><Link to="#">All news</Link></div>
					        <div><Link to="#">Future of Work</Link></div>
					        <div><Link to="#">Smart Data</Link></div>
					        <div><Link to="#">Recruitment</Link></div>
					        <div><Link to="#">HR Tech Analysts</Link></div>
					        <div><Link to="#">Employee Experience</Link></div>
					        <div><Link to="#">Talent & Recruitment</Link></div>
					        <div><Link to="#">Wellbeing & Engagement</Link></div>
					        <div><Link to="#">Other Stuff</Link></div>
					        <div><Link to="#">Whats this?</Link></div>
					     </Slider>
					</div>
				</section>
   		 	)
   		 }

		return(
			<div>{section}</div>
		)
	}
}

export default CategSlider