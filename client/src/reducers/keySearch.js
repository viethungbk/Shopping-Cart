// import axios from 'axios';
import * as Types from "../constants/ActionTypes";
// import { log } from 'util';

let initialState = "";

const keySearch = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_KEY_SEARCH:
            state = action.keySearch;
            return state;
        default:
            return state;
    }
}

export default keySearch;