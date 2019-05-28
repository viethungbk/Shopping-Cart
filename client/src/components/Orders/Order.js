import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actDeleteOrder } from '../../actions/index';
import showOrderStatus from '../../utils/showOrderStatus';
import formatMoney from '../../utils/formatMoney';

class Order extends Component {
	showOrderDetails(order) {
		this.props.showOrderDetails(order);
	}

	render() {
		const { order, index } = this.props;
		console.log(order);

		return (

			<tr>
				<td>{index + 1}</td>
				<td onClick={ () => this.showOrderDetails(order) }>
					<Link to="/order-details">{ order._id }</Link>
				</td>
				<td>
					{ order.listItems.length }
				</td>
				<td>
					{formatMoney(order.grandtotal)} VND
				</td>
				<td>
					{ order.shipaddress }
				</td>
				<td>
					{ order.date }
				</td>

				<td>
					{ showOrderStatus(order.status) }
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