import * as Types from '../contants/ActionTypes';

let initialState = {};

const productDetail = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_DETAIL:
      console.log(action);
      state = action.productDetail;
      return state;
    default:
      return state;
  }
}

export default productDetail;