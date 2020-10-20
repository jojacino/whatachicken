import React, { Component } from 'react'

// stylesheets
import './administration.css'

// import connet from redux
import { connect } from 'react-redux'

/** redux actions **/
// sets this.props.admin.website { object }
import { updateReduxWebsite } from '../storehouse/actions/admin/administration_actions'

// sets the props.menus.main { object }
import { updateReduxMenuMain } from '../storehouse/actions/general/menu_actions'

// import other website components
import OutOfNavigationArea from '../admin/out_of_navigation_area' // Standard Out of Navigation 
import Website from '../components/website' // Component handles page displaying

/** ADMINISTRATION HANDLES URI DETECTION, VALID USER DETECTION, AND GATEWAYS TO COMPONENTS  */
class Administration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadTimeMS: 500 // set pause for loading css fade_in :: time in local state for convenience
        }

        // SHARED METHOD BINDINGS
        this.isDisplaying = this.isDisplaying.bind(this)
        this.setLivePage = this.setLivePage.bind(this)
        this.toggleLivePage = this.toggleLivePage.bind(this)
        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this)
    }

    // SHARED METHODS
    isDisplaying(pageIndex) {

        var today = Date.now()

        var fromValue = this.props.admin.website.pages[pageIndex].displayTime.from
        var toValue = this.props.admin.website.pages[pageIndex].displayTime.to

        var from = Date.parse(fromValue, today)
        var to = Date.parse(toValue, today)

        if (today >= from && today <= to) return true
        if (fromValue === "" && toValue === "") return true
        if (toValue === "" && today >= from) return true
        if (fromValue === "" && today <= to) return true

        return false

    }// returns bool true or false if page displayTime is current
    setLivePage(name) {

        var website = Object.assign({}, this.props.admin.website)
        website.currentPage = name
        this.props.updateReduxWebsite(website)

    }// sets this.props.admin.website.currentPage to string:'name' NOTE: SETS PAGE IN VIEWPORT BY PROXY
    toggleLivePage(e) {

        // get inner html from button
        var name = (e.target.innerHTML.trim()).toLocaleLowerCase()

        // set admin.website.currentPage
        this.setLivePage(name)
        /**/
        // set url in adress bar
        window.history.replaceState(null, name, name)
        /**/
    } //  for (MENU MAIN BUTTONS)
    toggleDropDownMenu() {

        // copy menu main to new object
        var menuMain = Object.assign({}, this.props.menus.main)

        // flip boolean value in redux to expand menu
        menuMain.expanded = menuMain.expanded ? false : true

        // overwrite redux values
        this.props.updateReduxMenuMain(menuMain)

    } // toggles redux main menu isexpanded boolean value

    // LOCAL METHODS
    verifyPath() {

        // get window path name for verificaton
        var pathname = window.location.pathname

        // get pages to check path name against urls in page
        var pages = Object.assign({}, this.props.admin.website).pages

        // return true if no pathname or path is at root
        if (pathname === '' || pathname === '/') return true

        // return true if pathname is found in page.urls of any loaded database page object
        for (var page of pages) {
            if(page.urls.find(url => url === pathname)) return true
        }

        // if current windows.location.pathname is not found in list and is not at root; return false
        return false

    } // boolean if path name is found in page urls
    pageFromPath() {

        // get window path name for verificaton
        var pathname = window.location.pathname

        // get pages to check path name against urls in page
        var pages = Object.assign({}, this.props.admin.website).pages

        // return page if pathname is found in page.urls
        for (var page of pages) {
            if (page.urls.find(url => url === pathname)) return page
        }

        // return false if no page.url found matching pathname
        return false

    } // returns page containing url of pathname or false if not found
    initializeWebsite() {

        /** SET NAVIGATION BY PATHNAME **/
        // set admin.website.currentPage property to pathname if valid or default of 'home'
        if (this.verifyPath()) {
            this.setLivePage(this.pageFromPath().name || 'home')
        }

        // load website after state.loadTimeMS
        setTimeout(() => {

            // get website props
            var website = Object.assign({}, this.props.admin.website)

            website.isLoaded = true

            this.props.updateReduxWebsite(website)

        }, this.state.loadTimeMS)

    } // initializes website :: implements NAVIGATION BY PATHNAME
    
    // RENDERING METHODS
    componentDidMount() {

        // initialize the website inside of adminstration
        this.initializeWebsite()

    }
    render() {

        /** Handle Standard Website **/
        if (this.verifyPath()) {

            // return standard website
            return (
                <div className="administration">

                    <Website
                        toggleDropDownMenu={this.toggleDropDownMenu}
                        toggleLivePage={this.toggleLivePage} />

                </div>
            )
        }
        else if (this.props.admin.website.isLoaded) { // INVALID USER AND PATH :: Out Of AreA

            return (
                <div className="administration">
                    <OutOfNavigationArea />
                </div>
            )
        }
        else { // loading <div> if website is NOT loaded

            return ( // return gray oolored loading... text
                <div style={{ backgroundColor: 'var(--color-light-gray)', color: 'var(--color-med-gray)' }}>Loading...</div>
            )
        }
    }
}

// call redux state to component
const mapStateToProps = state => ({ ...state })

// call redux actions to component
const mapDispatchToProps = dispatch => {
    return {
        
        updateReduxMenuMain: menuMain => dispatch(updateReduxMenuMain(menuMain)),
        updateReduxWebsite: website => dispatch(updateReduxWebsite(website))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Administration)