import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin">Accounts</Link></li>
          <li><Link to="/admin/add-product">This Account</Link></li>
          <li><Link to="/admin/list-products">Add Admin</Link></li>
        </ul>

        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin">Orders</Link></li>
          <li><Link to="/admin/orders">List Ordersr</Link></li>
        </ul>

        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin/list-products">Products</Link></li>
          <li><Link to="/admin/list-products">List Products</Link></li>
          <li><Link to="/admin/add-product">Add Product</Link></li>

        </ul>
        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>

        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin">Blogs</Link></li>
          <li><Link to="">Blogs Manager</Link></li>
          <li><Link to="">Add a Blog</Link></li>
        </ul>
      </div>
    );
  }
}
