import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import callApi from '../../../apiCaller';
import formatMoney from '../../../utils/formatMoney';
import showOrderStatus from '../../../utils/showOrderStatus';

class ListOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    }
  }
  componentDidMount() {
    const headers = {
      'Authorization': localStorage.getItem("token")
    }

    callApi('api/orders', 'get', null, headers)
      .then(res => {
        console.log(res.data);
        this.setState({
          orders: res.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  showOrders(orders) {
    let listOrders = orders.map((order, index) => {
      return (
        <tr key={ index }>
          <td>{ index + 1 }</td>
          <td><Link to={`/admin/order-details/${order._id}`}>{ order._id }</Link></td>
          <td>{ order.user }</td>
          <td>{ order.listItems.length }</td>
          <td>{ formatMoney(order.grandtotal) } VND</td>
          <td>{ order.shipaddress }</td>
          <td>{ order.date }</td>
          <td>{ showOrderStatus(order.status) }</td>
        </tr>
      );
    })

    return listOrders;
  }

  render() {
    const { orders } = this.state;

    return (
      <div className="container-fluid">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h1 className="panel-title">Kiểm duyệt đơn hàng</h1>
          </div>
          <div className="panel-body">
            <table className="table table-responsive table-striped">
              <thead>
                <tr className="text-align-center">
                  <th>STT</th>
                  <th>Mã đơn hàng</th>
                  <th>Mã người dùng</th>
                  <th>Tổng số lượng</th>
                  <th>Tổng tiền</th>
                  <th>Địa chỉ</th>
                  <th>Ngày tạo</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>

              <tbody>
                {this.showOrders(orders)}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

export default ListOrders;