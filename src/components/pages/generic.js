import React, { Component } from 'react'

import './generic.css'

import { connect } from 'react-redux'

// exported page
class Page extends Component {
    constructor(props) {
        super(props)

    }

    media(minSize) {

        return window.matchMedia("(max-width: " + minSize + "px)").matches ? true : false
    }
    goLarge(e) {

        if (this.props.menus.main.expanded) {
            this.props.toggleDropDownMenu()
        }

    }
    render() {

        return (
            <div className="viewport">

                {this.props.admin.website.pages.map((page, index) => {
                    if (page.name === this.props.className) {
                        return (
                            
                            <div key={"page:" + index} className="page">
                                {page.content}
                            </div>
                            )
                    }
                })}

                {/* PAGE FOOTER FOR EVERY PAGE */}
                <footer className="page-footer">

                    {this.media(400) ? (() => {

                        return (
                            <>
                                <p>This Website is powered by</p>
                                <div className="powered-by"><div>REACT</div>REDUX</div>

                                <a href="mailto:jojacino@gmail.com">Sugar C☼ded Web</a> <div className="copyright">copyright &copy; 2020, all rights reserved</div>

                                {/** Grid Area **/}

                            </>
                            )

                    })() :

                        (() => {

                            return (
                                <>

                                    <a href="mailto:jojacino@gmail.com">Sugar C☼ded Web</a> <div className="copyright">copyright &copy; 2020, all rights reserved</div>

                                    {/** Grid Area **/}

                                    <p>This Website is powered by</p>
                                    <div className="powered-by"><div>REACT</div>REDUX</div>

                                </>
                                )

                        })()}

                </footer>

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps)(Page)