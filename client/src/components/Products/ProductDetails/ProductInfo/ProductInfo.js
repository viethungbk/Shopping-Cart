import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductInfo extends Component {
    render() {
        return (
            <div className="col-sm-12 col-md-8 col-lg-8 product-info-block">
                <div className="product-info">
                    <h1 className="name">Floral Print Buttoned</h1>
                    <div className="rating-reviews m-t-20">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pull-left">
                                    <div className="rating rateit-small" />
                                </div>
                                <div className="pull-left">
                                    <div className="reviews">
                                        <Link to="" className="lnk">(13 Reviews)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /.row */}
                    </div>{/* /.rating-reviews */}
                    <div className="stock-container info-container m-t-10">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="pull-left">
                                    <div className="stock-box">
                                        <span className="label">Availability :</span>
                                    </div>
                                </div>
                                <div className="pull-left">
                                    <div className="stock-box">
                                        <span className="value">In Stock</span>
                                    </div>
                                </div>
                            </div>
                        </div>{/* /.row */}
                    </div>{/* /.stock-container */}
                    <div className="description-container m-t-20">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>{/* /.description-container */}
                    <div className="price-container info-container m-t-30">
                        <div className="row">
                            <div className="col-sm-6 col-xs-6">
                                <div className="price-box">
                                    <span className="price">$800.00</span>
                                    <span className="price-strike">$900.00</span>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <div className="favorite-button m-t-5">
                                    <Link className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Wishlist" to="">
                                        <i className="fa fa-heart" />
                                    </Link>
                                    <Link className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Add to Compare" to="">
                                        <i className="fa fa-signal" />
                                    </Link>
                                    <Link className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="E-mail" to="">
                                        <i className="fa fa-envelope" />
                                    </Link>
                                </div>
                            </div>
                        </div>{/* /.row */}
                    </div>{/* /.price-container */}
                    <div className="quantity-container info-container">
                        <div className="row">
                            <div className="qty">
                                <span className="label">Qty :</span>
                            </div>
                            <div className="qty-count">
                                <div className="cart-quantity">
                                    <div className="quant-input">
                                        <div className="arrows">
                                            <div className="arrow plus gradient"><span className="ir"><i className="icon fa fa-sort-asc" /></span></div>
                                            <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc" /></span></div>
                                        </div>
                                        <input type="text" defaultValue={1} />
                                    </div>
                                </div>
                            </div>
                            <div className="add-btn">
                                <Link to="" className="btn btn-primary"><i className="fa fa-shopping-cart inner-right-vs" /> ADD TO CART</Link>
                            </div>
                        </div>{/* /.row */}
                    </div>{/* /.quantity-container */}
                </div>{/* /.product-info */}
            </div>
        );
    }
}
