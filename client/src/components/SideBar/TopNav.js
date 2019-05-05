import React, { Component } from 'react';

export default class TopNav extends Component {
  render() {
    return (
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head"><i className="icon fa fa-align-justify fa-fw" /> Categories</div>
        <nav className="yamm megamenu-horizontal">
          <ul className="nav">
            <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Clothing</a></li>
            <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Clothing</a></li>
            <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Clothing</a></li>
            <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Clothing</a></li>
            <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Clothing</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
