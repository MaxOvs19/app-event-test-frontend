import React, { FunctionComponent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addProductInBacket,
  getShoppingСartItems,
} from 'modules/ShoppingСart/store/shoppingСartSlise';

import BaseButton from 'UI/BaseButton/BaseButton';
import { IProduct } from 'interfaces/IProduct.interface';

import './productCard.scss';

const ProductCard = (item: IProduct) => {
  const dispatch = useDispatch();
  const basket = useSelector(getShoppingСartItems);

  function addProduct(elem: IProduct) {
    let coincidence = false;

    if (Array.isArray(basket)) {
      basket.forEach((item: IProduct, index: number) => {
        if (item.id === elem.id) {
          coincidence = true;
        }
      });
    }

    if (!coincidence) {
      dispatch(addProductInBacket(item));
    }
  }

  return (
    <div className="product-card" key={item.id}>
      <img src={item.image} alt="@" className="product-card__image" />
      <div className="product-card__desc">
        <h2>{item.name}</h2>
        <p>{item.price} ₽</p>
        <BaseButton
          styles="product-card__desc-button"
          click={() => {
            addProduct(item);
          }}
        >
          Add to Basket
        </BaseButton>
      </div>
    </div>
  );
};

export default ProductCard;
