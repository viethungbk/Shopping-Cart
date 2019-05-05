import React, { Component } from 'react';

export default class ProductCategory extends Component {
  render() {
    return (
      <div className="more-info-tab clearfix ">
        <h3 className="new-product-title pull-left">{ this.props.children }</h3>
        <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
          <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
          <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
          <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
          <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
        </ul>
      </div>
    );
  }
}
