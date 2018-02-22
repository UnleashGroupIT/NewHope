import React, {Component} from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../../MainContent/MainContent'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      directionUP:false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  handleScroll(event) {
     if (window.oldScroll > window.scrollY && this.state.directionUP === false) {
        this.setState({
          directionUP:true
        });
     }else if ((window.oldScroll < window.scrollY && this.state.directionUP === true) || window.scrollY === 0 ){
        this.setState({
          directionUP:false
        });
     }
     window.oldScroll = window.scrollY
  }

  render() {
    return(
    	<Router>
        <div className="App">
    		  <div className="App-container">
            <Header direction={this.state.directionUP}/>
        		<MainContent direction={this.state.directionUP}/>
        	</div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App