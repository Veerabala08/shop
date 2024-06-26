// actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const RESET_CHECK = "RESET_CHECK";

// action creators
export const addtocart = (product,check) => ({
    type: ADD_TO_CART,
    payload: product,check
});

export const removecart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});

export const resetcheck = () => ({
    type: RESET_CHECK,  // New action creator
});

// initial state
const initialState = {
    cart: [],
    check: 0
};

// reducer
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_CHECK:
            return {
                ...state,
                check: false,
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
                check: true,
                
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload),
                // check: updatedCart.length > 0,
            };
        default:
            return state;
    }
};

export default cartReducer;
