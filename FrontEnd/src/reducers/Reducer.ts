import { combineReducers } from "redux";
import { authLoginSlice } from "./authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const reducer = combineReducers({
  auth: authLoginSlice.reducer,
});

export default persistReducer(persistConfig, reducer);
