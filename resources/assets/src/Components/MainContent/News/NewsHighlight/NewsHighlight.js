import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NewsHighlight extends Component {

  render(){
    return(
      <div className="Highlight news">
        <div className="Highlight--details">
          <span className="Highlight--category">{this.props.author} &middot; <Link to="#">{this.props.category}</Link></span>
          <h5>{this.props.title}</h5>
        </div>
      </div>
    )
  }
}

export default NewsHighlight

NewsHighlight.defaultProps = {
  title:'Default News prop highlight title in the main header',
  author:'Alex Cooper',
  category:'Category'
};