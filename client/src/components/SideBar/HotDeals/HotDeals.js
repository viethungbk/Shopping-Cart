import React, { Component } from 'react';
import { connect } from 'react-redux';

import actAddToCart, { actFetchProductsRequest, actFetchProductDetail } from '../../../actions/index';
import HotItem from './HotItem';

class HotDeals extends Component {
  componentDidMount() {
		this.props.onFetchAllProducts();
  }

  showProducts(products) {
		const { watchingProductDetail, onAddToCart } = this.props;

		const listProducts = products.map((product, index) => {
			return (
				<div key={index}>
					<HotItem
						product={product}
						showProductDetail={watchingProductDetail}
						onAddToCart={onAddToCart}
					/>
					<hr />
				</div>
			);
		});

		return listProducts;
	}

  render() {
    const { products } = this.props;

		if (products === undefined || products.length === 0) {
			return null;
		}

		const limitedDeal = 13 // %

		let hotDeals = products.filter(product => {
			return Math.floor((product.pricebefore - product.price) / product.pricebefore * 100) >= limitedDeal;
		})

		if (hotDeals.length > 2) {
			hotDeals = hotDeals.slice(0, 2);
    }

    return (
      <div className="sidebar-widget hot-deals outer-bottom-xs">
        <h3 className="section-title">Giảm giá</h3>
        <div className="sidebar-carousel custom-carousel owl-theme outer-top-ss">
          { this.showProducts(hotDeals) }
        </div>
        {/* /.sidebar-widget */}
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchAllProducts: () => {
			dispatch(actFetchProductsRequest());
		},
		onAddToCart: (product, quantity) => {
			dispatch(actAddToCart(product, quantity));
		},
		watchingProductDetail: (product) => {
			dispatch(actFetchProductDetail(product));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HotDeals);