import React, { Component } from 'react';

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Customer Service</h4>
          </div>
          {/* /.module-heading */}
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><a href="#" title="Contact us">My Account</a></li>
              <li><a href="#" title="About us">Order History</a></li>
              <li><a href="#" title="faq">FAQ</a></li>
              <li><a href="#" title="Popular Searches">Specials</a></li>
              <li className="last"><a href="#" title="Where is my order?">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Corporation</h4>
          </div>
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><a title="Your Account" href="#">About us</a></li>
              <li><a title="Information" href="#">Customer Service</a></li>
              <li><a title="Addresses" href="#">Company</a></li>
              <li><a title="Addresses" href="#">Investor Relations</a></li>
              <li className="last"><a title="Orders History" href="#">Advanced Search</a></li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Why Choose Us</h4>
          </div>
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><a href="#" title="About us">Shopping Guide</a></li>
              <li><a href="#" title="Blog">Blog</a></li>
              <li><a href="#" title="Company">Company</a></li>
              <li><a href="#" title="Investor Relations">Investor Relations</a></li>
              <li className=" last"><a href="contact-us.html" title="Suppliers">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
