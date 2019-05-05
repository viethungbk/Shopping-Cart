import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEmail: '',
      txtPassword: '',
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    // event.target.reset();
    console.log('Submit');
    let user = {};
    user.email = this.state.txtEmail;
    user.password = this.state.txtPassword;
    console.log(this.state);
    console.log(user);

    axios.post('/api/users/login', user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(name);
    console.log(value);

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container sign-in-page">
        <div className="col-md-6 col-sm-6 col-md-push-3 sign-in">
          <h4>Login</h4>
          <p>Hello, Welcome to your account.</p>

          {/* Social Sign in */}
          <div className="social-sign-in outer-top-xs">
            <Link to="" className="facebook-sign-in"><i className="fa fa-facebook" /> Login with Facebook</Link>
            <Link to="" className="twitter-sign-in"><i className="fa fa-twitter" /> Login with Twitter</Link>
          </div>

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

          </form>
        </div>
      </div>
    );
  }
}
