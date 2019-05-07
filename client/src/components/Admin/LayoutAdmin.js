import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import HeaderAdmin from './HeaderAdmin';
import SideBar from './SideBar';
import Content from './Content';

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderAdmin></HeaderAdmin>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <SideBar></SideBar>
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <Content></Content>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
