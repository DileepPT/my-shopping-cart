import axios from "axios";
import { DUMMY_BASE_URL } from "../constants/constants";

const ProductService = axios.create({
    baseURL : DUMMY_BASE_URL,
    headers:{},
    params:{}
});

export default ProductService;