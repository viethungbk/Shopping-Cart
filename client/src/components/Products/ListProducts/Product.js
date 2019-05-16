import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
	showRating = (avarageRating) => {
		var result = [];
		for (var i = 0; i < avarageRating; i++) {
			result.push(<i key={i} className="fa fa-star star" />);
		}
		for (var j = 0; j < 5 - avarageRating; j++) {
			result.push(<i key={5 - j} className="fa fa-star-o" />);
		}
		return result;
	}

	// Convert array to base64
	arrayBufferToBase64(buffer) {
		var binary = '';
		var bytes = [].slice.call(new Uint8Array(buffer));
		bytes.forEach((b) => binary += String.fromCharCode(b));
		return window.btoa(binary);
	};

	render() {
		const { product } = this.props;
		console.log(btoa(product.image.data.toString('base64')));

		return (
			<div className="col-md-3">
				<div className="item item-carousel">
					<div className="products">
						<div className="product">

							{/* Anh San Pham */}
							<div className="product-image">
								<div className="image">
									<Link to="/product-details">
										<img src="/assets/images/products/samsung-note-9.jpg" alt={product.name} />
										<img src={'data:image/jpeg;base64,' + this.arrayBufferToBase64(product.image.data)} alt="product hover" className="hover-image" />
									</Link>
								</div>
								<div className="tag new"><span>new</span></div>
							</div>

							{/* Thong tin San Pham */}
							<div className="product-info text-left">
								<h3 className="name"><Link to="/product-details">{product.name}</Link></h3>
								{/* {this.showRating(product.rating)} */}
								<div className="description" />
								<div className="product-price">
									<span className="price">
										{product.price}
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
											<button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart" /> </button>
											<button className="btn btn-primary cart-btn" type="button">Add to cart</button>
										</li>
										<li className="lnk wishlist"> <Link data-toggle="tooltip" className="add-to-cart" to="/product-details" title="Wishlist"> <i className="icon fa fa-heart" /> </Link> </li>
										<li className="lnk"> <Link data-toggle="tooltip" className="add-to-cart" to="/product-details" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </Link> </li>
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
