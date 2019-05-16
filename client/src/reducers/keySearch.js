import * as  Types from '../contants/ActionType';

let initial = '';

const keySearch = (state = initial, action) => {
  switch (action.type) {
    case Types.FETCH_KEY_SEARCH:
      state = action.keySearch;
      return state;
    default:
      return state;
  }
}

export default keySearch;