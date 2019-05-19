import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Cart extends Component {

    getTotalPrice = (cart) => {
        if (!cart) {
            return 0;
        }
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });
        return totalPrice;
    }

    simpleProduct = (cart, by) => {
        if (cart.length === 0) {
            return '';
        } else {
            switch (by) {
                case 'img': console.log(cart[0].product.img); return cart[0].product.img;
                case 'price': return cart[0].product.price;
                default: return cart[0].product.price * cart[0].quantity;
            }
        }
    }

    render() {
        let { cart } = this.props;
        return (
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row">
                <div className="dropdown dropdown-cart">
                    <Link to="" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                        <div className="items-cart-inner">
                            <div className="basket">
                                <div className="basket-item-count"><span className="count">{cart.length}</span></div>
                                <div className="total-price-basket"> <span className="lbl">Giỏ hàng</span>
                                    <span className="value">
                                        ${this.getTotalPrice(cart)}
                                    </span> </div>
                            </div>
                        </div>
                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <div className="cart-item product-summary">
                                <div className="row">
                                    <div className="col-xs-4">
                                        <div className="">
                                            <Link to="/product-details">
                                                <img src={
                                                    'assets/images/products/samsung-note-9.jpg'
                                                } alt="product" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <h3 className="name"><Link to="">Simple Product</Link></h3>
                                        <div className="price">${this.simpleProduct(cart, "price")}</div>
                                    </div>
                                    <div className="col-xs-1 action"> <Link to=""><i className="fa fa-trash" /></Link> </div>
                                </div>
                            </div>
                            {/* /.cart-item */}
                            <div className="clearfix" />
                            <hr />
                            <div className="clearfix cart-total">
                                <div className="pull-right"> <span className="text">Sub Total :
                                </span><span className="price">${this.simpleProduct(cart, "sub_total")}
                                    </span></div>
                                <div className="clearfix" />
                                <Link to="/shopping-cart" className="btn btn-upper btn-primary btn-block m-t-20">Tới giỏ hàng</Link> </div>
                            {/* /.cart-total*/}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);