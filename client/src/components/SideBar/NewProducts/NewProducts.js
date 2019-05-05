import React, { Component } from 'react';
import NewItem from './NewItem';

export default class NewProduct extends Component {
  render() {
    return (
      <div className="sidebar-widget outer-bottom-small">
        <h3 className="section-title">New Products</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
            <NewItem></NewItem>
            <NewItem></NewItem>
            <NewItem></NewItem>
          </div>
        </div>
        {/* /.sidebar-widget-body */}
      </div>

    );
  }
}
