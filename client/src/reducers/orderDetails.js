import * as Types from '../contants/ActionTypes';

let initialState = {};

const orderDetails = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_ORDER_DETAILS:
      state = action.orderDetails;
      return state;

    default:
      return state;
  }
}

export default orderDetails;