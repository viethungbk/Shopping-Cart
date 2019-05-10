import React, { Component } from 'react';
import Product from './Product';
import ProductCategory from './ProductCategory';
import { connect } from 'react-redux';
import actAddToCart, { actAddToWishList } from "./../../../actions/index";


class ListProducts extends Component {

    showProducts = (products) => {
        let { onAddToCart, onAddToWishList } = this.props;
        let listProducts = products.map((product, index) => {
            return <Product
                key={index}
                product={product}
                onAddToCart={onAddToCart}
                onAddToWishList={onAddToWishList}
            />
        });
        return listProducts;
    }

    onSort = (sortBy) => {
        console.log(sortBy);

    }

    render() {
        let { products } = this.props;
        let { children } = this.props;

        return (
            <div className="container">
                <ProductCategory
                    onSort={this.onSort}
                >
                    {children}
                </ProductCategory>

                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        {this.showProducts(products)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onAddToWishList: (product) => {
            dispatch(actAddToWishList(product));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);