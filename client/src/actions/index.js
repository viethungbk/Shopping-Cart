import * as Types from './../constants/ActionTypes';
import callApi from "./../utils/apiCaller";


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
    return{
        type : Types.UPDATE_CART_ITEM_QUANTITY,
        item,
        quantity
    }
}

export function actAddToWishList(product) {
    return{
        type : Types.ADD_TO_WISH_LIST,
        product : product
    }
}

export function actDeleteWishItem(product){
    return {
        type: Types.DELETE_WISH_ITEM,
        product : product
    }
}


// Redux thunk
export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('/api/products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}
export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}
// Redux thunk

export default actAddToCart;