import React, {Component} from 'react'
import NewsSub from './News-sub/News-sub'

class NewsLi extends Component{

	constructor(props) {
    super(props);
    this.state = {
      liOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
        liOpen: !prevState.liOpen}));
  }

    render(){
      return(
        <li onClick={this.toggle} className={this.state.liOpen ? "App-header--li news active" : "App-header--li news"} >
          <p>News</p>
          <div className="App-header-dropdownBox--outer">
            <div className="App-header-dropdownBox--inner">
              <div className="Layout-width">
                <NewsSub />
              </div>
            </div>
          </div>
        </li>
  		)
	}

}

export default NewsLi