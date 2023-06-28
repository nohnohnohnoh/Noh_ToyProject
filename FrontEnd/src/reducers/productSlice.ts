import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productType: "",
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProductType: (state, action: PayloadAction<{ productType: string }>) => {
      state.productType = action.payload.productType;
    },
  },
});

export const { setProductType } = productSlice.actions;
