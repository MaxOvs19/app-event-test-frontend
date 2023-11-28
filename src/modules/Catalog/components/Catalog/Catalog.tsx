import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProductArray } from 'interfaces/IProductArray.interface';
import { getProduct } from 'modules/Catalog/api/fetchGetProducts';
import { loadCatalog } from 'modules/Catalog/store/catalogSlise';
import ProductCard from '../../../../components/ProductCard/ProductCard';

import advertising from 'assets/images/advertising.png';

import './catalog.scss';

const Catalog = () => {
  const [dataCatalog, setDataCatalog] = useState<IProductArray>();
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct().then((res) => {
      setDataCatalog(res);
    });
  }, []);

  useEffect(() => {
    dispatch(loadCatalog(dataCatalog?.items));
  }, [dataCatalog]);

  return (
    <div className="catalog">
      <img src={advertising} alt="@" className="catalog__advertising" />
      {dataCatalog?.items.length
        ? dataCatalog.items.map((item) => {
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
