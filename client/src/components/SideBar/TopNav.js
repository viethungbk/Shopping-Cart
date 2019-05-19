import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actFetchKeySearch } from '../../actions/index';
import { connect } from 'react-redux';


class TopNav extends Component {
  render() {

    return (
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head">
          <Link to="" onClick={() => this.props.onFetchKeySearch("")}>
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
                onClick={() => this.props.onFetchKeySearch("Samsung")}>
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
                SamSung
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch("Iphone")}>
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
                Iphone
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch("Xiaomi")}>
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
                Xiaomi
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch("Lenovo")}>
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
                Lenovo
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch("Huawei")}>
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
                Huawei
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch("Oppo")}>
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
                Oppo
              </Link>
            </li>

            <li className="dropdown menu-item">
              <Link
                to=""
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={() => this.props.onFetchKeySearch("Nokia")}>
                <i className="icon fa fa-shopping-bag" aria-hidden="true" />
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchKeySearch: (keySearch) => {
      dispatch(actFetchKeySearch(keySearch));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);