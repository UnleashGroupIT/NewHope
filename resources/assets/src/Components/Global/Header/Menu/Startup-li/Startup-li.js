import React, {Component} from 'react'
import StartupSub from './Startup-sub/Startup-sub'

class StartupLi extends Component{

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
      <li className={this.state.liOpen && this.props.width < 768 ? "App-header--li startup active" : "App-header--li startup"} >
        <p onClick={this.toggle}>Startup HUB</p>
        <div className="App-header-dropdownBox--outer" >
              <div className="App-header-dropdownBox--inner">
                <div className="Layout-width">
                  <StartupSub />
                </div>
              </div>
            </div>
      </li>
    )
  }

}

export default StartupLi