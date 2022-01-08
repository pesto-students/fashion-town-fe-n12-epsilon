import { combineReducers } from "redux";
import AuthReducer from "./auth";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  Auth: AuthReducer,
});
export default rootReducer;
