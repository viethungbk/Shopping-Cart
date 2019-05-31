import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from '../Products/ListProducts/Slider';
import CustomProducts from '../Products/ListProducts/CustomProducts';
import { actFetchKeySearch, actFetchProductsRequest } from '../../actions/index';
import SearchProducts from '../Products/ListProducts/SearchProducts';

class Content extends Component {
	componentDidMount() {
		this.props.onFetchAllProducts();
	}

	hotDeals = (products) => {
		// Hot products
		const limitedDeal = 20 // %
		const hotDeals = products.filter(product => {
			return Math.floor((product.pricebefore - product.price) / product.pricebefore * 100) >= limitedDeal;
		});

		return hotDeals;
	}

	newProducts = (products) => {
		// New Products
		const limitedNewDate = 1 * 24 * 60 * 60 * 1000 // 1 day to ms
		const dateNow = Date.now();

		const newProducts = products.filter(product => {
			const productDate = new Date(product.date).getTime();
			return dateNow - productDate <= limitedNewDate;
		});

		return newProducts;
	}

	render() {
		let { products, keySearch } = this.props;

		if (products === undefined || products.length === 0) {
			return null;
		}

		if (keySearch) {
			console.log(keySearch)
			const searchProducts = products.filter(product => {
				return (product.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1) ||
					product.brand.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1
			});

			console.log(searchProducts)
			return <SearchProducts customProducts={searchProducts}>Giảm giá sock</SearchProducts>
		} else {

			return (
				<div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
					<Slider></Slider>
	
					<CustomProducts customProducts={this.hotDeals(products)} productsPerPage={4}>Giảm giá sock</CustomProducts>
	
					<hr />
	
					<CustomProducts customProducts={this.newProducts(products)} productsPerPage={4}>Sản phẩm mới</CustomProducts>
	
					<hr />
	
					<CustomProducts customProducts={products} productsPerPage={8}>Tất cả</CustomProducts>
				</div>
			);
		}

	}
}

const mapStateToProps = state => {
	return {
		keySearch: state.keySearch,
		products: state.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchKeySearch: (keySearch) => {
			dispatch(actFetchKeySearch(keySearch));
		},
		onFetchAllProducts: () => {
			dispatch(actFetchProductsRequest());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);