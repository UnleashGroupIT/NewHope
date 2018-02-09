import React, {Component} from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../../MainContent/MainContent'



class App extends React.Component {
  render() {
    return(
    	<Router>
            <div className="App">
    		  <div className="App-container">
                <Header />
        		<MainContent />
        	  </div>
              <Footer />
            </div>
        </Router>
    )
  }
}

export default App