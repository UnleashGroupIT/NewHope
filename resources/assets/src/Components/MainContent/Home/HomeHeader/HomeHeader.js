import React, { Component } from 'react'

import SlideOne from './SlideOne/SlideOne';
import SlideTwo from './SlideTwo/SlideTwo';
import SlideThree from './SlideThree/SlideThree';

class HomeHeader extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
          slideCount: 1
        };
        this.slideOne = this.slideOne.bind(this);
        this.slideTwo = this.slideTwo.bind(this);
        this.slideThree = this.slideThree.bind(this);
    }

    slideOne(){
    	this.setState({
      		slideCount:1});
    }
    slideTwo(){
    	this.setState({
      		slideCount:2});
    }
    slideTwo(){
    	this.setState({
      		slideCount:3});
    }

	render(){
		return(
			<div>
				{ this.state.slideCount === 1 ? <SlideOne slideOne={this.slideOne} slideTwo={this.slideTwo} slideThree={this.slideThree} /> : null }
		        { this.state.slideCount === 2 ? <SlideTwo slideOne={this.slideOne} slideTwo={this.slideTwo} slideThree={this.slideThree} /> : null }
		        { this.state.slideCount === 3 ? <SlideThree slideOne={this.slideOne} slideTwo={this.slideTwo} slideThree={this.slideThree} /> : null }
	        </div>
		)
	}
}

export default HomeHeader