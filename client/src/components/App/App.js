import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ListProducts from '../Products/ListProducts/ListProducts';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import Register from '../Register/Register';
import ProductDetails from '../Products/ProductDetails/ProductDetails';
import MyWishList from '../WishList/MyWishList';
import NotFound from '../NotFound/NotFound';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/" exact component={ ListProducts } />
              <Route path="/login" exact component={ Login } />
              <Route path="/register" exact component={ Register } />
              <Route path="/contact" exact component={ Contact } />
              <Route path="/product-details" exact component={ ProductDetails } />
              <Route path="/wishlist" exact component={ MyWishList } />
              <Route path="/not-found" exact component={ NotFound } />
              <Route path="/shopping-cart" exact component={ ShoppingCart } />

            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
