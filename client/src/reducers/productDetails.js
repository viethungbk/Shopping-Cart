import * as Types from '../constants/ActionTypes';

let initialState = {};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_DETAIL:
      console.log(action + ' action');

      state = action.productDetails;
      return state;
    default:
      return state;
  }
}

export default productDetails;