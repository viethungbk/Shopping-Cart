import React, { Component } from 'react';
import Product from './Product';

export default class ListProducts extends Component {
  render() {
    return (
      <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
            <Product></Product>
            <Product></Product>
      </div>
    );
  }
}
