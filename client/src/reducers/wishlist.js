import * as Types from '../contants/ActionTypes';

let initialState = [];

const wishList = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case Types.REMOVE_USER:
      state = [];
      return [...state];

    case Types.FETCH_USER_DATA:
      state = action.user.wishList;
      return [...state];

    case Types.ADD_TO_WISH_LIST:
      index = state.findIndex(item => item.id === action.product.id);
      if (index === -1) {
        state.push(action.product);
      }
      return [...state];

    case Types.DELETE_WISH_ITEM:
      index = state.findIndex(item => item.id === action.product.id);
      state.splice(index, 1);
      return [...state];

    default:
      return [...state];
  }
};

export default wishList;
