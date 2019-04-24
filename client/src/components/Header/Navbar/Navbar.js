import React, { Component } from 'react';

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
                    <li className="active dropdown"> <a href="home.html">Home</a> </li>
                    <li className="dropdown yamm mega-menu">
                      <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Samsung</a>
                    </li>
                    <li className="dropdown mega-menu">
                      <a href="category.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Apple <span className="menu-label hot-menu hidden-xs">hot</span> </a>
                    </li>
                    <li className="dropdown hidden-sm"> <a href="category.html">Huawei <span className="menu-label new-menu hidden-xs">new</span> </a> </li>
                    <li className="dropdown hidden-sm"> <a href="category.html">Xiaomi</a> </li>
                    <li className="dropdown"> <a href="contact.html">LG</a> </li>
                    <li className="dropdown"> <a href="contact.html">Asus</a> </li>
                    <li className="dropdown"> <a href="contact.html">Nokia</a> </li>
                    <li className="dropdown"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</a>
                      <ul className="dropdown-menu pages">
                        <li>
                          <div className="yamm-content">
                            <div className="row">
                              <div className="col-xs-12 col-menu">
                                <ul className="links">
                                  <li><a href="home.html">Home</a></li>
                                  <li><a href="category.html">Category</a></li>
                                  <li><a href="detail.html">Detail</a></li>
                                  <li><a href="shopping-cart.html">Shopping Cart Summary</a></li>
                                  <li><a href="checkout.html">Checkout</a></li>
                                  <li><a href="blog.html">Blog</a></li>
                                  <li><a href="blog-details.html">Blog Detail</a></li>
                                  <li><a href="contact.html">Contact</a></li>
                                  <li><a href="sign-in.html">Sign In</a></li>
                                  <li><a href="my-wishlist.html">Wishlist</a></li>
                                  <li><a href="terms-conditions.html">Terms and Condition</a></li>
                                  <li><a href="track-orders.html">Track Orders</a></li>
                                  <li><a href="product-comparison.html">Product-Comparison</a></li>
                                  <li><a href="faq.html">FAQ</a></li>
                                  <li><a href="404.html">404</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown  navbar-right special-menu"> <a href="#">Get 30% off on selected items</a> </li>
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
