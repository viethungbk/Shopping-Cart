import React, { Component } from 'react';

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-sidebar">
          <li className="active"><a href="#">Overview</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Export</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href>Nav item</a></li>
          <li><a href>Nav item again</a></li>
          <li><a href>One more nav</a></li>
          <li><a href>Another nav item</a></li>
          <li><a href>More navigation</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href>Nav item again</a></li>
          <li><a href>One more nav</a></li>
          <li><a href>Another nav item</a></li>
        </ul>
      </div>
    );
  }
}
