import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrayBufferToBase64 from '../../../arrayBufferToBase64';

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false
		}
	}

	// showRating = (avarageRating) => {
	// 	var result = [];
	// 	for (var i = 0; i < avarageRating; i++) {
	// 		result.push(<i key={i} className="fa fa-star star" />);
	// 	}
	// 	for (var j = 0; j < 5 - avarageRating; j++) {
	// 		result.push(<i key={5 - j} className="fa fa-star-o" />);
	// 	}
	// 	return result;
	// }

	// Phải dispath 1 cái action để thêm vào reducer cart
	onAddToCart = (product, quantity) => {
		// if (!this.props.user) {
		// 	window.confirm("Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng!");
		// 	this.setState({
		// 		isLogin: true
		// 	});
		// } else {
			this.props.onAddToCart(product, quantity);
		// }
	}

	onAddToWishList = (product) => {
		// if (!this.props.user) {
		// 	window.confirm("Bạn phải đăng nhập để thêm sản phẩm yêu thích!");
		// 	this.setState({
		// 		isLogin: true
		// 	});
		// } else {
			this.props.onAddToWishList(product);
		// }
	}

	// showRedirect = () => {
	// 	if (this.state.isLogin) {
	// 		return <Redirect to="/login" />
	// 	}
	// }
	watchingProductDetail = (product) => {
		this.props.watchingProductDetail(product);
	}

	showImage(images) {
		const numberImages = images.length;

		if (numberImages === 0) {
			return null;
		}

		if (numberImages === 1) {
			return (
				<img src={'data:image/jpeg;base64,' + arrayBufferToBase64(images[0].data)} alt="product" />
			);
		}

		return (
			<div>
				<img src={'data:image/jpeg;base64,' + arrayBufferToBase64(images[0].data)} alt="main product img" />
				<img src={'data:image/jpeg;base64,' + arrayBufferToBase64(images[1].data)} alt="product hover" className="hover-image" />
			</div>
		);
	}

	render() {
		const { product } = this.props;
		// console.log(product.image);

		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				{/* {this.showRedirect()} */}
				<div className="item item-carousel">
					<div className="products">
						<div className="product">
							{/* Anh San Pham */}
							<div className="product-image">
								<div className="image" onClick={() => this.watchingProductDetail(product)}>
									<Link to="/product-details">
										{this.showImage(product.image)}
									</Link>
								</div>
								<div className="tag new"><span>new</span></div>
							</div>

							{/* Thong tin San Pham */}
							<div className="product-info text-left">
								<h3 className="name" onClick={() => this.watchingProductDetail(product)}>
									<Link to="/product-details"
									>
										{product.name}
									</Link></h3>
								{/* {this.showRating(product.rating)} */}
								<div className="description" />
								<div className="product-price">
									<span className="price">
										${product.price}
									</span>
									<span className="price-before-discount">
										$ {product.pricebefore}
									</span>
								</div>
							</div>

							{/* Hanh dong */}
							<div className="cart clearfix animate-effect">
								<div className="action">
									<ul className="list-unstyled">
										<li className="add-cart-button btn-group">
											<button data-toggle="tooltip" className="btn btn-primary icon"
												type="button"
												title="Add Cart"
												onClick={() => this.onAddToCart(product, 1)}
											>
												<i className="fa fa-shopping-cart" />
											</button>
										</li>
										<li className="add-cart-button btn-group" >
											<button data-toggle="tooltip"
												className="btn btn-primary icon"
												title="Wishlist"
												onClick={() => { this.onAddToWishList(product) }}
											>
												<i className="icon fa fa-heart" />
											</button>
										</li>
										<li className="lnk" onClick={() => this.props.watchingProductDetail(product)}>
											<Link data-toggle="tooltip"
												className="add-to-cart" to="/product-details"
												title="Compare"
											// onClick={() => { this.onSeeProductDetail(product) }}
											>
												<i className="fa fa-signal" aria-hidden="true" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
