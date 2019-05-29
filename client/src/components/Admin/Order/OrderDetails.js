import React, { Component } from 'react';

import callApi from '../../../apiCaller';
import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import formatMoney from '../../../utils/formatMoney';
import showOrderStatus from '../../../utils/showOrderStatus';

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {},
      sltOrderStatus: 1
    }
  }
  componentDidMount() {
    const orderId = this.props.match.params.id;

    const headers = {
      'Authorization': localStorage.getItem("token")
    }

    callApi(`api/orders/${orderId}`, 'get', null, headers)
      .then(res => {
        const order = res.data;

        const listItems = res.data.listItems;
        let getProductPromises = listItems.map(item => {
          return callApi(`api/products/${item.product}`, 'get', null, headers);
        })

        Promise.all(getProductPromises)
          .then(result => {
            let listProducts = [];

            for (let i = 0; i < listItems.length; i++) {
              listProducts.push({
                product: result[i].data,
                quantity: listItems[i].quantity
              });
            }

            this.setState({
              order: { ...order, listItems: listProducts },
              sltOrderStatus: order.status
            });
          });

      })
      .catch(err => console.log(err));
  }

  showImage(images) {
    const numberImages = images.length;

    if (numberImages === 0) {
      return null;
    }

    return <img src={ ('data:image/jpeg;base64,' + arrayBufferToBase64(images[0].data)) } alt="product" width="128" />;
  }

  showProducts = (orderedItems) => {
    if (orderedItems === undefined) {
      return;
    }

    let tableRow =  orderedItems.map((item, index) => {
      return (
        <tr key={ index }>
          <td>{ index + 1 }</td>
          <td>{ this.showImage(item.product.image) }</td>
          <td>{ item.product.name }</td>
          <td>{ item.quantity }</td>
          <td>{ formatMoney(item.product.price) }</td>
          <td>{ formatMoney(item.quantity * item.product.price) }</td>
        </tr>
      );
    });

    return tableRow;
  }

  changeInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = parseInt(target.value);

    this.setState({
      [name]: value
    });
    console.log(this.state)
  }

  changeOrderStatus = (event, orderId) => {
    event.preventDefault();

    const orderStatus = {
      orderStatus: this.state.sltOrderStatus
    }

    const headers = {
      'Authorization': localStorage.getItem("token")
    }

    callApi(`api/orders/update/status/${orderId}`, 'patch', orderStatus, headers)
      .then(result => {
        console.log(result);
        window.alert(result.data);
      })
      .catch(error => {
        console.log(error);
        window.alert(error);
      })
  }

  render() {
    const { order } = this.state;

    return (
      <div className="container-fluid">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4>Chi tiết đơn hàng</h4>
          </div>

          <div className="panel-body">
            <div className="col-md-6">
              <h4>
                Mã đơn hàng: <span className="text-primary">{order._id}</span>
              </h4>
            </div>
            <div className="col-md-6">
              <span className="text-warning">{ showOrderStatus(this.state.sltOrderStatus) }</span>
              <div className="form-group col-md-3">
              <label htmlFor="sltOrderStatus">Trạng thái đơn hàng</label>
              <select className="form-control" value={ this.state.sltOrderStatus } name="sltOrderStatus" onChange={ (event) => this.changeInput(event) }>
                <option value={1}>Chờ Xác Nhận</option>
                <option value={2}>Đang Giao</option>
                <option value={3}>Giao Thành Công</option>
                <option value={4}>Đã Hủy</option>
              </select>
              <hr />
              <button type="button" className="btn btn-primary px-2" onClick={(event) => this.changeOrderStatus(event, order._id)}>Cập nhật</button>
            </div>
            </div>
            <div className="col-md-12">
             <h4> Địa chỉ nhận hàng:</h4> {order.shipaddress}
            </div>
            <h4 className="col-md-12">Tổng tiền: <span className="text-danger">{ (order.grandtotal) } VND</span></h4>
            <hr />

            <table className="table table-responsive table-striped">
              <thead>
                <tr className="text-align-center">
                  <th>STT</th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>

              <tbody>
                {this.showProducts(order.listItems)}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}