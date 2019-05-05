import React, { Component } from 'react';
import HotItem from './HotItem';

export default class HotDeals extends Component {
  render() {
    return (
      <div className="sidebar-widget hot-deals outer-bottom-xs">
        <h3 className="section-title">Hot deals</h3>
        <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
          <HotItem></HotItem>
          <HotItem></HotItem>
          <HotItem></HotItem>
        </div>
        {/* /.sidebar-widget */}
      </div>
    );
  }
}
