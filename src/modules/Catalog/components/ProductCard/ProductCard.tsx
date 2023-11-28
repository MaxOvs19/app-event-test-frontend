import React from 'react';

import BaseButton from 'UI/BaseButton/BaseButton';
import { IProduct } from 'interfaces/IProduct.interface';

import './productCard.scss';

const ProductCard = ({ id, image, name, price }: IProduct) => {
  return (
    <div className="product-card" key={id}>
      <img src={image} alt="@" className="product-card__image" />
      <div className="product-card__desc">
        <h2>{name}</h2>
        <p>{price} ₽</p>
        <BaseButton styles="product-card__desc-button">Add to Basket</BaseButton>
      </div>
    </div>
  );
};

export default ProductCard;
