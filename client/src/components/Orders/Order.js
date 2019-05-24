import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actDeleteOrder } from '../../actions/index';

class Order extends Component {
	showOrderDetails(order) {
		this.props.showOrderDetails(order);
	}

	render() {
		const { order, index } = this.props;

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
					1 000 000 000 VND
				</td>
				<td>
					{ order.shipaddress }
				</td>
				<td>
					{ order.date }
				</td>

				<td>
					{ order.status }
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