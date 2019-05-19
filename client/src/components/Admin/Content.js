import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import AddProduct from './Product/AddProduct';
import Users from './User/Users';
import ListProducts from './Product/ListProducts';
import EditProduct from './Product/EditProduct';
import Login from './Login';

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path="/admin/" exact component={Login} />
        <Route path="/admin/add-product" exact component={AddProduct} />
        <Route path="/admin/list-products" exact component={ListProducts} />
        <Route path="/admin/edit-product/:id" component={EditProduct} />
        <Route path="/admin/users" exact component={Users} />
      </Switch>
    );
  }
}
