import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productType: "",
  toggleSearch: false,
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
  },
});

export const { setProductType, setToggleSearch } = productSlice.actions;
