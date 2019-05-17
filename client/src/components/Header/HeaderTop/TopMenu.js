import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { actRemoveUser } from "./../../../actions/index";

class TopMenu extends Component {

  log = (user) => {
    // console.log(user);
    if (typeof user.id==="number") {
      return "Đăng xuất"
    } else {
      return "Đăng nhập"
    }
  }

  showNameAcount = (user) =>{
    if (typeof user.id==="number") {
      return user.name;
    } else {
      return "Tài Khoản"
    }
  }

  render() {
    let { user } = this.props;
    return (
      <div className="top-bar animate-dropdown">
        <div className="container">
          <div className="header-top-inner">
            <div className="cnt-account">
              <ul className="list-unstyled">
                <li className="myaccount"><Link to=""><span>{this.showNameAcount(user)}</span></Link></li>
                <li className="wishlist"><Link to="/wishList"><span>Danh sách yêu thích</span></Link></li>
                <li className="header_cart hidden-xs"><Link to="/shopping-cart"><span>Giỏ hàng</span></Link></li>
                <li className="check"><Link to="/orders"><span>Kiểm tra đơn hàng</span></Link></li>
                <li className="login" ><Link to="/login/"><span>{this.log(user)}</span></Link></li>
              </ul>
            </div>
            {/* /.cnt-account */}
            <div className="cnt-block">
              <ul className="list-unstyled list-inline">
                <li className="dropdown dropdown-small">
                  <Link to="" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                    <span className="value">Hỗ trợ khách hàng</span>
                    <b className="caret" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="">Hotline: 19001001</Link></li>
                    <li><Link to="">Email: mobilethebest@gmail.com</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, null)(TopMenu);