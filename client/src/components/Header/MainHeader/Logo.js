import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
        <div className="logo"> <a href="home.html"> <img src="assets/images/logo.png" alt="logo" /> </a> </div>
      </div>
    );
  }
}
