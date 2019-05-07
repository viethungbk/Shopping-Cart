import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Products from './Products';
import Users from './Users';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Users></Users>
      </div>
    );
  }
}
