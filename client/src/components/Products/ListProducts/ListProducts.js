import React, { Component } from 'react';
import Product from './Product';
import ProductCategory from './ProductCategory';
import { connect } from 'react-redux';
import actAddToCart from "./../../../actions/index";

class ListProducts extends Component {
    
    showProducts = (products) => {
        var {onAddToCart} = this.props;
        var listProducts = products.map((product, index) => {
            return <Product
                key={index}
                product={product}
                onAddToCart={onAddToCart}
            />
        });
        return listProducts;
    }

    render() {
        var { products } = this.props;
        var {children} = this.props;
        console.log('Listproducts')
        return (
            <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
                <ProductCategory>
                    {children}
                </ProductCategory>
                <div className="tab-content outer-top-xs">
                    <div className="tab-pane in active" id="all">
                        <div className="product-slider">
                            <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                                {this.showProducts(products)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product , 1));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);