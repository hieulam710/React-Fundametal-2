import React, { Component } from 'react';
import "./navbar.css"

class Navbar extends Component {
    render() {

        let {total , percent} = this.props
        const fomater = new Intl.NumberFormat("en-US",{
            style : "currency",
            currency: "USD",
        })
        total = fomater.format(total)
        return (
            <div className="total">
                <div className="totalMoney" id="totalMoney">
                    <div className="totalMoney">Remaining: {total} USD</div>
                </div>
                <div className="percentageLeft" id="percentageLeft">
                    <div className="percentageLeft">You only spent {percent.toFixed(6)} % of the total!</div>
                </div>
            </div>
        );
    }
}

export default Navbar;