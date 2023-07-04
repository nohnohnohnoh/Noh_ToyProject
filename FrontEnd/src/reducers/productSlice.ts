import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { searchProduct } from "../actions/Actions";

const initialState = {
  productType: "",
  toggleSearch: false,
  productSearch: "",
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
    setToggleSearch: (
      state,
      action: PayloadAction<{ toggleSearch: boolean }>
    ) => {
      state.toggleSearch = action.payload.toggleSearch;
    },
    setProductSearch: (
      state,
      action: PayloadAction<{ productSearch: string }>
    ) => {
      state.productSearch = action.payload.productSearch;
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

export const { setProductType, setToggleSearch, setProductSearch } =
  productSlice.actions;
