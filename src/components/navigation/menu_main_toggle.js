import React, { Component } from 'react'
import './menu_main_toggle.css'

import { connect } from 'react-redux'

class MenuMainToggle extends Component {
    
    render() {

        return (
            <div
                className="menu-main-toggle-container">

                <img
                    alt="menu toggle icon. select to open menu"
                    className="menu-main-toggle" 
                    onMouseUp={this.props.toggleDropDownMenu} 
                    src="./media/images/flame.svg" />

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(MenuMainToggle)
