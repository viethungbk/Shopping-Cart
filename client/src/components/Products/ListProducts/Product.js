import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {

    showRating = (avarageRating) => {
        var result = [];
        for (var i = 0; i < avarageRating; i++) {
            result.push(<i key={i} className="fa fa-star star" />);
        }
        for (var j = 0; j < 5 - avarageRating; j++) {
            result.push(<i key={5 - j} className="fa fa-star-o" />);
        }
        return result;
    }

    // Phải dispath 1 cái action để thêm vào reducer cart
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }

    onAddToWishList = (product) => {

        this.props.onAddToWishList(product);
    }

    render() {

        var { product } = this.props;
        console.log("run");
        console.log(product.image);

        return (
            <div className="item item-carousel">
                <div className="products">
                    <div className="product">

                        {/* Anh San Pham */}
                        <div className="product-image">
                            <div className="image">
                                <Link to="/product-details">
                                    <img src={product.img} alt={product.name} />
                                    {/* <img src={product.img_hover} alt="product hover" className="hover-image" /> */}

                                </Link>
                            </div>
                            <div className="tag new"><span>new</span></div>
                        </div>

                        {/* Thong tin San Pham */}
                        <div className="product-info text-left">
                            <h3 className="name"><Link to="/product-details">{product.name}</Link></h3>
                            {this.showRating(product.rating)}
                            <div className="description" />
                            <div className="product-price">
                                <span className="price">
                                    ${product.price}
                                </span>
                                <span className="price-before-discount">
                                    $ {product.price_before_discount}
                                </span>
                            </div>
                        </div>

                        {/* Hanh dong */}
                        <div className="cart clearfix animate-effect">
                            <div className="action">
                                <ul className="list-unstyled">
                                    <li className="add-cart-button btn-group">
                                        <button data-toggle="tooltip" className="btn btn-primary icon"
                                            type="button"
                                            title="Add Cart"
                                            onClick={() => { this.onAddToCart(product) }}
                                        >
                                            <i className="fa fa-shopping-cart" />
                                        </button>
                                    </li>
                                    <li className="lnk wishlist" >
                                        <Link data-toggle="tooltip" className="add-to-cart" to="/product-details" title="Wishlist" onClick={() => { this.onAddWishlist(product) }}>
                                            <i className="icon fa fa-heart" />
                                        </Link> </li>
                                    <li className="lnk">
                                        <Link data-toggle="tooltip" className="add-to-cart" to="/product-details" title="Compare">
                                            <i className="fa fa-signal" aria-hidden="true" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;