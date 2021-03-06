import React, {Component} from 'react'
import AboutSub from './About-sub/About-sub'

class AboutLi extends Component{

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
      <li className={this.state.liOpen && this.props.width < 768 ? "App-header--li about active" : "App-header--li about"} >
        <p onClick={this.toggle}>About</p>
        <div className="App-header-dropdownBox--outer" >
              <div className="App-header-dropdownBox--inner">
                <div className="Layout-width">
                  <AboutSub />
                </div>
              </div>
            </div>
      </li>
		)
	}

}

export default AboutLi