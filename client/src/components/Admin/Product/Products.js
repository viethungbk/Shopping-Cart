import React, { Component } from 'react';

export default class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Add Product</h3>
        </div>

        <hr />

        <div className="row">
          <form className="form-horizontal">

            <div className="form-group">
              <label htmlFor="txtName" className="col-sm-2 control-label">Tên sản phẩm*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtName" name="txtName" placeholder="Iphone XS Max" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtPrice" className="col-sm-2 control-label">Giá bán*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtPrice" name="txtPrice" placeholder="20 000 000" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtBrand" className="col-sm-2 control-label">Hãng Điện thoại*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtBrand" name="txtBrand" placeholder="Iphone" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtIventory" className="col-sm-2 control-label">Số lượng*</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtIventory" name="txtIventory" placeholder="1000" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtOS" className="col-sm-2 control-label">Hệ điều hành</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtOS" name="txtOS" placeholder="Android" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtLanguage" className="col-sm-2 control-label">Ngôn ngữ</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtLanguage" name="txtLanguage" placeholder="Tiếng Việt" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtScreen" className="col-sm-2 control-label">Màn hình</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtScreen" name="txtScreen" placeholder="FullHD" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtCamera" className="col-sm-2 control-label">Camera</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtCamera" name="txtCamera" placeholder="Trước: 10Mpx, Sau: 24px" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtCPU" className="col-sm-2 control-label">CPU</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtCPU" name="txtCPU" placeholder="Snapdragon 810" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtMemmory" className="col-sm-2 control-label">Bộ nhớ</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtMemmory" name="txtMemmory" placeholder="ROM 512GB" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="txtBattery" className="col-sm-2 control-label">Pin</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="txtBattery" name="txtBattery" placeholder="4000mAh" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputFile" className="col-sm-2 control-label">Thêm Ảnh</label>
              <input type="file" id="exampleInputFile" />
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
