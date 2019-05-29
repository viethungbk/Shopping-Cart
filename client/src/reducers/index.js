import { combineReducers } from 'redux';

import products from './products';
import productDetail from './productDetail';
import cart from './cart';
import wishList from './wishList';
import keySearch from './keySearch';
import orders from './orders';
import user from './user';
import orderDetails from './orderDetails';
import sliders from './slider';

const appReducers = combineReducers({
  products,
  productDetail,
  cart,
  wishList,
  keySearch,
  orders,
  user,
  orderDetails,
  sliders
});

export default appReducers;
