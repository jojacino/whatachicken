import React, { Component } from 'react'

import './text.css'

import { connect } from 'react-redux'

/** redux actions **/
// sets this.props.admin.website { object } and also methods { object } to enable components to optionally share methods
import { updateReduxWebsite, updateReduxMethods } from '../../storehouse/actions/admin/administration_actions'

// custom methods and properties
import { xhrPromise } from '../../storehouse/constants/methods'
import { dbURL } from '../../storehouse/constants/properties'

// exported element
class Text extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.getThisElement = this.getThisElement.bind(this)
    }
    handleChange(event, editor) {

        // copy new value from textarea
        const data = editor.getData()

        // copy redux admin website property
        var website = Object.assign({}, this.props.admin.website)

        // index the element which matches whatever current className
        var index = (() => {
            var x = website.elements.length
            while (x--) {
                if (website.elements[x].name === this.props.className) return x
            }
        })()

        // overwrite copied website with new element value
        website.elements[index].value = data

        // overwrite redux
        this.props.updateReduxWebsite(website)
    }
    handleBlur(event, editor) {

        // assemble elemnt package for current className and save element changes to database
        var website = Object.assign({}, this.props.admin).website
        var element = website.elements.find(elem => elem.name == this.getThisElement().name)
        var index = website.elements.indexOf(element)

        // set database
        website.elements[index].value = editor.getData()

        // stringify JSON in element
        website.elements[index].css = JSON.stringify(website.elements[index].css)
        website.elements[index].displayTime = JSON.stringify(website.elements[index].displayTime)

        // valid token is required
        var token = this.props.admin.userData.token

        xhrPromise('post', dbURL + 'element/update', { token, ...website.elements[index] }).then(result => {
            // database updated

            // re-pares JSON in element for Redux
            website.elements[index].css = JSON.parse(website.elements[index].css)
            website.elements[index].displayTime = JSON.parse(website.elements[index].displayTime)

            // refresh redux
            this.props.updateReduxWebsite(website)

        })
    }
    handleFocus(e) {

        
    }
    getThisElement() {

        var website = this.props.admin.website
        var x = website.elements.length
        return (() => {
            while (x--) {
                if (website.elements[x].name === this.props.className) {
                    return Object.assign({}, website.elements[x])
                }
            }
        })()

    }
    getMarkup(markup) {

        return { __html: markup }
    }
    render() {

        document.execCommand("defaultParagraphSeparator", false, "br")

        let element = {

            'guest': () => {
                return (
                    <div
                        css={this.props.css}
                        dangerouslySetInnerHTML={this.getMarkup(this.props.value)}>
                    </div>
                )
            },
            'admin': () => {

                return (
                    <div
                        suppressContentEditableWarning
                        contentEditable={true}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}>
                        {this.props.value}
                    </div>
                )
            }
        }

        return this.props.admin.userData.isValid ? element['admin']() : element['guest']()
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {
        updateReduxWebsite: website => dispatch(updateReduxWebsite(website)),
        updateReduxMethods: methods => dispatch(updateReduxMethods(methods))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Text)