import React, { Component } from 'react';

import callApi from '../../../apiCaller';

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: null,
      pricebefore: null,
      iventory: null,
      brand: '',
      details: '',
      image: [],
      isFailed: false,
      isAdded: false,
      message: ''
    }
  }

  checkInput() {
    const { name, price, pricebefore, iventory, brand } = this.state;

    if (name && price && pricebefore && iventory && brand) {
      return true;
    }

    return false;
  }

  submitForm = (event) => {
    event.preventDefault();

    if (!this.checkInput()) {
      this.setState({
        isFailed: true,
        message: 'Input Error'
      });
      return;
    }


    let product = new FormData();

    product.append('name', this.state.name);
    product.append('price', this.state.price);
    product.append('pricebefore', this.state.pricebefore);
    product.append('iventory', this.state.iventory);
    product.append('brand', this.state.brand);
    product.append('details', this.state.details);
    this.state.image.forEach(image => {
      product.append('image', image, image.name);
    });

    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': localStorage.getItem('token')
    }

    callApi('api/products/add','post', product, headers)
      .then(res => {
        console.log(res);
        this.setState({
          isFailed: false,
          isAdded: true,
          message: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          isFailed: true,
          message: err.response.data
        });
        console.log(this.state)
      });

  }

  showMessage() {
    if (this.state.isFailed) {
      let message = this.state.message;

      return (
        <div className="alert alert-danger">
          <h4>{ message }</h4>
        </div>
      );
    }

    if (this.state.isAdded) {
      let message = this.state.message;

      return (
        <div className="alert alert-success">
          <h4>{ message }</h4>
        </div>
      );
    }
  }

  changeInput = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(name);
    console.log(value);

    this.setState({
      [name]: value
    });

    // Handle for file upload
    if (name === 'image') {
      const file = event.target.files;
      let images = Array.from(file);
      console.log(images);
      this.setState({
        image: [...images]
      });
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Thêm mới sản phẩm</h2>
        </div>

        { this.showMessage() }

        <hr />

        <div className="row">
          <form className="form-horizontal">

            <div className="form-group">
              <label htmlFor="name" className="col-sm-2 control-label">Tên sản phẩm*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" name="name" placeholder="Iphone XS Max" onChange={ event => this.changeInput(event) } />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="price" className="col-sm-2 control-label">Giá bán*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="price" name="price" placeholder="20 000 000" onChange={ event => this.changeInput(event) } />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="pricebefore" className="col-sm-2 control-label">Giá trước Sale*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="pricebefore" name="pricebefore" placeholder="30 000 000" onChange={ event => this.changeInput(event) } />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="brand" className="col-sm-2 control-label">Hãng Điện thoại*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="brand" name="brand" placeholder="Iphone" onChange={ event => this.changeInput(event) } />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="iventory" className="col-sm-2 control-label">Số lượng*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="iventory" name="iventory" placeholder="1000" onChange={ event => this.changeInput(event) } />
              </div>
            </div>

            <label className="col-sm-2" htmlFor="details">Mô tả sản phẩm:</label>
            <textarea id="details" className="col-sm-10" name="details" value={ this.state.details } rows="5" cols="33" onChange={ event => this.changeInput(event) }></textarea>

            <hr />

            <div className="form-group">
              <label htmlFor="image" className="col-sm-2 control-label">Thêm Ảnh</label>
              <input type="file" multiple id="image" name="image" onChange={ event => this.changeInput(event) } />
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary" onClick={ event => this.submitForm(event) }>
                  Add
                </button>
              </div>
            </div>
          </form>

        </div >
      </div>
    );
  }
}
