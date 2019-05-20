import * as Types from '../contants/ActionTypes';
import callApi from '../apiCaller';

export const actFetchUserData = (user) => {
  return {
    type: Types.FETCH_USER_DATA,
    user
  }
}

export const actRemoveUserData = () => {
  return {
    type: Types.REMOVE_USER_DATA,
  }
}

const actAddToCart = (product, quantity) => {
  console.log(product)
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

export function actDeleteOrder(index) {
  return {
    type: Types.DELETE_ORDER,
    index
  }
}

// =====================

export const actFetchCartRequest = () => {
  console.log('cart')
  const headers = {
    'Authorization': localStorage.getItem('token')
  }

  return dispatch => {
    return callApi('api/cart/', 'GET', null, headers).then(res => {
      console.log(res.data);
      dispatch(actFetchCart(res.data));
    })
  }
}

export const actFetchCart = (cart) => {
  return {
    type: Types.FETCH_CART,
    cart
  }
}


// ========================================

export const actFetchWishListRequest = () => {
  console.log('wishlist')
  const headers = {
    'Authorization': localStorage.getItem('token')
  }

  return dispatch => {
    return callApi('api/wishlist/', 'GET', null, headers).then(res => {
      console.log(res.data);
      dispatch(actFetchWishList(res.data));
    })
  }
}

export const actFetchWishList = (wishList) => {
  return {
    type: Types.FETCH_WISHLIST,
    wishList
  }
}

// ==========================================

// export const onFetchOrdersRequest = () => {
//   console.log('orders')
//   const headers = {
//     'Authorization': localStorage.getItem('token')
//   }

//   return dispatch => {
//     return callApi('api/orders/', 'GET', null, headers).then(res => {
//       console.log(res.data);
//       dispatch(actFetchWishList(res.data));
//     })
//   }
// }

// export const actFetchWishList = (wishList) => {
//   return {
//     type: Types.FETCH_WISHLIST,
//     wishList
//   }
// }

// ==========================================

// Redux thunk
// Lấy dữ liệu products từ server sử dụng Redux Thunk
export const actFetchProductsRequest = () => {
  return dispatch => {
    return callApi('api/products/', 'GET', null, null).then(res => {
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

export default actAddToCart;