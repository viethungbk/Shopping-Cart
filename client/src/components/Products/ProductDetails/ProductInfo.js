import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import actAddToCart, { actAddToWishList } from '../../../actions/index';
import formatMoney from '../../../utils/formatMoney';
import callApi from '../../../apiCaller';

class ProductInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}
	onChangeQuantity = (quantity, iventory) => {
		let q = this.state.quantity + quantity;
		this.setState({
			quantity: q <= 1 ? 1 : q >= iventory ? iventory : q
		})
	}

	onAddToCart = (product, quantity) => {
		const { user } = this.props;

		this.props.onAddToCart(product, quantity);

		if (user._id !== undefined) {

			const headers = {
				'Authorization': localStorage.getItem('token')
			}

			const item = {
				product: product._id,
				quantity: quantity
			}

			callApi('api/cart/add', 'post', item, headers)
				.then(rs => console.log(rs))
				.catch(err => console.log(err));
		}
	}

	onAddToWishList = (product) => {
		const { user } = this.props;

		this.props.onAddToWishList(product);

		if (user._id !== undefined) {
			console.log(product);

			const headers = {
				'Authorization': localStorage.getItem('token')
			}

			const item = {
				product: product._id
			}

			callApi('api/wishlist/add', 'post', item, headers)
				.then(rs => console.log(rs))
				.catch(err => console.log(err));
		}
	}

	render() {
		const { product } = this.props;
		const { quantity } = this.state;

		return (
			<div className="col-sm-12 col-md-8 col-lg-8 product-info-block">
				<div className="product-info">
					<h1 className="name">{product.name}</h1>
					<div className="rating-reviews m-t-20">
						<div className="row">
							<div className="col-lg-12">
								<div className="pull-left">
									<div className="rating rateit-small" />
								</div>
								<div className="pull-left">
									<div className="reviews">
										<Link to="" className="lnk">(13 Reviews)</Link>
									</div>
								</div>
							</div>
						</div>{/* /.row */}
					</div>{/* /.rating-reviews */}
					<div className="stock-container info-container m-t-10">
						<div className="row">
							<div className="col-lg-12">
								<div className="pull-left">
									<div className="stock-box">
										<span className="label">Hãng :</span>
									</div>
								</div>
								<div className="pull-left">
									<div className="stock-box">
										<span className="value">{product.brand}</span>
									</div>
								</div>
							</div>
						</div>{/* /.row */}
					</div>{/* /.stock-container */}
					<div className="description-container m-t-20">
						<p>{product.details}</p>
						<p></p>
					</div>{/* /.description-container */}
					<div className="price-container info-container m-t-30">
						<div className="row">
							<div className="col-sm-6 col-xs-6">
								<div className="price-box">
									<span className="price">{formatMoney(product.price)} VNĐ</span>
									<span className="price-strike">{formatMoney(product.pricebefore)} VNĐ</span>
								</div>
							</div>
							<div className="col-sm-6 col-xs-6">
								<div className="favorite-button m-t-5">
									<Link className="btn btn-primary icon"
										data-toggle="tooltip" data-placement="right"
										title="Wishlist" to="/wishList"
										onClick={() => this.onAddToWishList(product)} >
										<i className="fa fa-heart" />
									</Link>
									<Link className="btn btn-primary"
										data-toggle="tooltip" data-placement="right"
										title="Add to Compare" to="" >
										<i className="fa fa-signal" />
									</Link>
									<Link className="btn btn-primary"
										data-toggle="tooltip" data-placement="right"
										title="E-mail" to="" >
										<i className="fa fa-envelope" />
									</Link>
								</div>
							</div>
						</div>{/* /.row */}
					</div>{/* /.price-container */}
					<div className="quantity-container info-container">
						<div className="row">
							<div className="qty">
								<span className="label">Lượng hàng trong kho : </span>
								<b className="fas fa-inventory">{product.iventory}</b>
							</div>
							<br /><br /><br />
							<div className="qty">
								<span className="label">Số lượng :</span>
							</div>
							<div className="qty-count">
								<div className="cart-quantity">
									<div className="quant-input">
										<div className="arrows">
											<div className="arrow plus gradient">
												<span className="ir">
													<i className="icon fa fa-sort-asc"
														onClick={() => this.onChangeQuantity(1, product.iventory)}
													/>
												</span>
											</div>
											<div className="arrow minus gradient">
												<span className="ir">
													<i className="icon fa fa-sort-desc"
														onClick={() => this.onChangeQuantity(-1, product.iventory)}
													/>
												</span>
											</div>
										</div>
										<input type="text" value={quantity} onChange={() => { }} />
									</div>
								</div>
							</div>
							<div className="add-btn">
								<Link to="/shopping-cart" className="btn btn-primary"
									onClick={() => this.onAddToCart(product, quantity)}>
									<i className="fa fa-shopping-cart inner-right-vs" />
									ADD TO CART
                </Link>
							</div>
						</div>{/* /.row */}
					</div>{/* /.quantity-container */}
				</div>{/* /.product-info */}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		productDetails: state.productDetails,
		user: state.user
	}
}
const mapDisPatchToProps = (dispatch, props) => {
	return {
		onAddToCart: (product, quantity) => {
			dispatch(actAddToCart(product, quantity));
		},
		onAddToWishList: (product) => {
			dispatch(actAddToWishList(product));
		}
	}
}


export default connect(mapStateToProps, mapDisPatchToProps)(ProductInfo);