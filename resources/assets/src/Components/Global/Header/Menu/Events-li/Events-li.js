import React, {Component} from 'react'
import EventsSub from './Events-sub/Events-sub'

class EventsLi extends Component{

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
        <li className={this.state.liOpen && this.props.width < 768 ? "App-header--li events active" : "App-header--li events"} >
          <p onClick={this.toggle}>Events</p>
          <div className="App-header-dropdownBox--outer" >
                <div className="App-header-dropdownBox--inner">
                  <div className="Layout-width">
                    <EventsSub />
                  </div>
                </div>
              </div>
        </li>
  		)
	}

}

export default EventsLi