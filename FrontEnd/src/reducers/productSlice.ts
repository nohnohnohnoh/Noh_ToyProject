import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { searchProduct } from "../actions/Actions";

const initialState = {
  productType: "",
  productSearch: "",
  toggleSearch: false,
  toggleAside: false,
  productData: null as any,
  error: null as any,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProductType: (state, action: PayloadAction<{ productType: string }>) => {
      state.productType = action.payload.productType;
    },
    setProductSearch: (
      state,
      action: PayloadAction<{ productSearch: string }>
    ) => {
      state.productSearch = action.payload.productSearch;
    },
    setToggleSearch: (
      state,
      action: PayloadAction<{ toggleSearch: boolean }>
    ) => {
      state.toggleSearch = action.payload.toggleSearch;
    },
    setToggleAside: (
      state,
      action: PayloadAction<{ toggleAside: boolean }>
    ) => {
      state.toggleAside = action.payload.toggleAside;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.productData = action.payload;
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const {
  setProductType,
  setToggleSearch,
  setToggleAside,
  setProductSearch,
} = productSlice.actions;
