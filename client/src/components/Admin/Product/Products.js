import React, { Component } from 'react';
import axios from 'axios';


export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      brand: '',
      iventory: '',
      os: '',
      language: '',
      screen: '',
      camera: '',
      cpu: '',
      memmory: '',
      battery: '',
      fileImages: [],
      isShowMessage: false,
      message: '',
      isSubmit: false
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    console.log('Submit');
    let product = {};
    product.name = this.state.name;
    product.price = this.state.price;
    product.brand = this.state.brand;
    product.iventory = this.state.iventory;
    product.os = this.state.os;
    product.language = this.state.lnguage;
    product.screen = this.state.screen;
    product.camera = this.state.camera;
    product.cpu = this.state.cpu;
    product.memory = this.state.memmory;
    product.battery = this.state.battery;
    product.image = this.state.fileImages;
    console.log(this.state);
    console.log(product);

    axios.post('/api/products/add', product)
      .then(res => {
        console.log(res);
        // this.setState({
        //   isLogin: true
        // });
      })
      .catch(err => {
        console.log(err.response);
        // this.setState({
        //   isShowMessage: true,
        //   message: err.response.data
        // });
        // console.log(this.state)
      });
  }

  // showMessage() {
  //   if (!this.state.isShowMessage) {
  //     return null;
  //   }
  //   let message = this.state.message.email || this.state.message.password;
  //   return (
  //     <div className="alert alert-danger">
  //       <h4>{ message }</h4>
  //     </div>
  //   );
  // }

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
    if (name === 'fileImages') {
      const file = event.target.files[0];
      console.log(file);
      this.setState({
        fileImages: file
      });
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Add Product</h3>
        </div>

        <hr />

        <div className="row">
          <form className="form-horizontal" method="POST" action="api/products/add" encType="multipart/form-data">

            <div className="form-group">
              <label htmlFor="name" className="col-sm-2 control-label">Tên sản phẩm*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="name" name="name" placeholder="Iphone XS Max" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="price" className="col-sm-2 control-label">Giá bán*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="price" name="price" placeholder="20 000 000" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="brand" className="col-sm-2 control-label">Hãng Điện thoại*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="brand" name="brand" placeholder="Iphone" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="iventory" className="col-sm-2 control-label">Số lượng*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="iventory" name="iventory" placeholder="1000" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="os" className="col-sm-2 control-label">Hệ điều hành</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="os" name="os" placeholder="Android" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="language" className="col-sm-2 control-label">Ngôn ngữ</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="language" name="language" placeholder="Tiếng Việt" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="screen" className="col-sm-2 control-label">Màn hình</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="screen" name="screen" placeholder="FullHD" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="camera" className="col-sm-2 control-label">Camera</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="camera" name="camera" placeholder="Trước: 10Mpx, Sau: 24px" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cpu" className="col-sm-2 control-label">CPU</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="cpu" name="cpu" placeholder="Snapdragon 810" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="memmory" className="col-sm-2 control-label">Bộ nhớ</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="memmory" name="memmory" placeholder="ROM 512GB" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="battery" className="col-sm-2 control-label">Pin</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="battery" name="battery" placeholder="4000mAh" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fileImages" className="col-sm-2 control-label">Thêm Ảnh</label>
              <input type="file" id="fileImages" name="fileImages" />
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </div>

          </form>
        </div >
      </div>
    );
  }
}
