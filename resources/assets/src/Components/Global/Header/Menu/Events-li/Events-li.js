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
        <li onClick={this.toggle} className={this.state.liOpen ? "App-header--li events active" : "App-header--li events"} >
          <p>Events</p>
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