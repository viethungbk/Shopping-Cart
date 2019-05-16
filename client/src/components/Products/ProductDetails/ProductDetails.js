import React, { Component } from 'react';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';

export default class ProductDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="row single-product">
          <div className="detail-block">
            <div className="row">
              <ProductGallery></ProductGallery>
              <ProductInfo></ProductInfo>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
