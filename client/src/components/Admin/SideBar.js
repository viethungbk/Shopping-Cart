import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-sidebar-dashboard">
          <li className="active"><Link to="">Overview</Link></li>
          <li><Link to="/admin/add-products">Add Products</Link></li>
          <li><Link to="/admin/list-products">List Products</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>
        <ul className="nav nav-sidebar-dashboard">
          <li><Link to="/admin/add-product">Add Product</Link></li>
          <li><Link to="">Nav item again</Link></li>
          <li><Link to="">One more nav</Link></li>
          <li><Link to="">Another nav item</Link></li>
          <li><Link to="">More navigation</Link></li>
        </ul>
        <ul className="nav nav-sidebar-dashboard">
          <li><Link to="">Nav item again</Link></li>
          <li><Link to="">One more nav</Link></li>
          <li><Link to="">Another nav item</Link></li>
        </ul>
      </div>
    );
  }
}
