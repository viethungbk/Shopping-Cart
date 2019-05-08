import * as Types from './../constants/ActionTypes';


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

export default actAddToCart;