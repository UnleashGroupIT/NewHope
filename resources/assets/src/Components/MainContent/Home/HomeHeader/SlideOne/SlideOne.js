import React from 'react';

import NewsHighLight from '../../../News/NewsHighLight/NewsHighLight'
import TalkHighLight from '../../../Talks/TalkHighLight/TalkHighLight'

const SlideOne = props => (
	<div className="MainContent--header SlideOne">
        <div className="Layout-width">
     		<div className="MainContent--header---wrp">
	    		<div className="MainContent--title">
	        		<span>Alex Cooper &middot; Future of Work</span>
	        		<h1>The robots are here : is this the end of decision making by humans?</h1>
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

export default SlideOne