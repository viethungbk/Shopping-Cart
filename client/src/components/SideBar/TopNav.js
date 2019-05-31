import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { actFetchKeySearch } from '../../actions/index';
import { connect } from 'react-redux';


class TopNav extends Component {
  render() {

    return (
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head">
          <Link to="" onClick={() => this.props.onFetchKeySearch('')}>
            <i className="icon fa fa-align-justify fa-fw" />
            Tất cả sản phẩm
          </Link>
        </div>
        <nav className="yamm megamenu-horizontal">
          <ul className="nav">
            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch('Samsung')}>
                SamSung
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch('Iphone')}>
                Iphone
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch('Xiaomi')}>
                Xiaomi
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch('Lenovo')}>
                Lenovo
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch('Huawei')}>
                Huawei
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch('Oppo')}>
                Oppo
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch('Nokia')}>
                Nokia
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keySearch: state.keySearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchKeySearch: (keySearch) => {
      dispatch(actFetchKeySearch(keySearch));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);