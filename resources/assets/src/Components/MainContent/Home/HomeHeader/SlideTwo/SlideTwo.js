import React from 'react';

import NewsHighLight from '../../../News/NewsHighLight/NewsHighLight'
import TalkHighLight from '../../../Talks/TalkHighLight/TalkHighLight'

const SlideTwo = props => (
	<div className="MainContent--header SlideTwo">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span>Barry Flack &middot; HR Technology</span>
	        		<h1>Control, Flexibility and Balance : Where We’ll Work soon</h1>
	        		<button className="btn-w">Read now</button>
	    		</div>
			    <div className="MainContent--highlight">
			        <NewsHighLight slideOne={props.slideOne}/>
			        <NewsHighLight slideTwo={props.slideTwo}/>
			        <TalkHighLight slideThree={props.slideThree}/>
			    </div>
			</div>      
        </div>
    </div>
)

export default SlideTwo