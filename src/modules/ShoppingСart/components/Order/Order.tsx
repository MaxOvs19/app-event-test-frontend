import React from 'react';

import './order.scss';

interface IProps {
  total: number;
}

const Order = ({ total }: IProps) => {
  return <div>{total}</div>;
};

export default Order;
