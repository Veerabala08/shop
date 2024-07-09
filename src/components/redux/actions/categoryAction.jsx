import axios from 'axios';
import {categoryFail, categoryRequest, categorySuccess} from "../slices/categorySlice"

export const getCategory = (category) => async(dispatch) =>{
    try{
        console.log("get",category)
        dispatch(categoryRequest())
        const data = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        dispatch(categorySuccess(data))
    }catch(error){
        console.log(error);
        dispatch(categoryFail(error.response.data.message));
    }
}