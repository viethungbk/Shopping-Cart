import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import callApi from '../../apiCaller';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEmail: 'hung@gmail.com',
      txtPassword: '111111',
      isShowMessage: false,
      message: '',
      isLogin: false
    }
  }

  submitForm = (event) => {
    event.preventDefault();

    const { txtEmail, txtPassword } = this.state;
    let admin = {
      email: txtEmail,
      password: txtPassword
    };

    callApi('api/admin/login', 'post', admin)
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
        <h4>{message}</h4>
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
      <Redirect to="/admin/list-products" />
    );
  }

  render() {
    return (
      <div className="container">

        { this.redirect() }

        <div className="row">
          <h3>Admin Login</h3>
        </div>

        {this.showMessage()}

        <hr />

        <div className="row">
          <form className="form-horizontal">

            <div className="form-group">
              <label htmlFor="txtEmail" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="txtEmail" name="txtEmail" placeholder="hung@gmail.com" value={ this.state.txtEmail} onChange={event => this.changeInput(event)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtPassword" className="col-sm-2 control-label">Mật khẩu</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="txtPassword" name="txtPassword" value={ this.state.txtPassword} onChange={event => this.changeInput(event)} />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary" onClick={event => this.submitForm(event)}>
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div >
      </div>
    );
  }
}
