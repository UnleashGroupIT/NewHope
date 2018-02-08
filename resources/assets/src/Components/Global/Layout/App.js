import React, {Component} from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../../MainContent/MainContent'



class App extends React.Component {
  render() {
    return(
    	<div className="App">
    		<Router>
                <div className="App-container">
                    <Header />
        			<MainContent />
        		</div>
            </Router>
    		<Footer />
    	</div>
    )
  }
}

export default App