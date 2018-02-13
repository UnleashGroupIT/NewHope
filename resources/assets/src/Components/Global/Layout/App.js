import React, {Component} from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../../MainContent/MainContent'



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {addClass: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    this.setState(prevState => ({
      addClass: !prevState.addClass}));
  }

  render() {
    return(
    	<Router>
        <div className="App">
    		  <div className="App-container">
            <Header toggle={this.toggle} addClass={this.state.addClass}/>
        		<MainContent />
        	</div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App