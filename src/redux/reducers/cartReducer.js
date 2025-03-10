const initialState  ={
    productCart : [],
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                productCart : [...state.productCart, action.payload]
            };
        case 'REMOVE':
            return {
                ...state,
                productCart : state.productCart.filter((cartItem)=>{
                    return cartItem.id !== action.payload.id
                })
            }
            
        case 'EMPTY':
           return {
            ...state,
            productCart : []
           }
        default:
            return state;
    }
}

export default CartReducer;