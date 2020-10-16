import React, { Component } from 'react'

import './menu.css'

import { connect } from 'react-redux'

// paired components
import LogoDark from '../shared/logo_dark'

// exported page
class MenuPage extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div className="menu-container">

                <img className="menu-sign" src="./media/images/whatachicken-sign.png" />

                <div className="menu">

                    <div className="menu-section">
                        <h1>GRILLED</h1>
                        <div className="banner-box"></div>

                        <p className="menu-item"><h2 style={{ display: 'inline' }}>2</h2> Piece BBQ, <h2 style={{ display: 'inline' }}>2</h2>Sides<h2 className="price" style={{ margin: 'auto' }}>$7.99</h2></p>

                        <p className="menu-item"><h2 style={{ display: 'inline' }}>4</h2> Piece BBQ, <h2 style={{ display: 'inline' }}>2</h2>Sides<h2 className="price" style={{ margin: 'auto' }}>$12.99</h2></p>

                        <p className="menu-item"><h2 style={{ display: 'inline' }}>8</h2> Piece BBQ, <h2 style={{ display: 'inline' }}>2</h2>Sides<h2 className="price" style={{ margin: 'auto' }}>$18.00</h2></p>

                    </div>

                    <div className="menu-section">
                        <h1>BURRITOS</h1>
                        <h4 className="menu-sub-header">Wraps & Salads</h4>

                        <h3 className="menu-item" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Chicken<h2 className="price">$9.99</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Steak<h2 className="price">$11.99</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Shrimp<h2 className="price">$11.99</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Veggie<h2 className="price">$9.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Pastor<h2 className="price">$10.00</h2></h3>

                    </div>

                    <div className="menu-section">
                        <h1>TACOS</h1>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Chicken<h2 className="price">$5.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Steak<h2 className="price">$7.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Fish<h2 className="price">$7.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Shrimp<h2 className="price">$9.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Veggie<h2 className="price">$5.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Pastor<h2 className="price">$5.00</h2></h3>

                    </div>

                    <div className="menu-section">
                        <h1>SIDES</h1>
                        <h2 className="price" style={{ margin: 'auto' }}>$3.00</h2>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Potato Salad</h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coleslaw</h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Salad</h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Spanish Rice</h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>White Rice & Veggies</h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Refried Beans</h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Black Beans</h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Home Made Tortillas</h3>

                    </div>


                    <div className="menu-section">
                        <h1>DRINKS</h1>
                        <img className="doodle" src="./media/images/doodle.png" />

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Large Agua Fresca<h2 className="price">$4.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Medium Agua Fresca<h2 className="price">$3.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Small Agua Fresca<h2 className="price">$2.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Canned Soda<h2 className="price">$2.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Bottled Soda<h2 className="price">$3.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Coffee<h2 className="price">$2.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Domestic Beer<h2 className="price">$4.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Imported Beer<h2 className="price">$5.00</h2></h3>

                        <h3 className="menu-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Wine<h2 className="price">$5.00</h2></h3>


                    </div>
                    
                    <LogoDark />

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

export default connect(mapStateToProps)(MenuPage)