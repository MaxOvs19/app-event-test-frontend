import { createSlice } from '@reduxjs/toolkit';
import { IProductArray } from 'interfaces/IProductArray.interface';

const initialState: IProductArray = {
  items: [],
};

export const shoppingСartSlise = createSlice({
  name: 'shoppingСart',
  initialState,
  reducers: {
    addProductInBacket: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProductInBacket, deleteProduct } = shoppingСartSlise.actions;

export const getShoppingСartItems = (state: any) => state.shoppingСart.items;

export default shoppingСartSlise.reducer;
