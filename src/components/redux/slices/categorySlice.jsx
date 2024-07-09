/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name : 'category',
    initialState:{
        category:[],
        loading:false,
        error:null,
    },
    reducers:{
        categoryRequest(state, action){
            return{
                loading:true
            }
        },
        categorySuccess(state,action){
            return{
                loading:false,
                category:action.payload.data,
            }
        },
        categoryFail(state,action){
            return{
                loading:false,
                category:action.payload
            }
        }
    }
})

export const{categoryRequest,categorySuccess,categoryFail} = categorySlice.actions;
export default categorySlice.reducer