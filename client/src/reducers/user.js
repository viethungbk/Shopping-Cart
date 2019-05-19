import * as Types from '../contants/ActionTypes';

var initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_USER_DATA:
      state = action.user;
      return state;

    case Types.REMOVE_USER_DATA:
      state = {};
      return state;

    default: return state;
  }
}

export default user;