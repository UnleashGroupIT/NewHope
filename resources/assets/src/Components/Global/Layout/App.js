import React, {Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import MainContent from '../../MainContent/MainContent'

class App extends React.Component {
  render() {
    return(
    	<div className="App">
    		<div className="container">
    			<Header />
    			<MainContent />
    		</div>
    		<Footer />
    	</div>
    )
  }
}

export default App