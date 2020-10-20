import React, { Component } from 'react'

import './ordering_app.css'

import { connect } from 'react-redux'

// exported page
class OrderingApp extends Component {
    
    render() {

        return (
            <a 
                target="_blank"
                rel="noreferrer noopener"
                href="https://ordering.app/whatachicken/"
                className="ordering-app">
                <div className="ordering-app-text">Order Online</div>
            </a>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(OrderingApp)