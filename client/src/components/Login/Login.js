import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { actFetchUserData, actRemoveUser } from "./../../actions/index";
import callApi from "./../../utils/apiCaller";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            txtEmail: '',
            txtPassword: '',
            rememberPassword: true,
            isShowMessage: false,
            isLogin: false
        }
    }
    _isMounted = false;
    // Biến này được tạo ra là cả một tuyệt tác, Thật là vĩ đại
    //Điều này là do lời gọi lên server bị trễ, 
    // khi component của bạn Unmount nhưng vẫn gọi setState một cái ko còn tồn tại
    componentWillMount() {
        this._isMounted = false;
        this.props.onRemoveUser();
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.setState({
                txtEmail: user.email,
                txtPassword: user.password,
                rememberPassword: true
            });
        }
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


    onSubmit = (event) => {
        event.preventDefault();
        let { txtEmail, txtPassword } = this.state;
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            if (user.email === txtEmail && user.password === txtPassword) {
                this.props.onFetchUserData(user);
                this.setState({
                    isLogin: true
                });
            }
        }
        callApi('/users', 'GET', null).then(res => {
            let users = res.data;
            if (users.length > 0) {
                users.forEach(element => {
                    if ((element.email === txtEmail || element.userName === txtEmail) && element.password === txtPassword) {
                        if (this._isMounted === true) {
                            if (this.state.rememberPassword)
                                localStorage.setItem("user", JSON.stringify(element));
                            this.props.onFetchUserData(element);
                            this.setState({
                                user: element,
                                isLogin: true
                            });

                        }
                    }
                });
                if (this._isMounted) {
                    this.setState({
                        isShowMessage: true,
                    });
                }
            }
        });
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    showMessage() {
        const { isShowMessage } = this.state;
        if (!isShowMessage) {
            return null;
        }
        return (
            <div className="alert alert-danger">
                <h4>* Tài khoản hoặc mật khẩu không đúng!</h4>
            </div>
        );
    }
    // changeStatusRememberPw = () => {
    //     this.setState(prevState => ({
    //         rememberPassword: !prevState.rememberPassword
    //     }));
    //     // this.setState(
    //     //     prevState => {
    //     //         rememberPassword: !prevState.rememberPassword
    //     //     })
    //     // return this.state.rememberPassword;
    // }

    redirect() {
        if (this.state.isLogin) {

            return (
                <Redirect to="/" />
            )

        }
        return null;
    }

    render() {
        // console.log("render");

        let { txtEmail, txtPassword } = this.state;
        return (
            <div className="container sign-in-page">
                {this.redirect()}
                <div className="col-md-6 col-sm-6 col-md-push-3 sign-in">
                    <h4>Login</h4>
                    <p>Hello, Welcome to your account.</p>

                    {/* Social Sign in */}
                    <div className="social-sign-in outer-top-xs">
                        <Link to="" className="facebook-sign-in"><i className="fa fa-facebook" /> Login with Facebook</Link>
                        <Link to="" className="twitter-sign-in"><i className="fa fa-twitter" /> Login with Twitter</Link>
                    </div>

                    <hr />
                    {this.showMessage()}

                    {/* User Input */}
                    <form className="register-form outer-top-xs">
                        <div className="form-group">
                            <label className="info-title" htmlFor="txtEmail">Email Address or User Name <span>*</span></label>
                            <input
                                type="email"
                                className="form-control unicase-form-control text-input"
                                id="txtEmail"
                                name="txtEmail"
                                value={txtEmail}
                                onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label className="info-title" htmlFor="txtPassword">Password <span>*</span></label>
                            <input
                                type="password"
                                className="form-control unicase-form-control text-input"
                                id="txtPassword"
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.onChange} />
                        </div>

                        <div className="radio outer-xs">
                            <label>
                                <input type="checkbox"
                                    name="rememberPassword"
                                    id="checkOption"
                                    value={this.state.rememberPassword}
                                    onChange={this.onChange}
                                    // checked={this.state.rememberPassword}
                                    // onClick={() => this.changeStatusRememberPw()}
                                />
                                Remember me!
                            </label>
                            <Link to="" className="forgot-password pull-right">Forgot your Password?</Link>
                        </div>

                        <button
                            type="submit"
                            className="btn-upper btn btn-primary checkout-page-button"
                            onClick={this.onSubmit}
                        >
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

export default connect(null, mapDispatchToProps)(Login);
