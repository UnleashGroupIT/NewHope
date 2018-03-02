import React, { Component } from 'react'
import Modal from 'react-modal';

import LoginModal from '../../Modals/Login/LoginModal'

Modal.setAppElement('#root');

class Login extends Component {
	
	constructor () {
	    super();
	    this.state = {
	      showModal: false
	    };
	    
	    this.handleOpenModal = this.handleOpenModal.bind(this);
	    this.handleCloseModal = this.handleCloseModal.bind(this);
  	}

	componentDidMount() {
		document.body.classList.toggle('fxs', this.state.showModal)
	}
	componentDidUpdate(){
		document.body.classList.toggle('fxs', this.state.showModal)	
	}
  	componentWillUnmount() {
    	document.body.classList.remove('fxs')
  	}
  
	handleOpenModal () {
	    this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
	    this.setState({ showModal: false });
	}


	render(){
		return(
			<section className="Login">
		        <button className="Login-btn" onClick={this.handleOpenModal}></button>
		        
		        <Modal 
		           isOpen={this.state.showModal}
		           contentLabel="onRequestClose Example"
		           onRequestClose={this.handleCloseModal}
		           className="Modal"
		           overlayClassName="Overlay"
		        >
		          <LoginModal handleCloseModal={this.handleCloseModal} />
		        </Modal>

        	</section>
		)
	}

}

export default Login