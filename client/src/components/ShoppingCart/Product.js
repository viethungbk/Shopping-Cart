import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrayBufferToBase64 from '../../utils/arrayBufferToBase64';

class Product extends Component {

  onDeleteCartItem = (item) => {
    this.props.onDeleteCartItem(item);
  }

  onUpdateCartItemQuantity = (item, quantity) => {
    this.props.onUpdateCartItemQuantity(item, quantity);
  }

  showImage(images) {
    const numberImages = images.length;

    if (numberImages === 0) {
      return null;
    }

    return ('data:image/jpeg;base64,' + arrayBufferToBase64(images[0].data));
  }


  render() {
    let { item } = this.props;

    return (
      <tr>
        <td className="romove-item" onClick={() => this.onDeleteCartItem(item)}>
          <span>
            <i className="fa fa-trash-o" />
          </span>
        </td>
        <td className="cart-image">
          <Link
            className="entry-thumbnail"
            to="/product-details"
            onClick={() => this.props.watchingProductDetail(item.product)}>
            <img src={this.showImage(item.product.image)} alt="product thumb" />
          </Link>
        </td>
        <td className="cart-product-name-info">
          <h4 className="cart-product-description">
            <Link
              to="/product-details"
              onClick={() => this.props.watchingProductDetail(item.product)}>
              {item.product.name}
            </Link>
          </h4>
          <div className="row">
            <div className="col-sm-12">
              <div className="rating rateit-small" />
            </div>
            <div className="col-sm-12">
              <div className="reviews">
                (16 Đánh giá)
              </div>
            </div>
          </div>
          {/* /.row */}
          <div className="cart-product-info">
            <span className="product-color">
              Hãng:
            <span>
                {item.product.brand}
              </span>
            </span>
          </div>
        </td>
        <td className="cart-product-quantity">
          <div className="quant-input">
            <div className="arrows">
              <div className="arrow plus gradient">
                <span
                  className="ir"
                  onClick={() => { this.onUpdateCartItemQuantity(item, 1) }}>
                  <i className="icon fa fa-sort-asc" />
                </span>
              </div>
              <div className="arrow minus gradient">
                <span
                  className="ir"
                  onClick={() => { this.onUpdateCartItemQuantity(item, -1) }}>
                  <i className="icon fa fa-sort-desc" />
                </span>
              </div>
            </div>
            <input type="text"
              value={item.quantity}
              onChange={() => { }} />
          </div>
        </td>
        <td className="cart-product-sub-total">
          <span className="cart-sub-total-price">
            ${item.product.price}
          </span>
        </td>
        <td className="cart-product-grand-total">
          <span className="cart-grand-total-price">
            ${item.product.price * item.quantity}
          </span>
        </td>
      </tr>
    );
  }
}

export default Product;
