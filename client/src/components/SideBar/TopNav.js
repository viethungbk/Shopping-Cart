import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import actFetchKeySearch from '../../actions/index';

class TopNav extends Component {
  render() {
    return (
      <div className="side-menu animate-dropdown outer-bottom-xs">
        <div className="head"><i className="icon fa fa-align-justify fa-fw" /> Categories</div>
        <nav className="yamm megamenu-horizontal">
          <ul className="nav">
            <li className="dropdown menu-item" onClick={ () => this.props.onChangeKeySearch("SamSung") }>
              <Link to="" className="dropdown-toggle" data-toggle="dropdown">
              <i className="icon fa fa-shopping-bag" aria-hidden="true" />SamSung</Link
            ></li>
            <li className="dropdown menu-item"> <Link to="" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />HTC</Link></li>
            <li className="dropdown menu-item"> <Link to="" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Xiaomi</Link></li>
            <li className="dropdown menu-item"> <Link to="" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Lenovo</Link></li>
            <li className="dropdown menu-item"> <Link to="" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Huawie</Link></li>
            <li className="dropdown menu-item"> <Link to="" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-shopping-bag" aria-hidden="true" />Oppo</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeKeySearch: (keySearch) => {
      dispatch(actFetchKeySearch(keySearch));
    }
  }
}


export default connect(null, mapDispatchToProps)(TopNav);