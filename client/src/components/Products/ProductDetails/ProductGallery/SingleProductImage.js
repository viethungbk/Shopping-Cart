import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleProductImage extends Component {
  render() {
    return (
      <div id="owl-single-product">
        <div className="single-product-gallery-item" id="slide1">
          <Link data-lightbox="image-1" data-title="Gallery" to="assets/images/products/p1.jpg">
            <img className="img-responsive" alt="product" src="assets/images/blank.gif" data-echo="assets/images/products/p1.jpg" />
          </Link>
        </div>
      </div>
    );
  }
}
