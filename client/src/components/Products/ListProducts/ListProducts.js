import React, { Component } from 'react';
import Product from './Product';

export default class ListProducts extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-9">
        <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
              <Product></Product>
              <Product></Product>
        </div>
      </div>
    );
  }
}
