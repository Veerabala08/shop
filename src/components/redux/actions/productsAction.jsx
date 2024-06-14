import axios from "axios"
import { productsFail, productsRequest, productsSuccess } from "../slices/productsSlice"

export const getProducts = async (dispatch)=>{
try{
    dispatch(productsRequest())
    const data = await axios.get('https://fakestoreapi.com/products')
    dispatch(productsSuccess(data))
    }
catch(error){
    console.log(error)
    dispatch(productsFail(error.response.data.message))
    }
}