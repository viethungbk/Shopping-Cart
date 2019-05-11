import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
        <div className="logo"> <Link to="/"> <img src="/assets/images/logo.png" alt="logo" /> </Link> </div>
      </div>
    );
  }
}
