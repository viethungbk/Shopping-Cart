import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from '../Products/ListProducts/Slider';
import CustomProducts from '../Products/ListProducts/CustomProducts';
import SearchProducts from '../Products/ListProducts/SearchProducts';
import { actFetchKeySearch, actFetchProductsRequest } from '../../actions/index';

class Content extends Component {
	componentDidMount() {
		this.props.onFetchAllProducts();
	}

	render() {
		const { products, keySearch } = this.props;

		if (products === undefined || products.length === 0) {
			return null;
		}

		if (keySearch) {
			const filteredProducts = products.filter(product => {
				return (product.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1) ||
					product.brand.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1
			});

			if (filteredProducts.length === 0) {
				return <h3>Khong tim thay san pham</h3>
			} else {

				console.log(filteredProducts)
				console.log(keySearch)
	
				return (
					<div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
							<h3>{keySearch}</h3>
							<SearchProducts products={filteredProducts} />
					</div>
				);
			}
		}

		// New Products
		const limitedNewDate = 1 * 24 * 60 * 60 * 1000 // 1 day to ms
		const dateNow = Date.now();

		const newProducts = products.filter(product => {
			const productDate = new Date(product.date).getTime();
			return dateNow - productDate <= limitedNewDate;
		})

		// Hot products
		const limitedDeal = 13 // %
		const hotDeals = products.filter(product => {
			return Math.floor((product.pricebefore - product.price) / product.pricebefore * 100) >= limitedDeal;
		})

		return (
			<div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
				<Slider></Slider>

				<CustomProducts products={hotDeals} productsPerPage={4}>Giảm giá sock</CustomProducts>

				<hr />

				<CustomProducts products={newProducts} productsPerPage={4}>Sản phẩm mới</CustomProducts>

				<hr />

				<CustomProducts products={products} productsPerPage={8}>Tất cả</CustomProducts>
			</div>
		);
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