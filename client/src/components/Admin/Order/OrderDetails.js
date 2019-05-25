import React, { Component } from 'react';

import callApi from '../../../apiCaller';
import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import formatMoney from '../../../utils/formatMoney';

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

            console.log(listProducts);

            this.setState({
              order: { ...order, listItems: listProducts }
            });

            console.log(this.state)
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
    const value = target.value;

    this.setState({
      [name]: value
    });
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
              <span className="text-warning">{ order.status }</span>
              <div className="form-group col-md-3">
              <label htmlFor="sltOrderStatus">Trạng thái đơn hàng</label>
              <select className="form-control" value={ this.state.sltOrderStatus } name="sltOrderStatus" onChange={ (event) => this.changeInput(event) }>
                <option value={1}>Chờ Xác Nhận</option>
                <option value={2}>Đang Giao</option>
                <option value={3}>Giao Thành Công</option>
                <option value={4}>Đã Hủy</option>
              </select>
              <hr />
              <button type="button" class="btn btn-primary px-2">Cập nhật</button>
            </div>
            </div>
            <div className="col-md-12">
             <h4> Địa chỉ nhận hàng:</h4> {order.shipaddress}
            </div>
            <h4 className="col-md-12">Tổng tiền: <span className="text-danger">1 000 000 VND</span></h4>
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