import React, { Component } from 'react'
import './menu_main_toggle.css'

import { connect } from 'react-redux'

class MenuMainToggle extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div
                className="menu-main-toggle-container">

                <img className="menu-main-toggle" onMouseUp={this.props.toggleDropDownMenu} src="./media/images/flame.svg" />

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(MenuMainToggle)
