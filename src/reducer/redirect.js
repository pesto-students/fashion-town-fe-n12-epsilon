const initialState = {
  path: "/",
};

export default function RedirectReducer(state = initialState, action) {
  switch (action.type) {
    case "CURRENT_PATH": {
      console.log(action.payload);
      return {
        ...state,
        path: action.payload,
      };
    }
    default:
      return state;
  }
}
