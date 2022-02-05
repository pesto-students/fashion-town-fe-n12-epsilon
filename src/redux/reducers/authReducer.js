const initialState = {
  userName: null,
  storeAuth: null,
  authLoader: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_NAME": {
      return {
        ...state,
        userName: action.payload,
      };
    }
    case "STORE_AUTH": {
      return {
        ...state,
        storeAuth: action.payload,
      };
    }
    case "AUTH_LOADER": {
      return {
        ...state,
        authLoader: action.payload,
      };
    }
    default:
      return state;
  }
}
