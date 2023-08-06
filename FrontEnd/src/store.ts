import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistStore, PERSIST, PURGE } from "redux-persist";
import persistReducer from "./reducers/Reducer";

const logger = createLogger();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefalutMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefalutMiddleware({
          serializableCheck: {
            ignoredActions: [PERSIST, PURGE],
          },
        }).concat(logger)
      : getDefalutMiddleware({
          serializableCheck: {
            ignoredActions: [PERSIST, PURGE],
          },
        }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
