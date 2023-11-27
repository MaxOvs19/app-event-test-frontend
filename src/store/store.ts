import { configureStore } from '@reduxjs/toolkit';
import products from 'modules/Catalog/store/catalogSlise';

export const store = configureStore({
  reducer: {
    products: products,
  },
});
