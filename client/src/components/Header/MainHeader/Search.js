import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  render() {
    return (
      <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
        <div className="search-area">
          <form>
            <div className="control-group">
              <ul className="categories-filter animate-dropdown">
                <li className="dropdown"> <Link className="dropdown-toggle" data-toggle="dropdown" to="/">Categories <b className="caret" /></Link>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-header">Computer</li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">- Clothing</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">- Electronics</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">- Shoes</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">- Watches</Link></li>
                  </ul>
                </li>
              </ul>
              <input className="search-field" placeholder="Search here..." />
              <Link className="search-button" to="" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
