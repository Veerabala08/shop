import { combineReducers, configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import productsReducer from "./slices/productsSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import reviewReducer from "./slices/commentSlice";
import categoryReducer from "./slices/categorySlice";

const reducer = combineReducers({
    productsState : productsReducer,
    productState : productReducer,
    cart: cartReducer,
    reviews:reviewReducer,
    category:categoryReducer,
})

const store = configureStore({
    reducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
})
})

export default store;

