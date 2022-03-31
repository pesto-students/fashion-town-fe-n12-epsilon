const initialState = {
  id: null,
  paymentDetails: null,
  orderItems: [],
  paymentLoader: false,
};

export default function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_ID": {
      return {
        ...state,
        id: action.payload,
      };
    }
    case "PAYMENT_DETAILS": {
      return {
        ...state,
        paymentDetails: action.payload,
      };
    }
    case "ORDER_ITEMS": {
      return {
        ...state,
        orderItems: action.payload,
      };
    }
    case "PAYMENT_LOADER": {
      return {
        ...state,
        paymentLoader: action.payload,
      };
    }
    default:
      return state;
  }
}
