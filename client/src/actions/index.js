import * as Types from './../constants/ActionTypes';
import callApi from "./../utils/apiCaller";
// import axios from 'axios';


const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}

export function actDeleteCartItem(item) {
    return {
        type: Types.DELETE_CART_ITEM,
        item: item
    }
}

export function actUpdateCartItemQuantity(item, quantity) {
    return {
        type: Types.UPDATE_CART_ITEM_QUANTITY,
        item,
        quantity
    }
}

export function actAddToWishList(product) {
    return {
        type: Types.ADD_TO_WISH_LIST,
        product: product
    }
}

export function actDeleteWishItem(product) {
    return {
        type: Types.DELETE_WISH_ITEM,
        product: product
    }
}


// Redux thunk
// Lấy dữ liệu products từ server sử dụng Redux Thunk
export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('api/products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
// Redux thunk

// Get data Cart items
export const actFetchCartItemsRequest = () => {
    return dispatch => {
        return callApi('api/cart', 'GET', null).then(res => {
            console.log(res.data);
            dispatch(actFetchProducts(res.data));
        });
        // return axios.get('http://localhost:5000/api/cart')
        //     .then(res => {
        //         console.log(res.data);
        //         dispatch(actFetchCartItems(res.data));
        //     });
    };
}
// ông tự viết cái hàm callApi cũng được , nó lấy dữ liệu trên server xong cái dispatch kìa mới đc thực hiện 
export const actFetchCartItems = (cart) => {
    return {
        type: Types.FETCH_CART_ITEMS,
        cart
    }
}

// Get data Wish list
export const actFetchWishListRequest = () => {
    return dispatch => {
        return callApi('/api/wishList', 'GET', null).then(res => {
            dispatch(actFetchWishList(res.data));
        });
    };
}

export const actFetchWishList = (wishList) => {
    return {
        type: Types.FETCH_WISH_LIST,
        wishList
    }
}

export default actAddToCart;