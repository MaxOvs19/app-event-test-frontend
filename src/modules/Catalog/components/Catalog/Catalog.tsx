import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { loadBacket } from 'modules/ShoppingСart/store/shoppingСartSlise';

import { IProductArray } from 'interfaces/IProductArray.interface';
import ProductCard from 'components/ProductCard/ProductCard';

import advertising from 'assets/images/advertising.png';

import './catalog.scss';

const Catalog = (catalog: IProductArray) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBacket());
  }, []);

  return (
    <div className="catalog">
      <img src={advertising} alt="@" className="catalog__advertising" />
      {catalog
        ? catalog.items.map((item, index) => {
            return (
              <ProductCard
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                cardKey={item.id}
                key={index}
              />
            );
          })
        : 'Loading...'}
    </div>
  );
};

export default Catalog;
