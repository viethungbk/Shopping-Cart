import React, { Component } from 'react';

import callApi from '../../../apiCaller';
import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import formatMoney from '../../../utils/formatMoney';

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {}
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

  render() {
    const { order } = this.state;

    return (
      <div className="container-fluid">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h4>Chi tiết đơn hàng</h4>
          </div>

          <div className="panel-body">
            <div>Mã đơn hàng: {order._id}</div>
            <div>Trạng thái đơn hàng: <span className="text-warning">{order.status}</span></div>
            <div>Địa chỉ nhận hàng: {order.shipaddress}</div>
            <h4>Tổng tiền: <span className="text-primary">1 000 000 VND</span></h4>
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