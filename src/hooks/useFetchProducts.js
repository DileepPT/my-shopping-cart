import { useContext } from "react"
import ProductsContext from "../contexts/ProductsContext";

const useFetchProduct = ()=>{
    return useContext(ProductsContext)
}
export default useFetchProduct;