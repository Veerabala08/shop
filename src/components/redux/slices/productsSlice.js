import { createSlice,  } from "@reduxjs/toolkit";

// creating a reducer
const productsSlice = createSlice({
    name:'products',
    initialState:{
        loading:false
    },
    reducers:{
        // eslint-disable-next-line no-unused-vars
        productsRequest(state, action){
            return {
                 loading: true
                }
        },
        productsSuccess(state, action){
            return {
                loading:false,
                products: action.payload.data
            }
        },
        productsFail(state, action){
            return {
                loading:false,
                error: action.payload
            }
        }
    }
})

const {actions, reducer } = productsSlice;
export  const { productsRequest, productsSuccess, productsFail} = actions;
export default reducer;