import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthButton from './Auth/AuthButton';

export default class HeaderAdmin extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        {/* <Link to="/admin" className="navbar-brand">PHONE ONLINE</Link> */}
        <AuthButton />
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="">Settings</Link></li>
          <li><Link to="">Profile</Link></li>
          <li><Link to="">Help</Link></li>
        </ul>
        <form className="navbar-form navbar-right">
          <input type="text" className="form-control" placeholder="Search..." />
        </form>
      </div>
    </div>
  </div>

    );
  }
}
