import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../reducers/cartReducer";

const CartStore = configureStore({
    reducer: CartReducer
})
export default CartStore;