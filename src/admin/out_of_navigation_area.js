import React, { Component } from 'react'
import './out_of_navigation_area.css'

class OutOfNavigationArea extends Component {
    goBack() {
        window.history.back()
        window.location.pathname = '/'
    }
    render() {
        return (
            <div className="out-of-navigation-area">
                <div>You are out of the navigation area.</div>
                <div className="back-button" onMouseUp={this.goBack}>Go Back</div>
            </div>
        )
    }
}

export default OutOfNavigationArea