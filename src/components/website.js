import React, { Component } from 'react'

// css for website, default css for page and element
import './website.css'

import { connect } from 'react-redux'

/** redux actions **/
// sets this.props.admin.website { object }
import { updateReduxWebsite } from '../storehouse/actions/admin/administration_actions'

// view components
import MenuMain from './navigation/menu_main'
import Page from '../components/pages/generic'

// Exported View
class Website extends Component {
    constructor(props) {
        super(props)

    }
    generatePageComponent(name) {

        //copy website
        var website = Object.assign({}, this.props.admin.website)
        
        // get page by name from website
        var page = website.pages.find(page => {
            if (page.name === name) {  return page }
        })

        // determine and copy correct css object from page based on matchMedia query
        var mobile = ' ( max-width: 699px ) '

        // build and return page component
        return (
            <Page
                className={page.name}
                key={ page.name }>
                {page.name}
            </Page>
        )

    }// builds and returns component for page

    render() {

        return (
            <div className={ this.props.admin.website.isLoaded ? "website website-loaded" : "website"}>

                {/** MAIN NAVIGATION COMPONENT */}
                <MenuMain
                    toggleDropDownMenu={this.props.toggleDropDownMenu}
                    toggleLivePage={this.props.toggleLivePage} />

                {/** CURRENT PAGE COMPONENT */}
                { this.generatePageComponent(this.props.admin.website.currentPage) }

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {
        
        updateReduxWebsite: objWebsiteProps => dispatch(updateReduxWebsite(objWebsiteProps))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Website)