import React, { Component } from 'react';
import ProductInfo from './ProductInfo';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import arrayBufferToBase64 from '../../../arrayBufferToBase64';
class ProductDetails extends Component {
  showImage(images) {
    const numberImages = images.length;

    if (numberImages === 0) {
      return null;
    }

    return ('data:image/jpeg;base64,' + arrayBufferToBase64(images[0].data));
  }

  render() {
    let { product } = this.props;
    console.log(product);
    return (
      <div className="container">
        <div className="row single-product">
          <div className="detail-block">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 gallery-holder">
                <div className="product-item-holder size-big single-product-gallery small-gallery">
                  <div id="owl-single-product">
                    <div className="single-product-gallery-item" id="slide1">
                      <Link data-lightbox="image-1" data-title="Gallery" to="">
                        <img className="img-responsive" alt="product" src={this.showImage(product.image)} />
                      </Link>
                    </div>
                  </div>
                  <div className="item">
                    <Link className="horizontal-thumb active" data-target="#owl-single-product" data-slide={1} to="">
                      <img className="img-responsive"
                        alt="product thumb" src="assets/images/blank.gif"
                        data-echo="assets/images/products/p1.jpg" />
                    </Link>
                  </div>
                </div>
              </div>
              <ProductInfo product={product}></ProductInfo>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    product: state.productDetail
  }
}



export default connect(mapStateToProps, null)(ProductDetails);