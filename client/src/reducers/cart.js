
import * as Types from './../constants/ActionTypes';
import * as  MSG from "./../constants/Message.js";
//gọi lên server lấy dữ liệu
// var data = JSON.parse(localStorage.getItem('cart'));

var inittialState = [
    {
        product: {
            id: 1,
            brand: "Samsung",
            name: "Samsung Note 9",
            img: "assets/images/products/samsung-note-9.jpg",
            img_hover: "assets/images/products/samsung-note-9.2.jpg",
            price: 100,
            price_before_discount: 1500000,
            iventory: 50,
            rating: 5
        },
        quantity: 4
    },
    {
        product: {
            id: 2,
            brand: "Iphone",
            name: "Iphone XS max plus",
            img: "assets/images/products/iphone-xs-max.jpg",
            img_hover: "assets/images/products/iphone-xs-max-hover.jpg",
            price: 300,
            price_before_discount: 3500000,
            iventory: 30,
            rating: 2
        },
        quantity: 2
    },
    {
        product: {
            id: 3,
            brand: "Huawei",
            name: "Huawei P30 Pro",
            img: "assets/images/products/Huawei-P30-Pro.jpg",
            img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
            price: 200,
            price_before_discount: 3000000,
            iventory: 20,
            rating: 1
        },
        quantity: 3
    }
];

const cart = (state = inittialState, action) => {
    let { product, quantity } = action;
    switch (action.type) {
        case Types.ADD_TO_CART:
            let index = state.findIndex(item => item.product.id === action.product.id);
            if (index === -1) {
                state.push({
                    product,
                    quantity
                });
            } else {
                state[index].quantity += quantity;
            }
            return [...state];

        case Types.DELETE_CART_ITEM:

            let indexDelete = state.findIndex(item => item.product.id === action.item.product.id);

            if (indexDelete !== -1) {
                state.splice(indexDelete, 1);
            }
            return state.length === 0 ? MSG.MSG_CART_EMPTY : [...state];

        case Types.UPDATE_CART_ITEM_QUANTITY:
            let indexUpdate = state.findIndex(item => item.product.id === action.item.product.id);
            let q = state[indexUpdate].quantity;
            if (indexUpdate !== -1) {
                state[indexUpdate].quantity = (q + action.quantity) <= 1 ? 1 : q + action.quantity;
            }
            return [...state];

        default: return [...state];
    }
}

export default cart;