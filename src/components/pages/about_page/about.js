import React, { Component } from 'react'

import './about.css'

import { connect } from 'react-redux'

// oaired components
import Awards from '../shared/awards'

// exported page
class AboutPage extends Component {
    constructor(props) {
        super(props)
    
    }

    render() {

        return (
            <div className="about">

                {/** Header Section **/}
                <div className="about-header">
                    
                    <h1>About What a Chicken!!</h1>

                    <p>We are a family owned Mexican barbeque eatery serving deliciously prepared BBQ chicken, ribs, and al pastor in Petaluma California.</p>

                </div>

                {/** Image Section **/}
                <div className="about-image-container">
                    <h2>Our Location</h2>
                    <p>706 E Washington Street Petaluma <span></span> CA 94952</p>
                    <div className="about-image-1"></div>
                </div>

                {/** Invite Section **/}
                <div className="about-invite">

                    <h2>Why What a Chicken?</h2>
                    <p>At What a Chicken we care about our community. We prepare fresh barbeque and sides daily and offer it all to you at excellent pricing.</p>

                    {/** Image Section **/}
                    <div className="about-image-container">
                        <h2>BBQ Plates!!</h2>
                        <div className="about-image-2"></div>
                    </div>

                    {/** Image Section **/}
                    <div className="about-image-container">
                        <h2>Burritos & Tacos!!</h2>
                        <div className="about-image-3"></div>
                    </div>

                    {/** Image Section **/}
                    <div className="about-image-container">
                        <h2>Join Us!!</h2>
                        <div className="about-image-4"></div>
                    </div>

                    <p>Great BBQ is what we do and you are always welcome to join us here, at What a Chicken!!</p>

                </div>

                {/* Awards Section */}
                <Awards />

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps)(AboutPage)