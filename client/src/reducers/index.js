import { combineReducers } from 'redux';

import products from './products';
import productDetail from './productDetail';
import cart from './cart';
import wishlist from './wishlist';
import keySearch from './keySearch';
import orders from './orders';
import user from "./user";
const appReducers = combineReducers({
  products,
  productDetail,
  cart,
  wishlist,
  keySearch,
  orders,
  user
});

export default appReducers;
