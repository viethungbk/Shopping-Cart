import React, { Component } from 'react';
import SingleProductThumb from './SingleProductThumb';

export default class GalleryThumbs extends Component {
  render() {
    return (
      <div className="single-product-gallery-thumbs gallery-thumbs">
        <div id="owl-single-product-thumbnails">
          <SingleProductThumb></SingleProductThumb>
          <SingleProductThumb></SingleProductThumb>
          <SingleProductThumb></SingleProductThumb>
          <SingleProductThumb></SingleProductThumb>
        </div>
      </div>
    );
  }
}
