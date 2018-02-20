import React from 'react';

import HighLightOne from '../HighLightOne/HighLightOne'
import HighLightTwo from '../HighLightTwo/HighLightTwo'
import HighLightThree from '../HighLightThree/HighLightThree'

const SlideOne = props => (
	<div className="MainContent--header slideOne">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span>Alex Cooper &middot; Future of Work</span>
	        		<h1>The robots are here: is this the end of decision making by humans?</h1>
	        		<button className="btn-w">Read now</button>
	    		</div>
			    <div className="MainContent--highlight">
			        <HighLightOne active slideOne={props.slideOne}/>
			        <HighLightTwo slideTwo={props.slideTwo}/>
			        <HighLightThree slideThree={props.slideThree}/>
			    </div>
			</div>      
        </div>
    </div>
)

export default SlideOne