// import * as Types from "./../constants/Message";

import * as types from './../constants/ActionTypes';
//gọi lên server lấy dữ liệu
var data = JSON.parse(localStorage.getItem('cart'));
var inittialState = [
    {
        key : 1,
        product: {
            id: 1,
            brand: "Samsung",
            name: "Samsung Note 9",
            img: "assets/images/products/samsung-note-9.jpg",
            img_hover: "assets/images/products/samsung-note-9.2.jpg",
            price: 1000000,
            price_before_discount: 1500000,
            iventory: 50,
            rating: 5
        },
        quantity: 5
    }
];

const cart = (state = inittialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
        default: return [...state];
    }
}

export default cart;