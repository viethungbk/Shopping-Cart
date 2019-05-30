import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Dịch vụ khách hàng</h4>
          </div>
          {/* /.module-heading */}
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><Link to="/account" title="Quản lý tài khoản">Tài Khoản</Link></li>
              <li><Link to="/orders" title="Tất cả đơn hàng của bạn">Đơn hàng</Link></li>
              <li><Link to="" title="Câu hỏi thường gặp">FAQ</Link></li>
              <li><Link to="" title="Kết nối với mạng xã hội">Xã hội</Link></li>
              <li className="last"><Link to="" title="Trung tâm trợ giúp">Trợ giúp</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Hợp tác</h4>
          </div>
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><Link title="Thông tin về cửa hàng" to="/contact">Thông tin</Link></li>
              <li><Link title="Dịch vụ chăm sóc khách hàng" to="">Chăm sóc khách hàng</Link></li>
              <li><Link title="Chính sách" to="">Chính sách</Link></li>
              <li><Link title="Hợp tác" to="">Hợp tác</Link></li>
              <li className="last"><Link title="Chính sách phát triển" to="">Phát triển</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3">
          <div className="module-heading">
            <h4 className="module-title">Thông tin thêm</h4>
          </div>
          <div className="module-body">
            <ul className="list-unstyled">
              <li className="first"><Link to="" title="Hướng dẫn mua hàng">Hướng dẫn mua hàng</Link></li>
              <li><Link to="/blogs" title="Blog">Bài viết</Link></li>
              <li><Link to="" title="Xã hội">Trang web</Link></li>
              <li><Link to="/contact" title="Liên lạc">Liên lạc</Link></li>
              <li className=" last"><Link to="/contact" title="Thông tin">Thông tin</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
