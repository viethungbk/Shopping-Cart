import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Product from './Product';
import { actDeleteCartItem, actUpdateCartItemQuantity, actAddToOrders } from '../../actions/index';
import MessageCartEmpty from "./MessageCartEmpty";
import { Redirect } from "react-router-dom";
import { actFetchProductDetail } from '../../actions/index';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			diaChi: "",
			hoTen: "",
			SDT: "",
			ghiChu: "",
			date: null
		}
	}


	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
	}

	showCartItem = (cart) => {
		let result = [];
		let { onDeleteCartItem, onUpdateCartItemQuantity, user, watchingProductDetail } = this.props;

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

	onChange = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: value
		})
	}

	onSubmit = async event => {
		event.preventDefault();
		let { cart, onAddToOrders } = this.props;
		this.setState(
			{
				date: await (() => { return new Date() })()
			}
		);
		onAddToOrders(cart, this.state, "Đang xử lý")
		window.confirm("Đơn hàng của bạn đang được xử lý! ");
		this.onClear();
	}

	onClear = () => {
		this.setState({
			diaChi: "",
			hoTen: "",
			SDT: "",
			ghiChu: "",
			date: ""
		})
	}

	render() {
		let { cart } = this.props;
		let { diaChi, hoTen, SDT, ghiChu } = this.state;

		// console.log('cart', cart);

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
						<div className="col-md-4 col-sm-12 estimate-ship-tax">
							<table className="table">
								<thead>
									<tr>
										<th>
											<span className="estimate-title">
												Tiến hành thanh toán
                                        </span>
											<p>
												Chọn địa chỉ giao hàng
                                        </p>
										</th>
									</tr>
								</thead>{/* /thead */}
								<tbody>
									<tr>
										<td>
											<form onSubmit={this.onSubmit} >
												<div className="form-group">
													<label className="info-title control-label">
														Tỉnh/Thành Phố  - Quận/Huyện - Xã/Phường<span>*</span>
													</label>
													<input name="diaChi" id="" type="text" value={diaChi}
														onChange={this.onChange} />
													<br />
													<label className="info-title control-label">
														Họ Tên<span>*</span>
													</label>
													<br />
													<input name="hoTen" id="" type="text" value={hoTen}
														onChange={this.onChange} />
													<br />
													<label className="info-title control-label">
														SĐT<span>*</span>
													</label>
													<br />
													<input name="SDT" id="" type="text" value={SDT}
														onChange={this.onChange} />
													<br />
													<label className="info-title control-label">
														Ghi chú<span>*</span>
													</label>
													<br />
													<textarea rows="4" cols="50" name="ghiChu" form="usrform"
														value={ghiChu} onChange={this.onChange} placeholder="...">
													</textarea>
													<button type="submit" className="btn-upper btn btn-primary pull-right"
													// onClick={this.onSubmit}
													>
														Thanh toán
                                                    </button>
												</div>
											</form>
										</td>
									</tr>
								</tbody>
							</table>
						</div>{/* /.estimate-ship-tax */}
						<div className="col-md-4 col-sm-12 estimate-ship-tax">
							<table className="table">
								<thead>
									<tr>
										<th>
											<span className="estimate-title">Mã giảm giá</span>
											<p>Nhập mã giảm giá của bạn (nếu có)</p>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="form-group">
												<input type="text" className="form-control unicase-form-control text-input" placeholder="Mã giảm giá.." />
											</div>
											<div className="clearfix pull-right">
												<button type="submit" className="btn-upper btn btn-primary">Áp dụng</button>
											</div>
										</td>
									</tr>
								</tbody>{/* /tbody */}
							</table>{/* /table */}
						</div>{/* /.estimate-ship-tax */}
						<div className="col-md-4 col-sm-12 cart-shopping-total">
							<table className="table">
								<thead>
									<tr>
										<th>
											{/* <div className="cart-sub-total">
                                            Subtotal<span className="inner-left-md">$600.00</span>
                                        </div> */}
											<div className="cart-grand-total">
												Grand Total:
                                                <span className="inner-left-md">
													${this.grandTotal(cart)}
												</span>
											</div>
										</th>
									</tr>
								</thead>{/* /thead */}
								<tbody>
									<tr>
										<td>
											<div className="cart-checkout-btn pull-right">
												<button type="submit" className="btn btn-primary checkout-btn">Kiểm tra đơn hàng</button>
												<span className="">Thanh toán với nhiều địa chỉ!</span>
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
		user: state.user
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);


