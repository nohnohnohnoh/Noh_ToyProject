import { combineReducers } from "redux";
import { authLoginSlice } from "./authSlice";
import { productSlice } from "./productSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "product"],
};

const reducer = combineReducers({
  auth: authLoginSlice.reducer,
  product: productSlice.reducer,
});

export default persistReducer(persistConfig, reducer);
