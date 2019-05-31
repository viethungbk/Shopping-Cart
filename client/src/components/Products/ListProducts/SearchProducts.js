import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import ProductCategory from './ProductCategory';
import actAddToCart, { actAddToWishList, actFetchProductDetail } from '../../../actions/index';

class SearchProducts extends Component {
  state = {
    sortBy: 0
  }

  showProducts = (products) => {
    console.log(products);

    let sortBy = this.state.sortBy;
    // console.log(sortBy);
    if (sortBy === 0) {
      products = products.sort((a, b) => {
        return b.rating - a.rating;
      });
    } else if (sortBy === 1) {
      products = products.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      products = products.sort((a, b) => {
        return b.price - a.price;
      });
    }

    const { onAddToCart, onAddToWishList, watchingProductDetail } = this.props;

    let listProducts = products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onAddToCart={onAddToCart}
          onAddToWishList={onAddToWishList}
          watchingProductDetail={watchingProductDetail}
        />
      );
    });

    return listProducts;
  }


  onSort = (sortBy) => {
    this.setState({
      sortBy: sortBy
    })
  }

  render() {
    let { children, customProducts } = this.props;
    console.log(customProducts);

    return (
      <div className="row">
        <ProductCategory onSort={this.onSort}>
          {children}
        </ProductCategory>

        <div className="product-slider">
          <div className="col-md-12">
            {this.showProducts(customProducts)}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product, quantity) => {
      dispatch(actAddToCart(product, quantity));
    },
    onAddToWishList: (product) => {
      dispatch(actAddToWishList(product));
    },
    watchingProductDetail: (product) => {
      dispatch(actFetchProductDetail(product));
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchProducts);