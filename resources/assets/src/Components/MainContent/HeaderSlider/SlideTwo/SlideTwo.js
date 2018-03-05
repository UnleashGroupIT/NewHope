import React from 'react';

import HighLightOne from '../HighLightOne/HighLightOne'
import HighLightTwo from '../HighLightTwo/HighLightTwo'
import HighLightThree from '../HighLightThree/HighLightThree'

const SlideTwo = props => (
	<div className="MainContent--header sldr slideTwo">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span>Barry Flack &middot; HR Technology</span>
	        		<h1>Control, Flexibility and Balance : Where We’ll Work soon</h1>
	        		<button className="btn-fw">Read now</button>
	    		</div>
			    <div className="MainContent--highlight">
			        <HighLightOne slideOne={props.slideOne}/>
			        <HighLightTwo active slideTwo={props.slideTwo}/>
			        <HighLightThree slideThree={props.slideThree}/>
			    </div>
			</div>      
        </div>
    </div>
)

export default SlideTwo