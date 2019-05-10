import { combineReducers } from 'redux'
import products from "./products";
import cart from "./cart";
import wishList from "./wishList";

const appReducers = combineReducers({
    products: products,
    cart: cart,
    wishList: wishList
});

export default appReducers;