import React, {Component} from 'react'
import NewsSub from './News-sub/News-sub'

class NewsLi extends Component{

	constructor(props) {
    super(props);
    this.state = {
      liOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.closeLi = this.closeLi.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
        liOpen: !prevState.liOpen}));
  }
  closeLi(){
   if (this.state.liOpen === true) {
      this.setState({
        liOpen: false}); 
      }      
   }

    render(){
      return(
        <li className={this.state.liOpen && this.props.width < 768 ? "App-header--li news active" : "App-header--li news"} >
          <p onClick={this.toggle}>News</p>
          <div className="App-header-dropdownBox--outer">
            <div className="App-header-dropdownBox--inner">
              <div className="Layout-width">
                <NewsSub toggleMenu={this.props.toggleMenu} closeLi={this.closeLi}/>
              </div>
            </div>
          </div>
        </li>
  		)
	}

}

export default NewsLi