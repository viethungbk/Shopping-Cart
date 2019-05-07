import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductCategory extends Component {
    render() {
        return (
            <div className="more-info-tab clearfix ">
                <h3 className="new-product-title pull-left">
                    {this.props.children}
                </h3>
                <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                    <li className="active">
                        <Link data-transition-type="backSlide" to="#all" data-toggle="tab">
                            Tất cả
                        </Link>
                    </li>
                    <li>
                        <Link data-transition-type="backSlide" to="#smartphone" data-toggle="tab">
                            Giá tăng dần
                        </Link>
                    </li>
                    <li>
                        <Link data-transition-type="backSlide" to="#laptop" data-toggle="tab">
                            Giá giảm dần
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ProductCategory;
