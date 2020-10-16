import React, { Component } from 'react'

import './contact.css'

import { connect } from 'react-redux'

// exported page
class AboutPage extends Component {
    constructor(props) {
        super(props)

        this.googleMaps = this.googleMaps.bind(this)
    
    }
    googleMaps() {

        window.location.href = "https://www.google.com/maps/dir//" + "706 E Washington Street, Petaluma CA 94952".replace(/ /gm, '+')
    }

    render() {

        return (
            <div className="contact">

                {/** Header Section **/}
                <div className="contact-header">

                    <h1>Contact Us</h1>

                </div>

                {/** Image Section **/}
                <div className="contact-image-container">

                    <span className="location">
                        <h2>Our Location</h2>
                        <p onClick={this.googleMaps}>706 E Washington Street Petaluma <span></span> CA 94952</p>
                    </span>

                    <span className="phone">
                        <h2>Our Phone</h2>
                        <a href="tel:7079717549">(707) 971-7549</a>
                    </span>
                    
                    <div className="contact-image"></div>

                </div>
                

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