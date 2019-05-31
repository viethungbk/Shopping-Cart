import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Auth/PrivateRoute';
import AuthButton from './Auth/AuthButton';
import AddProduct from './Product/AddProduct';
import Users from './User/Users';
import ListProducts from './Product/ListProducts';
import EditProduct from './Product/EditProduct';
import Login from './Login';
import ListOrders from './Order/ListOrders';
import OrderDetails from './Order/OrderDetails';

export default class Content extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin/" exact component={Login} />
          <Route path="/admin/login" exact component={Login} />
          <PrivateRoute path="/admin/add-product" exact component={AddProduct} />
          <PrivateRoute path="/admin/list-products" exact component={ListProducts} />
          <PrivateRoute path="/admin/edit-product/:id" component={EditProduct} />
          <PrivateRoute path="/admin/users" exact component={Users} />
          <PrivateRoute path="/admin/orders" exact component={ListOrders} />
          <PrivateRoute path="/admin/order-details/:id" exact component={OrderDetails} />
        </Switch>
      </div>
    );
  }
}
