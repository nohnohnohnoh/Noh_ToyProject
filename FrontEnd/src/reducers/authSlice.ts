import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "../actions/authAction";
import { PURGE } from "redux-persist";

const initialState = {
  authData: null as any,
  error: null as any,
};

export const authLoginSlice = createSlice({
  name: "authLoginSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        state.authData = action.payload;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(PURGE, () => initialState),
});
