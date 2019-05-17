
import * as Types from './../constants/ActionTypes';
// import * as  MSG from "./../constants/Message.js";
// import callApi from "./../utils/apiCaller";
// import { log } from 'util';
//gọi lên server lấy dữ liệu
// var data = JSON.parse(localStorage.getItem('cart'));

let inittialState = [];



const cart = (state = inittialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.REMOVE_USER:
            state = [];
            return [...state];
        case Types.FETCH_USER_DATA:
            state = action.user.cart;
            return [...state];
        case Types.FETCH_CART_ITEMS:
            state = action.cart;
            return [...state];
        case Types.ADD_TO_CART:
            index = state.findIndex(item => item.product.id === action.product.id);
            if (index !== -1) {
                state[index].quantity += action.quantity;
            } else {
                state.push({ product: action.product, quantity: action.quantity });
            }
            return [...state];
        case Types.DELETE_CART_ITEM:
            index = state.findIndex(item => item.product.id === action.item.product.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];

        case Types.UPDATE_CART_ITEM_QUANTITY:
            index = state.findIndex(item => item.product.id === action.item.product.id);
            let q = state[index].quantity + action.quantity;
            if (index !== -1) {
                state[index].quantity = q <= 1 ? 1 : q;
            }
            return [...state];

        default: return [...state];
    }
}

export default cart;