import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HeaderAdmin extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">PHONE ONLINE</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Help</a></li>
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
