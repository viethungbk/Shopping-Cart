// import axios from 'axios';
import * as Types from "./../constants/ActionTypes";
// import { log } from 'util';

let inittialState = [
    {
        id: 1,
        brand: "Huawei",
        name: "Huawei P30 Pro",
        img: "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 200,
        price_before_discount: 3000000,
        iventory: 20,
        rating: 2
    },
    {
        id: 2,
        brand: "Huawei",
        name: "Huawei P30 Pro",
        img: "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 200,
        price_before_discount: 300,
        iventory: 20,
        rating: 3
    },
    {
        id: 3,
        brand: "Huawei",
        name: "Huawei P30 Pro",
        img: "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 250,
        price_before_discount: 330,
        iventory: 20,
        rating: 4
    },
    {
        id: 4,
        brand: "Huawei",
        name: "Huawei P30 Pro",
        img: "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 120,
        price_before_discount: 3000,
        iventory: 20,
        rating: 5
    }
];

const products = (state = inittialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = inittialState;
            return [...state];
        default:
            return [...state];
    }
}

export default products;