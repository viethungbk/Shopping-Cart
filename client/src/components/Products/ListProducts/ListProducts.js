import React, { Component } from 'react';
import Product from './Product';
import ProductCategory from './ProductCategory';
import Slider from './Slider';

export default class ListProducts extends Component {
  render() {
    return (
      <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
        <ProductCategory>{ this.props.children }</ProductCategory>
        <div className="tab-content outer-top-xs">
          <div className="tab-pane in active" id="all">
            <div className="product-slider">
              <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
