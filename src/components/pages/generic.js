import React, { Component } from 'react'

import './generic.css'

import { connect } from 'react-redux'

// exported page
class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mediaLarge: window.matchMedia("(max-width: 700px)").matches ? false : true
        }

        this.media = this.media.bind(this)
        this.goLarge = this.goLarge.bind(this)
        
        this.media('700')
    }
    
    media(minSize) {
        
        const page = this
        const mediaQueryList = window.matchMedia("(max-width: " + minSize + "px)")

        function handleMediaChange(e) {
            if (e.matches) {
                /* The viewport is currently below 700px */
                page.setState({mediaLarge: false})

            } else {
                /* The viewport is currently above 700px */
                page.setState({mediaLarge: true})

            }
        }
        
        mediaQueryList.addEventListener('change', handleMediaChange)
    }
    goLarge(e) {

        if (this.props.menus.main.expanded) {
            this.props.toggleDropDownMenu()
        }

    }

    render() {

        let menuRandom = Math.round(Math.random() * 1) ? "drinks" : "food"
        let contactRandom = Math.round(Math.random() * 1) ? "phone" : "location"
        
        return (
            <div className="viewport">

                {this.props.admin.website.pages.map((page, index) => {
                    if (page.name === this.props.className) {
                        return (
                            
                            <div
                                key={"page:" + index} className="page">
                                {page.content}
                            </div>
                            )
                    }
                    else {
                        return(<div key={"page:" + index + " blank"}></div>)
                    }
                })}


                {/* PAGE FOOTER FOR EVERY PAGE */}
                <footer className="page-footer">

                    {/* Company Info */}
                    <div className="footer-company">

                        What a Chicken BBQ Restaurant
                        <a 
                            target="_blank"
                            rel="noreferrer noopener"
                            href={"https://www.google.com/maps/dir//" + "706 E Washington Street, Petaluma CA 94952".replace(/ /gm, '+')}>
                        706 E Washington Street, Petaluma CA 94952
                        </a>
                        <a 
                            href="tel:7079717549">
                            (707) 971-7549
                        </a>

                    </div>

                    {/* Sugar Coded Info || Web Master */}
                    {this.state.mediaLarge ? (() => {

                        return (
                            <div className="sugar-coded">

                                <p>This Website is powered by</p>

                                <a 
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    href="mailto:jojacino@gmail.com">
                                        Sugar Coded 
                                    <img
                                        alt="sugar coded web logo"
                                        className="logo"
                                        src="./media/images/logo.png" />eb
                                </a>
                                
                                <div className="copyright">copyright &copy; 2020, all rights reserved</div>

                            </div>
                        )
                        })() : <div></div>
                    }

                    {/* Social Links */}
                    <div id="footer" className="bottom-nav">
                        <a href="/welcome">Home</a>
                        <a href={"/" + menuRandom }>Menu</a>
                        <a href="/info">About</a>
                        <a href={"/" + contactRandom }>Contact</a>
                        <a href="/events">Social</a>
                    </div>

                    <a 
                        href="#header"
                        className="header-footer-toggle">
                            To Top
                    </a>

                    <div className="footer-social">

                        <div className="footer-social-logos">

                            <a 
                                target="_blank"
                                rel="noreferrer noopener"
                                className="footer-social-facebook" 
                                href="https://www.facebook.com/pages/What%20A%20Chicken/161197614732924/">
                                    Facebook
                            </a>

                            <a 
                                target="_blank"
                                rel="noreferrer noopener"
                                className="footer-social-yelp" 
                                href="https://www.yelp.com/biz/what-a-chicken-petaluma">
                                    Yelp
                            </a>

                        </div>

                        <a 
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.sonomacounty.com/restaurants/what-chicken">
                                sonomacounty.com
                            </a>

                        <a 
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.petaluma360.com/article/news/petalumas-what-a-chicken-gets-crowing-praise/?artslide=2&sba=AAS">
                                Argus Courier.com
                            </a>


                    </div>
                    
                    {/* Sugar Coded Info || Web Master */}
                    {!this.state.mediaLarge ? (() => {

                        return (
                            <div className="sugar-coded">

                                <p>This Website is powered by</p>

                                <a 
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    href="mailto:jojacino@gmail.com">
                                        Sugar Coded 
                                    <img
                                        alt="sugar coded web logo"
                                        className="logo"
                                        src="./media/images/logo.png" />eb
                                </a>
                                
                                <div className="copyright">copyright &copy; 2020, all rights reserved</div>

                            </div>
                        )

                    })() : <div></div>
                    }

                </footer>


            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Page)
