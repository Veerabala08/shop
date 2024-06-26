import axios from "axios";
import { productFail, productRequest, productSuccess } from '../slices/productSlice';

export const getProduct = (id) => async (dispatch) => {
    try {
        console.log(id,"from action");
        dispatch(productRequest());
        const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch(productSuccess(data));
    } catch (error) {
        console.log(error);
        dispatch(productFail(error.response.data.message));
    }
}