import React, { Component } from 'react';
import callApi from '../../../apiCaller';
import Item from './Item';

export default class ListProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isFailed: false,
      isSuccess: false,
      message: ''
    }
  }
  componentDidMount() {
    callApi('api/products', 'get', null, null)
      .then(res => {
        console.log(res.data);
        this.setState({
          products: res.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  showProducts() {
    const { products } = this.state;

    let listProducts = products.map((product, index) => {
      return <Item key={index} index={index} product={product} onDeleteItem={(index) => this.onDeleteItem(index)}></Item>;
    });

    return listProducts;
  }

  showMessage() {
    if (this.state.isFailed) {
      return (
        <div className="alert alert-danger">
          <h4>{this.state.message}</h4>
        </div>
      );
    }
    if (this.state.isSuccess) {
      return (
        <div className="alert alert-success">
          <h4>{this.state.message}</h4>
        </div>
      );
    }
    return null;
  }

  onDeleteItem(index) {
    let { products } = this.state;
    const productId = products[index]._id;

    console.log(productId);

    products.splice(index, 1);

    this.setState({
      products: products
    });

    const headers = {
      'Authorization': localStorage.getItem("token")
    }

    callApi(`api/products/${productId}`, 'delete', null, headers)
      .then(res => {
        console.log(res.data);
        window.alert('Delete ', productId);
        // this.setState({
        //   isSuccess: true,
        //   message: res.data
        // });
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   isFailed: true,
        //   message: err.message
        // })
      });
  }

  render() {
    return (
      <div className="">
        <h1 className="page-header">Product</h1>

        {this.showMessage()}

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#id</th>
                <th>Ảnh</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Giá trước</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {this.showProducts()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
