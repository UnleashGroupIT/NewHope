import React, {Component} from 'react'


class LoginModal extends Component {
	
	constructor(props) {
    	super(props);
    	this.state = {
      		hasAccount: true
    	};

    	this.toggleState = this.toggleState.bind(this);
    }

    toggleState () {
    	this.setState(prevState => ({
      		hasAccount: !prevState.hasAccount}));
    }

	render(){

		const LoginForm = (
			<form action="#" method="POST">
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<div className="ModalContent--submit-wrp">
					<a href="#">Forgot password?</a>
					<button type="submit" className="btn-b">Login With Email</button>
				</div>
			</form>
		)
		const SignupForm = (
			<form action="#" method="POST">
				<div className="ModalContent--fullname">
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
				</div>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<input type="password" placeholder="Confirm Password" />
				<div className="ModalContent--submit-wrp">
					<a href="#">Forgot password?</a>
					<button type="submit" className="btn-b">Sign Up With Email</button>
				</div>
			</form>
		)

		return(
			<section className={this.state.hasAccount ? "ModalContent" : "ModalContent signup"}>
				<div className="ModalContent--headline">
					<h2>{this.state.hasAccount ? "Login" : "Sign Up"}</h2>
					<span className="ModalContent--close">&times;</span>
				</div>
				<div className="ModalContent--decider">
					<h6>{this.state.hasAccount ? "No account?" : "Already have an account?"}</h6>
					<h6 className="ModalContent--changer">{this.state.hasAccount ? "Sign up" : "Log in"}</h6>
				</div>
				<div className="ModalContent--socialLogin">
					<div className="socialLogin--linkedin"><a href="login/linkedin">Log in with linkedin</a></div>
					<div className="socialLogin--google"><a href="login/google">Log in with google</a></div>
					<div className="socialLogin--facebook"><a href="login/facebook">Log in with facebook</a></div>
				</div>
				<div className="ModalContent--OR">
					<h5>OR</h5>
				</div>
				<div className="ModalContent--from">
					{this.state.hasAccount ? LoginForm : SignupForm}
				</div>



				<button onClick={this.toggleState}>change State</button>
				<button onClick={this.props.handleCloseModal}>close</button>
			</section>
		)
	}
	
}

export default LoginModal
