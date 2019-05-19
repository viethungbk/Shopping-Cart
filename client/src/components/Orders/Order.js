import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDeleteOrder } from '../../actions/index';

class Order extends Component {
	showProductName = (order) => {
		let result = '';
		if (order.cart.length > 0) {
			result = order.cart.map((item, index) => {
				return (
					<li key={index} className="list-group-item">{item.product.name}</li>
				);
			});
		}
		return result;
	}
	showProductQuantity = (order) => {
		let result = '';
		if (order) {
			result = order.cart.map((item, index) => {
				return (
					<li key={index} className="list-group-item">{item.quantity}</li>
				);
			});
		}
		return result;
	}
	showProductPrice = (order) => {
		let result = '';
		if (order) {
			result = order.cart.map((item, index) => {
				return (
					<li key={index} className="list-group-item">{item.product.price * item.quantity}</li>
				);
			});
		}
		return result;
	}
	render() {
		let { order, index } = this.props;
		return (

			<tr>
				<td>{index + 1}</td>
				<td>{index + 1}</td>
				<td>
					<ul className="list-group">
						<li>{`Họ tên: ${order.info.hoTen}`}</li>
						<li>{`Địa chỉ: ${order.info.diaChi}`}</li>
						<li>{`SĐT: ${order.info.SDT}`}</li>
						<li>{`Ghi chú: ${order.info.ghiChu}`}</li>
					</ul>
				</td>
				<td>
					<ul className="list-group">
						{this.showProductName(order)}
					</ul>
				</td>
				<td>
					<ul className="list-group">
						{this.showProductQuantity(order)}
					</ul>
				</td>
				<td>
					<ul className="list-group">
						{this.showProductPrice(order)}
					</ul>
				</td>
				<td>
					<ul className="list-group">
						<li className="list-group-item">{`${order.info.date}`}</li>
					</ul>
				</td>

				<td>
					<ul className="list-group">
						<li className="alert alert-warning">{`${order.status}`}</li>
					</ul>
				</td>
				<td>
					<button type="button" className="btn btn-primary"
						onClick={() => this.props.deleteOrder(index)}
					>Hủy</button>
				</td>
			</tr>

		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteOrder: (index) => {
			dispatch(actDeleteOrder(index));
		}
	}
}

export default connect(null, mapDispatchToProps)(Order);