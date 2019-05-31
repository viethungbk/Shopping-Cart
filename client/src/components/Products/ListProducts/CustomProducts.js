import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import ProductCategory from './ProductCategory';
import actAddToCart, { actAddToWishList, actFetchProductDetail } from '../../../actions/index';
import Pagination from '../../../utils/Pagination/Pagination';

class CustomProducts extends Component {
  state = {
    sortBy: 0,
    allProducts: [],
    currentProducts: [],
    currentPage: null,
    totalPages: null
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.products)
    const allProducts = nextProps.customProducts;

    if (allProducts !== undefined) {
      this.setState({
        allProducts
      });
    }
  }

  onPageChanged = data => {
    const { allProducts } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = allProducts.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentProducts, totalPages });
  };

  showProducts = (products) => {
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
    let { children, productsPerPage } = this.props;

    const { allProducts, currentProducts } = this.state;
    const totalProducts = allProducts.length;

    if (totalProducts === 0) return null;

    return (
      <div className="row">
        <ProductCategory onSort={this.onSort}>
          {children}
        </ProductCategory>

        <Pagination
          totalRecords={totalProducts}
          pageLimit={productsPerPage}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />

        <div className="product-slider">
          <div className="col-md-12">
            {this.showProducts(currentProducts)}
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

export default connect(null, mapDispatchToProps)(CustomProducts);