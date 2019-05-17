import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin">Overview</Link></li>
          <li><Link to="/admin/add-product">Add Product</Link></li>
          <li><Link to="/admin/list-products">List Products</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>

        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin/list-products">Products</Link></li>
          <li><Link to="/admin/list-products">List Products</Link></li>
          <li><Link to="/admin/add-product">Add Product</Link></li>

        </ul>
        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin/users">Users</Link></li>
          <li><Link to="">One more nav</Link></li>
          <li><Link to="">Another nav item</Link></li>
        </ul>

        <ul className="nav nav-sidebar-dashboard">
          <li className="bg-info"><Link to="/admin">Blogs</Link></li>
          <li><Link to="">Quản lý bài viết</Link></li>
          <li><Link to="">Thêm bài viết</Link></li>
        </ul>
      </div>
    );
  }
}
