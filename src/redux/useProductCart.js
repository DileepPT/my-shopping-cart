import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeFromCart, emptyCart} from './actions/cartActions';


const useCart = () =>{
    
    const dispatch= useDispatch();
    const cartItems = useSelector((state)=>state.productCart);

    const addProductToCart = (product)=>{
        console.log("addProductToCart :::"+JSON.stringify(product))
        dispatch(addToCart(product));
    };

    const removeItemFromCart = (product)=>{
        dispatch(removeFromCart(product));
    }

    const emptyCartItems = ()=>{
        dispatch(emptyCart());
    }

    const totalCartItems = ()=>{
        return cartItems.length;
    }

    const getGroupedcartItems = ()=>{
        const clonedCart = [...cartItems];
        return clonedCart.reduce((accum, item)=>{
            if(!accum[item.title]){
                accum[item.title] = [];
            }
            accum[item.title].push(item);
            return accum;
        },{});
    }

    return {cartItems,addProductToCart,removeItemFromCart,emptyCartItems,totalCartItems,getGroupedcartItems};
}

export default useCart;