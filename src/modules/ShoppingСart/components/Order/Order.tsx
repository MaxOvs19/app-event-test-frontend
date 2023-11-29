import React from 'react';

import './order.scss';

interface IProps {
  total: number;
}

const Order = ({ total }: IProps) => {
  return (
    <tr className="order">
      <td>
        <p>Total:</p>
      </td>

      <td>
        <h4>{total} ₽</h4>
      </td>
    </tr>
  );
};

export default Order;
