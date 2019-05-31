import React, { Component } from 'react';
import { connect } from "react-redux";
import { actFetchUserData } from '../../actions/index';

class Account extends Component {

	// componentWillMount() {
	//     let { user } = this.props;
	//     if (typeof user.id === "undefined") {
	//         window.confirm("Bạn cần đăng nhập để xem thông tin tài khoản!");
	//     }
	// }

	constructor(props) {
		super(props);
		this.state = {
			oldPassword: "",
			newPassword: "",
			confirmNewPassword: "",
			message: ""
		}
	}

	onChange = event => {
		let target = event.target;
		let name = target.name;
		let value = target.value;

		this.setState({
			[name]: value,
			message: ""
		});
	}

	onSubmit = (event) => {
		event.preventDefault();
		let { user, onFetchUserData } = this.props;
		let { oldPassword, newPassword, confirmNewPassword } = this.state;

		if (!(oldPassword && newPassword && confirmNewPassword)) {
			this.setState({
				message: "Bạn phải nhập đầy đủ thông tin!"
			})
		} else {
			if (user.password !== oldPassword) {
				this.setState({
					message: "Nhập mật sai!"
				})
			} else {
				if (newPassword !== confirmNewPassword) {
					this.setState({
						message: "Mật khẩu mới bạn nhập không trùng khớp!"
					})
				} else {
					if (user.password === newPassword) {
						this.setState({
							message: "Bạn đã sử dụng mật khẩu này rồi!"
						})
					} else {
						if (user.password === oldPassword && newPassword === confirmNewPassword) {
							this.setState({
								message: "Đổi mật khẩu thành công!"
							})
							Object.assign(user, { password: newPassword })
							onFetchUserData(user);
							// localStorage.setItem("user", JSON.stringify(user));
							// callApi(`/users/${user.id}`, "PUT", user);
							// this.onClear();
						}
					}
				}
			}
		}
	}

	onClear = () => {
		this.setState({
			oldPassword: "",
			newPassword: "",
			confirmNewPassword: "",
		});
	}
	showMessage = (message) => {
		if (message)
			return <h3 className="messageCartEmpty col-xs-4 col-sm-4 col-md-4 col-lg-4">
				{message}
			</h3>

		else
			return "";
	}

	render() {
		let { oldPassword, newPassword, confirmNewPassword, message } = this.state;
		const { user } = this.props;
		return (
			<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
				<div className="panel panel-primary">
					{/* <!-- Default panel contents --> */}
					<div className="panel-heading">
						<h4>
							Thông tin tài khoản
						</h4>
					</div>
					{/* <!-- Table --> */}
					<table className="table">
						<thead>
							<tr>
								<th>Họ tên</th>
								<th>Email</th>
								<th>Địa chỉ</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{ user.name }</td>
								<td>{ user.email }</td>
								<td>{ user.address }</td>
							</tr>
						</tbody>
					</table>
				</div>
				<hr />
				<div className="panel panel-primary">
					{/* <!-- Default panel contents --> */}
					<div className="panel-heading">
						<h4>
							Đổi mật khẩu
                        </h4>
					</div>
				</div>
				{/* <div className="container"> */}

				<form >
					<div className="form-group">
						<label htmlFor="pwd">Old Password:</label>
						<input
							type="password"
							className="form-control"
							name="oldPassword"
							value={oldPassword}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="pwd">New Password:</label>
						<input
							type="password"
							className="form-control"
							name="newPassword"
							value={newPassword}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="pwd">Confirm New Password:</label>
						<input
							type="password"
							className="form-control"
							name="confirmNewPassword"
							value={confirmNewPassword}
							onChange={this.onChange}
						/>
					</div>
					<div className="row container">
						{this.showMessage(message)}
					</div>
					<div>
						<button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
					</div>
				</form>
			</div>


		);
	}
}
const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchUserData: (user) => {
			dispatch(actFetchUserData(user));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);