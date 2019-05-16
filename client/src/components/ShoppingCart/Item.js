import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../apiCaller';
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: '',
        price: null,
        pricebefore: null,
        brand: '',
        inventory: '',
        details: '',
        rate: null
      }
    }
  }

  componentDidMount() {
    console.log(this.props.item);
    callApi('api/products/:id', 'get', this.props.item)
      .then(rs => console.log(rs))
      .catch(err => console.log(err));

  }

  onDeleteCartItem = (item) => {
    this.props.onDeleteCartItem(item);
  }

  onUpdateCartItemQuantity = (item, quantity) => {
    this.props.onUpdateCartItemQuantity(item, quantity);
  }


  render() {
    var { item } = this.props;

    return (
      <tr>
        <td className="romove-item" onClick={() => this.onDeleteCartItem(item)}>
          <span>
            <i className="fa fa-trash-o" />
          </span>
        </td>
        <td className="cart-image">
          <Link className="entry-thumbnail" to="/product-details">
            <img src="" alt="product thumb" />
          </Link>
        </td>
        <td className="cart-product-name-info">
          <h4 className="cart-product-description">
            <Link to="/product-details">Iphone 9 </Link></h4>
          <div className="row">
            <div className="col-sm-12">
              <div className="rating rateit-small" />
            </div>
            <div className="col-sm-12">
              <div className="reviews">
                (06 Reviews)
                            </div>
            </div>
          </div>
          {/* /.row */}
          <div className="cart-product-info">
            <span className="product-color">
              COLOR:
                            <span>
                Blue
                            </span>
            </span>
          </div>
        </td>
        <td className="cart-product-quantity">
          <div className="quant-input">
            <div className="arrows">
              <div className="arrow plus gradient"
                onClick={() => { this.onUpdateCartItemQuantity(item, 1) }}
              >
                <span className="ir">
                  <i className="icon fa fa-sort-asc" />
                </span>
              </div>
              <div className="arrow minus gradient"
                onClick={() => { this.onUpdateCartItemQuantity(item, -1) }}
              >
                <span className="ir">
                  <i className="icon fa fa-sort-desc" />
                </span>
              </div>
            </div>
            <input type="text"
              value={item.quantity}
              onChange={() => { }}
            />
          </div>
        </td>
        <td className="cart-product-sub-total">
          <span className="cart-sub-total-price">
            1000000
          </span>
        </td>
        <td className="cart-product-grand-total">
          <span className="cart-grand-total-price">
            30000000
          </span>
        </td>
      </tr>
    );
  }
}

export default Product;
