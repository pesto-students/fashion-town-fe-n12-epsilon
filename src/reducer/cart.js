const initialState = {
  cart: [],
  isCartUpdated: false
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "CART_ITEM_LIST": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        cart: action.payload,
      };
    }
    case "CART_UPDATED": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        isCartUpdated: action.payload,
      };
    }
    default:
      return state;
  }
}
