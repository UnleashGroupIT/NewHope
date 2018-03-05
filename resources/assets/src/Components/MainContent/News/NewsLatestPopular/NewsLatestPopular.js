import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import NewsCard from '../NewsCard/NewsCard'

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
                            <button onClick={this.activateLatest} className={this.state.latest ? "btn-bw" : "btn-bw passive"}>Latest</button>
                            <button onClick={this.activatePopular} className={this.state.popular ? "btn-bw" : "btn-bw passive"}>Popular</button>
                        </div>
                    </div>
                    <div className="seeAll">
                        <Link to="news">See all</Link>
                    </div> 
                </div>        
                <div className="NewsCard--wrp">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </div>
        )
    }
}

export default NewsLatestPopular