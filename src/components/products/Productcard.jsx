import { useEffect } from "react";
import { getProducts } from "../redux/actions/productsAction"
import { useDispatch, useSelector } from "react-redux";

 function Productcard() {

    const dispatch = useDispatch();
    const {products , loading} = useSelector((state)=>state.productsState)
    useEffect(()=>{
        dispatch(getProducts)
    }, [])

    return ( 
        <>
        {products && products.map(product=> (
        <div className="card">
            <img>
            </img>
            <p className="title">{product.title}</p>
            <p className="price">{product.price}</p>
        </div>
        ))}
        </>
     );
 }
 
 export default Productcard;