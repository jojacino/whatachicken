import React, { Component } from 'react'

import './video.css'

import { connect } from 'react-redux'

/** redux actions **/
// sets this.props.admin.website { object } and also methods { object } to enable components to optionally share methods
import { updateReduxWebsite, updateReduxMethods } from '../../storehouse/actions/admin/administration_actions'

// custom methods and properties
import { xhrPromise } from '../../storehouse/constants/methods'
import { dbURL } from '../../storehouse/constants/properties'

// exported element
class Video extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleChange(e) {

        console.log('element change')
    }
    handleBlur(e) {

        console.log('element blur')
    }
    render() {

        let element = {
            'guest': () => {
                return (
                    <div
                        className={this.props.className}>

                    </div>
                )
            },
            'admin': () => {
                return (
                    <div
                        className={this.props.className}>

                    </div>
                )
            }
        }

        return this.props.admin.userData.isValid ? element['admin'] : element['guest']
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {
        updateReduxWebsite: website => dispatch(updateReduxWebsite(website)),
        updateReduxMethods: methods => dispatch(updateReduxMethods(methods))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video)