import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return (
      <div className="col-md-6 col-sm-6 create-new-account">
        <p className="text title-tag-line">Create your new account.</p>
        <form className="register-form outer-top-xs" role="form">
          <div className="form-group">
            <label className="info-title" htmlFor="exampleInputEmail2">Email Address <span>*</span></label>
            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2" />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="exampleInputEmail1">Name <span>*</span></label>
            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="exampleInputEmail1">Password <span>*</span></label>
            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
          </div>
          <div className="form-group">
            <label className="info-title" htmlFor="exampleInputEmail1">Confirm Password <span>*</span></label>
            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
          </div>
          <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
        </form>
      </div>
    );
  }
}
