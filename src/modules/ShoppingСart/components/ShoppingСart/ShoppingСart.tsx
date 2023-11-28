import React from 'react';

import { useSelector } from 'react-redux';
import { getShoppingСartItems } from 'modules/ShoppingСart/store/shoppingСartSlise';
import { IProduct } from 'interfaces/IProduct.interface';

import './shoppingСart.scss';
import ItemBasket from '../ItemBasket/ItemBasket';

const ShoppingСart = () => {
  const basket = useSelector(getShoppingСartItems);
  let totalPrice = 0;
  console.log(basket);

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__basket">
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(basket) &&
              basket.map((item: IProduct, index) => {
                totalPrice += item.price;
                return (
                  <ItemBasket
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    key={item.id}
                  />
                );
              })}
          </tbody>
        </table>

        {Array.isArray(basket) && basket.length === 0 && (
          <div className="selected-products__basket-empty">
            <p>Корзина пуста :(</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingСart;
