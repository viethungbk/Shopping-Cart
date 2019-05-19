import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="header-nav animate-dropdown">
        <div className="container">
          <div className="yamm navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
            </div>
            <div className="nav-bg-class">
              <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                <div className="nav-outer">
                  <ul className="nav navbar-nav">
                    <li className="active dropdown"> <Link to="/">Home</Link> </li>
                    <li className="dropdown yamm mega-menu">
                      <Link to="/" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Samsung</Link>
                    </li>
                    <li className="dropdown mega-menu">
                      <Link to="/" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Apple <span className="menu-label hot-menu hidden-xs">hot</span> </Link>
                    </li>
                    <li className="dropdown hidden-sm"> <Link to="/">Huawei <span className="menu-label new-menu hidden-xs">new</span> </Link> </li>
                    <li className="dropdown hidden-sm"> <Link to="/">Xiaomi</Link> </li>
                    <li className="dropdown"> <Link to="/">LG</Link> </li>
                    <li className="dropdown"> <Link to="/">Asus</Link> </li>
                    <li className="dropdown"> <Link to="/">Nokia</Link> </li>
                    {/* <li className="dropdown"> <Link to="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</Link>
                      <ul className="dropdown-menu pages">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-menu">
                                <ul className="links">
                                  <li><Link to="/">Home</Link></li>
                                  <li><Link to="/">Thể loại</Link></li>
                                  <li><Link to="/">Detail</Link></li>
                                  <li><Link to="/shopping-cart">Shopping Cart Summary</Link></li>
                                  <li><Link to="/ordersCheck">Checkout</Link></li>
                                  <li><Link to="/blog">Blog</Link></li>
                                  <li><Link to="/blog-details">Blog Detail</Link></li>
                                  <li><Link to="/contact">Contact</Link></li>
                                  <li><Link to="/login">Login</Link></li>
                                  <li><Link to="/wishlist">Wishlist</Link></li>
                                  <li><Link to="/terms-conditions">Terms and Condition</Link></li>
                                  <li><Link to="/track-orders">Track Orders</Link></li>
                                  <li><Link to="/product-comparison">Product-Comparison</Link></li>
                                  <li><Link to="/faq">FAQ</Link></li>
                                  <li><Link to="/not-found">404</Link></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li> */}
                    <li className="dropdown  navbar-right special-menu">
                      <Link to="/contact">
                        LIÊN HỆ
                      </Link>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
