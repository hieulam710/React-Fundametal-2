
import React, { Component } from 'react';

class Dice extends Component {
    render() {
        return (
            <div>
            <i className={`fa-solid fa-dice-${this.props.face} ${this.props.animation}`} />
            </div>
        );
}
}

export default Dice;