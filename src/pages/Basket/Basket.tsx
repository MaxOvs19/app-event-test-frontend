import React from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ShoppingСart from 'modules/ShoppingСart/components/ShoppingСart/ShoppingСart';

import './basket.scss';

const Basket = () => {
  return (
    <div className="basket-page container">
      <Header />
      <ShoppingСart />
      <Footer />
    </div>
  );
};

export default Basket;
