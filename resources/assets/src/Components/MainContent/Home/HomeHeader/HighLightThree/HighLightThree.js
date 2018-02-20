import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class HighlightThree extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={this.props.active ? "Highlight Three talk Active" : "Highlight Three talk" } onClick={this.props.slideThree}>
        <div className="Highlight--details">
          <span className="Highlight--category">Culture</span>
          <h5>How Can Your Company Work to Eliminate the Gender Pension Gap..</h5>
        </div>
      </div>
    )
  }
}

export default HighlightThree