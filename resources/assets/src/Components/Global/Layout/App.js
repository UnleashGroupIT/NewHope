import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return(
    	<div className="App">
    		<Header />

    		<Footer />
    	</div>
    );
  }
}

export default App;