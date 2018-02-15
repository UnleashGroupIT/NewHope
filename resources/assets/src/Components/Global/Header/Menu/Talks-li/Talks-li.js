import React, {Component} from 'react'
import TalksSub from './Talks-sub/Talks-sub'

class TalksLi extends Component{

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
       <li onClick={this.toggle} className={this.state.liOpen ? "App-header--li talks active" : "App-header--li talks"} >
        <p>Talks</p>
        <div className="App-header-dropdownBox--outer" >
          <div className="App-header-dropdownBox--inner">
            <div className="Layout-width">
              <TalksSub />
            </div>
          </div>
        </div>
      </li>
		)
	}

}

export default TalksLi