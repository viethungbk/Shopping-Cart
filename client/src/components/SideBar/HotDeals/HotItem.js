import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HotItem extends Component {
  render() {
    return (
      <div className="item">
        <div className="products">
          <div className="hot-deal-wrapper">
            <div className="image">
              <Link to="">
                <img src="/assets/images/hot-deals/p13.jpg" alt="hot deals" />
                <img src="/assets/images/hot-deals/p13_hover.jpg" alt="hot deals" className="hover-image" />
              </Link>
            </div>
            <div className="sale-offer-tag"><span>49%<br />
              off</span></div>
            <div className="timing-wrapper">
              <div className="box-wrapper">
                <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
              </div>
              <div className="box-wrapper">
                <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
              </div>
              <div className="box-wrapper">
                <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
              </div>
              <div className="box-wrapper">
                <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
              </div>
            </div>
          </div>
          {/* /.hot-deal-wrapper */}
          <div className="product-info text-left m-t-20">
            <h3 className="name"><Link to="/product-details">Floral Print Buttoned</Link></h3>
            <div className="rating rateit-small" />
            <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
            {/* /.product-price */}
          </div>
          {/* /.product-info */}
          <div className="cart clearfix animate-effect">
            <div className="action">
              <div className="add-cart-button btn-group">
                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
              </div>
            </div>
            {/* /.action */}
          </div>
          {/* /.cart */}
        </div>
      </div>
    );
  }
}
