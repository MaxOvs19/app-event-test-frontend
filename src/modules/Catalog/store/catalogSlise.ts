import { createSlice } from '@reduxjs/toolkit';
import { IProductArray } from 'interfaces/IProductArray.interface';

const initialState: IProductArray = {
  items: [],
};

export const catalogSlise = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadCatalog: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { loadCatalog } = catalogSlise.actions;

export const getCatalogProducts = (state: any) => state.products.items;

export default catalogSlise.reducer;
