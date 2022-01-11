const initialState = {
    cartItemsList: [],
}

export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case 'CART_ITEM_LIST': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                cartItemsList: action.payload
            }
        }
        default:
            return state
    }
}