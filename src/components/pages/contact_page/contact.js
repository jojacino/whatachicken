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
    phone() {

        let link = document.createElement('a')
        link.href = "tel:7079717549"
        link.click()
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

                    <span className="location" onClick={this.googleMaps}>
                        <img className="contact-icon" alt="location icon" src="../../../media/images/location.svg" />
                        <h2>Our Location</h2>
                        <p>706 E Washington Street Petaluma <span></span> CA 94952</p>
                    </span>

                    <span className="phone" onClick={this.phone}>
                        <img className="contact-icon" alt="phone icon" src="../../../media/images/phone.svg" />
                        <h2>Our Phone</h2>
                        <p>(707) 971-7549</p>
                    </span>
                    
                    <div className="hours">
                        <h2>Hours</h2>
                        <p>Open: Wednesday through Saturday, 11:00 am to 8:00 pm</p>
                    </div>
                    
                    <div className="contact-image"></div>

                </div>
                

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(AboutPage)
