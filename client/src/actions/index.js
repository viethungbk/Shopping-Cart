import * as Types from '../contants/ActionTypes';
import callApi from '../apiCaller';

// ========================================== PRODUCT ==========================================

// ===================== Fetch Products =====================
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

export function actFetchProductDetail(productDetail) {
  return {
    type: Types.FETCH_PRODUCT_DETAIL,
    productDetail: productDetail
  }
}


// ========================================== USER ==========================================
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


// ========================================== CART ==========================================

// ===================== Fetch Cart =====================

export const actFetchCartRequest = products => {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }

  return dispatch => {
    return callApi('api/cart/', 'GET', null, headers).then(res => {
      let newCart = [];

      res.data.forEach(item => {
        let index = products.findIndex(product => {
          return product._id === item.product;
        })
        if (index !== -1) {
          newCart.push({
            product: products[index],
            quantity: item.quantity
          })
        }
      });

      dispatch(actFetchCart(newCart));
    })
  }
}

export const actFetchCart = (cart) => {
  return {
    type: Types.FETCH_CART,
    cart
  }
}

const actAddToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity
  }
}
export default actAddToCart;

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

export const actRemoveAllCartItemRequest = (cart) => {
  return dispatch => {
    const headers = {
      'Authorization': localStorage.getItem('token')
    };

    return callApi(`api/cart/delete`, 'delete', null, headers).then(result => {
      dispatch(actRemoveAllCartItem());
    })

  }
}

export const actRemoveAllCartItem = () => {
  return {
    type: Types.REMOVE_ALL_CART_ITEM
  }
}


// ========================================== WISHLIST ==========================================

// ===================== Fetch Cart =====================

export const actFetchWishListRequest = (products) => {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }

  return dispatch => {
    return callApi('api/wishlist/', 'GET', null, headers).then(res => {
      let newWishList = [];

      res.data.forEach(productId => {
        let index = products.findIndex(product => {
          return product._id === productId
        })
        if (index !== -1) {
          newWishList.push(products[index]);
        }
      });

      dispatch(actFetchWishList(newWishList));
    })
  }
}

export const actFetchWishList = (wishList) => {
  return {
    type: Types.FETCH_WISHLIST,
    wishList
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


// ========================================== ORDERS ==========================================

// ===================== Fetch Orders =====================

export const actFetchOrdersRequest = () => {
  const headers = {
    'Authorization': localStorage.getItem('token')
  }

  return dispatch => {
    return callApi('api/orders/user', 'GET', null, headers).then(res => {
      const orders = res.data;

      dispatch(actFetchOrder(orders));
    })
  }
}

export const actFetchOrder = (orders) => {
  return {
    type: Types.FETCH_ORDERS,
    orders
  }
}

export function actFetchOrderDetails(orderDetails) {
  return {
    type: Types.FETCH_ORDER_DETAILS,
    orderDetails: orderDetails
  }
}

export const actAddToOrdersRequest = (data) => {
  const headers = {
    'Authorization': localStorage.getItem('token')
  };

  return dispatch => {
    callApi('api/orders/create', 'post', data, headers)
    .then(result => {
      console.log(result);
      window.alert(result.data.message);
      const order = result.data.order

      dispatch(actAddToOrders(order))
    })
    .catch(error => {
      console.log(error);
      window.alert(error.message);
    });

  }
}

export const actAddToOrders = (order) => {
  return {
    type: Types.ADD_TO_ORDERS,
    order
  }
}

export function actDeleteOrder(index) {
  return {
    type: Types.DELETE_ORDER,
    index
  }
}


// ========================================== SEARCH ==========================================
export function actFetchKeySearch(keySearch) {
  return {
    type: Types.FETCH_KEY_SEARCH,
    keySearch: keySearch
  }
}