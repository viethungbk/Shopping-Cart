import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import formatMoney from '../../../utils/formatMoney';

class Cart extends Component {

	getTotalPrice = (cart) => {
		if (cart.length === 0) {
			return 0;
		}

		let totalPrice = 0;

		cart.forEach(item => {
			totalPrice += item.product.price * item.quantity;
		});
		return totalPrice;
	}

	render() {
		let { cart } = this.props;

		return (
			<div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
				<div className="dropdown dropdown-cart">
					<Link to="/shopping-cart" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
						<div className="items-cart-inner">
							<div className="basket">
								<div className="basket-item-count"><span className="count">{cart.length}</span></div>
								<div className="total-price-basket"> <span className="lbl">Giỏ hàng</span>
									<span className="value">
										{formatMoney(this.getTotalPrice(cart))} VNĐ
									</span> </div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);