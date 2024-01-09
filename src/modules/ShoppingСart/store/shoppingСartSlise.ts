import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from 'interfaces/IProduct.interface';
import { IProductArray } from 'interfaces/IProductArray.interface';

const initialState: IProductArray = {
  items: [],
};

export const shoppingСartSlise = createSlice({
  name: 'shoppingСart',
  initialState,
  reducers: {
    loadBacket: (state) => {
      const storage: Array<IProduct> = JSON.parse(localStorage.getItem('basket')!);
      if (storage?.length > 0) {
        console.log('storageSlice', storage);
        state.items = storage;
      }
    },
    addProductInBacket: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('basket', JSON.stringify(state.items));
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('basket', JSON.stringify(state.items));
    },
  },
});

export const { addProductInBacket, deleteProduct, loadBacket } = shoppingСartSlise.actions;

export const getShoppingСartItems = (state: any) => state.shoppingСart.items;

export default shoppingСartSlise.reducer;
