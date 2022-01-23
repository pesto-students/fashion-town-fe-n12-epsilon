import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";
import ProductReducer from "./productReducer";
import OrderReducer from "./orderReducer";
import RedirectReducer from "./redirectReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["auth"],
};

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const cartPersistConfig = {
  key: "cart",
  storage: storage,
};

const rootReducer = combineReducers({
  Auth: persistReducer(authPersistConfig, AuthReducer),
  Product: ProductReducer,
  Cart: persistReducer(cartPersistConfig, CartReducer),
  Order: OrderReducer,
  Redirect: RedirectReducer,
});
export default persistReducer(rootPersistConfig, rootReducer);
