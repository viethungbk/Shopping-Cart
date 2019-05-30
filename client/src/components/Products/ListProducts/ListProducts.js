import React, { Component } from 'react';
import Product from './Product';
import ProductCategory from './ProductCategory';
import { connect } from 'react-redux';
import actAddToCart, { actFetchProductsRequest, actAddToWishList, actFetchProductDetail, actFetchKeySearch } from '../../../actions/index';
import Pagination from '../../../utils/Pagination/Pagination';
import NotFound from '../../NotFound/NotFound';

class ListProducts extends Component {
  state = {
    sortBy: 0,
    allProducts: [],
    currentProducts: [],
    currentPage: null,
    totalPages: null
  }

  componentDidMount() {
    this.props.onFetchAllProducts();
  }

  componentWillReceiveProps(nextProps) {
    const allProducts = nextProps.products;

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

    const { onAddToCart, onAddToWishList, keySearch, watchingProductDetail } = this.props;

    let listProducts = products.map((product, index) => {
      return (
        <Product
          key={index}
          product={product}
          onAddToCart={onAddToCart}
          onAddToWishList={onAddToWishList}
          keySearch={keySearch}
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
    let { children, keySearch } = this.props;

    const {
      allProducts,
      currentProducts
    } = this.state;
    const totalProducts = allProducts.length;

    if (totalProducts === 0) return null;

    let showedProducts = currentProducts;

    if (keySearch) {
      const filteredProducts = currentProducts.filter(product => {
        return (product.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1) ||
          product.brand.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1
      });

      if (filteredProducts.length === 0) {
        return <NotFound />
      }

      showedProducts = filteredProducts;
    }

    return (
      <div className="row">
        <ProductCategory onSort={this.onSort}>
          {children}
        </ProductCategory>

        <Pagination
          totalRecords={totalProducts}
          pageLimit={8}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />

        <div className="product-slider">
          <div className="col-md-12">
            {this.showProducts(showedProducts)}
          </div>
        </div>
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
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);