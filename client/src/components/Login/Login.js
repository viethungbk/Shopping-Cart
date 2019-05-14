import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import callApi from '../../apiCaller';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEmail: '',
      txtPassword: '',
      isShowMessage: false,
      message: '',
      isLogin: false
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    console.log('Submit');
    let user = {};
    user.email = this.state.txtEmail;
    user.password = this.state.txtPassword;

    callApi('api/users/login', 'post', user)
      .then(res => {
        console.log(res);
        this.setState({
          isLogin: true
        });
        localStorage.setItem("token", res.data.token);
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
    let message = this.state.message.email || this.state.message.password;
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
    if (!this.state.isLogin) {
      return null;
    }
    return (
      <Redirect to="/" />
    );
  }

  render() {
    return (
      <div className="container sign-in-page">
        { this.redirect() }

        <div className="col-md-6 col-sm-6 col-md-push-3 sign-in">
          <h4>Login</h4>
          <p>Hello, Welcome to your account.</p>

          {/* Social Sign in */}
          <div className="social-sign-in outer-top-xs">
            <Link to="" className="facebook-sign-in"><i className="fa fa-facebook" /> Login with Facebook</Link>
            <Link to="" className="twitter-sign-in"><i className="fa fa-twitter" /> Login with Twitter</Link>
          </div>

          <hr />
          { this.showMessage() }

          {/* User Input */}
          <form className="register-form outer-top-xs" action="/api/user/login" method="POST">
            <div className="form-group">
              <label className="info-title" htmlFor="txtEmail">Email Address <span>*</span></label>
              <input
                type="email"
                className="form-control unicase-form-control text-input"
                id="txtEmail"
                name="txtEmail"
                onChange={(event) => this.changeInput(event)} />
            </div>

            <div className="form-group">
              <label className="info-title" htmlFor="txtPassword">Password <span>*</span></label>
              <input
                type="password"
                className="form-control unicase-form-control text-input"
                id="txtPassword"
                name="txtPassword"
                onChange={(event) => this.changeInput(event)} />
            </div>

            <div className="radio outer-xs">
              <label>
                <input type="checkbox"
                name="checkOption"
                id="checkOption"
                defaultValue="" />
                Remember me!
              </label>
              <Link to="" className="forgot-password pull-right">Forgot your Password?</Link>
            </div>

            <button
              type="submit"
              className="btn-upper btn btn-primary checkout-page-button"
              onClick={(event) => this.submitForm(event)}>
              Login
            </button>

            <hr />
            <div>Don't have account ?</div>
            <Link to="/register"><h4>Create New Account</h4></Link>

          </form>
        </div>
      </div>
    );
  }
}
