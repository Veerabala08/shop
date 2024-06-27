/* eslint-disable no-case-declarations */
// actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";


// action creators
export const addtocart = (product,count) => ({
    type: ADD_TO_CART,
    payload: {product,count}
});

export const removecart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const increasecount = (productId) => ({
    type: INCREASE_COUNT,
    payload : productId,
})

export const decreasecount = (productId) => ({
    type: DECREASE_COUNT,
    payload: productId,
})

// initial state
const initialState = {
    cart: [],  // Initialize as an array
};

// reducer
const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const {product, count} = action.payload;
            const existingItem = state.cart.findIndex(item => item.data.id === product.data.id)
            let updatedCart;

            if (existingItem >= 0) {
                // If the item already exists in the cart, update its count
                updatedCart = state.cart.map((item, index) => 
                    index === existingItem ? { ...item, count: item.count + count } : item
                );
            } else {
                // If the item does not exist in the cart, add it with the count
                updatedCart = [...state.cart, { ...product, count }];
            }
            return {
                ...state,
                cart:updatedCart,
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.data.id !== action.payload),
            };

        case INCREASE_COUNT:
            return {
                ...state,
                cart:state.cart.map(item=>
                    item.data.id === action.payload ? {...item,count:item.count+1} : item
                ),
            };
        
        case DECREASE_COUNT:
            return{
                ...state,
                cart:state.cart.map(item =>
                    item.data.id === action.payload ? {...item, count: item.count - 1} : item
                )
            }
        default:
            return state;
    }
};


export default cartReducer;
