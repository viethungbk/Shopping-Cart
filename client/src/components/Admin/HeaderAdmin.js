import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HeaderAdmin extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/admin" className="navbar-brand">PHONE</Link>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/admin/products">Products</Link></li>
              <li><Link to="/admin/users">Users</Link></li>
              <li><Link to="/admin/blogs">Blogs</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>

    );
  }
}
