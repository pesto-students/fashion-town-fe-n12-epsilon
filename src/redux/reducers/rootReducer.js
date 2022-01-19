import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";
import ProductReducer from "./productReducer";
import OrderReducer from "./orderReducer"
import RedirectReducer from "./redirectReducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Product: ProductReducer,
  Cart: CartReducer,
  Order: OrderReducer,
  Redirect: RedirectReducer
});
export default rootReducer;
