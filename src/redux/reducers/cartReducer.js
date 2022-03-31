const initialState = {
  cart: [],
  status: 0,
  address: null,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "CART": {
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "STATUS": {
      console.log(action.payload);
      return {
        ...state,
        status: action.payload,
      };
    }
    case "ADDRESS": {
      console.log(action.payload);
      return {
        ...state,
        address: action.payload,
      };
    }
    default:
      return state;
  }
}
