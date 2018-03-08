import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NewsLatestPopular extends Component {
    
    constructor(props){
        super(props);
        this.state={
            latest:true,
            popular:false
        };
        this.activateLatest = this.activateLatest.bind(this);
        this.activatePopular = this.activatePopular.bind(this);
    }

    activateLatest () {
        this.setState({
            latest: true,
            popular: false
        });
    }
    activatePopular () {
        this.setState({
            latest: false,
            popular: true
        });
    }

    render(){
        return(
            <div className="News--wrp">
                <div className="Headline">
                    <div className="News--Title-and-Categs">
                        {this.props.name ? <div className="News--title">
                            <h2>{this.props.name}</h2>    
                        </div> : null }
                        <div className="News--Categs">
                            <button onClick={this.activateLatest} className={this.state.latest ? "btnspn-b" : "btnspn-b passive"}>
                              <span className="border-top">
                                <span className="transparent"></span>
                              </span>
                                Latest
                              <span className="border-bottom">
                                <span className="transparent"></span>
                              </span>
                            </button>
                            <button onClick={this.activatePopular} className={this.state.popular ? "btnspn-b" : "btnspn-b passive"}>
                              <span className="border-top">
                                <span className="transparent"></span>
                              </span>
                                Popular
                              <span className="border-bottom">
                                <span className="transparent"></span>
                              </span>
                            </button>
                        </div>
                    </div>
                    {this.props.seeAll ? <div className="seeAll">
                        <Link to="news">See all</Link>
                    </div> : null} 
                </div>        
                <div className="NewsCard--wrp">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default NewsLatestPopular