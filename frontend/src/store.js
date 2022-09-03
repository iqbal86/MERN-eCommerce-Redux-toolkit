import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './features/productList/productListSlice'
import productDetailsReducer from './features/productDetails/productDetailsSlice'
import cartReducer from './features/cart/cartSlice'
import authReducer from './features/auth/authSlice'

// store.subscribe(() => {
//   localStorage.setItem('cart', JSON.stringify(store.getState()))
// })

// const persistedState = localStorage.getItem('cart')
//   ? JSON.parse(localStorage.getItem('cart'))
//   : {}

// export const store = configureStore({
//   reducer: {
//     productList: productListReducer,
//     productDetails: productDetailsReducer,
//     cart: cartReducer,
//   },
//   persistedState,
// })

export const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
})
/////////////
////////////

// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import productListReducer from './features/productList/productListSlice'

// const rootReducer = combineReducers({
//   productList: productListReducer,
// })

// export const store = configureStore({
//   reducer: rootReducer,
// })
