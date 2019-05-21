import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Product from './Product';
import { actDeleteCartItem, actUpdateCartItemQuantity, actAddToOrders, actFetchCart } from '../../actions/index';
import MessageCartEmpty from './MessageCartEmpty';
import { actFetchProductDetail } from '../../actions/index';
import formatMoney from '../../utils/formatMoney';

class ShoppingCart extends Component {
	showCartItem = (cart) => {
		let result = [];
		let { onDeleteCartItem, onUpdateCartItemQuantity, watchingProductDetail } = this.props;

		if (cart.length === 0) {
			return <MessageCartEmpty />;
		} else {
			result = cart.map((item, index) => {
				return <Product
					key={index}
					item={item}
					onDeleteCartItem={onDeleteCartItem}
					onUpdateCartItemQuantity={onUpdateCartItemQuantity}
					watchingProductDetail={watchingProductDetail}
				/>;
			});
			return result;
		}
	}

	grandTotal = (cart) => {
		let total = 0;
		if (!cart) {
			return 0;
		} else {
			if (cart.length === 0) {
				return 0;
			}
			for (let i = 0; i < cart.length; i++) {
				total = total + (cart[i].product.price * cart[i].quantity);
			}
			return total;
		}
	}

	onSubmit = async event => {
		event.preventDefault();
		let { cart, onAddToOrders } = this.props;
		this.setState(
			{
				date: await (() => { return new Date() })()
			}
		);
		onAddToOrders(cart, this.state, 'Đang xử lý')
		window.confirm('Đơn hàng của bạn đang được xử lý!');
		this.onClear();
	}

	render() {
		let { cart } = this.props;
	

		return (
			<div>
				< div className="row " >
					<div className="shopping-cart">
						<div className="shopping-cart-table ">
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th className="cart-romove item">Xóa</th>
											<th className="cart-description item">Hình ảnh</th>
											<th className="cart-product-name item">Tên sản phẩm</th>
											<th className="cart-qty item">Số lượng</th>
											<th className="cart-sub-total item">Giá</th>
											<th className="cart-total last-item">Tổng cổng</th>
										</tr>
									</thead>{/* /thead */}

									{/* Đổ dữ liệu từ trong cart */}
									<tbody>
										{this.showCartItem(cart)}
									</tbody>{/* /tbody */}

									<tfoot>
										<tr>
											<td colSpan={7}>
												<div className="shopping-cart-btn">
													<span >
														<Link to="/" className="btn btn-upper btn-primary outer-left-xs">
															Tiếp tục mua hàng
                            </Link>


														{/* Button callApi Update Cart */}
														<Link to="" className="btn btn-upper btn-primary pull-right outer-right-xs">
															Cập nhật giỏ hàng
                            </Link>
													</span>
												</div>
												{/* /.shopping-cart-btn */}
											</td>
										</tr>
									</tfoot>
								</table>{/* /table */}
							</div>
						</div>{/* /.shopping-cart-table */}

						<div className="col-md-4 col-sm-12 cart-shopping-total">
							<table className="table">
								<thead>
									<tr>
										<th>
											<div className="cart-grand-total">
												Grand Total:
                        <span className="inner-left-md">
													{formatMoney(this.grandTotal(cart))} VNĐ
												</span>
											</div>
										</th>
									</tr>
								</thead>{/* /thead */}
								<tbody>
									<tr>
										<td>
											<div className="cart-checkout-btn pull-right">
												<button type="submit" className="btn btn-primary checkout-btn">Đặt hàng</button>
											</div>
										</td>
									</tr>
								</tbody>{/* /tbody */}
							</table>{/* /table */}
						</div>{/* /.cart-shopping-total */}
					</div>{/* /.shopping-cart */}
				</div >
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
		user: state.user,
		products: state.products
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onDeleteCartItem: (item) => {
			dispatch(actDeleteCartItem(item));
		},
		onUpdateCartItemQuantity: (item, quantity) => {
			dispatch(actUpdateCartItemQuantity(item, quantity));
		},
		onAddToOrders: (cart, info, status) => {
			dispatch(actAddToOrders(cart, info, status));
		},
		watchingProductDetail: (product) => {
			dispatch(actFetchProductDetail(product));
		},
		onFetchCart: (cart) => {
			dispatch(actFetchCart(cart));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);


