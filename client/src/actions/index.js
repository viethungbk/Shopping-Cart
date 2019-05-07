import * as Types from './../constants/ActionTypes';


const actAddToCart = (product, quantity)=>{
    return {
        type : Types.ADD_TO_CART,
        product : product,
        quantity : quantity
    }
}
export default actAddToCart;