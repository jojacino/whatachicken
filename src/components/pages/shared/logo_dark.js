import React, { Component } from 'react'

import { connect } from 'react-redux'



// exported page
class LogoDark extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="logo-dark">

                <img className="logo-dark-red-chicken" src="./media/images/whatachicken-logo-red.png" />
                <div className="company-name" style={{fontSize:'var(--size-tiny)', margin:'0 auto'}}>What a Chicken!!</div>
                <p className="company-name" style={{ fontSize: 'var(--size-micro)', margin: '0 auto' }}>Pollo Asada</p>

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps)(LogoDark)