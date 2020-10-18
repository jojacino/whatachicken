import React, { Component } from 'react'

import { connect } from 'react-redux'



// exported page
class LogoDark extends Component {
    
    render() {

        return (
            <div className="logo-dark">

                <img alt="company logo red chicken" className="logo-dark-red-chicken" src="./media/images/whatachicken-logo-red.png" />
                <div className="company-name" style={{fontSize:'var(--size-tiny)', margin:'0 auto'}}>What a Chicken!!</div>
                <p className="company-name" style={{ fontSize: 'var(--size-micro)', margin: '0 auto' }}>Pollo Asada</p>

            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps)(LogoDark)