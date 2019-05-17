import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Products from "./Product/Products";
import Users from './User/Users';

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/admin/" exact component={Products} />
        <Route path="/admin/products" exact component={Products} />
        <Route path="/admin/users" exact component={Users} />
      </Switch>
    );
  }
}
