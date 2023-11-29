import React from 'react';

import { IProductArray } from 'interfaces/IProductArray.interface';
import ProductCard from 'components/ProductCard/ProductCard';

import advertising from 'assets/images/advertising.png';

import './catalog.scss';

const Catalog = (catalog: IProductArray) => {
  return (
    <div className="catalog">
      <img src={advertising} alt="@" className="catalog__advertising" />
      {catalog
        ? catalog.items.map((item) => {
            return (
              <ProductCard
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                key={item.id}
              />
            );
          })
        : 'Loading...'}
    </div>
  );
};

export default Catalog;
