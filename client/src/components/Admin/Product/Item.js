import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrayBufferToBase64 from '../../../utils/arrayBufferToBase64';
import formatMoney from '../../../utils/formatMoney';

export default class Item extends Component {
  showImage(images) {
    const numberImages = images.length;

    if (numberImages === 0) {
      return <img src="" alt="product thumbnail" />
    }

    return (
      <img src={'data:image/jpeg;base64,' + arrayBufferToBase64(images[0].data)} alt="product thumnail" className="img-thumbnail" width="64" />
    );
  }

  render() {
    const { product, index } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          { this.showImage(product.image) }
        </td>
        <td>{product.name}</td>
        <td>{formatMoney(product.price)} VNĐ</td>
        <td>{formatMoney(product.pricebefore)} VNĐ</td>
        <td>
          <Link to={`/admin/edit-product/${product._id}`}><button type="button" className="btn btn-primary">Sửa</button></Link>
        </td>
        <td><button type="button" className="btn btn-danger" onClick={ () => this.props.onDeleteItem(index) }>Xóa</button></td>
      </tr>
    )
  }
}
