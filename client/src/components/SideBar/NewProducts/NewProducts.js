import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewItem from './NewItem';
import { actFetchProductsRequest, actFetchProductDetail } from '../../../actions/index';

class NewProduct extends Component {
	componentDidMount() {
		this.props.onFetchAllProducts();
	}

	showProducts(products) {
		const { watchingProductDetail } = this.props;

		const listProducts = products.map((product, index) => {
			return (
				<div key={index}>
					<NewItem
						product={product}
						showProductDetail= { watchingProductDetail }
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

		const limitedNewDate = 1 * 24 * 60 * 60 * 1000 // ms
		const dateNow = Date.now();

		let newProducts = products.filter(product => {
			const productDate = new Date(product.date).getTime();
			return dateNow - productDate >= limitedNewDate;
		})

		if (newProducts.length > 3) {
			newProducts = newProducts.slice(0, 3);
		}

		return (
			<div className="sidebar-widget outer-bottom-small">
				<h3 className="section-title">
					Sản phẩm mới
        </h3>

				<div className="sidebar-widget-body outer-top-xs">
					<div className="sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
						{ this.showProducts(newProducts) }
					</div>
				</div>
				{/* /.sidebar-widget-body */}
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
		watchingProductDetail: (product) => {
			dispatch(actFetchProductDetail(product));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);