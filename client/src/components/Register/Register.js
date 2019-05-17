import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import callApi from "./../../utils/apiCaller";
import { connect } from "react-redux";
import { actFetchUserData, actRemoveUser } from "./../../actions/index";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      txtEmail: '',
      txtName: '',
      txtPassword: '',
      txtPassword2: '',
      isShowMessage: false,
      message: '',
      isRegister: false
    }
  }
  _isMounted = false;
  // Biến này được tạo ra là cả một tuyệt tác, Thật là vĩ đại
  //Điều này là do lời gọi lên server bị trễ, 
  // khi component của bạn Unmount nhưng vẫn gọi setState một cái ko còn tồn tại
  componentWillMount() {
    this._isMounted = false;
    this.props.onRemoveUser();
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.checked ? target.checked : target.value;
    this.setState({
      [name]: value,
      isShowMessage: false,
    });
  }

  componentDidMount() {
    this._isMounted = true;
    callApi('/users', 'GET', null).then(res => {
      this.setState({
        users: res.data
      })
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
    if (this.state.user) {
      localStorage.setItem("user", JSON.stringify(this.state.user));
    }
  }

  submitForm = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.txtPassword !== this.state.txtPassword2) {
      this.setState({
        isRegister: false,
        message: "Mật khẩu không trùng khớp",
        isShowMessage: true
      });
    } else {
      let { users } = this.state;
      let { txtEmail } = this.state;
      for (let i = 0; i < users.length; i++) {
        if ((users[i].email === txtEmail)) {
          if (this._isMounted === true) {
            this.setState({
              isRegister: false,
              isShowMessage: true,
              message: "Email này đã có người sử dụng"
            });
          }
          return;
        }
      }
      let user = {
        "name": this.state.txtName,
        "email": this.state.txtEmail,
        "userName": "",
        "password": this.state.txtPassword,
        "cart": [],
        "wishList": [],
        "orders": []
      };
      this.props.onFetchUserData(Object.assign(user, { id: this.state.users.length + 2 }));
      localStorage.setItem("user", JSON.stringify(Object.assign(user, { id: this.state.users.length + 2 })));
      callApi('/users', 'POST', user);
      if (this._isMounted === true) {
        this.setState({
          isRegister: true,
        });
      }
    }
  }

  showMessage() {
    if (!this.state.isShowMessage) {
      return null;
    }
    return (
      <div className="alert alert-danger">
        <h4>{this.state.message}!</h4>
      </div>
    );
  }

  redirect() {
    if (this.state.isRegister) {
      return (
        <Redirect to="/" />
      )
    } else {
      return null;
    }

  }

  render() {
    return (
      <div className="container">
        {this.redirect()}
        <div className="col-md-6 col-sm-6 col-md-push-3 create-new-account">
          <h4 className="text title-tag-line">Create your new account.</h4>

          <hr />
          {this.showMessage()}

          <form className="register-form outer-top-xs">
            <div className="form-group">
              <label className="info-title" htmlFor="txtEmail">Email Address <span>*</span></label>
              <input
                type="email"
                className="form-control unicase-form-control text-input"
                name="txtEmail"
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="txtName">Name <span>*</span></label>
              <input
                type="text"
                className="form-control unicase-form-control text-input"
                name="txtName"
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="txtPassword">Password <span>*</span></label>
              <input
                type="password"
                className="form-control unicase-form-control text-input"
                name="txtPassword"
                onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label className="info-title" htmlFor="txtPassword2">Confirm Password <span>*</span></label>
              <input
                type="password"
                className="form-control unicase-form-control text-input"
                name="txtPassword2"
                onChange={this.onChange} />
            </div>
            <button
              type="submit"
              className="btn-upper btn btn-primary checkout-page-button"
              onClick={this.submitForm}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchUserData: (user) => {
      dispatch(actFetchUserData(user));
    },
    onRemoveUser: () => {
      dispatch(actRemoveUser());
    }
  }
}

export default connect(null, mapDispatchToProps)(Register);