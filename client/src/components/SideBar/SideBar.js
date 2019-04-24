import React, { Component } from 'react';
import TopNav from './TopNav';

export default class SideBar extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
        <TopNav></TopNav>
      </div>
    );
  }
}
