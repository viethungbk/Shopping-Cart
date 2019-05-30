import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actFetchKeySearch } from '../../../actions/index';

class Navbar extends Component {
  render() {
    return (
      <div className="header-nav animate-dropdown">
        <div className="container">
          <div className="yamm navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="nav-bg-class">
              <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                <div className="nav-outer">
                  <ul className="nav navbar-nav">
                    <li className="active dropdown">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="dropdown yamm mega-menu">
                      <Link
                        to="/"
                        data-hover="dropdown"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={() => this.props.onFetchKeySearch("Samsung")}>
                        Samsung
                      </Link>
                    </li>

                    <li className="dropdown mega-menu">
                      <Link
                        to="/"
                        data-hover="dropdown"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        onClick={() => this.props.onFetchKeySearch("Iphone")}>
                        Iphone
                      </Link>
                    </li>

                    <li className="dropdown hidden-sm">
                      <Link
                        to="/"
                        onClick={() => this.props.onFetchKeySearch("Huawei")}>
                        Huawei
                      </Link>
                    </li>

                    <li className="dropdown hidden-sm">
                      <Link
                        to="/"
                        onClick={() => this.props.onFetchKeySearch("Xiaomi")}>
                        Xiaomi
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link
                        to="/"
                        onClick={() => this.props.onFetchKeySearch("Lenovo")}>
                        Lenovo
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link
                        to="/"
                        onClick={() => this.props.onFetchKeySearch("Oppo")}>
                        Oppo
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link
                        to="/"
                        onClick={() => this.props.onFetchKeySearch("Nokia")}>
                        Nokia
                      </Link>
                    </li>

                    <li className="dropdown  navbar-right special-menu">
                      <Link to="/contact">
                        LIÊN HỆ
                      </Link>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
