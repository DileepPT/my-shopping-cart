export const addToCart = (product)=>({
    type : "ADD",
    payload : product
});

export const removeFromCart = (product)=>({
    type : "REMOVE",
    payload : product
});

export const emptyCart = ()=>({
    type : "EMPTY"
});
