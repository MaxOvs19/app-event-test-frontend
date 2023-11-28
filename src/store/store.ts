import { configureStore } from '@reduxjs/toolkit';
import products from 'modules/Catalog/store/catalogSlise';
import shoppingСart from 'modules/ShoppingСart/store/shoppingСartSlise';

export const store = configureStore({
  reducer: {
    products: products,
    shoppingСart: shoppingСart,
  },
});
