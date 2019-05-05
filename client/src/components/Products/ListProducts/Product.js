import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    return (
      <div className="item item-carousel">
        <div className="products">
          <div className="product">

            {/* Anh San Pham */}
            <div className="product-image">
              <div className="image">
                <Link to="/product-details">
                  <img src="assets/images/products/s10.jpg" alt="product" />
                  <img src="assets/images/products/s10_hover.jpg" alt="product hover" className="hover-image" />
                </Link>
              </div>
              <div className="tag new"><span>new</span></div>
            </div>

            {/* Thong tin San Pham */}
            <div className="product-info text-left">
              <h3 className="name"><Link to="/product-details">Samsung Galaxy S10</Link></h3>
              <div className="rating rateit-small" />
              <div className="description" />
              <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
            </div>

            {/* Hanh dong */}
            <div className="cart clearfix animate-effect">
              <div className="action">
                <ul className="list-unstyled">
                  <li className="add-cart-button btn-group">
                    <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart" /> </button>
                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                  </li>
                  <li className="lnk wishlist"> <Link data-toggle="tooltip" className="add-to-cart" to="/product-details" title="Wishlist"> <i className="icon fa fa-heart" /> </Link> </li>
                  <li className="lnk"> <Link data-toggle="tooltip" className="add-to-cart" to="/product-details" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </Link> </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}
