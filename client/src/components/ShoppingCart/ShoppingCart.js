import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
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
                    <th className="cart-sub-total item">Subtotal</th>
                    <th className="cart-total last-item">Grandtotal</th>
                  </tr>
                </thead>{/* /thead */}
                <tbody>
                  <tr>
                    <td className="romove-item"><a href="#" title="cancel" className="icon"><i className="fa fa-trash-o" /></a></td>
                    <td className="cart-image">
                      <a className="entry-thumbnail" href="detail.html">
                        <img src="assets/images/products/p1.jpg" alt />
                      </a>
                    </td>
                    <td className="cart-product-name-info">
                      <h4 className="cart-product-description"><a href="detail.html">Floral Print Buttoned</a></h4>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="rating rateit-small" />
                        </div>
                        <div className="col-sm-12">
                          <div className="reviews">
                            (06 Reviews)
                    </div>
                        </div>
                      </div>{/* /.row */}
                      <div className="cart-product-info">
                        <span className="product-color">COLOR:<span>Blue</span></span>
                      </div>
                    </td>
                    <td className="cart-product-edit"><a href="#" className="product-edit">Edit</a></td>
                    <td className="cart-product-quantity">
                      <div className="quant-input">
                        <div className="arrows">
                          <div className="arrow plus gradient"><span className="ir"><i className="icon fa fa-sort-asc" /></span></div>
                          <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc" /></span></div>
                        </div>
                        <input type="text" defaultValue={1} />
                      </div>
                    </td>
                    <td className="cart-product-sub-total"><span className="cart-sub-total-price">$300.00</span></td>
                    <td className="cart-product-grand-total"><span className="cart-grand-total-price">$300.00</span></td>
                  </tr>
                  <tr>
                    <td className="romove-item"><a href="#" title="cancel" className="icon"><i className="fa fa-trash-o" /></a></td>
                    <td className="cart-image">
                      <a className="entry-thumbnail" href="detail.html">
                        <img src="assets/images/products/p2.jpg" alt />
                      </a>
                    </td>
                    <td className="cart-product-name-info">
                      <h4 className="cart-product-description"><a href="detail.html">Floral Print Buttoned</a></h4>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="rating rateit-small" />
                        </div>
                        <div className="col-sm-12">
                          <div className="reviews">
                            (06 Reviews)
                    </div>
                        </div>
                      </div>{/* /.row */}
                      <div className="cart-product-info">
                        <span className="product-color">COLOR:<span>Pink</span></span>
                      </div>
                    </td>
                    <td className="cart-product-edit"><a href="#" className="product-edit">Edit</a></td>
                    <td className="cart-product-quantity">
                      <div className="cart-quantity">
                        <div className="quant-input">
                          <div className="arrows">
                            <div className="arrow plus gradient"><span className="ir"><i className="icon fa fa-sort-asc" /></span></div>
                            <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc" /></span></div>
                          </div>
                          <input type="text" defaultValue={1} />
                        </div>
                      </div>
                    </td>
                    <td className="cart-product-sub-total"><span className="cart-sub-total-price">$300.00</span></td>
                    <td className="cart-product-grand-total"><span className="cart-grand-total-price">$300.00</span></td>
                  </tr>
                </tbody>{/* /tbody */}
                <tfoot>
                  <tr>
                    <td colSpan={7}>
                      <div className="shopping-cart-btn">
                        <span className>
                          <a href="#" className="btn btn-upper btn-primary outer-left-xs">Continue Shopping</a>
                          <a href="#" className="btn btn-upper btn-primary pull-right outer-right-xs">Update shopping cart</a>
                        </span>
                      </div>{/* /.shopping-cart-btn */}
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
                    <span className="estimate-title">Estimate shipping and tax</span>
                    <p>Enter your destination to get shipping and tax.</p>
                  </th>
                </tr>
              </thead>{/* /thead */}
              <tbody>
                <tr>
                  <td>
                    <div className="form-group">
                      <label className="info-title control-label">Country <span>*</span></label>
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
                      <input type="text" className="form-control unicase-form-control text-input" placeholder />
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
                    <div className="cart-sub-total">
                      Subtotal<span className="inner-left-md">$600.00</span>
                    </div>
                    <div className="cart-grand-total">
                      Grand Total<span className="inner-left-md">$600.00</span>
                    </div>
                  </th>
                </tr>
              </thead>{/* /thead */}
              <tbody>
                <tr>
                  <td>
                    <div className="cart-checkout-btn pull-right">
                      <button type="submit" className="btn btn-primary checkout-btn">PROCCED TO CHEKOUT</button>
                      <span className>Checkout with multiples address!</span>
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
