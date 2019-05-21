import { combineReducers } from 'redux';

import products from './products';
import productDetail from './productDetail';
import cart from './cart';
import wishList from './wishList';
import keySearch from './keySearch';
import orders from './orders';
import user from "./user";
const appReducers = combineReducers({
  products,
  productDetail,
  cart,
  wishList,
  keySearch,
  orders,
  user
});

export default appReducers;
