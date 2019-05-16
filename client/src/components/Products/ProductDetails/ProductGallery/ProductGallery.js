import React, { Component } from 'react';
import SingleProductImage from './SingleProductImage';
import GalleryThumbs from './GalleryThumbs';

export default class ProductGallery extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 gallery-holder">
        <div className="product-item-holder size-big single-product-gallery small-gallery">
          <SingleProductImage></SingleProductImage>

          <GalleryThumbs></GalleryThumbs>
        </div>
      </div>
    );
  }
}
