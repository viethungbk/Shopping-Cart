import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import formatMoney from '../../../utils/formatMoney';
import callApi from '../../../apiCaller';

class HotItem extends Component {
  showProductDetail = (event, product) => {
    event.preventDefault();
    this.props.showProductDetail(product);
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

  render() {
    const { product } = this.props;

    return (
      <div className="item">
        <div className="products" onClick={(event) => this.showProductDetail(event, product)}>
          <div className="hot-deal-wrapper">
            <div className="image">
              <Link to="">
                <img src={'data:image/jpeg;base64,' + arrayBufferToBase64(product.image[0].data)} alt="hot deals" />
              </Link>
            </div>
            <div className="sale-offer-tag">
              <span>{Math.floor((product.pricebefore - product.price) / product.pricebefore * 100)}%<br />off</span>
            </div>
          </div>
          {/* /.hot-deal-wrapper */}
          <div className="product-info text-left m-t-20">
            <h3 className="name"><Link to="/product-details">{product.name}</Link></h3>
            <div className="rating rateit-small" />
            <div className="product-price">
              <span className="price">
                {formatMoney(product.price)} VNĐ
               </span>
              <span className="price-before-discount">
                {formatMoney(product.pricebefore)} VNĐ
                 </span>
            </div>
            {/* /.product-price */}
          </div>
          {/* /.product-info */}
          <div className="cart clearfix animate-effect">
            <div className="action">
              <div className="add-cart-button btn-group">
                <button className="btn btn-primary icon" data-toggle="dropdown" type="button" onClick={() => this.onAddToCart(product, 1)}> <i className="fa fa-shopping-cart" /> </button>
                <button className="btn btn-primary cart-btn" type="button" onClick={() => this.onAddToCart(product, 1)}>Add to cart</button>
              </div>
            </div>
            {/* /.action */}
          </div>
          {/* /.cart */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, null)(HotItem);
