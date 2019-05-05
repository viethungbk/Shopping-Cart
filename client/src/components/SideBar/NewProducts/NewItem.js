import React, { Component } from 'react';

export default class NewItem extends Component {
  render() {
    return (
      <div className="item">
        <div className="products special-product">
          <div className="product">
            <div className="product-micro">
              <div className="row product-micro-row">

                {/* Anh Item */}
                <div className="col col-xs-5">
                  <div className="product-image">
                    <div className="image"> <a href="#"> <img src="assets/images/products/p5.jpg" alt /> </a> </div>
                  </div>
                </div>

                {/* Thong tin Item */}
                <div className="col col-xs-7">
                  <div className="product-info">
                    <h3 className="name"><a href="#">Ten San Pham</a></h3>
                    <div className="rating rateit-small" />
                    <div className="product-price"> <span className="price"> $450.99 </span> </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
