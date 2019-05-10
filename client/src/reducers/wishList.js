import * as Types from "./../constants/ActionTypes";
// import axios from 'axios';


let inittialState = [
    {
        id: 3,
        brand: "Huawei",
        name: "Huawei P30 Pro",
        img: "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 2000000,
        price_before_discount: 3000000,
        iventory: 20,
        rating: 1
    },
    {
        id: 5,
        brand: "Huawei",
        name: "Huawei P30 Pro",
        img: "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 2000000,
        price_before_discount: 3000000,
        iventory: 20,
        rating: 1
    },
    {
        id: 4,
        brand: "Huawei",
        name: "Huawei P30 Pro",
        img: "assets/images/products/Huawei-P30-Pro.jpg",
        img_hover: "assets/images/products/Huawei-P30-Pro-hover.jpg",
        price: 2000000,
        price_before_discount: 3000000,
        iventory: 20,
        rating: 1
    }
];

// axios.get('/api/wishList/')
//     .then(wishList => {
//         inittialState = products.data;
//         // console.log(inittialState);
//     })
//     .catch(err => console.log(err.response));


const wishList = (state = inittialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_WISH_LIST:
            if (typeof state !== 'string') {
                state.push(action.product);
            }
            return [action.product];

        case Types.DELETE_WISH_ITEM:
            let indexDelete = state.findIndex(item => item.id === action.product.id );
            state.splice(indexDelete,1);
            return [...state];


        default: return [...state];
    }
}

export default wishList;