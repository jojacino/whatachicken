import React, { Component } from 'react'

import './generic.css'

import { connect } from 'react-redux'

// exported page
class Page extends Component {
    constructor(props) {
        super(props)

        this.googleMaps = this.googleMaps.bind(this)
    }

    media(minSize) {

        return window.matchMedia("(max-width: " + minSize + "px)").matches ? true : false
    }
    goLarge(e) {

        if (this.props.menus.main.expanded) {
            this.props.toggleDropDownMenu()
        }

    }
    googleMaps() {

        window.location.href = "https://www.google.com/maps/dir//" + "706 E Washington Street, Petaluma CA 94952".replace(/ /gm, '+')
    }

    render() {

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
                        <p onClick={this.googleMaps}>706 E Washington St, Petaluma, CA 94952</p>
                        <a href="tel:7079717549">(707) 971-7549</a>

                    </div>

                    {/* Sugar Coded Info || Web Master */}
                    {this.media(400) ? (() => {

                        return (
                            <div className="sugar-coded">
                                <p>This Website is powered by</p>
                                <div className="powered-by"><div>REACT</div>REDUX</div>

                                <a href="mailto:jojacino@gmail.com">Sugar C☼ded Web</a> <div className="copyright">copyright &copy; 2020, all rights reserved</div>

                            </div>
                            )

                    })() :

                        (() => {

                            return (
                                <div className="sugar-coded">
                                    <a href="mailto:jojacino@gmail.com">Sugar C☼ded Web</a> <div className="copyright">copyright &copy; 2020, all rights reserved</div>

                                    <p>This Website is powered by</p>
                                    <div className="powered-by"><div>REACT</div>REDUX</div>

                                </div>
                                )

                        })()}

                    {/* Social Links */}
                    <div className="footer-social">

                        <div className="footer-social-logos">
                            <a className="footer-social-facebook" href="https://www.facebook.com/pages/What%20A%20Chicken/161197614732924/">Facebook</a>

                            <a className="footer-social-yelp" href="https://www.yelp.com/biz/what-a-chicken-petaluma">Yelp</a>
                        </div>

                        <a href="https://www.sonomacounty.com/restaurants/what-chicken">sonomacounty.com</a>

                        <a href="https://www.petaluma360.com/article/news/petalumas-what-a-chicken-gets-crowing-praise/?artslide=2&sba=AAS">Argus Courier.com</a>


                    </div>
                    
                </footer>

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(Page)