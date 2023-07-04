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

export const searchProduct = createAsyncThunk(
  "SEARCH",
  async (query: string, thunkAPI) => {
    try {
      const { data } = await defaultAxios.get(
        `/product/search?search=${query}`
      );
      return data;
    } catch (error: any) {
      const { data } = error.response;
      return thunkAPI.rejectWithValue(data);
    }
  }
);
