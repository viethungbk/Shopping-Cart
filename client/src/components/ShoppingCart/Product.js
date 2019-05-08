import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Product extends Component {

    onDeleteCartItem = (item) => {
        this.props.onDeleteCartItem(item);
    }

    render() {
        var { product, quantity } = this.props;

        return (
            <tr>
                <td className="romove-item" onClick={() => this.onDeleteCartItem(product)}>
                    <span>
                        <i className="fa fa-trash-o" />
                    </span>
                </td>
                <td className="cart-image">
                    <Link className="entry-thumbnail" to="/product-details">
                        <img src={product.img} alt="product thumb" />
                    </Link>
                </td>
                <td className="cart-product-name-info">
                    <h4 className="cart-product-description">
                        <Link to="/product-details">{product.name}</Link></h4>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="rating rateit-small" />
                        </div>
                        <div className="col-sm-12">
                            <div className="reviews">
                                (06 Reviews)
                            </div>
                        </div>
                    </div>
                    {/* /.row */}
                    <div className="cart-product-info">
                        <span className="product-color">
                            COLOR:
                            <span>
                                Blue
                            </span>
                        </span>
                    </div>
                </td>
                <td className="cart-product-edit"><Link to="" className="product-edit">Edit</Link></td>
                <td className="cart-product-quantity">
                    <div className="quant-input">
                        <div className="arrows">
                            <div className="arrow plus gradient"><span className="ir">
                                <i className="icon fa fa-sort-asc" />
                            </span>
                            </div>
                            <div className="arrow minus gradient">
                                <span className="ir">
                                    <i className="icon fa fa-sort-desc" />
                                </span>
                            </div>
                        </div>
                        <input type="text" defaultValue={quantity} />
                    </div>
                </td>
                <td className="cart-product-sub-total">
                    <span className="cart-sub-total-price">
                        ${product.price}
                    </span>
                </td>
                <td className="cart-product-grand-total">
                    <span className="cart-grand-total-price">
                        ${product.price * quantity}
                    </span>
                </td>
            </tr>
        );
    }
}

export default Product;
