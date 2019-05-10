// import axios from 'axios';
import * as Types from "./../constants/ActionTypes";
// import { log } from 'util';

let inittialState = [];

const products = (state = inittialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            console.log(action.products);
            
            return [...state];
        default:
            return [...state];
    }
}

export default products;