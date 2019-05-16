import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              <li className="first"><Link to="" title="Contact us">My Account</Link></li>
              <li><Link to="" title="About us">Order History</Link></li>
              <li><Link to="" title="faq">FAQ</Link></li>
              <li><Link to="" title="Popular Searches">Specials</Link></li>
              <li className="last"><Link to="" title="Where is my order?">Help Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Corporation</h4>
          </div>
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><Link title="Your Account" to="">About us</Link></li>
              <li><Link title="Information" to="">Customer Service</Link></li>
              <li><Link title="Addresses" to="">Company</Link></li>
              <li><Link title="Addresses" to="">Investor Relations</Link></li>
              <li className="last"><Link title="Orders History" to="">Advanced Search</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Why Choose Us</h4>
          </div>
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><Link to="" title="About us">Shopping Guide</Link></li>
              <li><Link to="" title="Blog">Blog</Link></li>
              <li><Link to="" title="Company">Company</Link></li>
              <li><Link to="" title="Investor Relations">Investor Relations</Link></li>
              <li className=" last"><Link to="/contact" title="Suppliers">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
