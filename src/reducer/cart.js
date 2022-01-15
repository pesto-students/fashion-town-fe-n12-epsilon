const initialState = {
  cart: []
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "CART": {
      console.log(action.payload)
      return {
        // Again, one less level of nesting to copy
        ...state,
        cart: action.payload,
      };
    }
    default:
      return state;
  }
}
