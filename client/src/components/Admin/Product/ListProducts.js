import React, { Component } from 'react';
import callApi from '../../../apiCaller';
import Item from './Item';

export default class ListProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
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
      console.log(index);
      return <Item key={ index } index= { index } product={ product }></Item>;
    });

    return listProducts;
  }

  render() {
    return (
      <div className="">
        <h1 className="page-header">Product</h1>

        <h2 className="sub-header">Porduct</h2>
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
              { this.showProducts() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
