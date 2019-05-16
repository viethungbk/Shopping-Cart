import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import callApi from '../../apiCaller';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEmail: '',
      txtName: '',
      txtPassword: '',
      txtPassword2: '',
      isShowMessage: false,
      message: '',
      isRegister: false
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    console.log('Submit');
    let user = {};
    user.email = this.state.txtEmail;
    user.name = this.state.txtName;
    user.password = this.state.txtPassword;
    user.password2 = this.state.txtPassword2;

    callApi('api/users/register', 'post',user)
      .then(res => {
        console.log(res);
        this.setState({
          isRegister: true
        });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          isShowMessage: true,
          message: err.response.data
        });
      });
  }

  showMessage() {
    if (!this.state.isShowMessage) {
      return null;
    }
    let msg = this.state.message;
    let message = msg.email || msg.name || msg.password || msg.password2;
    return (
      <div className="alert alert-danger">
        <h4>{ message }</h4>
      </div>
    );
  }

  changeInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  redirect() {
    if (!this.state.isRegister) {
      return null;
    }
    return (
      <Redirect to="/login" />
    );
  }

  render() {
    return (
      <div className="container">
        { this.redirect() }
        <div className="col-md-6 col-sm-6 col-md-push-3 create-new-account">
          <h4 className="text title-tag-line">Create your new account.</h4>

          <hr />
          { this.showMessage() }

          <form className="register-form outer-top-xs">
            <div className="form-group">
              <label className="info-title" htmlFor="txtEmail">Email Address <span>*</span></label>
              <input
                type="email"
                className="form-control unicase-form-control text-input"
                name="txtEmail"
                onChange={(event) => this.changeInput(event)} />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="txtName">Name <span>*</span></label>
              <input
                type="text"
                className="form-control unicase-form-control text-input"
                name="txtName"
                onChange={(event) => this.changeInput(event)} />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="txtPassword">Password <span>*</span></label>
              <input
                type="password"
                className="form-control unicase-form-control text-input"
                name="txtPassword"
                onChange={(event) => this.changeInput(event)} />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="txtPassword2">Confirm Password <span>*</span></label>
              <input
                type="password"
                className="form-control unicase-form-control text-input"
                name="txtPassword2"
                onChange={(event) => this.changeInput(event)} />
            </div>
            <button
              type="submit"
              className="btn-upper btn btn-primary checkout-page-button"
              onClick={(event) => this.submitForm(event)}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
