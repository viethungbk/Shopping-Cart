import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Product extends Component {

    render() {
        let { product } = this.props;
        return (
            <div>
                <tr>
                    <td className="col-md-2 col-sm-6 col-xs-6"><img src={product.img} alt="product" /></td>
                    <td className="col-md-7 col-sm-6 col-xs-6">
                        <div className="product-name"><Link to="">{product.name}</Link></div>
                        <div className="rating">
                            <i className="fa fa-star rate" />
                            <i className="fa fa-star rate" />
                            <i className="fa fa-star rate" />
                            <i className="fa fa-star rate" />
                            <i className="fa fa-star non-rate" />
                            <span className="review">( 06 Reviews )</span>
                        </div>
                        <div className="price">
                            ${product.price}
                            <span>${product.price_before_discount}</span>
                        </div>
                    </td>
                    <td className="col-md-2 ">
                        <Link to="" className="btn-upper btn btn-primary">Add to cart</Link>
                    </td>
                    <td className="col-md-1 close-btn">
                        <Link to="" className><i className="fa fa-times" /></Link>
                    </td>
                </tr>
            </div>
        );
    }
}
export default Product;