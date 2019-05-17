import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Products from './Product/Products';
import Users from './User/Users';
import ListProducts from './Product/ListProducts';

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/admin/" exact component={Products} />
        <Route path="/admin/add-products" exact component={Products} />
        <Route path="/admin/list-products" exact component={ListProducts} />
        <Route path="/admin/users" exact component={Users} />
      </Switch>
    );
  }
}
