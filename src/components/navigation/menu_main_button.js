import React, { Component } from 'react'

import './menu_main_button.css'

import { connect } from 'react-redux'

class MenuMainButton extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {

        return (
            <div className="menu-main-button-container">
                    <div
                        className="menu-main-button"
                        onMouseDown={(e) => {
                            this.props.toggleLivePage(e)
                            this.props.toggleDropDownMenu(e)
                        }}>
                        {this.props.children}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(MenuMainButton)
