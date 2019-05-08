// import * as Types from "./../constants/Message";
import axios from 'axios';


let inittialState = [];

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