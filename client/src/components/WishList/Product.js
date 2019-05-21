import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrayBufferToBase64 from '../../utils/arrayBufferToBase64';
import formatMoney from '../../utils/formatMoney';

class Product extends Component {

	onAddToCart = (product, quantity) => {
		this.props.onAddToCart(product, quantity);
	}
	onDeleteWishItem = (product) => {
		this.props.onDeleteWishItem(product);
	}

	showImage(images) {
    const numberImages = images.length;

    if (numberImages === 0) {
      return null;
    }

    return ('data:image/jpeg;base64,' + arrayBufferToBase64(images[0].data));
  }

	render() {
		let { product } = this.props;
		console.log(product)
		return (
			<tr>
				<td className="col-md-2 col-sm-6 col-xs-6"><img src={this.showImage(product.image)} alt="product" /></td>
				<td className="col-md-7 col-sm-6 col-xs-6">
					<div className="product-name"><Link to="">{product.name}</Link></div>
					<div className="rating">
						<i className="fa fa-star rate" />
						<i className="fa fa-star rate" />
						<i className="fa fa-star rate" />
						<i className="fa fa-star rate" />
						<i className="fa fa-star non-rate" />
						<span className="review">( 06 Reviews )</span>
					</div>
					<div className="price">
						{formatMoney(product.price)} VNĐ
						<span>{formatMoney(product.pricebefore)} VNĐ</span>
					</div>
				</td>
				<td className="col-md-2 " onClick={() => { this.onAddToCart(product, 1) }} >
					<Link to="/shopping-cart" className="btn-upper btn btn-primary">Add to cart</Link>
				</td>
				<td className="col-md-1 close-btn" onClick={() => { this.onDeleteWishItem(product) }} >
					<Link to="/wishList" className=""><i className="fa fa-times" /></Link>
				</td>
			</tr>
		);
	}
}


export default Product;