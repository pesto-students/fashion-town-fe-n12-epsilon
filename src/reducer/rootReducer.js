import { combineReducers } from "redux";
import AuthReducer from "./auth";
import CartReducer from "./cart";
import ProductReducer from "./product";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  Auth: AuthReducer,
  Product: ProductReducer,
  Cart: CartReducer
});
export default rootReducer;
