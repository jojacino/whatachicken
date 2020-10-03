import React, { Component } from 'react'

import './menu_main.css'

import { connect } from 'react-redux'

// custom components
import MenuMainButton from './menu_main_button'
import MenuMainToggle from './menu_main_toggle'

class MenuMain extends Component {
    constructor(props) {
        super(props)

        this.goLarge = this.goLarge.bind(this)

    }
    media(minSize) {

        return window.matchMedia("(max-width: " + minSize + "px)").matches ? true : false
    }
    goLarge(e) {

        if (this.props.menus.main.expanded) {
            this.props.toggleDropDownMenu()
        }

    }
    componentDidUpdate() {
        if (!this.media(400))
            this.goLarge()
    }

    render() {

        return (
                <div
                className={"menu-main"}>
                        
                    {/* DROPDOWN MENU  HIDING AREA */}
                    <div className="dropdown-hiding-area">

                        {/* changes class based on redux value this.props.menus.main.expanded */}
                        <div className={this.props.menus.main.expanded === true ? "menu-main-button-box-expanded" : "menu-main-button-box-closed"}>

                            {this.props.admin.website.pages.map(page => {

                                return (
                                    <MenuMainButton
                                        toggleDropDownMenu={this.media(400) ? this.props.toggleDropDownMenu : this.goLarge}
                                        toggleLivePage={this.props.toggleLivePage}
                                        key={page.name + ':button:' + page.position}>
                                        {page.name.replace('-page', '').toUpperCase()}
                                    </MenuMainButton>
                                )
                            })}

                        </div>
                    </div>
                {/** company name and icon **/}
                <div className="company-logo-container">
                    <img
                        src="./media/images/whatachicken-logo-red.png"
                        className="company-logo" />
                </div>
                <div className="company-name-container">

                <h1 className="company-name"><div className="company">What a</div> <div className="company-name-punctuation"> Chicken!!</div></h1>

                    <h2 className="company-description">Pollo Asado</h2>
                </div>

                {/* toggle button for dropdown menu  */}
                <MenuMainToggle
                toggleDropDownMenu={ this.media(400) ? this.props.toggleDropDownMenu : this.goLarge } />

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuMain)
