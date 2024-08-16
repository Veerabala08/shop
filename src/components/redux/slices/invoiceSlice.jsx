import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
    name:'invoice',
    initialState: [],
    reducers: {
        makeinvoice(state, action) {
          state.push(action.payload);
        }
      } 
})
const {actions, reducer} = invoiceSlice;
export const {makeinvoice} = actions;
export default reducer