import { combineReducers } from 'redux';

import products from './products';
import productDetails from './productDetails';
import cart from './cart';
import wishlist from './wishlist';
import keySearch from './keySearch';
import orders from './orders';

const appReducers = combineReducers({
  products,
  productDetails,
  cart,
  wishlist,
  keySearch,
  orders
});

export default appReducers;
