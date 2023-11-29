import React from 'react';

import { useSelector } from 'react-redux';
import { getShoppingСartItems } from 'modules/ShoppingСart/store/shoppingСartSlise';
import { IProduct } from 'interfaces/IProduct.interface';

import './shoppingСart.scss';
import ItemBasket from 'modules/ShoppingСart/components/ItemBasket/ItemBasket';
import Order from 'modules/ShoppingСart/components/Order/Order';

const ShoppingСart = () => {
  const basket: Array<IProduct> = useSelector(getShoppingСartItems);

  let totalPrice = 0;

  return (
    <div className="shopping-cart">
      {basket && basket.length === 0 ? (
        ''
      ) : (
        <div className="shopping-cart__basket">
          <table>
            <thead>
              <tr>
                <th>Products</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {basket &&
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
              <Order total={totalPrice} />
            </tbody>
          </table>
        </div>
      )}

      {basket && basket.length === 0 && (
        <div className="shopping-cart__empty">
          <p>Cart is empty :(</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingСart;
