import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-sm-6 col-md-push-3 create-new-account">
          <p className="text title-tag-line">Create your new account.</p>
          <form className="register-form outer-top-xs">
            <div className="form-group">
              <label className="info-title" htmlFor="inputEmail">Email Address <span>*</span></label>
              <input type="email" className="form-control unicase-form-control text-input" id="inputEmail" />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="inputName">Name <span>*</span></label>
              <input type="text" className="form-control unicase-form-control text-input" id="inputName" />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="inputPassword1">Password <span>*</span></label>
              <input type="password" className="form-control unicase-form-control text-input" id="inputPassword1" />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="inputPassword2">Confirm Password <span>*</span></label>
              <input type="password" className="form-control unicase-form-control text-input" id="inputPassword2" />
            </div>
            <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
