import React, { Component } from 'react';
import { connect } from 'react-redux';

import arrayBufferToBase64 from '../../utils/arrayBufferToBase64';
import formatMoney from '../../utils/formatMoney';

class OrderDetails extends Component {
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

    const { products } = this.props;

    let listProducts = [];

    orderedItems.forEach(item => {
      let index = products.findIndex(product => {
        return product._id === item.product
      })
      if (index !== -1) {
        listProducts.push({
          product: products[index],
          quantity: item.quantity
        });
      }
    });

    console.log(orderedItems)
    console.log(listProducts)

    let tableRow =  listProducts.map((item, index) => {
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
    const { order } = this.props;
    console.log(order);


    return (
      <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <div className="container-fluid">
          <div className="panel panel-info">
            <div className="panel-heading">
              <h4>Chi tiết đơn hàng</h4>
            </div>

            <div className="panel-body">
              <div>
                <h4>Mã đơn hàng: {order._id}</h4>
              </div>
              <div>
                <h4>Trạng thái đơn hàng: <span className="text-warning">{order.status}</span></h4>
              </div>
              <div>
                <h4>Địa chỉ nhận hàng: </h4>
                {order.shipaddress}
              </div>
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
                  { this.showProducts(order.listItems) }
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.orderDetails,
    products: state.products
  }
}

export default connect(mapStateToProps, null)(OrderDetails);