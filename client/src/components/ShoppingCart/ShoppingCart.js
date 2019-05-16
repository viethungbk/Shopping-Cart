import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../apiCaller';
import Item from './Item';

export default class ShoppingCart extends Component {
   constructor(props) {
      super(props);

      this.state = {
         items: [{
            id: '',
            product: {},
            quantity: 0
         }]
      }
   }

   componentDidMount() {

      callApi('api/cart/', 'get', null)
         .then(rs => {
           this.setState({
             items: rs.data[0].listItems
           });
         })
         .catch(err => console.log(err));

   }

   showItems() {
    return this.state.items.map((item,index) => {
      return (
        <Item key={ index } item={ item.product } ></Item>
      );
    })
   }

   render() {
      return (
         <div className="row ">
            <div className="shopping-cart">
               <div className="shopping-cart-table ">
                  <div className="table-responsive">
                     <table className="table">
                        <thead>
                           <tr>
                              <th className="cart-romove item">Xóa</th>
                              <th className="cart-description item">Hình Ảnh</th>
                              <th className="cart-product-name item">Tên Sản Phẩm</th>
                              <th className="cart-qty item">Số Lượng</th>
                              <th className="cart-sub-total item">Đơn Giá</th>
                              <th className="cart-total last-item">Tổng</th>
                           </tr>
                        </thead>{/* /thead */}
                        <tbody>
                            {/* items */}
                            { this.showItems() }
                        </tbody>{/* /tbody */}
                        <tfoot>
                           <tr>
                              <td colSpan={7}>
                                 <div className="shopping-cart-btn">
                                    <span>
                                       <Link to="" className="btn btn-upper btn-primary outer-left-xs">Continue Shopping</Link>
                                       <Link to="" className="btn btn-upper btn-primary pull-right outer-right-xs">Update shopping cart</Link>
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
                                 <input type="text" className="form-control unicase-form-control text-input" />
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
                                 <span>Checkout with multiples address!</span>
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
