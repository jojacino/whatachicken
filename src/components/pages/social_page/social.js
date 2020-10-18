import React, { Component } from 'react'

import './social.css'

import { connect } from 'react-redux'

// exported page
class SocialPage extends Component {
    constructor(props) {
        super(props)

        this.facebook = this.facebook.bind(this)
    
    }
    facebook() {
        let link = document.createElement('a')
        link.href = "https://www.facebook.com/pages/category/Restaurant/What-A-Chicken-753261015010738/"
        link.click()
    }
    yelp() {
        let link = document.createElement('a')
        link.href = "https://www.yelp.com/biz/what-a-chicken-petaluma?start=260"
        link.click()
    }

    render() {

        return (
            <div className="social">

                {/** Header Section **/}
                <div className="social-header">
                    
                    <h1>Check Out Our Following!!</h1>

                </div>

                {/** Image Section **/}
                <div
                    onClick={this.facebook}
                    className="social-image-container">

                    <div onClick={this.facebook}>
                        Like US
                    </div>

                    <div className="social-image-1"></div>

                </div>
                <div className="social-image-container">

                    <div onClick={this.yelp}>
                        Read and Post Reviews
                    </div>

                    <div className="social-image-3"></div>

                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(SocialPage)