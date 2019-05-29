import React, { Component } from 'react';
import { actFetchOrderDetails } from '../../actions/index';

import { connect } from 'react-redux';
import Order from './Order';

class Orders extends Component {
  showOrders = (orders) => {
    if (orders.length !== 0) {
      const { showOrderDetails } = this.props;

      let result = orders.map((order, index) => {
        return (
          <Order key={index}
            order={order}
            index={index}
            showOrderDetails={showOrderDetails} />
        );
      });
      return result;
    } else {
      return <tr>
        <td>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h3 className="alert alert-warning">
              Bạn chưa có đơn hàng nào !
            </h3>
          </div>
        </td>
      </tr>
    }
  }
  render() {
    let { orders } = this.props;

    return (
      <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <div className="container-fluid">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h1 className="panel-title">Kiểm tra đơn hàng</h1>
            </div>
            <div className="panel-body">
              <table className="table table-responsive table-bordered">
                <thead>
                  <tr className="text-align-center">
                    <th>STT</th>
                    <th>Mã đơn hàng</th>
                    <th>Số lượng sản phẩm</th>
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showOrderDetails: (order) => {
      dispatch(actFetchOrderDetails(order));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);