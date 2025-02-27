import { useState,createContext } from "react"
import { START_INDEX, MAX_COUNT} from "../constants/constants";
import ProductService from "../services/productService";
import ExceptionLogger from "../utils/exceptionLogger";

const ProductsContext = createContext();

export const ProductProvider = ({children})=>{

    const [ products, setProducts] = useState([]);
    const [ hasMoreContent, setNextContentAvailability] = useState(true);
    const [ skipLimit, setSkipLimit] = useState(START_INDEX);

    const {logError,logEvent} = ExceptionLogger();

    const getProductList = async()=>{
        try {
            //https://dummyjson.com/products?limit=10&skip=0&select=id,title,description,price,thumbnail
            const result = await ProductService.get(`/products?limit=${MAX_COUNT}&skip=${skipLimit}&select=id,title,description,price,thumbnail`);
            if(result && result.data){
                const updatedProdctList = [...products,...result.data.products];
                setProducts(updatedProdctList);
                setNextContentAvailability(result.data.limit === MAX_COUNT);
                setSkipLimit(skipLimit+result.data.limit);
            }else{
                logEvent('Products data not available.');
            }
        } catch (error) {
            logError(error);
        }
    };

    const loadMoreProducts = ()=>{
        if(hasMoreContent){
            getProductList();
        }
    };

    return (<ProductsContext.Provider value={{products, hasMoreContent, loadMoreProducts, getProductList}}>
        {children}
    </ProductsContext.Provider>)
}

export default ProductsContext;
