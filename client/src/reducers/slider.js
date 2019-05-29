import * as Types from '../contants/ActionTypes';

let initialState = [];

const sliders = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_sLIDER:
      state = action.sliders;
      return [...state];

    case Types.ADD_TO_SLIDER:
      state.push(action.slider);
      return [...state];

    case Types.DELETE_SLIDER:
      state.splice(action.index, 1);
      return [...state];

    default:
      return [...state];
  }
};
export default sliders;
