import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class HighlightOne extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={this.props.active ? "Highlight One Active" : "Highlight One" } onClick={this.props.slideOne}>
        <div className="Highlight--details">
          <span className="Highlight--category">Alex Cooper &middot; <Link to="#">Future of Work</Link></span>
          <h5>The Robots Are Here: IS THIS The End of Decision Making by Humans?</h5>
        </div>
      </div>
    )
  }
}

export default HighlightOne