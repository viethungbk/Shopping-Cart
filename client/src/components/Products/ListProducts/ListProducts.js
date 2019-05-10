import React, { Component } from 'react';
import Product from './Product';
import ProductCategory from './ProductCategory';
import { connect } from 'react-redux';
import actAddToCart, { actAddToWishList, actFetchProductsRequest } from "./../../../actions/index";


class ListProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: 0
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    showProducts = (products) => {
        let sortBy = this.state.sortBy;
        console.log(sortBy);
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
        this.setState({
            sortBy : sortBy
        })
    }

    render() {
        let { products, children } = this.props;

        return (
            <div className="container">
                <ProductCategory
                    onSort={this.onSort}
                >
                    {children}
                </ProductCategory>
                <div className="row">
                    {this.showProducts(products)}
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
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onAddToWishList: (product) => {
            dispatch(actAddToWishList(product));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);