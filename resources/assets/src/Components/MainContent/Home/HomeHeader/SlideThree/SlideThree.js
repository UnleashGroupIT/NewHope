import React from 'react';

import NewsHighLight from '../../../News/NewsHighLight/NewsHighLight'
import TalkHighLight from '../../../Talks/TalkHighLight/TalkHighLight'

const SlideThree = props => (
	<div className="MainContent--header SlideThree">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span>Culture</span>
	        		<h1>How Can Your Company Work to Eliminate the Gender Pension Gap TO MOVE FORWARD</h1>
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

export default SlideThree