import * as Types from './../constants/ActionTypes';
import callApi from "./../utils/apiCaller";
// import axios from 'axios';

export const actFetchUserData = (user) => {
    return {
        type: Types.FETCH_USER_DATA,
        user
    }
}
export const actRemoveUser = () => {
    return {
        type: Types.REMOVE_USER,
    }
}

const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
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

export function actFetchKeySearch(keySearch) {
    return {
        type: Types.FETCH_KEY_SEARCH,
        keySearch: keySearch
    }
}

export function actFetchProductDetail(productDetail) {
    return {
        type: Types.FETCH_PRODUCT_DETAIL,
        productDetail: productDetail
    }
}

export function actAddToOrders(cart, info, status) {
    return {
        type: Types.ADD_TO_ORDERS,
        cart,
        info,
        status
    }
}

export function actDeleteOrder(index){
    return{
        type: Types.DELETE_ORDER,
        index
    }
}
// Redux thunk
// Lấy dữ liệu products từ server sử dụng Redux Thunk
export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('/products', 'GET', null).then(res => {
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

export default actAddToCart;