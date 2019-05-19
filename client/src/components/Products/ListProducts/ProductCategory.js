import React, { Component } from 'react';


class ProductCategory extends Component {
    onSort = (sortBy) => {
        this.props.onSort(sortBy);
    }
    render() {
        return (
            <div>
                <div className="more-info-tab clearfix ">
                    <h3 className="new-product-title pull-left">
                        -{this.props.children}
                    </h3>
                    <div className="navbar float-right mt-15px">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <span
																	className="label label-success height-20 mr-5"
                                  onClick={() => { this.onSort(0) }}>
                                    Yêu thích nhất
                                 </span>
                            </li>
                            <li>
                                <span className="label label-danger height-20 mr-5"
                                    onClick={() => { this.onSort(1) }}
                                >
                                    Giá tăng dần
                                </span>
                            </li>
                            <li>
                                <span className="label label-danger height-20 "
                                    onClick={() => { this.onSort(-1) }}
                                >
                                    Giá giảm dần
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCategory;
