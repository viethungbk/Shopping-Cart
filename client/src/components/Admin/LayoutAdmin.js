import React, { Component } from 'react';
import HeaderAdmin from './HeaderAdmin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div>
              <HeaderAdmin></HeaderAdmin>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
