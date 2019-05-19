import React, { Component } from 'react';
import Product from './Product';
import ProductCategory from './ProductCategory';
import { connect } from 'react-redux';
import actAddToCart, { actFetchProductsRequest, actAddToWishList, actFetchProductDetail } from '../../../actions/index';

class ListProducts extends Component {
  state = {
    sortBy: 0
  }

  componentDidMount() {
    this.props.onFetchAllProducts();
  }


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
    let { onAddToCart, onAddToWishList, seeProductDetail, keySearch, watchingProductDetail } = this.props;
    let listProducts = products.map((product, index) => {
      return <Product
        key={index}
        product={product}
        onAddToCart={onAddToCart}
        onAddToWishList={onAddToWishList}
        seeProductDetail={seeProductDetail}
        keySearch={keySearch}
        watchingProductDetail={watchingProductDetail}
      />
    });
    return listProducts;
  }


  onSort = (sortBy) => {
    this.setState({
      sortBy: sortBy
    })
  }

  render() {
    let { products, children, keySearch } = this.props;

    if (keySearch) {
      products = products.filter((product) => {
        return (product.name.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1) ||
          product.brand.toLowerCase().indexOf(keySearch.toLowerCase()) !== -1
      })
    }

    return (
      <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
        <ProductCategory onSort={this.onSort}>
          {children}
        </ProductCategory>
        <div className="tab-content outer-top-xs">
          {/* <div className="tab-pane in active" id="all"> */}
            <div className="product-slider">
              {/* owl-carousel home-owl-carousel custom-carousel owl-theme */}
              {/* <div className="owl-carousel home-owl-carousel custom-carousel owl-theme"> */}
              <div className="col-md-12">
                {this.showProducts(products)}
              </div>
            {/* </div> */}
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
    // onFetchKeySearch: (keySearch) => {
    //   dispatch(actFetchKeySearch(keySearch));
    // },
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