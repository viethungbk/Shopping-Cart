// import * as Types from "./../constants/Message";
import axios from 'axios';


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
    }];

axios.get('/api/products/')
    .then(products => {
        inittialState = products.data;
        console.log(inittialState);
    })
    .catch(err => console.log(err.response));

const products = (state = inittialState, action) => {
    switch (action.type) {

        default: return [...state];
    }
}

export default products;