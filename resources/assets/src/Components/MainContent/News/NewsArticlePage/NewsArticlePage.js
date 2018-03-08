import React, {Component} from 'react'
import Waypoint from 'react-waypoint'
import NewsLatestPopular from '../NewsLatestPopular/NewsLatestPopular'
import NewsCard from '../NewsCard/NewsCard'
import NewsLetterMobileAppBanner from '../../NewsLetter-MobileApp-Banner/NewsLetterMobileAppBanner'

class NewsArticlePage extends Component {

      constructor(props) {
        super(props);
        this.state = {
          waypoint:false
        };
        this.enterWaypoint = this.enterWaypoint.bind(this);
        this.leaveWaypoint = this.leaveWaypoint.bind(this);
      }

      enterWaypoint () {
            this.setState({ waypoint: true });
      }

      leaveWaypoint () {
            this.setState({ waypoint: false });
      }

      render(){
            console.log(this.state.waypoint)
            return(
                  <section className="NewsArticlePage">
                        <div className="Layout-width">
                              <h1>How is AI Transforming Traditional Recruitment Roles?</h1>
                              <div className="NewsArticlePage--details">
                                    <span>Felix</span>
                                    <span>Future of Work</span>
                                    <span>Jan 15, 2018</span>
                                    <span>5 min read</span>
                                    <span>Sponsored by Workday</span>
                              </div>
                           <Waypoint onLeave={this.enterWaypoint} >
                              <div className="NewsArticlePage--mainIMG">
                                    <img src="/storage/Gfx/News/Article/article-IMG.jpg" alt="IMG" />
                              </div>
                           </Waypoint>
                              <div className="NewsArticlePage--wrp">
                                    <div className={this.state.waypoint ? "NewsArticlePage--share fxd" : "NewsArticlePage--share"}>
                                          <span className="Article-likeNumber">34</span>
                                          <img className="Article-like" src="/storage/Gfx/News/Article/article-like.svg" alt="Like this Article" />
                                          <img className="Article-bookmark" src="/storage/Gfx/News/Article/article-bookmark.svg" alt="Book this Article" />
                                          <img src="/storage/Gfx/News/Article/article-facebook.svg" alt="Share on Facebook" />
                                          <img src="/storage/Gfx/News/Article/article-twitter.svg" alt="Share on Twitter" />
                                          <img src="/storage/Gfx/News/Article/article-linkedin.svg" alt="Share on Linkedin" />
                                          <img src="/storage/Gfx/News/Article/article-slack.svg" alt="Share on Slack" />
                                          <img src="/storage/Gfx/News/Article/article-mail.svg" alt="Share in E-mail" />
                                          <img src="/storage/Gfx/News/Article/article-copylink.svg" alt="CopyLink" />
                                    </div>
                                    <div className="NewsArticlePage--content">
                                          <h4>Automation, especially artificial intelligence, and machine learning, has a massive effect on the recruitment industry; the results prove it. In all likelihood, it will completely replace recruitment as we know it. Some will moan and mourn, while others will move on and adjust.</h4>
                                          <h2>In-house recruiters</h2>
                                          <h3>Recruitment systems</h3>
                                          <p>In the current narrative, recruitment consultants will be first on the block, while the in-house recruiters sit pretty and continue to fulfill meaningful tasks. I believe it’s the opposite; the in-house recruiters (be they directly employed or via an RPO) are the most vulnerable. </p>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          <h3>Company resources</h3>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          </div>
                                          <NewsLetterMobileAppBanner />
                                          <div className="NewsArticlePage--content">
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          <h2>Agency recruiters</h2>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          <Waypoint onEnter={this.enterWaypoint} />
                                          <div className="NewsArticlePage--contentIMG">
                                                <img src="/storage/Gfx/News/Article/article-contentIMG.jpg" alt="IMG"/>
                                                <span>Siyan Ren - Futuristic Robot in a Gas Mask</span>
                                          </div>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          <p>They will be squashed between the hiring manager and the 3rd party recruiter, and this is why: AI and machine intelligence put more control and power into the hiring manager’s hands. The machine learns from their hiring decisions, therefore producing more accurate shortlists and hiring suggestions. This will become even acuter as companies like Elevate Direct become more prevalent, offering platforms that allow for complete talent self-sufficiency.</p>
                                          </div>
                                    </div>
                              <Waypoint onEnter={this.leaveWaypoint} >
                                    <NewsLatestPopular name="Related">
                                      <NewsCard />
                                      <NewsCard />
                                      <NewsCard />
                                      <NewsCard />
                                    </NewsLatestPopular>
                              </Waypoint>
                        </div>
                  </section>
            )
      }
}

export default NewsArticlePage