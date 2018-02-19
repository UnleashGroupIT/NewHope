import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class TalkHighlight extends Component {

  render(){
    return(
      <div className="Highlight talk">
        <div className="Highlight--details">
          <span className="Highlight--category"><Link to="#">{this.props.category}</Link></span>
          <h5>{this.props.title}</h5>
        </div>
      </div>
    )
  }
}

export default TalkHighlight

TalkHighlight.defaultProps = {
  title:'Default Talk prop highlight title in the main header',
  category:'Culture'
};