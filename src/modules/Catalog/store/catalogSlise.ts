import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const catalogSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadCatalog: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { loadCatalog } = catalogSlise.actions;

export const getCatalogProducts = (state: any) => state.products.products;

export default catalogSlise.reducer;
