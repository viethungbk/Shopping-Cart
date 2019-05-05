import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class TopMenu extends Component {
  render() {
    return (
      <div className="top-bar animate-dropdown">
        <div className="container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                <li className="myaccount"><Link to=""><span>My Account</span></Link></li>
                <li className="wishlist"><Link to="/wishList"><span>Wishlist</span></Link></li>
                <li className="header_cart hidden-xs"><Link to="/shopping-cart"><span>My Cart</span></Link></li>
                <li className="check"><Link to="/checkout"><span>Checkout</span></Link></li>
                <li className="login"><Link to="/login/"><span>Login</span></Link></li>
              </ul>
            </div>
            {/* /.cnt-account */}
            <div className="cnt-block">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small"> <Link to="" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="">USD</Link></li>
                    <li><Link to="">VND</Link></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-small lang"> <Link to="" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="">English</Link></li>
                    <li><Link to="">Tieng Viet</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>

    );
  }
}
