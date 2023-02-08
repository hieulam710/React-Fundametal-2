import React, { Component } from 'react';

class Coin extends Component {
    render() { 
        let {src, title} = this.props

        return (
            <img src={src} alt={`${title}-img`} />
        );
    }
}
 
export default Coin;