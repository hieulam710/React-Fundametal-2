import React, { Component } from 'react';
import "./navbar.css"

class Products extends Component {

  render() {
    let { id, name, price, imageUrl,number} = this.props.element
    let {handleBuy , handleSell , disabled } = this.props
    return (
      <div className="element"><img src={imageUrl} alt="AirPods Pro" id={id}/>
        <p id="name">{name}</p>
        <span id="price">{price}$</span>
        <div className="buyAndSellContainer" data-price={249}>
          <button className="btn-sell" onClick={handleSell} id="sell" disabled={disabled} >Sell</button>
          <span id="amount">{number}</span>
          <button className="btn-buy" onClick={handleBuy} id="buy">Buy</button>
        </div>
      </div>
    );
  }
}

export default Products;