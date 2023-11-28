import React, { FunctionComponent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addProductInBacket,
  getShoppingСartItems,
} from 'modules/ShoppingСart/store/shoppingСartSlise';

import BaseButton from 'UI/BaseButton/BaseButton';
import swal from 'sweetalert';
import { IProduct } from 'interfaces/IProduct.interface';
import { useNavigate } from 'react-router-dom';

import './productCard.scss';

const ProductCard = (item: IProduct) => {
  const [buttonText, setButtonText] = useState<string>('Add to Basket');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const basket: Array<IProduct> = useSelector(getShoppingСartItems);

  function addProduct(elem: IProduct) {
    let coincidence = false;

    basket.forEach((item: IProduct, index: number) => {
      if (item.id === elem.id) {
        coincidence = true;

        navigate('/basket');
      }
    });

    if (!coincidence) {
      dispatch(addProductInBacket(item));
      swal({
        title: 'Product added to cart',
        icon: 'success',
        timer: 2000,
      });
      setButtonText('Checkout');
    }
  }

  return (
    <div className="product-card" key={item.id}>
      <img src={item.image} alt="@" className="product-card__image" />
      <div className="product-card__desc">
        <h2>{item.name}</h2>
        <p>{item.price.toFixed(2)} ₽</p>
        <BaseButton
          styles="product-card__desc-button"
          click={() => {
            addProduct(item);
          }}
        >
          {buttonText}
        </BaseButton>
      </div>
    </div>
  );
};

export default ProductCard;
