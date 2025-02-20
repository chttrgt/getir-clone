import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { thunk } from "redux-thunk";
import CartItemsReducer from "./reducers/CartItem";

const rootReducer = combineReducers({
  cart: CartItemsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
