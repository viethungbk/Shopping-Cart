import * as Types from "../constants/ActionTypes";
// import { log } from 'util';

let inittialState = {};

const productDetail = (state = inittialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT_DETAIL:
        console.log(action + " action");
        
            state = action.productDetail;
            return state;
        default:
            return state;
    }
}

export default productDetail;