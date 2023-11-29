import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'modules/ShoppingСart/store/shoppingСartSlise';
import { IProduct } from 'interfaces/IProduct.interface';

import deleteItem from 'assets/icons/delete.svg';

import './itemBasket.scss';
import swal from 'sweetalert';

const ItemBasket = ({ id, image, name, price }: IProduct) => {
  const dispatch = useDispatch();

  function deleteItemInBasket(id: number) {
    swal({
      title: 'The product has been removed',
      icon: 'success',
      timer: 1500,
    });
    dispatch(deleteProduct(id));
  }

  return (
    <tr className="item-basket">
      <td>
        <div className="item-basket__decs">
          <img src={image} alt="@" />
          <p>{name}</p>
        </div>
      </td>
      <td className="item-basket__price">
        <div>
          <p>{price} ₽</p>
          <img src={deleteItem} alt="@" onClick={() => deleteItemInBasket(id)} />
        </div>
      </td>
    </tr>
  );
};

export default ItemBasket;
