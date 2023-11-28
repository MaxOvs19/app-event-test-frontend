import React from 'react';

import { IProduct } from 'interfaces/IProduct.interface';

import './itemBasket.scss';

const ItemBasket = ({ id, image, name, price }: IProduct) => {
  return (
    <tr className="item-basket">
      <td>
        <div className="item-basket__decs">
          <img src={image} alt="@" />
          <p>{name}</p>
        </div>
      </td>
      <td className="item-basket__price">
        <p>{price} ₽</p>
      </td>
    </tr>
  );
};

export default ItemBasket;
