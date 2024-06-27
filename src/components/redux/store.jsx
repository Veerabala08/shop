import { combineReducers, configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

const reducer = combineReducers({
    productsState : productsReducer,
    productState : productReducer,
    cart: cartReducer,
})

const store = configureStore({
    reducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
})
})

export default store;

