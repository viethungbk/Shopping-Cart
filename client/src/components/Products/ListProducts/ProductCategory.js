import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCategory extends Component {
  render() {
    return (
      <div className="more-info-tab clearfix ">
        <h3 className="new-product-title pull-left">{ this.props.children }</h3>
        <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
          <li className="active"><Link data-transition-type="backSlide" to="#all" data-toggle="tab">All</Link></li>
          <li><Link data-transition-type="backSlide" to="#smartphone" data-toggle="tab">Clothing</Link></li>
          <li><Link data-transition-type="backSlide" to="#laptop" data-toggle="tab">Electronics</Link></li>
          <li><Link data-transition-type="backSlide" to="#apple" data-toggle="tab">Shoes</Link></li>
        </ul>
      </div>
    );
  }
}
