import React, { Component } from 'react'

import './ordering_app.css'

import { connect } from 'react-redux'

// exported page
class OrderingApp extends Component {
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
            <div className="ordering-app" onClick={this.orderOnline}>
                <div className="ordering-app-text">Order Online</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(OrderingApp)