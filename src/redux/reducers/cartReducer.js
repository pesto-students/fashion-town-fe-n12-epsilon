const initialState = {
  cart: [],
  status:0,
  address:null
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
    case "STATUS": {
      console.log(action.payload)
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload,
      };
    }
    case "ADDRESS": {
      console.log(action.payload)
      return {
        // Again, one less level of nesting to copy
        ...state,
        address: action.payload,
      };
    }
    default:
      return state;
  }
}
