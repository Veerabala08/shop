import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    searchQuery:'',
    filteredProducts:[]
};

const searchSlice = createSlice ({
    name: 'searchProd',
    initialState,
    reducers:{
        setProducts:(state, action) =>{
            state.products = action.payload;
            state.filteredProducts = action.payload;
        }, 
        setSearchQuery:(state, action) =>{
            state.searchQuery = action.payload;
            state.filteredProducts = state.products.filter(product =>
                product.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        }
    }
})

export const {setProducts, setSearchQuery} = searchSlice.actions;
export default setSearchQuery.reducers