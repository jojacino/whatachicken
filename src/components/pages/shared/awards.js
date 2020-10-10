import React, { Component } from 'react'

import { connect } from 'react-redux'

// exported page
class Awards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeAward: '0'
        }

        this.handleClickAward = this.handleClickAward.bind(this)
    }
    handleClickAward(e) {

        if (this.state.activeAward === e.target.id || this.state.activeAward === e.target.parentNode.id) this.setState({ activeAward: '0' })
        else this.setState({ activeAward: e.target.id || e.target.parentNode.id })

    }

    render() {

        return (
            <div className="awards-container">

                {/** Awards Section **/}
                <h2>Awards</h2>
                <p>Since we opened in 2018 we've won a local peoples choice award every year!</p>

                <div className="awards">

                    <div
                        id="1"
                        onMouseUp={this.handleClickAward}
                        className={'award award-2018'}>

                        <h2
                            onMouseUp={this.handleClickAward}> 2018 </h2>
                        <p
                            onMouseUp={this.handleClickAward}>Best New Resturaunt!</p>

                        <div className={this.state.activeAward === '1' ? 'award-active award-cover' : 'award-cover'}>
                            <img
                                onMouseUp={this.handleClickAward}
                                className={"award-img"}
                                src="../../media/images/2018award.png" />
                        </div>

                    </div>

                    <div
                        id="2"
                        onMouseUp={this.handleClickAward}
                        className={'award award-2019'}>

                        <h2
                            onMouseUp={this.handleClickAward}> 2019 </h2>
                        <p
                            onMouseUp={this.handleClickAward}>Best Take Out Food!</p>

                        <div className={this.state.activeAward === '2' ? 'award-active award-cover' : 'award-cover'}>
                            <img
                                onMouseUp={this.handleClickAward}
                                className={"award-img"}
                                src="../../media/images/2019award.png" />
                        </div>

                    </div>

                    <div
                        id="3"
                        onMouseUp={this.handleClickAward}
                        className={'award award-2020'}>

                        <h2
                            onMouseUp={this.handleClickAward}> 2020 </h2>
                        <p
                            onMouseUp={this.handleClickAward}>Best Cheap Eats!</p>

                        <div className={this.state.activeAward === '3' ? 'award-active award-cover' : 'award-cover'}>
                            <img
                                onMouseUp={this.handleClickAward}
                                className={"award-img"}
                                src="../../media/images/2020award.png" />
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps)(Awards)