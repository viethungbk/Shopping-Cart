import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Product from './Product';
import * as MSG from './../../constants/Message';


class ShoppingCart extends Component {
    showCartItem = (cart) => {
        let result = MSG.MSG_CART_EMPTY;
        result = cart.map((item, index) => {
            return <Product
                key={index}
                product={item.product}
                quantity={item.quantity}
            />
        });
        return result;
    }

    grandTotal = (cart) => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].product.price;
        }
        return total;
    }

    render() {
        let { cart } = this.props;


        return (
            <div className="row ">
                <div className="shopping-cart">
                    <div className="shopping-cart-table ">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="cart-romove item">Remove</th>
                                        <th className="cart-description item">Image</th>
                                        <th className="cart-product-name item">Product Name</th>
                                        <th className="cart-edit item">Edit</th>
                                        <th className="cart-qty item">Quantity</th>
                                        <th className="cart-sub-total item">Price</th>
                                        <th className="cart-total last-item">Total</th>
                                    </tr>
                                </thead>{/* /thead */}

                                {/* Đổ dữ liệu từ trong cart */}
                                <tbody>
                                    {this.showCartItem(cart)}
                                </tbody>{/* /tbody */}
                                <tfoot>
                                    <tr>
                                        <td colSpan={7}>
                                            <div className="shopping-cart-btn">
                                                <span >
                                                    <Link to="/" className="btn btn-upper btn-primary outer-left-xs">
                                                        Continue Shopping
                                                    </Link>
                                                    <Link to="" className="btn btn-upper btn-primary pull-right outer-right-xs">
                                                        Update shopping cart
                                                    </Link>
                                                </span>
                                            </div>
                                            {/* /.shopping-cart-btn */}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>{/* /table */}
                        </div>
                    </div>{/* /.shopping-cart-table */}
                    <div className="col-md-4 col-sm-12 estimate-ship-tax">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="estimate-title">
                                            Estimate shipping and tax
                                        </span>
                                        <p>
                                            Enter your destination to get shipping and tax.
                                        </p>
                                    </th>
                                </tr>
                            </thead>{/* /thead */}
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <label className="info-title control-label">
                                                Country
                                                <span>*
                                                </span>
                                            </label>
                                            <select className="form-control unicase-form-control selectpicker">
                                                <option>--Select options--</option>
                                                <option>India</option>
                                                <option>SriLanka</option>
                                                <option>united kingdom</option>
                                                <option>saudi arabia</option>
                                                <option>united arab emirates</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title control-label">State/Province <span>*</span></label>
                                            <select className="form-control unicase-form-control selectpicker">
                                                <option>--Select options--</option>
                                                <option>TamilNadu</option>
                                                <option>Kerala</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Karnataka</option>
                                                <option>Madhya Pradesh</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title control-label">Zip/Postal Code</label>
                                            <input type="text" className="form-control unicase-form-control text-input" placeholder="" />
                                        </div>
                                        <div className="pull-right">
                                            <button type="submit" className="btn-upper btn btn-primary">GET A QOUTE</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>{/* /.estimate-ship-tax */}
                    <div className="col-md-4 col-sm-12 estimate-ship-tax">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="estimate-title">Discount Code</span>
                                        <p>Enter your coupon code if you have one..</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <input type="text" className="form-control unicase-form-control text-input" placeholder="You Coupon.." />
                                        </div>
                                        <div className="clearfix pull-right">
                                            <button type="submit" className="btn-upper btn btn-primary">APPLY COUPON</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>{/* /tbody */}
                        </table>{/* /table */}
                    </div>{/* /.estimate-ship-tax */}
                    <div className="col-md-4 col-sm-12 cart-shopping-total">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        {/* <div className="cart-sub-total">
                                            Subtotal<span className="inner-left-md">$600.00</span>
                                        </div> */}
                                        <div className="cart-grand-total">
                                            Grand Total<span className="inner-left-md">${this.grandTotal(cart)}</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>{/* /thead */}
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="cart-checkout-btn pull-right">
                                            <button type="submit" className="btn btn-primary checkout-btn">PROCCED TO CHEKOUT</button>
                                            <span className="">Checkout with multiples address!</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>{/* /tbody */}
                        </table>{/* /table */}
                    </div>{/* /.cart-shopping-total */}
                </div>{/* /.shopping-cart */}
            </div>

        );
    }

}



const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
