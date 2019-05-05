import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Login from '../../Login/Login';

export default class TopMenu extends Component {
  render() {
    return (
      <div className="top-bar animate-dropdown">
        <div className="container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                <li className="myaccount"><a href="#"><span>My Account</span></a></li>
                <li className="wishlist"><a href="#"><span>Wishlist</span></a></li>
                <li className="header_cart hidden-xs"><a href="#"><span>My Cart</span></a></li>
                <li className="check"><a href="#"><span>Checkout</span></a></li>
                <li className="login"><Link to="/user/login/"><span>Login</span></Link></li>
              </ul>
            </div>
            {/* /.cnt-account */}
            <div className="cnt-block">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">USD</a></li>
                    <li><a href="#">VND</a></li>
                  </ul>
                </li>
                <li className="dropdown dropdown-small lang"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">English</a></li>
                    <li><a href="#">Tieng Viet</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>

      <Route path="/user/login/" component={Login} />
      </div>

    );
  }
}
