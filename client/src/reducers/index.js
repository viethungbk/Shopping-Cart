import { combineReducers } from 'redux'
import products from "./products";
import cart from "./cart";

const appReducers = combineReducers({
    products : products,
    cart : cart
});

export default appReducers;