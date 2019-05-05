import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-sm-6 col-md-push-3 sign-in">
          <h4 className>Sign in</h4>
          <p className>Hello, Welcome to your account.</p>
          <div className="social-sign-in outer-top-xs">
            <a href="#" className="facebook-sign-in"><i className="fa fa-facebook" /> Sign In with Facebook</a>
            <a href="#" className="twitter-sign-in"><i className="fa fa-twitter" /> Sign In with Twitter</a>
          </div>
          <form className="register-form outer-top-xs" role="form">
            <div className="form-group">
              <label className="info-title" htmlFor="inputEmail">Email Address <span>*</span></label>
              <input type="email" className="form-control unicase-form-control text-input" id="inputEmail" />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="inputPassword">Password <span>*</span></label>
              <input type="password" className="form-control unicase-form-control text-input" id="inputPassword" />
            </div>
            <div className="radio outer-xs">
              <label>
                <input type="radio" name="optionsRadio" id="optionsRadio" defaultValue="option" />Remember me!
              </label>
              <a href="#" className="forgot-password pull-right">Forgot your Password?</a>
            </div>
            <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
