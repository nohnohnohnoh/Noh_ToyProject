import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../api";
import { AuthType } from "../types/type";

export const authLogin = createAsyncThunk(
  "LOGIN",
  async (params: AuthType, thunkAPI) => {
    try {
      const { data } = await defaultAxios.post("/auth/login", params);
      return data;
    } catch (error: any) {
      const { data } = error.response;
      return thunkAPI.rejectWithValue(data);
    }
  }
);
