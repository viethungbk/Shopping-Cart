import React, { Component } from 'react';
import arrayBufferToBase64 from '../../../arrayBufferToBase64';

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
    console.log(product);
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          { this.showImage(product.image) }
        </td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.pricebefore}</td>
        <td><i className="glyphicon glyphicon-edit"></i></td>
        <td><i className="glyphicon glyphicon-remove-circle"></i></td>
      </tr>
    )
  }
}
