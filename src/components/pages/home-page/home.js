import React, { Component } from 'react'

import './home.css'

import { connect } from 'react-redux'

// exported page
class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleClick(e) {

    }

    render() {

        return (
            <div className="home">

                <div className="home-header">
                    
                    <h1>Family Style BBQ Mexican Resturaunt</h1>

                    <h2>Welcome</h2>
                    <p>At our resturaunt we love home made family barbeque and our customers do as well. We prepair and BBQ chicken and ribs weekly Wednesday through Friday and open at 11:00 a.m.</p>

                </div>

                <h2>Awards</h2>
                <p>Since we opened in 2018 we've won a local peoples choice award every year!</p>

                <div className="awards">

                    <div
                        className="award award-2018">

                        <h2> 2018 </h2>
                        <p>Best New Resturaunt!</p>
                        <img className="award-img" src="../../media/images/2018award.png" />

                    </div>

                    <div
                        className="award award-2019">

                        <h2> 2019 </h2>
                        <p>Best Take Out Food!</p>
                        <img className="award-img" src="../../media/images/2019award.png" />

                    </div>

                    <div
                        className="award award-2020">

                        <h2> 2020 </h2>
                        <p>Best Cheap Eats!</p>
                        <img className="award-img" src="../../media/images/2020award.png" />

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

export default connect(mapStateToProps)(HomePage)