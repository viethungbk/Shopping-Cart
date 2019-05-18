import * as Types from '../constants/ActionTypes';

let initialState = [];

const orders = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_ORDERS:
      state.push({
        cart: action.cart,
        info: action.info,
        status: action.status
      });
      return [...state];
    case Types.DELETE_ORDER:
      state.splice(action.index, 1);
      return [...state];
    default:
      return [...state];
  }
};
export default orders;
