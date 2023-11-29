import React, { useState, useEffect } from 'react';

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
  const [buttonStatus, setButtonStatus] = useState(false);
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
      setButtonStatus(true);
      setButtonText('Place an order');
    }
  }

  useEffect(() => {
    basket.find((elem) => {
      if (elem.id === item.id) {
        setButtonStatus(true);
        setButtonText('Place an order');
      }
    });
  }, []);

  return (
    <div className="product-card">
      <img src={item.image} alt="@" className="product-card__image" />
      <div className="product-card__desc">
        <h2>{item.name}</h2>
        <p>{item.price.toFixed(2)} ₽</p>
        <BaseButton
          styles={buttonStatus ? 'product-card__desc-button selected' : 'product-card__desc-button'}
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
