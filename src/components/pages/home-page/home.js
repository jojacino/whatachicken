import React, { Component } from 'react'

import './home.css'

import { connect } from 'react-redux'

// exported page
class HomePage extends Component {
    constructor(props) {
        super(props)

        this.orderOnline = this.orderOnline.bind(this)
    }
    orderOnline() {
        let link = document.createElement('a')
        link.href = "https://ordering.app/whatachicken/"
        link.click()
    }

    render() {

        return (
            <div className="home">

                {/** Header Section **/}
                <div className="home-header">
                    
                    <h1>Family Style BBQ Mexican Resturaunt</h1>

                    <h2>Welcome</h2>
                    <p>At our resturaunt we love home made family barbeque and our customers do as well. We prepair and BBQ chicken and ribs weekly Wednesday through Friday and open at 11:00 a.m.</p>

                </div>

                {/** Invite Section **/}
                <div className="home-invite">

                    <h2>Chicken & Ribs</h2>
                    <p>We have BBQ plates with chicken and ribs, a delicious selection of sides including: rice, beans, coleslaw, and salad. We also serve burritos and tacos with your choice of camaron (shrimp), pescado (fish), carne asada (steak), pollo asada (bbq-chicken), and al pastor (bbq-pork).</p>

                    <p>Check out our menu for more!</p>

                </div>

                {/** Image Section **/}
                <div className="home-image-container">
                    <h1>BBQ Chicken & Ribs</h1>
                    <div className="home-image"></div>
                </div>

                {/** Ordering App Section */}
                <div className="ordering-app" onClick={this.orderOnline}>
                    <div className="ordering-app-text">Order Online</div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(HomePage)