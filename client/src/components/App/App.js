import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import Register from '../Register/Register';
import ProductDetails from '../Products/ProductDetails/ProductDetails';
import MyWishList from '../WishList/MyWishList';
import NotFound from '../NotFound/NotFound';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Content from '../Content/Content';
import Orders from "./../Orders/Orders";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={Content} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" exact component={Register} />
                            <Route path="/contact" exact component={Contact} />
                            <Route path="/product-details" exact component={ProductDetails} />
                            <Route path="/wishList" exact component={MyWishList} />
                            <Route path="/not-found" exact component={NotFound} />
                            <Route path="/shopping-cart" exact component={ShoppingCart} />
                            <Route path="/orders" exact component={Orders} />
                        </Switch>
                    </Layout>
                </div>
            </HashRouter>
        );
    }
}

export default App;
