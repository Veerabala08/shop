import { combineReducers, configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line no-unused-vars
import { thunk } from "redux-thunk";
import productsReducer from "./slices/productsSlice";

const reducer = combineReducers({
    productsState : productsReducer
})

const store = configureStore({
    reducer,
    // middleware : [thunk]
})

export default store;