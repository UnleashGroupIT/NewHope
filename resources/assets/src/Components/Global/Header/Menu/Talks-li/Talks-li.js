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
       <li className={this.state.liOpen && this.props.width < 768 ? "App-header--li talks active" : "App-header--li talks"} >
        <p onClick={this.toggle}>Talks</p>
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