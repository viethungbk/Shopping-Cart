
import * as Types from '../contants/ActionTypes';

let initialState = [];

const cart = (state = initialState, action) => {
  let index = -1;

  switch (action.type) {
    case Types.REMOVE_USER_DATA:
      return [];

    case Types.FETCH_CART:
      state = action.cart;
      return [...state];

    case Types.FETCH_CART_ITEMS:
      state = action.cart;
      return [...state];

    case Types.ADD_TO_CART:
      index = state.findIndex(item => item.product._id === action.product._id);

      if (index !== -1) {
        state[index].quantity += action.quantity;
      } else {
        state.push({ product: action.product, quantity: action.quantity });
      }
      return [...state];

    case Types.DELETE_CART_ITEM:
      index = state.findIndex(item => item.product._id === action.item.product._id);

      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];

    case Types.UPDATE_CART_ITEM_QUANTITY:
      index = state.findIndex(item => item.product._id === action.item.product._id);

      let q = state[index].quantity + action.quantity;

      if (index !== -1) {
        // state[index].quantity = q <= 1 ? 1 : q >= action.item.iventory ? action.item.iventory : q;
        const iventory = action.item.product.iventory;
        state[index].quantity = q <= 1 ? 1 : q >= iventory ? iventory : q;
      }
      return [...state];

    default: return [...state];
  }
}

export default cart;