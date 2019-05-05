import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleProductThumb extends Component {
  render() {
    return (
      <div className="item">
        <Link className="horizontal-thumb active" data-target="#owl-single-product" data-slide={1} to="#slide1">
          <img className="img-responsive" alt="product thumb" src="assets/images/blank.gif" data-echo="assets/images/products/p1.jpg" />
        </Link>
      </div>
    );
  }
}
