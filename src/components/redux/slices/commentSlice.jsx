import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      "name": "John Doe",
      "rating": 5,
      "comments": "Great product! Highly recommend it.",
      "postedDate": "2024-06-25"
    },
    {
      "name": "Jane Smith",
      "rating": 4,
      "comments": "Good quality, but the delivery was late.",
      "postedDate": "2024-06-20"
    },
    {
      "name": "Emily Johnson",
      "rating": 3,
      "comments": "It's okay, but I've seen better.",
      "postedDate": "2024-06-15"
    },
    {
      "name": "Michael Brown",
      "rating": 5,
      "comments": "Excellent! Will buy again.",
      "postedDate": "2024-06-10"
    },
    {
      "name": "Sarah Davis",
      "rating": 2,
      "comments": "Not what I expected. Poor quality.",
      "postedDate": "2024-06-05"
    }
  ]

const reviewSlice = createSlice( {
    name:'reviews',
    initialState,
      reducers:{
          setreviews(state,action){
              return action.payload
            }
        }
    }
  )
  
  export const {reviews} = reviewSlice.actions;
  export default reviewSlice.reducer;