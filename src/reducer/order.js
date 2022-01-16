const initialState = {
  id: null,
  paymentDetails: null,
};

export default function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_ID": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        id: action.payload,
      };
    }
    case "PAYMENT_DETAILS": {
      return {
        // Again, one less level of nesting to copy
        ...state,
        paymentDetails: action.payload,
      };
    }
    default:
      return state;
  }
}
