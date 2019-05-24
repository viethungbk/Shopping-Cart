import * as Types from '../contants/ActionTypes';

let initialState = [];

const orders = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_ORDERS:
      state = action.orders;
      return [...state];

    case Types.ADD_TO_ORDERS:
      state.push({
        cart: action.cart,
        address: action.address
      });
      return [...state];

    case Types.DELETE_ORDER:
      state.splice(action.index, 1);
      return [...state];

    case Types.REMOVE_USER_DATA:
      return [];

    default:
      return [...state];
  }
};
export default orders;
