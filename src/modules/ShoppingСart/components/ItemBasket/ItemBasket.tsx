import React from 'react';

import { IProduct } from 'interfaces/IProduct.interface';

const ItemBasket = ({ id, image, name, price }: IProduct) => {
  return (
    <tr className="item-basket">
      <td>
        <div>
          <img src={image} alt="@" />
          <p>{name}</p>
        </div>
      </td>
      <td>
        <p>{price}</p>
      </td>
    </tr>
  );
};

export default ItemBasket;
