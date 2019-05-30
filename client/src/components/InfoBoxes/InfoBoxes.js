import React, { Component } from 'react';

export default class InfoBoxes extends Component {
  render() {
    return (
      <div className="row our-features-box">
        <div className="container">
          <ul>
            <li>
              <div className="feature-box">
                <div className="icon-truck" />
                <div className="content-blocks">Giao hàng nhanh chóng</div>
              </div>
            </li>
            <li>
              <div className="feature-box">
                <div className="icon-support" />
                <div className="content-blocks">
                  +1 800 789 0000</div>
              </div>
            </li>
            <li>
              <div className="feature-box">
                <div className="icon-money" />
                <div className="content-blocks">Giá cả hợp lý</div>
              </div>
            </li>
            <li>
              <div className="feature-box">
                <div className="icon-return" />
                <div className="content">Bảo hàng 3 năm</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
