import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { productDetailReducer, productListReducer } from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";
import { parse } from "json5";

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []


const initioalState = {
    cart: {cartItems: cartItemsFromLocalStorage}
}


const middleware = [thunk]

const store = createStore(reducer,initioalState, applyMiddleware(...middleware))

export default store