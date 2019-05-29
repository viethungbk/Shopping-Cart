import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Product from './Product';
import { actDeleteCartItem, actUpdateCartItemQuantity, actAddToOrdersRequest, actFetchCart, actRemoveAllCartItemRequest } from '../../actions/index';
import MessageCartEmpty from './MessageCartEmpty';
import { actFetchProductDetail } from '../../actions/index';
import formatMoney from '../../utils/formatMoney';
import callApi from '../../apiCaller';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtAddress: '',
			redirect: false
		}
	}

	componentDidMount() {
		const { user } = this.props;
		if (user._id !== undefined) {
			this.setState({
				txtAddress: user.address
			});
		}
	}
	showCartItem = (cart) => {
		let result = '';
		let { user, onDeleteCartItem, onUpdateCartItemQuantity, watchingProductDetail } = this.props;

		if (cart.length === 0) {
			return <MessageCartEmpty />;
		}
		result = cart.map((item, index) => {
			return <Product
				key={index}
				item={item}
				user={user}
				onDeleteCartItem={onDeleteCartItem}
				onUpdateCartItemQuantity={onUpdateCartItemQuantity}
				watchingProductDetail={watchingProductDetail}
			/>;
		});
		return result;

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

	changeInput = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]: value
		});
	}

	onSubmitOrder = (event) => {
		event.preventDefault();
		let { cart, user, onAddToOrders, onRemoveAllCartItem } = this.props;
		const address = this.state.txtAddress;

		if (user._id === undefined) {
			window.alert('Bạn hãy đăng nhập để đặt hàng');
			this.setState({
				redirect: true
			})
			return;
		}

		if (cart.length === 0) {
			window.alert('Gio hang trong');
			return;
		}

		if (address.trim() === '') {
			window.alert('Hãy nhập địa chỉ giao hàng');
			return;
		}

		const data = {
			address: address,
			grandtotal: this.grandTotal(cart)
		}

		onAddToOrders(data);

		onRemoveAllCartItem(cart);
	}

	showButtonUpdateCart() {
		const { user, cart } = this.props;

		if (user._id === undefined || cart.length === 0) {
			return;
		}

		return (
			<button className="btn btn-upper btn-primary pull-right outer-right-xs" onClick={() => this.onUpdateCart()}>
				Cập nhật giỏ hàng
      </button>
		);
	}

	onUpdateCart = () => {
		const { cart } = this.props;

		let listItems = [];

		cart.forEach(item => {
			listItems.push({
				product: item.product._id,
				quantity: item.quantity
			});
		});

		const headers = {
			'Authorization': localStorage.getItem('token')
		}

		const data = {
			cart: listItems
		}

		callApi('api/cart/update', 'patch', data, headers)
			.then(result => {
				window.alert(result.data.message);
			})
			.catch(error => {
				console.log(error);
				window.alert(error.message);
			})
	}

	render() {
		let { cart } = this.props;
		const { redirect } = this.state;

		if (redirect) {
			return <Redirect to="/login" />;
		}

		return (
			<div>
				<div className="row " >
					<div className="container">
						<div className="shopping-cart">

							<div className="row">
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
																{this.showButtonUpdateCart()}
															</span>
														</div>
														{/* /.shopping-cart-btn */}
													</td>
												</tr>
											</tfoot>
										</table>{/* /table */}
									</div>
								</div>{/* /.shopping-cart-table */}
							</div>

							<div className="row">
								<div className="col-md-6 col-sm-12 estimate-ship-tax">
									<table className="table">

										<thead>
											<tr>
												<th>
													<span className="estimate-title">Nhập địa chỉ giao hàng:</span>
													{/* <p>Chọn địa chỉ giao hàng</p> */}
												</th>
											</tr>
										</thead>{/* /thead */}

										<tbody>
											<tr>
												<td>
													<form>
														<div className="form-group">
															<textarea className="form-control" rows="5" cols="70" name="txtAddress" form="usrform"
																value={this.state.txtAddress} onChange={(event) => this.changeInput(event)} placeholder="Địa chỉ" >
															</textarea>
														</div>
													</form>
												</td>
											</tr>
										</tbody>

									</table>
								</div>{/* /.estimate-ship-tax */}

								<div className="col-md-4 col-sm-12 col-md-push-2 cart-shopping-total">
									<table className="table">
										<thead>
											<tr>
												<th>
													<div className="cart-grand-total">
														Tổng tiền:
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
														<button type="submit" className="btn btn-primary checkout-btn" onClick={(event) => this.onSubmitOrder(event)}>Đặt hàng</button>
													</div>
												</td>
											</tr>
										</tbody>{/* /tbody */}
									</table>{/* /table */}
								</div>{/* /.cart-shopping-total */}
							</div>

						</div>

					</div >
				</div>
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

const mapDispatchToProps = dispatch => {
	return {
		onDeleteCartItem: (item) => {
			dispatch(actDeleteCartItem(item));
		},
		onUpdateCartItemQuantity: (item, quantity) => {
			dispatch(actUpdateCartItemQuantity(item, quantity));
		},
		onAddToOrders: (data) => {
			dispatch(actAddToOrdersRequest(data));
		},
		watchingProductDetail: (product) => {
			dispatch(actFetchProductDetail(product));
		},
		onFetchCart: (cart) => {
			dispatch(actFetchCart(cart));
		},
		onRemoveAllCartItem: cart => {
			dispatch(actRemoveAllCartItemRequest(cart));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);


