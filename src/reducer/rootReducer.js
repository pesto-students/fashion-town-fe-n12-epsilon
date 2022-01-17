import { combineReducers } from "redux";
import AuthReducer from "./auth";
import CartReducer from "./cart";
import ProductReducer from "./product";
import OrderReducer from "./order"
import RedirectReducer from "./redirect";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Product: ProductReducer,
  Cart: CartReducer,
  Order: OrderReducer,
  Redirect: RedirectReducer
});
export default rootReducer;
