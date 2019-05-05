import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div class="col-md-9">
        <div className="outer-top-bd">
          <div className="container">
            <div className="x-page inner-bottom-sm">
              <div className="row">
                <div className="col-md-12 x-text text-center">
                  <h1>404</h1>
                  <p>We are sorry, the page you've requested is not available. </p>
                  <form role="form" className="outer-top-vs outer-bottom-xs">
                    <input placeholder="Search" autoComplete="off" />
                    <button className="  btn-default le-button">Go</button>
                  </form>
                  <a href="home.html"><i className="fa fa-home" /> Go To Homepage</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
