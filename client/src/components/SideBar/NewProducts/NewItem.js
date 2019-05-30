import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import formatMoney from '../../../utils/formatMoney';

export default class NewItem extends Component {
	showProductDetail = (event, product) => {
		event.preventDefault();
		this.props.showProductDetail(product);
	}

	render() {
		const { product } = this.props;

		return (
			<div className="item">
				<div className="products special-product">
					<div className="product" onClick={(event) => this.showProductDetail(event, product) }>
						<div className="product-micro">
							<div className="row product-micro-row">

								{/* Anh Item */}
								<div className="col col-xs-5">
									<div className="product-image">
										<div className="image">
											<Link to="/product-details">
												<img src={'data:image/jpeg;base64,' + arrayBufferToBase64(product.image[0].data)} alt="New product" />
											</Link>
										</div>
									</div>
								</div>

								{/* Thong tin Item */}
								<div className="col col-xs-7">
									<div className="product-info">
										<h3 className="name">
											<Link to="/product-details">
												{ product.name }
											</Link>
										</h3>
										<div className="rating rateit-small" />
										<div className="product-price">
											<span className="price">
												<span className="text-info">
													{ formatMoney(product.price) } VNĐ
												</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
