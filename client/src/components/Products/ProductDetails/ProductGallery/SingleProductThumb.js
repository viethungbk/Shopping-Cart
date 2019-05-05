import React, { Component } from 'react';

export default class SingleProductThumb extends Component {
  render() {
    return (
      <div className="item">
        <a className="horizontal-thumb active" data-target="#owl-single-product" data-slide={1} href="#slide1">
          <img className="img-responsive" alt src="assets/images/blank.gif" data-echo="assets/images/products/p1.jpg" />
        </a>
      </div>
    );
  }
}
