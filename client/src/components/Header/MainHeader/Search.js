import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
        <div className="search-area">
          <form>
            <div className="control-group">
              <ul className="categories-filter animate-dropdown">
                <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="category.html">Categories <b className="caret" /></a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="menu-header">Computer</li>
                    <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Clothing</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Electronics</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Shoes</a></li>
                    <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Watches</a></li>
                  </ul>
                </li>
              </ul>
              <input className="search-field" placeholder="Search here..." />
              <a className="search-button" href="#" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
