import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
        <div className="dropdown dropdown-cart">
          <Link to="" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
            <div className="items-cart-inner">
              <div className="basket">
                <div className="basket-item-count"><span className="count">2</span></div>
                <div className="total-price-basket"> <span className="lbl">Shopping Cart</span> <span className="value">$4580</span> </div>
              </div>
            </div>
          </Link>
          <ul className="dropdown-menu">
            <li>
              <div className="cart-item product-summary">
                <div className="row">
                  <div className="col-xs-4">
                    <div className="image"> <Link to="/product-details"><img src="/assets/images/products/p4.jpg" alt="product" /></Link> </div>
                  </div>
                  <div className="col-xs-7">
                    <h3 className="name"><Link to="">Simple Product</Link></h3>
                    <div className="price">$600.00</div>
                  </div>
                  <div className="col-xs-1 action"> <Link to=""><i className="fa fa-trash" /></Link> </div>
                </div>
              </div>
              {/* /.cart-item */}
              <div className="clearfix" />
              <hr />
              <div className="clearfix cart-total">
                <div className="pull-right"> <span className="text">Sub Total :</span><span className="price">$600.00</span> </div>
                <div className="clearfix" />
                <Link to="/checkout" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</Link> </div>
              {/* /.cart-total*/}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
