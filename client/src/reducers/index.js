import { combineReducers } from 'redux';
import products from "./products";
import cart from "./cart";
import wishList from "./wishList";
import user from "./user";
import productDetail from "./productDetail";
import keySearch from "./keySearch";
import orders from "./orders";

const appReducers = combineReducers({
    products,
    cart,
    wishList,
    user,
    keySearch,
    productDetail,
    orders
});

export default appReducers;