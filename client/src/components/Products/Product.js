import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <div className="tab-content outer-top-xs">
        <div className="tab-pane in active" id="all">
          <div className="product-slider">
            <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
              <div className="item item-carousel">
                <div className="products">
                  <div className="product">
                    <div className="product-image">
                      <div className="image"> 
                        <a href="detail.html">
                          <img src="assets/images/products/s10.jpg" alt /> 
                          <img src="assets/images/products/s10_hover.jpg" alt className="hover-image" />
                        </a> 
                      </div>
                      {/* /.image */}
                      <div className="tag new"><span>new</span></div>
                    </div>
                    {/* /.product-image */}
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Samsung Galaxy S10</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                      {/* /.product-price */} 
                    </div>
                    {/* /.product-info */}
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                      {/* /.action */} 
                    </div>
                    {/* /.cart */} 
                  </div>
                  {/* /.product */} 
                </div>
                {/* /.products */} 
              </div>
              {/* /.item */}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
