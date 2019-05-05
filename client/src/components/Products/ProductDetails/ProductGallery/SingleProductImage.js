import React, { Component } from 'react';

export default class SingleProductImage extends Component {
  render() {
    return (
      <div id="owl-single-product">
        <div className="single-product-gallery-item" id="slide1">
          <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p1.jpg">
            <img className="img-responsive" alt src="assets/images/blank.gif" data-echo="assets/images/products/p1.jpg" />
          </a>
        </div>
      </div>
    );
  }
}
